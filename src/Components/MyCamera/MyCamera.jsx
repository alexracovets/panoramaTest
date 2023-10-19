import React, { useState } from 'react';
import { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrbitControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import * as THREE from 'three';

import { setPositionUnChanged } from '../../store/reducers/camera.js';

export default function MyCamera() {
    const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());

    const updateLastInteractionTime = () => {
        setLastInteractionTime(Date.now());
    };

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

    const updateTimerAndDisableAutoRotate = () => {
        updateLastInteractionTime();
        controls.current.autoRotate = false;
    };

    const handleContextMenu = useCallback(() => {
        dispatch(setPositionUnChanged());
        updateTimerAndDisableAutoRotate();
    }, [dispatch]);

    const handleCanvasInteraction = useCallback(() => {
        updateTimerAndDisableAutoRotate();
    }, []);

    useEffect(() => {
        const domElement = gl.domElement;
        domElement.addEventListener('contextmenu', handleContextMenu);
        return () => {
            domElement.removeEventListener('contextmenu', handleContextMenu);
        };
    }, [gl.domElement, handleContextMenu]);

    useFrame(() => {
        if (isPositionChanged) {
            controls.current.target.lerp(
                new THREE.Vector3(
                    animatableProps.current.targetPosition.x,
                    animatableProps.current.targetPosition.y,
                    animatableProps.current.targetPosition.z
                ), 0.1);
        }
        const timeSinceInteraction = Date.now() - lastInteractionTime;
        if (timeSinceInteraction > 5000) {
            controls.current.autoRotate = true;
        } else {
            controls.current.autoRotate = false;
        }
    });

    useEffect(() => {
        const domElement = gl.domElement;
        domElement.addEventListener('contextmenu', handleContextMenu);
        domElement.addEventListener('pointerdown', handleCanvasInteraction);

        return () => {
            domElement.removeEventListener('contextmenu', handleContextMenu);
            domElement.removeEventListener('pointerdown', handleCanvasInteraction);
        };
    }, [gl.domElement, handleContextMenu, handleCanvasInteraction]);

    // Анімація камери при зміні позиції
    useEffect(() => {

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

    }, [cameraPosition, maxDistance, targetPoint, camera.position]);

    return (
        <OrbitControls
            ref={controls}
            args={[camera, gl.domElement]}
            rotateSpeed={0.3}
            autoRotate={false}
            zoomSpeed={3}
            panSpeed={0.8}
            minPolarAngle={-Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            minDistance={minDistance}
            onContextMenu={() => handleContextMenu()}
        />
    );
}
