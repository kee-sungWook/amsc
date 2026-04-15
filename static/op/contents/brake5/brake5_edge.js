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
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'road',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '118', '2560', '1198', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.png"]
                        },
                        {
                            id: 'CAR2',
                            symbolName: 'CAR2',
                            type: 'rect',
                            rect: ['-711px', '671px', '670', '312', 'auto', 'auto'],
                            autoOrient: true,
                            transform: [[],['-55']]
                        },
                        {
                            id: 'CAR1',
                            symbolName: 'CAR1',
                            type: 'rect',
                            rect: ['-760px', '656px', '696', '327', 'auto', 'auto'],
                            autoOrient: true,
                            transform: [[],['-36']]
                        },
                        {
                            id: 'memo_main',
                            type: 'image',
                            rect: ['-252px', '404px', '208px', '238px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"memo_main.png",'0px','0px']
                        },
                        {
                            id: 'SECONDVIEW',
                            symbolName: 'SECONDVIEW',
                            type: 'rect',
                            rect: ['1889px', '447px', '339', '810', 'auto', 'auto']
                        },
                        {
                            id: 'FIRSTVIEW',
                            symbolName: 'FIRSTVIEW',
                            type: 'rect',
                            rect: ['1254', '326', '339', '810', 'auto', 'auto']
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(140,142,144,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10367,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "rotateZ",
                            2234,
                            1804,
                            "linear",
                            "${CAR2}",
                            '-51deg',
                            '-63deg'
                        ],
                        [
                            "eid74",
                            "rotateZ",
                            4038,
                            831,
                            "linear",
                            "${CAR2}",
                            '-63deg',
                            '-22deg'
                        ],
                        [
                            "eid72",
                            "rotateZ",
                            4869,
                            3147,
                            "linear",
                            "${CAR2}",
                            '-22deg',
                            '-68deg'
                        ],
                        [
                            "eid77",
                            "rotateZ",
                            8016,
                            2351,
                            "linear",
                            "${CAR2}",
                            '-68deg',
                            '-55deg'
                        ],
                        [
                            "eid66",
                            "rotateZ",
                            101,
                            8133,
                            "linear",
                            "${CAR1}",
                            '-36deg',
                            '-38deg'
                        ],
                        [
                            "eid65",
                            "location",
                            101,
                            8133,
                            "linear",
                            "${CAR1}",
                            [[-402, 1087.5, 0, 0, 0, 0,0],[751.16, 566.89, 1313.54, 288.12, 1250.89, 274.38,1296.28],[1540.26, 792.78, 2017.79, 541.57, 1176.05, 315.65,2117.55],[3032, 352.5, 0, 0, 0, 0,3719.41]]
                        ],
                        [
                            "eid69",
                            "location",
                            2234,
                            2413,
                            "linear",
                            "${CAR2}",
                            [[-356.06, 1187, 0, 0, 0, 0,0],[34.21, 759.56, 710.52, -459.88, 723.18, -468.07,583.71],[599.82, 568.32, 0, 0, 0, 0,1185.12]]
                        ],
                        [
                            "eid73",
                            "location",
                            4647,
                            1028,
                            "linear",
                            "${CAR2}",
                            [[599.82, 568.32, 78.04, -7.17, 0, 0,0],[679.76, 563.6, 283.97, -7.59, 81.84, -2.19,80.09],[973.66, 643.84, 0, 0, 0, 0,386.21]]
                        ],
                        [
                            "eid71",
                            "location",
                            5675,
                            1559,
                            "linear",
                            "${CAR2}",
                            [[973.66, 643.84, 698.37, 340.89, 0, 0,0],[1653.01, 962.4, 96.98, 4.64, 621.35, 29.75,755.94],[1749.05, 962.71, 0, 0, 0, 0,852]]
                        ],
                        [
                            "eid75",
                            "location",
                            7234,
                            782,
                            "linear",
                            "${CAR2}",
                            [[1749.05, 962.71, 437.96, -18.01, 0, 0,0],[2163.68, 868.44, 0, 0, 0, 0,426.16]]
                        ],
                        [
                            "eid76",
                            "location",
                            8016,
                            2351,
                            "linear",
                            "${CAR2}",
                            [[2163.68, 868.44, 1720, -705.92, 0, 0,0],[3127, 43, 0, 0, 0, 0,1284.57]]
                        ],
                        [
                            "eid94",
                            "location",
                            1877,
                            6883,
                            "linear",
                            "${memo_main}",
                            [[-148, 523, 0, 0, 0, 0,0],[736.03, 307.71, 1068.21, 101.17, 1320.55, 125.06,922.19],[1756.21, 598.38, 1961.38, 81.26, 1004.81, 41.63,1987.36],[2676, 237, 0, 0, 0, 0,3012.76]]
                        ],
                            [ "eid144", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${FIRSTVIEW}', [0] ] ],
                            [ "eid147", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', [0] ] ],
                            [ "eid145", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SECONDVIEW}', [0] ] ],
                            [ "eid146", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR1}', [0] ] ],
                            [ "eid86", "trigger", 100.66666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR1}', ['down'] ] ],
                            [ "eid93", "trigger", 2233.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR2}', [] ] ],
                            [ "eid135", "trigger", 3633.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${FIRSTVIEW}', [] ] ],
                            [ "eid148", "trigger", 5100.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SECONDVIEW}', [] ] ]
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
                            rect: ['0px', '0px', '102', '36', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_body.png']
                        },
                        {
                            rect: ['-10px', '1px', '247px', '33px', 'auto', 'auto'],
                            id: 'tread',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tread.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '102px', '36px', 'auto', 'auto'],
                            id: 'tire_og',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tire_og.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '102px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 233.33333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "left",
                            0,
                            233,
                            "linear",
                            "${tread}",
                            '0px',
                            '-10px'
                        ]
                    ]
                }
            },
            "CAR2": {
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
                            id: 'car2_back',
                            tag: 'img',
                            rect: ['0px', '0px', '670', '312', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car2_back.png']
                        },
                        {
                            type: 'image',
                            id: 'car2_line',
                            tag: 'img',
                            rect: ['3px', '3px', '664', '306', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car2_line.png']
                        },
                        {
                            rect: ['72px', '241px', '102', '36', 'auto', 'auto'],
                            id: 'TIRE_RB',
                            symbolName: 'TIRE',
                            type: 'rect'
                        },
                        {
                            rect: ['72px', '33px', '102', '36', 'auto', 'auto'],
                            id: 'TIRE_RT',
                            symbolName: 'TIRE',
                            type: 'rect'
                        },
                        {
                            rect: ['517px', '241px', '102', '36', 'auto', 'auto'],
                            id: 'TIRE_FB',
                            symbolName: 'TIRE',
                            type: 'rect'
                        },
                        {
                            rect: ['517px', '33px', '102', '36', 'auto', 'auto'],
                            id: 'TIRE_FT',
                            symbolName: 'TIRE',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '670px', '312px']
                        }
                    }
                },
                timeline: {
                    duration: 7720,
                    autoPlay: false,
                    data: [
                        [
                            "eid87",
                            "rotateZ",
                            487,
                            2000,
                            "easeOutQuad",
                            "${TIRE_FT}",
                            '0deg',
                            '20deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            2520,
                            2000,
                            "easeOutQuad",
                            "${TIRE_FT}",
                            '20deg',
                            '0deg'
                        ],
                        [
                            "eid89",
                            "rotateZ",
                            4720,
                            3000,
                            "easeOutQuad",
                            "${TIRE_FT}",
                            '0deg',
                            '-20deg'
                        ],
                        [
                            "eid90",
                            "rotateZ",
                            487,
                            2000,
                            "easeOutQuad",
                            "${TIRE_FB}",
                            '0deg',
                            '20deg'
                        ],
                        [
                            "eid91",
                            "rotateZ",
                            2520,
                            2000,
                            "easeOutQuad",
                            "${TIRE_FB}",
                            '20deg',
                            '0deg'
                        ],
                        [
                            "eid92",
                            "rotateZ",
                            4720,
                            3000,
                            "easeOutQuad",
                            "${TIRE_FB}",
                            '0deg',
                            '-20deg'
                        ]
                    ]
                }
            },
            "CAR1": {
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
                            id: 'car1_back',
                            tag: 'img',
                            rect: ['0px', '0px', '696', '327', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1_back.png']
                        },
                        {
                            rect: ['77px', '250px', '102', '36', 'auto', 'auto'],
                            id: 'TIRE_R2',
                            symbolName: 'TIRE',
                            type: 'rect'
                        },
                        {
                            rect: ['77px', '42px', '102', '36', 'auto', 'auto'],
                            id: 'TIRE_R1',
                            symbolName: 'TIRE',
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-20'], [0, 0, 0], [1, 1, 1]],
                            id: 'TIRE_FB',
                            symbolName: 'TIRE',
                            rect: ['522px', '250px', '102', '36', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-20'], [0, 0, 0], [1, 1, 1]],
                            id: 'TIRE_FT',
                            symbolName: 'TIRE',
                            rect: ['522px', '42px', '102', '36', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'car1_line',
                            tag: 'img',
                            rect: ['2px', '2px', '691', '323', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1_line.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '696px', '327px']
                        }
                    }
                },
                timeline: {
                    duration: 7733,
                    autoPlay: false,
                    labels: {
                        "down": 500,
                        "mid": 2533,
                        "up": 4733
                    },
                    data: [
                        [
                            "eid78",
                            "rotateZ",
                            500,
                            2000,
                            "easeOutQuad",
                            "${TIRE_FT}",
                            '0deg',
                            '20deg'
                        ],
                        [
                            "eid82",
                            "rotateZ",
                            2533,
                            2000,
                            "easeOutQuad",
                            "${TIRE_FT}",
                            '20deg',
                            '0deg'
                        ],
                        [
                            "eid84",
                            "rotateZ",
                            4733,
                            3000,
                            "easeOutQuad",
                            "${TIRE_FT}",
                            '0deg',
                            '-20deg'
                        ],
                        [
                            "eid79",
                            "rotateZ",
                            500,
                            2000,
                            "easeOutQuad",
                            "${TIRE_FB}",
                            '0deg',
                            '20deg'
                        ],
                        [
                            "eid83",
                            "rotateZ",
                            2533,
                            2000,
                            "easeOutQuad",
                            "${TIRE_FB}",
                            '20deg',
                            '0deg'
                        ],
                        [
                            "eid85",
                            "rotateZ",
                            4733,
                            3000,
                            "easeOutQuad",
                            "${TIRE_FB}",
                            '0deg',
                            '-20deg'
                        ]
                    ]
                }
            },
            "MBLUE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '268px', '268px', 'auto', 'auto'],
                            id: 'memo_blue',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/memo_blue.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['39px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '60px', '', ''],
                            text: 'SPIN<br>DOWN',
                            font: ['Arial, Helvetica, sans-serif', [60, 'px'], 'rgba(12,140,196,1.00)', '900', 'none solid rgb(102, 102, 102)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['104', '172', '60', '62', 'auto', 'auto'],
                            id: 'B_ARROW',
                            symbolName: 'B_ARROW',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268px', '268px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "B_ARROW": {
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
                            id: 'arrow_blue',
                            opacity: '0',
                            rect: ['0px', '-20px', '60px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arrow_blue.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '60px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid96",
                            "top",
                            0,
                            233,
                            "linear",
                            "${arrow_blue}",
                            '-20px',
                            '0px'
                        ],
                        [
                            "eid97",
                            "top",
                            266,
                            233,
                            "linear",
                            "${arrow_blue}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid99",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${arrow_blue}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            266,
                            234,
                            "linear",
                            "${arrow_blue}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "R_ARROW": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-20px', '60px', '62px', 'auto', 'auto'],
                            id: 'arrow_red',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow_red.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '60px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid117",
                            "top",
                            0,
                            233,
                            "linear",
                            "${arrow_red}",
                            '20px',
                            '0px'
                        ],
                        [
                            "eid121",
                            "top",
                            267,
                            233,
                            "linear",
                            "${arrow_red}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid118",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${arrow_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            267,
                            233,
                            "linear",
                            "${arrow_red}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "MBLUE2": {
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
                            id: 'memo_blue',
                            rect: ['0px', '0px', '268px', '268px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/memo_blue.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '36px', '268px', '120px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '60px', '', ''],
                            text: 'SPIN<br>DOWN',
                            font: ['Arial, Helvetica, sans-serif', [60, 'px'], 'rgba(12,140,196,1.00)', '700', 'none solid rgb(102, 102, 102)', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['104', '172', '60', '62', 'auto', 'auto'],
                            id: 'B_ARROW',
                            symbolName: 'B_ARROW',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268px', '268px']
                        }
                    }
                },
                timeline: {
                    duration: 367,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "MRED": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '268px', '268px', 'auto', 'auto'],
                            id: 'memo_red',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/memo_red.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '36px', '268px', '120px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '60px', '', ''],
                            text: 'SPIN<br>UP',
                            font: ['Arial, Helvetica, sans-serif', [60, 'px'], 'rgba(196,76,133,1.00)', '700', 'none solid rgb(102, 102, 102)', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['104px', '172px', null, null, 'auto', 'auto'],
                            id: 'R_ARROW',
                            symbolName: 'R_ARROW',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268px', '268px']
                        }
                    }
                },
                timeline: {
                    duration: 367,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "MRED2": {
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
                            id: 'memo_red',
                            rect: ['0px', '0px', '268px', '268px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/memo_red.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['64px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '60px', '', ''],
                            text: 'SPIN<br>UP',
                            font: ['Arial, Helvetica, sans-serif', [60, 'px'], 'rgba(196,76,133,1.00)', '900', 'none solid rgb(102, 102, 102)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['104px', '172px', null, null, 'auto', 'auto'],
                            id: 'R_ARROW',
                            symbolName: 'R_ARROW',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268px', '268px']
                        }
                    }
                },
                timeline: {
                    duration: 367,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "FIRSTVIEW": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'MRED',
                            symbolName: 'MRED',
                            rect: ['71px', '0px', null, null, 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'rect',
                            id: 'MBLUE2',
                            symbolName: 'MBLUE2',
                            rect: ['0px', '542px', null, null, 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '339px', '810px']
                        }
                    }
                },
                timeline: {
                    duration: 2333.3333333333,
                    autoPlay: false,
                    data: [
                        [
                            "eid130",
                            "opacity",
                            0,
                            333,
                            "linear",
                            "${MRED}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            2000,
                            333,
                            "linear",
                            "${MRED}",
                            '1',
                            '0'
                        ],
                        [
                            "eid128",
                            "opacity",
                            0,
                            333,
                            "linear",
                            "${MBLUE2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            2000,
                            333,
                            "linear",
                            "${MBLUE2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "SECONDVIEW": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'MBLUE',
                            symbolName: 'MBLUE',
                            rect: ['71px', '0px', '268', '268', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'rect',
                            id: 'MRED2',
                            symbolName: 'MRED2',
                            rect: ['0px', '542px', null, null, 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '339px', '810px']
                        }
                    }
                },
                timeline: {
                    duration: 2333,
                    autoPlay: false,
                    data: [
                        [
                            "eid134",
                            "opacity",
                            0,
                            333,
                            "linear",
                            "${MBLUE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            2000,
                            333,
                            "linear",
                            "${MBLUE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid132",
                            "opacity",
                            0,
                            333,
                            "linear",
                            "${MRED2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            2000,
                            333,
                            "linear",
                            "${MRED2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake5_edgeActions.js");
})("EDGE-1296556");
