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
                            id: 'mirror',
                            display: 'block',
                            type: 'image',
                            tag: 'img',
                            rect: ['1079px', '50px', '763', '192', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"mirror.png"]
                        },
                        {
                            id: 'car',
                            display: 'block',
                            type: 'image',
                            tag: 'img',
                            rect: ['1188px', '-14px', '547', '331', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"car.png"]
                        },
                        {
                            id: 'carLight',
                            display: 'block',
                            type: 'image',
                            tag: 'img',
                            rect: ['1152px', '61px', '618', '123', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"carLight.png"]
                        },
                        {
                            id: 'highLight_day1',
                            display: 'block',
                            type: 'image',
                            tag: 'img',
                            rect: ['1389px', '-164px', '597', '596', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"highLight.png"],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'highLight_day1Copy',
                            display: 'block',
                            type: 'image',
                            tag: 'img',
                            rect: ['949px', '-164px', '597', '596', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"highLight.png"],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'pics',
                            display: 'block',
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '0px', '2562', '1442', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"pics.png"]
                        },
                        {
                            id: 'mirror_white',
                            display: 'block',
                            type: 'image',
                            tag: 'img',
                            rect: ['1033px', '3px', '857', '285', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mirror_white.png"]
                        },
                        {
                            id: 'SIGNAL_OVAL',
                            symbolName: 'SIGNAL_OVAL',
                            display: 'block',
                            type: 'rect',
                            rect: ['1394px', '214px', '113', '113', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['2.30974','2.30974']]
                        },
                        {
                            id: 'GEAR_SCENE',
                            symbolName: 'GEAR_SCENE',
                            display: 'none',
                            type: 'rect',
                            rect: ['296', '15', '1788', '1425', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['232px', '376px', '2140px', '108px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​변속레버가 후진(“R”)일 경우 자동밝기 기<span style=\"font-size: 80px;\">​</span>능해제</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [80, "px"], "rgba(255,255,255,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            display: 'block',
                            type: 'text',
                            rect: ['232px', '376px', '2140px', '108px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​실내미러에 들어오는 빛의 반사율을 낮추어 줌</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [80, "px"], "rgba(255,255,255,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['64px', '38px', '201', '201', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
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
                    duration: 7750,
                    autoPlay: true,
                    data: [
                        [
                            "eid100",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${car}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${car}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${highLight_day1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highLight_day1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${mirror_white}",
                            '0',
                            '0'
                        ],
                        [
                            "eid39",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${mirror_white}",
                            '0',
                            '0.9254902005195618'
                        ],
                        [
                            "eid50",
                            "opacity",
                            2750,
                            500,
                            "linear",
                            "${mirror_white}",
                            '0.9254902005195618',
                            '0'
                        ],
                        [
                            "eid115",
                            "opacity",
                            5250,
                            500,
                            "linear",
                            "${mirror_white}",
                            '0',
                            '0.9254902005195618'
                        ],
                        [
                            "eid74",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${SIGNAL_OVAL}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${SIGNAL_OVAL}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid122",
                            "opacity",
                            7500,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid36",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${carLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${GEAR_SCENE}",
                            'none',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${GEAR_SCENE}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            5000,
                            0,
                            "easeInQuad",
                            "${GEAR_SCENE}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${highLight_day1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "display",
                            3667,
                            0,
                            "linear",
                            "${TextCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${highLight_day1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highLight_day1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${carLight}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${carLight}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${mirror_white}",
                            'block',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${mirror_white}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${mirror}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${mirror}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${pics}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${pics}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "opacity",
                            917,
                            2750,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${highLight_day1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid120",
                            "opacity",
                            7500,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                            [ "eid4", "trigger", 1250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_OVAL}', [0] ] ],
                            [ "eid116", "trigger", 1666.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_OVAL}', [0] ] ],
                            [ "eid117", "trigger", 2083, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_OVAL}', [0] ] ],
                            [ "eid118", "trigger", 4000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GEAR_SCENE}', [0] ] ]
                    ]
                }
            },
            "SIGNAL_OVAL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src5.png'],
                            type: 'image',
                            id: 'signal_src',
                            opacity: '0',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src5.png'],
                            type: 'image',
                            id: 'signal_srcCopy',
                            opacity: '0',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src5.png'],
                            type: 'image',
                            id: 'signal_srcCopy2',
                            opacity: '0',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src5.png'],
                            type: 'image',
                            id: 'signal_srcCopy3',
                            opacity: '0',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src5.png'],
                            type: 'image',
                            id: 'signal_srcCopy4',
                            opacity: '0',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '113px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 417,
                    autoPlay: false,
                    data: [
                        [
                            "eid91",
                            "opacity",
                            125,
                            107,
                            "easeInQuad",
                            "${signal_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            232,
                            143,
                            "easeInQuad",
                            "${signal_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid97",
                            "scaleY",
                            167,
                            250,
                            "easeInQuad",
                            "${signal_srcCopy4}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            83,
                            250,
                            "easeInQuad",
                            "${signal_srcCopy2}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid77",
                            "scaleY",
                            0,
                            250,
                            "easeInQuad",
                            "${signal_src}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            125,
                            250,
                            "easeInQuad",
                            "${signal_srcCopy3}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            125,
                            250,
                            "easeInQuad",
                            "${signal_srcCopy3}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            83,
                            107,
                            "easeInQuad",
                            "${signal_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            190,
                            143,
                            "easeInQuad",
                            "${signal_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            42,
                            250,
                            "easeInQuad",
                            "${signal_srcCopy}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid82",
                            "scaleX",
                            42,
                            250,
                            "easeInQuad",
                            "${signal_srcCopy}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            167,
                            107,
                            "easeInQuad",
                            "${signal_srcCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            274,
                            143,
                            "easeInQuad",
                            "${signal_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            83,
                            250,
                            "easeInQuad",
                            "${signal_srcCopy2}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            0,
                            125,
                            "easeInQuad",
                            "${signal_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            125,
                            125,
                            "easeInQuad",
                            "${signal_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid94",
                            "scaleX",
                            167,
                            250,
                            "easeInQuad",
                            "${signal_srcCopy4}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid83",
                            "opacity",
                            42,
                            125,
                            "easeInQuad",
                            "${signal_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            167,
                            125,
                            "easeInQuad",
                            "${signal_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            0,
                            250,
                            "easeInQuad",
                            "${signal_src}",
                            '0.35',
                            '1'
                        ]
                    ]
                }
            },
            "GEAR_SCENE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '15px', '1788', '1410', 'auto', 'auto'],
                            id: 'gear_body',
                            fill: ['rgba(0,0,0,0)', 'images/gear_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['816px', '-48px', '382', '789', 'auto', 'auto'],
                            id: 'gear_stick',
                            fill: ['rgba(0,0,0,0)', 'images/gear_stick.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1788px', '1425px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid135",
                            "left",
                            0,
                            750,
                            "easeInQuad",
                            "${gear_stick}",
                            '676px',
                            '816px'
                        ],
                        [
                            "eid136",
                            "top",
                            0,
                            750,
                            "easeInQuad",
                            "${gear_stick}",
                            '-48px',
                            '63px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort9_edgeActions.js");
})("EDGE-38960081");
