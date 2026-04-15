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
                rect: ['149', '143','756','943','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE.png"]
            },
            {
                id: 'ex',
                type: 'image',
                tag: 'img',
                rect: ['149', '143','756','943','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex.png"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1001px', '450px','424px','92px','auto', 'auto'],
                text: "TPS란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1001px', '577px','1288px','230px','auto', 'auto'],
                opacity: 1,
                text: "흡입공기량을 조절하는 스로틀밸브의 축을 연동하여 움직이는<br>가변저항기로서 밸브의 회전각도에 따른 출력값의 변화를 ECU로<br>전달하여 연료의 분사량을 조절한다.",
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
                ["style", "left", '1001px'],
                ["style", "font-size", '80px'],
                ["style", "top", '450px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '668px']
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
                ["style", "left", '1001px'],
                ["style", "font-size", '45px'],
                ["style", "top", '577px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '230px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1352px']
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
                { id: "eid12", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid20", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 583, duration: 250 },
                { id: "eid10", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid14", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
                { id: "eid16", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid6", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid21", tween: [ "style", "${_txt1}", "width", '1352px', { fromValue: '1352px'}], position: 1000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid8", tween: [ "style", "${_IMAGE}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-23083059");
