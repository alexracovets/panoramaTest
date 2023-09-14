import React from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import s from './LanguageSwitch.module.scss'

import { setIsIFrame, setDefaultPosition } from "../../store/reducers/camera.js";
import { setTimerStop } from '../../store/reducers/timer.js';

export default function LanguageSwitch() {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();

    // Зміна мови
    const change = async (language) => {
        try {
            await i18n.changeLanguage(language);
            dispatch(setIsIFrame(false));
            dispatch(setTimerStop());
            dispatch(setDefaultPosition());
        } catch (error) {
            console.error("Error changing language:", error);
        }
    };

    return (
        <div className={s.language_switch}>
            <span onClick={() => change('en')}>EN</span>
            <div className={s.spliter}></div>
            <span onClick={() => change('ua')}>UA</span>
        </div>
    )
}
