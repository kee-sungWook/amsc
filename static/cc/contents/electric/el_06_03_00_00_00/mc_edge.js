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
                            rect: ['525', '263px', '1397', '870', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car.png"]
                        },
                        {
                            id: 'FLOW_D3',
                            symbolName: 'FLOW_D3',
                            type: 'rect',
                            rect: ['867', '753', '4', '396', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_D2',
                            symbolName: 'FLOW_D2',
                            type: 'rect',
                            rect: ['869', '1147', '705', '5', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW_D1',
                            symbolName: 'FLOW_D1',
                            type: 'rect',
                            rect: ['1571', '854', '5', '295', 'auto', 'auto'],
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
                            id: 'UNIT',
                            symbolName: 'UNIT',
                            type: 'rect',
                            rect: ['801', '632', '139', '124', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'MODULE',
                            type: 'image',
                            tag: 'img',
                            rect: ['1388', '518', '370', '353', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"MODULE.png"]
                        },
                        {
                            id: 'txt_c2',
                            type: 'text',
                            rect: ['743', '542', '265', '46', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​헤드램프</p><p style=\"margin: 0px;\">레벨링 유닛</p>",
                            align: "center",
                            font: ['굴림', [40, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c1',
                            type: 'text',
                            rect: ['1433', '623', '316', '142', 'auto', 'auto'],
                            opacity: '0',
                            text: "- 헤드램프 ON<br>- 속도 신호<br>- 센서 각도",
                            align: "auto",
                            font: ['굴림', [40, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['726px', '39px', '1140', '106', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​야간 및 저조도 상황에서 전방 가시거리를 최대한 확대하기 위한 목적으로 차량의 추가 램프 작동 여부와 로우빔 방향을 제어하는 주행안전 시스템입니다.</p><p style=\"margin: 0px;\">​(LBA, Low Beam Assist)</p>",
                            align: "auto",
                            font: ['나눔고딕', [46, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['28', '51', '705', '145', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​로우빔 보조</p>",
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
                            "eid108",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_D3}",
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
                            "eid104",
                            "opacity",
                            833,
                            667,
                            "linear",
                            "${UNIT}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "opacity",
                            833,
                            667,
                            "linear",
                            "${MODULE}",
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
                            "eid170",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${txt2}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid169",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${txt2}",
                            '726px',
                            '726px'
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
                            "eid110",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_D1}",
                            '0',
                            '1'
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
                            "eid112",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_D2}",
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
                            "eid48",
                            "opacity",
                            1333,
                            667,
                            "linear",
                            "${FLOW_T4}",
                            '0',
                            '1'
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
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/light_angle2.png'],
                            id: 'light_angle2',
                            opacity: '0',
                            rect: [-35, 196, 719, '784', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/light_angle1.png'],
                            id: 'light_angle1',
                            opacity: '0',
                            rect: [-35, 0, 719, '784', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            rect: [317, 63, 437, 848, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lightOval.png'],
                            id: 'lightOval',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lightOvalSide.png'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.9', 1, 1], ['50%', '50%']],
                            id: 'lightOvalSide',
                            opacity: '0',
                            rect: [-41, -2, 92, '982', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            rect: [498, 143, '182', '694', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/headLight_off.png'],
                            id: 'headLight_off',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/headLight_on.png'],
                            id: 'headLight_on',
                            opacity: '0',
                            rect: [498, 143, '182', '694', 'auto', 'auto'],
                            tag: 'img'
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
                            "eid154",
                            "width",
                            1133,
                            800,
                            "linear",
                            "${light_angle2}",
                            '719px',
                            '532px'
                        ],
                        [
                            "eid168",
                            "width",
                            2233,
                            800,
                            "linear",
                            "${light_angle2}",
                            '532px',
                            '719px'
                        ],
                        [
                            "eid153",
                            "left",
                            1133,
                            800,
                            "linear",
                            "${light_angle2}",
                            '-35px',
                            '152px'
                        ],
                        [
                            "eid167",
                            "left",
                            2233,
                            800,
                            "linear",
                            "${light_angle2}",
                            '152px',
                            '-35px'
                        ],
                        [
                            "eid152",
                            "width",
                            1133,
                            800,
                            "linear",
                            "${light_angle1}",
                            '719px',
                            '532px'
                        ],
                        [
                            "eid166",
                            "width",
                            2233,
                            800,
                            "linear",
                            "${light_angle1}",
                            '532px',
                            '719px'
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
                            "eid145",
                            "scaleX",
                            1133,
                            800,
                            "easeInQuad",
                            "${lightOval}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid164",
                            "scaleX",
                            2233,
                            800,
                            "easeInQuad",
                            "${lightOval}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            33,
                            1001,
                            "linear",
                            "${lightOvalSide}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            33,
                            1001,
                            "easeInQuad",
                            "${lightOval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "width",
                            1133,
                            800,
                            "linear",
                            "${lightOvalSide}",
                            '92px',
                            '351px'
                        ],
                        [
                            "eid163",
                            "width",
                            2233,
                            800,
                            "linear",
                            "${lightOvalSide}",
                            '351px',
                            '92px'
                        ],
                        [
                            "eid135",
                            "left",
                            1133,
                            800,
                            "linear",
                            "${lightOvalSide}",
                            '-41px',
                            '-20px'
                        ],
                        [
                            "eid162",
                            "left",
                            2233,
                            800,
                            "linear",
                            "${lightOvalSide}",
                            '-20px',
                            '-41px'
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
                            "eid151",
                            "left",
                            1133,
                            800,
                            "linear",
                            "${light_angle1}",
                            '-35px',
                            '152px'
                        ],
                        [
                            "eid165",
                            "left",
                            2233,
                            800,
                            "linear",
                            "${light_angle1}",
                            '152px',
                            '-35px'
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
                            type: 'image',
                            id: 'flow_src2',
                            rect: [0, 0, '838px', '4px', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, 1, 1], ['0%', '50%']],
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
            },
            "UNIT": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [1, 1, '137', '122', 'auto', 'auto'],
                            id: 'unit_normal',
                            fill: ['rgba(0,0,0,0)', 'images/unit_normal.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [1, 1, '137', '122', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/unit_red.png'],
                            display: 'none',
                            type: 'image',
                            id: 'unit_red',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/unit_whiteLine.png'],
                            id: 'unit_whiteLine',
                            opacity: '0',
                            rect: [0, 0, '139', '124', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 139, 124]
                        }
                    }
                },
                timeline: {
                    duration: 433,
                    autoPlay: false,
                    labels: {
                        "gogo": 33
                    },
                    data: [
                        [
                            "eid114",
                            "opacity",
                            33,
                            167,
                            "linear",
                            "${unit_whiteLine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid115",
                            "opacity",
                            233,
                            167,
                            "linear",
                            "${unit_whiteLine}",
                            '0.998004',
                            '0'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${unit_red}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            33,
                            0,
                            "linear",
                            "${unit_red}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "FLOW_D1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-90', 0, 0], [0, 0], [1, 1, 1], ['0%', '50%']],
                            overflow: 'hidden',
                            id: 'FLOW_SRC_RED_MOVIE2',
                            symbolName: 'FLOW_SRC_RED_MOVIE',
                            rect: [3, 295, 750, 5, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 5, 295]
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
            "FLOW_D2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-8, 0, 750, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'FLOW_SRC_RED_MOVIE3',
                            symbolName: 'FLOW_SRC_RED_MOVIE',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 705, 5]
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
            "FLOW_D3": {
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
                            id: 'FLOW_SRC_RED_MOVIE4',
                            symbolName: 'FLOW_SRC_RED_MOVIE',
                            rect: [-373, 312, 750, 5, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 4, 396]
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
            "FLOW_SRC_RED_MOVIE": {
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
                            rect: [0, 0, '837', '5', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_src2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 750, 5]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid120",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${flow_src}",
                            '0px',
                            '-88px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-28455542");
