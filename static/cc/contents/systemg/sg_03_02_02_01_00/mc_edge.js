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
                id: 'txt2',
                type: 'text',
                rect: ['998', '445','1174','482','auto', 'auto'],
                opacity: 1,
                text: "일반적으로 브레이크 페달은 클러치 페달과 나란히 <br>장치되어 있으며,가속 페달과 번갈아 조작하지만 <br>각각 브레이크의 종류에 따라서 밟는 힘도 달라지게 된다. <br><br>서보 유압식 브레이크를 사용한 브레이크 페달은 <br>밟는 압력에 비례하여 제동 작용이 된다. <br><br>서보 유압식은 진공이나 압축 공기의 힘이 유압 기구에<br>가해지는 원리이다. ",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['998', '289','714','86','auto', 'auto'],
                opacity: 1,
                text: "브레이크페달이란 ?",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'whiteThing',
                type: 'image',
                tag: 'img',
                rect: ['230', '9','645','1212','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteThing.png"]
            },
            {
                id: 'balckThing',
                type: 'image',
                tag: 'img',
                rect: ['230', '9','645','1212','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"balckThing.png"]
            },
            {
                id: 'pics',
                type: 'image',
                tag: 'img',
                rect: ['229', '8','647','1214','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pics.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt2}": [
                ["style", "opacity", '0']
            ],
            "${_pics}": [
                ["style", "opacity", '0']
            ],
            "${_balckThing}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_whiteThing}": [
                ["style", "opacity", '0']
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
            duration: 1267,
            autoPlay: true,
            timeline: [
                { id: "eid30", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 766, duration: 267 },
                { id: "eid28", tween: [ "style", "${_pics}", "opacity", '1', { fromValue: '0'}], position: 466, duration: 301, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_balckThing}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 67 },
                { id: "eid5", tween: [ "style", "${_balckThing}", "opacity", '0', { fromValue: '0.995025'}], position: 67, duration: 66 },
                { id: "eid7", tween: [ "style", "${_balckThing}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 67 },
                { id: "eid8", tween: [ "style", "${_balckThing}", "opacity", '0', { fromValue: '0.995025'}], position: 200, duration: 66 },
                { id: "eid11", tween: [ "style", "${_balckThing}", "opacity", '1', { fromValue: '0'}], position: 266, duration: 67 },
                { id: "eid12", tween: [ "style", "${_balckThing}", "opacity", '0', { fromValue: '0.995025'}], position: 333, duration: 66 },
                { id: "eid32", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 267 },
                { id: "eid4", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 67 },
                { id: "eid6", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 133, duration: 66 },
                { id: "eid9", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 67 },
                { id: "eid10", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 266, duration: 66 },
                { id: "eid13", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 67 },
                { id: "eid14", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 399, duration: 66 }            ]
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
})(jQuery, AdobeEdge, "EDGE-29390595");
