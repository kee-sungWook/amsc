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
                id: 'parts7',
                type: 'image',
                tag: 'img',
                rect: ['26', '38','294','271','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts7.png"]
            },
            {
                id: 'parts6',
                type: 'image',
                tag: 'img',
                rect: ['305', '242','349','273','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts6.png"]
            },
            {
                id: 'parts5',
                type: 'image',
                tag: 'img',
                rect: ['627', '346','555','544','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts5.png"]
            },
            {
                id: 'parts4',
                type: 'image',
                tag: 'img',
                rect: ['1140', '754','141','180','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts4.png"]
            },
            {
                id: 'parts3',
                type: 'image',
                tag: 'img',
                rect: ['1261', '837','282','244','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts3.png"]
            },
            {
                id: 'parts2',
                type: 'image',
                tag: 'img',
                rect: ['1543', '989','173','202','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts2.png"]
            },
            {
                id: 'parts1',
                type: 'image',
                tag: 'img',
                rect: ['710', '121','119','208','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parts1.png"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1440', '408','934','374','auto', 'auto'],
                text: "유압식 드럼 브레이크 장치에서<br>마스터실린더로부터 유압에 따라 브레이크를<br>드럼에 압착시키는 역활을 하는 것입니다.<br><br>주철이나 알루미늄 합금제의 실린더 가운데에 <br>유압에 따라 작동하는 피스톤을 설치한<br>구조로 되어 있습니다.",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1449', '231','501','86','auto', 'auto'],
                text: "휠 실린더 란?",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_parts5}": [
                ["style", "top", '337px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '547px']
            ],
            "${_parts3}": [
                ["style", "top", '606px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '820px']
            ],
            "${_parts2}": [
                ["style", "top", '679px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '954px']
            ],
            "${_parts7}": [
                ["style", "top", '378px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '499px']
            ],
            "${_txt1}": [
                ["style", "opacity", '0']
            ],
            "${_parts4}": [
                ["style", "top", '683px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '961px']
            ],
            "${_parts6}": [
                ["style", "top", '463px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '582px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_parts1}": [
                ["style", "top", '288px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '663px']
            ],
            "${_txt2}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1134,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "style", "${_parts4}", "left", '1140px', { fromValue: '961px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_parts4}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid34", tween: [ "style", "${_parts4}", "opacity", '1', { fromValue: '0.5'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_parts1}", "top", '121px', { fromValue: '288px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid111", tween: [ "transform", "${_parts4}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid81", tween: [ "transform", "${_parts4}", "scaleY", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "transform", "${_parts4}", "scaleY", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_parts5}", "top", '346px', { fromValue: '337px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_parts2}", "top", '989px', { fromValue: '679px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid115", tween: [ "transform", "${_parts5}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid89", tween: [ "transform", "${_parts5}", "scaleY", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "transform", "${_parts5}", "scaleY", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid103", tween: [ "style", "${_parts5}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid38", tween: [ "style", "${_parts5}", "opacity", '1', { fromValue: '0.5'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid107", tween: [ "transform", "${_parts6}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid73", tween: [ "transform", "${_parts6}", "scaleY", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "transform", "${_parts6}", "scaleY", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid118", tween: [ "transform", "${_parts2}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid95", tween: [ "transform", "${_parts2}", "scaleX", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "transform", "${_parts2}", "scaleX", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid121", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 267, easing: "easeInQuad" },
                { id: "eid6", tween: [ "style", "${_parts6}", "left", '305px', { fromValue: '582px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid113", tween: [ "transform", "${_parts1}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid85", tween: [ "transform", "${_parts1}", "scaleY", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "transform", "${_parts1}", "scaleY", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid123", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 867, duration: 267, easing: "easeInQuad" },
                { id: "eid104", tween: [ "style", "${_parts7}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid40", tween: [ "style", "${_parts7}", "opacity", '1', { fromValue: '0.5'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_parts7}", "top", '38px', { fromValue: '378px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid105", tween: [ "style", "${_parts2}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid42", tween: [ "style", "${_parts2}", "opacity", '1', { fromValue: '0.5'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "transform", "${_parts3}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid75", tween: [ "transform", "${_parts3}", "scaleX", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "transform", "${_parts3}", "scaleX", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_parts3}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid32", tween: [ "style", "${_parts3}", "opacity", '1', { fromValue: '0.5'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid106", tween: [ "transform", "${_parts6}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid71", tween: [ "transform", "${_parts6}", "scaleX", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "transform", "${_parts6}", "scaleX", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_parts4}", "top", '754px', { fromValue: '683px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_parts5}", "left", '627px', { fromValue: '547px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "transform", "${_parts4}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid79", tween: [ "transform", "${_parts4}", "scaleX", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "transform", "${_parts4}", "scaleX", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_parts3}", "left", '1261px', { fromValue: '820px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_parts1}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid36", tween: [ "style", "${_parts1}", "opacity", '1', { fromValue: '0.5'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_parts2}", "left", '1543px', { fromValue: '954px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_parts7}", "left", '26px', { fromValue: '499px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid114", tween: [ "transform", "${_parts5}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid87", tween: [ "transform", "${_parts5}", "scaleX", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "transform", "${_parts5}", "scaleX", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "transform", "${_parts1}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid83", tween: [ "transform", "${_parts1}", "scaleX", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "transform", "${_parts1}", "scaleX", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_parts6}", "top", '242px', { fromValue: '463px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid116", tween: [ "transform", "${_parts7}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid91", tween: [ "transform", "${_parts7}", "scaleX", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "transform", "${_parts7}", "scaleX", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_parts1}", "left", '710px', { fromValue: '663px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid117", tween: [ "transform", "${_parts7}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid93", tween: [ "transform", "${_parts7}", "scaleY", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "transform", "${_parts7}", "scaleY", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid99", tween: [ "style", "${_parts6}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid30", tween: [ "style", "${_parts6}", "opacity", '1', { fromValue: '0.5'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_parts3}", "top", '837px', { fromValue: '606px'}], position: 300, duration: 400, easing: "easeOutQuad" },
                { id: "eid109", tween: [ "transform", "${_parts3}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid77", tween: [ "transform", "${_parts3}", "scaleY", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid78", tween: [ "transform", "${_parts3}", "scaleY", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" },
                { id: "eid119", tween: [ "transform", "${_parts2}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid97", tween: [ "transform", "${_parts2}", "scaleY", '1', { fromValue: '1'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "transform", "${_parts2}", "scaleY", '1', { fromValue: '1'}], position: 700, duration: 0, easing: "easeOutQuad" }            ]
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
