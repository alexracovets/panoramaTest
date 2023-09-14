import 'aframe';
import 'aframe-event-set-component';
import 'aframe-orbit-controls';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Scene } from 'aframe-react';

import { setClosePanorama, setPanoramaImage } from '../../store/reducers/panorama.js';
import { setReset, setDefaultPosition } from '../../store/reducers/camera.js';
import { setTimerStop } from '../../store/reducers/timer.js';

import s from "./Panorama.module.scss";

export default function MyScene() {
    const dispatch = useDispatch();
    const panorama = useSelector((state) => state.panorama);
    const [texture, setTexture] = useState(null);

    useEffect(() => {
        setTexture(panorama.currentPanorama);
    }, [panorama.currentPanorama]);

    const closePanorama = () => {
        dispatch(setClosePanorama());
        dispatch(setTimerStop());
        dispatch(setReset());
        dispatch(setDefaultPosition());
    };

    const foundPortals = panorama.panoramaInteractive.portals.find(portal => portal.current === panorama.currentPanorama).other;
    const OnPortal = (portal) => {
        dispatch(setPanoramaImage(portal));
    }

    return (
        <>
            <Scene cursor="rayOrigin: mouse" raycaster="objects: .cursor-listener" class="panorama" vr-mode-ui="enabled: false" exit-vr>
                <a-camera orbit-controls="target: 0 0 0; enableDamping: true; dampingFactor: 0.25; rotateSpeed: 0.08">
                    <a-sky src={texture} rotation="0 -130 0" crossorigin="anonymous"></a-sky>
                    {
                        panorama.panoramaInteractive.mask.length > 0 && (
                            panorama.panoramaInteractive.mask.map((item, index) => {
                                return (
                                    <a-image
                                        key={index}
                                        class="cursor-listener"
                                        src={item.image}
                                        width={item.width}
                                        height={item.height}
                                        scale={item.scale}
                                        rotation={item.rotation}
                                        position={item.position}
                                        opacity="0"
                                        event-set__mouseenter="opacity: 1"
                                        event-set__mouseleave="opacity: 0"
                                    ></a-image>
                                );
                            })
                        )
                    }
                    {
                        panorama.panoramaInteractive.info.length > 0 && (
                            panorama.panoramaInteractive.info.map((item, index) => {
                                return (
                                    <a-image
                                        key={index}
                                        class="annotation"
                                        src={item.image}
                                        position={item.position}
                                        rotation={item.rotation}
                                        scale={item.scale}
                                        animation="property: scale; dir: alternate; dur: 500; to: 35 35 1; loop: true"
                                    ></a-image>
                                );
                            })
                        )
                    }
                    {
                        foundPortals.length > 0 && (
                            foundPortals.map((item, index) => {
                                return (
                                    <a-entity
                                        key={index}
                                        position={item.position}
                                        scale={item.scale}
                                        rotation={item.rotation}
                                        onClick={() => OnPortal(item.portal)}
                                        class="cursor-listener"
                                        geometry="primitive: plane; skipCache: true; height: 2.5; width: 1.4"
                                        material="transparent: true; opacity: 0"
                                    >
                                        <a-image
                                            src="img/arrow.svg"
                                            position="0 -0.6 0"
                                            animation="property: position; dur: 1000; to: 0 0.8 0; loop: true;  easing: easeOutQuad;"
                                        ></a-image>
                                        <a-image
                                            src="img/arrow_transparent.svg"
                                            position="0 0.1 0.1"
                                            opacity="0"
                                            animation="property: opacity; dur: 1000; to: 1; loop: true; easing: easeInQuad;"
                                        >
                                        </a-image>
                                        <a-image
                                            src="img/arrow_transparent.svg"
                                            position="0 -0.6 0.2"
                                            opacity="0"
                                            animation="property: opacity; dur: 1000; to: 0.8; loop: true; easing: easeOutQuad;"
                                        ></a-image>
                                    </a-entity>
                                );
                            })
                        )
                    }
                </a-camera>
            </Scene >
            <i className={s.panorama__close + ' bi bi-x'} onClick={closePanorama}></i>
        </>
    );
} 
