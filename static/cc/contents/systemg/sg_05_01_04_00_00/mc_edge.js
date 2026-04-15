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
                id: 'r_wheel',
                type: 'image',
                tag: 'img',
                rect: ['190', '434','426','202','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r_wheel.png"]
            },
            {
                id: 'f_wheel',
                type: 'image',
                tag: 'img',
                rect: ['822', '637','450','208','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_wheel.png"]
            },
            {
                id: 'ss_valve',
                type: 'image',
                tag: 'img',
                rect: ['633', '321','98','78','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ss_valve.png"]
            },
            {
                id: 'control_valve',
                type: 'image',
                tag: 'img',
                rect: ['1168', '499','98','72','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"control_valve.png"]
            },
            {
                id: 'ecu',
                type: 'image',
                tag: 'img',
                rect: ['319', '350','821','418','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ecu.png"]
            },
            {
                id: 'VH_sus',
                type: 'image',
                tag: 'img',
                rect: ['203', '317','347','296','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"VH_sus.png"]
            },
            {
                id: 'VD_sus',
                type: 'image',
                tag: 'img',
                rect: ['810', '507','383','315','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"VD_sus.png"]
            },
            {
                id: 'f_BACK',
                type: 'image',
                tag: 'img',
                rect: ['150', '380','1024','535','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_BACK.png"]
            },
            {
                id: 'h_Sensor',
                type: 'image',
                tag: 'img',
                rect: ['463', '466','694','262','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h_Sensor.png"]
            },
            {
                id: 'compressor',
                type: 'image',
                tag: 'img',
                rect: ['700', '633','110','86','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"compressor.png"]
            },
            {
                id: 'select_compressor',
                type: 'image',
                tag: 'img',
                rect: ['700', '633','110','86','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"select_compressor.png"]
            },
            {
                id: 'BODY',
                type: 'image',
                tag: 'img',
                rect: ['29', '254','1371','717','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BODY.png"]
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
            "${_tire1_shadow}": [
                ["style", "opacity", '0']
            ],
            "${_VD_sus}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_select_compressor}": [
                ["style", "opacity", '0']
            ],
            "${_VH_sus}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_ss_valve}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_control_valve}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_f_BACK}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_BODY}": [
                ["style", "opacity", '0.01']
            ],
            "${_r_wheel}": [
                ["style", "opacity", '0']
            ],
            "${_tire1}": [
                ["style", "left", '106px'],
                ["style", "opacity", '0']
            ],
            "${_compressor}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_h_Sensor}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_ecu}": [
                ["style", "opacity", '0']
            ],
            "${_f_wheel}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2167,
            autoPlay: true,
            timeline: [
                { id: "eid430", tween: [ "style", "${_ecu}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeInQuad" },
                { id: "eid432", tween: [ "style", "${_VH_sus}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 367, easing: "easeInQuad" },
                { id: "eid434", tween: [ "style", "${_ss_valve}", "opacity", '1', { fromValue: '0'}], position: 1400, duration: 367, easing: "easeInQuad" },
                { id: "eid420", tween: [ "style", "${_r_wheel}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 367, easing: "easeInQuad" },
                { id: "eid402", tween: [ "transform", "${_VH_sus}", "scaleX", '1', { fromValue: '1.1'}], position: 800, duration: 367, easing: "easeInQuad" },
                { id: "eid400", tween: [ "transform", "${_VD_sus}", "scaleY", '1', { fromValue: '1.1'}], position: 800, duration: 367, easing: "easeInQuad" },
                { id: "eid422", tween: [ "style", "${_compressor}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 367, easing: "easeInQuad" },
                { id: "eid406", tween: [ "transform", "${_control_valve}", "scaleX", '1', { fromValue: '1.1'}], position: 1267, duration: 367, easing: "easeInQuad" },
                { id: "eid410", tween: [ "transform", "${_ss_valve}", "scaleX", '1', { fromValue: '1.1'}], position: 1400, duration: 367, easing: "easeInQuad" },
                { id: "eid418", tween: [ "style", "${_f_wheel}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 367, easing: "easeInQuad" },
                { id: "eid6", tween: [ "style", "${_BODY}", "opacity", '0.99', { fromValue: '0.01'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid424", tween: [ "style", "${_control_valve}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 367, easing: "easeInQuad" },
                { id: "eid390", tween: [ "transform", "${_compressor}", "scaleX", '1', { fromValue: '1.1'}], position: 1133, duration: 367, easing: "easeInQuad" },
                { id: "eid392", tween: [ "transform", "${_compressor}", "scaleY", '1', { fromValue: '1.1'}], position: 1133, duration: 367, easing: "easeInQuad" },
                { id: "eid428", tween: [ "style", "${_f_BACK}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 367, easing: "easeInQuad" },
                { id: "eid436", tween: [ "style", "${_h_Sensor}", "opacity", '1', { fromValue: '0'}], position: 967, duration: 367, easing: "easeInQuad" },
                { id: "eid404", tween: [ "transform", "${_VH_sus}", "scaleY", '1', { fromValue: '1.1'}], position: 800, duration: 367, easing: "easeInQuad" },
                { id: "eid394", tween: [ "transform", "${_h_Sensor}", "scaleX", '1', { fromValue: '1.1'}], position: 967, duration: 367, easing: "easeInQuad" },
                { id: "eid426", tween: [ "style", "${_VD_sus}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 367, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_tire1_shadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_tire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid386", tween: [ "style", "${_tire1}", "opacity", '0.5', { fromValue: '1'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid396", tween: [ "transform", "${_h_Sensor}", "scaleY", '1', { fromValue: '1.1'}], position: 967, duration: 367, easing: "easeInQuad" },
                { id: "eid412", tween: [ "transform", "${_ss_valve}", "scaleY", '1', { fromValue: '1.1'}], position: 1400, duration: 367, easing: "easeInQuad" },
                { id: "eid440", tween: [ "style", "${_select_compressor}", "opacity", '1', { fromValue: '0'}], position: 1834, duration: 333, easing: "easeInQuad" },
                { id: "eid398", tween: [ "transform", "${_VD_sus}", "scaleX", '1', { fromValue: '1.1'}], position: 800, duration: 367, easing: "easeInQuad" },
                { id: "eid146", tween: [ "style", "${_tire1}", "left", '108px', { fromValue: '106px'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid408", tween: [ "transform", "${_control_valve}", "scaleY", '1', { fromValue: '1.1'}], position: 1267, duration: 367, easing: "easeInQuad" }            ]
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
