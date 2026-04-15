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
                id: 'anotherThing',
                type: 'image',
                tag: 'img',
                rect: ['155', '35','1728','1177','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"anotherThing.png"]
            },
            {
                id: 'blackThing',
                type: 'image',
                tag: 'img',
                rect: ['155', '35','1728','1177','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackThing.png"]
            },
            {
                id: 'whiteThing',
                type: 'image',
                tag: 'img',
                rect: ['155', '35','1728','1177','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteThing.png"]
            },
            {
                id: 'arrow',
                type: 'image',
                tag: 'img',
                rect: ['1313', '408','150','150','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png"]
            },
            {
                id: 'cover2_grey',
                type: 'image',
                tag: 'img',
                rect: ['1087px', '17px','394','326','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover2_grey.png"]
            },
            {
                id: 'd_shaft',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['1438', '184','222','211','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"d_shaft.png"]
            },
            {
                id: 'cover1_grey',
                type: 'image',
                tag: 'img',
                rect: ['1636', '278','608','454','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover1_grey.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['201', '770','564','182','auto', 'auto'],
                text: "디퍼런셜캐리어\r(차동기어)",
                align: "center",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_anotherThing}": [
                ["style", "opacity", '0']
            ],
            "${_arrow}": [
                ["style", "opacity", '0']
            ],
            "${_whiteThing}": [
                ["style", "opacity", '0']
            ],
            "${_cover2_grey}": [
                ["style", "top", '96px'],
                ["style", "opacity", '0'],
                ["style", "left", '1230px']
            ],
            "${_blackThing}": [
                ["style", "opacity", '0']
            ],
            "${_cover1_grey}": [
                ["style", "top", '139px'],
                ["style", "opacity", '0'],
                ["style", "left", '1413px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_Text}": [
                ["style", "opacity", '0']
            ],
            "${_d_shaft}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_cover1_grey}", "top", '278px', { fromValue: '139px'}], position: 300, duration: 300, easing: "easeOutQuad" },
                { id: "eid15", tween: [ "style", "${_d_shaft}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid16", tween: [ "style", "${_d_shaft}", "display", 'block', { fromValue: 'none'}], position: 300, duration: 0, easing: "easeInQuad" },
                { id: "eid4", tween: [ "style", "${_cover2_grey}", "top", '17px', { fromValue: '96px'}], position: 300, duration: 300, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_cover1_grey}", "left", '1636px', { fromValue: '1413px'}], position: 300, duration: 300, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 772, duration: 39 },
                { id: "eid24", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 811, duration: 39 },
                { id: "eid27", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 850, duration: 39 },
                { id: "eid28", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 890, duration: 39 },
                { id: "eid31", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 928, duration: 39 },
                { id: "eid32", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 967, duration: 39 },
                { id: "eid41", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 1006, duration: 39 },
                { id: "eid42", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 1045, duration: 39 },
                { id: "eid45", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0'}], position: 1084, duration: 39 },
                { id: "eid46", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 1123, duration: 39 },
                { id: "eid20", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 39 },
                { id: "eid23", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 772, duration: 39 },
                { id: "eid25", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 811, duration: 39 },
                { id: "eid26", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 850, duration: 39 },
                { id: "eid29", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 889, duration: 39 },
                { id: "eid30", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 928, duration: 39 },
                { id: "eid39", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 967, duration: 39 },
                { id: "eid40", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 1006, duration: 39 },
                { id: "eid43", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0'}], position: 1045, duration: 39 },
                { id: "eid44", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 1084, duration: 39 },
                { id: "eid14", tween: [ "style", "${_cover2_grey}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_cover1_grey}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid18", tween: [ "style", "${_arrow}", "opacity", '1', { fromValue: '0'}], position: 433, duration: 300, easing: "easeInQuad" },
                { id: "eid48", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1199, duration: 301 },
                { id: "eid2", tween: [ "style", "${_cover2_grey}", "left", '1087px', { fromValue: '1230px'}], position: 300, duration: 300, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_anotherThing}", "opacity", '1', { fromValue: '0'}], position: 1199, duration: 301 }            ]
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
})(jQuery, AdobeEdge, "EDGE-22910703");
