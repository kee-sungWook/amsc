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
                rect: ['1206px', '324px','800px','111px','auto', 'auto'],
                text: "클러치 디스크",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1206', '499','379px','66','auto', 'auto'],
                text: "정상 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1206', '591px','800px','55','auto', 'auto'],
                text: "매 70,000Km ~ 80,000Km 교환",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1206', '759','1182px','175','auto', 'auto'],
                text: "클러치디스크는 엔진과 밋션에 동력을 연결하는 <br>장치로써 과다 마모로 인할경우 변속이 불가능하며<br>심한 경우는 주행이 불가능합니다.",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['119', '285','1025','734','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt4}": [
                ["style", "top", '739px'],
                ["style", "opacity", '0'],
                ["style", "width", '1182px']
            ],
            "${_txt3}": [
                ["style", "top", '571px'],
                ["style", "opacity", '0'],
                ["style", "width", '800px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_pic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt1}": [
                ["style", "top", '304px'],
                ["style", "font-size", '80px'],
                ["style", "height", '111px'],
                ["style", "opacity", '0'],
                ["style", "left", '1206px'],
                ["style", "width", '800px']
            ],
            "${_txt2}": [
                ["style", "top", '479px'],
                ["style", "opacity", '0'],
                ["style", "width", '379px']
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
                { id: "eid12", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt2}", "top", '499px', { fromValue: '479px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt1}", "top", '324px', { fromValue: '304px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt4}", "top", '759px', { fromValue: '739px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt3}", "top", '591px', { fromValue: '571px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
