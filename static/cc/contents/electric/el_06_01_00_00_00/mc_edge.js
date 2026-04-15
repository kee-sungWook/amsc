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
                            id: 'car',
                            type: 'image',
                            tag: 'img',
                            rect: ['525', '263', '1397', '870', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car.png"]
                        },
                        {
                            id: 'flow_back2',
                            type: 'image',
                            tag: 'img',
                            rect: ['652', '413', '540', '614', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"flow_back2.png"]
                        },
                        {
                            id: 'FLOW_B6',
                            symbolName: 'FLOW_B6',
                            type: 'rect',
                            rect: ['655', '410', '6', '340', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_B5',
                            symbolName: 'FLOW_B5',
                            type: 'rect',
                            rect: ['655', '744', '6', '235', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_B4',
                            symbolName: 'FLOW_B4',
                            type: 'rect',
                            rect: ['655', '744', '174', '6', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_B3',
                            symbolName: 'FLOW_B3',
                            type: 'rect',
                            rect: ['823', '744', '6', '280', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_B2',
                            symbolName: 'FLOW_B2',
                            type: 'rect',
                            rect: ['823', '1018', '366', '6', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_B1',
                            symbolName: 'FLOW_B1',
                            type: 'rect',
                            rect: ['1183', '870', '6', '154', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'flow_back1',
                            type: 'image',
                            tag: 'img',
                            rect: ['598', '471', '235', '448', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"flow_back1.png"]
                        },
                        {
                            id: 'FLOW_T4',
                            symbolName: 'FLOW_T4',
                            type: 'rect',
                            rect: ['602', '468', '6', '229', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_T3',
                            symbolName: 'FLOW_T3',
                            type: 'rect',
                            rect: ['602', '691', '6', '231', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_T2',
                            symbolName: 'FLOW_T2',
                            type: 'rect',
                            rect: ['602', '691', '227', '6', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_T1',
                            symbolName: 'FLOW_T1',
                            type: 'rect',
                            rect: ['824', '477', '6', '220', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'car_handle',
                            type: 'image',
                            tag: 'img',
                            rect: ['1195', '754', '122', '172', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car_handle.png"]
                        },
                        {
                            id: 'car_glass',
                            type: 'image',
                            tag: 'img',
                            rect: ['1039', '349', '675', '690', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car_glass.png"]
                        },
                        {
                            id: 'LIGHT_MOVIE',
                            symbolName: 'LIGHT_MOVIE',
                            type: 'rect',
                            rect: ['95', '204', '708', '980', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'parts',
                            type: 'image',
                            tag: 'img',
                            rect: ['770', '337', '251', '727', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"parts.png"]
                        },
                        {
                            id: 'GEN_MOVIE',
                            symbolName: 'GEN_MOVIE',
                            type: 'rect',
                            rect: ['701', '912', '67', '67', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt_c5',
                            type: 'text',
                            rect: ['1273', '868', '124', '94', 'auto', 'auto'],
                            opacity: '0',
                            text: "전조등<br>스위치",
                            align: "auto",
                            font: ['굴림', [40, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c4',
                            type: 'text',
                            rect: ['928', '1078', '84', '94', 'auto', 'auto'],
                            opacity: '0',
                            text: "퓨즈<br>박스",
                            align: "auto",
                            font: ['굴림', [40, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c3',
                            type: 'text',
                            rect: ['764', '1078', '124', '94', 'auto', 'auto'],
                            opacity: '0',
                            text: "릴레이<br>박스",
                            align: "center",
                            font: ['굴림', [40, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c2',
                            type: 'text',
                            rect: ['678', '857', '124', '46', 'auto', 'auto'],
                            opacity: '0',
                            text: "발전기",
                            align: "auto",
                            font: ['굴림', [40, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c1',
                            type: 'text',
                            rect: ['894', '346', '44', '142', 'auto', 'auto'],
                            opacity: '0',
                            text: "배<br>터<br>리",
                            align: "auto",
                            font: ['굴림', [40, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['695', '42', '1096', '106', 'auto', 'auto'],
                            opacity: '0',
                            text: "구형 전조등(할로겐 타입)의 전조등 점등 흐름도이며<br>별도의 모듈없이 전조등 스위치에서 작동합니다.",
                            align: "auto",
                            font: ['나눔고딕', [46, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['87', '22', '584', '145', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​전조등</p><p style=\"margin: 0px;\">(할로겐전구타입)</p>",
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
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid84",
                            "opacity",
                            0,
                            667,
                            "linear",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid102",
                            "left",
                            267,
                            667,
                            "linear",
                            "${LIGHT_MOVIE}",
                            '95px',
                            '55px'
                        ],
                        [
                            "eid90",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_T3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "left",
                            267,
                            667,
                            "linear",
                            "${car_handle}",
                            '1195px',
                            '1155px'
                        ],
                        [
                            "eid82",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_B2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_B3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_T2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_B6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_T4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            1200,
                            667,
                            "linear",
                            "${txt_c5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_B4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            1200,
                            667,
                            "linear",
                            "${txt_c4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${flow_back1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            1200,
                            667,
                            "linear",
                            "${txt_c3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            933,
                            667,
                            "linear",
                            "${parts}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_B1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            267,
                            667,
                            "linear",
                            "${car_glass}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            267,
                            667,
                            "linear",
                            "${LIGHT_MOVIE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            1033,
                            667,
                            "linear",
                            "${GEN_MOVIE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_T1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            1200,
                            667,
                            "linear",
                            "${txt_c1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "opacity",
                            267,
                            667,
                            "linear",
                            "${car_handle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            0,
                            667,
                            "linear",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "left",
                            267,
                            667,
                            "linear",
                            "${car_glass}",
                            '1039px',
                            '999px'
                        ],
                        [
                            "eid98",
                            "left",
                            267,
                            667,
                            "linear",
                            "${car}",
                            '525px',
                            '485px'
                        ],
                        [
                            "eid76",
                            "opacity",
                            267,
                            667,
                            "linear",
                            "${car}",
                            '0',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_B5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${flow_back2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            1200,
                            667,
                            "linear",
                            "${txt_c2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "left",
                            1333,
                            0,
                            "linear",
                            "${FLOW_T1}",
                            '824px',
                            '824px'
                        ]
                    ]
                }
            },
            "LIGHT_MOVIE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 196, '684', '784', 'auto', 'auto'],
                            tag: 'img',
                            id: 'light_angle2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/light_angle2.png']
                        },
                        {
                            rect: [0, 0, '684', '784', 'auto', 'auto'],
                            tag: 'img',
                            id: 'light_angle1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/light_angle1.png']
                        },
                        {
                            rect: [317, 31, '391', '920', 'auto', 'auto'],
                            tag: 'img',
                            id: 'lightOval',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lightOval.png']
                        },
                        {
                            rect: [498, 143, '182', '694', 'auto', 'auto'],
                            tag: 'img',
                            id: 'headLight_off',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/headLight_off.png']
                        },
                        {
                            rect: [498, 143, '182', '694', 'auto', 'auto'],
                            tag: 'img',
                            id: 'headLight_on',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/headLight_on.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 708, 980]
                        }
                    }
                },
                timeline: {
                    duration: 3367,
                    autoPlay: false,
                    labels: {
                        "gogo": 33,
                        "reGo": 1133
                    },
                    data: [
                        [
                            "eid11",
                            "opacity",
                            34,
                            1000,
                            "easeInQuad",
                            "${light_angle1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1133,
                            800,
                            "easeOutQuad",
                            "${light_angle1}",
                            '1',
                            '0.3'
                        ],
                        [
                            "eid30",
                            "opacity",
                            2000,
                            800,
                            "easeInQuad",
                            "${light_angle1}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid10",
                            "opacity",
                            34,
                            1000,
                            "easeInQuad",
                            "${lightOval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1133,
                            800,
                            "easeOutQuad",
                            "${lightOval}",
                            '1',
                            '0.3'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2000,
                            800,
                            "easeInQuad",
                            "${lightOval}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            34,
                            1000,
                            "easeInQuad",
                            "${headLight_on}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1133,
                            800,
                            "easeOutQuad",
                            "${headLight_on}",
                            '1',
                            '0.3'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2000,
                            800,
                            "easeInQuad",
                            "${headLight_on}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            34,
                            1000,
                            "easeInQuad",
                            "${light_angle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1133,
                            800,
                            "easeOutQuad",
                            "${light_angle2}",
                            '1',
                            '0.3'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2000,
                            800,
                            "easeInQuad",
                            "${light_angle2}",
                            '0.3',
                            '1'
                        ]
                    ]
                }
            },
            "GEN_MOVIE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            tag: 'img',
                            id: 'generator',
                            type: 'image',
                            rect: [0, 0, '67', '67', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/generator.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 67, 67]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${generator}",
                            '0deg',
                            '180deg'
                        ]
                    ]
                }
            },
            "FLOW_T1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-397, -151, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE2',
                            symbolName: 'FLOW_SRC_MOVIE',
                            transform: [[0, 0, 0], ['-90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 220]
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
            "FLOW_T2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-66, 1, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE4',
                            symbolName: 'FLOW_SRC_MOVIE',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 227, 6]
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
            "FLOW_T3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-397, -151, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE2',
                            symbolName: 'FLOW_SRC_MOVIE',
                            transform: [[0, 0, 0], ['-90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 231]
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
            "FLOW_T4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-397, 241, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE3',
                            symbolName: 'FLOW_SRC_MOVIE',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 229]
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
                            rect: [-397, -151, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE2Copy',
                            symbolName: 'FLOW_SRC_MOVIE',
                            transform: [[0, 0, 0], ['-90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 154]
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
                            rect: [-66, 1, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE4',
                            symbolName: 'FLOW_SRC_MOVIE',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 366, 6]
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
                            rect: [-397, 241, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE3',
                            symbolName: 'FLOW_SRC_MOVIE',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 280]
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
            "FLOW_B4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-66, 1, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE4Copy',
                            symbolName: 'FLOW_SRC_MOVIE',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 174, 6]
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
            "FLOW_B5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-397, -151, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE2Copy2',
                            symbolName: 'FLOW_SRC_MOVIE',
                            transform: [[0, 0, 0], ['-90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 235]
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
            "FLOW_B6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-397, 241, 800, 4, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'FLOW_SRC_MOVIE3Copy',
                            symbolName: 'FLOW_SRC_MOVIE',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 340]
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
            "FLOW_SRC_MOVIE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, 1, 1], ['0%', '50%']],
                            id: 'flow_src2',
                            type: 'image',
                            rect: [0, 0, '838px', '4px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_src.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 800, 4]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "left",
                            0,
                            500,
                            "linear",
                            "${flow_src2}",
                            '0px',
                            '-34px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-28455542");
