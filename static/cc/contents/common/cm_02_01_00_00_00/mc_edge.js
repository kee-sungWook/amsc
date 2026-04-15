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
                id: 'BACK',
                type: 'image',
                tag: 'img',
                rect: ['186px', '46','439','842','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BACK.png"]
            },
            {
                id: 'moving_parts',
                type: 'rect',
                rect: ['145px', '159','auto','auto','auto', 'auto']
            },
            {
                id: 'BACK-TOP',
                type: 'image',
                tag: 'img',
                rect: ['206px', '239','158','463','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BACK-TOP.png"]
            },
            {
                id: 'oilLine_back',
                type: 'image',
                tag: 'img',
                rect: ['356px', '716','694','389','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilLine_back.png"]
            },
            {
                id: 'M_cylinder_oil1',
                type: 'image',
                tag: 'img',
                rect: ['907px', '588','323','101','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"M_cylinder_oil1.png"]
            },
            {
                id: 'oilColorMovie',
                type: 'rect',
                rect: ['356px', '598','auto','auto','auto', 'auto']
            },
            {
                id: 'oilFlowAreas',
                type: 'rect',
                rect: ['355px', '716','auto','auto','auto', 'auto']
            },
            {
                id: 'oilLine',
                type: 'image',
                tag: 'img',
                rect: ['458px', '712','598','249','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilLine.png"]
            },
            {
                id: 'o_cylinder_sub',
                type: 'rect',
                rect: ['160px', '1013','auto','auto','auto', 'auto']
            },
            {
                id: 'o_cylinder',
                type: 'image',
                tag: 'img',
                rect: ['294px', '931','265','253','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"o_cylinder.png"]
            },
            {
                id: 'M_cylinder',
                type: 'image',
                tag: 'img',
                rect: ['908px', '528','340','192','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"M_cylinder.png"]
            },
            {
                id: 'pedal_piston',
                type: 'rect',
                rect: ['1009px', '511','auto','auto','auto', 'auto']
            },
            {
                id: 'oilCask',
                type: 'image',
                tag: 'img',
                rect: ['767px', '181','346','442','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilCask.png"]
            }],
            symbolInstances: [
            {
                id: 'o_cylinder_sub',
                symbolName: 'o_cylinder_sub',
                autoPlay: {

                }
            },
            {
                id: 'pedal_piston',
                symbolName: 'pedal_piston',
                autoPlay: {

                }
            },
            {
                id: 'oilFlowAreas',
                symbolName: 'oilFlowAreas',
                autoPlay: {

                }
            },
            {
                id: 'moving_parts',
                symbolName: 'moving_parts',
                autoPlay: {

                }
            },
            {
                id: 'oilColorMovie',
                symbolName: 'oilColorMovie',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_oilCask}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '767px']
            ],
            "${_BACK}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '186px']
            ],
            "${_M_cylinder}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '908px']
            ],
            "${_oilColorMovie}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '356px']
            ],
            "${_oilLine_back}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '356px']
            ],
            "${_o_cylinder_sub}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '160px']
            ],
            "${_M_cylinder_oil1}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '907px']
            ],
            "${_pedal_piston}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '1009px']
            ],
            "${_BACK-TOP}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '206px']
            ],
            "${_o_cylinder}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '294px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_oilFlowAreas}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '355px']
            ],
            "${_moving_parts}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '145px']
            ],
            "${_oilLine}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '458px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1367,
            autoPlay: true,
            timeline: [
                { id: "eid146", tween: [ "transform", "${_oilColorMovie}", "scaleX", '1', { fromValue: '0.95'}], position: 600, duration: 500, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "style", "${_oilLine}", "opacity", '1', { fromValue: '0'}], position: 533, duration: 500, easing: "easeOutQuad" },
                { id: "eid122", tween: [ "transform", "${_o_cylinder}", "scaleX", '1', { fromValue: '0.95'}], position: 333, duration: 500, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_BACK-TOP}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 500, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_o_cylinder}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 500, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "transform", "${_oilCask}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid134", tween: [ "transform", "${_BACK}", "scaleX", '1', { fromValue: '0.95'}], position: 233, duration: 500, easing: "easeOutQuad" },
                { id: "eid116", tween: [ "transform", "${_M_cylinder_oil1}", "scaleY", '1', { fromValue: '0.95'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid126", tween: [ "transform", "${_oilLine}", "scaleX", '1', { fromValue: '0.95'}], position: 533, duration: 500, easing: "easeOutQuad" },
                { id: "eid140", tween: [ "transform", "${_moving_parts}", "scaleY", '1', { fromValue: '0.95'}], position: 433, duration: 500, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "style", "${_oilFlowAreas}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 500, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "transform", "${_BACK-TOP}", "scaleY", '1', { fromValue: '0.95'}], position: 267, duration: 500, easing: "easeOutQuad" },
                { id: "eid120", tween: [ "transform", "${_pedal_piston}", "scaleY", '1', { fromValue: '0.95'}], position: 167, duration: 500, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "style", "${_oilLine_back}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 500, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "style", "${_BACK}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 500, easing: "easeOutQuad" },
                { id: "eid130", tween: [ "transform", "${_oilLine_back}", "scaleX", '1', { fromValue: '0.95'}], position: 367, duration: 500, easing: "easeOutQuad" },
                { id: "eid114", tween: [ "transform", "${_M_cylinder_oil1}", "scaleX", '1', { fromValue: '0.95'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_pedal_piston}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 500, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "transform", "${_oilCask}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid118", tween: [ "transform", "${_pedal_piston}", "scaleX", '1', { fromValue: '0.95'}], position: 167, duration: 500, easing: "easeOutQuad" },
                { id: "eid106", tween: [ "transform", "${_o_cylinder_sub}", "scaleX", '1', { fromValue: '0.95'}], position: 433, duration: 500, easing: "easeOutQuad" },
                { id: "eid78", tween: [ "style", "${_oilCask}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${_oilColorMovie}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 500, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "transform", "${_M_cylinder}", "scaleX", '1', { fromValue: '0.95'}], position: 267, duration: 500, easing: "easeOutQuad" },
                { id: "eid104", tween: [ "transform", "${_M_cylinder}", "scaleY", '1', { fromValue: '0.95'}], position: 267, duration: 500, easing: "easeOutQuad" },
                { id: "eid124", tween: [ "transform", "${_o_cylinder}", "scaleY", '1', { fromValue: '0.95'}], position: 333, duration: 500, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_M_cylinder_oil1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid148", tween: [ "transform", "${_oilColorMovie}", "scaleY", '1', { fromValue: '0.95'}], position: 600, duration: 500, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "style", "${_o_cylinder_sub}", "opacity", '1', { fromValue: '0'}], position: 433, duration: 500, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "transform", "${_oilFlowAreas}", "scaleX", '1', { fromValue: '0.95'}], position: 600, duration: 500, easing: "easeOutQuad" },
                { id: "eid128", tween: [ "transform", "${_oilLine}", "scaleY", '1', { fromValue: '0.95'}], position: 533, duration: 500, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "transform", "${_oilFlowAreas}", "scaleY", '1', { fromValue: '0.95'}], position: 600, duration: 500, easing: "easeOutQuad" },
                { id: "eid142", tween: [ "transform", "${_BACK-TOP}", "scaleX", '1', { fromValue: '0.95'}], position: 267, duration: 500, easing: "easeOutQuad" },
                { id: "eid138", tween: [ "transform", "${_moving_parts}", "scaleX", '1', { fromValue: '0.95'}], position: 433, duration: 500, easing: "easeOutQuad" },
                { id: "eid136", tween: [ "transform", "${_BACK}", "scaleY", '1', { fromValue: '0.95'}], position: 233, duration: 500, easing: "easeOutQuad" },
                { id: "eid132", tween: [ "transform", "${_oilLine_back}", "scaleY", '1', { fromValue: '0.95'}], position: 367, duration: 500, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "transform", "${_o_cylinder_sub}", "scaleY", '1', { fromValue: '0.95'}], position: 433, duration: 500, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "style", "${_M_cylinder}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 500, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_moving_parts}", "opacity", '1', { fromValue: '0'}], position: 433, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"oilFlowAreas": {
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
                    id: 'oilFlowAreaSub5',
                    type: 'rect',
                    rect: ['0', '325', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'oilFlowAreaSub4',
                    type: 'rect',
                    rect: ['142', '287', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'oilFlowAreaSub3',
                    type: 'rect',
                    rect: ['109', '183', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'oilFlowAreaSub2',
                    type: 'rect',
                    rect: ['127', '178', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'oilFlowAreaSub1',
                    type: 'rect',
                    rect: ['676', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'oilFlowAreaSub5',
                symbolName: 'oilFlowAreaSub5'
            },
            {
                id: 'oilFlowAreaSub2',
                symbolName: 'oilFlowAreaSub2'
            },
            {
                id: 'oilFlowAreaSub3',
                symbolName: 'oilFlowAreaSub3'
            },
            {
                id: 'oilFlowAreaSub1',
                symbolName: 'oilFlowAreaSub1'
            },
            {
                id: 'oilFlowAreaSub4',
                symbolName: 'oilFlowAreaSub4'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '389px'],
                ["style", "width", '695px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"oilFlowAreaSub1": {
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
                    id: 'blueDot',
                    rect: ['-286px', '-149px', '592px', '61px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/blueDot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blueDot}": [
                ["style", "top", '-149px'],
                ["style", "left", '-286px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '179px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '19px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid7", tween: [ "style", "${_blueDot}", "top", '-126px', { fromValue: '-149px'}], position: 0, duration: 1000 },
                { id: "eid59", tween: [ "style", "${_blueDot}", "top", '-149px', { fromValue: '-126px'}], position: 1500, duration: 1000 }            ]
        }
    }
},
"oilFlowAreaSub2": {
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
                    id: 'blueDot2',
                    type: 'image',
                    rect: ['0px', '-21px', '592px', '61px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blueDot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blueDot2}": [
                ["style", "left", '0px'],
                ["style", "top", '-21px']
            ],
            "${symbolSelector}": [
                ["style", "height", '19px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '568px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid8", tween: [ "style", "${_blueDot2}", "left", '-23px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid61", tween: [ "style", "${_blueDot2}", "left", '0px', { fromValue: '-23px'}], position: 1500, duration: 1000 }            ]
        }
    }
},
"oilFlowAreaSub3": {
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
                    id: 'blueDot3',
                    rect: ['-286px', '-272px', '592px', '61px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/blueDot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blueDot3}": [
                ["style", "top", '-272px'],
                ["style", "left", '-286px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '19px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid9", tween: [ "style", "${_blueDot3}", "top", '-249px', { fromValue: '-272px'}], position: 0, duration: 1000 },
                { id: "eid63", tween: [ "style", "${_blueDot3}", "top", '-272px', { fromValue: '-249px'}], position: 1500, duration: 1000 }            ]
        }
    }
},
"oilFlowAreaSub4": {
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
                    id: 'blueDot4',
                    rect: ['-387px', '-258px', '592px', '61px', 'auto', 'auto'],
                    transform: [[0, 0], ['65']],
                    fill: ['rgba(0,0,0,0)', 'images/blueDot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blueDot4}": [
                ["style", "top", '-258px'],
                ["style", "left", '-386px'],
                ["transform", "rotateZ", '65deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '43px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid10", tween: [ "style", "${_blueDot4}", "left", '-377px', { fromValue: '-386px'}], position: 0, duration: 1000 },
                { id: "eid67", tween: [ "style", "${_blueDot4}", "left", '-386px', { fromValue: '-377px'}], position: 1500, duration: 1000 },
                { id: "eid11", tween: [ "style", "${_blueDot4}", "top", '-237px', { fromValue: '-258px'}], position: 0, duration: 1000 },
                { id: "eid66", tween: [ "style", "${_blueDot4}", "top", '-258px', { fromValue: '-237px'}], position: 1500, duration: 1000 }            ]
        }
    }
},
"oilFlowAreaSub5": {
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
                    id: 'blueDot5',
                    type: 'image',
                    rect: ['2px', '1px', '592px', '61px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blueDot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blueDot5}": [
                ["style", "left", '2px'],
                ["style", "top", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '191px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid12", tween: [ "style", "${_blueDot5}", "left", '-21px', { fromValue: '2px'}], position: 0, duration: 1000 },
                { id: "eid70", tween: [ "style", "${_blueDot5}", "left", '2px', { fromValue: '-21px'}], position: 1500, duration: 1000 }            ]
        }
    }
},
"oilColorMovie": {
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
                    rect: ['0px', '118px', '694', '389', 'auto', 'auto'],
                    id: 'oilLine_back2',
                    fill: ['rgba(0,0,0,0)', 'images/oilLine_back2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['626px', '0px', '77', '91', 'auto', 'auto'],
                    id: 'M_cylinder_oil2',
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_oil2.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_M_cylinder_oil2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '626px']
            ],
            "${symbolSelector}": [
                ["style", "height", '507px'],
                ["style", "width", '703px']
            ],
            "${_oilLine_back2}": [
                ["style", "top", '118px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid14", tween: [ "style", "${_M_cylinder_oil2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid150", tween: [ "style", "${_M_cylinder_oil2}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1000 },
                { id: "eid153", tween: [ "style", "${_oilLine_back2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid156", tween: [ "style", "${_oilLine_back2}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1000 }            ]
        }
    }
},
"pedal_piston": {
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
                    fill: ['rgba(0,0,0,0)', 'images/pedal.png'],
                    id: 'pedal',
                    rect: ['474px', '0px', '316', '510', 'auto', 'auto'],
                    transform: [],
                    tag: 'img'
                },
                {
                    rect: ['0px', '86px', '91', '49', 'auto', 'auto'],
                    id: 'piston_head',
                    fill: ['rgba(0,0,0,0)', 'images/piston_head.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['88px', '71px', '477', '79', 'auto', 'auto'],
                    id: 'piston_body',
                    fill: ['rgba(0,0,0,0)', 'images/piston_body.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_piston_body}": [
                ["style", "left", '88px'],
                ["style", "top", '71px']
            ],
            "${_piston_head}": [
                ["style", "left", '0px'],
                ["style", "top", '86px']
            ],
            "${_pedal}": [
                ["style", "-webkit-transform-origin", [12.5,6.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [12.5,6.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [12.5,6.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [12.5,6.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [12.5,6.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '474px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '510px'],
                ["style", "width", '790px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid17", tween: [ "style", "${_piston_head}", "left", '-27px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid30", tween: [ "style", "${_piston_head}", "left", '0px', { fromValue: '-27px'}], position: 3000, duration: 500 },
                { id: "eid158", tween: [ "style", "${_piston_head}", "left", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
                { id: "eid19", tween: [ "transform", "${_pedal}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid21", tween: [ "transform", "${_pedal}", "rotateZ", '49deg', { fromValue: '23deg'}], position: 500, duration: 1000 },
                { id: "eid24", tween: [ "transform", "${_pedal}", "rotateZ", '23deg', { fromValue: '49deg'}], position: 2000, duration: 1000 },
                { id: "eid32", tween: [ "transform", "${_pedal}", "rotateZ", '0deg', { fromValue: '23deg'}], position: 3000, duration: 500 },
                { id: "eid159", tween: [ "transform", "${_pedal}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_piston_body}", "left", '61px', { fromValue: '88px'}], position: 0, duration: 500 },
                { id: "eid20", tween: [ "style", "${_piston_body}", "left", '11px', { fromValue: '61px'}], position: 500, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_piston_body}", "left", '61px', { fromValue: '11px'}], position: 2000, duration: 1000 },
                { id: "eid31", tween: [ "style", "${_piston_body}", "left", '88px', { fromValue: '61px'}], position: 3000, duration: 500 },
                { id: "eid157", tween: [ "style", "${_piston_body}", "left", '88px', { fromValue: '88px'}], position: 4000, duration: 0 }            ]
        }
    }
},
"moving_parts": {
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
                    rect: ['199px', '0px', '60', '657', 'auto', 'auto'],
                    id: 'disk',
                    fill: ['rgba(0,0,0,0)', 'images/disk.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/pan_axle2.png'],
                    id: 'pan_axle2',
                    rect: ['175px', '362px', '27', '230', 'auto', 'auto'],
                    transform: [],
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/pan_axle1.png'],
                    id: 'pan_axle1',
                    rect: ['175px', '30px', '27', '230', 'auto', 'auto'],
                    transform: [],
                    tag: 'img'
                },
                {
                    rect: ['104px', '215px', '99', '188', 'auto', 'auto'],
                    id: 'bearing',
                    fill: ['rgba(0,0,0,0)', 'images/bearing.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/moving_axle.png'],
                    id: 'moving_axle',
                    rect: ['0px', '275px', '153', '676', 'auto', 'auto'],
                    transform: [],
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_disk}": [
                ["style", "left", '199px'],
                ["style", "top", '0px']
            ],
            "${_pan_axle1}": [
                ["style", "top", '30px'],
                ["style", "-webkit-transform-origin", [78,37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78,37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78,37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78,37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78,37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '175px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_pan_axle2}": [
                ["style", "top", '362px'],
                ["style", "-webkit-transform-origin", [77,66], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '175px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '951px'],
                ["style", "width", '259px']
            ],
            "${_moving_axle}": [
                ["style", "top", '275px'],
                ["style", "-webkit-transform-origin", [91,34.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [91,34.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [91,34.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [91,34.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [91,34.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_bearing}": [
                ["style", "left", '104px'],
                ["style", "top", '215px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid33", tween: [ "style", "${_disk}", "left", '181px', { fromValue: '199px'}], position: 0, duration: 1000 },
                { id: "eid47", tween: [ "style", "${_disk}", "left", '199px', { fromValue: '181px'}], position: 1500, duration: 1000 },
                { id: "eid34", tween: [ "transform", "${_pan_axle1}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid45", tween: [ "transform", "${_pan_axle1}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 1500, duration: 1000 },
                { id: "eid35", tween: [ "transform", "${_pan_axle2}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid46", tween: [ "transform", "${_pan_axle2}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 1500, duration: 1000 },
                { id: "eid36", tween: [ "style", "${_bearing}", "left", '117px', { fromValue: '104px'}], position: 0, duration: 1000 },
                { id: "eid44", tween: [ "style", "${_bearing}", "left", '104px', { fromValue: '117px'}], position: 1500, duration: 1000 },
                { id: "eid37", tween: [ "transform", "${_moving_axle}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid43", tween: [ "transform", "${_moving_axle}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1500, duration: 1000 }            ]
        }
    }
},
"o_cylinder_sub": {
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
                    fill: ['rgba(0,0,0,0)', 'images/o_cylinder_j.png'],
                    id: 'o_cylinder_j',
                    rect: ['34px', '0px', '164', '115', 'auto', 'auto'],
                    transform: [],
                    tag: 'img'
                },
                {
                    rect: ['0px', '26px', '335', '66', 'auto', 'auto'],
                    id: 'o_cylinder_piston',
                    fill: ['rgba(0,0,0,0)', 'images/o_cylinder_piston.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_o_cylinder_piston}": [
                ["style", "left", '0px'],
                ["style", "top", '26px']
            ],
            "${_o_cylinder_j}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [83,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [83,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [83,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [83,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [83,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '34px'],
                ["style", "width", '164px']
            ],
            "${symbolSelector}": [
                ["style", "height", '115px'],
                ["style", "width", '335px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid50", tween: [ "style", "${_o_cylinder_j}", "left", '10px', { fromValue: '34px'}], position: 0, duration: 1000 },
                { id: "eid56", tween: [ "style", "${_o_cylinder_j}", "left", '34px', { fromValue: '10px'}], position: 1500, duration: 1000 },
                { id: "eid51", tween: [ "style", "${_o_cylinder_j}", "width", '200px', { fromValue: '164px'}], position: 0, duration: 1000 },
                { id: "eid57", tween: [ "style", "${_o_cylinder_j}", "width", '164px', { fromValue: '200px'}], position: 1500, duration: 1000 },
                { id: "eid48", tween: [ "style", "${_o_cylinder_piston}", "left", '-22px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid55", tween: [ "style", "${_o_cylinder_piston}", "left", '0px', { fromValue: '-22px'}], position: 1500, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-26818759");
