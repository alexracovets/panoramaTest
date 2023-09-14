import React, { Suspense} from 'react';
import { ResizeObserver } from '@juggle/resize-observer'
import { Clone, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useSelector } from 'react-redux';

import Annotations from '../Annotations/Annotations';
import MyCamera from '../MyCamera/MyCamera';

export default function CanvasContainer() {
    // Отримиємо шлях до моделі
    // const [modelPath, setModelPath] = useState('./models/main.glb');
    // // Перевірка на IOS
    // useEffect(() => {
    //     const isIOSMobile = /iPhone|iPod|iPad/.test(navigator.userAgent) && !window.MSStream;
    //     if (isIOSMobile) {
    //         setModelPath('./models/mobile.glb');
    //     }
    // }, []);

    // Завантаження моделі
    const { scene } = useGLTF('./models/main.glb');

    // Початкова позиція камери
    const defaultPosition = useSelector((state) => state.camera.defaultPosition);
    // Масштабування моделі
    const scaling = useSelector((state) => state.camera.scaling);

    return (
        <Suspense fallback={null}>
            <Canvas camera={{ position: defaultPosition }} resize={{ polyfill: ResizeObserver }}>
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
