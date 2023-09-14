import { createSlice } from '@reduxjs/toolkit';

const annotationContent = createSlice({
    name: 'annotationContent',
    initialState: {
        title: '',
        tag: '',
        location: '',
        text: [],
        src: '',
        link: '',
        music: '',
        redirect: '',
        panorama: '',
        disabledAnnotation: [],
        annotationsByButton: {
            1: ['btn_3'],
            2: ['btn_2', 'btn_4', 'btn_5', 'btn_7'],
            3: ['btn_6'],
            4: ['btn_7'],
            5: ['btn_6'],
            6: ['btn_2', 'btn_4', 'btn_5', 'btn_7'],
            7: ['btn_6'],
            8: ['btn_2', 'btn_4', 'btn_5', 'btn_7'],
            9: ['btn_1'],
        },
        buttonStatuses: {},
    },
    reducers: {
        setDisabledAnnotation: (state, action) => {
            state.disabledAnnotation = [...state.disabledAnnotation, action.payload];
        },
        removeDisabledAnnotation: (state, action) => {
            state.disabledAnnotation = state.disabledAnnotation.filter(
                (item) => item !== action.payload
            );
        },
        setFrameLink: (state, action) => {
            state.link = action.payload;
        },
        setAnnotationData: (state, action) => {
            const { title, tag, location, text, src, panorama } = action.payload;
            state.title = title;
            state.tag = tag;
            state.location = location;
            state.text = text;
            state.src = src;
            state.panorama = panorama;
        },
        toggleButtonStatus: (state, action) => {
            const buttonId = action.payload;
            if (state.buttonStatuses[buttonId]) {
                state.buttonStatuses[buttonId] = !state.buttonStatuses[buttonId];
            } else {
                state.buttonStatuses[buttonId] = true;
            }
        },
        setMusic: (state, action) => {
            state.music = action.payload;
        },
    }
});

export const {
    setDisabledAnnotation,
    removeDisabledAnnotation,
    setAnnotationData,
    setFrameLink,
    toggleButtonStatus,
    setMusic
} = annotationContent.actions;

export default annotationContent.reducer;