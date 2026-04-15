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
                id: 'TIRE1',
                type: 'rect',
                rect: ['76', '252','auto','auto','auto', 'auto']
            },
            {
                id: 'TIRE2',
                type: 'rect',
                rect: ['1283px', '252','auto','auto','auto', 'auto']
            },
            {
                id: 'TIRE3',
                type: 'rect',
                rect: ['76', '1041px','auto','auto','auto', 'auto']
            },
            {
                id: 'TIRE4',
                type: 'rect',
                rect: ['1283px', '1041px','auto','auto','auto', 'auto']
            },
            {
                id: 'TIREWHEEL1',
                type: 'rect',
                rect: ['244', '367','auto','auto','auto', 'auto']
            },
            {
                id: 'TIREWHEEL2',
                type: 'rect',
                rect: ['1449px', '367','auto','auto','auto', 'auto']
            },
            {
                id: 'TIREWHEEL3',
                type: 'rect',
                rect: ['244', '367','auto','auto','auto', 'auto']
            },
            {
                id: 'TIREWHEEL4',
                type: 'rect',
                rect: ['1449px', '367','auto','auto','auto', 'auto']
            },
            {
                id: 'SENSOR_LINE',
                type: 'rect',
                rect: ['402', '429','auto','auto','auto', 'auto']
            },
            {
                id: 'SENSOR',
                type: 'rect',
                rect: ['345', '402','auto','auto','auto', 'auto']
            },
            {
                id: 'ARROW',
                type: 'rect',
                rect: ['952px', '386px','auto','auto','auto', 'auto'],
                transform: [[],['-90']]
            },
            {
                id: 'MODULE',
                type: 'rect',
                rect: ['548px', '557px','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_c2',
                type: 'text',
                rect: ['1193px', '594px','268','155','auto', 'auto'],
                text: "브레이크작동<br> &<br>VDC 제어",
                align: "center",
                font: ['굴림', 44, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['530px', '626px','372px','184px','auto', 'auto'],
                text: "ABS &amp; VDC<br>모듈",
                align: "center",
                font: ['굴림', 44, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['562px', '77px','1344','102','auto', 'auto'],
                text: "휠속도센서는 회전하는 바퀴의 속도를 감지하여 모듈로 입력합니다.",
                align: "auto",
                font: ['나눔고딕', 44, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['139px', '63px','372','76','auto', 'auto'],
                text: "휠속도센서",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'TIRE3',
                symbolName: 'TIRE',
                autoPlay: {

                }
            },
            {
                id: 'TIREWHEEL3',
                symbolName: 'TIREWHEEL',
                autoPlay: {

                }
            },
            {
                id: 'MODULE',
                symbolName: 'MODULE',
                autoPlay: {

                }
            },
            {
                id: 'SENSOR',
                symbolName: 'SENSOR',
                autoPlay: {

                }
            },
            {
                id: 'TIRE2',
                symbolName: 'TIRE',
                autoPlay: {

                }
            },
            {
                id: 'ARROW',
                symbolName: 'ARROW',
                autoPlay: {

                }
            },
            {
                id: 'TIRE1',
                symbolName: 'TIRE',
                autoPlay: {

                }
            },
            {
                id: 'TIREWHEEL2',
                symbolName: 'TIREWHEEL',
                autoPlay: {

                }
            },
            {
                id: 'TIREWHEEL4',
                symbolName: 'TIREWHEEL',
                autoPlay: {

                }
            },
            {
                id: 'SENSOR_LINE',
                symbolName: 'SENSOR_LINE',
                autoPlay: {

                }
            },
            {
                id: 'TIREWHEEL1',
                symbolName: 'TIREWHEEL',
                autoPlay: {

                }
            },
            {
                id: 'TIRE4',
                symbolName: 'TIRE',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_txt2}": [
                ["style", "top", '77px'],
                ["style", "opacity", '0'],
                ["style", "left", '562px']
            ],
            "${_SENSOR_LINE}": [
                ["style", "opacity", '0']
            ],
            "${_MODULE}": [
                ["style", "top", '557px'],
                ["style", "opacity", '0'],
                ["style", "left", '548px']
            ],
            "${_TIRE2}": [
                ["style", "left", '1283px']
            ],
            "${_txt_c2}": [
                ["style", "top", '594px'],
                ["style", "opacity", '0'],
                ["style", "left", '1193px']
            ],
            "${_ARROW}": [
                ["style", "top", '386px'],
                ["style", "opacity", '0'],
                ["style", "left", '952px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${_txt1}": [
                ["style", "top", '63px'],
                ["style", "opacity", '0'],
                ["style", "left", '139px']
            ],
            "${_TIREWHEEL4}": [
                ["style", "top", '1040px'],
                ["style", "left", '1449px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_SENSOR}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c1}": [
                ["style", "top", '626px'],
                ["style", "height", '184px'],
                ["style", "opacity", '0'],
                ["style", "left", '530px'],
                ["style", "width", '372px']
            ],
            "${_TIREWHEEL2}": [
                ["style", "left", '1449px']
            ],
            "${_TIREWHEEL3}": [
                ["style", "top", '1040px']
            ],
            "${_TIRE4}": [
                ["style", "left", '1283px'],
                ["style", "top", '1041px']
            ],
            "${_TIRE3}": [
                ["style", "top", '1041px']
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
                { id: "eid96", tween: [ "style", "${_ARROW}", "opacity", '1', { fromValue: '0'}], position: 601, duration: 566 },
                { id: "eid49", tween: [ "style", "${_txt_c1}", "opacity", '1', { fromValue: '0'}], position: 901, duration: 566 },
                { id: "eid43", tween: [ "style", "${_SENSOR}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 566 },
                { id: "eid98", tween: [ "style", "${_txt_c2}", "opacity", '1', { fromValue: '0'}], position: 901, duration: 565 },
                { id: "eid35", tween: [ "style", "${_MODULE}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 566 },
                { id: "eid39", tween: [ "style", "${_SENSOR_LINE}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 566 },
                { id: "eid33", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 170, duration: 530, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 530, easing: "easeOutQuad" }            ]
        }
    }
},
"MODULE": {
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
                    id: 'module_normal',
                    tag: 'img',
                    rect: ['1px', '1px', '332px', '226px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module_normal.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'module_red',
                    rect: ['0px', '0px', '334px', '227px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module_red.png']
                },
                {
                    type: 'image',
                    id: 'module_whiteLine',
                    tag: 'img',
                    rect: ['0px', '0px', '334px', '229px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module_whiteLine.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_module_whiteLine}": [
                ["style", "top", '0px'],
                ["style", "height", '229px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '334px']
            ],
            "${_module_red}": [
                ["style", "top", '0px'],
                ["style", "height", '227px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '334px']
            ],
            "${_module_normal}": [
                ["style", "top", '1px'],
                ["style", "height", '226px'],
                ["style", "display", 'block'],
                ["style", "left", '1px'],
                ["style", "width", '332px']
            ],
            "${symbolSelector}": [
                ["style", "height", '115px'],
                ["style", "width", '168px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 800,
            autoPlay: false,
            labels: {
                "gogo": 67
            },
            timeline: [
                { id: "eid11", tween: [ "style", "${_module_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_module_red}", "display", 'block', { fromValue: 'none'}], position: 67, duration: 0 },
                { id: "eid10", tween: [ "style", "${_module_normal}", "display", 'none', { fromValue: 'block'}], position: 67, duration: 0 },
                { id: "eid8", tween: [ "style", "${_module_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 333 },
                { id: "eid9", tween: [ "style", "${_module_whiteLine}", "opacity", '0', { fromValue: '1'}], position: 467, duration: 333 }            ]
        }
    }
},
"FLOW_SRC_MOVE": {
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
                    rect: ['0px', '0px', '778', '6', 'auto', 'auto'],
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
                ["style", "height", '6px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '670px']
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
                { id: "eid1", tween: [ "style", "${_flow_src}", "left", '-110px', { fromValue: '0px'}], position: 0, duration: 2000 }            ]
        }
    }
},
"FLOW": {
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
                    rect: ['0px', '3px', '451', '225', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_back.png']
                },
                {
                    id: 'FLOW3',
                    type: 'rect',
                    rect: ['5', '85', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW2',
                    type: 'rect',
                    rect: ['5', '85', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW1',
                    type: 'rect',
                    rect: ['440', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW2',
                symbolName: 'FLOW2'
            },
            {
                id: 'FLOW3',
                symbolName: 'FLOW3'
            },
            {
                id: 'FLOW1',
                symbolName: 'FLOW1'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW2}": [
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '231px'],
                ["style", "width", '451px']
            ],
            "${_flow_back}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_FLOW1}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW3}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 833,
            autoPlay: false,
            labels: {
                "gogo": 33
            },
            timeline: [
                { id: "eid23", tween: [ "style", "${_FLOW2}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 800 },
                { id: "eid25", tween: [ "style", "${_flow_back}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 800 },
                { id: "eid27", tween: [ "style", "${_FLOW1}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 800 },
                { id: "eid29", tween: [ "style", "${_FLOW3}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 800 }            ]
        }
    }
},
"SENSOR": {
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
                    id: 'sensor_back',
                    tag: 'img',
                    rect: ['0px', '0px', '1210', '631', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_back.png']
                },
                {
                    type: 'image',
                    id: 'sensor_WR2',
                    tag: 'img',
                    rect: ['16px', '12px', '1179', '606', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_WR2.png']
                },
                {
                    type: 'image',
                    id: 'sensor_WR1',
                    tag: 'img',
                    rect: ['16px', '12px', '1179', '606', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_WR1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sensor_back}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sensor_WR2}": [
                ["style", "top", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '16px']
            ],
            "${_sensor_WR1}": [
                ["style", "top", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '631px'],
                ["style", "width", '1210px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 566,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "style", "${_sensor_WR2}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 166 },
                { id: "eid18", tween: [ "style", "${_sensor_WR2}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 166 },
                { id: "eid14", tween: [ "style", "${_sensor_WR1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 166 },
                { id: "eid17", tween: [ "style", "${_sensor_WR1}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 166 }            ]
        }
    }
},
"TIREWHEEL": {
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
                    rect: ['0px', '0px', '205', '26', 'auto', 'auto'],
                    id: 'tire_wheel',
                    fill: ['rgba(0,0,0,0)', 'images/tire_wheel.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'tire_wheel_line',
                    type: 'image',
                    rect: ['-116px', '1px', '321px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire_wheel_line.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tire_wheel}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_tire_wheel_line}": [
                ["style", "top", '1px'],
                ["style", "left", '-116px'],
                ["style", "height", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '205px']
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
                { id: "eid3", tween: [ "style", "${_tire_wheel_line}", "left", '0px', { fromValue: '-116px'}], position: 0, duration: 2000 }            ]
        }
    }
},
"TIRE": {
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
                    rect: ['113px', '22px', '315', '96', 'auto', 'auto'],
                    id: 'tire_body',
                    fill: ['rgba(0,0,0,0)', 'images/tire_body.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['23px', '13px', '88', '114', 'auto', 'auto'],
                    id: 'tire_gradi',
                    fill: ['rgba(0,0,0,0)', 'images/tire_gradi.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '517', '140', 'auto', 'auto'],
                    id: 'tire_cover',
                    fill: ['rgba(0,0,0,0)', 'images/tire_cover.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['111px', '21px', '318', '98', 'auto', 'auto'],
                    id: 'tire_outLIne',
                    fill: ['rgba(0,0,0,0)', 'images/tire_outLIne.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tire_cover}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_tire_body}": [
                ["style", "left", '113px'],
                ["style", "top", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '140px'],
                ["style", "width", '517px']
            ],
            "${_tire_outLIne}": [
                ["style", "left", '111px'],
                ["style", "top", '21px']
            ],
            "${_tire_gradi}": [
                ["style", "left", '23px'],
                ["style", "top", '13px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1267,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_tire_gradi}", "left", '429px', { fromValue: '23px'}], position: 0, duration: 1000, easing: "easeInOutQuad" }            ]
        }
    }
},
"SENSOR_LINE": {
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
                    id: 'sensor_line_normal',
                    tag: 'img',
                    rect: ['0px', '0px', '1097', '576', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_line_normal.png']
                },
                {
                    type: 'image',
                    id: 'sensor_line_red',
                    tag: 'img',
                    rect: ['0px', '0px', '1097', '576', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_line_red.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sensor_line_red}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_sensor_line_normal}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '576px'],
                ["style", "width", '1097px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 467,
            autoPlay: true,
            timeline: [
                { id: "eid20", tween: [ "style", "${_sensor_line_red}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid99", tween: [ "style", "${_sensor_line_red}", "opacity", '0', { fromValue: '1'}], position: 267, duration: 200 }            ]
        }
    }
},
"FLOW1": {
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
                    id: 'FLOW_SRC_MOVE3',
                    type: 'rect',
                    rect: ['-332px', '251px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVE3',
                symbolName: 'FLOW_SRC_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVE3}": [
                ["style", "top", '251px'],
                ["style", "left", '-332px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '91px'],
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
"FLOW2": {
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
                    id: 'FLOW_SRC_MOVE2',
                    type: 'rect',
                    rect: ['-167px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVE2',
                symbolName: 'FLOW_SRC_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVE2}": [
                ["style", "top", '0px'],
                ["style", "left", '-167px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '441px'],
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
"FLOW3": {
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
                    id: 'FLOW_SRC_MOVE',
                    type: 'rect',
                    rect: ['-332px', '36px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVE',
                symbolName: 'FLOW_SRC_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '146px'],
                ["style", "width", '6px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_SRC_MOVE}": [
                ["style", "top", '36px'],
                ["style", "left", '-332px'],
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
"ARROW": {
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
                    id: 'arrow_back',
                    tag: 'img',
                    rect: ['60px', '163px', '89', '222', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arrow_back.png']
                },
                {
                    type: 'image',
                    id: 'arrow_mover',
                    tag: 'img',
                    rect: ['25px', '87px', '158', '300', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arrow_mover.png']
                },
                {
                    type: 'image',
                    id: 'arrow_cover',
                    tag: 'img',
                    rect: ['0px', '0px', '209', '552', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arrow_cover.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arrow_cover}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '552px'],
                ["style", "width", '209px']
            ],
            "${_arrow_back}": [
                ["style", "left", '60px'],
                ["style", "top", '163px']
            ],
            "${_arrow_mover}": [
                ["style", "left", '25px'],
                ["style", "top", '87px']
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
                { id: "eid25", tween: [ "style", "${_arrow_mover}", "top", '110px', { fromValue: '87px'}], position: 0, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-27202022");
