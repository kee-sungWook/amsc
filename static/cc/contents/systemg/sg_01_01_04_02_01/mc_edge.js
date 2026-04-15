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
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['333px', '191','645','825','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'ex01',
                type: 'image',
                tag: 'img',
                rect: ['333px', '191','645','825','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex01.png"]
            },
            {
                id: 'con02',
                type: 'image',
                tag: 'img',
                rect: ['1338px', '121','666','988','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02.png"]
            },
            {
                id: 'ex02',
                type: 'image',
                tag: 'img',
                rect: ['1338px', '121','666','988','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex02.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ex02}": [
                ["style", "left", '1338px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_con02}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1'],
                ["style", "left", '1338px']
            ],
            "${_ex01}": [
                ["style", "left", '333px'],
                ["style", "opacity", '0']
            ],
            "${_con01}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1'],
                ["style", "left", '333px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1125,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 32 },
                { id: "eid24", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 31 },
                { id: "eid25", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 31 },
                { id: "eid26", tween: [ "style", "${_ex02}", "opacity", '0', { fromValue: '1'}], position: 1094, duration: 31 },
                { id: "eid20", tween: [ "transform", "${_con01}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 187 },
                { id: "eid16", tween: [ "transform", "${_con02}", "scaleY", '1', { fromValue: '1.1'}], position: 563, duration: 187 },
                { id: "eid6", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 187, duration: 32 },
                { id: "eid21", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 313, duration: 31 },
                { id: "eid22", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 437, duration: 31 },
                { id: "eid23", tween: [ "style", "${_ex01}", "opacity", '0', { fromValue: '1'}], position: 531, duration: 31 },
                { id: "eid18", tween: [ "transform", "${_con01}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 187 },
                { id: "eid10", tween: [ "style", "${_con01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 187 },
                { id: "eid12", tween: [ "style", "${_con02}", "opacity", '1', { fromValue: '0'}], position: 563, duration: 187 },
                { id: "eid14", tween: [ "transform", "${_con02}", "scaleX", '1', { fromValue: '1.1'}], position: 563, duration: 187 }            ]
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
})(jQuery, AdobeEdge, "EDGE-26558648");
