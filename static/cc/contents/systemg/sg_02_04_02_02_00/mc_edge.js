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
                id: 'gear_core',
                type: 'rect',
                rect: ['384', '608','auto','auto','auto', 'auto']
            },
            {
                id: 'wheelMovie',
                type: 'rect',
                rect: ['382', '931','auto','auto','auto', 'auto']
            },
            {
                id: 'back_axle',
                type: 'image',
                tag: 'img',
                rect: ['592', '66','553','1009','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back_axle.png"]
            },
            {
                id: 'anotherThing',
                type: 'image',
                tag: 'img',
                rect: ['651', '784','436','339','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"anotherThing.png"]
            },
            {
                id: 'gear_v',
                type: 'rect',
                rect: ['743', '763','auto','auto','auto', 'auto']
            },
            {
                id: 'gear_side',
                type: 'rect',
                rect: ['608', '857','auto','auto','auto', 'auto']
            },
            {
                id: 'gear_sideCopy',
                type: 'rect',
                rect: ['608', '857','auto','auto','auto', 'auto']
            },
            {
                id: 'gear_mid',
                type: 'rect',
                rect: ['795', '880','auto','auto','auto', 'auto']
            },
            {
                id: 'gear_top',
                type: 'rect',
                rect: ['817', '635','auto','auto','auto', 'auto']
            },
            {
                id: 'gear_topCopy',
                type: 'rect',
                rect: ['817', '635','auto','auto','auto', 'auto']
            },
            {
                id: 't_move',
                type: 'rect',
                rect: ['237', '746','auto','auto','auto', 'auto']
            },
            {
                id: 't_moveCopy2',
                type: 'rect',
                rect: ['1286px', '746','auto','auto','auto', 'auto']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1494', '505','672','182','auto', 'auto'],
                text: "디퍼런셜 캐리어의\r구동원리",
                align: "center",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'gear_topCopy',
                symbolName: 'gear_top',
                autoPlay: {

                }
            },
            {
                id: 'gear_core',
                symbolName: 'gear_core',
                autoPlay: {

                }
            },
            {
                id: 'gear_v',
                symbolName: 'gear_v',
                autoPlay: {

                }
            },
            {
                id: 'gear_mid',
                symbolName: 'gear_mid',
                autoPlay: {

                }
            },
            {
                id: 't_move',
                symbolName: 't_move',
                autoPlay: {

                }
            },
            {
                id: 'gear_top',
                symbolName: 'gear_top',
                autoPlay: {

                }
            },
            {
                id: 'gear_side',
                symbolName: 'gear_side',
                autoPlay: {

                }
            },
            {
                id: 'gear_sideCopy',
                symbolName: 'gear_side',
                autoPlay: {

                }
            },
            {
                id: 'wheelMovie',
                symbolName: 'wheelMovie',
                autoPlay: {

                }
            },
            {
                id: 't_moveCopy2',
                symbolName: 't_move',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_gear_sideCopy}": [
                ["style", "left", '1083px']
            ],
            "${_t_moveCopy2}": [
                ["style", "left", '1286px']
            ],
            "${_gear_topCopy}": [
                ["style", "top", '674px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1134,
            autoPlay: true,
            timeline: [
                { id: "eid7", tween: [ "style", "${_gear_sideCopy}", "left", '1083px', { fromValue: '1083px'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_gear_topCopy}", "top", '674px', { fromValue: '674px'}], position: 0, duration: 0 }            ]
        }
    }
},
"gear_top": {
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
                    id: 'gear_t1',
                    tag: 'img',
                    rect: ['0px', '0px', '103', '29', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_t1.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'lines',
                    type: 'image',
                    rect: ['3px', '-137px', '191px', '263px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lines.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lines}": [
                ["style", "top", '-137px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "left", '-21px'],
                ["style", "overflow", 'hidden']
            ],
            "${_gear_t1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '103px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_lines}", "left", '3px', { fromValue: '-21px'}], position: 0, duration: 200 }            ]
        }
    }
},
"gear_side": {
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
                    id: 'gear_s1',
                    tag: 'img',
                    rect: ['0px', '0px', '46', '193', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_s1.png']
                },
                {
                    id: 'lines2',
                    type: 'image',
                    rect: ['-73px', '-58px', '191px', '263px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lines.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lines2}": [
                ["style", "left", '-73px'],
                ["style", "top", '-34px']
            ],
            "${_gear_s1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '193px'],
                ["style", "width", '46px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 133,
            autoPlay: true,
            timeline: [
                { id: "eid6", tween: [ "style", "${_lines2}", "top", '-11px', { fromValue: '-34px'}], position: 0, duration: 133 }            ]
        }
    }
},
"gear_mid": {
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
                    id: 'gear_won',
                    tag: 'img',
                    rect: ['0px', '0px', '147', '147', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_won.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gear_won}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '360deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '147px'],
                ["style", "width", '147px']
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
                { id: "eid9", tween: [ "transform", "${_gear_won}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 1000 }            ]
        }
    }
},
"gear_core": {
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
                    id: 'gear_round',
                    tag: 'img',
                    rect: ['383px', '130px', '203', '105', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_round.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'lines3',
                    type: 'image',
                    rect: ['389px', '72px', '191px', '263px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lines.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'gear_round_out',
                    tag: 'img',
                    rect: ['0px', '0px', '907', '325', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_round_out.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lines3}": [
                ["style", "top", '72px'],
                ["style", "left", '389px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_gear_round}": [
                ["style", "left", '383px'],
                ["style", "top", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '325px'],
                ["style", "width", '907px']
            ],
            "${_gear_round_out}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 133,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_lines3}", "left", '413px', { fromValue: '389px'}], position: 0, duration: 133 }            ]
        }
    }
},
"gear_v": {
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
                    id: 'gear_vertical',
                    tag: 'img',
                    rect: ['0px', '0px', '42', '382', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical.png']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.2'], ['50%', '0%']],
                    id: 'rw',
                    type: 'image',
                    rect: ['0px', '192px', '42px', '190px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reverselWing.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.2']],
                    id: 'rwCopy',
                    type: 'image',
                    rect: ['0px', '192px', '42px', '190px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reverselWing.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.2']],
                    id: 'rwCopy2',
                    type: 'image',
                    rect: ['0px', '192px', '42px', '190px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reverselWing.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.2']],
                    id: 'rwCopy3',
                    type: 'image',
                    rect: ['0px', '192px', '42px', '190px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reverselWing.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.2']],
                    id: 'rwCopy4',
                    type: 'image',
                    rect: ['0px', '192px', '42px', '190px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reverselWing.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.2']],
                    id: 'rwCopy5',
                    type: 'image',
                    rect: ['0px', '192px', '42px', '190px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reverselWing.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.2']],
                    id: 'rwCopy6',
                    type: 'image',
                    rect: ['0px', '192px', '42px', '190px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reverselWing.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.2']],
                    id: 'rwCopy7',
                    type: 'image',
                    rect: ['0px', '192px', '42px', '190px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reverselWing.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.2']],
                    id: 'rwCopy8',
                    type: 'image',
                    rect: ['0px', '192px', '42px', '190px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reverselWing.png', '0px', '0px']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'twCopy8',
                    type: 'image',
                    rect: ['0px', '0px', '42', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical_wing.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'twCopy7',
                    type: 'image',
                    rect: ['0px', '0px', '42', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical_wing.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'twCopy6',
                    type: 'image',
                    rect: ['0px', '0px', '42', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical_wing.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'twCopy5',
                    type: 'image',
                    rect: ['0px', '0px', '42', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical_wing.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'twCopy4',
                    type: 'image',
                    rect: ['0px', '0px', '42', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical_wing.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'twCopy3',
                    type: 'image',
                    rect: ['0px', '0px', '42', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical_wing.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'twCopy2',
                    type: 'image',
                    rect: ['0px', '0px', '42', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical_wing.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'twCopy',
                    type: 'image',
                    rect: ['0px', '0px', '42', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical_wing.png']
                },
                {
                    transform: [[0, 0], [], [], [], ['50%', '100%']],
                    tag: 'img',
                    id: 'tw',
                    type: 'image',
                    rect: ['0px', '0px', '42', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear_vertical_wing.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rw}": [
                ["style", "top", '192px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.1'],
                ["style", "left", '0px']
            ],
            "${_rwCopy6}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '192px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '0.1']
            ],
            "${_rwCopy7}": [
                ["style", "top", '192px'],
                ["transform", "scaleY", '0.1'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_twCopy5}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${_twCopy2}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${_twCopy3}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '0px']
            ],
            "${_rwCopy8}": [
                ["style", "top", '192px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.1'],
                ["style", "left", '0px']
            ],
            "${_twCopy8}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_twCopy7}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${_twCopy6}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_tw}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ],
            "${_rwCopy}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "scaleY", '0.1'],
                ["style", "top", '192px']
            ],
            "${symbolSelector}": [
                ["style", "height", '382px'],
                ["style", "width", '42px']
            ],
            "${_twCopy4}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '0px']
            ],
            "${_rwCopy3}": [
                ["style", "top", '192px'],
                ["transform", "scaleY", '0.1'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_rwCopy4}": [
                ["style", "top", '192px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.1'],
                ["style", "left", '0px']
            ],
            "${_rwCopy5}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "scaleY", '0.1'],
                ["style", "top", '192px']
            ],
            "${_gear_vertical}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_twCopy}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '0px']
            ],
            "${_rwCopy2}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '192px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '0.1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1134,
            autoPlay: true,
            labels: {
                "gogo": 533
            },
            timeline: [
                { id: "eid49", tween: [ "transform", "${_twCopy8}", "scaleY", '0.1', { fromValue: '1'}], position: 533, duration: 600 },
                { id: "eid52", tween: [ "transform", "${_rwCopy}", "scaleY", '1', { fromValue: '0.1'}], position: 67, duration: 600 },
                { id: "eid56", tween: [ "transform", "${_rwCopy5}", "scaleY", '1', { fromValue: '0.1'}], position: 334, duration: 600 },
                { id: "eid53", tween: [ "transform", "${_rwCopy2}", "scaleY", '1', { fromValue: '0.1'}], position: 134, duration: 600 },
                { id: "eid47", tween: [ "transform", "${_twCopy6}", "scaleY", '0.1', { fromValue: '1'}], position: 400, duration: 600 },
                { id: "eid44", tween: [ "transform", "${_twCopy3}", "scaleY", '0.1', { fromValue: '1'}], position: 200, duration: 600 },
                { id: "eid54", tween: [ "transform", "${_rwCopy3}", "scaleY", '1', { fromValue: '0.1'}], position: 200, duration: 600 },
                { id: "eid42", tween: [ "transform", "${_twCopy}", "scaleY", '0.1', { fromValue: '1'}], position: 67, duration: 600 },
                { id: "eid59", tween: [ "transform", "${_rwCopy8}", "scaleY", '1', { fromValue: '0.1'}], position: 534, duration: 600 },
                { id: "eid32", tween: [ "transform", "${_rw}", "scaleY", '1', { fromValue: '0.1'}], position: 0, duration: 600 },
                { id: "eid58", tween: [ "transform", "${_rwCopy7}", "scaleY", '1', { fromValue: '0.1'}], position: 467, duration: 600 },
                { id: "eid45", tween: [ "transform", "${_twCopy4}", "scaleY", '0.1', { fromValue: '1'}], position: 267, duration: 600 },
                { id: "eid43", tween: [ "transform", "${_twCopy2}", "scaleY", '0.1', { fromValue: '1'}], position: 133, duration: 600 },
                { id: "eid11", tween: [ "transform", "${_tw}", "scaleY", '0.1', { fromValue: '1'}], position: 0, duration: 600 },
                { id: "eid57", tween: [ "transform", "${_rwCopy6}", "scaleY", '1', { fromValue: '0.1'}], position: 400, duration: 600 },
                { id: "eid48", tween: [ "transform", "${_twCopy7}", "scaleY", '0.1', { fromValue: '1'}], position: 467, duration: 600 },
                { id: "eid46", tween: [ "transform", "${_twCopy5}", "scaleY", '0.1', { fromValue: '1'}], position: 333, duration: 600 },
                { id: "eid55", tween: [ "transform", "${_rwCopy4}", "scaleY", '1', { fromValue: '0.1'}], position: 267, duration: 600 }            ]
        }
    }
},
"wheelMovie": {
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
                    id: 'wheel',
                    tag: 'img',
                    rect: ['0px', '0px', '910', '46', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wheel.png']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['2px', '-50px', '910px', '46px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)', [270, [['rgba(255,255,255,0.00)', 8], ['rgba(255,255,255,1.00)', 50], ['rgba(255,255,255,0.00)', 89]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wheel}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle}": [
                ["style", "top", '-50px'],
                ["style", "overflow", 'hidden'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',8],['rgba(255,255,255,0.50)',50],['rgba(255,255,255,0.00)',89]]]],
                ["style", "left", '2px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '910px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: true,
            timeline: [
                { id: "eid65", tween: [ "gradient", "${_Rectangle}", "background-image", [270,[['rgba(255,255,255,0.00)',8],['rgba(255,255,255,0.50)',50],['rgba(255,255,255,0.00)',89]]], { fromValue: [270,[['rgba(255,255,255,0.00)',8],['rgba(255,255,255,0.50)',50],['rgba(255,255,255,0.00)',89]]]}], position: 766, duration: 0, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "style", "${_Rectangle}", "top", '61px', { fromValue: '-50px'}], position: 0, duration: 479, easing: "easeInQuad" },
                { id: "eid64", tween: [ "style", "${_Rectangle}", "top", '62px', { fromValue: '61px'}], position: 479, duration: 288, easing: "easeOutQuad" }            ]
        }
    }
},
"t_move": {
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
                    id: 'tire',
                    tag: 'img',
                    rect: ['0px', '0px', '148', '417', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'lines4',
                    type: 'image',
                    rect: ['62px', '-46px', '22px', '129px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lines.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lines4}": [
                ["style", "top", '-46px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '129px'],
                ["style", "opacity", '0'],
                ["style", "left", '62px'],
                ["style", "width", '22px']
            ],
            "${_tire}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '417px'],
                ["style", "width", '148px']
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
                { id: "eid69", tween: [ "style", "${_lines4}", "left", '63px', { fromValue: '62px'}], position: 0, duration: 249 },
                { id: "eid68", tween: [ "style", "${_lines4}", "top", '134px', { fromValue: '-46px'}], position: 0, duration: 249 },
                { id: "eid70", tween: [ "style", "${_lines4}", "top", '332px', { fromValue: '134px'}], position: 249, duration: 251 },
                { id: "eid72", tween: [ "style", "${_lines4}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 249 },
                { id: "eid71", tween: [ "style", "${_lines4}", "opacity", '0', { fromValue: '0.5'}], position: 249, duration: 251 }            ]
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
})(jQuery, AdobeEdge, "EDGE-29018812");
