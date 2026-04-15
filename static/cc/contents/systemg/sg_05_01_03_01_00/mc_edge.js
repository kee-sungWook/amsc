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
                id: 'pic2',
                type: 'image',
                tag: 'img',
                rect: ['1284', '377','505','512','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2.png"]
            },
            {
                id: 'pic1',
                type: 'image',
                tag: 'img',
                rect: ['180', '39','985','1151','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic1.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1895', '488','324','86','auto', 'auto'],
                text: "차고센서",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_pic1}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_pic2}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1067,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "style", "${_pic2}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 400, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic1}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 400, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "transform", "${_pic2}", "scaleY", '1', { fromValue: '0.95'}], position: 233, duration: 400, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "transform", "${_pic1}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 400, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 367, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_pic1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_pic2}", "scaleX", '1', { fromValue: '0.95'}], position: 233, duration: 400, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-13859931");
