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
                id: 'con02',
                type: 'image',
                rect: ['177px', '50px','815px','1140px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02.png",'0px','0px']
            },
            {
                id: 'con01',
                type: 'image',
                rect: ['177px', '50px','815px','1140px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png",'0px','0px']
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1007px', '616px','1204px','230px','auto', 'auto'],
                opacity: 1,
                text: "엔진의 피스톤은 혼합기의 폭발력을 크랭크샤프트에 전달하여<br>동력을 발생시키는 역활을 한다.<br>피스톤에는 압축링과오일링이 장착되어 있다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1007px', '495px','424px','92px','auto', 'auto'],
                text: "피스톤",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1007px'],
                ["style", "font-size", '80px'],
                ["style", "top", '495px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '424px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_con02}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '177px']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1007px'],
                ["style", "font-size", '45px'],
                ["style", "top", '616px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '230px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1344px']
            ],
            "${_con01}": [
                ["style", "top", '50px'],
                ["style", "opacity", '0'],
                ["style", "left", '177px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1042,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 875, duration: 167 },
                { id: "eid4", tween: [ "transform", "${_con02}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid17", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 791, duration: 167 },
                { id: "eid19", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 875, duration: 167 },
                { id: "eid6", tween: [ "style", "${_con02}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid13", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 791, duration: 167 },
                { id: "eid15", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 791, duration: 167 },
                { id: "eid24", tween: [ "style", "${_txt1}", "width", '1344px', { fromValue: '1344px'}], position: 1041, duration: 0 },
                { id: "eid8", tween: [ "style", "${_con01}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 42 },
                { id: "eid9", tween: [ "style", "${_con01}", "opacity", '1', { fromValue: '0'}], position: 416, duration: 42 },
                { id: "eid10", tween: [ "style", "${_con01}", "opacity", '1', { fromValue: '0'}], position: 583, duration: 42 },
                { id: "eid11", tween: [ "style", "${_con01}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 42 },
                { id: "eid23", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 167 },
                { id: "eid2", tween: [ "transform", "${_con02}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-24097170");
