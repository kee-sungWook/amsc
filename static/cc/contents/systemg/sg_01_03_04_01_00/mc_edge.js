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
                id: 'title',
                type: 'image',
                tag: 'img',
                rect: ['1048px', '-412px','1139','331','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"title.png"]
            },
            {
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['159', '113','678','1003','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'gary',
                type: 'image',
                tag: 'img',
                rect: ['159', '113','678','1003','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gary.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['938px', '583px','1322px','278px','auto', 'auto'],
                opacity: 1,
                text: "배전 기구는 배전기 캡과 로터로 구성되어 점화 코일에서 발생된<br>2차 전압을 각 점화 플러그에 분배시키는 역할을 한다. 점화 코일의<br>2차 전압은 배전기 캡의 중심 전극에서 카본 피스를 경유하여 로터에<br>전달되면 로터가 회전하면서 배전기 캡의 플러그 전극에 약간의<br>불꽃으로 전달되어 고압 케이블를 경유하여 점화 플러그에 분배된다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['940px', '462px','424px','92px','auto', 'auto'],
                text: "배전기란?",
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
                ["style", "left", '868px'],
                ["style", "font-size", '80px'],
                ["style", "top", '462px'],
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
            "${_gary}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '876px'],
                ["style", "font-size", '45px'],
                ["style", "top", '583px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '278px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1430px']
            ],
            "${_title}": [
                ["style", "left", '1048px'],
                ["style", "top", '-412px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 583,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "transform", "${_txt1}", "scaleY", '1.0006', { fromValue: '1.1'}], position: 333, duration: 250 },
                { id: "eid18", tween: [ "style", "${_txt_title}", "left", '868px', { fromValue: '868px'}], position: 583, duration: 0 },
                { id: "eid15", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 250 },
                { id: "eid2", tween: [ "style", "${_gary}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_gary}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_gary}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_gary}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid7", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 333, duration: 250 },
                { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 333, duration: 250 },
                { id: "eid21", tween: [ "style", "${_txt1}", "width", '1430px', { fromValue: '1430px'}], position: 583, duration: 0 },
                { id: "eid19", tween: [ "style", "${_txt1}", "left", '876px', { fromValue: '876px'}], position: 583, duration: 0 },
                { id: "eid17", tween: [ "style", "${_txt1}", "opacity", '0.9940119981765747', { fromValue: '0'}], position: 333, duration: 250 },
                { id: "eid11", tween: [ "transform", "${_txt1}", "scaleX", '1.0006', { fromValue: '1.1'}], position: 333, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2045641");
