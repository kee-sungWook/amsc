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
                rect: ['1144', '277','513px','86','auto', 'auto'],
                text: "에어크리너",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1144', '461','460px','66','auto', 'auto'],
                text: "정상조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1144', '553','1006px','175','auto', 'auto'],
                text: "주기적으로 매 40,000Km 주행 후 교환",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1144', '844','1245px','235','auto', 'auto'],
                text: "주기적인 교환이 이루어 지지 않을 경우에는<br>먼지 누적으로 인한 소음이 발생하거나,<br>연비가 많이 떨어질 수 있음.<br>",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic3',
                type: 'image',
                tag: 'img',
                rect: ['421', '678','493','485','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic3.png"]
            },
            {
                id: 'pic2',
                type: 'image',
                tag: 'img',
                rect: ['409', '435','395','327','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2.png"]
            },
            {
                id: 'pic1',
                type: 'image',
                tag: 'img',
                rect: ['316', '120','685','380','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt4}": [
                ["style", "top", '824px'],
                ["style", "opacity", '0'],
                ["style", "width", '1245px']
            ],
            "${_txt3}": [
                ["style", "top", '533px'],
                ["style", "opacity", '0'],
                ["style", "width", '1006px']
            ],
            "${_pic3}": [
                ["style", "top", '428px'],
                ["style", "opacity", '0'],
                ["style", "left", '314px']
            ],
            "${_txt2}": [
                ["style", "top", '441px'],
                ["style", "opacity", '0'],
                ["style", "width", '460px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_pic1}": [
                ["style", "top", '370px'],
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["style", "top", '257px'],
                ["style", "opacity", '0'],
                ["style", "width", '513px']
            ],
            "${_pic2}": [
                ["style", "top", '415px'],
                ["style", "opacity", '0'],
                ["style", "left", '339px']
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
                { id: "eid18", tween: [ "style", "${_txt4}", "top", '844px', { fromValue: '824px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_pic1}", "opacity", '1', { fromValue: '0.0024949999060481787'}], position: 0, duration: 133, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_pic1}", "opacity", '1', { fromValue: '1'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "style", "${_pic1}", "opacity", '1', { fromValue: '1'}], position: 400, duration: 0, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_txt2}", "top", '461px', { fromValue: '441px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_pic2}", "left", '409px', { fromValue: '339px'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_pic2}", "opacity", '1', { fromValue: '0.0024949999060481787'}], position: 0, duration: 133, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_pic2}", "opacity", '1', { fromValue: '1'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_pic2}", "opacity", '1', { fromValue: '1'}], position: 400, duration: 0, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${_pic3}", "opacity", '1', { fromValue: '0.0024949999060481787'}], position: 0, duration: 133, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_pic3}", "opacity", '1', { fromValue: '1'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid35", tween: [ "style", "${_pic3}", "opacity", '1', { fromValue: '1'}], position: 400, duration: 0, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_pic3}", "top", '678px', { fromValue: '428px'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_pic3}", "left", '421px', { fromValue: '314px'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt1}", "top", '277px', { fromValue: '257px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic1}", "top", '120px', { fromValue: '370px'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_pic2}", "top", '435px', { fromValue: '415px'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt3}", "top", '553px', { fromValue: '533px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
