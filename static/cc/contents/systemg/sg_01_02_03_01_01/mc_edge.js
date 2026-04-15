/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'preloadAudio': false
};
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
                id: '313-png',
                type: 'image',
                tag: 'img',
                rect: ['90', '157','1207','988','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"313-png.png"]
            },
            {
                id: '_313-png_ov',
                type: 'image',
                rect: ['90px', '157px','1207px','988px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"313-png_ov.png",'0px','0px']
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1374px', '496px','976px','130px','auto', 'auto'],
                opacity: 1,
                text: "커먼레일 연료라인에는 고압펌프,연료레일,<br>연료온도센서등이 장착되어 있습니다.<br><br>저압의 연료는 고압펌프를 통하여 고압이 되고, <br>주행에 필요한 연료압력을 연료레일에 보관하며<br>저속과 고속에 필요한 압력을 조절하는 <br>연료압력조절밸브가 장착되어 있습니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1373px', '369px','424px','92px','auto', 'auto'],
                text: "커먼레일 연료라인",
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
                ["style", "left", '1373px'],
                ["style", "font-size", '80px'],
                ["style", "top", '369px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '668px'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_313-png}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1374px'],
                ["style", "font-size", '45px'],
                ["style", "top", '496px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '437px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '976px']
            ],
            "${__313-png_ov}": [
                ["style", "top", '157px'],
                ["style", "opacity", '0'],
                ["style", "left", '90px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid23", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 250 },
                { id: "eid19", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid15", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 600, duration: 250 },
                { id: "eid17", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 600, duration: 250 },
                { id: "eid2", tween: [ "style", "${__313-png_ov}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${__313-png_ov}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${__313-png_ov}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${__313-png_ov}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid26", tween: [ "style", "${_txt1}", "height", '437px', { fromValue: '437px'}], position: 1000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_313-png}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid25", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2501948");
