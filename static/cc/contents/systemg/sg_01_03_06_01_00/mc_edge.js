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
                id: 'drea',
                type: 'image',
                tag: 'img',
                rect: ['361', '33','1676','802','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drea.png"]
            },
            {
                id: 'gary',
                type: 'image',
                tag: 'img',
                rect: ['361', '33','1676','802','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gary.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['109px', '942px','2224px','232px','auto', 'auto'],
                opacity: 1,
                text: "이중 스파크와 시중 스파크는 플라스틱 주형 코일이다. 이에 따라 컴팩트한 디자인이 가능해졌고 또한 위 면의 넓은<br>면적은 두 개의 분리된 고전압 타워가 이 점화 코일에 공급된다. 코일은 외부로 연결된 철심에 의해 냉각되고 고정된다.<br>점화 코일은 배터리처럼 항상 같은 점화 단자에 연결되어야 하는 2.2uf 커패시터가 장착되어 있다.<br>이 커패시터는 절대로 1번 단자에 연결되어서는 안된다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['110px', '818px','299px','92px','auto', 'auto'],
                text: "점화코일이란?",
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
                ["style", "left", '110px'],
                ["style", "font-size", '80px'],
                ["style", "top", '818px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '664px'],
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
            "${_gary}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '109px'],
                ["style", "font-size", '40px'],
                ["style", "top", '942px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '232px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '2250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1333,
            autoPlay: true,
            timeline: [
                { id: "eid23", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 417, duration: 250 },
                { id: "eid25", tween: [ "style", "${_txt1}", "width", '2250px', { fromValue: '2250px'}], position: 792, duration: 0 },
                { id: "eid19", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
                { id: "eid13", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 542, duration: 250 },
                { id: "eid15", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 542, duration: 250 },
                { id: "eid26", tween: [ "style", "${_txt1}", "font-size", '40px', { fromValue: '40px'}], position: 1333, duration: 0 },
                { id: "eid8", tween: [ "style", "${_gary}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid9", tween: [ "style", "${_gary}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid10", tween: [ "style", "${_gary}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid11", tween: [ "style", "${_gary}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid21", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
                { id: "eid24", tween: [ "style", "${_txt_title}", "width", '664px', { fromValue: '664px'}], position: 792, duration: 0 },
                { id: "eid17", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 542, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-4903608");
