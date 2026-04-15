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
                id: 'drum01',
                type: 'image',
                tag: 'img',
                rect: ['837', '144','301','330','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drum01.png"]
            },
            {
                id: 'drum02',
                type: 'image',
                tag: 'img',
                rect: ['63', '153','754','759','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drum02.png"]
            },
            {
                id: 'oil_mov01',
                type: 'rect',
                rect: ['993', '439','auto','auto','auto', 'auto']
            },
            {
                id: 'oil_mov02',
                type: 'rect',
                rect: ['908', '254','auto','auto','auto', 'auto']
            },
            {
                id: 'oil_mov02Copy',
                type: 'rect',
                rect: ['908', '254','auto','auto','auto', 'auto']
            },
            {
                id: 'oil_mov03',
                type: 'rect',
                rect: ['952', '275','auto','auto','auto', 'auto']
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['1201px', '863px','468px','160px','auto', 'auto'],
                text: "변속시 변속 불량<br>베어링 소음발생<br>변속 불량으로 운행 불가능",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1200px', '796px','652px','57px','auto', 'auto'],
                text: "베어링 파손으로 인한 증상",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [
            {
                id: 'oil_mov02',
                symbolName: 'oil_mov02',
                autoPlay: {

                }
            },
            {
                id: 'oil_mov02Copy',
                symbolName: 'oil_mov02',
                autoPlay: {

                }
            },
            {
                id: 'oil_mov03',
                symbolName: 'oil_mov03',
                autoPlay: {

                }
            },
            {
                id: 'oil_mov01',
                symbolName: 'oil_mov01',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_oil_mov01}": [
                ["style", "top", '372px']
            ],
            "${_Text}": [
                ["style", "top", '796px'],
                ["style", "width", '652px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1200px'],
                ["style", "font-size", '40px']
            ],
            "${_stage}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_oil_mov02Copy}": [
                ["style", "top", '343px'],
                ["style", "left", '898px']
            ],
            "${_drum02}": [
                ["style", "left", '425px'],
                ["style", "top", '22px']
            ],
            "${_TextCopy}": [
                ["style", "top", '863px'],
                ["style", "font-size", '35px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1201px'],
                ["style", "width", '468px']
            ],
            "${_oil_mov02}": [
                ["style", "top", '226px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2417,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_drum02}", "left", '63px', { fromValue: '425px'}], position: 0, duration: 300 },
                { id: "eid4", tween: [ "style", "${_drum02}", "top", '153px', { fromValue: '22px'}], position: 0, duration: 300 },
                { id: "eid30", tween: [ "style", "${_oil_mov01}", "top", '372px', { fromValue: '372px'}], position: 300, duration: 0 },
                { id: "eid23", tween: [ "style", "${_oil_mov02}", "top", '226px', { fromValue: '226px'}], position: 300, duration: 0 },
                { id: "eid28", tween: [ "style", "${_oil_mov02Copy}", "left", '898px', { fromValue: '898px'}], position: 300, duration: 0 },
                { id: "eid29", tween: [ "style", "${_oil_mov02Copy}", "top", '343px', { fromValue: '343px'}], position: 300, duration: 0 }            ]
        }
    }
},
"oil_mov01": {
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
                    id: 'oil_01',
                    type: 'image',
                    rect: ['0px', '0px', '9px', '51px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/oil_01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_oil_01}": [
                ["style", "top", '61px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '51px'],
                ["style", "width", '9px']
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
                { id: "eid10", tween: [ "style", "${_oil_01}", "top", '163px', { fromValue: '61px'}], position: 61, duration: 939 },
                { id: "eid8", tween: [ "style", "${_oil_01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 61 },
                { id: "eid11", tween: [ "style", "${_oil_01}", "opacity", '0', { fromValue: '1'}], position: 61, duration: 939 }            ]
        }
    }
},
"oil_mov02": {
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
                    id: 'oil_02',
                    type: 'image',
                    rect: ['0px', '0px', '5px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/oil_02.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_oil_02}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '30px'],
                ["style", "width", '5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1300,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "style", "${_oil_02}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 643 },
                { id: "eid20", tween: [ "style", "${_oil_02}", "opacity", '0', { fromValue: '1'}], position: 943, duration: 357 },
                { id: "eid22", tween: [ "transform", "${_oil_02}", "scaleY", '0.7', { fromValue: '0.7'}], position: 1300, duration: 0 },
                { id: "eid21", tween: [ "transform", "${_oil_02}", "scaleX", '0.7', { fromValue: '0.7'}], position: 1300, duration: 0 },
                { id: "eid14", tween: [ "style", "${_oil_02}", "top", '58px', { fromValue: '0px'}], position: 300, duration: 643 },
                { id: "eid17", tween: [ "style", "${_oil_02}", "top", '110px', { fromValue: '58px'}], position: 943, duration: 357 }            ]
        }
    }
},
"oil_mov03": {
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
                    id: 'oil_012',
                    type: 'image',
                    rect: ['0px', '0px', '9px', '51px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/oil_01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '51px'],
                ["style", "width", '9px']
            ],
            "${_oil_012}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2417,
            autoPlay: true,
            timeline: [
                { id: "eid36", tween: [ "style", "${_oil_012}", "top", '61px', { fromValue: '0px'}], position: 1209, duration: 500 },
                { id: "eid39", tween: [ "style", "${_oil_012}", "top", '167px', { fromValue: '61px'}], position: 1709, duration: 394 },
                { id: "eid40", tween: [ "style", "${_oil_012}", "top", '237px', { fromValue: '167px'}], position: 2103, duration: 314 },
                { id: "eid43", tween: [ "transform", "${_oil_012}", "scaleY", '0.7', { fromValue: '0.7'}], position: 2417, duration: 0 },
                { id: "eid42", tween: [ "transform", "${_oil_012}", "scaleX", '0.7', { fromValue: '0.7'}], position: 2417, duration: 0 },
                { id: "eid38", tween: [ "style", "${_oil_012}", "opacity", '1', { fromValue: '0'}], position: 1209, duration: 500 },
                { id: "eid41", tween: [ "style", "${_oil_012}", "opacity", '0', { fromValue: '1'}], position: 2103, duration: 314 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1400049323785");
