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
                id: 'cv_joint',
                type: 'image',
                tag: 'img',
                rect: ['195', '144','2010','941','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cv_joint.png"]
            },
            {
                id: 'blackThing',
                type: 'image',
                tag: 'img',
                rect: ['196', '146','2008','937','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackThing.png"]
            },
            {
                id: 'whiteThing',
                type: 'image',
                tag: 'img',
                rect: ['196', '146','2008','937','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteThing.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1360', '346','376','86','auto', 'auto'],
                text: "CV 조인트",
                align: "center",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
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
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_cv_joint}": [
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
                { id: "eid4", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 67 },
                { id: "eid6", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 133, duration: 66 },
                { id: "eid9", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 67 },
                { id: "eid10", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 266, duration: 66 },
                { id: "eid13", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 67 },
                { id: "eid14", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 399, duration: 66 },
                { id: "eid17", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 466, duration: 67 },
                { id: "eid18", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 532, duration: 66 },
                { id: "eid22", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 300, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_cv_joint}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 300, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 67 },
                { id: "eid5", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 67, duration: 66 },
                { id: "eid7", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 67 },
                { id: "eid8", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 200, duration: 66 },
                { id: "eid11", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 266, duration: 67 },
                { id: "eid12", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 333, duration: 66 },
                { id: "eid15", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 399, duration: 67 },
                { id: "eid16", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 466, duration: 66 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2803370");
