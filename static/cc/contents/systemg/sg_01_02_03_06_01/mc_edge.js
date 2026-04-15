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
                rect: ['1046px', '721px','1262px','338px','auto', 'auto'],
                opacity: 1,
                text: "커먼레일에 장착된 스로틀플랩은 엔진 시동OFF시 압축착화 방식인 디젤엔진 특성에 따라 엔진의 진동(디젤링) 현상을 방지하여 시동OFF시 떨림을 방지할 목적으로 장착되어 있으며 또한 스로틀플랩의 작동으로 EGR제어를 하여 매연을 저감할 목적으로 장착되어 있습니다.<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1046px', '588px','881px','92px','auto', 'auto'],
                text: "스로틀플랩 이란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'con-png',
                type: 'image',
                tag: 'img',
                rect: ['81', '109','1337','851','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con-png.png"]
            },
            {
                id: 'ex-png',
                type: 'image',
                tag: 'img',
                rect: ['81', '109','1337','851','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex-png.png"]
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
                ["style", "left", '1046px'],
                ["style", "font-size", '80px'],
                ["style", "top", '588px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '881px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1046px'],
                ["style", "width", '1288px'],
                ["style", "top", '721px'],
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
                { id: "eid17", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 583, duration: 250 },
                { id: "eid15", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex-png}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid18", tween: [ "style", "${_txt1}", "width", '1288px', { fromValue: '1288px'}], position: 833, duration: 0 },
                { id: "eid11", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
                { id: "eid13", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
                { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
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
})(jQuery, AdobeEdge, "EDGE-21460334");
