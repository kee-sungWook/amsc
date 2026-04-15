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
                id: 'NORMAL_DRUM',
                type: 'rect',
                rect: ['411px', '257','auto','auto','auto', 'auto']
            },
            {
                id: 'POLLUTION_DRUM',
                type: 'rect',
                rect: ['939px', '257px','auto','auto','auto', 'auto']
            },
            {
                id: 'contentTxt1',
                type: 'text',
                rect: ['524px', '104','244','66','auto', 'auto'],
                text: "정상드럼",
                align: "auto",
                font: ['굴림', 60, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'contentTxt2',
                type: 'text',
                rect: ['1016px', '104','304','66','auto', 'auto'],
                text: "누유된드럼",
                align: "auto",
                font: ['굴림', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['578', '762','649','50','auto', 'auto'],
                text: "브레이크 드럼 누유로 인한 증상",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['627', '848','698px','190px','auto', 'auto'],
                text: "*제동시 제동거리가 길어짐<br>*브레이크 작동시 소음발생<br>*제동시 차체가 한쪽으로 쏠림",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'POLLUTION_DRUM',
                symbolName: 'POLLUTION_DRUM',
                autoPlay: {

                }
            },
            {
                id: 'NORMAL_DRUM',
                symbolName: 'NORMAL_DRUM',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_txt2}": [
                ["style", "height", '190px'],
                ["style", "width", '698px']
            ],
            "${_POLLUTION_DRUM}": [
                ["style", "left", '939px'],
                ["style", "top", '257px']
            ],
            "${_contentTxt1}": [
                ["style", "left", '524px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_contentTxt2}": [
                ["style", "left", '1016px']
            ],
            "${_NORMAL_DRUM}": [
                ["style", "left", '411px']
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
            ]
        }
    }
},
"DRUM_movie": {
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
                    rect: ['0px', '0px', '395', '395', 'auto', 'auto'],
                    id: 'drum',
                    fill: ['rgba(0,0,0,0)', 'images/drum.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_drum}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '395px'],
                ["style", "width", '395px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid75", tween: [ "transform", "${_drum}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 0, duration: 500 }            ]
        }
    }
},
"DRUM_POLLUTION_movie": {
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
                    id: 'drum_pollution',
                    type: 'image',
                    rect: ['0px', '0px', '394px', '395px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/drum_pollution.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_drum_pollution}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '395px'],
                ["style", "width", '394px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            labels: {
                "slowStop": 1000
            },
            timeline: [
                { id: "eid138", tween: [ "transform", "${_drum_pollution}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid139", tween: [ "transform", "${_drum_pollution}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"AJ_SPRING": {
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
                    rect: ['-20px', '-5px', '57', '34', 'auto', 'auto'],
                    id: 'AJ_spring_tail',
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_tail.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['24px', '6px', '24', '25', 'auto', 'auto'],
                    id: 'AJ_spring_src',
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['35px', '8px', '24', '25', 'auto', 'auto'],
                    id: 'AJ_spring_src2',
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['46px', '11px', '24', '25', 'auto', 'auto'],
                    id: 'AJ_spring_src3',
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['57px', '14px', '24', '25', 'auto', 'auto'],
                    id: 'AJ_spring_src4',
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['67px', '16px', '24', '25', 'auto', 'auto'],
                    id: 'AJ_spring_src5',
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['78px', '19px', '24', '25', 'auto', 'auto'],
                    id: 'AJ_spring_src6',
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['91px', '22px', '94', '25', 'auto', 'auto'],
                    id: 'AJ_spring_head',
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_head.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AJ_spring_src4}": [
                ["style", "left", '56px'],
                ["style", "top", '14px']
            ],
            "${_AJ_spring_src3}": [
                ["style", "left", '50px'],
                ["style", "top", '12px']
            ],
            "${_AJ_spring_head}": [
                ["style", "left", '74px'],
                ["style", "top", '18px']
            ],
            "${_AJ_spring_src6}": [
                ["style", "left", '68px'],
                ["style", "top", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '43px'],
                ["style", "width", '168px']
            ],
            "${_AJ_spring_src2}": [
                ["style", "left", '44px'],
                ["style", "top", '11px']
            ],
            "${_AJ_spring_src5}": [
                ["style", "left", '62px'],
                ["style", "top", '15px']
            ],
            "${_AJ_spring_tail}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_AJ_spring_src}": [
                ["style", "left", '38px'],
                ["style", "top", '10px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: false,
            timeline: [
                { id: "eid50", tween: [ "style", "${_AJ_spring_src}", "left", '24px', { fromValue: '38px'}], position: 0, duration: 867 },
                { id: "eid64", tween: [ "style", "${_AJ_spring_src5}", "top", '16px', { fromValue: '15px'}], position: 0, duration: 867 },
                { id: "eid58", tween: [ "style", "${_AJ_spring_src6}", "left", '78px', { fromValue: '68px'}], position: 0, duration: 867 },
                { id: "eid6", tween: [ "style", "${_AJ_spring_head}", "left", '91px', { fromValue: '74px'}], position: 0, duration: 867 },
                { id: "eid54", tween: [ "style", "${_AJ_spring_src2}", "left", '35px', { fromValue: '44px'}], position: 0, duration: 867 },
                { id: "eid12", tween: [ "style", "${_AJ_spring_head}", "top", '22px', { fromValue: '18px'}], position: 0, duration: 867 },
                { id: "eid56", tween: [ "style", "${_AJ_spring_src2}", "top", '8px', { fromValue: '11px'}], position: 0, duration: 867 },
                { id: "eid62", tween: [ "style", "${_AJ_spring_src6}", "top", '19px', { fromValue: '16px'}], position: 0, duration: 867 },
                { id: "eid60", tween: [ "style", "${_AJ_spring_src5}", "left", '67px', { fromValue: '62px'}], position: 0, duration: 867 },
                { id: "eid14", tween: [ "style", "${_AJ_spring_tail}", "left", '-20px', { fromValue: '0px'}], position: 0, duration: 867 },
                { id: "eid66", tween: [ "style", "${_AJ_spring_src4}", "left", '57px', { fromValue: '56px'}], position: 0, duration: 867 },
                { id: "eid73", tween: [ "style", "${_AJ_spring_src4}", "top", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_AJ_spring_src4}", "top", '14px', { fromValue: '14px'}], position: 750, duration: 0 },
                { id: "eid72", tween: [ "style", "${_AJ_spring_src3}", "top", '11px', { fromValue: '12px'}], position: 0, duration: 867 },
                { id: "eid52", tween: [ "style", "${_AJ_spring_src}", "top", '6px', { fromValue: '10px'}], position: 0, duration: 867 },
                { id: "eid70", tween: [ "style", "${_AJ_spring_src3}", "left", '46px', { fromValue: '50px'}], position: 0, duration: 867 },
                { id: "eid16", tween: [ "style", "${_AJ_spring_tail}", "top", '-5px', { fromValue: '0px'}], position: 0, duration: 867 }            ]
        }
    }
},
"WC_SPRING": {
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
                    rect: ['-19px', '-5px', '46', '49', 'auto', 'auto'],
                    id: 'WC_spring_src',
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['2px', '0px', '46', '49', 'auto', 'auto'],
                    id: 'WC_spring_src2',
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['23px', '5px', '46', '49', 'auto', 'auto'],
                    id: 'WC_spring_src3',
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['44px', '10px', '46', '49', 'auto', 'auto'],
                    id: 'WC_spring_src4',
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['65px', '14px', '46', '49', 'auto', 'auto'],
                    id: 'WC_spring_src5',
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['86px', '19px', '46', '49', 'auto', 'auto'],
                    id: 'WC_spring_src6',
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_WC_spring_src3}": [
                ["style", "left", '28px'],
                ["style", "top", '6px']
            ],
            "${_WC_spring_src2}": [
                ["style", "left", '14px'],
                ["style", "top", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '117px']
            ],
            "${_WC_spring_src4}": [
                ["style", "left", '43px'],
                ["style", "top", '9px']
            ],
            "${_WC_spring_src6}": [
                ["style", "left", '71px'],
                ["style", "top", '15px']
            ],
            "${_WC_spring_src5}": [
                ["style", "left", '57px'],
                ["style", "top", '12px']
            ],
            "${_WC_spring_src}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_WC_spring_src}", "top", '-5px', { fromValue: '0px'}], position: 0, duration: 867 },
                { id: "eid42", tween: [ "style", "${_WC_spring_src3}", "top", '5px', { fromValue: '6px'}], position: 0, duration: 867 },
                { id: "eid48", tween: [ "style", "${_WC_spring_src2}", "top", '0px', { fromValue: '3px'}], position: 0, duration: 867 },
                { id: "eid36", tween: [ "style", "${_WC_spring_src4}", "left", '44px', { fromValue: '43px'}], position: 0, duration: 867 },
                { id: "eid46", tween: [ "style", "${_WC_spring_src2}", "left", '2px', { fromValue: '14px'}], position: 0, duration: 867 },
                { id: "eid38", tween: [ "style", "${_WC_spring_src6}", "top", '19px', { fromValue: '15px'}], position: 0, duration: 867 },
                { id: "eid40", tween: [ "style", "${_WC_spring_src5}", "top", '14px', { fromValue: '12px'}], position: 0, duration: 867 },
                { id: "eid32", tween: [ "style", "${_WC_spring_src5}", "left", '65px', { fromValue: '57px'}], position: 0, duration: 867 },
                { id: "eid44", tween: [ "style", "${_WC_spring_src4}", "top", '10px', { fromValue: '9px'}], position: 0, duration: 867 },
                { id: "eid34", tween: [ "style", "${_WC_spring_src3}", "left", '23px', { fromValue: '28px'}], position: 0, duration: 867 },
                { id: "eid30", tween: [ "style", "${_WC_spring_src6}", "left", '86px', { fromValue: '71px'}], position: 0, duration: 867 },
                { id: "eid26", tween: [ "style", "${_WC_spring_src}", "left", '-19px', { fromValue: '0px'}], position: 0, duration: 867 }            ]
        }
    }
},
"NORMAL_DRUM": {
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
                    id: 'backPic',
                    tag: 'img',
                    rect: ['39px', '10px', '378', '411', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/backPic.png']
                },
                {
                    type: 'image',
                    id: 'pad1',
                    tag: 'img',
                    rect: ['53px', '87px', '114', '226', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pad1.png']
                },
                {
                    id: 'AJ_SPRING',
                    type: 'rect',
                    rect: ['137px', '238px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'WC_bar2',
                    tag: 'img',
                    rect: ['93px', '136px', '92', '58', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_bar2.png']
                },
                {
                    id: 'WC_SPRING',
                    type: 'rect',
                    rect: ['157px', '150px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'WC_body',
                    tag: 'img',
                    rect: ['105px', '135px', '244', '98', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_body.png']
                },
                {
                    type: 'image',
                    id: 'WC_bar1',
                    tag: 'img',
                    rect: ['254px', '171px', '104', '61', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_bar1.png']
                },
                {
                    rect: ['258px', '116px', '114', '237', 'auto', 'auto'],
                    tag: 'img',
                    id: 'pad2',
                    opacity: 0.7,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/pad2.png']
                },
                {
                    type: 'image',
                    id: 'drum_outSide',
                    tag: 'img',
                    rect: ['212px', '11px', '205', '373', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/drum_outSide.png']
                },
                {
                    rect: ['129px', '15px', '276', '399', 'auto', 'auto'],
                    tag: 'img',
                    id: 'drum_body',
                    opacity: 0.7,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/drum_body.png']
                },
                {
                    id: 'DRUM_movie',
                    type: 'rect',
                    rect: ['556px', '164px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'WC_SPRING',
                symbolName: 'WC_SPRING',
                autoPlay: {

               }
            },
            {
                id: 'DRUM_movie',
                symbolName: 'DRUM_movie',
                autoPlay: {

               }
            },
            {
                id: 'AJ_SPRING',
                symbolName: 'AJ_SPRING',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_WC_bar2}": [
                ["style", "left", '113px'],
                ["style", "top", '141px']
            ],
            "${_DRUM_movie}": [
                ["transform", "scaleX", '0.69114'],
                ["style", "top", '29px'],
                ["style", "left", '-15px'],
                ["transform", "rotateZ", '165deg']
            ],
            "${_drum_outSide}": [
                ["style", "left", '212px'],
                ["style", "top", '11px']
            ],
            "${_drum_body}": [
                ["style", "top", '15px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '129px']
            ],
            "${symbolSelector}": [
                ["style", "height", '452px'],
                ["style", "width", '417px']
            ],
            "${_WC_body}": [
                ["style", "left", '105px'],
                ["style", "top", '135px']
            ],
            "${_pad2}": [
                ["style", "top", '112px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '241px']
            ],
            "${_WC_SPRING}": [
                ["style", "left", '157px'],
                ["style", "top", '150px']
            ],
            "${_AJ_SPRING}": [
                ["style", "left", '137px'],
                ["style", "top", '238px']
            ],
            "${_backPic}": [
                ["style", "left", '39px'],
                ["style", "top", '10px']
            ],
            "${_pad1}": [
                ["style", "left", '73px'],
                ["style", "top", '92px']
            ],
            "${_WC_bar1}": [
                ["style", "left", '237px'],
                ["style", "top", '167px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1867,
            autoPlay: false,
            labels: {
                "brakeOn": 33,
                "brakeOff": 1000
            },
            timeline: [
                { id: "eid4", tween: [ "style", "${_pad2}", "left", '258px', { fromValue: '241px'}], position: 33, duration: 867 },
                { id: "eid104", tween: [ "style", "${_pad2}", "left", '241px', { fromValue: '258px'}], position: 1000, duration: 867 },
                { id: "eid18", tween: [ "style", "${_pad1}", "left", '53px', { fromValue: '73px'}], position: 33, duration: 867 },
                { id: "eid110", tween: [ "style", "${_pad1}", "left", '73px', { fromValue: '53px'}], position: 1000, duration: 867 },
                { id: "eid8", tween: [ "style", "${_WC_bar1}", "top", '171px', { fromValue: '167px'}], position: 33, duration: 867 },
                { id: "eid106", tween: [ "style", "${_WC_bar1}", "top", '167px', { fromValue: '171px'}], position: 1000, duration: 867 },
                { id: "eid22", tween: [ "style", "${_WC_bar2}", "left", '93px', { fromValue: '113px'}], position: 33, duration: 867 },
                { id: "eid108", tween: [ "style", "${_WC_bar2}", "left", '113px', { fromValue: '93px'}], position: 1000, duration: 867 },
                { id: "eid20", tween: [ "style", "${_pad1}", "top", '87px', { fromValue: '92px'}], position: 33, duration: 867 },
                { id: "eid111", tween: [ "style", "${_pad1}", "top", '92px', { fromValue: '87px'}], position: 1000, duration: 867 },
                { id: "eid10", tween: [ "style", "${_pad2}", "top", '116px', { fromValue: '112px'}], position: 33, duration: 867 },
                { id: "eid105", tween: [ "style", "${_pad2}", "top", '112px', { fromValue: '116px'}], position: 1000, duration: 867 },
                { id: "eid2", tween: [ "style", "${_WC_bar1}", "left", '254px', { fromValue: '237px'}], position: 33, duration: 867 },
                { id: "eid107", tween: [ "style", "${_WC_bar1}", "left", '237px', { fromValue: '254px'}], position: 1000, duration: 867 },
                { id: "eid24", tween: [ "style", "${_WC_bar2}", "top", '136px', { fromValue: '141px'}], position: 33, duration: 867 },
                { id: "eid109", tween: [ "style", "${_WC_bar2}", "top", '141px', { fromValue: '136px'}], position: 1000, duration: 867 }            ]
        }
    }
},
"POLLUTION_DRUM": {
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
                    id: 'backPic_pollution',
                    type: 'image',
                    rect: ['38px', '10px', '379px', '411px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/backPic_pollution.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'pad1',
                    tag: 'img',
                    rect: ['53px', '87px', '114', '226', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pad1.png']
                },
                {
                    type: 'image',
                    id: 'WC_bar2',
                    tag: 'img',
                    rect: ['93px', '136px', '92', '58', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_bar2.png']
                },
                {
                    id: 'WC_SPRING',
                    type: 'rect',
                    rect: ['157px', '150px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'WC_body',
                    tag: 'img',
                    rect: ['105px', '135px', '244', '98', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_body.png']
                },
                {
                    type: 'image',
                    id: 'WC_bar1',
                    tag: 'img',
                    rect: ['254px', '171px', '104', '61', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_bar1.png']
                },
                {
                    id: 'OILS',
                    type: 'rect',
                    rect: ['111', '158', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'AJ_SPRING',
                    type: 'rect',
                    rect: ['137px', '238px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['258px', '116px', '114', '237', 'auto', 'auto'],
                    tag: 'img',
                    id: 'pad2',
                    opacity: 0.7,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/pad2.png']
                },
                {
                    type: 'image',
                    id: 'drum_outSide',
                    tag: 'img',
                    rect: ['212px', '11px', '205', '373', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/drum_outSide.png']
                },
                {
                    rect: ['129px', '15px', '276', '399', 'auto', 'auto'],
                    tag: 'img',
                    id: 'drum_body',
                    opacity: 0.7,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/drum_body.png']
                },
                {
                    id: 'DRUM_POLLUTION_movie',
                    type: 'rect',
                    rect: ['-15px', '29px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['165'], [], ['0.69289']]
                }
            ],
            symbolInstances: [
            {
                id: 'DRUM_POLLUTION_movie',
                symbolName: 'DRUM_POLLUTION_movie',
                autoPlay: {

               }
            },
            {
                id: 'WC_SPRING',
                symbolName: 'WC_SPRING',
                autoPlay: {

               }
            },
            {
                id: 'AJ_SPRING',
                symbolName: 'AJ_SPRING',
                autoPlay: {

               }
            },
            {
                id: 'OILS',
                symbolName: 'OILS',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_WC_body}": [
                ["style", "left", '105px'],
                ["style", "top", '135px']
            ],
            "${_backPic_pollution}": [
                ["style", "left", '38px'],
                ["style", "top", '10px']
            ],
            "${_drum_outSide}": [
                ["style", "left", '212px'],
                ["style", "top", '11px']
            ],
            "${_drum_body}": [
                ["style", "top", '15px'],
                ["style", "opacity", '0.699999988079071'],
                ["style", "left", '129px']
            ],
            "${_pad1}": [
                ["style", "left", '73px'],
                ["style", "top", '92px']
            ],
            "${_WC_bar1}": [
                ["style", "left", '237px'],
                ["style", "top", '167px']
            ],
            "${_pad2}": [
                ["style", "top", '112px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '241px']
            ],
            "${symbolSelector}": [
                ["style", "height", '452px'],
                ["style", "width", '417px']
            ],
            "${_AJ_SPRING}": [
                ["style", "left", '137px'],
                ["style", "top", '238px']
            ],
            "${_WC_bar2}": [
                ["style", "left", '113px'],
                ["style", "top", '141px']
            ],
            "${_WC_SPRING}": [
                ["style", "left", '157px'],
                ["style", "top", '150px']
            ],
            "${_DRUM_POLLUTION_movie}": [
                ["style", "top", '29px'],
                ["transform", "scaleX", '0.69289'],
                ["style", "left", '-15px'],
                ["transform", "rotateZ", '165deg']
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
                "brakeOn": 33,
                "brakeOff": 1000
            },
            timeline: [
                { id: "eid132", tween: [ "style", "${_pad1}", "left", '53px', { fromValue: '73px'}], position: 33, duration: 867 },
                { id: "eid133", tween: [ "style", "${_pad1}", "left", '73px', { fromValue: '53px'}], position: 1000, duration: 867 },
                { id: "eid130", tween: [ "style", "${_pad2}", "top", '116px', { fromValue: '112px'}], position: 33, duration: 867 },
                { id: "eid131", tween: [ "style", "${_pad2}", "top", '112px', { fromValue: '116px'}], position: 1000, duration: 867 },
                { id: "eid8", tween: [ "style", "${_WC_bar1}", "top", '171px', { fromValue: '167px'}], position: 33, duration: 867 },
                { id: "eid123", tween: [ "style", "${_WC_bar1}", "top", '167px', { fromValue: '171px'}], position: 1000, duration: 867 },
                { id: "eid22", tween: [ "style", "${_WC_bar2}", "left", '93px', { fromValue: '113px'}], position: 33, duration: 867 },
                { id: "eid124", tween: [ "style", "${_WC_bar2}", "left", '113px', { fromValue: '93px'}], position: 1000, duration: 867 },
                { id: "eid134", tween: [ "style", "${_pad1}", "top", '87px', { fromValue: '92px'}], position: 33, duration: 867 },
                { id: "eid135", tween: [ "style", "${_pad1}", "top", '92px', { fromValue: '87px'}], position: 1000, duration: 867 },
                { id: "eid2", tween: [ "style", "${_WC_bar1}", "left", '254px', { fromValue: '237px'}], position: 33, duration: 867 },
                { id: "eid122", tween: [ "style", "${_WC_bar1}", "left", '237px', { fromValue: '254px'}], position: 1000, duration: 867 },
                { id: "eid128", tween: [ "style", "${_pad2}", "left", '258px', { fromValue: '241px'}], position: 33, duration: 867 },
                { id: "eid129", tween: [ "style", "${_pad2}", "left", '241px', { fromValue: '258px'}], position: 1000, duration: 867 },
                { id: "eid24", tween: [ "style", "${_WC_bar2}", "top", '136px', { fromValue: '141px'}], position: 33, duration: 867 },
                { id: "eid125", tween: [ "style", "${_WC_bar2}", "top", '141px', { fromValue: '136px'}], position: 1000, duration: 867 }            ]
        }
    }
},
"OIL1": {
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
                    id: 'pollution_oil1',
                    type: 'image',
                    rect: ['41px', '-161px', '14px', '155px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pollution_oil1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_oil1}": [
                ["style", "top", '-138px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '7px']
            ],
            "${symbolSelector}": [
                ["style", "height", '19px'],
                ["style", "width", '8px']
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
                { id: "eid154", tween: [ "style", "${_pollution_oil1}", "width", '14px', { fromValue: '7px'}], position: 0, duration: 233 },
                { id: "eid162", tween: [ "style", "${_pollution_oil1}", "width", '8px', { fromValue: '14px'}], position: 233, duration: 267 },
                { id: "eid164", tween: [ "style", "${_pollution_oil1}", "top", '0px', { fromValue: '-138px'}], position: 233, duration: 267 },
                { id: "eid163", tween: [ "style", "${_pollution_oil1}", "left", '0px', { fromValue: '2px'}], position: 233, duration: 267 },
                { id: "eid152", tween: [ "style", "${_pollution_oil1}", "height", '155px', { fromValue: '12px'}], position: 0, duration: 233 },
                { id: "eid159", tween: [ "style", "${_pollution_oil1}", "height", '19px', { fromValue: '155px'}], position: 233, duration: 267 },
                { id: "eid166", tween: [ "style", "${_pollution_oil1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233 },
                { id: "eid165", tween: [ "style", "${_pollution_oil1}", "opacity", '0', { fromValue: '1'}], position: 233, duration: 267 }            ]
        }
    }
},
"OIL2": {
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
                    id: 'pollution_oil2',
                    type: 'image',
                    rect: ['0px', '0px', '23px', '135px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pollution_oil2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_oil2}": [
                ["style", "top", '0px'],
                ["style", "height", '28px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '135px'],
                ["style", "width", '23px']
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
                { id: "eid176", tween: [ "style", "${_pollution_oil2}", "width", '23px', { fromValue: '12px'}], position: 0, duration: 250 },
                { id: "eid182", tween: [ "style", "${_pollution_oil2}", "width", '11px', { fromValue: '23px'}], position: 250, duration: 250 },
                { id: "eid174", tween: [ "style", "${_pollution_oil2}", "height", '135px', { fromValue: '28px'}], position: 0, duration: 250 },
                { id: "eid179", tween: [ "style", "${_pollution_oil2}", "height", '27px', { fromValue: '135px'}], position: 250, duration: 250 },
                { id: "eid180", tween: [ "style", "${_pollution_oil2}", "top", '108px', { fromValue: '0px'}], position: 250, duration: 250 },
                { id: "eid178", tween: [ "style", "${_pollution_oil2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid183", tween: [ "style", "${_pollution_oil2}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid181", tween: [ "style", "${_pollution_oil2}", "left", '12px', { fromValue: '0px'}], position: 250, duration: 250 }            ]
        }
    }
},
"OIL3": {
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
                    id: 'pollution_oil3',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '103px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pollution_oil3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '103px'],
                ["style", "width", '20px']
            ],
            "${_pollution_oil3}": [
                ["style", "top", '0px'],
                ["style", "height", '23px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '5px']
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
                { id: "eid193", tween: [ "style", "${_pollution_oil3}", "width", '5px', { fromValue: '5px'}], position: 500, duration: 0 },
                { id: "eid185", tween: [ "style", "${_pollution_oil3}", "height", '103px', { fromValue: '23px'}], position: 0, duration: 250 },
                { id: "eid188", tween: [ "style", "${_pollution_oil3}", "height", '17px', { fromValue: '103px'}], position: 250, duration: 250 },
                { id: "eid187", tween: [ "style", "${_pollution_oil3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid194", tween: [ "style", "${_pollution_oil3}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid189", tween: [ "style", "${_pollution_oil3}", "top", '86px', { fromValue: '0px'}], position: 250, duration: 250 }            ]
        }
    }
},
"OILS": {
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
                    id: 'OIL1',
                    type: 'rect',
                    rect: ['24px', '179px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.7', '0.7']]
                },
                {
                    id: 'OIL1Copy',
                    type: 'rect',
                    rect: ['103px', '78px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']]
                },
                {
                    id: 'OIL2',
                    type: 'rect',
                    rect: ['105px', '60px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'OIL2Copy',
                    type: 'rect',
                    rect: ['8px', '-1px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']]
                },
                {
                    id: 'OIL3',
                    type: 'rect',
                    rect: ['136px', '40px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'OIL3Copy',
                    type: 'rect',
                    rect: ['78px', '92px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'OIL2Copy',
                symbolName: 'OIL2',
                autoPlay: {

               }
            },
            {
                id: 'OIL2',
                symbolName: 'OIL2',
                autoPlay: {

               }
            },
            {
                id: 'OIL1',
                symbolName: 'OIL1',
                autoPlay: {

               }
            },
            {
                id: 'OIL1Copy',
                symbolName: 'OIL1',
                autoPlay: {

               }
            },
            {
                id: 'OIL3',
                symbolName: 'OIL3',
                autoPlay: {

               }
            },
            {
                id: 'OIL3Copy',
                symbolName: 'OIL3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_OIL1Copy}": [
                ["transform", "scaleX", '0.5'],
                ["style", "left", '103px'],
                ["transform", "scaleY", '0.5'],
                ["style", "top", '78px']
            ],
            "${_OIL3}": [
                ["style", "left", '136px'],
                ["style", "top", '40px']
            ],
            "${_OIL3Copy}": [
                ["style", "left", '78px'],
                ["style", "top", '92px']
            ],
            "${_OIL2}": [
                ["style", "left", '105px'],
                ["style", "top", '60px']
            ],
            "${symbolSelector}": [
                ["style", "height", '157px'],
                ["style", "width", '156px']
            ],
            "${_OIL2Copy}": [
                ["style", "top", '-1px'],
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '8px']
            ],
            "${_OIL1}": [
                ["style", "top", '179px'],
                ["transform", "scaleX", '0.7'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1733,
            autoPlay: true,
            timeline: [
                { id: "eid197", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_OIL1}', [] ], ""], position: 0 },
                { id: "eid198", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_OIL2}', [] ], ""], position: 200 },
                { id: "eid199", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_OIL1Copy}', [] ], ""], position: 366.66666666667 },
                { id: "eid200", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_OIL3}', [] ], ""], position: 377 },
                { id: "eid201", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_OIL2Copy}', [] ], ""], position: 600 },
                { id: "eid202", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_OIL3Copy}', [] ], ""], position: 766.66666666667 }            ]
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
})(jQuery, AdobeEdge, "EDGE-11912305");
