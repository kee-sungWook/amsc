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
                id: 'TextCopy3',
                type: 'text',
                rect: ['206px', '93px','auto','auto','auto', 'auto'],
                text: "정상플러그",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['650px', '88px','auto','auto','auto', 'auto'],
                text: "오염플러그",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['1087px', '379px','468px','160px','auto', 'auto'],
                text: "엔진부조 현상 발생<br>매연발생<br>연료소모가 심해짐",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1086px', '312px','652px','57px','auto', 'auto'],
                text: "점화플러그 오염으로 인한 증상",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'spark_01',
                type: 'image',
                rect: ['155px', '365px','363px','427px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spark_01.png",'0px','0px']
            },
            {
                id: 'spark_02',
                type: 'image',
                rect: ['629px', '354px','370px','437px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spark_02.png",'0px','0px']
            },
            {
                id: 'saprk_mov_02',
                type: 'rect',
                rect: ['845', '518','auto','auto','auto', 'auto']
            },
            {
                id: 'saprk_mov_02Copy2',
                type: 'rect',
                rect: ['845', '518','auto','auto','auto', 'auto']
            },
            {
                id: 'spark_mov_01',
                type: 'rect',
                rect: ['201', '411','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'saprk_mov_02Copy2',
                symbolName: 'saprk_mov_02',
                autoPlay: {

                }
            },
            {
                id: 'spark_mov_01',
                symbolName: 'spark_mov_01',
                autoPlay: {

                }
            },
            {
                id: 'saprk_mov_02',
                symbolName: 'saprk_mov_02',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '93px'],
                ["style", "left", '206px'],
                ["style", "font-size", '45px']
            ],
            "${_saprk_mov_02Copy2}": [
                ["style", "top", '554px'],
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '705px']
            ],
            "${_spark_02}": [
                ["style", "left", '629px'],
                ["style", "top", '354px']
            ],
            "${_TextCopy2}": [
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "top", '88px'],
                ["style", "left", '650px'],
                ["style", "font-size", '45px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text}": [
                ["style", "top", '312px'],
                ["style", "font-size", '40px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1086px'],
                ["style", "width", '652px']
            ],
            "${_TextCopy}": [
                ["style", "top", '379px'],
                ["style", "width", '468px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1087px'],
                ["style", "font-size", '35px']
            ],
            "${_spark_01}": [
                ["style", "top", '365px'],
                ["style", "left", '155px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 988,
            autoPlay: true,
            timeline: [
                { id: "eid18", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_spark_mov_01}', [] ], ""], position: 0 },
                { id: "eid28", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_saprk_mov_02Copy2}', [] ], ""], position: 0 },
                { id: "eid20", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_saprk_mov_02}', [] ], ""], position: 0 },
                { id: "eid21", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_saprk_mov_02}', [] ], ""], position: 404 },
                { id: "eid19", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_spark_mov_01}', [] ], ""], position: 500 },
                { id: "eid29", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_saprk_mov_02Copy2}', [] ], ""], position: 695.83081020942 }            ]
        }
    }
},
"saprk_mov_02": {
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
                    id: 'spark_mov_02',
                    type: 'image',
                    rect: ['0px', '0px', '115px', '100px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark_mov_02.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spark_mov_02}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '115px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 292,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "style", "${_spark_mov_02}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 171, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_spark_mov_02}", "opacity", '0', { fromValue: '1'}], position: 171, duration: 121, easing: "easeOutQuad" }            ]
        }
    }
},
"spark_mov_01": {
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
                    id: 'spark_mov_01',
                    type: 'image',
                    rect: ['4px', '29px', '228px', '198px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark_mov_01.png', '0px', '0px']
                },
                {
                    id: 'one',
                    type: 'image',
                    rect: ['80px', '38px', '113px', '113px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/one.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_one}": [
                ["style", "top", '38px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '80px']
            ],
            "${_spark_mov_01}": [
                ["style", "top", '20px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '238px'],
                ["style", "width", '274px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 408,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "transform", "${_spark_mov_01}", "scaleY", '1.2', { fromValue: '0.5'}], position: 0, duration: 250 },
                { id: "eid9", tween: [ "style", "${_spark_mov_01}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_spark_mov_01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 126, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_spark_mov_01}", "opacity", '0', { fromValue: '1'}], position: 182, duration: 68 },
                { id: "eid2", tween: [ "transform", "${_spark_mov_01}", "scaleX", '1.2', { fromValue: '0.5'}], position: 0, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_one}", "scaleY", '3', { fromValue: '1'}], position: 158, duration: 250, easing: "easeOutQuad" },
                { id: "eid7", tween: [ "style", "${_spark_mov_01}", "left", '23px', { fromValue: '15px'}], position: 0, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_one}", "scaleX", '3', { fromValue: '1'}], position: 158, duration: 250, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_one}", "opacity", '1', { fromValue: '0'}], position: 158, duration: 122, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "style", "${_one}", "opacity", '0', { fromValue: '1'}], position: 280, duration: 128, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-22792569");
