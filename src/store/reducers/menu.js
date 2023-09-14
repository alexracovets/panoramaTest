import { createSlice } from '@reduxjs/toolkit';

const menu = createSlice({
    name: 'menu',
    initialState: {
        btn: [
            {
                text: 'menu.paper',
                image: './img/menu/paper.svg',
                className: 'btn__paper',
                color: '#0d276b',
                annotation: [2, 6, 8, 9],
                annotationImage: './img/annotations/paper.svg',
                id: 1
            },
            {
                text: 'menu.glass',
                image: './img/menu/glass.svg',
                className: 'btn__glass',
                color: '#0e3d02',
                annotation: [2, 6, 8],
                annotationImage: './img/annotations/glass.svg',
                id: 2
            },
            {
                text: 'menu.plastic',
                image: './img/menu/plastic.svg',
                className: 'btn__plastic',
                color: '#8f680e',
                annotation: [1, 2, 6, 8],
                annotationImage: './img/annotations/paper.svg',
                id: 3
            },
            {
                text: 'menu.metal',
                image: './img/menu/metal.svg',
                className: 'btn__metal',
                color: '#940807',
                annotation: [2, 6, 8],
                annotationImage: './img/annotations/metal.svg',
                id: 4
            },
            {
                text: 'menu.bio',
                image: './img/menu/bio-waste.svg',
                className: 'btn__bio',
                color: '#2C1902',
                annotation: [2, 6, 8],
                id: 5
            },
            {
                text: 'menu.otherWaste',
                image: './img/menu/eco-report.svg',
                className: 'btn__other',
                color: '#4a4848',
                annotation: [2, 4, 6, 8],
                annotationImage: './img/annotations/eco-report.svg',
                id: 7
            },
            {
                text: 'menu.ecoZone',
                image: './img/menu/eco-zone.svg',
                className: 'btn__eco',
                color: '#b8b8b8',
                annotation: [3, 5, 7],
                annotationImage: './img/annotations/eco-zone.svg',
                id: 6
            }
        ],
        link: [
            {
                text: 'menu.ecoReport',
                image: './img/menu/eco-report.svg',
                className: 'btn__report',
                active: false,
                link: 'https://lookerstudio.google.com/embed/reporting/ac15aa9f-0a5d-4c64-bd57-01ba0314d92e/page/FXHYD',
                id: 8
            }
        ]
    },
    reducers: {
        updateLinkActive: (state, action) => {
            const link = action.payload;
            const linkToUpdate = state.link.find(item => item.link === link);
            if (linkToUpdate) {
                linkToUpdate.active = true;
            }
        },
        updateLinkDisable: (state) => {
            state.link.forEach(item => {
                item.active = false;
            });
        },
    },
});

export const {
    updateLinkActive,
    updateLinkDisable
} = menu.actions;

export default menu.reducer;