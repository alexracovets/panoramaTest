import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import s from "./PopUpPanorama.module.scss";

import { setPopUpClose } from '../../../store/reducers/panorama.js';

export default function PopUpPanorama() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isPopUp = useSelector((state) => state.panorama.isPopUp);
    const content = useSelector((state) => state.panorama.popUpContent);

    const closePopUp = () => {
        dispatch(setPopUpClose());
    }

    return (
        <div className={isPopUp ? s.active + ' ' + s.popUp : s.popUp}>
            <div className={s.content}>
                <i className={s.cross + ' bi bi-x'} onClick={() => closePopUp()}></i> 
                <div className={s.title}>
                    {t(content.title)}
                </div>
                <div className={s.text}>
                    {
                        content.text.map((item, index) => {
                            return (
                                <p key={index}>
                                    {t(item)}
                                </p>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

