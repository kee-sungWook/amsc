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
            id:'co',
            type:'image',
            tag:'img',
            rect:['270','62','441','1106','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"co.png"]
         },
         {
            id:'ex',
            type:'image',
            tag:'img',
            rect:['270','62','441','1106','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ex.png"]
         },
         {
            id:'txt_title',
            type:'text',
            rect:['947px','429px','424px','92px','auto','auto'],
            text:"인젝터란 ?",
            font:['abel, sans-serif',80,"rgba(0,74,141,1.00)","600","none",""],
            transform:[]
         },
         {
            id:'txt1',
            type:'text',
            rect:['947px','556px','1288px','230px','auto','auto'],
            opacity:1,
            text:"자동차 ECU에서 보내온 분사신호에 의해 연료를 흡기매니홀드로<br>분사하는 장치로서 솔레노이드가 내장되어 있는 분사노즐을<br>말하는 것입니다.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',45,"rgba(0,74,141,1)","600","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_ex}": [
            ["style", "opacity", '0']
         ],
         "${_txt_title}": [
            ["color", "color", 'rgba(0,74,141,1)'],
            ["style", "font-weight", '600'],
            ["style", "left", '947px'],
            ["style", "font-size", '80px'],
            ["style", "top", '429px'],
            ["transform", "scaleY", '1.1'],
            ["style", "opacity", '0'],
            ["style", "height", '92px'],
            ["style", "font-family", '나눔고딕, NanumGothic'],
            ["transform", "scaleX", '1.1'],
            ["style", "width", '668px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '2400px'],
            ["style", "height", '1230px'],
            ["style", "overflow", 'hidden']
         ],
         "${_co}": [
            ["style", "opacity", '0']
         ],
         "${_txt1}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '947px'],
            ["style", "font-size", '45px'],
            ["style", "top", '556px'],
            ["transform", "scaleY", '1.1'],
            ["style", "height", '230px'],
            ["style", "font-family", '나눔고딕, NanumGothic'],
            ["style", "width", '1288px']
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
            { id: "eid11", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
            { id: "eid19", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid17", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
            { id: "eid13", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid2", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
            { id: "eid3", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
            { id: "eid4", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
            { id: "eid5", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 42 },
            { id: "eid15", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
            { id: "eid9", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
            { id: "eid7", tween: [ "style", "${_co}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-18071452");
