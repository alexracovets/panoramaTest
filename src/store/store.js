import { configureStore } from '@reduxjs/toolkit';
import cameraReducer from './reducers/camera.js';
import annotationContentReducer from './reducers/annotationContent.js';
import annotationsReducer from './reducers/annotations.js';
import timerReducer from './reducers/timer.js';
import menuReducer from './reducers/menu.js';
import panorama from './reducers/panorama.js';

const store = configureStore({
    reducer: {
        camera: cameraReducer,
        annotation: annotationContentReducer,
        annotations: annotationsReducer,
        timer: timerReducer,
        menu: menuReducer,
        panorama: panorama,
    },
});

export default store;