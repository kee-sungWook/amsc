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
                            id: 'backPic',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '0', '2560', '1440', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"backPic.png"]
                        },
                        {
                            id: 'sc_f',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '0', '863', '1440', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sc_f.png"]
                        },
                        {
                            id: 'sc_r',
                            type: 'image',
                            tag: 'img',
                            rect: ['1697', '0', '863', '1440', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sc_r.png"]
                        },
                        {
                            id: 'sc_b',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '858', '2560', '582', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sc_b.png"]
                        },
                        {
                            id: 'sc_t',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '0', '2560', '582', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sc_t.png"]
                        },
                        {
                            id: 'viewer',
                            type: 'image',
                            tag: 'img',
                            rect: ['1', '0', '2558', '1440', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"viewer.png"]
                        },
                        {
                            id: 'SIGNAL_LIGHT',
                            symbolName: 'SIGNAL_LIGHT',
                            type: 'rect',
                            rect: ['371', '19', '1763', '1411', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'CAR',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['785', '453', '1013', '537', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'GEAR_SCENE',
                            symbolName: 'GEAR_SCENE',
                            type: 'rect',
                            rect: ['296', '15', '1788', '1425', 'auto', 'auto'],
                            opacity: '0'
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
                            rect: ['40px', '40px', '204px', '204px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(201,201,201,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6250,
                    autoPlay: true,
                    data: [
                        [
                            "eid159",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid160",
                            "opacity",
                            6000,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${backPic}",
                            '1',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1500,
                            0,
                            "easeInQuad",
                            "${backPic}",
                            '1',
                            '0'
                        ],
                        [
                            "eid141",
                            "opacity",
                            3500,
                            0,
                            "easeInQuad",
                            "${backPic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${GEAR_SCENE}",
                            '0',
                            '0'
                        ],
                        [
                            "eid134",
                            "opacity",
                            1500,
                            0,
                            "easeInQuad",
                            "${GEAR_SCENE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            3500,
                            0,
                            "easeInQuad",
                            "${GEAR_SCENE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sc_f}",
                            '0',
                            '0'
                        ],
                        [
                            "eid147",
                            "opacity",
                            4033,
                            667,
                            "easeOutQuad",
                            "${sc_f}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sc_r}",
                            '0',
                            '0'
                        ],
                        [
                            "eid145",
                            "opacity",
                            4033,
                            667,
                            "easeOutQuad",
                            "${sc_r}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            6000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid133",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${CAR}",
                            '1',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            1500,
                            0,
                            "easeInQuad",
                            "${CAR}",
                            '1',
                            '0'
                        ],
                        [
                            "eid140",
                            "opacity",
                            3500,
                            0,
                            "easeInQuad",
                            "${CAR}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sc_t}",
                            '0',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            4033,
                            667,
                            "easeOutQuad",
                            "${sc_t}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${viewer}",
                            '0',
                            '0'
                        ],
                        [
                            "eid144",
                            "opacity",
                            4033,
                            667,
                            "easeOutQuad",
                            "${viewer}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            4033,
                            667,
                            "easeOutQuad",
                            "${SIGNAL_LIGHT}",
                            '1',
                            '0'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sc_b}",
                            '0',
                            '0'
                        ],
                        [
                            "eid143",
                            "opacity",
                            4033,
                            667,
                            "easeOutQuad",
                            "${sc_b}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid137", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SIGNAL_LIGHT}', [0] ] ],
                            [ "eid150", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR}', [] ] ],
                            [ "eid138", "trigger", 1500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GEAR_SCENE}', [] ] ],
                            [ "eid149", "trigger", 3500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR}', ['sg_hide'] ] ],
                            [ "eid148", "trigger", 3500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_LIGHT}', [] ] ]
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
                            rect: ['816px', '118px', '382', '733px', 'auto', 'auto'],
                            id: 'gear_stick',
                            fill: ['rgba(0,0,0,0)', 'images/gear_stick.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1788px', '1425px']
                        }
                    }
                },
                timeline: {
                    duration: 1033,
                    autoPlay: false,
                    data: [
                        [
                            "eid135",
                            "left",
                            0,
                            1033,
                            "easeInQuad",
                            "${gear_stick}",
                            '676px',
                            '816px'
                        ],
                        [
                            "eid163",
                            "height",
                            0,
                            0,
                            "easeInQuad",
                            "${gear_stick}",
                            '733px',
                            '733px'
                        ],
                        [
                            "eid136",
                            "top",
                            0,
                            1033,
                            "easeInQuad",
                            "${gear_stick}",
                            '0px',
                            '118px'
                        ]
                    ]
                }
            },
            "SIGNAL_LIGHT": {
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
                            tag: 'img',
                            rect: ['454px', '229px', '88px', '950', 'auto', 'auto'],
                            id: 'signal_LIGHT1',
                            opacity: '0',
                            transform: [[], [], [], ['1', '0.1']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['1221px', '229px', '140px', '950', 'auto', 'auto'],
                            id: 'signal_LIGHT2',
                            opacity: '0',
                            transform: [[], ['180'], [], ['1', '0.1']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['753px', '58px', '18px', '950', 'auto', 'auto'],
                            id: 'signal_LIGHT3',
                            opacity: '0',
                            transform: [[], ['90'], [], ['1', '0.1']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['753px', '403px', '18px', '950', 'auto', 'auto'],
                            id: 'signal_LIGHT4',
                            opacity: '0',
                            transform: [[], ['-90'], [], ['1', '0.1']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1763px', '1411px']
                        }
                    }
                },
                timeline: {
                    duration: 733.33333333333,
                    autoPlay: false,
                    data: [
                        [
                            "eid65",
                            "opacity",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleY",
                            333,
                            400,
                            "easeOutQuad",
                            "${signal_LIGHT4}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid47",
                            "left",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT1}",
                            '454px',
                            '0px'
                        ],
                        [
                            "eid49",
                            "width",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT1}",
                            '88px',
                            '542px'
                        ],
                        [
                            "eid71",
                            "opacity",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "width",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT3}",
                            '18px',
                            '542px'
                        ],
                        [
                            "eid61",
                            "left",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT4}",
                            '753px',
                            '491px'
                        ],
                        [
                            "eid53",
                            "top",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT3}",
                            '58px',
                            '-204px'
                        ],
                        [
                            "eid67",
                            "opacity",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "scaleY",
                            333,
                            400,
                            "easeOutQuad",
                            "${signal_LIGHT2}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            333,
                            400,
                            "easeOutQuad",
                            "${signal_LIGHT1}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid63",
                            "width",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT4}",
                            '18px',
                            '542px'
                        ],
                        [
                            "eid55",
                            "left",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT3}",
                            '753px',
                            '491px'
                        ],
                        [
                            "eid41",
                            "scaleY",
                            333,
                            400,
                            "easeOutQuad",
                            "${signal_LIGHT3}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid51",
                            "width",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT2}",
                            '140px',
                            '542px'
                        ],
                        [
                            "eid59",
                            "top",
                            0,
                            267,
                            "easeInQuad",
                            "${signal_LIGHT4}",
                            '403px',
                            '665px'
                        ]
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
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            id: 'signal_src',
                            opacity: '0',
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            id: 'signal_srcCopy',
                            opacity: '0',
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            id: 'signal_srcCopy2',
                            opacity: '0',
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            id: 'signal_srcCopy3',
                            opacity: '0',
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                            id: 'signal_srcCopy4',
                            opacity: '0',
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '113px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 666.66666666667,
                    autoPlay: false,
                    data: [
                        [
                            "eid91",
                            "opacity",
                            200,
                            33,
                            "easeInQuad",
                            "${signal_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            567,
                            33,
                            "easeInQuad",
                            "${signal_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            0,
                            400,
                            "easeInQuad",
                            "${signal_src}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            200,
                            400,
                            "easeInQuad",
                            "${signal_srcCopy3}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid77",
                            "scaleY",
                            0,
                            400,
                            "easeInQuad",
                            "${signal_src}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid97",
                            "scaleY",
                            266,
                            400,
                            "easeInQuad",
                            "${signal_srcCopy4}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            200,
                            400,
                            "easeInQuad",
                            "${signal_srcCopy3}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            133,
                            33,
                            "easeInQuad",
                            "${signal_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            500,
                            33,
                            "easeInQuad",
                            "${signal_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid94",
                            "scaleX",
                            266,
                            400,
                            "easeInQuad",
                            "${signal_srcCopy4}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid82",
                            "scaleX",
                            66,
                            400,
                            "easeInQuad",
                            "${signal_srcCopy}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            266,
                            33,
                            "easeInQuad",
                            "${signal_srcCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            633,
                            33,
                            "easeInQuad",
                            "${signal_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "opacity",
                            0,
                            33,
                            "easeInQuad",
                            "${signal_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            367,
                            33,
                            "easeInQuad",
                            "${signal_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            133,
                            400,
                            "easeInQuad",
                            "${signal_srcCopy2}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            66,
                            400,
                            "easeInQuad",
                            "${signal_srcCopy}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid83",
                            "opacity",
                            66,
                            33,
                            "easeInQuad",
                            "${signal_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            433,
                            33,
                            "easeInQuad",
                            "${signal_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            133,
                            400,
                            "easeInQuad",
                            "${signal_srcCopy2}",
                            '0.35',
                            '1'
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
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['32px', '49px', '926', '436', 'auto', 'auto'],
                            id: 'car1',
                            fill: ['rgba(0,0,0,0)', 'images/car1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL_OVAL',
                            symbolName: 'SIGNAL_OVAL',
                            opacity: '1',
                            rect: ['300px', '0px', '113', '113', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL_OVALCopy',
                            symbolName: 'SIGNAL_OVAL',
                            opacity: '1',
                            rect: ['300px', '424px', '113', '113', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL_OVALCopy2',
                            symbolName: 'SIGNAL_OVAL',
                            opacity: '1',
                            rect: ['0px', '212px', '113', '113', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL_OVALCopy3',
                            symbolName: 'SIGNAL_OVAL',
                            opacity: '1',
                            rect: ['900px', '212px', '113', '113', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1013px', '537px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "sg_hide": 733
                    },
                    data: [
                        [
                            "eid122",
                            "opacity",
                            733,
                            267,
                            "easeInQuad",
                            "${SIGNAL_OVALCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid124",
                            "opacity",
                            733,
                            267,
                            "easeInQuad",
                            "${SIGNAL_OVAL}",
                            '1',
                            '0'
                        ],
                        [
                            "eid123",
                            "opacity",
                            733,
                            267,
                            "easeInQuad",
                            "${SIGNAL_OVALCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid125",
                            "opacity",
                            733,
                            267,
                            "easeInQuad",
                            "${SIGNAL_OVALCopy}",
                            '1',
                            '0'
                        ],
                            [ "eid118", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_OVAL}', [] ] ],
                            [ "eid120", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_OVALCopy}', [] ] ],
                            [ "eid119", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_OVALCopy2}', [] ] ],
                            [ "eid121", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_OVALCopy3}', [] ] ],
                            [ "eid128", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SIGNAL_OVALCopy3}', [0] ] ],
                            [ "eid127", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SIGNAL_OVALCopy2}', [0] ] ],
                            [ "eid126", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SIGNAL_OVALCopy}', [0] ] ],
                            [ "eid129", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SIGNAL_OVAL}', [0] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("parking4_edgeActions.js");
})("EDGE-1903505");
