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
                id: 'exhaust-1',
                type: 'image',
                tag: 'img',
                rect: ['1004px', '76px','417','249','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exhaust-1.png"]
            },
            {
                id: 'intake3-1',
                type: 'image',
                tag: 'img',
                rect: ['3px', '17px','721','352','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"intake3-1.png"]
            },
            {
                id: 'intake2-1',
                type: 'image',
                tag: 'img',
                rect: ['572px', '208px','287','229','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"intake2-1.png"]
            },
            {
                id: 'intake1-1',
                type: 'image',
                tag: 'img',
                rect: ['521px', '5px','422','284','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"intake1-1.png"]
            },
            {
                id: 'rub3-1',
                type: 'image',
                tag: 'img',
                rect: ['731px', '758px','442','252','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rub3-1.png"]
            },
            {
                id: 'rub2-1',
                type: 'image',
                tag: 'img',
                rect: ['470px', '410px','173','152','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rub2-1.png"]
            },
            {
                id: 'mainMoving-1',
                type: 'image',
                tag: 'img',
                rect: ['655', '229','506','595','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mainMoving-1.png"]
            },
            {
                id: 'mainMoving',
                type: 'image',
                rect: ['655px', '229px','506px','595px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mainMoving.png",'0px','0px']
            },
            {
                id: 'rub1-1',
                type: 'image',
                tag: 'img',
                rect: ['404px', '646px','282','290','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rub1-1.png"]
            },
            {
                id: 'timing-1',
                type: 'image',
                tag: 'img',
                rect: ['241px', '668px','250','330','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"timing-1.png"]
            },
            {
                id: 'cooling2-1',
                type: 'image',
                tag: 'img',
                rect: ['492px', '523px','282','286','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cooling2-1.png"]
            },
            {
                id: 'cooling1-1',
                type: 'image',
                tag: 'img',
                rect: ['52px', '808px','289','371','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cooling1-1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_rub3-1}": [
                ["style", "top", '566px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '681px']
            ],
            "${_mainMoving}": [
                ["style", "top", '229px'],
                ["style", "opacity", '0'],
                ["style", "left", '655px']
            ],
            "${_mainMoving-1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_intake2-1}": [
                ["style", "top", '243px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '667px']
            ],
            "${_cooling1-1}": [
                ["style", "top", '581px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '449px']
            ],
            "${_exhaust-1}": [
                ["style", "top", '218px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '853px']
            ],
            "${_intake1-1}": [
                ["style", "top", '195px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '538px']
            ],
            "${_cooling2-1}": [
                ["style", "top", '516px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '538px']
            ],
            "${_rub1-1}": [
                ["style", "top", '547px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '555px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_timing-1}": [
                ["style", "top", '581px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '469px']
            ],
            "${_rub2-1}": [
                ["style", "top", '450px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '576px']
            ],
            "${_intake3-1}": [
                ["style", "top", '203px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '171px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1125,
            autoPlay: true,
            timeline: [
                { id: "eid178", tween: [ "transform", "${_intake2-1}", "scaleX", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid148", tween: [ "style", "${_rub1-1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 408 },
                { id: "eid54", tween: [ "style", "${_cooling1-1}", "top", '804px', { fromValue: '581px'}], position: 408, duration: 300, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_cooling2-1}", "top", '523px', { fromValue: '516px'}], position: 508, duration: 325, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "transform", "${_exhaust-1}", "scaleX", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid170", tween: [ "transform", "${_intake1-1}", "scaleX", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid130", tween: [ "style", "${_timing-1}", "left", '470px', { fromValue: '469px'}], position: 208, duration: 408, easing: "easeInQuad" },
                { id: "eid44", tween: [ "style", "${_timing-1}", "left", '274px', { fromValue: '470px'}], position: 617, duration: 300, easing: "easeInQuad" },
                { id: "eid160", tween: [ "style", "${_rub3-1}", "left", '682px', { fromValue: '681px'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid60", tween: [ "style", "${_rub3-1}", "left", '727px', { fromValue: '682px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid168", tween: [ "style", "${_intake1-1}", "left", '539px', { fromValue: '538px'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "style", "${_intake1-1}", "left", '522px', { fromValue: '539px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid190", tween: [ "style", "${_exhaust-1}", "opacity", '1', { fromValue: '0'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid180", tween: [ "transform", "${_intake2-1}", "scaleY", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid107", tween: [ "style", "${_cooling1-1}", "left", '450px', { fromValue: '449px'}], position: 0, duration: 408, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "style", "${_cooling1-1}", "left", '52px', { fromValue: '450px'}], position: 408, duration: 300, easing: "easeOutQuad" },
                { id: "eid142", tween: [ "style", "${_rub2-1}", "left", '577px', { fromValue: '576px'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "style", "${_rub2-1}", "left", '470px', { fromValue: '577px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_exhaust-1}", "top", '129px', { fromValue: '218px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid126", tween: [ "transform", "${_cooling2-1}", "scaleX", '1', { fromValue: '1.1'}], position: 133, duration: 375, easing: "easeOutQuad" },
                { id: "eid140", tween: [ "transform", "${_rub1-1}", "scaleY", '1', { fromValue: '1.1'}], position: 250, duration: 408 },
                { id: "eid109", tween: [ "transform", "${_cooling1-1}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 408, easing: "easeOutQuad" },
                { id: "eid132", tween: [ "transform", "${_timing-1}", "scaleX", '1', { fromValue: '1.1'}], position: 208, duration: 408, easing: "easeInQuad" },
                { id: "eid172", tween: [ "transform", "${_intake1-1}", "scaleY", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid186", tween: [ "style", "${_intake3-1}", "opacity", '1', { fromValue: '0'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_rub2-1}", "opacity", '1', { fromValue: '0'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid111", tween: [ "transform", "${_cooling1-1}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 408, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_timing-1}", "top", '679px', { fromValue: '581px'}], position: 617, duration: 300, easing: "easeInQuad" },
                { id: "eid176", tween: [ "style", "${_intake2-1}", "left", '668px', { fromValue: '667px'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "style", "${_intake2-1}", "left", '572px', { fromValue: '668px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid188", tween: [ "style", "${_exhaust-1}", "left", '854px', { fromValue: '853px'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_exhaust-1}", "left", '1006px', { fromValue: '854px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_rub2-1}", "top", '410px', { fromValue: '450px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid196", tween: [ "transform", "${_intake3-1}", "scaleX", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "transform", "${_rub2-1}", "scaleX", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid128", tween: [ "transform", "${_cooling2-1}", "scaleY", '1', { fromValue: '1.1'}], position: 133, duration: 375, easing: "easeOutQuad" },
                { id: "eid198", tween: [ "transform", "${_intake3-1}", "scaleY", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_intake2-1}", "top", '217px', { fromValue: '243px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid70", tween: [ "style", "${_intake3-1}", "top", '23px', { fromValue: '203px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid194", tween: [ "transform", "${_exhaust-1}", "scaleY", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid146", tween: [ "transform", "${_rub2-1}", "scaleY", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_rub1-1}", "top", '641px', { fromValue: '547px'}], position: 658, duration: 300 },
                { id: "eid124", tween: [ "style", "${_cooling2-1}", "left", '539px', { fromValue: '538px'}], position: 133, duration: 508, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_cooling2-1}", "left", '501px', { fromValue: '539px'}], position: 641, duration: 192, easing: "easeOutQuad" },
                { id: "eid150", tween: [ "style", "${_cooling1-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 408, easing: "easeOutQuad" },
                { id: "eid220", tween: [ "style", "${_mainMoving}", "opacity", '1', { fromValue: '0'}], position: 958, duration: 167, easing: "easeOutQuad" },
                { id: "eid138", tween: [ "transform", "${_rub1-1}", "scaleX", '1', { fromValue: '1.1'}], position: 250, duration: 408 },
                { id: "eid164", tween: [ "transform", "${_rub3-1}", "scaleY", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "style", "${_intake3-1}", "left", '172px', { fromValue: '171px'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_intake3-1}", "left", '-1px', { fromValue: '172px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid209", tween: [ "transform", "${_mainMoving-1}", "scaleY", '1', { fromValue: '1.1'}], position: 311, duration: 439 },
                { id: "eid134", tween: [ "transform", "${_timing-1}", "scaleY", '1', { fromValue: '1.1'}], position: 208, duration: 408, easing: "easeInQuad" },
                { id: "eid174", tween: [ "style", "${_intake1-1}", "opacity", '1', { fromValue: '0'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid182", tween: [ "style", "${_intake2-1}", "opacity", '1', { fromValue: '0'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_rub3-1}", "top", '747px', { fromValue: '566px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_timing-1}", "opacity", '1', { fromValue: '0'}], position: 208, duration: 408, easing: "easeInQuad" },
                { id: "eid207", tween: [ "transform", "${_mainMoving-1}", "scaleX", '1', { fromValue: '1.1'}], position: 311, duration: 439 },
                { id: "eid152", tween: [ "style", "${_cooling2-1}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 375, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_mainMoving-1}", "opacity", '1', { fromValue: '0'}], position: 311, duration: 439 },
                { id: "eid72", tween: [ "style", "${_intake1-1}", "top", '22px', { fromValue: '195px'}], position: 723, duration: 277, easing: "easeOutQuad" },
                { id: "eid166", tween: [ "style", "${_rub3-1}", "opacity", '1', { fromValue: '0'}], position: 346, duration: 377, easing: "easeOutQuad" },
                { id: "eid136", tween: [ "style", "${_rub1-1}", "left", '567px', { fromValue: '555px'}], position: 250, duration: 408 },
                { id: "eid40", tween: [ "style", "${_rub1-1}", "left", '417px', { fromValue: '567px'}], position: 658, duration: 300, easing: "easeInQuad" },
                { id: "eid162", tween: [ "transform", "${_rub3-1}", "scaleX", '1', { fromValue: '1.1'}], position: 346, duration: 377, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-26030171");
