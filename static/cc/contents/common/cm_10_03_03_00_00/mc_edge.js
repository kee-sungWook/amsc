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
                id: 'eng',
                type: 'image',
                tag: 'img',
                rect: ['617px', '284px','615','666','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eng.png"]
            },
            {
                id: 'ENG_RED',
                type: 'rect',
                rect: ['619', '286','auto','auto','auto', 'auto']
            },
            {
                id: 'airduct',
                type: 'image',
                tag: 'img',
                rect: ['122px', '74px','426','440','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"airduct.png"]
            },
            {
                id: 'LINE1_IN',
                type: 'rect',
                rect: ['1021px', '691px','auto','auto','auto', 'auto']
            },
            {
                id: 'line1',
                type: 'image',
                tag: 'img',
                rect: ['1013px', '672px','167','329','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line1.png"]
            },
            {
                id: 'LINE2_IN',
                type: 'rect',
                rect: ['343px', '404px','auto','auto','auto', 'auto']
            },
            {
                id: 'line2',
                type: 'image',
                tag: 'img',
                rect: ['332px', '393px','787','385','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line2.png"]
            },
            {
                id: 'LINE3_IN',
                type: 'rect',
                rect: ['342px', '344px','auto','auto','auto', 'auto']
            },
            {
                id: 'line3',
                type: 'image',
                tag: 'img',
                rect: ['331px', '333px','345','105','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line3.png"]
            },
            {
                id: 'LINE4_IN',
                type: 'rect',
                rect: ['1210px', '462px','auto','auto','auto', 'auto']
            },
            {
                id: 'line4',
                type: 'image',
                tag: 'img',
                rect: ['1153px', '450px','254','112','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line4.png"]
            },
            {
                id: 'radiator_back',
                type: 'image',
                tag: 'img',
                rect: ['1194px', '547px','250','459','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator_back.png"]
            },
            {
                id: 'liquide_bottom_80pct',
                type: 'image',
                tag: 'img',
                rect: ['1196px', '590px','235','218','auto', 'auto'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,0)",im+"liquide_bottom_80pct.png"]
            },
            {
                id: 'pipe',
                type: 'image',
                tag: 'img',
                rect: ['1220px', '601px','179','317','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pipe.png"]
            },
            {
                id: 'liquide_mid_50pct',
                type: 'image',
                tag: 'img',
                rect: ['1191px', '604px','253','400px','auto', 'auto'],
                opacity: 0.5,
                fill: ["rgba(0,0,0,0)",im+"liquide_mid_50pct.png"]
            },
            {
                id: 'pipe_pollution',
                type: 'image',
                tag: 'img',
                rect: ['1222px', '602px','176','314','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pipe_pollution.png"]
            },
            {
                id: 'liquide_top_80pct',
                type: 'image',
                tag: 'img',
                rect: ['1196px', '594px','247','232','auto', 'auto'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,0)",im+"liquide_top_80pct.png"]
            },
            {
                id: 'radiator_top',
                type: 'image',
                tag: 'img',
                rect: ['1115px', '510px','341','524','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator_top.png"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['823px', '120px','862','136','auto', 'auto'],
                text: "*냉각수 오염에 따른 냉각수 과열<br>*냉각수 과열에 따른 시동 꺼짐 및 불능<br>*엔진 과열에 따른 시동꺼짐 및 심각한 엔진손상",
                align: "auto",
                font: ['굴림', 40, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['824px', '40px','694','50','auto', 'auto'],
                text: "냉각수 오염및 부족으로 인한 증상",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'LINE2_IN',
                symbolName: 'LINE2_IN',
                autoPlay: {

                }
            },
            {
                id: 'ENG_RED',
                symbolName: 'ENG_RED',
                autoPlay: {

                }
            },
            {
                id: 'LINE4_IN',
                symbolName: 'LINE4_IN',
                autoPlay: {

                }
            },
            {
                id: 'LINE1_IN',
                symbolName: 'LINE1_IN',
                autoPlay: {

                }
            },
            {
                id: 'LINE3_IN',
                symbolName: 'LINE3_IN',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_airduct}": [
                ["style", "left", '122px'],
                ["style", "top", '74px']
            ],
            "${_txt2}": [
                ["style", "left", '823px'],
                ["style", "top", '120px']
            ],
            "${_txt1}": [
                ["style", "left", '824px'],
                ["style", "top", '40px']
            ],
            "${_line1}": [
                ["style", "left", '1013px'],
                ["style", "top", '672px']
            ],
            "${_line4}": [
                ["style", "left", '1153px'],
                ["style", "top", '450px']
            ],
            "${_LINE2_IN}": [
                ["style", "left", '343px'],
                ["style", "top", '404px']
            ],
            "${_line3}": [
                ["style", "left", '331px'],
                ["style", "top", '333px']
            ],
            "${_liquide_mid_50pct}": [
                ["style", "top", '604px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1191px'],
                ["style", "height", '400px']
            ],
            "${_liquide_top_80pct}": [
                ["style", "top", '594px'],
                ["style", "opacity", '0.8'],
                ["style", "left", '1196px']
            ],
            "${_radiator_back}": [
                ["style", "left", '1194px'],
                ["style", "top", '547px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_LINE4_IN}": [
                ["style", "left", '1210px'],
                ["style", "top", '462px']
            ],
            "${_LINE1_IN}": [
                ["style", "left", '1021px'],
                ["style", "top", '691px']
            ],
            "${_LINE3_IN}": [
                ["style", "left", '342px'],
                ["style", "top", '344px']
            ],
            "${_line2}": [
                ["style", "left", '332px'],
                ["style", "top", '393px']
            ],
            "${_pipe_pollution}": [
                ["style", "left", '1222px'],
                ["style", "top", '602px']
            ],
            "${_radiator_top}": [
                ["style", "left", '1115px'],
                ["style", "top", '510px']
            ],
            "${_pipe}": [
                ["style", "left", '1220px'],
                ["style", "top", '601px']
            ],
            "${_eng}": [
                ["style", "left", '617px'],
                ["style", "top", '284px']
            ],
            "${_liquide_bottom_80pct}": [
                ["style", "top", '590px'],
                ["style", "opacity", '0.8'],
                ["style", "left", '1196px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 967,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LINE1_IN": {
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
                    rect: ['0px', '0px', '130', '284', 'auto', 'auto'],
                    id: 'line1_in',
                    fill: ['rgba(0,0,0,0)', 'images/line1_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'POLLUTION_L1_1',
                    type: 'rect',
                    rect: ['53px', '238px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L1_2',
                    type: 'rect',
                    rect: ['72px', '185px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L1_3',
                    type: 'rect',
                    rect: ['7px', '124px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L1_4',
                    type: 'rect',
                    rect: ['38px', '12px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L1_4',
                symbolName: 'POLLUTION2'
            },
            {
                id: 'POLLUTION_L1_1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L1_2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L1_3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L1_2}": [
                ["style", "left", '8px'],
                ["style", "top", '185px']
            ],
            "${_POLLUTION_L1_4}": [
                ["style", "left", '38px'],
                ["style", "top", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '284px'],
                ["style", "width", '130px'],
                ["style", "overflow", 'hidden']
            ],
            "${_POLLUTION_L1_1}": [
                ["style", "left", '53px'],
                ["style", "top", '238px']
            ],
            "${_POLLUTION_L1_3}": [
                ["style", "top", '124px'],
                ["style", "left", '7px']
            ],
            "${_line1_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LINE2_IN": {
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
                    rect: ['0px', '0px', '765', '364', 'auto', 'auto'],
                    id: 'line2_in',
                    fill: ['rgba(0,0,0,0)', 'images/line2_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'POLLUTION_L2_1',
                    type: 'rect',
                    rect: ['704', '335', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_2',
                    type: 'rect',
                    rect: ['630px', '299px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_3',
                    type: 'rect',
                    rect: ['544px', '256px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_4',
                    type: 'rect',
                    rect: ['452px', '191px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_5',
                    type: 'rect',
                    rect: ['350px', '134px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_6',
                    type: 'rect',
                    rect: ['246px', '85px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_7',
                    type: 'rect',
                    rect: ['129px', '28px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_8',
                    type: 'rect',
                    rect: ['13px', '19px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L2_1',
                symbolName: 'POLLUTION1'
            },
            {
                id: 'POLLUTION_L2_8',
                symbolName: 'POLLUTION3'
            },
            {
                id: 'POLLUTION_L2_7',
                symbolName: 'POLLUTION2'
            },
            {
                id: 'POLLUTION_L2_5',
                symbolName: 'POLLUTION2'
            },
            {
                id: 'POLLUTION_L2_6',
                symbolName: 'POLLUTION3'
            },
            {
                id: 'POLLUTION_L2_4',
                symbolName: 'POLLUTION1'
            },
            {
                id: 'POLLUTION_L2_3',
                symbolName: 'POLLUTION3'
            },
            {
                id: 'POLLUTION_L2_2',
                symbolName: 'POLLUTION2'
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L2_4}": [
                ["style", "left", '452px'],
                ["style", "top", '191px']
            ],
            "${_POLLUTION_L2_6}": [
                ["style", "left", '246px'],
                ["style", "top", '85px']
            ],
            "${_POLLUTION_L2_7}": [
                ["style", "left", '129px'],
                ["style", "top", '28px']
            ],
            "${_POLLUTION_L2_8}": [
                ["style", "left", '13px'],
                ["style", "top", '19px']
            ],
            "${_line2_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '364px'],
                ["style", "width", '765px'],
                ["style", "overflow", 'hidden']
            ],
            "${_POLLUTION_L2_3}": [
                ["style", "left", '544px'],
                ["style", "top", '256px']
            ],
            "${_POLLUTION_L2_2}": [
                ["style", "left", '630px'],
                ["style", "top", '299px']
            ],
            "${_POLLUTION_L2_5}": [
                ["style", "left", '350px'],
                ["style", "top", '134px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LINE3_IN": {
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
                    rect: ['0px', '0px', '275', '82', 'auto', 'auto'],
                    id: 'line3_in',
                    fill: ['rgba(0,0,0,0)', 'images/line3_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'POLLUTION_L3_1',
                    type: 'rect',
                    rect: ['7px', '26px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L3_2',
                    type: 'rect',
                    rect: ['78px', '61px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L3_3',
                    type: 'rect',
                    rect: ['153px', '24px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L3_4',
                    type: 'rect',
                    rect: ['223px', '22px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L3_4',
                symbolName: 'POLLUTION2'
            },
            {
                id: 'POLLUTION_L3_3',
                symbolName: 'POLLUTION3'
            },
            {
                id: 'POLLUTION_L3_1',
                symbolName: 'POLLUTION1'
            },
            {
                id: 'POLLUTION_L3_2',
                symbolName: 'POLLUTION2'
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L3_3}": [
                ["style", "left", '153px'],
                ["style", "top", '24px']
            ],
            "${_POLLUTION_L3_1}": [
                ["style", "left", '7px'],
                ["style", "top", '26px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '275px'],
                ["style", "overflow", 'hidden']
            ],
            "${_line3_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_POLLUTION_L3_2}": [
                ["style", "top", '61px'],
                ["style", "left", '78px']
            ],
            "${_POLLUTION_L3_4}": [
                ["style", "top", '22px'],
                ["style", "left", '223px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 967,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LINE4_IN": {
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
                    rect: ['0px', '0px', '151', '66', 'auto', 'auto'],
                    id: 'line4_in',
                    fill: ['rgba(0,0,0,0)', 'images/line4_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'POLLUTION_L4_1',
                    type: 'rect',
                    rect: ['21px', '31px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L4_2',
                    type: 'rect',
                    rect: ['71px', '9', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L4_3',
                    type: 'rect',
                    rect: ['113px', '31', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L4_1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L4_2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L4_3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L4_1}": [
                ["style", "left", '21px'],
                ["style", "top", '31px']
            ],
            "${_line4_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '66px'],
                ["style", "width", '151px'],
                ["style", "overflow", 'hidden']
            ],
            "${_POLLUTION_L4_3}": [
                ["style", "left", '113px']
            ],
            "${_POLLUTION_L4_2}": [
                ["style", "left", '71px']
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
            ]
        }
    }
},
"FLOW_SRC": {
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
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '32px', '36px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.80)', 50], ['rgba(255,255,255,0.00)', 100]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '32px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.80)',50],['rgba(255,255,255,0.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '32px']
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
"ENG_RED": {
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
                    rect: ['0px', '0px', '611', '632', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/eng_red_50pct.png'],
                    id: 'eng_red_50pct',
                    opacity: 0.5,
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eng_red_50pct}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '632px'],
                ["style", "width", '611px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 800,
            autoPlay: true,
            timeline: [
                { id: "eid102", tween: [ "style", "${_eng_red_50pct}", "opacity", '0', { fromValue: '0.5'}], position: 0, duration: 333 },
                { id: "eid104", tween: [ "style", "${_eng_red_50pct}", "opacity", '0.5', { fromValue: '0'}], position: 400, duration: 333 }            ]
        }
    }
},
"POLLUTION3": {
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
                    rect: ['0px', '0px', '15', '9', 'auto', 'auto'],
                    id: 'pollution_src3',
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src3.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src3}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '15px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${_pollution_src3}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_pollution_src3}", "top", '0px', { fromValue: '4px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid25", tween: [ "style", "${_pollution_src3}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_pollution_src3}", "left", '0px', { fromValue: '6px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid27", tween: [ "transform", "${_pollution_src3}", "scaleX", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid28", tween: [ "transform", "${_pollution_src3}", "scaleX", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid23", tween: [ "transform", "${_pollution_src3}", "scaleY", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid24", tween: [ "transform", "${_pollution_src3}", "scaleY", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
        }
    }
},
"POLLUTION2": {
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
                    rect: ['0px', '0px', '14', '13', 'auto', 'auto'],
                    id: 'pollution_src2',
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src2.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src2}": [
                ["transform", "scaleX", '0.59'],
                ["transform", "scaleY", '0.59'],
                ["style", "left", '6px'],
                ["style", "top", '4px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '14px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: true,
            timeline: [
                { id: "eid65", tween: [ "style", "${_pollution_src2}", "left", '0px', { fromValue: '6px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid69", tween: [ "style", "${_pollution_src2}", "left", '6px', { fromValue: '0px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid63", tween: [ "style", "${_pollution_src2}", "top", '0px', { fromValue: '4px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid67", tween: [ "style", "${_pollution_src2}", "top", '4px', { fromValue: '0px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid66", tween: [ "transform", "${_pollution_src2}", "scaleX", '1', { fromValue: '0.59'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid70", tween: [ "transform", "${_pollution_src2}", "scaleX", '0.59', { fromValue: '1'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid64", tween: [ "transform", "${_pollution_src2}", "scaleY", '1', { fromValue: '0.59'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid68", tween: [ "transform", "${_pollution_src2}", "scaleY", '0.59', { fromValue: '1'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
        }
    }
},
"POLLUTION1": {
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
                    rect: ['0px', '0px', '23', '10', 'auto', 'auto'],
                    id: 'pollution_src1',
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src1}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '23px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_pollution_src1}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_pollution_src1}", "top", '0px', { fromValue: '4px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid2", tween: [ "style", "${_pollution_src1}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_pollution_src1}", "left", '0px', { fromValue: '6px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid3", tween: [ "transform", "${_pollution_src1}", "scaleX", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid10", tween: [ "transform", "${_pollution_src1}", "scaleX", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid4", tween: [ "transform", "${_pollution_src1}", "scaleY", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid11", tween: [ "transform", "${_pollution_src1}", "scaleY", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-19734490");
