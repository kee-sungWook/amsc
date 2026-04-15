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
                id: 'canister-copy',
                type: 'image',
                tag: 'img',
                rect: ['355', '353','68','122','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"canister-copy.png"]
            },
            {
                id: 'canister_ov',
                type: 'image',
                rect: ['355px', '353px','68px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"canister_ov.png",'0px','0px']
            },
            {
                id: 'boby-copy',
                type: 'image',
                tag: 'img',
                rect: ['52', '506','518','505','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"boby-copy.png"]
            },
            {
                id: 'tank-copy',
                type: 'image',
                tag: 'img',
                rect: ['656', '401','697','400','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tank-copy.png"]
            },
            {
                id: 'cap-copy',
                type: 'image',
                tag: 'img',
                rect: ['1320', '472','57','57','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cap-copy.png"]
            },
            {
                id: 'motor-copy',
                type: 'image',
                tag: 'img',
                rect: ['1091', '452','32','55','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"motor-copy.png"]
            },
            {
                id: 'fuel',
                type: 'image',
                tag: 'img',
                rect: ['294', '218','897','619','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fuel.png"]
            },
            {
                id: 'pressure-copy',
                type: 'image',
                tag: 'img',
                rect: ['364', '488','69','46','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pressure-copy.png"]
            },
            {
                id: 'gray_ov',
                type: 'image',
                rect: ['52px', '218px','1325px','793px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gray_ov.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_motor-copy}": [
                ["style", "opacity", '0']
            ],
            "${_fuel}": [
                ["style", "opacity", '0']
            ],
            "${_canister_ov}": [
                ["style", "top", '353px'],
                ["style", "opacity", '0'],
                ["style", "left", '355px']
            ],
            "${_canister-copy}": [
                ["style", "opacity", '0']
            ],
            "${_gray_ov}": [
                ["style", "top", '218px'],
                ["style", "opacity", '0'],
                ["style", "left", '52px']
            ],
            "${_boby-copy}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_cap-copy}": [
                ["style", "opacity", '0']
            ],
            "${_pressure-copy}": [
                ["style", "opacity", '0']
            ],
            "${_tank-copy}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 958,
            autoPlay: true,
            timeline: [
                { id: "eid7", tween: [ "style", "${_boby-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid19", tween: [ "style", "${_cap-copy}", "opacity", '0.7', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid2", tween: [ "style", "${_gray_ov}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_gray_ov}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_gray_ov}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_gray_ov}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid17", tween: [ "style", "${_tank-copy}", "opacity", '0.7', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid13", tween: [ "style", "${_canister-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid9", tween: [ "style", "${_fuel}", "opacity", '0.69672131147541', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid11", tween: [ "style", "${_pressure-copy}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
                { id: "eid21", tween: [ "style", "${_canister_ov}", "opacity", '1', { fromValue: '0'}], position: 708, duration: 250 },
                { id: "eid15", tween: [ "style", "${_motor-copy}", "opacity", '0.7', { fromValue: '0'}], position: 458, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-17048349");
