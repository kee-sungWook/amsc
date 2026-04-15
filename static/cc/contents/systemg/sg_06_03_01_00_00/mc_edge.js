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
                rect: ['232', '52','1160','1125','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackShadow.png"]
            },
            {
                id: 'whiteShadow',
                type: 'image',
                tag: 'img',
                rect: ['232px', '52px','1160','1125','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteShadow.png"]
            },
            {
                id: 'condensor',
                type: 'image',
                tag: 'img',
                rect: ['231', '51','1162','1127','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"condensor.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1568px', '568px','auto','auto','auto', 'auto'],
                text: "에어컨 콘덴서",
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
                ["style", "top", '568px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1568px'],
                ["style", "font-size", '80px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_whiteShadow}": [
                ["style", "opacity", '0']
            ],
            "${_condensor}": [
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
                { id: "eid20", tween: [ "style", "${_condensor}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 333 },
                { id: "eid2", tween: [ "style", "${_whiteShadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 66 },
                { id: "eid5", tween: [ "style", "${_whiteShadow}", "opacity", '0', { fromValue: '1'}], position: 66, duration: 67 },
                { id: "eid7", tween: [ "style", "${_whiteShadow}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 66 },
                { id: "eid8", tween: [ "style", "${_whiteShadow}", "opacity", '0', { fromValue: '1'}], position: 199, duration: 67 },
                { id: "eid9", tween: [ "style", "${_whiteShadow}", "opacity", '1', { fromValue: '0'}], position: 266, duration: 66 },
                { id: "eid10", tween: [ "style", "${_whiteShadow}", "opacity", '0', { fromValue: '1'}], position: 332, duration: 67 },
                { id: "eid11", tween: [ "style", "${_whiteShadow}", "opacity", '1', { fromValue: '0'}], position: 399, duration: 66 },
                { id: "eid12", tween: [ "style", "${_whiteShadow}", "opacity", '0', { fromValue: '1'}], position: 465, duration: 67 },
                { id: "eid4", tween: [ "style", "${_blackShadow}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 66 },
                { id: "eid6", tween: [ "style", "${_blackShadow}", "opacity", '0', { fromValue: '1'}], position: 133, duration: 66 },
                { id: "eid13", tween: [ "style", "${_blackShadow}", "opacity", '1', { fromValue: '0'}], position: 199, duration: 66 },
                { id: "eid14", tween: [ "style", "${_blackShadow}", "opacity", '0', { fromValue: '1'}], position: 265, duration: 67 },
                { id: "eid15", tween: [ "style", "${_blackShadow}", "opacity", '1', { fromValue: '0'}], position: 332, duration: 66 },
                { id: "eid16", tween: [ "style", "${_blackShadow}", "opacity", '0', { fromValue: '1'}], position: 398, duration: 67 },
                { id: "eid17", tween: [ "style", "${_blackShadow}", "opacity", '1', { fromValue: '0'}], position: 465, duration: 66 },
                { id: "eid18", tween: [ "style", "${_blackShadow}", "opacity", '0', { fromValue: '1'}], position: 531, duration: 67 },
                { id: "eid22", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 333 }            ]
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
})(jQuery, AdobeEdge, "EDGE-30869521");
