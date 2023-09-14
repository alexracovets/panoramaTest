import React from 'react';
import { useEffect, useRef, useCallback  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrbitControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

import { setPositionUnChanged } from '../../store/reducers/camera.js';

export default function MyCamera() {

    // Отримуємо дані зі стору
    const dispatch = useDispatch();
    const cameraPosition = useSelector((state) => state.camera.cameraPosition);
    const maxDistance = useSelector((state) => state.camera.maxDistance);
    const minDistance = useSelector((state) => state.camera.minDistance);
    const targetPoint = useSelector((state) => state.camera.targetPoint);
    const isPositionChanged = useSelector((state) => state.camera.isPositionChanged);

    // Отримуємо дані камери
    const { camera, gl } = useThree();
    const controls = useRef();

    // Посилання на анімаційні властивості
    const animatableProps = useRef({
        maxDistance: maxDistance,
        targetPosition: { x: targetPoint[0], y: targetPoint[1], z: targetPoint[2] }
    });

    // Відключення контекстного меню
    const handleContextMenu = useCallback(() => {
        dispatch(setPositionUnChanged());
    }, [dispatch]);

    useEffect(() => {
        const domElement = gl.domElement;
        domElement.addEventListener('contextmenu', handleContextMenu);
        return () => {
            domElement.removeEventListener('contextmenu', handleContextMenu);
        };
    }, [gl.domElement, handleContextMenu]);

    // Анімація камери на кожному кадрі
    useFrame(() => {
        if (controls.current) {
            controls.current.update();
            controls.current.maxDistance = animatableProps.current.maxDistance;
        }
        isPositionChanged && controls.current.target.set(animatableProps.current.targetPosition.x, animatableProps.current.targetPosition.y, animatableProps.current.targetPosition.z);
    });

    // Анімація камери при зміні позиції
    useEffect(() => {

        // Вимикаємо керування камерою
        controls.current.enabled = false;

        // Анімація позиції камери
        gsap.to(camera.position, {
            duration: 1,
            x: cameraPosition[0],
            y: cameraPosition[1],
            z: cameraPosition[2],
            ease: "sine.inOut",
            onUpdate: () => {
                controls.current.update();
            },
            onComplete: () => {
                controls.current.enabled = true;
            }

        });

        // Анімація максимальної дистанції камери
        gsap.to(animatableProps.current, {
            maxDistance: maxDistance,
            duration: 1,
            ease: "sine.inOut"
        });

        // Анімація цільової точки камери
        gsap.to(animatableProps.current.targetPosition, {
            duration: 1,
            x: targetPoint[0],
            y: targetPoint[1],
            z: targetPoint[2],
            ease: "sine.inOut"
        });

    },  [cameraPosition, maxDistance, targetPoint, camera.position]);

    return (
        <OrbitControls
            ref={controls}
            args={[camera, gl.domElement]}
            rotateSpeed={0.3}
            zoomSpeed={3}
            panSpeed={0.8}
            minPolarAngle={-Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            minDistance={minDistance}
            onContextMenu={() => handleContextMenu()}
        />
    );
}
