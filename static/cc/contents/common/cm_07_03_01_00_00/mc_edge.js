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
                id: 'ALL_CLIP',
                type: 'rect',
                rect: ['235', '53','auto','auto','auto', 'auto']
            },
            {
                id: 'rewind_btn',
                type: 'group',
                rect: ['775px', '137px','256','86','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'RoundRect',
                    type: 'rect',
                    rect: ['0px', '0px','250px','80px','auto', 'auto'],
                    borderRadius: ["15px 15px", "15px 15px", "15px 15px", "15px 15px"],
                    fill: ["rgba(199,0,96,1.00)"],
                    stroke: [3,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['0px', '17px','256px','auto','auto', 'auto'],
                    text: "다시보기",
                    align: "center",
                    font: ['굴림', 45, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'txt',
                type: 'text',
                rect: ['103', '912','1600','91','auto', 'auto'],
                text: "얼라이먼트는 휠밸런스와는 다른 주행 안정성 및 핸들 복원력등의 조정을 하는 것입니다. \r정렬이 맞지 않을 경우는 쏠림 현상 및 차체 흔들림이 발생 할 수 있습니다.",
                align: "center",
                font: ['굴림', 40, "rgb(0,75,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'ALL_CLIP',
                symbolName: 'ALL_CLIP',
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
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(199,0,96,1)'],
                ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '250px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '80px'],
                ["style", "border-width", '3px'],
                ["style", "left", '0px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "width", '256px'],
                ["style", "left", '0px'],
                ["style", "font-size", '45px']
            ],
            "${_rewind_btn}": [
                ["style", "top", '137px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '775px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2767,
            autoPlay: true,
            timeline: [
                { id: "eid259", tween: [ "style", "${_rewind_btn}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 267 },
                { id: "eid256", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ALL_CLIP}', [0] ], ""], position: 0 },
                { id: "eid257", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ALL_CLIP}', [] ], ""], position: 500 }            ]
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
                    rect: ['0px', '140px', '180', '589', 'auto', 'auto'],
                    id: 'tire_normal',
                    fill: ['rgba(0,0,0,0)', 'images/tire_normal.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'TIRE_RED_FILL',
                    type: 'rect',
                    rect: ['4', '144', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TIRE_LINE_MOVE',
                    type: 'rect',
                    rect: ['11', '6', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['4px', '0px', '172', '870', 'auto', 'auto'],
                    id: 'tire_blinder',
                    fill: ['rgba(0,0,0,0)', 'images/tire_blinder.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'TRUBLE_MOVE',
                    type: 'rect',
                    rect: ['85', '35', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_R1',
                    type: 'rect',
                    transform: [[0, 0], ['41'], [], ['0.8', '0.8']],
                    rect: ['147px', '321px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_L1',
                    type: 'rect',
                    transform: [[0, 0], [], [], ['0.7', '0.7']],
                    rect: ['-50px', '173px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_L2',
                    type: 'rect',
                    transform: [[0, 0], ['-67']],
                    rect: ['-230px', '278px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TRUBLE_MOVE',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'TIRE_RED_FILL',
                symbolName: 'TIRE_RED_FILL',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_L2',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_L1',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'TIRE_LINE_MOVE',
                symbolName: 'TIRE_LINE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_R1',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TRUBLE_MOVE_R1}": [
                ["style", "top", '321px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "rotateZ", '41deg'],
                ["transform", "scaleX", '0.8'],
                ["style", "left", '147px']
            ],
            "${_tire_normal}": [
                ["style", "left", '0px'],
                ["style", "top", '140px']
            ],
            "${symbolSelector}": [
                ["style", "height", '870px'],
                ["style", "width", '180px']
            ],
            "${_TRUBLE_MOVE_L2}": [
                ["style", "top", '278px'],
                ["style", "left", '-230px'],
                ["transform", "rotateZ", '-67deg']
            ],
            "${_TRUBLE_MOVE_L1}": [
                ["transform", "scaleX", '0.7'],
                ["style", "left", '-50px'],
                ["transform", "scaleY", '0.7'],
                ["style", "top", '173px']
            ],
            "${_tire_blinder}": [
                ["style", "left", '4px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1300,
            autoPlay: false,
            labels: {
                "ready": 0,
                "truble": 200
            },
            timeline: [
                { id: "eid36", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TIRE_RED_FILL}', [0] ], ""], position: 0 },
                { id: "eid39", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TRUBLE_MOVE_L2}', [0] ], ""], position: 0 },
                { id: "eid38", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TRUBLE_MOVE}', [0] ], ""], position: 0 },
                { id: "eid37", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TRUBLE_MOVE_R1}', [0] ], ""], position: 0 },
                { id: "eid40", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TRUBLE_MOVE_L1}', [0] ], ""], position: 0 },
                { id: "eid42", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TIRE_RED_FILL}', [] ], ""], position: 200 },
                { id: "eid43", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_L2}', [] ], ""], position: 200 },
                { id: "eid45", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_L1}', [] ], ""], position: 200 },
                { id: "eid44", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_R1}', [] ], ""], position: 200 },
                { id: "eid46", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE}', [] ], ""], position: 200 }            ]
        }
    }
},
"TIRE_LINE_MOVE": {
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
                    rect: ['0px', '0px', '158', '129', 'auto', 'auto'],
                    id: 'tire_moveLine',
                    fill: ['rgba(0,0,0,0)', 'images/tire_moveLine.png'],
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
                ["style", "height", '129px'],
                ["style", "width", '158px']
            ],
            "${_tire_moveLine}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            timeline: [
                { id: "eid4", tween: [ "style", "${_tire_moveLine}", "top", '723px', { fromValue: '0px'}], position: 0, duration: 300 }            ]
        }
    }
},
"TIRE_RED_FILL": {
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
                    rect: ['0px', '0px', '172', '581', 'auto', 'auto'],
                    id: 'tire_redFill',
                    fill: ['rgba(0,0,0,0)', 'images/tire_redFill.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tire_redFill}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '581px'],
                ["style", "width", '172px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 367,
            autoPlay: false,
            timeline: [
                { id: "eid6", tween: [ "style", "${_tire_redFill}", "opacity", '0.5', { fromValue: '0.000000'}], position: 0, duration: 167 },
                { id: "eid8", tween: [ "style", "${_tire_redFill}", "opacity", '0.000000', { fromValue: '0.5'}], position: 200, duration: 167 }            ]
        }
    }
},
"TRUBLE_MOVE_SRC": {
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
                    id: 'truble_src',
                    type: 'image',
                    rect: ['-17px', '23px', '10px', '99px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/truble_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '10px']
            ],
            "${_truble_src}": [
                ["style", "top", '92px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '7px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 433,
            autoPlay: false,
            timeline: [
                { id: "eid15", tween: [ "style", "${_truble_src}", "height", '99px', { fromValue: '7px'}], position: 0, duration: 200 },
                { id: "eid20", tween: [ "style", "${_truble_src}", "height", '16px', { fromValue: '99px'}], position: 233, duration: 200 },
                { id: "eid17", tween: [ "style", "${_truble_src}", "top", '0px', { fromValue: '92px'}], position: 0, duration: 200 },
                { id: "eid21", tween: [ "style", "${_truble_src}", "top", '-17px', { fromValue: '0px'}], position: 233, duration: 200 },
                { id: "eid19", tween: [ "style", "${_truble_src}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid22", tween: [ "style", "${_truble_src}", "opacity", '0', { fromValue: '1'}], position: 233, duration: 200 }            ]
        }
    }
},
"TRUBLE_MOVE": {
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
                    id: 'TRUBLE_MOVE_SRC',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_L1',
                    type: 'rect',
                    rect: ['-27px', '21px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_L2',
                    type: 'rect',
                    transform: [[0, 0], ['-30'], [], ['0.5', '0.5']],
                    rect: ['-39px', '44px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R1',
                    type: 'rect',
                    transform: [[0, 0], ['16']],
                    rect: ['25px', '29px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R2',
                    type: 'rect',
                    transform: [[0, 0], ['30'], [], ['0.5', '0.5']],
                    rect: ['38px', '52px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TRUBLE_MOVE_SRC_L2',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC_R2',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC_L1',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC_R1',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '10px']
            ],
            "${_TRUBLE_MOVE_SRC_L1}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '-16deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '-27px']
            ],
            "${_TRUBLE_MOVE_SRC_L2}": [
                ["style", "top", '44px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '-30deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-39px']
            ],
            "${_TRUBLE_MOVE_SRC_R1}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '16deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '25px']
            ],
            "${_TRUBLE_MOVE_SRC}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_TRUBLE_MOVE_SRC_R2}": [
                ["style", "top", '52px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '30deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '38px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1200,
            autoPlay: false,
            timeline: [
                { id: "eid27", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L1}', [] ], ""], position: 0 },
                { id: "eid28", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R1}', [] ], ""], position: 66.666666666667 },
                { id: "eid29", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L2}', [] ], ""], position: 133.33333333333 },
                { id: "eid30", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R2}', [] ], ""], position: 200 },
                { id: "eid31", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R1}', [] ], ""], position: 666.33333333333 },
                { id: "eid32", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L1}', [] ], ""], position: 666.33333333333 },
                { id: "eid33", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L2}', [] ], ""], position: 666.33333333333 },
                { id: "eid34", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC}', [] ], ""], position: 666.66666666667 },
                { id: "eid35", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R2}', [] ], ""], position: 666.66666666667 }            ]
        }
    }
},
"TIRE_CLIP": {
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
                    id: 'TIRE',
                    type: 'rect',
                    rect: ['60px', '8px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TIRE',
                symbolName: 'TIRE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TIRE}": [
                ["style", "top", '8px'],
                ["style", "left", '60px'],
                ["transform", "rotateZ", '10deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '887px'],
                ["style", "width", '299px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 900,
            autoPlay: false,
            timeline: [
                { id: "eid57", tween: [ "transform", "${_TIRE}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 0, duration: 900 }            ]
        }
    }
},
"MYCLIP": {
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
                    id: 'imgPic4',
                    tag: 'img',
                    rect: ['0px', '375px', '473', '303', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/imgPic4.png']
                },
                {
                    type: 'image',
                    id: 'springB_src',
                    tag: 'img',
                    rect: ['163px', '81px', '152', '21', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/springB_src.png']
                },
                {
                    type: 'image',
                    id: 'springB_src2',
                    tag: 'img',
                    rect: ['171px', '116px', '152', '21', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/springB_src.png']
                },
                {
                    type: 'image',
                    id: 'springB_src3',
                    tag: 'img',
                    rect: ['179px', '151px', '152', '21', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/springB_src.png']
                },
                {
                    type: 'image',
                    id: 'springB_src4',
                    tag: 'img',
                    rect: ['185px', '186px', '152', '21', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/springB_src.png']
                },
                {
                    type: 'image',
                    id: 'imgPic2',
                    tag: 'img',
                    rect: ['177px', '53px', '115', '182', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/imgPic2.png']
                },
                {
                    type: 'image',
                    id: 'springT_src',
                    tag: 'img',
                    rect: ['171px', '47px', '146', '55', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/springT_src.png']
                },
                {
                    type: 'image',
                    id: 'springT_src2',
                    tag: 'img',
                    rect: ['171px', '82px', '146', '55', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/springT_src.png']
                },
                {
                    type: 'image',
                    id: 'springT_src3',
                    tag: 'img',
                    rect: ['177px', '117px', '146', '55', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/springT_src.png']
                },
                {
                    type: 'image',
                    id: 'springT_src4',
                    tag: 'img',
                    rect: ['185px', '152px', '146', '55', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/springT_src.png']
                },
                {
                    type: 'image',
                    id: 'springT_src5',
                    tag: 'img',
                    rect: ['192px', '187px', '146', '55', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/springT_src.png']
                },
                {
                    type: 'image',
                    id: 'imgPic1',
                    tag: 'img',
                    rect: ['101px', '191px', '248', '353', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/imgPic1.png']
                },
                {
                    type: 'image',
                    id: 'imgPic0',
                    tag: 'img',
                    rect: ['150px', '0px', '162', '92', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/imgPic0.png']
                },
                {
                    id: 'TIRE_CLIP',
                    type: 'rect',
                    rect: ['285px', '92px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TIRE_CLIP',
                symbolName: 'TIRE_CLIP',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_springT_src2}": [
                ["style", "top", '82px'],
                ["style", "left", '171px']
            ],
            "${_springT_src}": [
                ["style", "top", '47px'],
                ["style", "left", '164px']
            ],
            "${_imgPic4}": [
                ["style", "top", '375px'],
                ["style", "left", '0px']
            ],
            "${_TIRE_CLIP}": [
                ["style", "top", '92px'],
                ["style", "left", '285px']
            ],
            "${_imgPic2}": [
                ["style", "left", '177px'],
                ["style", "top", '53px']
            ],
            "${_springT_src5}": [
                ["style", "left", '192px'],
                ["style", "top", '187px']
            ],
            "${_springB_src}": [
                ["style", "top", '81px'],
                ["style", "left", '163px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_springB_src2}": [
                ["style", "top", '116px'],
                ["style", "left", '171px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_springB_src4}": [
                ["style", "top", '186px'],
                ["style", "left", '185px']
            ],
            "${_springT_src3}": [
                ["style", "top", '117px'],
                ["style", "left", '177px']
            ],
            "${symbolSelector}": [
                ["style", "height", '979px'],
                ["style", "width", '584px']
            ],
            "${_imgPic0}": [
                ["style", "left", '150px'],
                ["style", "top", '0px']
            ],
            "${_springT_src4}": [
                ["style", "top", '152px'],
                ["style", "left", '185px']
            ],
            "${_springB_src3}": [
                ["style", "top", '151px'],
                ["style", "left", '179px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_imgPic1}": [
                ["style", "top", '191px'],
                ["style", "left", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: false,
            timeline: [
                { id: "eid142", tween: [ "style", "${_imgPic1}", "left", '98px', { fromValue: '101px'}], position: 0, duration: 169 },
                { id: "eid224", tween: [ "style", "${_imgPic1}", "left", '101px', { fromValue: '98px'}], position: 198, duration: 169 },
                { id: "eid110", tween: [ "style", "${_TIRE_CLIP}", "left", '282px', { fromValue: '285px'}], position: 0, duration: 169 },
                { id: "eid222", tween: [ "style", "${_TIRE_CLIP}", "left", '285px', { fromValue: '282px'}], position: 198, duration: 169 },
                { id: "eid111", tween: [ "style", "${_TIRE_CLIP}", "top", '76px', { fromValue: '92px'}], position: 0, duration: 169 },
                { id: "eid223", tween: [ "style", "${_TIRE_CLIP}", "top", '92px', { fromValue: '76px'}], position: 198, duration: 169 },
                { id: "eid149", tween: [ "transform", "${_springB_src2}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 169 },
                { id: "eid240", tween: [ "transform", "${_springB_src2}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 198, duration: 169 },
                { id: "eid127", tween: [ "style", "${_springB_src}", "left", '164px', { fromValue: '163px'}], position: 0, duration: 169 },
                { id: "eid242", tween: [ "style", "${_springB_src}", "left", '163px', { fromValue: '164px'}], position: 198, duration: 169 },
                { id: "eid118", tween: [ "style", "${_springB_src4}", "top", '174px', { fromValue: '186px'}], position: 0, duration: 169 },
                { id: "eid233", tween: [ "style", "${_springB_src4}", "top", '186px', { fromValue: '174px'}], position: 198, duration: 169 },
                { id: "eid143", tween: [ "style", "${_springT_src3}", "top", '109px', { fromValue: '117px'}], position: 0, duration: 169 },
                { id: "eid230", tween: [ "style", "${_springT_src3}", "top", '117px', { fromValue: '109px'}], position: 198, duration: 169 },
                { id: "eid129", tween: [ "style", "${_imgPic4}", "top", '359px', { fromValue: '375px'}], position: 0, duration: 169 },
                { id: "eid244", tween: [ "style", "${_imgPic4}", "top", '375px', { fromValue: '359px'}], position: 198, duration: 169 },
                { id: "eid132", tween: [ "style", "${_springT_src2}", "top", '78px', { fromValue: '82px'}], position: 0, duration: 169 },
                { id: "eid231", tween: [ "style", "${_springT_src2}", "top", '82px', { fromValue: '78px'}], position: 198, duration: 169 },
                { id: "eid144", tween: [ "style", "${_springB_src3}", "top", '141px', { fromValue: '151px'}], position: 0, duration: 169 },
                { id: "eid235", tween: [ "style", "${_springB_src3}", "top", '151px', { fromValue: '141px'}], position: 198, duration: 169 },
                { id: "eid113", tween: [ "style", "${_springT_src5}", "left", '189px', { fromValue: '192px'}], position: 0, duration: 169 },
                { id: "eid227", tween: [ "style", "${_springT_src5}", "left", '192px', { fromValue: '189px'}], position: 198, duration: 169 },
                { id: "eid145", tween: [ "style", "${_springB_src3}", "left", '176px', { fromValue: '179px'}], position: 0, duration: 169 },
                { id: "eid236", tween: [ "style", "${_springB_src3}", "left", '179px', { fromValue: '176px'}], position: 198, duration: 169 },
                { id: "eid126", tween: [ "style", "${_springB_src}", "top", '79px', { fromValue: '81px'}], position: 0, duration: 169 },
                { id: "eid241", tween: [ "style", "${_springB_src}", "top", '81px', { fromValue: '79px'}], position: 198, duration: 169 },
                { id: "eid141", tween: [ "style", "${_imgPic1}", "top", '175px', { fromValue: '191px'}], position: 0, duration: 169 },
                { id: "eid225", tween: [ "style", "${_imgPic1}", "top", '191px', { fromValue: '175px'}], position: 198, duration: 169 },
                { id: "eid112", tween: [ "style", "${_springT_src5}", "top", '171px', { fromValue: '187px'}], position: 0, duration: 169 },
                { id: "eid226", tween: [ "style", "${_springT_src5}", "top", '187px', { fromValue: '171px'}], position: 198, duration: 169 },
                { id: "eid115", tween: [ "style", "${_springT_src4}", "top", '140px', { fromValue: '152px'}], position: 0, duration: 169 },
                { id: "eid229", tween: [ "style", "${_springT_src4}", "top", '152px', { fromValue: '140px'}], position: 198, duration: 169 },
                { id: "eid130", tween: [ "style", "${_imgPic4}", "left", '-3px', { fromValue: '0px'}], position: 0, duration: 169 },
                { id: "eid245", tween: [ "style", "${_imgPic4}", "left", '0px', { fromValue: '-3px'}], position: 198, duration: 169 },
                { id: "eid114", tween: [ "style", "${_springT_src4}", "left", '183px', { fromValue: '185px'}], position: 0, duration: 169 },
                { id: "eid228", tween: [ "style", "${_springT_src4}", "left", '185px', { fromValue: '183px'}], position: 198, duration: 169 },
                { id: "eid147", tween: [ "style", "${_springB_src2}", "top", '110px', { fromValue: '116px'}], position: 0, duration: 169 },
                { id: "eid238", tween: [ "style", "${_springB_src2}", "top", '116px', { fromValue: '110px'}], position: 198, duration: 169 },
                { id: "eid148", tween: [ "style", "${_springB_src2}", "left", '170px', { fromValue: '171px'}], position: 0, duration: 169 },
                { id: "eid239", tween: [ "style", "${_springB_src2}", "left", '171px', { fromValue: '170px'}], position: 198, duration: 169 },
                { id: "eid146", tween: [ "transform", "${_springB_src3}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 169 },
                { id: "eid237", tween: [ "transform", "${_springB_src3}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 198, duration: 169 },
                { id: "eid131", tween: [ "style", "${_springT_src2}", "left", '170px', { fromValue: '171px'}], position: 0, duration: 169 },
                { id: "eid232", tween: [ "style", "${_springT_src2}", "left", '171px', { fromValue: '170px'}], position: 198, duration: 169 },
                { id: "eid128", tween: [ "transform", "${_springB_src}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 169 },
                { id: "eid243", tween: [ "transform", "${_springB_src}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 198, duration: 169 },
                { id: "eid119", tween: [ "style", "${_springB_src4}", "left", '183px', { fromValue: '185px'}], position: 0, duration: 169 },
                { id: "eid234", tween: [ "style", "${_springB_src4}", "left", '185px', { fromValue: '183px'}], position: 198, duration: 169 }            ]
        }
    }
},
"ALL_CLIP": {
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
                    id: 'MYCLIP',
                    type: 'rect',
                    rect: ['744px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'MYCLIP2',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'MYCLIP2',
                symbolName: 'MYCLIP',
                autoPlay: {

               }
            },
            {
                id: 'MYCLIP',
                symbolName: 'MYCLIP',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_MYCLIP}": [
                ["style", "left", '744px'],
                ["style", "top", '0px']
            ],
            "${_MYCLIP2}": [
                ["transform", "scaleX", '-1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '979px'],
                ["style", "width", '1328px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid251", tween: [ "style", "${_MYCLIP}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 967 },
                { id: "eid255", tween: [ "style", "${_MYCLIP}", "top", '0px', { fromValue: '-10px'}], position: 1000, duration: 967 },
                { id: "eid250", tween: [ "style", "${_MYCLIP2}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 967 },
                { id: "eid254", tween: [ "style", "${_MYCLIP2}", "top", '0px', { fromValue: '-10px'}], position: 1000, duration: 967 }            ]
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
})(jQuery, AdobeEdge, "EDGE-12786895");
