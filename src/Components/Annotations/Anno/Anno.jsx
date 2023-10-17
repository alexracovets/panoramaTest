
import { gsap } from 'gsap';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import React, { useMemo, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useFrame } from '@react-three/fiber';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { setAnnotationPosition } from '../../../store/reducers/camera.js';
import { setPanoramaImage, setPanoramaInteractive } from '../../../store/reducers/panorama';
import { setAnnotationData, setFrameLink, setMusic } from '../../../store/reducers/annotationContent.js';
import Circle from '../Circle/Circle';

Anno.propTypes = {
    item: PropTypes.object.isRequired,
};
export default function Anno({ item }) {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const menuBtn = useSelector((state) => state.menu.btn);

    const handleAnnotationClick = () => {
        dispatch(setPanoramaImage(item.panoramaStart));
        dispatch(setPanoramaInteractive(item.panoramaInteractive));
        dispatch(setAnnotationPosition(item));
        dispatch(setAnnotationData(item));
        dispatch(setFrameLink(item[`link_${i18n.language}`]));
        dispatch(setMusic(item.music));
    };

    const circleMarkup = useMemo(() => {
        return encodeURIComponent(ReactDOMServer.renderToStaticMarkup(<Circle colors={item.color} />));
    }, [item.color]);

    const texture = new THREE.TextureLoader().load(
        `data:image/svg+xml, ${circleMarkup}`,
        (loadedTexture) => {
            loadedTexture.image.levels = 1;
        },
        undefined,
        (error) => {
            console.error('Помилка завантаження текстури:', error);
        }
    );

    const singleTag = (object, color) => {
        const findedItem = object.find(mass => mass.color === color[0]);
        return findedItem.annotationImage;
    }

    const loader = new THREE.TextureLoader();
    const showSVG = item.color.length === 1 ? singleTag(menuBtn, item.color) : '';
    const texture2 = loader.load(showSVG);
    const isVisible = item.color.length !== 0;
    texture2.colorSpace = THREE.SRGBColorSpace;
    texture2.image = { levels: 1 };

    //Пульсація
    const scaleAnnotation = [1, 2.6, 1];
    const scaleAnnotationRef = useRef(scaleAnnotation);
    const spriteRef = useRef();
    const spriteRef2 = useRef();

    const updateSpriteScale = () => {
        if (spriteRef.current && spriteRef2.current) {
            spriteRef.current.scale.set(...scaleAnnotationRef.current);
            spriteRef2.current.scale.set(...scaleAnnotationRef.current);
        }
    };

    useFrame(updateSpriteScale);

    const handlePointerOver = (event) => {
        event.stopPropagation();
        document.body.style.cursor = 'pointer';
    };
    
    const handlePointerOut = (event) => {
        event.stopPropagation();
        document.body.style.cursor = 'auto';
    };

    const pulseAnimation = {
        duration: 1,
        ease: "power1.inOut",
        0: 1.3,
        1: 3,
        2: 1.3,
        repeat: -1,
        yoyo: true
    };

    if (item.color.length !== 0) {
        gsap.to(scaleAnnotationRef.current, pulseAnimation);
    }

    return (
        <>
            {
                texture && texture2 && <group>
                    <sprite
                        ref={spriteRef}
                        onClick={(event) => handleAnnotationClick(event, item)}
                        onPointerOver={(event) => handlePointerOver(event.nativeEvent)}
                        onPointerOut={(event) => handlePointerOut(event.nativeEvent)}
                        scale={scaleAnnotation}
                        // eslint-disable-next-line react/no-unknown-property
                        material={new THREE.SpriteMaterial({ map: texture })}
                        // eslint-disable-next-line react/no-unknown-property
                        position={item.position} visible={isVisible}
                    />
                    <sprite
                        ref={spriteRef2}
                        onClick={(event) => handleAnnotationClick(event, item)}
                        onPointerOver={(event) => handlePointerOver(event.nativeEvent)}
                        onPointerOut={(event) => handlePointerOut(event.nativeEvent)}
                        scale={scaleAnnotation}
                        // eslint-disable-next-line react/no-unknown-property
                        material={new THREE.SpriteMaterial({ map: texture2 })}
                        // eslint-disable-next-line react/no-unknown-property
                        position={item.position} visible={isVisible}
                    />
                </group>
            }
        </>
    );
}
