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
                id: 'body',
                type: 'image',
                tag: 'img',
                rect: ['342', '95','561','771','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body.png"]
            },
            {
                id: 'BELT_BOTTOM_MOVE',
                type: 'rect',
                rect: ['379', '130','auto','auto','auto', 'auto']
            },
            {
                id: 'BELT_MIDDLE2_MOVE',
                type: 'rect',
                rect: ['482', '447','auto','auto','auto', 'auto']
            },
            {
                id: 'BELT_MIDDLE1_MOVE',
                type: 'rect',
                rect: ['239', '504','auto','auto','auto', 'auto']
            },
            {
                id: 'WATERP_P_BOTTOM_MOVE',
                type: 'rect',
                rect: ['293', '478','auto','auto','auto', 'auto']
            },
            {
                id: 'ALTERNATER_P_MOVE',
                type: 'rect',
                rect: ['230', '697','auto','auto','auto', 'auto']
            },
            {
                id: 'CRANKSHAFT_P_MOVE',
                type: 'rect',
                rect: ['463', '625','auto','auto','auto', 'auto']
            },
            {
                id: 'AIRC_P_MOVE',
                type: 'rect',
                rect: ['747', '531','auto','auto','auto', 'auto']
            },
            {
                id: 'TENTION_P_MOVE',
                type: 'rect',
                rect: ['585', '436','auto','auto','auto', 'auto']
            },
            {
                id: 'SPRAKET_MOVE2',
                type: 'rect',
                rect: ['376px', '130','auto','auto','auto', 'auto']
            },
            {
                id: 'SPRAKET_MOVE',
                type: 'rect',
                rect: ['376', '130','auto','auto','auto', 'auto']
            },
            {
                id: 'BELT_TOP_MOVE',
                type: 'rect',
                rect: ['206', '373','auto','auto','auto', 'auto']
            },
            {
                id: 'WATERP_P_TOP_MOVE',
                type: 'rect',
                rect: ['326', '511','auto','auto','auto', 'auto']
            },
            {
                id: 'P_STEERING_P_MOVE',
                type: 'rect',
                rect: ['183', '346','auto','auto','auto', 'auto']
            },
            {
                id: 'guide_line',
                type: 'image',
                tag: 'img',
                rect: ['151', '272','690','662','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"guide_line.png"]
            },
            {
                id: 'content_text1',
                type: 'text',
                rect: ['81', '185','214','83','auto', 'auto'],
                text: "파워스티어링<br>오일펌프풀리",
                align: "auto",
                font: ['굴림', 35, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'content_text2',
                type: 'text',
                rect: ['568', '343','144','41','auto', 'auto'],
                text: "장력풀리",
                align: "auto",
                font: ['굴림', 35, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'content_text3',
                type: 'text',
                rect: ['46', '519','214','41','auto', 'auto'],
                text: "워터펌프풀리",
                align: "auto",
                font: ['굴림', 35, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'content_text4',
                type: 'text',
                rect: ['157', '878','249','41','auto', 'auto'],
                text: "알터네이터풀리",
                align: "auto",
                font: ['굴림', 35, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'content_text5',
                type: 'text',
                rect: ['426', '941','284','41','auto', 'auto'],
                text: "크랭크샤프트풀리",
                align: "auto",
                font: ['굴림', 35, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'content_text6',
                type: 'text',
                rect: ['760', '815','144','125','auto', 'auto'],
                text: "에어컨<br>컴프레셔<br>풀리",
                align: "center",
                font: ['굴림', 35, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['990', '126','679','50','auto', 'auto'],
                text: "드라이브벨트 절손으로 인한 증상",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['986', '236','657','170','auto', 'auto'],
                text: "*시동불능 및 시동꺼짐<br>*엔진과열 현상<br>*파워스티어링 핸들 조작 어려움",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['990', '612','769','50','auto', 'auto'],
                text: "드라이브벨트 장력불량으로 인한 증상",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['986', '722','597','170','auto', 'auto'],
                text: "*발전기 충전불량<br>*파워스티어링 핸들조작 불량<br>*벨트소음 발생",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'WATERP_P_BOTTOM_MOVE',
                symbolName: 'WATERP_P_BOTTOM_MOVE'
            },
            {
                id: 'P_STEERING_P_MOVE',
                symbolName: 'P_STEERING_P_MOVE'
            },
            {
                id: 'BELT_BOTTOM_MOVE',
                symbolName: 'BELT_BOTTOM_MOVE'
            },
            {
                id: 'BELT_MIDDLE1_MOVE',
                symbolName: 'BELT_MIDDLE1_MOVE'
            },
            {
                id: 'BELT_MIDDLE2_MOVE',
                symbolName: 'BELT_MIDDLE2_MOVE'
            },
            {
                id: 'BELT_TOP_MOVE',
                symbolName: 'BELT_TOP_MOVE'
            },
            {
                id: 'SPRAKET_MOVE',
                symbolName: 'SPRAKET_MOVE'
            },
            {
                id: 'CRANKSHAFT_P_MOVE',
                symbolName: 'CRANKSHAFT_P_MOVE'
            },
            {
                id: 'ALTERNATER_P_MOVE',
                symbolName: 'ALTERNATER_P_MOVE'
            },
            {
                id: 'AIRC_P_MOVE',
                symbolName: 'AIRC_P_MOVE'
            },
            {
                id: 'TENTION_P_MOVE',
                symbolName: 'TENTION_P_MOVE'
            },
            {
                id: 'SPRAKET_MOVE2',
                symbolName: 'SPRAKET_MOVE'
            },
            {
                id: 'WATERP_P_TOP_MOVE',
                symbolName: 'WATERP_P_TOP_MOVE'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_SPRAKET_MOVE2}": [
                ["style", "left", '635px']
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
                { id: "eid6", tween: [ "style", "${_SPRAKET_MOVE2}", "left", '635px', { fromValue: '635px'}], position: 0, duration: 0 }            ]
        }
    }
},
"P_STEERING_P_MOVE": {
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
                    rect: ['0px', '0px', '127', '127', 'auto', 'auto'],
                    id: 'P_steering_p',
                    fill: ['rgba(0,0,0,0)', 'images/P_steering_p.png'],
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
                ["style", "height", '127px'],
                ["style", "width", '127px']
            ],
            "${_P_steering_p}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
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
                { id: "eid8", tween: [ "transform", "${_P_steering_p}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3000 }            ]
        }
    }
},
"WATERP_P_TOP_MOVE": {
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
                    rect: ['0px', '0px', '125', '125', 'auto', 'auto'],
                    id: 'waterP_p_top',
                    fill: ['rgba(0,0,0,0)', 'images/waterP_p_top.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_waterP_p_top}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '125px'],
                ["style", "width", '125px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "transform", "${_waterP_p_top}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 }            ]
        }
    }
},
"BELT_TOP_MOVE": {
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
                    rect: ['0px', '0px', '225', '239', 'auto', 'auto'],
                    id: 'belt_top',
                    fill: ['rgba(0,0,0,0)', 'images/belt_top.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['59px', '0px', '46px', '10px', 'auto', 'auto'],
                    id: 'flow_src12',
                    transform: [[], ['49']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src1.png', '0px', '0px']
                },
                {
                    rect: ['90px', '195px', '46px', '10px', 'auto', 'auto'],
                    id: 'flow_src12Copy',
                    transform: [[], ['49']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src12Copy}": [
                ["style", "top", '195px'],
                ["style", "left", '90px'],
                ["transform", "rotateZ", '49deg']
            ],
            "${_belt_top}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flow_src12}": [
                ["style", "top", '0px'],
                ["style", "left", '59px'],
                ["transform", "rotateZ", '49deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '239px'],
                ["style", "width", '225px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 583,
            autoPlay: true,
            timeline: [
                { id: "eid23", tween: [ "style", "${_flow_src12Copy}", "left", '-17px', { fromValue: '90px'}], position: 0, duration: 458 },
                { id: "eid25", tween: [ "style", "${_flow_src12}", "left", '197px', { fromValue: '59px'}], position: 0, duration: 458 },
                { id: "eid26", tween: [ "style", "${_flow_src12}", "top", '160px', { fromValue: '0px'}], position: 0, duration: 458 },
                { id: "eid24", tween: [ "style", "${_flow_src12Copy}", "top", '72px', { fromValue: '195px'}], position: 0, duration: 458 }            ]
        }
    }
},
"SPRAKET_MOVE": {
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
                    rect: ['0px', '0px', '201', '201', 'auto', 'auto'],
                    id: 'spraket',
                    fill: ['rgba(0,0,0,0)', 'images/spraket.png'],
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
                ["style", "height", '201px'],
                ["style", "width", '201px']
            ],
            "${_spraket}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid7", tween: [ "transform", "${_spraket}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 }            ]
        }
    }
},
"TENTION_P_MOVE": {
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
                    rect: ['0px', '0px', '113', '113', 'auto', 'auto'],
                    id: 'tention_p',
                    fill: ['rgba(0,0,0,0)', 'images/tention_p.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tention_p}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '113px'],
                ["style", "width", '113px']
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
                { id: "eid10", tween: [ "transform", "${_tention_p}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3000 }            ]
        }
    }
},
"AIRC_P_MOVE": {
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
                    rect: ['0px', '0px', '171', '171', 'auto', 'auto'],
                    id: 'airC_p',
                    fill: ['rgba(0,0,0,0)', 'images/airC_p.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_airC_p}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '171px'],
                ["style", "width", '171px']
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
                { id: "eid11", tween: [ "transform", "${_airC_p}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2500 }            ]
        }
    }
},
"CRANKSHAFT_P_MOVE": {
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
                    rect: ['0px', '0px', '209', '209', 'auto', 'auto'],
                    id: 'crankShaft_p',
                    fill: ['rgba(0,0,0,0)', 'images/crankShaft_p.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crankShaft_p}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '209px'],
                ["style", "width", '209px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "transform", "${_crankShaft_p}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 }            ]
        }
    }
},
"ALTERNATER_P_MOVE": {
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
                    rect: ['0px', '0px', '106', '105', 'auto', 'auto'],
                    id: 'alterN_p',
                    fill: ['rgba(0,0,0,0)', 'images/alterN_p.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_alterN_p}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '106px']
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
                { id: "eid13", tween: [ "transform", "${_alterN_p}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3000 }            ]
        }
    }
},
"WATERP_P_BOTTOM_MOVE": {
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
                    rect: ['0px', '0px', '191', '191', 'auto', 'auto'],
                    id: 'waterP_p_bottom',
                    fill: ['rgba(0,0,0,0)', 'images/waterP_p_bottom.png'],
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
                ["style", "height", '191px'],
                ["style", "width", '191px']
            ],
            "${_waterP_p_bottom}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
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
                { id: "eid14", tween: [ "transform", "${_waterP_p_bottom}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000 }            ]
        }
    }
},
"BELT_MIDDLE1_MOVE": {
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
                    rect: ['0px', '0px', '390', '324', 'auto', 'auto'],
                    id: 'belt_middle1',
                    fill: ['rgba(0,0,0,0)', 'images/belt_middle1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['66px', '295px', '260px', '15px', 'auto', 'auto'],
                    id: 'flow_src3_short2',
                    transform: [[], ['6']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src3_short.png', '0px', '0px']
                },
                {
                    rect: ['-102px', '160px', '260px', '15px', 'auto', 'auto'],
                    id: 'flow_src3_short2Copy',
                    transform: [[], ['-71']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src3_short.png', '0px', '0px']
                },
                {
                    rect: ['154px', '62px', '260px', '15px', 'auto', 'auto'],
                    id: 'flow_src3_short2Copy2',
                    transform: [[], ['39']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src3_short.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src3_short2}": [
                ["style", "top", '295px'],
                ["style", "left", '66px'],
                ["transform", "rotateZ", '6deg']
            ],
            "${_belt_middle1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '324px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '390px']
            ],
            "${_flow_src3_short2Copy2}": [
                ["style", "top", '62px'],
                ["style", "left", '154px'],
                ["transform", "rotateZ", '39deg']
            ],
            "${_flow_src3_short2Copy}": [
                ["style", "top", '160px'],
                ["style", "left", '-102px'],
                ["transform", "rotateZ", '-71deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid35", tween: [ "style", "${_flow_src3_short2}", "left", '45px', { fromValue: '66px'}], position: 0, duration: 250 },
                { id: "eid40", tween: [ "style", "${_flow_src3_short2Copy2}", "top", '76px', { fromValue: '62px'}], position: 0, duration: 250 },
                { id: "eid37", tween: [ "style", "${_flow_src3_short2Copy}", "left", '-95px', { fromValue: '-102px'}], position: 0, duration: 250 },
                { id: "eid39", tween: [ "style", "${_flow_src3_short2Copy2}", "left", '171px', { fromValue: '154px'}], position: 0, duration: 250 },
                { id: "eid38", tween: [ "style", "${_flow_src3_short2Copy}", "top", '140px', { fromValue: '160px'}], position: 0, duration: 250 },
                { id: "eid36", tween: [ "style", "${_flow_src3_short2}", "top", '293px', { fromValue: '295px'}], position: 0, duration: 250 }            ]
        }
    }
},
"BELT_MIDDLE2_MOVE": {
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
                    rect: ['0px', '0px', '385', '372', 'auto', 'auto'],
                    id: 'belt_middle2',
                    fill: ['rgba(0,0,0,0)', 'images/belt_middle2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['111px', '287px', '311px', '16px', 'auto', 'auto'],
                    id: 'flow_src3_long',
                    transform: [[], ['-27']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src3_long.png', '0px', '0px']
                },
                {
                    rect: ['135px', '39px', '260px', '15px', 'auto', 'auto'],
                    id: 'flow_src3_short',
                    transform: [[], ['26']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src3_short.png', '0px', '0px']
                },
                {
                    rect: ['-73px', '133px', '260px', '15px', 'auto', 'auto'],
                    id: 'flow_src3_shortCopy',
                    transform: [[], ['-62']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src3_short.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src3_short}": [
                ["style", "top", '39px'],
                ["style", "left", '135px'],
                ["transform", "rotateZ", '26deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '372px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '385px']
            ],
            "${_belt_middle2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flow_src3_long}": [
                ["style", "top", '287px'],
                ["style", "left", '111px'],
                ["transform", "rotateZ", '-27deg']
            ],
            "${_flow_src3_shortCopy}": [
                ["style", "top", '133px'],
                ["style", "left", '-73px'],
                ["transform", "rotateZ", '-62deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid29", tween: [ "style", "${_flow_src3_long}", "left", '92px', { fromValue: '111px'}], position: 0, duration: 250 },
                { id: "eid33", tween: [ "style", "${_flow_src3_shortCopy}", "left", '-63px', { fromValue: '-73px'}], position: 0, duration: 250 },
                { id: "eid31", tween: [ "style", "${_flow_src3_short}", "left", '154px', { fromValue: '135px'}], position: 0, duration: 250 },
                { id: "eid30", tween: [ "style", "${_flow_src3_long}", "top", '296px', { fromValue: '287px'}], position: 0, duration: 250 },
                { id: "eid34", tween: [ "style", "${_flow_src3_shortCopy}", "top", '115px', { fromValue: '133px'}], position: 0, duration: 250 },
                { id: "eid32", tween: [ "style", "${_flow_src3_short}", "top", '48px', { fromValue: '39px'}], position: 0, duration: 250 }            ]
        }
    }
},
"BELT_BOTTOM_MOVE": {
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
                    rect: ['0px', '0px', '449', '632', 'auto', 'auto'],
                    id: 'belt_bottom',
                    fill: ['rgba(0,0,0,0)', 'images/belt_bottom.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'flow_src1',
                    type: 'image',
                    rect: ['83px', '7px', '46px', '10px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src1.png', '0px', '0px']
                },
                {
                    rect: ['80px', '575px', '66px', '13px', 'auto', 'auto'],
                    id: 'flow_src2',
                    transform: [[], ['-103']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src2.png', '0px', '0px']
                },
                {
                    rect: ['404px', '130px', '66px', '13px', 'auto', 'auto'],
                    id: 'flow_src2Copy',
                    transform: [[], ['111']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src1}": [
                ["style", "left", '83px'],
                ["style", "top", '7px']
            ],
            "${_belt_bottom}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '632px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '449px']
            ],
            "${_flow_src2}": [
                ["style", "top", '575px'],
                ["style", "left", '80px'],
                ["transform", "rotateZ", '-103deg']
            ],
            "${_flow_src2Copy}": [
                ["style", "top", '130px'],
                ["style", "left", '404px'],
                ["transform", "rotateZ", '111deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 708,
            autoPlay: true,
            timeline: [
                { id: "eid17", tween: [ "style", "${_flow_src2}", "left", '-22px', { fromValue: '80px'}], position: 0, duration: 708 },
                { id: "eid16", tween: [ "style", "${_flow_src1}", "left", '328px', { fromValue: '83px'}], position: 0, duration: 458 },
                { id: "eid19", tween: [ "style", "${_flow_src2Copy}", "top", '620px', { fromValue: '130px'}], position: 0, duration: 708 },
                { id: "eid20", tween: [ "style", "${_flow_src2Copy}", "left", '220px', { fromValue: '404px'}], position: 0, duration: 708 },
                { id: "eid18", tween: [ "style", "${_flow_src2}", "top", '113px', { fromValue: '575px'}], position: 0, duration: 708 }            ]
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
})(jQuery, AdobeEdge, "EDGE-14431557");
