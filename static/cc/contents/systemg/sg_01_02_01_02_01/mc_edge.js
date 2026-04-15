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
                id: 'con-png',
                type: 'image',
                tag: 'img',
                rect: ['111', '145','1010','884','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con-png.png"]
            },
            {
                id: 'ex-png',
                type: 'image',
                tag: 'img',
                rect: ['111', '145','1010','884','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex-png.png"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1073px', '553px','424px','92px','auto', 'auto'],
                text: "연료모터란 ?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1079px', '662px','1290px','230px','auto', 'auto'],
                opacity: 1,
                text: "엔진이 작동중에 연료탱크내의 연료를 흡입,가압하여 인젝터로<br>공급하는 장치 입니다.<br>전기식 모터와 엔진구동으로 작동되는 기계식 펌프가 있습니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ex-png}": [
                ["style", "opacity", '1']
            ],
            "${_con-png}": [
                ["style", "opacity", '0']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1073px'],
                ["style", "font-size", '80px'],
                ["style", "top", '553px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '668px']
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
                ["style", "left", '1079px'],
                ["style", "font-size", '45px'],
                ["style", "top", '662px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '230px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1290px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1182,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 932, duration: 250 },
                { id: "eid16", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 792, duration: 250 },
                { id: "eid20", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 792, duration: 250 },
                { id: "eid18", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 932, duration: 250 },
                { id: "eid14", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 792, duration: 250 },
                { id: "eid8", tween: [ "style", "${_con-png}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 250 },
                { id: "eid3", tween: [ "style", "${_ex-png}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex-png}", "opacity", '0', { fromValue: '1'}], position: 208, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex-png}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 42 },
                { id: "eid6", tween: [ "style", "${_ex-png}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 42 },
                { id: "eid10", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 932, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-17788359");
