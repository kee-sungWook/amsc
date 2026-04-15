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
                id: 'Text2',
                type: 'text',
                rect: ['1613', '473','739','536','auto', 'auto'],
                text: "밋션오일의 순환과 클러치의 오일을<br>밸브바디를 통해 전달합니다.<br><br>오일펌프에 불량이 발생하면 기어를 <br>후진이나 전진으로 전환하였을 때 <br>떨림 증상 및 시동이 저절로 꺼지는 <br>증상이 발생될수 있습니다.<br><br>오일 순환이 불량하면 <br>변속기의 수명이 단축됩니다.",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "600", "none", "normal"]
            },
            {
                id: 'Text1',
                type: 'text',
                rect: ['1613', '316','474','86','auto', 'auto'],
                text: "오일펌프 란?",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,141)", "600", "none", "normal"]
            },
            {
                id: 'OP_parts4',
                type: 'image',
                tag: 'img',
                rect: ['49', '161','573','778','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OP_parts4.png"]
            },
            {
                id: 'OP_parts3',
                type: 'image',
                tag: 'img',
                rect: ['483', '462','276','343','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OP_parts3.png"]
            },
            {
                id: 'OP_parts2',
                type: 'image',
                tag: 'img',
                rect: ['765', '519','251','288','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OP_parts2.png"]
            },
            {
                id: 'OP_parts1',
                type: 'image',
                tag: 'img',
                rect: ['1027', '395','540','673','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OP_parts1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_OP_parts1}": [
                ["style", "top", '317px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '512px']
            ],
            "${_Text1}": [
                ["style", "opacity", '0'],
                ["style", "font-weight", '600']
            ],
            "${_OP_parts4}": [
                ["style", "top", '221px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '505px']
            ],
            "${_OP_parts2}": [
                ["style", "top", '503px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '688px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_OP_parts3}": [
                ["style", "top", '475px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '654px']
            ],
            "${_Text2}": [
                ["style", "opacity", '0'],
                ["style", "font-weight", '600']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1067,
            autoPlay: true,
            timeline: [
                { id: "eid68", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 267, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_OP_parts3}", "top", '462px', { fromValue: '475px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "transform", "${_OP_parts1}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid52", tween: [ "transform", "${_OP_parts4}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid60", tween: [ "style", "${_OP_parts2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid2", tween: [ "style", "${_OP_parts3}", "left", '483px', { fromValue: '654px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_OP_parts1}", "top", '395px', { fromValue: '317px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "transform", "${_OP_parts1}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid8", tween: [ "style", "${_OP_parts2}", "top", '519px', { fromValue: '503px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "transform", "${_OP_parts4}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid48", tween: [ "transform", "${_OP_parts2}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid56", tween: [ "transform", "${_OP_parts3}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid58", tween: [ "style", "${_OP_parts1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid64", tween: [ "style", "${_OP_parts3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid46", tween: [ "transform", "${_OP_parts2}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid16", tween: [ "style", "${_OP_parts4}", "top", '161px', { fromValue: '221px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "transform", "${_OP_parts3}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid62", tween: [ "style", "${_OP_parts4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300, easing: "easeInQuad" },
                { id: "eid14", tween: [ "style", "${_OP_parts4}", "left", '49px', { fromValue: '505px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_OP_parts1}", "left", '1027px', { fromValue: '512px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_OP_parts2}", "left", '765px', { fromValue: '688px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_Text1}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 267, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-21795624");
