import { createSlice } from '@reduxjs/toolkit';

const panorama = createSlice({
    name: 'panorama',
    initialState: {
        currentPanorama: '',
        panoramaInteractive: [],
        isPanorama: false,
        audio: '0',
        isPortal: false,
        isPopUp: false,
        popUpContent: {
            title: '',
            text: []
        }
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
        setPopUpContent: (state, action) => {
            state.popUpContent = action.payload;
            state.isPopUp = true;
        },
        setPopUpClose: (state) => {
            state.popUpContent = { title: '', text: [] };
            state.isPopUp = false;
        }
    }
});

export const {
    setPanorama,
    setPanoramaImage,
    setPanoramaInteractive,
    setIsPortal,
    setClosePanorama,
    setPopUpContent,
    setPopUpClose
} = panorama.actions;

export default panorama.reducer;