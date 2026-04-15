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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['1315px', '46px', '853px', '92', 'auto', 'auto'],
                            opacity: '0',
                            text: "1. 제조회사 : MICHELIN",
                            align: "auto",
                            font: ['나눔고딕', [44, "px"], "rgb(0,73,141)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['1315px', '136px', '803px', '92', 'auto', 'auto'],
                            opacity: '0',
                            text: "2. 브랜드명 : Pilot",
                            align: "auto",
                            font: ['나눔고딕', [44, "px"], "rgb(0,73,141)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt3',
                            type: 'text',
                            rect: ['1315px', '230px', '1049px', '147', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">3. 패턴명 : Sport PS2 </p><p style=\"margin:0px\">&nbsp; &nbsp;(브랜드명과 패턴명이 제품의 상품명으로 표시)​</p>",
                            align: "auto",
                            font: ['나눔고딕', [44, "px"], "rgb(0,73,141)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "55px", "", ""]
                        },
                        {
                            id: 'txt4',
                            type: 'text',
                            rect: ['1315px', '372px', '1058px', '422', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">4. 규격 : 225/45 ZR 18 95W </p><p style=\"margin:0px\">&nbsp; &nbsp;- 225 : 타이어단면폭(mm) </p><p style=\"margin:0px\">&nbsp; &nbsp;- 45 : 편평비 = 단면높이(H) ÷ 단면폭(S) X 100 </p><p style=\"margin:0px\">&nbsp; &nbsp;- R : 래디알(Radial)타이어 </p><p style=\"margin:0px\">&nbsp; &nbsp;- 18 : 휠 직경(inches) </p><p style=\"margin:0px\">&nbsp; &nbsp;- 95 : 하중지수(최대하중 690Kg) </p><p style=\"margin:0px\">&nbsp; &nbsp;- W : 속도지수(최고속도 270Km/h)​</p>",
                            align: "auto",
                            font: ['나눔고딕', [44, "px"], "rgb(0,73,141)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "55px", "", ""]
                        },
                        {
                            id: 'txt5',
                            type: 'text',
                            rect: ['1315px', '796px', '729px', '92', 'auto', 'auto'],
                            opacity: '0',
                            text: "5. 구조 : Radial tubeless",
                            align: "auto",
                            font: ['나눔고딕', [44, "px"], "rgb(0,73,141)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "54px", "", ""]
                        },
                        {
                            id: 'txt6',
                            type: 'text',
                            rect: ['1315px', '891px', '1175px', '321px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">6. DOT(제조일자) : DOT EDMT NK2X 5010 </p><p style=\"margin:0px\">&nbsp; &nbsp;- DOT : Department of Transportion(미국운수 사업국) </p><p style=\"margin:0px\">&nbsp; &nbsp;- ED : 공장코드 </p><p style=\"margin:0px\">&nbsp; &nbsp;- NK2X : 타이어정보 </p><p style=\"margin:0px\">&nbsp; &nbsp;- 5010 : 제조일자(2010년 50번째주 생산)​</p>",
                            align: "auto",
                            font: ['나눔고딕', [44, "px"], "rgb(0,73,141)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["0px", "", "55px", "", ""]
                        },
                        {
                            id: 'pic',
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '125px', '1242', '1028', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pic.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'oval6',
                            symbolName: 'oval6',
                            type: 'rect',
                            rect: ['56px', '400px', '85', '85', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'oval5',
                            symbolName: 'oval5',
                            type: 'rect',
                            rect: ['1103px', '397px', '85', '85', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'oval4',
                            symbolName: 'oval4',
                            type: 'rect',
                            rect: ['1147px', '524px', '85', '85', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'oval3',
                            symbolName: 'oval3',
                            type: 'rect',
                            rect: ['10px', '581px', '85', '85', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'oval2',
                            symbolName: 'oval2',
                            type: 'rect',
                            rect: ['34px', '729px', '85', '85', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'oval1',
                            symbolName: 'oval1',
                            type: 'rect',
                            rect: ['237px', '165px', '85', '85', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2400px', '1230px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1375,
                    autoPlay: true,
                    data: [
                        [
                            "eid64",
                            "left",
                            1042,
                            250,
                            "easeOutQuad",
                            "${txt5}",
                            '1315px',
                            '1275px'
                        ],
                        [
                            "eid44",
                            "opacity",
                            709,
                            250,
                            "linear",
                            "${oval5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            292,
                            250,
                            "linear",
                            "${oval6}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            375,
                            250,
                            "linear",
                            "${oval4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "left",
                            958,
                            250,
                            "easeOutQuad",
                            "${txt4}",
                            '1315px',
                            '1275px'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            709,
                            250,
                            "linear",
                            "${oval5}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            875,
                            250,
                            "easeOutQuad",
                            "${txt3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            0,
                            292,
                            "easeOutQuad",
                            "${pic}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            958,
                            250,
                            "easeOutQuad",
                            "${txt4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            625,
                            250,
                            "linear",
                            "${oval3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            375,
                            250,
                            "linear",
                            "${oval4}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleY",
                            459,
                            250,
                            "linear",
                            "${oval1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            1042,
                            250,
                            "easeOutQuad",
                            "${txt5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            792,
                            250,
                            "easeOutQuad",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            292,
                            250,
                            "linear",
                            "${oval6}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            292,
                            250,
                            "linear",
                            "${oval6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            708,
                            250,
                            "easeOutQuad",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleX",
                            375,
                            250,
                            "linear",
                            "${oval4}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid56",
                            "left",
                            792,
                            250,
                            "easeOutQuad",
                            "${txt2}",
                            '1315px',
                            '1275px'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            625,
                            250,
                            "linear",
                            "${oval3}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            709,
                            250,
                            "linear",
                            "${oval5}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            459,
                            250,
                            "linear",
                            "${oval1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            0,
                            292,
                            "easeOutQuad",
                            "${pic}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid60",
                            "left",
                            875,
                            250,
                            "easeOutQuad",
                            "${txt3}",
                            '1315px',
                            '1275px'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            625,
                            250,
                            "linear",
                            "${oval3}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid50",
                            "opacity",
                            542,
                            250,
                            "linear",
                            "${oval2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "left",
                            1125,
                            250,
                            "easeOutQuad",
                            "${txt6}",
                            '1315px',
                            '1275px'
                        ],
                        [
                            "eid18",
                            "opacity",
                            0,
                            292,
                            "easeOutQuad",
                            "${pic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            542,
                            250,
                            "linear",
                            "${oval2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleX",
                            542,
                            250,
                            "linear",
                            "${oval2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            1125,
                            250,
                            "easeOutQuad",
                            "${txt6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleX",
                            459,
                            250,
                            "linear",
                            "${oval1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid66",
                            "left",
                            708,
                            250,
                            "easeOutQuad",
                            "${txt1}",
                            '1315px',
                            '1275px'
                        ]
                    ]
                }
            },
            "oval1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '85px', '85px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(1,74,142,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['24px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">​1</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [65, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '85px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "oval6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '85px', '85px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(1,74,142,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['25px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">​6</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [65, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '85px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "oval3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '85px', '85px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(1,74,142,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['25px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy4',
                            text: '<p style=\"margin: 0px;\">​3</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [65, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '85px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "oval2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '85px', '85px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(1,74,142,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['25px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy5',
                            text: '<p style=\"margin: 0px;\">​2</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [65, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '85px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "oval5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '85px', '85px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(1,74,142,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['25px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​5</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [65, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '85px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "oval4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '85px', '85px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(1,74,142,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['25px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​4</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [65, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '85px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-73065678");
