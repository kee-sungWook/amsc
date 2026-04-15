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
                id: 'con07',
                type: 'image',
                tag: 'img',
                rect: ['1920', '440','294','265','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con07.png"]
            },
            {
                id: 'con06',
                type: 'image',
                tag: 'img',
                rect: ['1632', '543','283','318','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con06.png"]
            },
            {
                id: 'con05',
                type: 'image',
                tag: 'img',
                rect: ['1351', '665','282','299','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con05.png"]
            },
            {
                id: 'con03_4',
                type: 'image',
                tag: 'img',
                rect: ['1291', '294','270','238','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con03_4.png"]
            },
            {
                id: 'con03_3',
                type: 'image',
                tag: 'img',
                rect: ['1196', '444','90','98','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con03_3.png"]
            },
            {
                id: 'con03_2',
                type: 'image',
                tag: 'img',
                rect: ['1123', '492','74','82','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con03_2.png"]
            },
            {
                id: 'con04',
                type: 'image',
                tag: 'img',
                rect: ['1120px', '810px','221','233','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con04.png"]
            },
            {
                id: 'con03_1',
                type: 'image',
                tag: 'img',
                rect: ['875', '474','275','264','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con03_1.png"]
            },
            {
                id: 'con02',
                type: 'image',
                tag: 'img',
                rect: ['753', '631','125','127','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02.png"]
            },
            {
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['681', '687','76','97','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'bady',
                type: 'image',
                tag: 'img',
                rect: ['186', '187','500','401','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bady.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_con03_3}": [
                ["style", "left", '1006px'],
                ["style", "top", '518px']
            ],
            "${_con03_2}": [
                ["style", "left", '1027px'],
                ["style", "top", '524px']
            ],
            "${_con05}": [
                ["style", "left", '995px'],
                ["style", "top", '403px']
            ],
            "${_con02}": [
                ["style", "left", '893px'],
                ["style", "top", '567px']
            ],
            "${_con01}": [
                ["style", "left", '895px'],
                ["style", "top", '594px']
            ],
            "${_con07}": [
                ["style", "left", '1084px'],
                ["style", "top", '386px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_con06}": [
                ["style", "top", '379px'],
                ["style", "left", '1036px']
            ],
            "${_con03_4}": [
                ["style", "left", '943px'],
                ["style", "top", '456px']
            ],
            "${_con04}": [
                ["style", "left", '1000px'],
                ["style", "top", '452px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "style", "${_con03_3}", "top", '444px', { fromValue: '518px'}], position: 500, duration: 250 },
                { id: "eid34", tween: [ "style", "${_con05}", "left", '1190px', { fromValue: '995px'}], position: 0, duration: 194 },
                { id: "eid45", tween: [ "style", "${_con05}", "left", '1591px', { fromValue: '1190px'}], position: 194, duration: 306 },
                { id: "eid22", tween: [ "style", "${_con05}", "left", '1351px', { fromValue: '1591px'}], position: 500, duration: 250 },
                { id: "eid40", tween: [ "style", "${_con06}", "top", '283px', { fromValue: '379px'}], position: 0, duration: 194 },
                { id: "eid52", tween: [ "style", "${_con06}", "top", '543px', { fromValue: '283px'}], position: 194, duration: 306 },
                { id: "eid42", tween: [ "style", "${_con06}", "left", '1231px', { fromValue: '1036px'}], position: 0, duration: 194 },
                { id: "eid51", tween: [ "style", "${_con06}", "left", '1632px', { fromValue: '1231px'}], position: 194, duration: 306 },
                { id: "eid20", tween: [ "style", "${_con03_4}", "top", '294px', { fromValue: '456px'}], position: 500, duration: 250 },
                { id: "eid6", tween: [ "style", "${_con01}", "left", '681px', { fromValue: '895px'}], position: 500, duration: 250 },
                { id: "eid2", tween: [ "style", "${_con02}", "left", '753px', { fromValue: '893px'}], position: 500, duration: 250 },
                { id: "eid18", tween: [ "style", "${_con03_4}", "left", '1291px', { fromValue: '943px'}], position: 500, duration: 250 },
                { id: "eid37", tween: [ "style", "${_con07}", "top", '290px', { fromValue: '386px'}], position: 0, duration: 194 },
                { id: "eid50", tween: [ "style", "${_con07}", "top", '550px', { fromValue: '290px'}], position: 194, duration: 306 },
                { id: "eid32", tween: [ "style", "${_con07}", "top", '440px', { fromValue: '550px'}], position: 500, duration: 250 },
                { id: "eid12", tween: [ "style", "${_con03_2}", "top", '492px', { fromValue: '524px'}], position: 500, duration: 250 },
                { id: "eid38", tween: [ "style", "${_con07}", "left", '1279px', { fromValue: '1084px'}], position: 0, duration: 194 },
                { id: "eid49", tween: [ "style", "${_con07}", "left", '1680px', { fromValue: '1279px'}], position: 194, duration: 306 },
                { id: "eid30", tween: [ "style", "${_con07}", "left", '1920px', { fromValue: '1680px'}], position: 500, duration: 250 },
                { id: "eid10", tween: [ "style", "${_con03_2}", "left", '1123px', { fromValue: '1027px'}], position: 500, duration: 250 },
                { id: "eid33", tween: [ "style", "${_con05}", "top", '307px', { fromValue: '403px'}], position: 0, duration: 194 },
                { id: "eid46", tween: [ "style", "${_con05}", "top", '567px', { fromValue: '307px'}], position: 194, duration: 306 },
                { id: "eid24", tween: [ "style", "${_con05}", "top", '665px', { fromValue: '567px'}], position: 500, duration: 250 },
                { id: "eid14", tween: [ "style", "${_con03_3}", "left", '1196px', { fromValue: '1006px'}], position: 500, duration: 250 },
                { id: "eid35", tween: [ "style", "${_con04}", "top", '356px', { fromValue: '452px'}], position: 0, duration: 127 },
                { id: "eid48", tween: [ "style", "${_con04}", "top", '616px', { fromValue: '356px'}], position: 127, duration: 373 },
                { id: "eid28", tween: [ "style", "${_con04}", "top", '810px', { fromValue: '616px'}], position: 500, duration: 250 },
                { id: "eid8", tween: [ "style", "${_con01}", "top", '687px', { fromValue: '594px'}], position: 500, duration: 250 },
                { id: "eid36", tween: [ "style", "${_con04}", "left", '1195px', { fromValue: '1000px'}], position: 0, duration: 127 },
                { id: "eid47", tween: [ "style", "${_con04}", "left", '1596px', { fromValue: '1195px'}], position: 127, duration: 373 },
                { id: "eid26", tween: [ "style", "${_con04}", "left", '1120px', { fromValue: '1596px'}], position: 500, duration: 250 },
                { id: "eid4", tween: [ "style", "${_con02}", "top", '631px', { fromValue: '567px'}], position: 500, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-5682162");
