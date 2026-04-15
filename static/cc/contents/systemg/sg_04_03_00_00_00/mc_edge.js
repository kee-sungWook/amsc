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
                id: 'pump',
                type: 'image',
                tag: 'img',
                rect: ['17', '714','200','259','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pump.png"]
            },
            {
                id: 'select_pump',
                type: 'image',
                tag: 'img',
                rect: ['17', '714','200','259','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"select_pump.png"]
            },
            {
                id: 'oil',
                type: 'image',
                tag: 'img',
                rect: ['19', '340','114','216','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oil.png"]
            },
            {
                id: 'steering',
                type: 'image',
                tag: 'img',
                rect: ['220', '628','729','464','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"steering.png"]
            },
            {
                id: 'handle',
                type: 'image',
                tag: 'img',
                rect: ['660', '227','752','577','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"handle.png"]
            },
            {
                id: 'hose',
                type: 'image',
                tag: 'img',
                rect: ['53', '509','652','398','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hose.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_hose}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_pump}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_select_pump}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_handle}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_steering}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_oil}": [
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
            duration: 1133,
            autoPlay: true,
            timeline: [
                { id: "eid22", tween: [ "transform", "${_pump}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pump}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_select_pump}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 300, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_steering}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 400, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "transform", "${_hose}", "scaleY", '1', { fromValue: '0.9'}], position: 400, duration: 400, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "transform", "${_hose}", "scaleX", '1', { fromValue: '0.9'}], position: 400, duration: 400, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "transform", "${_steering}", "scaleX", '1', { fromValue: '0.9'}], position: 200, duration: 400, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "transform", "${_handle}", "scaleY", '1', { fromValue: '0.9'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "transform", "${_handle}", "scaleX", '1', { fromValue: '0.9'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "transform", "${_steering}", "scaleY", '1', { fromValue: '0.9'}], position: 200, duration: 400, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_hose}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 400, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_handle}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_oil}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 400, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "transform", "${_oil}", "scaleX", '1', { fromValue: '0.9'}], position: 100, duration: 400, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "transform", "${_pump}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 400, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "transform", "${_oil}", "scaleY", '1', { fromValue: '0.9'}], position: 100, duration: 400, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-26692682");
