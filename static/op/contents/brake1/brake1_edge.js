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
                            id: 'MC1',
                            symbolName: 'MC1',
                            type: 'rect',
                            rect: ['0', '0', '1216', '1440', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'MC2',
                            symbolName: 'MC2',
                            type: 'rect',
                            rect: ['1285px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'midLine',
                            type: 'rect',
                            rect: ['1275px', '0px', '10px', '1440px', 'auto', 'auto'],
                            fill: ["rgba(110,110,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                    duration: 3250,
                    autoPlay: true,
                    data: [
                            [ "eid56", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${MC1}', [] ] ],
                            [ "eid57", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${MC2}', [] ] ]
                    ]
                }
            },
            "MC1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1216', '1440', 'auto', 'auto'],
                            id: 'road',
                            fill: ['rgba(0,0,0,0)', 'images/road.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['912px', '1461px', '217', '458', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car.png'],
                            id: 'car',
                            type: 'image',
                            autoOrient: 'true',
                            tag: 'img'
                        },
                        {
                            rect: ['1004px', '41px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'lampArea',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'abs_lamp_off',
                            type: 'image',
                            rect: ['1022px', '74px', '164px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/abs_lamp_off.png', '0px', '0px']
                        },
                        {
                            id: 'abs_lamp_on',
                            type: 'image',
                            rect: ['1022px', '74px', '164px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/abs_lamp_on.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1216px', '1440px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid29",
                            "location",
                            0,
                            2500,
                            "easeInQuad",
                            "${car}",
                            [[1020.5, 1690, 0, 0, 0, 0,0],[775.88, 694.66, -1166.76, -1469.99, -868.98, -1094.82,1044.94],[-287.5, 140, 0, 0, 0, 0,2272.93]]
                        ],
                        [
                            "eid66",
                            "opacity",
                            1333,
                            84,
                            "linear",
                            "${abs_lamp_on}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            1417,
                            84,
                            "linear",
                            "${abs_lamp_on}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "opacity",
                            1583,
                            83,
                            "linear",
                            "${abs_lamp_on}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            1667,
                            83,
                            "linear",
                            "${abs_lamp_on}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "opacity",
                            1833,
                            83,
                            "linear",
                            "${abs_lamp_on}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            1917,
                            83,
                            "linear",
                            "${abs_lamp_on}",
                            '1',
                            '0'
                        ],
                        [
                            "eid72",
                            "opacity",
                            2083,
                            83,
                            "linear",
                            "${abs_lamp_on}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            2166,
                            83,
                            "linear",
                            "${abs_lamp_on}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "opacity",
                            2333,
                            83,
                            "linear",
                            "${abs_lamp_on}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            2416,
                            83,
                            "linear",
                            "${abs_lamp_on}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "MC2": {
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
                            rect: ['0px', '0px', '1216', '1440', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road.png']
                        },
                        {
                            transform: [[], ['-3'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            rect: ['954px', '491px', '217', '458', 'auto', 'auto'],
                            id: 'car',
                            type: 'image',
                            autoOrient: false,
                            fill: ['rgba(0,0,0,0)', 'images/car.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1216px', '1440px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid43",
                            "left",
                            0,
                            1400,
                            "easeInQuad",
                            "${car}",
                            '954px',
                            '724px'
                        ],
                        [
                            "eid47",
                            "left",
                            1433,
                            700,
                            "easeOutQuad",
                            "${car}",
                            '724px',
                            '713px'
                        ],
                        [
                            "eid49",
                            "left",
                            2300,
                            700,
                            "linear",
                            "${car}",
                            '713px',
                            '-431px'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            1400,
                            "easeInQuad",
                            "${car}",
                            '1461px',
                            '491px'
                        ],
                        [
                            "eid46",
                            "top",
                            1433,
                            700,
                            "easeOutQuad",
                            "${car}",
                            '491px',
                            '59px'
                        ],
                        [
                            "eid50",
                            "top",
                            2300,
                            700,
                            "linear",
                            "${car}",
                            '59px',
                            '-83px'
                        ],
                        [
                            "eid45",
                            "rotateZ",
                            0,
                            1400,
                            "easeInQuad",
                            "${car}",
                            '-3deg',
                            '-32deg'
                        ],
                        [
                            "eid48",
                            "rotateZ",
                            1433,
                            700,
                            "easeOutQuad",
                            "${car}",
                            '-32deg',
                            '-85deg'
                        ],
                        [
                            "eid51",
                            "rotateZ",
                            2300,
                            700,
                            "linear",
                            "${car}",
                            '-85deg',
                            '-82deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake1_edgeActions.js");
})("EDGE-24554377");
