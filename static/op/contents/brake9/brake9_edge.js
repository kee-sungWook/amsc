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
                            id: 'CAR_CLIP',
                            symbolName: 'CAR_CLIP',
                            type: 'rect',
                            rect: ['59', '259', '2431', '1098', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'FOOT_CLIP',
                            symbolName: 'FOOT_CLIP',
                            type: 'rect',
                            rect: ['-1030', '-218', '3597', '1933', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
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
                    duration: 4470.3721499906,
                    autoPlay: true,
                    data: [
                        [
                            "eid79",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid80",
                            "opacity",
                            4207,
                            264,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            4207,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid66",
                            "opacity",
                            1333,
                            457,
                            "linear",
                            "${FOOT_CLIP}",
                            '1',
                            '0'
                        ],
                        [
                            "eid65",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP}",
                            '0',
                            '0'
                        ],
                        [
                            "eid67",
                            "opacity",
                            1333,
                            457,
                            "linear",
                            "${CAR_CLIP}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid68", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP}', [0] ] ],
                            [ "eid69", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${FOOT_CLIP}', [0] ] ],
                            [ "eid83", "trigger", 262, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${FOOT_CLIP}', [] ] ],
                            [ "eid71", "trigger", 1933.1984682769, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP}', [] ] ]
                    ]
                }
            },
            "FOOT_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1618px', '381px', '313', '442', 'auto', 'auto'],
                            id: 'footBrake',
                            fill: ['rgba(0,0,0,0)', 'images/footBrake.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['1031px', '219px', '2560px', '1440px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/backPic.png'],
                            id: 'backPic',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['28px', '500px', '1274', '1114', 'auto', 'auto'],
                            transform: [[], [], [], ['1.05', '1.05']],
                            fill: ['rgba(0,0,0,0)', 'images/foot.png'],
                            id: 'foot',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '3597px', '1933px']
                        }
                    }
                },
                timeline: {
                    duration: 933,
                    autoPlay: false,
                    data: [
                        [
                            "eid36",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${foot}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "left",
                            533,
                            400,
                            "easeOutQuad",
                            "${footBrake}",
                            '1618px',
                            '1672px'
                        ],
                        [
                            "eid37",
                            "rotateZ",
                            533,
                            400,
                            "easeOutQuad",
                            "${foot}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid28",
                            "left",
                            0,
                            500,
                            "easeOutQuad",
                            "${foot}",
                            '28px',
                            '468px'
                        ],
                        [
                            "eid38",
                            "left",
                            533,
                            400,
                            "easeOutQuad",
                            "${foot}",
                            '468px',
                            '556px'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            0,
                            500,
                            "easeOutQuad",
                            "${foot}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid30",
                            "top",
                            0,
                            500,
                            "easeOutQuad",
                            "${foot}",
                            '500px',
                            '559px'
                        ],
                        [
                            "eid39",
                            "top",
                            533,
                            400,
                            "easeOutQuad",
                            "${foot}",
                            '559px',
                            '505px'
                        ],
                        [
                            "eid40",
                            "rotateZ",
                            533,
                            400,
                            "easeOutQuad",
                            "${footBrake}",
                            '0deg',
                            '-20deg'
                        ],
                        [
                            "eid32",
                            "scaleX",
                            0,
                            500,
                            "easeOutQuad",
                            "${foot}",
                            '1.05',
                            '1'
                        ]
                    ]
                }
            },
            "MODULE_RED_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '152', '122', 'auto', 'auto'],
                            tag: 'img',
                            id: 'module_red',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/module_red.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '152px', '122px']
                        }
                    }
                },
                timeline: {
                    duration: 334,
                    autoPlay: false,
                    data: [
                        [
                            "eid43",
                            "opacity",
                            0,
                            167,
                            "easeOutQuad",
                            "${module_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            167,
                            167,
                            "easeOutQuad",
                            "${module_red}",
                            '1',
                            '0'
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
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['387px', '549px', '1684px', '222px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1755px', '597px', '19px', '112px', 'auto', 'auto'],
                            transform: [[], ['-11']],
                            id: 'FLOW3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,75,141,1.00)']
                        },
                        {
                            rect: ['881px', '678px', '12px', '112px', 'auto', 'auto'],
                            transform: [[], ['-11']],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'FLOW2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(33,75,141,1.00)']
                        },
                        {
                            rect: ['406px', '549px', '37px', '16px', 'auto', 'auto'],
                            id: 'FLOW1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,75,141,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '2431', '1098', 'auto', 'auto'],
                            id: 'car',
                            fill: ['rgba(0,0,0,0)', 'images/car.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'MODULE_RED_CLIP',
                            symbolName: 'MODULE_RED_CLIP',
                            rect: ['349px', '505px', '152', '122', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '2431px', '1098px']
                        }
                    }
                },
                timeline: {
                    duration: 1400,
                    autoPlay: false,
                    data: [
                        [
                            "eid57",
                            "top",
                            1000,
                            400,
                            "linear",
                            "${FLOW3}",
                            '597px',
                            '618px'
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${FLOW2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid64",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${FLOW2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "height",
                            0,
                            200,
                            "linear",
                            "${FLOW1}",
                            '16px',
                            '217px'
                        ],
                        [
                            "eid61",
                            "width",
                            1000,
                            400,
                            "linear",
                            "${FLOW3}",
                            '19px',
                            '844px'
                        ],
                        [
                            "eid47",
                            "width",
                            200,
                            300,
                            "linear",
                            "${FLOW1}",
                            '37px',
                            '478px'
                        ],
                        [
                            "eid53",
                            "left",
                            500,
                            500,
                            "linear",
                            "${FLOW2}",
                            '881px',
                            '873px'
                        ],
                        [
                            "eid59",
                            "left",
                            1000,
                            400,
                            "linear",
                            "${FLOW3}",
                            '1755px',
                            '1232px'
                        ],
                        [
                            "eid51",
                            "top",
                            500,
                            500,
                            "linear",
                            "${FLOW2}",
                            '678px',
                            '597px'
                        ],
                        [
                            "eid55",
                            "width",
                            500,
                            500,
                            "linear",
                            "${FLOW2}",
                            '12px',
                            '856px'
                        ],
                            [ "eid72", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${MODULE_RED_CLIP}', [] ] ],
                            [ "eid84", "trigger", 1400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MODULE_RED_CLIP}', [0] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake9_edgeActions.js");
})("EDGE-2790108");
