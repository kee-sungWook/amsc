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
                            id: 'fog',
                            type: 'image',
                            tag: 'img',
                            rect: ['173', '116', '2228', '626', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fog.png"]
                        },
                        {
                            id: 'pics',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '0', '2560', '1440', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pics.png"]
                        },
                        {
                            id: 'BLOWER_WIND',
                            symbolName: 'BLOWER_WIND',
                            type: 'rect',
                            rect: ['1141', '268', '283', '450', 'auto', 'auto']
                        },
                        {
                            id: 'BLOWER_WIND2',
                            symbolName: 'BLOWER_WIND',
                            type: 'rect',
                            rect: ['497px', '292px', '283', '450', 'auto', 'auto'],
                            transform: [[],['-20']]
                        },
                        {
                            id: 'BLOWER_WIND3',
                            symbolName: 'BLOWER_WIND',
                            type: 'rect',
                            rect: ['1925px', '311px', '283', '450', 'auto', 'auto'],
                            transform: [[],['20']]
                        },
                        {
                            id: 'steering',
                            type: 'image',
                            tag: 'img',
                            rect: ['323', '665', '632', '636', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"steering.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['38', '38', '204', '204', 'auto', 'auto'],
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
                    duration: 3250,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${fog}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            2417,
                            333,
                            "linear",
                            "${fog}",
                            '1',
                            '0'
                        ],
                            [ "eid31", "trigger", 1249.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BLOWER_WIND}', [0] ] ],
                            [ "eid32", "trigger", 1333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BLOWER_WIND2}', [0] ] ],
                            [ "eid33", "trigger", 1416.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BLOWER_WIND3}', [0] ] ],
                            [ "eid34", "trigger", 1916.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BLOWER_WIND}', [0] ] ],
                            [ "eid35", "trigger", 1999.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BLOWER_WIND2}', [0] ] ],
                            [ "eid36", "trigger", 2083.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BLOWER_WIND3}', [0] ] ]
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
                            type: 'image',
                            tag: 'img',
                            id: 'lane',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'laneCopy',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'laneCopy2',
                            rect: ['938px', '-230px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'laneCopy3',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'laneCopy4',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'laneCopy5',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'laneCopy6',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'laneCopy7',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'laneCopy8',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
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
                            "eid282",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '614px',
                            '375px'
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
                            "eid171",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '0.09242',
                            '0.14192'
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
                            type: 'image',
                            tag: 'img',
                            id: 'roadlamp',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'roadlampCopy',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'roadlampCopy2',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png']
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
                            "eid377",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '798px',
                            '0px'
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
                            "eid338",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '0.05',
                            '0.16875'
                        ]
                    ]
                }
            },
            "BLOWER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '424px', '26', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blower_src.png'],
                            id: 'blower_src',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '26px', '450px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid15",
                            "height",
                            0,
                            250,
                            "linear",
                            "${blower_src}",
                            '26px',
                            '450px'
                        ],
                        [
                            "eid18",
                            "height",
                            250,
                            250,
                            "linear",
                            "${blower_src}",
                            '450px',
                            '21px'
                        ],
                        [
                            "eid17",
                            "top",
                            0,
                            250,
                            "linear",
                            "${blower_src}",
                            '424px',
                            '0px'
                        ],
                        [
                            "eid20",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${blower_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${blower_src}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "BLOWER_WIND": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'BLOWER',
                            symbolName: 'BLOWER',
                            opacity: '0.5',
                            rect: ['129px', '0px', '26', '450px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-15']],
                            id: 'BLOWER2',
                            symbolName: 'BLOWER',
                            opacity: '0.5',
                            rect: ['58px', '0px', '26', '450px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['15']],
                            id: 'BLOWER3',
                            symbolName: 'BLOWER',
                            opacity: '0.5',
                            rect: ['199px', '0px', '26', '450px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '283px', '450px']
                        }
                    }
                },
                timeline: {
                    duration: 666.66666666667,
                    autoPlay: false,
                    data: [
                        [
                            "eid21",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${BLOWER2}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid22",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${BLOWER}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${BLOWER3}",
                            '0.5',
                            '0.5'
                        ],
                            [ "eid24", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BLOWER}', [0] ] ],
                            [ "eid25", "trigger", 83.333333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BLOWER2}', [0] ] ],
                            [ "eid26", "trigger", 166.66666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BLOWER3}', [0] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort10_edgeActions.js");
})("EDGE-41880290");
