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
                id: 'TextCopy2',
                type: 'text',
                rect: ['1058px', '98px','auto','auto','auto', 'auto'],
                text: "정상 머플러",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['953px', '654px','auto','auto','auto', 'auto'],
                text: "파손된 머플러(비정상)",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'all_mov_01',
                type: 'rect',
                rect: ['569', '196','auto','auto','auto', 'auto']
            },
            {
                id: 'all_mov_02',
                type: 'rect',
                rect: ['1164', '868','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'all_mov_02',
                symbolName: 'all_mov_02',
                autoPlay: {

                }
            },
            {
                id: 'all_mov_01',
                symbolName: 'all_mov_01',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_all_mov_02}": [
                ["style", "left", '607px'],
                ["style", "top", '738px']
            ],
            "${_Text}": [
                ["style", "top", '88px'],
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '650px'],
                ["style", "font-size", '45px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '98px'],
                ["style", "left", '1058px'],
                ["style", "font-size", '45px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_TextCopy}": [
                ["style", "top", '654px'],
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '953px'],
                ["style", "font-size", '45px']
            ],
            "${_all_mov_01}": [
                ["style", "left", '607px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2312,
            autoPlay: true,
            timeline: [
                { id: "eid85", tween: [ "style", "${_all_mov_01}", "left", '607px', { fromValue: '607px'}], position: 1544, duration: 0 },
                { id: "eid84", tween: [ "style", "${_all_mov_02}", "left", '607px', { fromValue: '607px'}], position: 1544, duration: 0 },
                { id: "eid83", tween: [ "style", "${_all_mov_02}", "top", '738px', { fromValue: '738px'}], position: 1544, duration: 0 }            ]
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
                    rect: ['-39px', '44px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-30'], [], ['0.5', '0.5']]
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R1',
                    type: 'rect',
                    rect: ['25px', '29px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['16']]
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R2',
                    type: 'rect',
                    rect: ['38px', '52px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['30'], [], ['0.5', '0.5']]
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
            "${_TRUBLE_MOVE_SRC_R2}": [
                ["style", "top", '52px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '30deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '38px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '10px']
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
            "${_TRUBLE_MOVE_SRC_L1}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '-16deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '-27px']
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
                { id: "eid33", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L2}', [] ], ""], position: 666.33333333333 },
                { id: "eid32", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L1}', [] ], ""], position: 666.33333333333 },
                { id: "eid31", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R1}', [] ], ""], position: 666.33333333333 },
                { id: "eid34", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC}', [] ], ""], position: 666.66666666667 },
                { id: "eid35", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R2}', [] ], ""], position: 666.66666666667 }            ]
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
            "${_truble_src}": [
                ["style", "top", '92px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '7px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '10px']
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
"TRUBLE_MOVE_SRC_line": {
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
                { id: "eid17", tween: [ "style", "${_truble_src}", "top", '0px', { fromValue: '92px'}], position: 0, duration: 200 },
                { id: "eid21", tween: [ "style", "${_truble_src}", "top", '-17px', { fromValue: '0px'}], position: 233, duration: 200 },
                { id: "eid19", tween: [ "style", "${_truble_src}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid22", tween: [ "style", "${_truble_src}", "opacity", '0', { fromValue: '1'}], position: 233, duration: 200 },
                { id: "eid15", tween: [ "style", "${_truble_src}", "height", '99px', { fromValue: '7px'}], position: 0, duration: 200 },
                { id: "eid20", tween: [ "style", "${_truble_src}", "height", '16px', { fromValue: '99px'}], position: 233, duration: 200 }            ]
        }
    }
},
"line_01_mov": {
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
                    id: 'line_01',
                    type: 'image',
                    rect: ['0px', '0px', '145px', '29px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/line_01.png', '0px', '0px']
                },
                {
                    id: 'TRUBLE_MOVE_SRC2Copy',
                    type: 'rect',
                    rect: ['362', '59', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC2',
                    type: 'rect',
                    rect: ['362', '59', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC2Copy2',
                    type: 'rect',
                    rect: ['362', '59', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC2Copy3',
                    type: 'rect',
                    rect: ['362', '59', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC2Copy4',
                    type: 'rect',
                    rect: ['362', '59', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TRUBLE_MOVE_SRC2Copy',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC2',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC2Copy4',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC2Copy2',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC2Copy3',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TRUBLE_MOVE_SRC2}": [
                ["style", "top", '42px'],
                ["style", "left", '476px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_TRUBLE_MOVE_SRC2Copy2}": [
                ["style", "top", '42px'],
                ["style", "left", '528px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_TRUBLE_MOVE_SRC2Copy3}": [
                ["style", "top", '42px'],
                ["style", "left", '579px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_TRUBLE_MOVE_SRC2Copy}": [
                ["style", "top", '42px'],
                ["style", "left", '433px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_line_01}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_TRUBLE_MOVE_SRC2Copy4}": [
                ["style", "top", '42px'],
                ["style", "left", '630px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '145px']
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
                { id: "eid6", tween: [ "style", "${_line_01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 133 },
                { id: "eid1", tween: [ "style", "${_line_01}", "left", '737px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid72", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC2Copy}', [] ], ""], position: 433.33333333333 },
                { id: "eid73", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC2}', [] ], ""], position: 533.33333333333 },
                { id: "eid74", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC2Copy2}', [] ], ""], position: 633.33333333333 },
                { id: "eid75", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC2Copy3}', [] ], ""], position: 733.33333333333 },
                { id: "eid76", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC2Copy4}', [] ], ""], position: 833.33333333333 }            ]
        }
    }
},
"line_01_line": {
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
                    id: 'line_01',
                    type: 'image',
                    rect: ['0px', '0px', '145px', '29px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/line_01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '145px']
            ],
            "${_line_01}": [
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
            duration: 1367,
            autoPlay: true,
            timeline: [
                { id: "eid6", tween: [ "style", "${_line_01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 133 },
                { id: "eid1", tween: [ "style", "${_line_01}", "left", '737px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"all_mov_01": {
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
                    id: 'bg_01',
                    type: 'image',
                    rect: ['144px', '0px', '940px', '351px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg_01.png', '0px', '0px']
                },
                {
                    id: 'line_01_mov',
                    type: 'rect',
                    rect: ['-6px', '60px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'line_01_line',
                    type: 'rect',
                    rect: ['309px', '257px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'boby_bg01_1',
                    type: 'image',
                    rect: ['737px', '0px', '187px', '112px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boby_bg01_1.png', '0px', '0px']
                },
                {
                    id: 'boby_bg02',
                    type: 'image',
                    rect: ['142px', '0px', '942px', '352px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boby_bg01.png', '0px', '0px']
                },
                {
                    id: 'boby_bg01_2',
                    type: 'image',
                    rect: ['837px', '211px', '304px', '146px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boby_bg01_2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'line_01_mov',
                symbolName: 'line_01_mov'
            },
            {
                id: 'line_01_line',
                symbolName: 'line_01_line'
            }            ]
        },
    states: {
        "Base State": {
            "${_boby_bg01_2}": [
                ["style", "left", '837px'],
                ["style", "top", '211px']
            ],
            "${_boby_bg01_1}": [
                ["style", "left", '737px'],
                ["style", "top", '0px']
            ],
            "${_bg_01}": [
                ["style", "left", '144px'],
                ["style", "top", '0px']
            ],
            "${_boby_bg02}": [
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_line_01_line}": [
                ["style", "left", '228px'],
                ["style", "top", '243px']
            ],
            "${_line_01_mov}": [
                ["style", "left", '0px'],
                ["style", "top", '60px']
            ],
            "${symbolSelector}": [
                ["style", "height", '357px'],
                ["style", "width", '1141px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 691,
            autoPlay: true,
            timeline: [
                { id: "eid80", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_line_01_line}', [] ], ""], position: 0 },
                { id: "eid81", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_line_01_line}', [] ], ""], position: 691 }            ]
        }
    }
},
"all_mov_02": {
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
                    id: 'bg_01',
                    type: 'image',
                    rect: ['144px', '0px', '940px', '351px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg_01_1.png', '0px', '0px']
                },
                {
                    id: 'line_01_mov',
                    type: 'rect',
                    rect: ['-6px', '60px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'line_01_line',
                    type: 'rect',
                    rect: ['309px', '257px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'boby_bg01_1',
                    type: 'image',
                    rect: ['737px', '0px', '187px', '112px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boby_bg01_1_1.png', '0px', '0px']
                },
                {
                    id: 'boby_bg02',
                    type: 'image',
                    rect: ['142px', '0px', '942px', '352px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boby_bg01.png', '0px', '0px']
                },
                {
                    id: 'boby_bg01_2',
                    type: 'image',
                    rect: ['837px', '211px', '304px', '146px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boby_bg01_2_1.png', '0px', '0px']
                },
                {
                    id: 'boby_bg01_32',
                    type: 'image',
                    rect: ['874px', '58px', '51px', '85px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boby_bg01_3_1.png', '0px', '0px']
                },
                {
                    id: 'TRUBLE_MOVE2',
                    type: 'rect',
                    rect: ['1014', '89', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'line_01_mov',
                symbolName: 'line_01_mov',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE2',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'line_01_line',
                symbolName: 'line_01_line',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_boby_bg01_32}": [
                ["style", "left", '874px'],
                ["style", "top", '58px']
            ],
            "${_boby_bg01_1}": [
                ["style", "left", '737px'],
                ["style", "top", '0px']
            ],
            "${_line_01_line}": [
                ["style", "left", '228px'],
                ["style", "top", '243px']
            ],
            "${_boby_bg01_2}": [
                ["style", "left", '837px'],
                ["style", "top", '211px']
            ],
            "${_line_01_mov}": [
                ["style", "left", '0px'],
                ["style", "top", '60px']
            ],
            "${_boby_bg02}": [
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '357px'],
                ["style", "width", '1141px']
            ],
            "${_bg_01}": [
                ["style", "left", '144px'],
                ["style", "top", '0px']
            ],
            "${_TRUBLE_MOVE2}": [
                ["style", "top", '66px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '955px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2312,
            autoPlay: true,
            timeline: [
                { id: "eid99", tween: [ "style", "${_TRUBLE_MOVE2}", "top", '66px', { fromValue: '66px'}], position: 1544, duration: 0 },
                { id: "eid98", tween: [ "style", "${_TRUBLE_MOVE2}", "left", '955px', { fromValue: '955px'}], position: 1544, duration: 0 },
                { id: "eid97", tween: [ "transform", "${_TRUBLE_MOVE2}", "scaleY", '0.7', { fromValue: '0.7'}], position: 1544, duration: 0 },
                { id: "eid96", tween: [ "transform", "${_TRUBLE_MOVE2}", "scaleX", '0.7', { fromValue: '0.7'}], position: 1544, duration: 0 },
                { id: "eid80", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_line_01_line}', [] ], ""], position: 0 },
                { id: "eid81", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_line_01_line}', [] ], ""], position: 691 },
                { id: "eid86", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE2}', [] ], ""], position: 1112 }            ]
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
})(jQuery, AdobeEdge, "EDGE-3139791");
