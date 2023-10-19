import React from "react";
import { useDispatch } from "react-redux";

import { setClosePanorama } from '../../../store/reducers/panorama.js';
import { setReset, setDefaultPosition } from '../../../store/reducers/camera.js';
import { setTimerStop } from '../../../store/reducers/timer.js';

import s from "./ClosePanorama.module.scss";

export default function ClosePanorama() {
    const dispatch = useDispatch();

    const closePanorama = () => {
        dispatch(setClosePanorama());
        dispatch(setTimerStop());
        dispatch(setReset());
        dispatch(setDefaultPosition()); 
    };

    return (
        <i className={s.panorama__close + ' bi bi-x'} onClick={closePanorama}></i>
    )
}
