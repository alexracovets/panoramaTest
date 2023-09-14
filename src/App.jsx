import React from 'react';
import TopBar from './Components/TopBar/TopBar';
import Menu from './Components/Menu/Menu';
import CanvasContainer from './Components/CanvasContainer/CanvasContainer';


import s from './App.module.scss';

export default function App() {
    return (
        <div className={s.wrapper}>
            <TopBar />
            <div className={s.content}>
                <Menu />
                <CanvasContainer />
            </div>
        </div>
    );
}