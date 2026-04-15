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
                rect: ['1251', '344px','848px','106px','auto', 'auto'],
                text: "타이밍 벨트",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1251', '493','402px','66','auto', 'auto'],
                text: "정상 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1251', '586px','1122px','55','auto', 'auto'],
                text: "- 80,000Km : 알파/베타/오메가/4D56TDI<br>- 120,000Km : 뮤엔진<br>- 140,000Km : 뮤엔진(2010MY~)/세타2/베타엔진<br>- 160,000Km : D엔진",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2Copy3',
                type: 'text',
                rect: ['1251', '493','402px','66','auto', 'auto'],
                text: "가혹 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3Copy3',
                type: 'text',
                rect: ['1251', '586px','1122px','55','auto', 'auto'],
                text: "- 60,000Km : 알파/베타/오메가/4D56TDI<br>- 80,000Km : 뮤엔진<br>- 90,000Km : 뮤엔진(2010MY~)/세타2/베타엔진<br>- 60,000Km : D엔진",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1251', '753','1142px','235','auto', 'auto'],
                text: "타이밍밸트는 엔진 상부에 있는 캠축과 하부에<br>있는 크랭크축을 작동하며 운행중 절손으로<br>인하여 피스톤이 실린더와 부딪쳐 손상을<br>가져와 엔진을 수리하여야 한다.",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['188', '134','910','1029','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt3Copy}": [
                ["style", "top", '360px'],
                ["style", "opacity", '1'],
                ["style", "width", '1122px']
            ],
            "${_txt2}": [
                ["style", "top", '205px'],
                ["style", "opacity", '0'],
                ["style", "width", '402px']
            ],
            "${_pic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt2Copy2}": [
                ["style", "top", '261px'],
                ["style", "opacity", '1'],
                ["style", "width", '402px']
            ],
            "${_txt3Copy3}": [
                ["style", "top", '653px'],
                ["style", "opacity", '0'],
                ["style", "width", '1122px']
            ],
            "${_txt2Copy}": [
                ["style", "top", '261px'],
                ["style", "opacity", '1'],
                ["style", "width", '402px']
            ],
            "${_txt4}": [
                ["style", "top", '908px'],
                ["style", "opacity", '0'],
                ["style", "width", '1142px']
            ],
            "${_txt3Copy2}": [
                ["style", "top", '360px'],
                ["style", "opacity", '1'],
                ["style", "width", '1122px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_txt2Copy3}": [
                ["style", "top", '605px'],
                ["style", "opacity", '0'],
                ["style", "width", '402px']
            ],
            "${_txt3}": [
                ["style", "top", '296px'],
                ["style", "opacity", '0'],
                ["style", "width", '1122px']
            ],
            "${_txt1}": [
                ["style", "top", '72px'],
                ["style", "font-size", '80px'],
                ["style", "height", '106px'],
                ["style", "opacity", '0'],
                ["style", "left", '1251px'],
                ["style", "width", '848px']
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
                { id: "eid16", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_txt2}", "top", '261px', { fromValue: '205px'}], position: 499, duration: 267, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_txt3Copy3}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 933, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_txt4}", "top", '955px', { fromValue: '908px'}], position: 933, duration: 267, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 499, duration: 267, easing: "easeOutQuad" },
                { id: "eid35", tween: [ "style", "${_txt2Copy3}", "top", '621px', { fromValue: '605px'}], position: 733, duration: 267, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_txt1}", "top", '116px', { fromValue: '72px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_txt3Copy3}", "top", '698px', { fromValue: '653px'}], position: 833, duration: 267, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_txt2Copy3}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt3}", "top", '360px', { fromValue: '296px'}], position: 633, duration: 267, easing: "easeOutQuad" }            ]
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
