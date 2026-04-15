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
                rect: ['223', '255','1382','728','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tx-png.png"]
            },
            {
                id: 'con-png',
                type: 'image',
                tag: 'img',
                rect: ['62', '78','1367','1059','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con-png.png"]
            },
            {
                id: 'ex-png',
                type: 'image',
                tag: 'img',
                rect: ['62', '78','1367','1059','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex-png.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1157px', '777px','1098px','333px','auto', 'auto'],
                opacity: 1,
                text: "자동차가 주행에 필요한 압력을 발생하는 장치로서 엔진 회전수에 따라 발생되는 압력의 차이가 있습니다.또한 고압펌프 내부는 아주 정교하게 만들어져 미세한이 물질에도 쉽게 고압펌프 내부는 손상될 수 있으며 항상 연료라인을 청결하게 유지하여야 하고 주기적으로 점검하여야 합니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1157px', '653px','535px','92px','auto', 'auto'],
                text: "고압펌프란 ?",
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
                ["style", "left", '987px'],
                ["style", "font-size", '80px'],
                ["style", "top", '653px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '535px']
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
                ["style", "left", '987px'],
                ["style", "font-size", '45px'],
                ["style", "top", '777px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '333px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1296px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 858,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 608, duration: 250 },
                { id: "eid18", tween: [ "style", "${_txt_title}", "left", '987px', { fromValue: '987px'}], position: 858, duration: 0 },
                { id: "eid20", tween: [ "style", "${_txt1}", "width", '1296px', { fromValue: '1296px'}], position: 858, duration: 0 },
                { id: "eid11", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 608, duration: 250 },
                { id: "eid7", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
                { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex-png}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid17", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 608, duration: 250 },
                { id: "eid19", tween: [ "style", "${_txt1}", "left", '987px', { fromValue: '987px'}], position: 858, duration: 0 },
                { id: "eid15", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-8835130");
