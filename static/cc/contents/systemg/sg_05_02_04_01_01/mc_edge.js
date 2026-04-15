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
                id: 'BODY',
                type: 'image',
                tag: 'img',
                rect: ['94', '48','1548','932','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BODY.png"]
            },
            {
                id: 'bolt',
                type: 'image',
                tag: 'img',
                rect: ['1008', '1103','112','87','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bolt.png"]
            },
            {
                id: 'shock_absorber',
                type: 'image',
                tag: 'img',
                rect: ['668', '230','365','573','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shock_absorber.png"]
            },
            {
                id: 'RL_spring',
                type: 'image',
                tag: 'img',
                rect: ['834', '352','1200','735','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"RL_spring.png"]
            },
            {
                id: 'shackle',
                type: 'image',
                tag: 'img',
                rect: ['1546', '33','762','569','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shackle.png"]
            },
            {
                id: 'SELECT_RL_spring',
                type: 'image',
                tag: 'img',
                rect: ['834', '352','1200','735','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_RL_spring.png"]
            },
            {
                id: 'text',
                type: 'text',
                rect: ['1665', '726','618','182','auto', 'auto'],
                text: "리어 리프 스프링\r어셈블리",
                align: "center",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bolt}": [
                ["style", "top", '1123px'],
                ["transform", "scaleY", '1.05'],
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["style", "left", '1028px']
            ],
            "${_shock_absorber}": [
                ["style", "top", '194px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '625px']
            ],
            "${_SELECT_RL_spring}": [
                ["style", "opacity", '0']
            ],
            "${_BODY}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_text}": [
                ["style", "opacity", '0']
            ],
            "${_shackle}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_RL_spring}": [
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
            duration: 1667,
            autoPlay: true,
            timeline: [
                { id: "eid34", tween: [ "transform", "${_bolt}", "scaleX", '1', { fromValue: '1.05'}], position: 500, duration: 433, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "transform", "${_shock_absorber}", "scaleY", '1', { fromValue: '1.1'}], position: 233, duration: 433, easing: "easeOutQuad" },
                { id: "eid15", tween: [ "transform", "${_shock_absorber}", "scaleX", '1', { fromValue: '1.1'}], position: 233, duration: 433, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_shock_absorber}", "top", '230px', { fromValue: '194px'}], position: 233, duration: 433, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_BODY}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 433, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "transform", "${_BODY}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 433, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "transform", "${_RL_spring}", "scaleX", '1', { fromValue: '1.1'}], position: 300, duration: 433, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "transform", "${_shackle}", "scaleY", '1', { fromValue: '1.1'}], position: 600, duration: 433, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_BODY}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 433, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "transform", "${_shackle}", "scaleX", '1', { fromValue: '1.1'}], position: 600, duration: 433, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "transform", "${_bolt}", "scaleY", '1', { fromValue: '1.05'}], position: 500, duration: 433, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_bolt}", "left", '1008px', { fromValue: '1028px'}], position: 500, duration: 433, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_SELECT_RL_spring}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 367, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_shock_absorber}", "left", '668px', { fromValue: '625px'}], position: 233, duration: 433, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_shackle}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 433, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "transform", "${_RL_spring}", "scaleY", '1', { fromValue: '1.1'}], position: 300, duration: 433, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_shock_absorber}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 433, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_bolt}", "top", '1103px', { fromValue: '1123px'}], position: 500, duration: 433, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_bolt}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 433, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_RL_spring}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 433, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_text}", "opacity", '1', { fromValue: '0'}], position: 1300, duration: 367, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-22992373");
