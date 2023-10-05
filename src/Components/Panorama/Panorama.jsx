import React, { useEffect, useState } from 'react';
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";

import { loadMaterial } from "../../static/loadTexture.js";
import { loadMaterials } from "../../static/loadMaterials.js";

import Arrows from "./Arrows/Arrows.jsx";
import Infos from "./Infos/Infos.jsx";
import Mask from "./Mask/Mask.jsx";
import ClosePanorama from "./ClosePanorama/ClosePanorama.jsx";

import Photo from "./Photo/Photo.jsx";
import Loader from "./Loader/Loader.jsx";
import Camera from "./Camera/Camera.jsx";
import PopUpPanorama from './PopUpPanorama/PopUpPanorama.jsx';

import s from "./Panorama.module.scss";
// import { useControls } from 'leva';
// import { Arrow } from './Arrows/Arrow/Arrow.jsx';

export default function MyScene() {
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

    // const control = useControls({
    //     positionX: 26,
    //     positionY: -9,
    //     positionZ: -141,
    //     rotationX: 0,
    //     rotationY: 3.14,
    //     rotationZ: 0,
    //     scale: 25,
    // })


    // const [meInfo, setMeInfo] = useState([]);

    // useEffect(() => {
    //     loadMaterial("/panorams/info.svg", setMeInfo, setLoader);
    // }, [currentPortal]);

    return (
        <>
            {
                loader ? <Loader /> : null
            }
            <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }} className={s.panorama} color="white" >
                <OrbitControls target={[0, 0, 0]} maxPolarAngle={Math.PI / 1.6} minPolarAngle={Math.PI / 2.9} />
                <ambientLight // eslint-disable-next-line react/no-unknown-property 
                    intensity={1} />
                <Photo texture={texture} />
                <Mask currentPortal={currentPortal} textureMask={textureMask} />
                <Infos currentPortal={currentPortal} textureInfo={textureInfo} />
                <Arrows currentPortal={currentPortal} portals={portals} setLoader={setLoader} loader={loader} />
                <Camera loader={loader} />
                {/* {
                    meInfo && <Plane
                        material={meInfo}
                        position={[control.positionX, control.positionY, control.positionZ]}
                        rotation={[control.rotationX, control.rotationY, control.rotationZ]}
                        scale={[control.scale, control.scale, 1]}
                    />
                } */}
            </Canvas>
            <PopUpPanorama findItem={findItem} />
            <ClosePanorama />
        </>
    );
}

