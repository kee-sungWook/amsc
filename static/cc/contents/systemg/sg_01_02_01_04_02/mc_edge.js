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
                id: 'bady',
                type: 'image',
                tag: 'img',
                rect: ['112', '241','1105','905','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bady.png"]
            },
            {
                id: 'vecuum',
                type: 'image',
                tag: 'img',
                rect: ['175px', '278px','979','264','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vecuum.png"]
            },
            {
                id: 'FLOWS',
                type: 'rect',
                rect: ['188', '438','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWSCopy',
                type: 'rect',
                rect: ['784px', '438','auto','auto','auto', 'auto']
            },
            {
                id: 'VALVE',
                type: 'rect',
                rect: ['424', '685','auto','auto','auto', 'auto']
            },
            {
                id: 'front_thing',
                type: 'image',
                tag: 'img',
                rect: ['165', '478','999','350','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"front_thing.png"]
            },
            {
                id: 'ARROW_R',
                type: 'rect',
                rect: ['534', '826','auto','auto','auto', 'auto']
            },
            {
                id: 'ARROW_B',
                type: 'rect',
                rect: ['620', '509px','auto','auto','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1281', '509','1009','482','auto', 'auto'],
                text: "연료탱크의 연료주입구 마개로서 진공 해제밸브가<br>설치되어 엔진이 정지 되었을때 스프링의 장력에 <br>의해 닫혀, 연료의 증발가스가 대기중으로<br>방출되는 것을 방지한다.<br><br>엔진 작동시는 연료의 소모로 인하여 탱크내의<br>압력에 진공이 발생되므로 밸브가 열려<br>대기압이 유입되도록 되어 있다.<br>",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1281', '380','336','66','auto', 'auto'],
                text: "연료캡이란?",
                align: "right",
                font: ['굴림', 60, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt_title2',
                type: 'text',
                rect: ['290', '65','752','86','auto', 'auto'],
                opacity: 0,
                text: "연료탱크내 진공발생",
                align: "center",
                font: ['굴림', 80, "rgba(0,75,140,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'txt_title1',
                type: 'text',
                rect: ['196', '65','938','86','auto', 'auto'],
                text: "연료탱크내 압력이 있을때",
                align: "center",
                font: ['굴림', 80, "rgba(198,0,95,1.00)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'FLOWSCopy',
                symbolName: 'FLOWS'
            },
            {
                id: 'FLOWS',
                symbolName: 'FLOWS'
            },
            {
                id: 'ARROW_B',
                symbolName: 'ARROW_B'
            },
            {
                id: 'ARROW_R',
                symbolName: 'ARROW_R'
            },
            {
                id: 'VALVE',
                symbolName: 'VALVE'
            }
            ]
        },
    states: {
        "Base State": {
            "${_ARROW_B}": [
                ["style", "top", '509px'],
                ["style", "opacity", '1']
            ],
            "${_txt_title2}": [
                ["color", "color", 'rgba(0,75,140,1.00)'],
                ["style", "opacity", '0']
            ],
            "${_txt_title1}": [
                ["color", "color", 'rgba(198,0,95,1.00)'],
                ["style", "opacity", '1']
            ],
            "${_FLOWSCopy}": [
                ["transform", "scaleX", '-1'],
                ["style", "left", '784px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_ARROW_R}": [
                ["style", "opacity", '1']
            ],
            "${_vecuum}": [
                ["style", "top", '278px'],
                ["style", "opacity", '0'],
                ["style", "left", '175px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7733,
            autoPlay: true,
            timeline: [
                { id: "eid164", tween: [ "style", "${_vecuum}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 189 },
                { id: "eid166", tween: [ "style", "${_vecuum}", "opacity", '0', { fromValue: '1'}], position: 1689, duration: 189 },
                { id: "eid167", tween: [ "style", "${_vecuum}", "opacity", '1', { fromValue: '0'}], position: 1900, duration: 183 },
                { id: "eid168", tween: [ "style", "${_vecuum}", "opacity", '0', { fromValue: '1'}], position: 2084, duration: 183 },
                { id: "eid198", tween: [ "style", "${_vecuum}", "opacity", '1', { fromValue: '0'}], position: 2300, duration: 183 },
                { id: "eid199", tween: [ "style", "${_vecuum}", "opacity", '0', { fromValue: '1'}], position: 2483, duration: 183 },
                { id: "eid171", tween: [ "style", "${_txt_title1}", "opacity", '0', { fromValue: '1'}], position: 1100, duration: 400 },
                { id: "eid196", tween: [ "style", "${_txt_title1}", "opacity", '1', { fromValue: '0'}], position: 5600, duration: 400 },
                { id: "eid172", tween: [ "style", "${_txt_title2}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 400 },
                { id: "eid197", tween: [ "style", "${_txt_title2}", "opacity", '0', { fromValue: '1'}], position: 5600, duration: 400 },
                { id: "eid184", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ARROW_R}', [] ], ""], position: 0 },
                { id: "eid185", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ARROW_B}', [] ], ""], position: 2433 },
                { id: "eid186", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ARROW_R}', [0] ], ""], position: 2433 },
                { id: "eid188", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOWS}', [] ], ""], position: 2464 },
                { id: "eid187", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOWSCopy}', [] ], ""], position: 2464 },
                { id: "eid178", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_VALVE}', [] ], ""], position: 2466.3333333333 },
                { id: "eid189", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_VALVE}', [] ], ""], position: 5997 },
                { id: "eid190", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ARROW_R}', [] ], ""], position: 6197 },
                { id: "eid191", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ARROW_B}', [0] ], ""], position: 6197 }            ]
        }
    }
},
"ARROW_B": {
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
                    rect: ['0px', '0px', '92', '131', 'auto', 'auto'],
                    id: 'arrow_blue',
                    fill: ['rgba(0,0,0,0)', 'images/arrow_blue.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arrow_blue}": [
                ["style", "top", '-131px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '131px'],
                ["style", "width", '92px']
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
                { id: "eid16", tween: [ "style", "${_arrow_blue}", "top", '0px', { fromValue: '-131px'}], position: 0, duration: 400 },
                { id: "eid18", tween: [ "style", "${_arrow_blue}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid19", tween: [ "style", "${_arrow_blue}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 200 }            ]
        }
    }
},
"ARROW_R": {
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
                    rect: ['0px', '0px', '276', '131', 'auto', 'auto'],
                    id: 'arrow_red',
                    fill: ['rgba(0,0,0,0)', 'images/arrow_red.png'],
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
                ["style", "height", '131px'],
                ["style", "width", '276px']
            ],
            "${_arrow_red}": [
                ["style", "top", '99px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
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
                { id: "eid11", tween: [ "style", "${_arrow_red}", "top", '-23px', { fromValue: '99px'}], position: 0, duration: 400 },
                { id: "eid13", tween: [ "style", "${_arrow_red}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid14", tween: [ "style", "${_arrow_red}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 200 }            ]
        }
    }
},
"VALVE": {
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
                    id: 'SPRING_SRC4',
                    type: 'rect',
                    rect: ['23', '104px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SPRING_SRC3',
                    type: 'rect',
                    rect: ['23', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SPRING_SRC2',
                    type: 'rect',
                    rect: ['23', '65px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SPRING_SRC1',
                    type: 'rect',
                    rect: ['23', '45px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '483', '90', 'auto', 'auto'],
                    id: 'valve_head',
                    fill: ['rgba(0,0,0,0)', 'images/valve_head.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            {
                id: 'SPRING_SRC2',
                symbolName: 'SPRING_SRC',
                autoPlay: {

               }
            },
            {
                id: 'SPRING_SRC3',
                symbolName: 'SPRING_SRC',
                autoPlay: {

               }
            },
            {
                id: 'SPRING_SRC1',
                symbolName: 'SPRING_SRC',
                autoPlay: {

               }
            },
            {
                id: 'SPRING_SRC4',
                symbolName: 'SPRING_SRC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_SPRING_SRC3}": [
                ["style", "top", '49px']
            ],
            "${_SPRING_SRC1}": [
                ["style", "top", '-62px']
            ],
            "${_valve_head}": [
                ["style", "left", '0px'],
                ["style", "top", '-107px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '483px']
            ],
            "${_SPRING_SRC2}": [
                ["style", "top", '-7px']
            ],
            "${_SPRING_SRC4}": [
                ["style", "top", '104px']
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
                { id: "eid6", tween: [ "style", "${_SPRING_SRC2}", "top", '65px', { fromValue: '-7px'}], position: 0, duration: 733 },
                { id: "eid8", tween: [ "style", "${_SPRING_SRC3}", "top", '84px', { fromValue: '49px'}], position: 0, duration: 733 },
                { id: "eid2", tween: [ "style", "${_valve_head}", "top", '0px', { fromValue: '-107px'}], position: 0, duration: 733 },
                { id: "eid4", tween: [ "style", "${_SPRING_SRC1}", "top", '45px', { fromValue: '-62px'}], position: 0, duration: 733 }            ]
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
                    transform: [[], ['-83']],
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src1',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-83']],
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src1Copy',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-83']],
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src1Copy2',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-83']],
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src1Copy3',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-83']],
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src1Copy4',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-83']],
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src1Copy5',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-83']],
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src1Copy6',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src1}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-83deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src1Copy2}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-83deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src1Copy3}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-83deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src1Copy6}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-83deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src1Copy5}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-83deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src1Copy4}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-83deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src1Copy}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-83deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 700,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_flow_src1Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid29", tween: [ "style", "${_flow_src1Copy2}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 },
                { id: "eid36", tween: [ "motion", "${_flow_src1Copy5}", [[20, 13, 0, 0],[39.85, -89.74, 22.59, -74.07, 54.28, -177.97],[49.9, -179.07, 6.55, -28.17, 7.37, -31.69],[100.39, -235.65, 76.29, -1, 127.98, -1.68],[147, -237, 0, 0]]], position: 167, duration: 500 },
                { id: "eid20", tween: [ "motion", "${_flow_src1}", [[20, 13, 0, 0],[39.85, -89.74, 22.59, -74.07, 54.28, -177.97],[49.9, -179.07, 6.55, -28.17, 7.37, -31.69],[100.39, -235.65, 76.29, -1, 127.98, -1.68],[147, -237, 0, 0]]], position: 0, duration: 500 },
                { id: "eid22", tween: [ "style", "${_flow_src1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid23", tween: [ "style", "${_flow_src1}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid40", tween: [ "style", "${_flow_src1Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 250 },
                { id: "eid41", tween: [ "style", "${_flow_src1Copy6}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 250 },
                { id: "eid30", tween: [ "motion", "${_flow_src1Copy3}", [[20, 13, 0, 0],[39.85, -89.74, 22.59, -74.07, 54.28, -177.97],[49.9, -179.07, 6.55, -28.17, 7.37, -31.69],[100.39, -235.65, 76.29, -1, 127.98, -1.68],[147, -237, 0, 0]]], position: 100, duration: 500 },
                { id: "eid33", tween: [ "motion", "${_flow_src1Copy4}", [[20, 13, 0, 0],[39.85, -89.74, 22.59, -74.07, 54.28, -177.97],[49.9, -179.07, 6.55, -28.17, 7.37, -31.69],[100.39, -235.65, 76.29, -1, 127.98, -1.68],[147, -237, 0, 0]]], position: 133, duration: 500 },
                { id: "eid27", tween: [ "motion", "${_flow_src1Copy2}", [[20, 13, 0, 0],[39.85, -89.74, 22.59, -74.07, 54.28, -177.97],[49.9, -179.07, 6.55, -28.17, 7.37, -31.69],[100.39, -235.65, 76.29, -1, 127.98, -1.68],[147, -237, 0, 0]]], position: 67, duration: 500 },
                { id: "eid39", tween: [ "motion", "${_flow_src1Copy6}", [[20, 13, 0, 0],[39.85, -89.74, 22.59, -74.07, 54.28, -177.97],[49.9, -179.07, 6.55, -28.17, 7.37, -31.69],[100.39, -235.65, 76.29, -1, 127.98, -1.68],[147, -237, 0, 0]]], position: 200, duration: 500 },
                { id: "eid24", tween: [ "motion", "${_flow_src1Copy}", [[20, 13, 0, 0],[39.85, -89.74, 22.59, -74.07, 54.28, -177.97],[49.9, -179.07, 6.55, -28.17, 7.37, -31.69],[100.39, -235.65, 76.29, -1, 127.98, -1.68],[147, -237, 0, 0]]], position: 33, duration: 500 },
                { id: "eid31", tween: [ "style", "${_flow_src1Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 250 },
                { id: "eid32", tween: [ "style", "${_flow_src1Copy3}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 250 },
                { id: "eid34", tween: [ "style", "${_flow_src1Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 250 },
                { id: "eid35", tween: [ "style", "${_flow_src1Copy4}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 250 },
                { id: "eid25", tween: [ "style", "${_flow_src1Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 250 },
                { id: "eid26", tween: [ "style", "${_flow_src1Copy}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 250 },
                { id: "eid37", tween: [ "style", "${_flow_src1Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 250 },
                { id: "eid38", tween: [ "style", "${_flow_src1Copy5}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 250 }            ]
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
                    rect: ['274px', '140px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src2',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src2Copy2',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src2Copy3',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src2Copy4',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src2Copy5',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src2Copy6',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src2Copy8',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src2Copy8}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '23.5px 17.5px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src2Copy5}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '23.5px 17.5px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src2Copy3}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '23.5px 17.5px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src2}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '23.5px 17.5px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src2Copy2}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '23.5px 17.5px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src2Copy6}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '23.5px 17.5px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src2Copy4}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '23.5px 17.5px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
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
                { id: "eid46", tween: [ "style", "${_flow_src2Copy2}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 350 },
                { id: "eid47", tween: [ "style", "${_flow_src2Copy2}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 350 },
                { id: "eid64", tween: [ "style", "${_flow_src2Copy8}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 350 },
                { id: "eid65", tween: [ "style", "${_flow_src2Copy8}", "opacity", '0', { fromValue: '1'}], position: 550, duration: 350 },
                { id: "eid45", tween: [ "motion", "${_flow_src2Copy2}", [[23.5, 17.5, 0, 0],[70.14, -19.43, 5.7, -18.8, 28.57, -94.31],[78.74, -77.42, 33.09, -114, 15.67, -53.99],[144.09, -114.85, 59.71, -0.49, 15.97, -0.13],[235.62, -114.4, 141.03, 0.05, 51.4, 0.02],[302.29, -46.54, -0.47, 108.55, -0.49, 113.46],[303.08, 111.57, -0.87, 86.74, -0.82, 82.13],[294, 153, 0, 0]]], position: 33, duration: 700 },
                { id: "eid55", tween: [ "style", "${_flow_src2Copy5}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 350 },
                { id: "eid56", tween: [ "style", "${_flow_src2Copy5}", "opacity", '0', { fromValue: '1'}], position: 483, duration: 350 },
                { id: "eid48", tween: [ "motion", "${_flow_src2Copy3}", [[23.5, 17.5, 0, 0],[70.14, -19.43, 5.7, -18.8, 28.57, -94.31],[78.74, -77.42, 33.09, -114, 15.67, -53.99],[144.09, -114.85, 59.71, -0.49, 15.97, -0.13],[235.62, -114.4, 141.03, 0.05, 51.4, 0.02],[302.29, -46.54, -0.47, 108.55, -0.49, 113.46],[303.08, 111.57, -0.87, 86.74, -0.82, 82.13],[294, 153, 0, 0]]], position: 66, duration: 700 },
                { id: "eid58", tween: [ "style", "${_flow_src2Copy6}", "opacity", '1', { fromValue: '0'}], position: 166, duration: 350 },
                { id: "eid59", tween: [ "style", "${_flow_src2Copy6}", "opacity", '0', { fromValue: '1'}], position: 517, duration: 350 },
                { id: "eid42", tween: [ "motion", "${_flow_src2}", [[23.5, 17.5, 0, 0],[70.14, -19.43, 5.7, -18.8, 28.57, -94.31],[78.74, -77.42, 33.09, -114, 15.67, -53.99],[144.09, -114.85, 59.71, -0.49, 15.97, -0.13],[235.62, -114.4, 141.03, 0.05, 51.4, 0.02],[302.29, -46.54, -0.47, 108.55, -0.49, 113.46],[303.08, 111.57, -0.87, 86.74, -0.82, 82.13],[294, 153, 0, 0]]], position: 0, duration: 700 },
                { id: "eid44", tween: [ "style", "${_flow_src2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 350 },
                { id: "eid43", tween: [ "style", "${_flow_src2}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 350 },
                { id: "eid63", tween: [ "motion", "${_flow_src2Copy8}", [[23.5, 17.5, 0, 0],[70.14, -19.43, 5.7, -18.8, 28.57, -94.31],[78.74, -77.42, 33.09, -114, 15.67, -53.99],[144.09, -114.85, 59.71, -0.49, 15.97, -0.13],[235.62, -114.4, 141.03, 0.05, 51.4, 0.02],[302.29, -46.54, -0.47, 108.55, -0.49, 113.46],[303.08, 111.57, -0.87, 86.74, -0.82, 82.13],[294, 153, 0, 0]]], position: 200, duration: 700 },
                { id: "eid49", tween: [ "style", "${_flow_src2Copy3}", "opacity", '1', { fromValue: '0'}], position: 66, duration: 350 },
                { id: "eid50", tween: [ "style", "${_flow_src2Copy3}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 350 },
                { id: "eid54", tween: [ "motion", "${_flow_src2Copy5}", [[23.5, 17.5, 0, 0],[70.14, -19.43, 5.7, -18.8, 28.57, -94.31],[78.74, -77.42, 33.09, -114, 15.67, -53.99],[144.09, -114.85, 59.71, -0.49, 15.97, -0.13],[235.62, -114.4, 141.03, 0.05, 51.4, 0.02],[302.29, -46.54, -0.47, 108.55, -0.49, 113.46],[303.08, 111.57, -0.87, 86.74, -0.82, 82.13],[294, 153, 0, 0]]], position: 133, duration: 700 },
                { id: "eid52", tween: [ "style", "${_flow_src2Copy4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 350 },
                { id: "eid53", tween: [ "style", "${_flow_src2Copy4}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 350 },
                { id: "eid57", tween: [ "motion", "${_flow_src2Copy6}", [[23.5, 17.5, 0, 0],[70.14, -19.43, 5.7, -18.8, 28.57, -94.31],[78.74, -77.42, 33.09, -114, 15.67, -53.99],[144.09, -114.85, 59.71, -0.49, 15.97, -0.13],[235.62, -114.4, 141.03, 0.05, 51.4, 0.02],[302.29, -46.54, -0.47, 108.55, -0.49, 113.46],[303.08, 111.57, -0.87, 86.74, -0.82, 82.13],[294, 153, 0, 0]]], position: 166, duration: 700 },
                { id: "eid51", tween: [ "motion", "${_flow_src2Copy4}", [[23.5, 17.5, 0, 0],[70.14, -19.43, 5.7, -18.8, 28.57, -94.31],[78.74, -77.42, 33.09, -114, 15.67, -53.99],[144.09, -114.85, 59.71, -0.49, 15.97, -0.13],[235.62, -114.4, 141.03, 0.05, 51.4, 0.02],[302.29, -46.54, -0.47, 108.55, -0.49, 113.46],[303.08, 111.57, -0.87, 86.74, -0.82, 82.13],[294, 153, 0, 0]]], position: 100, duration: 700 }            ]
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
                    rect: ['261px', '19px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src3',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['2px', '6px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src3Copy2',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['2px', '6px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src3Copy3',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['2px', '6px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src3Copy4',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['2px', '6px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src3Copy5',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['2px', '6px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src3Copy6',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['2px', '6px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src3Copy7',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src3Copy4}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22px 19px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src3Copy2}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22px 19px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src3Copy5}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22px 19px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src3Copy3}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22px 19px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src3Copy6}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22px 19px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src3Copy7}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22px 19px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src3}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22px 19px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 667,
            autoPlay: false,
            timeline: [
                { id: "eid85", tween: [ "style", "${_flow_src3Copy7}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 233 },
                { id: "eid86", tween: [ "style", "${_flow_src3Copy7}", "opacity", '0', { fromValue: '1'}], position: 433, duration: 233 },
                { id: "eid82", tween: [ "style", "${_flow_src3Copy6}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 233 },
                { id: "eid83", tween: [ "style", "${_flow_src3Copy6}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 233 },
                { id: "eid76", tween: [ "style", "${_flow_src3Copy4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 233 },
                { id: "eid77", tween: [ "style", "${_flow_src3Copy4}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 233 },
                { id: "eid66", tween: [ "motion", "${_flow_src3}", [[22, 19, 0, 0],[100.82, -24.45, 102.79, -119.02, 100.39, -116.23],[245.14, -30.15, 83.99, 99.7, 147.38, 174.94],[284.5, 32.5, 0, 0]]], position: 0, duration: 500 },
                { id: "eid69", tween: [ "motion", "${_flow_src3Copy2}", [[22, 19, 0, 0],[100.82, -24.45, 102.79, -119.02, 100.39, -116.23],[245.14, -30.15, 83.99, 99.7, 147.38, 174.94],[284.5, 32.5, 0, 0]]], position: 33, duration: 467 },
                { id: "eid68", tween: [ "style", "${_flow_src3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid67", tween: [ "style", "${_flow_src3}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid73", tween: [ "style", "${_flow_src3Copy3}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 233 },
                { id: "eid74", tween: [ "style", "${_flow_src3Copy3}", "opacity", '0', { fromValue: '1'}], position: 300, duration: 233 },
                { id: "eid78", tween: [ "motion", "${_flow_src3Copy5}", [[22, 19, 0, 0],[100.82, -24.45, 102.79, -119.02, 100.39, -116.23],[245.14, -30.15, 83.99, 99.7, 147.38, 174.94],[284.5, 32.5, 0, 0]]], position: 133, duration: 467 },
                { id: "eid72", tween: [ "motion", "${_flow_src3Copy3}", [[22, 19, 0, 0],[100.82, -24.45, 102.79, -119.02, 100.39, -116.23],[245.14, -30.15, 83.99, 99.7, 147.38, 174.94],[284.5, 32.5, 0, 0]]], position: 67, duration: 467 },
                { id: "eid70", tween: [ "style", "${_flow_src3Copy2}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 233 },
                { id: "eid71", tween: [ "style", "${_flow_src3Copy2}", "opacity", '0', { fromValue: '1'}], position: 267, duration: 233 },
                { id: "eid84", tween: [ "motion", "${_flow_src3Copy7}", [[22, 19, 0, 0],[100.82, -24.45, 102.79, -119.02, 100.39, -116.23],[245.14, -30.15, 83.99, 99.7, 147.38, 174.94],[284.5, 32.5, 0, 0]]], position: 200, duration: 467 },
                { id: "eid81", tween: [ "motion", "${_flow_src3Copy6}", [[22, 19, 0, 0],[100.82, -24.45, 102.79, -119.02, 100.39, -116.23],[245.14, -30.15, 83.99, 99.7, 147.38, 174.94],[284.5, 32.5, 0, 0]]], position: 167, duration: 467 },
                { id: "eid79", tween: [ "style", "${_flow_src3Copy5}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 233 },
                { id: "eid80", tween: [ "style", "${_flow_src3Copy5}", "opacity", '0', { fromValue: '1'}], position: 367, duration: 233 },
                { id: "eid75", tween: [ "motion", "${_flow_src3Copy4}", [[22, 19, 0, 0],[100.82, -24.45, 102.79, -119.02, 100.39, -116.23],[245.14, -30.15, 83.99, 99.7, 147.38, 174.94],[284.5, 32.5, 0, 0]]], position: 100, duration: 467 }            ]
        }
    }
},
"FLOW4": {
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
                    rect: ['275px', '93px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src4',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['3px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src4Copy2',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['3px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src4Copy3',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['3px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src4Copy4',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['3px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src4Copy5',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['3px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src4Copy6',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['3px', '5px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src4Copy7',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src4Copy4}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22.5px 18px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src4Copy3}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22.5px 18px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src4Copy7}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22.5px 18px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src4Copy5}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22.5px 18px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src4Copy2}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22.5px 18px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src4}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22.5px 18px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src4Copy6}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '22.5px 18px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 667,
            autoPlay: false,
            timeline: [
                { id: "eid91", tween: [ "style", "${_flow_src4Copy2}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 250 },
                { id: "eid92", tween: [ "style", "${_flow_src4Copy2}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 250 },
                { id: "eid103", tween: [ "style", "${_flow_src4Copy6}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 233 },
                { id: "eid104", tween: [ "style", "${_flow_src4Copy6}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 233 },
                { id: "eid87", tween: [ "motion", "${_flow_src4}", [[22.5, 18, 0, 0],[239.44, 19, 203.54, 41.89, 19.36, 3.98],[294.5, 106, 0, 0]]], position: 0, duration: 500 },
                { id: "eid100", tween: [ "style", "${_flow_src4Copy5}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 233 },
                { id: "eid101", tween: [ "style", "${_flow_src4Copy5}", "opacity", '0', { fromValue: '1'}], position: 367, duration: 233 },
                { id: "eid89", tween: [ "style", "${_flow_src4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid88", tween: [ "style", "${_flow_src4}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid105", tween: [ "motion", "${_flow_src4Copy7}", [[22.5, 18, 0, 0],[239.44, 19, 203.54, 41.89, 19.36, 3.98],[294.5, 106, 0, 0]]], position: 200, duration: 467 },
                { id: "eid102", tween: [ "motion", "${_flow_src4Copy6}", [[22.5, 18, 0, 0],[239.44, 19, 203.54, 41.89, 19.36, 3.98],[294.5, 106, 0, 0]]], position: 167, duration: 467 },
                { id: "eid106", tween: [ "style", "${_flow_src4Copy7}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 233 },
                { id: "eid107", tween: [ "style", "${_flow_src4Copy7}", "opacity", '0', { fromValue: '1'}], position: 433, duration: 233 },
                { id: "eid93", tween: [ "motion", "${_flow_src4Copy3}", [[22.5, 18, 0, 0],[239.44, 19, 203.54, 41.89, 19.36, 3.98],[294.5, 106, 0, 0]]], position: 67, duration: 500 },
                { id: "eid94", tween: [ "style", "${_flow_src4Copy3}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid95", tween: [ "style", "${_flow_src4Copy3}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 },
                { id: "eid96", tween: [ "motion", "${_flow_src4Copy4}", [[22.5, 18, 0, 0],[239.44, 19, 203.54, 41.89, 19.36, 3.98],[294.5, 106, 0, 0]]], position: 100, duration: 467 },
                { id: "eid99", tween: [ "motion", "${_flow_src4Copy5}", [[22.5, 18, 0, 0],[239.44, 19, 203.54, 41.89, 19.36, 3.98],[294.5, 106, 0, 0]]], position: 133, duration: 467 },
                { id: "eid97", tween: [ "style", "${_flow_src4Copy4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 233 },
                { id: "eid98", tween: [ "style", "${_flow_src4Copy4}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 233 },
                { id: "eid90", tween: [ "motion", "${_flow_src4Copy2}", [[22.5, 18, 0, 0],[239.44, 19, 203.54, 41.89, 19.36, 3.98],[294.5, 106, 0, 0]]], position: 33, duration: 500 }            ]
        }
    }
},
"FLOW5": {
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
                    transform: [[], ['-180']],
                    rect: ['0px', '0px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src5',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-180']],
                    rect: ['0px', '0px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src5Copy2',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-180']],
                    rect: ['0px', '0px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src5Copy3',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-180']],
                    rect: ['0px', '0px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src5Copy4',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-180']],
                    rect: ['0px', '0px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src5Copy5',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-180']],
                    rect: ['0px', '0px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src5Copy6',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['-180']],
                    rect: ['0px', '0px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src5Copy7',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src5Copy3}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-180deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src5Copy5}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-180deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src5Copy7}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-180deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src5Copy6}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-180deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src5Copy2}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-180deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src5}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-180deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_flow_src5Copy4}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-180deg'],
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 800,
            autoPlay: false,
            timeline: [
                { id: "eid110", tween: [ "style", "${_flow_src5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid109", tween: [ "style", "${_flow_src5}", "opacity", '0', { fromValue: '1'}], position: 300, duration: 300 },
                { id: "eid117", tween: [ "motion", "${_flow_src5Copy4}", [[20, 13, 0, 0],[-29.37, 23.32, -96.19, 18.99, -77.22, 15.25],[-96.02, 94.71, -2.18, 107.04, -2.17, 106.7],[-96.04, 198.68, 6.55, 210.71, 0.63, 20.28],[-29.5, 321.5, 0, 0]]], position: 100, duration: 600 },
                { id: "eid111", tween: [ "motion", "${_flow_src5Copy2}", [[20, 13, 0, 0],[-29.37, 23.32, -96.19, 18.99, -77.22, 15.25],[-96.02, 94.71, -2.18, 107.04, -2.17, 106.7],[-96.04, 198.68, 6.55, 210.71, 0.63, 20.28],[-29.5, 321.5, 0, 0]]], position: 33, duration: 600 },
                { id: "eid127", tween: [ "style", "${_flow_src5Copy7}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 300 },
                { id: "eid128", tween: [ "style", "${_flow_src5Copy7}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 300 },
                { id: "eid114", tween: [ "motion", "${_flow_src5Copy3}", [[20, 13, 0, 0],[-29.37, 23.32, -96.19, 18.99, -77.22, 15.25],[-96.02, 94.71, -2.18, 107.04, -2.17, 106.7],[-96.04, 198.68, 6.55, 210.71, 0.63, 20.28],[-29.5, 321.5, 0, 0]]], position: 67, duration: 600 },
                { id: "eid112", tween: [ "style", "${_flow_src5Copy2}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 300 },
                { id: "eid113", tween: [ "style", "${_flow_src5Copy2}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 300 },
                { id: "eid123", tween: [ "motion", "${_flow_src5Copy6}", [[20, 13, 0, 0],[-29.37, 23.32, -96.19, 18.99, -77.22, 15.25],[-96.02, 94.71, -2.18, 107.04, -2.17, 106.7],[-96.04, 198.68, 6.55, 210.71, 0.63, 20.28],[-29.5, 321.5, 0, 0]]], position: 167, duration: 600 },
                { id: "eid115", tween: [ "style", "${_flow_src5Copy3}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 300 },
                { id: "eid116", tween: [ "style", "${_flow_src5Copy3}", "opacity", '0', { fromValue: '1'}], position: 367, duration: 300 },
                { id: "eid124", tween: [ "style", "${_flow_src5Copy6}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 300 },
                { id: "eid125", tween: [ "style", "${_flow_src5Copy6}", "opacity", '0', { fromValue: '1'}], position: 467, duration: 300 },
                { id: "eid108", tween: [ "motion", "${_flow_src5}", [[20, 13, 0, 0],[-29.37, 23.32, -96.19, 18.99, -77.22, 15.25],[-96.02, 94.71, -2.18, 107.04, -2.17, 106.7],[-96.04, 198.68, 6.55, 210.71, 0.63, 20.28],[-29.5, 321.5, 0, 0]]], position: 0, duration: 600 },
                { id: "eid121", tween: [ "style", "${_flow_src5Copy5}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 300 },
                { id: "eid122", tween: [ "style", "${_flow_src5Copy5}", "opacity", '0', { fromValue: '1'}], position: 433, duration: 300 },
                { id: "eid126", tween: [ "motion", "${_flow_src5Copy7}", [[20, 13, 0, 0],[-29.37, 23.32, -96.19, 18.99, -77.22, 15.25],[-96.02, 94.71, -2.18, 107.04, -2.17, 106.7],[-96.04, 198.68, 6.55, 210.71, 0.63, 20.28],[-29.5, 321.5, 0, 0]]], position: 200, duration: 600 },
                { id: "eid120", tween: [ "motion", "${_flow_src5Copy5}", [[20, 13, 0, 0],[-29.37, 23.32, -96.19, 18.99, -77.22, 15.25],[-96.02, 94.71, -2.18, 107.04, -2.17, 106.7],[-96.04, 198.68, 6.55, 210.71, 0.63, 20.28],[-29.5, 321.5, 0, 0]]], position: 133, duration: 600 },
                { id: "eid118", tween: [ "style", "${_flow_src5Copy4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 300 },
                { id: "eid119", tween: [ "style", "${_flow_src5Copy4}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 300 }            ]
        }
    }
},
"FLOW6": {
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
                    transform: [[], ['90']],
                    rect: ['-7px', '7px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src6',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['90']],
                    rect: ['-7px', '7px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src6Copy',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['90']],
                    rect: ['-7px', '7px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src6Copy2',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['90']],
                    rect: ['-7px', '7px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src6Copy3',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['90']],
                    rect: ['-7px', '7px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src6Copy4',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['90']],
                    rect: ['-7px', '7px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src6Copy5',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    transform: [[], ['90']],
                    rect: ['-7px', '7px', '40', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    id: 'flow_src6Copy6',
                    opacity: 1,
                    autoOrient: 'true',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src6Copy2}": [
                ["style", "top", '7px'],
                ["transform", "rotateZ", '90deg'],
                ["motion", "location", '13px 20px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px']
            ],
            "${_flow_src6Copy5}": [
                ["style", "top", '7px'],
                ["transform", "rotateZ", '90deg'],
                ["motion", "location", '13px 20px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px']
            ],
            "${_flow_src6Copy}": [
                ["style", "top", '7px'],
                ["transform", "rotateZ", '90deg'],
                ["motion", "location", '13px 20px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px']
            ],
            "${_flow_src6Copy4}": [
                ["style", "top", '7px'],
                ["transform", "rotateZ", '90deg'],
                ["motion", "location", '13px 20px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px']
            ],
            "${_flow_src6Copy3}": [
                ["style", "top", '7px'],
                ["transform", "rotateZ", '90deg'],
                ["motion", "location", '13px 20px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px']
            ],
            "${_flow_src6Copy6}": [
                ["style", "top", '7px'],
                ["transform", "rotateZ", '90deg'],
                ["motion", "location", '13px 20px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '26px']
            ],
            "${_flow_src6}": [
                ["style", "top", '7px'],
                ["transform", "rotateZ", '90deg'],
                ["motion", "location", '13px 20px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px']
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
                { id: "eid148", tween: [ "style", "${_flow_src6Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 200 },
                { id: "eid149", tween: [ "style", "${_flow_src6Copy6}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 200 },
                { id: "eid136", tween: [ "style", "${_flow_src6Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 200 },
                { id: "eid137", tween: [ "style", "${_flow_src6Copy2}", "opacity", '0', { fromValue: '1'}], position: 267, duration: 200 },
                { id: "eid139", tween: [ "style", "${_flow_src6Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 200 },
                { id: "eid140", tween: [ "style", "${_flow_src6Copy3}", "opacity", '0', { fromValue: '1'}], position: 300, duration: 200 },
                { id: "eid141", tween: [ "motion", "${_flow_src6Copy4}", [[13, 20, 0, 0],[72, 97.61, 210.24, 145.94, 152.41, 105.8],[202, 142, 0, 0]]], position: 133, duration: 400 },
                { id: "eid147", tween: [ "motion", "${_flow_src6Copy6}", [[13, 20, 0, 0],[72, 97.61, 210.24, 145.94, 152.41, 105.8],[202, 142, 0, 0]]], position: 200, duration: 400 },
                { id: "eid145", tween: [ "style", "${_flow_src6Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 200 },
                { id: "eid146", tween: [ "style", "${_flow_src6Copy5}", "opacity", '0', { fromValue: '1'}], position: 367, duration: 200 },
                { id: "eid144", tween: [ "motion", "${_flow_src6Copy5}", [[13, 20, 0, 0],[72, 97.61, 210.24, 145.94, 152.41, 105.8],[202, 142, 0, 0]]], position: 167, duration: 400 },
                { id: "eid131", tween: [ "style", "${_flow_src6}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid130", tween: [ "style", "${_flow_src6}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 200 },
                { id: "eid132", tween: [ "motion", "${_flow_src6Copy}", [[13, 20, 0, 0],[72, 97.61, 210.24, 145.94, 152.41, 105.8],[202, 142, 0, 0]]], position: 33, duration: 400 },
                { id: "eid135", tween: [ "motion", "${_flow_src6Copy2}", [[13, 20, 0, 0],[72, 97.61, 210.24, 145.94, 152.41, 105.8],[202, 142, 0, 0]]], position: 67, duration: 400 },
                { id: "eid138", tween: [ "motion", "${_flow_src6Copy3}", [[13, 20, 0, 0],[72, 97.61, 210.24, 145.94, 152.41, 105.8],[202, 142, 0, 0]]], position: 100, duration: 400 },
                { id: "eid129", tween: [ "motion", "${_flow_src6}", [[13, 20, 0, 0],[72, 97.61, 210.24, 145.94, 152.41, 105.8],[202, 142, 0, 0]]], position: 0, duration: 400 },
                { id: "eid142", tween: [ "style", "${_flow_src6Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 200 },
                { id: "eid143", tween: [ "style", "${_flow_src6Copy4}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 200 },
                { id: "eid133", tween: [ "style", "${_flow_src6Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 200 },
                { id: "eid134", tween: [ "style", "${_flow_src6Copy}", "opacity", '0', { fromValue: '1'}], position: 233, duration: 200 }            ]
        }
    }
},
"SPRING_SRC": {
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
                    rect: ['0px', '0px', '437px', '17px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(242,253,209,1.00)']
                },
                {
                    rect: ['4px', '3px', '11px', '11px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(213,227,171,1.00)']
                },
                {
                    rect: ['422px', '3px', '11px', '11px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(213,227,171,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EllipseCopy}": [
                ["style", "top", '3px'],
                ["style", "height", '11px'],
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "left", '422px'],
                ["style", "width", '11px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(242,253,209,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '437px']
            ],
            "${_Ellipse}": [
                ["style", "top", '3px'],
                ["style", "height", '11px'],
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "left", '4px'],
                ["style", "width", '11px']
            ],
            "${symbolSelector}": [
                ["style", "height", '19px'],
                ["style", "width", '439px']
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
"FLOWS": {
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
                    id: 'FLOW1',
                    type: 'rect',
                    rect: ['0px', '256px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW2',
                    type: 'rect',
                    rect: ['133px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW3',
                    type: 'rect',
                    rect: ['138px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW4',
                    type: 'rect',
                    rect: ['138px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW5',
                    type: 'rect',
                    rect: ['319px', '179px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW6',
                    type: 'rect',
                    rect: ['211px', '354px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW2',
                symbolName: 'FLOW2',
                autoPlay: {

               }
            },
            {
                id: 'FLOW1',
                symbolName: 'FLOW1',
                autoPlay: {

               }
            },
            {
                id: 'FLOW6',
                symbolName: 'FLOW6',
                autoPlay: {

               }
            },
            {
                id: 'FLOW4',
                symbolName: 'FLOW4',
                autoPlay: {

               }
            },
            {
                id: 'FLOW3',
                symbolName: 'FLOW3',
                autoPlay: {

               }
            },
            {
                id: 'FLOW5',
                symbolName: 'FLOW5',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '394px'],
                ["style", "width", '359px']
            ],
            "${_FLOW2}": [
                ["style", "left", '133px'],
                ["style", "top", '0px']
            ],
            "${_FLOW1}": [
                ["style", "left", '0px'],
                ["style", "top", '256px']
            ],
            "${_FLOW4}": [
                ["style", "left", '138px'],
                ["style", "top", '5px']
            ],
            "${_FLOW3}": [
                ["style", "left", '138px'],
                ["style", "top", '5px']
            ],
            "${_FLOW5}": [
                ["style", "left", '319px'],
                ["style", "top", '179px']
            ],
            "${_FLOW6}": [
                ["style", "left", '211px'],
                ["style", "top", '354px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3533,
            autoPlay: false,
            timeline: [
                { id: "eid150", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW1}', [] ], ""], position: 0 },
                { id: "eid151", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW4}', [] ], ""], position: 467 },
                { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW2}', [] ], ""], position: 467 },
                { id: "eid153", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW3}', [] ], ""], position: 467 },
                { id: "eid154", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW5}', [] ], ""], position: 1134 },
                { id: "eid155", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW1}', [] ], ""], position: 1400 },
                { id: "eid156", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW6}', [] ], ""], position: 1500 },
                { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW3}', [] ], ""], position: 1867 },
                { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW2}', [] ], ""], position: 1867 },
                { id: "eid159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW4}', [] ], ""], position: 1867 },
                { id: "eid160", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW5}', [] ], ""], position: 2534 },
                { id: "eid161", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW6}', [] ], ""], position: 2900 }            ]
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
})(jQuery, AdobeEdge, "EDGE-6680941");
