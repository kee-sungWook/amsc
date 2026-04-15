/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'preloadAudio': false
};
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
                id: 'back_liquid',
                type: 'image',
                rect: ['144px', '196px','817px','700px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back_liquid.png",'0px','0px']
            },
            {
                id: 'L82',
                type: 'rect',
                rect: ['588px', '230','auto','auto','auto', 'auto']
            },
            {
                id: 'L7_MOVE',
                type: 'rect',
                rect: ['587', '275','auto','auto','auto', 'auto']
            },
            {
                id: 'L6_MOVE',
                type: 'rect',
                rect: ['145', '349','auto','auto','auto', 'auto']
            },
            {
                id: 'L5_MOVE',
                type: 'rect',
                rect: ['145', '317','auto','auto','auto', 'auto']
            },
            {
                id: 'L4_MOVE',
                type: 'rect',
                rect: ['145', '612','auto','auto','auto', 'auto']
            },
            {
                id: 'L3_MOVE',
                type: 'rect',
                rect: ['808', '612','auto','auto','auto', 'auto']
            },
            {
                id: 'L2_MOVE',
                type: 'rect',
                rect: ['828', '858','auto','auto','auto', 'auto']
            },
            {
                id: 'L1_MOVE',
                type: 'rect',
                rect: ['882px', '196','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1.1369']]
            },
            {
                id: 'back',
                type: 'image',
                tag: 'img',
                rect: ['39', '185','933','729','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back.png"]
            },
            {
                id: 'PROPELLER_MOVE',
                type: 'rect',
                rect: ['776', '361','auto','auto','auto', 'auto']
            },
            {
                id: 'GEAR2_MOVE',
                type: 'rect',
                rect: ['679', '688','auto','auto','auto', 'auto']
            },
            {
                id: 'GEAR1_MOVE',
                type: 'rect',
                rect: ['679', '418px','auto','auto','auto', 'auto']
            },
            {
                id: 'DRIVE_BELT_MOVE',
                type: 'rect',
                rect: ['739', '678','auto','auto','auto', 'auto']
            },
            {
                id: 'TIMING_BELT_MOVE',
                type: 'rect',
                rect: ['694', '411','auto','auto','auto', 'auto']
            },
            {
                id: 'CRANK_P2_MOVE',
                type: 'rect',
                rect: ['52', '672','auto','auto','auto', 'auto']
            },
            {
                id: 'CRANK_P1_MOVE',
                type: 'rect',
                rect: ['74', '688','auto','auto','auto', 'auto']
            },
            {
                id: 'PISTON_MOVE',
                type: 'rect',
                rect: ['178', '424','auto','auto','auto', 'auto']
            },
            {
                id: 'front_component',
                type: 'image',
                tag: 'img',
                rect: ['156', '317','791','520','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"front_component.png"]
            },
            {
                id: 'THERMOSTAT',
                type: 'rect',
                rect: ['582', '313','auto','auto','auto', 'auto']
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1008', '205px','739','50','auto', 'auto'],
                text: "서모스탯 닫힘 고장으로 인한 증상",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1008', '318px','700px','191px','auto', 'auto'],
                text: "*시동꺼짐<br>*시동불능<br>*기계적 부분의 심각한 고장",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1008', '634px','739','50','auto', 'auto'],
                text: "서모스탯 열림 고장으로 인한 증상",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1008', '746px','700px','215px','auto', 'auto'],
                text: "*히터불량<br>*과냉으로 인한 연료 소모량 증가<br>*엔진 RPM 이상",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'WATER_PUMP',
                type: 'rect',
                rect: ['597', '429','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'CRANK_P1_MOVE',
                symbolName: 'CRANK_P1_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'THERMOSTAT',
                symbolName: 'THERMOSTAT'
            },
            {
                id: 'CRANK_P2_MOVE',
                symbolName: 'CRANK_P2_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'L82',
                symbolName: 'L8',
                autoPlay: {

                }
            },
            {
                id: 'DRIVE_BELT_MOVE',
                symbolName: 'DRIVE_BELT_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'WATER_PUMP',
                symbolName: 'WATER_PUMP'
            },
            {
                id: 'PROPELLER_MOVE',
                symbolName: 'PROPELLER_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'PISTON_MOVE',
                symbolName: 'PISTON_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'GEAR1_MOVE',
                symbolName: 'GEAR1_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'TIMING_BELT_MOVE',
                symbolName: 'TIMING_BELT_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'L4_MOVE',
                symbolName: 'L4_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'L3_MOVE',
                symbolName: 'L3_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'L2_MOVE',
                symbolName: 'L2_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'L1_MOVE',
                symbolName: 'L1_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'L7_MOVE',
                symbolName: 'L7_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'GEAR2_MOVE',
                symbolName: 'GEAR2_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'L5_MOVE',
                symbolName: 'L5_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'L6_MOVE',
                symbolName: 'L6_MOVE',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_GEAR1_MOVE}": [
                ["style", "top", '418px']
            ],
            "${_back_liquid}": [
                ["style", "left", '144px'],
                ["style", "top", '196px']
            ],
            "${_txt2}": [
                ["style", "height", '191px'],
                ["style", "top", '318px'],
                ["style", "width", '700px']
            ],
            "${_txt1}": [
                ["style", "top", '205px']
            ],
            "${_L82}": [
                ["style", "left", '588px']
            ],
            "${_txt3}": [
                ["style", "top", '634px']
            ],
            "${_txt4}": [
                ["style", "height", '215px'],
                ["style", "top", '746px'],
                ["style", "width", '700px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_L1_MOVE}": [
                ["style", "left", '882px'],
                ["transform", "scaleX", '1.1369']
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
            ]
        }
    }
},
"PISTON_MOVE": {
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
                    id: 'piston2',
                    tag: 'img',
                    rect: ['106px', '90px', '202', '311', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/piston2.png']
                },
                {
                    type: 'image',
                    id: 'pistonExtra',
                    tag: 'img',
                    rect: ['320px', '0px', '95', '310', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pistonExtra.png']
                },
                {
                    type: 'image',
                    id: 'piston1',
                    tag: 'img',
                    rect: ['0px', '0px', '92', '310', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/piston1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_piston2}": [
                ["style", "left", '106px'],
                ["style", "top", '90px']
            ],
            "${_piston1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_pistonExtra}": [
                ["style", "left", '320px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '401px'],
                ["style", "width", '415px']
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
                { id: "eid2", tween: [ "style", "${_pistonExtra}", "top", '91px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid9", tween: [ "style", "${_pistonExtra}", "top", '0px', { fromValue: '91px'}], position: 1000, duration: 1000 },
                { id: "eid4", tween: [ "style", "${_piston2}", "top", '0px', { fromValue: '90px'}], position: 0, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_piston2}", "top", '90px', { fromValue: '0px'}], position: 1000, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_piston1}", "top", '91px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid8", tween: [ "style", "${_piston1}", "top", '0px', { fromValue: '91px'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"CRANK_P1_MOVE": {
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
                    rect: ['0px', '0px', '29', '125', 'auto', 'auto'],
                    id: 'crank_p1',
                    fill: ['rgba(0,0,0,0)', 'images/crank_p1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['1px', '-54px', '27', '176', 'auto', 'auto'],
                    id: 'crand_flow_src',
                    fill: ['rgba(0,0,0,0)', 'images/crand_flow_src.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crank_p1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_crand_flow_src}": [
                ["style", "left", '1px'],
                ["style", "top", '-54px']
            ],
            "${symbolSelector}": [
                ["style", "height", '125px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '29px']
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
                { id: "eid17", tween: [ "style", "${_crand_flow_src}", "top", '0px', { fromValue: '-54px'}], position: 0, duration: 500 }            ]
        }
    }
},
"CRANK_P2_MOVE": {
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
                    rect: ['0px', '0px', '25', '157', 'auto', 'auto'],
                    id: 'crank_p2',
                    fill: ['rgba(0,0,0,0)', 'images/crank_p2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'gear_flow_src2',
                    type: 'image',
                    rect: ['-18px', '-96px', '62px', '253px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_flow_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crank_p2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_gear_flow_src2}": [
                ["style", "left", '-18px'],
                ["style", "top", '-96px']
            ],
            "${symbolSelector}": [
                ["style", "height", '157px'],
                ["style", "width", '25px'],
                ["style", "overflow", 'hidden']
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
                { id: "eid18", tween: [ "style", "${_gear_flow_src2}", "top", '-30px', { fromValue: '-96px'}], position: 0, duration: 500 }            ]
        }
    }
},
"TIMING_BELT_MOVE": {
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
                    id: 'timingBelt',
                    tag: 'img',
                    rect: ['0px', '0px', '34', '414', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timingBelt.png']
                },
                {
                    type: 'image',
                    id: 'belt_flow_src',
                    tag: 'img',
                    rect: ['4px', '-1px', '25', '490', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt_flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_belt_flow_src}": [
                ["style", "left", '4px'],
                ["style", "top", '-63px']
            ],
            "${_timingBelt}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '414px'],
                ["style", "width", '34px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: true,
            timeline: [
                { id: "eid20", tween: [ "style", "${_belt_flow_src}", "top", '-1px', { fromValue: '-63px'}], position: 0, duration: 867 }            ]
        }
    }
},
"DRIVE_BELT_MOVE": {
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
                    id: 'driveBelt',
                    tag: 'img',
                    rect: ['0px', '0px', '34', '146', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt.png']
                },
                {
                    type: 'image',
                    id: 'belt_flow_src',
                    tag: 'img',
                    rect: ['4px', '-1px', '25', '490', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt_flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_belt_flow_src}": [
                ["style", "left", '4px'],
                ["style", "top", '-63px']
            ],
            "${_driveBelt}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '146px'],
                ["style", "width", '34px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: true,
            timeline: [
                { id: "eid22", tween: [ "style", "${_belt_flow_src}", "top", '-1px', { fromValue: '-63px'}], position: 0, duration: 867 }            ]
        }
    }
},
"GEAR1_MOVE": {
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
                    id: 'gear1',
                    tag: 'img',
                    rect: ['0px', '0px', '62', '149', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear1.png']
                },
                {
                    type: 'image',
                    id: 'gear_flow_src',
                    tag: 'img',
                    rect: ['0px', '0px', '62', '253', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gear_flow_src}": [
                ["style", "left", '0px'],
                ["style", "top", '-94px']
            ],
            "${_gear1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '149px'],
                ["style", "width", '62px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "style", "${_gear_flow_src}", "top", '0px', { fromValue: '-94px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"GEAR2_MOVE": {
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
                    id: 'gear2',
                    tag: 'img',
                    rect: ['0px', '0px', '66', '124', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear2.png']
                },
                {
                    type: 'image',
                    id: 'gear_flow_src',
                    tag: 'img',
                    rect: ['2px', '0px', '62', '253', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gear_flow_src}": [
                ["style", "left", '2px'],
                ["style", "top", '-94px']
            ],
            "${_gear2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '124px'],
                ["style", "width", '66px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid25", tween: [ "style", "${_gear_flow_src}", "top", '0px', { fromValue: '-94px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"L1_MOVE": {
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
                    id: 'LIQUIDE_DOT_MOVE',
                    type: 'rect',
                    rect: ['3px', '-79', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'LIQUIDE_DOT_MOVE',
                symbolName: 'LIQUIDE_DOT_MOVE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_LIQUIDE_DOT_MOVE}": [
                ["style", "top", '-79px']
            ],
            "${symbolSelector}": [
                ["style", "height", '700px'],
                ["style", "width", '84px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"L2_MOVE": {
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
                    id: 'LIQUIDE_DOT_MOVE2',
                    type: 'rect',
                    rect: ['247px', '-384px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['90']]
                }
            ],
            symbolInstances: [
            {
                id: 'LIQUIDE_DOT_MOVE2',
                symbolName: 'LIQUIDE_DOT_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '51px'],
                ["style", "overflow", 'hidden']
            ],
            "${_LIQUIDE_DOT_MOVE2}": [
                ["style", "top", '-384px'],
                ["style", "left", '247px'],
                ["transform", "rotateZ", '90deg']
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
            ]
        }
    }
},
"L3_MOVE": {
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
                    id: 'LIQUIDE_DOT_MOVE3',
                    type: 'rect',
                    rect: ['-23px', '-86px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                }
            ],
            symbolInstances: [
            {
                id: 'LIQUIDE_DOT_MOVE3',
                symbolName: 'LIQUIDE_DOT_MOVE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '269px'],
                ["style", "width", '21px'],
                ["style", "overflow", 'hidden']
            ],
            "${_LIQUIDE_DOT_MOVE3}": [
                ["style", "top", '-86px'],
                ["style", "left", '-23px'],
                ["transform", "rotateZ", '180deg']
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
            ]
        }
    }
},
"L4_MOVE": {
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
                    id: 'LIQUIDE_DOT_MOVE4',
                    type: 'rect',
                    rect: ['351px', '-385px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['90']]
                }
            ],
            symbolInstances: [
            {
                id: 'LIQUIDE_DOT_MOVE4',
                symbolName: 'LIQUIDE_DOT_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_LIQUIDE_DOT_MOVE4}": [
                ["style", "top", '-385px'],
                ["style", "left", '351px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '664px'],
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
"L5_MOVE": {
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
                    id: 'LIQUIDE_DOT_MOVE5',
                    type: 'rect',
                    rect: ['91px', '-372px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']]
                }
            ],
            symbolInstances: [
            {
                id: 'LIQUIDE_DOT_MOVE5',
                symbolName: 'LIQUIDE_DOT_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_LIQUIDE_DOT_MOVE5}": [
                ["style", "top", '-372px'],
                ["style", "left", '91px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '33px'],
                ["style", "width", '443px'],
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
"L6_MOVE": {
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
                    id: 'LIQUIDE_DOT_MOVE6',
                    type: 'rect',
                    rect: ['2px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                },
                {
                    id: 'LIQUIDE_DOT_MOVE6Copy',
                    type: 'rect',
                    rect: ['118px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                },
                {
                    id: 'LIQUIDE_DOT_MOVE6Copy2',
                    type: 'rect',
                    rect: ['213px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                },
                {
                    id: 'LIQUIDE_DOT_MOVE6Copy3',
                    type: 'rect',
                    rect: ['309px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                }
            ],
            symbolInstances: [
            {
                id: 'LIQUIDE_DOT_MOVE6',
                symbolName: 'LIQUIDE_DOT_MOVE'
            },
            {
                id: 'LIQUIDE_DOT_MOVE6Copy3',
                symbolName: 'LIQUIDE_DOT_MOVE'
            },
            {
                id: 'LIQUIDE_DOT_MOVE6Copy',
                symbolName: 'LIQUIDE_DOT_MOVE'
            },
            {
                id: 'LIQUIDE_DOT_MOVE6Copy2',
                symbolName: 'LIQUIDE_DOT_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_LIQUIDE_DOT_MOVE6Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '309px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '264px'],
                ["style", "width", '443px'],
                ["style", "overflow", 'hidden']
            ],
            "${_LIQUIDE_DOT_MOVE6}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_LIQUIDE_DOT_MOVE6Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '213px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_LIQUIDE_DOT_MOVE6Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '118px'],
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
"L7_MOVE": {
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
                    id: 'LIQUIDE_DOT_MOVE7',
                    type: 'rect',
                    rect: ['-1px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                }
            ],
            symbolInstances: [
            {
                id: 'LIQUIDE_DOT_MOVE7',
                symbolName: 'LIQUIDE_DOT_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_LIQUIDE_DOT_MOVE7}": [
                ["style", "top", '0px'],
                ["style", "left", '-1px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '338px'],
                ["style", "width", '76px'],
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
"L8": {
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
                    id: 'LIQUIDE_DOT_MOVE8',
                    type: 'rect',
                    rect: ['-136px', '-372px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']]
                }
            ],
            symbolInstances: [
            {
                id: 'LIQUIDE_DOT_MOVE8',
                symbolName: 'LIQUIDE_DOT_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_LIQUIDE_DOT_MOVE8}": [
                ["style", "top", '-372px'],
                ["style", "left", '-136px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '292px'],
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
"LIQUIDE_DOT_MOVE": {
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
                    id: 'liquid_dot',
                    type: 'image',
                    rect: ['-77px', '0px', '232px', '794px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_liquid.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_liquid_dot}": [
                ["style", "top", '-15px'],
                ["style", "height", '794px'],
                ["style", "left", '-77px'],
                ["style", "width", '232px']
            ],
            "${symbolSelector}": [
                ["style", "height", '779px'],
                ["style", "width", '77px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid27", tween: [ "style", "${_liquid_dot}", "top", '66px', { fromValue: '-15px'}], position: 0, duration: 750 }            ]
        }
    }
},
"PROPELLER_MOVE": {
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
                    id: 'propeller_down',
                    tag: 'img',
                    rect: ['0px', '136px', '29', '124px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/propeller_down.png']
                },
                {
                    type: 'image',
                    id: 'propeller_up',
                    tag: 'img',
                    rect: ['0px', '-1px', '29', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/propeller_up.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_propeller_up}": [
                ["style", "top", '-1px'],
                ["style", "left", '0px'],
                ["style", "height", '125px']
            ],
            "${_propeller_down}": [
                ["style", "top", '136px'],
                ["style", "left", '0px'],
                ["style", "height", '124px']
            ],
            "${symbolSelector}": [
                ["style", "height", '262px'],
                ["style", "width", '29px']
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
                { id: "eid57", tween: [ "style", "${_propeller_down}", "top", '150px', { fromValue: '136px'}], position: 0, duration: 250 },
                { id: "eid45", tween: [ "style", "${_propeller_down}", "top", '136px', { fromValue: '132px'}], position: 250, duration: 250 },
                { id: "eid58", tween: [ "style", "${_propeller_up}", "top", '132px', { fromValue: '-1px'}], position: 0, duration: 250 },
                { id: "eid50", tween: [ "style", "${_propeller_up}", "top", '-1px', { fromValue: '122px'}], position: 250, duration: 250 },
                { id: "eid59", tween: [ "style", "${_propeller_up}", "height", '5px', { fromValue: '125px'}], position: 0, duration: 250 },
                { id: "eid52", tween: [ "style", "${_propeller_up}", "height", '125px', { fromValue: '1px'}], position: 250, duration: 250 },
                { id: "eid56", tween: [ "style", "${_propeller_down}", "height", '1px', { fromValue: '124px'}], position: 0, duration: 250 },
                { id: "eid47", tween: [ "style", "${_propeller_down}", "height", '124px', { fromValue: '5px'}], position: 250, duration: 250 }            ]
        }
    }
},
"THERMOSTAT": {
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
                    rect: ['0px', '0px', '71', '56', 'auto', 'auto'],
                    id: 'thermostat',
                    fill: ['rgba(0,0,0,0)', 'images/thermostat.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '71', '56', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/thermostat_red40pct.png'],
                    id: 'thermostat_red40pct',
                    opacity: 0.4,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '71', '56', 'auto', 'auto'],
                    id: 'thermostat_white',
                    fill: ['rgba(0,0,0,0)', 'images/thermostat_white.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_thermostat}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '71px']
            ],
            "${_thermostat_white}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_thermostat_red40pct}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid73", tween: [ "style", "${_thermostat_red40pct}", "opacity", '0.6', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid75", tween: [ "style", "${_thermostat_red40pct}", "opacity", '0', { fromValue: '0.6'}], position: 750, duration: 250 },
                { id: "eid70", tween: [ "style", "${_thermostat_white}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid71", tween: [ "style", "${_thermostat_white}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 }            ]
        }
    }
},
"WATER_PUMP": {
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
                    rect: ['0px', '0px', '24', '23', 'auto', 'auto'],
                    id: 'waterPumpWing',
                    fill: ['rgba(0,0,0,0)', 'images/waterPumpWing.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '24', '23', 'auto', 'auto'],
                    id: 'waterPumpWingCopy',
                    fill: ['rgba(0,0,0,0)', 'images/waterPumpWing.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'WATER_PUMP_BODY2',
                    type: 'rect',
                    rect: ['34', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'WATER_PUMP_BODY1',
                    type: 'rect',
                    rect: ['21', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'WATER_PUMP_BODY2',
                symbolName: 'WATER_PUMP_BODY2',
                autoPlay: {

               }
            },
            {
                id: 'WATER_PUMP_BODY1',
                symbolName: 'WATER_PUMP_BODY1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_waterPumpWing}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["style", "height", '23px']
            ],
            "${_waterPumpWingCopy}": [
                ["style", "top", '114px'],
                ["style", "height", '23px'],
                ["transform", "scaleY", '-1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '137px'],
                ["style", "width", '51px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1042,
            autoPlay: true,
            timeline: [
                { id: "eid80", tween: [ "style", "${_waterPumpWing}", "top", '66px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid85", tween: [ "style", "${_waterPumpWing}", "top", '114px', { fromValue: '66px'}], position: 542, duration: 500 },
                { id: "eid81", tween: [ "style", "${_waterPumpWing}", "height", '5px', { fromValue: '23px'}], position: 0, duration: 500 },
                { id: "eid84", tween: [ "style", "${_waterPumpWing}", "height", '23px', { fromValue: '5px'}], position: 542, duration: 500 },
                { id: "eid83", tween: [ "transform", "${_waterPumpWing}", "scaleY", '-1', { fromValue: '1'}], position: 542, duration: 0 },
                { id: "eid92", tween: [ "style", "${_waterPumpWingCopy}", "top", '66px', { fromValue: '114px'}], position: 0, duration: 500 },
                { id: "eid91", tween: [ "style", "${_waterPumpWingCopy}", "top", '0px', { fromValue: '66px'}], position: 542, duration: 500 },
                { id: "eid96", tween: [ "transform", "${_waterPumpWingCopy}", "scaleY", '1', { fromValue: '-1'}], position: 542, duration: 0 },
                { id: "eid94", tween: [ "style", "${_waterPumpWingCopy}", "height", '5px', { fromValue: '23px'}], position: 0, duration: 500 },
                { id: "eid93", tween: [ "style", "${_waterPumpWingCopy}", "height", '23px', { fromValue: '5px'}], position: 542, duration: 500 }            ]
        }
    }
},
"WATER_PUMP_BODY1": {
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
                    rect: ['0px', '0px', '11px', '133px', 'auto', 'auto'],
                    id: 'waterPump_body1',
                    stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(225,240,181,1.00)']
                },
                {
                    id: 'gear_flow_src2',
                    type: 'image',
                    rect: ['-18px', '-96px', '62px', '253px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_flow_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gear_flow_src2}": [
                ["style", "left", '-18px'],
                ["style", "top", '-96px']
            ],
            "${_waterPump_body1}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(225,240,181,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "height", '133px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '11px']
            ],
            "${symbolSelector}": [
                ["style", "height", '137px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '15px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 708,
            autoPlay: true,
            timeline: [
                { id: "eid78", tween: [ "style", "${_gear_flow_src2}", "top", '-30px', { fromValue: '-96px'}], position: 0, duration: 708 }            ]
        }
    }
},
"WATER_PUMP_BODY2": {
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
                    rect: ['0px', '0px', '13px', '133px', 'auto', 'auto'],
                    id: 'waterPump_body2',
                    stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(242,253,209,1.00)']
                },
                {
                    rect: ['-10px', '-54px', '27', '176', 'auto', 'auto'],
                    id: 'crand_flow_src',
                    fill: ['rgba(0,0,0,0)', 'images/crand_flow_src.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crand_flow_src}": [
                ["style", "left", '-10px'],
                ["style", "top", '-41px']
            ],
            "${_waterPump_body2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '133px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '137px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '17px']
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
                { id: "eid79", tween: [ "style", "${_crand_flow_src}", "top", '-6px', { fromValue: '-41px'}], position: 0, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-9031664");
