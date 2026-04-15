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
                id: 'IMAGE-copy',
                type: 'image',
                tag: 'img',
                rect: ['29', '265','1371','700','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE-copy.png"]
            },
            {
                id: 'flap-copy',
                type: 'image',
                tag: 'img',
                rect: ['626', '597','102','132','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flap-copy.png"]
            },
            {
                id: 'pump-copy',
                type: 'image',
                tag: 'img',
                rect: ['782', '484','72','108','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pump-copy.png"]
            },
            {
                id: 'rail-copy',
                type: 'image',
                tag: 'img',
                rect: ['399', '566','391','34','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rail-copy.png"]
            },
            {
                id: 'iniecter-copy',
                type: 'image',
                tag: 'img',
                rect: ['462', '445','261','57','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iniecter-copy.png"]
            },
            {
                id: 'line-copy',
                type: 'image',
                tag: 'img',
                rect: ['421', '446','418','148','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line-copy.png"]
            },
            {
                id: 'filter-copy',
                type: 'image',
                tag: 'img',
                rect: ['1044', '354','107','93','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"filter-copy.png"]
            },
            {
                id: 'filter_ov',
                type: 'image',
                rect: ['1044px', '354px','107px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"filter_ov.png",'0px','0px']
            },
            {
                id: 'Layer-4-copy',
                type: 'image',
                tag: 'img',
                rect: ['474', '581','355','148','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Layer-4-copy.png"]
            },
            {
                id: 'IMAGE_ov',
                type: 'image',
                rect: ['29px', '265px','1371px','700px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE_ov.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_filter-copy}": [
                ["style", "opacity", '0']
            ],
            "${_flap-copy}": [
                ["style", "opacity", '0']
            ],
            "${_rail-copy}": [
                ["style", "opacity", '0']
            ],
            "${_line-copy}": [
                ["style", "opacity", '0']
            ],
            "${_Layer-4-copy}": [
                ["style", "opacity", '0']
            ],
            "${_pump-copy}": [
                ["style", "opacity", '0']
            ],
            "${_IMAGE-copy}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_iniecter-copy}": [
                ["style", "opacity", '0']
            ],
            "${_IMAGE_ov}": [
                ["style", "top", '265px'],
                ["style", "opacity", '0'],
                ["style", "left", '29px']
            ],
            "${_filter_ov}": [
                ["style", "top", '354px'],
                ["style", "opacity", '0'],
                ["style", "left", '1044px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 708,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "style", "${_pump-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid15", tween: [ "style", "${_flap-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid7", tween: [ "style", "${_IMAGE-copy}", "opacity", '0.7', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid11", tween: [ "style", "${_filter-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid29", tween: [ "style", "${_filter_ov}", "opacity", '1', { fromValue: '0'}], position: 644, duration: 64 },
                { id: "eid13", tween: [ "style", "${_iniecter-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid2", tween: [ "style", "${_IMAGE_ov}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_IMAGE_ov}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_IMAGE_ov}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_IMAGE_ov}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid17", tween: [ "style", "${_line-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid21", tween: [ "style", "${_Layer-4-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid19", tween: [ "style", "${_rail-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-26823804");
