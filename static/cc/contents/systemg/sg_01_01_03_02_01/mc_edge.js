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
                rect: ['653', '822','564','342','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilfence-copy.png"]
            },
            {
                id: 'oilfence_ov',
                type: 'image',
                rect: ['653px', '822px','564px','342px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilfence_ov.png",'0px','0px']
            },
            {
                id: '00-copy',
                type: 'image',
                tag: 'img',
                rect: ['564', '806','209','147','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"00-copy.png"]
            },
            {
                id: 'lubri-copy',
                type: 'image',
                tag: 'img',
                rect: ['108', '365','231','198','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubri-copy.png"]
            },
            {
                id: 'rear01-copy',
                type: 'image',
                tag: 'img',
                rect: ['594', '248','346','404','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear01-copy.png"]
            },
            {
                id: 'rear04-copy',
                type: 'image',
                tag: 'img',
                rect: ['741', '265','94','114','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear04-copy.png"]
            },
            {
                id: 'rear03-copy',
                type: 'image',
                tag: 'img',
                rect: ['724', '260','102','119','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear03-copy.png"]
            },
            {
                id: 'rear02-copy',
                type: 'image',
                tag: 'img',
                rect: ['705', '268','136','166','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear02-copy.png"]
            },
            {
                id: 'body02-copy',
                type: 'image',
                tag: 'img',
                rect: ['237', '112','691','762','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body02-copy.png"]
            },
            {
                id: 'body01-copy',
                type: 'image',
                tag: 'img',
                rect: ['261', '65','521','338','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body01-copy.png"]
            },
            {
                id: 'lubrication_04-copy',
                type: 'image',
                tag: 'img',
                rect: ['194', '585','135','150','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubrication_04-copy.png"]
            },
            {
                id: 'oilpump01-copy',
                type: 'image',
                tag: 'img',
                rect: ['319', '712','144','157','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilpump01-copy.png"]
            },
            {
                id: 'lubrication_01-copy',
                type: 'image',
                tag: 'img',
                rect: ['112', '531','386','393','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubrication_01-copy.png"]
            },
            {
                id: 'bg01',
                type: 'image',
                rect: ['108px', '65px','832px','859px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg01.png",'0px','0px']
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1046px', '399px','1150px','218px','auto', 'auto'],
                opacity: 1,
                text: "실린더블럭 밑에 설치되어 엔진오일을 저장해 두는<br>부분을 말하는 것입니다. 일반적으로 철판으로 만들어지지만<br>엔진오일을 냉각시키는 역할도 하므로 현재는 열전도가 좋은<br>알루미늄 오일팬을 사용하기도 합니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1046px', '268px','299px','92px','auto', 'auto'],
                text: "오일팬이란 ?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_lubrication_01-copy}": [
                ["style", "opacity", '0']
            ],
            "${_oilfence_ov}": [
                ["style", "top", '822px'],
                ["style", "opacity", '0'],
                ["style", "left", '653px']
            ],
            "${_lubrication_04-copy}": [
                ["style", "opacity", '0']
            ],
            "${_oilpump01-copy}": [
                ["style", "opacity", '0']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1047px'],
                ["style", "font-size", '80px'],
                ["style", "top", '268px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '513px'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0']
            ],
            "${_body01-copy}": [
                ["style", "opacity", '0']
            ],
            "${_rear02-copy}": [
                ["style", "opacity", '0']
            ],
            "${_rear03-copy}": [
                ["style", "opacity", '0']
            ],
            "${_00-copy}": [
                ["style", "top", '661px'],
                ["style", "opacity", '0'],
                ["style", "left", '406px']
            ],
            "${_bg01}": [
                ["style", "top", '65px'],
                ["style", "opacity", '0'],
                ["style", "left", '108px']
            ],
            "${_rear04-copy}": [
                ["style", "opacity", '0']
            ],
            "${_rear01-copy}": [
                ["style", "opacity", '0']
            ],
            "${_oilfence-copy}": [
                ["style", "top", '527px'],
                ["style", "opacity", '0'],
                ["style", "left", '283px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1046px'],
                ["style", "font-size", '45px'],
                ["style", "top", '403px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '218px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1264px']
            ],
            "${_body02-copy}": [
                ["style", "opacity", '0']
            ],
            "${_lubri-copy}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1042,
            autoPlay: true,
            timeline: [
                { id: "eid75", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 167 },
                { id: "eid12", tween: [ "style", "${_oilpump01-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid67", tween: [ "style", "${_txt_title}", "left", '1046px', { fromValue: '1047px'}], position: 875, duration: 167 },
                { id: "eid59", tween: [ "style", "${_oilfence_ov}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 125 },
                { id: "eid71", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 875, duration: 167 },
                { id: "eid28", tween: [ "style", "${_body01-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid52", tween: [ "style", "${_00-copy}", "opacity", '1', { fromValue: '0'}], position: 541, duration: 84 },
                { id: "eid16", tween: [ "style", "${_rear01-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid77", tween: [ "style", "${_txt1}", "width", '1264px', { fromValue: '1264px'}], position: 1042, duration: 0 },
                { id: "eid26", tween: [ "style", "${_rear03-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid76", tween: [ "style", "${_txt1}", "top", '403px', { fromValue: '403px'}], position: 1042, duration: 0 },
                { id: "eid22", tween: [ "style", "${_body02-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid8", tween: [ "style", "${_oilfence-copy}", "top", '822px', { fromValue: '527px'}], position: 667, duration: 250 },
                { id: "eid56", tween: [ "style", "${_oilfence-copy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_oilfence-copy}", "opacity", '1', { fromValue: '0'}], position: 541, duration: 84 },
                { id: "eid30", tween: [ "style", "${_bg01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid31", tween: [ "style", "${_bg01}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 42 },
                { id: "eid57", tween: [ "style", "${_bg01}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 42 },
                { id: "eid32", tween: [ "style", "${_bg01}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 83 },
                { id: "eid2", tween: [ "style", "${_00-copy}", "top", '806px', { fromValue: '661px'}], position: 667, duration: 250 },
                { id: "eid20", tween: [ "style", "${_lubri-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid10", tween: [ "style", "${_lubrication_01-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid14", tween: [ "style", "${_lubrication_04-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid69", tween: [ "style", "${_txt_title}", "width", '494px', { fromValue: '513px'}], position: 875, duration: 167 },
                { id: "eid63", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 875, duration: 167 },
                { id: "eid4", tween: [ "style", "${_00-copy}", "left", '564px', { fromValue: '406px'}], position: 667, duration: 250 },
                { id: "eid24", tween: [ "style", "${_rear04-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid61", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 875, duration: 167 },
                { id: "eid6", tween: [ "style", "${_oilfence-copy}", "left", '653px', { fromValue: '283px'}], position: 667, duration: 250 },
                { id: "eid65", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 167 },
                { id: "eid18", tween: [ "style", "${_rear02-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 167 },
                { id: "eid73", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 875, duration: 167 }            ]
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
})(jQuery, AdobeEdge, "EDGE-20431927");
