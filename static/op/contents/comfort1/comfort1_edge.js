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
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'line_back',
                            type: 'image',
                            tag: 'img',
                            rect: ['832px', '742', '486', '266', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line_back.png"]
                        },
                        {
                            id: 'f6',
                            type: 'rect',
                            rect: ['1038px', '771px', '90px', '24px', 'auto', 'auto'],
                            fill: ["rgba(0,116,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-34']]
                        },
                        {
                            id: 'f5',
                            type: 'rect',
                            rect: ['957px', '790px', '9px', '24px', 'auto', 'auto'],
                            fill: ["rgba(0,116,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['202']]
                        },
                        {
                            id: 'f4',
                            type: 'rect',
                            rect: ['1320px', '935px', '106px', '24px', 'auto', 'auto'],
                            fill: ["rgba(0,116,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-34']]
                        },
                        {
                            id: 'f3',
                            type: 'rect',
                            rect: ['1008px', '730px', '9px', '24px', 'auto', 'auto'],
                            fill: ["rgba(0,116,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-34']]
                        },
                        {
                            id: 'f2',
                            type: 'rect',
                            rect: ['960px', '785px', '90px', '24px', 'auto', 'auto'],
                            fill: ["rgba(0,116,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['202']]
                        },
                        {
                            id: 'f1',
                            type: 'rect',
                            rect: ['896px', '740px', '90px', '24px', 'auto', 'auto'],
                            fill: ["rgba(0,116,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-34']]
                        },
                        {
                            id: 'tail_ligntCopy',
                            type: 'image',
                            tag: 'img',
                            rect: ['1592px', '56px', '341', '327', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tail_lignt.png"]
                        },
                        {
                            id: 'car_back',
                            type: 'image',
                            tag: 'img',
                            rect: ['794px', '176', '1339', '1044', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car_back.png"]
                        },
                        {
                            id: 'e_line2',
                            symbolName: 'e_line',
                            type: 'rect',
                            rect: ['836px', '746', '478', '259', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'car',
                            type: 'image',
                            tag: 'img',
                            rect: ['797px', '180', '1332', '1018', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car.png"]
                        },
                        {
                            id: 'car_temp',
                            type: 'image',
                            tag: 'img',
                            rect: ['794px', '176', '1339', '1025', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"car_temp.png"]
                        },
                        {
                            id: 'tail_lamp',
                            type: 'image',
                            tag: 'img',
                            rect: ['2084px', '323', '43', '70', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tail_lamp.png"]
                        },
                        {
                            id: 'tail_lignt',
                            type: 'image',
                            tag: 'img',
                            rect: ['1946px', '198', '341', '327', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tail_lignt.png"]
                        },
                        {
                            id: 'lampLight',
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '780', '1252px', '660', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"lampLight.png"]
                        },
                        {
                            id: 'memo_body2',
                            type: 'image',
                            tag: 'img',
                            rect: ['512px', '183', '447', '446', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"memo_body2.png"]
                        },
                        {
                            id: 'memo_body1',
                            type: 'image',
                            tag: 'img',
                            rect: ['1780px', '821', '600', '537', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"memo_body1.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200px', '200px', 'auto', 'auto'],
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
                    duration: 3583,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "opacity",
                            500,
                            458,
                            "linear",
                            "${car_temp}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21",
                            "width",
                            2333,
                            417,
                            "linear",
                            "${f5}",
                            '398px',
                            '9px'
                        ],
                        [
                            "eid7",
                            "top",
                            2042,
                            291,
                            "linear",
                            "${f1}",
                            '764px',
                            '740px'
                        ],
                        [
                            "eid4",
                            "opacity",
                            1583,
                            250,
                            "linear",
                            "${memo_body2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "left",
                            2042,
                            291,
                            "linear",
                            "${f1}",
                            '816px',
                            '896px'
                        ],
                        [
                            "eid14",
                            "left",
                            2748,
                            293,
                            "linear",
                            "${f3}",
                            '940px',
                            '1008px'
                        ],
                        [
                            "eid10",
                            "top",
                            2333,
                            415,
                            "linear",
                            "${f2}",
                            '771px',
                            '785px'
                        ],
                        [
                            "eid27",
                            "opacity",
                            3041,
                            250,
                            "linear",
                            "${tail_ligntCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid6",
                            "opacity",
                            1834,
                            208,
                            "linear",
                            "${e_line2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "width",
                            2042,
                            291,
                            "linear",
                            "${f1}",
                            '90px',
                            '9px'
                        ],
                        [
                            "eid12",
                            "width",
                            2333,
                            415,
                            "linear",
                            "${f2}",
                            '90px',
                            '9px'
                        ],
                        [
                            "eid17",
                            "left",
                            2042,
                            291,
                            "linear",
                            "${f4}",
                            '1227px',
                            '1320px'
                        ],
                        [
                            "eid24",
                            "width",
                            2748,
                            293,
                            "linear",
                            "${f6}",
                            '90px',
                            '2px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid29",
                            "opacity",
                            3333,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            3041,
                            250,
                            "linear",
                            "${tail_lignt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            3333,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid13",
                            "top",
                            2748,
                            293,
                            "linear",
                            "${f3}",
                            '749px',
                            '730px'
                        ],
                        [
                            "eid15",
                            "width",
                            2748,
                            293,
                            "linear",
                            "${f3}",
                            '90px',
                            '9px'
                        ],
                        [
                            "eid26",
                            "opacity",
                            3041,
                            250,
                            "linear",
                            "${lampLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid19",
                            "top",
                            2333,
                            417,
                            "linear",
                            "${f5}",
                            '866px',
                            '790px'
                        ],
                        [
                            "eid22",
                            "top",
                            2748,
                            293,
                            "linear",
                            "${f6}",
                            '771px',
                            '747px'
                        ],
                        [
                            "eid20",
                            "left",
                            2333,
                            417,
                            "linear",
                            "${f5}",
                            '939px',
                            '957px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            1167,
                            250,
                            "linear",
                            "${memo_body1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "left",
                            2748,
                            293,
                            "linear",
                            "${f6}",
                            '955px',
                            '1038px'
                        ],
                        [
                            "eid18",
                            "width",
                            2042,
                            291,
                            "linear",
                            "${f4}",
                            '106px',
                            '9px'
                        ],
                        [
                            "eid16",
                            "top",
                            2042,
                            291,
                            "linear",
                            "${f4}",
                            '962px',
                            '935px'
                        ],
                        [
                            "eid11",
                            "left",
                            2333,
                            415,
                            "linear",
                            "${f2}",
                            '878px',
                            '960px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            3041,
                            250,
                            "linear",
                            "${tail_lamp}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "e_line": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '478', '259', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/e_line.png'],
                            id: 'e_line',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '478px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${e_line}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${e_line}",
                            '0.000000',
                            '0.5'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort1_edgeActions.js");
})("EDGE-9411150");
