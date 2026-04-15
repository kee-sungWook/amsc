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
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.png",'0px','0px']
                        },
                        {
                            id: 'CAR1',
                            symbolName: 'CAR1',
                            type: 'rect',
                            rect: ['-1732px', '1082px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'CAR2',
                            symbolName: 'CAR2',
                            type: 'rect',
                            rect: ['-977px', '1457px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1.05','1.05']]
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
                    duration: 6500,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "left",
                            167,
                            1266,
                            "easeOutQuad",
                            "${CAR2}",
                            '-977px',
                            '1001px'
                        ],
                        [
                            "eid57",
                            "left",
                            2600,
                            966,
                            "easeOutQuad",
                            "${CAR2}",
                            '1001px',
                            '814px'
                        ],
                        [
                            "eid59",
                            "left",
                            3600,
                            1743,
                            "easeInQuad",
                            "${CAR2}",
                            '814px',
                            '2612px'
                        ],
                        [
                            "eid43",
                            "top",
                            0,
                            1266,
                            "easeOutQuad",
                            "${CAR1}",
                            '1082px',
                            '244px'
                        ],
                        [
                            "eid51",
                            "top",
                            2000,
                            2500,
                            "easeInQuad",
                            "${CAR1}",
                            '244px',
                            '-536px'
                        ],
                        [
                            "eid45",
                            "top",
                            167,
                            1266,
                            "easeOutQuad",
                            "${CAR2}",
                            '1457px',
                            '619px'
                        ],
                        [
                            "eid58",
                            "top",
                            2600,
                            966,
                            "easeOutQuad",
                            "${CAR2}",
                            '619px',
                            '686px'
                        ],
                        [
                            "eid60",
                            "top",
                            3600,
                            1743,
                            "easeInQuad",
                            "${CAR2}",
                            '686px',
                            '-35px'
                        ],
                        [
                            "eid39",
                            "left",
                            0,
                            1266,
                            "easeOutQuad",
                            "${CAR1}",
                            '-1732px',
                            '246px'
                        ],
                        [
                            "eid50",
                            "left",
                            2000,
                            2500,
                            "easeInQuad",
                            "${CAR1}",
                            '246px',
                            '2106px'
                        ],
                            [ "eid46", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR1}', ['move'] ] ],
                            [ "eid47", "trigger", 166.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', ['move'] ] ],
                            [ "eid48", "trigger", 1266, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR1}', ['stop'] ] ],
                            [ "eid49", "trigger", 1433, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', ['stop'] ] ],
                            [ "eid61", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR1}', ['move'] ] ],
                            [ "eid62", "trigger", 2600.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', ['back'] ] ],
                            [ "eid65", "trigger", 3600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', ['move'] ] ]
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
                            rect: ['467px', '130px', '896', '413', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png'],
                            id: 'car_shadow',
                            opacity: '0.3',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['346px', '0px', '1018', '533', 'auto', 'auto'],
                            id: 'car_body',
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '123px', '351', '280', 'auto', 'auto'],
                            id: 'memo',
                            fill: ['rgba(0,0,0,0)', 'images/memo.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL_MOVE',
                            symbolName: 'WHEEL_MOVE',
                            transform: [[], ['45'], [], ['0.85225', '1.08643']],
                            rect: ['669px', '392px', '109', '108', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL_MOVE2',
                            symbolName: 'WHEEL_MOVE',
                            transform: [[], ['45'], [], ['0.75466', '0.96202']],
                            rect: ['1219px', '151px', '109', '108', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1364px', '545px']
                        }
                    }
                },
                timeline: {
                    duration: 267,
                    autoPlay: false,
                    labels: {
                        "move": 0,
                        "stop": 267
                    },
                    data: [
                            [ "eid30", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL_MOVE2}', [] ] ],
                            [ "eid31", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL_MOVE}', [] ] ],
                            [ "eid32", "trigger", 267, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL_MOVE2}', [] ] ],
                            [ "eid33", "trigger", 267, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL_MOVE}', [] ] ]
                    ]
                }
            },
            "WHEEL_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '109', '108', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel.png'],
                            id: 'wheel',
                            transform: [[], ['43'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '108px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "reverse": 500
                    },
                    data: [
                        [
                            "eid27",
                            "rotateZ",
                            0,
                            200,
                            "linear",
                            "${wheel}",
                            '0deg',
                            '43deg'
                        ],
                        [
                            "eid56",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${wheel}",
                            '43deg',
                            '-45deg'
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
                            rect: ['121px', '131px', '896', '413', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png'],
                            id: 'car_shadow',
                            opacity: '0.3',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '1px', '1018', '533', 'auto', 'auto'],
                            id: 'car_body',
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL_MOVE',
                            symbolName: 'WHEEL_MOVE',
                            transform: [[], ['45'], [], ['0.85225', '1.08643']],
                            rect: ['323px', '393px', '109', '108', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL_MOVE2',
                            symbolName: 'WHEEL_MOVE',
                            transform: [[], ['45'], [], ['0.75466', '0.96202']],
                            rect: ['873px', '152px', '109', '108', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1025px', '545px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "move": 0,
                        "stop": 267,
                        "back": 500
                    },
                    data: [
                            [ "eid34", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL_MOVE2}', [] ] ],
                            [ "eid35", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL_MOVE}', [] ] ],
                            [ "eid37", "trigger", 267, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL_MOVE}', [] ] ],
                            [ "eid36", "trigger", 267, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL_MOVE2}', [] ] ],
                            [ "eid63", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL_MOVE2}', ['reverse'] ] ],
                            [ "eid64", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL_MOVE}', ['reverse'] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake11_edgeActions.js");
})("EDGE-20820967");
