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
                id: 'L_AREA',
                type: 'rect',
                rect: ['314', '367','auto','auto','auto', 'auto']
            },
            {
                id: 'R_AREA',
                type: 'rect',
                rect: ['1585', '367','auto','auto','auto', 'auto']
            },
            {
                id: 'body',
                type: 'image',
                tag: 'img',
                rect: ['645', '204','943','630','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['839', '923','724','86','auto', 'auto'],
                text: "CV 조인트 구동모습",
                align: "center",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'R_AREA',
                symbolName: 'R_AREA',
                autoPlay: {

                }
            },
            {
                id: 'L_AREA',
                symbolName: 'L_AREA',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_R_AREA}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0']
            ],
            "${_Text}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0']
            ],
            "${_L_AREA}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_body}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1200,
            autoPlay: true,
            timeline: [
                { id: "eid117", tween: [ "style", "${_R_AREA}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid129", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0.95'}], position: 500, duration: 500 },
                { id: "eid125", tween: [ "transform", "${_L_AREA}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 500 },
                { id: "eid121", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid123", tween: [ "transform", "${_R_AREA}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 500 },
                { id: "eid119", tween: [ "style", "${_body}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid115", tween: [ "style", "${_L_AREA}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid127", tween: [ "transform", "${_body}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 500 }            ]
        }
    }
},
"R_AREA": {
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
                    tag: 'img',
                    id: 'bar_R',
                    type: 'image',
                    rect: ['13px', '295px', '224', '52', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar_R.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'rub_R3',
                    type: 'image',
                    rect: ['0px', '274px', '30', '94', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rub_R3.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'rub_R2',
                    type: 'image',
                    rect: ['44px', '283px', '60', '75', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rub_R2.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'rub_R1',
                    type: 'image',
                    rect: ['222px', '266px', '79', '109', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rub_R1.png']
                },
                {
                    type: 'image',
                    id: 'tire_R',
                    tag: 'img',
                    rect: ['298px', '0px', '202', '659', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire_R.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bar_R}": [
                ["style", "top", '295px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '13px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '659px'],
                ["style", "width", '500px']
            ],
            "${_rub_R2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '283px'],
                ["style", "left", '44px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_rub_R1}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '222px'],
                ["style", "top", '266px']
            ],
            "${_rub_R3}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '274px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_tire_R}": [
                ["style", "top", '0px'],
                ["style", "left", '298px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: false,
            timeline: [
                { id: "eid68", tween: [ "style", "${_rub_R3}", "top", '276px', { fromValue: '274px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid104", tween: [ "style", "${_rub_R3}", "top", '274px', { fromValue: '276px'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_rub_R1}", "top", '306px', { fromValue: '266px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid35", tween: [ "style", "${_rub_R1}", "top", '266px', { fromValue: '306px'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_rub_R1}", "top", '219px', { fromValue: '266px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid100", tween: [ "style", "${_rub_R1}", "top", '266px', { fromValue: '219px'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid18", tween: [ "transform", "${_rub_R3}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid39", tween: [ "transform", "${_rub_R3}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "transform", "${_rub_R3}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid105", tween: [ "transform", "${_rub_R3}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid15", tween: [ "style", "${_rub_R2}", "top", '287px', { fromValue: '283px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid37", tween: [ "style", "${_rub_R2}", "top", '283px', { fromValue: '287px'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "style", "${_rub_R2}", "top", '278px', { fromValue: '283px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid102", tween: [ "style", "${_rub_R2}", "top", '283px', { fromValue: '278px'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid6", tween: [ "transform", "${_bar_R}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid40", tween: [ "transform", "${_bar_R}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "transform", "${_bar_R}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid106", tween: [ "transform", "${_bar_R}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid8", tween: [ "style", "${_tire_R}", "top", '47px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid33", tween: [ "style", "${_tire_R}", "top", '0px', { fromValue: '47px'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid60", tween: [ "style", "${_tire_R}", "top", '-55px', { fromValue: '0px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid98", tween: [ "style", "${_tire_R}", "top", '0px', { fromValue: '-55px'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid14", tween: [ "transform", "${_rub_R1}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid36", tween: [ "transform", "${_rub_R1}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "transform", "${_rub_R1}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid101", tween: [ "transform", "${_rub_R1}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid12", tween: [ "transform", "${_rub_R2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid38", tween: [ "transform", "${_rub_R2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid55", tween: [ "transform", "${_rub_R2}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid103", tween: [ "transform", "${_rub_R2}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 4500, duration: 1000, easing: "easeInQuad" }            ]
        }
    }
},
"L_AREA": {
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
                    tag: 'img',
                    id: 'bar_L',
                    type: 'image',
                    rect: ['263px', '295px', '224', '52', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bar_L.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'rub_L3',
                    type: 'image',
                    rect: ['470px', '274px', '30', '94', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rub_L3.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'rub_L2',
                    type: 'image',
                    rect: ['396px', '283px', '60', '75', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rub_L2.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'rub_L1',
                    type: 'image',
                    rect: ['199px', '266px', '80', '109', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rub_L1.png']
                },
                {
                    type: 'image',
                    id: 'tire_L',
                    tag: 'img',
                    rect: ['0px', '0px', '202', '659', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire_L.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rub_L2}": [
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '283px'],
                ["style", "left", '396px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '659px'],
                ["style", "width", '500px']
            ],
            "${_rub_L3}": [
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '274px'],
                ["style", "left", '470px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_rub_L1}": [
                ["style", "top", '266px'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '199px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_tire_L}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_bar_L}": [
                ["style", "top", '295px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '263px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: false,
            timeline: [
                { id: "eid11", tween: [ "transform", "${_rub_L2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid44", tween: [ "transform", "${_rub_L2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "transform", "${_rub_L2}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid110", tween: [ "transform", "${_rub_L2}", "rotateZ", '0deg', { fromValue: '12deg'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid17", tween: [ "transform", "${_rub_L3}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid45", tween: [ "transform", "${_rub_L3}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid65", tween: [ "transform", "${_rub_L3}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid112", tween: [ "transform", "${_rub_L3}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid7", tween: [ "style", "${_tire_L}", "top", '47px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid34", tween: [ "style", "${_tire_L}", "top", '0px', { fromValue: '47px'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid59", tween: [ "style", "${_tire_L}", "top", '-55px', { fromValue: '0px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid99", tween: [ "style", "${_tire_L}", "top", '0px', { fromValue: '-55px'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid5", tween: [ "transform", "${_bar_L}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid46", tween: [ "transform", "${_bar_L}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid53", tween: [ "transform", "${_bar_L}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid113", tween: [ "transform", "${_bar_L}", "rotateZ", '0deg', { fromValue: '12deg'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid67", tween: [ "style", "${_rub_L3}", "top", '276px', { fromValue: '274px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid111", tween: [ "style", "${_rub_L3}", "top", '274px', { fromValue: '276px'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid13", tween: [ "transform", "${_rub_L1}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid42", tween: [ "transform", "${_rub_L1}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "transform", "${_rub_L1}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid108", tween: [ "transform", "${_rub_L1}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid16", tween: [ "style", "${_rub_L2}", "top", '287px', { fromValue: '283px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid43", tween: [ "style", "${_rub_L2}", "top", '283px', { fromValue: '287px'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_rub_L2}", "top", '278px', { fromValue: '283px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid109", tween: [ "style", "${_rub_L2}", "top", '283px', { fromValue: '278px'}], position: 4500, duration: 1000, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_rub_L1}", "top", '306px', { fromValue: '266px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid41", tween: [ "style", "${_rub_L1}", "top", '266px', { fromValue: '306px'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid61", tween: [ "style", "${_rub_L1}", "top", '219px', { fromValue: '266px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid107", tween: [ "style", "${_rub_L1}", "top", '266px', { fromValue: '219px'}], position: 4500, duration: 1000, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-9762377");
