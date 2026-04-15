/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'preloadAudio': false
};
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
                id: 'MYCLIP',
                type: 'rect',
                rect: ['1027', '99','auto','auto','auto', 'auto']
            },
            {
                id: 'MYCLIP2',
                type: 'rect',
                rect: ['285px', '99','auto','auto','auto', 'auto'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'rewind_btnCopy',
                type: 'group',
                rect: ['823px', '184px','256','86','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'RoundRectCopy',
                    type: 'rect',
                    rect: ['0px', '0px','250px','80px','auto', 'auto'],
                    borderRadius: ["15px 15px", "15px 15px", "15px 15px", "15px 15px"],
                    fill: ["rgba(199,0,96,1.00)"],
                    stroke: [3,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'TextCopy',
                    type: 'text',
                    rect: ['0px', '17px','256px','auto','auto', 'auto'],
                    text: "다시보기",
                    align: "center",
                    font: ['굴림', 45, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'txt',
                type: 'image',
                tag: 'img',
                rect: ['249px', '1037px','1404','79','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"txt.png"]
            }],
            symbolInstances: [
            {
                id: 'MYCLIP2',
                symbolName: 'MYCLIP'
            },
            {
                id: 'MYCLIP',
                symbolName: 'MYCLIP'
            }
            ]
        },
    states: {
        "Base State": {
            "${_MYCLIP2}": [
                ["transform", "scaleX", '-1'],
                ["style", "left", '285px']
            ],
            "${_rewind_btnCopy}": [
                ["style", "top", '184px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '823px']
            ],
            "${_txt}": [
                ["style", "left", '249px'],
                ["style", "top", '1037px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-size", '45px'],
                ["style", "left", '0px'],
                ["style", "width", '256px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-size", '45px'],
                ["style", "left", '0px'],
                ["style", "width", '256px']
            ],
            "${_RoundRectCopy}": [
                ["color", "background-color", 'rgba(199,0,96,1)'],
                ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '250px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '80px'],
                ["style", "left", '0px'],
                ["style", "border-width", '3px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2533,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_rewind_btnCopy}", "opacity", '1', { fromValue: '0'}], position: 2266, duration: 267 },
                { id: "eid12", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_MYCLIP}', [0] ], ""], position: 0 },
                { id: "eid13", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_MYCLIP2}', [0] ], ""], position: 0 },
                { id: "eid14", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_MYCLIP}', [] ], ""], position: 733.66666666667 },
                { id: "eid15", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_MYCLIP2}', [] ], ""], position: 733.66666666667 }            ]
        }
    }
},
"TIRE_LINE_MOVE": {
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
                    rect: ['0px', '0px', '158', '129', 'auto', 'auto'],
                    id: 'tire_moveLine',
                    fill: ['rgba(0,0,0,0)', 'images/tire_moveLine.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '129px'],
                ["style", "width", '158px']
            ],
            "${_tire_moveLine}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            timeline: [
                { id: "eid4", tween: [ "style", "${_tire_moveLine}", "top", '723px', { fromValue: '0px'}], position: 0, duration: 300 }            ]
        }
    }
},
"TIRE_CLIP": {
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
                    id: 'TIRE',
                    type: 'rect',
                    rect: ['60px', '8px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TIRE',
                symbolName: 'TIRE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TIRE}": [
                ["style", "top", '8px'],
                ["style", "left", '60px'],
                ["transform", "rotateZ", '10deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '887px'],
                ["style", "width", '299px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 900,
            autoPlay: false,
            timeline: [
                { id: "eid57", tween: [ "transform", "${_TIRE}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 0, duration: 900 }            ]
        }
    }
},
"TIRE": {
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
                    rect: ['0px', '140px', '180', '589', 'auto', 'auto'],
                    id: 'tire_normal',
                    fill: ['rgba(0,0,0,0)', 'images/tire_normal.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'TIRE_LINE_MOVE',
                    type: 'rect',
                    rect: ['11', '6', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['4px', '0px', '172', '870', 'auto', 'auto'],
                    id: 'tire_blinder',
                    fill: ['rgba(0,0,0,0)', 'images/tire_blinder.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            {
                id: 'TIRE_LINE_MOVE',
                symbolName: 'TIRE_LINE_MOVE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_tire_blinder}": [
                ["style", "left", '4px'],
                ["style", "top", '0px']
            ],
            "${_tire_normal}": [
                ["style", "left", '0px'],
                ["style", "top", '140px']
            ],
            "${symbolSelector}": [
                ["style", "height", '870px'],
                ["style", "width", '180px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"MYCLIP": {
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
                    rect: ['0px', '0px', '473', '677', 'auto', 'auto'],
                    id: 'suspension',
                    fill: ['rgba(0,0,0,0)', 'images/suspension.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'TIRE_CLIP',
                    type: 'rect',
                    rect: ['285px', '91px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TIRE_CLIP',
                symbolName: 'TIRE_CLIP',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_suspension}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '978px'],
                ["style", "width", '584px']
            ],
            "${_TIRE_CLIP}": [
                ["style", "top", '91px'],
                ["style", "left", '285px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1267,
            autoPlay: false,
            timeline: [
                { id: "eid6", tween: [ "style", "${_TIRE_CLIP}", "top", '84px', { fromValue: '91px'}], position: 0, duration: 500 },
                { id: "eid10", tween: [ "style", "${_TIRE_CLIP}", "top", '91px', { fromValue: '84px'}], position: 533, duration: 500 },
                { id: "eid7", tween: [ "style", "${_suspension}", "top", '-7px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid11", tween: [ "style", "${_suspension}", "top", '0px', { fromValue: '-7px'}], position: 533, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-29874842");
