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
                id: 'pic',
                type: 'image',
                tag: 'img',
                rect: ['201', '184','1383','862','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1718', '536','484','86','auto', 'auto'],
                text: "제어공급밸브",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text}": [
                ["style", "opacity", '0']
            ],
            "${_pic}": [
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
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "transform", "${_pic}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 533, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "transform", "${_pic}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 533, easing: "easeInOutQuad" },
                { id: "eid8", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 367, easing: "easeInOutQuad" },
                { id: "eid6", tween: [ "style", "${_pic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 533, easing: "easeInOutQuad" }            ]
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
