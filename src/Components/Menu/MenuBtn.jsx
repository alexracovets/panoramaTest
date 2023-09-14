import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    setDisabledAnnotation,
    removeDisabledAnnotation,
    toggleButtonStatus
} from '../../store/reducers/annotationContent.js';
import { updateAnnotationColors } from '../../store/reducers/annotations.js';

import s from './Menu.module.scss'
import { useTranslation } from "react-i18next";

export default function MenuBtn(button) {
    const { t } = useTranslation();
    // Отримуємо дані зі стору
    const dispatch = useDispatch();
    const disabledAnnotation = useSelector((state) => state.annotation.disabledAnnotation);
    const annotationsByButton = useSelector((state) => state.annotation.annotationsByButton);
    const buttonStatuses = useSelector((state) => state.annotation.buttonStatuses);

    // Приховання або показ анотацій
    const showAnnotation = (event, marker) => {

        marker.annotation.forEach(element => {
            // Отримання кольорів для анотації
            const annotationColors = button.button.color || []; // Отримати кольори з об'єкта button
            // Оновлення кольорів анотації 
            dispatch(updateAnnotationColors({ annotationId: element, colors: annotationColors }));

        });
        dispatch(toggleButtonStatus(event.target.id));
        event.target.classList.toggle(s.disable);
    }

    return (

        <button
            className={s.menu__btn + ' ' + s[button.button.className]}
            onClick={(event) => showAnnotation(event, button.button)}
            id={'btn_' + button.button.id}
            key={button.button.id}>
            <div className={s.text}>
                {t(button.button.text)}
            </div>
            <div className={s.btn__image}>
                <img src={button.button.image} alt="menu" className={s.image} />
            </div>
        </button>
    )
}