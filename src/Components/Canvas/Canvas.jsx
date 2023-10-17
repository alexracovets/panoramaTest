import React, { Suspense } from 'react';
import { ResizeObserver } from '@juggle/resize-observer'
import { Clone, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useSelector } from 'react-redux';
import { WebGLRenderer } from 'three';
const WebGL2Renderer = WebGLRenderer;

import Annotations from '../Annotations/Annotations';
import MyCamera from '../MyCamera/MyCamera';

export default function CanvasContainer() {
    // Завантаження моделі
    const { scene } = useGLTF('./models/main.glb');
    // Початкова позиція камери
    const defaultPosition = useSelector((state) => state.camera.defaultPosition);
    // Масштабування моделі
    const scaling = useSelector((state) => state.camera.scaling);

    return (
        <Suspense fallback={null}>
            <Canvas
                camera={{ position: defaultPosition }}
                resize={{ polyfill: ResizeObserver }}
                gl={{ renderer: new WebGL2Renderer() }}
            >
                {/* eslint-disable-next-line react/no-unknown-property */}
                <ambientLight intensity={1} />
                {/* eslint-disable-next-line react/no-unknown-property */}
                <directionalLight intensity={0.5} />
                <Clone object={scene} scale={scaling} position={[0, -2, 0]} />
                <Annotations />
                <MyCamera />
            </Canvas>
        </Suspense>
    );
}
