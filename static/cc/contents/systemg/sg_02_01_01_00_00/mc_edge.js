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
                id: 'A-missionLine',
                type: 'image',
                tag: 'img',
                rect: ['23', '66','978','1097','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A-missionLine.png"]
            },
            {
                id: 'A-mission2',
                type: 'image',
                tag: 'img',
                rect: ['644', '307','356','601','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A-mission2.png"]
            },
            {
                id: 'oilPump',
                type: 'image',
                tag: 'img',
                rect: ['741', '360','302','486','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilPump.png"]
            },
            {
                id: 'torqueConverter',
                type: 'image',
                tag: 'img',
                rect: ['1060px', '477px','346','405','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"torqueConverter.png"]
            },
            {
                id: 'A-mission1',
                type: 'image',
                tag: 'img',
                rect: ['24', '67','921','1094','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A-mission1.png"]
            },
            {
                id: 'select_oilPump',
                type: 'image',
                tag: 'img',
                rect: ['741', '360','302','486','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"select_oilPump.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_torqueConverter}": [
                ["style", "top", '411px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '612px']
            ],
            "${_A-mission1}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1']
            ],
            "${_oilPump}": [
                ["style", "top", '336px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '624px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_A-missionLine}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1']
            ],
            "${_A-mission2}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1']
            ],
            "${_select_oilPump}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1200,
            autoPlay: true,
            timeline: [
                { id: "eid67", tween: [ "transform", "${_A-mission1}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "transform", "${_A-mission1}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid75", tween: [ "transform", "${_torqueConverter}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "transform", "${_torqueConverter}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_torqueConverter}", "left", '1060px', { fromValue: '612px'}], position: 567, duration: 267 },
                { id: "eid52", tween: [ "style", "${_oilPump}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid50", tween: [ "style", "${_A-missionLine}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid69", tween: [ "transform", "${_A-mission1}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "transform", "${_A-mission1}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_torqueConverter}", "top", '477px', { fromValue: '411px'}], position: 567, duration: 267 },
                { id: "eid80", tween: [ "style", "${_select_oilPump}", "opacity", '1', { fromValue: '0'}], position: 967, duration: 233 },
                { id: "eid58", tween: [ "style", "${_torqueConverter}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid71", tween: [ "transform", "${_A-mission2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "transform", "${_A-mission2}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid59", tween: [ "transform", "${_A-missionLine}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "transform", "${_A-missionLine}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid4", tween: [ "style", "${_oilPump}", "top", '360px', { fromValue: '336px'}], position: 666, duration: 267 },
                { id: "eid63", tween: [ "transform", "${_oilPump}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "transform", "${_oilPump}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid73", tween: [ "transform", "${_A-mission2}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "transform", "${_A-mission2}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid56", tween: [ "style", "${_A-mission2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid77", tween: [ "transform", "${_torqueConverter}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "transform", "${_torqueConverter}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid2", tween: [ "style", "${_oilPump}", "left", '741px', { fromValue: '624px'}], position: 666, duration: 267 },
                { id: "eid61", tween: [ "transform", "${_A-missionLine}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "transform", "${_A-missionLine}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid65", tween: [ "transform", "${_oilPump}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "transform", "${_oilPump}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0 },
                { id: "eid54", tween: [ "style", "${_A-mission1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-11130505");
