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
                id: 'movieAll',
                type: 'rect',
                rect: ['63', '177','auto','auto','auto', 'auto']
            },
            {
                id: 'txt-main2',
                type: 'text',
                rect: ['846', '15','907','106','auto', 'auto'],
                text: "TPMS센서는 1분마다 타이어 정보를 송신하고 \r타이어 압력을 매 약4초 주기로 측정합니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt-main1',
                type: 'text',
                rect: ['167', '23','610','76','auto', 'auto'],
                text: "TPMS센서 & 리시버",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'movieAll',
                symbolName: 'movieAll',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt-main1}": [
                ["style", "opacity", '0']
            ],
            "${_movieAll}": [
                ["style", "opacity", '0']
            ],
            "${_txt-main2}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4500,
            autoPlay: true,
            labels: {
                "gogo": 1000
            },
            timeline: [
                { id: "eid48", tween: [ "style", "${_movieAll}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 467 },
                { id: "eid46", tween: [ "style", "${_txt-main1}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 333 },
                { id: "eid47", tween: [ "style", "${_txt-main2}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 333 }            ]
        }
    }
},
"movieAll": {
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
                    id: 'flow_road',
                    tag: 'img',
                    rect: ['858px', '794px', '472', '41', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_road.png']
                },
                {
                    id: 'movie_flow_back',
                    type: 'rect',
                    rect: ['823', '801', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'movie_flow_flow',
                    type: 'rect',
                    rect: ['1060', '717', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'carBody',
                    tag: 'img',
                    rect: ['0px', '61px', '1027', '453', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/carBody.png']
                },
                {
                    type: 'image',
                    id: 'redLine',
                    tag: 'img',
                    rect: ['179px', '0px', '734', '826', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/redLine.png']
                },
                {
                    id: 'movie_sensor',
                    type: 'rect',
                    rect: ['433', '601', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'movie_arrow',
                    type: 'rect',
                    rect: ['1424', '393', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'module2',
                    tag: 'img',
                    rect: ['1326px', '642px', '384', '340', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module2.png']
                },
                {
                    id: 'movie_module1',
                    type: 'rect',
                    rect: ['1265', '82', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['굴림', 46, 'rgb(76,76,76)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'txt-sub3',
                    text: '공기압 부족시\r계기판으로 출력',
                    align: 'auto',
                    rect: ['1136px', '478px', '341', '110', 'auto', 'auto']
                },
                {
                    font: ['굴림', 58, 'rgb(76,76,76)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'txt-sub2',
                    text: 'TPMS\r리시버',
                    align: 'center',
                    rect: ['1429px', '732px', '178', '133', 'auto', 'auto']
                },
                {
                    font: ['굴림', 58, 'rgb(0,0,0)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'txt-sub1',
                    text: 'TPMS',
                    align: 'center',
                    rect: ['568px', '920px', '160', '63', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'movie_arrow',
                symbolName: 'movie_arrow'
            },
            {
                id: 'movie_module1',
                symbolName: 'movie_module1'
            },
            {
                id: 'movie_sensor',
                symbolName: 'movie_sensor'
            },
            {
                id: 'movie_flow_back',
                symbolName: 'movie_flow_back'
            },
            {
                id: 'movie_flow_flow',
                symbolName: 'movie_flow_flow'
            }            ]
        },
    states: {
        "Base State": {
            "${_movie_flow_flow}": [
                ["style", "left", '838px'],
                ["style", "top", '803px']
            ],
            "${_txt-sub2}": [
                ["style", "left", '1429px'],
                ["style", "top", '732px']
            ],
            "${_carBody}": [
                ["style", "left", '0px'],
                ["style", "top", '61px']
            ],
            "${_txt-sub3}": [
                ["style", "left", '1136px'],
                ["style", "top", '478px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1029px'],
                ["style", "width", '1773px']
            ],
            "${_txt-sub1}": [
                ["style", "left", '568px'],
                ["style", "top", '920px']
            ],
            "${_flow_road}": [
                ["style", "left", '858px'],
                ["style", "top", '794px']
            ],
            "${_module2}": [
                ["style", "left", '1326px'],
                ["style", "top", '642px']
            ],
            "${_redLine}": [
                ["style", "left", '179px'],
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
                { id: "eid26", tween: [ "style", "${_movie_flow_flow}", "top", '803px', { fromValue: '803px'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_movie_flow_flow}", "left", '838px', { fromValue: '838px'}], position: 0, duration: 0 }            ]
        }
    }
},
"movie_sensor": {
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
                    id: 'sensor_back',
                    tag: 'img',
                    rect: ['0px', '0px', '429', '428', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_back.png']
                },
                {
                    type: 'image',
                    id: 'sensor_back_red',
                    tag: 'img',
                    rect: ['0px', '0px', '429', '428', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_back_red.png']
                },
                {
                    type: 'image',
                    id: 'sensor',
                    tag: 'img',
                    rect: ['42px', '65px', '345', '259', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor.png']
                },
                {
                    type: 'image',
                    id: 'sensor_outLine',
                    tag: 'img',
                    rect: ['42px', '65px', '345', '259', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor_outLine.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sensor_outLine}": [
                ["style", "top", '65px'],
                ["style", "opacity", '0'],
                ["style", "left", '42px']
            ],
            "${_sensor}": [
                ["style", "left", '42px'],
                ["style", "top", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '428px'],
                ["style", "width", '429px']
            ],
            "${_sensor_back}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_sensor_back_red}": [
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
            duration: 1067,
            autoPlay: false,
            labels: {
                "gogo": 500
            },
            timeline: [
                { id: "eid2", tween: [ "style", "${_sensor_outLine}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 267 },
                { id: "eid5", tween: [ "style", "${_sensor_outLine}", "opacity", '0', { fromValue: '0.998752'}], position: 800, duration: 267 },
                { id: "eid4", tween: [ "style", "${_sensor_back_red}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 267 },
                { id: "eid6", tween: [ "style", "${_sensor_back_red}", "opacity", '0', { fromValue: '0.998752'}], position: 800, duration: 267 },
                { id: "eid49", tween: [ "style", "${_sensor_back}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }            ]
        }
    }
},
"movie_flow_back": {
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
                    id: 'flow_inner1',
                    tag: 'img',
                    rect: ['36px', '2px', '475', '23', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_inner1.png']
                },
                {
                    rect: ['36px', '2px', '475', '23', 'auto', 'auto'],
                    tag: 'img',
                    id: 'flow_inner2',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_inner2.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_inner2}": [
                ["style", "top", '2px'],
                ["style", "opacity", '1'],
                ["style", "left", '36px']
            ],
            "${_flow_inner1}": [
                ["style", "left", '36px'],
                ["style", "top", '2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '27px'],
                ["style", "width", '538px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 133,
            autoPlay: false,
            labels: {
                "gogo": 133
            },
            timeline: [
                { id: "eid27", tween: [ "style", "${_flow_inner2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 133 }            ]
        }
    }
},
"movie_arrow": {
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
                    id: 'arrow-back',
                    tag: 'img',
                    rect: ['53px', '38px', '80', '198', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arrow-back.png']
                },
                {
                    type: 'image',
                    id: 'arrow-back_red',
                    tag: 'img',
                    rect: ['53px', '38px', '80', '198', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arrow-back_red.png']
                },
                {
                    rect: ['23px', '18px', '141', '269', 'auto', 'auto'],
                    tag: 'img',
                    id: 'arrow_src',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/arrow_src.png']
                },
                {
                    type: 'image',
                    id: 'arrow-cover',
                    tag: 'img',
                    rect: ['0px', '0px', '187', '275', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arrow-cover.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arrow-back}": [
                ["style", "left", '53px'],
                ["style", "top", '38px']
            ],
            "${_arrow-cover}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '287px'],
                ["style", "width", '187px']
            ],
            "${_arrow_src}": [
                ["style", "top", '18px'],
                ["style", "left", '23px'],
                ["style", "display", 'none']
            ],
            "${_arrow-back_red}": [
                ["style", "top", '38px'],
                ["style", "opacity", '0'],
                ["style", "left", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: false,
            labels: {
                "gogo": 500
            },
            timeline: [
                { id: "eid29", tween: [ "style", "${_arrow-back_red}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid31", tween: [ "style", "${_arrow_src}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_arrow_src}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_arrow_src}", "top", '-2px', { fromValue: '18px'}], position: 500, duration: 267 }            ]
        }
    }
},
"movie_module1": {
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
                    id: 'module1-grey',
                    tag: 'img',
                    rect: ['0px', '0px', '508', '343', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module1-grey.png']
                },
                {
                    type: 'image',
                    id: 'module1',
                    tag: 'img',
                    rect: ['0px', '0px', '508', '343', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module1.png']
                },
                {
                    type: 'image',
                    id: 'module1-icon1',
                    tag: 'img',
                    rect: ['142px', '38px', '224', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module1-icon1.png']
                },
                {
                    type: 'image',
                    id: 'module1-icon2',
                    tag: 'img',
                    rect: ['142px', '38px', '224', '192', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module1-icon2.png']
                },
                {
                    font: ['굴림', 40, 'rgb(0,0,0)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'txt-sub4',
                    text: '타이어 공기압이 낮습니다.',
                    align: 'auto',
                    rect: ['19px', '267px', '483', '46', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_module1-icon1}": [
                ["style", "top", '38px'],
                ["style", "opacity", '0'],
                ["style", "left", '142px']
            ],
            "${_txt-sub4}": [
                ["style", "top", '267px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '19px']
            ],
            "${symbolSelector}": [
                ["style", "height", '343px'],
                ["style", "width", '508px']
            ],
            "${_module1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_module1-grey}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_module1-icon2}": [
                ["style", "top", '38px'],
                ["style", "opacity", '0'],
                ["style", "left", '142px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1100,
            autoPlay: false,
            labels: {
                "gogo": 533
            },
            timeline: [
                { id: "eid36", tween: [ "style", "${_module1-icon2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid41", tween: [ "style", "${_module1-icon2}", "opacity", '0', { fromValue: '1'}], position: 533, duration: 267 },
                { id: "eid42", tween: [ "style", "${_module1-icon2}", "opacity", '1', { fromValue: '0.000000'}], position: 834, duration: 266 },
                { id: "eid34", tween: [ "style", "${_txt-sub4}", "opacity", '1', { fromValue: '0.5'}], position: 0, duration: 500 },
                { id: "eid38", tween: [ "style", "${_module1-icon1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid40", tween: [ "style", "${_module1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"movie_flow_flow": {
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
                    id: 'flow_src1',
                    tag: 'img',
                    rect: ['-5px', '-2px', '538', '27', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src1}": [
                ["style", "left", '-5px'],
                ["style", "top", '-2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '538px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 433,
            autoPlay: true,
            timeline: [
                { id: "eid20", tween: [ "style", "${_flow_src1}", "left", '19px', { fromValue: '-5px'}], position: 0, duration: 433 }            ]
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
})(jQuery, AdobeEdge, "EDGE-30524557");
