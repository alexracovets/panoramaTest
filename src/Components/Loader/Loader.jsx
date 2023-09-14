
import React from 'react';
import s from './Loader.module.scss'

export default function Loader() {
    return (
        <div className={s.loader__wrapper}>
            <div className={s.loader__roller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
