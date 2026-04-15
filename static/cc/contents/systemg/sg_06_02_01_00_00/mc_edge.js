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
                id: 'blackShadow',
                type: 'image',
                tag: 'img',
                rect: ['199', '120','1103','950','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackShadow.png"]
            },
            {
                id: 'whiteShadow',
                type: 'image',
                tag: 'img',
                rect: ['199', '120','1103','950','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteShadow.png"]
            },
            {
                id: 'compressor',
                type: 'image',
                tag: 'img',
                rect: ['198', '119','1105','952','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"compressor.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1489px', '557px','auto','auto','auto', 'auto'],
                text: "에어컨 컴프레셔",
                font: ['Arial, Helvetica, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_blackShadow}": [
                ["style", "opacity", '0']
            ],
            "${_Text}": [
                ["style", "top", '557px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(0,74,141,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1489px'],
                ["style", "font-size", '80px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_compressor}": [
                ["style", "opacity", '0']
            ],
            "${_whiteShadow}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 933,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "style", "${_compressor}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 333 },
                { id: "eid2", tween: [ "style", "${_whiteShadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 83 },
                { id: "eid5", tween: [ "style", "${_whiteShadow}", "opacity", '0', { fromValue: '1'}], position: 83, duration: 83 },
                { id: "eid15", tween: [ "style", "${_whiteShadow}", "opacity", '1', { fromValue: '0'}], position: 166, duration: 83 },
                { id: "eid16", tween: [ "style", "${_whiteShadow}", "opacity", '0', { fromValue: '1'}], position: 249, duration: 84 },
                { id: "eid17", tween: [ "style", "${_whiteShadow}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 83 },
                { id: "eid18", tween: [ "style", "${_whiteShadow}", "opacity", '0', { fromValue: '1'}], position: 416, duration: 84 },
                { id: "eid13", tween: [ "style", "${_blackShadow}", "opacity", '1', { fromValue: '0'}], position: 83, duration: 83 },
                { id: "eid14", tween: [ "style", "${_blackShadow}", "opacity", '0', { fromValue: '1'}], position: 166, duration: 83 },
                { id: "eid19", tween: [ "style", "${_blackShadow}", "opacity", '1', { fromValue: '0'}], position: 249, duration: 83 },
                { id: "eid20", tween: [ "style", "${_blackShadow}", "opacity", '0', { fromValue: '1'}], position: 332, duration: 83 },
                { id: "eid21", tween: [ "style", "${_blackShadow}", "opacity", '1', { fromValue: '0'}], position: 416, duration: 83 },
                { id: "eid22", tween: [ "style", "${_blackShadow}", "opacity", '0', { fromValue: '1'}], position: 499, duration: 83 },
                { id: "eid26", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 266 }            ]
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
})(jQuery, AdobeEdge, "EDGE-29943230");
