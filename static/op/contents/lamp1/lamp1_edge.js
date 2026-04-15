/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sun',
                            type: 'image',
                            tag: 'img',
                            rect: ['-382px', '20px', '382', '382', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sun.png"]
                        },
                        {
                            id: 'moon',
                            type: 'image',
                            tag: 'img',
                            rect: ['-301px', '796px', '220', '230', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"moon.png"]
                        },
                        {
                            id: 'LAMP_CLIP',
                            symbolName: 'LAMP_CLIP',
                            type: 'rect',
                            rect: ['-606', '330', '3165px', '477', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'ROAD_CLIP',
                            symbolName: 'ROAD_CLIP',
                            type: 'rect',
                            rect: ['-452', '686', '3014', '755', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'road_darker',
                            type: 'rect',
                            rect: ['0px', '686px', '2560px', '755px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'MEMO',
                            symbolName: 'MEMO',
                            type: 'rect',
                            rect: ['894px', '383', '397', '469', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'CAR_MOVING',
                            symbolName: 'CAR_MOVING',
                            type: 'rect',
                            rect: ['0', '690', '2324', '487', 'auto', 'auto']
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['38', '38', '204', '204', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(140,142,144,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid220",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${sun}",
                            '1089px',
                            '2559px'
                        ],
                        [
                            "eid213",
                            "left",
                            3500,
                            1000,
                            "linear",
                            "${sun}",
                            '-382px',
                            '1089px'
                        ],
                        [
                            "eid209",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${moon}",
                            '-301px',
                            '1170px'
                        ],
                        [
                            "eid217",
                            "left",
                            3500,
                            1000,
                            "linear",
                            "${moon}",
                            '1170px',
                            '2640px'
                        ],
                        [
                            "eid227",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${road_darker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid236",
                            "opacity",
                            3500,
                            1000,
                            "linear",
                            "${road_darker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid221",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${sun}",
                            '20px',
                            '686px'
                        ],
                        [
                            "eid215",
                            "top",
                            3500,
                            1000,
                            "linear",
                            "${sun}",
                            '720px',
                            '20px'
                        ],
                        [
                            "eid211",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${moon}",
                            '796px',
                            '26px'
                        ],
                        [
                            "eid216",
                            "top",
                            3500,
                            1000,
                            "linear",
                            "${moon}",
                            '26px',
                            '762px'
                        ],
                        [
                            "eid202",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(140,142,144,1)',
                            'rgba(140,142,144,1)'
                        ],
                        [
                            "eid226",
                            "background-color",
                            1000,
                            1000,
                            "linear",
                            "${Stage}",
                            'rgba(140,142,144,1)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid230",
                            "background-color",
                            3500,
                            1000,
                            "linear",
                            "${Stage}",
                            'rgba(0,0,0,1.00)',
                            'rgba(140,142,144,1)'
                        ],
                        [
                            "eid34",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${MEMO}",
                            '0',
                            '0'
                        ],
                        [
                            "eid125",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${MEMO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid232",
                            "opacity",
                            3500,
                            500,
                            "linear",
                            "${MEMO}",
                            '1',
                            '0'
                        ],
                            [ "eid153", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MEMO}', ['ON'] ] ]
                    ]
                }
            },
            "MEMO": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '397', '469', 'auto', 'auto'],
                            id: 'memo_body',
                            fill: ['rgba(0,0,0,0)', 'images/memo_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['89px', '81px', '233', '260', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt_on.png'],
                            id: 'txt_on',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['89px', '81px', '233', '260', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt_off.png'],
                            id: 'txt_off',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '397px', '469px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: false,
                    labels: {
                        "ON": 0,
                        "OFF": 167
                    },
                    data: [
                        [
                            "eid33",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt_off}",
                            '0',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            167,
                            0,
                            "linear",
                            "${txt_off}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt_on}",
                            '1',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            167,
                            0,
                            "linear",
                            "${txt_on}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "ROAD_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['450px', '0px', '2564', '755', 'auto', 'auto'],
                            id: 'road',
                            fill: ['rgba(0,0,0,0)', 'images/road.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '538px', '3012', '15', 'auto', 'auto'],
                            id: 'road_line',
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '3014px', '755px']
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "left",
                            0,
                            200,
                            "linear",
                            "${road_line}",
                            '0px',
                            '380px'
                        ]
                    ]
                }
            },
            "LAMP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['427px', '0px', '150', '362', 'auto', 'auto'],
                            id: 'lamp_body',
                            fill: ['rgba(0,0,0,0)', 'images/lamp_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '42px', '934', '435', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lamp_light.png'],
                            id: 'lamp_light',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '934px', '477px']
                        }
                    }
                },
                timeline: {
                    duration: 700,
                    autoPlay: false,
                    labels: {
                        "day": 0,
                        "night": 233
                    },
                    data: [
                        [
                            "eid64",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${lamp_light}",
                            '0',
                            '0'
                        ],
                        [
                            "eid172",
                            "opacity",
                            233,
                            467,
                            "linear",
                            "${lamp_light}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "LAMP_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            id: 'LAMP1',
                            symbolName: 'LAMP',
                            rect: ['2966px', '0px', '934', '477', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'LAMP2',
                            symbolName: 'LAMP',
                            rect: ['1480px', '0px', '934', '477', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '3169px', '477px']
                        }
                    }
                },
                timeline: {
                    duration: 367,
                    autoPlay: true,
                    data: [
                        [
                            "eid74",
                            "left",
                            0,
                            367,
                            "linear",
                            "${LAMP1}",
                            '1486px',
                            '2966px'
                        ],
                        [
                            "eid73",
                            "left",
                            0,
                            367,
                            "linear",
                            "${LAMP2}",
                            '0px',
                            '1480px'
                        ]
                    ]
                }
            },
            "WHEEL_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel2.png'],
                            id: 'wheel2',
                            rect: ['0px', '0px', '126', '110', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel1.png'],
                            id: 'wheel1',
                            rect: ['0px', '0px', '126', '110', 'auto', 'auto'],
                            display: 'block',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '126px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 133,
                    autoPlay: true,
                    data: [
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wheel1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            67,
                            0,
                            "linear",
                            "${wheel1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wheel2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            67,
                            0,
                            "linear",
                            "${wheel2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "CAR_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1169px', '326px', '1123', '161', 'auto', 'auto'],
                            id: 'car_shadow',
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['1124px', '16px', '1200', '445', 'auto', 'auto'],
                            id: 'car',
                            fill: ['rgba(0,0,0,0)', 'images/car.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'WHEEL_CLIP',
                            symbolName: 'WHEEL_CLIP',
                            rect: ['2018px', '334px', '126', '110', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL_CLIPCopy',
                            symbolName: 'WHEEL_CLIP',
                            transform: [[], [], [], ['-1']],
                            rect: ['1218px', '330px', '126', '110', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '1181', '473', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/light.png'],
                            id: 'light',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '2324px', '487px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    labels: {
                        "lampON": 0,
                        "lampOFF": 750
                    },
                    data: [
                        [
                            "eid207",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${WHEEL_CLIPCopy}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid223",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${light}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${light}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CAR_MOVING": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'CAR_CLIP',
                            symbolName: 'CAR_CLIP',
                            rect: ['0px', '0px', '2324', '487', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '2324px', '487px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid237",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${CAR_CLIP}",
                            '0px',
                            '-108px'
                        ],
                        [
                            "eid239",
                            "left",
                            4000,
                            4000,
                            "linear",
                            "${CAR_CLIP}",
                            '-108px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lamp1_edgeActions.js");
})("EDGE-28461533");
