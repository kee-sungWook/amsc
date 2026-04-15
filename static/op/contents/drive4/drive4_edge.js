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
                            id: 'road_first',
                            type: 'image',
                            rect: ['0px', '86px', '2560px', '1357px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"road_first.png",'0px','0px']
                        },
                        {
                            id: 'ROAD_LINE_CLIP',
                            symbolName: 'ROAD_LINE_CLIP',
                            type: 'rect',
                            rect: ['2576', '478px', '246', '38', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'CAR_AHEAD',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['1677', '593', '803', '427px', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'SENSOR',
                            symbolName: 'SENSOR',
                            type: 'rect',
                            rect: ['822px', '950px', '83', '57', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'CAR2',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['15px', '847px', 'undefined', '427px', 'auto', 'auto'],
                            opacity: '1'
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
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid166",
                            "left",
                            233,
                            1167,
                            "linear",
                            "${CAR2}",
                            '15px',
                            '363px'
                        ],
                        [
                            "eid170",
                            "left",
                            1400,
                            1400,
                            "linear",
                            "${CAR2}",
                            '363px',
                            '709px'
                        ],
                        [
                            "eid271",
                            "left",
                            4467,
                            1400,
                            "linear",
                            "${CAR2}",
                            '709px',
                            '363px'
                        ],
                        [
                            "eid270",
                            "left",
                            5867,
                            1167,
                            "linear",
                            "${CAR2}",
                            '363px',
                            '15px'
                        ],
                        [
                            "eid167",
                            "top",
                            233,
                            1167,
                            "linear",
                            "${CAR2}",
                            '847px',
                            '766px'
                        ],
                        [
                            "eid171",
                            "top",
                            1400,
                            1400,
                            "linear",
                            "${CAR2}",
                            '766px',
                            '720px'
                        ],
                        [
                            "eid269",
                            "top",
                            4467,
                            1400,
                            "linear",
                            "${CAR2}",
                            '720px',
                            '766px'
                        ],
                        [
                            "eid268",
                            "top",
                            5867,
                            1167,
                            "linear",
                            "${CAR2}",
                            '766px',
                            '847px'
                        ],
                        [
                            "eid169",
                            "top",
                            233,
                            1167,
                            "linear",
                            "${SENSOR}",
                            '950px',
                            '869px'
                        ],
                        [
                            "eid294",
                            "top",
                            5866,
                            1167,
                            "linear",
                            "${SENSOR}",
                            '869px',
                            '950px'
                        ],
                        [
                            "eid168",
                            "left",
                            233,
                            1167,
                            "linear",
                            "${SENSOR}",
                            '822px',
                            '1170px'
                        ],
                        [
                            "eid293",
                            "left",
                            5866,
                            1167,
                            "linear",
                            "${SENSOR}",
                            '1170px',
                            '822px'
                        ],
                            [ "eid172", "trigger", 1400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', ['signal'] ] ],
                            [ "eid274", "trigger", 5133, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', ['normal'] ] ]
                    ]
                }
            },
            "ROAD_LINE_CLIP": {
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
                            id: 'road_line',
                            tag: 'img',
                            rect: ['0px', '0px', '246', '38', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        },
                        {
                            type: 'image',
                            id: 'road_lineCopy',
                            tag: 'img',
                            rect: ['0px', '0px', '246', '38', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        },
                        {
                            type: 'image',
                            id: 'road_lineCopy2',
                            tag: 'img',
                            rect: ['0px', '0px', '246', '38', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        },
                        {
                            type: 'image',
                            id: 'road_lineCopy3',
                            tag: 'img',
                            rect: ['0px', '0px', '246', '38', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        },
                        {
                            type: 'image',
                            id: 'road_lineCopy4',
                            tag: 'img',
                            rect: ['0px', '0px', '246', '38', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        },
                        {
                            type: 'image',
                            id: 'road_lineCopy5',
                            tag: 'img',
                            rect: ['0px', '0px', '246', '38', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        },
                        {
                            type: 'image',
                            id: 'road_lineCopy6',
                            tag: 'img',
                            rect: ['0px', '0px', '246', '38', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        },
                        {
                            type: 'image',
                            id: 'road_lineCopy7',
                            tag: 'img',
                            rect: ['0px', '0px', '246', '38', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '246px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 1433,
                    autoPlay: true,
                    labels: {
                        "re": 700
                    },
                    data: [
                        [
                            "eid70",
                            "left",
                            500,
                            733,
                            "linear",
                            "${road_lineCopy5}",
                            '0px',
                            '-2842px'
                        ],
                        [
                            "eid69",
                            "top",
                            500,
                            733,
                            "linear",
                            "${road_lineCopy5}",
                            '0px',
                            '359px'
                        ],
                        [
                            "eid61",
                            "top",
                            100,
                            733,
                            "linear",
                            "${road_lineCopy}",
                            '0px',
                            '359px'
                        ],
                        [
                            "eid66",
                            "top",
                            300,
                            733,
                            "linear",
                            "${road_lineCopy3}",
                            '0px',
                            '359px'
                        ],
                        [
                            "eid63",
                            "left",
                            200,
                            733,
                            "linear",
                            "${road_lineCopy2}",
                            '0px',
                            '-2842px'
                        ],
                        [
                            "eid65",
                            "left",
                            300,
                            733,
                            "linear",
                            "${road_lineCopy3}",
                            '0px',
                            '-2842px'
                        ],
                        [
                            "eid68",
                            "top",
                            400,
                            733,
                            "linear",
                            "${road_lineCopy4}",
                            '0px',
                            '359px'
                        ],
                        [
                            "eid64",
                            "top",
                            200,
                            733,
                            "linear",
                            "${road_lineCopy2}",
                            '0px',
                            '359px'
                        ],
                        [
                            "eid62",
                            "left",
                            100,
                            733,
                            "linear",
                            "${road_lineCopy}",
                            '0px',
                            '-2842px'
                        ],
                        [
                            "eid67",
                            "left",
                            400,
                            733,
                            "linear",
                            "${road_lineCopy4}",
                            '0px',
                            '-2842px'
                        ],
                        [
                            "eid74",
                            "top",
                            700,
                            733,
                            "linear",
                            "${road_lineCopy7}",
                            '0px',
                            '359px'
                        ],
                        [
                            "eid59",
                            "left",
                            0,
                            733,
                            "linear",
                            "${road_line}",
                            '0px',
                            '-2842px'
                        ],
                        [
                            "eid73",
                            "left",
                            700,
                            733,
                            "linear",
                            "${road_lineCopy7}",
                            '0px',
                            '-2842px'
                        ],
                        [
                            "eid71",
                            "top",
                            600,
                            733,
                            "linear",
                            "${road_lineCopy6}",
                            '0px',
                            '359px'
                        ],
                        [
                            "eid60",
                            "top",
                            0,
                            733,
                            "linear",
                            "${road_line}",
                            '0px',
                            '359px'
                        ],
                        [
                            "eid72",
                            "left",
                            600,
                            733,
                            "linear",
                            "${road_lineCopy6}",
                            '0px',
                            '-2842px'
                        ]
                    ]
                }
            },
            "CAR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['54px', '236px', '733', '181', 'auto', 'auto'],
                            tag: 'img',
                            id: 'car_shadow',
                            opacity: '0.29803921568627',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png']
                        },
                        {
                            type: 'image',
                            id: 'car_body',
                            tag: 'img',
                            rect: ['0px', '50px', '803', '360', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png']
                        },
                        {
                            rect: ['371', '57px', '77', '44', 'auto', 'auto'],
                            id: 'SIGNAL_OUTDOOR',
                            symbolName: 'SIGNAL_OUTDOOR',
                            type: 'rect'
                        },
                        {
                            rect: ['215', '315px', '90', '82', 'auto', 'auto'],
                            id: 'WHEEL_1ST',
                            symbolName: 'WHEEL_1ST',
                            type: 'rect'
                        },
                        {
                            rect: ['678', '265px', '79', '68', 'auto', 'auto'],
                            id: 'WHEEL_2ND',
                            symbolName: 'WHEEL_2ND',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '803px', '427px']
                        }
                    }
                },
                timeline: {
                    duration: 700,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "signal": 200
                    },
                    data: [
                            [ "eid103", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SIGNAL_OUTDOOR}', [0] ] ],
                            [ "eid104", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_OUTDOOR}', [] ] ]
                    ]
                }
            },
            "SIGNAL_OUTDOOR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-90px', '-52px', '257', '148', 'auto', 'auto'],
                            tag: 'img',
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'signal1_src',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal1_src.png']
                        },
                        {
                            rect: ['-90px', '-52px', '257', '148', 'auto', 'auto'],
                            tag: 'img',
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'signal1_srcCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal1_src.png']
                        },
                        {
                            rect: ['-90px', '-52px', '257', '148', 'auto', 'auto'],
                            tag: 'img',
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'signal1_srcCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal1_src.png']
                        },
                        {
                            rect: ['-90px', '-52px', '257', '148', 'auto', 'auto'],
                            tag: 'img',
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'signal1_srcCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal1_src.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '77px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid89",
                            "scaleY",
                            133,
                            300,
                            "linear",
                            "${signal1_srcCopy2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${signal1_src}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            67,
                            300,
                            "linear",
                            "${signal1_srcCopy}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            0,
                            133,
                            "linear",
                            "${signal1_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            133,
                            167,
                            "linear",
                            "${signal1_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            200,
                            300,
                            "linear",
                            "${signal1_srcCopy3}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid82",
                            "scaleX",
                            67,
                            300,
                            "linear",
                            "${signal1_srcCopy}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid83",
                            "opacity",
                            67,
                            133,
                            "linear",
                            "${signal1_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            200,
                            167,
                            "linear",
                            "${signal1_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid87",
                            "opacity",
                            133,
                            133,
                            "linear",
                            "${signal1_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            267,
                            167,
                            "linear",
                            "${signal1_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${signal1_src}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            200,
                            300,
                            "linear",
                            "${signal1_srcCopy3}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            133,
                            300,
                            "linear",
                            "${signal1_srcCopy2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            200,
                            133,
                            "linear",
                            "${signal1_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            333,
                            167,
                            "linear",
                            "${signal1_srcCopy3}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "WHEEL_1ST": {
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
                            id: 'wheel1-2',
                            opacity: '0',
                            rect: ['0px', '0px', '90px', '82px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel1-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'wheel1-1',
                            opacity: '1',
                            rect: ['0px', '0px', '90px', '82px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel1-1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 133,
                    autoPlay: true,
                    data: [
                        [
                            "eid99",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel1-2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid101",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${wheel1-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel1-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid102",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${wheel1-1}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "WHEEL_2ND": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '68px', 'auto', 'auto'],
                            id: 'wheel2-2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel2-2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '79px', '68px', 'auto', 'auto'],
                            id: 'wheel2-1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel2-1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '79px', '68px']
                        }
                    }
                },
                timeline: {
                    duration: 133,
                    autoPlay: true,
                    data: [
                        [
                            "eid94",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel2-2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid98",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${wheel2-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel2-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${wheel2-1}",
                            '1',
                            '0'
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
                            type: 'image',
                            id: 'sensor_src',
                            opacity: '1',
                            rect: ['606px', '-69px', '83px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sensor_srcCopy2',
                            opacity: '1',
                            rect: ['606px', '-69px', '83px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sensor_srcCopy3',
                            opacity: '1',
                            rect: ['606px', '-69px', '83px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sensor_srcCopy4',
                            opacity: '1',
                            rect: ['606px', '-69px', '83px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sensor_srcCopy5',
                            opacity: '1',
                            rect: ['606px', '-69px', '83px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sensor_srcCopy6',
                            opacity: '1',
                            rect: ['606px', '-69px', '83px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sensor_srcCopy7',
                            opacity: '1',
                            rect: ['606px', '-69px', '83px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sensor_srcCopy8',
                            opacity: '1',
                            rect: ['606px', '-69px', '83px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 1900,
                    autoPlay: true,
                    labels: {
                        "gogo": 867
                    },
                    data: [
                        [
                            "eid178",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sensor_src}",
                            '1',
                            '1'
                        ],
                        [
                            "eid112",
                            "opacity",
                            773,
                            193,
                            "linear",
                            "${sensor_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "top",
                            133,
                            967,
                            "linear",
                            "${sensor_srcCopy2}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid180",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sensor_srcCopy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            1307,
                            193,
                            "linear",
                            "${sensor_srcCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid109",
                            "top",
                            0,
                            967,
                            "linear",
                            "${sensor_src}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid128",
                            "left",
                            533,
                            967,
                            "linear",
                            "${sensor_srcCopy5}",
                            '0px',
                            '606px'
                        ],
                        [
                            "eid116",
                            "left",
                            133,
                            967,
                            "linear",
                            "${sensor_srcCopy2}",
                            '0px',
                            '606px'
                        ],
                        [
                            "eid120",
                            "left",
                            267,
                            967,
                            "linear",
                            "${sensor_srcCopy3}",
                            '0px',
                            '606px'
                        ],
                        [
                            "eid133",
                            "top",
                            800,
                            967,
                            "linear",
                            "${sensor_srcCopy7}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid192",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sensor_srcCopy6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1442,
                            191,
                            "linear",
                            "${sensor_srcCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid186",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sensor_srcCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid115",
                            "opacity",
                            907,
                            193,
                            "linear",
                            "${sensor_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid182",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sensor_srcCopy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            1709,
                            191,
                            "linear",
                            "${sensor_srcCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "left",
                            0,
                            967,
                            "linear",
                            "${sensor_src}",
                            '0px',
                            '606px'
                        ],
                        [
                            "eid137",
                            "top",
                            933,
                            967,
                            "linear",
                            "${sensor_srcCopy8}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid117",
                            "top",
                            267,
                            967,
                            "linear",
                            "${sensor_srcCopy3}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid132",
                            "left",
                            667,
                            967,
                            "linear",
                            "${sensor_srcCopy6}",
                            '0px',
                            '606px'
                        ],
                        [
                            "eid184",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sensor_srcCopy7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            1575,
                            191,
                            "linear",
                            "${sensor_srcCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid124",
                            "left",
                            400,
                            967,
                            "linear",
                            "${sensor_srcCopy4}",
                            '0px',
                            '606px'
                        ],
                        [
                            "eid190",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sensor_srcCopy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            1040,
                            193,
                            "linear",
                            "${sensor_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid121",
                            "top",
                            400,
                            967,
                            "linear",
                            "${sensor_srcCopy4}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid125",
                            "top",
                            533,
                            967,
                            "linear",
                            "${sensor_srcCopy5}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid129",
                            "top",
                            667,
                            967,
                            "linear",
                            "${sensor_srcCopy6}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid140",
                            "left",
                            933,
                            967,
                            "linear",
                            "${sensor_srcCopy8}",
                            '0px',
                            '606px'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sensor_srcCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            1173,
                            193,
                            "linear",
                            "${sensor_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid136",
                            "left",
                            800,
                            967,
                            "linear",
                            "${sensor_srcCopy7}",
                            '0px',
                            '606px'
                        ]
                    ]
                }
            },
            "SIGNAL_INCAR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-204px', '-206px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'Ellipse',
                            stroke: [10, 'rgba(237,30,121,1.00)', 'solid'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-204px', '-206px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'EllipseCopy',
                            stroke: [10, 'rgba(237,30,121,1.00)', 'solid'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-204px', '-206px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'EllipseCopy2',
                            stroke: [10, 'rgba(237,30,121,1.00)', 'solid'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-204px', '-206px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'EllipseCopy3',
                            stroke: [10, 'rgba(237,30,121,1.00)', 'solid'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-204px', '-206px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'EllipseCopy4',
                            stroke: [10, 'rgba(237,30,121,1.00)', 'solid'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '103px']
                        }
                    }
                },
                timeline: {
                    duration: 700,
                    autoPlay: true,
                    data: [
                        [
                            "eid248",
                            "scaleY",
                            200,
                            433,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid244",
                            "scaleY",
                            133,
                            433,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid233",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${Ellipse}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            0,
                            200,
                            "easeInQuad",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            200,
                            233,
                            "easeInQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid252",
                            "scaleY",
                            267,
                            433,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid242",
                            "opacity",
                            133,
                            200,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid243",
                            "opacity",
                            333,
                            233,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid245",
                            "scaleX",
                            200,
                            433,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid238",
                            "opacity",
                            67,
                            200,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "opacity",
                            267,
                            233,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid246",
                            "opacity",
                            200,
                            200,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid247",
                            "opacity",
                            400,
                            233,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid241",
                            "scaleX",
                            133,
                            433,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${Ellipse}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid250",
                            "opacity",
                            267,
                            200,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid251",
                            "opacity",
                            467,
                            233,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid249",
                            "scaleX",
                            267,
                            433,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid240",
                            "scaleY",
                            67,
                            433,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid237",
                            "scaleX",
                            67,
                            433,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0.2',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive4_edgeActions.js");
})("EDGE-11485079");
