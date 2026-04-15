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
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['382', '184','680','624','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'gr',
                type: 'image',
                tag: 'img',
                rect: ['382', '184','680','624','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gr.png"]
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
                text: "GASOLINE FUEL",
                align: "center",
                font: ['abel, sans-serif', 70, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_gr}": [
                ["style", "opacity", '0']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '349px'],
                ["style", "font-size", '70px'],
                ["style", "top", '967px'],
                ["style", "width", '721px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "opacity", '0'],
                ["style", "text-align", 'center']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_txt1}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '207px'],
                ["style", "font-size", '40px'],
                ["style", "top", '924px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '1016px'],
                ["style", "height", '48px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "text-align", 'center']
            ],
            "${_con01}": [
                ["style", "opacity", '0']
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
                { id: "eid14", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid2", tween: [ "style", "${_gr}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid17", tween: [ "style", "${_gr}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid18", tween: [ "style", "${_gr}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid19", tween: [ "style", "${_gr}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid16", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid6", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
                { id: "eid4", tween: [ "style", "${_con01}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid10", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid12", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-7063715");
