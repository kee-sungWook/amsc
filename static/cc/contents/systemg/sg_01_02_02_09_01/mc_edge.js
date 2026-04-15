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
            id:'air',
            type:'image',
            tag:'img',
            rect:['192','110','640','1009','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"air.png"]
         },
         {
            id:'ex',
            type:'image',
            tag:'img',
            rect:['192','110','640','1009','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ex.png"]
         },
         {
            id:'txt_title',
            type:'text',
            rect:['947px','446px','424px','92px','auto','auto'],
            text:"에어플로우 센서란?",
            font:['abel, sans-serif',80,"rgba(0,74,141,1.00)","600","none",""],
            transform:[]
         },
         {
            id:'txt1',
            type:'text',
            rect:['947px','573px','1288px','230px','auto','auto'],
            opacity:1,
            text:"공기 흐름 센서는 실린더에 공급되는 흡입 공기량에<br>알맞는 기본 연료 본사량을 결정하기 위하여 설치된 센서로서<br>카르만 와류 또는 포텐쇼미터를 이용하여 실린더에 공급되는<br>공기량을 전압비로 계측하여 ECU에 입력시키는 역할을 한다.",
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
         "${_air}": [
            ["style", "opacity", '0']
         ],
         "${_txt_title}": [
            ["color", "color", 'rgba(0,74,141,1)'],
            ["style", "font-weight", '600'],
            ["style", "left", '947px'],
            ["style", "font-size", '80px'],
            ["style", "top", '446px'],
            ["transform", "scaleY", '1.1'],
            ["style", "width", '668px'],
            ["style", "height", '92px'],
            ["style", "font-family", '나눔고딕, NanumGothic'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1230px'],
            ["style", "width", '2400px']
         ],
         "${_txt1}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '947px'],
            ["style", "font-size", '45px'],
            ["style", "top", '573px'],
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
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 625, duration: 250 },
            { id: "eid25", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid13", tween: [ "style", "${_air}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 250 },
            { id: "eid23", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 250 },
            { id: "eid8", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
            { id: "eid9", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
            { id: "eid10", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
            { id: "eid11", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 458, duration: 42 },
            { id: "eid19", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
            { id: "eid21", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 750, duration: 250 },
            { id: "eid15", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 625, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-23577166");
