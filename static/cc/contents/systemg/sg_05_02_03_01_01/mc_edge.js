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
                id: 'pic5',
                type: 'image',
                tag: 'img',
                rect: ['812', '596','694','535','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic5.png"]
            },
            {
                id: 'pic4',
                type: 'image',
                tag: 'img',
                rect: ['89', '649','422','557','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic4.png"]
            },
            {
                id: 'pic3',
                type: 'image',
                tag: 'img',
                rect: ['361', '478','106','166','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic3.png"]
            },
            {
                id: 'pic2',
                type: 'image',
                tag: 'img',
                rect: ['559', '113','489','141','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2.png"]
            },
            {
                id: 'pic2-6',
                type: 'image',
                tag: 'img',
                rect: ['238px', '27px','66','65','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2-6.png"]
            },
            {
                id: 'pic2-5',
                type: 'image',
                tag: 'img',
                rect: ['308px', '25px','73','102','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2-5.png"]
            },
            {
                id: 'pic2-4',
                type: 'image',
                tag: 'img',
                rect: ['391px', '49px','156','105','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2-4.png"]
            },
            {
                id: 'pic2-3',
                type: 'image',
                tag: 'img',
                rect: ['1059px', '219px','108','93','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2-3.png"]
            },
            {
                id: 'pic2-2',
                type: 'image',
                tag: 'img',
                rect: ['1169px', '228px','73','102','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2-2.png"]
            },
            {
                id: 'pic2-1',
                type: 'image',
                tag: 'img',
                rect: ['1247px', '259px','69','69','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic2-1.png"]
            },
            {
                id: 'pic1',
                type: 'image',
                tag: 'img',
                rect: ['347', '163','587','312','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pic1.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1641px', '523px','auto','auto','auto', 'auto'],
                text: "어퍼암<br>(UPPER ARM)",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_pic2-4}": [
                ["style", "top", '88px'],
                ["style", "opacity", '0'],
                ["style", "left", '491px']
            ],
            "${_pic2-1}": [
                ["style", "top", '209px'],
                ["style", "opacity", '0'],
                ["style", "left", '997px']
            ],
            "${_pic2-3}": [
                ["style", "top", '198px'],
                ["style", "opacity", '0'],
                ["style", "left", '936px']
            ],
            "${_pic2}": [
                ["style", "top", '213px'],
                ["style", "opacity", '0'],
                ["style", "left", '503px']
            ],
            "${_pic4}": [
                ["style", "top", '423px'],
                ["style", "opacity", '0'],
                ["style", "left", '143px']
            ],
            "${_pic1}": [
                ["style", "top", '159px'],
                ["style", "opacity", '0'],
                ["style", "left", '399px']
            ],
            "${_Text}": [
                ["style", "top", '523px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(0,74,141,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1641px'],
                ["style", "font-size", '80px']
            ],
            "${_pic2-6}": [
                ["style", "top", '98px'],
                ["style", "opacity", '0'],
                ["style", "left", '464px']
            ],
            "${_pic5}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_pic2-2}": [
                ["style", "top", '193px'],
                ["style", "opacity", '0'],
                ["style", "left", '978px']
            ],
            "${_pic3}": [
                ["style", "top", '295px'],
                ["style", "opacity", '0'],
                ["style", "left", '443px']
            ],
            "${_pic2-5}": [
                ["style", "top", '81px'],
                ["style", "opacity", '0'],
                ["style", "left", '479px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1267,
            autoPlay: true,
            timeline: [
                { id: "eid30", tween: [ "style", "${_pic2-2}", "left", '1169px', { fromValue: '978px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "transform", "${_pic5}", "scaleY", '1', { fromValue: '0.9'}], position: 667, duration: 300, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pic1}", "left", '347px', { fromValue: '399px'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_pic2-5}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid60", tween: [ "style", "${_pic2-1}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid69", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 967, duration: 300 },
                { id: "eid46", tween: [ "style", "${_pic2-6}", "left", '238px', { fromValue: '464px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "style", "${_pic2-4}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_pic2-4}", "top", '49px', { fromValue: '88px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_pic3}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_pic2-1}", "left", '1247px', { fromValue: '997px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_pic4}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 367, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "style", "${_pic2-6}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_pic2-5}", "top", '25px', { fromValue: '81px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_pic2-6}", "top", '27px', { fromValue: '98px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "style", "${_pic2-2}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_pic2-1}", "top", '259px', { fromValue: '209px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "transform", "${_pic5}", "scaleX", '1', { fromValue: '0.9'}], position: 667, duration: 300, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_pic2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 367, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_pic2-2}", "top", '228px', { fromValue: '193px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_pic3}", "top", '478px', { fromValue: '295px'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_pic2}", "top", '113px', { fromValue: '213px'}], position: 67, duration: 367, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_pic2}", "left", '559px', { fromValue: '503px'}], position: 67, duration: 367, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_pic2-5}", "left", '308px', { fromValue: '479px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_pic1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_pic2-3}", "opacity", '0.761904776096344', { fromValue: '0'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_pic2-4}", "left", '391px', { fromValue: '491px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_pic3}", "left", '361px', { fromValue: '443px'}], position: 133, duration: 367, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_pic2-3}", "top", '219px', { fromValue: '198px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_pic4}", "left", '89px', { fromValue: '143px'}], position: 200, duration: 367, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_pic4}", "top", '649px', { fromValue: '423px'}], position: 200, duration: 367, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_pic2-3}", "left", '1059px', { fromValue: '936px'}], position: 300, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_pic1}", "top", '163px', { fromValue: '159px'}], position: 0, duration: 367, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_pic5}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 300, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-12474879");
