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
                id: 'drum3',
                type: 'image',
                tag: 'img',
                rect: ['1754', '352','618','740','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drum3.png"]
            },
            {
                id: 'drum2',
                type: 'image',
                tag: 'img',
                rect: ['28', '314','793','817','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drum2.png"]
            },
            {
                id: 'drum1',
                type: 'image',
                tag: 'img',
                rect: ['900', '323','761','799','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drum1.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['673', '79','1045','86','auto', 'auto'],
                text: "다양한 모습의 브레이크 드럼",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_drum1}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_drum3}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_drum2}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt1}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1433,
            autoPlay: true,
            timeline: [
                { id: "eid20", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 300 },
                { id: "eid18", tween: [ "style", "${_drum3}", "opacity", '1', { fromValue: '0'}], position: 533, duration: 600, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "transform", "${_drum3}", "scaleX", '1', { fromValue: '0.9'}], position: 533, duration: 600, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_drum2}", "scaleX", '1', { fromValue: '0.9'}], position: 267, duration: 600, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "transform", "${_drum1}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 567, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "transform", "${_drum2}", "scaleY", '1', { fromValue: '0.9'}], position: 267, duration: 600, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_drum2}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 600, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_drum1}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 567, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_drum1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 567, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "transform", "${_drum3}", "scaleY", '1', { fromValue: '0.9'}], position: 533, duration: 600, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-29390595");
