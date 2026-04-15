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
                id: 'LINES',
                type: 'image',
                tag: 'img',
                rect: ['168', '238','750','781','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LINES.png"]
            },
            {
                id: 'BRAKE',
                type: 'image',
                tag: 'img',
                rect: ['792', '781','426','430','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BRAKE.png"]
            },
            {
                id: 'ABS',
                type: 'image',
                tag: 'img',
                rect: ['243', '242','340','480','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ABS.png"]
            },
            {
                id: 'cylinder',
                type: 'image',
                tag: 'img',
                rect: ['637', '19','624','469','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cylinder.png"]
            },
            {
                id: 'SELECT_BRAKE',
                type: 'image',
                tag: 'img',
                rect: ['792', '781','426','430','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_BRAKE.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_BRAKE}": [
                ["style", "top", '739px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '729px']
            ],
            "${_SELECT_BRAKE}": [
                ["style", "opacity", '0']
            ],
            "${_ABS}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9'],
                ["style", "left", '266px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_LINES}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_cylinder}": [
                ["style", "top", '51px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '591px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1600,
            autoPlay: true,
            timeline: [
                { id: "eid38", tween: [ "style", "${_LINES}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 567, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_BRAKE}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 567, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_BRAKE}", "top", '781px', { fromValue: '739px'}], position: 267, duration: 567, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_cylinder}", "left", '637px', { fromValue: '591px'}], position: 0, duration: 567, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_ABS}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 567, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_cylinder}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 567, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "transform", "${_BRAKE}", "scaleX", '1', { fromValue: '0.9'}], position: 267, duration: 567, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_ABS}", "left", '243px', { fromValue: '266px'}], position: 133, duration: 567, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_BRAKE}", "left", '792px', { fromValue: '729px'}], position: 267, duration: 567, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "transform", "${_ABS}", "scaleY", '1', { fromValue: '0.9'}], position: 133, duration: 567, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "transform", "${_cylinder}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 567, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_BRAKE}", "scaleY", '1', { fromValue: '0.9'}], position: 267, duration: 567, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_cylinder}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 567, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_cylinder}", "top", '19px', { fromValue: '51px'}], position: 0, duration: 567, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "transform", "${_LINES}", "scaleY", '1', { fromValue: '0.9'}], position: 400, duration: 567, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "transform", "${_LINES}", "scaleX", '1', { fromValue: '0.9'}], position: 400, duration: 567, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "transform", "${_ABS}", "scaleX", '1', { fromValue: '0.9'}], position: 133, duration: 567, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_SELECT_BRAKE}", "opacity", '1', { fromValue: '0'}], position: 1067, duration: 533, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-5816724");
