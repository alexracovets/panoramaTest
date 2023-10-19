import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import SoundOn from './sound/on.svg';
import SoundOff from './sound/off.svg';

import { setIsIFrame, setDefaultPosition } from "../../store/reducers/camera.js";
import { setTimerStop, setTimerReset } from '../../store/reducers/timer.js';
import { updateLinkDisable } from '../../store/reducers/menu.js';
import { setMainLoader } from '../../store/reducers/panorama.js';

import s from "./IFrame.module.scss";
import LoaderMain from '../LoaderMain/LoaderMain';

export default function IFrame() {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const annotation = useSelector((state) => state.annotation);
    const frame = useSelector((state) => state.camera.isIFrame);
    const music = useSelector((state) => state.annotation.music);
    const isPanoramaPopUp = useSelector((state) => state.panorama.isPopUp);
    const isPanorama = useSelector((state) => state.panorama.isPanorama);
    const [isLoading, setIsLoading] = useState(true);
    const [audioObject, setAudioObject] = useState(null);
    const [isSoundOn, setIsSoundOn] = useState(true);
    const iframeRef = useRef(null);
    const mainLoader = useSelector((state) => state.panorama.mainLoader);

    const toggleSound = () => {
        if (audioObject) {
            if (audioObject.paused) {
                audioObject.play();
            } else {
                audioObject.pause();
            }
        }
    };

    const closeIFrame = () => {
        if (audioObject) {
            audioObject.pause();
            audioObject.currentTime = 0;
        }

        dispatch(setIsIFrame(false));
        dispatch(setTimerStop());
        dispatch(setDefaultPosition());
        dispatch(updateLinkDisable());
        dispatch(setMainLoader(false))
    };

    const handleIframeLoad = () => {
        setIsLoading(false);

        if (music > 0 && frame && audioObject && !isLoading) {
            audioObject.play();
        }
    };

    useEffect(() => {
        isPanoramaPopUp ? audioObject.pause() : null;

    }, [isPanoramaPopUp])

    useEffect(() => {
        if (music > 0) {
            const newAudioObject = new Audio(`./music/${music}/${i18n.language}.mp3`);
            setAudioObject(newAudioObject);
        }
    }, [music, i18n.language]);

    useEffect(() => {
        if (audioObject) {
            audioObject.addEventListener("ended", () => {
                audioObject.currentTime = 0;
                setIsSoundOn(true);
            });
            audioObject.addEventListener("play", () => {
                setIsSoundOn(false);
            });
            audioObject.addEventListener("pause", () => {
                setIsSoundOn(true);
            });
        }
    }, [audioObject]);

    useEffect(() => {
        if ((music > 0) && mainLoader) {
            if ((frame || isPanorama) && audioObject) {
                setTimeout(() => {
                    audioObject.play();
                }, 1000);
            } else if (!frame && audioObject && !isPanorama) {
                audioObject.pause();
                audioObject.currentTime = 0;
                setIsLoading(true);
            }
        }
    }, [frame, isPanorama, mainLoader]);

    useEffect(() => {
        if (!mainLoader) {
            if (audioObject) {
                audioObject.pause();
                audioObject.currentTime = 0;
                setIsLoading(true);
            }
        }
    }, [mainLoader])

    const [lastResetTime, setLastResetTime] = useState(0);

    const handleMouseMove = () => {
        const currentTime = Date.now();
        if (currentTime - lastResetTime > 1000) {  // Перевірка, чи пройшло більше 1с  
            dispatch(setTimerReset());
            setLastResetTime(currentTime);
        }
    };
    return (
        <>
            {music > 0 && (isPanorama || frame) && mainLoader && (
                <div className={s.iframe__soundButton} onClick={toggleSound}>
                    <img src={isSoundOn ? SoundOn : SoundOff} alt="Sound" />
                </div>
            )}
            {frame && !isPanorama && <div className={s.iframe__wrapper} onMouseMove={handleMouseMove}>
                {mainLoader ? null : <LoaderMain isLoading={isLoading} />}
                <i className={s.iframe__close + ' bi bi-x'} onClick={closeIFrame}></i>
                <iframe ref={iframeRef} src={annotation.link} onLoad={handleIframeLoad}></iframe>
            </div>}
        </>
    );
}
