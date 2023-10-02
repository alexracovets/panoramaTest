import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { useFrame } from '@react-three/fiber';
import Circle from '../Circle/Circle';
import * as THREE from 'three';
import { gsap } from 'gsap';

import { useTranslation } from "react-i18next";

import { setAnnotationPosition } from '../../store/reducers/camera.js';
import { setAnnotationData, setFrameLink, setMusic } from '../../store/reducers/annotationContent.js';
import { setPanoramaImage, setPanoramaInteractive } from '../../store/reducers/panorama';

export default function Annotations() {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const annotationList = useSelector((state) => state.annotations.annotation);
    const menuBtn = useSelector((state) => state.menu.btn);

    const ClickHandler = (event, item) => {
        event.stopPropagation();
        dispatch(setPanoramaImage(item.panoramaStart));
        dispatch(setPanoramaInteractive(item.panoramaInteractive));
        dispatch(setAnnotationPosition(item));
        dispatch(setAnnotationData(item));
        dispatch(setFrameLink(item[`link_${i18n.language}`]));
        dispatch(setMusic(item.music));
    }

    const handlePointerOver = (event) => {
        event.stopPropagation();
        document.body.style.cursor = 'pointer';
    };

    const handlePointerOut = (event) => {
        event.stopPropagation();
        document.body.style.cursor = 'auto';
    };

    return (
        <>
            {
                //Вивід всії анотацій
                annotationList.map((item, index) => {
                    const texture = new THREE.TextureLoader().load(
                        `data:image/svg+xml,
                    ${encodeURIComponent(
                            ReactDOMServer.renderToStaticMarkup(
                                <Circle colors={item.color} />
                            )
                        )}`
                    ); 
                    const singleTag = (object, color) => {
                        const findedItem = object.find(mass => mass.color === color[0]);
                        return findedItem.annotationImage;
                    }
                    const loader = new THREE.TextureLoader();
                    const showSVG = item.color.length === 1 ? singleTag(menuBtn, item.color) : '';
                    const texture2 = loader.load(showSVG);
                    texture2.colorSpace = THREE.SRGBColorSpace;
                    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
                    const spriteMaterial2 = new THREE.SpriteMaterial({ map: texture2 });
                    const isVisible = item.color.length !== 0;

                    //Пульсація
                    const scaleAnnotation = [1, 2.6, 1];
                    const scaleAnnotationRef = useRef(scaleAnnotation);
                    const spriteRef = useRef();
                    const spriteRef2 = useRef();

                    useFrame(() => {
                        if (spriteRef.current && spriteRef2.current) {
                            spriteRef.current.scale.set(...scaleAnnotationRef.current);
                            spriteRef2.current.scale.set(...scaleAnnotationRef.current);
                        }
                    });

                    if (item.color.length !== 0) {
                        gsap.to(scaleAnnotationRef.current, {
                            duration: 1,
                            ease: "power1.inOut",
                            0: 1.3,
                            1: 3,
                            2: 1.3,
                            repeat: -1,
                            yoyo: true
                        });
                    }
                    return (
                        <group key={index}>
                            {/* Відмальвка маркера */}
                            <sprite
                                ref={spriteRef}
                                onClick={(event) => ClickHandler(event, item)}
                                onPointerOver={(event) => handlePointerOver(event)}
                                onPointerOut={(event) => handlePointerOut(event)}
                                scale={scaleAnnotation}
                                // eslint-disable-next-line react/no-unknown-property
                                material={spriteMaterial} position={item.position} visible={isVisible}
                            />
                            {/* Відмальвка svg на маркеру */}
                            <sprite
                                ref={spriteRef2}
                                onClick={(event) => ClickHandler(event, item)}
                                onPointerOver={(event) => handlePointerOver(event)}
                                onPointerOut={(event) => handlePointerOut(event)}
                                scale={scaleAnnotation}
                                // eslint-disable-next-line react/no-unknown-property
                                material={spriteMaterial2} position={item.position} visible={isVisible}
                            />
                        </group>
                    );
                })
            }
        </>
    );
}
