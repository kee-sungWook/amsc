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
                id: 'ocv',
                type: 'image',
                tag: 'img',
                rect: ['130', '196','1240','920','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ocv.png"]
            },
            {
                id: 'ex',
                type: 'image',
                tag: 'img',
                rect: ['130', '196','1240','920','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex.png"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['951px', '142px','424px','92px','auto', 'auto'],
                text: "OCV 밸브 란 ?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['951px', '269px','1288px','230px','auto', 'auto'],
                opacity: 1,
                text: "ECM의 PWM신호를 받아 엔진오일의 경로를 바꿔 캠페이져로 오일을 공급 또는 유출 시키는 CVVT오일 컨트롤 밸브를 말하는 것입니다.<br>엔진 정지시와 시동시에 듀티비가\"0\"이기 때문에 단연히 전류는 흐르지 않고 최대 지각상태가 된다. 아이들시에도 이에 가깝고 안전성과 향상을 위해 최소오버랩을 유지할 필요성이 있기 때문에 최대 지각 상태가 된다.이후에는 흡기측은 조건에 따라 진각 상태로 이동 시킨다.<br>",
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
            "${_txt1}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '498px'],
                ["style", "font-size", '45px'],
                ["style", "top", '146px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '320px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1813px']
            ],
            "${_ocv}": [
                ["style", "opacity", '0']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '497px'],
                ["style", "font-size", '80px'],
                ["style", "top", '47px'],
                ["transform", "scaleY", '1'],
                ["style", "opacity", '1'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1'],
                ["style", "width", '668px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
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
                { id: "eid7", tween: [ "style", "${_ocv}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 42 }            ]
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
})(jQuery, AdobeEdge, "EDGE-22297182");
