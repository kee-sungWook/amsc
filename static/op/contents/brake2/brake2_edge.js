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
                            id: 'SCENE3',
                            display: 'none',
                            type: 'group',
                            rect: ['83', '332', '2407', '881', 'auto', 'auto'],
                            c: [
                            {
                                id: 'board',
                                type: 'image',
                                tag: 'img',
                                rect: ['0px', '0px', '2407', '881', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"board.png"]
                            },
                            {
                                id: 'autohold_txt2',
                                type: 'image',
                                tag: 'img',
                                rect: ['1012px', '336px', '335', '233', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"autohold_txt2.png"]
                            }]
                        },
                        {
                            id: 'SCENE2',
                            display: 'none',
                            type: 'group',
                            rect: ['460', '80', '2377', '2357', 'auto', 'auto'],
                            c: [
                            {
                                id: 'gear',
                                type: 'image',
                                tag: 'img',
                                rect: ['344px', '0px', '2033', '993', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gear.png"]
                            },
                            {
                                id: 'button',
                                type: 'image',
                                tag: 'img',
                                rect: ['477px', '539px', '159', '183', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"button.png"],
                                transform: [[],[],[],['0.95','0.95']]
                            },
                            {
                                id: 'autohold_txt1',
                                type: 'image',
                                tag: 'img',
                                rect: ['506px', '588px', '100', '69', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"autohold_txt1.png"],
                                transform: [[],[],[],['0.95','0.95']]
                            },
                            {
                                id: 'hand',
                                type: 'image',
                                tag: 'img',
                                rect: ['-176px', '868px', '856', '1729', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"hand.png"],
                                transform: [[],[],[],['1.1','1.1']]
                            }]
                        },
                        {
                            id: 'SCENE1',
                            display: 'block',
                            type: 'group',
                            rect: ['-1892px', '-870px', '0', '0', 'auto', 'auto'],
                            c: [
                            {
                                id: 'back',
                                type: 'image',
                                rect: ['1892px', '870px', '2560px', '1440px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
                            },
                            {
                                id: 'light_btm',
                                type: 'image',
                                tag: 'img',
                                rect: ['4122px', '1127px', '66', '83', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"light_btm.png"]
                            },
                            {
                                id: 'light_top',
                                type: 'image',
                                tag: 'img',
                                rect: ['4122px', '1033px', '64', '71', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"light_top.png"]
                            },
                            {
                                id: 'car_shadow',
                                type: 'image',
                                tag: 'img',
                                rect: ['847px', '650px', '1022', '591', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"car_shadow.png"]
                            },
                            {
                                id: 'CAR',
                                symbolName: 'CAR',
                                type: 'rect',
                                rect: ['842px', '426px', '1045', '799', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                id: 'PEDAL',
                                symbolName: 'PEDAL',
                                type: 'rect',
                                rect: ['2742px', '907px', '569', '498', 'auto', 'auto'],
                                opacity: '0'
                            }]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        },
                        {
                            id: 'RectangleCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
                            display: 'none',
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
                    duration: 9250,
                    autoPlay: true,
                    data: [
                        [
                            "eid305",
                            "display",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid189",
                            "left",
                            333,
                            2800,
                            "easeOutQuad",
                            "${CAR}",
                            '842px',
                            '2108px'
                        ],
                        [
                            "eid329",
                            "scaleY",
                            3500,
                            458,
                            "linear",
                            "${hand}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid333",
                            "scaleY",
                            4125,
                            125,
                            "linear",
                            "${hand}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid341",
                            "scaleY",
                            4292,
                            125,
                            "linear",
                            "${hand}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid331",
                            "opacity",
                            3500,
                            458,
                            "linear",
                            "${hand}",
                            '0',
                            '1'
                        ],
                        [
                            "eid300",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${light_btm}",
                            '0',
                            '0'
                        ],
                        [
                            "eid199",
                            "opacity",
                            533,
                            867,
                            "linear",
                            "${light_btm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid306",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid307",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid344",
                            "scaleX",
                            4125,
                            125,
                            "linear",
                            "${autohold_txt1}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid195",
                            "top",
                            333,
                            2800,
                            "easeOutQuad",
                            "${car_shadow}",
                            '650px',
                            '1538px'
                        ],
                        [
                            "eid347",
                            "scaleY",
                            4125,
                            125,
                            "linear",
                            "${button}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid302",
                            "opacity",
                            9000,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid346",
                            "scaleX",
                            4125,
                            125,
                            "linear",
                            "${button}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid317",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid352",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${SCENE2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid299",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${light_top}",
                            '1',
                            '1'
                        ],
                        [
                            "eid197",
                            "opacity",
                            533,
                            867,
                            "linear",
                            "${light_top}",
                            '1',
                            '0'
                        ],
                        [
                            "eid323",
                            "left",
                            3500,
                            458,
                            "linear",
                            "${hand}",
                            '-176px',
                            '0px'
                        ],
                        [
                            "eid334",
                            "left",
                            4125,
                            125,
                            "linear",
                            "${hand}",
                            '0px',
                            '16px'
                        ],
                        [
                            "eid342",
                            "left",
                            4292,
                            125,
                            "linear",
                            "${hand}",
                            '16px',
                            '0px'
                        ],
                        [
                            "eid304",
                            "opacity",
                            9000,
                            250,
                            "linear",
                            "${RectangleCopy}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid345",
                            "scaleY",
                            4125,
                            125,
                            "linear",
                            "${autohold_txt1}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid360",
                            "opacity",
                            4750,
                            167,
                            "linear",
                            "${autohold_txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid356",
                            "opacity",
                            4917,
                            167,
                            "linear",
                            "${autohold_txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid361",
                            "opacity",
                            5125,
                            167,
                            "linear",
                            "${autohold_txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid362",
                            "opacity",
                            5292,
                            167,
                            "linear",
                            "${autohold_txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid363",
                            "opacity",
                            5500,
                            167,
                            "linear",
                            "${autohold_txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid364",
                            "opacity",
                            5667,
                            167,
                            "linear",
                            "${autohold_txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid187",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${PEDAL}",
                            '0',
                            '0'
                        ],
                        [
                            "eid196",
                            "opacity",
                            533,
                            933,
                            "linear",
                            "${PEDAL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "left",
                            333,
                            2800,
                            "easeOutQuad",
                            "${car_shadow}",
                            '847px',
                            '2113px'
                        ],
                        [
                            "eid316",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid366",
                            "display",
                            6375,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid353",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${SCENE3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid365",
                            "display",
                            6375,
                            0,
                            "linear",
                            "${SCENE3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid191",
                            "top",
                            333,
                            2800,
                            "easeOutQuad",
                            "${CAR}",
                            '426px',
                            '1314px'
                        ],
                        [
                            "eid325",
                            "top",
                            3500,
                            458,
                            "linear",
                            "${hand}",
                            '868px',
                            '628px'
                        ],
                        [
                            "eid335",
                            "top",
                            4125,
                            125,
                            "linear",
                            "${hand}",
                            '628px',
                            '580px'
                        ],
                        [
                            "eid340",
                            "top",
                            4292,
                            125,
                            "linear",
                            "${hand}",
                            '580px',
                            '628px'
                        ],
                        [
                            "eid327",
                            "scaleX",
                            3500,
                            458,
                            "linear",
                            "${hand}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid332",
                            "scaleX",
                            4125,
                            125,
                            "linear",
                            "${hand}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid343",
                            "scaleX",
                            4292,
                            125,
                            "linear",
                            "${hand}",
                            '0.95',
                            '1'
                        ],
                            [ "eid218", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PEDAL}', [0] ] ],
                            [ "eid367", "trigger", 6375, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PEDAL}', ['brakeOff'] ] ]
                    ]
                }
            },
            "PEDAL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['7px', '7px', '555', '484', 'auto', 'auto'],
                            id: 'pedal_back',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['366px', '54px', '98', '239', 'auto', 'auto'],
                            id: 'pedal_axccel',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_axccel.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['132px', '103px', '158', '188', 'auto', 'auto'],
                            id: 'pedal_brake',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_brake.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'foot',
                            rect: ['386px', '113px', '466px', '356px', 'auto', 'auto'],
                            transform: [[], ['-6'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/foot.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '569', '498', 'auto', 'auto'],
                            id: 'pedalPic',
                            fill: ['rgba(0,0,0,0)', 'images/pedalPic.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '569px', '498px']
                        }
                    }
                },
                timeline: {
                    duration: 4900,
                    autoPlay: false,
                    labels: {
                        "brakeOff": 3000,
                        "gogo": 4133
                    },
                    data: [
                        [
                            "eid70",
                            "scaleY",
                            1333,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            3000,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '1'
                        ],
                        [
                            "eid69",
                            "scaleX",
                            1333,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '1'
                        ],
                        [
                            "eid128",
                            "scaleX",
                            3000,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '1'
                        ],
                        [
                            "eid64",
                            "left",
                            533,
                            234,
                            "linear",
                            "${foot}",
                            '386px',
                            '443px'
                        ],
                        [
                            "eid67",
                            "left",
                            833,
                            467,
                            "linear",
                            "${foot}",
                            '443px',
                            '206px'
                        ],
                        [
                            "eid125",
                            "left",
                            3600,
                            467,
                            "linear",
                            "${foot}",
                            '206px',
                            '443px'
                        ],
                        [
                            "eid124",
                            "left",
                            4133,
                            234,
                            "linear",
                            "${foot}",
                            '443px',
                            '386px'
                        ],
                        [
                            "eid106",
                            "rotateZ",
                            67,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid133",
                            "rotateZ",
                            4467,
                            433,
                            "linear",
                            "${pedal_axccel}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid103",
                            "rotateZ",
                            0,
                            500,
                            "easeInQuad",
                            "${foot}",
                            '-6deg',
                            '4deg'
                        ],
                        [
                            "eid68",
                            "rotateZ",
                            1333,
                            567,
                            "linear",
                            "${foot}",
                            '4deg',
                            '-6deg'
                        ],
                        [
                            "eid127",
                            "rotateZ",
                            3000,
                            567,
                            "linear",
                            "${foot}",
                            '-6deg',
                            '4deg'
                        ],
                        [
                            "eid126",
                            "rotateZ",
                            4400,
                            500,
                            "easeInQuad",
                            "${foot}",
                            '4deg',
                            '-6deg'
                        ],
                        [
                            "eid108",
                            "scaleY",
                            67,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid132",
                            "scaleY",
                            4467,
                            433,
                            "linear",
                            "${pedal_axccel}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid65",
                            "top",
                            533,
                            234,
                            "linear",
                            "${foot}",
                            '113px',
                            '126px'
                        ],
                        [
                            "eid66",
                            "top",
                            833,
                            467,
                            "linear",
                            "${foot}",
                            '126px',
                            '133px'
                        ],
                        [
                            "eid123",
                            "top",
                            3600,
                            467,
                            "linear",
                            "${foot}",
                            '133px',
                            '126px'
                        ],
                        [
                            "eid116",
                            "top",
                            4133,
                            234,
                            "linear",
                            "${foot}",
                            '126px',
                            '113px'
                        ],
                        [
                            "eid71",
                            "rotateZ",
                            1333,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid130",
                            "rotateZ",
                            3000,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid107",
                            "scaleX",
                            67,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            4467,
                            433,
                            "linear",
                            "${pedal_axccel}",
                            '1',
                            '0.95'
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
                            rect: ['0px', '0px', '1045', '799', 'auto', 'auto'],
                            id: 'car_color',
                            fill: ['rgba(0,0,0,0)', 'images/car_color.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1045px', '799px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake2_edgeActions.js");
})("EDGE-22344208");
