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
                id: 'con02',
                type: 'image',
                tag: 'img',
                rect: ['65', '93','779','470','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02.png"]
            },
            {
                id: 'ex02',
                type: 'image',
                rect: ['856px', '254px','349px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex02.png",'0px','0px']
            },
            {
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['881', '57','934','977','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'ex01',
                type: 'image',
                tag: 'img',
                rect: ['881', '57','934','977','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex01.png"]
            },
            {
                id: 'con02_ov',
                type: 'image',
                rect: ['1216px', '446px','199px','244px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02_ov.png",'0px','0px']
            },
            {
                id: 'con01_ov',
                type: 'image',
                rect: ['312px', '126px','260px','387px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01_ov.png",'0px','0px']
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1136px', '899px','1218px','180px','auto', 'auto'],
                opacity: 1,
                text: "크래크축 또는 캠축에 의해 구동되며 오일팬내에 오일을 흡입,<br>가압하여 각 윤활부에 공급하는 역활을 하는 것입니다.<br>오일펌프의 종류는 내접기어식과와 접기어식이 있다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1136px', '778px','527px','118px','auto', 'auto'],
                text: "오일펌프란 ?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_con02_ov}": [
                ["style", "top", '446px'],
                ["style", "opacity", '0'],
                ["style", "left", '1216px']
            ],
            "${_ex02}": [
                ["style", "top", '369px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '39deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '1015px']
            ],
            "${_con02}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1112px'],
                ["style", "font-size", '45px'],
                ["style", "top", '899px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '180px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1256px']
            ],
            "${_con01_ov}": [
                ["style", "top", '126px'],
                ["style", "opacity", '0'],
                ["style", "left", '312px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1112px'],
                ["style", "font-size", '80px'],
                ["style", "top", '778px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '527px'],
                ["style", "height", '118px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_ex01}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 958,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 747, duration: 212 },
                { id: "eid19", tween: [ "style", "${_ex02}", "left", '856px', { fromValue: '1015px'}], position: 417, duration: 212 },
                { id: "eid52", tween: [ "style", "${_txt_title}", "left", '1112px', { fromValue: '1112px'}], position: 958, duration: 0 },
                { id: "eid37", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 747, duration: 212 },
                { id: "eid2", tween: [ "style", "${_con02}", "opacity", '1', { fromValue: '0'}], position: 544, duration: 212 },
                { id: "eid33", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 694, duration: 212 },
                { id: "eid21", tween: [ "style", "${_ex02}", "top", '254px', { fromValue: '369px'}], position: 417, duration: 212 },
                { id: "eid27", tween: [ "style", "${_con01_ov}", "opacity", '1', { fromValue: '0'}], position: 694, duration: 61 },
                { id: "eid29", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 694, duration: 212 },
                { id: "eid51", tween: [ "style", "${_txt1}", "left", '1112px', { fromValue: '1112px'}], position: 958, duration: 0 },
                { id: "eid25", tween: [ "style", "${_con02_ov}", "opacity", '1', { fromValue: '0'}], position: 417, duration: 70 },
                { id: "eid17", tween: [ "transform", "${_ex02}", "scaleY", '1', { fromValue: '0.5'}], position: 417, duration: 212 },
                { id: "eid9", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 417, duration: 212 },
                { id: "eid35", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 694, duration: 212 },
                { id: "eid31", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 747, duration: 212 },
                { id: "eid40", tween: [ "style", "${_txt1}", "width", '1256px', { fromValue: '1256px'}], position: 958, duration: 0 },
                { id: "eid15", tween: [ "transform", "${_ex02}", "scaleX", '1', { fromValue: '0.5'}], position: 417, duration: 212 },
                { id: "eid4", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 42 },
                { id: "eid6", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 42 },
                { id: "eid7", tween: [ "style", "${_ex01}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 42 },
                { id: "eid23", tween: [ "transform", "${_ex02}", "rotateZ", '0deg', { fromValue: '39deg'}], position: 417, duration: 212 }            ]
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
})(jQuery, AdobeEdge, "EDGE-12968874");
