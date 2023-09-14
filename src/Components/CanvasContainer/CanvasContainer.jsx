import { Suspense } from 'react';
import { useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { ResizeObserver as Resize } from '@juggle/resize-observer';

import Logo from '../Logo/Logo';
import Loader from '../Loader/Loader';
import IFrame from '../IFrame/IFrame';
import Canvas from '../Canvas/Canvas';
import PopUpPoints from '../PopUpPoints/PopUpPoints';
import TimerToBack from '../TimerToBack/TimerToBack';

import s from './CanvasContainer.module.scss'
import Panorama from '../Panorama/Panorama';

export default function CanvasContainer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isPanorama = useSelector((state) => state.panorama.isPanorama);

    useEffect(() => {
        const resizeObserver = new Resize(entries => {
            const newWidth = entries[0].contentRect.width;
            setWindowWidth(newWidth);
        });

        resizeObserver.observe(document.body);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className={s.canvas__container}>
            <Logo />
            <IFrame />
            <Suspense fallback={<Loader />}>
                <Canvas />
            </Suspense>
            {
                isPanorama &&
                <Suspense fallback={<Loader />}>
                    <Panorama />
                </Suspense>
            }
            <PopUpPoints />
            {windowWidth > 1024 && <TimerToBack />}
        </div>
    )
}