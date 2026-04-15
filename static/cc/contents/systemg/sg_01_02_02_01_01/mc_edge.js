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
                id: 'txt_title',
                type: 'text',
                rect: ['1043px', '703px','424px','92px','auto', 'auto'],
                text: "스텝모터",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1043px', '824px','1288px','230px','auto', 'auto'],
                opacity: 1,
                text: "자동차의 스텝모터는 전기부하, 에어컨,동력조향장치를 작동시킬 때<br>컴퓨터의 제어신호에 의해서 공전속도를 조절할 수 있도록<br>정방향과 역방향 회전이 가능하다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'IMAGE',
                type: 'image',
                tag: 'img',
                rect: ['107', '143','1314','711','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE.png"]
            },
            {
                id: 'ex',
                type: 'image',
                rect: ['107px', '143px','1314px','711px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ex}": [
                ["style", "top", '143px'],
                ["style", "opacity", '0'],
                ["style", "left", '107px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '977px'],
                ["style", "font-size", '80px'],
                ["style", "top", '703px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '668px'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_IMAGE}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '977px'],
                ["style", "font-size", '45px'],
                ["style", "top", '830px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '230px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1384px']
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
                { id: "eid17", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 625, duration: 250 },
                { id: "eid27", tween: [ "style", "${_txt_title}", "left", '977px', { fromValue: '977px'}], position: 1000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid15", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 625, duration: 250 },
                { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid11", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid24", tween: [ "style", "${_txt1}", "width", '1384px', { fromValue: '1384px'}], position: 1000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_IMAGE}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid28", tween: [ "style", "${_txt1}", "left", '977px', { fromValue: '977px'}], position: 1000, duration: 0 },
                { id: "eid19", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 }            ]
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
})(jQuery, AdobeEdge, "EDGE-11003169");
