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
                id: 'car',
                type: 'image',
                tag: 'img',
                rect: ['179', '414','1540','677','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car.png"]
            },
            {
                id: 'wall',
                type: 'image',
                tag: 'img',
                rect: ['47px', '465','38','572','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wall.png"]
            },
            {
                id: 'wallCopy',
                type: 'image',
                tag: 'img',
                rect: ['1852px', '465','38','572','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wall.png"]
            },
            {
                id: 'SIGN',
                type: 'rect',
                rect: ['129', '476','auto','auto','auto', 'auto']
            },
            {
                id: 'tm',
                type: 'image',
                tag: 'img',
                rect: ['750', '738','68','25','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tm.png"]
            },
            {
                id: 'parts',
                type: 'image',
                tag: 'img',
                rect: ['188', '531','1525','443','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts.png"]
            },
            {
                id: 'MODULE',
                type: 'rect',
                rect: ['584', '938','auto','auto','auto', 'auto']
            },
            {
                id: 'R',
                type: 'text',
                rect: ['759', '600','72','106','auto', 'auto'],
                text: "R",
                align: "center",
                font: ['Arial Black', 86, "rgb(0,121,255)", "normal", "none", "normal"]
            },
            {
                id: 'D',
                type: 'text',
                rect: ['759', '600','72','106','auto', 'auto'],
                text: "D",
                align: "center",
                font: ['Arial Black', 86, "rgb(241,89,36)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c3',
                type: 'text',
                rect: ['1456', '391','262','49','auto', 'auto'],
                text: "후방감지센서",
                align: "center",
                font: ['굴림', 43, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c2',
                type: 'text',
                rect: ['181', '391','262','49','auto', 'auto'],
                text: "전방감지센서",
                align: "center",
                font: ['굴림', 43, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['698', '557','176','49','auto', 'auto'],
                text: "변속레버",
                align: "auto",
                font: ['굴림', 43, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['719', '131','1058','106','auto', 'auto'],
                text: "전후방 주차보조시스템은 장애물 존재여부를 확인하여 \r전후진시 편의성을 확보하기 위한 장치 입니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['148', '137','486','76','auto', 'auto'],
                text: "주차보조 시스템",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'MODULE',
                symbolName: 'MODULE',
                autoPlay: {

                }
            },
            {
                id: 'SIGN',
                symbolName: 'SIGN',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_parts}": [
                ["style", "opacity", '0']
            ],
            "${_MODULE}": [
                ["style", "opacity", '0']
            ],
            "${_wall}": [
                ["style", "left", '47px'],
                ["style", "opacity", '0']
            ],
            "${_txt2}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_R}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_tm}": [
                ["style", "opacity", '0']
            ],
            "${_wallCopy}": [
                ["style", "left", '1852px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1930px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_D}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c1}": [
                ["style", "opacity", '0']
            ],
            "${_SIGN}": [
                ["style", "opacity", '0']
            ],
            "${_car}": [
                ["style", "left", '199px'],
                ["style", "opacity", '0']
            ],
            "${_txt_c2}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c3}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9155,
            autoPlay: true,
            labels: {
                "gogo": 1767
            },
            timeline: [
                { id: "eid150", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeOutQuad" },
                { id: "eid143", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 333, easing: "easeOutQuad" },
                { id: "eid165", tween: [ "style", "${_wall}", "left", '135px', { fromValue: '47px'}], position: 2233, duration: 641, easing: "easeOutQuad" },
                { id: "eid171", tween: [ "style", "${_wallCopy}", "opacity", '1', { fromValue: '0'}], position: 5935, duration: 847, easing: "easeOutQuad" },
                { id: "eid182", tween: [ "style", "${_wallCopy}", "opacity", '0', { fromValue: '1'}], position: 8585, duration: 190, easing: "easeOutQuad" },
                { id: "eid152", tween: [ "style", "${_car}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 300, easing: "easeOutQuad" },
                { id: "eid164", tween: [ "style", "${_D}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 233, easing: "easeOutQuad" },
                { id: "eid168", tween: [ "style", "${_D}", "opacity", '0', { fromValue: '1'}], position: 5429, duration: 190, easing: "easeOutQuad" },
                { id: "eid147", tween: [ "transform", "${_txt2}", "scaleX", '1', { fromValue: '0.95'}], position: 233, duration: 333, easing: "easeOutQuad" },
                { id: "eid167", tween: [ "style", "${_wall}", "opacity", '1', { fromValue: '0'}], position: 2233, duration: 641, easing: "easeOutQuad" },
                { id: "eid172", tween: [ "style", "${_wall}", "opacity", '0', { fromValue: '1'}], position: 4761, duration: 225, easing: "easeOutQuad" },
                { id: "eid161", tween: [ "style", "${_parts}", "opacity", '1', { fromValue: '0'}], position: 1033, duration: 200, easing: "easeOutQuad" },
                { id: "eid170", tween: [ "style", "${_wallCopy}", "left", '1732px', { fromValue: '1852px'}], position: 5935, duration: 847, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_car}", "left", '179px', { fromValue: '199px'}], position: 500, duration: 300, easing: "easeOutQuad" },
                { id: "eid169", tween: [ "style", "${_R}", "opacity", '1', { fromValue: '0'}], position: 5619, duration: 253, easing: "easeOutQuad" },
                { id: "eid151", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 333, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_txt_c3}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 200, easing: "easeOutQuad" },
                { id: "eid149", tween: [ "transform", "${_txt2}", "scaleY", '1', { fromValue: '0.95'}], position: 233, duration: 333, easing: "easeOutQuad" },
                { id: "eid163", tween: [ "style", "${_txt_c1}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 200, easing: "easeOutQuad" },
                { id: "eid160", tween: [ "style", "${_txt_c2}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 200, easing: "easeOutQuad" },
                { id: "eid162", tween: [ "style", "${_MODULE}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 200, easing: "easeOutQuad" },
                { id: "eid145", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 333, easing: "easeOutQuad" },
                { id: "eid157", tween: [ "style", "${_SIGN}", "opacity", '1', { fromValue: '0'}], position: 1300, duration: 200, easing: "easeOutQuad" },
                { id: "eid159", tween: [ "style", "${_tm}", "opacity", '1', { fromValue: '0'}], position: 1167, duration: 200, easing: "easeOutQuad" }            ]
        }
    }
},
"SIGNAL": {
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
                    id: 'signal_src',
                    tag: 'img',
                    rect: ['0px', '0px', '140', '140', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                },
                {
                    type: 'image',
                    id: 'signal_srcCopy',
                    tag: 'img',
                    rect: ['0px', '0px', '140', '140', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                },
                {
                    type: 'image',
                    id: 'signal_srcCopy2',
                    tag: 'img',
                    rect: ['0px', '0px', '140', '140', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '140px'],
                ["style", "width", '140px']
            ],
            "${_signal_srcCopy2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_signal_srcCopy}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_signal_src}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
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
            autoPlay: true,
            timeline: [
                { id: "eid6", tween: [ "style", "${_signal_src}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid11", tween: [ "style", "${_signal_src}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 200 },
                { id: "eid13", tween: [ "style", "${_signal_srcCopy}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 200 },
                { id: "eid14", tween: [ "style", "${_signal_srcCopy}", "opacity", '0', { fromValue: '1'}], position: 467, duration: 200 },
                { id: "eid4", tween: [ "transform", "${_signal_src}", "scaleY", '1', { fromValue: '0.4'}], position: 0, duration: 400 },
                { id: "eid2", tween: [ "transform", "${_signal_src}", "scaleX", '1', { fromValue: '0.4'}], position: 0, duration: 400 },
                { id: "eid12", tween: [ "transform", "${_signal_srcCopy}", "scaleX", '1', { fromValue: '0.4'}], position: 267, duration: 400 },
                { id: "eid15", tween: [ "transform", "${_signal_srcCopy}", "scaleY", '1', { fromValue: '0.4'}], position: 267, duration: 400 }            ]
        }
    }
},
"MODULE": {
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
                    id: 'module_signal',
                    tag: 'img',
                    rect: ['1px', '1px', '138', '98', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module_signal.png']
                },
                {
                    type: 'image',
                    id: 'module_whiteLine',
                    tag: 'img',
                    rect: ['0px', '0px', '139', '99', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module_whiteLine.png']
                },
                {
                    type: 'image',
                    id: 'module_normal',
                    tag: 'img',
                    rect: ['1px', '1px', '138', '98', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module_normal.png']
                },
                {
                    font: ['굴림', 36, 'rgb(0,0,0)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'IPM',
                    text: 'IPM\r(BCM)',
                    align: 'center',
                    rect: ['12px', '8px', '114', '77', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_module_whiteLine}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_module_normal}": [
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '139px']
            ],
            "${_module_signal}": [
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["style", "display", 'block']
            ],
            "${_IPM}": [
                ["style", "left", '12px'],
                ["style", "top", '8px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            labels: {
                "normal": 0,
                "signal": 167
            },
            timeline: [
                { id: "eid60", tween: [ "style", "${_module_normal}", "display", 'none', { fromValue: 'block'}], position: 167, duration: 0 },
                { id: "eid56", tween: [ "style", "${_module_whiteLine}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_module_whiteLine}", "display", 'block', { fromValue: 'none'}], position: 167, duration: 0 },
                { id: "eid57", tween: [ "style", "${_module_signal}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_module_signal}", "display", 'block', { fromValue: 'none'}], position: 167, duration: 0 },
                { id: "eid62", tween: [ "style", "${_module_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 100 },
                { id: "eid63", tween: [ "style", "${_module_whiteLine}", "opacity", '0', { fromValue: '0.9966670274734497'}], position: 300, duration: 100 }            ]
        }
    }
},
"SIGNAL_FLOW_M1": {
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
                    id: 'LINE_BLACK',
                    type: 'image',
                    rect: ['-30px', '0px', '441px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_BLACK.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '65px'],
                ["style", "overflow", 'hidden']
            ],
            "${_LINE_BLACK}": [
                ["style", "top", '0px'],
                ["style", "left", '-30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid64", tween: [ "style", "${_LINE_BLACK}", "left", '-18px', { fromValue: '-30px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_M2": {
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
                    id: 'LINE_BLACK2',
                    type: 'image',
                    rect: ['-218px', '194px', '441px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_BLACK.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_BLACK2}": [
                ["style", "top", '194px'],
                ["style", "left", '-218px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '215px'],
                ["style", "width", '5px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid65", tween: [ "style", "${_LINE_BLACK2}", "top", '206px', { fromValue: '194px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_M3": {
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
                    id: 'LINE_BLACK3',
                    type: 'image',
                    rect: ['-30px', '0px', '441px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_BLACK.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_BLACK3}": [
                ["style", "top", '0px'],
                ["style", "left", '-30px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '160px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid66", tween: [ "style", "${_LINE_BLACK3}", "left", '-42px', { fromValue: '-30px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_F1": {
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
                    id: 'LINE_RED',
                    type: 'image',
                    rect: ['-25px', '0px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_RED}": [
                ["style", "left", '-25px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '112px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid67", tween: [ "style", "${_LINE_RED}", "left", '-14px', { fromValue: '-25px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_F2": {
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
                    id: 'LINE_RED2',
                    type: 'image',
                    rect: ['69', '0px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '287px'],
                ["style", "overflow", 'hidden']
            ],
            "${_LINE_RED2}": [
                ["style", "left", '-25px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid69", tween: [ "style", "${_LINE_RED2}", "left", '-13px', { fromValue: '-25px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_F3": {
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
                    id: 'LINE_RED',
                    type: 'image',
                    rect: ['-25px', '0px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_RED}": [
                ["style", "left", '-25px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '112px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid70", tween: [ "style", "${_LINE_RED}", "left", '-14px', { fromValue: '-25px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_F4": {
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
                    id: 'LINE_RED3',
                    type: 'image',
                    rect: ['-333px', '-116px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_RED3}": [
                ["style", "top", '-116px'],
                ["style", "left", '-333px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '208px'],
                ["style", "width", '5px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid71", tween: [ "style", "${_LINE_RED3}", "top", '-128px', { fromValue: '-116px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_F5": {
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
                    id: 'LINE_RED3',
                    type: 'image',
                    rect: ['-333px', '-116px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_RED3}": [
                ["style", "top", '-128px'],
                ["style", "left", '-333px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '206px'],
                ["style", "width", '5px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid73", tween: [ "style", "${_LINE_RED3}", "top", '-116px', { fromValue: '-128px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_F6": {
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
                    id: 'LINE_RED3Copy',
                    type: 'image',
                    rect: ['-333px', '-116px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_RED3Copy}": [
                ["style", "top", '-96px'],
                ["style", "left", '-333px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '4px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid74", tween: [ "style", "${_LINE_RED3Copy}", "top", '-84px', { fromValue: '-96px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_B1": {
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
                    id: 'LINE_REDCopy',
                    type: 'image',
                    rect: ['-25px', '0px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_REDCopy}": [
                ["style", "left", '-14px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '120px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid76", tween: [ "style", "${_LINE_REDCopy}", "left", '-25px', { fromValue: '-14px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_B2": {
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
                    id: 'LINE_REDCopy2',
                    type: 'image',
                    rect: ['-25px', '0px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_REDCopy2}": [
                ["style", "left", '-14px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '542px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid77", tween: [ "style", "${_LINE_REDCopy2}", "left", '-25px', { fromValue: '-14px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_B3": {
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
                    id: 'LINE_REDCopy3',
                    type: 'image',
                    rect: ['-25px', '0px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_REDCopy3}": [
                ["style", "left", '-14px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '120px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid78", tween: [ "style", "${_LINE_REDCopy3}", "left", '-25px', { fromValue: '-14px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_B4": {
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
                    id: 'LINE_RED3Copy2',
                    type: 'image',
                    rect: ['-333px', '-116px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '189px'],
                ["style", "width", '4px'],
                ["style", "overflow", 'hidden']
            ],
            "${_LINE_RED3Copy2}": [
                ["style", "top", '-128px'],
                ["style", "left", '-333px'],
                ["transform", "rotateZ", '90deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid80", tween: [ "style", "${_LINE_RED3Copy2}", "top", '-116px', { fromValue: '-128px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_B5": {
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
                    id: 'LINE_RED3Copy3',
                    type: 'image',
                    rect: ['-333px', '-116px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '189px'],
                ["style", "width", '5px'],
                ["style", "overflow", 'hidden']
            ],
            "${_LINE_RED3Copy3}": [
                ["style", "top", '-116px'],
                ["style", "left", '-333px'],
                ["transform", "rotateZ", '90deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid81", tween: [ "style", "${_LINE_RED3Copy3}", "top", '-128px', { fromValue: '-116px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGNAL_FLOW_B6": {
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
                    id: 'LINE_RED3Copy5',
                    type: 'image',
                    rect: ['-333px', '-116px', '670px', '4px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LINE_RED.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LINE_RED3Copy5}": [
                ["style", "top", '-96px'],
                ["style", "left", '-333px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '239px'],
                ["style", "width", '5px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid84", tween: [ "style", "${_LINE_RED3Copy5}", "top", '-84px', { fromValue: '-96px'}], position: 0, duration: 167 }            ]
        }
    }
},
"SIGN": {
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
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_B7',
                    rect: ['495px', '516px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_B6',
                    rect: ['1034px', '275px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_B5',
                    rect: ['1438px', '274px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_B4',
                    rect: ['1438px', '89px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_B3',
                    rect: ['1438px', '460px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_B2',
                    rect: ['1034px', '275px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_B1',
                    rect: ['1439px', '89px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_R3',
                    rect: ['50px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_R2',
                    rect: ['50px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_R1',
                    rect: ['50px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_F6',
                    rect: ['348px', '273px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_F5',
                    rect: ['237px', '71px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_F4',
                    rect: ['237px', '273px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_F3',
                    rect: ['129px', '478px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_F2',
                    rect: ['65px', '273px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_F1',
                    rect: ['125px', '71px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_FLOW_F1Copy',
                    rect: ['348px', '511px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_L3',
                    rect: ['50px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_L2',
                    rect: ['50px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_L1',
                    rect: ['50px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SIGNAL_handle',
                    rect: ['50px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SIGNAL_FLOW_M3',
                    type: 'rect',
                    rect: ['590px', '482px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SIGNAL_FLOW_M2',
                    type: 'rect',
                    rect: ['746px', '271px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SIGNAL_FLOW_M1',
                    type: 'rect',
                    rect: ['685px', '271px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'SIGNAL_FLOW_B6',
                symbolName: 'SIGNAL_FLOW_B6'
            },
            {
                id: 'SIGNAL_FLOW_B1',
                symbolName: 'SIGNAL_FLOW_B1'
            },
            {
                id: 'SIGNAL_R2',
                symbolName: 'SIGNAL'
            },
            {
                id: 'SIGNAL_FLOW_F1Copy',
                symbolName: 'SIGNAL_FLOW_F1'
            },
            {
                id: 'SIGNAL_FLOW_B7',
                symbolName: 'SIGNAL_FLOW_B2'
            },
            {
                id: 'SIGNAL_FLOW_F5',
                symbolName: 'SIGNAL_FLOW_F5'
            },
            {
                id: 'SIGNAL_FLOW_F1',
                symbolName: 'SIGNAL_FLOW_F1'
            },
            {
                id: 'SIGNAL_FLOW_F6',
                symbolName: 'SIGNAL_FLOW_F6'
            },
            {
                id: 'SIGNAL_FLOW_M3',
                symbolName: 'SIGNAL_FLOW_M3'
            },
            {
                id: 'SIGNAL_FLOW_B5',
                symbolName: 'SIGNAL_FLOW_B5'
            },
            {
                id: 'SIGNAL_FLOW_M1',
                symbolName: 'SIGNAL_FLOW_M1'
            },
            {
                id: 'SIGNAL_FLOW_F4',
                symbolName: 'SIGNAL_FLOW_F4'
            },
            {
                id: 'SIGNAL_FLOW_B2',
                symbolName: 'SIGNAL_FLOW_B2'
            },
            {
                id: 'SIGNAL_FLOW_B3',
                symbolName: 'SIGNAL_FLOW_B3'
            },
            {
                id: 'SIGNAL_L3',
                symbolName: 'SIGNAL'
            },
            {
                id: 'SIGNAL_R3',
                symbolName: 'SIGNAL'
            },
            {
                id: 'SIGNAL_FLOW_M2',
                symbolName: 'SIGNAL_FLOW_M2'
            },
            {
                id: 'SIGNAL_FLOW_F2',
                symbolName: 'SIGNAL_FLOW_F2'
            },
            {
                id: 'SIGNAL_FLOW_F3',
                symbolName: 'SIGNAL_FLOW_F3'
            },
            {
                id: 'SIGNAL_FLOW_B4',
                symbolName: 'SIGNAL_FLOW_B4'
            },
            {
                id: 'SIGNAL_R1',
                symbolName: 'SIGNAL'
            },
            {
                id: 'SIGNAL_handle',
                symbolName: 'SIGNAL'
            },
            {
                id: 'SIGNAL_L1',
                symbolName: 'SIGNAL'
            },
            {
                id: 'SIGNAL_L2',
                symbolName: 'SIGNAL'
            }            ]
        },
    states: {
        "Base State": {
            "${_SIGNAL_FLOW_M1}": [
                ["style", "left", '685px'],
                ["style", "top", '271px']
            ],
            "${_SIGNAL_FLOW_B4}": [
                ["style", "top", '89px'],
                ["style", "left", '1438px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_M2}": [
                ["style", "left", '746px'],
                ["style", "top", '271px']
            ],
            "${_SIGNAL_FLOW_F2}": [
                ["style", "top", '273px'],
                ["style", "left", '65px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_F1Copy}": [
                ["style", "top", '511px'],
                ["style", "left", '348px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '552px'],
                ["style", "width", '1643px']
            ],
            "${_SIGNAL_R2}": [
                ["style", "top", '205px'],
                ["style", "left", '1503px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_R1}": [
                ["style", "top", '20px'],
                ["style", "left", '1485px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_F6}": [
                ["style", "top", '273px'],
                ["style", "left", '348px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_B2}": [
                ["style", "top", '275px'],
                ["style", "left", '1034px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_R3}": [
                ["style", "top", '392px'],
                ["style", "left", '1485px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_B5}": [
                ["style", "top", '274px'],
                ["style", "left", '1438px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_B6}": [
                ["style", "top", '275px'],
                ["style", "left", '1034px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_B1}": [
                ["style", "top", '89px'],
                ["style", "left", '1439px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_M3}": [
                ["style", "left", '590px'],
                ["style", "top", '482px']
            ],
            "${_SIGNAL_handle}": [
                ["style", "top", '321px'],
                ["transform", "scaleY", '1.35'],
                ["transform", "scaleX", '1.35'],
                ["style", "left", '558px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_L1}": [
                ["style", "display", 'none'],
                ["style", "left", '50px'],
                ["style", "top", '0px']
            ],
            "${_SIGNAL_FLOW_F3}": [
                ["style", "top", '478px'],
                ["style", "left", '129px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_F5}": [
                ["style", "top", '71px'],
                ["style", "left", '237px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_L2}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '205px']
            ],
            "${_SIGNAL_FLOW_F4}": [
                ["style", "top", '273px'],
                ["style", "left", '237px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_B7}": [
                ["style", "top", '516px'],
                ["style", "left", '495px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_L3}": [
                ["style", "display", 'none'],
                ["style", "left", '52px'],
                ["style", "top", '412px']
            ],
            "${_SIGNAL_FLOW_F1}": [
                ["style", "top", '71px'],
                ["style", "left", '125px'],
                ["style", "display", 'none']
            ],
            "${_SIGNAL_FLOW_B3}": [
                ["style", "top", '460px'],
                ["style", "left", '1438px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "front": 1000,
                "rear": 2000
            },
            timeline: [
                { id: "eid105", tween: [ "style", "${_SIGNAL_handle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_SIGNAL_handle}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid46", tween: [ "transform", "${_SIGNAL_handle}", "scaleX", '1.35', { fromValue: '1.35'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_SIGNAL_R3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130", tween: [ "style", "${_SIGNAL_R3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid90", tween: [ "style", "${_SIGNAL_FLOW_F2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_SIGNAL_FLOW_F2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid123", tween: [ "style", "${_SIGNAL_FLOW_F2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid101", tween: [ "style", "${_SIGNAL_FLOW_B4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid134", tween: [ "style", "${_SIGNAL_FLOW_B4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid103", tween: [ "style", "${_SIGNAL_FLOW_B6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid136", tween: [ "style", "${_SIGNAL_FLOW_B6}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid47", tween: [ "transform", "${_SIGNAL_handle}", "scaleY", '1.35', { fromValue: '1.35'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_SIGNAL_R2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid129", tween: [ "style", "${_SIGNAL_R2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid98", tween: [ "style", "${_SIGNAL_FLOW_B1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_SIGNAL_FLOW_B1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_SIGNAL_FLOW_F4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_SIGNAL_FLOW_F4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid125", tween: [ "style", "${_SIGNAL_FLOW_F4}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid104", tween: [ "style", "${_SIGNAL_FLOW_B7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid137", tween: [ "style", "${_SIGNAL_FLOW_B7}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid100", tween: [ "style", "${_SIGNAL_FLOW_B3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid133", tween: [ "style", "${_SIGNAL_FLOW_B3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid95", tween: [ "style", "${_SIGNAL_R1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid128", tween: [ "style", "${_SIGNAL_R1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid93", tween: [ "style", "${_SIGNAL_FLOW_F5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_SIGNAL_FLOW_F5}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid126", tween: [ "style", "${_SIGNAL_FLOW_F5}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid174", tween: [ "style", "${_SIGNAL_L2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid177", tween: [ "style", "${_SIGNAL_L2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid180", tween: [ "style", "${_SIGNAL_L2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_SIGNAL_FLOW_F6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "style", "${_SIGNAL_FLOW_F6}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid127", tween: [ "style", "${_SIGNAL_FLOW_F6}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid91", tween: [ "style", "${_SIGNAL_FLOW_F3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_SIGNAL_FLOW_F3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid124", tween: [ "style", "${_SIGNAL_FLOW_F3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_SIGNAL_FLOW_B2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid132", tween: [ "style", "${_SIGNAL_FLOW_B2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid89", tween: [ "style", "${_SIGNAL_FLOW_F1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "style", "${_SIGNAL_FLOW_F1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid122", tween: [ "style", "${_SIGNAL_FLOW_F1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_SIGNAL_FLOW_F1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid110", tween: [ "style", "${_SIGNAL_FLOW_F1Copy}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid121", tween: [ "style", "${_SIGNAL_FLOW_F1Copy}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid175", tween: [ "style", "${_SIGNAL_L3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid178", tween: [ "style", "${_SIGNAL_L3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid181", tween: [ "style", "${_SIGNAL_L3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_SIGNAL_FLOW_B5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid135", tween: [ "style", "${_SIGNAL_FLOW_B5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid173", tween: [ "style", "${_SIGNAL_L1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid176", tween: [ "style", "${_SIGNAL_L1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid179", tween: [ "style", "${_SIGNAL_L1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-19782588");
