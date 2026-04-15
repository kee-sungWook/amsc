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
                id: 'tx-png',
                type: 'image',
                tag: 'img',
                rect: ['179', '1052','1300','43','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tx-png.png"]
            },
            {
                id: 'con-png',
                type: 'image',
                tag: 'img',
                rect: ['96', '124','1451','847','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con-png.png"]
            },
            {
                id: 'ex-png',
                type: 'image',
                tag: 'img',
                rect: ['96', '124','1451','847','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex-png.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1589px', '313px','748px','456px','auto', 'auto'],
                opacity: 1,
                text: "커먼레일 연료휠터는 기존 연료휠터와 같은 기능인 이물질제거,수분제거등을 하고 있으며 겨울철 경유의 빙결현상을 방지할 목적으로 연료히팅장치가 내장되어 있습니다.<br>엔진의 종류에 따라 나누어지지만 역활은 동일 합니다.<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1589px', '180px','299px','92px','auto', 'auto'],
                text: "라디에이터란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ex-png}": [
                ["style", "opacity", '0']
            ],
            "${_tx-png}": [
                ["style", "opacity", '0']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1589px'],
                ["style", "font-size", '80px'],
                ["style", "top", '180px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '622px']
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
                ["style", "left", '1589px'],
                ["style", "font-size", '45px'],
                ["style", "top", '313px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '456px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '748px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 850,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 600, duration: 250 },
                { id: "eid15", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid11", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 600, duration: 250 },
                { id: "eid7", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
                { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
                { id: "eid22", tween: [ "style", "${_txt_title}", "width", '622px', { fromValue: '622px'}], position: 850, duration: 0 },
                { id: "eid17", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex-png}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid21", tween: [ "style", "${_tx-png}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-16650052");
