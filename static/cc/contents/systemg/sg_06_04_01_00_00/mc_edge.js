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
                id: 'PCT_heater',
                type: 'image',
                tag: 'img',
                rect: ['452', '1014','218','180','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"PCT_heater.png"]
            },
            {
                id: 'heaterCore',
                type: 'image',
                tag: 'img',
                rect: ['214', '817','365','295','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"heaterCore.png"]
            },
            {
                id: 'select_heaterCore',
                type: 'image',
                tag: 'img',
                rect: ['401px', '817px','365','295','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"select_heaterCore.png"]
            },
            {
                id: 'bodyR',
                type: 'image',
                tag: 'img',
                rect: ['803px', '141px','337','494','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bodyR.png"]
            },
            {
                id: 'eva',
                type: 'image',
                tag: 'img',
                rect: ['530', '371','243','302','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eva.png"]
            },
            {
                id: 'extra3',
                type: 'image',
                tag: 'img',
                rect: ['689', '785','246','187','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"extra3.png"]
            },
            {
                id: 'extra2',
                type: 'image',
                tag: 'img',
                rect: ['619', '563','250','213','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"extra2.png"]
            },
            {
                id: 'extra1',
                type: 'image',
                tag: 'img',
                rect: ['458', '208','259','194','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"extra1.png"]
            },
            {
                id: 'bodyL',
                type: 'image',
                tag: 'img',
                rect: ['139', '368','349','464','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bodyL.png"]
            },
            {
                id: 'head',
                type: 'image',
                tag: 'img',
                rect: ['306', '35','378','232','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"head.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1596px', '563px','auto','auto','auto', 'auto'],
                text: "히터코어",
                font: ['Arial, Helvetica, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_PCT_heater}": [
                ["style", "top", '637px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '677px']
            ],
            "${_extra1}": [
                ["style", "top", '323px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '540px']
            ],
            "${_eva}": [
                ["style", "top", '459px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '556px']
            ],
            "${_head}": [
                ["style", "top", '285px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '525px']
            ],
            "${_stage}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_select_heaterCore}": [
                ["style", "top", '817px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '401px']
            ],
            "${_Text}": [
                ["style", "top", '563px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(0,74,141,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1596px'],
                ["style", "font-size", '80px']
            ],
            "${_extra3}": [
                ["style", "top", '675px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '671px']
            ],
            "${_bodyL}": [
                ["style", "top", '353px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '525px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "width", '2400px']
            ],
            "${_heaterCore}": [
                ["style", "top", '502px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '556px']
            ],
            "${_bodyR}": [
                ["style", "top", '303px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '600px']
            ],
            "${_extra2}": [
                ["style", "top", '628px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '615px']
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
                { id: "eid85", tween: [ "style", "${_extra1}", "left", '645px', { fromValue: '540px'}], position: 367, duration: 300 },
                { id: "eid209", tween: [ "style", "${_bodyL}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid83", tween: [ "style", "${_extra1}", "top", '208px', { fromValue: '323px'}], position: 367, duration: 300 },
                { id: "eid105", tween: [ "style", "${_head}", "top", '35px', { fromValue: '285px'}], position: 367, duration: 300 },
                { id: "eid201", tween: [ "transform", "${_extra3}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid210", tween: [ "style", "${_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid165", tween: [ "transform", "${_PCT_heater}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid211", tween: [ "style", "${_extra1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid231", tween: [ "style", "${_select_heaterCore}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 267 },
                { id: "eid207", tween: [ "style", "${_eva}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid89", tween: [ "style", "${_extra2}", "top", '563px', { fromValue: '628px'}], position: 367, duration: 300 },
                { id: "eid212", tween: [ "style", "${_extra3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid54", tween: [ "style", "${_extra3}", "opacity", '1', { fromValue: '1'}], position: 400, duration: 0 },
                { id: "eid55", tween: [ "style", "${_extra3}", "opacity", '1', { fromValue: '1'}], position: 600, duration: 0 },
                { id: "eid171", tween: [ "transform", "${_heaterCore}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid113", tween: [ "style", "${_PCT_heater}", "top", '1014px', { fromValue: '637px'}], position: 367, duration: 300 },
                { id: "eid197", tween: [ "transform", "${_extra1}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid111", tween: [ "style", "${_PCT_heater}", "left", '639px', { fromValue: '677px'}], position: 367, duration: 300 },
                { id: "eid187", tween: [ "transform", "${_bodyL}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid67", tween: [ "style", "${_eva}", "left", '717px', { fromValue: '556px'}], position: 367, duration: 300 },
                { id: "eid109", tween: [ "style", "${_extra3}", "top", '785px', { fromValue: '675px'}], position: 367, duration: 300 },
                { id: "eid99", tween: [ "style", "${_heaterCore}", "left", '401px', { fromValue: '556px'}], position: 367, duration: 300 },
                { id: "eid101", tween: [ "style", "${_heaterCore}", "top", '817px', { fromValue: '502px'}], position: 367, duration: 300 },
                { id: "eid163", tween: [ "transform", "${_PCT_heater}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid205", tween: [ "style", "${_heaterCore}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid61", tween: [ "style", "${_bodyR}", "top", '141px', { fromValue: '303px'}], position: 367, duration: 300 },
                { id: "eid199", tween: [ "transform", "${_extra3}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid87", tween: [ "style", "${_extra2}", "left", '806px', { fromValue: '615px'}], position: 367, duration: 300 },
                { id: "eid107", tween: [ "style", "${_extra3}", "left", '876px', { fromValue: '671px'}], position: 367, duration: 300 },
                { id: "eid204", tween: [ "style", "${_extra2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid193", tween: [ "transform", "${_head}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid195", tween: [ "transform", "${_extra1}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid103", tween: [ "style", "${_head}", "left", '493px', { fromValue: '525px'}], position: 367, duration: 300 },
                { id: "eid167", tween: [ "transform", "${_extra2}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid181", tween: [ "transform", "${_eva}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid189", tween: [ "transform", "${_bodyL}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid208", tween: [ "style", "${_bodyR}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid169", tween: [ "transform", "${_extra2}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid91", tween: [ "style", "${_bodyL}", "left", '326px', { fromValue: '525px'}], position: 367, duration: 300 },
                { id: "eid93", tween: [ "style", "${_bodyL}", "top", '368px', { fromValue: '353px'}], position: 367, duration: 300 },
                { id: "eid59", tween: [ "style", "${_bodyR}", "left", '990px', { fromValue: '600px'}], position: 367, duration: 300 },
                { id: "eid69", tween: [ "style", "${_eva}", "top", '371px', { fromValue: '459px'}], position: 367, duration: 300 },
                { id: "eid185", tween: [ "transform", "${_bodyR}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid183", tween: [ "transform", "${_bodyR}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid179", tween: [ "transform", "${_eva}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid191", tween: [ "transform", "${_head}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid173", tween: [ "transform", "${_heaterCore}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 300 },
                { id: "eid233", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 767, duration: 233 },
                { id: "eid203", tween: [ "style", "${_PCT_heater}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1389249471697");
