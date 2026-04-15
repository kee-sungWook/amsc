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
                            rect: ['199', '414', '1540', '677', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car.png"]
                        },
                        {
                            id: 'wall',
                            type: 'image',
                            tag: 'img',
                            rect: ['47', '465', '38', '572', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"wall.png"]
                        },
                        {
                            id: 'wallCopy',
                            type: 'image',
                            tag: 'img',
                            rect: ['1852', '465', '38', '572', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"wall.png"]
                        },
                        {
                            id: 'SIGN',
                            symbolName: 'SIGN',
                            type: 'rect',
                            rect: ['129', '476', '1643', '552', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'tm',
                            type: 'image',
                            tag: 'img',
                            rect: ['750', '738', '68', '25', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tm.png"]
                        },
                        {
                            id: 'parts',
                            type: 'image',
                            tag: 'img',
                            rect: ['188', '531', '1525', '443', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"parts.png"]
                        },
                        {
                            id: 'MODULE',
                            symbolName: 'MODULE',
                            type: 'rect',
                            rect: ['584', '938', '139', '99', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'R',
                            type: 'text',
                            rect: ['759', '600', '72', '106', 'auto', 'auto'],
                            opacity: '0',
                            text: "R",
                            align: "center",
                            font: ['Arial Black', [86, ""], "rgb(0,121,255)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'D',
                            type: 'text',
                            rect: ['759', '600', '72', '106', 'auto', 'auto'],
                            opacity: '0',
                            text: "D",
                            align: "center",
                            font: ['Arial Black', [86, ""], "rgb(241,89,36)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c3',
                            type: 'text',
                            rect: ['1456', '391', '262', '49', 'auto', 'auto'],
                            opacity: '0',
                            text: "후방감지센서",
                            align: "center",
                            font: ['굴림', [43, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c2',
                            type: 'text',
                            rect: ['181', '391', '262', '49', 'auto', 'auto'],
                            opacity: '0',
                            text: "전방감지센서",
                            align: "center",
                            font: ['굴림', [43, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c1',
                            type: 'text',
                            rect: ['698', '557', '176', '49', 'auto', 'auto'],
                            opacity: '0',
                            text: "변속레버",
                            align: "auto",
                            font: ['굴림', [43, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['719', '131', '1058', '106', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">전후방 주차보조시스템은 장애물 존재여부를 확인하여 전후진시 편의성을 확보하기 위한 장치 입니다.​</p><p style=\"margin:0px\">​ (PDW, Parking Distance Warning)</p>",
                            align: "auto",
                            font: ['나눔고딕', [46, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['148', '137', '486', '76', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​주차거리 경고</p>",
                            align: "center",
                            font: ['나눔고딕', [70, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""],
                            transform: [[],[],[],['0.95','0.95']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1930', '1230', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 9155,
                    autoPlay: true,
                    labels: {
                        "gogo": 1767
                    },
                    data: [
                        [
                            "eid150",
                            "opacity",
                            0,
                            333,
                            "easeOutQuad",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "scaleX",
                            233,
                            333,
                            "easeOutQuad",
                            "${txt2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid149",
                            "scaleY",
                            233,
                            333,
                            "easeOutQuad",
                            "${txt2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            5619,
                            253,
                            "easeOutQuad",
                            "${R}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "opacity",
                            900,
                            200,
                            "easeOutQuad",
                            "${MODULE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "left",
                            5935,
                            847,
                            "easeOutQuad",
                            "${wallCopy}",
                            '1852px',
                            '1732px'
                        ],
                        [
                            "eid158",
                            "opacity",
                            800,
                            200,
                            "easeOutQuad",
                            "${txt_c3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            1033,
                            200,
                            "easeOutQuad",
                            "${parts}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "scaleX",
                            0,
                            333,
                            "easeOutQuad",
                            "${txt1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid165",
                            "left",
                            2233,
                            641,
                            "easeOutQuad",
                            "${wall}",
                            '47px',
                            '135px'
                        ],
                        [
                            "eid159",
                            "opacity",
                            1167,
                            200,
                            "easeOutQuad",
                            "${tm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "left",
                            500,
                            300,
                            "easeOutQuad",
                            "${car}",
                            '199px',
                            '179px'
                        ],
                        [
                            "eid157",
                            "opacity",
                            1300,
                            200,
                            "easeOutQuad",
                            "${SIGN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid151",
                            "opacity",
                            233,
                            333,
                            "easeOutQuad",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "scaleY",
                            0,
                            333,
                            "easeOutQuad",
                            "${txt1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid171",
                            "opacity",
                            5935,
                            847,
                            "easeOutQuad",
                            "${wallCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            8585,
                            190,
                            "easeOutQuad",
                            "${wallCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid152",
                            "opacity",
                            500,
                            300,
                            "easeOutQuad",
                            "${car}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            2000,
                            233,
                            "easeOutQuad",
                            "${D}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            5429,
                            190,
                            "easeOutQuad",
                            "${D}",
                            '1',
                            '0'
                        ],
                        [
                            "eid163",
                            "opacity",
                            800,
                            200,
                            "easeOutQuad",
                            "${txt_c1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            800,
                            200,
                            "easeOutQuad",
                            "${txt_c2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            2233,
                            641,
                            "easeOutQuad",
                            "${wall}",
                            '0',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            4761,
                            225,
                            "easeOutQuad",
                            "${wall}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "SIGNAL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '140', '140', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.4', '0.4', 1], ['50%', '50%']],
                            id: 'signal_src',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 0, '140', '140', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.4', '0.4', 1], ['50%', '50%']],
                            id: 'signal_srcCopy',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 0, '140', '140', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.4', '0.4', 1], ['50%', '50%']],
                            id: 'signal_srcCopy2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 140, 140]
                        }
                    }
                },
                timeline: {
                    duration: 667,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "scaleX",
                            267,
                            400,
                            "linear",
                            "${signal_srcCopy}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            0,
                            400,
                            "linear",
                            "${signal_src}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            400,
                            "linear",
                            "${signal_src}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid15",
                            "scaleY",
                            267,
                            400,
                            "linear",
                            "${signal_srcCopy}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            267,
                            200,
                            "linear",
                            "${signal_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            467,
                            200,
                            "linear",
                            "${signal_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${signal_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${signal_src}",
                            '1',
                            '0'
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
                            rect: [1, 1, '138', '98', 'auto', 'auto'],
                            display: 'block',
                            id: 'module_signal',
                            fill: ['rgba(0,0,0,0)', 'images/module_signal.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 0, '139', '99', 'auto', 'auto'],
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/module_whiteLine.png'],
                            id: 'module_whiteLine',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [1, 1, '138', '98', 'auto', 'auto'],
                            display: 'block',
                            id: 'module_normal',
                            fill: ['rgba(0,0,0,0)', 'images/module_normal.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'text',
                            rect: [12, 8, '114', '77', 'auto', 'auto'],
                            id: 'IPM',
                            text: 'IPM\r(BCM)',
                            align: 'center',
                            font: ['굴림', [36, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', '', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 139, 99]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "signal": 167
                    },
                    data: [
                        [
                            "eid60",
                            "display",
                            167,
                            0,
                            "linear",
                            "${module_normal}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "linear",
                            "${module_signal}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            167,
                            0,
                            "linear",
                            "${module_signal}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${module_whiteLine}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            167,
                            0,
                            "linear",
                            "${module_whiteLine}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "opacity",
                            167,
                            100,
                            "linear",
                            "${module_whiteLine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            300,
                            100,
                            "linear",
                            "${module_whiteLine}",
                            '0.9966670274734497',
                            '0'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_M1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-30, 0, '441px', '4px', 'auto', 'auto'],
                            id: 'LINE_BLACK',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/LINE_BLACK.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 65, 5]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid64",
                            "left",
                            0,
                            167,
                            "linear",
                            "${LINE_BLACK}",
                            '-30px',
                            '-18px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_M2": {
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
                            id: 'LINE_BLACK2',
                            rect: [-218, 194, '441px', '4px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/LINE_BLACK.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 5, 215]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid65",
                            "top",
                            0,
                            167,
                            "linear",
                            "${LINE_BLACK2}",
                            '194px',
                            '206px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_M3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-30, 0, '441px', '4px', 'auto', 'auto'],
                            id: 'LINE_BLACK3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/LINE_BLACK.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 160, 5]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid66",
                            "left",
                            0,
                            167,
                            "linear",
                            "${LINE_BLACK3}",
                            '-30px',
                            '-42px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_F1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-25, 0, '670px', '4px', 'auto', 'auto'],
                            id: 'LINE_RED',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 112, 5]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid67",
                            "left",
                            0,
                            167,
                            "linear",
                            "${LINE_RED}",
                            '-25px',
                            '-14px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_F2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-25, 0, '670px', '4px', 'auto', 'auto'],
                            id: 'LINE_RED2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 287, 5]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid69",
                            "left",
                            0,
                            167,
                            "linear",
                            "${LINE_RED2}",
                            '-25px',
                            '-13px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_F3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-25, 0, '670px', '4px', 'auto', 'auto'],
                            id: 'LINE_RED',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 112, 5]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "left",
                            0,
                            167,
                            "linear",
                            "${LINE_RED}",
                            '-25px',
                            '-14px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_F4": {
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
                            id: 'LINE_RED3',
                            rect: [-333, -116, '670px', '4px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 5, 208]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid71",
                            "top",
                            0,
                            167,
                            "linear",
                            "${LINE_RED3}",
                            '-116px',
                            '-128px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_F5": {
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
                            id: 'LINE_RED3',
                            rect: [-333, -128, '670px', '4px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 5, 206]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid73",
                            "top",
                            0,
                            167,
                            "linear",
                            "${LINE_RED3}",
                            '-128px',
                            '-116px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_F6": {
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
                            id: 'LINE_RED3Copy',
                            rect: [-333, -96, '670px', '4px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 4, 240]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid74",
                            "top",
                            0,
                            167,
                            "linear",
                            "${LINE_RED3Copy}",
                            '-96px',
                            '-84px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_B1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-14, 0, '670px', '4px', 'auto', 'auto'],
                            id: 'LINE_REDCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 120, 5]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid76",
                            "left",
                            0,
                            167,
                            "linear",
                            "${LINE_REDCopy}",
                            '-14px',
                            '-25px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_B2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-14, 0, '670px', '4px', 'auto', 'auto'],
                            id: 'LINE_REDCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 542, 5]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid77",
                            "left",
                            0,
                            167,
                            "linear",
                            "${LINE_REDCopy2}",
                            '-14px',
                            '-25px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_B3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-14, 0, '670px', '4px', 'auto', 'auto'],
                            id: 'LINE_REDCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 120, 5]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid78",
                            "left",
                            0,
                            167,
                            "linear",
                            "${LINE_REDCopy3}",
                            '-14px',
                            '-25px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_B4": {
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
                            id: 'LINE_RED3Copy2',
                            rect: [-333, -128, '670px', '4px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 4, 189]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid80",
                            "top",
                            0,
                            167,
                            "linear",
                            "${LINE_RED3Copy2}",
                            '-128px',
                            '-116px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_B5": {
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
                            id: 'LINE_RED3Copy3',
                            rect: [-333, -116, '670px', '4px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 5, 189]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid81",
                            "top",
                            0,
                            167,
                            "linear",
                            "${LINE_RED3Copy3}",
                            '-116px',
                            '-128px'
                        ]
                    ]
                }
            },
            "SIGNAL_FLOW_B6": {
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
                            id: 'LINE_RED3Copy5',
                            rect: [-333, -96, '670px', '4px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 5, 239]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid84",
                            "top",
                            0,
                            167,
                            "linear",
                            "${LINE_RED3Copy5}",
                            '-96px',
                            '-84px'
                        ]
                    ]
                }
            },
            "SIGN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [495, 516, 542, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_B7',
                            symbolName: 'SIGNAL_FLOW_B2',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [1034, 275, 5, 239, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_B6',
                            symbolName: 'SIGNAL_FLOW_B6',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [1438, 274, 5, 189, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_B5',
                            symbolName: 'SIGNAL_FLOW_B5',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [1438, 89, 4, 189, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_B4',
                            symbolName: 'SIGNAL_FLOW_B4',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [1438, 460, 120, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_B3',
                            symbolName: 'SIGNAL_FLOW_B3',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [1034, 275, 542, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_B2',
                            symbolName: 'SIGNAL_FLOW_B2',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [1439, 89, 120, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_B1',
                            symbolName: 'SIGNAL_FLOW_B1',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [1485, 392, 140, 140, 'auto', 'auto'],
                            id: 'SIGNAL_R3',
                            symbolName: 'SIGNAL',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [1503, 205, 140, 140, 'auto', 'auto'],
                            id: 'SIGNAL_R2',
                            symbolName: 'SIGNAL',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [1485, 20, 140, 140, 'auto', 'auto'],
                            id: 'SIGNAL_R1',
                            symbolName: 'SIGNAL',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [348, 273, 4, 240, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_F6',
                            symbolName: 'SIGNAL_FLOW_F6',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [237, 71, 5, 206, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_F5',
                            symbolName: 'SIGNAL_FLOW_F5',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [237, 273, 5, 208, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_F4',
                            symbolName: 'SIGNAL_FLOW_F4',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [129, 478, 112, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_F3',
                            symbolName: 'SIGNAL_FLOW_F3',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [65, 273, 287, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_F2',
                            symbolName: 'SIGNAL_FLOW_F2',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [125, 71, 112, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_F1',
                            symbolName: 'SIGNAL_FLOW_F1',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [348, 511, 112, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_F1Copy',
                            symbolName: 'SIGNAL_FLOW_F1',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [52, 412, 140, 140, 'auto', 'auto'],
                            id: 'SIGNAL_L3',
                            symbolName: 'SIGNAL',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [0, 205, 140, 140, 'auto', 'auto'],
                            id: 'SIGNAL_L2',
                            symbolName: 'SIGNAL',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [50, 0, 140, 140, 'auto', 'auto'],
                            id: 'SIGNAL_L1',
                            symbolName: 'SIGNAL',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [558, 321, 140, 140, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.35', '1.35', 1], ['50%', '50%']],
                            id: 'SIGNAL_handle',
                            symbolName: 'SIGNAL',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [590, 482, 160, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_M3',
                            symbolName: 'SIGNAL_FLOW_M3',
                            type: 'rect'
                        },
                        {
                            rect: [746, 271, 5, 215, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_M2',
                            symbolName: 'SIGNAL_FLOW_M2',
                            type: 'rect'
                        },
                        {
                            rect: [685, 271, 65, 5, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'SIGNAL_FLOW_M1',
                            symbolName: 'SIGNAL_FLOW_M1',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1643, 552]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "front": 1000,
                        "rear": 2000
                    },
                    data: [
                        [
                            "eid99",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_R1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_R1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_handle}",
                            '1.35',
                            '1.35'
                        ],
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F1Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_handle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${SIGNAL_handle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid175",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${SIGNAL_L3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid178",
                            "display",
                            1000,
                            0,
                            "easeOutQuad",
                            "${SIGNAL_L3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid181",
                            "display",
                            2000,
                            0,
                            "easeOutQuad",
                            "${SIGNAL_L3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${SIGNAL_L1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid176",
                            "display",
                            1000,
                            0,
                            "easeOutQuad",
                            "${SIGNAL_L1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid179",
                            "display",
                            2000,
                            0,
                            "easeOutQuad",
                            "${SIGNAL_L1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid122",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_R2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid129",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_R2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid174",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${SIGNAL_L2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            1000,
                            0,
                            "easeOutQuad",
                            "${SIGNAL_L2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "display",
                            2000,
                            0,
                            "easeOutQuad",
                            "${SIGNAL_L2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_F6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_handle}",
                            '1.35',
                            '1.35'
                        ],
                        [
                            "eid97",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_R3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_R3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SIGNAL_FLOW_B1}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-19782588");
