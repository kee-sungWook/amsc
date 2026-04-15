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
                id: 'tm',
                type: 'image',
                tag: 'img',
                rect: ['68', '425','696px','747','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tm.png"]
            },
            {
                id: 'FLOW_2',
                type: 'rect',
                rect: ['442', '738','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_1',
                type: 'rect',
                rect: ['643', '600','auto','auto','auto', 'auto']
            },
            {
                id: 'TCU',
                type: 'image',
                tag: 'img',
                rect: ['1425', '406','376px','577','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TCU.png"]
            },
            {
                id: 'pulse_back',
                type: 'image',
                tag: 'img',
                rect: ['858', '373','374px','593','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pulse_back.png"]
            },
            {
                id: 'PULSE',
                type: 'rect',
                rect: ['862', '411','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_c4',
                type: 'text',
                rect: ['837px', '969','416px','50','auto', 'auto'],
                text: "입력축 속도센서",
                align: "center",
                font: ['굴림', 45, "rgb(76,76,76)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c3',
                type: 'text',
                rect: ['857px', '305','374px','50','auto', 'auto'],
                text: "출력축 속도센서",
                align: "center",
                font: ['굴림', 45, "rgb(76,76,76)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c2',
                type: 'text',
                rect: ['1464', '584px','298px','287px','auto', 'auto'],
                text: "변속패턴제어<br><br>변속시 유압제어<br><br>댐퍼클러치 제어",
                align: "center",
                font: ['굴림', 40, "rgb(76,76,76)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['1540', '429','146px','76','auto', 'auto'],
                text: "TCU",
                align: "center",
                font: ['굴림', 70, "rgb(76,76,76)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['716', '50','1172px','109','auto', 'auto'],
                text: "입력센서 : 변속시 유압제어를 위해 입력축 회전수를 검출.<br>출력센서 : 출력축 회전수를 검출.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['38px', '60','673px','76','auto', 'auto'],
                text: "입출력축 속도센서",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'PULSE',
                symbolName: 'PULSE',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_2',
                symbolName: 'FLOW_2',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_1',
                symbolName: 'FLOW_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_PULSE}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c4}": [
                ["style", "opacity", '0'],
                ["style", "left", '837px'],
                ["style", "width", '416px']
            ],
            "${_txt_c2}": [
                ["style", "height", '287px'],
                ["style", "opacity", '0'],
                ["style", "top", '584px'],
                ["style", "width", '298px']
            ],
            "${_txt1}": [
                ["style", "opacity", '0'],
                ["style", "left", '38px'],
                ["style", "width", '673px']
            ],
            "${_tm}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_1}": [
                ["style", "opacity", '0']
            ],
            "${_pulse_back}": [
                ["style", "opacity", '0']
            ],
            "${_txt2}": [
                ["style", "width", '1172px'],
                ["style", "opacity", '0']
            ],
            "${_TCU}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_2}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c1}": [
                ["style", "width", '146px'],
                ["style", "opacity", '0']
            ],
            "${_txt_c3}": [
                ["style", "opacity", '0'],
                ["style", "left", '857px'],
                ["style", "width", '374px']
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
                { id: "eid31", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid23", tween: [ "style", "${_txt_c3}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 500 },
                { id: "eid19", tween: [ "style", "${_TCU}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 500 },
                { id: "eid11", tween: [ "style", "${_txt_c4}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 500 },
                { id: "eid13", tween: [ "style", "${_tm}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 500 },
                { id: "eid17", tween: [ "style", "${_FLOW_2}", "opacity", '1', { fromValue: '0'}], position: 967, duration: 500 },
                { id: "eid27", tween: [ "style", "${_txt_c1}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 500 },
                { id: "eid29", tween: [ "style", "${_PULSE}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid9", tween: [ "style", "${_txt_c2}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 500 },
                { id: "eid25", tween: [ "style", "${_pulse_back}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid21", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 500 },
                { id: "eid15", tween: [ "style", "${_FLOW_1}", "opacity", '1', { fromValue: '0'}], position: 967, duration: 500 }            ]
        }
    }
},
"PULSE": {
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
                    id: 'pulse2',
                    tag: 'img',
                    rect: ['0px', '337px', '368px', '186', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pulse2.png']
                },
                {
                    type: 'image',
                    id: 'pulse1',
                    tag: 'img',
                    rect: ['1px', '0px', '363px', '180', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pulse1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pulse1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.3'],
                ["style", "left", '1px']
            ],
            "${_pulse2}": [
                ["style", "top", '337px'],
                ["style", "opacity", '0.3'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '523px'],
                ["style", "width", '368px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1067,
            autoPlay: false,
            timeline: [
                { id: "eid2", tween: [ "style", "${_pulse2}", "opacity", '1', { fromValue: '0.3'}], position: 0, duration: 467 },
                { id: "eid6", tween: [ "style", "${_pulse2}", "opacity", '0.3', { fromValue: '1'}], position: 533, duration: 467 },
                { id: "eid4", tween: [ "style", "${_pulse1}", "opacity", '1', { fromValue: '0.3'}], position: 0, duration: 467 },
                { id: "eid5", tween: [ "style", "${_pulse1}", "opacity", '0.3', { fromValue: '1'}], position: 533, duration: 467 }            ]
        }
    }
},
"FLOW_1": {
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
                    id: 'FLOW_MOVE',
                    type: 'rect',
                    rect: ['377', '167', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_MOVE',
                symbolName: 'FLOW_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '784px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_MOVE}": [
                ["style", "top", '1px'],
                ["style", "left", '-72px'],
                ["transform", "rotateZ", '180deg']
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
"FLOW_2": {
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
                    id: 'FLOW_MOVECopy',
                    type: 'rect',
                    rect: ['377', '167', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_MOVECopy',
                symbolName: 'FLOW_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '985px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_MOVECopy}": [
                ["style", "top", '1px'],
                ["style", "left", '-72px'],
                ["transform", "rotateZ", '180deg']
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
"FLOW_MOVE": {
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
                    rect: ['0px', '0px', '1411', '4', 'auto', 'auto'],
                    id: 'flow_src',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    tag: 'img'
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
                ["style", "height", '4px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_flow_src}", "left", '-216px', { fromValue: '0px'}], position: 0, duration: 2500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-24807161");
