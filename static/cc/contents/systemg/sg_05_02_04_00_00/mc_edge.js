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
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['160', '130','1110','970','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            },
            {
                id: 'blackThing',
                type: 'image',
                tag: 'img',
                rect: ['160', '130','1110','970','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackThing.png"]
            },
            {
                id: 'whiteThing',
                type: 'image',
                tag: 'img',
                rect: ['160', '130','1110','970','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteThing.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_blackThing}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_pic}": [
                ["style", "opacity", '0']
            ],
            "${_whiteThing}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 900,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 68, duration: 67 },
                { id: "eid6", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 134, duration: 66 },
                { id: "eid9", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 201, duration: 67 },
                { id: "eid10", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 267, duration: 66 },
                { id: "eid13", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 334, duration: 67 },
                { id: "eid14", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 400, duration: 66 },
                { id: "eid2", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 67 },
                { id: "eid5", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 67, duration: 66 },
                { id: "eid7", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 67 },
                { id: "eid8", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 200, duration: 66 },
                { id: "eid11", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 266, duration: 67 },
                { id: "eid12", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 333, duration: 66 },
                { id: "eid16", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 333 }            ]
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
})(jQuery, AdobeEdge, "EDGE-28571715");
