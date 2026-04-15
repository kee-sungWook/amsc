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
            id:'cor',
            type:'image',
            tag:'img',
            rect:['178','121','710','988','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cor.png"]
         },
         {
            id:'ex',
            type:'image',
            rect:['178px','121px','710px','988px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ex.png",'0px','0px']
         },
         {
            id:'txt_title',
            type:'text',
            rect:['947px','429px','424px','92px','auto','auto'],
            text:"캠각센서 ?",
            font:['abel, sans-serif',80,"rgba(0,74,141,1.00)","600","none",""],
            transform:[]
         },
         {
            id:'txt1',
            type:'text',
            rect:['947px','556px','1288px','230px','auto','auto'],
            opacity:1,
            text:"실린더의 압축상사점 위치를 감지하는 센서입니다.<br>연료의 분사순서 및 점화 실린더를 결정하는 신호로 사용됩니다.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',45,"rgba(0,74,141,1)","600","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_ex}": [
            ["style", "top", '121px'],
            ["style", "opacity", '0'],
            ["style", "left", '178px']
         ],
         "${_cor}": [
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
            ["style", "top", '556px'],
            ["transform", "scaleY", '1.1'],
            ["style", "height", '230px'],
            ["style", "font-family", '나눔고딕, NanumGothic'],
            ["style", "width", '1288px']
         ],
         "${_txt_title}": [
            ["color", "color", 'rgba(0,74,141,1)'],
            ["style", "font-weight", '600'],
            ["style", "left", '947px'],
            ["style", "font-size", '80px'],
            ["style", "top", '429px'],
            ["transform", "scaleY", '1.1'],
            ["style", "width", '668px'],
            ["style", "height", '92px'],
            ["style", "font-family", '나눔고딕, NanumGothic'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1063,
         autoPlay: true,
         timeline: [
            { id: "eid12", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 813, duration: 250 },
            { id: "eid20", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 813, duration: 250 },
            { id: "eid16", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 667, duration: 250 },
            { id: "eid10", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 667, duration: 250 },
            { id: "eid18", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 813, duration: 250 },
            { id: "eid8", tween: [ "style", "${_cor}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid2", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 42 },
            { id: "eid3", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 42 },
            { id: "eid4", tween: [ "style", "${_ex}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
            { id: "eid6", tween: [ "style", "${_ex}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 42 },
            { id: "eid14", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 667, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-18585435");
