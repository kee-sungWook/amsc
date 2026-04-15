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
                id: 'ENG',
                type: 'rect',
                rect: ['390', '476','auto','auto','auto', 'auto']
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['203px', '111px','269px','57px','auto', 'auto'],
                text: "정상플러그",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['732px', '111px','269px','57px','auto', 'auto'],
                text: "고장플러그",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['1172px', '454px','468px','160px','auto', 'auto'],
                text: "시동불능 현상 발생<br>시동시 부조현상 발생<br>급가속 불량현상 발생 <br>",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1171px', '387px','572px','57px','auto', 'auto'],
                text: "점화플러그 고장으로 인한 증상",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'ENG_1',
                type: 'rect',
                rect: ['786', '378','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'ENG',
                symbolName: 'ENG',
                autoPlay: {

                }
            },
            {
                id: 'ENG_1',
                symbolName: 'ENG_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '111px'],
                ["style", "font-size", '45px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '203px'],
                ["style", "width", '269px']
            ],
            "${_Text}": [
                ["style", "top", '387px'],
                ["style", "width", '572px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1171px'],
                ["style", "font-size", '40px']
            ],
            "${_ENG_1}": [
                ["style", "top", '232px'],
                ["style", "left", '631px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy2}": [
                ["style", "top", '111px'],
                ["style", "text-align", 'center'],
                ["style", "width", '269px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '732px'],
                ["style", "font-size", '45px']
            ],
            "${_TextCopy}": [
                ["style", "top", '454px'],
                ["style", "font-size", '35px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1172px'],
                ["style", "width", '468px']
            ],
            "${_ENG}": [
                ["style", "left", '86px'],
                ["style", "top", '232px']
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
"BOMB": {
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
                    id: 'bombBlack',
                    type: 'image',
                    rect: ['0px', '0px', '184px', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bombBlack.png', '0px', '0px']
                },
                {
                    id: 'bombRed',
                    type: 'image',
                    rect: ['0px', '0px', '184px', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bombRed.png', '0px', '0px']
                },
                {
                    id: 'bombWhite',
                    type: 'image',
                    rect: ['0px', '0px', '184px', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bombWhite.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bombWhite}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${_bombBlack}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${_bombRed}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '184px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 367,
            autoPlay: false,
            timeline: [
                { id: "eid205", tween: [ "style", "${_bombWhite}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 46 },
                { id: "eid209", tween: [ "style", "${_bombWhite}", "opacity", '0', { fromValue: '1'}], position: 46, duration: 46 },
                { id: "eid211", tween: [ "style", "${_bombWhite}", "opacity", '1', { fromValue: '0'}], position: 183, duration: 46 },
                { id: "eid212", tween: [ "style", "${_bombWhite}", "opacity", '0', { fromValue: '1'}], position: 229, duration: 46 },
                { id: "eid207", tween: [ "style", "${_bombBlack}", "opacity", '1', { fromValue: '0'}], position: 92, duration: 46 },
                { id: "eid210", tween: [ "style", "${_bombBlack}", "opacity", '0', { fromValue: '1'}], position: 137, duration: 46 },
                { id: "eid215", tween: [ "style", "${_bombBlack}", "opacity", '1', { fromValue: '0'}], position: 275, duration: 46 },
                { id: "eid216", tween: [ "style", "${_bombBlack}", "opacity", '0', { fromValue: '1'}], position: 321, duration: 46 },
                { id: "eid203", tween: [ "style", "${_bombRed}", "opacity", '1', { fromValue: '0'}], position: 46, duration: 46 },
                { id: "eid208", tween: [ "style", "${_bombRed}", "opacity", '0', { fromValue: '1'}], position: 92, duration: 46 },
                { id: "eid213", tween: [ "style", "${_bombRed}", "opacity", '1', { fromValue: '0'}], position: 229, duration: 46 },
                { id: "eid214", tween: [ "style", "${_bombRed}", "opacity", '0', { fromValue: '1'}], position: 275, duration: 46 }            ]
        }
    }
},
"CRANK_PISTON": {
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
                    rect: ['54px', '50px', '68', '225', 'auto', 'auto'],
                    tag: 'img',
                    id: 'pistonBar',
                    transform: [],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/pistonBar.png']
                },
                {
                    rect: ['28px', '211px', '120', '161', 'auto', 'auto'],
                    tag: 'img',
                    transform: [],
                    id: 'crank',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/crank.png']
                },
                {
                    type: 'image',
                    id: 'pistonHead',
                    tag: 'img',
                    rect: ['0px', '0px', '175', '97', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pistonHead.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crank}": [
                ["style", "-webkit-transform-origin", [50,66], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "opacity", '1'],
                ["style", "left", '28px'],
                ["style", "top", '211px']
            ],
            "${_pistonHead}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_pistonBar}": [
                ["style", "top", '50px'],
                ["style", "-webkit-transform-origin", [50,8], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '54px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '372px'],
                ["style", "width", '175px']
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
                { id: "eid61", tween: [ "style", "${_pistonBar}", "top", '83px', { fromValue: '50px'}], position: 0, duration: 250 },
                { id: "eid65", tween: [ "style", "${_pistonBar}", "top", '144px', { fromValue: '83px'}], position: 250, duration: 250 },
                { id: "eid69", tween: [ "style", "${_pistonBar}", "top", '202px', { fromValue: '144px'}], position: 500, duration: 500 },
                { id: "eid87", tween: [ "style", "${_pistonBar}", "top", '144px', { fromValue: '202px'}], position: 1000, duration: 500 },
                { id: "eid86", tween: [ "style", "${_pistonBar}", "top", '83px', { fromValue: '144px'}], position: 1500, duration: 250 },
                { id: "eid85", tween: [ "style", "${_pistonBar}", "top", '50px', { fromValue: '83px'}], position: 1750, duration: 250 },
                { id: "eid63", tween: [ "transform", "${_pistonBar}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid64", tween: [ "transform", "${_pistonBar}", "rotateZ", '26deg', { fromValue: '20deg'}], position: 250, duration: 250 },
                { id: "eid68", tween: [ "transform", "${_pistonBar}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 500, duration: 500 },
                { id: "eid80", tween: [ "transform", "${_pistonBar}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
                { id: "eid81", tween: [ "transform", "${_pistonBar}", "rotateZ", '-26deg', { fromValue: '-20deg'}], position: 1250, duration: 250 },
                { id: "eid82", tween: [ "transform", "${_pistonBar}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 1500, duration: 500 },
                { id: "eid62", tween: [ "style", "${_pistonHead}", "top", '94px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid70", tween: [ "style", "${_pistonHead}", "top", '133px', { fromValue: '94px'}], position: 500, duration: 500 },
                { id: "eid84", tween: [ "style", "${_pistonHead}", "top", '94px', { fromValue: '133px'}], position: 1000, duration: 500 },
                { id: "eid83", tween: [ "style", "${_pistonHead}", "top", '0px', { fromValue: '94px'}], position: 1500, duration: 500 },
                { id: "eid66", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 0, duration: 250 },
                { id: "eid67", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 250, duration: 250 },
                { id: "eid78", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 1500, duration: 250 },
                { id: "eid79", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 1750, duration: 250 },
                { id: "eid59", tween: [ "transform", "${_crank}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid60", tween: [ "transform", "${_crank}", "rotateZ", '-180deg', { fromValue: '-90deg'}], position: 500, duration: 500 },
                { id: "eid71", tween: [ "transform", "${_crank}", "rotateZ", '-270deg', { fromValue: '-180deg'}], position: 1000, duration: 500 },
                { id: "eid72", tween: [ "transform", "${_crank}", "rotateZ", '-360deg', { fromValue: '-270deg'}], position: 1500, duration: 500 }            ]
        }
    }
},
"ENG_1": {
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
                    rect: ['147px', '197px', '173px', '208px', 'auto', 'auto'],
                    id: 'inBlue',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [50, 50, 'true', 'farthest-corner', [['rgba(0,175,244,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    rect: ['147px', '197px', '173px', '208px', 'auto', 'auto'],
                    id: 'inRed',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [50, 50, 'true', 'farthest-corner', [['rgba(244,0,114,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    id: 'BOMB',
                    type: 'rect',
                    transform: [[], [], [], ['1.03261']],
                    rect: ['143px', '174px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['141px', '10px', '188', '235', 'auto', 'auto'],
                    id: 'blinderM',
                    fill: ['rgba(0,0,0,0)', 'images/blinderM.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['273px', '200px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['273px', '209px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['283px', '217px', '175px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['302px', '226px', '156px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['0px', '196px', '466', '43', 'auto', 'auto'],
                    id: 'blinderS',
                    fill: ['rgba(0,0,0,0)', 'images/blinderS.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'CRANK_PISTON',
                    type: 'rect',
                    rect: ['146', '265', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['16px', '8px', '436', '741', 'auto', 'auto'],
                    id: 'eng_body',
                    fill: ['rgba(0,0,0,0)', 'images/eng_body01.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['262px', '109px', '90', '123', 'auto', 'auto'],
                    id: 'valve2',
                    fill: ['rgba(0,0,0,0)', 'images/valve2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['117px', '109px', '90', '123', 'auto', 'auto'],
                    id: 'valve1',
                    fill: ['rgba(0,0,0,0)', 'images/valve1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['315px', '49px', '59', '69', 'auto', 'auto'],
                    transform: [[], ['110']],
                    id: 'cam2',
                    fill: ['rgba(0,0,0,0)', 'images/cam2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['96px', '49px', '59', '69', 'auto', 'auto'],
                    transform: [[], ['-105']],
                    id: 'cam1',
                    fill: ['rgba(0,0,0,0)', 'images/cam1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['206px', '0px', '58', '224', 'auto', 'auto'],
                    id: 'sp_plug',
                    fill: ['rgba(0,0,0,0)', 'images/sp_plug_01.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'spark_012',
                    type: 'rect',
                    rect: ['247', '256', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'spark_012Copy3',
                    type: 'rect',
                    rect: ['247', '256', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'spark_012Copy',
                    type: 'rect',
                    rect: ['247', '256', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'BOMB',
                symbolName: 'BOMB',
                autoPlay: {

               }
            },
            {
                id: 'CRANK_PISTON',
                symbolName: 'CRANK_PISTON',
                autoPlay: {

               }
            },
            {
                id: 'spark_012Copy',
                symbolName: 'spark_01',
                autoPlay: {

               }
            },
            {
                id: 'spark_012',
                symbolName: 'spark_01',
                autoPlay: {

               }
            },
            {
                id: 'spark_012Copy3',
                symbolName: 'spark_01'
            }            ]
        },
    states: {
        "Base State": {
            "${_eng_body}": [
                ["style", "left", '16px'],
                ["style", "top", '8px']
            ],
            "${_sp_plug}": [
                ["style", "left", '206px'],
                ["style", "top", '0px']
            ],
            "${_spark_012}": [
                ["style", "top", '279px'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '254px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_airBlue2}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '210px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_BOMB}": [
                ["style", "top", '138px'],
                ["transform", "scaleX", '1.03261'],
                ["transform", "scaleY", '2.38298'],
                ["style", "left", '143px']
            ],
            "${_valve1}": [
                ["style", "left", '117px'],
                ["style", "top", '109px']
            ],
            "${_airBlue1}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '201px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_blinderM}": [
                ["style", "left", '141px'],
                ["style", "top", '10px']
            ],
            "${_cam2}": [
                ["style", "-webkit-transform-origin", [50,59], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '49px'],
                ["style", "left", '315px'],
                ["transform", "rotateZ", '110deg']
            ],
            "${_airBlue3}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '218px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_spark_012Copy3}": [
                ["style", "top", '300px'],
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '196px']
            ],
            "${_spark_012Copy}": [
                ["style", "left", '196px'],
                ["style", "top", '242px']
            ],
            "${_blinderS}": [
                ["style", "left", '0px'],
                ["style", "top", '196px']
            ],
            "${symbolSelector}": [
                ["style", "height", '749px'],
                ["style", "width", '466px']
            ],
            "${_cam1}": [
                ["style", "-webkit-transform-origin", [50,58], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '49px'],
                ["style", "left", '96px'],
                ["transform", "rotateZ", '-110deg']
            ],
            "${_airBlue4}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '227px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_valve2}": [
                ["style", "left", '262px'],
                ["style", "top", '109px']
            ],
            "${_inBlue}": [
                ["style", "top", '197px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(0,175,244,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "height", '165px'],
                ["style", "opacity", '0'],
                ["style", "left", '147px'],
                ["style", "width", '173px']
            ],
            "${_inRed}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '197px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(244,0,114,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "height", '1px'],
                ["style", "opacity", '1'],
                ["style", "left", '147px'],
                ["style", "width", '173px']
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
                { id: "eid57", tween: [ "transform", "${_cam1}", "rotateZ", '250deg', { fromValue: '-110deg'}], position: 0, duration: 4000 },
                { id: "eid168", tween: [ "style", "${_inBlue}", "height", '235px', { fromValue: '165px'}], position: 500, duration: 500 },
                { id: "eid171", tween: [ "style", "${_inBlue}", "height", '92px', { fromValue: '235px'}], position: 1000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_inBlue}", "height", '235px', { fromValue: '92px'}], position: 2000, duration: 1000 },
                { id: "eid27", tween: [ "style", "${_inBlue}", "height", '165px', { fromValue: '235px'}], position: 3000, duration: 500 },
                { id: "eid110", tween: [ "style", "${_airBlue4}", "top", '227px', { fromValue: '227px'}], position: 2635, duration: 0 },
                { id: "eid170", tween: [ "style", "${_inBlue}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid31", tween: [ "style", "${_inBlue}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid109", tween: [ "style", "${_airBlue2}", "top", '210px', { fromValue: '210px'}], position: 2635, duration: 0 },
                { id: "eid127", tween: [ "style", "${_airBlue4}", "width", '156px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid134", tween: [ "style", "${_airBlue4}", "width", '1px', { fromValue: '156px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_airBlue4}", "width", '156px', { fromValue: '2px'}], position: 2635, duration: 500 },
                { id: "eid111", tween: [ "style", "${_airBlue4}", "width", '6px', { fromValue: '156px'}], position: 3410, duration: 590 },
                { id: "eid89", tween: [ "style", "${_valve2}", "top", '135px', { fromValue: '109px'}], position: 500, duration: 500 },
                { id: "eid91", tween: [ "style", "${_valve2}", "top", '109px', { fromValue: '135px'}], position: 1000, duration: 1000 },
                { id: "eid93", tween: [ "style", "${_valve1}", "left", '129px', { fromValue: '117px'}], position: 2500, duration: 500 },
                { id: "eid94", tween: [ "style", "${_valve1}", "left", '117px', { fromValue: '129px'}], position: 3000, duration: 1000 },
                { id: "eid125", tween: [ "style", "${_airBlue4}", "left", '302px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid40", tween: [ "style", "${_airBlue4}", "left", '9px', { fromValue: '173px'}], position: 2635, duration: 500 },
                { id: "eid116", tween: [ "style", "${_airBlue4}", "left", '9px', { fromValue: '9px'}], position: 3410, duration: 0 },
                { id: "eid118", tween: [ "style", "${_airBlue4}", "left", '9px', { fromValue: '9px'}], position: 4000, duration: 0 },
                { id: "eid121", tween: [ "style", "${_airBlue2}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid53", tween: [ "style", "${_airBlue2}", "left", '9px', { fromValue: '173px'}], position: 2635, duration: 500 },
                { id: "eid122", tween: [ "style", "${_airBlue2}", "left", '5px', { fromValue: '9px'}], position: 3410, duration: 590 },
                { id: "eid131", tween: [ "style", "${_airBlue1}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid135", tween: [ "style", "${_airBlue1}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid73", tween: [ "style", "${_airBlue1}", "width", '156px', { fromValue: '2px'}], position: 2635, duration: 500 },
                { id: "eid112", tween: [ "style", "${_airBlue1}", "width", '7px', { fromValue: '156px'}], position: 3410, duration: 590 },
                { id: "eid123", tween: [ "style", "${_airBlue2}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid133", tween: [ "style", "${_airBlue2}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "style", "${_airBlue2}", "width", '156px', { fromValue: '2px'}], position: 2635, duration: 500 },
                { id: "eid113", tween: [ "style", "${_airBlue2}", "width", '7px', { fromValue: '156px'}], position: 3410, duration: 590 },
                { id: "eid107", tween: [ "style", "${_airBlue3}", "top", '218px', { fromValue: '218px'}], position: 2635, duration: 0 },
                { id: "eid108", tween: [ "style", "${_airBlue1}", "top", '201px', { fromValue: '201px'}], position: 2635, duration: 0 },
                { id: "eid129", tween: [ "style", "${_airBlue1}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid56", tween: [ "style", "${_airBlue1}", "left", '9px', { fromValue: '173px'}], position: 2635, duration: 500 },
                { id: "eid120", tween: [ "style", "${_airBlue1}", "left", '5px', { fromValue: '9px'}], position: 3410, duration: 590 },
                { id: "eid117", tween: [ "style", "${_airBlue3}", "left", '283px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid137", tween: [ "style", "${_airBlue3}", "left", '285px', { fromValue: '283px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_airBlue3}", "left", '9px', { fromValue: '173px'}], position: 2635, duration: 500 },
                { id: "eid130", tween: [ "style", "${_airBlue3}", "left", '9px', { fromValue: '9px'}], position: 3410, duration: 0 },
                { id: "eid136", tween: [ "style", "${_airBlue3}", "left", '9px', { fromValue: '9px'}], position: 4000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_valve2}", "left", '247px', { fromValue: '262px'}], position: 500, duration: 500 },
                { id: "eid90", tween: [ "style", "${_valve2}", "left", '262px', { fromValue: '247px'}], position: 1000, duration: 1000 },
                { id: "eid58", tween: [ "transform", "${_cam2}", "rotateZ", '470deg', { fromValue: '110deg'}], position: 0, duration: 4000 },
                { id: "eid119", tween: [ "style", "${_airBlue3}", "width", '175px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid132", tween: [ "style", "${_airBlue3}", "width", '1px', { fromValue: '175px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid51", tween: [ "style", "${_airBlue3}", "width", '156px', { fromValue: '2px'}], position: 2635, duration: 500 },
                { id: "eid114", tween: [ "style", "${_airBlue3}", "width", '7px', { fromValue: '156px'}], position: 3410, duration: 590 },
                { id: "eid92", tween: [ "style", "${_valve1}", "top", '132px', { fromValue: '109px'}], position: 2500, duration: 500 },
                { id: "eid95", tween: [ "style", "${_valve1}", "top", '109px', { fromValue: '132px'}], position: 3000, duration: 1000 },
                { id: "eid174", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_spark_012Copy}', [] ], ""], position: 0 },
                { id: "eid175", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_spark_012}', [] ], ""], position: 0 },
                { id: "eid189", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_spark_012Copy3}', [] ], ""], position: 0 },
                { id: "eid231", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_CRANK_PISTON}', [] ], ""], position: 2000 },
                { id: "eid176", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_spark_012Copy}', [] ], ""], position: 2084.6954311428 },
                { id: "eid177", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_spark_012}', [] ], ""], position: 2463 },
                { id: "eid190", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_spark_012Copy3}', [] ], ""], position: 2643 }            ]
        }
    }
},
"SPARK_FIRE": {
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
                    id: 'fireBlack',
                    tag: 'img',
                    rect: ['8px', '5px', '52', '51', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fireBlack.png']
                },
                {
                    type: 'image',
                    id: 'fireWhite',
                    tag: 'img',
                    rect: ['8px', '5px', '52', '51', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fireWhite.png']
                },
                {
                    type: 'image',
                    id: 'fire3',
                    tag: 'img',
                    rect: ['0px', '0px', '68', '65', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fire3.png']
                },
                {
                    type: 'image',
                    id: 'fire2',
                    tag: 'img',
                    rect: ['3px', '1px', '61', '63', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fire2.png']
                },
                {
                    type: 'image',
                    id: 'fire1',
                    tag: 'img',
                    rect: ['0px', '0px', '68', '65', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fire1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fire2}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '3px']
            ],
            "${_fire1}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1']
            ],
            "${_fireWhite}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_fireBlack}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_fire3}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '68px']
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
                { id: "eid4", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 56 },
                { id: "eid5", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 56, duration: 56 },
                { id: "eid7", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 111, duration: 56 },
                { id: "eid8", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 167, duration: 56 },
                { id: "eid11", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 222, duration: 56 },
                { id: "eid12", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 278, duration: 56 },
                { id: "eid15", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 56 },
                { id: "eid16", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 389, duration: 56 },
                { id: "eid28", tween: [ "style", "${_fire2}", "opacity", '1', { fromValue: '0'}], position: 162, duration: 81 },
                { id: "eid48", tween: [ "style", "${_fire2}", "opacity", '0', { fromValue: '1'}], position: 243, duration: 81 },
                { id: "eid43", tween: [ "style", "${_fire2}", "opacity", '0', { fromValue: '0'}], position: 325, duration: 0 },
                { id: "eid19", tween: [ "transform", "${_fire3}", "scaleX", '1.2', { fromValue: '1'}], position: 333, duration: 154 },
                { id: "eid22", tween: [ "transform", "${_fire2}", "scaleY", '1.2', { fromValue: '1'}], position: 162, duration: 163 },
                { id: "eid26", tween: [ "style", "${_fire3}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 77 },
                { id: "eid47", tween: [ "style", "${_fire3}", "opacity", '0', { fromValue: '1'}], position: 410, duration: 77 },
                { id: "eid41", tween: [ "style", "${_fire3}", "opacity", '0', { fromValue: '0'}], position: 487, duration: 0 },
                { id: "eid30", tween: [ "style", "${_fire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 81 },
                { id: "eid49", tween: [ "style", "${_fire1}", "opacity", '0', { fromValue: '1'}], position: 81, duration: 81 },
                { id: "eid45", tween: [ "style", "${_fire1}", "opacity", '0', { fromValue: '0'}], position: 162, duration: 0 },
                { id: "eid20", tween: [ "transform", "${_fire3}", "scaleY", '1.2', { fromValue: '1'}], position: 333, duration: 154 },
                { id: "eid2", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 56, duration: 56 },
                { id: "eid6", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 111, duration: 56 },
                { id: "eid9", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 56 },
                { id: "eid10", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 222, duration: 56 },
                { id: "eid13", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 278, duration: 56 },
                { id: "eid14", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 56 },
                { id: "eid17", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 389, duration: 56 },
                { id: "eid18", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 444, duration: 56 },
                { id: "eid21", tween: [ "transform", "${_fire2}", "scaleX", '1.2', { fromValue: '1'}], position: 162, duration: 163 },
                { id: "eid23", tween: [ "transform", "${_fire1}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 162 },
                { id: "eid24", tween: [ "transform", "${_fire1}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 162 }            ]
        }
    }
},
"ENG": {
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
                    rect: ['147px', '197px', '173px', '208px', 'auto', 'auto'],
                    id: 'inBlue',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [50, 50, 'true', 'farthest-corner', [['rgba(0,175,244,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    transform: [],
                    rect: ['147px', '197px', '173px', '208px', 'auto', 'auto'],
                    id: 'inRed',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [50, 50, 'true', 'farthest-corner', [['rgba(244,0,114,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                },
                {
                    id: 'BOMB',
                    type: 'rect',
                    rect: ['143px', '174px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.03261']]
                },
                {
                    type: 'image',
                    id: 'blinderM',
                    tag: 'img',
                    rect: ['141px', '10px', '188', '235', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blinderM.png']
                },
                {
                    rect: ['273px', '200px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['273px', '209px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['283px', '217px', '175px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['302px', '226px', '156px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airBlue4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                },
                {
                    rect: ['5px', '200px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airRed1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                },
                {
                    rect: ['5px', '209px', '185px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airRed2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                },
                {
                    rect: ['5px', '217px', '175px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airRed3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                },
                {
                    rect: ['5px', '226px', '156px', '8px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    id: 'airRed4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                },
                {
                    type: 'image',
                    id: 'blinderS',
                    tag: 'img',
                    rect: ['0px', '196px', '466', '43', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blinderS.png']
                },
                {
                    id: 'CRANK_PISTON',
                    type: 'rect',
                    rect: ['146', '265', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'eng_body',
                    tag: 'img',
                    rect: ['16px', '8px', '436', '741', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/eng_body.png']
                },
                {
                    type: 'image',
                    id: 'valve2',
                    tag: 'img',
                    rect: ['262px', '109px', '90', '123', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/valve2.png']
                },
                {
                    type: 'image',
                    id: 'valve1',
                    tag: 'img',
                    rect: ['117px', '109px', '90', '123', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/valve1.png']
                },
                {
                    rect: ['315px', '49px', '59', '69', 'auto', 'auto'],
                    tag: 'img',
                    id: 'cam2',
                    transform: [[0, 0], ['110']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cam2.png']
                },
                {
                    rect: ['96px', '49px', '59', '69', 'auto', 'auto'],
                    tag: 'img',
                    id: 'cam1',
                    transform: [[0, 0], ['-105']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cam1.png']
                },
                {
                    type: 'image',
                    id: 'sp_plug',
                    tag: 'img',
                    rect: ['206px', '0px', '58', '224', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sp_plug.png']
                },
                {
                    id: 'SPARK_FIRE',
                    type: 'rect',
                    rect: ['201', '186', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'BOMB',
                symbolName: 'BOMB'
            },
            {
                id: 'SPARK_FIRE',
                symbolName: 'SPARK_FIRE'
            },
            {
                id: 'CRANK_PISTON',
                symbolName: 'CRANK_PISTON'
            }            ]
        },
    states: {
        "Base State": {
            "${_eng_body}": [
                ["style", "left", '16px'],
                ["style", "top", '8px']
            ],
            "${_sp_plug}": [
                ["style", "left", '206px'],
                ["style", "top", '0px']
            ],
            "${_airRed1}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
                ["style", "left", '189px'],
                ["style", "width", '2px'],
                ["style", "top", '200px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_airBlue2}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '209px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_BOMB}": [
                ["style", "top", '138px'],
                ["transform", "scaleY", '2.38298'],
                ["style", "left", '143px'],
                ["transform", "scaleX", '1.03261']
            ],
            "${_valve1}": [
                ["style", "left", '117px'],
                ["style", "top", '109px']
            ],
            "${_airBlue1}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '200px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_blinderM}": [
                ["style", "left", '141px'],
                ["style", "top", '10px']
            ],
            "${_airBlue4}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '226px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_airBlue3}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
                ["style", "left", '456px'],
                ["style", "width", '2px'],
                ["style", "top", '217px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '749px'],
                ["style", "width", '466px']
            ],
            "${_cam1}": [
                ["style", "top", '49px'],
                ["style", "-webkit-transform-origin", [50,58], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '96px'],
                ["transform", "rotateZ", '-110deg']
            ],
            "${_airRed4}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
                ["style", "left", '161px'],
                ["style", "width", '1px'],
                ["style", "top", '226px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_blinderS}": [
                ["style", "left", '0px'],
                ["style", "top", '196px']
            ],
            "${_cam2}": [
                ["style", "top", '49px'],
                ["style", "-webkit-transform-origin", [50,59], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '315px'],
                ["transform", "rotateZ", '110deg']
            ],
            "${_airRed3}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
                ["style", "left", '179px'],
                ["style", "width", '2px'],
                ["style", "top", '217px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_airRed2}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
                ["style", "left", '189px'],
                ["style", "width", '2px'],
                ["style", "top", '209px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '8px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_valve2}": [
                ["style", "left", '262px'],
                ["style", "top", '109px']
            ],
            "${_inBlue}": [
                ["style", "top", '197px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "height", '165px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(0,175,244,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '147px'],
                ["style", "width", '173px']
            ],
            "${_inRed}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '197px'],
                ["style", "opacity", '1'],
                ["style", "height", '1px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(244,0,114,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '147px'],
                ["style", "width", '173px']
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
                { id: "eid93", tween: [ "style", "${_valve1}", "left", '129px', { fromValue: '117px'}], position: 2500, duration: 500 },
                { id: "eid94", tween: [ "style", "${_valve1}", "left", '117px', { fromValue: '129px'}], position: 3000, duration: 1000 },
                { id: "eid160", tween: [ "style", "${_airRed1}", "width", '185px', { fromValue: '2px'}], position: 3000, duration: 533 },
                { id: "eid164", tween: [ "style", "${_airRed1}", "width", '8px', { fromValue: '185px'}], position: 3667, duration: 333 },
                { id: "eid57", tween: [ "transform", "${_cam1}", "rotateZ", '250deg', { fromValue: '-110deg'}], position: 0, duration: 4000 },
                { id: "eid168", tween: [ "style", "${_inBlue}", "height", '235px', { fromValue: '165px'}], position: 500, duration: 500 },
                { id: "eid171", tween: [ "style", "${_inBlue}", "height", '92px', { fromValue: '235px'}], position: 1000, duration: 1000 },
                { id: "eid127", tween: [ "style", "${_airBlue4}", "width", '156px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid134", tween: [ "style", "${_airBlue4}", "width", '1px', { fromValue: '156px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid229", tween: [ "style", "${_inBlue}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid154", tween: [ "style", "${_airRed4}", "width", '156px', { fromValue: '1px'}], position: 3000, duration: 533 },
                { id: "eid162", tween: [ "style", "${_airRed4}", "width", '7px', { fromValue: '156px'}], position: 3667, duration: 333 },
                { id: "eid125", tween: [ "style", "${_airBlue4}", "left", '302px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid156", tween: [ "style", "${_airRed3}", "width", '175px', { fromValue: '2px'}], position: 3000, duration: 533 },
                { id: "eid161", tween: [ "style", "${_airRed3}", "width", '8px', { fromValue: '175px'}], position: 3667, duration: 333 },
                { id: "eid159", tween: [ "style", "${_airRed1}", "left", '5px', { fromValue: '189px'}], position: 3000, duration: 533 },
                { id: "eid121", tween: [ "style", "${_airBlue2}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid89", tween: [ "style", "${_valve2}", "top", '135px', { fromValue: '109px'}], position: 500, duration: 500 },
                { id: "eid91", tween: [ "style", "${_valve2}", "top", '109px', { fromValue: '135px'}], position: 1000, duration: 1000 },
                { id: "eid131", tween: [ "style", "${_airBlue1}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid135", tween: [ "style", "${_airBlue1}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_airRed2}", "width", '185px', { fromValue: '2px'}], position: 3000, duration: 533 },
                { id: "eid163", tween: [ "style", "${_airRed2}", "width", '8px', { fromValue: '185px'}], position: 3667, duration: 333 },
                { id: "eid117", tween: [ "style", "${_airBlue3}", "left", '283px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid137", tween: [ "style", "${_airBlue3}", "left", '285px', { fromValue: '283px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_airRed4}", "left", '5px', { fromValue: '161px'}], position: 3000, duration: 533 },
                { id: "eid228", tween: [ "style", "${_inRed}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid170", tween: [ "style", "${_inBlue}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid58", tween: [ "transform", "${_cam2}", "rotateZ", '470deg', { fromValue: '110deg'}], position: 0, duration: 4000 },
                { id: "eid123", tween: [ "style", "${_airBlue2}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid133", tween: [ "style", "${_airBlue2}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid129", tween: [ "style", "${_airBlue1}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
                { id: "eid155", tween: [ "style", "${_airRed3}", "left", '5px', { fromValue: '179px'}], position: 3000, duration: 533 },
                { id: "eid88", tween: [ "style", "${_valve2}", "left", '247px', { fromValue: '262px'}], position: 500, duration: 500 },
                { id: "eid90", tween: [ "style", "${_valve2}", "left", '262px', { fromValue: '247px'}], position: 1000, duration: 1000 },
                { id: "eid157", tween: [ "style", "${_airRed2}", "left", '5px', { fromValue: '189px'}], position: 3000, duration: 533 },
                { id: "eid119", tween: [ "style", "${_airBlue3}", "width", '175px', { fromValue: '2px'}], position: 0, duration: 500 },
                { id: "eid132", tween: [ "style", "${_airBlue3}", "width", '1px', { fromValue: '175px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_valve1}", "top", '132px', { fromValue: '109px'}], position: 2500, duration: 500 },
                { id: "eid95", tween: [ "style", "${_valve1}", "top", '109px', { fromValue: '132px'}], position: 3000, duration: 1000 },
                { id: "eid226", tween: [ "style", "${_inRed}", "height", '235px', { fromValue: '69px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid227", tween: [ "style", "${_inRed}", "height", '71px', { fromValue: '235px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid230", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOMB}', [] ], ""], position: 1833.3333333333 },
                { id: "eid231", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_CRANK_PISTON}', [] ], ""], position: 2000 }            ]
        }
    }
},
"spark_01": {
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
                    id: 'spark01',
                    type: 'image',
                    rect: ['-4px', '-4px', '28px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '18px'],
                ["style", "width", '20px']
            ],
            "${_spark01}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.7'],
                ["style", "height", '25px'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px'],
                ["style", "width", '28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 125,
            autoPlay: true,
            timeline: [
                { id: "eid140", tween: [ "transform", "${_spark01}", "scaleX", '1', { fromValue: '0.7'}], position: 0, duration: 112 },
                { id: "eid142", tween: [ "transform", "${_spark01}", "scaleY", '1', { fromValue: '0.7'}], position: 0, duration: 112 },
                { id: "eid144", tween: [ "style", "${_spark01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 112 },
                { id: "eid180", tween: [ "style", "${_spark01}", "opacity", '0', { fromValue: '1'}], position: 112, duration: 13 }            ]
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
})(jQuery, AdobeEdge, "EDGE-15270898");
