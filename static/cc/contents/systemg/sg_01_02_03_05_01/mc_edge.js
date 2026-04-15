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
                rect: ['549', '452','321','348','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tx-png.png"]
            },
            {
                id: 'con-png',
                type: 'image',
                tag: 'img',
                rect: ['72', '142','1235','945','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con-png.png"]
            },
            {
                id: 'ex-png',
                type: 'image',
                tag: 'img',
                rect: ['72', '142','1235','945','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex-png.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1278px', '366px','1070px','338px','auto', 'auto'],
                opacity: 1,
                text: "커먼레일 연료레일이란 고압펌프에서 발생된 높은 압력을 저장하는 곳 입니다.높은 압력은 저속,중속,고속에 필요에 따라 사용되며 연료레일에는 연료레일 압력센서와 연료압력조절밸브가 장착되어 엔진ECU에 의해 조정및 감지를 하고 있습니다.<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1278px', '235px','580px','92px','auto', 'auto'],
                text: "연료레일이란?",
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
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1278px'],
                ["style", "font-size", '80px'],
                ["style", "top", '235px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '580px'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0']
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
                ["style", "left", '1278px'],
                ["style", "width", '1070px'],
                ["style", "top", '366px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '338px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "font-size", '45px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 833,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
                { id: "eid17", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 583, duration: 250 },
                { id: "eid15", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid11", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
                { id: "eid13", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex-png}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid7", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 458, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-17969501");
