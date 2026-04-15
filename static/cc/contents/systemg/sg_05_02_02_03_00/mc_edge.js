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
                id: 'BACK',
                type: 'image',
                tag: 'img',
                rect: ['510', '396','526','586','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BACK.png"]
            },
            {
                id: 'shock_absorber',
                type: 'image',
                tag: 'img',
                rect: ['579', '73','282','493','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shock_absorber.png"]
            },
            {
                id: 'lowerArm',
                type: 'image',
                tag: 'img',
                rect: ['456', '908','385','82','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lowerArm.png"]
            },
            {
                id: 'link',
                type: 'image',
                tag: 'img',
                rect: ['612', '784','62','134','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"link.png"]
            },
            {
                id: 'bushing',
                type: 'image',
                tag: 'img',
                rect: ['366', '923','85','52','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bushing.png"]
            },
            {
                id: 'SELECT_bushing',
                type: 'image',
                tag: 'img',
                rect: ['366', '923','85','52','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_bushing.png"]
            },
            {
                id: 'stabilizer',
                type: 'image',
                tag: 'img',
                rect: ['428', '820','248','143','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"stabilizer.png"]
            },
            {
                id: 'srust_Insulator',
                type: 'image',
                tag: 'img',
                rect: ['593', '25','201','85','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"srust_Insulator.png"]
            },
            {
                id: 'tire',
                type: 'image',
                tag: 'img',
                rect: ['815', '372','249','831','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tire.png"]
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
            "${_lowerArm}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_shock_absorber}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_link}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_tire}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
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
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_stabilizer}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_srust_Insulator}": [
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
                { id: "eid24", tween: [ "transform", "${_stabilizer}", "scaleY", '1', { fromValue: '1.05'}], position: 333, duration: 467, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_shock_absorber}", "scaleY", '1', { fromValue: '1.05'}], position: 67, duration: 467, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "transform", "${_stabilizer}", "scaleX", '1', { fromValue: '1.05'}], position: 333, duration: 467, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_srust_Insulator}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 467, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_link}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 467, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "transform", "${_link}", "scaleX", '1', { fromValue: '1.05'}], position: 200, duration: 467, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "transform", "${_link}", "scaleY", '1', { fromValue: '1.05'}], position: 200, duration: 467, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "transform", "${_BACK}", "scaleX", '1', { fromValue: '1.05'}], position: 0, duration: 467, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "transform", "${_srust_Insulator}", "scaleY", '1', { fromValue: '1.05'}], position: 400, duration: 467, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "transform", "${_BACK}", "scaleY", '1', { fromValue: '1.05'}], position: 0, duration: 467, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_lowerArm}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 467, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "transform", "${_shock_absorber}", "scaleX", '1', { fromValue: '1.05'}], position: 67, duration: 467, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_SELECT_bushing}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 333, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_tire}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 467, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "transform", "${_bushing}", "scaleX", '1', { fromValue: '1.05'}], position: 267, duration: 467, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_shock_absorber}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 467, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_stabilizer}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 467, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_bushing}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 467, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "transform", "${_tire}", "scaleX", '1', { fromValue: '1.05'}], position: 467, duration: 467, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "transform", "${_bushing}", "scaleY", '1', { fromValue: '1.05'}], position: 267, duration: 467, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_srust_Insulator}", "scaleX", '1', { fromValue: '1.05'}], position: 400, duration: 467, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_BACK}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 467, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "transform", "${_lowerArm}", "scaleX", '1', { fromValue: '1.05'}], position: 133, duration: 467, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "transform", "${_lowerArm}", "scaleY", '1', { fromValue: '1.05'}], position: 133, duration: 467, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "transform", "${_tire}", "scaleY", '1', { fromValue: '1.05'}], position: 467, duration: 467, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-5144649");
