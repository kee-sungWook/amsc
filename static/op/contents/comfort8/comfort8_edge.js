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
                            id: 'landscapeBack',
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '207px', '2560', '695', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"landscapeBack.png"]
                        },
                        {
                            id: 'lamp_clip_left',
                            symbolName: 'lamp_clip',
                            type: 'rect',
                            rect: ['-232', '-173', '1488px', '998', 'auto', 'auto']
                        },
                        {
                            id: 'lamp_clip_right',
                            symbolName: 'lamp_clip',
                            type: 'rect',
                            rect: ['1304px', '-173', '1488px', '998', 'auto', 'auto'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'lane_clip_left',
                            symbolName: 'lane_clip',
                            type: 'rect',
                            rect: ['88', '373', '2384', '1688', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'lane_clip_right',
                            symbolName: 'lane_clip',
                            type: 'rect',
                            rect: ['87px', '373', '2384', '1688', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'ALLS',
                            symbolName: 'ALLS',
                            type: 'rect',
                            rect: ['-1398px', '-788px', '5357', '3015', 'auto', 'auto'],
                            transform: [[],[],[],['0.47788','0.47761']]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200', '200', 'auto', 'auto'],
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
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "scaleX",
                            2000,
                            2000,
                            "linear",
                            "${ALLS}",
                            '0.47788',
                            '1'
                        ],
                        [
                            "eid63",
                            "scaleX",
                            8000,
                            2000,
                            "linear",
                            "${ALLS}",
                            '1',
                            '0.47788'
                        ],
                        [
                            "eid34",
                            "left",
                            2000,
                            2000,
                            "linear",
                            "${ALLS}",
                            '-1398px',
                            '-1005px'
                        ],
                        [
                            "eid62",
                            "left",
                            8000,
                            2000,
                            "linear",
                            "${ALLS}",
                            '-1005px',
                            '-1398px'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            2000,
                            2000,
                            "linear",
                            "${ALLS}",
                            '0.47761',
                            '1'
                        ],
                        [
                            "eid61",
                            "scaleY",
                            8000,
                            2000,
                            "linear",
                            "${ALLS}",
                            '1',
                            '0.47761'
                        ],
                        [
                            "eid36",
                            "top",
                            2000,
                            2000,
                            "linear",
                            "${ALLS}",
                            '-788px',
                            '-595px'
                        ],
                        [
                            "eid59",
                            "top",
                            8000,
                            2000,
                            "linear",
                            "${ALLS}",
                            '-595px',
                            '-788px'
                        ]
                    ]
                }
            },
            "HUD": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '823', '354', 'auto', 'auto'],
                            id: 'HUD',
                            fill: ['rgba(0,0,0,0)', 'images/HUD.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'text',
                            rect: ['48px', '220px', '327px', '125', 'auto', 'auto'],
                            align: 'center',
                            id: 'speed_txt',
                            text: '124',
                            display: 'block',
                            font: ['Arial', [110, ''], 'rgb(255,255,255)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['48px', '220px', '327px', '125', 'auto', 'auto'],
                            align: 'center',
                            id: 'speed_txt2',
                            text: '<p style=\"margin:0px\">125​</p>',
                            display: 'none',
                            font: ['Arial', [110, ''], 'rgb(255,255,255)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['48px', '220px', '327px', '125', 'auto', 'auto'],
                            align: 'center',
                            id: 'speed_txt3',
                            text: '<p style=\"margin:0px\">126​</p>',
                            display: 'none',
                            font: ['Arial', [110, ''], 'rgb(255,255,255)', 'normal', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '823px', '354px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${speed_txt}",
                            'block',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            500,
                            0,
                            "linear",
                            "${speed_txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${speed_txt}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${speed_txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${speed_txt3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${speed_txt3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${speed_txt3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${speed_txt3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "linear",
                            "${speed_txt2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            500,
                            0,
                            "linear",
                            "${speed_txt2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${speed_txt2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${speed_txt2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${speed_txt2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "lane_clip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            tag: 'img',
                            id: 'lane',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png']
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            tag: 'img',
                            id: 'laneCopy',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png']
                        },
                        {
                            rect: ['938px', '-230px', '459', '525', 'auto', 'auto'],
                            tag: 'img',
                            id: 'laneCopy2',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png']
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            tag: 'img',
                            id: 'laneCopy3',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png']
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            tag: 'img',
                            id: 'laneCopy4',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png']
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            tag: 'img',
                            id: 'laneCopy5',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png']
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            tag: 'img',
                            id: 'laneCopy6',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png']
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            tag: 'img',
                            id: 'laneCopy7',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png']
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            tag: 'img',
                            id: 'laneCopy8',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane9.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2384px', '1577px']
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid180",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '885px',
                            '830px'
                        ],
                        [
                            "eid227",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '49px',
                            '250px'
                        ],
                        [
                            "eid264",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '0.36467',
                            '0.61217'
                        ],
                        [
                            "eid301",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '0.61217',
                            '1'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '0.0595',
                            '0.09242'
                        ],
                        [
                            "eid116",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '0.0595',
                            '0.09242'
                        ],
                        [
                            "eid199",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '0.14192',
                            '0.22459'
                        ],
                        [
                            "eid143",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '918px',
                            '878px'
                        ],
                        [
                            "eid291",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '0.36467',
                            '0.61217'
                        ],
                        [
                            "eid69",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '950px',
                            '934px'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '-260px',
                            '-248px'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '-230px',
                            '-188px'
                        ],
                        [
                            "eid42",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '-248px',
                            '-224px'
                        ],
                        [
                            "eid6",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '0.01',
                            '0.01817'
                        ],
                        [
                            "eid125",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '-200px',
                            '-141px'
                        ],
                        [
                            "eid162",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '0.09242',
                            '0.14192'
                        ],
                        [
                            "eid245",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '0.22459',
                            '0.36467'
                        ],
                        [
                            "eid254",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '0.22459',
                            '0.36467'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '958px',
                            '950px'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '0.01817',
                            '0.03475'
                        ],
                        [
                            "eid190",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '-72px',
                            '49px'
                        ],
                        [
                            "eid208",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '832px',
                            '750px'
                        ],
                        [
                            "eid171",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '0.09242',
                            '0.14192'
                        ],
                        [
                            "eid319",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '375px',
                            '0px'
                        ],
                        [
                            "eid328",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '0.61217',
                            '1'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '0.01',
                            '0.01817'
                        ],
                        [
                            "eid97",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '938px',
                            '910px'
                        ],
                        [
                            "eid153",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '-150px',
                            '-70px'
                        ],
                        [
                            "eid310",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '606px',
                            '1163px'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '0.01817',
                            '0.03475'
                        ],
                        [
                            "eid236",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '750px',
                            '614px'
                        ],
                        [
                            "eid273",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '250px',
                            '606px'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '0.03475',
                            '0.0595'
                        ],
                        [
                            "eid106",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '0.03475',
                            '0.0595'
                        ],
                        [
                            "eid217",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '0.14192',
                            '0.22459'
                        ],
                        [
                            "eid282",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '614px',
                            '375px'
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
                            tag: 'img',
                            id: 'roadlamp',
                            transform: [[], [], [], ['0.05', '0.05']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp3.png']
                        },
                        {
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            tag: 'img',
                            id: 'roadlampCopy',
                            transform: [[], [], [], ['0.05', '0.05']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp3.png']
                        },
                        {
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            tag: 'img',
                            id: 'roadlampCopy2',
                            transform: [[], [], [], ['0.05', '0.05']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp3.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1488px', '998px']
                        }
                    }
                },
                timeline: {
                    duration: 417,
                    autoPlay: true,
                    data: [
                        [
                            "eid368",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '12px',
                            '0px'
                        ],
                        [
                            "eid361",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '1197px',
                            '798px'
                        ],
                        [
                            "eid355",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '0.16875',
                            '0.44615'
                        ],
                        [
                            "eid374",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '0.44615',
                            '1'
                        ],
                        [
                            "eid364",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '18px',
                            '12px'
                        ],
                        [
                            "eid336",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '0.05',
                            '0.16875'
                        ],
                        [
                            "eid358",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '0.16875',
                            '0.44615'
                        ],
                        [
                            "eid338",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '0.05',
                            '0.16875'
                        ],
                        [
                            "eid371",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '0.44615',
                            '1'
                        ],
                        [
                            "eid344",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '1368px',
                            '1197px'
                        ],
                        [
                            "eid345",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '20px',
                            '18px'
                        ],
                        [
                            "eid377",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '798px',
                            '0px'
                        ]
                    ]
                }
            },
            "ALLS": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '5357px', '3015px', 'auto', 'auto'],
                            id: 'interrior',
                            fill: ['rgba(0,0,0,0)', 'images/interrior.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['1353px', '1053px', '823', '354', 'auto', 'auto'],
                            id: 'HUD2',
                            symbolName: 'HUD',
                            opacity: '1',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '5357px', '3015px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid52",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${HUD2}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid54",
                            "opacity",
                            1250,
                            1000,
                            "linear",
                            "${HUD2}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort8_edgeActions.js");
})("EDGE-30160863");
