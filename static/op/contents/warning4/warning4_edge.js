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
                            rect: ['-232', '-173', '3024', '2234', 'auto', 'auto'],
                            c: [
                            {
                                id: 'landscapeBack',
                                type: 'image',
                                tag: 'img',
                                rect: ['232px', '380px', '2560', '695', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"landscapeBack.png"]
                            },
                            {
                                id: 'lamp_clip_left',
                                symbolName: 'lamp_clip',
                                type: 'rect',
                                rect: ['0px', '0px', '1488px', '998', 'auto', 'auto']
                            },
                            {
                                id: 'lamp_clip_right',
                                symbolName: 'lamp_clip',
                                type: 'rect',
                                rect: ['1536px', '0px', '1488px', '998', 'auto', 'auto'],
                                transform: [[],[],[],['-1']]
                            },
                            {
                                id: 'lane_clip_left',
                                symbolName: 'lane_clip',
                                type: 'rect',
                                rect: ['320px', '546px', '2384', '1688', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                id: 'lane_clip_right',
                                symbolName: 'lane_clip',
                                type: 'rect',
                                rect: ['319px', '546px', '2384', '1688', 'auto', 'auto'],
                                opacity: '1',
                                transform: [[],[],[],['-1']]
                            },
                            {
                                id: 'interrior',
                                type: 'image',
                                tag: 'img',
                                rect: ['232px', '173px', '2560', '1440', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"interrior.png"]
                            },
                            {
                                id: 'HUD2',
                                display: 'block',
                                type: 'image',
                                tag: 'img',
                                rect: ['741px', '680px', '116', '251', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"HUD2.png"]
                            },
                            {
                                id: 'HUD1',
                                display: 'block',
                                type: 'image',
                                tag: 'img',
                                rect: ['684px', '680px', '115', '251', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"HUD1.png"]
                            }]
                        },
                        {
                            id: 'SCENE1',
                            display: 'block',
                            type: 'group',
                            rect: ['-451', '-51px', '4243', '1448', 'auto', 'auto'],
                            c: [
                            {
                                id: 'LOAD_LINE_CLIP',
                                symbolName: 'LOAD_LINE_CLIP',
                                type: 'rect',
                                rect: ['0px', '504px', '3011', '496', 'auto', 'auto']
                            },
                            {
                                id: 'CAR_CLIP3',
                                symbolName: 'CAR_CLIP',
                                type: 'rect',
                                rect: ['1779px', '0px', '1200px', '487px', 'auto', 'auto']
                            },
                            {
                                id: 'SENSOR2',
                                symbolName: 'SENSOR',
                                type: 'rect',
                                rect: ['1522px', '-367px', '1200px', '1000px', 'auto', 'auto'],
                                transform: [[],[],[],['1','-1']]
                            },
                            {
                                id: 'CAR_CLIP',
                                symbolName: 'CAR_CLIP',
                                type: 'rect',
                                rect: ['1099px', '445px', '1200px', '487px', 'auto', 'auto']
                            },
                            {
                                id: 'SENSOR',
                                symbolName: 'SENSOR',
                                type: 'rect',
                                rect: ['1522px', '689px', '1200px', '1000px', 'auto', 'auto']
                            },
                            {
                                id: 'CAR_CLIP2',
                                symbolName: 'CAR_CLIP',
                                type: 'rect',
                                rect: ['2035px', '961px', '1200px', '487px', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40', '200', '200', 'auto', 'auto'],
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
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid91",
                            "opacity",
                            1500,
                            167,
                            "linear",
                            "${HUD1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            1667,
                            167,
                            "linear",
                            "${HUD1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid96",
                            "opacity",
                            1875,
                            167,
                            "linear",
                            "${HUD1}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid98",
                            "opacity",
                            2042,
                            167,
                            "linear",
                            "${HUD1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid114",
                            "opacity",
                            2250,
                            167,
                            "linear",
                            "${HUD1}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid115",
                            "opacity",
                            2417,
                            167,
                            "linear",
                            "${HUD1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid119",
                            "opacity",
                            2625,
                            167,
                            "linear",
                            "${HUD1}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid120",
                            "opacity",
                            2792,
                            167,
                            "linear",
                            "${HUD1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid123",
                            "opacity",
                            3000,
                            167,
                            "linear",
                            "${HUD1}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid124",
                            "opacity",
                            3167,
                            167,
                            "linear",
                            "${HUD1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid129",
                            "opacity",
                            3375,
                            167,
                            "linear",
                            "${HUD1}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            3542,
                            167,
                            "linear",
                            "${HUD1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid83",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            3708,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${HUD1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            3708,
                            0,
                            "linear",
                            "${SCENE2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${SCENE2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "left",
                            3792,
                            1958,
                            "linear",
                            "${CAR_CLIP3}",
                            '3043px',
                            '1779px'
                        ],
                        [
                            "eid148",
                            "left",
                            8000,
                            1542,
                            "linear",
                            "${CAR_CLIP3}",
                            '771px',
                            '-757px'
                        ],
                        [
                            "eid89",
                            "opacity",
                            5750,
                            167,
                            "linear",
                            "${HUD2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            5917,
                            167,
                            "linear",
                            "${HUD2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid99",
                            "opacity",
                            6125,
                            167,
                            "linear",
                            "${HUD2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            6292,
                            167,
                            "linear",
                            "${HUD2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid117",
                            "opacity",
                            6500,
                            167,
                            "linear",
                            "${HUD2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            6667,
                            167,
                            "linear",
                            "${HUD2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid121",
                            "opacity",
                            6875,
                            167,
                            "linear",
                            "${HUD2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            7042,
                            167,
                            "linear",
                            "${HUD2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid126",
                            "opacity",
                            7250,
                            167,
                            "linear",
                            "${HUD2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            7417,
                            167,
                            "linear",
                            "${HUD2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid131",
                            "opacity",
                            7625,
                            167,
                            "linear",
                            "${HUD2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            7792,
                            167,
                            "linear",
                            "${HUD2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid81",
                            "left",
                            500,
                            1000,
                            "linear",
                            "${CAR_CLIP2}",
                            '3043px',
                            '2035px'
                        ],
                        [
                            "eid137",
                            "left",
                            3708,
                            542,
                            "linear",
                            "${CAR_CLIP2}",
                            '691px',
                            '-757px'
                        ],
                        [
                            "eid128",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${HUD2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${HUD2}",
                            'none',
                            'block'
                        ],
                            [ "eid82", "trigger", 792, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SENSOR}', ['gogo'] ] ],
                            [ "eid84", "trigger", 1500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SENSOR}', [0] ] ],
                            [ "eid149", "trigger", 4291.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SENSOR2}', ['gogo'] ] ],
                            [ "eid150", "trigger", 5750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SENSOR2}', [0] ] ]
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
                            rect: ['0px', '0px', '126', '110', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel2',
                            display: 'none',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel2.png']
                        },
                        {
                            rect: ['0px', '0px', '126', '110', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel1',
                            display: 'block',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel1.png']
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
                            type: 'image',
                            id: 'car_shadow',
                            tag: 'img',
                            rect: ['45px', '326px', '1123', '161', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png']
                        },
                        {
                            type: 'image',
                            id: 'car',
                            tag: 'img',
                            rect: ['0px', '16px', '1200', '445', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car.png']
                        },
                        {
                            rect: ['894px', '334px', '126', '110', 'auto', 'auto'],
                            id: 'WHEEL_CLIP',
                            symbolName: 'WHEEL_CLIP',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['-1']],
                            id: 'WHEEL_CLIPCopy',
                            symbolName: 'WHEEL_CLIP',
                            rect: ['94px', '330px', '126', '110', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1200px', '487px']
                        }
                    }
                },
                timeline: {
                    duration: 133,
                    autoPlay: false,
                    data: [
                        [
                            "eid6",
                            "left",
                            0,
                            0,
                            "linear",
                            "${WHEEL_CLIPCopy}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            0,
                            "linear",
                            "${WHEEL_CLIP}",
                            '894px',
                            '894px'
                        ],
                        [
                            "eid207",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${WHEEL_CLIPCopy}",
                            '-1',
                            '-1'
                        ]
                    ]
                }
            },
            "LOAD_LINE_CLIP": {
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
                            rect: ['0px', '0px', '3011', '496', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '3011px', '496px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "left",
                            0,
                            250,
                            "linear",
                            "${road_line}",
                            '0px',
                            '384px'
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
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'sensor_src',
                            opacity: '0',
                            rect: ['-17px', '-60px', '137px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'sensor_srcCopy',
                            opacity: '0',
                            rect: ['-17px', '-60px', '137px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'sensor_srcCopy2',
                            opacity: '0',
                            rect: ['-17px', '-60px', '137px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'sensor_srcCopy3',
                            opacity: '0',
                            rect: ['-17px', '-60px', '137px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'sensor_srcCopy4',
                            opacity: '0',
                            rect: ['-17px', '-60px', '137px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'sensor_srcCopy5',
                            opacity: '0',
                            rect: ['-17px', '-60px', '137px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_src.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1200px', '1000px']
                        }
                    }
                },
                timeline: {
                    duration: 1791.6666666667,
                    autoPlay: false,
                    labels: {
                        "gogo": 792
                    },
                    data: [
                        [
                            "eid30",
                            "opacity",
                            0,
                            83,
                            "linear",
                            "${sensor_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            916,
                            83,
                            "linear",
                            "${sensor_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid39",
                            "top",
                            334,
                            999,
                            "linear",
                            "${sensor_srcCopy2}",
                            '-60px',
                            '372px'
                        ],
                        [
                            "eid38",
                            "left",
                            167,
                            999,
                            "linear",
                            "${sensor_srcCopy}",
                            '-17px',
                            '1031px'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${sensor_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            667,
                            83,
                            "linear",
                            "${sensor_srcCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            1583,
                            83,
                            "linear",
                            "${sensor_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            667,
                            999,
                            "linear",
                            "${sensor_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid28",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${sensor_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid62",
                            "left",
                            792,
                            999,
                            "linear",
                            "${sensor_srcCopy5}",
                            '-17px',
                            '1031px'
                        ],
                        [
                            "eid44",
                            "left",
                            334,
                            999,
                            "linear",
                            "${sensor_srcCopy2}",
                            '-17px',
                            '1031px'
                        ],
                        [
                            "eid53",
                            "scaleX",
                            667,
                            999,
                            "linear",
                            "${sensor_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid50",
                            "left",
                            501,
                            999,
                            "linear",
                            "${sensor_srcCopy3}",
                            '-17px',
                            '1031px'
                        ],
                        [
                            "eid46",
                            "scaleY",
                            501,
                            999,
                            "linear",
                            "${sensor_srcCopy3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid58",
                            "scaleY",
                            792,
                            999,
                            "linear",
                            "${sensor_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            334,
                            83,
                            "linear",
                            "${sensor_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            1249,
                            83,
                            "linear",
                            "${sensor_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid57",
                            "top",
                            792,
                            999,
                            "linear",
                            "${sensor_srcCopy5}",
                            '-60px',
                            '372px'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            167,
                            999,
                            "linear",
                            "${sensor_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid22",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${sensor_src}",
                            '-17px',
                            '1031px'
                        ],
                        [
                            "eid59",
                            "scaleX",
                            792,
                            999,
                            "linear",
                            "${sensor_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid45",
                            "top",
                            501,
                            999,
                            "linear",
                            "${sensor_srcCopy3}",
                            '-60px',
                            '372px'
                        ],
                        [
                            "eid41",
                            "scaleX",
                            334,
                            999,
                            "linear",
                            "${sensor_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            334,
                            999,
                            "linear",
                            "${sensor_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            167,
                            83,
                            "linear",
                            "${sensor_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            1083,
                            83,
                            "linear",
                            "${sensor_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            501,
                            999,
                            "linear",
                            "${sensor_srcCopy3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            501,
                            83,
                            "linear",
                            "${sensor_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            1416,
                            83,
                            "linear",
                            "${sensor_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "top",
                            167,
                            999,
                            "linear",
                            "${sensor_srcCopy}",
                            '-60px',
                            '372px'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            167,
                            999,
                            "linear",
                            "${sensor_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid24",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${sensor_src}",
                            '-60px',
                            '372px'
                        ],
                        [
                            "eid51",
                            "top",
                            667,
                            999,
                            "linear",
                            "${sensor_srcCopy4}",
                            '-60px',
                            '372px'
                        ],
                        [
                            "eid56",
                            "left",
                            667,
                            999,
                            "linear",
                            "${sensor_srcCopy4}",
                            '-17px',
                            '1031px'
                        ],
                        [
                            "eid60",
                            "opacity",
                            792,
                            83,
                            "linear",
                            "${sensor_srcCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            1708,
                            83,
                            "linear",
                            "${sensor_srcCopy5}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "lane_clip": {
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
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png'],
                            id: 'lane',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png'],
                            id: 'laneCopy',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png'],
                            id: 'laneCopy2',
                            rect: ['938px', '-230px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png'],
                            id: 'laneCopy3',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png'],
                            id: 'laneCopy4',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png'],
                            id: 'laneCopy5',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png'],
                            id: 'laneCopy6',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png'],
                            id: 'laneCopy7',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png'],
                            id: 'laneCopy8',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2384px', '1577px']
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid180",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '885px',
                            '830px'
                        ],
                        [
                            "eid227",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '49px',
                            '250px'
                        ],
                        [
                            "eid264",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '0.36467',
                            '0.61217'
                        ],
                        [
                            "eid301",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '0.61217',
                            '1'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '0.03475',
                            '0.0595'
                        ],
                        [
                            "eid116",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '0.0595',
                            '0.09242'
                        ],
                        [
                            "eid199",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '0.14192',
                            '0.22459'
                        ],
                        [
                            "eid282",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '614px',
                            '375px'
                        ],
                        [
                            "eid291",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '0.36467',
                            '0.61217'
                        ],
                        [
                            "eid69",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '950px',
                            '934px'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '-260px',
                            '-248px'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '-230px',
                            '-188px'
                        ],
                        [
                            "eid42",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '-248px',
                            '-224px'
                        ],
                        [
                            "eid6",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '0.01',
                            '0.01817'
                        ],
                        [
                            "eid125",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '-200px',
                            '-141px'
                        ],
                        [
                            "eid162",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '0.09242',
                            '0.14192'
                        ],
                        [
                            "eid245",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '0.22459',
                            '0.36467'
                        ],
                        [
                            "eid254",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '0.22459',
                            '0.36467'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '958px',
                            '950px'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '0.01817',
                            '0.03475'
                        ],
                        [
                            "eid190",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '-72px',
                            '49px'
                        ],
                        [
                            "eid208",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '832px',
                            '750px'
                        ],
                        [
                            "eid143",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '918px',
                            '878px'
                        ],
                        [
                            "eid217",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '0.14192',
                            '0.22459'
                        ],
                        [
                            "eid328",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '0.61217',
                            '1'
                        ],
                        [
                            "eid106",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '0.03475',
                            '0.0595'
                        ],
                        [
                            "eid97",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '938px',
                            '910px'
                        ],
                        [
                            "eid153",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '-150px',
                            '-70px'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '0.0595',
                            '0.09242'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '0.01817',
                            '0.03475'
                        ],
                        [
                            "eid236",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '750px',
                            '614px'
                        ],
                        [
                            "eid273",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '250px',
                            '606px'
                        ],
                        [
                            "eid310",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '606px',
                            '1163px'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '0.01',
                            '0.01817'
                        ],
                        [
                            "eid319",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '375px',
                            '0px'
                        ],
                        [
                            "eid171",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '0.09242',
                            '0.14192'
                        ]
                    ]
                }
            },
            "lamp_clip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp3.png'],
                            id: 'roadlamp',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp3.png'],
                            id: 'roadlampCopy',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp3.png'],
                            id: 'roadlampCopy2',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1488px', '998px']
                        }
                    }
                },
                timeline: {
                    duration: 417,
                    autoPlay: true,
                    data: [
                        [
                            "eid368",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '12px',
                            '0px'
                        ],
                        [
                            "eid361",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '1197px',
                            '798px'
                        ],
                        [
                            "eid338",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '0.05',
                            '0.16875'
                        ],
                        [
                            "eid345",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '20px',
                            '18px'
                        ],
                        [
                            "eid364",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '18px',
                            '12px'
                        ],
                        [
                            "eid336",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '0.05',
                            '0.16875'
                        ],
                        [
                            "eid358",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '0.16875',
                            '0.44615'
                        ],
                        [
                            "eid377",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '798px',
                            '0px'
                        ],
                        [
                            "eid371",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '0.44615',
                            '1'
                        ],
                        [
                            "eid344",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '1368px',
                            '1197px'
                        ],
                        [
                            "eid374",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '0.44615',
                            '1'
                        ],
                        [
                            "eid355",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '0.16875',
                            '0.44615'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("warning4_edgeActions.js");
})("EDGE-23328912");
