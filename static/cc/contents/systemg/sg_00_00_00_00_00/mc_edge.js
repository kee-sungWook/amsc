/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'preloadAudio': false
};
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
                id: 'carbody',
                type: 'image',
                tag: 'img',
                rect: ['89', '79','1252','872','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"carbody.png"]
            },
            {
                id: 'syspension',
                type: 'image',
                tag: 'img',
                rect: ['205', '319','1028','485','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"syspension.png"]
            },
            {
                id: 'brake',
                type: 'image',
                tag: 'img',
                rect: ['146', '601','1147','196','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"brake.png"]
            },
            {
                id: 'steering',
                type: 'image',
                tag: 'img',
                rect: ['220', '223','999','524','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"steering.png"]
            },
            {
                id: 'air',
                type: 'image',
                tag: 'img',
                rect: ['442', '327','369','268','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"air.png"]
            },
            {
                id: 'transmission',
                type: 'image',
                tag: 'img',
                rect: ['691', '494','248','251','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"transmission.png"]
            },
            {
                id: 'engine',
                type: 'image',
                tag: 'img',
                rect: ['559', '345','511','406','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"engine.png"]
            },
            {
                id: 'radiator',
                type: 'image',
                tag: 'img',
                rect: ['515', '424','409','359','auto', 'auto'],
                opacity: 0.7,
                fill: ["rgba(0,0,0,0)",im+"radiator.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_air}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_syspension}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_transmission}": [
                ["style", "top", '463px'],
                ["style", "opacity", '0']
            ],
            "${_steering}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_carbody}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_brake}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_radiator}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_engine}": [
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
            duration: 1233,
            autoPlay: true,
            timeline: [
                { id: "eid32", tween: [ "transform", "${_engine}", "scaleX", '1', { fromValue: '1.1'}], position: 867, duration: 230 },
                { id: "eid12", tween: [ "style", "${_brake}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 200 },
                { id: "eid8", tween: [ "transform", "${_brake}", "scaleX", '1', { fromValue: '0.95'}], position: 133, duration: 200 },
                { id: "eid40", tween: [ "style", "${_transmission}", "opacity", '1', { fromValue: '0'}], position: 713, duration: 159 },
                { id: "eid63", tween: [ "style", "${_transmission}", "opacity", '0.6', { fromValue: '1'}], position: 872, duration: 61 },
                { id: "eid18", tween: [ "transform", "${_syspension}", "scaleX", '1', { fromValue: '0.95'}], position: 400, duration: 267 },
                { id: "eid4", tween: [ "transform", "${_carbody}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 233 },
                { id: "eid34", tween: [ "transform", "${_engine}", "scaleY", '1', { fromValue: '1.1'}], position: 867, duration: 230 },
                { id: "eid16", tween: [ "transform", "${_steering}", "scaleY", '1', { fromValue: '0.95'}], position: 223, duration: 257 },
                { id: "eid10", tween: [ "transform", "${_brake}", "scaleY", '1', { fromValue: '0.95'}], position: 133, duration: 200 },
                { id: "eid14", tween: [ "transform", "${_steering}", "scaleX", '1', { fromValue: '0.95'}], position: 223, duration: 257 },
                { id: "eid22", tween: [ "style", "${_syspension}", "opacity", '0.69999998807907', { fromValue: '0'}], position: 400, duration: 267 },
                { id: "eid38", tween: [ "style", "${_transmission}", "top", '494px', { fromValue: '463px'}], position: 713, duration: 220 },
                { id: "eid26", tween: [ "transform", "${_air}", "scaleX", '1', { fromValue: '1.1'}], position: 567, duration: 233 },
                { id: "eid6", tween: [ "style", "${_carbody}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233 },
                { id: "eid44", tween: [ "transform", "${_radiator}", "scaleX", '1', { fromValue: '1.1'}], position: 1000, duration: 233 },
                { id: "eid24", tween: [ "style", "${_steering}", "opacity", '0.6', { fromValue: '0'}], position: 223, duration: 257 },
                { id: "eid42", tween: [ "style", "${_radiator}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 185 },
                { id: "eid64", tween: [ "style", "${_radiator}", "opacity", '0.6', { fromValue: '1'}], position: 1185, duration: 48 },
                { id: "eid36", tween: [ "style", "${_engine}", "opacity", '1', { fromValue: '0'}], position: 867, duration: 167 },
                { id: "eid61", tween: [ "style", "${_engine}", "opacity", '0.6', { fromValue: '1'}], position: 1033, duration: 64 },
                { id: "eid20", tween: [ "transform", "${_syspension}", "scaleY", '1', { fromValue: '0.95'}], position: 400, duration: 267 },
                { id: "eid46", tween: [ "transform", "${_radiator}", "scaleY", '1', { fromValue: '1.1'}], position: 1000, duration: 233 },
                { id: "eid30", tween: [ "style", "${_air}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 153 },
                { id: "eid62", tween: [ "style", "${_air}", "opacity", '0.6', { fromValue: '1'}], position: 719, duration: 80 },
                { id: "eid2", tween: [ "transform", "${_carbody}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 233 },
                { id: "eid28", tween: [ "transform", "${_air}", "scaleY", '1', { fromValue: '1.1'}], position: 567, duration: 233 }            ]
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
})(jQuery, AdobeEdge, "EDGE-5366267");
