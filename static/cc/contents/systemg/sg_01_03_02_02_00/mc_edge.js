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
                id: 'imgBack',
                type: 'image',
                tag: 'img',
                rect: ['450', '78','1540','1006','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgBack.png"]
            },
            {
                id: 'CRANK',
                type: 'rect',
                rect: ['599', '796','auto','auto','auto', 'auto']
            },
            {
                id: 'bottomMover',
                type: 'image',
                tag: 'img',
                rect: ['906', '554','134','341','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bottomMover.png"]
            },
            {
                id: 'WHEEL_MOVER',
                type: 'rect',
                rect: ['780', '565','auto','auto','auto', 'auto']
            },
            {
                id: 'WHEEL_GEAR',
                type: 'rect',
                rect: ['677', '635','auto','auto','auto', 'auto']
            },
            {
                id: 'GEAR_3RD',
                type: 'rect',
                rect: ['1698', '620','auto','auto','auto', 'auto']
            },
            {
                id: 'GEAR_2ND',
                type: 'rect',
                rect: ['1294', '543','auto','auto','auto', 'auto']
            },
            {
                id: 'GEAR_1ST',
                type: 'rect',
                rect: ['1376', '543','auto','auto','auto', 'auto']
            },
            {
                id: 'spring_src1',
                type: 'rect',
                rect: ['1412px', '197px','16px','140px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(236,252,190,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"],
                transform: [[],['12']]
            },
            {
                id: 'spring_src2',
                type: 'rect',
                rect: ['1379px', '197px','16px','140px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(236,252,190,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"],
                transform: [[],['12']]
            },
            {
                id: 'spring_src3',
                type: 'rect',
                rect: ['1347px', '197px','16px','140px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(236,252,190,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"],
                transform: [[],['12']]
            },
            {
                id: 'spring_src4',
                type: 'rect',
                rect: ['1314px', '197px','16px','140px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(236,252,190,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"],
                transform: [[],['12']]
            },
            {
                id: 'mover2',
                type: 'image',
                tag: 'img',
                rect: ['925', '188','394','159','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mover2.png"]
            },
            {
                id: 'mover1',
                type: 'image',
                tag: 'img',
                rect: ['1331', '132','235','271','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mover1.png"]
            },
            {
                id: 'axle',
                type: 'image',
                tag: 'img',
                rect: ['941', '230','99','552','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axle.png"]
            },
            {
                id: 'ARROW_MOVE',
                type: 'rect',
                rect: ['1724', '137','auto','auto','auto', 'auto']
            },
            {
                id: 'text1',
                type: 'text',
                rect: ['1657', '33','479','81','auto', 'auto'],
                text: "전기신호 입력",
                align: "auto",
                font: ['굴림', 74, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'text2',
                type: 'text',
                rect: ['264', '906','304','171','auto', 'auto'],
                text: "크랭크<br>플라이휠",
                align: "right",
                font: ['굴림', 74, "rgb(0,75,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'WHEEL_GEAR',
                symbolName: 'WHEEL_GEAR',
                autoPlay: {

                }
            },
            {
                id: 'GEAR_1ST',
                symbolName: 'GEAR_1ST',
                autoPlay: {

                }
            },
            {
                id: 'GEAR_3RD',
                symbolName: 'GEAR_3RD',
                autoPlay: {

                }
            },
            {
                id: 'CRANK',
                symbolName: 'CRANK',
                autoPlay: {

                }
            },
            {
                id: 'ARROW_MOVE',
                symbolName: 'ARROW_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'GEAR_2ND',
                symbolName: 'GEAR_2ND',
                autoPlay: {

                }
            },
            {
                id: 'WHEEL_MOVER',
                symbolName: 'WHEEL_MOVER',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_axle}": [
                ["style", "-webkit-transform-origin", [45,39], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [45,39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [45,39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [45,39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [45,39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${_WHEEL_GEAR}": [
                ["style", "left", '677px']
            ],
            "${_spring_src4}": [
                ["color", "background-color", 'rgba(236,252,190,1.00)'],
                ["transform", "rotateZ", '12deg'],
                ["style", "height", '140px'],
                ["style", "top", '197px'],
                ["style", "border-width", '2px'],
                ["style", "left", '1314px']
            ],
            "${_WHEEL_MOVER}": [
                ["style", "left", '780px']
            ],
            "${_mover1}": [
                ["style", "left", '1331px']
            ],
            "${_bottomMover}": [
                ["style", "left", '906px']
            ],
            "${_spring_src1}": [
                ["style", "top", '197px'],
                ["transform", "rotateZ", '12deg'],
                ["style", "height", '140px'],
                ["color", "background-color", 'rgba(236,252,190,1.00)'],
                ["style", "left", '1412px'],
                ["style", "border-width", '2px']
            ],
            "${_spring_src2}": [
                ["color", "background-color", 'rgba(236,252,190,1.00)'],
                ["transform", "rotateZ", '12deg'],
                ["style", "height", '140px'],
                ["style", "border-width", '2px'],
                ["style", "left", '1379px'],
                ["style", "top", '197px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_mover2}": [
                ["style", "left", '925px']
            ],
            "${_text1}": [
                ["style", "opacity", '0'],
                ["style", "left", '1657px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_spring_src3}": [
                ["color", "background-color", 'rgba(236,252,190,1.00)'],
                ["transform", "rotateZ", '12deg'],
                ["style", "height", '140px'],
                ["style", "border-width", '2px'],
                ["style", "left", '1347px'],
                ["style", "top", '197px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: true,
            timeline: [
                { id: "eid46", tween: [ "style", "${_WHEEL_MOVER}", "left", '701px', { fromValue: '780px'}], position: 767, duration: 567 },
                { id: "eid92", tween: [ "style", "${_WHEEL_MOVER}", "left", '780px', { fromValue: '701px'}], position: 4567, duration: 567 },
                { id: "eid44", tween: [ "transform", "${_axle}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 767, duration: 567 },
                { id: "eid85", tween: [ "transform", "${_axle}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 4567, duration: 567 },
                { id: "eid38", tween: [ "style", "${_text1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267 },
                { id: "eid56", tween: [ "style", "${_text1}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 267 },
                { id: "eid45", tween: [ "style", "${_bottomMover}", "left", '827px', { fromValue: '906px'}], position: 767, duration: 567 },
                { id: "eid93", tween: [ "style", "${_bottomMover}", "left", '906px', { fromValue: '827px'}], position: 4567, duration: 567 },
                { id: "eid41", tween: [ "style", "${_spring_src3}", "left", '1374px', { fromValue: '1347px'}], position: 767, duration: 567 },
                { id: "eid89", tween: [ "style", "${_spring_src3}", "left", '1347px', { fromValue: '1374px'}], position: 4567, duration: 567 },
                { id: "eid47", tween: [ "style", "${_WHEEL_GEAR}", "left", '598px', { fromValue: '677px'}], position: 767, duration: 567 },
                { id: "eid91", tween: [ "style", "${_WHEEL_GEAR}", "left", '677px', { fromValue: '598px'}], position: 4567, duration: 567 },
                { id: "eid39", tween: [ "style", "${_mover1}", "left", '1356px', { fromValue: '1331px'}], position: 767, duration: 567 },
                { id: "eid86", tween: [ "style", "${_mover1}", "left", '1331px', { fromValue: '1356px'}], position: 4567, duration: 567 },
                { id: "eid40", tween: [ "style", "${_spring_src2}", "left", '1393px', { fromValue: '1379px'}], position: 767, duration: 567 },
                { id: "eid90", tween: [ "style", "${_spring_src2}", "left", '1379px', { fromValue: '1393px'}], position: 4567, duration: 567 },
                { id: "eid43", tween: [ "style", "${_spring_src4}", "left", '1355px', { fromValue: '1314px'}], position: 767, duration: 567 },
                { id: "eid88", tween: [ "style", "${_spring_src4}", "left", '1314px', { fromValue: '1355px'}], position: 4567, duration: 567 },
                { id: "eid42", tween: [ "style", "${_mover2}", "left", '966px', { fromValue: '925px'}], position: 767, duration: 567 },
                { id: "eid87", tween: [ "style", "${_mover2}", "left", '925px', { fromValue: '966px'}], position: 4567, duration: 567 },
                { id: "eid48", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ARROW_MOVE}', [] ], ""], position: 267 },
                { id: "eid54", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_CRANK}', [] ], ""], position: 1333 },
                { id: "eid52", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_GEAR_1ST}', [] ], ""], position: 1333 },
                { id: "eid51", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_GEAR_3RD}', [] ], ""], position: 1333 },
                { id: "eid53", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_GEAR_2ND}', [] ], ""], position: 1333 },
                { id: "eid49", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_WHEEL_GEAR}', [] ], ""], position: 1333 },
                { id: "eid50", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_WHEEL_MOVER}', [] ], ""], position: 1333 },
                { id: "eid57", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ARROW_MOVE}', [0] ], ""], position: 4266.6666666667 },
                { id: "eid97", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_WHEEL_MOVER}', [0] ], ""], position: 4567 },
                { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_GEAR_2ND}', [0] ], ""], position: 4567 },
                { id: "eid95", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_GEAR_3RD}', [0] ], ""], position: 4567 },
                { id: "eid98", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_GEAR_1ST}', [0] ], ""], position: 4567 },
                { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_WHEEL_GEAR}', [0] ], ""], position: 4567 },
                { id: "eid99", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CRANK}', [0] ], ""], position: 4567 }            ]
        }
    }
},
"CRANK": {
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
                    id: 'crankFlyWheel',
                    tag: 'img',
                    rect: ['0px', '-1px', '71', '389', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crankFlyWheel.png']
                },
                {
                    rect: ['4px', '0px', '63', '402', 'auto', 'auto'],
                    tag: 'img',
                    id: 'line_short',
                    transform: [[0, 0], [], [], ['0.9']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/line_short.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '389px'],
                ["style", "width", '71px'],
                ["style", "overflow", 'hidden']
            ],
            "${_crankFlyWheel}": [
                ["style", "left", '0px'],
                ["style", "top", '-1px']
            ],
            "${_line_short}": [
                ["style", "top", '0px'],
                ["style", "left", '4px'],
                ["transform", "scaleX", '0.9']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: false,
            timeline: [
                { id: "eid1", tween: [ "style", "${_line_short}", "top", '-15px', { fromValue: '0px'}], position: 0, duration: 200 }            ]
        }
    }
},
"MOVER_SPRINGS": {
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
                    id: 'mover_spring',
                    tag: 'img',
                    rect: ['0px', '0px', '144', '141', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/mover_spring.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mover_spring}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '141px'],
                ["style", "width", '144px']
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
"ARROW_MOVE": {
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
                    rect: ['0px', '0px', '256', '81', 'auto', 'auto'],
                    id: 'arrow',
                    fill: ['rgba(0,0,0,0)', 'images/arrow.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arrow}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '163px']
            ],
            "${symbolSelector}": [
                ["style", "height", '81px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '256px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid31", tween: [ "style", "${_arrow}", "left", '0px', { fromValue: '163px'}], position: 0, duration: 367 },
                { id: "eid33", tween: [ "style", "${_arrow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 183 },
                { id: "eid36", tween: [ "style", "${_arrow}", "opacity", '0', { fromValue: '1'}], position: 183, duration: 183 }            ]
        }
    }
},
"WHEEL_GEAR": {
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
                    id: 'wheelGear',
                    tag: 'img',
                    rect: ['0px', '0px', '106', '182', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wheelGear.png']
                },
                {
                    rect: ['6px', '0px', '94', '198', 'auto', 'auto'],
                    tag: 'img',
                    id: 'line_long',
                    transform: [[0, 0], [], [], ['0.95']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/line_long.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wheelGear}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_line_long}": [
                ["style", "top", '-16px'],
                ["style", "left", '6px'],
                ["transform", "scaleX", '0.95']
            ],
            "${symbolSelector}": [
                ["style", "height", '181px'],
                ["style", "width", '105px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: false,
            timeline: [
                { id: "eid6", tween: [ "style", "${_line_long}", "top", '0px', { fromValue: '-16px'}], position: 0, duration: 200 }            ]
        }
    }
},
"WHEEL_MOVER": {
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
                    rect: ['0px', '0px', '121', '317', 'auto', 'auto'],
                    id: 'wheelMover',
                    fill: ['rgba(0,0,0,0)', 'images/wheelMover.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['4px', '14px', '112px', '65px', 'auto', 'auto'],
                    id: 'gradi_ract',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(236,252,190,0.00)', [270, [['rgba(255,255,255,0.00)', 10], ['rgba(255,255,255,1.00)', 45], ['rgba(255,255,255,0.87)', 50], ['rgba(255,255,255,0.00)', 90]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wheelMover}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '317px'],
                ["style", "width", '121px']
            ],
            "${_gradi_ract}": [
                ["color", "background-color", 'rgba(236,252,190,0)'],
                ["style", "opacity", '0'],
                ["style", "top", '-17px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',10],['rgba(255,255,255,1.00)',45],['rgba(255,255,255,0.87)',50],['rgba(255,255,255,0.00)',90]]]],
                ["style", "height", '65px'],
                ["style", "border-style", 'none'],
                ["style", "left", '5px'],
                ["style", "width", '112px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 733,
            autoPlay: false,
            timeline: [
                { id: "eid8", tween: [ "style", "${_gradi_ract}", "top", '272px', { fromValue: '-17px'}], position: 0, duration: 733 },
                { id: "eid13", tween: [ "style", "${_gradi_ract}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 82 },
                { id: "eid14", tween: [ "style", "${_gradi_ract}", "opacity", '0', { fromValue: '1'}], position: 651, duration: 82 }            ]
        }
    }
},
"GEAR_3RD": {
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
                    rect: ['0px', '0px', '135px', '204px', 'auto', 'auto'],
                    id: 'back_ract',
                    stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(236,252,190,1.00)']
                },
                {
                    id: 'gearGroup',
                    type: 'group',
                    rect: ['1', '1', '137', '237', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '135px', '16px', 'auto', 'auto'],
                        id: 'gearWing',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(242,253,209,1.00)']
                    },
                    {
                        rect: ['0px', '31px', '135px', '16px', 'auto', 'auto'],
                        id: 'gearWingCopy',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(242,253,209,1.00)']
                    },
                    {
                        rect: ['0px', '63px', '135px', '16px', 'auto', 'auto'],
                        id: 'gearWingCopy3',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(242,253,209,1.00)']
                    },
                    {
                        rect: ['0px', '94px', '135px', '16px', 'auto', 'auto'],
                        id: 'gearWingCopy2',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(242,253,209,1.00)']
                    },
                    {
                        rect: ['0px', '125px', '135px', '16px', 'auto', 'auto'],
                        id: 'gearWingCopy7',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(242,253,209,1.00)']
                    },
                    {
                        rect: ['0px', '157px', '135px', '16px', 'auto', 'auto'],
                        id: 'gearWingCopy6',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(242,253,209,1.00)']
                    },
                    {
                        rect: ['0px', '188px', '135px', '16px', 'auto', 'auto'],
                        id: 'gearWingCopy5',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(242,253,209,1.00)']
                    },
                    {
                        rect: ['0px', '219px', '135px', '16px', 'auto', 'auto'],
                        id: 'gearWingCopy8',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(242,253,209,1.00)']
                    }]
                },
                {
                    rect: ['0px', '0px', '135px', '204px', 'auto', 'auto'],
                    id: 'back_ract_lines',
                    stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(236,252,190,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gearWingCopy8}": [
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "top", '219px'],
                ["style", "border-width", '1px'],
                ["style", "height", '16px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '135px']
            ],
            "${_gearGroup}": [
                ["style", "top", '-30px']
            ],
            "${_gearWingCopy5}": [
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "top", '188px'],
                ["style", "left", '0px'],
                ["style", "height", '16px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '135px']
            ],
            "${_back_ract_lines}": [
                ["color", "background-color", 'rgba(236,252,190,0.00)'],
                ["style", "height", '204px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '135px']
            ],
            "${_gearWingCopy6}": [
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "top", '157px'],
                ["style", "left", '0px'],
                ["style", "height", '16px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '135px']
            ],
            "${_gearWingCopy}": [
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "top", '31px'],
                ["style", "border-width", '1px'],
                ["style", "height", '16px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '135px']
            ],
            "${_gearWingCopy3}": [
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "top", '63px'],
                ["style", "border-width", '1px'],
                ["style", "height", '16px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '135px']
            ],
            "${symbolSelector}": [
                ["style", "height", '208px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '139px']
            ],
            "${_back_ract}": [
                ["color", "background-color", 'rgba(236,252,190,1.00)'],
                ["style", "height", '204px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '135px']
            ],
            "${_gearWingCopy7}": [
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "top", '125px'],
                ["style", "border-width", '1px'],
                ["style", "height", '16px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '135px']
            ],
            "${_gearWing}": [
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '16px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '135px']
            ],
            "${_gearWingCopy2}": [
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "top", '94px'],
                ["style", "left", '0px'],
                ["style", "height", '16px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '135px']
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
                { id: "eid23", tween: [ "style", "${_gearGroup}", "top", '1px', { fromValue: '-30px'}], position: 0, duration: 300 },
                { id: "eid22", tween: [ "color", "${_back_ract_lines}", "background-color", 'rgba(236,252,190,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(236,252,190,0.00)'}], position: 0, duration: 0 }            ]
        }
    }
},
"GEAR_2ND": {
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
                    rect: ['0px', '0px', '409', '368', 'auto', 'auto'],
                    id: 'gear2',
                    fill: ['rgba(0,0,0,0)', 'images/gear2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['3px', '-18px', '403px', '65px', 'auto', 'auto'],
                    id: 'gradi_ract',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(236,252,190,0.00)', [270, [['rgba(255,255,255,0.00)', 10], ['rgba(255,255,255,1.00)', 45], ['rgba(255,255,255,0.87)', 50], ['rgba(255,255,255,0.00)', 90]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gradi_ract}": [
                ["color", "background-color", 'rgba(236,252,190,0)'],
                ["style", "opacity", '0'],
                ["style", "top", '-18px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',10],['rgba(255,255,255,1.00)',45],['rgba(255,255,255,0.87)',50],['rgba(255,255,255,0.00)',90]]]],
                ["style", "height", '65px'],
                ["style", "border-style", 'none'],
                ["style", "left", '3px'],
                ["style", "width", '403px']
            ],
            "${symbolSelector}": [
                ["style", "height", '368px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '409px']
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
            duration: 733,
            autoPlay: false,
            timeline: [
                { id: "eid17", tween: [ "style", "${_gradi_ract}", "top", '316px', { fromValue: '-18px'}], position: 0, duration: 733 },
                { id: "eid19", tween: [ "style", "${_gradi_ract}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 82 },
                { id: "eid20", tween: [ "style", "${_gradi_ract}", "opacity", '0', { fromValue: '1'}], position: 651, duration: 82 }            ]
        }
    }
},
"GEAR_1ST": {
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
                    rect: ['0px', '0px', '202px', '368px', 'auto', 'auto'],
                    id: 'back_ract',
                    stroke: [2, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(236,252,190,1.00)']
                },
                {
                    id: 'gearWing2',
                    type: 'group',
                    rect: ['1', '-55', '200', '423', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '55px', '198px', '34px', 'auto', 'auto'],
                        id: 'gearWing',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(225,240,181,1.00)']
                    },
                    {
                        rect: ['0px', '110px', '198px', '34px', 'auto', 'auto'],
                        id: 'gearWingCopy11',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(225,240,181,1.00)']
                    },
                    {
                        rect: ['0px', '0px', '198px', '34px', 'auto', 'auto'],
                        id: 'gearWingCopy18',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(225,240,181,1.00)']
                    },
                    {
                        rect: ['0px', '166px', '198px', '34px', 'auto', 'auto'],
                        id: 'gearWingCopy13',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(225,240,181,1.00)']
                    },
                    {
                        rect: ['0px', '221px', '198px', '34px', 'auto', 'auto'],
                        id: 'gearWingCopy12',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(225,240,181,1.00)']
                    },
                    {
                        rect: ['0px', '276px', '198px', '34px', 'auto', 'auto'],
                        id: 'gearWingCopy15',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(225,240,181,1.00)']
                    },
                    {
                        rect: ['0px', '332px', '198px', '34px', 'auto', 'auto'],
                        id: 'gearWingCopy14',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(225,240,181,1.00)']
                    },
                    {
                        rect: ['0px', '387px', '198px', '34px', 'auto', 'auto'],
                        id: 'gearWingCopy16',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(225,240,181,1.00)']
                    }]
                },
                {
                    rect: ['0px', '0px', '198px', '364px', 'auto', 'auto'],
                    id: 'back_ract_lines',
                    stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(236,252,190,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gearWingCopy13}": [
                ["color", "background-color", 'rgba(225,240,181,1.00)'],
                ["style", "top", '166px'],
                ["style", "left", '0px'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '198px']
            ],
            "${_gearWingCopy16}": [
                ["color", "background-color", 'rgba(225,240,181,1.00)'],
                ["style", "top", '387px'],
                ["style", "border-width", '1px'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '198px']
            ],
            "${_gearWingCopy12}": [
                ["color", "background-color", 'rgba(225,240,181,1.00)'],
                ["style", "top", '221px'],
                ["style", "border-width", '1px'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '198px']
            ],
            "${_back_ract_lines}": [
                ["color", "background-color", 'rgba(236,252,190,0.00)'],
                ["style", "height", '364px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '198px']
            ],
            "${_gearWingCopy14}": [
                ["color", "background-color", 'rgba(225,240,181,1.00)'],
                ["style", "top", '332px'],
                ["style", "left", '0px'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '198px']
            ],
            "${_gearWing2}": [
                ["style", "top", '-55px']
            ],
            "${_gearWingCopy18}": [
                ["color", "background-color", 'rgba(225,240,181,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '198px']
            ],
            "${symbolSelector}": [
                ["style", "height", '368px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '202px']
            ],
            "${_back_ract}": [
                ["color", "background-color", 'rgba(236,252,190,1.00)'],
                ["style", "height", '368px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '2px'],
                ["style", "width", '202px']
            ],
            "${_gearWingCopy11}": [
                ["color", "background-color", 'rgba(225,240,181,1.00)'],
                ["style", "top", '110px'],
                ["style", "left", '0px'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '198px']
            ],
            "${_gearWingCopy15}": [
                ["color", "background-color", 'rgba(225,240,181,1.00)'],
                ["style", "top", '276px'],
                ["style", "border-width", '1px'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '198px']
            ],
            "${_gearWing}": [
                ["color", "background-color", 'rgba(225,240,181,1.00)'],
                ["style", "top", '55px'],
                ["style", "border-width", '1px'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '198px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            timeline: [
                { id: "eid25", tween: [ "color", "${_back_ract_lines}", "background-color", 'rgba(236,252,190,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(236,252,190,0.00)'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_gearWing2}", "top", '0px', { fromValue: '-55px'}], position: 0, duration: 400 }            ]
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
})(jQuery, AdobeEdge, "EDGE-29648275");
