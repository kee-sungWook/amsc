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
                id: 'txt1',
                type: 'text',
                rect: ['1286px', '148','623px','86','auto', 'auto'],
                text: "밋션(변속기)오일",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1286px', '325','381px','66','auto', 'auto'],
                text: "정상조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt2Copy5',
                type: 'text',
                rect: ['1286px', '325','381px','66','auto', 'auto'],
                text: "가혹조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1286px', '418','867px','175','auto', 'auto'],
                text: "1. 수동변속기 : 무교환<br>2. 자동변속기 : 매 100,000Km<br>(단, 6단 자동변속기 차량은 무교환)",
                align: "auto",
                font: ['나눔고딕', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt3Copy',
                type: 'text',
                rect: ['1286px', '418','867px','175','auto', 'auto'],
                text: "1. 수동변속기<br>   - 2010MY이전 : 매 100,000Km<br>   - 2010MY이후 : 매 120,000Km<br>2. 자동변속기 : 매 40,000Km<br>(단, 6단 자동변속기 차량은 100,000Km)",
                align: "auto",
                font: ['나눔고딕', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1286px', '708','1100px','345px','auto', 'auto'],
                text: "자동변속기는 오일을 이용하여 변속시점 및 변속이 <br>이루어지기 때문에 주기적인 오일 교환이 되지 않을 <br>경우는 고장에 원인이 될수 있다.<br><br>수동변속기는 오일에 영향을 크게 받지 않으나 주기적<br>으로 보충및교환을 하여야 하며 만약 교체하지 않을 <br>경우는 변속시 무거울수 있다.",
                align: "auto",
                font: ['나눔고딕', 40, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic3',
                type: 'image',
                tag: 'img',
                rect: ['704', '740','339','429','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic3.png"]
            },
            {
                id: 'pic2',
                type: 'image',
                tag: 'img',
                rect: ['242', '719','335','450','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2.png"]
            },
            {
                id: 'pic1',
                type: 'image',
                tag: 'img',
                rect: ['145', '152','961','515','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt3Copy}": [
                ["style", "top", '643px'],
                ["style", "font-size", '45px'],
                ["style", "opacity", '0'],
                ["style", "left", '1286px'],
                ["style", "width", '867px']
            ],
            "${_txt3}": [
                ["style", "top", '350px'],
                ["style", "width", '867px'],
                ["style", "opacity", '0'],
                ["style", "left", '1286px'],
                ["style", "font-size", '45px']
            ],
            "${_pic1}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt1}": [
                ["style", "top", '128px'],
                ["style", "opacity", '0'],
                ["style", "left", '1286px'],
                ["style", "width", '623px']
            ],
            "${_txt2Copy2}": [
                ["style", "top", '325px'],
                ["style", "opacity", '1'],
                ["style", "width", '381px']
            ],
            "${_txt2Copy3}": [
                ["style", "top", '305px'],
                ["style", "opacity", '0'],
                ["style", "width", '381px']
            ],
            "${_txt2}": [
                ["style", "top", '247px'],
                ["style", "opacity", '0'],
                ["style", "left", '1286px'],
                ["style", "width", '381px']
            ],
            "${_pic3}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt2Copy5}": [
                ["style", "top", '499px'],
                ["style", "opacity", '0'],
                ["style", "left", '1286px'],
                ["style", "width", '381px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_txt4}": [
                ["style", "top", '885px'],
                ["style", "width", '1100px'],
                ["style", "height", '345px'],
                ["style", "opacity", '0'],
                ["style", "left", '1286px'],
                ["style", "font-size", '40px']
            ],
            "${_txt2Copy4}": [
                ["style", "top", '322px'],
                ["style", "opacity", '0.8597260117530823'],
                ["style", "width", '381px']
            ],
            "${_pic2}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1333,
            autoPlay: true,
            timeline: [
                { id: "eid26", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 1066, duration: 267, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "transform", "${_pic1}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_txt2}", "top", '209px', { fromValue: '247px'}], position: 1000, duration: 267, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 267, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_txt2Copy5}", "top", '481px', { fromValue: '499px'}], position: 900, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "transform", "${_pic2}", "scaleX", '1', { fromValue: '0.9'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_txt3}", "top", '286px', { fromValue: '350px'}], position: 800, duration: 267, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_pic2}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "transform", "${_pic1}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_txt3Copy}", "top", '552px', { fromValue: '643px'}], position: 700, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 608, duration: 267, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "transform", "${_pic3}", "scaleY", '1', { fromValue: '0.9'}], position: 267, duration: 367, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_txt4}", "top", '837px', { fromValue: '885px'}], position: 608, duration: 267, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_txt1}", "top", '78px', { fromValue: '128px'}], position: 1066, duration: 267, easing: "easeOutQuad" },
                { id: "eid47", tween: [ "style", "${_txt3Copy}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 267, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "transform", "${_pic3}", "scaleX", '1', { fromValue: '0.9'}], position: 267, duration: 367, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_pic3}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 367, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "transform", "${_pic2}", "scaleY", '1', { fromValue: '0.9'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_txt2Copy5}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 267, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 267, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-31339615");
