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
                id: 'con4-copy',
                type: 'image',
                tag: 'img',
                rect: ['882', '755','503','349','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con4-copy.png"]
            },
            {
                id: 'con03-copy',
                type: 'image',
                tag: 'img',
                rect: ['1000', '720','438','288','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con03-copy.png"]
            },
            {
                id: 'con02-copy',
                type: 'image',
                tag: 'img',
                rect: ['845', '631','539','421','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02-copy.png"]
            },
            {
                id: 'con02_ov',
                type: 'image',
                rect: ['845px', '631px','539px','421px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02_ov.png",'0px','0px']
            },
            {
                id: 'con01-copy',
                type: 'image',
                tag: 'img',
                rect: ['869', '554','441','283','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01-copy.png"]
            },
            {
                id: 'boby-copy',
                type: 'image',
                tag: 'img',
                rect: ['173', '271','720','702','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"boby-copy.png"]
            },
            {
                id: 'head_gasket-copy',
                type: 'image',
                tag: 'img',
                rect: ['249', '276','543','316','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"head_gasket-copy.png"]
            },
            {
                id: 'cylinder_head-copy',
                type: 'image',
                tag: 'img',
                rect: ['168', '164','623','424','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cylinder_head-copy.png"]
            },
            {
                id: 'cam_axle-copy',
                type: 'image',
                tag: 'img',
                rect: ['226', '202','422','256','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cam_axle-copy.png"]
            },
            {
                id: 'cylinderhead01-copy',
                type: 'image',
                tag: 'img',
                rect: ['186', '114','532','345','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cylinderhead01-copy.png"]
            },
            {
                id: 'con02_ov02',
                type: 'image',
                rect: ['845px', '554px','593px','550px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02_ov02.png",'0px','0px']
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['915px', '253px','1404px','230px','auto', 'auto'],
                opacity: 1,
                text: "엔진내에서의 피스톤의 왕복운동을 회전운동으로 바꾸는 축을 말하는 것 입니다. 메인베어링에 지지되어 있으며 크랭크 저널이라고 말하는 주축과 커넥팅로드가 부착되어 있는 크랭크판 암 이것들의 중량 밸런스를 잡기 위한 카운트 웨이트로 되어 있습니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['915px', '132px','299px','92px','auto', 'auto'],
                text: "크랭크축",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_con02_ov}": [
                ["style", "top", '631px'],
                ["style", "opacity", '0'],
                ["style", "left", '845px']
            ],
            "${_con4-copy}": [
                ["style", "top", '667px'],
                ["style", "left", '252px']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '915px'],
                ["style", "font-size", '45px'],
                ["style", "top", '253px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '230px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1404px']
            ],
            "${_con03-copy}": [
                ["style", "top", '632px'],
                ["style", "left", '370px']
            ],
            "${_con02_ov02}": [
                ["style", "top", '554px'],
                ["style", "opacity", '0'],
                ["style", "left", '845px']
            ],
            "${_con02-copy}": [
                ["style", "top", '543px'],
                ["style", "left", '215px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '915px'],
                ["style", "font-size", '80px'],
                ["style", "top", '132px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '494px'],
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
            "${_con01-copy}": [
                ["style", "top", '466px'],
                ["style", "left", '239px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid26", tween: [ "style", "${_con02_ov02}", "opacity", '1', { fromValue: '0'}], position: 516, duration: 42 },
                { id: "eid27", tween: [ "style", "${_con02_ov02}", "opacity", '1', { fromValue: '0'}], position: 641, duration: 42 },
                { id: "eid28", tween: [ "style", "${_con02_ov02}", "opacity", '1', { fromValue: '0'}], position: 766, duration: 42 },
                { id: "eid29", tween: [ "style", "${_con02_ov02}", "opacity", '0', { fromValue: '1'}], position: 891, duration: 42 },
                { id: "eid41", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 958, duration: 292 },
                { id: "eid14", tween: [ "style", "${_con4-copy}", "top", '793px', { fromValue: '667px'}], position: 0, duration: 157 },
                { id: "eid24", tween: [ "style", "${_con4-copy}", "top", '755px', { fromValue: '793px'}], position: 157, duration: 343 },
                { id: "eid16", tween: [ "style", "${_con4-copy}", "left", '263px', { fromValue: '252px'}], position: 0, duration: 157 },
                { id: "eid23", tween: [ "style", "${_con4-copy}", "left", '882px', { fromValue: '263px'}], position: 157, duration: 343 },
                { id: "eid39", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 958, duration: 292 },
                { id: "eid8", tween: [ "style", "${_con03-copy}", "left", '381px', { fromValue: '370px'}], position: 0, duration: 157 },
                { id: "eid19", tween: [ "style", "${_con03-copy}", "left", '1000px', { fromValue: '381px'}], position: 157, duration: 343 },
                { id: "eid4", tween: [ "style", "${_con02-copy}", "left", '226px', { fromValue: '215px'}], position: 0, duration: 157 },
                { id: "eid17", tween: [ "style", "${_con02-copy}", "left", '845px', { fromValue: '226px'}], position: 157, duration: 343 },
                { id: "eid6", tween: [ "style", "${_con03-copy}", "top", '758px', { fromValue: '632px'}], position: 0, duration: 157 },
                { id: "eid20", tween: [ "style", "${_con03-copy}", "top", '720px', { fromValue: '758px'}], position: 157, duration: 343 },
                { id: "eid12", tween: [ "style", "${_con01-copy}", "left", '250px', { fromValue: '239px'}], position: 0, duration: 157 },
                { id: "eid21", tween: [ "style", "${_con01-copy}", "left", '869px', { fromValue: '250px'}], position: 157, duration: 343 },
                { id: "eid10", tween: [ "style", "${_con01-copy}", "top", '592px', { fromValue: '466px'}], position: 0, duration: 157 },
                { id: "eid22", tween: [ "style", "${_con01-copy}", "top", '554px', { fromValue: '592px'}], position: 157, duration: 343 },
                { id: "eid31", tween: [ "style", "${_con02_ov}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 83 },
                { id: "eid33", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 792, duration: 292 },
                { id: "eid35", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 792, duration: 292 },
                { id: "eid37", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 792, duration: 292 },
                { id: "eid2", tween: [ "style", "${_con02-copy}", "top", '669px', { fromValue: '543px'}], position: 0, duration: 157 },
                { id: "eid18", tween: [ "style", "${_con02-copy}", "top", '631px', { fromValue: '669px'}], position: 157, duration: 343 },
                { id: "eid43", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 958, duration: 292 }            ]
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
})(jQuery, AdobeEdge, "EDGE-10978863");
