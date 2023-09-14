import React from 'react';
import { useDispatch } from "react-redux";

import { setFrameLink } from '../../store/reducers/annotationContent.js';
import { setPointActive, setIsIFrame } from '../../store/reducers/camera.js';
import { setTimerInitial } from '../../store/reducers/timer.js';
import { updateLinkActive } from '../../store/reducers/menu.js';

import s from './Menu.module.scss'
import { useTranslation } from "react-i18next";


export default function MenuLink(link) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    // Відкриття IFrame
    const openIFrame = (event, link) => {
        dispatch(setFrameLink(link));
        dispatch(setIsIFrame(true));
        dispatch(setPointActive(false));
        dispatch(setTimerInitial());
        dispatch(updateLinkActive(link))

        event.target.classList.add(s.disable)
        setTimeout(() => event.target.classList.remove(s.disable), 400);
    }

    return (
        <button onClick={(event) => openIFrame(event, link.link.link)}
            className={s.menu__btn + ' ' + s[link.link.className]}
            key={link.link.id}>
            <div className={s.text}>
                {t(link.link.text)}
            </div>
            <div className={s.btn__image}>
                <img src={link.link.image} alt="menu" className={s.image} />
            </div>
        </button>
    )
} 