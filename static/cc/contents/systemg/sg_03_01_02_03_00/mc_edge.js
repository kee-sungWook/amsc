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
                            id: 'bPic',
                            symbolName: 'bPic',
                            type: 'rect',
                            rect: ['50', '90', '1472', '992', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'sPic1',
                            symbolName: 'sPic1',
                            type: 'rect',
                            rect: ['1630', '320', '350', '240', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'sPic2',
                            symbolName: 'sPic2',
                            type: 'rect',
                            rect: ['2000', '320', '350', '240', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'sPic3',
                            symbolName: 'sPic3',
                            type: 'rect',
                            rect: ['1630', '580', '350', '240', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'sPic4',
                            symbolName: 'sPic4',
                            type: 'rect',
                            rect: ['2000', '580', '350', '240', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'sPic5',
                            symbolName: 'sPic5',
                            type: 'rect',
                            rect: ['1630', '842', '350', '240', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'sPic6',
                            symbolName: 'sPic6',
                            type: 'rect',
                            rect: ['2000', '842', '350', '240', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'TitleText',
                            symbolName: 'TitleText',
                            type: 'rect',
                            rect: ['1602px', '116px', '756px', '92', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2400', '1230', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1066,
                    autoPlay: true,
                    data: [
                        [
                            "eid35",
                            "scaleX",
                            533,
                            333,
                            "easeOutQuad",
                            "${sPic4}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            433,
                            333,
                            "easeOutQuad",
                            "${sPic3}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            333,
                            333,
                            "easeOutQuad",
                            "${sPic2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            367,
                            "easeOutQuad",
                            "${bPic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            0,
                            367,
                            "easeOutQuad",
                            "${bPic}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid37",
                            "scaleY",
                            533,
                            333,
                            "easeOutQuad",
                            "${sPic4}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            633,
                            333,
                            "easeOutQuad",
                            "${sPic5}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            233,
                            400,
                            "easeOutQuad",
                            "${TitleText}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "scaleX",
                            0,
                            367,
                            "easeOutQuad",
                            "${bPic}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid49",
                            "scaleY",
                            233,
                            333,
                            "easeOutQuad",
                            "${sPic1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            733,
                            333,
                            "easeOutQuad",
                            "${sPic6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            233,
                            333,
                            "easeOutQuad",
                            "${sPic1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            533,
                            333,
                            "easeOutQuad",
                            "${sPic4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "scaleY",
                            333,
                            333,
                            "easeOutQuad",
                            "${sPic2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            633,
                            333,
                            "easeOutQuad",
                            "${sPic5}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            733,
                            333,
                            "easeOutQuad",
                            "${sPic6}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            433,
                            333,
                            "easeOutQuad",
                            "${sPic3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            233,
                            333,
                            "easeOutQuad",
                            "${sPic1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            633,
                            333,
                            "easeOutQuad",
                            "${sPic5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            433,
                            333,
                            "easeOutQuad",
                            "${sPic3}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            333,
                            333,
                            "easeOutQuad",
                            "${sPic2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "scaleY",
                            733,
                            333,
                            "easeOutQuad",
                            "${sPic6}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "sPic1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 348, 238, 'auto', 'auto'],
                            id: 'Small_nemo',
                            stroke: ['1px', 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: [11, 11, 326, 216, 'auto', 'auto'],
                            id: 'inner_nemo',
                            stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(228,228,228,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(205,205,205,1.00)', 'normal', 'none', '', '', 'nowrap'],
                            id: 'Text',
                            text: 'NO IMAGE',
                            type: 'text',
                            rect: [76, 97, 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.23', '0.23', 1], ['50%', '50%']],
                            id: 'pic1',
                            type: 'image',
                            rect: [-540, -355, '1430px', '950px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 350, 240]
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
            "sPic2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 348, 238, 'auto', 'auto'],
                            id: 'Small_nemo',
                            stroke: ['1px', 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: [11, 11, 326, 216, 'auto', 'auto'],
                            id: 'inner_nemo',
                            stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(228,228,228,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(205,205,205,1.00)', 'normal', 'none', '', '', 'nowrap'],
                            id: 'Text',
                            text: 'NO IMAGE',
                            type: 'text',
                            rect: [76, 97, 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.23', '0.23', 1], ['50%', '50%']],
                            id: 'pic2',
                            type: 'image',
                            rect: [-540, -355, '1430px', '950px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 350, 240]
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
            "sPic3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 348, 238, 'auto', 'auto'],
                            id: 'Small_nemo',
                            stroke: ['1px', 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: [11, 11, 326, 216, 'auto', 'auto'],
                            id: 'inner_nemo',
                            stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(228,228,228,1.00)']
                        },
                        {
                            rect: [76, 97, 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: 'NO IMAGE',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(205,205,205,1.00)', 'normal', 'none', '', '', 'nowrap'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 350, 240]
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
            "sPic4": {
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
                            id: 'Small_nemo',
                            stroke: ['1px', 'rgba(140,140,140,1.00)', 'solid'],
                            rect: [0, 0, 348, 238, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'inner_nemo',
                            stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                            rect: [11, 11, 326, 216, 'auto', 'auto'],
                            fill: ['rgba(228,228,228,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: 'NO IMAGE',
                            rect: [76, 97, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(205,205,205,1.00)', 'normal', 'none', '', '', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 350, 240]
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
            "sPic5": {
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
                            id: 'Small_nemo',
                            stroke: ['1px', 'rgba(140,140,140,1.00)', 'solid'],
                            rect: [0, 0, 348, 238, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'inner_nemo',
                            stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                            rect: [11, 11, 326, 216, 'auto', 'auto'],
                            fill: ['rgba(228,228,228,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: 'NO IMAGE',
                            rect: [76, 97, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(205,205,205,1.00)', 'normal', 'none', '', '', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 350, 240]
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
            "sPic6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 348, 238, 'auto', 'auto'],
                            id: 'Small_nemo',
                            stroke: ['1px', 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: [11, 11, 326, 216, 'auto', 'auto'],
                            id: 'inner_nemo',
                            stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(228,228,228,1.00)']
                        },
                        {
                            rect: [76, 97, 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: 'NO IMAGE',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(205,205,205,1.00)', 'normal', 'none', '', '', 'nowrap'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 350, 240]
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
            "bPic": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 1470, 990, 'auto', 'auto'],
                            id: 'Big_nemo',
                            stroke: ['1px', 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: [21, 21, '1430px', '950px', 'auto', 'auto'],
                            id: 'pic2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                        },
                        {
                            rect: [21, 21, '1430px', '950px', 'auto', 'auto'],
                            display: 'block',
                            id: 'pic1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pic1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1472, 992]
                        }
                    }
                },
                timeline: {
                    duration: 1033,
                    autoPlay: true,
                    labels: {
                        "pic1": 0,
                        "pic2": 533
                    },
                    data: [
                        [
                            "eid72",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${pic1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            533,
                            500,
                            "linear",
                            "${pic2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "display",
                            533,
                            0,
                            "linear",
                            "${pic1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "TitleText": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0', '800px', '127px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [75, 'px'], 'rgba(0,74,141,1)', '600', 'none', 'normal', 'break-word', ''],
                            id: 'Title_Text',
                            text: '<p style=\"margin:0px\">​ABS 브레이크 디스크</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '800px', '127px'],
                            overflow: 'hidden'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-26846989");
