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
                rect: ['98', '186','960','856','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE.png"]
            },
            {
                id: 'IMAGE-copy',
                type: 'image',
                tag: 'img',
                rect: ['98', '186','960','856','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE-copy.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1017px', '764px','1256px','258px','auto', 'auto'],
                opacity: 1,
                text: "냉각수 온도를 자동적으로 조정하는 장치를 말하는 것입니다. 엔진 시동 후 될수 있는 한 빠른 시간내에 냉각수온을 올리기 위해 사용되고 있습니다. 냉각 수온이 80도 전후로 될 때까지 냉각수 는 엔진에서 라디에이터로 흐르지 않고 온도가 높아지면 냉각수가 흐르게 된다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1017px', '645px','548px','92px','auto', 'auto'],
                text: "서모스탯이란 ?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_IMAGE-copy}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_IMAGE}": [
                ["transform", "scaleX", '1.2'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.2']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '1017px'],
                ["style", "font-size", '45px'],
                ["style", "top", '764px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '258px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1256px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1017px'],
                ["style", "font-size", '80px'],
                ["style", "top", '645px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '548px'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 930,
            autoPlay: true,
            timeline: [
                { id: "eid44", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 840, duration: 90 },
                { id: "eid20", tween: [ "transform", "${_IMAGE}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 250 },
                { id: "eid30", tween: [ "style", "${_IMAGE-copy}", "opacity", '1', { fromValue: '0'}], position: 288, duration: 11 },
                { id: "eid8", tween: [ "style", "${_IMAGE-copy}", "opacity", '0', { fromValue: '1'}], position: 299, duration: 84 },
                { id: "eid18", tween: [ "style", "${_IMAGE-copy}", "opacity", '0', { fromValue: '1'}], position: 489, duration: 92 },
                { id: "eid13", tween: [ "style", "${_IMAGE-copy}", "opacity", '0', { fromValue: '1'}], position: 697, duration: 91 },
                { id: "eid36", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 90 },
                { id: "eid28", tween: [ "style", "${_IMAGE}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 90 },
                { id: "eid22", tween: [ "transform", "${_IMAGE}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 90 }            ]
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
})(jQuery, AdobeEdge, "EDGE-5147087");
