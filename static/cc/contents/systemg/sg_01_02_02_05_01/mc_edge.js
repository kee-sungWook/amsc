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
                id: 'IMAGE',
                type: 'image',
                tag: 'img',
                rect: ['117', '140','1049','949','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE.png"]
            },
            {
                id: 'ex',
                type: 'image',
                tag: 'img',
                rect: ['117', '140','1049','949','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex.png"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['998px', '206px','424px','92px','auto', 'auto'],
                text: "투웨이 밸브 란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['998px', '333px','1288px','230px','auto', 'auto'],
                opacity: 1,
                text: "엔진ECU에서 전기적인 신호를 이용하여 진공을 ON/OFF하므로<br>2차적인 부품들을 제어하는 엑츄에이터입니다.<br>(사용예: 캐니스터제어,트로틀플랩제어,EGR제어 등)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ex}": [
                ["style", "opacity", '0']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '998px'],
                ["style", "font-size", '80px'],
                ["style", "top", '206px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '668px'],
                ["style", "height", '92px'],
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
            "${_IMAGE}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '998px'],
                ["style", "font-size", '45px'],
                ["style", "top", '333px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '230px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1288px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 972,
            autoPlay: true,
            timeline: [
                { id: "eid19", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 722, duration: 250 },
                { id: "eid15", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 722, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 37 },
                { id: "eid3", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 37 },
                { id: "eid4", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 37 },
                { id: "eid5", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 37 },
                { id: "eid17", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 542, duration: 250 },
                { id: "eid7", tween: [ "style", "${_IMAGE}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid13", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 722, duration: 250 },
                { id: "eid11", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 542, duration: 250 },
                { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 542, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-20628624");
