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
                id: 'oilfence-copy',
                type: 'image',
                tag: 'img',
                rect: ['1572', '662','656','397','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilfence-copy.png"]
            },
            {
                id: '00-copy',
                type: 'image',
                tag: 'img',
                rect: ['1757', '805','243','170','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"00-copy.png"]
            },
            {
                id: 'rear01-copy',
                type: 'image',
                tag: 'img',
                rect: ['1889', '367','402','470','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear01-copy.png"]
            },
            {
                id: 'rear04-copy',
                type: 'image',
                tag: 'img',
                rect: ['2060', '387','110','132','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear04-copy.png"]
            },
            {
                id: 'rear03-copy',
                type: 'image',
                tag: 'img',
                rect: ['2041', '381','119','139','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear03-copy.png"]
            },
            {
                id: 'rear02-copy',
                type: 'image',
                tag: 'img',
                rect: ['2019', '390','158','194','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear02-copy.png"]
            },
            {
                id: 'oilp01-copy',
                type: 'image',
                rect: ['939px', '252px','149px','146px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilp01-copy.png",'0px','0px']
            },
            {
                id: 'oilp01_ov',
                type: 'image',
                rect: ['939px', '252px','149px','146px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilp01_ov.png",'0px','0px']
            },
            {
                id: 'lubri-copy',
                type: 'image',
                tag: 'img',
                rect: ['1044px', '359px','425','267','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubri-copy.png"]
            },
            {
                id: 'body02-copy',
                type: 'image',
                tag: 'img',
                rect: ['1474', '209','803','886','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body02-copy.png"]
            },
            {
                id: 'body01-copy',
                type: 'image',
                tag: 'img',
                rect: ['1501', '154','606','393','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body01-copy.png"]
            },
            {
                id: 'lubrication_04-copy',
                type: 'image',
                tag: 'img',
                rect: ['1424', '759','157','174','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubrication_04-copy.png"]
            },
            {
                id: 'oilpump01-copy',
                type: 'image',
                tag: 'img',
                rect: ['1569', '907','168','182','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilpump01-copy.png"]
            },
            {
                id: 'lubrication_01-copy',
                type: 'image',
                tag: 'img',
                rect: ['1328', '696','449','458','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubrication_01-copy.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['120px', '918px','1072px','175px','auto', 'auto'],
                opacity: 1,
                text: "엔진오일을 여과하고 금속 등 내부 이물질을 제거하는 <br>장치입니다.여과방식으로는 풀 플로식(전량식),오일일부를 <br>여과하는(바이패스플로식)등이 있습니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['120px', '797px','720px','96px','auto', 'auto'],
                text: "오일필터란 ?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '121px'],
                ["style", "font-size", '80px'],
                ["style", "top", '795px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '720px'],
                ["style", "height", '96px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0']
            ],
            "${_oilp01-copy}": [
                ["style", "left", '1330px'],
                ["style", "top", '493px']
            ],
            "${_oilp01_ov}": [
                ["style", "top", '252px'],
                ["style", "opacity", '0'],
                ["style", "left", '939px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_lubri-copy}": [
                ["style", "left", '1278px'],
                ["style", "top", '512px']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '121px'],
                ["style", "font-size", '45px'],
                ["style", "top", '916px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '175px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1216px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "style", "${_txt1}", "opacity", '0.9940119981765747', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid67", tween: [ "style", "${_txt1}", "width", '1216px', { fromValue: '1216px'}], position: 750, duration: 0 },
                { id: "eid80", tween: [ "style", "${_txt_title}", "left", '121px', { fromValue: '121px'}], position: 750, duration: 0 },
                { id: "eid33", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid81", tween: [ "style", "${_txt1}", "left", '121px', { fromValue: '121px'}], position: 750, duration: 0 },
                { id: "eid35", tween: [ "transform", "${_txt1}", "scaleX", '1.0006', { fromValue: '1.1'}], position: 500, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_txt1}", "scaleY", '1.0006', { fromValue: '1.1'}], position: 500, duration: 250 },
                { id: "eid29", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 500, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 500, duration: 250 },
                { id: "eid4", tween: [ "style", "${_lubri-copy}", "top", '359px', { fromValue: '512px'}], position: 0, duration: 417 },
                { id: "eid43", tween: [ "style", "${_oilp01_ov}", "opacity", '1', { fromValue: '0'}], position: 417, duration: 167 },
                { id: "eid10", tween: [ "style", "${_oilp01-copy}", "left", '939px', { fromValue: '1330px'}], position: 0, duration: 417 },
                { id: "eid78", tween: [ "style", "${_txt1}", "top", '916px', { fromValue: '916px'}], position: 750, duration: 0 },
                { id: "eid12", tween: [ "style", "${_oilp01-copy}", "top", '252px', { fromValue: '493px'}], position: 0, duration: 417 },
                { id: "eid76", tween: [ "style", "${_txt_title}", "top", '795px', { fromValue: '795px'}], position: 750, duration: 0 },
                { id: "eid2", tween: [ "style", "${_lubri-copy}", "left", '1044px', { fromValue: '1278px'}], position: 0, duration: 417 }            ]
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
})(jQuery, AdobeEdge, "EDGE-11293924");
