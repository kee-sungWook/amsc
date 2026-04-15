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
                id: 'flow_back3',
                type: 'image',
                rect: ['638px', '434px','97px','523px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flow_back3.png",'0px','0px']
            },
            {
                id: 'flow_back2',
                type: 'image',
                tag: 'img',
                rect: ['652', '413','540','614','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flow_back2.png"]
            },
            {
                id: 'FLOW_T6',
                type: 'rect',
                rect: ['655', '836','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_T5',
                type: 'rect',
                rect: ['726', '836','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_T4',
                type: 'rect',
                rect: ['635', '946','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_T3',
                type: 'rect',
                rect: ['655', '547','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_T2',
                type: 'rect',
                rect: ['726', '437','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_T1',
                type: 'rect',
                rect: ['635', '437','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B6',
                type: 'rect',
                rect: ['655', '543px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B5',
                type: 'rect',
                rect: ['655', '744','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B4',
                type: 'rect',
                rect: ['656px', '744','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B3',
                type: 'rect',
                rect: ['823px', '745px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B2',
                type: 'rect',
                rect: ['824px', '1017px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B1',
                type: 'rect',
                rect: ['1183px', '870','auto','auto','auto', 'auto']
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
                rect: ['634px', '410px','386px','646px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts.png"]
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
                rect: ['676px', '583px','187px','46px','auto', 'auto'],
                text: "벨로스터",
                align: "auto",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['770px', '448px','235px','46px','auto', 'auto'],
                text: "이그나이터",
                align: "auto",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['742px', '50px','1096px','106','auto', 'auto'],
                text: "HID 전구는 기존 할로겐전구 보다 약 2~2.5배 이상<br>수명이 길고, 내구성이 향상 되었습니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['111px', '22','584px','145','auto', 'auto'],
                text: "전조등<br>(HID전구타입)",
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
                id: 'FLOW_T6',
                symbolName: 'FLOW_T6',
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
                id: 'FLOW_B2',
                symbolName: 'FLOW_B2',
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
                id: 'FLOW_B6',
                symbolName: 'FLOW_B6',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_T5',
                symbolName: 'FLOW_T5',
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
                ["style", "left", '656px'],
                ["style", "opacity", '0']
            ],
            "${_txt2}": [
                ["style", "top", '50px'],
                ["style", "opacity", '0'],
                ["style", "left", '742px'],
                ["style", "width", '1096px']
            ],
            "${_FLOW_T5}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_B2}": [
                ["style", "top", '1017px'],
                ["style", "opacity", '0'],
                ["style", "left", '824px']
            ],
            "${_txt_c1}": [
                ["style", "top", '448px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '770px'],
                ["style", "width", '235px']
            ],
            "${_car}": [
                ["style", "left", '525px'],
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["style", "opacity", '0'],
                ["style", "left", '111px'],
                ["style", "width", '584px']
            ],
            "${_FLOW_B5}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c4}": [
                ["style", "top", '583px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '676px'],
                ["style", "width", '187px']
            ],
            "${_flow_back2}": [
                ["style", "opacity", '0']
            ],
            "${_car_glass}": [
                ["style", "left", '1039px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1900px']
            ],
            "${_parts}": [
                ["style", "top", '410px'],
                ["style", "height", '646px'],
                ["style", "opacity", '0'],
                ["style", "left", '634px'],
                ["style", "width", '386px']
            ],
            "${_FLOW_T2}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_B6}": [
                ["style", "top", '543px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_B3}": [
                ["style", "top", '745px'],
                ["style", "opacity", '0'],
                ["style", "left", '823px']
            ],
            "${_FLOW_T3}": [
                ["style", "opacity", '0']
            ],
            "${_car_handle}": [
                ["style", "left", '1195px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_T4}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_T1}": [
                ["style", "opacity", '0']
            ],
            "${_flow_back3}": [
                ["style", "top", '434px'],
                ["style", "opacity", '0'],
                ["style", "left", '638px']
            ],
            "${_FLOW_B1}": [
                ["style", "left", '1183px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_T6}": [
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
                { id: "eid114", tween: [ "style", "${_FLOW_T1}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid72", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 667 },
                { id: "eid102", tween: [ "style", "${_LIGHT_MOVIE}", "left", '55px', { fromValue: '95px'}], position: 267, duration: 667 },
                { id: "eid56", tween: [ "style", "${_parts}", "opacity", '1', { fromValue: '0'}], position: 933, duration: 667 },
                { id: "eid112", tween: [ "style", "${_FLOW_T3}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid110", tween: [ "style", "${_FLOW_T5}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid60", tween: [ "style", "${_FLOW_B5}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid54", tween: [ "style", "${_FLOW_B4}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid98", tween: [ "style", "${_car}", "left", '485px', { fromValue: '525px'}], position: 267, duration: 667 },
                { id: "eid116", tween: [ "style", "${_flow_back3}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid100", tween: [ "style", "${_car_glass}", "left", '999px', { fromValue: '1039px'}], position: 267, duration: 667 },
                { id: "eid96", tween: [ "style", "${_car_handle}", "left", '1155px', { fromValue: '1195px'}], position: 267, duration: 667 },
                { id: "eid92", tween: [ "style", "${_car_glass}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 667 },
                { id: "eid50", tween: [ "style", "${_car_handle}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 667 },
                { id: "eid66", tween: [ "style", "${_txt_c5}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 667 },
                { id: "eid76", tween: [ "style", "${_car}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 667 },
                { id: "eid46", tween: [ "style", "${_FLOW_B1}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid108", tween: [ "style", "${_FLOW_T6}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid62", tween: [ "style", "${_txt_c1}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 667 },
                { id: "eid94", tween: [ "style", "${_LIGHT_MOVIE}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 667 },
                { id: "eid104", tween: [ "style", "${_FLOW_T4}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid82", tween: [ "style", "${_FLOW_B2}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid58", tween: [ "style", "${_FLOW_B6}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid78", tween: [ "style", "${_flow_back2}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 },
                { id: "eid106", tween: [ "style", "${_FLOW_T2}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 667 }            ]
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
                { id: "eid11", tween: [ "style", "${_light_angle1}", "opacity", '1', { fromValue: '0'}], position: 34, duration: 1000, easing: "easeInQuad" },
                { id: "eid24", tween: [ "style", "${_light_angle1}", "opacity", '0.3', { fromValue: '1'}], position: 1133, duration: 800, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_light_angle1}", "opacity", '1', { fromValue: '0.3'}], position: 2000, duration: 800, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_lightOval}", "opacity", '1', { fromValue: '0'}], position: 34, duration: 1000, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_lightOval}", "opacity", '0.3', { fromValue: '1'}], position: 1133, duration: 800, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_lightOval}", "opacity", '1', { fromValue: '0.3'}], position: 2000, duration: 800, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_light_angle2}", "opacity", '1', { fromValue: '0'}], position: 34, duration: 1000, easing: "easeInQuad" },
                { id: "eid21", tween: [ "style", "${_light_angle2}", "opacity", '0.3', { fromValue: '1'}], position: 1133, duration: 800, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_light_angle2}", "opacity", '1', { fromValue: '0.3'}], position: 2000, duration: 800, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_headLight_on}", "opacity", '1', { fromValue: '0'}], position: 34, duration: 1000, easing: "easeInQuad" },
                { id: "eid23", tween: [ "style", "${_headLight_on}", "opacity", '0.3', { fromValue: '1'}], position: 1133, duration: 800, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_headLight_on}", "opacity", '1', { fromValue: '0.3'}], position: 2000, duration: 800, easing: "easeInQuad" }            ]
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
                    rect: ['0px', '0px', '67', '67', 'auto', 'auto'],
                    id: 'generator',
                    fill: ['rgba(0,0,0,0)', 'images/generator.png'],
                    type: 'image',
                    tag: 'img'
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '6px']
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '364px']
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
                ["style", "height", '277px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '6px']
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '172px']
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
                ["style", "height", '90px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '6px']
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
            "${symbolSelector}": [
                ["style", "height", '205px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '6px']
            ],
            "${_FLOW_SRC_MOVIE3Copy}": [
                ["style", "top", '241px'],
                ["style", "left", '-397px'],
                ["transform", "rotateZ", '90deg']
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
                    rect: ['0px', '0px', '838px', '4px', 'auto', 'auto'],
                    id: 'flow_src2',
                    transform: [],
                    type: 'image',
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
                ["style", "overflow", 'visible'],
                ["style", "width", '800px']
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
                ["style", "width", '97px'],
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
                ["style", "height", '116px'],
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
                    id: 'FLOW_SRC_MOVIE4Copy2',
                    type: 'rect',
                    rect: ['-66px', '1px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE4Copy2',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVIE4Copy2}": [
                ["style", "top", '1px'],
                ["style", "left", '-66px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '77px'],
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
                ["style", "width", '97px'],
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
"FLOW_T5": {
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
                ["style", "height", '116px'],
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
"FLOW_T6": {
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
                    id: 'FLOW_SRC_MOVIE4Copy3',
                    type: 'rect',
                    rect: ['-66px', '1px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVIE4Copy3',
                symbolName: 'FLOW_SRC_MOVIE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '77px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_SRC_MOVIE4Copy3}": [
                ["style", "top", '1px'],
                ["style", "left", '-66px'],
                ["transform", "rotateZ", '180deg']
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
