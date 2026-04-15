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
                id: 'BRAKE_CYLINDER',
                type: 'rect',
                rect: ['880px', '181px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1.3','1.3']]
            },
            {
                id: 'BRAKE',
                type: 'rect',
                rect: ['313px', '540px','auto','auto','auto', 'auto']
            },
            {
                id: 'NORMAL_DRUM',
                type: 'rect',
                rect: ['689px', '770px','auto','auto','auto', 'auto']
            },
            {
                id: 'guideLine',
                type: 'image',
                tag: 'img',
                rect: ['1463px', '249px','347px','97px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"guideLine.png"]
            },
            {
                id: 'txt',
                type: 'text',
                rect: ['1644px', '175px','324','66','auto', 'auto'],
                text: "브레이크 액",
                align: "auto",
                font: ['굴림', 60, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'BRAKE',
                symbolName: 'BRAKE',
                autoPlay: {

                }
            },
            {
                id: 'NORMAL_DRUM',
                symbolName: 'NORMAL_DRUM',
                autoPlay: {

                }
            },
            {
                id: 'BRAKE_CYLINDER',
                symbolName: 'BRAKE_CYLINDER',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_BRAKE}": [
                ["style", "top", '540px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '313px']
            ],
            "${_guideLine}": [
                ["style", "height", '97px'],
                ["style", "top", '249px'],
                ["style", "left", '1463px'],
                ["style", "width", '347px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_BRAKE_CYLINDER}": [
                ["style", "top", '181px'],
                ["transform", "scaleY", '1.3'],
                ["style", "left", '880px'],
                ["transform", "scaleX", '1.3']
            ],
            "${_NORMAL_DRUM}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '770px'],
                ["style", "left", '689px'],
                ["transform", "scaleY", '1']
            ],
            "${_txt}": [
                ["style", "left", '1644px'],
                ["style", "top", '175px']
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
            ]
        }
    }
},
"BRAKE_partsMovie": {
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
                    rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                    id: 'brake_partsA',
                    fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                    id: 'brake_parts2B',
                    fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                    id: 'brake_parts2C',
                    fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                    id: 'brake_parts2D',
                    fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['-43px', '30px', '40', '24', 'auto', 'auto'],
                    id: 'brake_parts2E',
                    fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_brake_parts2B}": [
                ["motion", "location", '83.21px 73.23px']
            ],
            "${_brake_parts2D}": [
                ["motion", "location", '-4.24px 143.38px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '40px']
            ],
            "${_brake_parts2C}": [
                ["motion", "location", '64.9px 161.23px']
            ],
            "${_brake_partsA}": [
                ["motion", "location", '20px 12px']
            ],
            "${_brake_parts2E}": [
                ["motion", "location", '-22.57px 42.02px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            labels: {
                "slowStop": 750
            },
            timeline: [
                { id: "eid26", tween: [ "motion", "${_brake_parts2B}", [[83.21, 73.23, 0.09, 0.19],[83.3, 73.42, 48.4, 103.34, 0.09, 0.18],[65.3, 161.12, -0.4, 0.11, -86.67, 24],[64.9, 161.23, -0.4, 0.11]]], position: 0, duration: 500 },
                { id: "eid42", tween: [ "motion", "${_brake_parts2B}", [[83.21, 73.23, 0.09, 0.19],[83.3, 73.42, 48.4, 103.34, 0.09, 0.18],[65.3, 161.12, -0.4, 0.11, -86.67, 24],[64.9, 161.23, -0.4, 0.11]]], position: 750, duration: 500 },
                { id: "eid34", tween: [ "motion", "${_brake_parts2B}", [[83.21, 73.23, 0.09, 0.19],[83.3, 73.42, 48.4, 103.34, 0.09, 0.18],[65.3, 161.12, -0.4, 0.11, -86.67, 24],[64.9, 161.23, -0.4, 0.11]]], position: 1250, duration: 1750, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "motion", "${_brake_parts2D}", [[-4.24, 143.38, -0.24, -0.26],[-4.48, 143.12, -67.88, -74.53, -0.24, -0.26],[-22.57, 42.02, 37.05, -93.32]]], position: 0, duration: 500 },
                { id: "eid40", tween: [ "motion", "${_brake_parts2D}", [[-4.24, 143.38, -0.24, -0.26],[-4.48, 143.12, -67.88, -74.53, -0.24, -0.26],[-22.57, 42.02, 37.05, -93.32]]], position: 750, duration: 500 },
                { id: "eid31", tween: [ "motion", "${_brake_parts2D}", [[-4.24, 143.38, -0.24, -0.26],[-4.48, 143.12, -67.88, -74.53, -0.24, -0.26],[-22.57, 42.02, 37.05, -93.32]]], position: 1250, duration: 1750, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "motion", "${_brake_parts2C}", [[64.9, 161.23, -85.66, 23.55],[-4.24, 143.38, -67.35, -73.55]]], position: 0, duration: 500 },
                { id: "eid41", tween: [ "motion", "${_brake_parts2C}", [[64.9, 161.23, -85.66, 23.55],[-4.24, 143.38, -67.35, -73.55]]], position: 750, duration: 500 },
                { id: "eid33", tween: [ "motion", "${_brake_parts2C}", [[64.9, 161.23, -85.66, 23.55],[-4.24, 143.38, -67.35, -73.55]]], position: 1250, duration: 1750, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "motion", "${_brake_partsA}", [[20, 12, 135.62, 21.27],[83.21, 73.23, 30.77, 65.97]]], position: 0, duration: 500 },
                { id: "eid43", tween: [ "motion", "${_brake_partsA}", [[20, 12, 135.62, 21.27],[83.21, 73.23, 30.77, 65.97]]], position: 750, duration: 500 },
                { id: "eid35", tween: [ "motion", "${_brake_partsA}", [[20, 12, 135.62, 21.27],[83.21, 73.23, 30.77, 65.97]]], position: 1250, duration: 1750, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "motion", "${_brake_parts2E}", [[-22.57, 42.02, 0.07, -0.17],[-22.5, 41.85, 11.67, -29.19, 0.07, -0.17],[-7.17, 21.09, 38.54, -29.34, 17.53, -13.35],[19.75, 11.82, 0, 0]]], position: 0, duration: 500 },
                { id: "eid39", tween: [ "motion", "${_brake_parts2E}", [[-22.57, 42.02, 0.07, -0.17],[-22.5, 41.85, 11.67, -29.19, 0.07, -0.17],[-7.17, 21.09, 38.54, -29.34, 17.53, -13.35],[19.75, 11.82, 0, 0]]], position: 750, duration: 500 },
                { id: "eid30", tween: [ "motion", "${_brake_parts2E}", [[-22.57, 42.02, 0.07, -0.17],[-22.5, 41.85, 11.67, -29.19, 0.07, -0.17],[-7.17, 21.09, 38.54, -29.34, 17.53, -13.35],[19.75, 11.82, 0, 0]]], position: 1250, duration: 1750, easing: "easeOutQuad" }            ]
        }
    }
},
"BRAKE": {
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
                    rect: ['302px', '110px', '133', '138', 'auto', 'auto'],
                    tag: 'img',
                    id: 'brake_pad1-2',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/brake_pad1-2.png']
                },
                {
                    type: 'image',
                    id: 'brake_pad2-2',
                    tag: 'img',
                    rect: ['324px', '167px', '70', '54', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_pad2-2.png']
                },
                {
                    rect: ['293px', '104px', '80', '167', 'auto', 'auto'],
                    tag: 'img',
                    id: 'brake_pad2-1',
                    opacity: 0.5,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/brake_pad2-1.png']
                },
                {
                    id: 'brake_pad2-1_line',
                    type: 'image',
                    rect: ['293px', '104px', '80px', '166px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_pad2-1_line.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'brake_back',
                    tag: 'img',
                    rect: ['63px', '43px', '256', '396', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_back.png']
                },
                {
                    id: 'BRAKE_lineMove',
                    type: 'rect',
                    rect: ['51', '4', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'brake_cover',
                    tag: 'img',
                    rect: ['40px', '0px', '406', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_cover.png']
                },
                {
                    type: 'image',
                    id: 'brake_body',
                    tag: 'img',
                    rect: ['0px', '40px', '330', '406', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_body.png']
                },
                {
                    id: 'BRAKE_partsMovie',
                    type: 'rect',
                    rect: ['52', '176', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'brake_parts1',
                    tag: 'img',
                    rect: ['1px', '219px', '117', '103', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_parts1.png']
                },
                {
                    type: 'image',
                    id: 'brake_outLine',
                    tag: 'img',
                    rect: ['0px', '40px', '331', '407', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_outLine.png']
                },
                {
                    type: 'image',
                    id: 'brake_pad1-1',
                    tag: 'img',
                    rect: ['170px', '84px', '227', '242', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_pad1-1.png']
                }
            ],
            symbolInstances: [
            {
                id: 'BRAKE_partsMovie',
                symbolName: 'BRAKE_partsMovie',
                autoPlay: {

               }
            },
            {
                id: 'BRAKE_lineMove',
                symbolName: 'BRAKE_lineMove',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_brake_pad1-2}": [
                ["style", "top", '110px'],
                ["style", "opacity", '1'],
                ["style", "left", '302px']
            ],
            "${_brake_outLine}": [
                ["style", "left", '0px'],
                ["style", "top", '40px']
            ],
            "${_brake_cover}": [
                ["style", "top", '0px'],
                ["style", "left", '40px'],
                ["style", "height", '500px']
            ],
            "${_brake_parts1}": [
                ["style", "left", '1px'],
                ["style", "top", '219px']
            ],
            "${_brake_pad1-1}": [
                ["style", "left", '170px'],
                ["style", "top", '84px']
            ],
            "${_brake_pad2-1_line}": [
                ["style", "left", '293px'],
                ["style", "top", '104px']
            ],
            "${symbolSelector}": [
                ["style", "height", '500px'],
                ["style", "width", '470px']
            ],
            "${_brake_back}": [
                ["style", "left", '63px'],
                ["style", "top", '43px']
            ],
            "${_brake_pad2-1}": [
                ["style", "top", '104px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '293px']
            ],
            "${_brake_pad2-2}": [
                ["style", "left", '324px'],
                ["style", "top", '167px']
            ],
            "${_brake_body}": [
                ["style", "left", '0px'],
                ["style", "top", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            labels: {
                "brakeOn": 33,
                "brakeOff": 1000
            },
            timeline: [
                { id: "eid48", tween: [ "style", "${_brake_pad2-1}", "left", '265px', { fromValue: '293px'}], position: 333, duration: 267 },
                { id: "eid69", tween: [ "style", "${_brake_pad2-1}", "left", '293px', { fromValue: '265px'}], position: 1300, duration: 267 },
                { id: "eid3", tween: [ "style", "${_brake_pad2-1_line}", "left", '265px', { fromValue: '293px'}], position: 333, duration: 267 },
                { id: "eid11", tween: [ "style", "${_brake_pad2-1_line}", "left", '293px', { fromValue: '265px'}], position: 1300, duration: 267 },
                { id: "eid45", tween: [ "style", "${_brake_pad2-2}", "left", '308px', { fromValue: '324px'}], position: 33, duration: 267 },
                { id: "eid47", tween: [ "style", "${_brake_pad2-2}", "left", '280px', { fromValue: '308px'}], position: 333, duration: 267 },
                { id: "eid73", tween: [ "style", "${_brake_pad2-2}", "left", '308px', { fromValue: '280px'}], position: 1300, duration: 267 },
                { id: "eid72", tween: [ "style", "${_brake_pad2-2}", "left", '324px', { fromValue: '308px'}], position: 1600, duration: 267 },
                { id: "eid46", tween: [ "style", "${_brake_pad2-2}", "top", '164px', { fromValue: '167px'}], position: 33, duration: 267 },
                { id: "eid74", tween: [ "style", "${_brake_pad2-2}", "top", '167px', { fromValue: '164px'}], position: 1600, duration: 267 },
                { id: "eid57", tween: [ "style", "${_brake_pad1-1}", "top", '83px', { fromValue: '84px'}], position: 634, duration: 266 },
                { id: "eid68", tween: [ "style", "${_brake_pad1-1}", "top", '84px', { fromValue: '83px'}], position: 1000, duration: 266 },
                { id: "eid58", tween: [ "style", "${_brake_pad1-2}", "top", '109px', { fromValue: '110px'}], position: 634, duration: 266 },
                { id: "eid71", tween: [ "style", "${_brake_pad1-2}", "top", '110px', { fromValue: '109px'}], position: 1000, duration: 266 },
                { id: "eid49", tween: [ "style", "${_brake_pad1-1}", "left", '188px', { fromValue: '170px'}], position: 634, duration: 266 },
                { id: "eid67", tween: [ "style", "${_brake_pad1-1}", "left", '170px', { fromValue: '188px'}], position: 1000, duration: 266 },
                { id: "eid50", tween: [ "style", "${_brake_pad1-2}", "left", '320px', { fromValue: '302px'}], position: 634, duration: 266 },
                { id: "eid70", tween: [ "style", "${_brake_pad1-2}", "left", '302px', { fromValue: '320px'}], position: 1000, duration: 266 }            ]
        }
    }
},
"BRAKE_lineMove": {
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
                    id: 'brake_move_line',
                    tag: 'img',
                    rect: ['0px', '0px', '277', '457', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_move_line.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_brake_move_line}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '457px'],
                ["style", "width", '277px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2767,
            autoPlay: true,
            labels: {
                "slowStop": 750
            },
            timeline: [
                { id: "eid15", tween: [ "style", "${_brake_move_line}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 267 },
                { id: "eid37", tween: [ "style", "${_brake_move_line}", "left", '6px', { fromValue: '0px'}], position: 750, duration: 267 },
                { id: "eid29", tween: [ "style", "${_brake_move_line}", "left", '6px', { fromValue: '0px'}], position: 1017, duration: 1750, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_brake_move_line}", "top", '20px', { fromValue: '0px'}], position: 0, duration: 267 },
                { id: "eid36", tween: [ "style", "${_brake_move_line}", "top", '20px', { fromValue: '0px'}], position: 750, duration: 267 },
                { id: "eid28", tween: [ "style", "${_brake_move_line}", "top", '20px', { fromValue: '0px'}], position: 1017, duration: 1750, easing: "easeOutQuad" }            ]
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
                    type: 'image',
                    id: 'AJ_spring_tail',
                    tag: 'img',
                    rect: ['-20px', '-5px', '57', '34', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_tail.png']
                },
                {
                    type: 'image',
                    id: 'AJ_spring_src',
                    tag: 'img',
                    rect: ['24px', '6px', '24', '25', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'AJ_spring_src2',
                    tag: 'img',
                    rect: ['35px', '8px', '24', '25', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'AJ_spring_src3',
                    tag: 'img',
                    rect: ['46px', '11px', '24', '25', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'AJ_spring_src4',
                    tag: 'img',
                    rect: ['57px', '14px', '24', '25', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'AJ_spring_src5',
                    tag: 'img',
                    rect: ['67px', '16px', '24', '25', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'AJ_spring_src6',
                    tag: 'img',
                    rect: ['78px', '19px', '24', '25', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'AJ_spring_head',
                    tag: 'img',
                    rect: ['91px', '22px', '94', '25', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/AJ_spring_head.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AJ_spring_src2}": [
                ["style", "left", '44px'],
                ["style", "top", '11px']
            ],
            "${_AJ_spring_src}": [
                ["style", "left", '38px'],
                ["style", "top", '10px']
            ],
            "${_AJ_spring_head}": [
                ["style", "left", '74px'],
                ["style", "top", '18px']
            ],
            "${_AJ_spring_src6}": [
                ["style", "left", '68px'],
                ["style", "top", '16px']
            ],
            "${_AJ_spring_src3}": [
                ["style", "left", '50px'],
                ["style", "top", '12px']
            ],
            "${_AJ_spring_src5}": [
                ["style", "left", '62px'],
                ["style", "top", '15px']
            ],
            "${_AJ_spring_src4}": [
                ["style", "left", '56px'],
                ["style", "top", '14px']
            ],
            "${_AJ_spring_tail}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '43px'],
                ["style", "width", '168px']
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
                    rect: ['39px', '10px', '378', '411', 'auto', 'auto'],
                    id: 'backPic',
                    fill: ['rgba(0,0,0,0)', 'images/backPic.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['53px', '87px', '114', '226', 'auto', 'auto'],
                    id: 'pad1',
                    fill: ['rgba(0,0,0,0)', 'images/pad1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'AJ_SPRING',
                    type: 'rect',
                    rect: ['137px', '238px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['93px', '136px', '92', '58', 'auto', 'auto'],
                    id: 'WC_bar2',
                    fill: ['rgba(0,0,0,0)', 'images/WC_bar2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'WC_SPRING',
                    type: 'rect',
                    rect: ['157px', '150px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['105px', '135px', '244', '98', 'auto', 'auto'],
                    id: 'WC_body',
                    fill: ['rgba(0,0,0,0)', 'images/WC_body.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['254px', '171px', '104', '61', 'auto', 'auto'],
                    id: 'WC_bar1',
                    fill: ['rgba(0,0,0,0)', 'images/WC_bar1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['258px', '116px', '114', '237', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pad2.png'],
                    id: 'pad2',
                    opacity: 0.7,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['212px', '11px', '205', '373', 'auto', 'auto'],
                    id: 'drum_outSide',
                    fill: ['rgba(0,0,0,0)', 'images/drum_outSide.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['129px', '15px', '276', '399', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/drum_body.png'],
                    id: 'drum_body',
                    opacity: 0.7,
                    type: 'image',
                    tag: 'img'
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
            "${_WC_bar1}": [
                ["style", "left", '237px'],
                ["style", "top", '167px']
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
            "${_pad2}": [
                ["style", "top", '112px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '241px']
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
                    type: 'image',
                    id: 'WC_spring_src',
                    tag: 'img',
                    rect: ['-19px', '-5px', '46', '49', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'WC_spring_src2',
                    tag: 'img',
                    rect: ['2px', '0px', '46', '49', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'WC_spring_src3',
                    tag: 'img',
                    rect: ['23px', '5px', '46', '49', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'WC_spring_src4',
                    tag: 'img',
                    rect: ['44px', '10px', '46', '49', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'WC_spring_src5',
                    tag: 'img',
                    rect: ['65px', '14px', '46', '49', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png']
                },
                {
                    type: 'image',
                    id: 'WC_spring_src6',
                    tag: 'img',
                    rect: ['86px', '19px', '46', '49', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png']
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
                    type: 'image',
                    id: 'drum',
                    tag: 'img',
                    rect: ['0px', '0px', '395', '395', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/drum.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '395px'],
                ["style", "width", '395px']
            ],
            "${_drum}": [
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
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid75", tween: [ "transform", "${_drum}", "rotateZ", '60deg', { fromValue: '0deg'}], position: 0, duration: 500 }            ]
        }
    }
},
"TOP_OILTANK": {
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
                    rect: ['2px', '1px', '438', '342', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/oilTank_body_20pct.png'],
                    id: 'oilTank_body_20pct',
                    opacity: 0.2,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['7px', '62px', '427', '276', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/oilTank_oil_20pct.png'],
                    id: 'oilTank_oil1',
                    opacity: 0.2,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['7px', '62px', '427', '276', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/oilTank_oil_20pct.png'],
                    id: 'oilTank_oil2',
                    opacity: 0.2,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['7px', '62px', '427', '276px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/oilTank_oil_20pct.png'],
                    id: 'oilTank_oil3',
                    opacity: 0.2,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '622', '478', 'auto', 'auto'],
                    id: 'topThing',
                    fill: ['rgba(0,0,0,0)', 'images/topThing.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_topThing}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_oilTank_body_20pct}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0.2'],
                ["style", "left", '2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '478px'],
                ["style", "width", '622px']
            ],
            "${_oilTank_oil1}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.95'],
                ["style", "opacity", '0.2'],
                ["style", "left", '7px'],
                ["style", "top", '62px']
            ],
            "${_oilTank_oil2}": [
                ["style", "top", '62px'],
                ["style", "opacity", '0.2'],
                ["style", "left", '7px']
            ],
            "${_oilTank_oil3}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.05'],
                ["style", "opacity", '0.2'],
                ["style", "left", '7px'],
                ["style", "top", '62px']
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
                { id: "eid21", tween: [ "transform", "${_oilTank_oil3}", "scaleY", '0.95', { fromValue: '1.05'}], position: 0, duration: 500 },
                { id: "eid25", tween: [ "transform", "${_oilTank_oil1}", "scaleY", '1.05', { fromValue: '0.95'}], position: 0, duration: 500 }            ]
        }
    }
},
"PIPE1_2": {
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
                    id: 'pipe_inner1-2',
                    tag: 'img',
                    rect: ['0px', '0px', '194', '79', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pipe_inner1-2.png']
                },
                {
                    type: 'rect',
                    rect: ['3px', '35px', '8px', '46px', 'auto', 'auto'],
                    transform: [[0, 0], ['-12']],
                    id: 'Rectangle2',
                    opacity: 1,
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    fill: ['rgba(246,169,167,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pipe_inner1-2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '-11px'],
                ["color", "background-color", 'rgba(246,169,167,1.00)'],
                ["transform", "rotateZ", '-13deg'],
                ["style", "height", '46px'],
                ["style", "opacity", '1'],
                ["style", "left", '199px'],
                ["style", "width", '2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '79px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '194px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            timeline: [
                { id: "eid81", tween: [ "style", "${_Rectangle2}", "left", '1px', { fromValue: '199px'}], position: 0, duration: 300 },
                { id: "eid83", tween: [ "style", "${_Rectangle2}", "width", '194px', { fromValue: '2px'}], position: 0, duration: 300 },
                { id: "eid79", tween: [ "style", "${_Rectangle2}", "top", '13px', { fromValue: '-11px'}], position: 0, duration: 300 }            ]
        }
    }
},
"PIPE1_1": {
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
                    id: 'pipe_inner1_1',
                    tag: 'img',
                    rect: ['0px', '0px', '46', '126', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pipe_inner1_1.png']
                },
                {
                    rect: ['0px', '-11px', '46px', '5px', 'auto', 'auto'],
                    opacity: 1,
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(246,169,167,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(246,169,167,1.00)'],
                ["style", "opacity", '1'],
                ["style", "height", '5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '126px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '46px']
            ],
            "${_pipe_inner1_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            timeline: [
                { id: "eid27", tween: [ "style", "${_Rectangle}", "height", '137px', { fromValue: '5px'}], position: 0, duration: 300 }            ]
        }
    }
},
"PIPE2_1": {
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
                    id: 'pipe_inner2_1',
                    tag: 'img',
                    rect: ['0px', '0px', '46', '237', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pipe_inner2_1.png']
                },
                {
                    rect: ['0px', '-11px', '46px', '5px', 'auto', 'auto'],
                    opacity: 1,
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(246,169,167,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(246,169,167,1.00)'],
                ["style", "opacity", '1'],
                ["style", "height", '5px']
            ],
            "${_pipe_inner2_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '237px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '46px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            timeline: [
                { id: "eid84", tween: [ "style", "${_Rectangle}", "height", '248px', { fromValue: '5px'}], position: 0, duration: 300 }            ]
        }
    }
},
"SPRING_S": {
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
                    id: 'spring_Small',
                    tag: 'img',
                    rect: ['0px', '0px', '69', '95', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_Small.png']
                },
                {
                    type: 'image',
                    id: 'spring_SmallCopy',
                    tag: 'img',
                    rect: ['23px', '8px', '69', '95', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_Small.png']
                },
                {
                    type: 'image',
                    id: 'spring_SmallCopy2',
                    tag: 'img',
                    rect: ['45px', '16px', '69', '95', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_Small.png']
                },
                {
                    type: 'image',
                    id: 'spring_SmallCopy3',
                    tag: 'img',
                    rect: ['68px', '24px', '69', '95', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_Small.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spring_SmallCopy2}": [
                ["style", "left", '45px'],
                ["style", "top", '16px']
            ],
            "${_spring_SmallCopy3}": [
                ["style", "left", '68px'],
                ["style", "top", '24px']
            ],
            "${_spring_Small}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_spring_SmallCopy}": [
                ["style", "left", '23px'],
                ["style", "top", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '119px'],
                ["style", "width", '137px']
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
                { id: "eid90", tween: [ "style", "${_spring_SmallCopy2}", "left", '24px', { fromValue: '45px'}], position: 0, duration: 500 },
                { id: "eid89", tween: [ "style", "${_spring_SmallCopy3}", "top", '12px', { fromValue: '24px'}], position: 0, duration: 500 },
                { id: "eid88", tween: [ "style", "${_spring_SmallCopy3}", "left", '36px', { fromValue: '68px'}], position: 0, duration: 500 },
                { id: "eid92", tween: [ "style", "${_spring_SmallCopy}", "left", '12px', { fromValue: '23px'}], position: 0, duration: 500 },
                { id: "eid93", tween: [ "style", "${_spring_SmallCopy}", "top", '4px', { fromValue: '8px'}], position: 0, duration: 500 },
                { id: "eid91", tween: [ "style", "${_spring_SmallCopy2}", "top", '8px', { fromValue: '16px'}], position: 0, duration: 500 }            ]
        }
    }
},
"SPRING_B": {
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
                    id: 'spring_Big',
                    tag: 'img',
                    rect: ['0px', '0px', '128', '177', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_Big.png']
                },
                {
                    type: 'image',
                    id: 'spring_BigCopy',
                    tag: 'img',
                    rect: ['21px', '7px', '128', '177', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_Big.png']
                },
                {
                    type: 'image',
                    id: 'spring_BigCopy2',
                    tag: 'img',
                    rect: ['41px', '15px', '128', '177', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_Big.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spring_BigCopy2}": [
                ["style", "left", '41px'],
                ["style", "top", '15px']
            ],
            "${_spring_BigCopy}": [
                ["style", "left", '21px'],
                ["style", "top", '7px']
            ],
            "${_spring_Big}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '192px'],
                ["style", "width", '169px']
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
                { id: "eid120", tween: [ "style", "${_spring_BigCopy}", "left", '9px', { fromValue: '21px'}], position: 0, duration: 500 },
                { id: "eid121", tween: [ "style", "${_spring_BigCopy}", "top", '2px', { fromValue: '7px'}], position: 0, duration: 500 },
                { id: "eid123", tween: [ "style", "${_spring_BigCopy2}", "top", '5px', { fromValue: '15px'}], position: 0, duration: 500 },
                { id: "eid122", tween: [ "style", "${_spring_BigCopy2}", "left", '18px', { fromValue: '41px'}], position: 0, duration: 500 }            ]
        }
    }
},
"BRAKE_CYLINDER": {
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
                    rect: ['85px', '187px', '741', '371', 'auto', 'auto'],
                    id: 'innerFill',
                    fill: ['rgba(0,0,0,0)', 'images/innerFill.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'PIPE2_1',
                    type: 'rect',
                    rect: ['365px', '404px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'PIPE1_1',
                    type: 'rect',
                    rect: ['156px', '343px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'PIPE1_2',
                    type: 'rect',
                    rect: ['7px', '436px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'PIPE1_2Copy',
                    type: 'rect',
                    rect: ['216px', '607px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['1px', '307px', '416', '386', 'auto', 'auto'],
                    id: 'pipe_fill',
                    fill: ['rgba(0,0,0,0)', 'images/pipe_fill.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '306px', '418', '388', 'auto', 'auto'],
                    id: 'pipe_outLine',
                    fill: ['rgba(0,0,0,0)', 'images/pipe_outLine.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'SPRING_S2',
                    type: 'rect',
                    rect: ['113px', '215px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['89px', '191px', '204', '172', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Oil1.png'],
                    id: 'Oil2',
                    opacity: 0.5,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['187px', '220px', '208', '174', 'auto', 'auto'],
                    id: 'piston2',
                    fill: ['rgba(0,0,0,0)', 'images/piston2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'SPRING_S',
                    type: 'rect',
                    rect: ['323px', '282px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['294px', '253px', '204', '172', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Oil1.png'],
                    id: 'Oil1',
                    opacity: 0.5,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['425px', '293px', '281', '174', 'auto', 'auto'],
                    id: 'piston1',
                    fill: ['rgba(0,0,0,0)', 'images/piston1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['578px', '308px', '165', '224', 'auto', 'auto'],
                    id: 'hydroBag2',
                    fill: ['rgba(0,0,0,0)', 'images/hydroBag2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'SPRING_B',
                    type: 'rect',
                    rect: ['600px', '334px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['645px', '333px', '175', '217', 'auto', 'auto'],
                    id: 'hydroBag',
                    fill: ['rgba(0,0,0,0)', 'images/hydroBag.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['84px', '186px', '744', '374', 'auto', 'auto'],
                    id: 'outLine',
                    fill: ['rgba(0,0,0,0)', 'images/outLine.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'pedal_bar',
                    type: 'image',
                    rect: ['726px', '428px', '128px', '60px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pedal_bar.png', '0px', '0px']
                },
                {
                    id: 'TOP_OILTANK',
                    type: 'rect',
                    rect: ['166px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pedal_body',
                    type: 'image',
                    rect: ['787px', '437px', '255px', '305px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pedal_body.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'PIPE2_1',
                symbolName: 'PIPE2_1',
                autoPlay: {

               }
            },
            {
                id: 'PIPE1_2Copy',
                symbolName: 'PIPE1_2',
                autoPlay: {

               }
            },
            {
                id: 'TOP_OILTANK',
                symbolName: 'TOP_OILTANK',
                autoPlay: {

               }
            },
            {
                id: 'PIPE1_2',
                symbolName: 'PIPE1_2',
                autoPlay: {

               }
            },
            {
                id: 'PIPE1_1',
                symbolName: 'PIPE1_1',
                autoPlay: {

               }
            },
            {
                id: 'SPRING_S2',
                symbolName: 'SPRING_S',
                autoPlay: {

               }
            },
            {
                id: 'SPRING_S',
                symbolName: 'SPRING_S',
                autoPlay: {

               }
            },
            {
                id: 'SPRING_B',
                symbolName: 'SPRING_B',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_PIPE1_2}": [
                ["style", "left", '7px'],
                ["style", "top", '436px']
            ],
            "${_PIPE1_1}": [
                ["style", "left", '156px'],
                ["style", "top", '343px']
            ],
            "${_piston2}": [
                ["style", "left", '187px'],
                ["style", "top", '220px']
            ],
            "${_pipe_outLine}": [
                ["style", "left", '0px'],
                ["style", "top", '306px']
            ],
            "${_piston1}": [
                ["style", "left", '425px'],
                ["style", "top", '293px']
            ],
            "${_TOP_OILTANK}": [
                ["style", "left", '166px'],
                ["style", "top", '0px']
            ],
            "${_Oil1}": [
                ["style", "top", '253px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '294px']
            ],
            "${_pipe_fill}": [
                ["style", "left", '1px'],
                ["style", "top", '307px']
            ],
            "${_Oil2}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '0deg'],
                ["style", "top", '191px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '89px'],
                ["style", "width", '204px']
            ],
            "${_PIPE1_2Copy}": [
                ["style", "left", '216px'],
                ["style", "top", '607px']
            ],
            "${_hydroBag}": [
                ["style", "left", '645px'],
                ["style", "top", '333px']
            ],
            "${_SPRING_B}": [
                ["style", "left", '600px'],
                ["style", "top", '334px']
            ],
            "${_pedal_body}": [
                ["style", "left", '787px'],
                ["style", "top", '437px']
            ],
            "${_PIPE2_1}": [
                ["style", "left", '365px'],
                ["style", "top", '404px']
            ],
            "${_outLine}": [
                ["style", "left", '84px'],
                ["style", "top", '186px']
            ],
            "${_hydroBag2}": [
                ["style", "left", '578px'],
                ["style", "top", '308px']
            ],
            "${_pedal_bar}": [
                ["style", "left", '726px'],
                ["style", "top", '428px']
            ],
            "${_SPRING_S}": [
                ["style", "left", '323px'],
                ["style", "top", '282px']
            ],
            "${_SPRING_S2}": [
                ["style", "left", '113px'],
                ["style", "top", '215px']
            ],
            "${_innerFill}": [
                ["style", "left", '85px'],
                ["style", "top", '187px']
            ],
            "${symbolSelector}": [
                ["style", "height", '742px'],
                ["style", "width", '1042px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3133,
            autoPlay: false,
            labels: {
                "cylinderOn": 33,
                "cylinderOff": 2033
            },
            timeline: [
                { id: "eid112", tween: [ "style", "${_piston2}", "left", '155px', { fromValue: '187px'}], position: 33, duration: 500 },
                { id: "eid154", tween: [ "style", "${_piston2}", "left", '187px', { fromValue: '155px'}], position: 2033, duration: 500 },
                { id: "eid117", tween: [ "style", "${_hydroBag}", "top", '323px', { fromValue: '333px'}], position: 33, duration: 500 },
                { id: "eid149", tween: [ "style", "${_hydroBag}", "top", '333px', { fromValue: '323px'}], position: 2033, duration: 500 },
                { id: "eid127", tween: [ "transform", "${_Oil2}", "skewY", '-4deg', { fromValue: '0deg'}], position: 33, duration: 500 },
                { id: "eid156", tween: [ "transform", "${_Oil2}", "skewY", '0deg', { fromValue: '-4deg'}], position: 2033, duration: 500 },
                { id: "eid116", tween: [ "style", "${_hydroBag}", "left", '612px', { fromValue: '645px'}], position: 33, duration: 500 },
                { id: "eid148", tween: [ "style", "${_hydroBag}", "left", '645px', { fromValue: '612px'}], position: 2033, duration: 500 },
                { id: "eid124", tween: [ "style", "${_Oil1}", "left", '262px', { fromValue: '294px'}], position: 33, duration: 500 },
                { id: "eid152", tween: [ "style", "${_Oil1}", "left", '294px', { fromValue: '262px'}], position: 2033, duration: 500 },
                { id: "eid113", tween: [ "style", "${_piston2}", "top", '211px', { fromValue: '220px'}], position: 33, duration: 500 },
                { id: "eid155", tween: [ "style", "${_piston2}", "top", '220px', { fromValue: '211px'}], position: 2033, duration: 500 },
                { id: "eid158", tween: [ "style", "${_SPRING_S}", "left", '309px', { fromValue: '323px'}], position: 33, duration: 500 },
                { id: "eid162", tween: [ "style", "${_SPRING_S}", "left", '323px', { fromValue: '309px'}], position: 2033, duration: 500 },
                { id: "eid159", tween: [ "style", "${_SPRING_S}", "top", '277px', { fromValue: '282px'}], position: 33, duration: 500 },
                { id: "eid163", tween: [ "style", "${_SPRING_S}", "top", '282px', { fromValue: '277px'}], position: 2033, duration: 500 },
                { id: "eid119", tween: [ "style", "${_pedal_bar}", "top", '418px', { fromValue: '428px'}], position: 33, duration: 500 },
                { id: "eid147", tween: [ "style", "${_pedal_bar}", "top", '428px', { fromValue: '418px'}], position: 2033, duration: 500 },
                { id: "eid114", tween: [ "style", "${_pedal_body}", "left", '754px', { fromValue: '787px'}], position: 33, duration: 500 },
                { id: "eid145", tween: [ "style", "${_pedal_body}", "left", '787px', { fromValue: '754px'}], position: 2033, duration: 500 },
                { id: "eid126", tween: [ "style", "${_Oil2}", "width", '170px', { fromValue: '204px'}], position: 33, duration: 500 },
                { id: "eid157", tween: [ "style", "${_Oil2}", "width", '204px', { fromValue: '170px'}], position: 2033, duration: 500 },
                { id: "eid118", tween: [ "style", "${_pedal_bar}", "left", '693px', { fromValue: '726px'}], position: 33, duration: 500 },
                { id: "eid146", tween: [ "style", "${_pedal_bar}", "left", '726px', { fromValue: '693px'}], position: 2033, duration: 500 },
                { id: "eid97", tween: [ "style", "${_piston1}", "top", '272px', { fromValue: '293px'}], position: 33, duration: 500 },
                { id: "eid150", tween: [ "style", "${_piston1}", "top", '293px', { fromValue: '272px'}], position: 2033, duration: 500 },
                { id: "eid125", tween: [ "style", "${_Oil1}", "top", '244px', { fromValue: '253px'}], position: 33, duration: 500 },
                { id: "eid153", tween: [ "style", "${_Oil1}", "top", '253px', { fromValue: '244px'}], position: 2033, duration: 500 },
                { id: "eid96", tween: [ "style", "${_piston1}", "left", '358px', { fromValue: '425px'}], position: 33, duration: 500 },
                { id: "eid151", tween: [ "style", "${_piston1}", "left", '425px', { fromValue: '358px'}], position: 2033, duration: 500 },
                { id: "eid115", tween: [ "style", "${_pedal_body}", "top", '427px', { fromValue: '437px'}], position: 33, duration: 500 },
                { id: "eid144", tween: [ "style", "${_pedal_body}", "top", '437px', { fromValue: '427px'}], position: 2033, duration: 500 },
                { id: "eid164", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SPRING_S2}', [] ], ""], position: 33 },
                { id: "eid165", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SPRING_S}', [] ], ""], position: 33 },
                { id: "eid166", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SPRING_B}', [] ], ""], position: 33 },
                { id: "eid87", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PIPE2_1}', [] ], ""], position: 533 },
                { id: "eid77", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PIPE1_1}', [] ], ""], position: 533 },
                { id: "eid85", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PIPE1_2}', [] ], ""], position: 833 },
                { id: "eid86", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PIPE1_2Copy}', [] ], ""], position: 833 },
                { id: "eid167", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_SPRING_B}', [] ], ""], position: 2033 },
                { id: "eid169", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_SPRING_S2}', [] ], ""], position: 2033 },
                { id: "eid168", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_SPRING_S}', [] ], ""], position: 2033 },
                { id: "eid171", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_PIPE1_2}', [] ], ""], position: 2533 },
                { id: "eid170", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_PIPE1_2Copy}', [] ], ""], position: 2533 },
                { id: "eid172", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_PIPE1_1}', [] ], ""], position: 2833 },
                { id: "eid173", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_PIPE2_1}', [] ], ""], position: 2833 }            ]
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
})(jQuery, AdobeEdge, "EDGE-8800815");
