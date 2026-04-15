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
                rect: ['385px', '66px','269px','57px','auto', 'auto'],
                text: "정상코일",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['1165px', '66px','269px','57px','auto', 'auto'],
                text: "단선케이블",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['739px', '924px','468px','124px','auto', 'auto'],
                text: "공회전시 엔진부조 발생<br>시동시 엔진부조 발생<br>매연과다 발생",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['638px', '857px','572px','44px','auto', 'auto'],
                text: "케이블 단선으로  인한 증상",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'cable_01',
                type: 'image',
                rect: ['268px', '136px','527px','682px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cable_01.png",'0px','0px']
            },
            {
                id: 'cable_02',
                type: 'image',
                rect: ['976px', '134px','529px','684px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cable_02.png",'0px','0px']
            },
            {
                id: 'red_mov',
                type: 'rect',
                rect: ['1072', '762','auto','auto','auto', 'auto']
            },
            {
                id: 'red_movCopy2',
                type: 'rect',
                rect: ['1072', '762','auto','auto','auto', 'auto']
            },
            {
                id: 'red_movCopy3',
                type: 'rect',
                rect: ['1072', '762','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'red_movCopy3',
                symbolName: 'red_mov'
            },
            {
                id: 'red_movCopy2',
                symbolName: 'red_mov'
            },
            {
                id: 'red_mov',
                symbolName: 'red_mov'
            }
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '66px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '45px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '385px'],
                ["style", "width", '269px']
            ],
            "${_red_mov}": [
                ["style", "top", '686px'],
                ["transform", "scaleY", '0.14124'],
                ["style", "left", '993px'],
                ["transform", "rotateZ", '-28deg']
            ],
            "${_red_movCopy3}": [
                ["style", "top", '170px'],
                ["transform", "scaleY", '0.14124'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1.24859'],
                ["style", "left", '1088px']
            ],
            "${_cable_02}": [
                ["style", "left", '976px'],
                ["style", "top", '134px']
            ],
            "${_Text}": [
                ["style", "top", '857px'],
                ["style", "text-align", 'center'],
                ["style", "width", '572px'],
                ["style", "height", '44px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '638px'],
                ["style", "font-size", '40px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '66px'],
                ["style", "text-align", 'center'],
                ["style", "width", '269px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '1165px'],
                ["style", "font-size", '45px']
            ],
            "${_cable_01}": [
                ["style", "left", '268px'],
                ["style", "top", '136px']
            ],
            "${_red_movCopy2}": [
                ["style", "top", '408px'],
                ["transform", "scaleY", '0.21186'],
                ["transform", "rotateZ", '58deg'],
                ["transform", "scaleX", '1.5'],
                ["style", "left", '966px']
            ],
            "${_TextCopy}": [
                ["style", "top", '924px'],
                ["style", "font-size", '35px'],
                ["style", "height", '124px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '739px'],
                ["style", "width", '468px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid25", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_red_mov}', [] ], ""], position: 0 },
                { id: "eid45", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_red_movCopy3}', [] ], ""], position: 0 },
                { id: "eid46", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_red_movCopy2}', [] ], ""], position: 0 },
                { id: "eid26", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_red_mov}', [] ], ""], position: 1250 },
                { id: "eid47", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_red_movCopy2}', [] ], ""], position: 1580 },
                { id: "eid48", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_red_movCopy3}', [] ], ""], position: 2000 }            ]
        }
    }
},
"red_mov": {
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
                    id: 'red_park_01',
                    type: 'image',
                    rect: ['0px', '0px', '177px', '177px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/red_park_01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '177px'],
                ["style", "width", '177px']
            ],
            "${_red_park_01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
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
                { id: "eid18", tween: [ "transform", "${_red_park_01}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 250 },
                { id: "eid53", tween: [ "style", "${_red_park_01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 11 },
                { id: "eid21", tween: [ "style", "${_red_park_01}", "opacity", '0', { fromValue: '1'}], position: 122, duration: 128 },
                { id: "eid20", tween: [ "transform", "${_red_park_01}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 250 },
                { id: "eid16", tween: [ "transform", "${_red_park_01}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 0, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-9927029");
