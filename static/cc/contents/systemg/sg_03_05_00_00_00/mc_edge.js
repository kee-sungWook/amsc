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
            id:'tire1_shadow',
            type:'image',
            tag:'img',
            rect:['32','378','1321','597','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tire1_shadow.png"]
         },
         {
            id:'drum_brake',
            type:'image',
            tag:'img',
            rect:['144','422','484','258','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"drum_brake.png"]
         },
         {
            id:'disk_brake',
            type:'image',
            tag:'img',
            rect:['728','628','567','289','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"disk_brake.png"]
         },
         {
            id:'Line_Sensor',
            type:'image',
            tag:'img',
            rect:['172','439','1073','373','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Line_Sensor.png"]
         },
         {
            id:'brakeSystem',
            type:'image',
            tag:'img',
            rect:['234','491','1015','391','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"brakeSystem.png"]
         },
         {
            id:'P_brake',
            type:'image',
            tag:'img',
            rect:['201','462','565','160','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"P_brake.png"]
         },
         {
            id:'ABS',
            type:'image',
            tag:'img',
            rect:['946','607','115','105','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ABS.png"]
         },
         {
            id:'SELECT_P_brake',
            type:'image',
            tag:'img',
            rect:['201','462','565','160','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"SELECT_P_brake.png"]
         },
         {
            id:'BODY',
            type:'image',
            tag:'img',
            rect:['29','254','1371','717','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"BODY.png"]
         },
         {
            id:'tire1',
            type:'image',
            tag:'img',
            rect:['108','526','792','446','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tire1.png"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_tire1_shadow}": [
            ["style", "opacity", '0']
         ],
         "${_Line_Sensor}": [
            ["transform", "scaleX", '1.05'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.05']
         ],
         "${_brakeSystem}": [
            ["transform", "scaleX", '1.05'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.05']
         ],
         "${_P_brake}": [
            ["transform", "scaleX", '1.05'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.05']
         ],
         "${_disk_brake}": [
            ["transform", "scaleX", '1.05'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.05']
         ],
         "${_SELECT_P_brake}": [
            ["style", "opacity", '0']
         ],
         "${_drum_brake}": [
            ["transform", "scaleX", '1.05'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.05']
         ],
         "${_BODY}": [
            ["style", "opacity", '0.01']
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
         "${_ABS}": [
            ["transform", "scaleX", '1.05'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.05']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1733.3333333333,
         autoPlay: true,
         timeline: [
            { id: "eid392", tween: [ "transform", "${_Line_Sensor}", "scaleY", '1', { fromValue: '1.05'}], position: 833, duration: 400, easing: "easeOutQuad" },
            { id: "eid398", tween: [ "transform", "${_disk_brake}", "scaleX", '1', { fromValue: '1.05'}], position: 667, duration: 400, easing: "easeOutQuad" },
            { id: "eid420", tween: [ "style", "${_ABS}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 400, easing: "easeOutQuad" },
            { id: "eid390", tween: [ "transform", "${_Line_Sensor}", "scaleX", '1', { fromValue: '1.05'}], position: 833, duration: 400, easing: "easeOutQuad" },
            { id: "eid430", tween: [ "style", "${_SELECT_P_brake}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 233, easing: "easeInQuad" },
            { id: "eid12", tween: [ "style", "${_tire1_shadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid426", tween: [ "style", "${_tire1_shadow}", "opacity", '0.3', { fromValue: '1'}], position: 667, duration: 400, easing: "easeInQuad" },
            { id: "eid6", tween: [ "style", "${_BODY}", "opacity", '0.99', { fromValue: '0.01'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid394", tween: [ "transform", "${_drum_brake}", "scaleX", '1', { fromValue: '1.05'}], position: 667, duration: 400, easing: "easeOutQuad" },
            { id: "eid424", tween: [ "style", "${_brakeSystem}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 400, easing: "easeOutQuad" },
            { id: "eid404", tween: [ "transform", "${_ABS}", "scaleY", '1', { fromValue: '1.05'}], position: 367, duration: 400, easing: "easeOutQuad" },
            { id: "eid412", tween: [ "transform", "${_brakeSystem}", "scaleY", '1', { fromValue: '1.05'}], position: 500, duration: 400, easing: "easeOutQuad" },
            { id: "eid414", tween: [ "style", "${_Line_Sensor}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 400, easing: "easeOutQuad" },
            { id: "eid400", tween: [ "transform", "${_disk_brake}", "scaleY", '1', { fromValue: '1.05'}], position: 667, duration: 400, easing: "easeOutQuad" },
            { id: "eid406", tween: [ "transform", "${_P_brake}", "scaleX", '1', { fromValue: '1.05'}], position: 1000, duration: 400, easing: "easeOutQuad" },
            { id: "eid396", tween: [ "transform", "${_drum_brake}", "scaleY", '1', { fromValue: '1.05'}], position: 667, duration: 400, easing: "easeOutQuad" },
            { id: "eid422", tween: [ "style", "${_P_brake}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 400, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_tire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid425", tween: [ "style", "${_tire1}", "opacity", '0.3', { fromValue: '1'}], position: 667, duration: 400, easing: "easeInQuad" },
            { id: "eid416", tween: [ "style", "${_drum_brake}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 400, easing: "easeOutQuad" },
            { id: "eid418", tween: [ "style", "${_disk_brake}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 400, easing: "easeOutQuad" },
            { id: "eid146", tween: [ "style", "${_tire1}", "left", '108px', { fromValue: '106px'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid410", tween: [ "transform", "${_brakeSystem}", "scaleX", '1', { fromValue: '1.05'}], position: 500, duration: 400, easing: "easeOutQuad" },
            { id: "eid402", tween: [ "transform", "${_ABS}", "scaleX", '1', { fromValue: '1.05'}], position: 367, duration: 400, easing: "easeOutQuad" },
            { id: "eid408", tween: [ "transform", "${_P_brake}", "scaleY", '1', { fromValue: '1.05'}], position: 1000, duration: 400, easing: "easeOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-108052827");
