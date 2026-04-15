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
                id: 'e_sus',
                type: 'image',
                rect: ['458px', '321px','821px','439px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"e_sus.png",'0px','0px']
            },
            {
                id: 'select_e_sus',
                type: 'image',
                rect: ['458px', '321px','821px','439px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"select_e_sus.png",'0px','0px']
            },
            {
                id: 'sus',
                type: 'image',
                rect: ['152px', '423px','860px','491px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sus.png",'0px','0px']
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
            "${_BODY}": [
                ["style", "opacity", '0.01']
            ],
            "${_e_sus}": [
                ["style", "top", '321px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '458px']
            ],
            "${_tire1}": [
                ["style", "left", '106px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_sus}": [
                ["style", "top", '423px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '152px']
            ],
            "${_select_e_sus}": [
                ["style", "top", '321px'],
                ["style", "opacity", '0'],
                ["style", "left", '458px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1467,
            autoPlay: true,
            timeline: [
                { id: "eid377", tween: [ "transform", "${_sus}", "scaleY", '1', { fromValue: '1.1'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid383", tween: [ "style", "${_sus}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid375", tween: [ "transform", "${_sus}", "scaleX", '1', { fromValue: '1.1'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid379", tween: [ "transform", "${_e_sus}", "scaleX", '1', { fromValue: '1.1'}], position: 667, duration: 367, easing: "easeOutQuad" },
                { id: "eid9", tween: [ "style", "${_tire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid386", tween: [ "style", "${_tire1}", "opacity", '0.5', { fromValue: '1'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid146", tween: [ "style", "${_tire1}", "left", '108px', { fromValue: '106px'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid381", tween: [ "transform", "${_e_sus}", "scaleY", '1', { fromValue: '1.1'}], position: 667, duration: 367, easing: "easeOutQuad" },
                { id: "eid385", tween: [ "style", "${_e_sus}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 367, easing: "easeOutQuad" },
                { id: "eid388", tween: [ "style", "${_select_e_sus}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 367, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_tire1_shadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid6", tween: [ "style", "${_BODY}", "opacity", '0.99', { fromValue: '0.01'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
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
