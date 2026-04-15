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
                            id: 'carbody',
                            type: 'image',
                            tag: 'img',
                            rect: ['67', '250', '1955', '1054', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"carbody.png"]
                        },
                        {
                            id: 'trunk',
                            type: 'image',
                            tag: 'img',
                            rect: ['1141', '449', '836', '483', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"trunk.png"]
                        },
                        {
                            id: 'trunk2',
                            type: 'image',
                            tag: 'img',
                            rect: ['1142', '454', '842', '363', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"trunk2.png"]
                        },
                        {
                            id: 'trunk_open2',
                            type: 'image',
                            tag: 'img',
                            rect: ['1137', '414', '944', '356', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"trunk_open2.png"]
                        },
                        {
                            id: 'trunk_open',
                            type: 'image',
                            tag: 'img',
                            rect: ['1137', '374', '953', '386', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"trunk_open.png"]
                        },
                        {
                            id: 'lamp',
                            type: 'image',
                            tag: 'img',
                            rect: ['1297', '727', '701', '260', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"lamp.png"]
                        },
                        {
                            id: 'light',
                            type: 'image',
                            tag: 'img',
                            rect: ['1241', '713', '773', '308', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"light.png"]
                        },
                        {
                            id: 'human',
                            type: 'image',
                            tag: 'img',
                            rect: ['2098px', '130px', '699', '1293', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"human.png"]
                        },
                        {
                            id: 'TIMER',
                            symbolName: 'TIMER',
                            type: 'rect',
                            rect: ['1641', '37', '279', '287', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'SIGNAL_INCAR',
                            symbolName: 'SIGNAL_INCAR',
                            type: 'rect',
                            rect: ['1597px', '369px', '509px', '515px', 'auto', 'auto']
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['38', '38', '204', '204', 'auto', 'auto'],
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
                            overflow: 'auto',
                            fill: ["rgba(140,142,144,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6750,
                    autoPlay: true,
                    data: [
                        [
                            "eid58",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid59",
                            "opacity",
                            6500,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            875,
                            "linear",
                            "${human}",
                            '2098px',
                            '1938px'
                        ],
                        [
                            "eid66",
                            "opacity",
                            1417,
                            250,
                            "easeInQuad",
                            "${lamp}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            1667,
                            250,
                            "easeInQuad",
                            "${lamp}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "opacity",
                            2125,
                            250,
                            "easeInQuad",
                            "${lamp}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            2375,
                            250,
                            "easeInQuad",
                            "${lamp}",
                            '1',
                            '0'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2833,
                            438,
                            "easeInQuad",
                            "${lamp}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            3271,
                            438,
                            "easeInQuad",
                            "${lamp}",
                            '1',
                            '0'
                        ],
                        [
                            "eid36",
                            "opacity",
                            3750,
                            438,
                            "easeInQuad",
                            "${lamp}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            4188,
                            438,
                            "easeInQuad",
                            "${lamp}",
                            '1',
                            '0'
                        ],
                        [
                            "eid49",
                            "opacity",
                            5250,
                            167,
                            "easeInQuad",
                            "${trunk_open2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            5417,
                            167,
                            "easeInQuad",
                            "${trunk_open2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid42",
                            "opacity",
                            5083,
                            0,
                            "easeInQuad",
                            "${trunk_open}",
                            '0',
                            '0'
                        ],
                        [
                            "eid54",
                            "opacity",
                            5417,
                            167,
                            "easeInQuad",
                            "${trunk_open}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            1417,
                            250,
                            "easeInQuad",
                            "${light}",
                            '0',
                            '0.498039'
                        ],
                        [
                            "eid65",
                            "opacity",
                            1667,
                            250,
                            "easeInQuad",
                            "${light}",
                            '0.498039',
                            '0'
                        ],
                        [
                            "eid68",
                            "opacity",
                            2125,
                            250,
                            "easeInQuad",
                            "${light}",
                            '0',
                            '0.498039'
                        ],
                        [
                            "eid69",
                            "opacity",
                            2375,
                            250,
                            "easeInQuad",
                            "${light}",
                            '0.498039',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2833,
                            438,
                            "easeInQuad",
                            "${light}",
                            '0',
                            '0.498039'
                        ],
                        [
                            "eid32",
                            "opacity",
                            3271,
                            438,
                            "easeInQuad",
                            "${light}",
                            '0.498039',
                            '0'
                        ],
                        [
                            "eid34",
                            "opacity",
                            3750,
                            437,
                            "easeInQuad",
                            "${light}",
                            '0',
                            '0.498039'
                        ],
                        [
                            "eid35",
                            "opacity",
                            4187,
                            438,
                            "easeInQuad",
                            "${light}",
                            '0.498039',
                            '0'
                        ],
                        [
                            "eid22",
                            "opacity",
                            875,
                            542,
                            "easeInQuad",
                            "${TIMER}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "top",
                            0,
                            875,
                            "linear",
                            "${human}",
                            '130px',
                            '134px'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${trunk}",
                            '1',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            5083,
                            167,
                            "easeInQuad",
                            "${trunk}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            5083,
                            167,
                            "easeInQuad",
                            "${trunk2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            5250,
                            167,
                            "easeInQuad",
                            "${trunk2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11",
                            "opacity",
                            0,
                            875,
                            "linear",
                            "${human}",
                            '0',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid57",
                            "opacity",
                            6500,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                            [ "eid60", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${TIMER}', [0] ] ],
                            [ "eid23", "trigger", 1416.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TIMER}', [] ] ],
                            [ "eid12", "trigger", 2833, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_INCAR}', [] ] ],
                            [ "eid13", "trigger", 3791.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_INCAR}', [0] ] ]
                    ]
                }
            },
            "SIGNAL_INCAR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy3',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy4',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '509px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 700,
                    autoPlay: false,
                    data: [
                        [
                            "eid248",
                            "scaleY",
                            200,
                            433,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid244",
                            "scaleY",
                            133,
                            433,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid233",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${Ellipse}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid237",
                            "scaleX",
                            67,
                            433,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            0,
                            200,
                            "easeInQuad",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            200,
                            233,
                            "easeInQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid242",
                            "opacity",
                            133,
                            200,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid243",
                            "opacity",
                            333,
                            233,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid245",
                            "scaleX",
                            200,
                            433,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid238",
                            "opacity",
                            67,
                            200,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "opacity",
                            267,
                            233,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid246",
                            "opacity",
                            200,
                            200,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid247",
                            "opacity",
                            400,
                            233,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid241",
                            "scaleX",
                            133,
                            433,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${Ellipse}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid240",
                            "scaleY",
                            67,
                            433,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid249",
                            "scaleX",
                            267,
                            433,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid250",
                            "opacity",
                            267,
                            200,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid251",
                            "opacity",
                            467,
                            233,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid252",
                            "scaleY",
                            267,
                            433,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0.2',
                            '1'
                        ]
                    ]
                }
            },
            "TIMER": {
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
                            id: 'timer',
                            tag: 'img',
                            rect: ['0px', '8px', '279', '279', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timer.png']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '30px', '279px', '287px', 'auto', 'auto'],
                            display: 'none',
                            id: 'TXT3',
                            text: '<p style=\"margin:0px\">3​</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [200, ''], 'rgb(102,102,102)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '30px', '279px', '287px', 'auto', 'auto'],
                            display: 'none',
                            id: 'TXT2',
                            text: '<p style=\"margin:0px\">2​</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [200, ''], 'rgb(102,102,102)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['-1px', '30px', '279px', '287px', 'auto', 'auto'],
                            display: 'block',
                            id: 'TXT1',
                            text: '<p style=\"margin:0px\">1​</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [200, ''], 'rgb(102,102,102)', 'normal', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '279px', '287px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${TXT1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            500,
                            0,
                            "easeInQuad",
                            "${TXT1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${TXT2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            500,
                            0,
                            "easeInQuad",
                            "${TXT2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            1250,
                            0,
                            "easeInQuad",
                            "${TXT2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${TXT3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            1250,
                            0,
                            "easeInQuad",
                            "${TXT3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort7_edgeActions.js");
})("EDGE-6826934");
