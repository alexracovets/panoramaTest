import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import { setTimerCount, setTimerReset, setTimerShow, setTimerStop } from '../../store/reducers/timer.js';
import { setReset, setIsIFrame, setDefaultPosition } from '../../store/reducers/camera.js';

import s from './TimerToBack.module.scss';

import { setClosePanorama } from '../../store/reducers/panorama.js';

export default function TimerToBack() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // Отримуємо дані часу зі стору
    const time = useSelector((state) => state.timer.time);
    const isInitiated = useSelector((state) => state.timer.status);
    const isShow = useSelector((state) => state.timer.isShow);

    // Перетворення часу в проміжок від 0 до 100
    const percentage = 100 + 1 - (time / 30) * 100 + '%';

    // Запуск таймера
    useEffect(() => {
        if (isInitiated) {
            const intervalId = setInterval(() => {
                dispatch(setTimerCount(time));
                time <= 15 && dispatch(setTimerShow());
                time <= 0 &&
                    dispatch(setTimerStop()) &&
                    dispatch(setIsIFrame()) &&
                    dispatch(setReset()) &&
                    dispatch(setDefaultPosition()) &&
                    dispatch(setClosePanorama());
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [dispatch, isInitiated, time]);

    // Форматування часу
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Скидання таймера
    const handleResetTimer = () => {
        dispatch(setTimerReset());
    };

    const contentText = {
        back: "isHere",
        btn: "yes"
    }

    return (
        <div className={`${s.to_back__wrapper} ${isShow && s.active}`}>
            <div className={s.to_back__massage}>
                <div className={s.to_back__text}>{t(contentText.back)}</div>
                <div className={s.to_back__timer}>
                    <span className={s.timer_countdown}>{formatTime(time)}</span>
                    <div className={s.timer_stripe__wrapper}>
                        <div className={s.timer_stripe} style={{ transform: `translateX(-${percentage})` }}></div>
                    </div>
                </div>
                <button onClick={handleResetTimer}>{t(contentText.btn)}</button>
            </div>
        </div>
    )
}