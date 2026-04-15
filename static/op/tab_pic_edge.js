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
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['292px', '1118px', '1116px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 48px;\">알기 쉬운 옵션 애니메이션 입니다.</span></p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(139,142,144,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'option',
                            type: 'image',
                            rect: ['763px', '948px', '169px', '34px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"option.png",'0px','0px']
                        },
                        {
                            id: 'line',
                            type: 'image',
                            rect: ['506px', '370px', '686px', '550px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"line.png",'0px','0px']
                        },
                        {
                            id: 'ico_01',
                            type: 'image',
                            rect: ['549px', '409px', '173px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ico_01.png",'0px','0px'],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'ico_02',
                            type: 'image',
                            rect: ['763px', '409px', '174px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ico_02.png",'0px','0px'],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'ico_03',
                            type: 'image',
                            rect: ['973px', '409px', '173px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ico_03.png",'0px','0px'],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'ico_04',
                            type: 'image',
                            rect: ['549px', '623px', '173px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ico_04.png",'0px','0px'],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'ico_05',
                            type: 'image',
                            rect: ['763px', '623px', '174px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ico_05.png",'0px','0px'],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'ico_06',
                            type: 'image',
                            rect: ['973px', '623px', '173px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ico_06.png",'0px','0px'],
                            transform: [[],[],[],['0.9','0.9']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1665px', '1370px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2792,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "opacity",
                            0,
                            417,
                            "easeInQuad",
                            "${ico_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "opacity",
                            333,
                            417,
                            "easeInQuad",
                            "${ico_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            667,
                            417,
                            "easeInQuad",
                            "${ico_05}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid28",
                            "scaleY",
                            500,
                            417,
                            "easeInQuad",
                            "${ico_04}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            833,
                            417,
                            "easeInQuad",
                            "${ico_06}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            833,
                            417,
                            "easeInQuad",
                            "${ico_06}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            833,
                            417,
                            "easeInQuad",
                            "${ico_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            2125,
                            667,
                            "easeInQuint",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            167,
                            417,
                            "easeInQuad",
                            "${ico_02}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            167,
                            417,
                            "easeInQuad",
                            "${ico_02}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            1458,
                            667,
                            "easeInQuint",
                            "${option}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            0,
                            417,
                            "easeInQuad",
                            "${ico_01}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            333,
                            417,
                            "easeInQuad",
                            "${ico_03}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            500,
                            417,
                            "easeInQuad",
                            "${ico_04}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            500,
                            417,
                            "easeInQuad",
                            "${ico_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            667,
                            417,
                            "easeInQuad",
                            "${ico_05}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            0,
                            417,
                            "easeInQuad",
                            "${ico_01}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            333,
                            417,
                            "easeInQuad",
                            "${ico_03}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            167,
                            417,
                            "easeInQuad",
                            "${ico_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            667,
                            417,
                            "easeInQuad",
                            "${ico_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1250,
                            667,
                            "easeInQuint",
                            "${line}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tab_pic_edgeActions.js");
})("EDGE-2927083");
