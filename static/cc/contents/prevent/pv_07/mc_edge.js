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
                            id: 'btn3',
                            symbolName: 'btn2',
                            type: 'rect',
                            rect: ['1294px', '937px', '842', '106', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'btn2',
                            symbolName: 'btn',
                            type: 'rect',
                            rect: ['1294px', '789px', '842', '106', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'btn1',
                            symbolName: 'btn1',
                            type: 'rect',
                            rect: ['1294', '640px', '842', '106', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt_cont',
                            type: 'text',
                            rect: ['1287px', '238px', '1083px', '434px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​엔진사이즈를 더 키우지 않고,  적은용량의 엔진으로 </p><p style=\"margin: 0px;\">원하는 출력을 얻기위해 연소실에 필요한 흡입공기의 </p><p style=\"margin: 0px;\">과급량을 조절 해 주는 엔진의 중요한 장치.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">이 터보의 구동은, 엔진연소실의 배출가스가 터보의 </p><p style=\"margin: 0px;\">터빈 휠을 통과하며 이루어지는 작동으로 흡입공기가 </p><p style=\"margin: 0px;\">공급되는 구조의 장치입니다.</p><p style=\"margin: 0px;\">​</p>",
                            align: "auto",
                            font: ['나눔고딕', [45, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "60px", "", ""],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'txt_title',
                            type: 'text',
                            rect: ['1280px', '64px', '1135px', '140px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">터보란 무엇인가? (Turbo charger)​</p>",
                            align: "auto",
                            font: ['나눔고딕', [70, "px"], "rgba(1,169,228,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["-4px", "", "60px", "", ""]
                        },
                        {
                            id: 'banner',
                            type: 'image',
                            tag: 'img',
                            rect: ['62px', '970px', '1024', '200', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"banner.png"]
                        },
                        {
                            id: 'pic',
                            type: 'image',
                            tag: 'img',
                            rect: ['208px', '73px', '692', '879', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pic.png"],
                            transform: [[],[],[],['0.8','0.8']]
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
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "scaleY",
                            750,
                            250,
                            "easeOutQuad",
                            "${txt_cont}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1125,
                            250,
                            "easeOutQuad",
                            "${btn2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            375,
                            "easeOutQuad",
                            "${banner}",
                            '970px',
                            '900px'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            375,
                            375,
                            "easeOutQuad",
                            "${pic}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            750,
                            250,
                            "easeOutQuad",
                            "${txt_cont}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${btn3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            375,
                            375,
                            "easeOutQuad",
                            "${pic}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            375,
                            375,
                            "easeOutQuad",
                            "${pic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1000,
                            250,
                            "easeOutQuad",
                            "${btn1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            625,
                            250,
                            "easeOutQuad",
                            "${txt_title}",
                            '64px',
                            '94px'
                        ],
                        [
                            "eid25",
                            "top",
                            1000,
                            250,
                            "easeOutQuad",
                            "${btn1}",
                            '640px',
                            '690px'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            750,
                            250,
                            "easeOutQuad",
                            "${txt_cont}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid21",
                            "top",
                            375,
                            375,
                            "easeOutQuad",
                            "${pic}",
                            '73px',
                            '17px'
                        ],
                        [
                            "eid29",
                            "top",
                            1250,
                            250,
                            "easeOutQuad",
                            "${btn3}",
                            '937px',
                            '987px'
                        ],
                        [
                            "eid45",
                            "opacity",
                            625,
                            250,
                            "easeOutQuad",
                            "${txt_title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "top",
                            1125,
                            250,
                            "easeOutQuad",
                            "${btn2}",
                            '789px',
                            '839px'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            375,
                            "easeOutQuad",
                            "${banner}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "btn1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '838px', '102px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [2, 'rgba(0,74,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,73,141,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'con-1',
                            tag: 'img',
                            rect: ['30px', '34px', '40', '40', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/con-1.png']
                        },
                        {
                            font: ['나눔고딕', [50, ''], 'rgba(0,73,141,1)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'txt_menu1',
                            text: '<p style=\"margin: 0px;\">터보장치와 엔진내부 구성도​</p>',
                            align: 'auto',
                            rect: ['115px', '26px', '717px', '56', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '842px', '106px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "over": 250
                    },
                    data: [
                        [
                            "eid50",
                            "color",
                            0,
                            0,
                            "easeOutQuad",
                            "${txt_menu1}",
                            'rgba(0,73,141,1)',
                            'rgba(0,73,141,1)'
                        ],
                        [
                            "eid51",
                            "color",
                            250,
                            0,
                            "easeOutQuad",
                            "${txt_menu1}",
                            'rgba(0,73,141,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid47",
                            "background-color",
                            0,
                            0,
                            "easeOutQuad",
                            "${RoundRect}",
                            'rgba(255,255,255,0)',
                            'rgba(255,255,255,0)'
                        ],
                        [
                            "eid48",
                            "background-color",
                            250,
                            0,
                            "easeOutQuad",
                            "${RoundRect}",
                            'rgba(255,255,255,0)',
                            'rgba(0,73,141,1.00)'
                        ]
                    ]
                }
            },
            "btn2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '838px', '102px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy',
                            stroke: [2, 'rgba(0,74,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,73,141,1.00)']
                        },
                        {
                            rect: ['30px', '34px', '40', '40', 'auto', 'auto'],
                            id: 'con-1Copy',
                            fill: ['rgba(0,0,0,0)', 'images/con-1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['115px', '26px', '703px', '56', 'auto', 'auto'],
                            font: ['나눔고딕', [50, ''], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'txt_menu3',
                            text: '<p style=\"margin:0px\">관리를 안하면 어떻게 되는가​ ?</p>',
                            align: 'auto',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '842px', '106px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "over": 250
                    },
                    data: [
                        [
                            "eid59",
                            "background-color",
                            0,
                            0,
                            "easeOutQuad",
                            "${RoundRectCopy}",
                            'rgba(255,255,255,0)',
                            'rgba(255,255,255,0)'
                        ],
                        [
                            "eid62",
                            "background-color",
                            250,
                            0,
                            "easeOutQuad",
                            "${RoundRectCopy}",
                            'rgba(255,255,255,0)',
                            'rgba(0,73,141,1.00)'
                        ],
                        [
                            "eid60",
                            "color",
                            0,
                            0,
                            "easeOutQuad",
                            "${txt_menu3}",
                            'rgba(0,73,141,1)',
                            'rgba(0,73,141,1)'
                        ],
                        [
                            "eid61",
                            "color",
                            250,
                            0,
                            "easeOutQuad",
                            "${txt_menu3}",
                            'rgba(0,73,141,1)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            },
            "btn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '838px', '102px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [2, 'rgba(0,74,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,73,141,1.00)']
                        },
                        {
                            rect: ['30px', '34px', '40', '40', 'auto', 'auto'],
                            id: 'con-1',
                            fill: ['rgba(0,0,0,0)', 'images/con-1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['115px', '26px', '703px', '56', 'auto', 'auto'],
                            font: ['나눔고딕', [50, ''], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'txt_menu1',
                            text: '<p style=\"margin: 0px;\">터보 관리는 왜 해야 하는가​ ?</p>',
                            align: 'auto',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '842px', '106px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "over": 250
                    },
                    data: [
                        [
                            "eid52",
                            "background-color",
                            0,
                            0,
                            "easeOutQuad",
                            "${RoundRect}",
                            'rgba(255,255,255,0)',
                            'rgba(255,255,255,0)'
                        ],
                        [
                            "eid58",
                            "background-color",
                            250,
                            0,
                            "easeOutQuad",
                            "${RoundRect}",
                            'rgba(255,255,255,0)',
                            'rgba(0,73,141,1.00)'
                        ],
                        [
                            "eid53",
                            "color",
                            0,
                            0,
                            "easeOutQuad",
                            "${txt_menu1}",
                            'rgba(0,73,141,1)',
                            'rgba(0,73,141,1)'
                        ],
                        [
                            "eid57",
                            "color",
                            250,
                            0,
                            "easeOutQuad",
                            "${txt_menu1}",
                            'rgba(0,73,141,1)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-4041048145");
