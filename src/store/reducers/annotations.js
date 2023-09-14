import { createSlice } from '@reduxjs/toolkit';

const annotations = createSlice({
    name: 'annotations',
    initialState: {
        annotation: [
            {
                position: [-15.5, 0.1, 9],
                title: 'annotation.first.title',
                tag: 'annotation.first.tag',
                location: 'annotation.first.location',
                src: './img/pop_annotation/1.jpg',
                link_ua: "https://storage.net-fs.com/hosting/7696236/6/",
                link_en: "https://storage.net-fs.com/hosting/7696236/11/",
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#8f680e"],
                annotationImage: "./img/annotations/plastic.svg",
                music: '0',
                panorama: true,
                panoramaStart: '/panorams/1/1.jpg',
                panoramaInteractive: {
                    mask: [
                        {
                            image: '/panorams/1/mask/1_1.png',
                            width: '382',
                            height: '473',
                            scale: '0.480 0.660 1.000',
                            rotation: '-16.970 -36.180 2.140',
                            position: '124.475 -179.539 -243.018'
                        },
                        {
                            image: '/panorams/1/mask/1_2.png',
                            width: '382',
                            height: '473',
                            scale: '0.480 0.660 1.000',
                            rotation: '-18.550 -62.810 -1.830',
                            position: '273.649 -178.960 -97.441'
                        }
                    ],
                    info: [
                        {
                            image: '/img/info.svg',
                            position: '118.052 -88.646 -256.116',
                            rotation: '-16.970 -36.180 2.140',
                            scale: '30 30 1'
                        },
                        {
                            image: '/img/info.svg',
                            position: '291.283 -92.774 -96.960',
                            rotation: '-16.748 -74.427 9.666',
                            scale: '30 30 1'
                        }
                    ]
                },
                id: 1
            },
            {
                position: [-7.4, 1.65, 7.5],
                title: 'annotation.second.title',
                tag: 'annotation.second.tag',
                location: 'annotation.second.location',
                src: './img/pop_annotation/2.jpg',
                link_ua: "https://storage.net-fs.com/hosting/7696236/5/",
                link_en: "https://storage.net-fs.com/hosting/7696236/16/",
                cameraPosition: [-5.24, 5.72, 15.05],
                color: ["#0d276b", "#0e3d02", "#8f680e", "#940807", "#2C1902", "#4a4848"],
                annotationImage: "",
                music: '0',
                panorama: false,
                panoramaStart: '',
                id: 2
            },
            {
                position: [-3.8, 0.6, 15],
                title: 'annotation.third.title',
                tag: 'annotation.third.tag',
                location: 'annotation.third.location',
                src: './img/pop_annotation/3.jpg',
                link_ua: "https://storage.net-fs.com/hosting/7696236/4/",
                link_en: "https://storage.net-fs.com/hosting/7696236/17/",
                cameraPosition: [-9.37, 6.99, 9.93],
                color: ["#b8b8b8"],
                annotationImage: "./img/annotations/eco-zone.svg",
                music: '0',
                panorama: true,
                panoramaStart: '/panorams/2/1.jpg',
                panoramaInteractive: {
                    mask: [],
                    info: [],
                    portals: [
                        {
                            current: '/panorams/2/1.jpg',
                            other: [
                                {
                                    portal: '/panorams/2/2.jpg',
                                    position: '250 -90 -300',
                                    scale: '60 40 1',
                                    rotation: '-80 0 0'
                                },
                                {
                                    portal: '/panorams/2/3.jpg',
                                    position: '355 -70 -175',
                                    scale: '60 40 1',
                                    rotation: '-90 -90 -30'
                                },
                                {
                                    portal: '/panorams/2/4.jpg',
                                    position: '350 -130 25',
                                    scale: '60 40 1',
                                    rotation: '-90 -90 0'
                                },
                                {
                                    portal: '/panorams/2/5.jpg',
                                    position: '220 -110 305',
                                    scale: '60 40 1',
                                    rotation: '-90 -120 10'
                                },
                            ]
                        },
                        {
                            current: '/panorams/2/2.jpg',
                            other: []
                        },
                        {
                            current: '/panorams/2/3.jpg',
                            other: []
                        },
                        {
                            current: '/panorams/2/4.jpg',
                            other: []
                        },
                        {
                            current: '/panorams/2/5.jpg',
                            other: []
                        }
                    ]
                },
                id: 3
            },
            {
                position: [-7.8, 0, 8.5],
                title: 'annotation.fourth.title',
                tag: 'annotation.fourth.tag',
                location: 'annotation.fourth.location',
                src: './img/pop_annotation/4.jpg',
                link_ua: "https://storage.net-fs.com/hosting/7696236/10/",
                link_en: "https://storage.net-fs.com/hosting/7696236/13/",
                cameraPosition: [-8.23, 6.1, 15.73],
                color: ["#4a4848"],
                annotationImage: "./img/annotations/eco-report.svg",
                music: '0',
                panorama: false,
                panoramaStart: '',
                id: 4
            },
            {
                position: [-18.5, 0.15, 11.5],
                title: 'annotation.fifth.title',
                tag: 'annotation.fifth.tag',
                location: 'annotation.fifth.location',
                src: './img/pop_annotation/5.jpg',
                link_ua: "https://my.matterport.com/show/?m=hdjtBUANBJQ&play=1&qs=1",
                link_en: "https://my.matterport.com/show/?m=hdjtBUANBJQ&play=1&qs=1",
                cameraPosition: [-24.44, 6.38, 16.62],
                color: ["#b8b8b8"],
                annotationImage: "./img/annotations/eco-zone.svg",
                music: '5',
                panorama: false,
                panoramaStart: '',
                id: 5
            },
            {
                position: [-0.8, 0, -23.2],
                title: 'annotation.sixth.title',
                tag: 'annotation.sixth.tag',
                location: 'annotation.sixth.location',
                src: './img/pop_annotation/6.jpg',
                link_ua: "https://storage.net-fs.com/hosting/7696236/8/",
                link_en: "https://storage.net-fs.com/hosting/7696236/14/",
                cameraPosition: [2.76, 5.58, -32.1],
                color: ["#0d276b", "#0e3d02", "#8f680e", "#940807", "#2C1902", "#4a4848"],
                annotationImage: "",
                music: '0',
                panorama: false,
                panoramaStart: '',
                id: 6
            },
            {
                position: [-18.2, 0, 6.4],
                title: 'annotation.seventh.title',
                tag: 'annotation.seventh.tag',
                location: 'annotation.seventh.location',
                src: './img/pop_annotation/7.jpg',
                link_ua: "https://my.matterport.com/show/?m=sPTQYR4ndzb&play=1&qs=1",
                link_en: "https://my.matterport.com/show/?m=sPTQYR4ndzb&play=1&qs=1",
                cameraPosition: [-24.22, 7.06, 12.78],
                color: ["#b8b8b8"],
                annotationImage: "./img/annotations/eco-zone.svg",
                music: '7',
                panorama: false,
                panoramaStart: '',
                id: 7
            },
            {
                position: [-17.2, 0, 6.5],
                title: 'annotation.eighth.title',
                tag: 'annotation.eighth.tag',
                location: 'annotation.eighth.location',
                src: './img/pop_annotation/8.jpg',
                link_ua: "https://storage.net-fs.com/hosting/7696236/7/",
                link_en: " https://storage.net-fs.com/hosting/7696236/12/",
                cameraPosition: [-20.39, 5.31, 1.86],
                color: ["#0d276b", "#0e3d02", "#8f680e", "#940807", "#2C1902", "#4a4848"],
                annotationImage: "",
                music: '0',
                panorama: false,
                panoramaStart: '',
                id: 8
            },
            {
                position: [6.9, 1, -15.3],
                title: 'annotation.ninth.title',
                tag: 'annotation.ninth.tag',
                location: 'annotation.ninth.location',
                src: './img/pop_annotation/9.jpg',
                link_ua: "https://storage.net-fs.com/hosting/7696236/9/",
                link_en: "https://storage.net-fs.com/hosting/7696236/15/",
                cameraPosition: [2.14, 8.05, -22.54],
                color: ["#0d276b"],
                annotationImage: "./img/annotations/paper.svg",
                music: '0',
                panorama: false,
                panoramaStart: '',
                id: 9
            }
        ]
    },
    reducers: {
        setColor: (state, action) => {
            const { buttonId, color } = action.payload;
            const button = state.btn.find(btn => btn.id === buttonId);
            if (button) {
                button.color = color;
            }
        },
        updateAnnotationColors: (state, action) => {
            const { annotationId, colors } = action.payload;
            const annotation = state.annotation.find(item => item.id === annotationId);
            if (annotation) {
                if (annotation.color.includes(colors)) {
                    annotation.color = annotation.color.filter(existingColor => existingColor !== colors);
                } else {
                    // Якщо коліра немає, додаємо його
                    annotation.color.push(colors);
                }
            }
        },
    },
});


export const {
    updateAnnotationColors
} = annotations.actions;

export default annotations.reducer;