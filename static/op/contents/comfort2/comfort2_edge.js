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
                            rect: ['0', '0', '2560', '1440', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png"]
                        },
                        {
                            id: 'car',
                            type: 'image',
                            tag: 'img',
                            rect: ['6', '405', '1165', '562', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car.png"]
                        },
                        {
                            id: 'MEMO',
                            symbolName: 'MEMO',
                            type: 'rect',
                            rect: ['1002', '779', '409', '444', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'LAMP_CLIP',
                            symbolName: 'LAMP_CLIP',
                            type: 'rect',
                            rect: ['0', '449', '1207', '352', 'auto', 'auto']
                        },
                        {
                            id: 'KEY_CLIP',
                            symbolName: 'KEY_CLIP',
                            type: 'rect',
                            rect: ['2250px', '1481px', '1037', '1036', 'auto', 'auto']
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '39px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8708,
                    autoPlay: true,
                    data: [
                        [
                            "eid80",
                            "left",
                            250,
                            417,
                            "easeOutQuad",
                            "${KEY_CLIP}",
                            '2250px',
                            '1874px'
                        ],
                        [
                            "eid103",
                            "left",
                            5000,
                            600,
                            "easeInQuad",
                            "${KEY_CLIP}",
                            '1874px',
                            '2250px'
                        ],
                        [
                            "eid101",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${MEMO}",
                            '0',
                            '0'
                        ],
                        [
                            "eid95",
                            "opacity",
                            2042,
                            633,
                            "easeOutQuad",
                            "${MEMO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            4542,
                            375,
                            "easeOutQuad",
                            "${MEMO}",
                            '1',
                            '0'
                        ],
                        [
                            "eid107",
                            "opacity",
                            6242,
                            633,
                            "easeOutQuad",
                            "${MEMO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            7291,
                            633,
                            "easeOutQuad",
                            "${MEMO}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "top",
                            250,
                            417,
                            "easeOutQuad",
                            "${KEY_CLIP}",
                            '1481px',
                            '721px'
                        ],
                        [
                            "eid102",
                            "top",
                            5000,
                            600,
                            "easeInQuad",
                            "${KEY_CLIP}",
                            '721px',
                            '1481px'
                        ],
                            [ "eid81", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${KEY_CLIP}', [0] ] ],
                            [ "eid108", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MEMO}', ['OFF'] ] ],
                            [ "eid82", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${KEY_CLIP}', ['SIGNAL'] ] ],
                            [ "eid91", "trigger", 2042, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${LAMP_CLIP}', [] ] ],
                            [ "eid92", "trigger", 2625, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${LAMP_CLIP}', [] ] ],
                            [ "eid93", "trigger", 3208.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${LAMP_CLIP}', [] ] ],
                            [ "eid110", "trigger", 5708.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${LAMP_CLIP}', [] ] ],
                            [ "eid109", "trigger", 5708.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MEMO}', ['ON'] ] ],
                            [ "eid111", "trigger", 6275.6666666666, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${LAMP_CLIP}', [] ] ]
                    ]
                }
            },
            "KEY_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1037', '1036', 'auto', 'auto'],
                            id: 'hand',
                            fill: ['rgba(0,0,0,0)', 'images/hand.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL_T',
                            symbolName: 'SIGNAL',
                            rect: ['94px', '-53px', null, null, 'auto', 'auto']
                        },
                        {
                            rect: ['-34px', '29px', null, null, 'auto', 'auto'],
                            id: 'SIGNAL_L',
                            symbolName: 'SIGNAL',
                            type: 'rect',
                            transform: [[], ['-72'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['238px', '47px', null, null, 'auto', 'auto'],
                            id: 'SIGNAL_R',
                            symbolName: 'SIGNAL',
                            type: 'rect',
                            transform: [[], ['58'], [0, 0, 0], [1, 1, 1]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1037px', '1036px']
                        }
                    }
                },
                timeline: {
                    duration: 1708.3333333333,
                    autoPlay: false,
                    labels: {
                        "SIGNAL": 42
                    },
                    data: [
                            [ "eid65", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_T}', [] ] ],
                            [ "eid66", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_R}', [] ] ],
                            [ "eid67", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_L}', [] ] ],
                            [ "eid70", "trigger", 625, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_R}', [] ] ],
                            [ "eid69", "trigger", 625, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_T}', [] ] ],
                            [ "eid68", "trigger", 625, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_L}', [] ] ],
                            [ "eid72", "trigger", 1208.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_L}', [] ] ],
                            [ "eid73", "trigger", 1208.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_R}', [] ] ],
                            [ "eid71", "trigger", 1208.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_T}', [] ] ]
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
                            rect: ['-66px', '-19px', '264', '75', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sigmal_src.png'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'sigmal_src',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['-66px', '-19px', '264', '75', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sigmal_src.png'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'sigmal_srcCopy',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['-66px', '-19px', '264', '75', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sigmal_src.png'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'sigmal_srcCopy2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['-66px', '-19px', '264', '75', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sigmal_src.png'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'sigmal_srcCopy3',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '132px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid54",
                            "top",
                            67,
                            300,
                            "linear",
                            "${sigmal_srcCopy}",
                            '-19px',
                            '-198px'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            200,
                            300,
                            "linear",
                            "${sigmal_srcCopy3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            200,
                            136,
                            "linear",
                            "${sigmal_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            363,
                            137,
                            "linear",
                            "${sigmal_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid59",
                            "top",
                            136,
                            300,
                            "linear",
                            "${sigmal_srcCopy2}",
                            '-19px',
                            '-198px'
                        ],
                        [
                            "eid60",
                            "top",
                            200,
                            300,
                            "linear",
                            "${sigmal_srcCopy3}",
                            '-19px',
                            '-198px'
                        ],
                        [
                            "eid58",
                            "scaleY",
                            136,
                            300,
                            "linear",
                            "${sigmal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            0,
                            136,
                            "linear",
                            "${sigmal_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            163,
                            137,
                            "linear",
                            "${sigmal_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid51",
                            "opacity",
                            67,
                            136,
                            "linear",
                            "${sigmal_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            230,
                            137,
                            "linear",
                            "${sigmal_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${sigmal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid63",
                            "scaleY",
                            200,
                            300,
                            "linear",
                            "${sigmal_srcCopy3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid53",
                            "scaleY",
                            67,
                            300,
                            "linear",
                            "${sigmal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            136,
                            136,
                            "linear",
                            "${sigmal_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            300,
                            137,
                            "linear",
                            "${sigmal_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid50",
                            "scaleX",
                            67,
                            300,
                            "linear",
                            "${sigmal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${sigmal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid55",
                            "scaleX",
                            136,
                            300,
                            "linear",
                            "${sigmal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid28",
                            "top",
                            0,
                            300,
                            "linear",
                            "${sigmal_src}",
                            '-19px',
                            '-198px'
                        ]
                    ]
                }
            },
            "MEMO": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '409', '444', 'auto', 'auto'],
                            id: 'memo_body',
                            fill: ['rgba(0,0,0,0)', 'images/memo_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'text',
                            rect: ['31px', '102px', '344', '273', 'auto', 'auto'],
                            align: 'center',
                            id: 'LOCK-OFF',
                            text: 'LOCK\rOFF',
                            opacity: '0',
                            font: ['Arial', [120, ''], 'rgba(140,142,144,1)', '700', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['31px', '102px', '344', '273', 'auto', 'auto'],
                            align: 'center',
                            id: 'LOCK-ON',
                            text: 'LOCK\rON',
                            opacity: '1',
                            font: ['Arial', [120, ''], 'rgba(140,142,144,1.00)', '700', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '409px', '444px']
                        }
                    }
                },
                timeline: {
                    duration: 67,
                    autoPlay: false,
                    labels: {
                        "OFF": 0,
                        "ON": 67
                    },
                    data: [
                        [
                            "eid33",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${LOCK-ON}",
                            '0',
                            '0'
                        ],
                        [
                            "eid35",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${LOCK-ON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${LOCK-OFF}",
                            '1',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${LOCK-OFF}",
                            '1',
                            '0'
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
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '64px', '1129', '221', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/light.png'],
                            id: 'light',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '1207', '352', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bright.png'],
                            id: 'bright',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1207px', '352px']
                        }
                    }
                },
                timeline: {
                    duration: 533.33333333333,
                    autoPlay: false,
                    data: [
                        [
                            "eid86",
                            "opacity",
                            0,
                            233,
                            "easeOutQuad",
                            "${light}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            300,
                            233,
                            "easeOutQuad",
                            "${light}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            233,
                            "easeOutQuad",
                            "${bright}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            300,
                            233,
                            "easeOutQuad",
                            "${bright}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort2_edgeActions.js");
})("EDGE-11497461");
