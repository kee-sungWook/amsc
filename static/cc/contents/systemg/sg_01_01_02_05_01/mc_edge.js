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
                id: 'gasket',
                type: 'image',
                rect: ['124px', '176px','1367px','794px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gasket.png",'0px','0px']
            },
            {
                id: 'gasket_ov',
                type: 'image',
                rect: ['124px', '176px','1367px','794px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gasket_ov.png",'0px','0px']
            },
            {
                id: 'txt1Copy',
                type: 'text',
                rect: ['1097px', '824px','1204px','230px','auto', 'auto'],
                opacity: 1,
                text: "실린더블록과 실린더헤드사이에 설치되며 혼합기의 밀봉과<br>냉각수 및 오일의 누출을 방지할 목적으로 장착되어 있습니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_titleCopy',
                type: 'text',
                rect: ['1097px', '703px','424px','92px','auto', 'auto'],
                text: "실린더헤드 가스켓",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt1Copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1085px'],
                ["style", "font-size", '45px'],
                ["style", "top", '830px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '230px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1204px']
            ],
            "${_gasket}": [
                ["style", "top", '176px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '124px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_gasket_ov}": [
                ["style", "top", '176px'],
                ["style", "opacity", '0'],
                ["style", "left", '124px']
            ],
            "${_txt_titleCopy}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1077px'],
                ["style", "font-size", '80px'],
                ["style", "top", '703px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '668px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1291,
            autoPlay: true,
            timeline: [
                { id: "eid68", tween: [ "style", "${_txt1Copy}", "top", '830px', { fromValue: '830px'}], position: 1291, duration: 0 },
                { id: "eid53", tween: [ "transform", "${_txt_titleCopy}", "scaleY", '1', { fromValue: '1.1'}], position: 1041, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_gasket}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 333 },
                { id: "eid59", tween: [ "style", "${_txt_titleCopy}", "opacity", '1', { fromValue: '0'}], position: 1041, duration: 250 },
                { id: "eid63", tween: [ "transform", "${_txt1Copy}", "scaleX", '1', { fromValue: '1.1'}], position: 1041, duration: 250 },
                { id: "eid43", tween: [ "style", "${_gasket}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333 },
                { id: "eid41", tween: [ "transform", "${_gasket}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 333 },
                { id: "eid65", tween: [ "transform", "${_txt1Copy}", "scaleY", '1', { fromValue: '1.1'}], position: 1041, duration: 250 },
                { id: "eid73", tween: [ "style", "${_txt_titleCopy}", "left", '1084px', { fromValue: '1077px'}], position: 1041, duration: 250 },
                { id: "eid61", tween: [ "style", "${_txt1Copy}", "opacity", '1', { fromValue: '0'}], position: 1041, duration: 250 },
                { id: "eid45", tween: [ "style", "${_gasket_ov}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 83 },
                { id: "eid47", tween: [ "style", "${_gasket_ov}", "opacity", '1', { fromValue: '0'}], position: 542, duration: 83 },
                { id: "eid48", tween: [ "style", "${_gasket_ov}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 83 },
                { id: "eid49", tween: [ "style", "${_gasket_ov}", "opacity", '0', { fromValue: '1'}], position: 958, duration: 83 },
                { id: "eid69", tween: [ "style", "${_txt1Copy}", "left", '1085px', { fromValue: '1085px'}], position: 1291, duration: 0 },
                { id: "eid66", tween: [ "style", "${_txt_titleCopy}", "width", '668px', { fromValue: '668px'}], position: 1291, duration: 0 },
                { id: "eid51", tween: [ "transform", "${_txt_titleCopy}", "scaleX", '1', { fromValue: '1.1'}], position: 1041, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-21007117");
