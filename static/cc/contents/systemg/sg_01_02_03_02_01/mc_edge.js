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
                rect: ['152', '164','957','900','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con-png.png"]
            },
            {
                id: 'ex-png',
                type: 'image',
                tag: 'img',
                rect: ['152', '164','957','806','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex-png.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1200px', '339px','1096px','326px','auto', 'auto'],
                opacity: 1,
                text: "커먼레일 인젝터는 실린더헤드에 직립형태로 장착되어<br>있습니다. 고압펌프에서 발생된 고압의 연료를 실린더로<br>직접분사하는 직접분사방식입니다.<br>기존 디젤엔진과 다르게 인젝터는 엔진 ECU가 제어하여 <br>인젝터에 장착된 솔레노이드의 제어로 연료를 분사하도록<br> 되어 있습니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1200px', '210px','896px','92px','auto', 'auto'],
                text: "커먼레일 인젝터 란?",
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
                ["style", "left", '1183px'],
                ["style", "font-size", '80px'],
                ["style", "top", '210px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '896px']
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
                ["style", "left", '1175px'],
                ["style", "width", '1172px'],
                ["style", "top", '339px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '326px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "font-size", '45px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 875,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 625, duration: 250 },
                { id: "eid25", tween: [ "style", "${_txt_title}", "left", '1183px', { fromValue: '1183px'}], position: 875, duration: 0 },
                { id: "eid15", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid11", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 625, duration: 250 },
                { id: "eid7", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
                { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
                { id: "eid19", tween: [ "style", "${_txt1}", "width", '1172px', { fromValue: '1172px'}], position: 875, duration: 0 },
                { id: "eid23", tween: [ "style", "${_txt1}", "left", '1175px', { fromValue: '1175px'}], position: 875, duration: 0 },
                { id: "eid17", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex-png}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex-png}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 }            ]
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
})(jQuery, AdobeEdge, "EDGE-6581169");
