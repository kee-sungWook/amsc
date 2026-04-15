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
            id:'con02-copy',
            type:'image',
            tag:'img',
            rect:['625','658','973','509','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"con02-copy.png"]
         },
         {
            id:'con01-copy',
            type:'image',
            tag:'img',
            rect:['316','61','667','878','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"con01-copy.png"]
         },
         {
            id:'ex01',
            type:'image',
            tag:'img',
            rect:['316','61','667','878','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ex01.png"]
         },
         {
            id:'ex02',
            type:'image',
            tag:'img',
            rect:['625','658','973','509','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ex02.png"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_con02-copy}": [
            ["style", "opacity", '0']
         ],
         "${_ex02}": [
            ["style", "opacity", '0']
         ],
         "${_con01-copy}": [
            ["style", "opacity", '0']
         ],
         "${_ex01}": [
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1230px'],
            ["style", "width", '2400px']
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
            { id: "eid14", tween: [ "style", "${_con01-copy}", "opacity", '1', { fromValue: '0'}], position: 542, duration: 125 },
            { id: "eid2", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
            { id: "eid10", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
            { id: "eid11", tween: [ "style", "${_ex01}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
            { id: "eid12", tween: [ "style", "${_ex01}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 42 },
            { id: "eid16", tween: [ "style", "${_con02-copy}", "opacity", '1', { fromValue: '0'}], position: 542, duration: 125 },
            { id: "eid4", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
            { id: "eid7", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
            { id: "eid8", tween: [ "style", "${_ex02}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
            { id: "eid9", tween: [ "style", "${_ex02}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 42 }         ]
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
})(jQuery, AdobeEdge, "EDGE-15646654");
