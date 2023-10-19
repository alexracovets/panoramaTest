import React from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import { setIsIFrame, setDefaultPosition, setPointActive } from "../../store/reducers/camera.js";
import { setClosePanorama, setMainLoader } from '../../store/reducers/panorama.js';
import { updateLinkDisable } from '../../store/reducers/menu.js';
import { setTimerStop } from '../../store/reducers/timer.js';

import s from './Menu.module.scss'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import MenuBtn from './MenuBtn';
import MenuLink from './MenuLink';

export default function Menu() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // Повернення до початкового стану
    const toDefault = () => {
        dispatch(setIsIFrame(false));
        dispatch(setTimerStop());
        dispatch(setDefaultPosition());
        dispatch(setPointActive(false));
        dispatch(updateLinkDisable());
        dispatch(setClosePanorama());
        dispatch(setMainLoader(false))
    }
    const buttonList = useSelector((state) => state.menu.btn);
    const linkList = useSelector((state) => state.menu.link);

    const contentText = {
        menu: 'menu.name'
    }

    return (
        <div className={s.menu}>
            <div className={s.menu__title} onClick={toDefault}>
                {t(contentText.menu)}
            </div>
            {buttonList.map((button) => {
                return (
                    <MenuBtn button={button} key={button.id} />
                )
            })}
            {linkList.map((link) => {
                return (
                    <MenuLink link={link} key={link.id} />
                )
            })}
            <LanguageSwitch />
        </div>
    )
}
