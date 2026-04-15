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
                id: 'tm',
                type: 'image',
                tag: 'img',
                rect: ['111', '258','639','706','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tm.png"]
            },
            {
                id: 'FLOWOUT1',
                type: 'rect',
                rect: ['0px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWOUT2',
                type: 'rect',
                rect: ['1249px', '738px','auto','auto','auto', 'auto'],
                transform: [[],['-90']]
            },
            {
                id: 'FLOW_3',
                type: 'rect',
                rect: ['427px', '211','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_2',
                type: 'rect',
                rect: ['428', '210px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_1',
                type: 'rect',
                rect: ['1450', '211','auto','auto','auto', 'auto']
            },
            {
                id: 'module',
                type: 'image',
                tag: 'img',
                rect: ['750', '763','794','417','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"module.png"]
            },
            {
                id: 'I_SW',
                type: 'rect',
                rect: ['970', '248','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_c4',
                type: 'text',
                rect: ['792', '902px','298','240px','auto', 'auto'],
                text: "변속패턴제어<br><br>변속시 유압제어<br><br>댐퍼클러치 제어",
                align: "center",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c3',
                type: 'text',
                rect: ['1161', '844','184','98','auto', 'auto'],
                text: "변속신호<br>입력",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c2',
                type: 'text',
                rect: ['1362', '413','184','98','auto', 'auto'],
                text: "인히비터<br>스위치",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['868', '779','146','76','auto', 'auto'],
                text: "TCU",
                align: "center",
                font: ['굴림', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['662', '41','1075','106','auto', 'auto'],
                text: "변속레버의 위치를 검출하여 주차,중립에서만 <br>시동이 걸리도록 하는 역할을 합니다 (TCU로 신호 입력)",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['54px', '47','568px','76','auto', 'auto'],
                text: "인히비터스위치",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'FLOW_3',
                symbolName: 'FLOW_3',
                autoPlay: {

                }
            },
            {
                id: 'FLOWOUT1',
                symbolName: 'FLOW_MOVE_1',
                autoPlay: {

                }
            },
            {
                id: 'I_SW',
                symbolName: 'I_SW',
                autoPlay: {

                }
            },
            {
                id: 'FLOWOUT2',
                symbolName: 'FLOW_MOVE_1',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_1',
                symbolName: 'FLOW_1',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_2',
                symbolName: 'FLOW_2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_txt_c4}": [
                ["style", "top", '902px'],
                ["style", "opacity", '0'],
                ["style", "height", '240px']
            ],
            "${_txt_c2}": [
                ["style", "opacity", '0']
            ],
            "${_FLOWOUT1}": [
                ["style", "top", '968px'],
                ["style", "opacity", '0'],
                ["style", "left", '1124px']
            ],
            "${_txt2}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_3}": [
                ["style", "left", '427px'],
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["style", "opacity", '0'],
                ["style", "left", '54px'],
                ["style", "width", '568px']
            ],
            "${_FLOWOUT2}": [
                ["style", "top", '738px'],
                ["style", "opacity", '0'],
                ["style", "left", '1249px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${_FLOW_1}": [
                ["style", "opacity", '0']
            ],
            "${_module}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_2}": [
                ["style", "top", '210px'],
                ["style", "opacity", '0']
            ],
            "${_txt_c1}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_I_SW}": [
                ["style", "opacity", '0']
            ],
            "${_tm}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c3}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1433,
            autoPlay: true,
            timeline: [
                { id: "eid36", tween: [ "style", "${_FLOWOUT2}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 500 },
                { id: "eid30", tween: [ "style", "${_txt_c3}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 500 },
                { id: "eid34", tween: [ "style", "${_FLOWOUT1}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 500 },
                { id: "eid54", tween: [ "style", "${_txt_c4}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 500 },
                { id: "eid38", tween: [ "style", "${_tm}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 500 },
                { id: "eid42", tween: [ "style", "${_FLOW_2}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 500 },
                { id: "eid28", tween: [ "style", "${_FLOW_3}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 500 },
                { id: "eid50", tween: [ "style", "${_txt_c1}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 500 },
                { id: "eid48", tween: [ "style", "${_I_SW}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid44", tween: [ "style", "${_txt_c2}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 500 },
                { id: "eid52", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 500 },
                { id: "eid40", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid46", tween: [ "style", "${_module}", "opacity", '1', { fromValue: '0'}], position: 433, duration: 500 },
                { id: "eid32", tween: [ "style", "${_FLOW_1}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 500 }            ]
        }
    }
},
"FLOW_MOVE": {
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
                    id: 'flow_src',
                    tag: 'img',
                    rect: ['0px', '0px', '1411', '4', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '4px'],
                ["style", "width", '1100px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_flow_src}", "left", '-216px', { fromValue: '0px'}], position: 0, duration: 2500 }            ]
        }
    }
},
"FLOW_MOVE_1": {
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
                    id: 'flow_back',
                    tag: 'img',
                    rect: ['3px', '0px', '244', '25', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_back.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'flow_src',
                    rect: ['0px', '5px', '414', '15', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src2.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_back}": [
                ["style", "left", '3px'],
                ["style", "top", '0px']
            ],
            "${_flow_src}": [
                ["style", "top", '5px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '414px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "gogo": 33
            },
            timeline: [
                { id: "eid80", tween: [ "style", "${_flow_src}", "left", '-40px', { fromValue: '0px'}], position: 33, duration: 967 },
                { id: "eid81", tween: [ "style", "${_flow_src}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_flow_src}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"FLOW_1": {
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
                    id: 'FLOW_MOVECopy2',
                    type: 'rect',
                    rect: ['-547px', '528px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_MOVECopy2',
                symbolName: 'FLOW_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_MOVECopy2}": [
                ["style", "top", '528px'],
                ["style", "left", '-547px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '141px'],
                ["style", "width", '5px'],
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
"FLOW_2": {
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
                    id: 'FLOW_MOVE',
                    type: 'rect',
                    rect: ['377', '167', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_MOVE',
                symbolName: 'FLOW_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '1027px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_MOVE}": [
                ["style", "top", '1px'],
                ["style", "left", '-72px'],
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
},
"FLOW_3": {
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
                    id: 'FLOW_MOVECopy',
                    type: 'rect',
                    rect: ['-547px', '548px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_MOVECopy',
                symbolName: 'FLOW_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '5px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_MOVECopy}": [
                ["style", "top", '548px'],
                ["style", "left", '-547px'],
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
"I_SW": {
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
                    id: 'sw',
                    tag: 'img',
                    rect: ['0px', '0px', '726', '534', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sw.png']
                },
                {
                    rect: ['252px', '70px', '239', '369', 'auto', 'auto'],
                    tag: 'img',
                    id: 'swLine',
                    transform: [],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/swLine.png']
                },
                {
                    rect: ['435px', '635px', '100', '156', 'auto', 'auto'],
                    font: ['굴림', 150, 'rgb(236,30,121)', 'normal', 'none', 'normal'],
                    id: 'P',
                    text: 'P',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['433px', '635px', '104', '156', 'auto', 'auto'],
                    font: ['굴림', 150, 'rgb(236,30,121)', 'normal', 'none', 'normal'],
                    display: 'none',
                    id: 'R',
                    text: 'R',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['430px', '635px', '110', '156', 'auto', 'auto'],
                    font: ['굴림', 150, 'rgb(236,30,121)', 'normal', 'none', 'normal'],
                    display: 'none',
                    id: 'N',
                    text: 'N',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['429px', '635px', '112', '156', 'auto', 'auto'],
                    font: ['굴림', 150, 'rgb(236,30,121)', 'normal', 'none', 'normal'],
                    display: 'none',
                    id: 'D',
                    text: 'D',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['440px', '635px', '90', '156', 'auto', 'auto'],
                    font: ['굴림', 150, 'rgb(236,30,121)', 'normal', 'none', 'normal'],
                    display: 'none',
                    id: 'NUM3',
                    text: '3',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['440px', '635px', '90', '156', 'auto', 'auto'],
                    font: ['굴림', 150, 'rgb(236,30,121)', 'normal', 'none', 'normal'],
                    display: 'none',
                    id: 'NUM2',
                    text: '2',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['442px', '635px', '86', '156', 'auto', 'auto'],
                    font: ['굴림', 150, 'rgb(236,30,121)', 'normal', 'none', 'normal'],
                    display: 'none',
                    id: 'L',
                    text: 'L',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_N}": [
                ["style", "top", '635px'],
                ["style", "left", '430px'],
                ["style", "display", 'none']
            ],
            "${_R}": [
                ["style", "top", '635px'],
                ["style", "left", '433px'],
                ["style", "display", 'none']
            ],
            "${_sw}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_swLine}": [
                ["style", "-webkit-transform-origin", [98,98.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [98,98.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [98,98.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [98,98.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [98,98.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '70px'],
                ["style", "left", '252px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_D}": [
                ["style", "top", '635px'],
                ["style", "left", '429px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '744px'],
                ["style", "width", '726px']
            ],
            "${_NUM2}": [
                ["style", "top", '635px'],
                ["style", "left", '440px'],
                ["style", "display", 'none']
            ],
            "${_P}": [
                ["style", "top", '635px'],
                ["style", "left", '435px'],
                ["style", "display", 'block']
            ],
            "${_L}": [
                ["style", "top", '635px'],
                ["style", "left", '442px'],
                ["style", "display", 'none']
            ],
            "${_NUM3}": [
                ["style", "top", '635px'],
                ["style", "left", '440px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17492,
            autoPlay: false,
            timeline: [
                { id: "eid19", tween: [ "style", "${_R}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${_R}", "display", 'block', { fromValue: 'none'}], position: 1010, duration: 0, easing: "easeOutQuad" },
                { id: "eid115", tween: [ "style", "${_R}", "display", 'none', { fromValue: 'block'}], position: 2467, duration: 0, easing: "easeOutQuad" },
                { id: "eid124", tween: [ "style", "${_R}", "display", 'block', { fromValue: 'none'}], position: 15666, duration: 0, easing: "easeOutQuad" },
                { id: "eid125", tween: [ "style", "${_R}", "display", 'none', { fromValue: 'block'}], position: 17123, duration: 0, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_NUM3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_NUM3}", "display", 'block', { fromValue: 'none'}], position: 5433, duration: 0, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "style", "${_NUM3}", "display", 'none', { fromValue: 'block'}], position: 6867, duration: 0, easing: "easeOutQuad" },
                { id: "eid118", tween: [ "style", "${_NUM3}", "display", 'block', { fromValue: 'none'}], position: 11266, duration: 0, easing: "easeOutQuad" },
                { id: "eid119", tween: [ "style", "${_NUM3}", "display", 'none', { fromValue: 'block'}], position: 12733, duration: 0, easing: "easeOutQuad" },
                { id: "eid17", tween: [ "style", "${_D}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_D}", "display", 'block', { fromValue: 'none'}], position: 3934, duration: 0, easing: "easeOutQuad" },
                { id: "eid113", tween: [ "style", "${_D}", "display", 'none', { fromValue: 'block'}], position: 5433, duration: 0, easing: "easeOutQuad" },
                { id: "eid120", tween: [ "style", "${_D}", "display", 'block', { fromValue: 'none'}], position: 12733, duration: 0, easing: "easeOutQuad" },
                { id: "eid121", tween: [ "style", "${_D}", "display", 'none', { fromValue: 'block'}], position: 14200, duration: 0, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_L}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_L}", "display", 'block', { fromValue: 'none'}], position: 8333, duration: 0, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "style", "${_L}", "display", 'none', { fromValue: 'block'}], position: 9800, duration: 0, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_N}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid107", tween: [ "style", "${_N}", "display", 'block', { fromValue: 'none'}], position: 2467, duration: 0, easing: "easeOutQuad" },
                { id: "eid114", tween: [ "style", "${_N}", "display", 'none', { fromValue: 'block'}], position: 3934, duration: 0, easing: "easeOutQuad" },
                { id: "eid122", tween: [ "style", "${_N}", "display", 'block', { fromValue: 'none'}], position: 14200, duration: 0, easing: "easeOutQuad" },
                { id: "eid123", tween: [ "style", "${_N}", "display", 'none', { fromValue: 'block'}], position: 15666, duration: 0, easing: "easeOutQuad" },
                { id: "eid21", tween: [ "transform", "${_swLine}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 543, duration: 467, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "transform", "${_swLine}", "rotateZ", '-18deg', { fromValue: '-9deg'}], position: 2000, duration: 467, easing: "easeOutQuad" },
                { id: "eid23", tween: [ "transform", "${_swLine}", "rotateZ", '-26deg', { fromValue: '-18deg'}], position: 3467, duration: 467, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "transform", "${_swLine}", "rotateZ", '-35deg', { fromValue: '-26deg'}], position: 4933, duration: 500, easing: "easeOutQuad" },
                { id: "eid25", tween: [ "transform", "${_swLine}", "rotateZ", '-46deg', { fromValue: '-35deg'}], position: 6400, duration: 467, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "transform", "${_swLine}", "rotateZ", '-57deg', { fromValue: '-46deg'}], position: 7867, duration: 467, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "transform", "${_swLine}", "rotateZ", '-46deg', { fromValue: '-57deg'}], position: 9333, duration: 467, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "transform", "${_swLine}", "rotateZ", '-35deg', { fromValue: '-46deg'}], position: 10800, duration: 467, easing: "easeOutQuad" },
                { id: "eid99", tween: [ "transform", "${_swLine}", "rotateZ", '-26deg', { fromValue: '-35deg'}], position: 12233, duration: 500, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "transform", "${_swLine}", "rotateZ", '-18deg', { fromValue: '-26deg'}], position: 13733, duration: 467, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "transform", "${_swLine}", "rotateZ", '-9deg', { fromValue: '-18deg'}], position: 15199, duration: 467, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "transform", "${_swLine}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 16656, duration: 467, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_P}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "style", "${_P}", "display", 'none', { fromValue: 'block'}], position: 1010, duration: 0, easing: "easeOutQuad" },
                { id: "eid126", tween: [ "style", "${_P}", "display", 'block', { fromValue: 'none'}], position: 17123, duration: 0, easing: "easeOutQuad" },
                { id: "eid15", tween: [ "style", "${_NUM2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${_NUM2}", "display", 'block', { fromValue: 'none'}], position: 6867, duration: 0, easing: "easeOutQuad" },
                { id: "eid111", tween: [ "style", "${_NUM2}", "display", 'none', { fromValue: 'block'}], position: 8333, duration: 0, easing: "easeOutQuad" },
                { id: "eid116", tween: [ "style", "${_NUM2}", "display", 'block', { fromValue: 'none'}], position: 9800, duration: 0, easing: "easeOutQuad" },
                { id: "eid117", tween: [ "style", "${_NUM2}", "display", 'none', { fromValue: 'block'}], position: 11266, duration: 0, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-13413607");
