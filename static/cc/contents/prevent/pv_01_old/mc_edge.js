/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'txt4',
                type: 'text',
                rect: ['1033', '790','1353px','235','auto', 'auto'],
                text: "1. 가솔린<br>    - MPI/GDI : 매 7,500Km/6개월(하이브리드포함)<br>    - TCI/T-GDI :매 5,000Km또는 3개월<br>2. LPI : 매 7,500Km/6개월(하이브리드포함)<br>3. 디젤 : 매 10,000Km/6개월",
                align: "auto",
                font: ['나눔고딕', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2Copy',
                type: 'text',
                rect: ['1033', '407px','433px','66','auto', 'auto'],
                text: "가혹조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1033', '499','1061px','175','auto', 'auto'],
                text: "1. 가솔린<br>    - MPI/GDI : 매 15,000Km/12개월(하이브리드포함)<br>    - TCI/T-GDI :최초 5,000Km 교환 후 매 8,000Km<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(또는 교환 후 매 6개월)<br>2. LPI : 매 15,000Km/12개월(하이브리드포함)<br>3. 디젤 : 매 20,000Km/12개월",
                align: "auto",
                font: ['나눔고딕', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1033', '407','433px','66','auto', 'auto'],
                text: "정상조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1033', '226','922px','86','auto', 'auto'],
                text: "엔진오일 및 오일필터",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['303', '173','504','927','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt2Copy}": [
                ["style", "top", '722px'],
                ["style", "opacity", '0'],
                ["style", "width", '433px']
            ],
            "${_txt4}": [
                ["style", "top", '807px'],
                ["style", "opacity", '0'],
                ["style", "font-size", '45px'],
                ["style", "width", '1353px']
            ],
            "${_txt3}": [
                ["style", "top", '346px'],
                ["style", "opacity", '0'],
                ["style", "font-size", '45px'],
                ["style", "width", '1061px']
            ],
            "${_txt2}": [
                ["style", "top", '254px'],
                ["style", "opacity", '0'],
                ["style", "width", '433px']
            ],
            "${_pic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt1}": [
                ["style", "top", '47px'],
                ["style", "opacity", '0'],
                ["style", "width", '922px']
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
            duration: 1033,
            autoPlay: true,
            timeline: [
                { id: "eid36", tween: [ "style", "${_txt4}", "top", '865px', { fromValue: '807px'}], position: 766, duration: 267, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_txt2}", "top", '302px', { fromValue: '254px'}], position: 466, duration: 267, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 566, duration: 267, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 766, duration: 267, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 366, duration: 267, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_txt2Copy}", "top", '787px', { fromValue: '722px'}], position: 666, duration: 267, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_txt1}", "top", '121px', { fromValue: '47px'}], position: 366, duration: 267, easing: "easeOutQuad" },
                { id: "eid51", tween: [ "style", "${_txt2Copy}", "opacity", '1', { fromValue: '0'}], position: 666, duration: 267, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 466, duration: 267, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_txt3}", "top", '394px', { fromValue: '346px'}], position: 566, duration: 267, easing: "easeOutQuad" }            ]
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
