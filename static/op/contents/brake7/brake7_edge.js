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
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
                        },
                        {
                            id: 'stain',
                            type: 'image',
                            tag: 'img',
                            rect: ['35', '469', '1616', '689', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"stain.png"]
                        },
                        {
                            id: 'blinder2',
                            type: 'rect',
                            rect: ['27px', '938px', '1635px', '233px', 'auto', 'auto'],
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'blinder1',
                            type: 'rect',
                            rect: ['355px', '461px', '1183px', '233px', 'auto', 'auto'],
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'brakePoint',
                            type: 'image',
                            tag: 'img',
                            rect: ['1418', '367', '425', '920', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"brakePoint.png"]
                        },
                        {
                            id: 'GAGE2',
                            symbolName: 'GAGE2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1600px', '804px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'CAR2',
                            symbolName: 'CAR2',
                            type: 'rect',
                            rect: ['-865px', '822px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'GAGE1',
                            symbolName: 'GAGE1',
                            display: 'none',
                            type: 'rect',
                            rect: ['1455px', '315', '420', '379', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'CAR1',
                            symbolName: 'CAR1',
                            type: 'rect',
                            rect: ['-902px', '350px', '765', '344', 'auto', 'auto']
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
                    duration: 6966.6666666667,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "left",
                            455,
                            1134,
                            "linear",
                            "${CAR1}",
                            '2779px',
                            '1171px'
                        ],
                        [
                            "eid37",
                            "left",
                            1655,
                            2264,
                            "easeOutQuad",
                            "${CAR1}",
                            '1171px',
                            '450px'
                        ],
                        [
                            "eid77",
                            "left",
                            5000,
                            1000,
                            "easeInQuad",
                            "${CAR1}",
                            '450px',
                            '-902px'
                        ],
                        [
                            "eid74",
                            "display",
                            0,
                            0,
                            "linear",
                            "${GAGE1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "width",
                            1222,
                            367,
                            "linear",
                            "${blinder1}",
                            '1183px',
                            '966px'
                        ],
                        [
                            "eid46",
                            "width",
                            1655,
                            2267,
                            "easeOutQuad",
                            "${blinder1}",
                            '966px',
                            '243px'
                        ],
                        [
                            "eid76",
                            "display",
                            0,
                            0,
                            "linear",
                            "${GAGE2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "opacity",
                            1655,
                            233,
                            "linear",
                            "${GAGE2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "left",
                            455,
                            1134,
                            "linear",
                            "${CAR2}",
                            '2921px',
                            '1268px'
                        ],
                        [
                            "eid35",
                            "left",
                            1655,
                            2264,
                            "easeOutQuad",
                            "${CAR2}",
                            '1268px',
                            '25px'
                        ],
                        [
                            "eid78",
                            "left",
                            5000,
                            1000,
                            "easeInQuad",
                            "${CAR2}",
                            '25px',
                            '-865px'
                        ],
                        [
                            "eid49",
                            "opacity",
                            1655,
                            233,
                            "linear",
                            "${GAGE1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "width",
                            1222,
                            367,
                            "linear",
                            "${blinder2}",
                            '1635px',
                            '1391px'
                        ],
                        [
                            "eid47",
                            "width",
                            1655,
                            2267,
                            "easeOutQuad",
                            "${blinder2}",
                            '1391px',
                            '146px'
                        ],
                        [
                            "eid39",
                            "top",
                            1655,
                            2264,
                            "easeOutQuad",
                            "${CAR1}",
                            '350px',
                            '348px'
                        ],
                        [
                            "eid79",
                            "top",
                            5000,
                            1000,
                            "easeInQuad",
                            "${CAR1}",
                            '348px',
                            '350px'
                        ],
                        [
                            "eid80",
                            "opacity",
                            6734,
                            233,
                            "easeInQuad",
                            "${stain}",
                            '1',
                            '0'
                        ],
                            [ "eid56", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR1}', ['first'] ] ],
                            [ "eid54", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${GAGE2}', [0] ] ],
                            [ "eid55", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${GAGE1}', [0] ] ],
                            [ "eid57", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', ['first'] ] ],
                            [ "eid59", "trigger", 454.97621303787, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', ['wheelGo'] ] ],
                            [ "eid58", "trigger", 454.97621303787, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR1}', ['wheelGo'] ] ],
                            [ "eid52", "trigger", 1887.9762130379, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GAGE1}', [] ] ],
                            [ "eid53", "trigger", 1887.9762130379, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GAGE2}', [] ] ],
                            [ "eid61", "trigger", 3918.9762130379, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2}', ['first'] ] ],
                            [ "eid60", "trigger", 3918.9762130379, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR1}', ['first'] ] ],
                            [ "eid81", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR2}', ['wheelGo'] ] ],
                            [ "eid82", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR1}', ['wheelGo'] ] ]
                    ]
                }
            },
            "GAGE1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '420', '379', 'auto', 'auto'],
                            id: 'gage_body',
                            fill: ['rgba(0,0,0,0)', 'images/gage_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            transform: [[], ['69'], [], [], ['50%', '77%']],
                            fill: ['rgba(0,0,0,0)', 'images/gage_arrow.png'],
                            id: 'gage_arrow',
                            type: 'image',
                            rect: ['200px', '86px', '61', '134', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '420px', '379px']
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: false,
                    data: [
                        [
                            "eid30",
                            "rotateZ",
                            0,
                            767,
                            "linear",
                            "${gage_arrow}",
                            '-90deg',
                            '69deg'
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
                            rect: ['13px', '195px', '748', '149', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png'],
                            id: 'car_shadow',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '765', '337', 'auto', 'auto'],
                            id: 'car_body',
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL1',
                            symbolName: 'WHEEL',
                            transform: [[], ['-2'], [], ['1', '0.67532']],
                            rect: ['96px', '228px', '109', '108', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL2',
                            symbolName: 'WHEEL',
                            transform: [[], ['-27'], [], ['0.80947', '0.52016']],
                            rect: ['557px', '234px', '109', '108', 'auto', 'auto']
                        },
                        {
                            rect: ['591px', '-287px', '281', '323', 'auto', 'auto'],
                            id: 'memo',
                            fill: ['rgba(0,0,0,0)', 'images/memo.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '765px', '344px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "first": 0,
                        "wheelGo": 500
                    },
                    data: [
                            [ "eid62", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL2}', [0] ] ],
                            [ "eid63", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL1}', [0] ] ],
                            [ "eid64", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL2}', [] ] ],
                            [ "eid65", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL1}', [] ] ]
                    ]
                }
            },
            "WHEEL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/wheel_src.png'],
                            id: 'wheel_src',
                            type: 'image',
                            rect: ['0px', '0px', '109', '108', 'auto', 'auto'],
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
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid26",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${wheel_src}",
                            '0deg',
                            '-90deg'
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
                            rect: ['13px', '195px', '748', '149', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png'],
                            id: 'car_shadow',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '765', '337', 'auto', 'auto'],
                            id: 'car_body',
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL1',
                            symbolName: 'WHEEL',
                            transform: [[], ['-2'], [], ['1', '0.67532']],
                            rect: ['96px', '228px', '109', '108', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL2',
                            symbolName: 'WHEEL',
                            transform: [[], ['-27'], [], ['0.80947', '0.52016']],
                            rect: ['557px', '234px', '109', '108', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '765px', '344px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "first": 0,
                        "wheelGo": 500
                    },
                    data: [
                            [ "eid66", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL2}', [0] ] ],
                            [ "eid67", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL1}', [0] ] ],
                            [ "eid68", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL2}', [] ] ],
                            [ "eid69", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL1}', [] ] ]
                    ]
                }
            },
            "GAGE2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '420', '379', 'auto', 'auto'],
                            id: 'gage_body',
                            fill: ['rgba(0,0,0,0)', 'images/gage_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            transform: [[], ['-15'], [], [], ['50%', '77%']],
                            fill: ['rgba(0,0,0,0)', 'images/gage_arrow.png'],
                            id: 'gage_arrow',
                            type: 'image',
                            rect: ['200px', '86px', '61', '134', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '420px', '379px']
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: false,
                    data: [
                        [
                            "eid30",
                            "rotateZ",
                            0,
                            767,
                            "linear",
                            "${gage_arrow}",
                            '-90deg',
                            '-15deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake7_edgeActions.js");
})("EDGE-14870271");
