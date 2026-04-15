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
                id: 'xon02',
                type: 'image',
                tag: 'img',
                rect: ['1606', '345','386','472','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"xon02.png"]
            },
            {
                id: 'ex02',
                type: 'image',
                tag: 'img',
                rect: ['1606', '345','386','472','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex02.png"]
            },
            {
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['181', '173','1084','473','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'ex01',
                type: 'image',
                tag: 'img',
                rect: ['181', '173','1084','473','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex01.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['106px', '984px','2194px','259px','auto', 'auto'],
                opacity: 1,
                text: "엔진이 정지했을 때 연료탱크에서 증발되는 연료가스를 포집하여 대기중으로 방출되는 것을 방지하는 역활을 합니다.<br>캐니스터 내부에는 활성탄이 들어있으면 엔진 시동시 PCSV밸브 제어에 의해  흡디다기관을 통해 연소실로 유입된다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['106px', '856px','515px','92px','auto', 'auto'],
                opacity: 1,
                text: "캐니스터란 ?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ex02}": [
                ["style", "opacity", '1']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '106px'],
                ["style", "font-size", '80px'],
                ["style", "top", '856px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '515px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '106px'],
                ["style", "font-size", '45px'],
                ["style", "top", '984px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '160px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '2194px']
            ],
            "${_ex01}": [
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1067,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 817, duration: 250 },
                { id: "eid28", tween: [ "style", "${_ex02}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 42 },
                { id: "eid73", tween: [ "style", "${_ex02}", "opacity", '0', { fromValue: '1'}], position: 208, duration: 42 },
                { id: "eid74", tween: [ "style", "${_ex02}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 42 },
                { id: "eid75", tween: [ "style", "${_ex02}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 42 },
                { id: "eid46", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 817, duration: 250 },
                { id: "eid48", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 250 },
                { id: "eid44", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 817, duration: 250 },
                { id: "eid27", tween: [ "style", "${_ex01}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 42 },
                { id: "eid70", tween: [ "style", "${_ex01}", "opacity", '0', { fromValue: '1'}], position: 208, duration: 42 },
                { id: "eid71", tween: [ "style", "${_ex01}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 42 },
                { id: "eid72", tween: [ "style", "${_ex01}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 42 },
                { id: "eid42", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 667, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 667, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-10094877");
