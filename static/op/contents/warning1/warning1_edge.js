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
                            id: 'back',
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '508px', '2560', '932', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png"]
                        },
                        {
                            id: 'CAR_FRONT',
                            symbolName: 'CAR_FRONT',
                            type: 'rect',
                            rect: ['-857px', '196px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.38','0.38']]
                        },
                        {
                            id: 'CAR',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['190px', '33px', '1269', '796', 'auto', 'auto'],
                            transform: [[],[],[],['0.65','0.65']]
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
                            fill: ["rgba(146,146,146,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5867,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "scaleY",
                            0,
                            733,
                            "easeOutQuad",
                            "${CAR_FRONT}",
                            '1.6',
                            '0.45'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            3733,
                            733,
                            "easeInQuad",
                            "${CAR_FRONT}",
                            '0.45',
                            '0.38'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            0,
                            733,
                            "easeOutQuad",
                            "${CAR_FRONT}",
                            '1.6',
                            '0.45'
                        ],
                        [
                            "eid59",
                            "scaleX",
                            3733,
                            733,
                            "easeInQuad",
                            "${CAR_FRONT}",
                            '0.45',
                            '0.38'
                        ],
                        [
                            "eid28",
                            "scaleY",
                            900,
                            733,
                            "easeOutQuad",
                            "${CAR}",
                            '1.6',
                            '0.65'
                        ],
                        [
                            "eid67",
                            "scaleY",
                            4633,
                            767,
                            "easeInQuad",
                            "${CAR}",
                            '0.65',
                            '0.38'
                        ],
                        [
                            "eid26",
                            "top",
                            900,
                            733,
                            "easeOutQuad",
                            "${CAR}",
                            '275px',
                            '156px'
                        ],
                        [
                            "eid69",
                            "top",
                            4633,
                            767,
                            "easeInQuad",
                            "${CAR}",
                            '156px',
                            '33px'
                        ],
                        [
                            "eid25",
                            "left",
                            900,
                            733,
                            "easeOutQuad",
                            "${CAR}",
                            '2961px',
                            '190px'
                        ],
                        [
                            "eid68",
                            "left",
                            4633,
                            767,
                            "easeInQuad",
                            "${CAR}",
                            '190px',
                            '-878px'
                        ],
                        [
                            "eid32",
                            "top",
                            0,
                            733,
                            "easeOutQuad",
                            "${CAR_FRONT}",
                            '586px',
                            '288px'
                        ],
                        [
                            "eid62",
                            "top",
                            3733,
                            733,
                            "easeInQuad",
                            "${CAR_FRONT}",
                            '288px',
                            '196px'
                        ],
                        [
                            "eid31",
                            "left",
                            0,
                            733,
                            "easeOutQuad",
                            "${CAR_FRONT}",
                            '2940px',
                            '-311px'
                        ],
                        [
                            "eid61",
                            "left",
                            3733,
                            733,
                            "easeInQuad",
                            "${CAR_FRONT}",
                            '-311px',
                            '-857px'
                        ],
                        [
                            "eid27",
                            "scaleX",
                            900,
                            733,
                            "easeOutQuad",
                            "${CAR}",
                            '1.6',
                            '0.65'
                        ],
                        [
                            "eid66",
                            "scaleX",
                            4633,
                            767,
                            "easeInQuad",
                            "${CAR}",
                            '0.65',
                            '0.38'
                        ],
                            [ "eid71", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_FRONT}', [0] ] ],
                            [ "eid57", "trigger", 293.33333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_FRONT}', [] ] ],
                            [ "eid72", "trigger", 900, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR}', [0] ] ],
                            [ "eid58", "trigger", 1266.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR}', [] ] ],
                            [ "eid65", "trigger", 3533.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_FRONT}', ['lampOff'] ] ],
                            [ "eid70", "trigger", 4466.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR}', ['offLamp'] ] ]
                    ]
                }
            },
            "CAR": {
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
                            id: 'carBody',
                            tag: 'img',
                            rect: ['0px', '238px', '1201', '558', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/carBody.png']
                        },
                        {
                            rect: ['605px', '406px', '565', '107', 'auto', 'auto'],
                            tag: 'img',
                            id: 'brakeLight',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brakeLight.png']
                        },
                        {
                            type: 'rect',
                            id: 'E_BLINK',
                            symbolName: 'E_BLINK',
                            rect: ['547', '370', '671', '191', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'image',
                            id: 'memo',
                            tag: 'img',
                            rect: ['914px', '0px', '355', '408', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/memo.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1269px', '796px']
                        }
                    }
                },
                timeline: {
                    duration: 934,
                    autoPlay: false,
                    labels: {
                        "offLamp": 433
                    },
                    data: [
                        [
                            "eid56",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${E_BLINK}",
                            '0',
                            '0'
                        ],
                        [
                            "eid54",
                            "opacity",
                            133,
                            0,
                            "easeOutQuad",
                            "${E_BLINK}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            433,
                            0,
                            "easeOutQuad",
                            "${E_BLINK}",
                            '1',
                            '0'
                        ],
                        [
                            "eid51",
                            "opacity",
                            0,
                            267,
                            "easeOutQuad",
                            "${brakeLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            434,
                            500,
                            "easeOutQuad",
                            "${brakeLight}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CAR_FRONT": {
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
                            id: 'carBody',
                            tag: 'img',
                            rect: ['0px', '0px', '1201', '558', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/carBody.png']
                        },
                        {
                            rect: ['605px', '168px', '565', '107', 'auto', 'auto'],
                            tag: 'img',
                            id: 'brakeLight',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brakeLight.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1201px', '558px']
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: false,
                    labels: {
                        "lampOff": 367
                    },
                    data: [
                        [
                            "eid37",
                            "opacity",
                            0,
                            267,
                            "easeOutQuad",
                            "${brakeLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            367,
                            500,
                            "easeOutQuad",
                            "${brakeLight}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "E_BLINK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['136px', '59px', '481', '53', 'auto', 'auto'],
                            tag: 'img',
                            id: 'e_lamp',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/e_lamp.png']
                        },
                        {
                            rect: ['0px', '0px', '671', '191', 'auto', 'auto'],
                            tag: 'img',
                            id: 'e_light',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/e_light.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '671px', '191px']
                        }
                    }
                },
                timeline: {
                    duration: 700,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "opacity",
                            0,
                            300,
                            "easeOutQuad",
                            "${e_light}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            400,
                            300,
                            "easeOutQuad",
                            "${e_light}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            0,
                            300,
                            "easeOutQuad",
                            "${e_lamp}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            400,
                            300,
                            "easeOutQuad",
                            "${e_lamp}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("warning1_edgeActions.js");
})("EDGE-6635557");
