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
                id: 'lowerArm',
                type: 'image',
                tag: 'img',
                rect: ['19', '772','534','258','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lowerArm.png"]
            },
            {
                id: 'BACK',
                type: 'image',
                tag: 'img',
                rect: ['374', '514','423','613','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BACK.png"]
            },
            {
                id: 'shock_absorber',
                type: 'image',
                tag: 'img',
                rect: ['311', '468','106','507','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shock_absorber.png"]
            },
            {
                id: 'r_anchorArm',
                type: 'image',
                tag: 'img',
                rect: ['1205', '103','205','281','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r_anchorArm.png"]
            },
            {
                id: 'torsion_bar',
                type: 'image',
                tag: 'img',
                rect: ['600', '292','678','178','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"torsion_bar.png"]
            },
            {
                id: 'f_anchorArm',
                type: 'image',
                tag: 'img',
                rect: ['428', '425','182','130','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_anchorArm.png"]
            },
            {
                id: 'upperArm',
                type: 'image',
                tag: 'img',
                rect: ['110', '450','474','202','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"upperArm.png"]
            },
            {
                id: 'OUT_LINE',
                type: 'image',
                tag: 'img',
                rect: ['18', '102','1393','1026','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OUT_LINE.png"]
            },
            {
                id: 'SELECT_torsion_bar',
                type: 'image',
                tag: 'img',
                rect: ['600', '292','678','178','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_torsion_bar.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_BACK}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_f_anchorArm}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_r_anchorArm}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_shock_absorber}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_upperArm}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_SELECT_torsion_bar}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_OUT_LINE}": [
                ["style", "opacity", '0']
            ],
            "${_lowerArm}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_torsion_bar}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1333,
            autoPlay: true,
            timeline: [
                { id: "eid104", tween: [ "style", "${_OUT_LINE}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 500, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "transform", "${_shock_absorber}", "scaleY", '1', { fromValue: '1.05'}], position: 0, duration: 400, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "style", "${_SELECT_torsion_bar}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 333, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "transform", "${_upperArm}", "scaleX", '1', { fromValue: '1.05'}], position: 133, duration: 400, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "transform", "${_shock_absorber}", "scaleX", '1', { fromValue: '1.05'}], position: 0, duration: 400, easing: "easeOutQuad" },
                { id: "eid78", tween: [ "transform", "${_torsion_bar}", "scaleX", '1', { fromValue: '1.05'}], position: 400, duration: 400, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "transform", "${_r_anchorArm}", "scaleY", '1', { fromValue: '1.05'}], position: 500, duration: 400, easing: "easeOutQuad" },
                { id: "eid70", tween: [ "transform", "${_r_anchorArm}", "scaleX", '1', { fromValue: '1.05'}], position: 500, duration: 400, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "transform", "${_BACK}", "scaleY", '1', { fromValue: '1.05'}], position: 67, duration: 400, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_lowerArm}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 400, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "style", "${_f_anchorArm}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "transform", "${_torsion_bar}", "scaleY", '1', { fromValue: '1.05'}], position: 400, duration: 400, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "transform", "${_f_anchorArm}", "scaleY", '1', { fromValue: '1.05'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_r_anchorArm}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 400, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_shock_absorber}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "transform", "${_upperArm}", "scaleY", '1', { fromValue: '1.05'}], position: 133, duration: 400, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_upperArm}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 400, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "transform", "${_f_anchorArm}", "scaleX", '1', { fromValue: '1.05'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "style", "${_torsion_bar}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 400, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${_BACK}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 400, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "transform", "${_lowerArm}", "scaleX", '1', { fromValue: '1.05'}], position: 200, duration: 400, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "transform", "${_lowerArm}", "scaleY", '1', { fromValue: '1.05'}], position: 200, duration: 400, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "transform", "${_BACK}", "scaleX", '1', { fromValue: '1.05'}], position: 67, duration: 400, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-8077100");
