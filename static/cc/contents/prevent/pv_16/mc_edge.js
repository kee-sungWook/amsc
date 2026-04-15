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
                rect: ['1140', '323','393px','86','auto', 'auto'],
                text: "구동벨트",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1140', '505','439px','66','auto', 'auto'],
                text: "정상 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1140', '598','856px','55','auto', 'auto'],
                text: "최초 80,000Km 또는 48개월 점검 이후,<br>매 20,000Km 또는 12개월 마다 점검",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1140', '765','1251px','235','auto', 'auto'],
                text: "구동밸트는 발전기및냉각수펌프를 작동하는 <br>것으로 끊어진다면 운행이 불가능하게 됩니다.<br>표면이 상했거나 갈라졌을 경우는 즉시 <br>교체하는게 좋습니다.",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['293', '186','677','923','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt4}": [
                ["style", "top", '745px'],
                ["style", "opacity", '0'],
                ["style", "width", '1251px']
            ],
            "${_txt3}": [
                ["style", "top", '578px'],
                ["style", "opacity", '0'],
                ["style", "width", '856px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_txt1}": [
                ["style", "top", '303px'],
                ["style", "opacity", '0'],
                ["style", "width", '393px']
            ],
            "${_pic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt2}": [
                ["style", "top", '485px'],
                ["style", "opacity", '0'],
                ["style", "width", '439px']
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
                { id: "eid14", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt2}", "top", '505px', { fromValue: '485px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt1}", "top", '323px', { fromValue: '303px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt4}", "top", '765px', { fromValue: '745px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt3}", "top", '598px', { fromValue: '578px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
