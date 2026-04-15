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
                rect: ['1189', '353','279px','86','auto', 'auto'],
                text: "냉각수",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1189', '536','415px','66','auto', 'auto'],
                text: "정상 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1189', '628','703px','55','auto', 'auto'],
                text: "매 40,000Km 교환",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1189', '796','1198px','175','auto', 'auto'],
                text: "겨울철 한랭지에 차량을 방치할 경우<br>냉각수가 얼어서 팽창하게 되고 라지에이터나 <br>엔진에 손상을 주어 운행이 불가능하게 됩니다.",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['328', '172','592','966','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt4}": [
                ["style", "top", '776px'],
                ["style", "opacity", '0'],
                ["style", "width", '1198px']
            ],
            "${_txt2}": [
                ["style", "top", '516px'],
                ["style", "opacity", '0'],
                ["style", "width", '415px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_txt1}": [
                ["style", "top", '333px'],
                ["style", "opacity", '0'],
                ["style", "width", '279px']
            ],
            "${_pic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt3}": [
                ["style", "top", '608px'],
                ["style", "opacity", '0'],
                ["style", "width", '703px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 934,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt2}", "top", '536px', { fromValue: '516px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt1}", "top", '353px', { fromValue: '333px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt4}", "top", '796px', { fromValue: '776px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt3}", "top", '628px', { fromValue: '608px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
