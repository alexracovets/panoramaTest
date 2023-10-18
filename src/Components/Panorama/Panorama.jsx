import React, { useEffect, useState } from 'react';
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { useDispatch } from 'react-redux';
import { loadMaterial } from "../../static/loadTexture.js";
import { loadMaterials } from "../../static/loadMaterials.js";

import Mask from "./Mask/Mask.jsx";
import Infos from "./Infos/Infos.jsx";
import Photo from "./Photo/Photo.jsx";
import Arrows from "./Arrows/Arrows.jsx";
import Loader from "./Loader/Loader.jsx";
import Camera from "./Camera/Camera.jsx";
import PopUpPanorama from './PopUpPanorama/PopUpPanorama.jsx';
import ClosePanorama from "./ClosePanorama/ClosePanorama.jsx";

import { setTimerReset } from '../../store/reducers/timer.js';

import s from "./Panorama.module.scss";

export default function MyScene() {
    const dispatch = useDispatch();
    const panorama = useSelector((state) => state.panorama);
    const [loader, setLoader] = useState(true);
    const [currentPortal, setCurrentPortal] = useState(null);
    const [texture, setTexture] = useState(null);
    const [textureMask, setTextureMask] = useState([]);
    const [textureInfo, setTextureInfo] = useState([]);
    const [portals, setPortals] = useState([]);
    const [findItem, setFindItem] = useState(null);

    useEffect(() => {
        loadMaterial(panorama.currentPanorama, setTexture, setLoader);
        setFindItem(panorama.panoramaInteractive.find(portal => portal.current === panorama.currentPanorama));
    }, [panorama]);

    useEffect(() => {
        if (currentPortal && currentPortal.mask && currentPortal.info) {
            loadMaterials(currentPortal.mask, setTextureMask, 0);
            loadMaterials(currentPortal.info, setTextureInfo, 1);
        }
        currentPortal && setPortals(currentPortal.other)
    }, [currentPortal]);

    useEffect(() => {
        setCurrentPortal(findItem);
    }, [findItem]);

    const handleResetTimer = () => {
        dispatch(setTimerReset());
    };

    return (
        <>
            {
                loader ? <Loader /> : null
            }
            <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }} className={s.panorama} color="white" onMouseMove={() => handleResetTimer()}>
                <OrbitControls target={[0, 0, 0]} maxPolarAngle={Math.PI / 1.6} minPolarAngle={Math.PI / 2.9} />
                <ambientLight // eslint-disable-next-line react/no-unknown-property 
                    intensity={1} />
                <Photo texture={texture} />
                <Mask currentPortal={currentPortal} textureMask={textureMask} />
                <Infos currentPortal={currentPortal} textureInfo={textureInfo} />
                <Arrows currentPortal={currentPortal} portals={portals} setLoader={setLoader} loader={loader} />
                <Camera loader={loader} />
            </Canvas>
            <PopUpPanorama findItem={findItem} />
            <ClosePanorama />
        </>
    );
}

