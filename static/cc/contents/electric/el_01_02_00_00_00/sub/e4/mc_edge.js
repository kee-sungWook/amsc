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
                            rect: ['707', '266', '13', '245', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'FLOW_R2',
                            symbolName: 'FLOW_R2',
                            type: 'rect',
                            rect: ['719', '266', '750', '13', 'auto', 'auto'],
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
                            id: 'tps',
                            symbolName: 'tps',
                            type: 'rect',
                            rect: ['599', '372', '175', '138', 'auto', 'auto']
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
                            rect: ['456', '317', '143', '80', 'auto', 'auto'],
                            text: "TPS",
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
                            id: 'txt_c1',
                            type: 'text',
                            rect: ['12', '473', '200', '55', 'auto', 'auto'],
                            text: "엔진으로",
                            align: "auto",
                            font: ['굴림', [49, ""], "rgb(76,76,76)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['81', '113', '1782', '55', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​스로틀포지션센서(TPS1,2)는 운전자의 가속의지(스로틀의 개도)를 감지하여 ECM에 전기적 신호로 송신하는 역할을 하는 센서입니다.</p>",
                            align: "auto",
                            font: ['굴림', [50, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['81', '16', '403', '81', 'auto', 'auto'],
                            text: "Tps1,2 ",
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
                            id: 'bg01',
                            symbolName: 'bg01',
                            type: 'rect',
                            rect: ['924', '822', '443', '4', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'bg01_1',
                            symbolName: 'bg01_1',
                            type: 'rect',
                            rect: ['1341', '751', '200', '4', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],['-45']]
                        },
                        {
                            id: 'bg01_2',
                            symbolName: 'bg01_2',
                            type: 'rect',
                            rect: ['642', '705', '330', '4', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],['46']]
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
                    duration: 2300,
                    autoPlay: true,
                    data: [
                        [
                            "eid249",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${bg01_2}",
                            '46deg',
                            '46deg'
                        ],
                        [
                            "eid284",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bg01}",
                            '822px',
                            '822px'
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
                            "eid205",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${bg01_1}",
                            '-45deg',
                            '-45deg'
                        ],
                        [
                            "eid282",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bg01}",
                            '924px',
                            '924px'
                        ],
                        [
                            "eid246",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bg01_2}",
                            '705px',
                            '705px'
                        ],
                        [
                            "eid215",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bg01_1}",
                            '751px',
                            '751px'
                        ],
                        [
                            "eid247",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bg01_2}",
                            '642px',
                            '642px'
                        ],
                        [
                            "eid213",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bg01_1}",
                            '1341px',
                            '1341px'
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
                            rect: [-78, 0, '1578', '272', 'auto', 'auto'],
                            id: 'air_src',
                            fill: ['rgba(0,0,0,0)', 'images/air_src.png'],
                            type: 'image',
                            tag: 'img'
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
                            rect: [0, 0, '1786px', '8', 'auto', 'auto'],
                            id: 'flow_src',
                            fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                            type: 'image',
                            tag: 'img'
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
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "left",
                            0,
                            1000,
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
                            rect: [null, null, 13, 245]
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
                            rect: [0, 0, '750', '13', 'auto', 'auto'],
                            id: 'flow_r2',
                            fill: ['rgba(0,0,0,0)', 'images/flow_r2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            transform: [[0, 0, 0], ['180', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'visible',
                            id: 'flow_movie3',
                            symbolName: 'flow_movie',
                            rect: [-750, 2, 1500, 8, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 750, 13]
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
                            rect: [0, 0, '13', '250', 'auto', 'auto'],
                            id: 'flow_r3',
                            fill: ['rgba(0,0,0,0)', 'images/flow_r3.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'visible',
                            id: 'flow_movie2',
                            symbolName: 'flow_movie',
                            rect: [-743, -118, 1500, 8, 'auto', 'auto'],
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
                            type: 'image',
                            id: 'flow_b1',
                            tag: 'img',
                            rect: [0, 0, '13', '211', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_b1.png']
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
                    duration: 1000,
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
                    duration: 1000,
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
                            fill: ['rgba(0,0,0,0)', 'images/throttle.png'],
                            id: 'throttle',
                            transform: [[0, 0, 0], ['45', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 28, 109]
                        }
                    }
                },
                timeline: {
                    duration: 1733,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "rotateZ",
                            0,
                            800,
                            "linear",
                            "${throttle}",
                            '45deg',
                            '30deg'
                        ],
                        [
                            "eid4",
                            "rotateZ",
                            867,
                            800,
                            "linear",
                            "${throttle}",
                            '30deg',
                            '45deg'
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
                            type: 'image',
                            id: 'AFS',
                            tag: 'img',
                            rect: [0, 0, '335', '229', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/AFS.png']
                        },
                        {
                            rect: [0, 0, '335', '230', 'auto', 'auto'],
                            tag: 'img',
                            id: 'AFS_white',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/AFS_white.png']
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
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['16.56%', '6.44%']],
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
                    duration: 2300,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pedal02}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid42",
                            "rotateZ",
                            0,
                            833,
                            "linear",
                            "${pedal02}",
                            '0deg',
                            '11deg'
                        ],
                        [
                            "eid66",
                            "rotateZ",
                            1167,
                            700,
                            "linear",
                            "${pedal02}",
                            '11deg',
                            '0deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            2300,
                            0,
                            "linear",
                            "${pedal02}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid41",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${pedal02}",
                            [16.56,6.44],
                            [16.56,6.44],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid305",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${pedal02}",
                            [16.56,6.44],
                            [16.56,6.44],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid306",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${pedal02}",
                            [16.56,6.44],
                            [16.56,6.44],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid307",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${pedal02}",
                            [16.56,6.44],
                            [16.56,6.44],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid308",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${pedal02}",
                            [16.56,6.44],
                            [16.56,6.44],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid310",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${pedal02}",
                            [16.56,6.44],
                            [16.56,6.44],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid38",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pedal02}",
                            '105px',
                            '105px'
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
                        {
                            type: 'image',
                            id: 'tps2',
                            rect: [0, 0, 175, 138, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tps.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tps01',
                            opacity: '0',
                            rect: [1, -1, 175, 108, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tps01.png', '0px', '0px']
                        }
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
                        [
                            "eid133",
                            "opacity",
                            0,
                            746,
                            "linear",
                            "${tps01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            746,
                            754,
                            "linear",
                            "${tps01}",
                            '1',
                            '0'
                        ]
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
                            type: 'image',
                            id: 'flow_r6',
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
                            "eid159",
                            "left",
                            0,
                            0,
                            "linear",
                            "${line01}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid158",
                            "top",
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-32546357");
