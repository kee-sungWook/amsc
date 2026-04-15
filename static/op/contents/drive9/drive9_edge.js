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
                            id: 'SCENE2',
                            display: 'none',
                            type: 'group',
                            rect: ['-1', '0', '2562', '1994', 'auto', 'auto'],
                            c: [
                            {
                                id: 'board',
                                type: 'image',
                                tag: 'img',
                                rect: ['0px', '0', '2562', '1442', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"board.png"]
                            },
                            {
                                id: 'btn',
                                type: 'image',
                                tag: 'img',
                                rect: ['1598px', '522', '240', '93', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"btn.png"],
                                transform: [[],[],[],['0.9','0.9']]
                            },
                            {
                                id: 'hand',
                                type: 'image',
                                tag: 'img',
                                rect: ['1619px', '809px', '769', '1445', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"hand.png"],
                                transform: [[],[],[],['1.1','1.1']]
                            }]
                        },
                        {
                            id: 'SCENE1',
                            display: 'block',
                            type: 'group',
                            rect: ['-1992', '70', '4552', '1111', 'auto', 'auto'],
                            c: [
                            {
                                id: 'LAMP_CLIP',
                                symbolName: 'LAMP_CLIP',
                                type: 'rect',
                                rect: ['1384px', '0px', '3165px', '477', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                id: 'ROAD_CLIP',
                                symbolName: 'ROAD_CLIP',
                                type: 'rect',
                                rect: ['1538px', '356px', '3014', '755', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                id: 'CAR_CLIP1',
                                symbolName: 'CAR_CLIP',
                                type: 'rect',
                                rect: ['2448px', '406px', 'undefined', 'undefined', 'auto', 'auto'],
                                transform: [[],[],[],['0.8','0.8']]
                            },
                            {
                                id: 'CAR_CLIP2',
                                symbolName: 'CAR_CLIP',
                                type: 'rect',
                                rect: ['884px', '402px', 'undefined', 'undefined', 'auto', 'auto'],
                                transform: [[],[],[],['0.8','0.8']]
                            }]
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['1069', '526', '346', '346', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"replayBtn.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '41', '200', '200', 'auto', 'auto'],
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
                    duration: 11250,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${SCENE2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18",
                            "top",
                            1625,
                            625,
                            "linear",
                            "${hand}",
                            '809px',
                            '549px'
                        ],
                        [
                            "eid24",
                            "top",
                            2333,
                            250,
                            "linear",
                            "${hand}",
                            '549px',
                            '505px'
                        ],
                        [
                            "eid33",
                            "top",
                            2583,
                            250,
                            "linear",
                            "${hand}",
                            '505px',
                            '549px'
                        ],
                        [
                            "eid14",
                            "scaleY",
                            1625,
                            625,
                            "linear",
                            "${hand}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            2333,
                            250,
                            "linear",
                            "${hand}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            2583,
                            250,
                            "linear",
                            "${hand}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleX",
                            1625,
                            625,
                            "linear",
                            "${hand}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid21",
                            "scaleX",
                            2333,
                            250,
                            "linear",
                            "${hand}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            2583,
                            250,
                            "linear",
                            "${hand}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid16",
                            "left",
                            1625,
                            625,
                            "linear",
                            "${hand}",
                            '1619px',
                            '1563px'
                        ],
                        [
                            "eid23",
                            "left",
                            2333,
                            250,
                            "linear",
                            "${hand}",
                            '1563px',
                            '1543px'
                        ],
                        [
                            "eid36",
                            "left",
                            2583,
                            250,
                            "linear",
                            "${hand}",
                            '1543px',
                            '1563px'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1625,
                            625,
                            "linear",
                            "${hand}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            2333,
                            250,
                            "linear",
                            "${btn}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            2583,
                            250,
                            "linear",
                            "${btn}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${CAR_CLIP1}",
                            '2448px',
                            '1752px'
                        ],
                        [
                            "eid45",
                            "left",
                            5917,
                            1333,
                            "linear",
                            "${CAR_CLIP1}",
                            '1752px',
                            '2388px'
                        ],
                        [
                            "eid46",
                            "left",
                            8042,
                            875,
                            "linear",
                            "${CAR_CLIP1}",
                            '2388px',
                            '2488px'
                        ],
                        [
                            "eid51",
                            "left",
                            9625,
                            875,
                            "linear",
                            "${CAR_CLIP1}",
                            '2488px',
                            '2388px'
                        ],
                        [
                            "eid57",
                            "opacity",
                            11000,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "opacity",
                            11000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid44",
                            "left",
                            4498,
                            2502,
                            "linear",
                            "${CAR_CLIP2}",
                            '-256px',
                            '884px'
                        ],
                        [
                            "eid47",
                            "left",
                            7750,
                            875,
                            "linear",
                            "${CAR_CLIP2}",
                            '884px',
                            '984px'
                        ],
                        [
                            "eid50",
                            "left",
                            9333,
                            875,
                            "linear",
                            "${CAR_CLIP2}",
                            '984px',
                            '884px'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            2333,
                            250,
                            "linear",
                            "${btn}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid38",
                            "scaleY",
                            2583,
                            250,
                            "linear",
                            "${btn}",
                            '0.9',
                            '1'
                        ],
                            [ "eid98", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP1}', [0] ] ],
                            [ "eid42", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP1}', [] ] ]
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
                            rect: [null, null, '126px', '110px']
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
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], ['-15'], ['0.60541', '0.64919']],
                            rect: ['218px', '157px', '1200px', '248', 'auto', 'auto'],
                            id: 'SIGNAL',
                            symbolName: 'SIGNAL',
                            opacity: '1',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'car_shadow',
                            tag: 'img',
                            rect: ['1169px', '326px', '1123', '161', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png']
                        },
                        {
                            type: 'image',
                            id: 'car',
                            tag: 'img',
                            rect: ['1124px', '16px', '1200', '445', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car.png']
                        },
                        {
                            rect: ['2018px', '334px', '126', '110', 'auto', 'auto'],
                            id: 'WHEEL_CLIP',
                            symbolName: 'WHEEL_CLIP',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['-1']],
                            id: 'WHEEL_CLIPCopy',
                            symbolName: 'WHEEL_CLIP',
                            rect: ['1218px', '330px', '126', '110', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '2560px', '529px']
                        }
                    }
                },
                timeline: {
                    duration: 2914.6666666667,
                    autoPlay: false,
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
                            "eid4",
                            "skewX",
                            0,
                            0,
                            "linear",
                            "${SIGNAL}",
                            '-15deg',
                            '-15deg'
                        ],
                            [ "eid99", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SIGNAL}', [0] ] ],
                            [ "eid43", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL}', [0] ] ]
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
                            type: 'image',
                            id: 'road',
                            tag: 'img',
                            rect: ['450px', '0px', '2564', '755', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road.png']
                        },
                        {
                            type: 'image',
                            id: 'road_line',
                            tag: 'img',
                            rect: ['0px', '538px', '3012', '15', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '3014px', '755px']
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
                            rect: ['2966px', '0px', '934', '477', 'auto', 'auto'],
                            id: 'LAMP1',
                            symbolName: 'LAMP',
                            type: 'rect'
                        },
                        {
                            rect: ['1480px', '0px', '934', '477', 'auto', 'auto'],
                            id: 'LAMP2',
                            symbolName: 'LAMP',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '3169px', '477px']
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
                            rect: [null, null, '934px', '477px']
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
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy3',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy2',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy7',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy6',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy5',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy4',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy15',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy14',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy13',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy12',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1212.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1200px', '248px']
                        }
                    }
                },
                timeline: {
                    duration: 2873,
                    autoPlay: false,
                    labels: {
                        "gogo": 1375
                    },
                    data: [
                        [
                            "eid71",
                            "opacity",
                            251,
                            187,
                            "linear",
                            "${signal_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            1564,
                            187,
                            "linear",
                            "${signal_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid119",
                            "left",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid60",
                            "scaleX",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            875,
                            187,
                            "linear",
                            "${signal_srcCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            2186,
                            187,
                            "linear",
                            "${signal_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "left",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid91",
                            "opacity",
                            500,
                            187,
                            "linear",
                            "${signal_srcCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1811,
                            187,
                            "linear",
                            "${signal_srcCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            0,
                            187,
                            "linear",
                            "${signal_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            1311,
                            187,
                            "linear",
                            "${signal_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid74",
                            "left",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            1250,
                            187,
                            "linear",
                            "${signal_srcCopy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            2561,
                            187,
                            "linear",
                            "${signal_srcCopy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid88",
                            "left",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            624,
                            187,
                            "linear",
                            "${signal_srcCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            1937,
                            187,
                            "linear",
                            "${signal_srcCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "left",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid52",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid128",
                            "left",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid124",
                            "scaleY",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            1125,
                            187,
                            "linear",
                            "${signal_srcCopy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            2436,
                            187,
                            "linear",
                            "${signal_srcCopy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "scaleY",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            1375,
                            186,
                            "linear",
                            "${signal_srcCopy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            2687,
                            186,
                            "linear",
                            "${signal_srcCopy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1000,
                            187,
                            "linear",
                            "${signal_srcCopy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            2313,
                            187,
                            "linear",
                            "${signal_srcCopy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid123",
                            "left",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "left",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid94",
                            "left",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid83",
                            "left",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid80",
                            "scaleX",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            375,
                            187,
                            "linear",
                            "${signal_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            1686,
                            187,
                            "linear",
                            "${signal_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid81",
                            "opacity",
                            749,
                            187,
                            "linear",
                            "${signal_srcCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            2060,
                            187,
                            "linear",
                            "${signal_srcCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid85",
                            "scaleX",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid69",
                            "left",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid61",
                            "opacity",
                            126,
                            187,
                            "linear",
                            "${signal_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            1437,
                            187,
                            "linear",
                            "${signal_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive9_edgeActions.js");
})("EDGE-2302316");
