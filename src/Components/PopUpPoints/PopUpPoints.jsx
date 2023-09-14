import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";


import { setPointActive, setIsIFrame, setReset, setDefaultPosition } from '../../store/reducers/camera.js';
import { setPanorama } from '../../store/reducers/panorama';
import { setTimerInitial } from '../../store/reducers/timer.js';
import s from './PopUpPoints.module.scss';

export default function PopUpPoints() {
    const { t } = useTranslation('');
    // Отримуємо дані зі стору
    const dispatch = useDispatch();

    const annoContent = useSelector((state) => state.annotation);
    const pointActive = useSelector((state) => state.camera.isPointActive);


    // Закриття Поп-апу
    const closePopUp = () => {
        dispatch(setPointActive(false));
        dispatch(setReset());
        dispatch(setDefaultPosition());
    }

    // Відкриття IFrame
    const openIFrame = () => {
        dispatch(setPointActive(false));
        dispatch(setTimerInitial());

        if (annoContent.panorama === true) {
            dispatch(setPanorama(true));
        } else {
            dispatch(setIsIFrame(true));
        }

    }
    const contentText = {
        link: 'link'
    }

    return (
        <div className={pointActive ? s.popUp + " " + s.active : s.popUp}>
            <i className={s.popUp__close + ' bi bi-x'} onClick={closePopUp}></i>
            <div className={s.popUp__title}>{t(annoContent.title)}</div>
            <div className={s.popUp__tag}>
                <p>{t(annoContent.tag)}</p>
            </div>
            <div className={s.popUp__location}>
                <p>{t(annoContent.location)}</p>
            </div>
            <img src={annoContent.src} alt={'point'} onClick={openIFrame} loading="lazy" />
            <button onClick={openIFrame}>{t(contentText.link)}</button>
        </div >
    );
}

