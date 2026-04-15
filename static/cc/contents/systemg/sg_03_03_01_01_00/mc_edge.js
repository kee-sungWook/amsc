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
                rect: ['1560', '683','739','320','auto', 'auto'],
                text: "차바퀴 와 함께 회전하는 디스크를 <br>브레이크 패드가 양측에서 강제로<br>압착시켜 챠랑을 정지시키는 장치. <br><br>디스크와 패드가 노출되어 있으므로,<br>방열성이 뛰어나다.",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1558', '489','741','86','auto', 'auto'],
                text: "브레이크 디스크 란?",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'whiteThing',
                type: 'image',
                rect: ['101px', '130px','1390px','970px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteThing.png",'0px','0px']
            },
            {
                id: 'blackThing',
                type: 'image',
                rect: ['101px', '130px','1390px','970px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackThing.png",'0px','0px']
            },
            {
                id: 'pics',
                type: 'image',
                tag: 'img',
                rect: ['101', '130','1390','970','auto', 'auto'],
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
            "${_blackThing}": [
                ["style", "top", '130px'],
                ["style", "opacity", '0'],
                ["style", "left", '101px']
            ],
            "${_pics}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_whiteThing}": [
                ["style", "top", '130px'],
                ["style", "opacity", '0'],
                ["style", "left", '101px']
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
            duration: 1167,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 67 },
                { id: "eid5", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 67, duration: 66 },
                { id: "eid7", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 67 },
                { id: "eid8", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 200, duration: 66 },
                { id: "eid11", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 266, duration: 67 },
                { id: "eid12", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '0.995025'}], position: 333, duration: 66 },
                { id: "eid16", tween: [ "style", "${_pics}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 266, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 267, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 68, duration: 67 },
                { id: "eid6", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 134, duration: 66 },
                { id: "eid9", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 201, duration: 67 },
                { id: "eid10", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 267, duration: 66 },
                { id: "eid13", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 334, duration: 67 },
                { id: "eid14", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '0.995025'}], position: 400, duration: 66 }            ]
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
