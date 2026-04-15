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
                id: 'BACKGROUND-OUTLINE-copy',
                type: 'image',
                tag: 'img',
                rect: ['33', '205','1363','820','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BACKGROUND-OUTLINE-copy.png"]
            },
            {
                id: 'IMAGE-copy',
                type: 'image',
                tag: 'img',
                rect: ['33', '207','1362','817','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE-copy.png"]
            },
            {
                id: 'air-copy',
                type: 'image',
                tag: 'img',
                rect: ['877', '341','106','81','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"air-copy.png"]
            },
            {
                id: 'TPS-copy',
                type: 'image',
                tag: 'img',
                rect: ['773', '284','33','20','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TPS-copy.png"]
            },
            {
                id: 'MAP-copy',
                type: 'image',
                tag: 'img',
                rect: ['594', '251','72','72','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MAP-copy.png"]
            },
            {
                id: 'OCV-copy',
                type: 'image',
                tag: 'img',
                rect: ['516', '251','72','72','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OCV-copy.png"]
            },
            {
                id: 'valve-copy',
                type: 'image',
                tag: 'img',
                rect: ['743', '530','21','27','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"valve-copy.png"]
            },
            {
                id: 'crank-copy',
                type: 'image',
                tag: 'img',
                rect: ['356', '612','72','71','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"crank-copy.png"]
            },
            {
                id: 'cam-copy',
                type: 'image',
                tag: 'img',
                rect: ['356', '473','366','136','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cam-copy.png"]
            },
            {
                id: 'iniectable-copy',
                type: 'image',
                tag: 'img',
                rect: ['506', '480','211','96','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iniectable-copy.png"]
            },
            {
                id: 'motor-copy',
                type: 'image',
                tag: 'img',
                rect: ['747', '337','55','52','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"motor-copy.png"]
            },
            {
                id: 'motor_ov',
                type: 'image',
                rect: ['747px', '337px','55px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"motor_ov.png",'0px','0px']
            },
            {
                id: 'IMAGE_ov',
                type: 'image',
                rect: ['33px', '205px','1363px','820px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE_ov.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_IMAGE_ov}": [
                ["style", "top", '205px'],
                ["style", "opacity", '0'],
                ["style", "left", '33px']
            ],
            "${_cam-copy}": [
                ["style", "opacity", '0']
            ],
            "${_TPS-copy}": [
                ["style", "opacity", '0']
            ],
            "${_iniectable-copy}": [
                ["style", "opacity", '0']
            ],
            "${_motor_ov}": [
                ["style", "top", '337px'],
                ["style", "opacity", '0'],
                ["style", "left", '747px']
            ],
            "${_MAP-copy}": [
                ["style", "opacity", '0']
            ],
            "${_BACKGROUND-OUTLINE-copy}": [
                ["style", "opacity", '0']
            ],
            "${_motor-copy}": [
                ["style", "opacity", '0']
            ],
            "${_valve-copy}": [
                ["style", "opacity", '0']
            ],
            "${_IMAGE-copy}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_air-copy}": [
                ["style", "opacity", '0']
            ],
            "${_crank-copy}": [
                ["style", "opacity", '0']
            ],
            "${_OCV-copy}": [
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
                { id: "eid9", tween: [ "style", "${_valve-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid15", tween: [ "style", "${_motor-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid13", tween: [ "style", "${_BACKGROUND-OUTLINE-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid17", tween: [ "style", "${_IMAGE-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid19", tween: [ "style", "${_OCV-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid25", tween: [ "style", "${_TPS-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid7", tween: [ "style", "${_crank-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid21", tween: [ "style", "${_iniectable-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid27", tween: [ "style", "${_cam-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid2", tween: [ "style", "${_IMAGE_ov}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
                { id: "eid3", tween: [ "style", "${_IMAGE_ov}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
                { id: "eid4", tween: [ "style", "${_IMAGE_ov}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid5", tween: [ "style", "${_IMAGE_ov}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
                { id: "eid29", tween: [ "style", "${_motor_ov}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid23", tween: [ "style", "${_air-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid11", tween: [ "style", "${_MAP-copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-21696115");
