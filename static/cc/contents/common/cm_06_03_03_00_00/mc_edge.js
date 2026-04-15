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
                rect: ['203px', '57px','269px','57px','auto', 'auto'],
                text: "정상코일",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['709px', '57px','269px','57px','auto', 'auto'],
                text: "고장코일",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['1172px', '454px','468px','160px','auto', 'auto'],
                text: "시동불능 현상 발생<br>시동시 부조현상 발생<br>급가속 불량현상 발생 <br>엔진 부조현상 발생<br>",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1171px', '387px','572px','57px','auto', 'auto'],
                text: "점화코일 고장으로 인한 증상",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'coil_bg01',
                type: 'image',
                rect: ['115px', '132px','374px','802px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"coil_bg01.png",'0px','0px']
            },
            {
                id: 'coil_bg02',
                type: 'image',
                rect: ['666px', '128px','373px','806px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"coil_bg02.png",'0px','0px']
            },
            {
                id: 'red_mov2',
                type: 'rect',
                rect: ['750', '822','auto','auto','auto', 'auto']
            },
            {
                id: 'red_mov2Copy',
                type: 'rect',
                rect: ['750', '822','auto','auto','auto', 'auto']
            },
            {
                id: 'red_mov2Copy2',
                type: 'rect',
                rect: ['750', '822','auto','auto','auto', 'auto']
            },
            {
                id: 'blue_mov',
                type: 'rect',
                rect: ['167', '788','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'red_mov2Copy2',
                symbolName: 'red_mov',
                autoPlay: {

                }
            },
            {
                id: 'red_mov2',
                symbolName: 'red_mov',
                autoPlay: {

                }
            },
            {
                id: 'blue_mov',
                symbolName: 'blue_mov',
                autoPlay: {

                }
            },
            {
                id: 'red_mov2Copy',
                symbolName: 'red_mov',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '57px'],
                ["style", "width", '269px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '203px'],
                ["style", "font-size", '45px']
            ],
            "${_red_mov2Copy2}": [
                ["style", "top", '158px'],
                ["transform", "scaleY", '0.20056'],
                ["transform", "rotateZ", '25deg'],
                ["transform", "scaleX", '1.40411'],
                ["style", "left", '774px']
            ],
            "${_coil_bg01}": [
                ["style", "top", '132px'],
                ["style", "left", '115px']
            ],
            "${_red_mov2Copy}": [
                ["style", "top", '445px'],
                ["transform", "scaleY", '0.11864'],
                ["style", "left", '764px'],
                ["transform", "rotateZ", '-16deg']
            ],
            "${_Text}": [
                ["style", "top", '387px'],
                ["style", "font-size", '40px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1171px'],
                ["style", "width", '572px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '57px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '45px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '709px'],
                ["style", "width", '269px']
            ],
            "${_coil_bg02}": [
                ["style", "left", '666px'],
                ["style", "top", '128px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy}": [
                ["style", "top", '454px'],
                ["style", "width", '468px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1172px'],
                ["style", "font-size", '35px']
            ],
            "${_red_mov2}": [
                ["style", "left", '748px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1115,
            autoPlay: true,
            timeline: [
                { id: "eid60", tween: [ "style", "${_red_mov2}", "left", '748px', { fromValue: '748px'}], position: 750, duration: 0 },
                { id: "eid53", tween: [ "style", "${_red_mov2Copy2}", "top", '158px', { fromValue: '158px'}], position: 750, duration: 0 },
                { id: "eid54", tween: [ "style", "${_red_mov2Copy2}", "left", '774px', { fromValue: '774px'}], position: 750, duration: 0 },
                { id: "eid57", tween: [ "transform", "${_red_mov2Copy2}", "scaleY", '0.20056', { fromValue: '0.20056'}], position: 750, duration: 0 },
                { id: "eid44", tween: [ "style", "${_red_mov2Copy}", "top", '445px', { fromValue: '445px'}], position: 750, duration: 0 },
                { id: "eid38", tween: [ "transform", "${_red_mov2Copy}", "scaleY", '0.11864', { fromValue: '0.11864'}], position: 750, duration: 0 },
                { id: "eid45", tween: [ "style", "${_red_mov2Copy}", "left", '764px', { fromValue: '764px'}], position: 750, duration: 0 },
                { id: "eid56", tween: [ "transform", "${_red_mov2Copy2}", "scaleX", '1.40411', { fromValue: '1.40411'}], position: 750, duration: 0 },
                { id: "eid46", tween: [ "transform", "${_red_mov2Copy}", "rotateZ", '-16deg', { fromValue: '-16deg'}], position: 750, duration: 0 },
                { id: "eid55", tween: [ "transform", "${_red_mov2Copy2}", "rotateZ", '25deg', { fromValue: '25deg'}], position: 750, duration: 0 },
                { id: "eid32", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blue_mov}', [] ], ""], position: 0 },
                { id: "eid42", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_red_mov2Copy}', [] ], ""], position: 0 },
                { id: "eid58", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_red_mov2Copy2}', [] ], ""], position: 0 },
                { id: "eid33", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_red_mov2}', [] ], ""], position: 0 },
                { id: "eid34", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_blue_mov}', [] ], ""], position: 250 },
                { id: "eid35", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_red_mov2}', [] ], ""], position: 500 },
                { id: "eid43", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_red_mov2Copy}', [] ], ""], position: 650.98725763785 },
                { id: "eid59", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_red_mov2Copy2}', [] ], ""], position: 864.60626659215 }            ]
        }
    }
},
"blue_mov": {
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
                    id: 'blue_park_01',
                    type: 'image',
                    rect: ['37px', '37px', '146px', '146px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blue_park_01.png', '0px', '0px']
                },
                {
                    id: 'blue_park_01_1',
                    type: 'image',
                    rect: ['10px', '16px', '202px', '202px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blue_park_01_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blue_park_01}": [
                ["style", "top", '37px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '37px']
            ],
            "${symbolSelector}": [
                ["style", "height", '219px'],
                ["style", "width", '219px']
            ],
            "${_blue_park_01_1}": [
                ["style", "top", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '10px']
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
                { id: "eid10", tween: [ "style", "${_blue_park_01_1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 27 },
                { id: "eid12", tween: [ "style", "${_blue_park_01_1}", "opacity", '0', { fromValue: '1'}], position: 84, duration: 166 },
                { id: "eid6", tween: [ "style", "${_blue_park_01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 122 },
                { id: "eid8", tween: [ "style", "${_blue_park_01}", "opacity", '0', { fromValue: '1'}], position: 122, duration: 128 },
                { id: "eid4", tween: [ "transform", "${_blue_park_01}", "scaleY", '1.5', { fromValue: '0.5'}], position: 0, duration: 250 },
                { id: "eid2", tween: [ "transform", "${_blue_park_01}", "scaleX", '1.5', { fromValue: '0.5'}], position: 0, duration: 250 }            ]
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
                ["style", "opacity", '1'],
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
})(jQuery, AdobeEdge, "EDGE-5422256");
