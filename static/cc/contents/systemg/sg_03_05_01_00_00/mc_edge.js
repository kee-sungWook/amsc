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
                id: 'sedan',
                type: 'image',
                tag: 'img',
                rect: ['29', '323','1520','600','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sedan.png"]
            },
            {
                id: 'wagon',
                type: 'image',
                tag: 'img',
                rect: ['745', '120','1625','989','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wagon.png"]
            },
            {
                id: 'txt_sedan',
                type: 'text',
                rect: ['649', '669','328','99','auto', 'auto'],
                text: "승용차용",
                align: "auto",
                font: ['Arial, Helvetica, sans-serif', 80, "rgb(0,74,140)", "600", "none", "normal"]
            },
            {
                id: 'txt_wagon',
                type: 'text',
                rect: ['1638', '305','328','99','auto', 'auto'],
                text: "화물차용",
                align: "auto",
                font: ['Arial, Helvetica, sans-serif', 80, "rgb(0,74,140)", "600", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt_wagon}": [
                ["style", "opacity", '0'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "font-weight", '600'],
                ["style", "font-size", '80px']
            ],
            "${_txt_sedan}": [
                ["style", "opacity", '0'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "font-weight", '600'],
                ["style", "font-size", '80px']
            ],
            "${_sedan}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_wagon}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1542,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "style", "${_txt_sedan}", "opacity", '1', { fromValue: '0'}], position: 1125, duration: 417, easing: "easeOutBounce" },
                { id: "eid10", tween: [ "style", "${_wagon}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBounce" },
                { id: "eid6", tween: [ "transform", "${_sedan}", "scaleX", '1', { fromValue: '0.9'}], position: 292, duration: 750, easing: "easeOutBounce" },
                { id: "eid8", tween: [ "transform", "${_sedan}", "scaleY", '1', { fromValue: '0.9'}], position: 292, duration: 750, easing: "easeOutBounce" },
                { id: "eid14", tween: [ "style", "${_txt_wagon}", "opacity", '1', { fromValue: '0'}], position: 1125, duration: 417, easing: "easeOutBounce" },
                { id: "eid2", tween: [ "transform", "${_wagon}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 750, easing: "easeOutBounce" },
                { id: "eid4", tween: [ "transform", "${_wagon}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 750, easing: "easeOutBounce" },
                { id: "eid12", tween: [ "style", "${_sedan}", "opacity", '1', { fromValue: '0'}], position: 292, duration: 750, easing: "easeOutBounce" }            ]
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
})(jQuery, AdobeEdge, "EDGE-21593508");
