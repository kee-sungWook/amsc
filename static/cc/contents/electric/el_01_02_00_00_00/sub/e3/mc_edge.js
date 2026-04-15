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
            id:'ENG',
            type:'rect',
            rect:['67','75','auto','auto','auto','auto']
         },
         {
            id:'FLOW_B2',
            type:'rect',
            rect:['556px','286px','auto','auto','auto','auto']
         },
         {
            id:'FLOW_R2',
            type:'rect',
            rect:['551px','309px','auto','auto','auto','auto']
         },
         {
            id:'FLOW_B2Copy',
            type:'rect',
            rect:['529px','713px','auto','auto','auto','auto']
         },
         {
            id:'FLOW_R2Copy',
            type:'rect',
            rect:['529px','736px','auto','auto','auto','auto']
         },
         {
            id:'FLOW_B2Copy2',
            type:'rect',
            rect:['1125px','431px','auto','auto','auto','auto']
         },
         {
            id:'FLOW_R2Copy2',
            type:'rect',
            rect:['1125px','454px','auto','auto','auto','auto']
         },
         {
            id:'FLOW_B2Copy3',
            type:'rect',
            rect:['1125px','568px','auto','auto','auto','auto']
         },
         {
            id:'FLOW_R2Copy3',
            type:'rect',
            rect:['1125px','591px','auto','auto','auto','auto']
         },
         {
            id:'module',
            type:'image',
            tag:'img',
            rect:['1372','319','408','390','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"module.png"]
         },
         {
            id:'pulseBack',
            type:'image',
            tag:'img',
            rect:['792','246','364','254','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pulseBack.png"]
         },
         {
            id:'pulseBackCopy',
            type:'image',
            tag:'img',
            rect:['792','542px','364','254','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pulseBack.png"]
         },
         {
            id:'PULSE_MOVIE2',
            type:'rect',
            rect:['795','615','auto','auto','auto','auto']
         },
         {
            id:'PULSE_MOVIE1',
            type:'rect',
            rect:['796','319','auto','auto','auto','auto']
         },
         {
            id:'CKP_SENSOR',
            type:'rect',
            rect:['441','706','auto','auto','auto','auto']
         },
         {
            id:'CMP_SENSOR',
            type:'rect',
            rect:['486','275','auto','auto','auto','auto']
         },
         {
            id:'txt_c3',
            type:'text',
            rect:['1503px','467px','155','75','auto','auto'],
            text:"ECM",
            align:"auto",
            font:['굴림',69,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt_c2',
            type:'text',
            rect:['546px','213px','155','75','auto','auto'],
            text:"CMP",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt_c1',
            type:'text',
            rect:['547px','644px','150','75','auto','auto'],
            text:"CKP",
            align:"auto",
            font:['굴림',45,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt2',
            type:'text',
            rect:['530px','36px','1365px','115','auto','auto'],
            text:"CKP는 캠축회전수를 측정하여 ECM으로 입력합니다.<br>CMP는 크랭크축회전수를 측정하여 ECM으로 입력합니다.",
            align:"auto",
            font:['굴림',50,"rgb(0,0,0)","normal","none","normal"]
         },
         {
            id:'txt1',
            type:'text',
            rect:['25px','45px','494px','104px','auto','auto'],
            text:"CKP &amp; CMP",
            align:"center",
            font:['굴림',75,"rgb(0,0,0)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'CMP_SENSOR',
            symbolName:'CMP_SENSOR'
         },
         {
            id:'FLOW_R2Copy',
            symbolName:'FLOW_R2'
         },
         {
            id:'FLOW_B2Copy2',
            symbolName:'FLOW_B2'
         },
         {
            id:'CKP_SENSOR',
            symbolName:'CKP_SENSOR'
         },
         {
            id:'FLOW_B2Copy3',
            symbolName:'FLOW_B2'
         },
         {
            id:'FLOW_R2',
            symbolName:'FLOW_R2'
         },
         {
            id:'PULSE_MOVIE1',
            symbolName:'PULSE_MOVIE1'
         },
         {
            id:'ENG',
            symbolName:'ENG'
         },
         {
            id:'FLOW_B2Copy',
            symbolName:'FLOW_B2'
         },
         {
            id:'FLOW_B2',
            symbolName:'FLOW_B2'
         },
         {
            id:'PULSE_MOVIE2',
            symbolName:'PULSE_MOVIE2'
         },
         {
            id:'FLOW_R2Copy3',
            symbolName:'FLOW_R2'
         },
         {
            id:'FLOW_R2Copy2',
            symbolName:'FLOW_R2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_txt2}": [
            ["style", "top", '36px'],
            ["style", "left", '530px'],
            ["style", "width", '1365px']
         ],
         "${_pulseBackCopy}": [
            ["style", "top", '542px']
         ],
         "${_txt1}": [
            ["style", "top", '45px'],
            ["style", "height", '104px'],
            ["style", "left", '25px'],
            ["style", "width", '494px']
         ],
         "${_FLOW_B2}": [
            ["style", "left", '556px'],
            ["style", "top", '286px']
         ],
         "${_txt_c1}": [
            ["style", "top", '644px'],
            ["style", "left", '547px'],
            ["style", "font-size", '45px']
         ],
         "${_txt_c3}": [
            ["style", "left", '1503px'],
            ["style", "top", '467px']
         ],
         "${_FLOW_R2Copy3}": [
            ["style", "left", '1125px'],
            ["style", "top", '591px']
         ],
         "${_txt_c2}": [
            ["style", "top", '213px'],
            ["style", "left", '546px'],
            ["style", "font-size", '45px']
         ],
         "${_FLOW_B2Copy3}": [
            ["style", "left", '1125px'],
            ["style", "top", '568px']
         ],
         "${_FLOW_R2Copy}": [
            ["style", "left", '529px'],
            ["style", "top", '736px']
         ],
         "${_FLOW_B2Copy2}": [
            ["style", "left", '1125px'],
            ["style", "top", '431px']
         ],
         "${_FLOW_R2}": [
            ["style", "left", '551px'],
            ["style", "top", '309px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(239,239,239,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '996px'],
            ["style", "width", '1896px']
         ],
         "${_FLOW_R2Copy2}": [
            ["style", "left", '1125px'],
            ["style", "top", '454px']
         ],
         "${_FLOW_B2Copy}": [
            ["style", "left", '529px'],
            ["style", "top", '713px']
         ],
         "${_ENG}": [
            ["style", "top", '205px'],
            ["style", "left", '108px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid29", tween: [ "style", "${_ENG}", "left", '108px', { fromValue: '108px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_ENG}", "top", '205px', { fromValue: '205px'}], position: 0, duration: 0 }         ]
      }
   }
},
"FLOW_R2": {
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
      rect: ['0px','0px','751','13','auto','auto'],
      id: 'flow_r2',
      fill: ['rgba(0,0,0,0)','images/flow_r2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie3Copy',
      type: 'rect',
      transform: [[],['180']],
      rect: ['-750px','2px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movie3Copy',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${_flow_movie3Copy}": [
            ["style", "top", '2px'],
            ["style", "left", '-750px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_flow_r2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "width", '300px'],
            ["style", "overflow", 'hidden']
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
"FLOW_B2": {
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
      rect: ['0px','0px','708','13','auto','auto'],
      id: 'flow_b2',
      fill: ['rgba(0,0,0,0)','images/flow_b2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie3',
      type: 'rect',
      transform: [],
      rect: ['-750px','2px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movie3',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${_flow_b2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_flow_movie3}": [
            ["style", "top", '2px'],
            ["style", "left", '-750px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "width", '300px'],
            ["style", "overflow", 'hidden']
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
            { id: "eid24", tween: [ "transform", "${_fire1}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 162 },
            { id: "eid19", tween: [ "transform", "${_fire3}", "scaleX", '1.2', { fromValue: '1'}], position: 333, duration: 154 },
            { id: "eid22", tween: [ "transform", "${_fire2}", "scaleY", '1.2', { fromValue: '1'}], position: 162, duration: 163 },
            { id: "eid26", tween: [ "style", "${_fire3}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 77 },
            { id: "eid47", tween: [ "style", "${_fire3}", "opacity", '0', { fromValue: '1'}], position: 410, duration: 77 },
            { id: "eid41", tween: [ "style", "${_fire3}", "opacity", '0', { fromValue: '0'}], position: 487, duration: 0 },
            { id: "eid28", tween: [ "style", "${_fire2}", "opacity", '1', { fromValue: '0'}], position: 162, duration: 81 },
            { id: "eid48", tween: [ "style", "${_fire2}", "opacity", '0', { fromValue: '1'}], position: 243, duration: 81 },
            { id: "eid43", tween: [ "style", "${_fire2}", "opacity", '0', { fromValue: '0'}], position: 325, duration: 0 },
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
      transform: [],
      rect: ['147px','197px','173px','208px','auto','auto'],
      id: 'inBlue',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[50,50,'true','farthest-corner',[['rgba(0,175,244,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      transform: [],
      rect: ['147px','197px','173px','208px','auto','auto'],
      id: 'inRed',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[50,50,'true','farthest-corner',[['rgba(244,0,114,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      id: 'BOMB',
      type: 'rect',
      rect: ['143px','174px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1.03261']]
   },
   {
      type: 'image',
      id: 'blinderM',
      tag: 'img',
      rect: ['141px','10px','188','235','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blinderM.png']
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
      type: 'image',
      id: 'blinderS',
      tag: 'img',
      rect: ['0px','196px','466','43','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blinderS.png']
   },
   {
      id: 'CRANK_PISTON',
      type: 'rect',
      rect: ['146','265','auto','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'eng_body',
      tag: 'img',
      rect: ['16px','8px','436','741','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/eng_body.png']
   },
   {
      type: 'image',
      id: 'valve2',
      tag: 'img',
      rect: ['262px','109px','90','123','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/valve2.png']
   },
   {
      type: 'image',
      id: 'valve1',
      tag: 'img',
      rect: ['117px','109px','90','123','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/valve1.png']
   },
   {
      rect: ['315px','49px','59','69','auto','auto'],
      tag: 'img',
      id: 'cam2',
      transform: [[0,0],['110']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cam2.png']
   },
   {
      rect: ['96px','49px','59','69','auto','auto'],
      tag: 'img',
      id: 'cam1',
      transform: [[0,0],['-105']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cam1.png']
   },
   {
      type: 'image',
      id: 'sp_plug',
      tag: 'img',
      rect: ['206px','0px','58','224','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sp_plug.png']
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
            ["transform", "scaleX", '1.03261'],
            ["style", "top", '138px'],
            ["style", "left", '143px'],
            ["transform", "scaleY", '2.38298']
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
            { id: "eid121", tween: [ "style", "${_airBlue2}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
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
            { id: "eid57", tween: [ "transform", "${_cam1}", "rotateZ", '250deg', { fromValue: '-110deg'}], position: 0, duration: 4000 },
            { id: "eid89", tween: [ "style", "${_valve2}", "top", '135px', { fromValue: '109px'}], position: 500, duration: 500 },
            { id: "eid91", tween: [ "style", "${_valve2}", "top", '109px', { fromValue: '135px'}], position: 1000, duration: 1000 },
            { id: "eid168", tween: [ "style", "${_inBlue}", "height", '235px', { fromValue: '165px'}], position: 500, duration: 500 },
            { id: "eid171", tween: [ "style", "${_inBlue}", "height", '92px', { fromValue: '235px'}], position: 1000, duration: 1000 },
            { id: "eid158", tween: [ "style", "${_airRed2}", "width", '185px', { fromValue: '2px'}], position: 3000, duration: 533 },
            { id: "eid163", tween: [ "style", "${_airRed2}", "width", '8px', { fromValue: '185px'}], position: 3667, duration: 333 },
            { id: "eid228", tween: [ "style", "${_inRed}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeInQuad" },
            { id: "eid153", tween: [ "style", "${_airRed4}", "left", '5px', { fromValue: '161px'}], position: 3000, duration: 533 },
            { id: "eid123", tween: [ "style", "${_airBlue2}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
            { id: "eid133", tween: [ "style", "${_airBlue2}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "transform", "${_cam2}", "rotateZ", '470deg', { fromValue: '110deg'}], position: 0, duration: 4000 },
            { id: "eid170", tween: [ "style", "${_inBlue}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid117", tween: [ "style", "${_airBlue3}", "left", '283px', { fromValue: '456px'}], position: 0, duration: 500 },
            { id: "eid137", tween: [ "style", "${_airBlue3}", "left", '285px', { fromValue: '283px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
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
      rect: ['54px','50px','68','225','auto','auto'],
      tag: 'img',
      id: 'pistonBar',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pistonBar.png']
   },
   {
      rect: ['28px','211px','120','161','auto','auto'],
      tag: 'img',
      transform: [],
      id: 'crank',
      opacity: 1,
      type: 'image',
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
            { id: "eid61", tween: [ "style", "${_pistonBar}", "top", '83px', { fromValue: '50px'}], position: 0, duration: 250 },
            { id: "eid65", tween: [ "style", "${_pistonBar}", "top", '144px', { fromValue: '83px'}], position: 250, duration: 250 },
            { id: "eid69", tween: [ "style", "${_pistonBar}", "top", '202px', { fromValue: '144px'}], position: 500, duration: 500 },
            { id: "eid87", tween: [ "style", "${_pistonBar}", "top", '144px', { fromValue: '202px'}], position: 1000, duration: 500 },
            { id: "eid86", tween: [ "style", "${_pistonBar}", "top", '83px', { fromValue: '144px'}], position: 1500, duration: 250 },
            { id: "eid85", tween: [ "style", "${_pistonBar}", "top", '50px', { fromValue: '83px'}], position: 1750, duration: 250 },
            { id: "eid59", tween: [ "transform", "${_crank}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid60", tween: [ "transform", "${_crank}", "rotateZ", '-180deg', { fromValue: '-90deg'}], position: 500, duration: 500 },
            { id: "eid71", tween: [ "transform", "${_crank}", "rotateZ", '-270deg', { fromValue: '-180deg'}], position: 1000, duration: 500 },
            { id: "eid72", tween: [ "transform", "${_crank}", "rotateZ", '-360deg', { fromValue: '-270deg'}], position: 1500, duration: 500 },
            { id: "eid62", tween: [ "style", "${_pistonHead}", "top", '94px', { fromValue: '0px'}], position: 0, duration: 500 },
            { id: "eid70", tween: [ "style", "${_pistonHead}", "top", '133px', { fromValue: '94px'}], position: 500, duration: 500 },
            { id: "eid84", tween: [ "style", "${_pistonHead}", "top", '94px', { fromValue: '133px'}], position: 1000, duration: 500 },
            { id: "eid83", tween: [ "style", "${_pistonHead}", "top", '0px', { fromValue: '94px'}], position: 1500, duration: 500 },
            { id: "eid63", tween: [ "transform", "${_pistonBar}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid64", tween: [ "transform", "${_pistonBar}", "rotateZ", '26deg', { fromValue: '20deg'}], position: 250, duration: 250 },
            { id: "eid68", tween: [ "transform", "${_pistonBar}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 500, duration: 500 },
            { id: "eid80", tween: [ "transform", "${_pistonBar}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
            { id: "eid81", tween: [ "transform", "${_pistonBar}", "rotateZ", '-26deg', { fromValue: '-20deg'}], position: 1250, duration: 250 },
            { id: "eid82", tween: [ "transform", "${_pistonBar}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 1500, duration: 500 },
            { id: "eid66", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 0, duration: 250 },
            { id: "eid67", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 250, duration: 250 },
            { id: "eid78", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 1500, duration: 250 },
            { id: "eid79", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 1750, duration: 250 }         ]
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
      type: 'image',
      id: 'flow_src',
      tag: 'img',
      rect: ['0px','0px','1786','8','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/flow_src.png']
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
            ["style", "height", '8px'],
            ["style", "width", '1500px'],
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
            { id: "eid2", tween: [ "style", "${_flow_src}", "left", '-63px', { fromValue: '0px'}], position: 0, duration: 1000 }         ]
      }
   }
},
"CMP_SENSOR": {
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
      rect: ['0px','0px','79','58','auto','auto'],
      id: 'CMP',
      fill: ['rgba(0,0,0,0)','images/CMP.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','80','58','auto','auto'],
      id: 'CMP_WIHTE',
      fill: ['rgba(0,0,0,0)','images/CMP_WIHTE.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','80','58','auto','auto'],
      transform: [],
      id: 'CMP_RED',
      fill: ['rgba(0,0,0,0)','images/CMP_RED.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','80','58','auto','auto'],
      transform: [],
      id: 'CMP_REDCopy',
      fill: ['rgba(0,0,0,0)','images/CMP_RED.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CMP_RED}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '58px'],
            ["style", "width", '80px']
         ],
         "${_CMP_WIHTE}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_CMP_REDCopy}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_CMP}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
            { id: "eid104", tween: [ "transform", "${_CMP_RED}", "scaleY", '1.1', { fromValue: '1'}], position: 0, duration: 167 },
            { id: "eid107", tween: [ "transform", "${_CMP_RED}", "scaleY", '1.2', { fromValue: '1.1'}], position: 200, duration: 167 },
            { id: "eid102", tween: [ "style", "${_CMP_RED}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 167 },
            { id: "eid105", tween: [ "style", "${_CMP_RED}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 167 },
            { id: "eid100", tween: [ "style", "${_CMP_WIHTE}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267 },
            { id: "eid101", tween: [ "style", "${_CMP_WIHTE}", "opacity", '0', { fromValue: '0.998752'}], position: 333, duration: 267 },
            { id: "eid112", tween: [ "transform", "${_CMP_REDCopy}", "scaleY", '1.1', { fromValue: '1'}], position: 233, duration: 167 },
            { id: "eid113", tween: [ "transform", "${_CMP_REDCopy}", "scaleY", '1.2', { fromValue: '1.1'}], position: 433, duration: 167 },
            { id: "eid108", tween: [ "transform", "${_CMP_REDCopy}", "scaleX", '1.1', { fromValue: '1'}], position: 233, duration: 167 },
            { id: "eid109", tween: [ "transform", "${_CMP_REDCopy}", "scaleX", '1.2', { fromValue: '1.1'}], position: 433, duration: 167 },
            { id: "eid103", tween: [ "transform", "${_CMP_RED}", "scaleX", '1.1', { fromValue: '1'}], position: 0, duration: 167 },
            { id: "eid106", tween: [ "transform", "${_CMP_RED}", "scaleX", '1.2', { fromValue: '1.1'}], position: 200, duration: 167 },
            { id: "eid110", tween: [ "style", "${_CMP_REDCopy}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 167 },
            { id: "eid111", tween: [ "style", "${_CMP_REDCopy}", "opacity", '0', { fromValue: '1'}], position: 433, duration: 167 }         ]
      }
   }
},
"CKP_SENSOR": {
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
      rect: ['1px','1px','100','60','auto','auto'],
      id: 'CKP',
      fill: ['rgba(0,0,0,0)','images/CKP.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','102','61','auto','auto'],
      id: 'CKP_WHITE',
      fill: ['rgba(0,0,0,0)','images/CKP_WHITE.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','102','61','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/CKP_RED.png'],
      id: 'CKP_RED',
      opacity: 0,
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','102','61','auto','auto'],
      id: 'CKP_REDCopy',
      fill: ['rgba(0,0,0,0)','images/CKP_RED.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CKP_WHITE}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '61px'],
            ["style", "width", '102px']
         ],
         "${_CKP_RED}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_CKP_REDCopy}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_CKP}": [
            ["style", "left", '1px'],
            ["style", "top", '1px']
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
            { id: "eid118", tween: [ "style", "${_CKP_RED}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 167 },
            { id: "eid124", tween: [ "style", "${_CKP_RED}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 167 },
            { id: "eid120", tween: [ "transform", "${_CKP_RED}", "scaleX", '1.1', { fromValue: '1'}], position: 0, duration: 167 },
            { id: "eid126", tween: [ "transform", "${_CKP_RED}", "scaleX", '1.2', { fromValue: '1.1'}], position: 200, duration: 167 },
            { id: "eid140", tween: [ "transform", "${_CKP_REDCopy}", "scaleY", '1.1', { fromValue: '1'}], position: 233, duration: 167 },
            { id: "eid141", tween: [ "transform", "${_CKP_REDCopy}", "scaleY", '1.2', { fromValue: '1.1'}], position: 433, duration: 167 },
            { id: "eid115", tween: [ "style", "${_CKP_WHITE}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267 },
            { id: "eid116", tween: [ "style", "${_CKP_WHITE}", "opacity", '0', { fromValue: '0.998752'}], position: 333, duration: 267 },
            { id: "eid122", tween: [ "transform", "${_CKP_RED}", "scaleY", '1.1', { fromValue: '1'}], position: 0, duration: 167 },
            { id: "eid128", tween: [ "transform", "${_CKP_RED}", "scaleY", '1.2', { fromValue: '1.1'}], position: 200, duration: 167 },
            { id: "eid130", tween: [ "transform", "${_CKP_REDCopy}", "scaleX", '1.1', { fromValue: '1'}], position: 233, duration: 167 },
            { id: "eid136", tween: [ "transform", "${_CKP_REDCopy}", "scaleX", '1.2', { fromValue: '1.1'}], position: 433, duration: 167 },
            { id: "eid138", tween: [ "style", "${_CKP_REDCopy}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 167 },
            { id: "eid139", tween: [ "style", "${_CKP_REDCopy}", "opacity", '0', { fromValue: '1'}], position: 433, duration: 167 }         ]
      }
   }
},
"PULSE_MOVIE1": {
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
      rect: ['0px','0px','589','110','auto','auto'],
      id: 'pulse1',
      fill: ['rgba(0,0,0,0)','images/pulse1.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pulse1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.3'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '110px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '356px']
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
            { id: "eid74", tween: [ "style", "${_pulse1}", "opacity", '1', { fromValue: '0.3'}], position: 0, duration: 233 },
            { id: "eid75", tween: [ "style", "${_pulse1}", "opacity", '0.3', { fromValue: '1'}], position: 367, duration: 233 }         ]
      }
   }
},
"PULSE_MOVIE2": {
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
      rect: ['0px','0px','359','106','auto','auto'],
      id: 'pulse2',
      fill: ['rgba(0,0,0,0)','images/pulse2.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pulse2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.3'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '106px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '356px']
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
            { id: "eid77", tween: [ "style", "${symbolSelector}", "width", '359px', { fromValue: '356px'}], position: 0, duration: 167 },
            { id: "eid97", tween: [ "style", "${_pulse2}", "opacity", '1', { fromValue: '0.3'}], position: 0, duration: 233 },
            { id: "eid98", tween: [ "style", "${_pulse2}", "opacity", '0.3', { fromValue: '1'}], position: 367, duration: 233 }         ]
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
})(jQuery, AdobeEdge, "EDGE-36324192");
