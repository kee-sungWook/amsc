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
                id: 'oilLine_back',
                type: 'image',
                tag: 'img',
                rect: ['356px', '627px','694','389','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilLine_back.png"]
            },
            {
                id: 'M_cylinder_oil1',
                type: 'image',
                tag: 'img',
                rect: ['907px', '499px','323','101','auto', 'auto'],
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
                rect: ['355px', '716px','auto','auto','auto', 'auto']
            },
            {
                id: 'oilLine',
                type: 'image',
                tag: 'img',
                rect: ['458px', '623px','598','249','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilLine.png"]
            },
            {
                id: 'M_cylinder',
                type: 'image',
                tag: 'img',
                rect: ['908px', '439px','340','192','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"M_cylinder.png"]
            },
            {
                id: 'pedal_piston',
                type: 'rect',
                rect: ['1009px', '511','auto','auto','auto', 'auto']
            },
            {
                id: 'house_all',
                type: 'rect',
                rect: ['535', '297','auto','auto','auto', 'auto']
            },
            {
                id: 'oilCask',
                type: 'image',
                tag: 'img',
                rect: ['767px', '92px','346','442','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilCask.png"]
            }],
            symbolInstances: [
            {
                id: 'oilColorMovie',
                symbolName: 'oilColorMovie',
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
                id: 'house_all',
                symbolName: 'house_all',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_oilCask}": [
                ["style", "top", '92px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '336px']
            ],
            "${_M_cylinder}": [
                ["style", "top", '439px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '477px']
            ],
            "${_M_cylinder_oil1}": [
                ["style", "top", '499px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '476px']
            ],
            "${_oilLine_back}": [
                ["style", "top", '627px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '-75px']
            ],
            "${_oilColorMovie}": [
                ["style", "top", '509px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '-75px']
            ],
            "${_pedal_piston}": [
                ["style", "top", '422px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '578px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_oilFlowAreas}": [
                ["style", "top", '627px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '-76px']
            ],
            "${_house_all}": [
                ["style", "top", '208px']
            ],
            "${_oilLine}": [
                ["style", "top", '623px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '27px']
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
                { id: "eid356", tween: [ "style", "${_oilColorMovie}", "top", '509px', { fromValue: '509px'}], position: 0, duration: 0 },
                { id: "eid355", tween: [ "style", "${_pedal_piston}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
                { id: "eid357", tween: [ "style", "${_oilFlowAreas}", "top", '627px', { fromValue: '627px'}], position: 0, duration: 0 },
                { id: "eid358", tween: [ "style", "${_house_all}", "top", '208px', { fromValue: '208px'}], position: 0, duration: 0 }            ]
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
                    id: 'oilFlowAreaSub1',
                    type: 'rect',
                    rect: ['676', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'oilFlowAreaSub1',
                symbolName: 'oilFlowAreaSub1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '389px'],
                ["style", "overflow", 'visible'],
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
                    rect: ['-286px', '-149px', '592px', '61px', 'auto', 'auto'],
                    id: 'blueDot',
                    transform: [[0, 0], ['90']],
                    type: 'image',
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
                    transform: [[0, 0], ['90']],
                    id: 'blueDot3',
                    type: 'image',
                    rect: ['-286px', '-272px', '592px', '61px', 'auto', 'auto'],
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
                    transform: [[0, 0], ['65']],
                    id: 'blueDot4',
                    type: 'image',
                    rect: ['-387px', '-258px', '592px', '61px', 'auto', 'auto'],
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
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '191px']
            ],
            "${_blueDot5}": [
                ["style", "left", '2px'],
                ["style", "top", '1px']
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
                    id: 'House01',
                    type: 'rect',
                    rect: ['46px', '95px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House04',
                    type: 'rect',
                    rect: ['32', '135', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House02',
                    type: 'rect',
                    rect: ['46px', '127px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House03',
                    type: 'rect',
                    rect: ['62px', '97px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['474px', '0px', '316', '510', 'auto', 'auto'],
                    id: 'pedal',
                    fill: ['rgba(0,0,0,0)', 'images/pedal.png'],
                    type: 'image',
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
                },
                {
                    id: 'flash_all2',
                    type: 'rect',
                    rect: ['253', '93', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'House04',
                symbolName: 'House04',
                autoPlay: {

               }
            },
            {
                id: 'flash_all2',
                symbolName: 'flash_all',
                autoPlay: {

               }
            },
            {
                id: 'House01',
                symbolName: 'House01',
                autoPlay: {

               }
            },
            {
                id: 'House03',
                symbolName: 'House03',
                autoPlay: {

               }
            },
            {
                id: 'House02',
                symbolName: 'House01',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_House04}": [
                ["style", "top", '124px'],
                ["transform", "scaleY", '0.8'],
                ["style", "left", '20px'],
                ["transform", "scaleX", '0.8']
            ],
            "${_flash_all2}": [
                ["style", "top", '29px'],
                ["style", "left", '205px']
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
            "${_piston_body}": [
                ["style", "left", '88px'],
                ["style", "top", '71px']
            ],
            "${_House01}": [
                ["style", "top", '91px'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '7px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_House02}": [
                ["style", "top", '118px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '32px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_piston_head}": [
                ["style", "left", '0px'],
                ["style", "top", '86px']
            ],
            "${symbolSelector}": [
                ["style", "height", '510px'],
                ["style", "width", '790px']
            ],
            "${_House03}": [
                ["style", "left", '46px'],
                ["style", "top", '88px']
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
                { id: "eid251", tween: [ "transform", "${_House02}", "scaleY", '0.5', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid252", tween: [ "style", "${_House02}", "left", '32px', { fromValue: '32px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid19", tween: [ "transform", "${_pedal}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid21", tween: [ "transform", "${_pedal}", "rotateZ", '49deg', { fromValue: '23deg'}], position: 500, duration: 1000 },
                { id: "eid24", tween: [ "transform", "${_pedal}", "rotateZ", '23deg', { fromValue: '49deg'}], position: 2000, duration: 1000 },
                { id: "eid32", tween: [ "transform", "${_pedal}", "rotateZ", '0deg', { fromValue: '23deg'}], position: 3000, duration: 500 },
                { id: "eid159", tween: [ "transform", "${_pedal}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
                { id: "eid243", tween: [ "style", "${_House01}", "top", '91px', { fromValue: '91px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_piston_body}", "left", '61px', { fromValue: '88px'}], position: 0, duration: 500 },
                { id: "eid20", tween: [ "style", "${_piston_body}", "left", '11px', { fromValue: '61px'}], position: 500, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_piston_body}", "left", '61px', { fromValue: '11px'}], position: 2000, duration: 1000 },
                { id: "eid31", tween: [ "style", "${_piston_body}", "left", '88px', { fromValue: '61px'}], position: 3000, duration: 500 },
                { id: "eid157", tween: [ "style", "${_piston_body}", "left", '88px', { fromValue: '88px'}], position: 4000, duration: 0 },
                { id: "eid229", tween: [ "transform", "${_House01}", "scaleX", '0.7', { fromValue: '0.7'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid242", tween: [ "style", "${_House01}", "left", '7px', { fromValue: '7px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid253", tween: [ "style", "${_House02}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid230", tween: [ "transform", "${_House01}", "scaleY", '0.7', { fromValue: '0.7'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid238", tween: [ "style", "${_House03}", "top", '88px', { fromValue: '88px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid250", tween: [ "transform", "${_House02}", "scaleX", '0.5', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid237", tween: [ "style", "${_House03}", "left", '46px', { fromValue: '46px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid340", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_flash_all2}', [] ], ""], position: 0 },
                { id: "eid291", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_flash_all2}', [] ], ""], position: 248 }            ]
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
                    transform: [],
                    fill: ['rgba(0,0,0,0)', 'images/pan_axle2.png'],
                    id: 'pan_axle2',
                    type: 'image',
                    rect: ['175px', '362px', '27', '230', 'auto', 'auto'],
                    tag: 'img'
                },
                {
                    transform: [],
                    fill: ['rgba(0,0,0,0)', 'images/pan_axle1.png'],
                    id: 'pan_axle1',
                    type: 'image',
                    rect: ['175px', '30px', '27', '230', 'auto', 'auto'],
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
                    transform: [],
                    fill: ['rgba(0,0,0,0)', 'images/moving_axle.png'],
                    id: 'moving_axle',
                    type: 'image',
                    rect: ['0px', '275px', '153', '676', 'auto', 'auto'],
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
                { id: "eid37", tween: [ "transform", "${_moving_axle}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid43", tween: [ "transform", "${_moving_axle}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1500, duration: 1000 },
                { id: "eid34", tween: [ "transform", "${_pan_axle1}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid45", tween: [ "transform", "${_pan_axle1}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 1500, duration: 1000 },
                { id: "eid36", tween: [ "style", "${_bearing}", "left", '117px', { fromValue: '104px'}], position: 0, duration: 1000 },
                { id: "eid44", tween: [ "style", "${_bearing}", "left", '104px', { fromValue: '117px'}], position: 1500, duration: 1000 },
                { id: "eid35", tween: [ "transform", "${_pan_axle2}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid46", tween: [ "transform", "${_pan_axle2}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 1500, duration: 1000 }            ]
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
                    transform: [],
                    fill: ['rgba(0,0,0,0)', 'images/o_cylinder_j.png'],
                    id: 'o_cylinder_j',
                    type: 'image',
                    rect: ['34px', '0px', '164', '115', 'auto', 'auto'],
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
},
"House01": {
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
                    id: 'house01',
                    type: 'image',
                    rect: ['0px', '-2px', '15px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house01}": [
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '15px']
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
                { id: "eid180", tween: [ "style", "${_house01}", "top", '-2px', { fromValue: '0px'}], position: 498, duration: 502, easing: "easeOutQuad" },
                { id: "eid173", tween: [ "style", "${_house01}", "height", '22px', { fromValue: '16px'}], position: 0, duration: 498, easing: "easeOutQuad" },
                { id: "eid181", tween: [ "style", "${_house01}", "height", '18px', { fromValue: '22px'}], position: 498, duration: 502, easing: "easeOutQuad" }            ]
        }
    }
},
"House02": {
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
                    id: 'house02',
                    type: 'image',
                    rect: ['0px', '0px', '27px', '31px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house02.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house02}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '27px']
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
                { id: "eid182", tween: [ "style", "${_house02}", "top", '10px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid188", tween: [ "style", "${_house02}", "top", '0px', { fromValue: '10px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "transform", "${_house02}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid187", tween: [ "transform", "${_house02}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 500, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"House03": {
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
                    id: 'house03',
                    type: 'image',
                    rect: ['0px', '0px', '19px', '17px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house03.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house03}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '17px'],
                ["style", "width", '19px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1067,
            autoPlay: true,
            timeline: [
                { id: "eid190", tween: [ "transform", "${_house03}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 100, duration: 512, easing: "easeOutQuad" },
                { id: "eid191", tween: [ "transform", "${_house03}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 612, duration: 455, easing: "easeOutQuad" }            ]
        }
    }
},
"House04": {
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
                    id: 'house04',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house04.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house04}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '20px']
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
                { id: "eid204", tween: [ "style", "${_house04}", "width", '15px', { fromValue: '20px'}], position: 0, duration: 534, easing: "easeOutQuad" },
                { id: "eid205", tween: [ "style", "${_house04}", "width", '20px', { fromValue: '15px'}], position: 534, duration: 466, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "transform", "${_house04}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 534, easing: "easeOutQuad" },
                { id: "eid193", tween: [ "transform", "${_house04}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 534, duration: 466, easing: "easeOutQuad" }            ]
        }
    }
},
"House05": {
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
                    id: 'house05',
                    type: 'image',
                    rect: ['-1px', '3px', '28px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house05.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house05}": [
                ["style", "top", '3px'],
                ["style", "height", '16px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '15deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '31px']
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
                { id: "eid225", tween: [ "transform", "${_house05}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid226", tween: [ "transform", "${_house05}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid215", tween: [ "style", "${_house05}", "left", '-1px', { fromValue: '1px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid206", tween: [ "style", "${_house05}", "top", '18px', { fromValue: '3px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid207", tween: [ "style", "${_house05}", "top", '3px', { fromValue: '18px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid210", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 1000, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"house_all": {
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
                    id: 'wate_01',
                    type: 'image',
                    rect: ['-45px', '-45px', '159px', '143px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wate_01.png', '0px', '0px']
                },
                {
                    id: 'wate_02',
                    type: 'image',
                    rect: ['-44px', '-28px', '157px', '126px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wate_02.png', '0px', '0px']
                },
                {
                    id: 'House01',
                    type: 'rect',
                    rect: ['0px', '12px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House02',
                    type: 'rect',
                    rect: ['32px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House03',
                    type: 'rect',
                    rect: ['74px', '7px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House04',
                    type: 'rect',
                    rect: ['0px', '41px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House05',
                    type: 'rect',
                    rect: ['32px', '38px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House06',
                    type: 'rect',
                    rect: ['68', '33', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'House05',
                symbolName: 'House05',
                autoPlay: {

               }
            },
            {
                id: 'House04',
                symbolName: 'House04',
                autoPlay: {

               }
            },
            {
                id: 'House01',
                symbolName: 'House01',
                autoPlay: {

               }
            },
            {
                id: 'House03',
                symbolName: 'House03',
                autoPlay: {

               }
            },
            {
                id: 'House02',
                symbolName: 'House02',
                autoPlay: {

               }
            },
            {
                id: 'House06',
                symbolName: 'House06',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_House02}": [
                ["style", "left", '32px'],
                ["style", "top", '0px']
            ],
            "${_wate_01}": [
                ["style", "top", '-45px'],
                ["style", "opacity", '1'],
                ["style", "left", '-45px']
            ],
            "${_House05}": [
                ["style", "left", '32px'],
                ["style", "top", '38px']
            ],
            "${_House03}": [
                ["style", "left", '74px'],
                ["style", "top", '7px']
            ],
            "${_House04}": [
                ["style", "left", '0px'],
                ["style", "top", '41px']
            ],
            "${_wate_02}": [
                ["style", "top", '-28px'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px']
            ],
            "${_House01}": [
                ["style", "left", '0px'],
                ["style", "top", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '95px']
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
                { id: "eid220", tween: [ "style", "${_wate_02}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 883, easing: "easeOutQuad" },
                { id: "eid221", tween: [ "style", "${_wate_02}", "opacity", '0', { fromValue: '1'}], position: 1117, duration: 883, easing: "easeOutQuad" },
                { id: "eid217", tween: [ "style", "${_wate_01}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid222", tween: [ "style", "${_wate_01}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 733, easing: "easeOutQuad" }            ]
        }
    }
},
"House06": {
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
                    id: 'house06',
                    type: 'image',
                    rect: ['0px', '0px', '27px', '27px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house06.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house06}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '27px'],
                ["style", "width", '27px']
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
                { id: "eid223", tween: [ "style", "${_house06}", "top", '8px', { fromValue: '0px'}], position: 0, duration: 600, easing: "easeOutQuad" },
                { id: "eid224", tween: [ "style", "${_house06}", "top", '0px', { fromValue: '8px'}], position: 600, duration: 400, easing: "easeOutQuad" }            ]
        }
    }
},
"flash_all": {
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
                    id: 'flash_01',
                    type: 'image',
                    rect: ['0px', '51px', '62px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flash_01.png', '0px', '0px']
                },
                {
                    id: 'flash_02',
                    type: 'image',
                    rect: ['11px', '40px', '83px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flash_02.png', '0px', '0px']
                },
                {
                    id: 'flash_03',
                    type: 'image',
                    rect: ['46px', '0px', '118px', '152px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flash_03.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flash_03}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '46px']
            ],
            "${_flash_02}": [
                ["style", "top", '40px'],
                ["style", "opacity", '0'],
                ["style", "left", '11px']
            ],
            "${_flash_01}": [
                ["style", "top", '51px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '51px']
            ],
            "${symbolSelector}": [
                ["style", "height", '152px'],
                ["style", "width", '171px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 701,
            autoPlay: true,
            timeline: [
                { id: "eid283", tween: [ "style", "${_flash_02}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 134 },
                { id: "eid284", tween: [ "style", "${_flash_02}", "opacity", '0', { fromValue: '1'}], position: 367, duration: 100 },
                { id: "eid287", tween: [ "style", "${_flash_03}", "left", '53px', { fromValue: '46px'}], position: 521, duration: 180 },
                { id: "eid280", tween: [ "style", "${_flash_01}", "width", '62px', { fromValue: '51px'}], position: 0, duration: 200 },
                { id: "eid278", tween: [ "style", "${_flash_01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 100 },
                { id: "eid354", tween: [ "style", "${_flash_01}", "opacity", '0', { fromValue: '1'}], position: 100, duration: 100 },
                { id: "eid286", tween: [ "style", "${_flash_03}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 121 },
                { id: "eid288", tween: [ "style", "${_flash_03}", "opacity", '0', { fromValue: '1'}], position: 521, duration: 180 }            ]
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
