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
                rect: ['1103', '288px','822px','120px','auto', 'auto'],
                text: "휠얼라인먼트",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1103', '463','425px','66','auto', 'auto'],
                text: "정상 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1103', '556','822px','55','auto', 'auto'],
                text: "핸들이 쏠리거나 편마모시 조정",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1103', '724','1269px','235','auto', 'auto'],
                text: "차륜정렬의 변형이 있을 경우는 직진성과<br>선회시 복원력의 차이로 인하여 정상적인 주행이<br>불가능합니다. 물론 타이어의 편마모를 가져와<br>2차적인 비용이 부담됩니다.",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['271', '122','539','1024','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt4}": [
                ["style", "top", '704px'],
                ["style", "opacity", '0'],
                ["style", "width", '1269px']
            ],
            "${_txt2}": [
                ["style", "top", '443px'],
                ["style", "opacity", '0'],
                ["style", "width", '425px']
            ],
            "${_txt3}": [
                ["style", "top", '536px'],
                ["style", "opacity", '0'],
                ["style", "width", '822px']
            ],
            "${_txt1}": [
                ["style", "top", '268px'],
                ["style", "height", '120px'],
                ["style", "opacity", '0'],
                ["style", "font-size", '80px'],
                ["style", "width", '822px']
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
                { id: "eid14", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt2}", "top", '463px', { fromValue: '443px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid23", tween: [ "style", "${_txt2}", "top", '461px', { fromValue: '463px'}], position: 734, duration: 199 },
                { id: "eid10", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt1}", "top", '288px', { fromValue: '268px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt4}", "top", '724px', { fromValue: '704px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt3}", "top", '556px', { fromValue: '536px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
