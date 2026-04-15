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
                id: 'BOTTOM-stabilizer',
                type: 'image',
                tag: 'img',
                rect: ['693', '767','402','72','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BOTTOM-stabilizer.png"]
            },
            {
                id: 'BOTTOM-Another',
                type: 'image',
                tag: 'img',
                rect: ['71', '449','1288','727','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BOTTOM-Another.png"]
            },
            {
                id: 'BOTTOM-bushing_compleat',
                type: 'image',
                tag: 'img',
                rect: ['405', '727','693','221','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BOTTOM-bushing_compleat.png"]
            },
            {
                id: 'TOP-Another',
                type: 'image',
                tag: 'img',
                rect: ['287', '89','848','280','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TOP-Another.png"]
            },
            {
                id: 'TOP-RL_spring',
                type: 'image',
                tag: 'img',
                rect: ['487', '229','534','152','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TOP-RL_spring.png"]
            },
            {
                id: 'TOP-shackle',
                type: 'image',
                tag: 'img',
                rect: ['959', '193','65','61','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TOP-shackle.png"]
            },
            {
                id: 'TOP-arm',
                type: 'image',
                tag: 'img',
                rect: ['461', '155','577','105','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TOP-arm.png"]
            },
            {
                id: 'TOP-Tire',
                type: 'image',
                tag: 'img',
                rect: ['567', '53','378','377','auto', 'auto'],
                opacity: 0.6,
                fill: ["rgba(0,0,0,0)",im+"TOP-Tire.png"]
            },
            {
                id: 'SELECT_TOP-shackle',
                type: 'image',
                tag: 'img',
                rect: ['959', '193','65','61','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TOP-shackle-1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_SELECT_TOP-shackle}": [
                ["style", "opacity", '0']
            ],
            "${_BOTTOM-Another}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_TOP-Another}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_TOP-RL_spring}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_BOTTOM-stabilizer}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_TOP-shackle}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TOP-Tire}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_TOP-arm}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_BOTTOM-bushing_compleat}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1333,
            autoPlay: true,
            timeline: [
                { id: "eid30", tween: [ "transform", "${_TOP-RL_spring}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "transform", "${_TOP-Tire}", "scaleY", '1', { fromValue: '0.95'}], position: 200, duration: 367, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "transform", "${_TOP-Tire}", "scaleX", '1', { fromValue: '0.95'}], position: 200, duration: 367, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "transform", "${_TOP-shackle}", "scaleX", '1', { fromValue: '0.95'}], position: 67, duration: 367, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_BOTTOM-bushing_compleat}", "opacity", '1', { fromValue: '0'}], position: 433, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "transform", "${_TOP-shackle}", "scaleY", '1', { fromValue: '0.95'}], position: 67, duration: 367, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "transform", "${_TOP-arm}", "scaleY", '1', { fromValue: '0.95'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "transform", "${_TOP-RL_spring}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "transform", "${_BOTTOM-Another}", "scaleX", '1', { fromValue: '0.95'}], position: 367, duration: 367, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_BOTTOM-Another}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 367, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "transform", "${_BOTTOM-Another}", "scaleY", '1', { fromValue: '0.95'}], position: 367, duration: 367, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "transform", "${_TOP-Another}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "transform", "${_BOTTOM-bushing_compleat}", "scaleX", '1', { fromValue: '0.95'}], position: 433, duration: 367, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_TOP-arm}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_SELECT_TOP-shackle}", "opacity", '1', { fromValue: '0'}], position: 967, duration: 366, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_BOTTOM-stabilizer}", "scaleX", '1', { fromValue: '0.95'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "transform", "${_BOTTOM-bushing_compleat}", "scaleY", '1', { fromValue: '0.95'}], position: 433, duration: 367, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_TOP-RL_spring}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "transform", "${_TOP-Another}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "transform", "${_TOP-arm}", "scaleX", '1', { fromValue: '0.95'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_TOP-Tire}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 200, duration: 367, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_TOP-shackle}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 367, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "transform", "${_BOTTOM-stabilizer}", "scaleY", '1', { fromValue: '0.95'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_TOP-Another}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_BOTTOM-stabilizer}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-19194727");
