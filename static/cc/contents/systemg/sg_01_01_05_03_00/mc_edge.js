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
                id: 'muffler-copy',
                type: 'image',
                tag: 'img',
                rect: ['985px', '319px','333','198','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"muffler-copy.png"]
            },
            {
                id: 'muffler_ov',
                type: 'image',
                rect: ['985px', '319px','333px','198px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"muffler_ov.png",'0px','0px']
            },
            {
                id: 'top-copy',
                type: 'image',
                tag: 'img',
                rect: ['830px', '499px','172','100','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"top-copy.png"]
            },
            {
                id: 'ut-copy',
                type: 'image',
                tag: 'img',
                rect: ['581', '225','816','502','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ut-copy.png"]
            },
            {
                id: 'inter-copy',
                type: 'image',
                tag: 'img',
                rect: ['422', '785','148','207','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"inter-copy.png"]
            },
            {
                id: 'inhalation-copy',
                type: 'image',
                tag: 'img',
                rect: ['498', '379','336','226','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"inhalation-copy.png"]
            },
            {
                id: 'hose01-copy',
                type: 'image',
                tag: 'img',
                rect: ['435', '477','127','380','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hose01-copy.png"]
            },
            {
                id: 'ex-copy',
                type: 'image',
                tag: 'img',
                rect: ['406', '527','302','244','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex-copy.png"]
            },
            {
                id: 'air-copy',
                type: 'image',
                tag: 'img',
                rect: ['33', '385','364','232','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"air-copy.png"]
            },
            {
                id: 'hose-copy',
                type: 'image',
                tag: 'img',
                rect: ['293', '571','159','230','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hose-copy.png"]
            },
            {
                id: 'engine-copy',
                type: 'image',
                tag: 'img',
                rect: ['706', '567','372','437','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"engine-copy.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_hose01-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_muffler-copy}": [
                ["style", "top", '342px'],
                ["style", "opacity", '0'],
                ["style", "left", '937px']
            ],
            "${_inter-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_muffler_ov}": [
                ["style", "top", '319px'],
                ["style", "opacity", '0'],
                ["style", "left", '985px']
            ],
            "${_air-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_engine-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_ex-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_inhalation-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_top-copy}": [
                ["style", "top", '514px'],
                ["style", "opacity", '0'],
                ["style", "left", '802px']
            ],
            "${_ut-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_hose-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1144,
            autoPlay: true,
            timeline: [
                { id: "eid69", tween: [ "style", "${_engine-copy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid56", tween: [ "style", "${_top-copy}", "left", '802px', { fromValue: '802px'}], position: 175, duration: 0 },
                { id: "eid2", tween: [ "style", "${_top-copy}", "left", '830px', { fromValue: '802px'}], position: 425, duration: 500 },
                { id: "eid48", tween: [ "style", "${_hose01-copy}", "opacity", '1', { fromValue: '0'}], position: 471, duration: 250 },
                { id: "eid18", tween: [ "transform", "${_ut-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 175, duration: 250 },
                { id: "eid65", tween: [ "transform", "${_engine-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid58", tween: [ "style", "${_top-copy}", "opacity", '1', { fromValue: '0'}], position: 175, duration: 250 },
                { id: "eid54", tween: [ "style", "${_inhalation-copy}", "opacity", '1', { fromValue: '0'}], position: 373, duration: 250 },
                { id: "eid14", tween: [ "transform", "${_ex-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 566, duration: 250 },
                { id: "eid16", tween: [ "transform", "${_ex-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 566, duration: 250 },
                { id: "eid42", tween: [ "style", "${_ex-copy}", "opacity", '1', { fromValue: '0'}], position: 566, duration: 250 },
                { id: "eid67", tween: [ "transform", "${_engine-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid44", tween: [ "style", "${_ut-copy}", "opacity", '1', { fromValue: '0'}], position: 175, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_inhalation-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 373, duration: 250 },
                { id: "eid28", tween: [ "transform", "${_hose01-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 471, duration: 250 },
                { id: "eid24", tween: [ "transform", "${_air-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 675, duration: 250 },
                { id: "eid22", tween: [ "transform", "${_air-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 675, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_inter-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 257, duration: 250 },
                { id: "eid30", tween: [ "transform", "${_inter-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 257, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_inhalation-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 373, duration: 250 },
                { id: "eid59", tween: [ "style", "${_muffler-copy}", "left", '937px', { fromValue: '937px'}], position: 175, duration: 0 },
                { id: "eid6", tween: [ "style", "${_muffler-copy}", "left", '985px', { fromValue: '937px'}], position: 425, duration: 500 },
                { id: "eid61", tween: [ "style", "${_muffler-copy}", "opacity", '1', { fromValue: '0'}], position: 175, duration: 250 },
                { id: "eid50", tween: [ "style", "${_inter-copy}", "opacity", '1', { fromValue: '0'}], position: 257, duration: 250 },
                { id: "eid26", tween: [ "transform", "${_hose01-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 471, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_hose-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 779, duration: 250 },
                { id: "eid20", tween: [ "transform", "${_ut-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 175, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_hose-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 779, duration: 250 },
                { id: "eid8", tween: [ "style", "${_muffler-copy}", "top", '319px', { fromValue: '342px'}], position: 425, duration: 500 },
                { id: "eid4", tween: [ "style", "${_top-copy}", "top", '499px', { fromValue: '514px'}], position: 425, duration: 500 },
                { id: "eid46", tween: [ "style", "${_air-copy}", "opacity", '1', { fromValue: '0'}], position: 675, duration: 250 },
                { id: "eid52", tween: [ "style", "${_hose-copy}", "opacity", '1', { fromValue: '0'}], position: 779, duration: 250 },
                { id: "eid75", tween: [ "style", "${_muffler_ov}", "opacity", '1', { fromValue: '0'}], position: 894, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-32121023");
