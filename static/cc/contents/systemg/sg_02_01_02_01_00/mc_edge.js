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
                id: 'tc5',
                type: 'image',
                tag: 'img',
                rect: ['279', '484','417','574','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tc5.png"]
            },
            {
                id: 'tc4',
                type: 'image',
                tag: 'img',
                rect: ['659', '610','209','321','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tc4.png"]
            },
            {
                id: 'tc3',
                type: 'image',
                tag: 'img',
                rect: ['880', '522','350','498','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tc3.png"]
            },
            {
                id: 'tc2',
                type: 'image',
                tag: 'img',
                rect: ['1332', '506','343','530','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tc2.png"]
            },
            {
                id: 'tc1',
                type: 'image',
                tag: 'img',
                rect: ['1698', '487','422','568','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tc1.png"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['373', '272','1819px','158','auto', 'auto'],
                text: "유체를 사용하여 동력을 전달하는 장치로서 토크를 증폭하는 기능을 합니다.<br>엔진의 회전력을 2~3배 강하게 하는 역활과 클러치 기능을 하고 있습니다.<br>토크컨버터 내부에는  펌프임펠러,터빈러너,스테이터가 장착되어 있습니다.",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "600", "none", "normal"]
            },
            {
                id: 'Text1',
                type: 'text',
                rect: ['374', '153','554','86','auto', 'auto'],
                text: "토크컨버터 란?",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "600", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text1}": [
                ["style", "font-weight", '600'],
                ["style", "opacity", '0']
            ],
            "${_tc2}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '383px'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Text2}": [
                ["style", "font-weight", '600'],
                ["style", "opacity", '0'],
                ["style", "width", '1819px']
            ],
            "${_tc3}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '374px'],
                ["transform", "scaleY", '0.9']
            ],
            "${_tc1}": [
                ["style", "top", '485px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '365px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_tc5}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_tc4}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '383px'],
                ["transform", "scaleY", '0.9']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1334,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 367 },
                { id: "eid32", tween: [ "transform", "${_tc3}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid44", tween: [ "style", "${_tc3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid20", tween: [ "transform", "${_tc4}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_tc1}", "left", '1698px', { fromValue: '365px'}], position: 767, duration: 367, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "transform", "${_tc2}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid16", tween: [ "transform", "${_tc2}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid36", tween: [ "style", "${_tc2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid38", tween: [ "style", "${_tc4}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid28", tween: [ "transform", "${_tc5}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid14", tween: [ "style", "${_tc1}", "top", '487px', { fromValue: '485px'}], position: 767, duration: 367, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_tc4}", "left", '659px', { fromValue: '383px'}], position: 967, duration: 367, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_Text1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367 },
                { id: "eid30", tween: [ "transform", "${_tc5}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid40", tween: [ "style", "${_tc1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid34", tween: [ "transform", "${_tc3}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_tc2}", "left", '1332px', { fromValue: '383px'}], position: 833, duration: 367, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_tc5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid22", tween: [ "transform", "${_tc4}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid24", tween: [ "transform", "${_tc1}", "scaleX", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid26", tween: [ "transform", "${_tc1}", "scaleY", '1', { fromValue: '0.9'}], position: 500, duration: 233, easing: "easeInQuad" },
                { id: "eid8", tween: [ "style", "${_tc3}", "left", '880px', { fromValue: '374px'}], position: 900, duration: 367, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-25300641");
