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
                rect: ['1284', '322','411px','86','auto', 'auto'],
                text: "연료필터",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1284', '504','460px','66','auto', 'auto'],
                text: "정상 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1284', '596','1002px','55','auto', 'auto'],
                text: "가솔린 매 60,000Km<br>(단, TDI DOHC/ 터보차져 인터쿨러<br>/A/U/S/3D56 디젤엔진은 매30,000Km)",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1284', '764','1111px','235','auto', 'auto'],
                text: "연료필터는 가솔린,디젤,LPG에 동일하게 <br>장착되어 있으며 연료내의 이물질을 제거하여 <br>연료계통에 고장을 일으키지 않도록 하는 <br>것입니다.",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['147', '341','1057','626','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt4}": [
                ["style", "top", '770px'],
                ["style", "opacity", '0'],
                ["style", "width", '1111px']
            ],
            "${_txt3}": [
                ["style", "top", '576px'],
                ["style", "opacity", '0'],
                ["style", "width", '1002px']
            ],
            "${_txt2}": [
                ["style", "top", '484px'],
                ["style", "opacity", '0'],
                ["style", "width", '460px']
            ],
            "${_txt1}": [
                ["style", "top", '302px'],
                ["style", "opacity", '0'],
                ["style", "width", '411px']
            ],
            "${_pic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
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
                { id: "eid10", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt2}", "top", '504px', { fromValue: '484px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt1}", "top", '322px', { fromValue: '302px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_txt4}", "top", '812px', { fromValue: '770px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt3}", "top", '596px', { fromValue: '576px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
