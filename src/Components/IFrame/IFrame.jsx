import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Loader from '../Loader/Loader';
import { useTranslation } from "react-i18next";
import SoundOn from './sound/on.svg';
import SoundOff from './sound/off.svg';

import { setIsIFrame, setDefaultPosition } from "../../store/reducers/camera.js";
import { setTimerStop } from '../../store/reducers/timer.js';
import { updateLinkDisable } from '../../store/reducers/menu.js';

import s from "./IFrame.module.scss";

export default function IFrame() {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const annotation = useSelector((state) => state.annotation);
    const frame = useSelector((state) => state.camera.isIFrame);
    const music = useSelector((state) => state.annotation.music);
    const isPanorama = useSelector((state) => state.panorama.isPanorama);
    const [isLoading, setIsLoading] = useState(true);
    const [audioObject, setAudioObject] = useState(null);
    const [isSoundOn, setIsSoundOn] = useState(true);
    const iframeRef = useRef(null);

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
    };

    const handleIframeLoad = () => {
        setIsLoading(false);

        if (music > 0 && frame && audioObject && !isLoading) {
            audioObject.play();
        }
    };

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
        if (music > 0) {
            if (frame && audioObject && !isLoading) {
                setTimeout(() => {
                    audioObject.play();
                }, 1000);
            } else if (!frame && audioObject) {
                audioObject.pause();
                audioObject.currentTime = 0;
                setIsLoading(true);
            }
        }
    }, [frame, audioObject, isLoading, music]);

    return (
        <>
            {frame && !isPanorama && <div className={s.iframe__wrapper}>
                {music > 0 && (
                    <div className={s.iframe__soundButton} onClick={toggleSound}>
                        <img src={isSoundOn ? SoundOn : SoundOff} alt="Sound" />
                    </div>
                )}
                <i className={s.iframe__close + ' bi bi-x'} onClick={closeIFrame}></i>
                {isLoading && <Loader />}
                <iframe ref={iframeRef} src={annotation.link} onLoad={handleIframeLoad}></iframe>
            </div>}
        </>
    );
}
