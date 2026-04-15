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
                id: 'air03',
                type: 'image',
                tag: 'img',
                rect: ['298', '641','559','548','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"air03.png"]
            },
            {
                id: 'air02',
                type: 'image',
                tag: 'img',
                rect: ['306', '408','445','369','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"air02.png"]
            },
            {
                id: 'air02_ov2',
                type: 'image',
                rect: ['306px', '408px','445px','369px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"air02_ov.png",'0px','0px']
            },
            {
                id: 'air01',
                type: 'image',
                tag: 'img',
                rect: ['232', '64','777','428','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"air01.png"]
            },
            {
                id: 'title',
                type: 'image',
                tag: 'img',
                rect: ['770', '613','269','20','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"title.png"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1081px', '577px','299px','92px','auto', 'auto'],
                text: "에어크리너",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_air02}": [
                ["style", "top", '633px'],
                ["style", "left", '348px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1068px'],
                ["style", "font-size", '80px'],
                ["style", "top", '577px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '494px'],
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
            "${_air02_ov2}": [
                ["style", "top", '408px'],
                ["style", "opacity", '0'],
                ["style", "left", '306px']
            ],
            "${_air01}": [
                ["style", "left", '304px'],
                ["style", "top", '590px']
            ],
            "${_title}": [
                ["style", "top", '615px'],
                ["style", "opacity", '0'],
                ["style", "left", '931px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 883,
            autoPlay: true,
            timeline: [
                { id: "eid30", tween: [ "style", "${_txt_title}", "left", '1068px', { fromValue: '1068px'}], position: 883, duration: 0 },
                { id: "eid8", tween: [ "style", "${_air01}", "top", '64px', { fromValue: '590px'}], position: 250, duration: 250 },
                { id: "eid2", tween: [ "style", "${_air02}", "top", '408px', { fromValue: '633px'}], position: 139, duration: 250 },
                { id: "eid6", tween: [ "style", "${_air01}", "left", '232px', { fromValue: '304px'}], position: 250, duration: 250 },
                { id: "eid25", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 633, duration: 250 },
                { id: "eid32", tween: [ "style", "${_air02_ov2}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 250 },
                { id: "eid23", tween: [ "style", "${_title}", "top", '613px', { fromValue: '615px'}], position: 500, duration: 250 },
                { id: "eid27", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 633, duration: 250 },
                { id: "eid29", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 250 },
                { id: "eid21", tween: [ "style", "${_title}", "left", '770px', { fromValue: '931px'}], position: 500, duration: 250 },
                { id: "eid4", tween: [ "style", "${_air02}", "left", '306px', { fromValue: '348px'}], position: 139, duration: 250 },
                { id: "eid13", tween: [ "style", "${_title}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-22044746");
