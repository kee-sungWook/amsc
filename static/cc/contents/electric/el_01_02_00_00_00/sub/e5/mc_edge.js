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
                id: 'ENG',
                type: 'rect',
                rect: ['67', '75','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B2',
                type: 'rect',
                rect: ['452px', '520px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_R2',
                type: 'rect',
                rect: ['453px', '542px','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['458px', '602px','150','75','auto', 'auto'],
                text: "WTS",
                align: "auto",
                font: ['굴림', 69, "rgb(76,76,76)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['464px', '45px','1367px','115','auto', 'auto'],
                text: "WTS(냉각수 온도 센서)는 엔진의 온도를 감지하여 <br>ECM으로 입력하고 ECM은 냉각팬제어를 합니다.",
                align: "auto",
                font: ['굴림', 50, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['112px', '45px','312px','94px','auto', 'auto'],
                text: "WTS",
                align: "center",
                font: ['굴림', 75, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'Symbol_1',
                type: 'rect',
                rect: ['163', '443','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_1Copy',
                type: 'rect',
                rect: ['163', '443','auto','auto','auto', 'auto']
            },
            {
                id: 'wts',
                type: 'image',
                rect: ['373px', '484px','101px','108px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wts.png",'0px','0px']
            },
            {
                id: 'ecm2',
                type: 'rect',
                rect: ['776', '343','auto','auto','auto', 'auto']
            },
            {
                id: 'pan_mov',
                type: 'rect',
                rect: ['1432', '363','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_c1Copy',
                type: 'text',
                rect: ['1529px', '284px','150px','54px','auto', 'auto'],
                text: "냉각팬",
                align: "auto",
                font: ['굴림', 45, "rgb(76,76,76)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'FLOW_R2',
                symbolName: 'FLOW_R2',
                autoPlay: {

                }
            },
            {
                id: 'ENG',
                symbolName: 'ENG',
                autoPlay: {

                }
            },
            {
                id: 'pan_mov',
                symbolName: 'pan_mov',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_B2',
                symbolName: 'FLOW_B2',
                autoPlay: {

                }
            },
            {
                id: 'ecm2',
                symbolName: 'ecm',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_1Copy',
                symbolName: 'Symbol_1',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_1',
                symbolName: 'Symbol_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_txt_c1Copy}": [
                ["style", "top", '284px'],
                ["style", "height", '54px'],
                ["style", "width", '150px'],
                ["style", "left", '1529px'],
                ["style", "font-size", '45px']
            ],
            "${_txt2}": [
                ["style", "top", '45px'],
                ["style", "left", '464px'],
                ["style", "width", '1367px']
            ],
            "${_txt1}": [
                ["style", "height", '94px'],
                ["style", "top", '45px'],
                ["style", "left", '112px'],
                ["style", "width", '312px']
            ],
            "${_FLOW_B2}": [
                ["style", "top", '520px'],
                ["style", "left", '452px']
            ],
            "${_FLOW_R2}": [
                ["style", "top", '542px'],
                ["style", "left", '453px']
            ],
            "${_txt_c1}": [
                ["style", "left", '458px'],
                ["style", "top", '602px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1896px'],
                ["style", "height", '996px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Symbol_1Copy}": [
                ["style", "left", '373px'],
                ["style", "top", '442px']
            ],
            "${_wts}": [
                ["style", "top", '484px'],
                ["style", "height", '108px'],
                ["style", "left", '373px'],
                ["style", "width", '101px']
            ],
            "${_ENG}": [
                ["style", "top", '175px'],
                ["style", "left", '41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid29", tween: [ "style", "${_ENG}", "left", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Symbol_1Copy}", "left", '373px', { fromValue: '373px'}], position: 4000, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Symbol_1Copy}", "top", '442px', { fromValue: '442px'}], position: 4000, duration: 0 },
                { id: "eid1", tween: [ "style", "${_ENG}", "top", '175px', { fromValue: '175px'}], position: 0, duration: 0 }            ]
        }
    }
},
"MAP_SENSOR": {
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
                    rect: ['1px', '1px', '220', '169', 'auto', 'auto'],
                    id: 'MAP',
                    fill: ['rgba(0,0,0,0)', 'images/MAP.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '222', '171', 'auto', 'auto'],
                    id: 'whiteLine',
                    fill: ['rgba(0,0,0,0)', 'images/whiteLine.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '222', '171', 'auto', 'auto'],
                    id: 'redLine',
                    fill: ['rgba(0,0,0,0)', 'images/redLine.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '222', '171', 'auto', 'auto'],
                    id: 'redLineCopy',
                    fill: ['rgba(0,0,0,0)', 'images/redLine.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_MAP}": [
                ["style", "left", '1px'],
                ["style", "top", '1px']
            ],
            "${_redLineCopy}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '171px'],
                ["style", "width", '222px']
            ],
            "${_whiteLine}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_redLine}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
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
                { id: "eid40", tween: [ "transform", "${_redLineCopy}", "scaleX", '1.2', { fromValue: '1'}], position: 217, duration: 300 },
                { id: "eid36", tween: [ "transform", "${_redLine}", "scaleX", '1.2', { fromValue: '1'}], position: 67, duration: 300 },
                { id: "eid46", tween: [ "transform", "${_redLineCopy}", "scaleY", '1.2', { fromValue: '1'}], position: 217, duration: 300 },
                { id: "eid37", tween: [ "transform", "${_redLine}", "scaleY", '1.2', { fromValue: '1'}], position: 67, duration: 300 },
                { id: "eid34", tween: [ "style", "${_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid35", tween: [ "style", "${_whiteLine}", "opacity", '0', { fromValue: '1'}], position: 233, duration: 200 },
                { id: "eid42", tween: [ "style", "${_redLineCopy}", "opacity", '1', { fromValue: '0'}], position: 217, duration: 150 },
                { id: "eid44", tween: [ "style", "${_redLineCopy}", "opacity", '0', { fromValue: '1'}], position: 367, duration: 150 },
                { id: "eid38", tween: [ "style", "${_redLine}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 150 },
                { id: "eid39", tween: [ "style", "${_redLine}", "opacity", '0', { fromValue: '1'}], position: 217, duration: 150 }            ]
        }
    }
},
"PULSE_MOVE": {
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
                    id: 'pulse',
                    tag: 'img',
                    rect: ['0px', '0px', '367', '174', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pulse.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pulse}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.3'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '174px'],
                ["style", "width", '367px']
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
                { id: "eid55", tween: [ "style", "${_pulse}", "opacity", '1', { fromValue: '0.3'}], position: 259, duration: 250 },
                { id: "eid56", tween: [ "style", "${_pulse}", "opacity", '0.3', { fromValue: '1'}], position: 750, duration: 250 }            ]
        }
    }
},
"FLOW_R1": {
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
                    rect: ['0px', '0px', '13', '178', 'auto', 'auto'],
                    id: 'flow_r1',
                    fill: ['rgba(0,0,0,0)', 'images/flow_r1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'flow_movie2',
                    type: 'rect',
                    transform: [[0, 0], ['90']],
                    rect: ['-743px', '-574px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'flow_movie2',
                symbolName: 'flow_movie'
            }            ]
        },
    states: {
        "Base State": {
            "${_flow_movie2}": [
                ["style", "top", '-574px'],
                ["style", "left", '-743px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '178px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '13px']
            ],
            "${_flow_r1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
"FLOW_R2": {
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
                    id: 'flow_r2',
                    tag: 'img',
                    rect: ['0px', '0px', '1000px', '13', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_r2.png']
                },
                {
                    id: 'flow_movie3Copy',
                    type: 'rect',
                    rect: ['-625px', '2px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.16667']]
                }
            ],
            symbolInstances: [
            {
                id: 'flow_movie3Copy',
                symbolName: 'flow_movie',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_flow_movie3Copy}": [
                ["transform", "scaleX", '1.16667'],
                ["style", "top", '2px'],
                ["style", "left", '-625px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_flow_r2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1000px']
            ],
            "${symbolSelector}": [
                ["style", "height", '18px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1000px']
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
            ]
        }
    }
},
"FLOW_B1": {
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
                    rect: ['0px', '0px', '13', '140', 'auto', 'auto'],
                    id: 'flow_b1',
                    fill: ['rgba(0,0,0,0)', 'images/flow_b1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'flow_movie2Copy',
                    type: 'rect',
                    rect: ['61', '-630px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'flow_movie2Copy',
                symbolName: 'flow_movie'
            }            ]
        },
    states: {
        "Base State": {
            "${_flow_movie2Copy}": [
                ["style", "top", '-630px'],
                ["style", "left", '-744px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${_flow_b1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '140px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '13px']
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
"FLOW_B2": {
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
                    id: 'flow_b2',
                    tag: 'img',
                    rect: ['0px', '0px', '1000px', '13', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_b2.png']
                },
                {
                    id: 'flow_movie3',
                    type: 'rect',
                    rect: ['-462px', '2px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['180']]
                }
            ],
            symbolInstances: [
            {
                id: 'flow_movie3',
                symbolName: 'flow_movie',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_flow_b2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1000px']
            ],
            "${_flow_movie3}": [
                ["style", "top", '2px'],
                ["style", "left", '-462px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '19px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1000px']
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
            ]
        }
    }
},
"SPARK_FIRE": {
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
                    rect: ['8px', '5px', '52', '51', 'auto', 'auto'],
                    id: 'fireBlack',
                    fill: ['rgba(0,0,0,0)', 'images/fireBlack.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['8px', '5px', '52', '51', 'auto', 'auto'],
                    id: 'fireWhite',
                    fill: ['rgba(0,0,0,0)', 'images/fireWhite.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '68', '65', 'auto', 'auto'],
                    id: 'fire3',
                    fill: ['rgba(0,0,0,0)', 'images/fire3.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['3px', '1px', '61', '63', 'auto', 'auto'],
                    id: 'fire2',
                    fill: ['rgba(0,0,0,0)', 'images/fire2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '68', '65', 'auto', 'auto'],
                    id: 'fire1',
                    fill: ['rgba(0,0,0,0)', 'images/fire1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fire2}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '3px']
            ],
            "${_fire1}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1']
            ],
            "${_fireWhite}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_fireBlack}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_fire3}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '68px']
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
                { id: "eid4", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 56 },
                { id: "eid5", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 56, duration: 56 },
                { id: "eid7", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 111, duration: 56 },
                { id: "eid8", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 167, duration: 56 },
                { id: "eid11", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 222, duration: 56 },
                { id: "eid12", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 278, duration: 56 },
                { id: "eid15", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 56 },
                { id: "eid16", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 389, duration: 56 },
                { id: "eid28", tween: [ "style", "${_fire2}", "opacity", '1', { fromValue: '0'}], position: 162, duration: 81 },
                { id: "eid48", tween: [ "style", "${_fire2}", "opacity", '0', { fromValue: '1'}], position: 243, duration: 81 },
                { id: "eid43", tween: [ "style", "${_fire2}", "opacity", '0', { fromValue: '0'}], position: 325, duration: 0 },
                { id: "eid19", tween: [ "transform", "${_fire3}", "scaleX", '1.2', { fromValue: '1'}], position: 333, duration: 154 },
                { id: "eid22", tween: [ "transform", "${_fire2}", "scaleY", '1.2', { fromValue: '1'}], position: 162, duration: 163 },
                { id: "eid26", tween: [ "style", "${_fire3}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 77 },
                { id: "eid47", tween: [ "style", "${_fire3}", "opacity", '0', { fromValue: '1'}], position: 410, duration: 77 },
                { id: "eid41", tween: [ "style", "${_fire3}", "opacity", '0', { fromValue: '0'}], position: 487, duration: 0 },
                { id: "eid30", tween: [ "style", "${_fire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 81 },
                { id: "eid49", tween: [ "style", "${_fire1}", "opacity", '0', { fromValue: '1'}], position: 81, duration: 81 },
                { id: "eid45", tween: [ "style", "${_fire1}", "opacity", '0', { fromValue: '0'}], position: 162, duration: 0 },
                { id: "eid20", tween: [ "transform", "${_fire3}", "scaleY", '1.2', { fromValue: '1'}], position: 333, duration: 154 },
                { id: "eid2", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 56, duration: 56 },
                { id: "eid6", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 111, duration: 56 },
                { id: "eid9", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 56 },
                { id: "eid10", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 222, duration: 56 },
                { id: "eid13", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 278, duration: 56 },
                { id: "eid14", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 56 },
                { id: "eid17", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 389, duration: 56 },
                { id: "eid18", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 444, duration: 56 },
                { id: "eid21", tween: [ "transform", "${_fire2}", "scaleX", '1.2', { fromValue: '1'}], position: 162, duration: 163 },
                { id: "eid23", tween: [ "transform", "${_fire1}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 162 },
                { id: "eid24", tween: [ "transform", "${_fire1}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 162 }            ]
        }
    }
},
"BOMB": {
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
                    id: 'bombBlack',
                    type: 'image',
                    rect: ['0px', '0px', '184px', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bombBlack.png', '0px', '0px']
                },
                {
                    id: 'bombRed',
                    type: 'image',
                    rect: ['0px', '0px', '184px', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bombRed.png', '0px', '0px']
                },
                {
                    id: 'bombWhite',
                    type: 'image',
                    rect: ['0px', '0px', '184px', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bombWhite.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bombBlack}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${_bombWhite}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${_bombRed}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '184px']
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
                { id: "eid205", tween: [ "style", "${_bombWhite}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 46 },
                { id: "eid209", tween: [ "style", "${_bombWhite}", "opacity", '0', { fromValue: '1'}], position: 46, duration: 46 },
                { id: "eid211", tween: [ "style", "${_bombWhite}", "opacity", '1', { fromValue: '0'}], position: 183, duration: 46 },
                { id: "eid212", tween: [ "style", "${_bombWhite}", "opacity", '0', { fromValue: '1'}], position: 229, duration: 46 },
                { id: "eid207", tween: [ "style", "${_bombBlack}", "opacity", '1', { fromValue: '0'}], position: 92, duration: 46 },
                { id: "eid210", tween: [ "style", "${_bombBlack}", "opacity", '0', { fromValue: '1'}], position: 137, duration: 46 },
                { id: "eid215", tween: [ "style", "${_bombBlack}", "opacity", '1', { fromValue: '0'}], position: 275, duration: 46 },
                { id: "eid216", tween: [ "style", "${_bombBlack}", "opacity", '0', { fromValue: '1'}], position: 321, duration: 46 },
                { id: "eid203", tween: [ "style", "${_bombRed}", "opacity", '1', { fromValue: '0'}], position: 46, duration: 46 },
                { id: "eid208", tween: [ "style", "${_bombRed}", "opacity", '0', { fromValue: '1'}], position: 92, duration: 46 },
                { id: "eid213", tween: [ "style", "${_bombRed}", "opacity", '1', { fromValue: '0'}], position: 229, duration: 46 },
                { id: "eid214", tween: [ "style", "${_bombRed}", "opacity", '0', { fromValue: '1'}], position: 275, duration: 46 }            ]
        }
    }
},
"ENG": {
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
                    rect: ['147px', '197px', '173px', '208px', 'auto', 'auto'],
                    id: 'inBlue',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'block',
                    fill: ['rgba(192,192,192,1)', [50, 50, 'true', 'farthest-corner', [['rgba(0,175,244,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'inRed',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['147px', '197px', '173px', '208px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)', [50, 50, 'true', 'farthest-corner', [['rgba(244,0,114,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    id: 'BOMB',
                    type: 'rect',
                    rect: ['143px', '174px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.03261']]
                },
                {
                    type: 'image',
                    id: 'blinderM',
                    tag: 'img',
                    rect: ['141px', '10px', '188', '235', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blinderM.png']
                },
                {
                    rect: ['273px', '200px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['273px', '209px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['283px', '217px', '175px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['302px', '226px', '156px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['5px', '200px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airRed1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                },
                {
                    rect: ['5px', '209px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airRed2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                },
                {
                    rect: ['5px', '217px', '175px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airRed3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                },
                {
                    rect: ['5px', '226px', '156px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airRed4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                },
                {
                    type: 'image',
                    id: 'blinderS',
                    tag: 'img',
                    rect: ['0px', '196px', '466', '43', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blinderS.png']
                },
                {
                    id: 'CRANK_PISTON',
                    type: 'rect',
                    rect: ['146', '265', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'eng_body',
                    tag: 'img',
                    rect: ['16px', '8px', '436', '741', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/eng_body.png']
                },
                {
                    type: 'image',
                    id: 'valve2',
                    tag: 'img',
                    rect: ['262px', '109px', '90', '123', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/valve2.png']
                },
                {
                    type: 'image',
                    id: 'valve1',
                    tag: 'img',
                    rect: ['117px', '109px', '90', '123', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/valve1.png']
                },
                {
                    transform: [[0, 0], ['110']],
                    tag: 'img',
                    id: 'cam2',
                    type: 'image',
                    rect: ['315px', '49px', '59', '69', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cam2.png']
                },
                {
                    transform: [[0, 0], ['-105']],
                    tag: 'img',
                    id: 'cam1',
                    type: 'image',
                    rect: ['96px', '49px', '59', '69', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cam1.png']
                },
                {
                    type: 'image',
                    id: 'sp_plug',
                    tag: 'img',
                    rect: ['206px', '0px', '58', '224', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sp_plug.png']
                },
                {
                    id: 'SPARK_FIRE',
                    type: 'rect',
                    rect: ['201', '186', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'BOMB',
                symbolName: 'BOMB',
                autoPlay: {

               }
            },
            {
                id: 'SPARK_FIRE',
                symbolName: 'SPARK_FIRE',
                autoPlay: {

               }
            },
            {
                id: 'CRANK_PISTON',
                symbolName: 'CRANK_PISTON',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_eng_body}": [
                ["style", "left", '16px'],
                ["style", "top", '8px']
            ],
            "${_sp_plug}": [
                ["style", "left", '206px'],
                ["style", "top", '0px']
            ],
            "${_airRed1}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
                ["style", "left", '189px'],
                ["style", "width", '2px'],
                ["style", "top", '200px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_airBlue2}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '209px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_BOMB}": [
                ["style", "top", '138px'],
                ["transform", "scaleY", '2.38298'],
                ["style", "left", '143px'],
                ["transform", "scaleX", '1.03261']
            ],
            "${_valve1}": [
                ["style", "left", '117px'],
                ["style", "top", '109px']
            ],
            "${_airBlue1}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '200px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_blinderM}": [
                ["style", "left", '141px'],
                ["style", "top", '10px']
            ],
            "${_airBlue4}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '226px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_airBlue3}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '217px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '749px'],
                ["style", "width", '466px']
            ],
            "${_cam1}": [
                ["style", "top", '49px'],
                ["style", "-webkit-transform-origin", [50,58], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '96px'],
                ["transform", "rotateZ", '-110deg']
            ],
            "${_airRed4}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
                ["style", "left", '161px'],
                ["style", "width", '1px'],
                ["style", "top", '226px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_blinderS}": [
                ["style", "left", '0px'],
                ["style", "top", '196px']
            ],
            "${_cam2}": [
                ["style", "top", '49px'],
                ["style", "-webkit-transform-origin", [50,59], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '315px'],
                ["transform", "rotateZ", '110deg']
            ],
            "${_airRed3}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
                ["style", "left", '179px'],
                ["style", "width", '2px'],
                ["style", "top", '217px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_airRed2}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
                ["style", "left", '189px'],
                ["style", "width", '2px'],
                ["style", "top", '209px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_valve2}": [
                ["style", "left", '262px'],
                ["style", "top", '109px']
            ],
            "${_inBlue}": [
                ["style", "top", '197px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "height", '165px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(0,175,244,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '147px'],
                ["style", "width", '173px']
            ],
            "${_inRed}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '197px'],
                ["style", "opacity", '1'],
                ["style", "height", '1px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(244,0,114,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '147px'],
                ["style", "width", '173px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid93", tween: [ "style", "${_valve1}", "left", '129px', { fromValue: '117px'}], position: 2500, duration: 500 },
                { id: "eid94", tween: [ "style", "${_valve1}", "left", '117px', { fromValue: '129px'}], position: 3000, duration: 1000 },
                { id: "eid160", tween: [ "style", "${_airRed1}", "width", '185px', { fromValue: '2px'}], position: 3000, duration: 533 },
                { id: "eid164", tween: [ "style", "${_airRed1}", "width", '8px', { fromValue: '185px'}], position: 3667, duration: 333 },
                { id: "eid57", tween: [ "transform", "${_cam1}", "rotateZ", '250deg', { fromValue: '-110deg'}], position: 0, duration: 4000 },
                { id: "eid125", tween: [ "style", "${_airBlue4}", "left", '302px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid127", tween: [ "style", "${_airBlue4}", "width", '156px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid134", tween: [ "style", "${_airBlue4}", "width", '1px', { fromValue: '156px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid229", tween: [ "style", "${_inBlue}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid154", tween: [ "style", "${_airRed4}", "width", '156px', { fromValue: '1px'}], position: 3000, duration: 533 },
                { id: "eid162", tween: [ "style", "${_airRed4}", "width", '7px', { fromValue: '156px'}], position: 3667, duration: 333 },
                { id: "eid168", tween: [ "style", "${_inBlue}", "height", '235px', { fromValue: '165px'}], position: 500, duration: 500 },
                { id: "eid171", tween: [ "style", "${_inBlue}", "height", '92px', { fromValue: '235px'}], position: 1000, duration: 1000 },
                { id: "eid156", tween: [ "style", "${_airRed3}", "width", '175px', { fromValue: '2px'}], position: 3000, duration: 533 },
                { id: "eid161", tween: [ "style", "${_airRed3}", "width", '8px', { fromValue: '175px'}], position: 3667, duration: 333 },
                { id: "eid159", tween: [ "style", "${_airRed1}", "left", '5px', { fromValue: '189px'}], position: 3000, duration: 533 },
                { id: "eid158", tween: [ "style", "${_airRed2}", "width", '185px', { fromValue: '2px'}], position: 3000, duration: 533 },
                { id: "eid163", tween: [ "style", "${_airRed2}", "width", '8px', { fromValue: '185px'}], position: 3667, duration: 333 },
                { id: "eid89", tween: [ "style", "${_valve2}", "top", '135px', { fromValue: '109px'}], position: 500, duration: 500 },
                { id: "eid91", tween: [ "style", "${_valve2}", "top", '109px', { fromValue: '135px'}], position: 1000, duration: 1000 },
                { id: "eid131", tween: [ "style", "${_airBlue1}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid135", tween: [ "style", "${_airBlue1}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid121", tween: [ "style", "${_airBlue2}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid117", tween: [ "style", "${_airBlue3}", "left", '283px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid137", tween: [ "style", "${_airBlue3}", "left", '285px', { fromValue: '283px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_airRed4}", "left", '5px', { fromValue: '161px'}], position: 3000, duration: 533 },
                { id: "eid228", tween: [ "style", "${_inRed}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid170", tween: [ "style", "${_inBlue}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid58", tween: [ "transform", "${_cam2}", "rotateZ", '470deg', { fromValue: '110deg'}], position: 0, duration: 4000 },
                { id: "eid123", tween: [ "style", "${_airBlue2}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid133", tween: [ "style", "${_airBlue2}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid129", tween: [ "style", "${_airBlue1}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid155", tween: [ "style", "${_airRed3}", "left", '5px', { fromValue: '179px'}], position: 3000, duration: 533 },
                { id: "eid88", tween: [ "style", "${_valve2}", "left", '247px', { fromValue: '262px'}], position: 500, duration: 500 },
                { id: "eid90", tween: [ "style", "${_valve2}", "left", '262px', { fromValue: '247px'}], position: 1000, duration: 1000 },
                { id: "eid157", tween: [ "style", "${_airRed2}", "left", '5px', { fromValue: '189px'}], position: 3000, duration: 533 },
                { id: "eid119", tween: [ "style", "${_airBlue3}", "width", '175px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid132", tween: [ "style", "${_airBlue3}", "width", '1px', { fromValue: '175px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_valve1}", "top", '132px', { fromValue: '109px'}], position: 2500, duration: 500 },
                { id: "eid95", tween: [ "style", "${_valve1}", "top", '109px', { fromValue: '132px'}], position: 3000, duration: 1000 },
                { id: "eid226", tween: [ "style", "${_inRed}", "height", '235px', { fromValue: '69px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid227", tween: [ "style", "${_inRed}", "height", '71px', { fromValue: '235px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid230", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOMB}', [] ], ""], position: 1833.3333333333 },
                { id: "eid231", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_CRANK_PISTON}', [] ], ""], position: 2000 }            ]
        }
    }
},
"CRANK_PISTON": {
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
                    fill: ['rgba(0,0,0,0)', 'images/pistonBar.png'],
                    id: 'pistonBar',
                    type: 'image',
                    rect: ['54px', '50px', '68', '225', 'auto', 'auto'],
                    tag: 'img'
                },
                {
                    transform: [],
                    fill: ['rgba(0,0,0,0)', 'images/crank.png'],
                    type: 'image',
                    id: 'crank',
                    opacity: 1,
                    rect: ['28px', '211px', '120', '161', 'auto', 'auto'],
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '175', '97', 'auto', 'auto'],
                    id: 'pistonHead',
                    fill: ['rgba(0,0,0,0)', 'images/pistonHead.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crank}": [
                ["style", "-webkit-transform-origin", [50,66], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "opacity", '1'],
                ["style", "left", '28px'],
                ["style", "top", '211px']
            ],
            "${_pistonHead}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_pistonBar}": [
                ["style", "top", '50px'],
                ["style", "-webkit-transform-origin", [50,8], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '54px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '372px'],
                ["style", "width", '175px']
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
                { id: "eid61", tween: [ "style", "${_pistonBar}", "top", '83px', { fromValue: '50px'}], position: 0, duration: 250 },
                { id: "eid65", tween: [ "style", "${_pistonBar}", "top", '144px', { fromValue: '83px'}], position: 250, duration: 250 },
                { id: "eid69", tween: [ "style", "${_pistonBar}", "top", '202px', { fromValue: '144px'}], position: 500, duration: 500 },
                { id: "eid87", tween: [ "style", "${_pistonBar}", "top", '144px', { fromValue: '202px'}], position: 1000, duration: 500 },
                { id: "eid86", tween: [ "style", "${_pistonBar}", "top", '83px', { fromValue: '144px'}], position: 1500, duration: 250 },
                { id: "eid85", tween: [ "style", "${_pistonBar}", "top", '50px', { fromValue: '83px'}], position: 1750, duration: 250 },
                { id: "eid63", tween: [ "transform", "${_pistonBar}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid64", tween: [ "transform", "${_pistonBar}", "rotateZ", '26deg', { fromValue: '20deg'}], position: 250, duration: 250 },
                { id: "eid68", tween: [ "transform", "${_pistonBar}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 500, duration: 500 },
                { id: "eid80", tween: [ "transform", "${_pistonBar}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
                { id: "eid81", tween: [ "transform", "${_pistonBar}", "rotateZ", '-26deg', { fromValue: '-20deg'}], position: 1250, duration: 250 },
                { id: "eid82", tween: [ "transform", "${_pistonBar}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 1500, duration: 500 },
                { id: "eid62", tween: [ "style", "${_pistonHead}", "top", '94px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid70", tween: [ "style", "${_pistonHead}", "top", '133px', { fromValue: '94px'}], position: 500, duration: 500 },
                { id: "eid84", tween: [ "style", "${_pistonHead}", "top", '94px', { fromValue: '133px'}], position: 1000, duration: 500 },
                { id: "eid83", tween: [ "style", "${_pistonHead}", "top", '0px', { fromValue: '94px'}], position: 1500, duration: 500 },
                { id: "eid66", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 0, duration: 250 },
                { id: "eid67", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 250, duration: 250 },
                { id: "eid78", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 1500, duration: 250 },
                { id: "eid79", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 1750, duration: 250 },
                { id: "eid59", tween: [ "transform", "${_crank}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid60", tween: [ "transform", "${_crank}", "rotateZ", '-180deg', { fromValue: '-90deg'}], position: 500, duration: 500 },
                { id: "eid71", tween: [ "transform", "${_crank}", "rotateZ", '-270deg', { fromValue: '-180deg'}], position: 1000, duration: 500 },
                { id: "eid72", tween: [ "transform", "${_crank}", "rotateZ", '-360deg', { fromValue: '-270deg'}], position: 1500, duration: 500 }            ]
        }
    }
},
"airFlow": {
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
                    rect: ['-78px', '0px', '1578', '272', 'auto', 'auto'],
                    id: 'air_src',
                    fill: ['rgba(0,0,0,0)', 'images/air_src.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_air_src}": [
                ["style", "left", '-78px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '272px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1307px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 700,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_air_src}", "left", '-107px', { fromValue: '-78px'}], position: 0, duration: 700 }            ]
        }
    }
},
"flow_movie": {
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
                    id: 'flow_src',
                    tag: 'img',
                    rect: ['0px', '0px', '1786', '8', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '8px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1500px']
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
                { id: "eid2", tween: [ "style", "${_flow_src}", "left", '-63px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"Symbol_1": {
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
                    rect: ['0px', '0px', '13px', '198px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    id: 'line',
                    type: 'image',
                    rect: ['1px', '0', '9px', '199px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/line.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,0,0,1)']
            ],
            "${_line}": [
                ["style", "left", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '198px'],
                ["style", "width", '13px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1633,
            autoPlay: true,
            timeline: [
                { id: "eid75", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(0,95,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1)'}], position: 751, duration: 498 },
                { id: "eid74", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 751 },
                { id: "eid97", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 1249, duration: 384 }            ]
        }
    }
},
"ecm": {
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
                    id: 'ecm',
                    type: 'image',
                    rect: ['0px', '0px', '406px', '387px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ecm.png', '0px', '0px']
                },
                {
                    font: ['굴림', 69, 'rgb(76,76,76)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'txt_c2',
                    text: 'ECM',
                    align: 'auto',
                    rect: ['138px', '149px', '155', '75', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt_c2}": [
                ["style", "left", '138px'],
                ["style", "top", '149px']
            ],
            "${_ecm}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '387px'],
                ["style", "width", '406px']
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
"pan_mov": {
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
                    id: 'fan',
                    type: 'image',
                    rect: ['0px', '0px', '348px', '348px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fan.png', '0px', '0px']
                },
                {
                    id: 'fan01',
                    type: 'image',
                    rect: ['39px', '24px', '270px', '300px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fan01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fan}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_fan01}": [
                ["style", "top", '24px'],
                ["style", "left", '39px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_txt_c1Copy2}": [
                ["style", "top", '283px'],
                ["style", "height", '54px'],
                ["style", "font-size", '45px'],
                ["style", "left", '1528px'],
                ["style", "width", '150px']
            ],
            "${symbolSelector}": [
                ["style", "height", '348px'],
                ["style", "width", '348px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid98", tween: [ "transform", "${_fan01}", "rotateZ", '120deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid99", tween: [ "transform", "${_fan01}", "rotateZ", '360deg', { fromValue: '120deg'}], position: 1000, duration: 800 },
                { id: "eid100", tween: [ "transform", "${_fan01}", "rotateZ", '720deg', { fromValue: '360deg'}], position: 1800, duration: 1200 }            ]
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
})(jQuery, AdobeEdge, "EDGE-36324192");
