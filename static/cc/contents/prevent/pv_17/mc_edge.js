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
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['283', '124','909','1064','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1402', '363','580px','86','auto', 'auto'],
                text: "에바크리닝",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1402', '546','520px','66','auto', 'auto'],
                text: "정상 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1402', '638','635px','55','auto', 'auto'],
                text: "매 20,000Km 점검",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1402', '806','990px','175','auto', 'auto'],
                text: "에바크리닝은 에어컨및히터작동시 <br>냄새가 날 경우 냄새를 제거하기 <br>위해 세척을 해주어야 합니다.",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt4}": [
                ["style", "top", '786px'],
                ["style", "opacity", '0'],
                ["style", "width", '990px']
            ],
            "${_txt3}": [
                ["style", "top", '618px'],
                ["style", "opacity", '0'],
                ["style", "width", '635px']
            ],
            "${_txt2}": [
                ["style", "top", '526px'],
                ["style", "opacity", '0'],
                ["style", "width", '520px']
            ],
            "${_txt1}": [
                ["style", "top", '343px'],
                ["style", "opacity", '0'],
                ["style", "width", '580px']
            ],
            "${_pic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
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
                { id: "eid20", tween: [ "style", "${_txt2}", "top", '546px', { fromValue: '526px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt1}", "top", '363px', { fromValue: '343px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt4}", "top", '806px', { fromValue: '786px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt3}", "top", '638px', { fromValue: '618px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
