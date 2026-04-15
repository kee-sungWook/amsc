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
                id: 'BACKGROUND-OUTLINE',
                type: 'image',
                tag: 'img',
                rect: ['132', '187','960','856','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BACKGROUND-OUTLINE.png"]
            },
            {
                id: 'spring07',
                type: 'image',
                tag: 'img',
                rect: ['1642', '578','429','43','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring07.png"]
            },
            {
                id: 'spring06',
                type: 'image',
                tag: 'img',
                rect: ['1648', '579','423','107','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring06.png"]
            },
            {
                id: 'spring05',
                type: 'image',
                tag: 'img',
                rect: ['1647', '653','423','106','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring05.png"]
            },
            {
                id: 'spring04',
                type: 'image',
                tag: 'img',
                rect: ['1647', '724','423','106','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring04.png"]
            },
            {
                id: 'spring03',
                type: 'image',
                tag: 'img',
                rect: ['1649', '795','423','106','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring03.png"]
            },
            {
                id: 'spring02',
                type: 'image',
                tag: 'img',
                rect: ['1647', '869','423','107','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring02.png"]
            },
            {
                id: 'spring01',
                type: 'image',
                tag: 'img',
                rect: ['1647', '932','428','44','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring01.png"]
            },
            {
                id: 'boby',
                type: 'image',
                tag: 'img',
                rect: ['1590', '439','538','574','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"boby.png"]
            },
            {
                id: 'IMAGE',
                type: 'image',
                tag: 'img',
                rect: ['133', '188','2134','854','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE.png"]
            },
            {
                id: 'boby01',
                type: 'image',
                rect: ['1760px', '681px','198px','416px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"boby01.png",'0px','0px']
            },
            {
                id: 'Text1',
                type: 'text',
                rect: ['1776px', '1126px','172px','82px','auto', 'auto'],
                text: "닫힘",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 80, "rgba(253,0,126,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['1776px', '1126px','172px','82px','auto', 'auto'],
                text: "열림",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 80, "rgba(45,143,254,1.00)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text1}": [
                ["style", "top", '1126px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(253,0,126,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '1776px'],
                ["style", "font-size", '80px']
            ],
            "${_boby01}": [
                ["style", "top", '680px'],
                ["style", "opacity", '0'],
                ["style", "left", '1760px']
            ],
            "${_spring04}": [
                ["style", "top", '724px']
            ],
            "${_Text2}": [
                ["style", "top", '1126px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(45,143,254,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1776px'],
                ["style", "font-size", '80px']
            ],
            "${_spring06}": [
                ["style", "top", '579px']
            ],
            "${_spring07}": [
                ["style", "top", '578px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_spring03}": [
                ["style", "top", '795px']
            ],
            "${_spring05}": [
                ["style", "top", '653px']
            ],
            "${_boby}": [
                ["style", "top", '439px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: true,
            labels: {
                "01": 0
            },
            timeline: [
                { id: "eid4", tween: [ "style", "${_spring03}", "top", '821px', { fromValue: '795px'}], position: 0, duration: 1000 },
                { id: "eid27", tween: [ "style", "${_spring03}", "top", '795px', { fromValue: '821px'}], position: 2000, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_spring06}", "top", '678px', { fromValue: '579px'}], position: 0, duration: 1000 },
                { id: "eid24", tween: [ "style", "${_spring06}", "top", '579px', { fromValue: '678px'}], position: 2000, duration: 1000 },
                { id: "eid6", tween: [ "style", "${_spring05}", "top", '726px', { fromValue: '653px'}], position: 0, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_spring05}", "top", '653px', { fromValue: '726px'}], position: 2000, duration: 1000 },
                { id: "eid9", tween: [ "style", "${_boby}", "top", '544px', { fromValue: '439px'}], position: 0, duration: 1000 },
                { id: "eid15", tween: [ "style", "${_boby}", "top", '442px', { fromValue: '544px'}], position: 2000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_Text1}", "opacity", '0.9609375', { fromValue: '1'}], position: 0, duration: 750 },
                { id: "eid31", tween: [ "style", "${_Text1}", "opacity", '0', { fromValue: '0.960938'}], position: 750, duration: 250 },
                { id: "eid39", tween: [ "style", "${_Text1}", "opacity", '1', { fromValue: '0.000000'}], position: 2675, duration: 325 },
                { id: "eid8", tween: [ "style", "${_spring07}", "top", '679px', { fromValue: '578px'}], position: 0, duration: 1000 },
                { id: "eid23", tween: [ "style", "${_spring07}", "top", '578px', { fromValue: '679px'}], position: 2000, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_boby01}", "top", '680px', { fromValue: '680px'}], position: 2500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_boby01}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 350 },
                { id: "eid13", tween: [ "style", "${_boby01}", "opacity", '0.9921875', { fromValue: '1'}], position: 1350, duration: 650 },
                { id: "eid16", tween: [ "style", "${_boby01}", "opacity", '0', { fromValue: '0.992188'}], position: 2000, duration: 500 },
                { id: "eid5", tween: [ "style", "${_spring04}", "top", '773px', { fromValue: '724px'}], position: 0, duration: 1000 },
                { id: "eid26", tween: [ "style", "${_spring04}", "top", '724px', { fromValue: '773px'}], position: 2000, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 435 },
                { id: "eid37", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 325 }            ]
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
})(jQuery, AdobeEdge, "EDGE-16091701");
