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
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#8f680e"],
                annotationImage: "./img/annotations/plastic.svg",
                music: '1',
                panorama: true,
                panoramaStart: '/panorams/1/1.jpg',
                panoramaInteractive: [
                    {
                        current: '/panorams/1/1.jpg',
                        mask: [
                            {
                                image: '/panorams/1/mask/1.png',
                                args: [38.2, 44.3],
                                position: [167.40, -131.64, -329.4],
                                rotation: [-0.42, -0.41, -0.19],
                                scale: [6.85, 7.13, 1],
                                content: {
                                    title: 'panoramaPopUp.street.title',
                                    text: [
                                        'panoramaPopUp.street.text.1',
                                        'panoramaPopUp.street.text.2'
                                    ]
                                }
                            },
                            {
                                image: '/panorams/1/mask/2.png',
                                args: [38.2, 44.3],
                                position: [261, -93, -98],
                                rotation: [-0.72, -0.99, -0.67],
                                scale: [5.0, 5.25, 1],
                                content: {
                                    title: 'panoramaPopUp.street.title',
                                    text: [
                                        'panoramaPopUp.street.text.1',
                                        'panoramaPopUp.street.text.2'
                                    ]
                                }
                            }
                        ],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [10, -2.7, -22.4],
                                rotation: [1.57, 0, 0.31],
                                content: {
                                    title: 'panoramaPopUp.street.title',
                                    text: [
                                        'panoramaPopUp.street.text.1',
                                        'panoramaPopUp.street.text.2'
                                    ]
                                }
                            },
                            {
                                image: '/panorams/info.svg',
                                position: [25, -2.6, -8.5],
                                rotation: [1.57, 0, 1.21],
                                content: {
                                    title: 'panoramaPopUp.street.title',
                                    text: [
                                        'panoramaPopUp.street.text.1',
                                        'panoramaPopUp.street.text.2'
                                    ]
                                }
                            }
                        ],
                        other: []
                    },
                ]
            },
            {
                position: [-7.4, 1.65, 7.5],
                title: 'annotation.second.title',
                tag: 'annotation.second.tag',
                location: 'annotation.second.location',
                src: './img/pop_annotation/2.jpg',
                cameraPosition: [-5.24, 5.72, 15.05],
                color: ["#0d276b", "#0e3d02", "#8f680e", "#940807", "#2C1902", "#4a4848"],
                annotationImage: "",
                music: '2',
                panorama: true,
                panoramaStart: '/panorams/2/1.jpg',
                panoramaInteractive: [
                    {
                        current: '/panorams/2/1.jpg',
                        mask: [],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [10, 1, -15],
                                rotation: [1.57, 0.04, 0.56],
                                content: {
                                    title: 'panoramaPopUp.floor.first.title',
                                    text: [
                                        'panoramaPopUp.floor.first.text.1',
                                        'panoramaPopUp.floor.first.text.2'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/2/2.jpg',
                                position: [18, -7, 12],
                                rotation: [0, 2.38, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/2/2.jpg',
                        mask: [
                            {
                                image: '/panorams/2/mask/1.png',
                                args: [1.3, 0.5],
                                position: [0.87, -1.75, -4],
                                rotation: [-0.05, -0.17, 0.03],
                                scale: [1, 1, 1],
                                content: {
                                    title: 'panoramaPopUp.floor.second.title',
                                    text: [
                                        'panoramaPopUp.floor.second.text.1'
                                    ]
                                }
                            },
                            {
                                image: '/panorams/2/mask/2.png',
                                args: [3.4, 1.3],
                                position: [0.15, -3.79, -4.13],
                                rotation: [-0.05, -0.17, 0.03],
                                scale: [1, 1, 1],
                                content: {
                                    title: 'panoramaPopUp.floor.second.title',
                                    text: [
                                        'panoramaPopUp.floor.second.text.1'
                                    ]
                                }
                            }
                        ],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [7.40, -4.7, -19],
                                rotation: [1.47, -0.07, 0.27],
                                content: {
                                    title: 'panoramaPopUp.floor.second.title',
                                    text: [
                                        'panoramaPopUp.floor.second.text.1'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/2/1.jpg',
                                position: [18, -7, 0],
                                rotation: [0, 3, 0],
                                scale: [0.8, 1, 0.8]
                            },
                        ]
                    },
                ],
                id: 2
            },
            {
                position: [-3.8, 0.6, 15],
                title: 'annotation.third.title',
                tag: 'annotation.third.tag',
                location: 'annotation.third.location',
                src: './img/pop_annotation/3.jpg',
                cameraPosition: [-9.37, 6.99, 9.93],
                color: ["#b8b8b8"],
                annotationImage: "./img/annotations/eco-zone.svg",
                music: '3',
                panorama: true,
                panoramaStart: '/panorams/3/1.jpg',
                panoramaInteractive: [
                    {
                        current: '/panorams/3/1.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/3/2.jpg',
                                position: [14, -7, 24],
                                rotation: [0, 2.58, 0],
                                scale: [1.5, 1, 1.5]
                            },
                            {
                                portal: '/panorams/3/3.jpg',
                                position: [22, -7, -21.5],
                                rotation: [0, -2, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/3/4.jpg',
                                position: [30, -7, 1],
                                rotation: [0, 3.14, -0.1],
                                scale: [1.2, 1, 1.2]
                            },
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [47.0, -7, -23.0],
                                rotation: [0.16, 2.56, -0.09],
                                scale: [1.5, 1, 1.5]
                            },
                        ]
                    },
                    {
                        current: '/panorams/3/2.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/3/1.jpg',
                                position: [-6, -7, -30],
                                rotation: [0, -2.02, 0],
                                scale: [1.2, 1, 1.2]
                            },
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [32, -7, 18],
                                rotation: [0, 2.4, 0],
                                scale: [1.2, 1, 1.2]
                            },
                            {
                                portal: '/panorams/3/6.jpg',
                                position: [-3.5, -7, 32],
                                rotation: [0, 1.9, 0],
                                scale: [1.2, 1, 1.2]
                            },
                            {
                                portal: '/panorams/3/7.jpg',
                                position: [41, -7, -15],
                                rotation: [0.15, -3.82, -0.29],
                                scale: [1.2, 1, 1.2]
                            },
                            {
                                portal: '/panorams/3/8.jpg',
                                position: [-29, -7, 24],
                                rotation: [0, 1.08, 0],
                                scale: [1.2, 1, 1.2]
                            },
                        ]
                    },
                    {
                        current: '/panorams/3/3.jpg',
                        mask: [],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [2.87, -1.02, -16],
                                rotation: [1.57, 0, 0.28],
                                content: {
                                    title: 'panoramaPopUp.kaizen.title',
                                    text: [
                                        'panoramaPopUp.kaizen.text.1',
                                        'panoramaPopUp.kaizen.text.2',
                                        'panoramaPopUp.kaizen.text.3'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/3/1.jpg',
                                position: [-22, -7, 32],
                                rotation: [0, 0.7, 0],
                                scale: [1.5, 1, 1.5]
                            },
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [24, -7, 6],
                                rotation: [0, 2.63, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/3/7.jpg',
                                position: [3, -7, -13],
                                rotation: [0, -1.87, 0],
                                scale: [1.5, 1, 1.5]
                            },
                        ]
                    },
                    {
                        current: '/panorams/3/4.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/3/1.jpg',
                                position: [-34, -7, -4.7],
                                rotation: [0, 0.44, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/3/2.jpg',
                                position: [-3, -7, 10.9],
                                rotation: [0, 1.25, 0],
                                scale: [0.6, 1, 0.6]
                            },
                            {
                                portal: '/panorams/3/3.jpg',
                                position: [-6, -7, -35],
                                rotation: [0, 4.4, 0],
                                scale: [1.3, 1, 1.3]
                            },
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [32, -7, -9],
                                rotation: [0, 3.5, 0],
                                scale: [1.2, 1, 1.2]
                            }
                        ]
                    },
                    {
                        current: '/panorams/3/5.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/3/3.jpg',
                                position: [4, -7, -35],
                                rotation: [0, -1.7, 0],
                                scale: [1.5, 1, 1.5]
                            },
                            {
                                portal: '/panorams/3/10.jpg',
                                position: [-15, -7, 13],
                                rotation: [0, 0.68, 0],
                                scale: [1, 1, 1]
                            }
                        ]
                    },
                    {
                        current: '/panorams/3/6.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/3/2.jpg',
                                position: [-1, -7, -17.4],
                                rotation: [0, 4.75, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [13, -7, 21.1],
                                rotation: [0, 3.16, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/3/9.jpg',
                                position: [-10, -7, 19.4],
                                rotation: [0, -0.08, 0.04],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/3/3.jpg',
                                position: [54, -7, -29],
                                rotation: [0, 3.22, -0.20],
                                scale: [1.5, 1, 1.5]
                            },
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [44, -7, 3],
                                rotation: [0.15, -3.91, -0.26],
                                scale: [1.2, 1, 1.2]
                            }
                        ]
                    },
                    {
                        current: '/panorams/3/7.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/3/1.jpg',
                                position: [25, -7, -11],
                                rotation: [0, -2.81, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [9, -7, -21],
                                rotation: [0, -1.35, 0],
                                scale: [0.9, 1, 0.9]
                            },
                        ]
                    },
                    {
                        current: '/panorams/3/8.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/3/2.jpg',
                                position: [2, -7, -30],
                                rotation: [0, -1.64, 0],
                                scale: [1.2, 1, 1.2]
                            },
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [51, -7, -32],
                                rotation: [0, -2.18, 0],
                                scale: [1.2, 1, 1.2]
                            },
                            {
                                portal: '/panorams/3/9.jpg',
                                position: [22, -7, -9],
                                rotation: [0, -2.5, 0],
                                scale: [1.2, 1, 1.2]
                            }
                        ]
                    },
                    {
                        current: '/panorams/3/9.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/3/2.jpg',
                                position: [-10, -7, -26.0],
                                rotation: [0, 4.08, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/3/2.jpg',
                                position: [20, -7, -24],
                                rotation: [0, -1.18, 0],
                                scale: [1.2, 1, 1.2]
                            },
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [43, -7, -10.4],
                                rotation: [0, -2.64, 0],
                                scale: [1.2, 1, 1.2]
                            },
                            {
                                portal: '/panorams/3/8.jpg',
                                position: [-15, -7, 0.5],
                                rotation: [0, -0.08, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/3/10.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/3/5.jpg',
                                position: [16, -7, -7],
                                rotation: [0, 3.68, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/3/2.jpg',
                                position: [-19, -7, -11.4],
                                rotation: [0, -1.28, 0],
                                scale: [1, 1, 1]
                            },

                            {
                                portal: '/panorams/3/9.jpg',
                                position: [-29, -7, 5.9],
                                rotation: [0, 0, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    }
                ],
                id: 3
            },
            {
                position: [-7.8, 0, 8.5],
                title: 'annotation.fourth.title',
                tag: 'annotation.fourth.tag',
                location: 'annotation.fourth.location',
                src: './img/pop_annotation/4.jpg',
                cameraPosition: [-8.23, 6.1, 15.73],
                color: ["#4a4848"],
                annotationImage: "./img/annotations/eco-report.svg",
                music: '4',
                panorama: true,
                panoramaStart: '/panorams/4/1.jpg',
                panoramaInteractive: [
                    {
                        current: '/panorams/4/1.jpg',
                        mask: [],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [18, -3.27, -14.23],
                                rotation: [1.6, 0.12, 0.76],
                                content: {
                                    title: 'panoramaPopUp.reception.title',
                                    text: [
                                        'panoramaPopUp.reception.text.1',
                                        'panoramaPopUp.reception.text.2',
                                        'panoramaPopUp.reception.text.3'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/4/2.jpg',
                                position: [15, -7, 3.1],
                                rotation: [0, 2.95, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/4/2.jpg',
                        mask: [],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [27, -2.1, -3.24],
                                rotation: [1.57, 0, 1.52],
                                content: {
                                    title: 'panoramaPopUp.reception.title',
                                    text: [
                                        'panoramaPopUp.reception.text.1',
                                        'panoramaPopUp.reception.text.2',
                                        'panoramaPopUp.reception.text.3'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/4/1.jpg',
                                position: [15, -7, -11.1],
                                rotation: [0, 3.78, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    }
                ],
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
                panorama: true,
                panoramaStart: '/panorams/5/1.jpg',
                panoramaInteractive: [
                    {
                        current: '/panorams/5/1.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/5/2.jpg',
                                position: [-21, -7, -14],
                                rotation: [0, -0.74, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/5/3.jpg',
                                position: [5, -10, -28],
                                rotation: [0.12, 3.23, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/5/4.jpg',
                                position: [0, -9, -43],
                                rotation: [0.15, -1.5, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/5/2.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/5/1.jpg',
                                position: [-21, -10, -12],
                                rotation: [0, -0.37, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/5/6.jpg',
                                position: [-1, -7, 23],
                                rotation: [0, 1.4, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/5/3.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/5/1.jpg',
                                position: [24, -10, -9.5],
                                rotation: [0, -1.59, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/5/4.jpg',
                                position: [24, -10, 9.5],
                                rotation: [0, 1.55, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/5/5.jpg',
                                position: [-23, -9, 4],
                                rotation: [0, 1.5, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/5/4.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/5/1.jpg',
                                position: [50, -11, -1],
                                rotation: [0, 3.26, -0.17],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/5/3.jpg',
                                position: [29, -11, -3],
                                rotation: [0, 4.76, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/5/5.jpg',
                                position: [2, -10, -28],
                                rotation: [0, -1.42, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/5/5.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/5/3.jpg',
                                position: [-14, -9, -7.2],
                                rotation: [0, -1.71, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/5/4.jpg',
                                position: [22, -9, 3],
                                rotation: [0, 3, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/5/6.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/5/2.jpg',
                                position: [-11, -10, -11],
                                rotation: [0, -0.13, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    }
                ],
                id: 5
            },
            {
                position: [-0.8, 0, -23.2],
                title: 'annotation.sixth.title',
                tag: 'annotation.sixth.tag',
                location: 'annotation.sixth.location',
                src: './img/pop_annotation/6.jpg',
                cameraPosition: [2.76, 5.58, -32.1],
                color: ["#0d276b", "#0e3d02", "#8f680e", "#940807", "#2C1902", "#4a4848"],
                annotationImage: "",
                music: '6',
                panorama: true,
                panoramaStart: '/panorams/6/1.jpg',
                panoramaInteractive: [
                    {
                        current: '/panorams/6/1.jpg',
                        mask: [],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [11.88, -0.93, -14.2],
                                rotation: [1.57, 0, 0.63],
                                content: {
                                    title: 'panoramaPopUp.picking_shop.title',
                                    text: [
                                        'panoramaPopUp.picking_shop.text.1',
                                        'panoramaPopUp.picking_shop.text.2'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/6/2.jpg',
                                position: [15, -10, 3],
                                rotation: [0, 2.38, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/6/2.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/6/1.jpg',
                                position: [33, -12, -4],
                                rotation: [0, -2.11, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    }
                ],
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
                cameraPosition: [-20.39, 5.31, 1.86],
                color: ["#0d276b", "#0e3d02", "#8f680e", "#940807", "#2C1902", "#4a4848"],
                annotationImage: "",
                music: '8',
                panorama: true,
                panoramaStart: '/panorams/8/1.jpg',
                panoramaInteractive: [
                    {
                        current: '/panorams/8/1.jpg',
                        mask: [],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [16, -3.27, -2.00],
                                rotation: [1.50, -0.13, 1.34],
                                content: {
                                    title: 'panoramaPopUp.food_court.title',
                                    text: [
                                        'panoramaPopUp.food_court.text.1',
                                        'panoramaPopUp.food_court.text.2'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/8/2.jpg',
                                position: [20, -17, 12],
                                rotation: [0, 2.65, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/3.jpg',
                                position: [-19, -17, -22.2],
                                rotation: [0, -1.35, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/4.jpg',
                                position: [-12, -13, 22],
                                rotation: [0, 0.85, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/5.jpg',
                                position: [-34, -16, 47],
                                rotation: [0, 0, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/6.jpg',
                                position: [-42, -14, 18],
                                rotation: [0, 0.8, 0],
                                scale: [1, 1, 1]
                            }
                        ]
                    },
                    {
                        current: '/panorams/8/2.jpg',
                        mask: [],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [12.82, -3.82, -6.54],
                                rotation: [1.45, -0.26, 0.97],
                                content: {
                                    title: 'panoramaPopUp.food_court.title',
                                    text: [
                                        'panoramaPopUp.food_court.text.1',
                                        'panoramaPopUp.food_court.text.2'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/8/1.jpg',
                                position: [-6, -17, -18],
                                rotation: [0, -1.21, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/3.jpg',
                                position: [-6, -16, -49],
                                rotation: [0, -2.28, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/4.jpg',
                                position: [-29, -15, -3.2],
                                rotation: [0, 0.39, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/8/3.jpg',
                        mask: [],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [15.37, -3, -19],
                                rotation: [1.57, 0.15, 0.78],
                                content: {
                                    title: 'panoramaPopUp.food_court.title',
                                    text: [
                                        'panoramaPopUp.food_court.text.1',
                                        'panoramaPopUp.food_court.text.2'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/8/1.jpg',
                                position: [16, -17, -8],
                                rotation: [0, -3.07, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/2.jpg',
                                position: [36, -17, -18],
                                rotation: [0, 3.67, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/6.jpg',
                                position: [20, -17, 37],
                                rotation: [0, -4, 0],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/8/4.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/8/1.jpg',
                                position: [-35, -16, -20],
                                rotation: [0, -0.37, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/2.jpg',
                                position: [-25, -16, -34],
                                rotation: [0, -1.27, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/5.jpg',
                                position: [15, -16, 15],
                                rotation: [0, 1.9, 0],
                                scale: [1, 1, 1]
                            }
                        ]
                    },
                    {
                        current: '/panorams/8/5.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/8/4.jpg',
                                position: [19, -16, 0.2],
                                rotation: [0, 3.71, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/6.jpg',
                                position: [-2, -16, -18],
                                rotation: [0, -1.28, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/3.jpg',
                                position: [30, -13, -44],
                                rotation: [0, 4.17, -0.14],
                                scale: [1, 1, 1]
                            },
                        ]
                    },
                    {
                        current: '/panorams/8/6.jpg',
                        mask: [],
                        info: [],
                        other: [
                            {
                                portal: '/panorams/8/5.jpg',
                                position: [15, -16, 11],
                                rotation: [0, -3.4, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/3.jpg',
                                position: [-5, -16, -54],
                                rotation: [0, -1.2, 0],
                                scale: [1, 1, 1]
                            },
                            {
                                portal: '/panorams/8/1.jpg',
                                position: [12, -16, -51],
                                rotation: [0, 4, 0],
                                scale: [1, 1, 1]
                            }
                        ]
                    }
                ],
                id: 8
            },
            {
                position: [6.9, 1, -15.3],
                title: 'annotation.ninth.title',
                tag: 'annotation.ninth.tag',
                location: 'annotation.ninth.location',
                src: './img/pop_annotation/9.jpg',
                cameraPosition: [2.14, 8.05, -22.54],
                color: ["#0d276b"],
                annotationImage: "./img/annotations/paper.svg",
                music: '9',
                panorama: true,
                panoramaStart: '/panorams/9/1.jpg',
                panoramaInteractive: [
                    {
                        current: '/panorams/9/1.jpg',
                        mask: [
                            {
                                image: '/panorams/9/mask/1.png',
                                args: [3.3, 5.6],
                                position: [1.11, -1.14, -6],
                                rotation: [0.07, -0.42, 0],
                                scale: [1, 1, 1],
                                content: {
                                    title: 'panoramaPopUp.recycling_center.title',
                                    text: [
                                        'panoramaPopUp.recycling_center.text.1',
                                        'panoramaPopUp.recycling_center.text.2'
                                    ]
                                }
                            },
                            {
                                image: '/panorams/9/mask/2.png',
                                args: [4.8, 8.3],
                                position: [8.5, -1.34, -5.53],
                                rotation: [-0.03, -0.46, 0],
                                scale: [1, 1, 1],
                                content: {
                                    title: 'panoramaPopUp.recycling_center.title',
                                    text: [
                                        'panoramaPopUp.recycling_center.text.1',
                                        'panoramaPopUp.recycling_center.text.2'
                                    ]
                                }
                            }
                        ],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [10.74, 5.87, -17],
                                rotation: [1.57, 0, 0.46],
                                content: {
                                    title: 'panoramaPopUp.recycling_center.title',
                                    text: [
                                        'panoramaPopUp.recycling_center.text.1',
                                        'panoramaPopUp.recycling_center.text.2'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/9/2.jpg',
                                position: [-25, -7, 1],
                                rotation: [0, 0.61, 0],
                                scale: [1, 1, 1]
                            }
                        ]
                    },
                    {
                        current: '/panorams/9/2.jpg',
                        mask: [],
                        info: [
                            {
                                image: '/panorams/info.svg',
                                position: [11.95, -2.09, -15.22],
                                rotation: [1.57, 0, 0.52],
                                content: {
                                    title: 'panoramaPopUp.recycling_center.title',
                                    text: [
                                        'panoramaPopUp.recycling_center.text.1',
                                        'panoramaPopUp.recycling_center.text.2'
                                    ]
                                }
                            }
                        ],
                        other: [
                            {
                                portal: '/panorams/9/1.jpg',
                                position: [-25, -7, 12],
                                rotation: [0, 0.47, -0.13],
                                scale: [1, 1, 1]
                            }
                        ]
                    }
                ],
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