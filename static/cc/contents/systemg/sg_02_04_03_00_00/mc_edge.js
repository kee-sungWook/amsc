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
                id: 'dif_c8',
                type: 'image',
                tag: 'img',
                rect: ['840', '411','249','183','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dif_c8.png"]
            },
            {
                id: 'dif_c',
                type: 'rect',
                rect: ['644', '512','auto','auto','auto', 'auto']
            },
            {
                id: 'cv_joint',
                type: 'rect',
                rect: ['1017px', '495px','auto','auto','auto', 'auto']
            },
            {
                id: 'driveShaft',
                type: 'image',
                tag: 'img',
                rect: ['15', '569','642','250','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"driveShaft.png"]
            },
            {
                id: 'SEL_cv_joint3',
                type: 'image',
                tag: 'img',
                rect: ['1044', '523','265','176','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SEL_cf_joint3.png"]
            },
            {
                id: 'SEL_cv_joint2',
                type: 'image',
                tag: 'img',
                rect: ['1278', '648','98','94','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SEL_cv_joint2.png"]
            },
            {
                id: 'SEL_cv_joint1',
                type: 'image',
                tag: 'img',
                rect: ['1346', '703','69','65','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SEL_cv_joint1.png"]
            }],
            symbolInstances: [
            {
                id: 'dif_c',
                symbolName: 'dif_c',
                autoPlay: {

                }
            },
            {
                id: 'cv_joint',
                symbolName: 'cv_joint',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_SEL_cv_joint3}": [
                ["style", "opacity", '0']
            ],
            "${_driveShaft}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '255px']
            ],
            "${_dif_c8}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_SEL_cv_joint2}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cv_joint}": [
                ["style", "top", '495px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '1017px']
            ],
            "${_SEL_cv_joint1}": [
                ["style", "opacity", '0']
            ],
            "${_dif_c}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1433,
            autoPlay: true,
            timeline: [
                { id: "eid56", tween: [ "transform", "${_driveShaft}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid52", tween: [ "transform", "${_dif_c8}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid48", tween: [ "style", "${_driveShaft}", "left", '15px', { fromValue: '255px'}], position: 433, duration: 333, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "style", "${_SEL_cv_joint1}", "opacity", '1', { fromValue: '0'}], position: 1167, duration: 266, easing: "easeInQuad" },
                { id: "eid62", tween: [ "transform", "${_dif_c}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid72", tween: [ "style", "${_dif_c}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid54", tween: [ "transform", "${_dif_c8}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid68", tween: [ "style", "${_dif_c8}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid74", tween: [ "style", "${_cv_joint}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid70", tween: [ "style", "${_driveShaft}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid58", tween: [ "transform", "${_driveShaft}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid88", tween: [ "style", "${_SEL_cv_joint2}", "opacity", '1', { fromValue: '0'}], position: 1167, duration: 266, easing: "easeInQuad" },
                { id: "eid60", tween: [ "transform", "${_dif_c}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid64", tween: [ "transform", "${_cv_joint}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid66", tween: [ "transform", "${_cv_joint}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeInQuad" },
                { id: "eid50", tween: [ "style", "${_driveShaft}", "top", '569px', { fromValue: '501px'}], position: 433, duration: 333, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_SEL_cv_joint3}", "opacity", '1', { fromValue: '0'}], position: 1167, duration: 266, easing: "easeInQuad" },
                { id: "eid75", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_cv_joint}', [] ], ""], position: 400 },
                { id: "eid76", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_dif_c}', [] ], ""], position: 466.66666666667 }            ]
        }
    }
},
"dif_c": {
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
                    rect: ['195px', '24px', '34', '41', 'auto', 'auto'],
                    id: 'dif_c7',
                    fill: ['rgba(0,0,0,0)', 'images/dif_c7.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['176px', '37px', '23', '27', 'auto', 'auto'],
                    id: 'dif_c6',
                    fill: ['rgba(0,0,0,0)', 'images/dif_c6.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['150px', '39px', '30', '36', 'auto', 'auto'],
                    id: 'dif_c5',
                    fill: ['rgba(0,0,0,0)', 'images/dif_c5.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['128px', '42px', '27', '42', 'auto', 'auto'],
                    id: 'dif_c4',
                    fill: ['rgba(0,0,0,0)', 'images/dif_c4.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['102px', '54px', '29', '35', 'auto', 'auto'],
                    id: 'dif_c3',
                    fill: ['rgba(0,0,0,0)', 'images/dif_c3.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['43px', '44px', '63', '75', 'auto', 'auto'],
                    id: 'dif_c2',
                    fill: ['rgba(0,0,0,0)', 'images/dif_c2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['13px', '81px', '28', '33', 'auto', 'auto'],
                    id: 'dif_c1',
                    fill: ['rgba(0,0,0,0)', 'images/dif_c1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dif_c4}": [
                ["style", "left", '230px'],
                ["style", "top", '18px']
            ],
            "${_dif_c2}": [
                ["style", "left", '181px'],
                ["style", "top", '6px']
            ],
            "${_dif_c6}": [
                ["style", "left", '236px'],
                ["style", "top", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '138px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '230px']
            ],
            "${_dif_c3}": [
                ["style", "left", '238px'],
                ["style", "top", '18px']
            ],
            "${_dif_c1}": [
                ["style", "left", '193px'],
                ["style", "top", '27px']
            ],
            "${_dif_c5}": [
                ["style", "left", '233px'],
                ["style", "top", '18px']
            ],
            "${_dif_c7}": [
                ["style", "left", '236px'],
                ["style", "top", '16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 695,
            autoPlay: false,
            timeline: [
                { id: "eid40", tween: [ "style", "${_dif_c2}", "left", '43px', { fromValue: '181px'}], position: 67, duration: 295, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_dif_c6}", "top", '37px', { fromValue: '25px'}], position: 333, duration: 295, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_dif_c6}", "left", '176px', { fromValue: '236px'}], position: 333, duration: 295, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_dif_c5}", "left", '150px', { fromValue: '233px'}], position: 267, duration: 295, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_dif_c5}", "top", '39px', { fromValue: '18px'}], position: 267, duration: 295, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_dif_c4}", "top", '42px', { fromValue: '18px'}], position: 200, duration: 295, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_dif_c4}", "left", '128px', { fromValue: '230px'}], position: 200, duration: 295, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_dif_c7}", "left", '195px', { fromValue: '236px'}], position: 400, duration: 295, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_dif_c1}", "left", '13px', { fromValue: '193px'}], position: 5, duration: 295, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_dif_c3}", "top", '54px', { fromValue: '18px'}], position: 133, duration: 295, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_dif_c1}", "top", '81px', { fromValue: '27px'}], position: 5, duration: 295, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_dif_c3}", "left", '102px', { fromValue: '238px'}], position: 133, duration: 295, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_dif_c2}", "top", '44px', { fromValue: '6px'}], position: 67, duration: 295, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_dif_c7}", "top", '24px', { fromValue: '16px'}], position: 400, duration: 295, easing: "easeOutQuad" }            ]
        }
    }
},
"cv_joint": {
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
                    rect: ['27px', '28px', '265', '176', 'auto', 'auto'],
                    id: 'cv_joint3',
                    fill: ['rgba(0,0,0,0)', 'images/cf_joint3.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['261px', '153px', '98', '94', 'auto', 'auto'],
                    id: 'cv_joint2',
                    fill: ['rgba(0,0,0,0)', 'images/cv_joint2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['329px', '208px', '69', '65', 'auto', 'auto'],
                    id: 'cv_joint1',
                    fill: ['rgba(0,0,0,0)', 'images/cv_joint1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cv_joint1}": [
                ["style", "left", '187px'],
                ["style", "top", '117px']
            ],
            "${_cv_joint3}": [
                ["style", "left", '-16px'],
                ["style", "top", '0px']
            ],
            "${_cv_joint2}": [
                ["style", "left", '158px'],
                ["style", "top", '88px']
            ],
            "${symbolSelector}": [
                ["style", "height", '285px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '405px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 533,
            autoPlay: false,
            timeline: [
                { id: "eid16", tween: [ "style", "${_cv_joint1}", "left", '329px', { fromValue: '187px'}], position: 0, duration: 333, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_cv_joint3}", "left", '27px', { fromValue: '-16px'}], position: 200, duration: 333, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_cv_joint3}", "top", '28px', { fromValue: '0px'}], position: 200, duration: 333, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_cv_joint1}", "top", '208px', { fromValue: '117px'}], position: 0, duration: 333, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_cv_joint2}", "left", '261px', { fromValue: '158px'}], position: 100, duration: 333, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_cv_joint2}", "top", '153px', { fromValue: '88px'}], position: 100, duration: 333, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-4037954");
