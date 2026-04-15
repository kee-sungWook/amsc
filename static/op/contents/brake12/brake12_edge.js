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
                            tag: 'img',
                            rect: ['0', '0', '2560', '1440', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.png"]
                        },
                        {
                            id: 'stain',
                            type: 'image',
                            tag: 'img',
                            rect: ['682', '571', '928', '713', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"stain.png"]
                        },
                        {
                            id: 'blinder',
                            type: 'rect',
                            rect: ['719px', '784px', '873px', '304px', 'auto', 'auto'],
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['40']]
                        },
                        {
                            id: 'CAR2',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['-457px', '-437px', '557', '437', 'auto', 'auto']
                        },
                        {
                            id: 'outLight',
                            type: 'image',
                            tag: 'img',
                            rect: ['100', '239', '722', '1201', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"outLight.png"]
                        },
                        {
                            id: 'memo_body',
                            type: 'image',
                            tag: 'img',
                            rect: ['3040px', '1521px', '207', '238', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"memo_body.png"]
                        },
                        {
                            id: 'CAR',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['2471px', '1433px', '557', '437', 'auto', 'auto']
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
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid33",
                            "left",
                            500,
                            958,
                            "easeInQuad",
                            "${CAR2}",
                            '-457px',
                            '461px'
                        ],
                        [
                            "eid35",
                            "left",
                            1471,
                            545,
                            "easeOutQuad",
                            "${CAR2}",
                            '461px',
                            '1227px'
                        ],
                        [
                            "eid38",
                            "left",
                            2042,
                            1688,
                            "linear",
                            "${CAR2}",
                            '1227px',
                            '1996px'
                        ],
                        [
                            "eid39",
                            "left",
                            3729,
                            28,
                            "linear",
                            "${CAR2}",
                            '1996px',
                            '1793px'
                        ],
                        [
                            "eid41",
                            "top",
                            1471,
                            546,
                            "easeOutQuad",
                            "${blinder}",
                            '784px',
                            '1013px'
                        ],
                        [
                            "eid45",
                            "top",
                            2042,
                            567,
                            "linear",
                            "${blinder}",
                            '1013px',
                            '1151px'
                        ],
                        [
                            "eid54",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${blinder}",
                            'rgba(140,142,144,1.00)',
                            'rgba(140,142,144,1.00)'
                        ],
                        [
                            "eid30",
                            "left",
                            83,
                            3500,
                            "linear",
                            "${CAR}",
                            '262px',
                            '2471px'
                        ],
                        [
                            "eid29",
                            "top",
                            83,
                            3500,
                            "linear",
                            "${CAR}",
                            '-459px',
                            '1433px'
                        ],
                        [
                            "eid32",
                            "left",
                            83,
                            3500,
                            "linear",
                            "${memo_body}",
                            '831px',
                            '3040px'
                        ],
                        [
                            "eid43",
                            "width",
                            1471,
                            546,
                            "easeOutQuad",
                            "${blinder}",
                            '873px',
                            '162px'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${stain}",
                            '1',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            3796,
                            458,
                            "easeOutQuad",
                            "${stain}",
                            '1',
                            '0'
                        ],
                        [
                            "eid42",
                            "left",
                            1471,
                            546,
                            "easeOutQuad",
                            "${blinder}",
                            '719px',
                            '1346px'
                        ],
                        [
                            "eid44",
                            "left",
                            2042,
                            567,
                            "linear",
                            "${blinder}",
                            '1346px',
                            '1544px'
                        ],
                        [
                            "eid34",
                            "top",
                            500,
                            958,
                            "easeInQuad",
                            "${CAR2}",
                            '-437px',
                            '363px'
                        ],
                        [
                            "eid36",
                            "top",
                            1471,
                            545,
                            "easeOutQuad",
                            "${CAR2}",
                            '363px',
                            '963px'
                        ],
                        [
                            "eid37",
                            "top",
                            2042,
                            1688,
                            "linear",
                            "${CAR2}",
                            '963px',
                            '1599px'
                        ],
                        [
                            "eid40",
                            "top",
                            3729,
                            28,
                            "linear",
                            "${CAR2}",
                            '1599px',
                            '1469px'
                        ],
                        [
                            "eid31",
                            "top",
                            83,
                            3500,
                            "linear",
                            "${memo_body}",
                            '-371px',
                            '1521px'
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
                            rect: ['4px', '119px', '541', '318', 'auto', 'auto'],
                            tag: 'img',
                            id: 'car_shadow',
                            opacity: '0.3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png']
                        },
                        {
                            type: 'image',
                            id: 'car_body',
                            tag: 'img',
                            rect: ['0px', '0px', '557', '431', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '557px', '437px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake12_edgeActions.js");
})("EDGE-25892660");
