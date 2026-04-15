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
                id: 'con03',
                type: 'image',
                tag: 'img',
                rect: ['327px', '186px','766px','625px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con03.png"]
            },
            {
                id: 'gray',
                type: 'image',
                tag: 'img',
                rect: ['327px', '186px','766px','625px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gray.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['207px', '924px','821px','48px','auto', 'auto'],
                opacity: 1,
                text: "A SYSTEM OF",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,0,0,1.00)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['349px', '967px','721px','92px','auto', 'auto'],
                text: "CRDI FUEL",
                align: "center",
                font: ['abel, sans-serif', 70, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_gray}": [
                ["style", "top", '186px'],
                ["style", "height", '625px'],
                ["style", "opacity", '0'],
                ["style", "left", '327px'],
                ["style", "width", '766px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '349px'],
                ["style", "font-size", '70px'],
                ["style", "top", '967px'],
                ["style", "text-align", 'center'],
                ["transform", "scaleY", '1.1'],
                ["style", "opacity", '0'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '721px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_con03}": [
                ["style", "top", '186px'],
                ["style", "height", '625px'],
                ["style", "opacity", '0'],
                ["style", "left", '327px'],
                ["style", "width", '766px']
            ],
            "${_txt1}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '207px'],
                ["style", "font-size", '40px'],
                ["style", "top", '924px'],
                ["transform", "scaleY", '1.1'],
                ["style", "text-align", 'center'],
                ["style", "height", '48px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "width", '1016px']
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
                { id: "eid8", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid4", tween: [ "style", "${_con03}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid14", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid16", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid6", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid2", tween: [ "style", "${_gray}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid17", tween: [ "style", "${_gray}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid18", tween: [ "style", "${_gray}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid19", tween: [ "style", "${_gray}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid12", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid10", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-12421200");
