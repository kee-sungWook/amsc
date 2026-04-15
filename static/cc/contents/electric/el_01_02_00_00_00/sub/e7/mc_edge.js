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
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'airRoad',
                            type: 'image',
                            tag: 'img',
                            rect: ['11', '468', '1296', '232', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"airRoad.png"]
                        },
                        {
                            id: 'airFlow',
                            symbolName: 'airFlow',
                            type: 'rect',
                            rect: ['11', '434', '1307', '272', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'blinder',
                            type: 'image',
                            tag: 'img',
                            rect: ['7px', '427px', '1319', '286', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blinder.png"]
                        },
                        {
                            id: 'FLOW_R1',
                            symbolName: 'FLOW_R1',
                            type: 'rect',
                            rect: ['707', '266', '11', '200', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'FLOW_R2',
                            symbolName: 'FLOW_R2',
                            type: 'rect',
                            rect: ['718', '266', '600', '10', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],['180']]
                        },
                        {
                            id: 'FLOW_B3',
                            symbolName: 'FLOW_B3',
                            type: 'rect',
                            rect: ['654', '248', '13', '206', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'FLOW_B2',
                            symbolName: 'FLOW_B2',
                            type: 'rect',
                            rect: ['667', '248', '853', '12', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],['180']]
                        },
                        {
                            id: 'ECM',
                            type: 'image',
                            tag: 'img',
                            rect: ['1436', '190', '446', '426', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ECM.png"]
                        },
                        {
                            id: 'sensorBody',
                            type: 'image',
                            tag: 'img',
                            rect: ['217px', '426px', '598', '379', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sensorBody.png"]
                        },
                        {
                            id: 'THROTTLE',
                            symbolName: 'THROTTLE',
                            type: 'rect',
                            rect: ['673', '528', '28', '109', 'auto', 'auto']
                        },
                        {
                            id: 'AFS_MOVIE',
                            symbolName: 'AFS_MOVIE',
                            type: 'rect',
                            rect: ['806', '474', '335', '230', 'auto', 'auto']
                        },
                        {
                            id: 'txt_c5',
                            type: 'text',
                            rect: ['1577', '342', '163', '80', 'auto', 'auto'],
                            text: "ECM",
                            align: "auto",
                            font: ['굴림', [74, ""], "rgb(76,76,76)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c3',
                            type: 'text',
                            rect: ['444', '342', '143', '80', 'auto', 'auto'],
                            text: "APS",
                            align: "auto",
                            font: ['굴림', [74, ""], "rgb(76,76,76)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c2',
                            type: 'text',
                            rect: ['660', '808', '80', '55', 'auto', 'auto'],
                            text: "ISA",
                            align: "auto",
                            font: ['굴림', [49, ""], "rgb(76,76,76)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['390', '25', '1457', '118', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​엑셀포지션센서(APS1,2)는 TPS와 동일한 원리로 운전자의 </p><p style=\"margin:0px\">가속의지를 검출하여(운전자 요구 토크) 현재 가속 상태에 </p><p style=\"margin:0px\">따른 연료량을 결정하는 센서입니다.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>",
                            align: "auto",
                            font: ['굴림', [50, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['81', '16', '403', '81', 'auto', 'auto'],
                            text: "APS1,2",
                            align: "auto",
                            font: ['굴림', [75, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c1Copy2',
                            type: 'text',
                            rect: ['1714', '757', '108', '55', 'auto', 'auto'],
                            text: "페달",
                            align: "auto",
                            font: ['굴림', [49, ""], "rgb(76,76,76)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TPS_mov',
                            symbolName: 'TPS_mov',
                            type: 'rect',
                            rect: ['609', '354', '156', '157', 'auto', 'auto']
                        },
                        {
                            id: 'FLOW_R2Copy4',
                            symbolName: 'FLOW_R2',
                            type: 'rect',
                            rect: ['1023', '561', '600', '10', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],['270']]
                        },
                        {
                            id: 'FLOW_R1Copy2',
                            symbolName: 'FLOW_R1',
                            type: 'rect',
                            rect: ['1423', '760', '11', '200', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],['90']]
                        },
                        {
                            id: 'pedal012',
                            symbolName: 'pedal01',
                            type: 'rect',
                            rect: ['1489', '625', '321', '315', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1896', '996', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2800,
                    autoPlay: true,
                    data: [
                        [
                            "eid392",
                            "left",
                            0,
                            0,
                            "linear",
                            "${FLOW_R2Copy4}",
                            '1023px',
                            '1023px'
                        ],
                        [
                            "eid386",
                            "top",
                            0,
                            0,
                            "linear",
                            "${FLOW_R1Copy2}",
                            '760px',
                            '760px'
                        ],
                        [
                            "eid370",
                            "top",
                            0,
                            0,
                            "linear",
                            "${FLOW_R2Copy4}",
                            '561px',
                            '561px'
                        ],
                        [
                            "eid375",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${FLOW_R1Copy2}",
                            '90deg',
                            '90deg'
                        ],
                        [
                            "eid391",
                            "left",
                            0,
                            0,
                            "linear",
                            "${FLOW_R2}",
                            '718px',
                            '718px'
                        ],
                        [
                            "eid271",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pedal012}",
                            '625px',
                            '625px'
                        ],
                        [
                            "eid364",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${FLOW_R2Copy4}",
                            '270deg',
                            '270deg'
                        ],
                        [
                            "eid390",
                            "left",
                            0,
                            0,
                            "linear",
                            "${FLOW_R1Copy2}",
                            '1423px',
                            '1423px'
                        ]
                    ]
                }
            },
            "airFlow": {
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
                            id: 'air_src',
                            tag: 'img',
                            rect: [-78, 0, '1578', '272', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/air_src.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1307, 272]
                        }
                    }
                },
                timeline: {
                    duration: 700,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            700,
                            "linear",
                            "${air_src}",
                            '-78px',
                            '-107px'
                        ]
                    ]
                }
            },
            "flow_movie": {
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
                            id: 'flow_src',
                            tag: 'img',
                            rect: [0, 0, '1786px', '8', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 1500, 8]
                        }
                    }
                },
                timeline: {
                    duration: 1400,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "left",
                            0,
                            800,
                            "linear",
                            "${flow_src}",
                            '0px',
                            '-63px'
                        ]
                    ]
                }
            },
            "FLOW_R1": {
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
                            id: 'flow_r1',
                            tag: 'img',
                            rect: [0, 0, '13', '245', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_r1.png']
                        },
                        {
                            rect: [-744, -525, 1500, 8, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'flow_movie2',
                            symbolName: 'flow_movie',
                            transform: [[0, 0, 0], ['-90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 11, 200]
                        }
                    }
                },
                timeline: {
                    duration: 1200,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "FLOW_R2": {
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
                            id: 'flow_r2',
                            tag: 'img',
                            rect: [0, 0, 900, '13', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_r2.png']
                        },
                        {
                            rect: [-361, 2, 1500, 8, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'flow_movie3',
                            symbolName: 'flow_movie',
                            transform: [[0, 0, 0], ['180', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 600, 10]
                        }
                    }
                },
                timeline: {
                    duration: 1200,
                    autoPlay: true,
                    data: [
                        [
                            "eid387",
                            "top",
                            0,
                            0,
                            "linear",
                            "${flow_movie3}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid345",
                            "left",
                            0,
                            0,
                            "linear",
                            "${flow_movie3}",
                            '-361px',
                            '-361px'
                        ]
                    ]
                }
            },
            "FLOW_R3": {
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
                            id: 'flow_r3',
                            tag: 'img',
                            rect: [0, 0, '13', '250', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_r3.png']
                        },
                        {
                            rect: [-743, -118, 1500, 8, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'flow_movie2',
                            symbolName: 'flow_movie',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 13, 250]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "FLOW_B1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '13', '211', 'auto', 'auto'],
                            id: 'flow_b1',
                            fill: ['rgba(0,0,0,0)', 'images/flow_b1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [-743, -509, 1500, 8, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'flow_movie2Copy',
                            symbolName: 'flow_movie',
                            transform: [[0, 0, 0], ['-90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 13, 211]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "FLOW_B2": {
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
                            id: 'flow_b2',
                            tag: 'img',
                            rect: [0, 0, 853, '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_b2.png']
                        },
                        {
                            rect: [-376, 2, 1500, 8, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'flow_movie3',
                            symbolName: 'flow_movie',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 853, 12]
                        }
                    }
                },
                timeline: {
                    duration: 1200,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "FLOW_B3": {
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
                            id: 'flow_b3',
                            tag: 'img',
                            rect: [0, 0, '13', '206', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_b3.png']
                        },
                        {
                            rect: [-743, -154, 1500, 8, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'flow_movie2Copy2',
                            symbolName: 'flow_movie',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 13, 206]
                        }
                    }
                },
                timeline: {
                    duration: 1200,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "THROTTLE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '28', '109', 'auto', 'auto'],
                            tag: 'img',
                            id: 'throttle',
                            transform: [[0, 0, 0], ['60', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/throttle.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 28, 109]
                        }
                    }
                },
                timeline: {
                    duration: 2800,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "rotateZ",
                            0,
                            800,
                            "linear",
                            "${throttle}",
                            '60deg',
                            '0deg'
                        ],
                        [
                            "eid4",
                            "rotateZ",
                            1400,
                            800,
                            "linear",
                            "${throttle}",
                            '0deg',
                            '60deg'
                        ]
                    ]
                }
            },
            "AFS_MOVIE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '335', '229', 'auto', 'auto'],
                            id: 'AFS',
                            fill: ['rgba(0,0,0,0)', 'images/AFS.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/AFS_white.png'],
                            id: 'AFS_white',
                            opacity: '0',
                            rect: [0, 0, '335', '230', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 335, 230]
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pedal01": {
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
                            id: 'pedal01',
                            rect: [0, 0, '321px', '315px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pedal01.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['11', 0, 0], [0, 0], [1, 1, 1], ['16.56%', '6.44%']],
                            id: 'pedal02',
                            type: 'image',
                            rect: [105, 23, '153px', '321px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pedal02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 321, 315]
                        }
                    }
                },
                timeline: {
                    duration: 2800,
                    autoPlay: true,
                    data: [
                        [
                            "eid66",
                            "rotateZ",
                            0,
                            800,
                            "linear",
                            "${pedal02}",
                            '11deg',
                            '0deg'
                        ],
                        [
                            "eid321",
                            "rotateZ",
                            1400,
                            800,
                            "linear",
                            "${pedal02}",
                            '0deg',
                            '11deg'
                        ]
                    ]
                }
            },
            "tps": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 175, 138]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "line01": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'flow_r6',
                            type: 'image',
                            rect: [0, 0, '483px', '4px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_r6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 483, 4]
                        }
                    }
                },
                timeline: {
                    duration: 1010,
                    autoPlay: true,
                    data: [
                        [
                            "eid155",
                            "left",
                            0,
                            1010,
                            "linear",
                            "${flow_r6}",
                            '0px',
                            '-52px'
                        ]
                    ]
                }
            },
            "bg01": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 483, 4, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'line01',
                            symbolName: 'line01',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 443, 4]
                        }
                    }
                },
                timeline: {
                    duration: 1010,
                    autoPlay: true,
                    data: [
                        [
                            "eid158",
                            "top",
                            0,
                            0,
                            "linear",
                            "${line01}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid159",
                            "left",
                            0,
                            0,
                            "linear",
                            "${line01}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "bg01_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 483, 4, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'line012',
                            symbolName: 'line01',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 200, 4]
                        }
                    }
                },
                timeline: {
                    duration: 1010,
                    autoPlay: true,
                    data: [
                        [
                            "eid199",
                            "top",
                            0,
                            0,
                            "linear",
                            "${line012}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid198",
                            "left",
                            0,
                            0,
                            "linear",
                            "${line012}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "bg01_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-33, 0, 483, 4, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'line013',
                            symbolName: 'line01',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 330, 4]
                        }
                    }
                },
                timeline: {
                    duration: 1010,
                    autoPlay: true,
                    data: [
                        [
                            "eid228",
                            "left",
                            0,
                            0,
                            "linear",
                            "${line013}",
                            '-33px',
                            '-33px'
                        ],
                        [
                            "eid227",
                            "top",
                            0,
                            0,
                            "linear",
                            "${line013}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "TPS_mov": {
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
                            id: 'tps',
                            rect: [0, 0, '156px', '157px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tps.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tps012',
                            opacity: '0',
                            rect: ['0', '0', '158px', '159px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tps01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 156, 157]
                        }
                    }
                },
                timeline: {
                    duration: 1071,
                    autoPlay: true,
                    data: [
                        [
                            "eid348",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${tps012}",
                            '0',
                            '1'
                        ],
                        [
                            "eid349",
                            "opacity",
                            567,
                            504,
                            "linear",
                            "${tps012}",
                            '0.999679',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-32546357");
