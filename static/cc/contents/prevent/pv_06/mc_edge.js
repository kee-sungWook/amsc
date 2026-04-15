/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                rect: ['1252', '331px','706px','99px','auto', 'auto'],
                text: "점화플러그",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1252', '512','410px','66','auto', 'auto'],
                text: "정상 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1252', '604','1038px','249px','auto', 'auto'],
                text: "1. 이리듐 : 매 160,000Km(T-GDI엔진 70,000Km)<br>2. 백금 : 매 100,000Km<br>3. 니켈 : 매 60,000Km(RB차종부터 적용)",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1252', '771','1133px','235','auto', 'auto'],
                text: "점화플러그는 연소에 직접적으로 관여하므로<br>주기적으로 교체하지 않을 경우 연비저하는<br>물론 차량진동 및 소음과 배출가스가 <br>많이 발생한다.",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['158px', '206px','874','864','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt4}": [
                ["style", "top", '775px'],
                ["style", "opacity", '0'],
                ["style", "width", '1133px']
            ],
            "${_txt2}": [
                ["style", "top", '492px'],
                ["style", "opacity", '0'],
                ["style", "width", '410px']
            ],
            "${_txt3}": [
                ["style", "top", '584px'],
                ["style", "opacity", '0'],
                ["style", "height", '249px'],
                ["style", "width", '1038px']
            ],
            "${_txt1}": [
                ["style", "top", '311px'],
                ["style", "height", '99px'],
                ["style", "opacity", '0'],
                ["style", "width", '706px'],
                ["style", "font-size", '80px']
            ],
            "${_pic}": [
                ["style", "top", '206px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '158px']
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
                { id: "eid8", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt2}", "top", '500px', { fromValue: '492px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt1}", "top", '331px', { fromValue: '311px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt4}", "top", '881px', { fromValue: '775px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt3}", "top", '604px', { fromValue: '584px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
