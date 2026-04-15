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
                rect: ['136', '231','1538','959','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car.png"]
            },
            {
                id: 'flowBack',
                type: 'image',
                tag: 'img',
                rect: ['592', '885','324','135','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flowBack.png"]
            },
            {
                id: 'FLOWS4',
                type: 'rect',
                rect: ['653', '1009','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWS3',
                type: 'rect',
                rect: ['905', '902','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWS2',
                type: 'rect',
                rect: ['597', '890','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWS1',
                type: 'rect',
                rect: ['597', '891px','auto','auto','auto', 'auto']
            },
            {
                id: 'car_handle',
                type: 'image',
                tag: 'img',
                rect: ['874', '773','133','188','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car_handle.png"]
            },
            {
                id: 'car_glass',
                type: 'image',
                tag: 'img',
                rect: ['702', '326','743','760','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car_glass.png"]
            },
            {
                id: 'WIPER',
                type: 'rect',
                rect: ['643', '466','auto','auto','auto', 'auto']
            },
            {
                id: 'relayBox',
                type: 'image',
                tag: 'img',
                rect: ['539', '983','118','91','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"relayBox.png"]
            },
            {
                id: 'FLOW_SENSOR',
                type: 'rect',
                rect: ['1037px', '703px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_SENSORCopy2',
                type: 'rect',
                rect: ['1037px', '703px','auto','auto','auto', 'auto'],
                transform: [[],['27']]
            },
            {
                id: 'FLOW_SENSORCopy',
                type: 'rect',
                rect: ['1037px', '703px','auto','auto','auto', 'auto'],
                transform: [[],['-27']]
            },
            {
                id: 'module',
                type: 'image',
                tag: 'img',
                rect: ['1472', '428','312','537','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"module.png"]
            },
            {
                id: 'txt_c3',
                type: 'text',
                rect: ['954', '946','333px','108','auto', 'auto'],
                text: "와이퍼 스위치<br>(AUTO MODE)",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c2',
                type: 'text',
                rect: ['417', '966','139','108','auto', 'auto'],
                text: "릴레이<br>박스",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['375', '832','244','50','auto', 'auto'],
                text: "와이퍼 모터",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_m2',
                type: 'text',
                rect: ['1501px', '793px','290px','111','auto', 'auto'],
                text: "- 전원 입력<br>- 접지 입력",
                align: "auto",
                font: ['Verdana, Geneva, sans-serif', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_m1',
                type: 'text',
                rect: ['1493px', '486px','312px','111','auto', 'auto'],
                text: "- 빗물량 많음<br>- 빗물량 적음",
                align: "auto",
                font: ['Verdana, Geneva, sans-serif', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c4',
                type: 'text',
                rect: ['990', '541','218','108','auto', 'auto'],
                text: "레인센서<br>(전면유리)",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'SENSOR',
                type: 'rect',
                rect: ['1037', '660','auto','auto','auto', 'auto']
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['723px', '61px','985','106','auto', 'auto'],
                text: "레인센서는 빗물량을 감지하여 운전자의 조작없이<br>와이퍼가 작동하는 시스템 입니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['156px', '70px','552','76','auto', 'auto'],
                text: "레인센서 작동",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'FLOWS2',
                symbolName: 'FLOWS2',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_SENSORCopy',
                symbolName: 'FLOW_SENSOR',
                autoPlay: {

                }
            },
            {
                id: 'FLOWS1',
                symbolName: 'FLOWS1',
                autoPlay: {

                }
            },
            {
                id: 'FLOWS4',
                symbolName: 'FLOWS4',
                autoPlay: {

                }
            },
            {
                id: 'FLOWS3',
                symbolName: 'FLOWS3',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_SENSOR',
                symbolName: 'FLOW_SENSOR',
                autoPlay: {

                }
            },
            {
                id: 'WIPER',
                symbolName: 'WIPER',
                autoPlay: {

                }
            },
            {
                id: 'SENSOR',
                symbolName: 'SENSOR',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_SENSORCopy2',
                symbolName: 'FLOW_SENSOR',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_FLOWS2}": [
                ["style", "opacity", '0']
            ],
            "${_txt2}": [
                ["style", "top", '61px'],
                ["style", "opacity", '0'],
                ["style", "left", '723px']
            ],
            "${_txt1}": [
                ["style", "top", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '156px']
            ],
            "${_txt_m1}": [
                ["style", "top", '486px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '1493px'],
                ["style", "width", '312px']
            ],
            "${_FLOWS3}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c1}": [
                ["style", "opacity", '0']
            ],
            "${_car}": [
                ["style", "left", '226px'],
                ["style", "opacity", '0']
            ],
            "${_txt_c3}": [
                ["style", "opacity", '0'],
                ["style", "width", '333px']
            ],
            "${_FLOWS1}": [
                ["style", "top", '891px'],
                ["style", "opacity", '0']
            ],
            "${_txt_m2}": [
                ["style", "top", '793px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '1501px'],
                ["style", "width", '290px']
            ],
            "${_relayBox}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_SENSORCopy}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-27deg'],
                ["style", "opacity", '0'],
                ["style", "left", '1155px'],
                ["style", "top", '681px']
            ],
            "${_txt_c2}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1900px']
            ],
            "${_WIPER}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c4}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_SENSOR}": [
                ["style", "top", '888px'],
                ["transform", "rotateZ", '-26deg'],
                ["style", "opacity", '0'],
                ["style", "left", '677px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_module}": [
                ["style", "opacity", '0']
            ],
            "${_car_handle}": [
                ["style", "left", '964px'],
                ["style", "opacity", '0']
            ],
            "${_FLOWS4}": [
                ["style", "opacity", '0']
            ],
            "${_flowBack}": [
                ["style", "opacity", '0']
            ],
            "${_car_glass}": [
                ["style", "left", '792px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_SENSORCopy2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '27deg'],
                ["style", "opacity", '0'],
                ["style", "left", '1155px'],
                ["style", "top", '721px']
            ],
            "${_SENSOR}": [
                ["style", "opacity", '0']
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
                { id: "eid52", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 567, easing: "easeOutQuad" },
                { id: "eid105", tween: [ "style", "${_txt_c4}", "opacity", '1', { fromValue: '0'}], position: 1399, duration: 434, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_FLOWS1}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 333, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_module}", "opacity", '1', { fromValue: '0'}], position: 1266, duration: 434 },
                { id: "eid111", tween: [ "style", "${_FLOW_SENSOR}", "opacity", '1', { fromValue: '0'}], position: 1667, duration: 333 },
                { id: "eid50", tween: [ "style", "${_car}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 567, easing: "easeOutQuad" },
                { id: "eid103", tween: [ "style", "${_SENSOR}", "opacity", '1', { fromValue: '0'}], position: 1266, duration: 434 },
                { id: "eid54", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 567, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_WIPER}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 434, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_car_glass}", "left", '702px', { fromValue: '792px'}], position: 567, duration: 567, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_car_handle}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 567, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "style", "${_txt_c3}", "opacity", '1', { fromValue: '0'}], position: 1399, duration: 434, easing: "easeOutQuad" },
                { id: "eid60", tween: [ "style", "${_car_handle}", "left", '874px', { fromValue: '964px'}], position: 567, duration: 567, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "style", "${_car_glass}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 567, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "style", "${_car}", "left", '136px', { fromValue: '226px'}], position: 567, duration: 567, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_FLOWS2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 333, easing: "easeOutQuad" },
                { id: "eid70", tween: [ "style", "${_relayBox}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 434, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "style", "${_txt_c1}", "opacity", '1', { fromValue: '0'}], position: 1399, duration: 434, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_FLOWS3}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 333, easing: "easeOutQuad" },
                { id: "eid107", tween: [ "style", "${_txt_m1}", "opacity", '1', { fromValue: '0'}], position: 1399, duration: 434, easing: "easeOutQuad" },
                { id: "eid78", tween: [ "style", "${_FLOWS4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 333, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "style", "${_txt_c2}", "opacity", '1', { fromValue: '0'}], position: 1399, duration: 434, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_flowBack}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 434, easing: "easeOutQuad" },
                { id: "eid109", tween: [ "style", "${_txt_m2}", "opacity", '1', { fromValue: '0'}], position: 1399, duration: 434, easing: "easeOutQuad" },
                { id: "eid115", tween: [ "style", "${_FLOW_SENSORCopy}", "opacity", '1', { fromValue: '0'}], position: 1667, duration: 333 },
                { id: "eid113", tween: [ "style", "${_FLOW_SENSORCopy2}", "opacity", '1', { fromValue: '0'}], position: 1667, duration: 333 }            ]
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
                    id: 'flow_src',
                    type: 'image',
                    rect: ['-109px', '0px', '314px', '6px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src}": [
                ["style", "left", '-109px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '50px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 733,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_flow_src}", "left", '-69px', { fromValue: '-109px'}], position: 0, duration: 733 }            ]
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
                    rect: ['-155px', '107px', '314px', '6px', 'auto', 'auto'],
                    id: 'flow_src2',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src2}": [
                ["style", "top", '117px'],
                ["style", "left", '-155px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '97px'],
                ["style", "width", '5px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 733,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_flow_src2}", "top", '77px', { fromValue: '117px'}], position: 0, duration: 733 }            ]
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
                    rect: ['-155px', '107px', '314px', '6px', 'auto', 'auto'],
                    id: 'flow_src2',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src2}": [
                ["style", "top", '77px'],
                ["style", "left", '-155px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '112px'],
                ["style", "width", '6px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 733,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_flow_src2}", "top", '117px', { fromValue: '77px'}], position: 0, duration: 733 }            ]
        }
    }
},
"FLOWS4": {
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
                    id: 'flow_srcCopy',
                    type: 'image',
                    rect: ['-109px', '0px', '314px', '6px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '258px'],
                ["style", "overflow", 'hidden']
            ],
            "${_flow_srcCopy}": [
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
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_flow_srcCopy}", "left", '-40px', { fromValue: '0px'}], position: 0, duration: 733 }            ]
        }
    }
},
"WIPER": {
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
                    id: 'wiperBar',
                    tag: 'img',
                    rect: ['19px', '0px', '60', '485', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wiperBar.png']
                },
                {
                    id: 'RAIL',
                    type: 'rect',
                    rect: ['26', '66', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], ['-55']],
                    tag: 'img',
                    id: 'wiper1',
                    type: 'image',
                    rect: ['8px', '191px', '392', '78', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wiper1.png']
                },
                {
                    transform: [[0, 0], ['-55']],
                    tag: 'img',
                    id: 'wiper2',
                    type: 'image',
                    rect: ['8px', '296px', '392', '78', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wiper1.png']
                },
                {
                    type: 'image',
                    id: 'wiperMotor',
                    tag: 'img',
                    rect: ['0px', '393px', '66', '67', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wiperMotor.png']
                }
            ],
            symbolInstances: [
            {
                id: 'RAIL',
                symbolName: 'RAIL'
            }            ]
        },
    states: {
        "Base State": {
            "${_wiperBar}": [
                ["style", "left", '19px'],
                ["style", "top", '0px']
            ],
            "${_wiper1}": [
                ["style", "top", '191px'],
                ["style", "-webkit-transform-origin", [15.4,78.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [15.4,78.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [15.4,78.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [15.4,78.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [15.4,78.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '8px'],
                ["transform", "rotateZ", '-55deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '485px'],
                ["style", "width", '400px']
            ],
            "${_wiperMotor}": [
                ["style", "top", '393px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_wiper2}": [
                ["style", "-webkit-transform-origin", [15.4,78.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [15.4,78.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [15.4,78.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [15.4,78.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [15.4,78.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '296px'],
                ["style", "left", '8px'],
                ["transform", "rotateZ", '-55deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6733,
            autoPlay: false,
            labels: {
                "gogo": 133
            },
            timeline: [
                { id: "eid12", tween: [ "transform", "${_wiper1}", "rotateZ", '39deg', { fromValue: '-55deg'}], position: 133, duration: 1500, easing: "easeInQuad" },
                { id: "eid17", tween: [ "transform", "${_wiper1}", "rotateZ", '-55deg', { fromValue: '39deg'}], position: 1667, duration: 1499, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "transform", "${_wiper1}", "rotateZ", '39deg', { fromValue: '-55deg'}], position: 3633, duration: 633, easing: "easeInQuad" },
                { id: "eid29", tween: [ "transform", "${_wiper1}", "rotateZ", '-55deg', { fromValue: '39deg'}], position: 4300, duration: 633, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "transform", "${_wiper1}", "rotateZ", '39deg', { fromValue: '-55deg'}], position: 4966, duration: 633, easing: "easeInQuad" },
                { id: "eid35", tween: [ "transform", "${_wiper1}", "rotateZ", '-55deg', { fromValue: '39deg'}], position: 5633, duration: 633, easing: "easeOutQuad" },
                { id: "eid13", tween: [ "transform", "${_wiper2}", "rotateZ", '39deg', { fromValue: '-55deg'}], position: 133, duration: 1500, easing: "easeInQuad" },
                { id: "eid16", tween: [ "transform", "${_wiper2}", "rotateZ", '-55deg', { fromValue: '39deg'}], position: 1667, duration: 1499, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "transform", "${_wiper2}", "rotateZ", '39deg', { fromValue: '-55deg'}], position: 3633, duration: 633, easing: "easeInQuad" },
                { id: "eid27", tween: [ "transform", "${_wiper2}", "rotateZ", '-55deg', { fromValue: '39deg'}], position: 4300, duration: 633, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "transform", "${_wiper2}", "rotateZ", '39deg', { fromValue: '-55deg'}], position: 4966, duration: 633, easing: "easeInQuad" },
                { id: "eid33", tween: [ "transform", "${_wiper2}", "rotateZ", '-55deg', { fromValue: '39deg'}], position: 5633, duration: 633, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "transform", "${_wiperMotor}", "rotateZ", '100deg', { fromValue: '0deg'}], position: 133, duration: 1500, easing: "easeInQuad" },
                { id: "eid20", tween: [ "transform", "${_wiperMotor}", "rotateZ", '0deg', { fromValue: '100deg'}], position: 1667, duration: 1499, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "transform", "${_wiperMotor}", "rotateZ", '100deg', { fromValue: '0deg'}], position: 3633, duration: 633, easing: "easeInQuad" },
                { id: "eid25", tween: [ "transform", "${_wiperMotor}", "rotateZ", '0deg', { fromValue: '100deg'}], position: 4300, duration: 633, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "transform", "${_wiperMotor}", "rotateZ", '100deg', { fromValue: '0deg'}], position: 4966, duration: 633, easing: "easeInQuad" },
                { id: "eid31", tween: [ "transform", "${_wiperMotor}", "rotateZ", '0deg', { fromValue: '100deg'}], position: 5633, duration: 633, easing: "easeOutQuad" },
                { id: "eid47", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_RAIL}', [] ], ""], position: 133.33333333333 },
                { id: "eid48", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_RAIL}', [] ], ""], position: 6145 }            ]
        }
    }
},
"RAIL": {
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
                    id: 'wiperRail',
                    tag: 'img',
                    rect: ['0px', '-139px', '13', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wiperRail.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wiperRail}": [
                ["style", "top", '-139px'],
                ["style", "left", '0px'],
                ["style", "height", '500px']
            ],
            "${symbolSelector}": [
                ["style", "height", '351px'],
                ["style", "width", '13px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6133,
            autoPlay: false,
            timeline: [
                { id: "eid21", tween: [ "style", "${_wiperRail}", "top", '-5px', { fromValue: '-139px'}], position: 0, duration: 1500, easing: "easeInQuad" },
                { id: "eid23", tween: [ "style", "${_wiperRail}", "top", '-139px', { fromValue: '-5px'}], position: 1534, duration: 1500, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_wiperRail}", "top", '-5px', { fromValue: '-139px'}], position: 3500, duration: 633, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_wiperRail}", "top", '-139px', { fromValue: '-5px'}], position: 4167, duration: 633, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_wiperRail}", "top", '-5px', { fromValue: '-139px'}], position: 4833, duration: 633, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "style", "${_wiperRail}", "top", '-139px', { fromValue: '-5px'}], position: 5500, duration: 633, easing: "easeOutQuad" }            ]
        }
    }
},
"SENSOR": {
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
                    id: 'sensor_normal',
                    tag: 'img',
                    rect: ['1px', '0px', '117', '87', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_normal.png']
                },
                {
                    type: 'image',
                    id: 'sensor_signal',
                    tag: 'img',
                    rect: ['1px', '0px', '117', '87', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_signal.png']
                },
                {
                    type: 'image',
                    id: 'sensor_whiteLine',
                    tag: 'img',
                    rect: ['0px', '0px', '118', '88', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_whiteLine.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sensor_signal}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px']
            ],
            "${_sensor_whiteLine}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '88px'],
                ["style", "width", '118px']
            ],
            "${_sensor_normal}": [
                ["style", "top", '0px'],
                ["style", "left", '1px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: false,
            labels: {
                "gogo": 100
            },
            timeline: [
                { id: "eid117", tween: [ "style", "${_sensor_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 250 },
                { id: "eid120", tween: [ "style", "${_sensor_whiteLine}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 250 },
                { id: "eid122", tween: [ "style", "${_sensor_normal}", "display", 'none', { fromValue: 'block'}], position: 100, duration: 0 },
                { id: "eid124", tween: [ "style", "${_sensor_signal}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 100 }            ]
        }
    }
},
"FLOW_SENSOR": {
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
                    id: 'sensorFlow',
                    tag: 'img',
                    rect: ['0px', '0px', '512', '6', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensorFlow.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '405px'],
                ["style", "overflow", 'hidden']
            ],
            "${_sensorFlow}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid85", tween: [ "style", "${_sensorFlow}", "left", '-99px', { fromValue: '0px'}], position: 0, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-13347558");
