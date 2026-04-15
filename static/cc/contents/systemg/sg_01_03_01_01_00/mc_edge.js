/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'preloadAudio': false
};
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
                tag: 'img',
                rect: ['1100px', '120px','757','705','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02.png"]
            },
            {
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['101', '186','795','814','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'gary02',
                type: 'image',
                tag: 'img',
                rect: ['1100px', '120px','757','705','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gary02.png"]
            },
            {
                id: 'gary01',
                type: 'image',
                tag: 'img',
                rect: ['101', '186','795','814','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gary01.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['719px', '1029px','1654px','259px','auto', 'auto'],
                opacity: 1,
                text: "가솔린엔진에서는12V를 사용하며 내부에는 납전지가 사용되고 있습니다.<br>사용한 전기를 보충하면 장기간 사용할 수 있습니다.<br>배터리 용량은 방전전류와 방전시간을 계산한 것으로 Ah(암페어)를 사용합니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['719px', '916px','299px','92px','auto', 'auto'],
                text: "배터리(축전지)란 ?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_con02}": [
                ["style", "left", '1100px'],
                ["style", "top", '120px']
            ],
            "${_gary02}": [
                ["style", "top", '120px'],
                ["style", "opacity", '0'],
                ["style", "left", '1100px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '719px'],
                ["style", "font-size", '80px'],
                ["style", "top", '916px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '686px'],
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
            "${_gary01}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '719px'],
                ["style", "font-size", '45px'],
                ["style", "top", '1029px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '160px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1654px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 717,
            autoPlay: true,
            timeline: [
                { id: "eid22", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 250 },
                { id: "eid7", tween: [ "style", "${_gary02}", "opacity", '1', { fromValue: '0'}], position: 41, duration: 42 },
                { id: "eid8", tween: [ "style", "${_gary02}", "opacity", '1', { fromValue: '0'}], position: 208, duration: 42 },
                { id: "eid9", tween: [ "style", "${_gary02}", "opacity", '1', { fromValue: '0'}], position: 375, duration: 42 },
                { id: "eid10", tween: [ "style", "${_gary02}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 42 },
                { id: "eid20", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 250 },
                { id: "eid16", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 250 },
                { id: "eid12", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 250 },
                { id: "eid14", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 250 },
                { id: "eid2", tween: [ "style", "${_gary01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_gary01}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_gary01}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_gary01}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid23", tween: [ "style", "${_txt_title}", "width", '686px', { fromValue: '686px'}], position: 717, duration: 0 },
                { id: "eid18", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2411761");
