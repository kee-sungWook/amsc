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
                id: 'bearing',
                type: 'image',
                tag: 'img',
                rect: ['1033', '157','395','435','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bearing.png"]
            },
            {
                id: 'cover',
                type: 'image',
                tag: 'img',
                rect: ['330', '172','753','961','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover.png"]
            },
            {
                id: 'disk',
                type: 'image',
                tag: 'img',
                rect: ['87', '464','528','710','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"disk.png"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1516', '447','799','590','auto', 'auto'],
                text: "플라이 휠과 압력판사이에 있으며<br>플라이 휠의 회전력을 클러치 샤프트에<br>전달하는 원판 모양의 부품을 말한다.<br><br>클러치 디스크에는 코일 스프링이나<br>고무를 넣거나 프릭션 와셔를 끼우고<br>엔진에서 오는 회전 방향의 진동을<br>부드럽게 하는 역활도 한다.<br><br>진동의 완충특성을 디스크 비틀림<br>특성이라고도 한다.",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1516', '306','634','86','auto', 'auto'],
                text: "클러치디스크 란?",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bearing}": [
                ["style", "top", '271px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '824px']
            ],
            "${_cover}": [
                ["style", "top", '129px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '439px']
            ],
            "${_txt2}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_disk}": [
                ["style", "top", '301px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '476px']
            ],
            "${_txt1}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1233,
            autoPlay: true,
            timeline: [
                { id: "eid20", tween: [ "transform", "${_disk}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid14", tween: [ "transform", "${_cover}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid30", tween: [ "style", "${_bearing}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid34", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 233, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_bearing}", "left", '1033px', { fromValue: '824px'}], position: 367, duration: 300, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_disk}", "top", '464px', { fromValue: '301px'}], position: 367, duration: 300, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_cover}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid24", tween: [ "transform", "${_bearing}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid28", tween: [ "style", "${_disk}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid6", tween: [ "style", "${_cover}", "left", '330px', { fromValue: '439px'}], position: 367, duration: 300, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "transform", "${_bearing}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid2", tween: [ "style", "${_disk}", "left", '87px', { fromValue: '476px'}], position: 367, duration: 300, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "transform", "${_cover}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid18", tween: [ "transform", "${_disk}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_bearing}", "top", '157px', { fromValue: '271px'}], position: 367, duration: 300, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 767, duration: 233, easing: "easeInQuad" },
                { id: "eid8", tween: [ "style", "${_cover}", "top", '172px', { fromValue: '129px'}], position: 367, duration: 300, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-24012515");
