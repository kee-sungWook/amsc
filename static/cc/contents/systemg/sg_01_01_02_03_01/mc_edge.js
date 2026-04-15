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
                id: 'con_ov',
                type: 'image',
                tag: 'img',
                rect: ['165', '162','1506','887','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con_ov.png"]
            },
            {
                id: 'con_01',
                type: 'image',
                rect: ['165px', '162px','1506px','887px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con_01.png",'0px','0px']
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['918px', '875px','1404px','230px','auto', 'auto'],
                opacity: 1,
                text: "로커암을 지지하며 내부는 중공으로 되어 있고 오일펌프에서<br>옹일을 공급받아 로커암의 윤활작용을 한다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['918px', '754px','666px','92px','auto', 'auto'],
                text: "로커암 샤프트란 ?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '918px'],
                ["style", "font-size", '45px'],
                ["style", "top", '875px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '230px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1404px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '918px'],
                ["style", "font-size", '80px'],
                ["style", "top", '754px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '666px'],
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
            "${_con_ov}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_con_01}": [
                ["style", "top", '162px'],
                ["style", "opacity", '0'],
                ["style", "left", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 738,
            autoPlay: true,
            timeline: [
                { id: "eid22", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 542, duration: 196 },
                { id: "eid16", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 196 },
                { id: "eid18", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 542, duration: 196 },
                { id: "eid4", tween: [ "transform", "${_con_ov}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 196 },
                { id: "eid14", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 458, duration: 196 },
                { id: "eid8", tween: [ "style", "${_con_01}", "opacity", '1', { fromValue: '0'}], position: 196, duration: 42 },
                { id: "eid9", tween: [ "style", "${_con_01}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid10", tween: [ "style", "${_con_01}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid12", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 458, duration: 196 },
                { id: "eid6", tween: [ "style", "${_con_ov}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 196 },
                { id: "eid2", tween: [ "transform", "${_con_ov}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 196 },
                { id: "eid20", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 542, duration: 196 }            ]
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
})(jQuery, AdobeEdge, "EDGE-19923860");
