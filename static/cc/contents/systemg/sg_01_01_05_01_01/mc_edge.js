/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'con01-copy',
            type:'image',
            tag:'img',
            rect:['208','91','776','538','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"con01-copy.png"]
         },
         {
            id:'con02-copy',
            type:'image',
            tag:'img',
            rect:['1049','465','1143','674','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"con02-copy.png"]
         },
         {
            id:'ex01',
            type:'image',
            tag:'img',
            rect:['208','91','776','538','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ex01.png"]
         },
         {
            id:'ex02',
            type:'image',
            tag:'img',
            rect:['1049','465','1143','674','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ex02.png"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_con02-copy}": [
            ["style", "opacity", '0.9672131147541']
         ],
         "${_ex02}": [
            ["style", "opacity", '0']
         ],
         "${_con01-copy}": [
            ["style", "opacity", '0.91803278688525']
         ],
         "${_ex01}": [
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '2400px'],
            ["style", "height", '1230px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid14", tween: [ "style", "${_con02-copy}", "opacity", '1', { fromValue: '0.9672131147541'}], position: 833, duration: 167 },
            { id: "eid2", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
            { id: "eid5", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
            { id: "eid6", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 292, duration: 42 },
            { id: "eid7", tween: [ "style", "${_ex01}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 42 },
            { id: "eid4", tween: [ "style", "${_con01-copy}", "opacity", '1', { fromValue: '0.91803278688525'}], position: 458, duration: 250 },
            { id: "eid9", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 375, duration: 42 },
            { id: "eid10", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 541, duration: 42 },
            { id: "eid11", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 708, duration: 42 },
            { id: "eid12", tween: [ "style", "${_ex02}", "opacity", '0', { fromValue: '1'}], position: 833, duration: 42 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-9516247");
