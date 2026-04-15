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
                id: 'txt1',
                type: 'text',
                rect: ['1453', '232','674px','86','auto', 'auto'],
                text: "브레이크 오일",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1453', '413','455px','66','auto', 'auto'],
                text: "정상조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1453', '505','816px','55','auto', 'auto'],
                text: "매 40,000Km교환",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1453', '672','940px','355','auto', 'auto'],
                text: "브레이크 오일은 일반적인 오일과는 <br>다르게 주기적인 오일 교환이 꼭 <br>이루어져야 한다. 그렇치 않을 경우 <br>오일내에 수분과 이물질로 인한  베이퍼록 <br>현상이 발생하여 정상적으로 브레이크가 <br>작동하지 않을수도 있다.",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['64', '219','1335','826','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt4}": [
                ["style", "top", '652px'],
                ["style", "opacity", '0'],
                ["style", "width", '940px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt3}": [
                ["style", "top", '485px'],
                ["style", "opacity", '0'],
                ["style", "width", '816px']
            ],
            "${_txt1}": [
                ["style", "top", '212px'],
                ["style", "opacity", '0'],
                ["style", "width", '674px']
            ],
            "${_pic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt2}": [
                ["style", "top", '393px'],
                ["style", "opacity", '0'],
                ["style", "width", '455px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 934,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt2}", "top", '413px', { fromValue: '393px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt1}", "top", '232px', { fromValue: '212px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt4}", "top", '672px', { fromValue: '652px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt3}", "top", '505px', { fromValue: '485px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-31339615");
