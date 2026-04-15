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
                rect: ['119', '132','1049','785','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE.png"]
            },
            {
                id: 'ex',
                type: 'image',
                tag: 'img',
                rect: ['119', '132','1049','785','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex.png"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['955px', '784px','424px','92px','auto', 'auto'],
                text: "MAP(맵)센서 란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['955px', '911px','1288px','230px','auto', 'auto'],
                opacity: 1,
                text: "흡기 다기관의 부압 변동에 다른 흡입 공기량을 간접적으로 검출하여<br>엔진ECU로 입력하면 엔진ECU는 부압 상태에 알맞는 연료 분사량 및<br>점화시기를 조절하는 것입니다.",
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
                ["style", "left", '908px'],
                ["style", "font-size", '80px'],
                ["style", "top", '788px'],
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
                ["style", "left", '899px'],
                ["style", "font-size", '45px'],
                ["style", "top", '911px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '230px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1412px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid19", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid29", tween: [ "style", "${_txt_title}", "left", '908px', { fromValue: '908px'}], position: 1000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 583, duration: 250 },
                { id: "eid13", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
                { id: "eid11", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
                { id: "eid15", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid23", tween: [ "style", "${_txt1}", "left", '899px', { fromValue: '899px'}], position: 1000, duration: 0 },
                { id: "eid2", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid6", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid7", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid24", tween: [ "style", "${_txt1}", "width", '1412px', { fromValue: '1412px'}], position: 1000, duration: 0 },
                { id: "eid27", tween: [ "style", "${_txt_title}", "top", '788px', { fromValue: '788px'}], position: 1000, duration: 0 },
                { id: "eid4", tween: [ "style", "${_IMAGE}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-21507802");
