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
                id: 'con04',
                type: 'image',
                tag: 'img',
                rect: ['381', '183','660px','624px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con04.png"]
            },
            {
                id: 'gray',
                type: 'image',
                tag: 'img',
                rect: ['381', '183','660px','624px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gray.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['207px', '924px','821px','48px','auto', 'auto'],
                opacity: 1,
                text: "A SYSEM OF",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,0,0,1.00)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['349px', '967px','721px','92px','auto', 'auto'],
                text: "LPG FUEL",
                align: "center",
                font: ['abel, sans-serif', 70, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
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
            "${_gray}": [
                ["style", "height", '624px'],
                ["style", "opacity", '0'],
                ["style", "width", '660px']
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
            ],
            "${_con04}": [
                ["style", "height", '624px'],
                ["style", "opacity", '0'],
                ["style", "width", '660px']
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
                { id: "eid13", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 792, duration: 250 },
                { id: "eid4", tween: [ "style", "${_con04}", "opacity", '1', { fromValue: '0'}], position: 542, duration: 250 },
                { id: "eid19", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 792, duration: 250 },
                { id: "eid21", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 792, duration: 250 },
                { id: "eid11", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 792, duration: 250 },
                { id: "eid2", tween: [ "style", "${_gray}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid7", tween: [ "style", "${_gray}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid8", tween: [ "style", "${_gray}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid9", tween: [ "style", "${_gray}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 42 },
                { id: "eid17", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 792, duration: 250 },
                { id: "eid15", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 792, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-12836012");
