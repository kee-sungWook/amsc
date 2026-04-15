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
            js+"jquery-1.7.1.min.js",
            js+"jquery-2.0.3.min.js"
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
                            id: 'smallPics',
                            symbolName: 'smallPics',
                            display: 'block',
                            type: 'rect',
                            rect: ['40', '55', '1819', '1100', 'auto', 'auto']
                        },
                        {
                            id: 'bigPics',
                            symbolName: 'bigPics',
                            display: 'none',
                            type: 'rect',
                            rect: ['38', '53', '1824', '1174', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1900', '1230', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1600,
                    autoPlay: false,
                    labels: {
                        "showBig": 1100
                    },
                    data: [
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${bigPics}",
                            'none',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            1100,
                            0,
                            "easeOutQuad",
                            "${bigPics}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1100,
                            500,
                            "easeOutQuad",
                            "${bigPics}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "display",
                            1100,
                            0,
                            "easeOutQuad",
                            "${smallPics}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "smallPic1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 896, 256, 'auto', 'auto'],
                            id: 'small_nemo',
                            stroke: ['2px', 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: [8, 8, 324, 244, 'auto', 'auto'],
                            id: 'picArea',
                            stroke: ['2px', 'rgba(140,140,140,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(178,178,178,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [42, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                            type: 'text',
                            id: 'TextArea',
                            text: '워터펌프 파손으로 인한<br>엔진 과열<br>',
                            align: 'center',
                            rect: [332, 75, 560, 175, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'pic1',
                            rect: [10, 10, '320px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic1.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 900, 260]
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
            "smallPic2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '896', '256', 'auto', 'auto'],
                            id: 'small_nemo',
                            stroke: [2, 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['8', '8', '324', '244', 'auto', 'auto'],
                            id: 'picArea',
                            stroke: [2, 'rgba(140,140,140,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(178,178,178,1.00)']
                        },
                        {
                            rect: ['332', '72px', '560', '175', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [42, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                            id: 'TextArea',
                            text: '<p style=\"margin: 0px;\">타이밍벨트 절손으로 인한 </p><p style=\"margin: 0px;\">엔진구동정지​</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            id: 'pic2',
                            type: 'image',
                            rect: ['10', '10', '320px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic2.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '900', '260']
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
            "smallPic3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 896, 256, 'auto', 'auto'],
                            id: 'small_nemo',
                            stroke: ['2px', 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: [8, 8, 324, 244, 'auto', 'auto'],
                            id: 'picArea',
                            stroke: ['2px', 'rgba(140,140,140,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(178,178,178,1.00)']
                        },
                        {
                            rect: [332, 75, 560, 175, 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [42, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                            id: 'TextArea',
                            text: '텐션 베어링 노화에 따른<br>벨트 장력 감소',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'pic3',
                            rect: [10, 10, '320px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic3.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 900, 260]
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
            "smallPic4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 896, 256, 'auto', 'auto'],
                            id: 'small_nemo',
                            stroke: ['2px', 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: [8, 8, 324, 244, 'auto', 'auto'],
                            id: 'picArea',
                            stroke: ['2px', 'rgba(140,140,140,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(178,178,178,1.00)']
                        },
                        {
                            rect: [332, 75, 560, 175, 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [42, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                            id: 'TextArea',
                            text: '타이밍 벨트 장력이완<br>으로 인한 구동문제<br>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'pic4',
                            rect: [10, 10, '320px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic4.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 900, 260]
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
            "smallPic5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 896, 256, 'auto', 'auto'],
                            id: 'small_nemo',
                            stroke: ['2px', 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: [8, 8, 324, 244, 'auto', 'auto'],
                            id: 'picArea',
                            stroke: ['2px', 'rgba(140,140,140,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(178,178,178,1.00)']
                        },
                        {
                            rect: [332, 75, 560, 175, 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [42, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                            id: 'TextArea',
                            text: '드라이브 벨트 구동',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'pic5',
                            rect: [10, 10, '320px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic5.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 900, 260]
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
            "smallPics": {
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
                            transform: [[], [], [], ['0.95', '0.95']],
                            id: 'smallPic1',
                            symbolName: 'smallPic1',
                            opacity: '0',
                            rect: ['0', '0', '900', '260', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.95', '0.95']],
                            id: 'smallPic2',
                            symbolName: 'smallPic2',
                            opacity: '0',
                            rect: ['919', '0', '900', '260', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.95', '0.95']],
                            id: 'smallPic3',
                            symbolName: 'smallPic3',
                            opacity: '0',
                            rect: ['0', '280', '900', '260', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.95', '0.95']],
                            id: 'smallPic4',
                            symbolName: 'smallPic4',
                            opacity: '0',
                            rect: ['919', '280', '900', '260', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.95', '0.95']],
                            id: 'smallPic5',
                            symbolName: 'smallPic5',
                            opacity: '0',
                            rect: ['0', '560', '900', '260', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1819', '1100']
                        }
                    }
                },
                timeline: {
                    duration: 900,
                    autoPlay: true,
                    data: [
                        [
                            "eid47",
                            "opacity",
                            300,
                            500,
                            "easeOutQuad",
                            "${smallPic4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "scaleX",
                            400,
                            500,
                            "easeOutQuad",
                            "${smallPic5}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid83",
                            "scaleY",
                            0,
                            500,
                            "easeOutQuad",
                            "${smallPic1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            100,
                            500,
                            "easeOutQuad",
                            "${smallPic2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid67",
                            "scaleY",
                            100,
                            500,
                            "easeOutQuad",
                            "${smallPic2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            400,
                            500,
                            "easeOutQuad",
                            "${smallPic5}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            200,
                            500,
                            "easeOutQuad",
                            "${smallPic3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "scaleX",
                            300,
                            500,
                            "easeOutQuad",
                            "${smallPic4}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid77",
                            "scaleX",
                            200,
                            500,
                            "easeOutQuad",
                            "${smallPic3}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid63",
                            "scaleY",
                            300,
                            500,
                            "easeOutQuad",
                            "${smallPic4}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid81",
                            "scaleX",
                            0,
                            500,
                            "easeOutQuad",
                            "${smallPic1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            400,
                            500,
                            "easeOutQuad",
                            "${smallPic5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "scaleY",
                            200,
                            500,
                            "easeOutQuad",
                            "${smallPic3}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${smallPic1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            100,
                            500,
                            "easeOutQuad",
                            "${smallPic2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "BUTTON_CLOSE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '75', '75', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/close_btn.png'],
                            id: 'close_btn',
                            opacity: 0.6,
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [2, 2, '70', '70', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/close_x.png'],
                            id: 'close_x',
                            opacity: 0.6,
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 75, 75]
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
            "bigPics": {
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
                            id: 'blinder',
                            stroke: [2, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', 1823, 79, 'auto', 'auto'],
                            fill: ['rgba(239,239,239,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Big_nemo',
                            stroke: ['2px', 'rgba(0,0,0,1.00)', 'solid'],
                            rect: [0, 79, 1820, 1091, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: [9, 88, 1806, 1077, 'auto', 'auto'],
                            opacity: '1',
                            id: 'movieArea',
                            stroke: [2, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'BUTTON_CLOSE',
                            symbolName: 'BUTTON_CLOSE',
                            rect: [1728, 99, 75, 75, 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: [0, 0, 1824, 80, 'auto', 'auto'],
                            id: 'textArea',
                            text: 'text area',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1824, 1174]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${BUTTON_CLOSE}",
                            '1728px',
                            '1728px'
                        ],
                        [
                            "eid41",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${BUTTON_CLOSE}",
                            '99px',
                            '99px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-13633348");
