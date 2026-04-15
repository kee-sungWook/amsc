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
                id: 'crank-axle-copy',
                type: 'image',
                tag: 'img',
                rect: ['370', '720','511','420','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"crank-axle-copy.png"]
            },
            {
                id: 'boby-copy',
                type: 'image',
                tag: 'img',
                rect: ['368', '528','636','619','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"boby-copy.png"]
            },
            {
                id: 'head_gasket-copy',
                type: 'image',
                tag: 'img',
                rect: ['435', '532','479','279','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"head_gasket-copy.png"]
            },
            {
                id: 'cylinder_head-copy',
                type: 'image',
                tag: 'img',
                rect: ['363', '433','551','374','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cylinder_head-copy.png"]
            },
            {
                id: 'cam_axle-copy',
                type: 'image',
                tag: 'img',
                rect: ['412', '316','372','227','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cam_axle-copy.png"]
            },
            {
                id: 'cylinderhead01-copy',
                type: 'image',
                tag: 'img',
                rect: ['365', '82','470','306','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cylinderhead01-copy.png"]
            },
            {
                id: 'locker_arm-copy',
                type: 'image',
                tag: 'img',
                rect: ['1231px', '172px','806','496','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"locker_arm-copy.png"]
            },
            {
                id: 'cam_axle_ov',
                type: 'image',
                rect: ['412px', '316px','372px','227px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cam_axle_ov.png",'0px','0px']
            },
            {
                id: 'locker_arm_ov01',
                type: 'image',
                rect: ['1231px', '172px','806px','496px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"locker_arm_ov01.png",'0px','0px']
            },
            {
                id: 'locker_arm_ov',
                type: 'image',
                rect: ['1231px', '172px','806px','496px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"locker_arm_ov.png",'0px','0px']
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1116px', '857px','1150px','259px','auto', 'auto'],
                opacity: 1,
                text: "4사이클 왕복형 엔진에서 흡기,배기 밸브를 개페할 목적으로<br>장착되어 있습니다. 타이밍밸트에 의해 구동되며 엔진은<br>캠 샤프트와 밸브의 위치에 따라 OHC,DOHV로 분류된다.<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1116px', '726px','299px','92px','auto', 'auto'],
                text: "캠축이란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_cam_axle_ov}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["style", "left", '412px']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1116px'],
                ["style", "font-size", '45px'],
                ["style", "top", '857px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '160px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1238px']
            ],
            "${_locker_arm_ov}": [
                ["style", "top", '172px'],
                ["style", "opacity", '0'],
                ["style", "left", '1231px']
            ],
            "${_cam_axle-copy}": [
                ["style", "left", '404px'],
                ["style", "top", '478px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1116px'],
                ["style", "font-size", '80px'],
                ["style", "top", '726px'],
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
            "${_cylinderhead01-copy}": [
                ["style", "left", '363px'],
                ["style", "top", '414px']
            ],
            "${_locker_arm_ov01}": [
                ["style", "top", '172px'],
                ["style", "opacity", '0'],
                ["style", "left", '1231px']
            ],
            "${_locker_arm-copy}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 933,
            autoPlay: true,
            timeline: [
                { id: "eid30", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 808, duration: 125 },
                { id: "eid31", tween: [ "style", "${_txt1}", "width", '1238px', { fromValue: '1238px'}], position: 933, duration: 0 },
                { id: "eid24", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 125 },
                { id: "eid4", tween: [ "style", "${_cam_axle-copy}", "top", '316px', { fromValue: '478px'}], position: 0, duration: 500 },
                { id: "eid2", tween: [ "style", "${_cam_axle-copy}", "left", '412px', { fromValue: '404px'}], position: 0, duration: 500 },
                { id: "eid10", tween: [ "style", "${_cam_axle_ov}", "opacity", '1', { fromValue: '0'}], position: 478, duration: 106 },
                { id: "eid12", tween: [ "style", "${_locker_arm_ov01}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 42 },
                { id: "eid15", tween: [ "style", "${_locker_arm_ov01}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 42 },
                { id: "eid16", tween: [ "style", "${_locker_arm_ov01}", "opacity", '1', { fromValue: '0'}], position: 708, duration: 42 },
                { id: "eid18", tween: [ "style", "${_locker_arm_ov}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 42 },
                { id: "eid8", tween: [ "style", "${_cylinderhead01-copy}", "top", '82px', { fromValue: '414px'}], position: 0, duration: 500 },
                { id: "eid20", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 125 },
                { id: "eid22", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 125 },
                { id: "eid6", tween: [ "style", "${_cylinderhead01-copy}", "left", '365px', { fromValue: '363px'}], position: 0, duration: 500 },
                { id: "eid26", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 808, duration: 125 },
                { id: "eid28", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 808, duration: 125 },
                { id: "eid14", tween: [ "style", "${_locker_arm-copy}", "opacity", '1', { fromValue: '0'}], position: 478, duration: 42 }            ]
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
})(jQuery, AdobeEdge, "EDGE-8183421");
