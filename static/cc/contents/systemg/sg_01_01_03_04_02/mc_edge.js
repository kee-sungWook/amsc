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
                id: 'Layer-1',
                type: 'image',
                tag: 'img',
                rect: ['927', '160','544','1005','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Layer-1.png"]
            },
            {
                id: 'Layer-3',
                type: 'image',
                tag: 'img',
                rect: ['1051', '217','296','34','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Layer-3.png"]
            },
            {
                id: 'line',
                type: 'image',
                tag: 'img',
                rect: ['1081', '114','234','115','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line.png"]
            },
            {
                id: 'line01',
                type: 'image',
                tag: 'img',
                rect: ['1056', '132','286','116','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line01.png"]
            },
            {
                id: 'line02',
                type: 'image',
                tag: 'img',
                rect: ['1056', '292','285','65','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line02.png"]
            },
            {
                id: 'ex',
                type: 'image',
                tag: 'img',
                rect: ['1008', '345','381','568','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex.png"]
            },
            {
                id: 'ARROW',
                type: 'image',
                tag: 'img',
                rect: ['1162', '355px','72','152','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ARROW.png"]
            },
            {
                id: 'Layer-8',
                type: 'image',
                tag: 'img',
                rect: ['1156', '64','85','225','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Layer-8.png"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['1037px', '539px','20px','20px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(26,205,254,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Ellipse02',
                type: 'ellipse',
                rect: ['1037px', '539px','20px','20px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(26,205,254,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Ellipse03',
                type: 'ellipse',
                rect: ['1037px', '539px','20px','20px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(26,205,254,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Ellipse_left01',
                type: 'ellipse',
                rect: ['1347px', '531px','20px','20px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(26,205,254,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_left02',
                type: 'ellipse',
                rect: ['1347px', '531px','20px','20px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(26,205,254,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_left03',
                type: 'ellipse',
                rect: ['1347px', '531px','20px','20px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(26,205,254,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ex}": [
                ["style", "opacity", '0']
            ],
            "${_Ellipse_left03}": [
                ["motion", "location", '1357px 540.67px'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse03}": [
                ["color", "background-color", 'rgba(26,205,254,1.00)'],
                ["style", "opacity", '0'],
                ["motion", "location", '1047px 549px'],
                ["style", "top", '564px']
            ],
            "${_line02}": [
                ["style", "opacity", '0']
            ],
            "${_ARROW}": [
                ["style", "top", '355px'],
                ["style", "opacity", '0']
            ],
            "${_line01}": [
                ["style", "opacity", '0']
            ],
            "${_Ellipse_left02}": [
                ["motion", "location", '1357px 540.67px'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse02}": [
                ["motion", "location", '1047px 549px'],
                ["style", "opacity", '0'],
                ["style", "top", '564px'],
                ["color", "background-color", 'rgba(26,205,254,1.00)']
            ],
            "${_line}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_Layer-8}": [
                ["style", "opacity", '0']
            ],
            "${_Ellipse}": [
                ["style", "top", '564px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(26,205,254,1.00)'],
                ["motion", "location", '1047.0000406901px 549px']
            ],
            "${_Ellipse_left01}": [
                ["motion", "location", '1357px 540.66666666667px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            labels: {
                "01": 0
            },
            timeline: [
                { id: "eid55", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 627, duration: 230 },
                { id: "eid39", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 856, duration: 53 },
                { id: "eid38", tween: [ "motion", "${_Ellipse03}", [[1048.33, 550.33, 0, 0],[1129.43, 651.3, 142.04, 0.72, 246.83, 1.26],[1179, 540.67, 0, 0]]], position: 689, duration: 230 },
                { id: "eid60", tween: [ "style", "${_Ellipse_left01}", "opacity", '1', { fromValue: '0'}], position: 627, duration: 235 },
                { id: "eid54", tween: [ "style", "${_Ellipse_left01}", "opacity", '0', { fromValue: '1'}], position: 861, duration: 47 },
                { id: "eid61", tween: [ "style", "${_Ellipse_left02}", "opacity", '1', { fromValue: '0'}], position: 657, duration: 235 },
                { id: "eid52", tween: [ "style", "${_Ellipse_left02}", "opacity", '0', { fromValue: '1'}], position: 893, duration: 47 },
                { id: "eid17", tween: [ "style", "${_Layer-8}", "opacity", '1', { fromValue: '0'}], position: 996, duration: 140 },
                { id: "eid18", tween: [ "style", "${_Layer-8}", "opacity", '0.0078125', { fromValue: '1'}], position: 1136, duration: 114 },
                { id: "eid59", tween: [ "style", "${_Ellipse03}", "opacity", '1', { fromValue: '0'}], position: 689, duration: 230 },
                { id: "eid41", tween: [ "style", "${_Ellipse03}", "opacity", '0', { fromValue: '1'}], position: 919, duration: 53 },
                { id: "eid50", tween: [ "motion", "${_Ellipse_left02}", [[1357, 540.67, 0, 0],[1271.97, 668.22, -179.75, -0.15, -234.9, -0.2],[1215.67, 520.67, 0, 0]]], position: 657, duration: 235 },
                { id: "eid51", tween: [ "motion", "${_Ellipse_left03}", [[1357, 540.67, 0, 0],[1271.97, 668.22, -179.75, -0.15, -234.9, -0.2],[1215.67, 520.67, 0, 0]]], position: 689, duration: 235 },
                { id: "eid49", tween: [ "motion", "${_Ellipse_left01}", [[1357, 540.67, 0, 0],[1271.97, 668.22, -179.75, -0.15, -234.9, -0.2],[1215.67, 520.67, 0, 0]]], position: 627, duration: 235 },
                { id: "eid58", tween: [ "style", "${_Ellipse02}", "opacity", '1', { fromValue: '0'}], position: 657, duration: 230 },
                { id: "eid40", tween: [ "style", "${_Ellipse02}", "opacity", '0', { fromValue: '1'}], position: 887, duration: 53 },
                { id: "eid62", tween: [ "style", "${_Ellipse_left03}", "opacity", '1', { fromValue: '0'}], position: 689, duration: 235 },
                { id: "eid53", tween: [ "style", "${_Ellipse_left03}", "opacity", '0', { fromValue: '1'}], position: 924, duration: 47 },
                { id: "eid14", tween: [ "style", "${_ARROW}", "opacity", '1', { fromValue: '0'}], position: 856, duration: 140 },
                { id: "eid15", tween: [ "style", "${_ARROW}", "opacity", '0', { fromValue: '1'}], position: 996, duration: 114 },
                { id: "eid10", tween: [ "style", "${_line02}", "opacity", '1', { fromValue: '0'}], position: 369, duration: 140 },
                { id: "eid11", tween: [ "style", "${_line02}", "opacity", '0', { fromValue: '1'}], position: 508, duration: 64 },
                { id: "eid30", tween: [ "motion", "${_Ellipse}", [[1047, 549, 0, 0],[1129.43, 651.3, 142.04, 0.72, 246.83, 1.26],[1179, 540.67, 0, 0]]], position: 627, duration: 230 },
                { id: "eid2", tween: [ "style", "${_ex}", "opacity", '0.279513', { fromValue: '0'}], position: 451, duration: 144 },
                { id: "eid12", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '0.279513'}], position: 595, duration: 128 },
                { id: "eid35", tween: [ "motion", "${_Ellipse02}", [[1047, 549, 0, 0],[1129.43, 651.3, 142.04, 0.72, 246.83, 1.26],[1179, 540.67, 0, 0]]], position: 657, duration: 230 },
                { id: "eid63", tween: [ "style", "${_line}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 94 },
                { id: "eid3", tween: [ "style", "${_line}", "opacity", '0', { fromValue: '1'}], position: 94, duration: 226 },
                { id: "eid64", tween: [ "style", "${_line01}", "opacity", '1', { fromValue: '0'}], position: 188, duration: 94 },
                { id: "eid4", tween: [ "style", "${_line01}", "opacity", '0', { fromValue: '1'}], position: 282, duration: 226 }            ]
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
})(jQuery, AdobeEdge, "EDGE-39432858");
