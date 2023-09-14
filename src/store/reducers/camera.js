import { createSlice } from '@reduxjs/toolkit';

const camera = createSlice({
    name: 'camera',
    initialState: {
        maxDistance: 50,
        minDistance: 10,
        defaultPosition: [-19.3, 29.9, 36.71],
        cameraPosition: [10.81, 19.50, 28.19],
        targetPoint: [0, 2, 0],
        scaling: [0.25, 0.25, 0.25],
        isPointActive: false,
        isResetActive: false,
        isIFrame: false,
        isPositionChanged: false,
    },
    reducers: {
        setAnnotationPosition: (state, action) => {
            const targetPosition = action.payload.position;
            const cameraPosition = action.payload.cameraPosition;

            state.isPositionChanged = true;
            state.isPointActive = true;
            state.isResetActive = true;
            state.maxDistance = 10;
            state.minDistance = 1;
            state.targetPoint = [targetPosition[0], targetPosition[1] + 0.05, targetPosition[2]];
            state.cameraPosition = cameraPosition;
        },
        setDefaultPosition: (state) => {
            state.isPositionChanged = true;
            state.maxDistance = 50;
            state.minDistance = 10;
            state.targetPoint = [0, 2, 0];
            state.cameraPosition = [10.81, 19.50, 28.19];
        },
        setPointActive: (state, action) => {
            state.isPointActive = action.payload;
        },
        setIsIFrame: (state, action) => {
            state.isIFrame = action.payload;
        },
        setFrameReset: (state) => {
            state.isIFrame = false;
            state.isIFrame = true;
        },
        setReset: (state) => {
            state.isResetActive = false;
            state.isPointActive = false;
        },
        setPositionUnChanged: (state) => {
            state.isPositionChanged = false;
        }
    }
});

export const {
    setAnnotationPosition,
    setDefaultPosition,
    setPointActive,
    setIsIFrame,
    setFrameReset,
    setReset,
    setPositionUnChanged
} = camera.actions;

export default camera.reducer;