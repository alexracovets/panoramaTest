import { createSlice } from '@reduxjs/toolkit';

const panorama = createSlice({
    name: 'panorama',
    initialState: {
        currentPanorama: '',
        panoramaInteractive: {},
        isPanorama: false,
        audio: '3',
        newPanorama: null,
        isPortal: false
    },
    reducers: {
        setPanorama: (state, action) => {
            state.isPanorama = action.payload;
        },
        setPanoramaImage: (state, action) => {
            state.currentPanorama = action.payload;
        },
        setPanoramaInteractive: (state, action) => {
            state.panoramaInteractive = action.payload;
        },
        setIsPortal: (state, action) => {
            state.isPortal = action.payload;
        },
        setClosePanorama: (state) => {
            state.currentPanorama = null;
            state.isPanorama = false;
            state.panoramaInteractive = null;
        },
    }
});

export const {
    setPanorama,
    setPanoramaImage,
    setPanoramaInteractive,
    setIsPortal,
    setClosePanorama
} = panorama.actions;

export default panorama.reducer;