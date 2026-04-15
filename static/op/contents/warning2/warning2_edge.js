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
                            id: 'dashBoard',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '507', '2560', '933', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dashBoard.png"]
                        },
                        {
                            id: 'GAGE_BAR2',
                            symbolName: 'GAGE_BAR2',
                            type: 'rect',
                            rect: ['1427px', '775px', '559px', '300px', 'auto', 'auto']
                        },
                        {
                            id: 'GAGE_BAR1',
                            symbolName: 'GAGE_BAR1',
                            type: 'rect',
                            rect: ['284px', '878px', '303px', '200px', 'auto', 'auto']
                        },
                        {
                            id: 'REST',
                            symbolName: 'REST',
                            display: 'none',
                            type: 'rect',
                            rect: ['899', '666', '683', '527', 'auto', 'auto']
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['38', '38', '204', '204', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        },
                        {
                            id: 'CONDITION',
                            symbolName: 'CONDITION',
                            display: 'block',
                            type: 'rect',
                            rect: ['961', '92', '576', '1054', 'auto', 'auto']
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
                    duration: 12250,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "height",
                            0,
                            0,
                            "linear",
                            "${GAGE_BAR2}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid62",
                            "height",
                            0,
                            0,
                            "linear",
                            "${GAGE_BAR1}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid57",
                            "width",
                            0,
                            0,
                            "linear",
                            "${GAGE_BAR2}",
                            '559px',
                            '559px'
                        ],
                        [
                            "eid63",
                            "width",
                            0,
                            0,
                            "linear",
                            "${GAGE_BAR1}",
                            '303px',
                            '303px'
                        ],
                        [
                            "eid44",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GAGE_BAR2}",
                            '1427px',
                            '1427px'
                        ],
                        [
                            "eid45",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GAGE_BAR2}",
                            '775px',
                            '775px'
                        ],
                        [
                            "eid66",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GAGE_BAR1}",
                            '878px',
                            '878px'
                        ],
                        [
                            "eid161",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${CONDITION}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GAGE_BAR1}",
                            '284px',
                            '284px'
                        ],
                        [
                            "eid181",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid182",
                            "opacity",
                            12000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid179",
                            "opacity",
                            12000,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid83",
                            "display",
                            0,
                            0,
                            "linear",
                            "${REST}",
                            'none',
                            'none'
                        ],
                        [
                            "eid163",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${REST}",
                            'none',
                            'block'
                        ],
                            [ "eid164", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CONDITION}', [0] ] ],
                            [ "eid165", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${REST}', [0] ] ],
                            [ "eid166", "trigger", 8500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${REST}', [0] ] ]
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
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'lane',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy2',
                            rect: ['938px', '-230px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy3',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy4',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy5',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy6',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy7',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy8',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img'
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
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png'],
                            id: 'roadlamp',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png'],
                            id: 'roadlampCopy',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png'],
                            id: 'roadlampCopy2',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05', '0.05']],
                            tag: 'img'
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
            "GAGE_BAR1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['35px', '23px', '262', '173', 'auto', 'auto'],
                            id: 'gageBar1',
                            fill: ['rgba(0,0,0,0)', 'images/gageBar1.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '303px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid68",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${gageBar1}",
                            '0deg',
                            '4deg'
                        ],
                        [
                            "eid71",
                            "rotateZ",
                            3000,
                            2000,
                            "linear",
                            "${gageBar1}",
                            '4deg',
                            '0deg'
                        ],
                        [
                            "eid58",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar1}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid284",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar1}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid285",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar1}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid286",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${gageBar1}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid287",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar1}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid288",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar1}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "GAGE_BAR2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['235px', '131px', '271', '157', 'auto', 'auto'],
                            transform: [[], ['23']],
                            id: 'gageBar2',
                            fill: ['rgba(0,0,0,0)', 'images/gageBar2.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '518px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid289",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid290",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid292",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${gageBar2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid293",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid294",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${gageBar2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid47",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${gageBar2}",
                            '20deg',
                            '23deg'
                        ],
                        [
                            "eid50",
                            "rotateZ",
                            3000,
                            2000,
                            "linear",
                            "${gageBar2}",
                            '23deg',
                            '20deg'
                        ]
                    ]
                }
            },
            "REST": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['252px', '231px', '239', '296', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/icon_rest.png'],
                            id: 'icon_rest',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '683', '64', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt_rest.png'],
                            id: 'txt_rest',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '683px', '527px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    data: [
                        [
                            "eid142",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${icon_rest}",
                            '1',
                            '0'
                        ],
                        [
                            "eid147",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${icon_rest}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            583,
                            250,
                            "linear",
                            "${icon_rest}",
                            '1',
                            '0'
                        ],
                        [
                            "eid151",
                            "opacity",
                            833,
                            250,
                            "linear",
                            "${icon_rest}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            1167,
                            250,
                            "linear",
                            "${icon_rest}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            1417,
                            250,
                            "linear",
                            "${icon_rest}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${icon_rest}",
                            '1',
                            '0'
                        ],
                        [
                            "eid160",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${icon_rest}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${txt_rest}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${txt_rest}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            583,
                            250,
                            "linear",
                            "${txt_rest}",
                            '1',
                            '0'
                        ],
                        [
                            "eid149",
                            "opacity",
                            833,
                            250,
                            "linear",
                            "${txt_rest}",
                            '0',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            1167,
                            250,
                            "linear",
                            "${txt_rest}",
                            '1',
                            '0'
                        ],
                        [
                            "eid154",
                            "opacity",
                            1417,
                            250,
                            "linear",
                            "${txt_rest}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${txt_rest}",
                            '1',
                            '0'
                        ],
                        [
                            "eid158",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${txt_rest}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CONDITION": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '802px', '576', '252', 'auto', 'auto'],
                            id: 'icon_condition',
                            fill: ['rgba(0,0,0,0)', 'images/icon_condition.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['115px', '857px', '77', '73', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/condition_bar5.png'],
                            id: 'condition_bar5',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['205px', '843px', '77', '87', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/condition_bar4.png'],
                            id: 'condition_bar4',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['294px', '830px', '77', '100', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/condition_bar3.png'],
                            id: 'condition_bar3',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['384px', '816px', '77', '114', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/condition_bar2.png'],
                            id: 'condition_bar2',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['473px', '802px', '80', '128', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/condition_bar1.png'],
                            id: 'condition_bar1',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['76px', '574px', '402', '64', 'auto', 'auto'],
                            id: 'txt_condition',
                            fill: ['rgba(0,0,0,0)', 'images/txt_condition.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['89px', '0px', '452px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'TXT1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/TXT1.png', '0px', '0px']
                        },
                        {
                            rect: ['89px', '0px', '459px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'TXT2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/TXT2.png', '0px', '0px']
                        },
                        {
                            rect: ['89px', '0px', '458px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'TXT3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/TXT3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '576px', '1054px']
                        }
                    }
                },
                timeline: {
                    duration: 7416.6666666667,
                    autoPlay: false,
                    data: [
                        [
                            "eid123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TXT2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${TXT2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${TXT2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TXT1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            500,
                            0,
                            "linear",
                            "${TXT1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${TXT1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid127",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${condition_bar2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "opacity",
                            5500,
                            250,
                            "linear",
                            "${TXT3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            5750,
                            250,
                            "linear",
                            "${TXT3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid109",
                            "opacity",
                            6083,
                            250,
                            "linear",
                            "${TXT3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            6333,
                            250,
                            "linear",
                            "${TXT3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "opacity",
                            6667,
                            250,
                            "linear",
                            "${TXT3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            6917,
                            250,
                            "linear",
                            "${TXT3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid140",
                            "opacity",
                            7167,
                            250,
                            "linear",
                            "${TXT3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${TXT1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${TXT1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "opacity",
                            1083,
                            250,
                            "linear",
                            "${TXT1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "opacity",
                            1333,
                            250,
                            "linear",
                            "${TXT1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid120",
                            "opacity",
                            1667,
                            250,
                            "linear",
                            "${TXT1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            1917,
                            250,
                            "linear",
                            "${TXT1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid135",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${TXT1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            4500,
                            500,
                            "linear",
                            "${condition_bar4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid101",
                            "opacity",
                            3000,
                            250,
                            "linear",
                            "${TXT2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            3250,
                            250,
                            "linear",
                            "${TXT2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid111",
                            "opacity",
                            3583,
                            250,
                            "linear",
                            "${TXT2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid112",
                            "opacity",
                            3833,
                            250,
                            "linear",
                            "${TXT2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid118",
                            "opacity",
                            4167,
                            250,
                            "linear",
                            "${TXT2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            4417,
                            250,
                            "linear",
                            "${TXT2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "opacity",
                            4750,
                            250,
                            "linear",
                            "${TXT2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${condition_bar3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid130",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${condition_bar1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid128",
                            "opacity",
                            5500,
                            500,
                            "linear",
                            "${condition_bar5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TXT3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${TXT3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("warning2_edgeActions.js");
})("EDGE-41880290");
