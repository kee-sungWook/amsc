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
                id: 'flowMovie',
                type: 'rect',
                rect: ['932', '158','auto','auto','auto', 'auto']
            },
            {
                id: 'eng',
                type: 'image',
                tag: 'img',
                rect: ['750px', '48px','888','1134','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eng.png"]
            },
            {
                id: 'flow_outLine',
                type: 'image',
                tag: 'img',
                rect: ['932px', '158px','573','934','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flow_outLine.png"]
            },
            {
                id: 'imgPic1',
                type: 'rect',
                rect: ['116', '77','auto','auto','auto', 'auto']
            },
            {
                id: 'imgPic3',
                type: 'rect',
                rect: ['116', '443','auto','auto','auto', 'auto']
            },
            {
                id: 'imgPic2',
                type: 'rect',
                rect: ['1465', '77','auto','auto','auto', 'auto']
            },
            {
                id: 'imgPic4',
                type: 'rect',
                rect: ['1466', '443','auto','auto','auto', 'auto']
            },
            {
                id: 'imgPic6',
                type: 'rect',
                rect: ['1219', '809','auto','auto','auto', 'auto']
            },
            {
                id: 'imgPic5',
                type: 'rect',
                rect: ['116', '809','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'imgPic3',
                symbolName: 'imgPic3',
                autoPlay: {

                }
            },
            {
                id: 'imgPic6',
                symbolName: 'imgPic6',
                autoPlay: {

                }
            },
            {
                id: 'imgPic5',
                symbolName: 'imgPic5',
                autoPlay: {

                }
            },
            {
                id: 'imgPic4',
                symbolName: 'imgPic4',
                autoPlay: {

                }
            },
            {
                id: 'imgPic2',
                symbolName: 'imgPic2',
                autoPlay: {

                }
            },
            {
                id: 'imgPic1',
                symbolName: 'imgPic1',
                autoPlay: {

                }
            },
            {
                id: 'flowMovie',
                symbolName: 'flowMovie',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_imgPic6}": [
                ["style", "opacity", '0']
            ],
            "${_imgPic3}": [
                ["style", "opacity", '0']
            ],
            "${_imgPic2}": [
                ["style", "opacity", '0']
            ],
            "${_flow_outLine}": [
                ["style", "left", '932px'],
                ["style", "top", '158px']
            ],
            "${_imgPic4}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_imgPic5}": [
                ["style", "opacity", '0']
            ],
            "${_eng}": [
                ["style", "left", '750px'],
                ["style", "top", '48px']
            ],
            "${_imgPic1}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3433,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_imgPic5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367 },
                { id: "eid8", tween: [ "style", "${_imgPic6}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 367 },
                { id: "eid4", tween: [ "style", "${_imgPic1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367 },
                { id: "eid12", tween: [ "style", "${_imgPic3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 367 },
                { id: "eid10", tween: [ "style", "${_imgPic2}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 367 },
                { id: "eid6", tween: [ "style", "${_imgPic4}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 367 },
                { id: "eid27", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_flowMovie}', [] ], ""], position: 933 }            ]
        }
    }
},
"imgPic1": {
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
                    id: 'pic1',
                    type: 'image',
                    rect: ['5px', '4px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic1.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [5, 'rgba(199,0,96,1.00)', 'solid'],
                    rect: ['0px', '0px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    transform: [[0, 0], ['1']],
                    rect: ['407px', '168px', '589px', '5px', 'auto', 'auto'],
                    id: 'LineRectangle',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(199,0,96,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LineRectangle}": [
                ["style", "top", '168px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(199,0,96,1.00)'],
                ["transform", "rotateZ", '1deg'],
                ["style", "height", '5px'],
                ["style", "border-style", 'none'],
                ["style", "left", '407px'],
                ["style", "width", '589px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "border-color", 'rgba(199,0,96,1.00)'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '5px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_pic1}": [
                ["style", "left", '5px'],
                ["style", "top", '4px']
            ],
            "${symbolSelector}": [
                ["style", "height", '335px'],
                ["style", "width", '996px']
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
"imgPic2": {
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
                    id: 'pic2',
                    type: 'image',
                    rect: ['414px', '4px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [5, 'rgba(199,0,96,1.00)', 'solid'],
                    rect: ['409px', '0px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    transform: [[0, 0], ['-5']],
                    rect: ['-1px', '164px', '410px', '5px', 'auto', 'auto'],
                    id: 'LineRectangle2',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(199,0,96,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pic2}": [
                ["style", "left", '414px'],
                ["style", "top", '4px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-width", '5px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '409px'],
                ["color", "border-color", 'rgba(199,0,96,1.00)']
            ],
            "${_LineRectangle2}": [
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(199,0,96,1.00)'],
                ["style", "top", '164px'],
                ["transform", "rotateZ", '-5deg'],
                ["style", "height", '5px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-1px'],
                ["style", "width", '410px']
            ],
            "${symbolSelector}": [
                ["style", "height", '335px'],
                ["style", "width", '819px']
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
"imgPic3": {
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
                    id: 'pic3',
                    type: 'image',
                    rect: ['5px', '5px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic3.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [5, 'rgba(199,0,96,1.00)', 'solid'],
                    rect: ['0px', '0px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    transform: [[0, 0], ['-2']],
                    rect: ['407px', '165px', '540px', '5px', 'auto', 'auto'],
                    id: 'LineRectangle3',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(199,0,96,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LineRectangle3}": [
                ["color", "background-color", 'rgba(199,0,96,1.00)'],
                ["style", "top", '165px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-2deg'],
                ["style", "height", '5px'],
                ["style", "border-style", 'none'],
                ["style", "left", '407px'],
                ["style", "width", '540px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-width", '5px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(199,0,96,1.00)']
            ],
            "${_pic3}": [
                ["style", "left", '5px'],
                ["style", "top", '5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '335px'],
                ["style", "width", '947px']
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
"imgPic4": {
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
                    id: 'pic4',
                    type: 'image',
                    rect: ['413px', '5px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic4.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle4',
                    stroke: [5, 'rgba(199,0,96,1.00)', 'solid'],
                    rect: ['408px', '0px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    transform: [[0, 0], ['19']],
                    rect: ['-23px', '169px', '431px', '5px', 'auto', 'auto'],
                    id: 'LineRectangle4',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(199,0,96,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pic4}": [
                ["style", "left", '413px'],
                ["style", "top", '5px']
            ],
            "${_Rectangle4}": [
                ["style", "top", '0px'],
                ["color", "border-color", 'rgba(199,0,96,1.00)'],
                ["style", "left", '408px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '5px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_LineRectangle4}": [
                ["style", "top", '169px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(199,0,96,1.00)'],
                ["transform", "rotateZ", '19deg'],
                ["style", "height", '5px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-23px'],
                ["style", "width", '431px']
            ],
            "${symbolSelector}": [
                ["style", "height", '335px'],
                ["style", "width", '818px']
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
"imgPic5": {
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
                    id: 'pic5',
                    type: 'image',
                    rect: ['5px', '5px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic5.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [5, 'rgba(199,0,96,1.00)', 'solid'],
                    rect: ['0px', '0px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    transform: [[0, 0], ['-18']],
                    rect: ['407px', '165px', '525px', '5px', 'auto', 'auto'],
                    id: 'LineRectangle5',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(199,0,96,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["color", "border-color", 'rgba(199,0,96,1.00)'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '5px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_pic5}": [
                ["style", "left", '5px'],
                ["style", "top", '5px']
            ],
            "${_LineRectangle5}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(199,0,96,1.00)'],
                ["style", "top", '165px'],
                ["transform", "rotateZ", '-18deg'],
                ["style", "height", '5px'],
                ["style", "border-style", 'none'],
                ["style", "left", '407px'],
                ["style", "width", '525px']
            ],
            "${symbolSelector}": [
                ["style", "height", '335px'],
                ["style", "width", '907px']
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
"imgPic6": {
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
                    id: 'pic6',
                    type: 'image',
                    rect: ['660px', '5px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic6.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [5, 'rgba(199,0,96,1.00)', 'solid'],
                    rect: ['655px', '0px', '400px', '325px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    transform: [[0, 0], ['-4']],
                    rect: ['-1px', '162px', '656px', '5px', 'auto', 'auto'],
                    id: 'LineRectangle6',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(199,0,96,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pic6}": [
                ["style", "left", '660px'],
                ["style", "top", '5px']
            ],
            "${_LineRectangle6}": [
                ["color", "background-color", 'rgba(199,0,96,1.00)'],
                ["style", "top", '162px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-4deg'],
                ["style", "height", '5px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-1px'],
                ["style", "width", '656px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-width", '5px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '655px'],
                ["color", "border-color", 'rgba(199,0,96,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '335px'],
                ["style", "width", '1065px']
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
"flowMovie": {
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
                    rect: ['0px', '0px', '572', '933', 'auto', 'auto'],
                    id: 'flowRoad',
                    fill: ['rgba(0,0,0,0)', 'images/flowRoad.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['268px', '906px', '17px', '125px', 'auto', 'auto'],
                    id: 'flowSrc_A1',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    rect: ['320px', '710px', '17px', '125px', 'auto', 'auto'],
                    transform: [[], ['60']],
                    id: 'flowSrc_A2',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    rect: ['31px', '934px', '17px', '125px', 'auto', 'auto'],
                    id: 'flowSrc_A3',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['-110'], ['0', '22']],
                    rect: ['320px', '-3px', '17px', '162px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_D6',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['-110'], ['0', '22']],
                    rect: ['170px', '49px', '17px', '171px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_D5',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['-111'], ['0', '22']],
                    rect: ['320px', '62px', '17px', '141px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_D4',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['-111'], ['0', '22']],
                    rect: ['202px', '132px', '17px', '95px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_D3',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['2'], ['0', '-22']],
                    rect: ['243px', '174px', '12px', '232px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_D2',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['-22'], ['34']],
                    rect: ['175px', '412px', '23px', '95px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_D1',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    rect: ['380px', '506px', '17px', '209px', 'auto', 'auto'],
                    transform: [[], ['26']],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    id: 'flowSrc_C3',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    rect: ['196px', '604px', '17px', '162px', 'auto', 'auto'],
                    transform: [[], ['-27']],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    id: 'flowSrc_C2',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    rect: ['31px', '934px', '17px', '125px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    id: 'flowSrc_C1',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    rect: ['28px', '572px', '17px', '125px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_B1',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['-19']],
                    rect: ['28px', '572px', '17px', '125px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_B2',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['-19']],
                    rect: ['28px', '572px', '17px', '125px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_B3',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['-19']],
                    rect: ['28px', '572px', '17px', '125px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_B4',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [[], ['-23']],
                    rect: ['443px', '397px', '88px', '162px', 'auto', 'auto'],
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    id: 'flowSrc_B5',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    rect: ['-114px', '514px', '17px', '232px', 'auto', 'auto'],
                    transform: [[], ['67']],
                    id: 'flowSrc_B0',
                    stroke: [5, 'rgb(199, 0, 96)', 'none'],
                    type: 'rect',
                    fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(12,208,253,1.00)', 10], ['rgba(255,255,255,1.00)', 20], ['rgba(12,208,253,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(12,208,253,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(12,208,253,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(12,208,253,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flowSrc_B5}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["transform", "rotateZ", '-23deg'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '411px'],
                ["style", "width", '88px'],
                ["style", "top", '404px'],
                ["style", "height", '2px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_flowSrc_B2}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["transform", "rotateZ", '-19deg'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '121px'],
                ["style", "width", '17px'],
                ["style", "top", '529px'],
                ["style", "height", '10px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_flowSrc_A1}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["style", "top", '905px'],
                ["style", "height", '125px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '263px'],
                ["style", "width", '23px']
            ],
            "${_flowSrc_D4}": [
                ["color", "background-color", 'rgba(12,208,253,1)'],
                ["transform", "rotateZ", '-111deg'],
                ["style", "opacity", '1'],
                ["style", "left", '248px'],
                ["style", "width", '17px'],
                ["style", "top", '160px'],
                ["transform", "skewY", '22deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '2px'],
                ["style", "display", 'none'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]]
            ],
            "${_flowSrc_D3}": [
                ["color", "background-color", 'rgba(12,208,253,1)'],
                ["transform", "rotateZ", '-111deg'],
                ["style", "opacity", '1'],
                ["style", "left", '243px'],
                ["style", "width", '17px'],
                ["style", "top", '160px'],
                ["transform", "skewY", '22deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]]
            ],
            "${symbolSelector}": [
                ["style", "height", '933px'],
                ["style", "width", '572px'],
                ["style", "overflow", 'hidden']
            ],
            "${_flowSrc_C2}": [
                ["style", "top", '612px'],
                ["color", "background-color", 'rgba(12,208,253,1)'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["transform", "rotateZ", '-27deg'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["style", "left", '161px'],
                ["style", "width", '49px']
            ],
            "${_flowSrc_A2}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["style", "top", '710px'],
                ["transform", "rotateZ", '60deg'],
                ["style", "height", '125px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '320px'],
                ["style", "width", '17px']
            ],
            "${_flowSrc_C3}": [
                ["style", "top", '695px'],
                ["color", "background-color", 'rgba(12,208,253,1)'],
                ["style", "opacity", '1'],
                ["transform", "rotateZ", '26deg'],
                ["style", "height", '10px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '336px'],
                ["style", "width", '49px']
            ],
            "${_flowSrc_B0}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["style", "top", '514px'],
                ["transform", "rotateZ", '67deg'],
                ["style", "height", '232px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '-114px'],
                ["style", "width", '17px']
            ],
            "${_flowSrc_D5}": [
                ["color", "background-color", 'rgba(12,208,253,1)'],
                ["transform", "rotateZ", '-110deg'],
                ["style", "opacity", '1'],
                ["style", "left", '246px'],
                ["style", "width", '17px'],
                ["style", "top", '103px'],
                ["transform", "skewY", '22deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]]
            ],
            "${_flowSrc_D1}": [
                ["color", "background-color", 'rgba(12,208,253,1)'],
                ["transform", "rotateZ", '-22deg'],
                ["style", "opacity", '1'],
                ["style", "left", '218px'],
                ["style", "width", '23px'],
                ["style", "top", '483px'],
                ["transform", "skewX", '34deg'],
                ["style", "height", '10px'],
                ["style", "display", 'none'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]]
            ],
            "${_flowSrc_B4}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["transform", "rotateZ", '-19deg'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '376px'],
                ["style", "width", '17px'],
                ["style", "top", '421px'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["style", "display", 'none']
            ],
            "${_flowSrc_C1}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["style", "opacity", '1'],
                ["style", "top", '754px'],
                ["transform", "rotateZ", '16deg'],
                ["style", "height", '10px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '34px'],
                ["style", "width", '49px']
            ],
            "${_flowRoad}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flowSrc_B3}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["transform", "rotateZ", '-19deg'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '237px'],
                ["style", "width", '17px'],
                ["style", "top", '479px'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["style", "display", 'none']
            ],
            "${_flowSrc_D2}": [
                ["color", "background-color", 'rgba(12,208,253,1)'],
                ["transform", "rotateZ", '2deg'],
                ["style", "opacity", '1'],
                ["style", "left", '234px'],
                ["style", "width", '12px'],
                ["style", "top", '479px'],
                ["transform", "skewY", '-22deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '232px'],
                ["style", "display", 'none'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]]
            ],
            "${_flowSrc_D6}": [
                ["color", "background-color", 'rgba(12,208,253,1)'],
                ["transform", "rotateZ", '-110deg'],
                ["style", "opacity", '1'],
                ["style", "left", '245px'],
                ["style", "width", '17px'],
                ["style", "top", '104px'],
                ["transform", "skewY", '22deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '2px'],
                ["style", "display", 'none'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]]
            ],
            "${_flowSrc_B1}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["transform", "rotateZ", '-15deg'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '13px'],
                ["style", "width", '17px'],
                ["style", "top", '573px'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["style", "display", 'none']
            ],
            "${_flowSrc_A3}": [
                ["color", "background-color", 'rgba(12,208,253,1.00)'],
                ["style", "top", '934px'],
                ["style", "height", '125px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(12,208,253,1.00)',10],['rgba(255,255,255,1.00)',20],['rgba(12,208,253,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(12,208,253,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(12,208,253,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(12,208,253,1.00)',90],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '31px'],
                ["style", "width", '17px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3100,
            autoPlay: false,
            timeline: [
                { id: "eid124", tween: [ "style", "${_flowSrc_C1}", "left", '57px', { fromValue: '34px'}], position: 1233, duration: 277 },
                { id: "eid127", tween: [ "style", "${_flowSrc_C1}", "left", '82px', { fromValue: '57px'}], position: 1510, duration: 224 },
                { id: "eid214", tween: [ "style", "${_flowSrc_D6}", "top", '-3px', { fromValue: '104px'}], position: 2433, duration: 286 },
                { id: "eid218", tween: [ "style", "${_flowSrc_D6}", "top", '-103px', { fromValue: '-3px'}], position: 2720, duration: 380 },
                { id: "eid221", tween: [ "style", "${_flowSrc_D3}", "display", 'block', { fromValue: 'none'}], position: 2299, duration: 0 },
                { id: "eid22", tween: [ "style", "${_flowSrc_A2}", "top", '903px', { fromValue: '710px'}], position: 300, duration: 633 },
                { id: "eid36", tween: [ "style", "${_flowSrc_B1}", "height", '125px', { fromValue: '10px'}], position: 1233, duration: 277 },
                { id: "eid43", tween: [ "style", "${_flowSrc_B1}", "height", '12px', { fromValue: '125px'}], position: 1511, duration: 223 },
                { id: "eid193", tween: [ "style", "${_flowSrc_D2}", "height", '60px', { fromValue: '232px'}], position: 2600, duration: 400 },
                { id: "eid220", tween: [ "style", "${_flowSrc_D6}", "display", 'block', { fromValue: 'none'}], position: 2433, duration: 0 },
                { id: "eid123", tween: [ "style", "${_flowSrc_C1}", "top", '588px', { fromValue: '754px'}], position: 1233, duration: 277 },
                { id: "eid126", tween: [ "style", "${_flowSrc_C1}", "top", '591px', { fromValue: '588px'}], position: 1510, duration: 224 },
                { id: "eid219", tween: [ "style", "${_flowSrc_D5}", "display", 'block', { fromValue: 'none'}], position: 2433, duration: 0 },
                { id: "eid24", tween: [ "style", "${_flowSrc_A3}", "top", '739px', { fromValue: '934px'}], position: 767, duration: 400 },
                { id: "eid212", tween: [ "style", "${_flowSrc_D6}", "height", '162px', { fromValue: '2px'}], position: 2433, duration: 286 },
                { id: "eid216", tween: [ "style", "${_flowSrc_D6}", "left", '320px', { fromValue: '245px'}], position: 2433, duration: 286 },
                { id: "eid217", tween: [ "style", "${_flowSrc_D6}", "left", '590px', { fromValue: '320px'}], position: 2720, duration: 380 },
                { id: "eid160", tween: [ "style", "${_flowSrc_D1}", "display", 'block', { fromValue: 'none'}], position: 1633, duration: 0 },
                { id: "eid208", tween: [ "style", "${_flowSrc_D5}", "left", '170px', { fromValue: '246px'}], position: 2433, duration: 286 },
                { id: "eid209", tween: [ "style", "${_flowSrc_D5}", "left", '-38px', { fromValue: '170px'}], position: 2719, duration: 381 },
                { id: "eid90", tween: [ "style", "${_flowSrc_B4}", "display", 'block', { fromValue: 'none'}], position: 1900, duration: 0 },
                { id: "eid29", tween: [ "style", "${_flowSrc_B0}", "top", '213px', { fromValue: '514px'}], position: 1167, duration: 1333 },
                { id: "eid222", tween: [ "style", "${_flowSrc_D4}", "display", 'block', { fromValue: 'none'}], position: 2299, duration: 0 },
                { id: "eid185", tween: [ "style", "${_flowSrc_D3}", "left", '202px', { fromValue: '243px'}], position: 2300, duration: 316 },
                { id: "eid186", tween: [ "style", "${_flowSrc_D3}", "left", '66px', { fromValue: '202px'}], position: 2616, duration: 317 },
                { id: "eid38", tween: [ "style", "${_flowSrc_B1}", "top", '572px', { fromValue: '573px'}], position: 1233, duration: 277 },
                { id: "eid44", tween: [ "style", "${_flowSrc_B1}", "top", '683px', { fromValue: '572px'}], position: 1511, duration: 223 },
                { id: "eid46", tween: [ "style", "${_flowSrc_B1}", "display", 'block', { fromValue: 'none'}], position: 1233, duration: 0 },
                { id: "eid130", tween: [ "style", "${_flowSrc_C2}", "height", '162px', { fromValue: '10px'}], position: 1699, duration: 267 },
                { id: "eid148", tween: [ "style", "${_flowSrc_C2}", "height", '20px', { fromValue: '162px'}], position: 1966, duration: 234 },
                { id: "eid200", tween: [ "style", "${_flowSrc_D4}", "height", '141px', { fromValue: '2px'}], position: 2299, duration: 272 },
                { id: "eid144", tween: [ "style", "${_flowSrc_C3}", "left", '380px', { fromValue: '336px'}], position: 2032, duration: 267 },
                { id: "eid147", tween: [ "style", "${_flowSrc_C3}", "left", '423px', { fromValue: '380px'}], position: 2299, duration: 234 },
                { id: "eid142", tween: [ "style", "${_flowSrc_C3}", "top", '506px', { fromValue: '695px'}], position: 2032, duration: 267 },
                { id: "eid146", tween: [ "style", "${_flowSrc_C3}", "top", '516px', { fromValue: '506px'}], position: 2299, duration: 234 },
                { id: "eid55", tween: [ "style", "${_flowSrc_B3}", "height", '111px', { fromValue: '10px'}], position: 1667, duration: 277 },
                { id: "eid56", tween: [ "style", "${_flowSrc_B3}", "height", '12px', { fromValue: '111px'}], position: 1944, duration: 223 },
                { id: "eid181", tween: [ "style", "${_flowSrc_D3}", "height", '95px', { fromValue: '8px'}], position: 2300, duration: 316 },
                { id: "eid86", tween: [ "style", "${_flowSrc_B4}", "left", '392px', { fromValue: '376px'}], position: 1900, duration: 277 },
                { id: "eid87", tween: [ "style", "${_flowSrc_B4}", "left", '409px', { fromValue: '392px'}], position: 2177, duration: 223 },
                { id: "eid54", tween: [ "style", "${_flowSrc_B3}", "display", 'block', { fromValue: 'none'}], position: 1667, duration: 0 },
                { id: "eid122", tween: [ "style", "${_flowSrc_C1}", "height", '179px', { fromValue: '10px'}], position: 1233, duration: 277 },
                { id: "eid125", tween: [ "style", "${_flowSrc_C1}", "height", '2px', { fromValue: '179px'}], position: 1510, duration: 224 },
                { id: "eid162", tween: [ "style", "${_flowSrc_D2}", "left", '249px', { fromValue: '234px'}], position: 1633, duration: 967 },
                { id: "eid194", tween: [ "style", "${_flowSrc_D2}", "left", '251px', { fromValue: '249px'}], position: 2600, duration: 400 },
                { id: "eid106", tween: [ "style", "${_flowSrc_B5}", "height", '162px', { fromValue: '2px'}], position: 2100, duration: 277 },
                { id: "eid111", tween: [ "style", "${_flowSrc_B5}", "height", '12px', { fromValue: '162px'}], position: 2377, duration: 223 },
                { id: "eid173", tween: [ "style", "${_flowSrc_D2}", "display", 'block', { fromValue: 'none'}], position: 1633, duration: 0 },
                { id: "eid154", tween: [ "style", "${_flowSrc_D1}", "top", '412px', { fromValue: '483px'}], position: 1633, duration: 267 },
                { id: "eid158", tween: [ "style", "${_flowSrc_D1}", "top", '426px', { fromValue: '412px'}], position: 1900, duration: 232 },
                { id: "eid204", tween: [ "style", "${_flowSrc_D5}", "height", '171px', { fromValue: '8px'}], position: 2433, duration: 286 },
                { id: "eid183", tween: [ "style", "${_flowSrc_D3}", "top", '132px', { fromValue: '160px'}], position: 2300, duration: 316 },
                { id: "eid187", tween: [ "style", "${_flowSrc_D3}", "top", '184px', { fromValue: '132px'}], position: 2616, duration: 317 },
                { id: "eid198", tween: [ "style", "${_flowSrc_D4}", "top", '62px', { fromValue: '160px'}], position: 2299, duration: 272 },
                { id: "eid202", tween: [ "style", "${_flowSrc_D4}", "top", '-60px', { fromValue: '62px'}], position: 2571, duration: 362 },
                { id: "eid206", tween: [ "style", "${_flowSrc_D5}", "top", '49px', { fromValue: '103px'}], position: 2433, duration: 286 },
                { id: "eid210", tween: [ "style", "${_flowSrc_D5}", "top", '126px', { fromValue: '49px'}], position: 2719, duration: 381 },
                { id: "eid69", tween: [ "style", "${_flowSrc_B3}", "left", '254px', { fromValue: '237px'}], position: 1667, duration: 277 },
                { id: "eid70", tween: [ "style", "${_flowSrc_B3}", "left", '273px', { fromValue: '254px'}], position: 1944, duration: 223 },
                { id: "eid156", tween: [ "style", "${_flowSrc_D1}", "left", '175px', { fromValue: '218px'}], position: 1633, duration: 267 },
                { id: "eid159", tween: [ "style", "${_flowSrc_D1}", "left", '131px', { fromValue: '175px'}], position: 1900, duration: 232 },
                { id: "eid88", tween: [ "style", "${_flowSrc_B4}", "top", '424px', { fromValue: '421px'}], position: 1900, duration: 277 },
                { id: "eid89", tween: [ "style", "${_flowSrc_B4}", "top", '518px', { fromValue: '424px'}], position: 2177, duration: 223 },
                { id: "eid140", tween: [ "style", "${_flowSrc_C3}", "height", '209px', { fromValue: '10px'}], position: 2032, duration: 267 },
                { id: "eid145", tween: [ "style", "${_flowSrc_C3}", "height", '12px', { fromValue: '209px'}], position: 2299, duration: 234 },
                { id: "eid108", tween: [ "style", "${_flowSrc_B5}", "top", '397px', { fromValue: '404px'}], position: 2100, duration: 277 },
                { id: "eid112", tween: [ "style", "${_flowSrc_B5}", "top", '551px', { fromValue: '397px'}], position: 2377, duration: 223 },
                { id: "eid23", tween: [ "style", "${_flowSrc_A3}", "left", '30px', { fromValue: '31px'}], position: 767, duration: 400 },
                { id: "eid40", tween: [ "style", "${_flowSrc_B1}", "left", '28px', { fromValue: '13px'}], position: 1233, duration: 277 },
                { id: "eid45", tween: [ "style", "${_flowSrc_B1}", "left", '42px', { fromValue: '28px'}], position: 1511, duration: 223 },
                { id: "eid114", tween: [ "style", "${_flowSrc_B5}", "display", 'block', { fromValue: 'none'}], position: 2100, duration: 0 },
                { id: "eid53", tween: [ "style", "${_flowSrc_B2}", "display", 'block', { fromValue: 'none'}], position: 1467, duration: 0 },
                { id: "eid134", tween: [ "style", "${_flowSrc_C2}", "left", '196px', { fromValue: '161px'}], position: 1699, duration: 267 },
                { id: "eid150", tween: [ "style", "${_flowSrc_C2}", "left", '228px', { fromValue: '196px'}], position: 1966, duration: 234 },
                { id: "eid132", tween: [ "style", "${_flowSrc_C2}", "top", '604px', { fromValue: '612px'}], position: 1699, duration: 267 },
                { id: "eid149", tween: [ "style", "${_flowSrc_C2}", "top", '738px', { fromValue: '604px'}], position: 1966, duration: 234 },
                { id: "eid28", tween: [ "style", "${_flowSrc_B0}", "left", '605px', { fromValue: '-114px'}], position: 1167, duration: 1333 },
                { id: "eid51", tween: [ "style", "${_flowSrc_B2}", "left", '136px', { fromValue: '121px'}], position: 1467, duration: 277 },
                { id: "eid52", tween: [ "style", "${_flowSrc_B2}", "left", '155px', { fromValue: '136px'}], position: 1744, duration: 223 },
                { id: "eid20", tween: [ "style", "${_flowSrc_A1}", "top", '677px', { fromValue: '905px'}], position: 0, duration: 367 },
                { id: "eid164", tween: [ "style", "${_flowSrc_D2}", "top", '32px', { fromValue: '479px'}], position: 1633, duration: 967 },
                { id: "eid223", tween: [ "style", "${_flowSrc_D2}", "top", '32px', { fromValue: '32px'}], position: 2600, duration: 400 },
                { id: "eid110", tween: [ "style", "${_flowSrc_B5}", "left", '443px', { fromValue: '411px'}], position: 2100, duration: 277 },
                { id: "eid113", tween: [ "style", "${_flowSrc_B5}", "left", '483px', { fromValue: '443px'}], position: 2377, duration: 223 },
                { id: "eid49", tween: [ "style", "${_flowSrc_B2}", "height", '111px', { fromValue: '10px'}], position: 1467, duration: 277 },
                { id: "eid50", tween: [ "style", "${_flowSrc_B2}", "height", '12px', { fromValue: '111px'}], position: 1744, duration: 223 },
                { id: "eid71", tween: [ "style", "${_flowSrc_B3}", "top", '476px', { fromValue: '479px'}], position: 1667, duration: 277 },
                { id: "eid72", tween: [ "style", "${_flowSrc_B3}", "top", '580px', { fromValue: '476px'}], position: 1944, duration: 223 },
                { id: "eid21", tween: [ "style", "${_flowSrc_A2}", "left", '-20px', { fromValue: '320px'}], position: 300, duration: 633 },
                { id: "eid47", tween: [ "style", "${_flowSrc_B2}", "top", '524px', { fromValue: '529px'}], position: 1467, duration: 277 },
                { id: "eid48", tween: [ "style", "${_flowSrc_B2}", "top", '623px', { fromValue: '524px'}], position: 1744, duration: 223 },
                { id: "eid196", tween: [ "style", "${_flowSrc_D4}", "left", '320px', { fromValue: '248px'}], position: 2299, duration: 272 },
                { id: "eid201", tween: [ "style", "${_flowSrc_D4}", "left", '630px', { fromValue: '320px'}], position: 2571, duration: 362 },
                { id: "eid78", tween: [ "style", "${_flowSrc_B4}", "height", '98px', { fromValue: '10px'}], position: 1900, duration: 277 },
                { id: "eid79", tween: [ "style", "${_flowSrc_B4}", "height", '3px', { fromValue: '98px'}], position: 2177, duration: 223 },
                { id: "eid152", tween: [ "style", "${_flowSrc_D1}", "height", '95px', { fromValue: '10px'}], position: 1633, duration: 267 },
                { id: "eid157", tween: [ "style", "${_flowSrc_D1}", "height", '8px', { fromValue: '95px'}], position: 1900, duration: 232 }            ]
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
})(jQuery, AdobeEdge, "EDGE-28377048");
