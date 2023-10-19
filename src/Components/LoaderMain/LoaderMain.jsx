
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import s from './LoaderMain.module.scss';

import { setMainLoader } from '../../store/reducers/panorama.js';

LoaderMain.propTypes = {
    setIsFirstTextureLoaded: PropTypes.func,
    texture: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default function LoaderMain({ setIsFirstTextureLoaded, texture, isLoading }) {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const videoRef = useRef(null);
    const dispatch = useDispatch();
    const [videoEnd, setVideoEnd] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        if ((texture && videoEnd)) {
            setIsFirstTextureLoaded(false);
        }
    }, [texture, videoEnd]);

    const handleVideoEnded = () => {
        const handleVideoStart = () => {
            setTimeout(() => {
                setVideoEnd(true);
                dispatch(setMainLoader(true))
            }, 500);
        };

        if ((texture !== null) || isLoading) {
            handleVideoStart();
        }
    }

    return (
        <div className={s.loader}>
            <div className={s.video}>
                <video src={`/video/loader/${i18n.language}.mp4`} autoPlay ref={videoRef} onLoadedData={() => setVideoLoaded(true)} onEnded={handleVideoEnded}></video>
                {videoLoaded && (
                    <div className={s.text}>
                        {t("loadTour")}
                    </div>
                )}
            </div>
        </div>
    );
}
