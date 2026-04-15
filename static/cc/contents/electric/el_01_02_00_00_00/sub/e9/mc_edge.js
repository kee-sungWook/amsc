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
            id:'ARROW',
            type:'rect',
            rect:['1511','476','auto','auto','auto','auto']
         },
         {
            id:'AIRBLINDER',
            type:'rect',
            rect:['253px','293px','auto','auto','auto','auto']
         },
         {
            id:'ENG',
            type:'rect',
            rect:['67px','75px','auto','auto','auto','auto']
         },
         {
            id:'DISPLAY',
            type:'rect',
            rect:['944','664','auto','auto','auto','auto']
         },
         {
            id:'PMOVIE',
            type:'rect',
            rect:['-209px','847px','auto','auto','auto','auto']
         },
         {
            id:'exhaust',
            type:'image',
            tag:'img',
            rect:['124','386','239','567','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"exhaust.png"]
         },
         {
            id:'intake',
            type:'image',
            tag:'img',
            rect:['797','387','326','96','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"intake.png"]
         },
         {
            id:'FLOW3',
            type:'rect',
            rect:['871','170','auto','auto','auto','auto']
         },
         {
            id:'FLOW2',
            type:'rect',
            rect:['871','170','auto','auto','auto','auto']
         },
         {
            id:'FLOW1',
            type:'rect',
            rect:['1662','170','auto','auto','auto','auto']
         },
         {
            id:'modules',
            type:'image',
            tag:'img',
            rect:['943px','320px','880','622','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"modules.png"]
         },
         {
            id:'SENSOR',
            type:'rect',
            rect:['117','285','auto','auto','auto','auto']
         },
         {
            id:'FUEL',
            type:'rect',
            rect:['674','420','auto','auto','auto','auto']
         },
         {
            id:'injector',
            type:'image',
            tag:'img',
            rect:['813','305','122','126','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"injector.png"]
         },
         {
            id:'TPS',
            type:'text',
            rect:['1098','306','88','50','auto','auto'],
            text:"TPS",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'MAP',
            type:'text',
            rect:['977','525','99','50','auto','auto'],
            text:"MAP",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'CMP',
            type:'text',
            rect:['768px','224px','103','50','auto','auto'],
            text:"CMP",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'CKP',
            type:'text',
            rect:['781','707','95','50','auto','auto'],
            text:"CKP",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'noc',
            type:'text',
            rect:['714','596','184','50','auto','auto'],
            text:"노크센서",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'inj',
            type:'text',
            rect:['914','249','139','50','auto','auto'],
            text:"인젝터",
            align:"auto",
            font:['굴림',45,"rgb(255,0,0)","normal","none","normal"]
         },
         {
            id:'WTS',
            type:'text',
            rect:['331','503','100','50','auto','auto'],
            text:"WTS",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'O2',
            type:'text',
            rect:['155px','453px','65','50','auto','auto'],
            text:"O2",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'AFS',
            type:'text',
            rect:['1164','498','89','50','auto','auto'],
            text:"AFS",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'ECM',
            type:'text',
            rect:['1588','406px','151','74','auto','auto'],
            text:"ECM",
            align:"auto",
            font:['굴림',68,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txtC1',
            type:'text',
            rect:['967','808px','578','116px','auto','auto'],
            text:"산소센서, 노크센서, WTS,<br>MAP, TPS, AFS, CKP, CMP",
            align:"center",
            font:['굴림',40,"rgb(0,0,0)","normal","none","normal"]
         },
         {
            id:'Text',
            type:'text',
            rect:['968px','716px','577px','auto','auto','auto'],
            text:"각 센서의 신호 입력",
            align:"center",
            font:['굴림',55,"rgba(0,0,0,1)","700","none","normal"]
         },
         {
            id:'txt2',
            type:'text',
            rect:['487','53','1279','50','auto','auto'],
            text:"연료제어는 현재 차량운행에 맞게 연료량을 제어하는 것입니다.",
            align:"auto",
            font:['굴림',45,"rgb(0,0,0)","normal","none","normal"]
         },
         {
            id:'txt1',
            type:'text',
            rect:['130','33','299','74','auto','auto'],
            text:"연료 제어",
            align:"auto",
            font:['굴림',68,"rgb(0,0,0)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'FLOW2',
            symbolName:'FLOW2'
         },
         {
            id:'FLOW1',
            symbolName:'FLOW1'
         },
         {
            id:'DISPLAY',
            symbolName:'DISPLAY'
         },
         {
            id:'PMOVIE',
            symbolName:'PMOVIE'
         },
         {
            id:'ARROW',
            symbolName:'ARROW'
         },
         {
            id:'ENG',
            symbolName:'ENG'
         },
         {
            id:'FUEL',
            symbolName:'FUEL'
         },
         {
            id:'FLOW3',
            symbolName:'FLOW3'
         },
         {
            id:'SENSOR',
            symbolName:'SENSOR'
         },
         {
            id:'AIRBLINDER',
            symbolName:'AIRBLINDER'
         }
         ]
      },
   states: {
      "Base State": {
         "${_O2}": [
            ["style", "left", '155px'],
            ["style", "top", '453px']
         ],
         "${_txtC1}": [
            ["style", "height", '116px'],
            ["style", "top", '808px'],
            ["style", "font-size", '40px']
         ],
         "${_ECM}": [
            ["style", "top", '406px']
         ],
         "${_PMOVIE}": [
            ["style", "left", '-209px'],
            ["style", "top", '879px']
         ],
         "${_Text}": [
            ["style", "top", '716px'],
            ["style", "width", '577px'],
            ["style", "font-weight", '700'],
            ["style", "left", '968px'],
            ["style", "font-size", '55px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(239,239,239,1.00)'],
            ["style", "width", '1896px'],
            ["style", "height", '996px'],
            ["style", "overflow", 'hidden']
         ],
         "${_AIRBLINDER}": [
            ["style", "left", '253px'],
            ["style", "top", '293px']
         ],
         "${_CMP}": [
            ["style", "left", '768px'],
            ["style", "top", '224px']
         ],
         "${_ENG}": [
            ["style", "top", '217px'],
            ["style", "left", '346px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6233,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"P_SRC": {
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
      type: 'image',
      id: 'pollution',
      tag: 'img',
      rect: ['0px','0px','102','94','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pollution.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pollution}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '34px']
         ],
         "${symbolSelector}": [
            ["style", "height", '94px'],
            ["style", "width", '102px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 600,
         autoPlay: false,
         timeline: [
            { id: "eid112", tween: [ "transform", "${_pollution}", "scaleX", '1.2', { fromValue: '0.5'}], position: 0, duration: 300, easing: "easeInOutQuad" },
            { id: "eid124", tween: [ "transform", "${_pollution}", "scaleX", '0.5', { fromValue: '1.2'}], position: 300, duration: 300, easing: "easeInOutQuad" },
            { id: "eid130", tween: [ "style", "${_pollution}", "left", '-70px', { fromValue: '34px'}], position: 0, duration: 300, easing: "easeInOutQuad" },
            { id: "eid136", tween: [ "style", "${_pollution}", "left", '-100px', { fromValue: '-70px'}], position: 300, duration: 300, easing: "easeInOutQuad" },
            { id: "eid114", tween: [ "transform", "${_pollution}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 300, easing: "easeInOutQuad" },
            { id: "eid126", tween: [ "transform", "${_pollution}", "scaleY", '0.5', { fromValue: '1'}], position: 300, duration: 300, easing: "easeInOutQuad" },
            { id: "eid116", tween: [ "style", "${_pollution}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300, easing: "easeInOutQuad" },
            { id: "eid122", tween: [ "style", "${_pollution}", "opacity", '0', { fromValue: '1'}], position: 300, duration: 300, easing: "easeInOutQuad" }         ]
      }
   }
},
"PMOVIE": {
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
      id: 'P_SRCCopy2',
      type: 'rect',
      transform: [[],[],[],['0.5','0.5']],
      rect: ['506px','-490px','auto','auto','auto','auto']
   },
   {
      id: 'P_SRCCopy3',
      type: 'rect',
      transform: [[],[],[],['0.5','0.5']],
      rect: ['465px','-490px','auto','auto','auto','auto']
   },
   {
      id: 'P_SRCCopy4',
      type: 'rect',
      transform: [[],['-90'],[],['0.5','0.5']],
      rect: ['425px','-481px','auto','auto','auto','auto']
   },
   {
      id: 'P_SRCCopy5',
      type: 'rect',
      transform: [[],['-90'],[],['0.5','0.5']],
      rect: ['425px','-438px','auto','auto','auto','auto']
   },
   {
      id: 'P_SRCCopy6',
      type: 'rect',
      transform: [[],['-90'],[],['0.5','0.5']],
      rect: ['425px','-395px','auto','auto','auto','auto']
   },
   {
      id: 'P_SRCCopy7',
      type: 'rect',
      transform: [[],['-90'],[],['0.5','0.5']],
      rect: ['425px','-352px','auto','auto','auto','auto']
   },
   {
      id: 'P_SRCCopy8',
      type: 'rect',
      transform: [[],['-90'],[],['0.5','0.5']],
      rect: ['425px','-309px','auto','auto','auto','auto']
   },
   {
      id: 'P_SRCCopy9',
      type: 'rect',
      transform: [[],['-90'],[],['0.5','0.5']],
      rect: ['425px','-266px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'P_SRCCopy8',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy9',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy4',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy7',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy6',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy2',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy3',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy5',
      symbolName: 'P_SRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_P_SRCCopy9}": [
            ["style", "top", '-266px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '425px']
         ],
         "${_P_SRCCopy3}": [
            ["style", "top", '-490px'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '465px'],
            ["transform", "scaleY", '0.5']
         ],
         "${_P_SRCCopy5}": [
            ["style", "top", '-438px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '425px']
         ],
         "${_P_SRCCopy7}": [
            ["style", "top", '-352px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '425px']
         ],
         "${_P_SRCCopy2}": [
            ["style", "top", '-490px'],
            ["style", "left", '506px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5']
         ],
         "${_P_SRCCopy8}": [
            ["style", "top", '-309px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '425px']
         ],
         "${symbolSelector}": [
            ["style", "height", '94px'],
            ["style", "width", '102px']
         ],
         "${_P_SRCCopy4}": [
            ["style", "top", '-481px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '425px']
         ],
         "${_P_SRCCopy6}": [
            ["style", "top", '-395px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '425px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 266.66666666667,
         autoPlay: false,
         timeline: [
            { id: "eid139", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy2}', [] ], ""], position: 0 },
            { id: "eid140", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy3}', [] ], ""], position: 66.666666666667 },
            { id: "eid141", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy4}', [] ], ""], position: 100 },
            { id: "eid142", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy5}', [] ], ""], position: 133.33333333333 },
            { id: "eid143", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy6}', [] ], ""], position: 166.66666666667 },
            { id: "eid144", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy7}', [] ], ""], position: 200 },
            { id: "eid145", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy8}', [] ], ""], position: 233.33333333333 },
            { id: "eid146", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy9}', [] ], ""], position: 266.66666666667 }         ]
      }
   }
},
"SPARK_FIRE": {
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
      type: 'image',
      id: 'fireBlack',
      tag: 'img',
      rect: ['8px','5px','52','51','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fireBlack.png']
   },
   {
      type: 'image',
      id: 'fireWhite',
      tag: 'img',
      rect: ['8px','5px','52','51','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fireWhite.png']
   },
   {
      type: 'image',
      id: 'fire3',
      tag: 'img',
      rect: ['0px','0px','68','65','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fire3.png']
   },
   {
      type: 'image',
      id: 'fire2',
      tag: 'img',
      rect: ['3px','1px','61','63','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fire2.png']
   },
   {
      type: 'image',
      id: 'fire1',
      tag: 'img',
      rect: ['0px','0px','68','65','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fire1.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fire2}": [
            ["style", "top", '1px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '3px']
         ],
         "${_fire1}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '65px'],
            ["style", "width", '68px']
         ],
         "${_fireBlack}": [
            ["style", "top", '5px'],
            ["style", "opacity", '0'],
            ["style", "left", '8px']
         ],
         "${_fire3}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_fireWhite}": [
            ["style", "top", '5px'],
            ["style", "opacity", '0'],
            ["style", "left", '8px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid4", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 56 },
            { id: "eid5", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 56, duration: 56 },
            { id: "eid7", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 111, duration: 56 },
            { id: "eid8", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 167, duration: 56 },
            { id: "eid11", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 222, duration: 56 },
            { id: "eid12", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 278, duration: 56 },
            { id: "eid15", tween: [ "style", "${_fireWhite}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 56 },
            { id: "eid16", tween: [ "style", "${_fireWhite}", "opacity", '0', { fromValue: '1'}], position: 389, duration: 56 },
            { id: "eid28", tween: [ "style", "${_fire2}", "opacity", '1', { fromValue: '0'}], position: 162, duration: 81 },
            { id: "eid48", tween: [ "style", "${_fire2}", "opacity", '0', { fromValue: '1'}], position: 243, duration: 81 },
            { id: "eid43", tween: [ "style", "${_fire2}", "opacity", '0', { fromValue: '0'}], position: 325, duration: 0 },
            { id: "eid19", tween: [ "transform", "${_fire3}", "scaleX", '1.2', { fromValue: '1'}], position: 333, duration: 154 },
            { id: "eid22", tween: [ "transform", "${_fire2}", "scaleY", '1.2', { fromValue: '1'}], position: 162, duration: 163 },
            { id: "eid26", tween: [ "style", "${_fire3}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 77 },
            { id: "eid47", tween: [ "style", "${_fire3}", "opacity", '0', { fromValue: '1'}], position: 410, duration: 77 },
            { id: "eid41", tween: [ "style", "${_fire3}", "opacity", '0', { fromValue: '0'}], position: 487, duration: 0 },
            { id: "eid24", tween: [ "transform", "${_fire1}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 162 },
            { id: "eid20", tween: [ "transform", "${_fire3}", "scaleY", '1.2', { fromValue: '1'}], position: 333, duration: 154 },
            { id: "eid21", tween: [ "transform", "${_fire2}", "scaleX", '1.2', { fromValue: '1'}], position: 162, duration: 163 },
            { id: "eid2", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 56, duration: 56 },
            { id: "eid6", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 111, duration: 56 },
            { id: "eid9", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 56 },
            { id: "eid10", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 222, duration: 56 },
            { id: "eid13", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 278, duration: 56 },
            { id: "eid14", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 56 },
            { id: "eid17", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 389, duration: 56 },
            { id: "eid18", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 444, duration: 56 },
            { id: "eid23", tween: [ "transform", "${_fire1}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 162 },
            { id: "eid30", tween: [ "style", "${_fire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 81 },
            { id: "eid49", tween: [ "style", "${_fire1}", "opacity", '0', { fromValue: '1'}], position: 81, duration: 81 },
            { id: "eid45", tween: [ "style", "${_fire1}", "opacity", '0', { fromValue: '0'}], position: 162, duration: 0 }         ]
      }
   }
},
"BOMB": {
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
      id: 'bombBlack',
      type: 'image',
      rect: ['0px','0px','184px','95px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bombBlack.png','0px','0px']
   },
   {
      id: 'bombRed',
      type: 'image',
      rect: ['0px','0px','184px','95px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bombRed.png','0px','0px']
   },
   {
      id: 'bombWhite',
      type: 'image',
      rect: ['0px','0px','184px','95px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bombWhite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bombWhite}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "height", '95px']
         ],
         "${_bombBlack}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "height", '95px']
         ],
         "${_bombRed}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "height", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '94px'],
            ["style", "width", '184px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 367,
         autoPlay: false,
         timeline: [
            { id: "eid205", tween: [ "style", "${_bombWhite}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 46 },
            { id: "eid209", tween: [ "style", "${_bombWhite}", "opacity", '0', { fromValue: '1'}], position: 46, duration: 46 },
            { id: "eid211", tween: [ "style", "${_bombWhite}", "opacity", '1', { fromValue: '0'}], position: 183, duration: 46 },
            { id: "eid212", tween: [ "style", "${_bombWhite}", "opacity", '0', { fromValue: '1'}], position: 229, duration: 46 },
            { id: "eid207", tween: [ "style", "${_bombBlack}", "opacity", '1', { fromValue: '0'}], position: 92, duration: 46 },
            { id: "eid210", tween: [ "style", "${_bombBlack}", "opacity", '0', { fromValue: '1'}], position: 137, duration: 46 },
            { id: "eid215", tween: [ "style", "${_bombBlack}", "opacity", '1', { fromValue: '0'}], position: 275, duration: 46 },
            { id: "eid216", tween: [ "style", "${_bombBlack}", "opacity", '0', { fromValue: '1'}], position: 321, duration: 46 },
            { id: "eid203", tween: [ "style", "${_bombRed}", "opacity", '1', { fromValue: '0'}], position: 46, duration: 46 },
            { id: "eid208", tween: [ "style", "${_bombRed}", "opacity", '0', { fromValue: '1'}], position: 92, duration: 46 },
            { id: "eid213", tween: [ "style", "${_bombRed}", "opacity", '1', { fromValue: '0'}], position: 229, duration: 46 },
            { id: "eid214", tween: [ "style", "${_bombRed}", "opacity", '0', { fromValue: '1'}], position: 275, duration: 46 }         ]
      }
   }
},
"ENG": {
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
      rect: ['147px','197px','173px','208px','auto','auto'],
      transform: [],
      id: 'inBlue',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[50,50,'true','farthest-corner',[['rgba(0,175,244,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      rect: ['147px','197px','173px','208px','auto','auto'],
      transform: [],
      id: 'inRed',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[50,50,'true','farthest-corner',[['rgba(244,0,114,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      id: 'BOMB',
      type: 'rect',
      transform: [[],[],[],['1.03261']],
      rect: ['143px','174px','auto','auto','auto','auto']
   },
   {
      rect: ['141px','10px','188','235','auto','auto'],
      id: 'blinderM',
      fill: ['rgba(0,0,0,0)','images/blinderM.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['273px','200px','185px','8px','auto','auto'],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      id: 'airBlue1',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]]
   },
   {
      rect: ['273px','209px','185px','8px','auto','auto'],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      id: 'airBlue2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]]
   },
   {
      rect: ['283px','217px','175px','8px','auto','auto'],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      id: 'airBlue3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]]
   },
   {
      rect: ['302px','226px','156px','8px','auto','auto'],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      id: 'airBlue4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]]
   },
   {
      rect: ['5px','200px','185px','8px','auto','auto'],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      id: 'airRed1',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]]
   },
   {
      rect: ['5px','209px','185px','8px','auto','auto'],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      id: 'airRed2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]]
   },
   {
      rect: ['5px','217px','175px','8px','auto','auto'],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      id: 'airRed3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]]
   },
   {
      rect: ['5px','226px','156px','8px','auto','auto'],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      id: 'airRed4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]]
   },
   {
      rect: ['0px','196px','466','43','auto','auto'],
      id: 'blinderS',
      fill: ['rgba(0,0,0,0)','images/blinderS.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'CRANK_PISTON',
      type: 'rect',
      rect: ['146','265','auto','auto','auto','auto']
   },
   {
      rect: ['16px','8px','436','741','auto','auto'],
      id: 'eng_body',
      fill: ['rgba(0,0,0,0)','images/eng_body.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['262px','109px','90','123','auto','auto'],
      id: 'valve2',
      fill: ['rgba(0,0,0,0)','images/valve2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['117px','109px','90','123','auto','auto'],
      id: 'valve1',
      fill: ['rgba(0,0,0,0)','images/valve1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['315px','49px','59','69','auto','auto'],
      transform: [[],['110']],
      id: 'cam2',
      fill: ['rgba(0,0,0,0)','images/cam2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['96px','49px','59','69','auto','auto'],
      transform: [[],['-105']],
      id: 'cam1',
      fill: ['rgba(0,0,0,0)','images/cam1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['206px','0px','58','224','auto','auto'],
      id: 'sp_plug',
      fill: ['rgba(0,0,0,0)','images/sp_plug.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'SPARK_FIRE',
      type: 'rect',
      rect: ['201','186','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'BOMB',
      symbolName: 'BOMB'
   },
   {
      id: 'SPARK_FIRE',
      symbolName: 'SPARK_FIRE'
   },
   {
      id: 'CRANK_PISTON',
      symbolName: 'CRANK_PISTON'
   }   ]
   },
   states: {
      "Base State": {
         "${_airRed3}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
            ["style", "left", '179px'],
            ["style", "width", '2px'],
            ["style", "top", '217px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_sp_plug}": [
            ["style", "left", '206px'],
            ["style", "top", '0px']
         ],
         "${_airRed1}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
            ["style", "left", '189px'],
            ["style", "width", '2px'],
            ["style", "top", '200px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_airBlue2}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
            ["style", "left", '456px'],
            ["style", "width", '2px'],
            ["style", "top", '209px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_BOMB}": [
            ["style", "top", '138px'],
            ["transform", "scaleX", '1.03261'],
            ["transform", "scaleY", '2.38298'],
            ["style", "left", '143px']
         ],
         "${_valve1}": [
            ["style", "left", '117px'],
            ["style", "top", '109px']
         ],
         "${_airBlue1}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
            ["style", "left", '456px'],
            ["style", "width", '2px'],
            ["style", "top", '200px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_blinderM}": [
            ["style", "left", '141px'],
            ["style", "top", '10px']
         ],
         "${_cam2}": [
            ["style", "-webkit-transform-origin", [50,59], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '49px'],
            ["style", "left", '315px'],
            ["transform", "rotateZ", '110deg']
         ],
         "${_airBlue3}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
            ["style", "left", '456px'],
            ["style", "width", '2px'],
            ["style", "top", '217px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '749px'],
            ["style", "width", '466px']
         ],
         "${_airRed4}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
            ["style", "left", '161px'],
            ["style", "width", '1px'],
            ["style", "top", '226px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_cam1}": [
            ["style", "-webkit-transform-origin", [50,58], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '49px'],
            ["style", "left", '96px'],
            ["transform", "rotateZ", '-110deg']
         ],
         "${_blinderS}": [
            ["style", "left", '0px'],
            ["style", "top", '196px']
         ],
         "${_airRed2}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(255,0,103,1.00)',50],['rgba(239,239,239,1.00)',99]]]],
            ["style", "left", '189px'],
            ["style", "width", '2px'],
            ["style", "top", '209px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_eng_body}": [
            ["style", "left", '16px'],
            ["style", "top", '8px']
         ],
         "${_airBlue4}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [180,[['rgba(239,239,239,1.00)',0],['rgba(0,173,252,1.00)',50],['rgba(239,239,239,1.00)',100]]]],
            ["style", "left", '456px'],
            ["style", "width", '2px'],
            ["style", "top", '226px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_valve2}": [
            ["style", "left", '262px'],
            ["style", "top", '109px']
         ],
         "${_inBlue}": [
            ["style", "top", '197px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '165px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(0,175,244,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '147px'],
            ["style", "width", '173px']
         ],
         "${_inRed}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '197px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(244,0,114,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "height", '1px'],
            ["style", "opacity", '1'],
            ["style", "left", '147px'],
            ["style", "width", '173px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid93", tween: [ "style", "${_valve1}", "left", '129px', { fromValue: '117px'}], position: 2500, duration: 500 },
            { id: "eid94", tween: [ "style", "${_valve1}", "left", '117px', { fromValue: '129px'}], position: 3000, duration: 1000 },
            { id: "eid160", tween: [ "style", "${_airRed1}", "width", '185px', { fromValue: '2px'}], position: 3000, duration: 533 },
            { id: "eid164", tween: [ "style", "${_airRed1}", "width", '8px', { fromValue: '185px'}], position: 3667, duration: 333 },
            { id: "eid158", tween: [ "style", "${_airRed2}", "width", '185px', { fromValue: '2px'}], position: 3000, duration: 533 },
            { id: "eid163", tween: [ "style", "${_airRed2}", "width", '8px', { fromValue: '185px'}], position: 3667, duration: 333 },
            { id: "eid125", tween: [ "style", "${_airBlue4}", "left", '302px', { fromValue: '456px'}], position: 0, duration: 500 },
            { id: "eid154", tween: [ "style", "${_airRed4}", "width", '156px', { fromValue: '1px'}], position: 3000, duration: 533 },
            { id: "eid162", tween: [ "style", "${_airRed4}", "width", '7px', { fromValue: '156px'}], position: 3667, duration: 333 },
            { id: "eid229", tween: [ "style", "${_inBlue}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid127", tween: [ "style", "${_airBlue4}", "width", '156px', { fromValue: '2px'}], position: 0, duration: 500 },
            { id: "eid134", tween: [ "style", "${_airBlue4}", "width", '1px', { fromValue: '156px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid131", tween: [ "style", "${_airBlue1}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
            { id: "eid135", tween: [ "style", "${_airBlue1}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid119", tween: [ "style", "${_airBlue3}", "width", '175px', { fromValue: '2px'}], position: 0, duration: 500 },
            { id: "eid132", tween: [ "style", "${_airBlue3}", "width", '1px', { fromValue: '175px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid157", tween: [ "style", "${_airRed2}", "left", '5px', { fromValue: '189px'}], position: 3000, duration: 533 },
            { id: "eid121", tween: [ "style", "${_airBlue2}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
            { id: "eid89", tween: [ "style", "${_valve2}", "top", '135px', { fromValue: '109px'}], position: 500, duration: 500 },
            { id: "eid91", tween: [ "style", "${_valve2}", "top", '109px', { fromValue: '135px'}], position: 1000, duration: 1000 },
            { id: "eid117", tween: [ "style", "${_airBlue3}", "left", '283px', { fromValue: '456px'}], position: 0, duration: 500 },
            { id: "eid137", tween: [ "style", "${_airBlue3}", "left", '285px', { fromValue: '283px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid168", tween: [ "style", "${_inBlue}", "height", '235px', { fromValue: '165px'}], position: 500, duration: 500 },
            { id: "eid171", tween: [ "style", "${_inBlue}", "height", '92px', { fromValue: '235px'}], position: 1000, duration: 1000 },
            { id: "eid123", tween: [ "style", "${_airBlue2}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
            { id: "eid133", tween: [ "style", "${_airBlue2}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_airRed4}", "left", '5px', { fromValue: '161px'}], position: 3000, duration: 533 },
            { id: "eid228", tween: [ "style", "${_inRed}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeInQuad" },
            { id: "eid58", tween: [ "transform", "${_cam2}", "rotateZ", '470deg', { fromValue: '110deg'}], position: 0, duration: 4000 },
            { id: "eid170", tween: [ "style", "${_inBlue}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid57", tween: [ "transform", "${_cam1}", "rotateZ", '250deg', { fromValue: '-110deg'}], position: 0, duration: 4000 },
            { id: "eid129", tween: [ "style", "${_airBlue1}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
            { id: "eid155", tween: [ "style", "${_airRed3}", "left", '5px', { fromValue: '179px'}], position: 3000, duration: 533 },
            { id: "eid88", tween: [ "style", "${_valve2}", "left", '247px', { fromValue: '262px'}], position: 500, duration: 500 },
            { id: "eid90", tween: [ "style", "${_valve2}", "left", '262px', { fromValue: '247px'}], position: 1000, duration: 1000 },
            { id: "eid159", tween: [ "style", "${_airRed1}", "left", '5px', { fromValue: '189px'}], position: 3000, duration: 533 },
            { id: "eid156", tween: [ "style", "${_airRed3}", "width", '175px', { fromValue: '2px'}], position: 3000, duration: 533 },
            { id: "eid161", tween: [ "style", "${_airRed3}", "width", '8px', { fromValue: '175px'}], position: 3667, duration: 333 },
            { id: "eid92", tween: [ "style", "${_valve1}", "top", '132px', { fromValue: '109px'}], position: 2500, duration: 500 },
            { id: "eid95", tween: [ "style", "${_valve1}", "top", '109px', { fromValue: '132px'}], position: 3000, duration: 1000 },
            { id: "eid226", tween: [ "style", "${_inRed}", "height", '235px', { fromValue: '69px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid227", tween: [ "style", "${_inRed}", "height", '71px', { fromValue: '235px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
            { id: "eid230", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOMB}', [] ], ""], position: 1833.3333333333 },
            { id: "eid231", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_CRANK_PISTON}', [] ], ""], position: 2000 }         ]
      }
   }
},
"CRANK_PISTON": {
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
      type: 'image',
      tag: 'img',
      id: 'pistonBar',
      rect: ['54px','50px','68','225','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/pistonBar.png']
   },
   {
      type: 'image',
      tag: 'img',
      rect: ['28px','211px','120','161','auto','auto'],
      id: 'crank',
      opacity: 1,
      transform: [],
      fill: ['rgba(0,0,0,0)','images/crank.png']
   },
   {
      type: 'image',
      id: 'pistonHead',
      tag: 'img',
      rect: ['0px','0px','175','97','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pistonHead.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_crank}": [
            ["style", "-webkit-transform-origin", [50,66], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "opacity", '1'],
            ["style", "left", '28px'],
            ["style", "top", '211px']
         ],
         "${_pistonHead}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pistonBar}": [
            ["style", "-webkit-transform-origin", [50,8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '50px'],
            ["style", "left", '54px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '372px'],
            ["style", "width", '175px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid66", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 0, duration: 250 },
            { id: "eid67", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 250, duration: 250 },
            { id: "eid78", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 1500, duration: 250 },
            { id: "eid79", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 1750, duration: 250 },
            { id: "eid63", tween: [ "transform", "${_pistonBar}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid64", tween: [ "transform", "${_pistonBar}", "rotateZ", '26deg', { fromValue: '20deg'}], position: 250, duration: 250 },
            { id: "eid68", tween: [ "transform", "${_pistonBar}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 500, duration: 500 },
            { id: "eid80", tween: [ "transform", "${_pistonBar}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
            { id: "eid81", tween: [ "transform", "${_pistonBar}", "rotateZ", '-26deg', { fromValue: '-20deg'}], position: 1250, duration: 250 },
            { id: "eid82", tween: [ "transform", "${_pistonBar}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 1500, duration: 500 },
            { id: "eid62", tween: [ "style", "${_pistonHead}", "top", '94px', { fromValue: '0px'}], position: 0, duration: 500 },
            { id: "eid70", tween: [ "style", "${_pistonHead}", "top", '133px', { fromValue: '94px'}], position: 500, duration: 500 },
            { id: "eid84", tween: [ "style", "${_pistonHead}", "top", '94px', { fromValue: '133px'}], position: 1000, duration: 500 },
            { id: "eid83", tween: [ "style", "${_pistonHead}", "top", '0px', { fromValue: '94px'}], position: 1500, duration: 500 },
            { id: "eid59", tween: [ "transform", "${_crank}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid60", tween: [ "transform", "${_crank}", "rotateZ", '-180deg', { fromValue: '-90deg'}], position: 500, duration: 500 },
            { id: "eid71", tween: [ "transform", "${_crank}", "rotateZ", '-270deg', { fromValue: '-180deg'}], position: 1000, duration: 500 },
            { id: "eid72", tween: [ "transform", "${_crank}", "rotateZ", '-360deg', { fromValue: '-270deg'}], position: 1500, duration: 500 },
            { id: "eid61", tween: [ "style", "${_pistonBar}", "top", '83px', { fromValue: '50px'}], position: 0, duration: 250 },
            { id: "eid65", tween: [ "style", "${_pistonBar}", "top", '144px', { fromValue: '83px'}], position: 250, duration: 250 },
            { id: "eid69", tween: [ "style", "${_pistonBar}", "top", '202px', { fromValue: '144px'}], position: 500, duration: 500 },
            { id: "eid87", tween: [ "style", "${_pistonBar}", "top", '144px', { fromValue: '202px'}], position: 1000, duration: 500 },
            { id: "eid86", tween: [ "style", "${_pistonBar}", "top", '83px', { fromValue: '144px'}], position: 1500, duration: 250 },
            { id: "eid85", tween: [ "style", "${_pistonBar}", "top", '50px', { fromValue: '83px'}], position: 1750, duration: 250 }         ]
      }
   }
},
"flow_movie": {
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
      rect: ['0px','0px','1097','6','auto','auto'],
      id: 'flow_src',
      fill: ['rgba(0,0,0,0)','images/flow_src.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_flow_src}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '6px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '820px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid42", tween: [ "style", "${_flow_src}", "left", '-110px', { fromValue: '0px'}], position: 0, duration: 3000 }         ]
      }
   }
},
"FLOW1": {
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
      id: 'flow_movie',
      type: 'rect',
      rect: ['871','154','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movie',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${_flow_movie}": [
            ["style", "top", '407px'],
            ["style", "left", '-407px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '154px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid50", tween: [ "transform", "${_flow_movie}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 }         ]
      }
   }
},
"FLOW2": {
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
      id: 'flow_movieCopy',
      type: 'rect',
      rect: ['871','154','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movieCopy',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${_flow_movieCopy}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '6px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '797px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid53", tween: [ "style", "${_flow_movieCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_flow_movieCopy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"FLOW3": {
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
      id: 'flow_movieCopy2',
      type: 'rect',
      transform: [[],['270']],
      rect: ['871','405px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movieCopy2',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${_flow_movieCopy2}": [
            ["style", "top", '405px'],
            ["style", "left", '-407px'],
            ["transform", "rotateZ", '270deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"SENSOR": {
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
      rect: ['0px','0px','1155','488','auto','auto'],
      id: 'SENSORS_PIC',
      fill: ['rgba(0,0,0,0)','images/SENSORS_PIC.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','1156','488','auto','auto'],
      id: 'SENSOR_whiteLine',
      fill: ['rgba(0,0,0,0)','images/SENSOR_whiteLine.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','1156','488','auto','auto'],
      id: 'SENSOR_redLine',
      fill: ['rgba(0,0,0,0)','images/SENSOR_redLine.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_SENSOR_redLine}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_SENSOR_whiteLine}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '488px'],
            ["style", "width", '1156px']
         ],
         "${_SENSORS_PIC}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid56", tween: [ "style", "${_SENSOR_redLine}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 167 },
            { id: "eid96", tween: [ "style", "${_SENSOR_redLine}", "opacity", '0', { fromValue: '1'}], position: 167, duration: 167 },
            { id: "eid55", tween: [ "style", "${_SENSOR_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 167 },
            { id: "eid77", tween: [ "style", "${_SENSOR_whiteLine}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 167 }         ]
      }
   }
},
"ARROW": {
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
      rect: ['69px','116px','128','228','auto','auto'],
      id: 'arrow_back',
      fill: ['rgba(0,0,0,0)','images/arrow_back.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/arrow_src.png'],
      id: 'arrow_src',
      rect: ['64px','116px','189','331','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['0px','0px','310','465','auto','auto'],
      id: 'arrow_blinder',
      fill: ['rgba(0,0,0,0)','images/arrow_blinder.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow_back}": [
            ["style", "top", '116px'],
            ["style", "opacity", '0.2'],
            ["style", "left", '69px']
         ],
         "${_arrow_blinder}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_arrow_src}": [
            ["style", "top", '116px'],
            ["style", "left", '64px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '465px'],
            ["style", "width", '310px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 667,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid104", tween: [ "style", "${_arrow_src}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_arrow_src}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0 },
            { id: "eid103", tween: [ "style", "${_arrow_back}", "opacity", '1', { fromValue: '0.2'}], position: 0, duration: 33 },
            { id: "eid101", tween: [ "style", "${_arrow_src}", "top", '88px', { fromValue: '116px'}], position: 33, duration: 633 }         ]
      }
   }
},
"DISPLAY": {
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
      rect: ['0px','2px','616px','268px','auto','auto'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      id: 'RoundRect',
      stroke: [4,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      fill: ['rgba(215,215,215,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(215,215,215,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '616px'],
            ["style", "top", '2px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '268px'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "border-width", '4px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '276px'],
            ["style", "width", '624px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid107", tween: [ "color", "${_RoundRect}", "border-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 233 },
            { id: "eid108", tween: [ "color", "${_RoundRect}", "border-color", 'rgba(255,0,87,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 233, duration: 267 }         ]
      }
   }
},
"AIRBLINDER": {
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
      rect: ['439px','73px','695','138','auto','auto'],
      id: 'airRoad',
      fill: ['rgba(0,0,0,0)','images/airRoad.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'airFlow',
      type: 'rect',
      rect: ['-48px','185px','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','1318','286','auto','auto'],
      id: 'airBlinder',
      fill: ['rgba(0,0,0,0)','images/airBlinder.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   {
      id: 'airFlow',
      symbolName: 'airFlow'
   }   ]
   },
   states: {
      "Base State": {
         "${_airBlinder}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '286px'],
            ["style", "width", '1318px']
         ],
         "${_airRoad}": [
            ["style", "left", '439px'],
            ["style", "top", '73px']
         ],
         "${_airFlow}": [
            ["style", "top", '9px'],
            ["style", "left", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid31", tween: [ "style", "${_airFlow}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "style", "${_airFlow}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0 }         ]
      }
   }
},
"airFlow": {
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
      rect: ['-78px','0px','1578','272','auto','auto'],
      id: 'air_src',
      fill: ['rgba(0,0,0,0)','images/air_src.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_air_src}": [
            ["style", "left", '-78px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '272px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '1307px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 700,
         autoPlay: true,
         timeline: [
            { id: "eid1", tween: [ "style", "${_air_src}", "left", '-107px', { fromValue: '-78px'}], position: 0, duration: 700 }         ]
      }
   }
},
"FUEL": {
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
      rect: ['0px','0px','148','24','auto','auto'],
      id: 'fuel',
      fill: ['rgba(0,0,0,0)','images/fuel.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fuel}": [
            ["style", "top", '6px'],
            ["style", "height", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '116px'],
            ["style", "width", '32px']
         ],
         "${symbolSelector}": [
            ["style", "height", '24px'],
            ["style", "width", '148px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: true,
         labels: {
            "long": 1500
         },
         timeline: [
            { id: "eid186", tween: [ "style", "${_fuel}", "left", '75px', { fromValue: '116px'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid187", tween: [ "style", "${_fuel}", "left", '74px', { fromValue: '75px'}], position: 500, duration: 500, easing: "easeInQuad" },
            { id: "eid111", tween: [ "style", "${_fuel}", "left", '0px', { fromValue: '116px'}], position: 1500, duration: 500, easing: "easeInQuad" },
            { id: "eid165", tween: [ "style", "${_fuel}", "left", '-20px', { fromValue: '0px'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid182", tween: [ "style", "${_fuel}", "height", '16px', { fromValue: '14px'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid183", tween: [ "style", "${_fuel}", "height", '12px', { fromValue: '16px'}], position: 500, duration: 500, easing: "easeInQuad" },
            { id: "eid120", tween: [ "style", "${_fuel}", "height", '24px', { fromValue: '14px'}], position: 1500, duration: 500, easing: "easeInQuad" },
            { id: "eid151", tween: [ "style", "${_fuel}", "height", '12px', { fromValue: '24px'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid188", tween: [ "style", "${_fuel}", "width", '73px', { fromValue: '32px'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid189", tween: [ "style", "${_fuel}", "width", '10px', { fromValue: '73px'}], position: 500, duration: 500, easing: "easeInQuad" },
            { id: "eid115", tween: [ "style", "${_fuel}", "width", '148px', { fromValue: '32px'}], position: 1500, duration: 500, easing: "easeInQuad" },
            { id: "eid150", tween: [ "style", "${_fuel}", "width", '11px', { fromValue: '148px'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid180", tween: [ "style", "${_fuel}", "top", '2px', { fromValue: '6px'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid181", tween: [ "style", "${_fuel}", "top", '4px', { fromValue: '2px'}], position: 500, duration: 500, easing: "easeInQuad" },
            { id: "eid152", tween: [ "style", "${_fuel}", "top", '6px', { fromValue: '0px'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid184", tween: [ "style", "${_fuel}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid185", tween: [ "style", "${_fuel}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeInQuad" },
            { id: "eid138", tween: [ "style", "${_fuel}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeInQuad" },
            { id: "eid166", tween: [ "style", "${_fuel}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-11941064");
