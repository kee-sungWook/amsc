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
                id: 'body-1Copy2',
                type: 'image',
                tag: 'img',
                rect: ['662', '114','669','738','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body-12.png"]
            },
            {
                id: 'timing_chain-1Copy2',
                type: 'image',
                tag: 'img',
                rect: ['99', '105','342','549','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"timing_chain-12.png"]
            },
            {
                id: 'timing_belt-1Copy2',
                type: 'image',
                tag: 'img',
                rect: ['106', '671','580','453','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"timing_belt-12.png"]
            },
            {
                id: 'exCopy',
                type: 'image',
                tag: 'img',
                rect: ['99', '105','1232','1019','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex2.png"]
            },
            {
                id: 'timing_beltCopy',
                type: 'image',
                tag: 'img',
                rect: ['106', '671','580','453','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"timing_belt2.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_body-1Copy2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_exCopy}": [
                ["style", "opacity", '0']
            ],
            "${_timing_chain-1Copy2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_timing_beltCopy}": [
                ["style", "opacity", '0']
            ],
            "${_timing_belt-1Copy2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1208,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "transform", "${_timing_belt-1Copy2}", "scaleX", '1', { fromValue: '1.1'}], position: 268, duration: 250 },
                { id: "eid12", tween: [ "style", "${_timing_belt-1Copy2}", "opacity", '1', { fromValue: '0'}], position: 268, duration: 250 },
                { id: "eid24", tween: [ "transform", "${_body-1Copy2}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid26", tween: [ "style", "${_timing_beltCopy}", "opacity", '1', { fromValue: '0'}], position: 958, duration: 250 },
                { id: "eid10", tween: [ "style", "${_timing_chain-1Copy2}", "opacity", '1', { fromValue: '0'}], position: 147, duration: 250 },
                { id: "eid16", tween: [ "transform", "${_timing_belt-1Copy2}", "scaleY", '1', { fromValue: '1.1'}], position: 268, duration: 250 },
                { id: "eid2", tween: [ "style", "${_exCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 42 },
                { id: "eid3", tween: [ "style", "${_exCopy}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 42 },
                { id: "eid4", tween: [ "style", "${_exCopy}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 42 },
                { id: "eid6", tween: [ "style", "${_exCopy}", "opacity", '0', { fromValue: '1'}], position: 958, duration: 42 },
                { id: "eid18", tween: [ "transform", "${_timing_chain-1Copy2}", "scaleX", '1', { fromValue: '1.1'}], position: 147, duration: 250 },
                { id: "eid20", tween: [ "transform", "${_timing_chain-1Copy2}", "scaleY", '1', { fromValue: '1.1'}], position: 147, duration: 250 },
                { id: "eid8", tween: [ "style", "${_body-1Copy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid22", tween: [ "transform", "${_body-1Copy2}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-25527015");
