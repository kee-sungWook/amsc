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
                id: 'tire1_shadow',
                type: 'image',
                tag: 'img',
                rect: ['32', '378','1321','597','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tire1_shadow.png"]
            },
            {
                id: 'BODY',
                type: 'image',
                tag: 'img',
                rect: ['29', '254','1371','717','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BODY.png"]
            },
            {
                id: 'f_brake2',
                type: 'image',
                tag: 'img',
                rect: ['1172', '629','104','120','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_brake2.png"]
            },
            {
                id: 'masterCylinder',
                type: 'image',
                tag: 'img',
                rect: ['924', '607','228','102','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"masterCylinder.png"]
            },
            {
                id: 'exhaust2',
                type: 'image',
                tag: 'img',
                rect: ['282', '411','490','324','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exhaust2.png"]
            },
            {
                id: 'fuelTank',
                type: 'image',
                tag: 'img',
                rect: ['218', '352','382','246','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fuelTank.png"]
            },
            {
                id: 'airCleaner',
                type: 'image',
                tag: 'img',
                rect: ['1026', '545','334','142','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"airCleaner.png"]
            },
            {
                id: 'engine',
                type: 'image',
                tag: 'img',
                rect: ['930', '562','322','294','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"engine.png"]
            },
            {
                id: 'exhaust1',
                type: 'image',
                tag: 'img',
                rect: ['747', '621','331','212','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exhaust1.png"]
            },
            {
                id: 'electric',
                type: 'image',
                tag: 'img',
                rect: ['806', '538','324','391','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"electric.png"]
            },
            {
                id: 'radiator',
                type: 'image',
                tag: 'img',
                rect: ['1097', '610','239','299','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator.png"]
            },
            {
                id: 'exhaust2-1',
                type: 'image',
                tag: 'img',
                rect: ['282', '411','490','324','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exhaust2-1.png"]
            },
            {
                id: 'airCleaner-1',
                type: 'image',
                tag: 'img',
                rect: ['1026', '545','334','142','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"airCleaner-1.png"]
            },
            {
                id: 'engine01',
                type: 'image',
                rect: ['930px', '562px','322px','294px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"engine01.png",'0px','0px']
            },
            {
                id: 'exhaust1_1',
                type: 'image',
                rect: ['746px', '621px','331px','212px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exhaust1_1.png",'0px','0px']
            },
            {
                id: 'radiator-1',
                type: 'image',
                tag: 'img',
                rect: ['1097', '610','239','299','auto', 'auto'],
                opacity: 0.7,
                fill: ["rgba(0,0,0,0)",im+"radiator-1.png"]
            },
            {
                id: 'tire1',
                type: 'image',
                tag: 'img',
                rect: ['108', '526','792','446','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tire1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_exhaust2-1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_fuelTank}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_engine01}": [
                ["style", "top", '562px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '930px']
            ],
            "${_tire1}": [
                ["style", "left", '106px'],
                ["style", "opacity", '0']
            ],
            "${_engine}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_masterCylinder}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_exhaust1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_tire1_shadow}": [
                ["style", "opacity", '0']
            ],
            "${_airCleaner}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_airCleaner-1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_f_brake2}": [
                ["style", "opacity", '0']
            ],
            "${_exhaust1_1}": [
                ["style", "top", '621px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '746px']
            ],
            "${_electric}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_BODY}": [
                ["style", "opacity", '0.01']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_exhaust2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_radiator}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_radiator-1}": [
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
            duration: 657,
            autoPlay: true,
            timeline: [
                { id: "eid357", tween: [ "transform", "${_exhaust1_1}", "scaleX", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid230", tween: [ "transform", "${_electric}", "scaleY", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid180", tween: [ "style", "${_fuelTank}", "opacity", '1', { fromValue: '0'}], position: 253, duration: 188 },
                { id: "eid320", tween: [ "style", "${_fuelTank}", "opacity", '0.4', { fromValue: '1'}], position: 441, duration: 28 },
                { id: "eid351", tween: [ "transform", "${_engine01}", "scaleY", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid212", tween: [ "transform", "${_engine}", "scaleY", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid224", tween: [ "transform", "${_exhaust1}", "scaleY", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid174", tween: [ "style", "${_exhaust2}", "opacity", '1', { fromValue: '0'}], position: 253, duration: 188 },
                { id: "eid318", tween: [ "style", "${_exhaust2}", "opacity", '0.4', { fromValue: '1'}], position: 441, duration: 28 },
                { id: "eid220", tween: [ "style", "${_exhaust1}", "opacity", '1', { fromValue: '0'}], position: 253, duration: 188 },
                { id: "eid339", tween: [ "style", "${_exhaust1}", "opacity", '0.4', { fromValue: '1'}], position: 441, duration: 28 },
                { id: "eid178", tween: [ "transform", "${_exhaust2}", "scaleY", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid206", tween: [ "transform", "${_airCleaner}", "scaleY", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid204", tween: [ "transform", "${_airCleaner}", "scaleX", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid6", tween: [ "style", "${_BODY}", "opacity", '0.99', { fromValue: '0.01'}], position: 0, duration: 188 },
                { id: "eid67", tween: [ "style", "${_f_brake2}", "opacity", '0.8', { fromValue: '0'}], position: 253, duration: 188 },
                { id: "eid302", tween: [ "style", "${_f_brake2}", "opacity", '0.4', { fromValue: '0.800000'}], position: 441, duration: 30 },
                { id: "eid234", tween: [ "transform", "${_radiator}", "scaleX", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid184", tween: [ "transform", "${_fuelTank}", "scaleY", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid260", tween: [ "transform", "${_exhaust2-1}", "scaleY", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid355", tween: [ "style", "${_exhaust1_1}", "opacity", '1', { fromValue: '0'}], position: 469, duration: 188 },
                { id: "eid256", tween: [ "style", "${_exhaust2-1}", "opacity", '1', { fromValue: '0'}], position: 469, duration: 188 },
                { id: "eid222", tween: [ "transform", "${_exhaust1}", "scaleX", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid210", tween: [ "transform", "${_engine}", "scaleX", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid284", tween: [ "style", "${_radiator-1}", "opacity", '0.699999988079071', { fromValue: '0'}], position: 469, duration: 188 },
                { id: "eid154", tween: [ "transform", "${_masterCylinder}", "scaleX", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid156", tween: [ "transform", "${_masterCylinder}", "scaleY", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid228", tween: [ "transform", "${_electric}", "scaleX", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid359", tween: [ "transform", "${_exhaust1_1}", "scaleY", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid236", tween: [ "transform", "${_radiator}", "scaleY", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid12", tween: [ "style", "${_tire1_shadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 188 },
                { id: "eid202", tween: [ "style", "${_airCleaner}", "opacity", '1', { fromValue: '0'}], position: 253, duration: 188 },
                { id: "eid208", tween: [ "style", "${_engine}", "opacity", '1', { fromValue: '0'}], position: 253, duration: 188 },
                { id: "eid341", tween: [ "style", "${_engine}", "opacity", '0.4', { fromValue: '1'}], position: 441, duration: 28 },
                { id: "eid182", tween: [ "transform", "${_fuelTank}", "scaleX", '1', { fromValue: '1.1'}], position: 253, duration: 188 },
                { id: "eid288", tween: [ "transform", "${_radiator-1}", "scaleY", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid226", tween: [ "style", "${_electric}", "opacity", '1', { fromValue: '0'}], position: 253, duration: 188 },
                { id: "eid338", tween: [ "style", "${_electric}", "opacity", '0.4', { fromValue: '1'}], position: 441, duration: 28 },
                { id: "eid232", tween: [ "style", "${_radiator}", "opacity", '1', { fromValue: '0'}], position: 253, duration: 188 },
                { id: "eid337", tween: [ "style", "${_radiator}", "opacity", '0.4', { fromValue: '1'}], position: 441, duration: 28 },
                { id: "eid146", tween: [ "style", "${_tire1}", "left", '108px', { fromValue: '106px'}], position: 0, duration: 188 },
                { id: "eid349", tween: [ "transform", "${_engine01}", "scaleX", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid286", tween: [ "transform", "${_radiator-1}", "scaleX", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid274", tween: [ "transform", "${_airCleaner-1}", "scaleX", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid9", tween: [ "style", "${_tire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 188 },
                { id: "eid152", tween: [ "style", "${_masterCylinder}", "opacity", '1', { fromValue: '0'}], position: 253, duration: 188 },
                { id: "eid312", tween: [ "style", "${_masterCylinder}", "opacity", '0.4', { fromValue: '1'}], position: 441, duration: 28 },
                { id: "eid268", tween: [ "style", "${_airCleaner-1}", "opacity", '1', { fromValue: '0'}], position: 469, duration: 188 },
                { id: "eid276", tween: [ "transform", "${_airCleaner-1}", "scaleY", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid347", tween: [ "style", "${_engine01}", "opacity", '1', { fromValue: '0'}], position: 469, duration: 188 },
                { id: "eid258", tween: [ "transform", "${_exhaust2-1}", "scaleX", '1', { fromValue: '1.1'}], position: 469, duration: 188 },
                { id: "eid176", tween: [ "transform", "${_exhaust2}", "scaleX", '1', { fromValue: '1.1'}], position: 253, duration: 188 }            ]
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
})(jQuery, AdobeEdge, "EDGE-108052827");
