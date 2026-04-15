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
                rect: ['109', '257','639','706','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tm.png"]
            },
            {
                id: 'FLOW_3',
                type: 'rect',
                rect: ['607px', '776','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_2',
                type: 'rect',
                rect: ['799px', '472px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_1',
                type: 'rect',
                rect: ['800px', '472','auto','auto','auto', 'auto']
            },
            {
                id: 'GRAPHS',
                type: 'rect',
                rect: ['829', '629','auto','auto','auto', 'auto']
            },
            {
                id: 'TCU',
                type: 'image',
                tag: 'img',
                rect: ['1387', '404','390','425','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TCU.png"]
            },
            {
                id: 'TUC_TXT',
                type: 'text',
                rect: ['1433', '547px','298','254px','auto', 'auto'],
                text: "변속패턴제어<br><br>변속시 유압제어<br><br>댐퍼클러치 제어",
                align: "center",
                font: ['굴림', 40, "rgb(76,76,76)", "normal", "none", "normal"]
            },
            {
                id: 'TCU-1',
                type: 'text',
                rect: ['1509', '422','146','76','auto', 'auto'],
                text: "TCU",
                align: "center",
                font: ['굴림', 70, "rgb(76,76,76)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['418', '60','1461px','106','auto', 'auto'],
                text: "ATF의 온도를 더미스터로 검출하여 댐퍼클러치 작동 및 비작용영역검출,<br>유온 가변제어, 변속기 유압제어 정보등으로 사용 합니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['82', '67','299px','85px','auto', 'auto'],
                text: "유온센서",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'FLOW_2',
                symbolName: 'FLOW_2',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_3',
                symbolName: 'FLOW_3',
                autoPlay: {

                }
            },
            {
                id: 'GRAPHS',
                symbolName: 'GRAPHS',
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
            "${_txt2}": [
                ["style", "width", '1461px'],
                ["style", "opacity", '0']
            ],
            "${_FLOW_3}": [
                ["style", "left", '607px'],
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["style", "height", '85px'],
                ["style", "opacity", '0'],
                ["style", "width", '299px']
            ],
            "${_tm}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_1}": [
                ["style", "left", '800px'],
                ["style", "opacity", '0']
            ],
            "${_TUC_TXT}": [
                ["style", "top", '547px'],
                ["style", "opacity", '0'],
                ["style", "height", '254px']
            ],
            "${_FLOW_2}": [
                ["style", "top", '472px'],
                ["style", "opacity", '0'],
                ["style", "left", '799px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_GRAPHS}": [
                ["style", "opacity", '0']
            ],
            "${_TCU}": [
                ["style", "opacity", '0']
            ],
            "${_TCU-1}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1267,
            autoPlay: true,
            timeline: [
                { id: "eid33", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid25", tween: [ "style", "${_TUC_TXT}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 500 },
                { id: "eid19", tween: [ "style", "${_TCU}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 500 },
                { id: "eid23", tween: [ "style", "${_tm}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid21", tween: [ "style", "${_FLOW_2}", "opacity", '1', { fromValue: '0'}], position: 767, duration: 500 },
                { id: "eid15", tween: [ "style", "${_FLOW_3}", "opacity", '1', { fromValue: '0'}], position: 767, duration: 500 },
                { id: "eid31", tween: [ "style", "${_TCU-1}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 500 },
                { id: "eid29", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 500 },
                { id: "eid27", tween: [ "style", "${_GRAPHS}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 500 },
                { id: "eid17", tween: [ "style", "${_FLOW_1}", "opacity", '1', { fromValue: '0'}], position: 767, duration: 500 }            ]
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
                    type: 'image',
                    id: 'flow_src',
                    tag: 'img',
                    rect: ['0px', '0px', '895', '5', 'auto', 'auto'],
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
                ["style", "height", '5px'],
                ["style", "width", '780px']
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
                { id: "eid1", tween: [ "style", "${_flow_src}", "left", '-108px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
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
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
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
                ["style", "height", '5px'],
                ["style", "width", '644px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_MOVE}": [
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
                    id: 'FLOW_MOVECopy2',
                    type: 'rect',
                    rect: ['-388px', '-84px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_MOVECopy2',
                symbolName: 'FLOW_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_MOVECopy2}": [
                ["style", "top", '-84px'],
                ["style", "left", '-388px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '309px'],
                ["style", "width", '5px'],
                ["style", "overflow", 'hidden']
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
"FLOW_3": {
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
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
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
                ["style", "height", '5px'],
                ["style", "width", '196px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FLOW_MOVECopy}": [
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
"GRAPH_LINE": {
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
                    id: 'graphLine',
                    tag: 'img',
                    rect: ['0px', '0px', '526', '4', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/graphLine.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_graphLine}": [
                ["style", "left", '-521px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '4px'],
                ["style", "width", '526px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3167,
            autoPlay: false,
            labels: {
                "gogo": 1633
            },
            timeline: [
                { id: "eid3", tween: [ "style", "${_graphLine}", "left", '0px', { fromValue: '-521px'}], position: 0, duration: 1500, easing: "easeInQuad" },
                { id: "eid4", tween: [ "style", "${_graphLine}", "left", '-70px', { fromValue: '0px'}], position: 1633, duration: 711, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_graphLine}", "left", '0px', { fromValue: '-70px'}], position: 2400, duration: 711, easing: "easeInQuad" }            ]
        }
    }
},
"GRAPHS": {
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
                    id: 'GRAPH_LINE',
                    type: 'rect',
                    rect: ['205px', '266px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'graph',
                    tag: 'img',
                    rect: ['80px', '57px', '426', '426', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/graph.png']
                },
                {
                    font: ['굴림', 35, 'rgb(0,0,0)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'g_txt2',
                    text: '온도',
                    align: 'center',
                    rect: ['46px', '0px', '74', '41', 'auto', 'auto']
                },
                {
                    font: ['굴림', 35, 'rgb(0,0,0)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'g_txt1',
                    text: '저항',
                    align: 'center',
                    rect: ['517px', '454px', '74', '41', 'auto', 'auto']
                },
                {
                    font: ['굴림', 38, 'rgb(51,51,51)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'g_txt_n4',
                    text: '0.16',
                    align: 'center',
                    rect: ['440px', '487px', '84', '43', 'auto', 'auto']
                },
                {
                    font: ['굴림', 38, 'rgb(51,51,51)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'g_txt_n3',
                    text: '139.5',
                    align: 'center',
                    rect: ['55px', '487px', '106', '43', 'auto', 'auto']
                },
                {
                    font: ['굴림', 38, 'rgb(51,51,51)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'g_txt_n2',
                    text: '-40',
                    align: 'center',
                    rect: ['2px', '434px', '72', '43', 'auto', 'auto']
                },
                {
                    font: ['굴림', 38, 'rgb(51,51,51)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'g_txt_n1',
                    text: '160',
                    align: 'center',
                    rect: ['0px', '59px', '70', '43', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'GRAPH_LINE',
                symbolName: 'GRAPH_LINE'
            }            ]
        },
    states: {
        "Base State": {
            "${_g_txt_n2}": [
                ["style", "left", '2px'],
                ["style", "top", '434px']
            ],
            "${_g_txt_n1}": [
                ["style", "left", '0px'],
                ["style", "top", '59px']
            ],
            "${_g_txt_n4}": [
                ["style", "left", '440px'],
                ["style", "top", '487px']
            ],
            "${_GRAPH_LINE}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '477px'],
                ["style", "left", '84px'],
                ["transform", "rotateZ", '-45deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '530px'],
                ["style", "width", '731px']
            ],
            "${_g_txt1}": [
                ["style", "left", '517px'],
                ["style", "top", '454px']
            ],
            "${_g_txt_n3}": [
                ["style", "left", '55px'],
                ["style", "top", '487px']
            ],
            "${_g_txt2}": [
                ["style", "left", '46px'],
                ["style", "top", '0px']
            ],
            "${_graph}": [
                ["style", "left", '80px'],
                ["style", "top", '57px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-10580587");
