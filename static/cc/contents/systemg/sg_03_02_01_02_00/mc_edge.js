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
                id: 'movieArea',
                type: 'rect',
                rect: ['86', '697','auto','auto','auto', 'auto']
            },
            {
                id: 'cylinder',
                type: 'image',
                tag: 'img',
                rect: ['30', '680','1429','532','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cylinder.png"]
            },
            {
                id: 'oilArea',
                type: 'image',
                tag: 'img',
                rect: ['360', '17','974','744','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilArea.png"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1538', '329','832','806','auto', 'auto'],
                text: "마스터실린더는 페달을 밟았을때 필요한<br>유압을 발생시키는 장치이다.<br><br>최근에는 앞 뒤 어느 한쪽의 유압계통에<br>브레이크 액이 새어도 남은 한쪽을 <br>안전하게 작동시킬 수 있도록 되어 있는 <br>탠덤(Tandem) 마스터 실린더를 <br>많이 사용하고있다.<br> <br>1차 및 2차 피스톤이 1차실의 보상구멍을<br>지나는 순간부터 유압발생된다. <br><br>피스톤 2차실은 윤활작용 및 오일 누설<br>방지 작용을 하며, 피스톤이 보상구멍을<br>지나는 순간 유압이 발생 됩니다.",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1538', '173','661','86','auto', 'auto'],
                text: "마스터 실린더 란?",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'movieArea',
                symbolName: 'movieArea',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_oilArea}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_movieArea}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_txt2}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["style", "opacity", '0']
            ],
            "${_cylinder}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1133,
            autoPlay: true,
            timeline: [
                { id: "eid114", tween: [ "transform", "${_oilArea}", "scaleX", '1', { fromValue: '0.95'}], position: 133, duration: 433 },
                { id: "eid112", tween: [ "transform", "${_cylinder}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 433 },
                { id: "eid120", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 233 },
                { id: "eid102", tween: [ "style", "${_cylinder}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 433 },
                { id: "eid108", tween: [ "transform", "${_movieArea}", "scaleY", '1', { fromValue: '0.95'}], position: 267, duration: 433 },
                { id: "eid104", tween: [ "style", "${_oilArea}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 433 },
                { id: "eid110", tween: [ "transform", "${_cylinder}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 433 },
                { id: "eid100", tween: [ "style", "${_movieArea}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 433 },
                { id: "eid106", tween: [ "transform", "${_movieArea}", "scaleX", '1', { fromValue: '0.95'}], position: 267, duration: 433 },
                { id: "eid116", tween: [ "transform", "${_oilArea}", "scaleY", '1', { fromValue: '0.95'}], position: 133, duration: 433 },
                { id: "eid118", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 767, duration: 233 }            ]
        }
    }
},
"movieArea": {
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
                    id: 'back',
                    tag: 'img',
                    rect: ['0px', '0px', '1329', '490', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/back.png']
                },
                {
                    id: 'FLOWS4',
                    type: 'rect',
                    rect: ['630px', '297', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOWS3',
                    type: 'rect',
                    rect: ['630', '297', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOWS2',
                    type: 'rect',
                    rect: ['327', '44', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOWS1',
                    type: 'rect',
                    rect: ['913', '2', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'press1',
                    tag: 'img',
                    rect: ['495px', '143px', '322', '155', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/press1.png']
                },
                {
                    type: 'image',
                    id: 'press2',
                    tag: 'img',
                    rect: ['5px', '143px', '343', '155', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/press2.png']
                },
                {
                    id: 'FLOWS-A',
                    type: 'rect',
                    rect: ['974', '143', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOWS-B',
                    type: 'rect',
                    rect: ['400', '143', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SPRING1',
                    type: 'rect',
                    rect: ['6', '157', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SPRING2',
                    type: 'rect',
                    rect: ['658', '157', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'piston1',
                    tag: 'img',
                    rect: ['812px', '142px', '518', '157', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/piston1.png']
                },
                {
                    type: 'image',
                    id: 'piston2',
                    tag: 'img',
                    rect: ['119px', '142px', '590', '157', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/piston2.png']
                }
            ],
            symbolInstances: [
            {
                id: 'SPRING1',
                symbolName: 'SPRING1'
            },
            {
                id: 'FLOWS2',
                symbolName: 'FLOWS2'
            },
            {
                id: 'SPRING2',
                symbolName: 'SPRING2'
            },
            {
                id: 'FLOWS1',
                symbolName: 'FLOWS1'
            },
            {
                id: 'FLOWS-B',
                symbolName: 'FLOWS-B'
            },
            {
                id: 'FLOWS-A',
                symbolName: 'FLOWS-A'
            },
            {
                id: 'FLOWS3',
                symbolName: 'FLOWS3'
            },
            {
                id: 'FLOWS4',
                symbolName: 'FLOWS3'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOWS2}": [
                ["style", "opacity", '0']
            ],
            "${_press1}": [
                ["style", "top", '143px'],
                ["style", "opacity", '0'],
                ["style", "left", '495px'],
                ["style", "width", '322px']
            ],
            "${_FLOWS-A}": [
                ["style", "left", '974px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '490px'],
                ["style", "width", '1330px']
            ],
            "${_piston2}": [
                ["style", "left", '119px'],
                ["style", "top", '142px']
            ],
            "${_back}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_piston1}": [
                ["style", "left", '812px'],
                ["style", "top", '142px']
            ],
            "${_FLOWS3}": [
                ["style", "opacity", '0']
            ],
            "${_FLOWS4}": [
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${_FLOWS-B}": [
                ["style", "left", '400px'],
                ["style", "opacity", '0']
            ],
            "${_SPRING2}": [
                ["style", "left", '658px']
            ],
            "${_FLOWS1}": [
                ["style", "opacity", '0']
            ],
            "${_press2}": [
                ["style", "top", '143px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "width", '343px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4733,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_piston2}", "left", '6px', { fromValue: '119px'}], position: 0, duration: 750 },
                { id: "eid53", tween: [ "style", "${_piston2}", "left", '119px', { fromValue: '6px'}], position: 3250, duration: 750 },
                { id: "eid31", tween: [ "style", "${_SPRING2}", "left", '547px', { fromValue: '658px'}], position: 0, duration: 750 },
                { id: "eid56", tween: [ "style", "${_SPRING2}", "left", '658px', { fromValue: '547px'}], position: 3250, duration: 750 },
                { id: "eid67", tween: [ "style", "${_FLOWS-B}", "left", '288px', { fromValue: '400px'}], position: 0, duration: 750 },
                { id: "eid77", tween: [ "style", "${_FLOWS-B}", "left", '400px', { fromValue: '288px'}], position: 3250, duration: 750 },
                { id: "eid43", tween: [ "style", "${_press1}", "width", '217px', { fromValue: '322px'}], position: 750, duration: 750 },
                { id: "eid60", tween: [ "style", "${_press1}", "width", '322px', { fromValue: '217px'}], position: 2500, duration: 750 },
                { id: "eid44", tween: [ "style", "${_press1}", "opacity", '0.8', { fromValue: '0'}], position: 750, duration: 750 },
                { id: "eid59", tween: [ "style", "${_press1}", "opacity", '0', { fromValue: '0.8'}], position: 2500, duration: 750 },
                { id: "eid70", tween: [ "style", "${_FLOWS-A}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 650 },
                { id: "eid80", tween: [ "style", "${_FLOWS-A}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 650 },
                { id: "eid68", tween: [ "style", "${_FLOWS-A}", "left", '861px', { fromValue: '974px'}], position: 0, duration: 750 },
                { id: "eid81", tween: [ "style", "${_FLOWS-A}", "left", '756px', { fromValue: '861px'}], position: 750, duration: 750 },
                { id: "eid82", tween: [ "style", "${_FLOWS-A}", "left", '861px', { fromValue: '756px'}], position: 2500, duration: 750 },
                { id: "eid79", tween: [ "style", "${_FLOWS-A}", "left", '974px', { fromValue: '861px'}], position: 3250, duration: 750 },
                { id: "eid84", tween: [ "style", "${_FLOWS2}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 650 },
                { id: "eid96", tween: [ "style", "${_FLOWS2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 650 },
                { id: "eid88", tween: [ "style", "${_FLOWS3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 650 },
                { id: "eid97", tween: [ "style", "${_FLOWS3}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 650 },
                { id: "eid90", tween: [ "style", "${_FLOWS4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 650 },
                { id: "eid98", tween: [ "style", "${_FLOWS4}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 650 },
                { id: "eid86", tween: [ "style", "${_FLOWS1}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 650 },
                { id: "eid95", tween: [ "style", "${_FLOWS1}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 650 },
                { id: "eid41", tween: [ "style", "${_press2}", "width", '230px', { fromValue: '343px'}], position: 0, duration: 750 },
                { id: "eid64", tween: [ "style", "${_press2}", "width", '343px', { fromValue: '230px'}], position: 3250, duration: 750 },
                { id: "eid42", tween: [ "style", "${_press2}", "opacity", '0.8', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid63", tween: [ "style", "${_press2}", "opacity", '0', { fromValue: '0.8'}], position: 3250, duration: 750 },
                { id: "eid26", tween: [ "style", "${_piston1}", "left", '699px', { fromValue: '812px'}], position: 0, duration: 750 },
                { id: "eid30", tween: [ "style", "${_piston1}", "left", '594px', { fromValue: '699px'}], position: 750, duration: 750 },
                { id: "eid50", tween: [ "style", "${_piston1}", "left", '699px', { fromValue: '594px'}], position: 2500, duration: 750 },
                { id: "eid49", tween: [ "style", "${_piston1}", "left", '812px', { fromValue: '699px'}], position: 3250, duration: 750 },
                { id: "eid72", tween: [ "style", "${_FLOWS-B}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 650 },
                { id: "eid78", tween: [ "style", "${_FLOWS-B}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 650 },
                { id: "eid39", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SPRING1}', [] ], ""], position: 0 },
                { id: "eid40", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SPRING2}', [] ], ""], position: 750 },
                { id: "eid65", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_SPRING2}', [] ], ""], position: 2500 },
                { id: "eid66", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_SPRING1}', [] ], ""], position: 3250 }            ]
        }
    }
},
"FLOWS1": {
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
                    id: 'flowSrc',
                    type: 'image',
                    rect: ['-154px', '-158px', '416px', '183px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flowSrc}": [
                ["style", "top", '-158px'],
                ["style", "left", '-154px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '142px'],
                ["style", "width", '110px'],
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
                { id: "eid5", tween: [ "style", "${_flowSrc}", "left", '-153px', { fromValue: '-154px'}], position: 0, duration: 200 },
                { id: "eid6", tween: [ "style", "${_flowSrc}", "top", '-141px', { fromValue: '-158px'}], position: 0, duration: 200 }            ]
        }
    }
},
"FLOWS2": {
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
                    id: 'flowSrc2',
                    type: 'image',
                    rect: ['-157px', '-200px', '416px', '183px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '99px'],
                ["style", "overflow", 'hidden']
            ],
            "${_flowSrc2}": [
                ["style", "top", '-200px'],
                ["style", "left", '-157px'],
                ["transform", "rotateZ", '90deg']
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
                { id: "eid8", tween: [ "style", "${_flowSrc2}", "top", '-182px', { fromValue: '-200px'}], position: 0, duration: 200 },
                { id: "eid7", tween: [ "style", "${_flowSrc2}", "left", '-158px', { fromValue: '-157px'}], position: 0, duration: 200 }            ]
        }
    }
},
"FLOWS-A": {
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
                    id: 'flowSrc5',
                    type: 'image',
                    rect: ['0px', '-14px', '416px', '183px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flowSrc5}": [
                ["style", "left", '0px'],
                ["style", "top", '-14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '155px'],
                ["style", "width", '257px'],
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
                { id: "eid16", tween: [ "style", "${_flowSrc5}", "left", '-18px', { fromValue: '0px'}], position: 0, duration: 200 }            ]
        }
    }
},
"FLOWS-B": {
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
                    id: 'flowSrc6',
                    type: 'image',
                    rect: ['0px', '-14px', '416px', '183px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flowSrc6}": [
                ["style", "left", '0px'],
                ["style", "top", '-14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '155px'],
                ["style", "width", '190px'],
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
                { id: "eid17", tween: [ "style", "${_flowSrc6}", "left", '-18px', { fromValue: '0px'}], position: 0, duration: 200 }            ]
        }
    }
},
"FLOWS3": {
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
                    id: 'flowSrc4',
                    type: 'image',
                    rect: ['-158px', '-146px', '416px', '183px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flowSrc4}": [
                ["style", "top", '-146px'],
                ["style", "left", '-158px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '154px'],
                ["style", "width", '97px'],
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
                { id: "eid13", tween: [ "style", "${_flowSrc4}", "left", '-160px', { fromValue: '-158px'}], position: 0, duration: 200 },
                { id: "eid14", tween: [ "style", "${_flowSrc4}", "top", '-128px', { fromValue: '-146px'}], position: 0, duration: 200 }            ]
        }
    }
},
"SPRING1": {
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
                    id: 'sring_src',
                    tag: 'img',
                    rect: ['0px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src2',
                    tag: 'img',
                    rect: ['36px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src3',
                    tag: 'img',
                    rect: ['71px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src4',
                    tag: 'img',
                    rect: ['107px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src5',
                    tag: 'img',
                    rect: ['142px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src6',
                    tag: 'img',
                    rect: ['177px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src7',
                    tag: 'img',
                    rect: ['213px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src8',
                    tag: 'img',
                    rect: ['249px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src9',
                    tag: 'img',
                    rect: ['284px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sring_src5}": [
                ["style", "left", '142px'],
                ["style", "top", '0px']
            ],
            "${_sring_src9}": [
                ["style", "left", '284px'],
                ["style", "top", '0px']
            ],
            "${_sring_src3}": [
                ["style", "left", '71px'],
                ["style", "top", '0px']
            ],
            "${_sring_src}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sring_src7}": [
                ["style", "left", '213px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '125px'],
                ["style", "width", '31px']
            ],
            "${_sring_src2}": [
                ["style", "left", '36px'],
                ["style", "top", '0px']
            ],
            "${_sring_src8}": [
                ["style", "left", '249px'],
                ["style", "top", '0px']
            ],
            "${_sring_src6}": [
                ["style", "left", '177px'],
                ["style", "top", '0px']
            ],
            "${_sring_src4}": [
                ["style", "left", '107px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            timeline: [
                { id: "eid18", tween: [ "style", "${_sring_src2}", "left", '22px', { fromValue: '36px'}], position: 0, duration: 750 },
                { id: "eid24", tween: [ "style", "${_sring_src3}", "left", '43px', { fromValue: '71px'}], position: 0, duration: 750 },
                { id: "eid21", tween: [ "style", "${_sring_src8}", "left", '151px', { fromValue: '249px'}], position: 0, duration: 750 },
                { id: "eid23", tween: [ "style", "${_sring_src7}", "left", '129px', { fromValue: '213px'}], position: 0, duration: 750 },
                { id: "eid25", tween: [ "style", "${_sring_src9}", "left", '172px', { fromValue: '284px'}], position: 0, duration: 750 },
                { id: "eid19", tween: [ "style", "${_sring_src5}", "left", '86px', { fromValue: '142px'}], position: 0, duration: 750 },
                { id: "eid20", tween: [ "style", "${_sring_src6}", "left", '107px', { fromValue: '177px'}], position: 0, duration: 750 },
                { id: "eid22", tween: [ "style", "${_sring_src4}", "left", '64px', { fromValue: '107px'}], position: 0, duration: 750 }            ]
        }
    }
},
"SPRING2": {
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
                    id: 'sring_src',
                    tag: 'img',
                    rect: ['0px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src2',
                    tag: 'img',
                    rect: ['34px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src3',
                    tag: 'img',
                    rect: ['69px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src4',
                    tag: 'img',
                    rect: ['103px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src5',
                    tag: 'img',
                    rect: ['138px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src6',
                    tag: 'img',
                    rect: ['172px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                },
                {
                    type: 'image',
                    id: 'sring_src7',
                    tag: 'img',
                    rect: ['207px', '0px', '31', '125', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sring_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '125px'],
                ["style", "width", '31px']
            ],
            "${_sring_src5}": [
                ["style", "left", '138px'],
                ["style", "top", '0px']
            ],
            "${_sring_src4}": [
                ["style", "left", '103px'],
                ["style", "top", '0px']
            ],
            "${_sring_src7}": [
                ["style", "left", '207px'],
                ["style", "top", '0px']
            ],
            "${_sring_src}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sring_src2}": [
                ["style", "left", '34px'],
                ["style", "top", '0px']
            ],
            "${_sring_src6}": [
                ["style", "left", '172px'],
                ["style", "top", '0px']
            ],
            "${_sring_src3}": [
                ["style", "left", '69px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            timeline: [
                { id: "eid32", tween: [ "style", "${_sring_src2}", "left", '17px', { fromValue: '34px'}], position: 0, duration: 750 },
                { id: "eid33", tween: [ "style", "${_sring_src3}", "left", '33px', { fromValue: '69px'}], position: 0, duration: 750 },
                { id: "eid36", tween: [ "style", "${_sring_src6}", "left", '83px', { fromValue: '172px'}], position: 0, duration: 750 },
                { id: "eid37", tween: [ "style", "${_sring_src7}", "left", '100px', { fromValue: '207px'}], position: 0, duration: 750 },
                { id: "eid35", tween: [ "style", "${_sring_src5}", "left", '67px', { fromValue: '138px'}], position: 0, duration: 750 },
                { id: "eid34", tween: [ "style", "${_sring_src4}", "left", '50px', { fromValue: '103px'}], position: 0, duration: 750 }            ]
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
})(jQuery, AdobeEdge, "EDGE-24392641");
