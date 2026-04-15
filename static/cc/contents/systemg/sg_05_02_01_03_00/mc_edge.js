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
                id: 'upperArm',
                type: 'image',
                tag: 'img',
                rect: ['208', '239','1020','245','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"upperArm.png"]
            },
            {
                id: 'shock_Absorber',
                type: 'image',
                tag: 'img',
                rect: ['288', '221','845','613','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shock_Absorber.png"]
            },
            {
                id: 'SUSPENSION',
                type: 'image',
                tag: 'img',
                rect: ['49', '343','1332','696','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SUSPENSION.png"]
            },
            {
                id: 'lowerArm',
                type: 'image',
                tag: 'img',
                rect: ['206', '650','853','268','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lowerArm.png"]
            },
            {
                id: 'srust_Insulator',
                type: 'image',
                tag: 'img',
                rect: ['303', '191','829','194','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"srust_Insulator.png"]
            },
            {
                id: 'link',
                type: 'image',
                tag: 'img',
                rect: ['202', '542','83','131','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"link.png"]
            },
            {
                id: 'bushing',
                type: 'image',
                tag: 'img',
                rect: ['221', '716','592','203','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bushing.png"]
            },
            {
                id: 'SELECT_bushing',
                type: 'image',
                tag: 'img',
                rect: ['221', '716','592','203','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_bushing.png"]
            },
            {
                id: 'stabilizer',
                type: 'image',
                tag: 'img',
                rect: ['207', '548','908','373','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"stabilizer.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_lowerArm}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_upperArm}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_SUSPENSION}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_link}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_shock_Absorber}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_SELECT_bushing}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bushing}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_stabilizer}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_srust_Insulator}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1233,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "transform", "${_stabilizer}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "transform", "${_shock_Absorber}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "transform", "${_shock_Absorber}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_srust_Insulator}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_upperArm}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_link}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "transform", "${_link}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "transform", "${_SUSPENSION}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_SUSPENSION}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "transform", "${_srust_Insulator}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_lowerArm}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "transform", "${_stabilizer}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "style", "${_SELECT_bushing}", "opacity", '1', { fromValue: '0'}], position: 867, duration: 366, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_shock_Absorber}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "transform", "${_bushing}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "transform", "${_upperArm}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "transform", "${_SUSPENSION}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_bushing}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_upperArm}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_bushing}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "transform", "${_srust_Insulator}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_stabilizer}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "transform", "${_lowerArm}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "transform", "${_lowerArm}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "transform", "${_link}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 800, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-31870968");
