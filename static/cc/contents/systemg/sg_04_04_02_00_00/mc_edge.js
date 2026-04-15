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
                rect: ['688', '140px','1111px','712px','auto', 'auto'],
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
                id: 'beltMotion',
                type: 'rect',
                rect: ['1075', '669','auto','auto','auto', 'auto']
            },
            {
                id: 'OIL_FLOW',
                type: 'rect',
                rect: ['895', '425','auto','auto','auto', 'auto']
            },
            {
                id: 'another',
                type: 'image',
                tag: 'img',
                rect: ['992', '418px','518px','195px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"another.png"]
            },
            {
                id: 'txt',
                type: 'text',
                rect: ['246', '252px','938','86','auto', 'auto'],
                text: "파워스티어링 오일의 흐름",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
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
            },
            {
                id: 'PARTS3',
                symbolName: 'PARTS3',
                autoPlay: {

                }
            },
            {
                id: 'OIL_FLOW',
                symbolName: 'OIL_FLOW',
                autoPlay: {

                }
            },
            {
                id: 'beltMotion',
                symbolName: 'beltMotion',
                autoPlay: {

                }
            },
            {
                id: 'PARTS1',
                symbolName: 'PARTS1',
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
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_back}": [
                ["style", "top", '140px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "height", '712px'],
                ["style", "width", '1111px']
            ],
            "${_beltMotion}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_PARTS1}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_another}": [
                ["style", "top", '418px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "height", '195px'],
                ["style", "width", '518px']
            ],
            "${_PARTS4}": [
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
            "${_PARTS3}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_OIL_FLOW}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 19500,
            autoPlay: true,
            labels: {
                "gogo": 1400
            },
            timeline: [
                { id: "eid409", tween: [ "transform", "${_OIL_FLOW}", "scaleY", '1', { fromValue: '0.95'}], position: 233, duration: 600 },
                { id: "eid187", tween: [ "style", "${_PARTS1}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 600 },
                { id: "eid169", tween: [ "transform", "${_another}", "scaleX", '1', { fromValue: '0.95'}], position: 67, duration: 600 },
                { id: "eid205", tween: [ "transform", "${_txt}", "scaleX", '1', { fromValue: '0.9'}], position: 833, duration: 500 },
                { id: "eid415", tween: [ "style", "${_OIL_FLOW}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 600 },
                { id: "eid197", tween: [ "transform", "${_PARTS4}", "scaleY", '1', { fromValue: '0.95'}], position: 100, duration: 600 },
                { id: "eid181", tween: [ "style", "${_another}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 600 },
                { id: "eid207", tween: [ "transform", "${_txt}", "scaleY", '1', { fromValue: '0.9'}], position: 833, duration: 500 },
                { id: "eid167", tween: [ "transform", "${_PARTS2}", "scaleX", '1', { fromValue: '0.95'}], position: 133, duration: 600 },
                { id: "eid189", tween: [ "style", "${_PARTS3}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 600 },
                { id: "eid183", tween: [ "style", "${_back}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 600 },
                { id: "eid199", tween: [ "transform", "${_PARTS1}", "scaleY", '1', { fromValue: '0.95'}], position: 33, duration: 600 },
                { id: "eid413", tween: [ "transform", "${_beltMotion}", "scaleY", '1', { fromValue: '0.95'}], position: 200, duration: 600 },
                { id: "eid173", tween: [ "transform", "${_PARTS4}", "scaleX", '1', { fromValue: '0.95'}], position: 100, duration: 600 },
                { id: "eid407", tween: [ "transform", "${_OIL_FLOW}", "scaleX", '1', { fromValue: '0.95'}], position: 233, duration: 600 },
                { id: "eid191", tween: [ "transform", "${_PARTS2}", "scaleY", '1', { fromValue: '0.95'}], position: 133, duration: 600 },
                { id: "eid411", tween: [ "transform", "${_beltMotion}", "scaleX", '1', { fromValue: '0.95'}], position: 200, duration: 600 },
                { id: "eid193", tween: [ "transform", "${_another}", "scaleY", '1', { fromValue: '0.95'}], position: 67, duration: 600 },
                { id: "eid195", tween: [ "transform", "${_back}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 600 },
                { id: "eid179", tween: [ "style", "${_PARTS2}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 600 },
                { id: "eid201", tween: [ "transform", "${_PARTS3}", "scaleY", '1', { fromValue: '0.95'}], position: 167, duration: 600 },
                { id: "eid171", tween: [ "transform", "${_back}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 600 },
                { id: "eid175", tween: [ "transform", "${_PARTS1}", "scaleX", '1', { fromValue: '0.95'}], position: 33, duration: 600 },
                { id: "eid177", tween: [ "transform", "${_PARTS3}", "scaleX", '1', { fromValue: '0.95'}], position: 167, duration: 600 },
                { id: "eid203", tween: [ "style", "${_txt}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 500 },
                { id: "eid185", tween: [ "style", "${_PARTS4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 600 },
                { id: "eid417", tween: [ "style", "${_beltMotion}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 600 },
                { id: "eid208", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PARTS4}', [] ], ""], position: 1400 },
                { id: "eid209", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PARTS2}', [] ], ""], position: 1400 },
                { id: "eid210", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PARTS3}', [] ], ""], position: 1400 },
                { id: "eid418", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_beltMotion}', [] ], ""], position: 1400 },
                { id: "eid211", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PARTS1}', [] ], ""], position: 1400 },
                { id: "eid599", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_OIL_FLOW}', [] ], ""], position: 1400 }            ]
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
            duration: 14500,
            autoPlay: false,
            timeline: [
                { id: "eid11", tween: [ "transform", "${_wormGear}", "rotateZ", '120deg', { fromValue: '0deg'}], position: 3, duration: 997 },
                { id: "eid36", tween: [ "transform", "${_wormGear}", "rotateZ", '0deg', { fromValue: '120deg'}], position: 4500, duration: 1000 },
                { id: "eid88", tween: [ "transform", "${_wormGear}", "rotateZ", '-120deg', { fromValue: '0deg'}], position: 9000, duration: 1000 },
                { id: "eid140", tween: [ "transform", "${_wormGear}", "rotateZ", '0deg', { fromValue: '-120deg'}], position: 13500, duration: 1000 },
                { id: "eid24", tween: [ "style", "${_joint1}", "left", '161px', { fromValue: '222px'}], position: 3, duration: 997 },
                { id: "eid41", tween: [ "style", "${_joint1}", "left", '222px', { fromValue: '161px'}], position: 4500, duration: 1000 },
                { id: "eid93", tween: [ "style", "${_joint1}", "left", '269px', { fromValue: '222px'}], position: 9000, duration: 1000 },
                { id: "eid145", tween: [ "style", "${_joint1}", "left", '222px', { fromValue: '269px'}], position: 13500, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_jointLine1}", "left", '163px', { fromValue: '223px'}], position: 3, duration: 997 },
                { id: "eid37", tween: [ "style", "${_jointLine1}", "left", '223px', { fromValue: '163px'}], position: 4500, duration: 1000 },
                { id: "eid89", tween: [ "style", "${_jointLine1}", "left", '269px', { fromValue: '223px'}], position: 9000, duration: 1000 },
                { id: "eid141", tween: [ "style", "${_jointLine1}", "left", '223px', { fromValue: '269px'}], position: 13500, duration: 1000 },
                { id: "eid23", tween: [ "style", "${_jointLine1}", "width", '218px', { fromValue: '158px'}], position: 3, duration: 997 },
                { id: "eid38", tween: [ "style", "${_jointLine1}", "width", '158px', { fromValue: '218px'}], position: 4500, duration: 1000 },
                { id: "eid90", tween: [ "style", "${_jointLine1}", "width", '112px', { fromValue: '158px'}], position: 9000, duration: 1000 },
                { id: "eid142", tween: [ "style", "${_jointLine1}", "width", '158px', { fromValue: '112px'}], position: 13500, duration: 1000 },
                { id: "eid21", tween: [ "style", "${_jointLine2}", "width", '97px', { fromValue: '158px'}], position: 3, duration: 997 },
                { id: "eid39", tween: [ "style", "${_jointLine2}", "width", '158px', { fromValue: '97px'}], position: 4500, duration: 1000 },
                { id: "eid91", tween: [ "style", "${_jointLine2}", "width", '205px', { fromValue: '158px'}], position: 9000, duration: 1000 },
                { id: "eid143", tween: [ "style", "${_jointLine2}", "width", '158px', { fromValue: '205px'}], position: 13500, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_joint1}", "width", '221px', { fromValue: '160px'}], position: 0, duration: 1000 },
                { id: "eid42", tween: [ "style", "${_joint1}", "width", '160px', { fromValue: '221px'}], position: 4500, duration: 998 },
                { id: "eid94", tween: [ "style", "${_joint1}", "width", '113px', { fromValue: '160px'}], position: 9002, duration: 998 },
                { id: "eid146", tween: [ "style", "${_joint1}", "width", '160px', { fromValue: '113px'}], position: 13500, duration: 998 },
                { id: "eid12", tween: [ "style", "${_steering}", "left", '-62px', { fromValue: '0px'}], position: 3, duration: 997 },
                { id: "eid40", tween: [ "style", "${_steering}", "left", '0px', { fromValue: '-62px'}], position: 4500, duration: 1000 },
                { id: "eid92", tween: [ "style", "${_steering}", "left", '46px', { fromValue: '0px'}], position: 9000, duration: 1000 },
                { id: "eid144", tween: [ "style", "${_steering}", "left", '0px', { fromValue: '46px'}], position: 13500, duration: 1000 },
                { id: "eid20", tween: [ "style", "${_joint2}", "width", '99px', { fromValue: '161px'}], position: 0, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_joint2}", "width", '161px', { fromValue: '99px'}], position: 4500, duration: 998 },
                { id: "eid95", tween: [ "style", "${_joint2}", "width", '209px', { fromValue: '161px'}], position: 9002, duration: 998 },
                { id: "eid147", tween: [ "style", "${_joint2}", "width", '161px', { fromValue: '209px'}], position: 13500, duration: 998 }            ]
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
            "${symbolSelector}": [
                ["style", "height", '727px'],
                ["style", "width", '356px']
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
            duration: 14498,
            autoPlay: false,
            timeline: [
                { id: "eid26", tween: [ "transform", "${_b_joint_src}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid60", tween: [ "transform", "${_b_joint_src}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4500, duration: 998 },
                { id: "eid112", tween: [ "transform", "${_b_joint_src}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid164", tween: [ "transform", "${_b_joint_src}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 13500, duration: 998 },
                { id: "eid14", tween: [ "style", "${_link1}", "left", '113px', { fromValue: '168px'}], position: 0, duration: 1000 },
                { id: "eid45", tween: [ "style", "${_link1}", "left", '168px', { fromValue: '113px'}], position: 4500, duration: 998 },
                { id: "eid97", tween: [ "style", "${_link1}", "left", '208px', { fromValue: '168px'}], position: 9000, duration: 998 },
                { id: "eid149", tween: [ "style", "${_link1}", "left", '168px', { fromValue: '208px'}], position: 13500, duration: 998 },
                { id: "eid28", tween: [ "transform", "${_b_joint_src3}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid58", tween: [ "transform", "${_b_joint_src3}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 4500, duration: 998 },
                { id: "eid110", tween: [ "transform", "${_b_joint_src3}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid162", tween: [ "transform", "${_b_joint_src3}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 13500, duration: 998 },
                { id: "eid29", tween: [ "transform", "${_b_joint_src4}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid57", tween: [ "transform", "${_b_joint_src4}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 4500, duration: 998 },
                { id: "eid109", tween: [ "transform", "${_b_joint_src4}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid161", tween: [ "transform", "${_b_joint_src4}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 13500, duration: 998 },
                { id: "eid15", tween: [ "transform", "${_link1}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid46", tween: [ "transform", "${_link1}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4500, duration: 998 },
                { id: "eid98", tween: [ "transform", "${_link1}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid150", tween: [ "transform", "${_link1}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 13500, duration: 998 },
                { id: "eid13", tween: [ "transform", "${_tire1}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid44", tween: [ "transform", "${_tire1}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4500, duration: 998 },
                { id: "eid96", tween: [ "transform", "${_tire1}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid148", tween: [ "transform", "${_tire1}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 13500, duration: 998 },
                { id: "eid35", tween: [ "transform", "${_b_joint_src5}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid56", tween: [ "transform", "${_b_joint_src5}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 4500, duration: 998 },
                { id: "eid108", tween: [ "transform", "${_b_joint_src5}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid160", tween: [ "transform", "${_b_joint_src5}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 13500, duration: 998 },
                { id: "eid27", tween: [ "transform", "${_b_joint_src2}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid59", tween: [ "transform", "${_b_joint_src2}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 4500, duration: 998 },
                { id: "eid111", tween: [ "transform", "${_b_joint_src2}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid163", tween: [ "transform", "${_b_joint_src2}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 13500, duration: 998 }            ]
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
            duration: 14498,
            autoPlay: false,
            timeline: [
                { id: "eid17", tween: [ "transform", "${_link2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid50", tween: [ "transform", "${_link2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4500, duration: 998 },
                { id: "eid102", tween: [ "transform", "${_link2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid154", tween: [ "transform", "${_link2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 13500, duration: 998 },
                { id: "eid30", tween: [ "transform", "${_b_joint_src5Copy}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid51", tween: [ "transform", "${_b_joint_src5Copy}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4500, duration: 998 },
                { id: "eid103", tween: [ "transform", "${_b_joint_src5Copy}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid155", tween: [ "transform", "${_b_joint_src5Copy}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 13500, duration: 998 },
                { id: "eid33", tween: [ "transform", "${_b_joint_src2Copy}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid54", tween: [ "transform", "${_b_joint_src2Copy}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 4500, duration: 998 },
                { id: "eid106", tween: [ "transform", "${_b_joint_src2Copy}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid158", tween: [ "transform", "${_b_joint_src2Copy}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 13500, duration: 998 },
                { id: "eid16", tween: [ "transform", "${_tire2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid47", tween: [ "transform", "${_tire2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4500, duration: 998 },
                { id: "eid99", tween: [ "transform", "${_tire2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid151", tween: [ "transform", "${_tire2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 13500, duration: 998 },
                { id: "eid19", tween: [ "style", "${_link2}", "top", '116px', { fromValue: '113px'}], position: 0, duration: 1000 },
                { id: "eid48", tween: [ "style", "${_link2}", "top", '113px', { fromValue: '116px'}], position: 4500, duration: 998 },
                { id: "eid100", tween: [ "style", "${_link2}", "top", '116px', { fromValue: '113px'}], position: 9000, duration: 998 },
                { id: "eid152", tween: [ "style", "${_link2}", "top", '113px', { fromValue: '116px'}], position: 13500, duration: 998 },
                { id: "eid32", tween: [ "transform", "${_b_joint_src3Copy}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid53", tween: [ "transform", "${_b_joint_src3Copy}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 4500, duration: 998 },
                { id: "eid105", tween: [ "transform", "${_b_joint_src3Copy}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid157", tween: [ "transform", "${_b_joint_src3Copy}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 13500, duration: 998 },
                { id: "eid18", tween: [ "style", "${_link2}", "left", '-13px', { fromValue: '39px'}], position: 0, duration: 1000 },
                { id: "eid49", tween: [ "style", "${_link2}", "left", '39px', { fromValue: '-13px'}], position: 4500, duration: 998 },
                { id: "eid101", tween: [ "style", "${_link2}", "left", '91px', { fromValue: '39px'}], position: 9000, duration: 998 },
                { id: "eid153", tween: [ "style", "${_link2}", "left", '39px', { fromValue: '91px'}], position: 13500, duration: 998 },
                { id: "eid34", tween: [ "transform", "${_b_joint_srcCopy}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid55", tween: [ "transform", "${_b_joint_srcCopy}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 4500, duration: 998 },
                { id: "eid107", tween: [ "transform", "${_b_joint_srcCopy}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid159", tween: [ "transform", "${_b_joint_srcCopy}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 13500, duration: 998 },
                { id: "eid31", tween: [ "transform", "${_b_joint_src4Copy}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid52", tween: [ "transform", "${_b_joint_src4Copy}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 4500, duration: 998 },
                { id: "eid104", tween: [ "transform", "${_b_joint_src4Copy}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 9000, duration: 998 },
                { id: "eid156", tween: [ "transform", "${_b_joint_src4Copy}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 13500, duration: 998 }            ]
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
            duration: 14498,
            autoPlay: false,
            timeline: [
                { id: "eid10", tween: [ "transform", "${_handle}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid61", tween: [ "transform", "${_handle}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 4500, duration: 1000 },
                { id: "eid113", tween: [ "transform", "${_handle}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 9004, duration: 998 },
                { id: "eid165", tween: [ "transform", "${_handle}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 13500, duration: 998 }            ]
        }
    }
},
"beltMotion": {
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
                    id: 'belt2',
                    tag: 'img',
                    rect: ['135px', '76px', '131', '120', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt2.png']
                },
                {
                    type: 'image',
                    id: 'line2',
                    tag: 'img',
                    rect: ['140px', '59px', '122px', '167', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/line2.png']
                },
                {
                    type: 'image',
                    id: 'blinder2',
                    tag: 'img',
                    rect: ['131px', '0px', '145', '229', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blinder2.png']
                },
                {
                    type: 'image',
                    id: 'belt1',
                    tag: 'img',
                    rect: ['0px', '67px', '218', '233', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt1.png']
                },
                {
                    type: 'image',
                    id: 'line1',
                    tag: 'img',
                    rect: ['0px', '48px', '217', '295px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/line1.png']
                },
                {
                    type: 'image',
                    id: 'blinder1',
                    tag: 'img',
                    rect: ['0px', '48px', '275', '356', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blinder1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_line2}": [
                ["style", "top", '59px'],
                ["style", "left", '140px'],
                ["style", "width", '122px']
            ],
            "${_line1}": [
                ["style", "top", '48px'],
                ["style", "left", '0px'],
                ["style", "height", '295px']
            ],
            "${symbolSelector}": [
                ["style", "height", '404px'],
                ["style", "width", '276px']
            ],
            "${_belt1}": [
                ["style", "left", '0px'],
                ["style", "top", '67px']
            ],
            "${_belt2}": [
                ["style", "left", '135px'],
                ["style", "top", '76px']
            ],
            "${_blinder2}": [
                ["style", "left", '131px'],
                ["style", "top", '0px']
            ],
            "${_blinder1}": [
                ["style", "left", '0px'],
                ["style", "top", '48px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 233,
            autoPlay: false,
            timeline: [
                { id: "eid215", tween: [ "style", "${_line1}", "top", '67px', { fromValue: '48px'}], position: 0, duration: 233 },
                { id: "eid216", tween: [ "style", "${_line2}", "top", '40px', { fromValue: '59px'}], position: 0, duration: 233 }            ]
        }
    }
},
"OIL_FLOW": {
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
                    id: 'oilArea',
                    tag: 'img',
                    rect: ['0px', '0px', '792', '721', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/oilArea.png']
                },
                {
                    rect: ['611px', '643px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'firstOil-1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(77,199,254,1.00)']
                },
                {
                    rect: ['611px', '643px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'firstOil-2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(77,199,254,1.00)']
                },
                {
                    rect: ['611px', '643px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'firstOil-3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(77,199,254,1.00)']
                },
                {
                    rect: ['611px', '643px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'firstOil-4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(77,199,254,1.00)']
                },
                {
                    rect: ['611px', '643px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'firstOil-5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(77,199,254,1.00)']
                },
                {
                    rect: ['611px', '643px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'firstOil-6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(77,199,254,1.00)']
                },
                {
                    rect: ['611px', '643px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'firstOil-7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(77,199,254,1.00)']
                },
                {
                    rect: ['611px', '643px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'firstOil-8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(77,199,254,1.00)']
                },
                {
                    rect: ['611px', '643px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'firstOil-9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(77,199,254,1.00)']
                },
                {
                    rect: ['136px', '260px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'secondOil-1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(7,138,255,1.00)']
                },
                {
                    rect: ['136px', '260px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'secondOil-2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(7,138,255,1.00)']
                },
                {
                    rect: ['136px', '260px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'secondOil-3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(7,138,255,1.00)']
                },
                {
                    rect: ['136px', '260px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'secondOil-4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(7,138,255,1.00)']
                },
                {
                    rect: ['136px', '260px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'secondOil-5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(7,138,255,1.00)']
                },
                {
                    rect: ['136px', '260px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'secondOil-6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(7,138,255,1.00)']
                },
                {
                    rect: ['136px', '260px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'secondOil-7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(7,138,255,1.00)']
                },
                {
                    rect: ['136px', '260px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'secondOil-8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(7,138,255,1.00)']
                },
                {
                    rect: ['136px', '260px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'secondOil-9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(7,138,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_firstOil-2}": [
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(77,199,254,1.00)']
            ],
            "${_firstOil-7}": [
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(77,199,254,1.00)']
            ],
            "${_firstOil-1}": [
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(77,199,254,1.00)']
            ],
            "${_secondOil-6}": [
                ["color", "background-color", 'rgba(7,138,255,1.00)'],
                ["motion", "location", '147px 271px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px'],
                ["style", "top", '260px']
            ],
            "${_secondOil-5}": [
                ["color", "background-color", 'rgba(7,138,255,1.00)'],
                ["motion", "location", '147px 271px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px'],
                ["style", "top", '260px']
            ],
            "${_secondOil-8}": [
                ["color", "background-color", 'rgba(7,138,255,1.00)'],
                ["motion", "location", '147px 271px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px'],
                ["style", "top", '260px']
            ],
            "${_secondOil-2}": [
                ["color", "background-color", 'rgba(7,138,255,1.00)'],
                ["motion", "location", '147px 271px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px'],
                ["style", "top", '260px']
            ],
            "${_firstOil-6}": [
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(77,199,254,1.00)']
            ],
            "${_firstOil-3}": [
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(77,199,254,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '721px'],
                ["style", "width", '792px']
            ],
            "${_firstOil-9}": [
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(77,199,254,1.00)']
            ],
            "${_oilArea}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_firstOil-4}": [
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(77,199,254,1.00)']
            ],
            "${_firstOil-5}": [
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(77,199,254,1.00)']
            ],
            "${_firstOil-8}": [
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(77,199,254,1.00)']
            ],
            "${_secondOil-7}": [
                ["color", "background-color", 'rgba(7,138,255,1.00)'],
                ["motion", "location", '147px 271px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px'],
                ["style", "top", '260px']
            ],
            "${_secondOil-9}": [
                ["color", "background-color", 'rgba(7,138,255,1.00)'],
                ["motion", "location", '147px 271px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px'],
                ["style", "top", '260px']
            ],
            "${_secondOil-3}": [
                ["color", "background-color", 'rgba(7,138,255,1.00)'],
                ["motion", "location", '147px 271px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px'],
                ["style", "top", '260px']
            ],
            "${_secondOil-1}": [
                ["color", "background-color", 'rgba(7,138,255,1.00)'],
                ["motion", "location", '622px 654px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px'],
                ["style", "top", '260px']
            ],
            "${_secondOil-4}": [
                ["color", "background-color", 'rgba(7,138,255,1.00)'],
                ["motion", "location", '147px 271px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px'],
                ["style", "top", '260px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17767,
            autoPlay: false,
            timeline: [
                { id: "eid334", tween: [ "motion", "${_firstOil-8}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 1233, duration: 947 },
                { id: "eid467", tween: [ "motion", "${_firstOil-8}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 5733, duration: 947 },
                { id: "eid521", tween: [ "motion", "${_firstOil-8}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 10233, duration: 947 },
                { id: "eid575", tween: [ "motion", "${_firstOil-8}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 14733, duration: 947 },
                { id: "eid426", tween: [ "style", "${_firstOil-4}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 33 },
                { id: "eid331", tween: [ "style", "${_firstOil-4}", "opacity", '0', { fromValue: '1'}], position: 2047, duration: 53 },
                { id: "eid480", tween: [ "style", "${_firstOil-4}", "opacity", '1', { fromValue: '0'}], position: 5600, duration: 33 },
                { id: "eid481", tween: [ "style", "${_firstOil-4}", "opacity", '0', { fromValue: '1'}], position: 6547, duration: 53 },
                { id: "eid534", tween: [ "style", "${_firstOil-4}", "opacity", '1', { fromValue: '0'}], position: 10100, duration: 33 },
                { id: "eid535", tween: [ "style", "${_firstOil-4}", "opacity", '0', { fromValue: '1'}], position: 11047, duration: 53 },
                { id: "eid588", tween: [ "style", "${_firstOil-4}", "opacity", '1', { fromValue: '0'}], position: 14600, duration: 33 },
                { id: "eid589", tween: [ "style", "${_firstOil-4}", "opacity", '0', { fromValue: '1'}], position: 15547, duration: 53 },
                { id: "eid424", tween: [ "style", "${_firstOil-3}", "opacity", '1', { fromValue: '0'}], position: 1067, duration: 33 },
                { id: "eid333", tween: [ "style", "${_firstOil-3}", "opacity", '0', { fromValue: '1'}], position: 2014, duration: 53 },
                { id: "eid483", tween: [ "style", "${_firstOil-3}", "opacity", '1', { fromValue: '0'}], position: 5567, duration: 33 },
                { id: "eid484", tween: [ "style", "${_firstOil-3}", "opacity", '0', { fromValue: '1'}], position: 6514, duration: 53 },
                { id: "eid537", tween: [ "style", "${_firstOil-3}", "opacity", '1', { fromValue: '0'}], position: 10067, duration: 33 },
                { id: "eid538", tween: [ "style", "${_firstOil-3}", "opacity", '0', { fromValue: '1'}], position: 11014, duration: 53 },
                { id: "eid591", tween: [ "style", "${_firstOil-3}", "opacity", '1', { fromValue: '0'}], position: 14567, duration: 33 },
                { id: "eid592", tween: [ "style", "${_firstOil-3}", "opacity", '0', { fromValue: '1'}], position: 15514, duration: 53 },
                { id: "eid377", tween: [ "motion", "${_secondOil-9}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 2800, duration: 1433 },
                { id: "eid437", tween: [ "motion", "${_secondOil-9}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 7267, duration: 1500 },
                { id: "eid491", tween: [ "motion", "${_secondOil-9}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 11767, duration: 1500 },
                { id: "eid545", tween: [ "motion", "${_secondOil-9}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 16267, duration: 1466 },
                { id: "eid328", tween: [ "motion", "${_firstOil-2}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 1033, duration: 947 },
                { id: "eid485", tween: [ "motion", "${_firstOil-2}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 5533, duration: 947 },
                { id: "eid539", tween: [ "motion", "${_firstOil-2}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 10033, duration: 947 },
                { id: "eid593", tween: [ "motion", "${_firstOil-2}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 14533, duration: 947 },
                { id: "eid375", tween: [ "motion", "${_secondOil-5}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 2667, duration: 1433 },
                { id: "eid449", tween: [ "motion", "${_secondOil-5}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 7133, duration: 1499 },
                { id: "eid503", tween: [ "motion", "${_secondOil-5}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 11633, duration: 1499 },
                { id: "eid557", tween: [ "motion", "${_secondOil-5}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 16133, duration: 1466 },
                { id: "eid396", tween: [ "style", "${_secondOil-3}", "opacity", '1', { fromValue: '0'}], position: 2567, duration: 33 },
                { id: "eid405", tween: [ "style", "${_secondOil-3}", "opacity", '0', { fromValue: '1'}], position: 4033, duration: 34 },
                { id: "eid456", tween: [ "style", "${_secondOil-3}", "opacity", '1', { fromValue: '0'}], position: 7067, duration: 33 },
                { id: "eid457", tween: [ "style", "${_secondOil-3}", "opacity", '0', { fromValue: '1'}], position: 8533, duration: 34 },
                { id: "eid510", tween: [ "style", "${_secondOil-3}", "opacity", '1', { fromValue: '0'}], position: 11567, duration: 33 },
                { id: "eid511", tween: [ "style", "${_secondOil-3}", "opacity", '0', { fromValue: '1'}], position: 13033, duration: 34 },
                { id: "eid564", tween: [ "style", "${_secondOil-3}", "opacity", '1', { fromValue: '0'}], position: 16067, duration: 33 },
                { id: "eid565", tween: [ "style", "${_secondOil-3}", "opacity", '0', { fromValue: '1'}], position: 17533, duration: 34 },
                { id: "eid420", tween: [ "style", "${_firstOil-1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 33 },
                { id: "eid327", tween: [ "style", "${_firstOil-1}", "opacity", '0', { fromValue: '1'}], position: 1947, duration: 53 },
                { id: "eid489", tween: [ "style", "${_firstOil-1}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 33 },
                { id: "eid490", tween: [ "style", "${_firstOil-1}", "opacity", '0', { fromValue: '1'}], position: 6447, duration: 53 },
                { id: "eid543", tween: [ "style", "${_firstOil-1}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 33 },
                { id: "eid544", tween: [ "style", "${_firstOil-1}", "opacity", '0', { fromValue: '1'}], position: 10947, duration: 53 },
                { id: "eid597", tween: [ "style", "${_firstOil-1}", "opacity", '1', { fromValue: '0'}], position: 14500, duration: 33 },
                { id: "eid598", tween: [ "style", "${_firstOil-1}", "opacity", '0', { fromValue: '1'}], position: 15447, duration: 53 },
                { id: "eid388", tween: [ "style", "${_secondOil-6}", "opacity", '1', { fromValue: '0'}], position: 2667, duration: 33 },
                { id: "eid401", tween: [ "style", "${_secondOil-6}", "opacity", '0', { fromValue: '1'}], position: 4133, duration: 34 },
                { id: "eid447", tween: [ "style", "${_secondOil-6}", "opacity", '1', { fromValue: '0'}], position: 7167, duration: 33 },
                { id: "eid448", tween: [ "style", "${_secondOil-6}", "opacity", '0', { fromValue: '1'}], position: 8633, duration: 34 },
                { id: "eid501", tween: [ "style", "${_secondOil-6}", "opacity", '1', { fromValue: '0'}], position: 11667, duration: 33 },
                { id: "eid502", tween: [ "style", "${_secondOil-6}", "opacity", '0', { fromValue: '1'}], position: 13133, duration: 34 },
                { id: "eid555", tween: [ "style", "${_secondOil-6}", "opacity", '1', { fromValue: '0'}], position: 16167, duration: 33 },
                { id: "eid556", tween: [ "style", "${_secondOil-6}", "opacity", '0', { fromValue: '1'}], position: 17633, duration: 34 },
                { id: "eid432", tween: [ "style", "${_firstOil-7}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 33 },
                { id: "eid337", tween: [ "style", "${_firstOil-7}", "opacity", '0', { fromValue: '1'}], position: 2147, duration: 53 },
                { id: "eid471", tween: [ "style", "${_firstOil-7}", "opacity", '1', { fromValue: '0'}], position: 5700, duration: 33 },
                { id: "eid472", tween: [ "style", "${_firstOil-7}", "opacity", '0', { fromValue: '1'}], position: 6647, duration: 53 },
                { id: "eid525", tween: [ "style", "${_firstOil-7}", "opacity", '1', { fromValue: '0'}], position: 10200, duration: 33 },
                { id: "eid526", tween: [ "style", "${_firstOil-7}", "opacity", '0', { fromValue: '1'}], position: 11147, duration: 53 },
                { id: "eid579", tween: [ "style", "${_firstOil-7}", "opacity", '1', { fromValue: '0'}], position: 14700, duration: 33 },
                { id: "eid580", tween: [ "style", "${_firstOil-7}", "opacity", '0', { fromValue: '1'}], position: 15647, duration: 53 },
                { id: "eid363", tween: [ "motion", "${_secondOil-2}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 2567, duration: 1433 },
                { id: "eid458", tween: [ "motion", "${_secondOil-2}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 7033, duration: 1499 },
                { id: "eid512", tween: [ "motion", "${_secondOil-2}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 11533, duration: 1499 },
                { id: "eid566", tween: [ "motion", "${_secondOil-2}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 16033, duration: 1467 },
                { id: "eid340", tween: [ "motion", "${_firstOil-5}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 1133, duration: 947 },
                { id: "eid476", tween: [ "motion", "${_firstOil-5}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 5633, duration: 947 },
                { id: "eid530", tween: [ "motion", "${_firstOil-5}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 10133, duration: 947 },
                { id: "eid584", tween: [ "motion", "${_firstOil-5}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 14633, duration: 947 },
                { id: "eid332", tween: [ "motion", "${_firstOil-3}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 1067, duration: 947 },
                { id: "eid482", tween: [ "motion", "${_firstOil-3}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 5567, duration: 947 },
                { id: "eid536", tween: [ "motion", "${_firstOil-3}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 10067, duration: 947 },
                { id: "eid590", tween: [ "motion", "${_firstOil-3}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 14567, duration: 947 },
                { id: "eid386", tween: [ "style", "${_secondOil-4}", "opacity", '1', { fromValue: '0'}], position: 2600, duration: 33 },
                { id: "eid400", tween: [ "style", "${_secondOil-4}", "opacity", '0', { fromValue: '1'}], position: 4066, duration: 34 },
                { id: "eid453", tween: [ "style", "${_secondOil-4}", "opacity", '1', { fromValue: '0'}], position: 7100, duration: 33 },
                { id: "eid454", tween: [ "style", "${_secondOil-4}", "opacity", '0', { fromValue: '1'}], position: 8566, duration: 34 },
                { id: "eid507", tween: [ "style", "${_secondOil-4}", "opacity", '1', { fromValue: '0'}], position: 11600, duration: 33 },
                { id: "eid508", tween: [ "style", "${_secondOil-4}", "opacity", '0', { fromValue: '1'}], position: 13066, duration: 34 },
                { id: "eid561", tween: [ "style", "${_secondOil-4}", "opacity", '1', { fromValue: '0'}], position: 16100, duration: 33 },
                { id: "eid562", tween: [ "style", "${_secondOil-4}", "opacity", '0', { fromValue: '1'}], position: 17566, duration: 34 },
                { id: "eid371", tween: [ "motion", "${_secondOil-7}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 2733, duration: 1433 },
                { id: "eid443", tween: [ "motion", "${_secondOil-7}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 7200, duration: 1499 },
                { id: "eid497", tween: [ "motion", "${_secondOil-7}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 11700, duration: 1499 },
                { id: "eid551", tween: [ "motion", "${_secondOil-7}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 16200, duration: 1466 },
                { id: "eid338", tween: [ "motion", "${_firstOil-6}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 1167, duration: 947 },
                { id: "eid473", tween: [ "motion", "${_firstOil-6}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 5667, duration: 947 },
                { id: "eid527", tween: [ "motion", "${_firstOil-6}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 10167, duration: 947 },
                { id: "eid581", tween: [ "motion", "${_firstOil-6}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 14667, duration: 947 },
                { id: "eid380", tween: [ "style", "${_secondOil-8}", "opacity", '1', { fromValue: '0'}], position: 2733, duration: 33 },
                { id: "eid397", tween: [ "style", "${_secondOil-8}", "opacity", '0', { fromValue: '1'}], position: 4199, duration: 34 },
                { id: "eid441", tween: [ "style", "${_secondOil-8}", "opacity", '1', { fromValue: '0'}], position: 7233, duration: 33 },
                { id: "eid442", tween: [ "style", "${_secondOil-8}", "opacity", '0', { fromValue: '1'}], position: 8699, duration: 34 },
                { id: "eid495", tween: [ "style", "${_secondOil-8}", "opacity", '1', { fromValue: '0'}], position: 11733, duration: 33 },
                { id: "eid496", tween: [ "style", "${_secondOil-8}", "opacity", '0', { fromValue: '1'}], position: 13199, duration: 34 },
                { id: "eid549", tween: [ "style", "${_secondOil-8}", "opacity", '1', { fromValue: '0'}], position: 16233, duration: 33 },
                { id: "eid550", tween: [ "style", "${_secondOil-8}", "opacity", '0', { fromValue: '1'}], position: 17699, duration: 34 },
                { id: "eid430", tween: [ "style", "${_firstOil-6}", "opacity", '1', { fromValue: '0'}], position: 1167, duration: 33 },
                { id: "eid339", tween: [ "style", "${_firstOil-6}", "opacity", '0', { fromValue: '1'}], position: 2114, duration: 53 },
                { id: "eid474", tween: [ "style", "${_firstOil-6}", "opacity", '1', { fromValue: '0'}], position: 5667, duration: 33 },
                { id: "eid475", tween: [ "style", "${_firstOil-6}", "opacity", '0', { fromValue: '1'}], position: 6614, duration: 53 },
                { id: "eid528", tween: [ "style", "${_firstOil-6}", "opacity", '1', { fromValue: '0'}], position: 10167, duration: 33 },
                { id: "eid529", tween: [ "style", "${_firstOil-6}", "opacity", '0', { fromValue: '1'}], position: 11114, duration: 53 },
                { id: "eid582", tween: [ "style", "${_firstOil-6}", "opacity", '1', { fromValue: '0'}], position: 14667, duration: 33 },
                { id: "eid583", tween: [ "style", "${_firstOil-6}", "opacity", '0', { fromValue: '1'}], position: 15614, duration: 53 },
                { id: "eid373", tween: [ "motion", "${_secondOil-6}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 2700, duration: 1433 },
                { id: "eid446", tween: [ "motion", "${_secondOil-6}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 7167, duration: 1499 },
                { id: "eid500", tween: [ "motion", "${_secondOil-6}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 11667, duration: 1499 },
                { id: "eid554", tween: [ "motion", "${_secondOil-6}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 16167, duration: 1466 },
                { id: "eid392", tween: [ "style", "${_secondOil-7}", "opacity", '1', { fromValue: '0'}], position: 2700, duration: 33 },
                { id: "eid403", tween: [ "style", "${_secondOil-7}", "opacity", '0', { fromValue: '1'}], position: 4166, duration: 34 },
                { id: "eid444", tween: [ "style", "${_secondOil-7}", "opacity", '1', { fromValue: '0'}], position: 7200, duration: 33 },
                { id: "eid445", tween: [ "style", "${_secondOil-7}", "opacity", '0', { fromValue: '1'}], position: 8666, duration: 34 },
                { id: "eid498", tween: [ "style", "${_secondOil-7}", "opacity", '1', { fromValue: '0'}], position: 11700, duration: 33 },
                { id: "eid499", tween: [ "style", "${_secondOil-7}", "opacity", '0', { fromValue: '1'}], position: 13166, duration: 34 },
                { id: "eid552", tween: [ "style", "${_secondOil-7}", "opacity", '1', { fromValue: '0'}], position: 16200, duration: 33 },
                { id: "eid553", tween: [ "style", "${_secondOil-7}", "opacity", '0', { fromValue: '1'}], position: 17666, duration: 34 },
                { id: "eid342", tween: [ "motion", "${_firstOil-9}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 1267, duration: 947 },
                { id: "eid464", tween: [ "motion", "${_firstOil-9}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 5767, duration: 947 },
                { id: "eid518", tween: [ "motion", "${_firstOil-9}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 10267, duration: 947 },
                { id: "eid572", tween: [ "motion", "${_firstOil-9}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 14767, duration: 947 },
                { id: "eid322", tween: [ "motion", "${_firstOil-1}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 1000, duration: 947 },
                { id: "eid488", tween: [ "motion", "${_firstOil-1}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 5500, duration: 947 },
                { id: "eid542", tween: [ "motion", "${_firstOil-1}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 10000, duration: 947 },
                { id: "eid596", tween: [ "motion", "${_firstOil-1}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 14500, duration: 947 },
                { id: "eid422", tween: [ "style", "${_firstOil-2}", "opacity", '1', { fromValue: '0'}], position: 1033, duration: 34 },
                { id: "eid329", tween: [ "style", "${_firstOil-2}", "opacity", '0', { fromValue: '1'}], position: 1980, duration: 53 },
                { id: "eid486", tween: [ "style", "${_firstOil-2}", "opacity", '1', { fromValue: '0'}], position: 5533, duration: 34 },
                { id: "eid487", tween: [ "style", "${_firstOil-2}", "opacity", '0', { fromValue: '1'}], position: 6480, duration: 53 },
                { id: "eid540", tween: [ "style", "${_firstOil-2}", "opacity", '1', { fromValue: '0'}], position: 10033, duration: 34 },
                { id: "eid541", tween: [ "style", "${_firstOil-2}", "opacity", '0', { fromValue: '1'}], position: 10980, duration: 53 },
                { id: "eid594", tween: [ "style", "${_firstOil-2}", "opacity", '1', { fromValue: '0'}], position: 14533, duration: 34 },
                { id: "eid595", tween: [ "style", "${_firstOil-2}", "opacity", '0', { fromValue: '1'}], position: 15480, duration: 53 },
                { id: "eid367", tween: [ "motion", "${_secondOil-3}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 2600, duration: 1433 },
                { id: "eid455", tween: [ "motion", "${_secondOil-3}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 7067, duration: 1499 },
                { id: "eid509", tween: [ "motion", "${_secondOil-3}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 11567, duration: 1499 },
                { id: "eid563", tween: [ "motion", "${_secondOil-3}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 16067, duration: 1467 },
                { id: "eid436", tween: [ "style", "${_firstOil-9}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 33 },
                { id: "eid343", tween: [ "style", "${_firstOil-9}", "opacity", '0', { fromValue: '1'}], position: 2214, duration: 53 },
                { id: "eid465", tween: [ "style", "${_firstOil-9}", "opacity", '1', { fromValue: '0'}], position: 5767, duration: 33 },
                { id: "eid466", tween: [ "style", "${_firstOil-9}", "opacity", '0', { fromValue: '1'}], position: 6714, duration: 53 },
                { id: "eid519", tween: [ "style", "${_firstOil-9}", "opacity", '1', { fromValue: '0'}], position: 10267, duration: 33 },
                { id: "eid520", tween: [ "style", "${_firstOil-9}", "opacity", '0', { fromValue: '1'}], position: 11214, duration: 53 },
                { id: "eid573", tween: [ "style", "${_firstOil-9}", "opacity", '1', { fromValue: '0'}], position: 14767, duration: 33 },
                { id: "eid574", tween: [ "style", "${_firstOil-9}", "opacity", '0', { fromValue: '1'}], position: 15714, duration: 53 },
                { id: "eid355", tween: [ "motion", "${_secondOil-1}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 2533, duration: 1433 },
                { id: "eid461", tween: [ "motion", "${_secondOil-1}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 7000, duration: 1499 },
                { id: "eid515", tween: [ "motion", "${_secondOil-1}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 11500, duration: 1499 },
                { id: "eid569", tween: [ "motion", "${_secondOil-1}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 16000, duration: 1466 },
                { id: "eid394", tween: [ "style", "${_secondOil-1}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 33 },
                { id: "eid404", tween: [ "style", "${_secondOil-1}", "opacity", '0', { fromValue: '1'}], position: 3966, duration: 34 },
                { id: "eid462", tween: [ "style", "${_secondOil-1}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 33 },
                { id: "eid463", tween: [ "style", "${_secondOil-1}", "opacity", '0', { fromValue: '1'}], position: 8466, duration: 34 },
                { id: "eid516", tween: [ "style", "${_secondOil-1}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 33 },
                { id: "eid517", tween: [ "style", "${_secondOil-1}", "opacity", '0', { fromValue: '1'}], position: 12966, duration: 34 },
                { id: "eid570", tween: [ "style", "${_secondOil-1}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 33 },
                { id: "eid571", tween: [ "style", "${_secondOil-1}", "opacity", '0', { fromValue: '1'}], position: 17466, duration: 34 },
                { id: "eid384", tween: [ "style", "${_secondOil-5}", "opacity", '1', { fromValue: '0'}], position: 2633, duration: 33 },
                { id: "eid399", tween: [ "style", "${_secondOil-5}", "opacity", '0', { fromValue: '1'}], position: 4099, duration: 34 },
                { id: "eid450", tween: [ "style", "${_secondOil-5}", "opacity", '1', { fromValue: '0'}], position: 7133, duration: 33 },
                { id: "eid451", tween: [ "style", "${_secondOil-5}", "opacity", '0', { fromValue: '1'}], position: 8599, duration: 34 },
                { id: "eid504", tween: [ "style", "${_secondOil-5}", "opacity", '1', { fromValue: '0'}], position: 11633, duration: 33 },
                { id: "eid505", tween: [ "style", "${_secondOil-5}", "opacity", '0', { fromValue: '1'}], position: 13099, duration: 34 },
                { id: "eid558", tween: [ "style", "${_secondOil-5}", "opacity", '1', { fromValue: '0'}], position: 16133, duration: 33 },
                { id: "eid559", tween: [ "style", "${_secondOil-5}", "opacity", '0', { fromValue: '1'}], position: 17599, duration: 34 },
                { id: "eid390", tween: [ "style", "${_secondOil-9}", "opacity", '1', { fromValue: '0'}], position: 2767, duration: 33 },
                { id: "eid402", tween: [ "style", "${_secondOil-9}", "opacity", '0', { fromValue: '1'}], position: 4233, duration: 34 },
                { id: "eid438", tween: [ "style", "${_secondOil-9}", "opacity", '1', { fromValue: '0'}], position: 7267, duration: 33 },
                { id: "eid439", tween: [ "style", "${_secondOil-9}", "opacity", '0', { fromValue: '1'}], position: 8733, duration: 34 },
                { id: "eid492", tween: [ "style", "${_secondOil-9}", "opacity", '1', { fromValue: '0'}], position: 11767, duration: 33 },
                { id: "eid493", tween: [ "style", "${_secondOil-9}", "opacity", '0', { fromValue: '1'}], position: 13233, duration: 34 },
                { id: "eid546", tween: [ "style", "${_secondOil-9}", "opacity", '1', { fromValue: '0'}], position: 16267, duration: 33 },
                { id: "eid547", tween: [ "style", "${_secondOil-9}", "opacity", '0', { fromValue: '1'}], position: 17733, duration: 34 },
                { id: "eid428", tween: [ "style", "${_firstOil-5}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 34 },
                { id: "eid341", tween: [ "style", "${_firstOil-5}", "opacity", '0', { fromValue: '1'}], position: 2080, duration: 53 },
                { id: "eid477", tween: [ "style", "${_firstOil-5}", "opacity", '1', { fromValue: '0'}], position: 5633, duration: 34 },
                { id: "eid478", tween: [ "style", "${_firstOil-5}", "opacity", '0', { fromValue: '1'}], position: 6580, duration: 53 },
                { id: "eid531", tween: [ "style", "${_firstOil-5}", "opacity", '1', { fromValue: '0'}], position: 10133, duration: 34 },
                { id: "eid532", tween: [ "style", "${_firstOil-5}", "opacity", '0', { fromValue: '1'}], position: 11080, duration: 53 },
                { id: "eid585", tween: [ "style", "${_firstOil-5}", "opacity", '1', { fromValue: '0'}], position: 14633, duration: 34 },
                { id: "eid586", tween: [ "style", "${_firstOil-5}", "opacity", '0', { fromValue: '1'}], position: 15580, duration: 53 },
                { id: "eid369", tween: [ "motion", "${_secondOil-8}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 2767, duration: 1433 },
                { id: "eid440", tween: [ "motion", "${_secondOil-8}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 7233, duration: 1499 },
                { id: "eid494", tween: [ "motion", "${_secondOil-8}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 11733, duration: 1499 },
                { id: "eid548", tween: [ "motion", "${_secondOil-8}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 16233, duration: 1466 },
                { id: "eid336", tween: [ "motion", "${_firstOil-7}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 1200, duration: 947 },
                { id: "eid470", tween: [ "motion", "${_firstOil-7}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 5700, duration: 947 },
                { id: "eid524", tween: [ "motion", "${_firstOil-7}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 10200, duration: 947 },
                { id: "eid578", tween: [ "motion", "${_firstOil-7}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 14700, duration: 947 },
                { id: "eid365", tween: [ "motion", "${_secondOil-4}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 2634, duration: 1433 },
                { id: "eid452", tween: [ "motion", "${_secondOil-4}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 7100, duration: 1499 },
                { id: "eid506", tween: [ "motion", "${_secondOil-4}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 11600, duration: 1499 },
                { id: "eid560", tween: [ "motion", "${_secondOil-4}", [[147, 271, 0, 0],[147, 45.85, 0, -77.19, 0, -77.19],[175.65, 22.46, 0, 0, 0, 0],[532.38, 22.46, 119.3, 1.75, 119.3, 1.75],[566.87, 51.69, 0, 0, 0, 0],[566.87, 583, 1.75, 80.7, 1.75, 80.7],[589.09, 604.64, 0, 0, 0, 0],[621.83, 604.64, 0, 0]]], position: 16100, duration: 1467 },
                { id: "eid434", tween: [ "style", "${_firstOil-8}", "opacity", '1', { fromValue: '0'}], position: 1233, duration: 34 },
                { id: "eid335", tween: [ "style", "${_firstOil-8}", "opacity", '0', { fromValue: '1'}], position: 2180, duration: 53 },
                { id: "eid468", tween: [ "style", "${_firstOil-8}", "opacity", '1', { fromValue: '0'}], position: 5733, duration: 34 },
                { id: "eid469", tween: [ "style", "${_firstOil-8}", "opacity", '0', { fromValue: '1'}], position: 6680, duration: 53 },
                { id: "eid522", tween: [ "style", "${_firstOil-8}", "opacity", '1', { fromValue: '0'}], position: 10233, duration: 34 },
                { id: "eid523", tween: [ "style", "${_firstOil-8}", "opacity", '0', { fromValue: '1'}], position: 11180, duration: 53 },
                { id: "eid576", tween: [ "style", "${_firstOil-8}", "opacity", '1', { fromValue: '0'}], position: 14733, duration: 34 },
                { id: "eid577", tween: [ "style", "${_firstOil-8}", "opacity", '0', { fromValue: '1'}], position: 15680, duration: 53 },
                { id: "eid382", tween: [ "style", "${_secondOil-2}", "opacity", '1', { fromValue: '0'}], position: 2533, duration: 33 },
                { id: "eid398", tween: [ "style", "${_secondOil-2}", "opacity", '0', { fromValue: '1'}], position: 3999, duration: 34 },
                { id: "eid459", tween: [ "style", "${_secondOil-2}", "opacity", '1', { fromValue: '0'}], position: 7033, duration: 33 },
                { id: "eid460", tween: [ "style", "${_secondOil-2}", "opacity", '0', { fromValue: '1'}], position: 8499, duration: 34 },
                { id: "eid513", tween: [ "style", "${_secondOil-2}", "opacity", '1', { fromValue: '0'}], position: 11533, duration: 33 },
                { id: "eid514", tween: [ "style", "${_secondOil-2}", "opacity", '0', { fromValue: '1'}], position: 12999, duration: 34 },
                { id: "eid567", tween: [ "style", "${_secondOil-2}", "opacity", '1', { fromValue: '0'}], position: 16033, duration: 33 },
                { id: "eid568", tween: [ "style", "${_secondOil-2}", "opacity", '0', { fromValue: '1'}], position: 17499, duration: 34 },
                { id: "eid330", tween: [ "motion", "${_firstOil-4}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 1100, duration: 947 },
                { id: "eid479", tween: [ "motion", "${_firstOil-4}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 5600, duration: 947 },
                { id: "eid533", tween: [ "motion", "${_firstOil-4}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 10100, duration: 947 },
                { id: "eid587", tween: [ "motion", "${_firstOil-4}", [[622, 654, 0, 0],[44.14, 654, -63.16, -1.58, -63.16, -1.58],[24.12, 626.14, 0, 0, 0, 0],[24.12, 518.99, 1.58, -37.89, 1.58, -37.89],[34.83, 497.55, 0, 0, 0, 0],[81.96, 450.83, 0, 0]]], position: 14600, duration: 947 }            ]
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
