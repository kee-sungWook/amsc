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
                id: 'head',
                type: 'image',
                rect: ['320px', '71px','1522px','1033px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"head.png",'0px','0px']
            },
            {
                id: 'head_ov',
                type: 'image',
                rect: ['320px', '71px','1522px','1033px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"head_ov.png",'0px','0px']
            }],
            symbolInstances: [

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
            "${_head}": [
                ["style", "top", '71px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '320px']
            ],
            "${_head_ov}": [
                ["style", "top", '71px'],
                ["style", "opacity", '0'],
                ["style", "left", '320px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 667,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "transform", "${_head}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid8", tween: [ "style", "${_head_ov}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 42 },
                { id: "eid9", tween: [ "style", "${_head_ov}", "opacity", '1', { fromValue: '0'}], position: 375, duration: 42 },
                { id: "eid10", tween: [ "style", "${_head_ov}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 42 },
                { id: "eid11", tween: [ "style", "${_head_ov}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 42 },
                { id: "eid4", tween: [ "transform", "${_head}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid6", tween: [ "style", "${_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-25891658");
