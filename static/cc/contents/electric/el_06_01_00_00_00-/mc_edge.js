/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'car',
                type: 'image',
                tag: 'img',
                rect: ['485', '263','1397','870','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car.png"]
            },
            {
                id: 'flow_back2',
                type: 'image',
                tag: 'img',
                rect: ['652', '413','540','614','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flow_back2.png"]
            },
            {
                id: 'FLOW_B6',
                type: 'rect',
                rect: ['655', '410','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B5',
                type: 'rect',
                rect: ['655', '744','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B4',
                type: 'rect',
                rect: ['655', '744','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B3',
                type: 'rect',
                rect: ['823px', '744','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B2',
                type: 'rect',
                rect: ['823', '1018','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B1',
                type: 'rect',
                rect: ['1183px', '870','auto','auto','auto', 'auto']
            },
            {
                id: 'flow_back1',
                type: 'image',
                tag: 'img',
                rect: ['598', '471','235','448','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flow_back1.png"]
            },
            {
                id: 'FLOW_T4',
                type: 'rect',
                rect: ['602', '468','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_T3',
                type: 'rect',
                rect: ['602', '691','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_T2',
                type: 'rect',
                rect: ['602', '691','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_T1',
                type: 'rect',
                rect: ['823', '477','auto','auto','auto', 'auto']
            },
            {
                id: 'car_handle',
                type: 'image',
                tag: 'img',
                rect: ['1155', '754','122','172','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car_handle.png"]
            },
            {
                id: 'car_glass',
                type: 'image',
                tag: 'img',
                rect: ['999', '349','675','690','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car_glass.png"]
            },
            {
                id: 'LIGHT_MOVIE',
                type: 'rect',
                rect: ['55', '204','auto','auto','auto', 'auto']
            },
            {
                id: 'parts',
                type: 'image',
                tag: 'img',
                rect: ['770', '337','251','727','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts.png"]
            },
            {
                id: 'GEN_MOVIE',
                type: 'rect',
                rect: ['701', '912','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_c5',
                type: 'text',
                rect: ['1273', '868','124','94','auto', 'auto'],
                text: "전조등<br>스위치",
                align: "auto",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c4',
                type: 'text',
                rect: ['928', '1078','84','94','auto', 'auto'],
                text: "퓨즈<br>박스",
                align: "auto",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c3',
                type: 'text',
                rect: ['764', '1078','124','94','auto', 'auto'],
                text: "릴레이<br>박스",
                align: "center",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c2',
                type: 'text',
                rect: ['678', '857','124','46','auto', 'auto'],
                text: "발전기",
                align: "auto",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['894', '346','44','142','auto', 'auto'],
                text: "배<br>터<br>리",
                align: "auto",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['695px', '42px','1096px','106','auto', 'auto'],
                text: "구형 전조등(할로겐 타입)의 전조등 점등 흐름도이며<br>별도의 모듈없이 전조등 스위치에서 작동합니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['87px', '22','584px','145','auto', 'auto'],
                text: "전조등<br>(할로겐전구타입)",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'FLOW_B3',
                symbolName: 'FLOW_B3',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_B6',
                symbolName: 'FLOW_B6',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_B1',
                symbolName: 'FLOW_B1',
                autoPlay: {

                }
            },
            {
                id: 'LIGHT_MOVIE',
                symbolName: 'LIGHT_MOVIE',
                autoPlay: {

                }
            },
            {
                id: 'GEN_MOVIE',
                symbolName: 'GEN_MOVIE',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_T1',
                symbolName: 'FLOW_T1',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_T4',
                symbolName: 'FLOW_T4',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_T3',
                symbolName: 'FLOW_T3',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_B5',
                symbolName: 'FLOW_B5',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_B4',
                symbolName: 'FLOW_B4',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_T2',
                symbolName: 'FLOW_T2',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_B2',
                symbolName: 'FLOW_B2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_txt_c5}": [
                ["style", "opacity", '0']
            ],
            "${_LIGHT_MOVIE}": [
                ["style", "left", '95px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_B4}": [
                ["style", "opacity", '0']
            ],
            "${_GEN_MOVIE}": [
                ["style", "opacity", '0']
            ],
            "${_txt2}": [
                ["style", "top", '42px'],
                ["style", "opacity", '0'],
                ["style", "left", '695px'],
                ["style", "width", '1096px']
            ],
            "${_txt1}": [
                ["style", "opacity", '0'],
                ["style", "left", '87px'],
                ["style", "width", '584px']
            ],
            "${_FLOW_B6}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c1}": [
                ["style", "opacity", '0']
            ],
            "${_car}": [
                ["style", "left", '525px'],
                ["style", "opacity", '0']
            ],
            "${_txt_c3}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_B5}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c4}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_T4}": [
                ["style", "opacity", '0']
            ],
            "${_flow_back1}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c2}": [
                ["style", "opacity", '0']
            ],
            "${_parts}": [
                ["style", "opacity", '0']
            ],
            "${_flow_back2}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_T1}": [
                ["style", "left", '824px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_B3}": [
                ["style", "left", '823px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_T3}": [
                ["style", "opacity", '0']
            ],
            "${_car_handle}": [
                ["style", "left", '1195px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_T2}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_car_glass}": [
                ["style", "left", '1039px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_B2}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_B1}": [
                ["style", "left", '1183px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid84", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 667 },
                { id: "eid52", tween: [ "style", "${_txt_c4}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 667 },
                { id: "eid80", tween: [ "style", "${_FLOW_B3}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid68", tween: [ "style", "${_FLOW_T1}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid54", tween: [ "style", "${_FLOW_B4}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid82", tween: [ "style", "${_FLOW_B2}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid70", tween: [ "style", "${_GEN_MOVIE}", "opacity", '1', { fromValue: '0'}], position: 1033, duration: 667 },
                { id: "eid76", tween: [ "style", "${_car}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 667 },
                { id: "eid102", tween: [ "style", "${_LIGHT_MOVIE}", "left", '55px', { fromValue: '95px'}], position: 267, duration: 667 },
                { id: "eid90", tween: [ "style", "${_FLOW_T3}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid72", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 667 },
                { id: "eid60", tween: [ "style", "${_FLOW_B5}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid56", tween: [ "style", "${_parts}", "opacity", '1', { fromValue: '0'}], position: 933, duration: 667 },
                { id: "eid86", tween: [ "style", "${_txt_c2}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 667 },
                { id: "eid36", tween: [ "style", "${_FLOW_T1}", "left", '824px', { fromValue: '824px'}], position: 1333, duration: 0 },
                { id: "eid64", tween: [ "style", "${_txt_c3}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 667 },
                { id: "eid96", tween: [ "style", "${_car_handle}", "left", '1155px', { fromValue: '1195px'}], position: 267, duration: 667 },
                { id: "eid92", tween: [ "style", "${_car_glass}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 667 },
                { id: "eid98", tween: [ "style", "${_car}", "left", '485px', { fromValue: '525px'}], position: 267, duration: 667 },
                { id: "eid66", tween: [ "style", "${_txt_c5}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 667 },
                { id: "eid88", tween: [ "style", "${_flow_back1}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid46", tween: [ "style", "${_FLOW_B1}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid50", tween: [ "style", "${_car_handle}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 667 },
                { id: "eid62", tween: [ "style", "${_txt_c1}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 667 },
                { id: "eid94", tween: [ "style", "${_LIGHT_MOVIE}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 667 },
                { id: "eid48", tween: [ "style", "${_FLOW_T4}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid100", tween: [ "style", "${_car_glass}", "left", '999px', { fromValue: '1039px'}], position: 267, duration: 667 },
                { id: "eid58", tween: [ "style", "${_FLOW_B6}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid78", tween: [ "style", "${_flow_back2}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid74", tween: [ "style", "${_FLOW_T2}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 }            ]
        }
    }
},
"LIGHT_MOVIE": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'light_angle2',
                    tag: 'img',
                    rect: ['0px', '196px', '684', '784', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/light_angle2.png']
                },
                {
                    type: 'image',
                    id: 'light_angle1',
                    tag: 'img',
                    rect: ['0px', '0px', '684', '784', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/light_angle1.png']
                },
                {
                    type: 'image',
                    id: 'lightOval',
                    tag: 'img',
                    rect: ['317px', '31px', '391', '920', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lightOval.png']
                },
                {
                    rect: ['498px', '143px', '182', '694', 'auto', 'auto'],
                    tag: 'img',
                    id: 'headLight_off',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/headLight_off.png']
                },
                {
                    type: 'image',
                    id: 'headLight_on',
                    tag: 'img',
                    rect: ['498px', '143px', '182', '694', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/headLight_on.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lightOval}": [
                ["style", "top", '31px'],
                ["style", "opacity", '0'],
                ["style", "left", '317px']
            ],
            "${_light_angle2}": [
                ["style", "top", '196px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_headLight_off}": [
                ["style", "top", '143px'],
                ["style", "opacity", '1'],
                ["style", "left", '498px']
            ],
            "${symbolSelector}": [
                ["style", "height", '980px'],
                ["style", "width", '708px']
            ],
            "${_light_angle1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_headLight_on}": [
                ["style", "top", '143px'],
                ["style", "opacity", '0'],
                ["style", "left", '498px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3367,
            autoPlay: false,
            labels: {
                "gogo": 33,
                "reGo": 1133
            },
            timeline: [
                { id: "eid9", tween: [ "style", "${_headLight_on}", "opacity", '1', { fromValue: '0'}], position: 34, duration: 1000, easing: "easeInQuad" },
                { id: "eid23", tween: [ "style", "${_headLight_on}", "opacity", '0.3', { fromValue: '1'}], position: 1133, duration: 800, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_headLight_on}", "opacity", '1', { fromValue: '0.3'}], position: 2000, duration: 800, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_lightOval}", "opacity", '1', { fromValue: '0'}], position: 34, duration: 1000, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_lightOval}", "opacity", '0.3', { fromValue: '1'}], position: 1133, duration: 800, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_lightOval}", "opacity", '1', { fromValue: '0.3'}], position: 2000, duration: 800, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_light_angle2}", "opacity", '1', { fromValue: '0'}], position: 34, duration: 1000, easing: "easeInQuad" },
                { id: "eid21", tween: [ "style", "${_light_angle2}", "opacity", '0.3', { fromValue: '1'}], position: 1133, duration: 800, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_light_angle2}", "opacity", '1', { fromValue: '0.3'}], position: 2000, duration: 800, easing: "easeInQuad" },
                { id: "eid11", tween: [ "style", "${_light_angle1}", "opacity", '1', { fromValue: '0'}], position: 34, duration: 1000, easing: "easeInQuad" },
                { id: "eid24", tween: [ "style", "${_light_angle1}", "opacity", '0.3', { fromValue: '1'}], position: 1133, duration: 800, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_light_angle1}", "opacity", '1', { fromValue: '0.3'}], position: 2000, duration: 800, easing: "easeInQuad" }            ]
        }
    }
},
"GEN_MOVIE": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'generator',
                    tag: 'img',
                    rect: ['0px', '0px', '67', '67', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/generator.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_generator}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid31", tween: [ "transform", "${_generator}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 0, duration: 1500 }            ]
        }
    }
},
"FLOW_T1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE2',
                    type: 'rect',
                    rect: ['-397px', '-151px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE2',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '220px'],
                ["style", "width", '6px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_SRC_MOVIE2}": [
                ["style", "top", '-151px'],
                ["style", "left", '-397px'],
                ["transform", "rotateZ", '-90deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_T2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE4',
                    type: 'rect',
                    rect: ['-66px', '1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE4',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '227px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_SRC_MOVIE4}": [
                ["style", "left", '-66px'],
                ["style", "top", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_T3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE2',
                    type: 'rect',
                    rect: ['-397px', '-151px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE2',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '231px'],
                ["style", "width", '6px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_SRC_MOVIE2}": [
                ["style", "top", '-151px'],
                ["style", "left", '-397px'],
                ["transform", "rotateZ", '-90deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_T4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE3',
                    type: 'rect',
                    rect: ['-397px', '241px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE3',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVIE3}": [
                ["style", "top", '241px'],
                ["style", "left", '-397px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '6px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_B1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE2Copy',
                    type: 'rect',
                    rect: ['-397px', '-151px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE2Copy',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '154px'],
                ["style", "width", '6px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_SRC_MOVIE2Copy}": [
                ["style", "top", '-151px'],
                ["style", "left", '-397px'],
                ["transform", "rotateZ", '-90deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_B2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE4',
                    type: 'rect',
                    rect: ['-66px', '1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE4',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '366px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_SRC_MOVIE4}": [
                ["style", "left", '-66px'],
                ["style", "top", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_B3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE3',
                    type: 'rect',
                    rect: ['-397px', '241px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE3',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVIE3}": [
                ["style", "top", '241px'],
                ["style", "left", '-397px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '280px'],
                ["style", "width", '6px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_B4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE4Copy',
                    type: 'rect',
                    rect: ['-66px', '1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE4Copy',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '174px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_SRC_MOVIE4Copy}": [
                ["style", "left", '-66px'],
                ["style", "top", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_B5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE2Copy2',
                    type: 'rect',
                    rect: ['-397px', '-151px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE2Copy2',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVIE2Copy2}": [
                ["style", "top", '-151px'],
                ["style", "left", '-397px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '235px'],
                ["style", "width", '6px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_B6": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'FLOW_SRC_MOVIE3Copy',
                    type: 'rect',
                    rect: ['-397px', '241px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE3Copy',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVIE3Copy}": [
                ["style", "top", '241px'],
                ["style", "left", '-397px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '340px'],
                ["style", "width", '6px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"FLOW_SRC_MOVIE": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'flow_src2',
                    rect: ['0px', '0px', '838px', '4px', 'auto', 'auto'],
                    transform: [],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '4px'],
                ["style", "width", '800px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "style", "${_flow_src2}", "left", '-34px', { fromValue: '0px'}], position: 0, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-28455542");
