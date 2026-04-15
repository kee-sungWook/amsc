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
                            id: 'landscape',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '498', '2561', '538', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"landscape.png"]
                        },
                        {
                            id: 'lamp_clip_left',
                            symbolName: 'lamp_clip',
                            type: 'rect',
                            rect: ['-202px', '-39px', '1488px', '998', 'auto', 'auto']
                        },
                        {
                            id: 'lamp_clip_right',
                            symbolName: 'lamp_clip',
                            type: 'rect',
                            rect: ['1334px', '-39px', '1488px', '998', 'auto', 'auto'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'shadow',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '713', '2561', '728', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"shadow.png"]
                        },
                        {
                            id: 'sun',
                            type: 'image',
                            tag: 'img',
                            rect: ['-381px', '504px', '381', '382', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sun.png"]
                        },
                        {
                            id: 'moon',
                            type: 'image',
                            tag: 'img',
                            rect: ['-220px', '465px', '220', '230', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"moon.png"]
                        },
                        {
                            id: 'car',
                            type: 'image',
                            tag: 'img',
                            rect: ['548', '431', '1480', '892', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car.png"]
                        },
                        {
                            id: 'bottomLight',
                            type: 'image',
                            tag: 'img',
                            rect: ['448', '908', '1683', '334', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bottomLight.png"]
                        },
                        {
                            id: 'headLight',
                            type: 'image',
                            tag: 'img',
                            rect: ['420', '597', '1740', '426', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"headLight.png"]
                        },
                        {
                            id: 'highLight_day1',
                            type: 'image',
                            tag: 'img',
                            rect: ['1553px', '808px', '597', '596', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"highLight.png"]
                        },
                        {
                            id: 'highLight_day2',
                            type: 'image',
                            tag: 'img',
                            rect: ['429px', '808px', '597', '596', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"highLight.png"]
                        },
                        {
                            id: 'highLight_night1',
                            type: 'image',
                            tag: 'img',
                            rect: ['1637px', '511px', '597', '596', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"highLight.png"]
                        },
                        {
                            id: 'highLight_night2',
                            type: 'image',
                            tag: 'img',
                            rect: ['344px', '511px', '597', '596', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"highLight.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40', '40', '201', '201', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    labels: {
                        "day": 500
                    },
                    data: [
                        [
                            "eid37",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${moon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${moon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            500,
                            "linear",
                            "${sun}",
                            '-381px',
                            '1063px'
                        ],
                        [
                            "eid20",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${sun}",
                            '1063px',
                            '2560px'
                        ],
                        [
                            "eid83",
                            "left",
                            5000,
                            500,
                            "linear",
                            "${sun}",
                            '-381px',
                            '1063px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${headLight}",
                            '0',
                            '0'
                        ],
                        [
                            "eid72",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${headLight}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${headLight}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${highLight_day2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${highLight_day2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid92",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${highLight_day2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "top",
                            0,
                            500,
                            "linear",
                            "${sun}",
                            '504px',
                            '18px'
                        ],
                        [
                            "eid21",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${sun}",
                            '18px',
                            '416px'
                        ],
                        [
                            "eid81",
                            "top",
                            5000,
                            500,
                            "linear",
                            "${sun}",
                            '504px',
                            '18px'
                        ],
                        [
                            "eid62",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${highLight_night1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${highLight_night1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid59",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${highLight_night2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${highLight_night2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid32",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${moon}",
                            '465px',
                            '54px'
                        ],
                        [
                            "eid34",
                            "top",
                            5000,
                            500,
                            "linear",
                            "${moon}",
                            '54px',
                            '498px'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${highLight_day1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${highLight_day1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid93",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${highLight_day1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${moon}",
                            '-220px',
                            '1148px'
                        ],
                        [
                            "eid33",
                            "left",
                            5000,
                            500,
                            "linear",
                            "${moon}",
                            '1148px',
                            '2561px'
                        ],
                        [
                            "eid42",
                            "background-color",
                            2500,
                            500,
                            "linear",
                            "${Stage}",
                            'rgba(140,142,144,1)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid80",
                            "background-color",
                            5000,
                            500,
                            "linear",
                            "${Stage}",
                            'rgba(0,0,0,1.00)',
                            'rgba(140,142,144,1)'
                        ],
                        [
                            "eid19",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${sun}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${sun}",
                            '1',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${sun}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${bottomLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${bottomLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid95",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${bottomLight}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "lamp_clip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            id: 'roadlamp',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp3.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            id: 'roadlampCopy',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp3.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            id: 'roadlampCopy2',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp3.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1488px', '998px']
                        }
                    }
                },
                timeline: {
                    duration: 417,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '0px',
                            '12px'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '798px',
                            '1197px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '0px',
                            '798px'
                        ],
                        [
                            "eid5",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '1',
                            '0.44615'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '12px',
                            '18px'
                        ],
                        [
                            "eid10",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '0.16875',
                            '0.05'
                        ],
                        [
                            "eid9",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '0.44615',
                            '0.16875'
                        ],
                        [
                            "eid7",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '0.44615',
                            '0.16875'
                        ],
                        [
                            "eid3",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '1',
                            '0.44615'
                        ],
                        [
                            "eid12",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '1197px',
                            '1368px'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '18px',
                            '20px'
                        ],
                        [
                            "eid11",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '0.16875',
                            '0.05'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lamp5_edgeActions.js");
})("EDGE-11314239");
