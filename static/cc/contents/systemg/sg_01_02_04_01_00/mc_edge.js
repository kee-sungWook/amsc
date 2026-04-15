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
                id: 'body-copy',
                type: 'image',
                tag: 'img',
                rect: ['79', '289','1271','651','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body-copy.png"]
            },
            {
                id: 'bombe-copy',
                type: 'image',
                tag: 'img',
                rect: ['910', '360','272','177','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bombe-copy.png"]
            },
            {
                id: 'ex_solenoid-copy',
                type: 'image',
                tag: 'img',
                rect: ['1078', '358','70','82','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex_solenoid-copy.png"]
            },
            {
                id: 'solenoid_ov',
                type: 'image',
                rect: ['1078px', '358px','70px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"solenoid_ov.png",'0px','0px']
            },
            {
                id: 'engine-copy',
                type: 'image',
                tag: 'img',
                rect: ['264', '542','230','251','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"engine-copy.png"]
            },
            {
                id: 'solenoid-copy',
                type: 'image',
                tag: 'img',
                rect: ['625', '623','77','79','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"solenoid-copy.png"]
            },
            {
                id: 'mixer-copy',
                type: 'image',
                tag: 'img',
                rect: ['497', '579','80','89','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mixer-copy.png"]
            },
            {
                id: 'vapor-copy',
                type: 'image',
                tag: 'img',
                rect: ['460', '678','115','112','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vapor-copy.png"]
            },
            {
                id: 'hose-copy',
                type: 'image',
                tag: 'img',
                rect: ['482', '375','779','384','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hose-copy.png"]
            },
            {
                id: 'line-copy',
                type: 'image',
                tag: 'img',
                rect: ['532', '523','744','417','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line-copy.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_line-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_ex_solenoid-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_vapor-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_body-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_mixer-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_solenoid-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_solenoid_ov}": [
                ["style", "top", '358px'],
                ["style", "opacity", '0'],
                ["style", "left", '1078px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_engine-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_bombe-copy}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_hose-copy}": [
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
            duration: 667,
            autoPlay: true,
            timeline: [
                { id: "eid46", tween: [ "style", "${_engine-copy}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
                { id: "eid2", tween: [ "transform", "${_mixer-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
                { id: "eid50", tween: [ "style", "${_ex_solenoid-copy}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 250 },
                { id: "eid30", tween: [ "transform", "${_bombe-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 83, duration: 250 },
                { id: "eid40", tween: [ "style", "${_line-copy}", "opacity", '1', { fromValue: '0'}], position: 417, duration: 250 },
                { id: "eid6", tween: [ "transform", "${_line-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
                { id: "eid16", tween: [ "transform", "${_solenoid-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 333, duration: 250 },
                { id: "eid54", tween: [ "style", "${_body-copy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid42", tween: [ "style", "${_vapor-copy}", "opacity", '1', { fromValue: '0'}], position: 417, duration: 250 },
                { id: "eid10", tween: [ "transform", "${_vapor-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
                { id: "eid18", tween: [ "transform", "${_engine-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 250, duration: 250 },
                { id: "eid28", tween: [ "transform", "${_ex_solenoid-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 167, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_body-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid8", tween: [ "transform", "${_line-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
                { id: "eid12", tween: [ "transform", "${_vapor-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
                { id: "eid26", tween: [ "transform", "${_ex_solenoid-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 167, duration: 250 },
                { id: "eid52", tween: [ "style", "${_bombe-copy}", "opacity", '1', { fromValue: '0'}], position: 83, duration: 250 },
                { id: "eid44", tween: [ "style", "${_solenoid-copy}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_bombe-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 83, duration: 250 },
                { id: "eid14", tween: [ "transform", "${_solenoid-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 333, duration: 250 },
                { id: "eid22", tween: [ "transform", "${_hose-copy}", "scaleX", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_body-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid56", tween: [ "style", "${_solenoid_ov}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 241 },
                { id: "eid24", tween: [ "transform", "${_hose-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
                { id: "eid38", tween: [ "style", "${_mixer-copy}", "opacity", '1', { fromValue: '0'}], position: 417, duration: 250 },
                { id: "eid20", tween: [ "transform", "${_engine-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 250, duration: 250 },
                { id: "eid48", tween: [ "style", "${_hose-copy}", "opacity", '1', { fromValue: '0'}], position: 417, duration: 250 },
                { id: "eid4", tween: [ "transform", "${_mixer-copy}", "scaleY", '1', { fromValue: '1.1'}], position: 417, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-7292400");
