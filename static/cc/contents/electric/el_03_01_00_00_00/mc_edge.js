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
                            id: 'lines',
                            type: 'image',
                            tag: 'img',
                            rect: ['281', '379', '1330', '675', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"lines.png"]
                        },
                        {
                            id: 'TIRE1',
                            symbolName: 'TIRE',
                            type: 'rect',
                            rect: ['76', '252', '517', '140', 'auto', 'auto']
                        },
                        {
                            id: 'TIRE2',
                            symbolName: 'TIRE',
                            type: 'rect',
                            rect: ['1283', '252', '517', '140', 'auto', 'auto']
                        },
                        {
                            id: 'TIRE3',
                            symbolName: 'TIRE',
                            type: 'rect',
                            rect: ['76', '1041', '517', '140', 'auto', 'auto']
                        },
                        {
                            id: 'TIRE4',
                            symbolName: 'TIRE',
                            type: 'rect',
                            rect: ['1283', '1041', '517', '140', 'auto', 'auto']
                        },
                        {
                            id: 'TIREWHEEL1',
                            symbolName: 'TIREWHEEL',
                            type: 'rect',
                            rect: ['244', '367', '205', '26', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'TIREWHEEL2',
                            symbolName: 'TIREWHEEL',
                            type: 'rect',
                            rect: ['1449', '367', '205', '26', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'TIREWHEEL3',
                            symbolName: 'TIREWHEEL',
                            type: 'rect',
                            rect: ['244', '1040', '205', '26', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'TIREWHEEL4',
                            symbolName: 'TIREWHEEL',
                            type: 'rect',
                            rect: ['1449', '1040', '205', '26', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'SENSOR_LINE',
                            symbolName: 'SENSOR_LINE',
                            type: 'rect',
                            rect: ['402', '429', '1097', '576', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'SENSOR',
                            symbolName: 'SENSOR',
                            type: 'rect',
                            rect: ['345', '402', '1210', '631', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'FLOW',
                            symbolName: 'FLOW',
                            type: 'rect',
                            rect: ['644', '669', '451', '231', 'auto', 'auto']
                        },
                        {
                            id: 'cylinder_pedal',
                            type: 'image',
                            tag: 'img',
                            rect: ['814', '772', '155', '155', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cylinder_pedal.png"]
                        },
                        {
                            id: 'cylinder_body',
                            type: 'image',
                            tag: 'img',
                            rect: ['616', '789', '258', '195', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cylinder_body.png"]
                        },
                        {
                            id: 'MODULE',
                            symbolName: 'MODULE',
                            type: 'rect',
                            rect: ['1022', '580', '168', '115', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'parts',
                            type: 'image',
                            tag: 'img',
                            rect: ['724', '460', '234', '266', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"parts.png"]
                        },
                        {
                            id: 'txt_c1',
                            type: 'text',
                            rect: ['1057', '608', '92', '49', 'auto', 'auto'],
                            opacity: '0',
                            text: "모듈",
                            align: "center",
                            font: ['굴림', [44, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['252px', '36px', '1632px', '231px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​ABS는 브레이크 작동 시 바퀴 잠김에 의한 차량 제어 불가 상황을 예방하기 위해 </p><p style=\"margin: 0px;\">컴퓨터로 브레이크를 제어 해주는 장치입니다.</p><p style=\"margin: 0px;\">ESC는 브레이크를 조작하지 않은 상황에서도 차량의 자세가 안정적으로 유지되도록 </p><p style=\"margin: 0px;\">제동력 및 구동력을 적절히 제어하는 역할을 합니다. ESC는 ABS 기능을 포함합니다.</p><p style=\"margin: 0px;\">​</p>",
                            align: "auto",
                            font: ['나눔고딕', [44, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['5px', '66', '289px', '76', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​ESC</p>",
                            align: "center",
                            font: ['나눔고딕', [70, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1900', '1230', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5933,
                    autoPlay: true,
                    labels: {
                        "gogo": 1733
                    },
                    data: [
                        [
                            "eid41",
                            "opacity",
                            567,
                            566,
                            "linear",
                            "${parts}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            867,
                            566,
                            "linear",
                            "${cylinder_body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            1000,
                            566,
                            "linear",
                            "${SENSOR}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            1000,
                            566,
                            "linear",
                            "${SENSOR_LINE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            734,
                            566,
                            "linear",
                            "${txt_c1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            226,
                            707,
                            "easeOutQuad",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            1133,
                            433,
                            "linear",
                            "${lines}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            734,
                            566,
                            "linear",
                            "${MODULE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            867,
                            566,
                            "linear",
                            "${cylinder_pedal}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            707,
                            "easeOutQuad",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "rotateZ",
                            2000,
                            1000,
                            "linear",
                            "${cylinder_pedal}",
                            '0deg',
                            '45deg'
                        ],
                        [
                            "eid93",
                            "rotateZ",
                            4733,
                            1000,
                            "linear",
                            "${cylinder_pedal}",
                            '45deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "MODULE": {
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
                            fill: ['rgba(0,0,0,0)', 'images/module_normal.png'],
                            id: 'module_normal',
                            rect: [1, 1, '166', '113', 'auto', 'auto'],
                            display: 'block',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/module_red.png'],
                            id: 'module_red',
                            rect: [0, 0, '168', '114', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/module_whiteLine.png'],
                            id: 'module_whiteLine',
                            opacity: '0',
                            rect: [0, 0, '168', '115', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 168, 115]
                        }
                    }
                },
                timeline: {
                    duration: 800,
                    autoPlay: false,
                    labels: {
                        "gogo": 67
                    },
                    data: [
                        [
                            "eid10",
                            "display",
                            67,
                            0,
                            "linear",
                            "${module_normal}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "opacity",
                            67,
                            333,
                            "linear",
                            "${module_whiteLine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            467,
                            333,
                            "linear",
                            "${module_whiteLine}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${module_red}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            67,
                            0,
                            "linear",
                            "${module_red}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "FLOW_SRC_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '778', '6', 'auto', 'auto'],
                            id: 'flow_src',
                            fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 670, 6]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${flow_src}",
                            '0px',
                            '-110px'
                        ]
                    ]
                }
            },
            "FLOW": {
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
                            fill: ['rgba(0,0,0,0)', 'images/flow_back.png'],
                            id: 'flow_back',
                            opacity: '0',
                            rect: [0, 3, '451', '225', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            rect: ['5', '85', 6, 146, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'FLOW3',
                            symbolName: 'FLOW3',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['5', '85', 441, 6, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'FLOW2',
                            symbolName: 'FLOW2',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['440', '0', 6, 91, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'FLOW1',
                            symbolName: 'FLOW1',
                            type: 'rect',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 451, 231]
                        }
                    }
                },
                timeline: {
                    duration: 833,
                    autoPlay: false,
                    labels: {
                        "gogo": 33
                    },
                    data: [
                        [
                            "eid29",
                            "opacity",
                            33,
                            800,
                            "linear",
                            "${FLOW3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            33,
                            800,
                            "linear",
                            "${flow_back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            33,
                            800,
                            "linear",
                            "${FLOW2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            33,
                            800,
                            "linear",
                            "${FLOW1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "SENSOR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1210', '631', 'auto', 'auto'],
                            id: 'sensor_back',
                            fill: ['rgba(0,0,0,0)', 'images/sensor_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sensor_WR2.png'],
                            id: 'sensor_WR2',
                            opacity: '0',
                            rect: [16, 12, '1179', '606', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sensor_WR1.png'],
                            id: 'sensor_WR1',
                            opacity: '0',
                            rect: [16, 12, '1179', '606', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1210, 631]
                        }
                    }
                },
                timeline: {
                    duration: 633,
                    autoPlay: false,
                    labels: {
                        "gogo": 67
                    },
                    data: [
                        [
                            "eid14",
                            "opacity",
                            67,
                            166,
                            "linear",
                            "${sensor_WR1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            267,
                            166,
                            "linear",
                            "${sensor_WR1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16",
                            "opacity",
                            267,
                            166,
                            "linear",
                            "${sensor_WR2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            467,
                            166,
                            "linear",
                            "${sensor_WR2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "TIREWHEEL": {
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
                            id: 'tire_wheel',
                            tag: 'img',
                            rect: [0, 0, '205', '26', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_wheel.png']
                        },
                        {
                            type: 'image',
                            id: 'tire_wheel_line',
                            rect: [-116, 1, '321px', 24, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_wheel_line.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 205, 26]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${tire_wheel_line}",
                            '-116px',
                            '0px'
                        ]
                    ]
                }
            },
            "TIRE": {
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
                            id: 'tire_body',
                            tag: 'img',
                            rect: [113, 22, '315', '96', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_body.png']
                        },
                        {
                            type: 'image',
                            id: 'tire_gradi',
                            tag: 'img',
                            rect: [23, 13, '88', '114', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_gradi.png']
                        },
                        {
                            type: 'image',
                            id: 'tire_cover',
                            tag: 'img',
                            rect: [0, 0, '517', '140', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_cover.png']
                        },
                        {
                            type: 'image',
                            id: 'tire_outLIne',
                            tag: 'img',
                            rect: [111, 21, '318', '98', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_outLIne.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 517, 140]
                        }
                    }
                },
                timeline: {
                    duration: 1267,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "left",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${tire_gradi}",
                            '23px',
                            '429px'
                        ]
                    ]
                }
            },
            "SENSOR_LINE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1097', '576', 'auto', 'auto'],
                            id: 'sensor_line_normal',
                            fill: ['rgba(0,0,0,0)', 'images/sensor_line_normal.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sensor_line_red.png'],
                            id: 'sensor_line_red',
                            opacity: '0',
                            rect: [0, 0, '1097', '576', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1097, 576]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "gogo": 33
                    },
                    data: [
                        [
                            "eid20",
                            "opacity",
                            33,
                            467,
                            "linear",
                            "${sensor_line_red}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "FLOW1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'FLOW_SRC_MOVE3',
                            symbolName: 'FLOW_SRC_MOVE',
                            rect: [-332, 251, 670, 6, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 91]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "FLOW2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['180', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'FLOW_SRC_MOVE2',
                            symbolName: 'FLOW_SRC_MOVE',
                            rect: [-167, 0, 670, 6, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 441, 6]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "FLOW3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'FLOW_SRC_MOVE',
                            symbolName: 'FLOW_SRC_MOVE',
                            rect: [-332, 36, 670, 6, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 146]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-27202022");
