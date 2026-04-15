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
                id: 'co01',
                type: 'image',
                tag: 'img',
                rect: ['143', '148','2114','606','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"co01.png"]
            },
            {
                id: 'ex',
                type: 'image',
                tag: 'img',
                rect: ['143', '148','2114','606','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['106px', '888px','925px','92px','auto', 'auto'],
                text: "크랭크 각 센서란?",
                align: "left",
                font: ['나눔고딕, NanumGothic', 80, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['106px', '994px','2189px','113px','auto', 'auto'],
                text: "가솔린,디젤 연료분사장치에서 점화시기 제어에 필요한 크랭크축 회전각도를 검출하기 위한 센서입니다.<br>크랭축이 회전함에 따라 교류전압이 발생하며 펄스 신호로 바꾸어 크랭축의 회전각도를 파악하는 것입니다.",
                align: "left",
                font: ['나눔고딕, NanumGothic', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ex}": [
                ["style", "opacity", '0']
            ],
            "${_Text}": [
                ["style", "left", '106px'],
                ["style", "top", '898px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_co01}": [
                ["style", "opacity", '0']
            ],
            "${_Text4}": [
                ["style", "top", '1011px'],
                ["style", "height", '113px'],
                ["style", "left", '106px'],
                ["style", "width", '2189px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 708,
            autoPlay: true,
            timeline: [
                { id: "eid7", tween: [ "style", "${_co01}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid10", tween: [ "style", "${_Text4}", "top", '1011px', { fromValue: '1011px'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 250, duration: 458 },
                { id: "eid11", tween: [ "style", "${_Text}", "top", '898px', { fromValue: '898px'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-19531127");
