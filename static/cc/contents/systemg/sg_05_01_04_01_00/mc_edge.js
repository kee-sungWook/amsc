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
                rect: ['249', '63','1320','1103','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            },
            {
                id: 'blackThing',
                type: 'image',
                tag: 'img',
                rect: ['251', '65','1316','1099','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackThing.png"]
            },
            {
                id: 'whiteThing',
                type: 'image',
                tag: 'img',
                rect: ['251', '65','1316','1099','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteThing.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1827', '508','324','86','auto', 'auto'],
                text: "컴프레셔",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "opacity", '0']
            ],
            "${_blackThing}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
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
            duration: 1167,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 67 },
                { id: "eid6", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 133, duration: 66 },
                { id: "eid9", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 67 },
                { id: "eid10", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 266, duration: 66 },
                { id: "eid13", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 67 },
                { id: "eid14", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 399, duration: 66 },
                { id: "eid21", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 466, duration: 67 },
                { id: "eid22", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 532, duration: 66 },
                { id: "eid26", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 867, duration: 300, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 67 },
                { id: "eid3", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 67, duration: 66 },
                { id: "eid7", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 67 },
                { id: "eid8", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 200, duration: 66 },
                { id: "eid11", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 266, duration: 67 },
                { id: "eid12", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 333, duration: 66 },
                { id: "eid19", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 399, duration: 67 },
                { id: "eid20", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 466, duration: 66 },
                { id: "eid24", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 300, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-13859931");
