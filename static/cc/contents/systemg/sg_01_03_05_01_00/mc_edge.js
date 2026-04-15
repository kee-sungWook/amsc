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
                id: 'title',
                type: 'image',
                tag: 'img',
                rect: ['854', '335','1144','427','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"title.png"]
            },
            {
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['321', '108','266','906','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'gary',
                type: 'image',
                tag: 'img',
                rect: ['321', '108','266','906','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gary.png"]
            },
            {
                id: 'dw01',
                type: 'rect',
                rect: ['301', '958','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'dw01',
                symbolName: 'dw01',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_gary}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_gary}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_gary}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_gary}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_gary}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 }            ]
        }
    }
},
"dw01": {
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
                    id: 'drea',
                    tag: 'img',
                    rect: ['0px', '0px', '310', '164', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/drea.png']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['137px', '29px', '36px', '8px', 'auto', 'auto'],
                    fill: ['rgba(251,10,10,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_drea}": [
                ["style", "top", '-34px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.3'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(251,10,10,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '137px'],
                ["style", "top", '29px']
            ],
            "${symbolSelector}": [
                ["style", "height", '164px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            labels: {
                "01": 0
            },
            timeline: [
                { id: "eid31", tween: [ "transform", "${_drea}", "scaleY", '1', { fromValue: '0.3'}], position: 500, duration: 167, easing: "easeInQuad" },
                { id: "eid29", tween: [ "transform", "${_drea}", "scaleX", '1', { fromValue: '0.3'}], position: 500, duration: 167, easing: "easeInQuad" },
                { id: "eid37", tween: [ "style", "${_drea}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 167, easing: "easeInQuad" },
                { id: "eid43", tween: [ "style", "${_drea}", "opacity", '0', { fromValue: '0.9960119724273682'}], position: 667, duration: 83, easing: "easeInQuad" },
                { id: "eid24", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid25", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid26", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid27", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 42 },
                { id: "eid35", tween: [ "style", "${_drea}", "top", '0px', { fromValue: '-34px'}], position: 500, duration: 167, easing: "easeInQuad" },
                { id: "eid33", tween: [ "style", "${_drea}", "left", '0px', { fromValue: '-4px'}], position: 500, duration: 167, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-3436530");
