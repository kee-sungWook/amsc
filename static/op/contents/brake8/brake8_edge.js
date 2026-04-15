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
                            rect: ['60', '260', '2431', '1098', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'BTN_CLIP',
                            symbolName: 'BTN_CLIP',
                            type: 'rect',
                            rect: ['1046', '311', '1007', '2024', 'auto', 'auto'],
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
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid129",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP}",
                            '0',
                            '0'
                        ],
                        [
                            "eid132",
                            "opacity",
                            1100,
                            167,
                            "linear",
                            "${CAR_CLIP}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid149",
                            "opacity",
                            5250,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid147",
                            "opacity",
                            5250,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${BTN_CLIP}",
                            '1',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1100,
                            167,
                            "linear",
                            "${BTN_CLIP}",
                            '1',
                            '0'
                        ],
                            [ "eid61", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${BTN_CLIP}', [0] ] ],
                            [ "eid133", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP}', [0] ] ],
                            [ "eid62", "trigger", 100, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BTN_CLIP}', [] ] ],
                            [ "eid134", "trigger", 1466.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP}', [] ] ]
                    ]
                }
            },
            "BTN_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '457', '494', 'auto', 'auto'],
                            id: 'btn_back',
                            fill: ['rgba(0,0,0,0)', 'images/btn_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['37px', '54px', '369', '393', 'auto', 'auto'],
                            id: 'btn_body',
                            fill: ['rgba(0,0,0,0)', 'images/btn_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['41px', '58px', '361', '385', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_red.png'],
                            id: 'btn_red',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['128px', '283px', '703', '1319', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hand.png'],
                            id: 'hand',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1007px', '2024px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid41",
                            "scaleX",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_body}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_body}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            0,
                            0,
                            "easeOutQuad",
                            "${btn_body}",
                            '1',
                            '1'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_body}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_body}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid29",
                            "left",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '304px',
                            '128px'
                        ],
                        [
                            "eid36",
                            "left",
                            633,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '128px',
                            '96px'
                        ],
                        [
                            "eid58",
                            "left",
                            833,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '96px',
                            '128px'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${btn_red}",
                            '0',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '0',
                            '0.3'
                        ],
                        [
                            "eid49",
                            "opacity",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '0.3',
                            '0'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleX",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            633,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '1.2',
                            '1.1'
                        ],
                        [
                            "eid60",
                            "scaleX",
                            833,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '1.1',
                            '1.2'
                        ],
                        [
                            "eid27",
                            "top",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '705px',
                            '283px'
                        ],
                        [
                            "eid37",
                            "top",
                            633,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '283px',
                            '233px'
                        ],
                        [
                            "eid57",
                            "top",
                            833,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '233px',
                            '283px'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            633,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '1.2',
                            '1.1'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            833,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '1.1',
                            '1.2'
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
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            opacity: '0',
                            rect: ['0px', '0px', '78px', '77px', 'auto', 'auto'],
                            transform: [[], [], [], ['2', '2']],
                            stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            opacity: '0',
                            rect: ['0px', '0px', '78px', '77px', 'auto', 'auto'],
                            transform: [[], [], [], ['2', '2']],
                            stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy3',
                            opacity: '0',
                            rect: ['0px', '0px', '78px', '77px', 'auto', 'auto'],
                            transform: [[], [], [], ['2', '2']],
                            stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy4',
                            opacity: '0',
                            rect: ['0px', '0px', '78px', '77px', 'auto', 'auto'],
                            transform: [[], [], [], ['2', '2']],
                            stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '88px', '87px']
                        }
                    }
                },
                timeline: {
                    duration: 634,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "scaleY",
                            200,
                            333,
                            "easeOutQuad",
                            "${EllipseCopy3}",
                            '0.6',
                            '2'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            100,
                            333,
                            "easeOutQuad",
                            "${EllipseCopy2}",
                            '0.6',
                            '2'
                        ],
                        [
                            "eid152",
                            "border-color",
                            0,
                            0,
                            "easeOutQuad",
                            "${Ellipse}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid78",
                            "scaleX",
                            300,
                            333,
                            "easeOutQuad",
                            "${EllipseCopy4}",
                            '0.6',
                            '2'
                        ],
                        [
                            "eid68",
                            "opacity",
                            0,
                            167,
                            "easeOutQuad",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            167,
                            167,
                            "easeOutQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "opacity",
                            300,
                            167,
                            "easeOutQuad",
                            "${EllipseCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            467,
                            167,
                            "easeOutQuad",
                            "${EllipseCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid71",
                            "opacity",
                            100,
                            167,
                            "easeOutQuad",
                            "${EllipseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            267,
                            167,
                            "easeOutQuad",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            200,
                            333,
                            "easeOutQuad",
                            "${EllipseCopy3}",
                            '0.6',
                            '2'
                        ],
                        [
                            "eid81",
                            "scaleY",
                            300,
                            333,
                            "easeOutQuad",
                            "${EllipseCopy4}",
                            '0.6',
                            '2'
                        ],
                        [
                            "eid75",
                            "opacity",
                            200,
                            167,
                            "easeOutQuad",
                            "${EllipseCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            367,
                            167,
                            "easeOutQuad",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            100,
                            333,
                            "easeOutQuad",
                            "${EllipseCopy2}",
                            '0.6',
                            '2'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            0,
                            333,
                            "easeOutQuad",
                            "${Ellipse}",
                            '0.6',
                            '2'
                        ],
                        [
                            "eid150",
                            "border-color",
                            0,
                            0,
                            "easeOutQuad",
                            "${EllipseCopy3}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid151",
                            "border-color",
                            0,
                            0,
                            "easeOutQuad",
                            "${EllipseCopy4}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid153",
                            "border-color",
                            0,
                            0,
                            "easeOutQuad",
                            "${EllipseCopy2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid66",
                            "scaleY",
                            0,
                            333,
                            "easeOutQuad",
                            "${Ellipse}",
                            '0.6',
                            '2'
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
                            rect: ['1229px', '549px', '822px', '256px', 'auto', 'auto'],
                            id: 'flowBack',
                            stroke: [5, 'rgb(229, 19, 115)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1226px', '618px', '824px', '72px', 'auto', 'auto'],
                            transform: [[], ['-11']],
                            id: 'FLOW2',
                            stroke: [5, 'rgb(229, 19, 115)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,75,141,1.00)']
                        },
                        {
                            rect: ['1740px', '762px', '5px', '72px', 'auto', 'auto'],
                            transform: [[], ['-11']],
                            id: 'FLOW1',
                            stroke: [5, 'rgb(229, 19, 115)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,75,141,1.00)']
                        },
                        {
                            rect: ['3px', '3px', '2425', '1095', 'auto', 'auto'],
                            id: 'carBack',
                            fill: ['rgba(0,0,0,0)', 'images/carBack.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'SENSOR_SIGNAL',
                            symbolName: 'SIGNAL',
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['1686px', '761px', '88', '87', 'auto', 'auto']
                        },
                        {
                            rect: ['1655px', '769px', '149', '72', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_red.png'],
                            id: 'sensor_red',
                            opacity: '0.6',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['830px', '400px', '61', '40', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/module_red.png'],
                            id: 'module_red',
                            opacity: '0.6',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'SIGNAL',
                            symbolName: 'SIGNAL',
                            rect: ['817px', '374px', '88', '87', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '0px', '2431', '1081', 'auto', 'auto'],
                            id: 'carLine',
                            fill: ['rgba(0,0,0,0)', 'images/carLine.png'],
                            type: 'image',
                            tag: 'img'
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
                    duration: 3041.6666666667,
                    autoPlay: false,
                    data: [
                        [
                            "eid83",
                            "opacity",
                            0,
                            133,
                            "easeOutQuad",
                            "${module_red}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid88",
                            "opacity",
                            133,
                            133,
                            "easeOutQuad",
                            "${module_red}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid90",
                            "opacity",
                            300,
                            133,
                            "easeOutQuad",
                            "${module_red}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid91",
                            "opacity",
                            433,
                            133,
                            "easeOutQuad",
                            "${module_red}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid94",
                            "opacity",
                            600,
                            133,
                            "easeOutQuad",
                            "${module_red}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid95",
                            "opacity",
                            733,
                            133,
                            "easeOutQuad",
                            "${module_red}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid157",
                            "top",
                            566,
                            0,
                            "linear",
                            "${FLOW1}",
                            '752px',
                            '752px'
                        ],
                        [
                            "eid113",
                            "top",
                            1542,
                            375,
                            "linear",
                            "${FLOW1}",
                            '752px',
                            '648px'
                        ],
                        [
                            "eid85",
                            "opacity",
                            300,
                            133,
                            "easeOutQuad",
                            "${sensor_red}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid89",
                            "opacity",
                            433,
                            133,
                            "easeOutQuad",
                            "${sensor_red}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid92",
                            "opacity",
                            600,
                            133,
                            "easeOutQuad",
                            "${sensor_red}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid93",
                            "opacity",
                            733,
                            133,
                            "easeOutQuad",
                            "${sensor_red}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid96",
                            "opacity",
                            900,
                            133,
                            "easeOutQuad",
                            "${sensor_red}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid97",
                            "opacity",
                            1033,
                            133,
                            "easeOutQuad",
                            "${sensor_red}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid111",
                            "height",
                            1542,
                            375,
                            "linear",
                            "${FLOW1}",
                            '72px',
                            '184px'
                        ],
                        [
                            "eid115",
                            "left",
                            1542,
                            375,
                            "linear",
                            "${FLOW1}",
                            '1757px',
                            '1740px'
                        ],
                        [
                            "eid117",
                            "width",
                            1167,
                            333,
                            "linear",
                            "${FLOW1}",
                            '5px',
                            '158px'
                        ],
                        [
                            "eid123",
                            "left",
                            2000,
                            1042,
                            "linear",
                            "${FLOW2}",
                            '1771px',
                            '1226px'
                        ],
                        [
                            "eid122",
                            "top",
                            2000,
                            1042,
                            "linear",
                            "${FLOW2}",
                            '592px',
                            '618px'
                        ],
                        [
                            "eid124",
                            "width",
                            2000,
                            1042,
                            "linear",
                            "${FLOW2}",
                            '5px',
                            '824px'
                        ],
                            [ "eid126", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SENSOR_SIGNAL}', [0] ] ],
                            [ "eid125", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SIGNAL}', [0] ] ],
                            [ "eid127", "trigger", 33.333333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL}', [] ] ],
                            [ "eid128", "trigger", 333.33333333334, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SENSOR_SIGNAL}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake8_edgeActions.js");
})("EDGE-30688641");
