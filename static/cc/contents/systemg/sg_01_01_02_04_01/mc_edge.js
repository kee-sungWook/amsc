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
                rect: ['177', '296','869','638','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con_ov.png"]
            },
            {
                id: 'con_02',
                type: 'image',
                tag: 'img',
                rect: ['177', '296','869','638','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con_02.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1105px', '652px','1204px','230px','auto', 'auto'],
                opacity: 1,
                text: "로커암은 푸시로드 또는 캠과 접촉되어 밸브의 개폐작동을 한다.<br>로커암샤프트에 고정되어 작동하며 실린더 헤드에 장착된다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1105px', '531px','424px','92px','auto', 'auto'],
                text: "로커암",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_con_02}": [
                ["style", "opacity", '0']
            ],
            "${_con_ov}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1105px'],
                ["style", "font-size", '80px'],
                ["style", "top", '531px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '424px']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1105px'],
                ["style", "font-size", '45px'],
                ["style", "top", '652px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '140px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "text-align", 'left'],
                ["style", "width", '1294px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 917,
            autoPlay: true,
            timeline: [
                { id: "eid32", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 708, duration: 209 },
                { id: "eid28", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 208 },
                { id: "eid30", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 708, duration: 209 },
                { id: "eid20", tween: [ "style", "${_con_02}", "opacity", '1', { fromValue: '0'}], position: 292, duration: 42 },
                { id: "eid21", tween: [ "style", "${_con_02}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 42 },
                { id: "eid22", tween: [ "style", "${_con_02}", "opacity", '0', { fromValue: '1'}], position: 583, duration: 42 },
                { id: "eid16", tween: [ "transform", "${_con_ov}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 292 },
                { id: "eid26", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 625, duration: 208 },
                { id: "eid39", tween: [ "style", "${_txt1}", "height", '140px', { fromValue: '140px'}], position: 917, duration: 0 },
                { id: "eid24", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 625, duration: 208 },
                { id: "eid18", tween: [ "style", "${_con_ov}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 292 },
                { id: "eid34", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 708, duration: 209 },
                { id: "eid14", tween: [ "transform", "${_con_ov}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 292 }            ]
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
