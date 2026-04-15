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
                id: 'M_mission',
                type: 'image',
                tag: 'img',
                rect: ['130', '54','1087','1121','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"M_mission.png"]
            },
            {
                id: 'whiteThing',
                type: 'image',
                tag: 'img',
                rect: ['131', '55','1085','1119','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteThing.png"]
            },
            {
                id: 'blackThing',
                type: 'image',
                tag: 'img',
                rect: ['131', '55','1085','1119','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackThing.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1519px', '523px','auto','auto','auto', 'auto'],
                text: "수동변속기",
                font: ['Arial, Helvetica, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_blackThing}": [
                ["style", "opacity", '0']
            ],
            "${_Text}": [
                ["style", "top", '523px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(0,74,141,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1519px'],
                ["style", "font-size", '80px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_M_mission}": [
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
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 48 },
                { id: "eid5", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 48, duration: 48 },
                { id: "eid7", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 96, duration: 48 },
                { id: "eid8", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 144, duration: 48 },
                { id: "eid11", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 193, duration: 48 },
                { id: "eid12", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 241, duration: 48 },
                { id: "eid15", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 289, duration: 48 },
                { id: "eid16", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 337, duration: 48 },
                { id: "eid20", tween: [ "style", "${_M_mission}", "opacity", '1', { fromValue: '0'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 267, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 48, duration: 48 },
                { id: "eid6", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 95, duration: 48 },
                { id: "eid9", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 144, duration: 48 },
                { id: "eid10", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 192, duration: 48 },
                { id: "eid13", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 240, duration: 48 },
                { id: "eid14", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 288, duration: 48 },
                { id: "eid17", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 337, duration: 48 },
                { id: "eid18", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 385, duration: 48 }            ]
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
})(jQuery, AdobeEdge, "EDGE-34188884");
