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
                rect: ['1165', '278px','1198px','115','auto', 'auto'],
                text: "브레이크 패드",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1165', '471px','409px','66','auto', 'auto'],
                text: "정상 조건",
                align: "auto",
                font: ['나눔고딕', 60, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1165', '563px','1198px','115','auto', 'auto'],
                text: "자동,수동변속기 : 매 10,000Km  <br>                                ( 점검 및 필요시 교환)",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1165', '790','1219px','235','auto', 'auto'],
                text: "브레이크패드는 운전자가 제동을 할 경우 유압에<br>의해 브레이크 드럼과 마찰에 의해 차량이<br>정지할수 있도록하며 교환하지 않을 경우는<br>패드에 드럼에 손상을 가져올수 있다",
                align: "auto",
                font: ['나눔고딕', 50, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['199', '190','857','924','auto', 'auto'],
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
                ["style", "width", '1219px']
            ],
            "${_txt2}": [
                ["style", "top", '451px'],
                ["style", "opacity", '0'],
                ["style", "width", '409px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_pic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt1}": [
                ["style", "top", '258px'],
                ["style", "opacity", '0'],
                ["style", "font-size", '80px'],
                ["style", "width", '1198px']
            ],
            "${_txt3}": [
                ["style", "top", '543px'],
                ["style", "opacity", '0'],
                ["style", "width", '1198px']
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
                { id: "eid22", tween: [ "style", "${_txt2}", "top", '471px', { fromValue: '451px'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_txt1}", "top", '278px', { fromValue: '258px'}], position: 367, duration: 267, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_txt4}", "top", '790px', { fromValue: '770px'}], position: 667, duration: 267, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 267, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_txt3}", "top", '563px', { fromValue: '543px'}], position: 567, duration: 267, easing: "easeOutQuad" }            ]
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
