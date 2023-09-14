
import React from 'react';
import { useTranslation } from "react-i18next";

import s from './Logo.module.scss';

export default function Logo() {
    const { i18n } = useTranslation();

    return (
        <img className={s.logo} src={`./img/logo/logo_${i18n.language}.svg`} alt='logo' />
    )
}