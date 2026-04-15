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
                id: 'PARTS4',
                type: 'rect',
                rect: ['1218', '19','auto','auto','auto', 'auto']
            },
            {
                id: 'back',
                type: 'image',
                tag: 'img',
                rect: ['688', '140px','1109','739','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back.png"]
            },
            {
                id: 'PARTS3',
                type: 'rect',
                rect: ['1795', '454','auto','auto','auto', 'auto']
            },
            {
                id: 'PARTS2',
                type: 'rect',
                rect: ['335', '454','auto','auto','auto', 'auto']
            },
            {
                id: 'PARTS1',
                type: 'rect',
                rect: ['614', '476','auto','auto','auto', 'auto']
            },
            {
                id: 'another',
                type: 'image',
                tag: 'img',
                rect: ['992', '525px','517','86','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"another.png"]
            },
            {
                id: 'txt',
                type: 'text',
                rect: ['246', '252px','938','86','auto', 'auto'],
                text: "파워 스티어링의 작동원리",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'PARTS3',
                symbolName: 'PARTS3',
                autoPlay: {

                }
            },
            {
                id: 'PARTS1',
                symbolName: 'PARTS1',
                autoPlay: {

                }
            },
            {
                id: 'PARTS2',
                symbolName: 'PARTS2',
                autoPlay: {

                }
            },
            {
                id: 'PARTS4',
                symbolName: 'PARTS4',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_PARTS2}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_back}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "top", '140px']
            ],
            "${_PARTS1}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_txt}": [
                ["style", "top", '252px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9']
            ],
            "${_PARTS4}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_another}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95'],
                ["style", "top", '525px']
            ],
            "${_PARTS3}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7467,
            autoPlay: true,
            labels: {
                "gogo": 1400
            },
            timeline: [
                { id: "eid185", tween: [ "style", "${_PARTS4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 600 },
                { id: "eid187", tween: [ "style", "${_PARTS1}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 600 },
                { id: "eid169", tween: [ "transform", "${_another}", "scaleX", '1', { fromValue: '0.95'}], position: 67, duration: 600 },
                { id: "eid205", tween: [ "transform", "${_txt}", "scaleX", '1', { fromValue: '0.9'}], position: 833, duration: 500 },
                { id: "eid197", tween: [ "transform", "${_PARTS4}", "scaleY", '1', { fromValue: '0.95'}], position: 100, duration: 600 },
                { id: "eid207", tween: [ "transform", "${_txt}", "scaleY", '1', { fromValue: '0.9'}], position: 833, duration: 500 },
                { id: "eid189", tween: [ "style", "${_PARTS3}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 600 },
                { id: "eid183", tween: [ "style", "${_back}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 600 },
                { id: "eid179", tween: [ "style", "${_PARTS2}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 600 },
                { id: "eid191", tween: [ "transform", "${_PARTS2}", "scaleY", '1', { fromValue: '0.95'}], position: 133, duration: 600 },
                { id: "eid181", tween: [ "style", "${_another}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 600 },
                { id: "eid193", tween: [ "transform", "${_another}", "scaleY", '1', { fromValue: '0.95'}], position: 67, duration: 600 },
                { id: "eid195", tween: [ "transform", "${_back}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 600 },
                { id: "eid167", tween: [ "transform", "${_PARTS2}", "scaleX", '1', { fromValue: '0.95'}], position: 133, duration: 600 },
                { id: "eid201", tween: [ "transform", "${_PARTS3}", "scaleY", '1', { fromValue: '0.95'}], position: 167, duration: 600 },
                { id: "eid171", tween: [ "transform", "${_back}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 600 },
                { id: "eid173", tween: [ "transform", "${_PARTS4}", "scaleX", '1', { fromValue: '0.95'}], position: 100, duration: 600 },
                { id: "eid177", tween: [ "transform", "${_PARTS3}", "scaleX", '1', { fromValue: '0.95'}], position: 167, duration: 600 },
                { id: "eid203", tween: [ "style", "${_txt}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 500 },
                { id: "eid175", tween: [ "transform", "${_PARTS1}", "scaleX", '1', { fromValue: '0.95'}], position: 33, duration: 600 },
                { id: "eid199", tween: [ "transform", "${_PARTS1}", "scaleY", '1', { fromValue: '0.95'}], position: 33, duration: 600 },
                { id: "eid208", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PARTS4}', [] ], ""], position: 1400 },
                { id: "eid210", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PARTS3}', [] ], ""], position: 1400 },
                { id: "eid209", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PARTS2}', [] ], ""], position: 1400 },
                { id: "eid211", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PARTS1}', [] ], ""], position: 1400 }            ]
        }
    }
},
"PARTS1": {
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
                    id: 'joint2',
                    type: 'image',
                    rect: ['891px', '34px', '161', '117', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/joint2.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'joint1',
                    type: 'image',
                    rect: ['222px', '34px', '160', '117', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/joint1.png']
                },
                {
                    type: 'image',
                    id: 'steering',
                    tag: 'img',
                    rect: ['0px', '59px', '1262', '68', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/steering.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'jointLine2',
                    type: 'image',
                    rect: ['893px', '36px', '158', '114', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/jointLine2.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'jointLine1',
                    type: 'image',
                    rect: ['223px', '36px', '158', '114', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/jointLine1.png']
                },
                {
                    type: 'image',
                    id: 'wormGear',
                    tag: 'img',
                    rect: ['687px', '0px', '71', '71', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wormGear.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_jointLine2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '36px'],
                ["style", "left", '893px'],
                ["style", "width", '158px']
            ],
            "${_wormGear}": [
                ["style", "top", '0px'],
                ["style", "left", '687px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_jointLine1}": [
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '36px'],
                ["style", "left", '223px'],
                ["style", "width", '158px']
            ],
            "${symbolSelector}": [
                ["style", "height", '151px'],
                ["style", "width", '1262px']
            ],
            "${_joint1}": [
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '34px'],
                ["style", "left", '222px'],
                ["style", "width", '160px']
            ],
            "${_steering}": [
                ["style", "left", '0px'],
                ["style", "top", '59px']
            ],
            "${_joint2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '34px'],
                ["style", "left", '891px'],
                ["style", "width", '161px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: false,
            timeline: [
                { id: "eid11", tween: [ "transform", "${_wormGear}", "rotateZ", '120deg', { fromValue: '0deg'}], position: 3, duration: 997 },
                { id: "eid36", tween: [ "transform", "${_wormGear}", "rotateZ", '0deg', { fromValue: '120deg'}], position: 1500, duration: 1000 },
                { id: "eid88", tween: [ "transform", "${_wormGear}", "rotateZ", '-120deg', { fromValue: '0deg'}], position: 3000, duration: 1000 },
                { id: "eid140", tween: [ "transform", "${_wormGear}", "rotateZ", '0deg', { fromValue: '-120deg'}], position: 4500, duration: 1000 },
                { id: "eid24", tween: [ "style", "${_joint1}", "left", '161px', { fromValue: '222px'}], position: 3, duration: 997 },
                { id: "eid41", tween: [ "style", "${_joint1}", "left", '222px', { fromValue: '161px'}], position: 1500, duration: 1000 },
                { id: "eid93", tween: [ "style", "${_joint1}", "left", '269px', { fromValue: '222px'}], position: 3000, duration: 1000 },
                { id: "eid145", tween: [ "style", "${_joint1}", "left", '222px', { fromValue: '269px'}], position: 4500, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_jointLine1}", "left", '163px', { fromValue: '223px'}], position: 3, duration: 997 },
                { id: "eid37", tween: [ "style", "${_jointLine1}", "left", '223px', { fromValue: '163px'}], position: 1500, duration: 1000 },
                { id: "eid89", tween: [ "style", "${_jointLine1}", "left", '269px', { fromValue: '223px'}], position: 3000, duration: 1000 },
                { id: "eid141", tween: [ "style", "${_jointLine1}", "left", '223px', { fromValue: '269px'}], position: 4500, duration: 1000 },
                { id: "eid23", tween: [ "style", "${_jointLine1}", "width", '218px', { fromValue: '158px'}], position: 3, duration: 997 },
                { id: "eid38", tween: [ "style", "${_jointLine1}", "width", '158px', { fromValue: '218px'}], position: 1500, duration: 1000 },
                { id: "eid90", tween: [ "style", "${_jointLine1}", "width", '112px', { fromValue: '158px'}], position: 3000, duration: 1000 },
                { id: "eid142", tween: [ "style", "${_jointLine1}", "width", '158px', { fromValue: '112px'}], position: 4500, duration: 1000 },
                { id: "eid12", tween: [ "style", "${_steering}", "left", '-62px', { fromValue: '0px'}], position: 3, duration: 997 },
                { id: "eid40", tween: [ "style", "${_steering}", "left", '0px', { fromValue: '-62px'}], position: 1500, duration: 1000 },
                { id: "eid92", tween: [ "style", "${_steering}", "left", '46px', { fromValue: '0px'}], position: 3000, duration: 1000 },
                { id: "eid144", tween: [ "style", "${_steering}", "left", '0px', { fromValue: '46px'}], position: 4500, duration: 1000 },
                { id: "eid21", tween: [ "style", "${_jointLine2}", "width", '97px', { fromValue: '158px'}], position: 3, duration: 997 },
                { id: "eid39", tween: [ "style", "${_jointLine2}", "width", '158px', { fromValue: '97px'}], position: 1500, duration: 1000 },
                { id: "eid91", tween: [ "style", "${_jointLine2}", "width", '205px', { fromValue: '158px'}], position: 3000, duration: 1000 },
                { id: "eid143", tween: [ "style", "${_jointLine2}", "width", '158px', { fromValue: '205px'}], position: 4500, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_joint1}", "width", '221px', { fromValue: '160px'}], position: 0, duration: 1000 },
                { id: "eid42", tween: [ "style", "${_joint1}", "width", '160px', { fromValue: '221px'}], position: 1500, duration: 998 },
                { id: "eid94", tween: [ "style", "${_joint1}", "width", '113px', { fromValue: '160px'}], position: 3002, duration: 998 },
                { id: "eid146", tween: [ "style", "${_joint1}", "width", '160px', { fromValue: '113px'}], position: 4500, duration: 998 },
                { id: "eid20", tween: [ "style", "${_joint2}", "width", '99px', { fromValue: '161px'}], position: 0, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_joint2}", "width", '161px', { fromValue: '99px'}], position: 1500, duration: 998 },
                { id: "eid95", tween: [ "style", "${_joint2}", "width", '209px', { fromValue: '161px'}], position: 3002, duration: 998 },
                { id: "eid147", tween: [ "style", "${_joint2}", "width", '161px', { fromValue: '209px'}], position: 4500, duration: 998 }            ]
        }
    }
},
"PARTS2": {
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
                    id: 'b_joint_src',
                    type: 'image',
                    rect: ['233px', '299px', '27', '123', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png']
                },
                {
                    transform: [],
                    id: 'b_joint_src2',
                    type: 'image',
                    rect: ['257px', '299px', '27px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png', '0px', '0px']
                },
                {
                    transform: [],
                    id: 'b_joint_src3',
                    type: 'image',
                    rect: ['281px', '299px', '27px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png', '0px', '0px']
                },
                {
                    transform: [],
                    id: 'b_joint_src4',
                    type: 'image',
                    rect: ['305px', '299px', '27px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png', '0px', '0px']
                },
                {
                    transform: [],
                    id: 'b_joint_src5',
                    type: 'image',
                    rect: ['329px', '299px', '27px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png', '0px', '0px']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'link1',
                    type: 'image',
                    rect: ['168px', '113px', '149', '132', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/link1.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'tire1',
                    type: 'image',
                    rect: ['0px', '0px', '302', '727', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b_joint_src4}": [
                ["style", "top", '299px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '305px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_joint_src3}": [
                ["style", "top", '299px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '281px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '727px'],
                ["style", "width", '356px']
            ],
            "${_tire1}": [
                ["style", "-webkit-transform-origin", [89,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [89,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [89,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [89,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [89,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_joint_src5}": [
                ["style", "top", '299px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '329px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_link1}": [
                ["style", "-webkit-transform-origin", [90,11], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [90,11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [90,11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [90,11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [90,11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '113px'],
                ["style", "left", '168px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_joint_src}": [
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '299px'],
                ["style", "left", '233px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_joint_src2}": [
                ["style", "top", '299px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '257px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5498,
            autoPlay: false,
            timeline: [
                { id: "eid26", tween: [ "transform", "${_b_joint_src}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid60", tween: [ "transform", "${_b_joint_src}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 998 },
                { id: "eid112", tween: [ "transform", "${_b_joint_src}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid164", tween: [ "transform", "${_b_joint_src}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 4500, duration: 998 },
                { id: "eid14", tween: [ "style", "${_link1}", "left", '113px', { fromValue: '168px'}], position: 0, duration: 1000 },
                { id: "eid45", tween: [ "style", "${_link1}", "left", '168px', { fromValue: '113px'}], position: 1500, duration: 998 },
                { id: "eid97", tween: [ "style", "${_link1}", "left", '208px', { fromValue: '168px'}], position: 3002, duration: 998 },
                { id: "eid149", tween: [ "style", "${_link1}", "left", '168px', { fromValue: '208px'}], position: 4500, duration: 998 },
                { id: "eid28", tween: [ "transform", "${_b_joint_src3}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid58", tween: [ "transform", "${_b_joint_src3}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 1500, duration: 998 },
                { id: "eid110", tween: [ "transform", "${_b_joint_src3}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid162", tween: [ "transform", "${_b_joint_src3}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 4500, duration: 998 },
                { id: "eid29", tween: [ "transform", "${_b_joint_src4}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid57", tween: [ "transform", "${_b_joint_src4}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 1500, duration: 998 },
                { id: "eid109", tween: [ "transform", "${_b_joint_src4}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid161", tween: [ "transform", "${_b_joint_src4}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 4500, duration: 998 },
                { id: "eid15", tween: [ "transform", "${_link1}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid46", tween: [ "transform", "${_link1}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 998 },
                { id: "eid98", tween: [ "transform", "${_link1}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid150", tween: [ "transform", "${_link1}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 4500, duration: 998 },
                { id: "eid13", tween: [ "transform", "${_tire1}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid44", tween: [ "transform", "${_tire1}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 998 },
                { id: "eid96", tween: [ "transform", "${_tire1}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid148", tween: [ "transform", "${_tire1}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 4500, duration: 998 },
                { id: "eid35", tween: [ "transform", "${_b_joint_src5}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid56", tween: [ "transform", "${_b_joint_src5}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1500, duration: 998 },
                { id: "eid108", tween: [ "transform", "${_b_joint_src5}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid160", tween: [ "transform", "${_b_joint_src5}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 4500, duration: 998 },
                { id: "eid27", tween: [ "transform", "${_b_joint_src2}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid59", tween: [ "transform", "${_b_joint_src2}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 1500, duration: 998 },
                { id: "eid111", tween: [ "transform", "${_b_joint_src2}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid163", tween: [ "transform", "${_b_joint_src2}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 4500, duration: 998 }            ]
        }
    }
},
"PARTS3": {
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
                    id: 'b_joint_srcCopy',
                    type: 'image',
                    rect: ['0px', '299px', '27', '123', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png']
                },
                {
                    transform: [],
                    id: 'b_joint_src2Copy',
                    type: 'image',
                    rect: ['24px', '299px', '27px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png', '0px', '0px']
                },
                {
                    transform: [],
                    id: 'b_joint_src3Copy',
                    type: 'image',
                    rect: ['48px', '299px', '27px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png', '0px', '0px']
                },
                {
                    transform: [],
                    id: 'b_joint_src4Copy',
                    type: 'image',
                    rect: ['72px', '299px', '27px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png', '0px', '0px']
                },
                {
                    transform: [],
                    id: 'b_joint_src5Copy',
                    type: 'image',
                    rect: ['96px', '299px', '27px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b_joint_src.png', '0px', '0px']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'link2',
                    type: 'image',
                    rect: ['39px', '113px', '148', '132', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/link2.png']
                },
                {
                    transform: [],
                    tag: 'img',
                    id: 'tire2',
                    type: 'image',
                    rect: ['54px', '0px', '302', '727', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire2.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '727px'],
                ["style", "width", '356px']
            ],
            "${_b_joint_src3Copy}": [
                ["style", "top", '299px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '48px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_link2}": [
                ["style", "top", '113px'],
                ["style", "-webkit-transform-origin", [14,14], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [14,14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [14,14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [14,14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [14,14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '39px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_joint_src4Copy}": [
                ["style", "top", '299px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '72px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_joint_src2Copy}": [
                ["style", "top", '299px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '24px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_joint_src5Copy}": [
                ["style", "top", '299px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '96px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_tire2}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [12,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [12,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [12,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [12,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [12,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '54px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_joint_srcCopy}": [
                ["style", "top", '299px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5498,
            autoPlay: false,
            timeline: [
                { id: "eid17", tween: [ "transform", "${_link2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid50", tween: [ "transform", "${_link2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 998 },
                { id: "eid102", tween: [ "transform", "${_link2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid154", tween: [ "transform", "${_link2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 4500, duration: 998 },
                { id: "eid30", tween: [ "transform", "${_b_joint_src5Copy}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid51", tween: [ "transform", "${_b_joint_src5Copy}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 998 },
                { id: "eid103", tween: [ "transform", "${_b_joint_src5Copy}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid155", tween: [ "transform", "${_b_joint_src5Copy}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 4500, duration: 998 },
                { id: "eid33", tween: [ "transform", "${_b_joint_src2Copy}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid54", tween: [ "transform", "${_b_joint_src2Copy}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 1500, duration: 998 },
                { id: "eid106", tween: [ "transform", "${_b_joint_src2Copy}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid158", tween: [ "transform", "${_b_joint_src2Copy}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 4500, duration: 998 },
                { id: "eid16", tween: [ "transform", "${_tire2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid47", tween: [ "transform", "${_tire2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 998 },
                { id: "eid99", tween: [ "transform", "${_tire2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid151", tween: [ "transform", "${_tire2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 4500, duration: 998 },
                { id: "eid19", tween: [ "style", "${_link2}", "top", '116px', { fromValue: '113px'}], position: 0, duration: 1000 },
                { id: "eid48", tween: [ "style", "${_link2}", "top", '113px', { fromValue: '116px'}], position: 1500, duration: 998 },
                { id: "eid100", tween: [ "style", "${_link2}", "top", '116px', { fromValue: '113px'}], position: 3002, duration: 998 },
                { id: "eid152", tween: [ "style", "${_link2}", "top", '113px', { fromValue: '116px'}], position: 4500, duration: 998 },
                { id: "eid32", tween: [ "transform", "${_b_joint_src3Copy}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid53", tween: [ "transform", "${_b_joint_src3Copy}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 1500, duration: 998 },
                { id: "eid105", tween: [ "transform", "${_b_joint_src3Copy}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid157", tween: [ "transform", "${_b_joint_src3Copy}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 4500, duration: 998 },
                { id: "eid18", tween: [ "style", "${_link2}", "left", '-13px', { fromValue: '39px'}], position: 0, duration: 1000 },
                { id: "eid49", tween: [ "style", "${_link2}", "left", '39px', { fromValue: '-13px'}], position: 1500, duration: 998 },
                { id: "eid101", tween: [ "style", "${_link2}", "left", '91px', { fromValue: '39px'}], position: 3002, duration: 998 },
                { id: "eid153", tween: [ "style", "${_link2}", "left", '39px', { fromValue: '91px'}], position: 4500, duration: 998 },
                { id: "eid34", tween: [ "transform", "${_b_joint_srcCopy}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid55", tween: [ "transform", "${_b_joint_srcCopy}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1500, duration: 998 },
                { id: "eid107", tween: [ "transform", "${_b_joint_srcCopy}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid159", tween: [ "transform", "${_b_joint_srcCopy}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 4500, duration: 998 },
                { id: "eid31", tween: [ "transform", "${_b_joint_src4Copy}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid52", tween: [ "transform", "${_b_joint_src4Copy}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 1500, duration: 998 },
                { id: "eid104", tween: [ "transform", "${_b_joint_src4Copy}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid156", tween: [ "transform", "${_b_joint_src4Copy}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 4500, duration: 998 }            ]
        }
    }
},
"PARTS4": {
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
                    id: 'handle',
                    type: 'image',
                    rect: ['0px', '0px', '234', '196', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/handle.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '196px'],
                ["style", "width", '234px']
            ],
            "${_handle}": [
                ["style", "-webkit-transform-origin", [50,64], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,64],{valueTemplate:'@@0@@% @@1@@%'}],
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
            duration: 5498,
            autoPlay: false,
            timeline: [
                { id: "eid10", tween: [ "transform", "${_handle}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid61", tween: [ "transform", "${_handle}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 1500, duration: 998 },
                { id: "eid113", tween: [ "transform", "${_handle}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 3002, duration: 998 },
                { id: "eid165", tween: [ "transform", "${_handle}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 4500, duration: 998 }            ]
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
})(jQuery, AdobeEdge, "EDGE-13410471");
