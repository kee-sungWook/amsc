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
                id: 'L8',
                type: 'rect',
                rect: ['701px', '133px','auto','auto','auto', 'auto']
            },
            {
                id: 'hot_liquid',
                type: 'image',
                rect: ['259px', '177px','818px','622px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hot_liquid.png",'0px','0px']
            },
            {
                id: 'L7_MOVE',
                type: 'rect',
                rect: ['701px', '178px','auto','auto','auto', 'auto']
            },
            {
                id: 'L6_MOVE',
                type: 'rect',
                rect: ['259px', '252px','auto','auto','auto', 'auto']
            },
            {
                id: 'L5_MOVE',
                type: 'rect',
                rect: ['259px', '220px','auto','auto','auto', 'auto']
            },
            {
                id: 'L4_MOVE',
                type: 'rect',
                rect: ['259px', '515px','auto','auto','auto', 'auto']
            },
            {
                id: 'L3_MOVE',
                type: 'rect',
                rect: ['922px', '515px','auto','auto','auto', 'auto']
            },
            {
                id: 'L2_MOVE',
                type: 'rect',
                rect: ['942px', '761px','auto','auto','auto', 'auto']
            },
            {
                id: 'L1_MOVE',
                type: 'rect',
                rect: ['992px', '178px','auto','auto','auto', 'auto']
            },
            {
                id: 'back',
                type: 'image',
                tag: 'img',
                rect: ['153px', '88px','933','729','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back.png"]
            },
            {
                id: 'RETURN_SP_MOVE',
                type: 'rect',
                rect: ['705px', '217px','auto','auto','auto', 'auto']
            },
            {
                id: 'PROPELLER_MOVE',
                type: 'rect',
                rect: ['890px', '264px','auto','auto','auto', 'auto']
            },
            {
                id: 'GEAR2_MOVE',
                type: 'rect',
                rect: ['793px', '591px','auto','auto','auto', 'auto']
            },
            {
                id: 'GEAR1_MOVE',
                type: 'rect',
                rect: ['793px', '321px','auto','auto','auto', 'auto']
            },
            {
                id: 'DRIVE_BELT_MOVE',
                type: 'rect',
                rect: ['853px', '581px','auto','auto','auto', 'auto']
            },
            {
                id: 'TIMING_BELT_MOVE',
                type: 'rect',
                rect: ['808px', '314px','auto','auto','auto', 'auto']
            },
            {
                id: 'CRANK_P2_MOVE',
                type: 'rect',
                rect: ['166px', '575px','auto','auto','auto', 'auto']
            },
            {
                id: 'CRANK_P1_MOVE',
                type: 'rect',
                rect: ['188px', '591px','auto','auto','auto', 'auto']
            },
            {
                id: 'PISTON_MOVE',
                type: 'rect',
                rect: ['292px', '327px','auto','auto','auto', 'auto']
            },
            {
                id: 'WATER_PUMP',
                type: 'rect',
                rect: ['597', '429','auto','auto','auto', 'auto']
            },
            {
                id: 'front_component',
                type: 'image',
                tag: 'img',
                rect: ['270px', '220px','791','520','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"front_component.png"]
            },
            {
                id: 'radiator',
                type: 'image',
                tag: 'img',
                rect: ['1523px', '171px','680','622','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator.png"]
            },
            {
                id: 'arrow',
                type: 'image',
                tag: 'img',
                rect: ['1055px', '376px','394','150','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['237px', '862px','404','86','auto', 'auto'],
                text: "부동액이란",
                align: "auto",
                font: ['굴림', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['236px', '997px','1924','230','auto', 'auto'],
                text: "부동액이란 겨울철에 냉각수의 빙결을 방지할 목적으로 주입하며 빙결,방청등의 역할을 합니다.<br>부동액이 부족하면 냉각수 온도상승의 요인이 될 수 있습니다.<br>부동액은 2년에 한번씩 교체해주어야 냉각수 오염 및 냉각라인의 오염을 방지할 수 있습니다.<br>",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'CRANK_P1_MOVE',
                symbolName: 'CRANK_P1_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'RETURN_SP_MOVE',
                symbolName: 'RETURN_SP_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'CRANK_P2_MOVE',
                symbolName: 'CRANK_P2_MOVE',
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
                id: 'L8',
                symbolName: 'L8',
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
                id: 'TIMING_BELT_MOVE',
                symbolName: 'TIMING_BELT_MOVE',
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
            "${_L6_MOVE}": [
                ["style", "left", '259px'],
                ["style", "top", '252px']
            ],
            "${_WATER_PUMP}": [
                ["style", "left", '713px'],
                ["style", "top", '332px']
            ],
            "${_L1_MOVE}": [
                ["style", "left", '992px'],
                ["style", "top", '178px']
            ],
            "${_txt2}": [
                ["style", "top", '977px'],
                ["style", "opacity", '0'],
                ["style", "left", '236px'],
                ["style", "line-height", '60px']
            ],
            "${_L3_MOVE}": [
                ["style", "left", '922px'],
                ["style", "top", '515px']
            ],
            "${_txt1}": [
                ["style", "top", '842px'],
                ["style", "opacity", '0'],
                ["style", "left", '237px']
            ],
            "${_PROPELLER_MOVE}": [
                ["style", "left", '890px'],
                ["style", "top", '264px']
            ],
            "${_hot_liquid}": [
                ["style", "left", '259px'],
                ["style", "top", '177px']
            ],
            "${_DRIVE_BELT_MOVE}": [
                ["style", "left", '853px'],
                ["style", "top", '581px']
            ],
            "${_CRANK_P1_MOVE}": [
                ["style", "left", '188px'],
                ["style", "top", '591px']
            ],
            "${_RETURN_SP_MOVE}": [
                ["style", "left", '705px'],
                ["style", "top", '217px']
            ],
            "${_L4_MOVE}": [
                ["style", "left", '259px'],
                ["style", "top", '515px']
            ],
            "${_CRANK_P2_MOVE}": [
                ["style", "left", '166px'],
                ["style", "top", '575px']
            ],
            "${_L2_MOVE}": [
                ["style", "left", '942px'],
                ["style", "top", '761px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_GEAR1_MOVE}": [
                ["style", "top", '321px'],
                ["style", "left", '793px']
            ],
            "${_front_component}": [
                ["style", "left", '270px'],
                ["style", "top", '220px']
            ],
            "${_GEAR2_MOVE}": [
                ["style", "left", '793px'],
                ["style", "top", '591px']
            ],
            "${_L7_MOVE}": [
                ["style", "left", '701px'],
                ["style", "top", '178px']
            ],
            "${_L5_MOVE}": [
                ["style", "left", '259px'],
                ["style", "top", '220px']
            ],
            "${_back}": [
                ["style", "left", '153px'],
                ["style", "top", '88px']
            ],
            "${_PISTON_MOVE}": [
                ["style", "left", '292px'],
                ["style", "top", '327px']
            ],
            "${_TIMING_BELT_MOVE}": [
                ["style", "left", '808px'],
                ["style", "top", '314px']
            ],
            "${_arrow}": [
                ["style", "top", '376px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '1025px']
            ],
            "${_radiator}": [
                ["style", "top", '171px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '1523px']
            ],
            "${_L8}": [
                ["style", "left", '701px'],
                ["style", "top", '133px']
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
                { id: "eid146", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 1167, duration: 333 },
                { id: "eid143", tween: [ "style", "${_txt2}", "top", '997px', { fromValue: '977px'}], position: 1000, duration: 375 },
                { id: "eid130", tween: [ "transform", "${_arrow}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 333 },
                { id: "eid128", tween: [ "style", "${_radiator}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 334 },
                { id: "eid134", tween: [ "style", "${_arrow}", "left", '1055px', { fromValue: '1025px'}], position: 500, duration: 333 },
                { id: "eid132", tween: [ "transform", "${_arrow}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 333 },
                { id: "eid144", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 375 },
                { id: "eid138", tween: [ "transform", "${_radiator}", "scaleY", '1', { fromValue: '0.9'}], position: 750, duration: 334 },
                { id: "eid145", tween: [ "style", "${_txt1}", "top", '862px', { fromValue: '842px'}], position: 1167, duration: 333 },
                { id: "eid136", tween: [ "transform", "${_radiator}", "scaleX", '1', { fromValue: '0.9'}], position: 750, duration: 334 },
                { id: "eid127", tween: [ "style", "${_arrow}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 333 }            ]
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
                    rect: ['106px', '90px', '202', '311', 'auto', 'auto'],
                    id: 'piston2',
                    fill: ['rgba(0,0,0,0)', 'images/piston2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['320px', '0px', '95', '310', 'auto', 'auto'],
                    id: 'pistonExtra',
                    fill: ['rgba(0,0,0,0)', 'images/pistonExtra.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '92', '310', 'auto', 'auto'],
                    id: 'piston1',
                    fill: ['rgba(0,0,0,0)', 'images/piston1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '401px'],
                ["style", "width", '415px']
            ],
            "${_piston1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_pistonExtra}": [
                ["style", "left", '320px'],
                ["style", "top", '0px']
            ],
            "${_piston2}": [
                ["style", "left", '106px'],
                ["style", "top", '90px']
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
"RETURN_SP_MOVE": {
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
                    rect: ['0px', '0px', '51', '55', 'auto', 'auto'],
                    id: 'return_sp',
                    fill: ['rgba(0,0,0,0)', 'images/return_sp.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_return_sp}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '55px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '55px'],
                ["style", "width", '51px']
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
                { id: "eid11", tween: [ "style", "${_return_sp}", "height", '39px', { fromValue: '55px'}], position: 0, duration: 500 },
                { id: "eid16", tween: [ "style", "${_return_sp}", "height", '55px', { fromValue: '39px'}], position: 500, duration: 500 },
                { id: "eid12", tween: [ "style", "${_return_sp}", "top", '16px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid15", tween: [ "style", "${_return_sp}", "top", '0px', { fromValue: '16px'}], position: 500, duration: 500 }            ]
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
                    type: 'image',
                    id: 'crank_p1',
                    tag: 'img',
                    rect: ['0px', '0px', '29', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crank_p1.png']
                },
                {
                    type: 'image',
                    id: 'crand_flow_src',
                    tag: 'img',
                    rect: ['1px', '-54px', '27', '176', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crand_flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crand_flow_src}": [
                ["style", "left", '1px'],
                ["style", "top", '-54px']
            ],
            "${_crank_p1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '125px'],
                ["style", "width", '29px'],
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
            "${_gear_flow_src2}": [
                ["style", "left", '-18px'],
                ["style", "top", '-96px']
            ],
            "${_crank_p2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '157px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '25px']
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
                    rect: ['0px', '0px', '34', '414', 'auto', 'auto'],
                    id: 'timingBelt',
                    fill: ['rgba(0,0,0,0)', 'images/timingBelt.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['4px', '-1px', '25', '490', 'auto', 'auto'],
                    id: 'belt_flow_src',
                    fill: ['rgba(0,0,0,0)', 'images/belt_flow_src.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_timingBelt}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_belt_flow_src}": [
                ["style", "left", '4px'],
                ["style", "top", '-63px']
            ],
            "${symbolSelector}": [
                ["style", "height", '414px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '34px']
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
                    rect: ['0px', '0px', '34', '146', 'auto', 'auto'],
                    id: 'driveBelt',
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['4px', '-1px', '25', '490', 'auto', 'auto'],
                    id: 'belt_flow_src',
                    fill: ['rgba(0,0,0,0)', 'images/belt_flow_src.png'],
                    type: 'image',
                    tag: 'img'
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '34px']
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
                    rect: ['0px', '0px', '62', '149', 'auto', 'auto'],
                    id: 'gear1',
                    fill: ['rgba(0,0,0,0)', 'images/gear1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '62', '253', 'auto', 'auto'],
                    id: 'gear_flow_src',
                    fill: ['rgba(0,0,0,0)', 'images/gear_flow_src.png'],
                    type: 'image',
                    tag: 'img'
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '62px']
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
                    rect: ['0px', '0px', '66', '124', 'auto', 'auto'],
                    id: 'gear2',
                    fill: ['rgba(0,0,0,0)', 'images/gear2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['2px', '0px', '62', '253', 'auto', 'auto'],
                    id: 'gear_flow_src',
                    fill: ['rgba(0,0,0,0)', 'images/gear_flow_src.png'],
                    type: 'image',
                    tag: 'img'
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
            "${symbolSelector}": [
                ["style", "height", '124px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '66px']
            ],
            "${_gear2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                    rect: ['3', '-79', 'auto', 'auto', 'auto', 'auto']
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
            "${symbolSelector}": [
                ["style", "height", '620px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '84px']
            ],
            "${_LIQUIDE_DOT_MOVE}": [
                ["style", "top", '-79px']
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
                    transform: [[0, 0], ['90']],
                    rect: ['247px', '-384px', 'auto', 'auto', 'auto', 'auto']
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
            "${_LIQUIDE_DOT_MOVE2}": [
                ["style", "top", '-384px'],
                ["style", "left", '247px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '51px']
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
                    transform: [[0, 0], ['180']],
                    rect: ['-23px', '-86px', 'auto', 'auto', 'auto', 'auto']
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
            "${_LIQUIDE_DOT_MOVE3}": [
                ["style", "top", '-86px'],
                ["style", "left", '-23px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '269px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '21px']
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
                    transform: [[0, 0], ['90']],
                    rect: ['351px', '-385px', 'auto', 'auto', 'auto', 'auto']
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '664px']
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
                    transform: [[0, 0], ['-90']],
                    rect: ['91px', '-372px', 'auto', 'auto', 'auto', 'auto']
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
            "${symbolSelector}": [
                ["style", "height", '33px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '443px']
            ],
            "${_LIQUIDE_DOT_MOVE5}": [
                ["style", "top", '-372px'],
                ["style", "left", '91px'],
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
                    transform: [[0, 0], ['180']],
                    rect: ['2px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'LIQUIDE_DOT_MOVE6Copy',
                    type: 'rect',
                    transform: [[0, 0], ['180']],
                    rect: ['118px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'LIQUIDE_DOT_MOVE6Copy2',
                    type: 'rect',
                    transform: [[0, 0], ['180']],
                    rect: ['213px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'LIQUIDE_DOT_MOVE6Copy3',
                    type: 'rect',
                    transform: [[0, 0], ['180']],
                    rect: ['309px', '0px', 'auto', 'auto', 'auto', 'auto']
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
            "${_LIQUIDE_DOT_MOVE6Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '213px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '264px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '443px']
            ],
            "${_LIQUIDE_DOT_MOVE6}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_LIQUIDE_DOT_MOVE6Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '118px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_LIQUIDE_DOT_MOVE6Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '309px'],
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
                    transform: [[0, 0], ['180']],
                    rect: ['-1px', '0px', 'auto', 'auto', 'auto', 'auto']
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '76px']
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
                    rect: ['-221px', '18px', '750px', '33px', 'auto', 'auto'],
                    transform: [[], [], [], [], ['50%', '100%']],
                    id: 'wave_liquid',
                    opacity: 0.5,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/wave_liquid.png', '0px', '0px']
                },
                {
                    rect: ['-248px', '18px', '750px', '33px', 'auto', 'auto'],
                    id: 'wave_liquidCopy2',
                    opacity: 0.5,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/wave_liquid.png', '0px', '0px']
                },
                {
                    rect: ['-178px', '18px', '750px', '33px', 'auto', 'auto'],
                    id: 'wave_liquidCopy3',
                    opacity: 0.5,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/wave_liquid.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '374px']
            ],
            "${_wave_liquidCopy3}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '28px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '-178px'],
                ["style", "top", '23px']
            ],
            "${_wave_liquidCopy2}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '33px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '-248px'],
                ["style", "top", '18px']
            ],
            "${_wave_liquid}": [
                ["style", "top", '18px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '-221px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1292,
            autoPlay: true,
            timeline: [
                { id: "eid112", tween: [ "style", "${_wave_liquidCopy3}", "height", '33px', { fromValue: '28px'}], position: 0, duration: 250 },
                { id: "eid118", tween: [ "style", "${_wave_liquidCopy3}", "height", '28px', { fromValue: '33px'}], position: 250, duration: 250 },
                { id: "eid108", tween: [ "style", "${_wave_liquidCopy2}", "height", '28px', { fromValue: '33px'}], position: 0, duration: 250 },
                { id: "eid120", tween: [ "style", "${_wave_liquidCopy2}", "height", '33px', { fromValue: '28px'}], position: 250, duration: 250 },
                { id: "eid113", tween: [ "style", "${_wave_liquidCopy3}", "top", '18px', { fromValue: '23px'}], position: 0, duration: 250 },
                { id: "eid119", tween: [ "style", "${_wave_liquidCopy3}", "top", '23px', { fromValue: '18px'}], position: 250, duration: 250 },
                { id: "eid109", tween: [ "style", "${_wave_liquidCopy2}", "top", '23px', { fromValue: '18px'}], position: 0, duration: 250 },
                { id: "eid121", tween: [ "style", "${_wave_liquidCopy2}", "top", '18px', { fromValue: '23px'}], position: 250, duration: 250 }            ]
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
                    rect: ['0px', '0px', '77px', '779px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/liquid_dot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_liquid_dot}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '779px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '77px']
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
                { id: "eid27", tween: [ "style", "${_liquid_dot}", "top", '68px', { fromValue: '0px'}], position: 0, duration: 750 }            ]
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
                    rect: ['0px', '136px', '29', '124px', 'auto', 'auto'],
                    id: 'propeller_down',
                    fill: ['rgba(0,0,0,0)', 'images/propeller_down.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '-1px', '29', '125', 'auto', 'auto'],
                    id: 'propeller_up',
                    fill: ['rgba(0,0,0,0)', 'images/propeller_up.png'],
                    type: 'image',
                    tag: 'img'
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
                { id: "eid58", tween: [ "style", "${_propeller_up}", "top", '132px', { fromValue: '-1px'}], position: 0, duration: 250 },
                { id: "eid50", tween: [ "style", "${_propeller_up}", "top", '-1px', { fromValue: '122px'}], position: 250, duration: 250 },
                { id: "eid57", tween: [ "style", "${_propeller_down}", "top", '150px', { fromValue: '136px'}], position: 0, duration: 250 },
                { id: "eid45", tween: [ "style", "${_propeller_down}", "top", '136px', { fromValue: '132px'}], position: 250, duration: 250 },
                { id: "eid59", tween: [ "style", "${_propeller_up}", "height", '5px', { fromValue: '125px'}], position: 0, duration: 250 },
                { id: "eid52", tween: [ "style", "${_propeller_up}", "height", '125px', { fromValue: '1px'}], position: 250, duration: 250 },
                { id: "eid56", tween: [ "style", "${_propeller_down}", "height", '1px', { fromValue: '124px'}], position: 0, duration: 250 },
                { id: "eid47", tween: [ "style", "${_propeller_down}", "height", '124px', { fromValue: '5px'}], position: 250, duration: 250 }            ]
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
                    type: 'image',
                    id: 'waterPumpWing',
                    tag: 'img',
                    rect: ['0px', '0px', '24', '23', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/waterPumpWing2.png']
                },
                {
                    type: 'image',
                    id: 'waterPumpWingCopy',
                    tag: 'img',
                    rect: ['0px', '0px', '24', '23', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/waterPumpWing2.png']
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
                ["style", "height", '23px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '0px']
            ],
            "${_waterPumpWingCopy}": [
                ["style", "height", '23px'],
                ["style", "top", '114px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '-1']
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
                    type: 'rect',
                    id: 'waterPump_body1',
                    stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                    rect: ['0px', '0px', '11px', '133px', 'auto', 'auto'],
                    fill: ['rgba(225,240,181,1.00)']
                },
                {
                    id: 'gear_flow_src2',
                    type: 'image',
                    rect: ['-18px', '-96px', '62px', '253px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_flow_src2.png', '0px', '0px']
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
                    type: 'rect',
                    id: 'waterPump_body2',
                    stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                    rect: ['0px', '0px', '13px', '133px', 'auto', 'auto'],
                    fill: ['rgba(242,253,209,1.00)']
                },
                {
                    type: 'image',
                    id: 'crand_flow_src',
                    tag: 'img',
                    rect: ['-10px', '-54px', '27', '176', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crand_flow_src2.png']
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
