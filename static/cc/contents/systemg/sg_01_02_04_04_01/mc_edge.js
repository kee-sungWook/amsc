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
                id: 'color',
                type: 'image',
                tag: 'img',
                rect: ['289', '96','1822','1037','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"color.png"]
            },
            {
                id: 'ex',
                type: 'image',
                tag: 'img',
                rect: ['289', '96','1822','1037','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex.png"]
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
            "${_ex}": [
                ["style", "opacity", '0']
            ],
            "${_color}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 625,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid6", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid7", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid4", tween: [ "style", "${_color}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 }            ]
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
})(jQuery, AdobeEdge, "EDGE-11629164");
