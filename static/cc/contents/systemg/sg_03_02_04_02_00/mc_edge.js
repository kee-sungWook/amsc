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
                id: 'FLOWS3',
                type: 'rect',
                rect: ['1206', '445','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWS2',
                type: 'rect',
                rect: ['60', '445','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWS1',
                type: 'rect',
                rect: ['472', '116','auto','auto','auto', 'auto']
            },
            {
                id: 'whiteThings',
                type: 'image',
                rect: ['59px', '115px','1561px','1004px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteThings.png",'0px','0px']
            },
            {
                id: 'blackThings',
                type: 'image',
                rect: ['59px', '115px','1561px','1004px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackThings.png",'0px','0px']
            },
            {
                id: 'pics',
                type: 'image',
                tag: 'img',
                rect: ['59', '115','1561','1004','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pics.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1671', '475','672','182','auto', 'auto'],
                text: "프로포셔닝 밸브의\r작동원리",
                align: "center",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'FLOWS3',
                symbolName: 'FLOWS3',
                autoPlay: {

                }
            },
            {
                id: 'FLOWS2',
                symbolName: 'FLOWS2',
                autoPlay: {

                }
            },
            {
                id: 'FLOWS1',
                symbolName: 'FLOWS1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_pics}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_whiteThings}": [
                ["style", "top", '115px'],
                ["style", "opacity", '0'],
                ["style", "left", '59px']
            ],
            "${_txt1}": [
                ["style", "opacity", '0']
            ],
            "${_blackThings}": [
                ["style", "top", '115px'],
                ["style", "opacity", '0'],
                ["style", "left", '59px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4500,
            autoPlay: true,
            labels: {
                "gogo": 1167
            },
            timeline: [
                { id: "eid4", tween: [ "style", "${_whiteThings}", "opacity", '1', { fromValue: '0'}], position: 68, duration: 67 },
                { id: "eid6", tween: [ "style", "${_whiteThings}", "opacity", '0', { fromValue: '0.995025'}], position: 134, duration: 66 },
                { id: "eid9", tween: [ "style", "${_whiteThings}", "opacity", '1', { fromValue: '0'}], position: 201, duration: 67 },
                { id: "eid10", tween: [ "style", "${_whiteThings}", "opacity", '0', { fromValue: '0.995025'}], position: 267, duration: 66 },
                { id: "eid13", tween: [ "style", "${_whiteThings}", "opacity", '1', { fromValue: '0'}], position: 334, duration: 67 },
                { id: "eid14", tween: [ "style", "${_whiteThings}", "opacity", '0', { fromValue: '0.995025'}], position: 400, duration: 66 },
                { id: "eid2", tween: [ "style", "${_blackThings}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 67 },
                { id: "eid5", tween: [ "style", "${_blackThings}", "opacity", '0', { fromValue: '0.995025'}], position: 67, duration: 66 },
                { id: "eid7", tween: [ "style", "${_blackThings}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 67 },
                { id: "eid8", tween: [ "style", "${_blackThings}", "opacity", '0', { fromValue: '0.995025'}], position: 200, duration: 66 },
                { id: "eid11", tween: [ "style", "${_blackThings}", "opacity", '1', { fromValue: '0'}], position: 266, duration: 67 },
                { id: "eid12", tween: [ "style", "${_blackThings}", "opacity", '0', { fromValue: '0.995025'}], position: 333, duration: 66 },
                { id: "eid16", tween: [ "style", "${_pics}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 333, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 234, easing: "easeOutQuad" },
                { id: "eid29", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOWS1}', [] ], ""], position: 1167 },
                { id: "eid30", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOWS2}', [] ], ""], position: 1733.3333333333 },
                { id: "eid31", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOWS3}', [] ], ""], position: 1733.3333333333 }            ]
        }
    }
},
"FLOWS1": {
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
                    id: 'flowSrc',
                    type: 'image',
                    rect: ['-100px', '-233px', '329px', '233px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                },
                {
                    id: 'flowSrc2',
                    type: 'image',
                    rect: ['506px', '-233px', '329px', '233px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flowSrc}": [
                ["style", "left", '-100px'],
                ["style", "top", '-233px']
            ],
            "${_flowSrc2}": [
                ["style", "left", '506px'],
                ["style", "top", '-233px']
            ],
            "${symbolSelector}": [
                ["style", "height", '867px'],
                ["style", "width", '735px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2300,
            autoPlay: false,
            timeline: [
                { id: "eid19", tween: [ "style", "${_flowSrc2}", "top", '867px', { fromValue: '-233px'}], position: 0, duration: 2300, easing: "easeInOutQuad" },
                { id: "eid20", tween: [ "style", "${_flowSrc}", "top", '867px', { fromValue: '-233px'}], position: 0, duration: 2300, easing: "easeInOutQuad" }            ]
        }
    }
},
"FLOWS2": {
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
                    transform: [[0, 0], ['90'], [], ['0.8']],
                    id: 'flowSrc',
                    type: 'image',
                    rect: ['365px', '-48px', '329px', '233px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90'], [], ['0.8']],
                    id: 'flowSrc2',
                    type: 'image',
                    rect: ['807px', '48px', '329px', '233px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flowSrc}": [
                ["transform", "scaleX", '0.8'],
                ["style", "top", '-48px'],
                ["style", "left", '365px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flowSrc2}": [
                ["transform", "scaleX", '0.8'],
                ["style", "top", '373px'],
                ["style", "left", '365px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '559px'],
                ["style", "width", '413px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2367,
            autoPlay: false,
            timeline: [
                { id: "eid23", tween: [ "style", "${_flowSrc}", "left", '-281px', { fromValue: '365px'}], position: 0, duration: 1700, easing: "easeInOutQuad" },
                { id: "eid22", tween: [ "style", "${_flowSrc2}", "top", '374px', { fromValue: '373px'}], position: 667, duration: 1700, easing: "easeInOutQuad" },
                { id: "eid24", tween: [ "style", "${_flowSrc}", "top", '-47px', { fromValue: '-48px'}], position: 0, duration: 1700, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "style", "${_flowSrc2}", "left", '-281px', { fromValue: '365px'}], position: 667, duration: 1700, easing: "easeInOutQuad" }            ]
        }
    }
},
"FLOWS3": {
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
                    transform: [[0, 0], ['90'], [], ['0.8']],
                    id: 'flowSrc3',
                    type: 'image',
                    rect: ['-281px', '-48px', '329px', '233px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90'], [], ['0.8']],
                    id: 'flowSrc3Copy',
                    type: 'image',
                    rect: ['-281px', '373px', '329px', '233px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flowSrc.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flowSrc3}": [
                ["transform", "scaleX", '0.8'],
                ["style", "top", '-48px'],
                ["style", "left", '-281px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flowSrc3Copy}": [
                ["transform", "scaleX", '0.8'],
                ["style", "top", '373px'],
                ["style", "left", '-281px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '559px'],
                ["style", "width", '413px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2567,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_flowSrc3}", "top", '-47px', { fromValue: '-48px'}], position: 0, duration: 1900, easing: "easeInOutQuad" },
                { id: "eid26", tween: [ "style", "${_flowSrc3Copy}", "top", '374px', { fromValue: '373px'}], position: 667, duration: 1900, easing: "easeInOutQuad" },
                { id: "eid27", tween: [ "style", "${_flowSrc3}", "left", '365px', { fromValue: '-281px'}], position: 0, duration: 1900, easing: "easeInOutQuad" },
                { id: "eid25", tween: [ "style", "${_flowSrc3Copy}", "left", '365px', { fromValue: '-281px'}], position: 667, duration: 1900, easing: "easeInOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-1042333");
