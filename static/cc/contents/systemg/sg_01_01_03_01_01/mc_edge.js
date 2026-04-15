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
                id: 'sw',
                type: 'image',
                tag: 'img',
                rect: ['130', '236','622','335','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sw.png"]
            },
            {
                id: 'sw01',
                type: 'image',
                rect: ['130px', '236px','622px','335px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sw01.png",'0px','0px']
            },
            {
                id: 'sw_01ov',
                type: 'image',
                rect: ['130px', '236px','622px','335px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sw_01ov.png",'0px','0px']
            },
            {
                id: 'one',
                type: 'image',
                tag: 'img',
                rect: ['108', '75','656','656','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"one.png"]
            },
            {
                id: 'arrow',
                type: 'image',
                rect: ['654px', '496px','351px','175px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
            },
            {
                id: 'sw_ov',
                type: 'image',
                rect: ['1044px', '508px','52px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sw_ov.png",'0px','0px']
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['120px', '918px','1072px','175px','auto', 'auto'],
                opacity: 1,
                text: "오일펌프 회전에 의해 오일압력이 형성되며 오일 압력이 <br>규정보다 낮아질 경우를 감지하여 운전석 계시판에 알려<br>주는 기능을 합니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['120px', '797px','720px','96px','auto', 'auto'],
                text: "오일압력스위치란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_sw_01ov}": [
                ["style", "top", '236px'],
                ["style", "opacity", '0'],
                ["style", "left", '130px']
            ],
            "${_arrow}": [
                ["style", "top", '496px'],
                ["style", "opacity", '0'],
                ["style", "left", '654px']
            ],
            "${_sw}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["style", "font-size", '45px'],
                ["style", "top", '918px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '175px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1174px']
            ],
            "${_sw01}": [
                ["style", "top", '236px'],
                ["style", "opacity", '0'],
                ["style", "left", '130px']
            ],
            "${_oilp01-copy}": [
                ["style", "left", '1330px'],
                ["style", "top", '493px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '120px'],
                ["style", "font-size", '80px'],
                ["style", "top", '797px'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '96px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '720px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_sw_ov}": [
                ["style", "top", '508px'],
                ["style", "opacity", '0'],
                ["style", "left", '1044px']
            ],
            "${_one}": [
                ["style", "opacity", '0']
            ],
            "${_lubri-copy}": [
                ["style", "left", '1278px'],
                ["style", "top", '512px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "style", "${_txt1}", "opacity", '0.9940119981765747', { fromValue: '0'}], position: 1000, duration: 250 },
                { id: "eid14", tween: [ "style", "${_sw_ov}", "opacity", '1', { fromValue: '0'}], position: 209, duration: 83 },
                { id: "eid35", tween: [ "transform", "${_txt1}", "scaleX", '1.0006', { fromValue: '1.1'}], position: 1000, duration: 250 },
                { id: "eid29", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 1000, duration: 250 },
                { id: "eid4", tween: [ "style", "${_lubri-copy}", "top", '359px', { fromValue: '512px'}], position: 0, duration: 208 },
                { id: "eid22", tween: [ "style", "${_sw_01ov}", "opacity", '1', { fromValue: '0'}], position: 334, duration: 42 },
                { id: "eid23", tween: [ "style", "${_sw_01ov}", "opacity", '1', { fromValue: '0'}], position: 501, duration: 42 },
                { id: "eid25", tween: [ "style", "${_sw_01ov}", "opacity", '0', { fromValue: '1'}], position: 667, duration: 42 },
                { id: "eid18", tween: [ "style", "${_sw}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 83 },
                { id: "eid33", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
                { id: "eid40", tween: [ "style", "${_txt1}", "left", '118px', { fromValue: '118px'}], position: 1250, duration: 0 },
                { id: "eid41", tween: [ "style", "${_txt1}", "width", '1174px', { fromValue: '1174px'}], position: 1250, duration: 0 },
                { id: "eid31", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 1000, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_txt1}", "scaleY", '1.0006', { fromValue: '1.1'}], position: 1000, duration: 250 },
                { id: "eid2", tween: [ "style", "${_lubri-copy}", "left", '1044px', { fromValue: '1278px'}], position: 0, duration: 208 },
                { id: "eid27", tween: [ "style", "${_sw01}", "opacity", '1', { fromValue: '0'}], position: 792, duration: 250 },
                { id: "eid20", tween: [ "style", "${_arrow}", "opacity", '1', { fromValue: '0'}], position: 917, duration: 250 },
                { id: "eid12", tween: [ "style", "${_oilp01-copy}", "top", '252px', { fromValue: '493px'}], position: 0, duration: 208 },
                { id: "eid10", tween: [ "style", "${_oilp01-copy}", "left", '939px', { fromValue: '1330px'}], position: 0, duration: 208 },
                { id: "eid16", tween: [ "style", "${_one}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 }            ]
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
