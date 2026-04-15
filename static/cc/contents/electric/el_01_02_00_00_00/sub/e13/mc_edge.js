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
            id:'movie_arrow',
            type:'rect',
            rect:['1219px','734px','auto','auto','auto','auto'],
            transform:[[],['-90'],[],['0.9','0.9']]
         },
         {
            id:'ENG',
            type:'rect',
            rect:['141px','236px','auto','auto','auto','auto']
         },
         {
            id:'RoadBack',
            type:'image',
            tag:'img',
            rect:['603','268','809','293','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"RoadBack.png"]
         },
         {
            id:'AIRS',
            type:'rect',
            rect:['603','226','auto','auto','auto','auto']
         },
         {
            id:'pics',
            type:'image',
            tag:'img',
            rect:['591','233','1009','490','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pics.png"]
         },
         {
            id:'FLOW_B1',
            type:'rect',
            rect:['739px','550px','auto','auto','auto','auto']
         },
         {
            id:'FLOW_R1',
            type:'rect',
            rect:['700px','550px','auto','auto','auto','auto']
         },
         {
            id:'throttle',
            type:'image',
            tag:'img',
            rect:['1193px','423px','20','76','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"throttle.png"],
            transform:[[],['90']]
         },
         {
            id:'FLOW3',
            type:'rect',
            rect:['1133px','440px','auto','auto','auto','auto'],
            transform:[[],['29'],[],[],['50%','100%']]
         },
         {
            id:'modules',
            type:'image',
            tag:'img',
            rect:['971','548','767','407','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"modules.png"]
         },
         {
            id:'AIRTEXT',
            type:'rect',
            rect:['797px','312px','auto','auto','auto','auto']
         },
         {
            id:'txt_c6',
            type:'text',
            rect:['1498','780','194','101','auto','auto'],
            text:"TPS 신호\rRPM 신호",
            align:"center",
            font:['굴림',42,"rgb(0,0,0)","normal","none","normal"]
         },
         {
            id:'txt_c5',
            type:'text',
            rect:['1041','792','142','69','auto','auto'],
            text:"ECM",
            align:"auto",
            font:['굴림',63,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt_c4',
            type:'text',
            rect:['1166','592','262','101','auto','auto'],
            text:"흡기제어밸브\r포지션센서",
            align:"center",
            font:['굴림',42,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt_c3',
            type:'text',
            rect:['1398','360','220','48','auto','auto'],
            text:"에어크리너",
            align:"center",
            font:['굴림',42,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt2',
            type:'text',
            rect:['579','45','1113px','112','auto','auto'],
            text:"VIS는 고속출력을 향상시키기 위해 \r가변 흡기통로를 제어 하는 장치 입니다.",
            align:"auto",
            font:['굴림',50,"rgb(0,0,0)","normal","none","normal"]
         },
         {
            id:'txt1',
            type:'text',
            rect:['188px','55','391px','81','auto','auto'],
            text:"VIS 제어",
            align:"auto",
            font:['굴림',75,"rgb(0,0,0)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'FLOW_R1',
            symbolName:'FLOW_R1'
         },
         {
            id:'ENG',
            symbolName:'ENG'
         },
         {
            id:'AIRS',
            symbolName:'AIRS'
         },
         {
            id:'AIRTEXT',
            symbolName:'AIRTEXT'
         },
         {
            id:'FLOW3',
            symbolName:'FLOW3'
         },
         {
            id:'movie_arrow',
            symbolName:'movie_arrow'
         },
         {
            id:'FLOW_B1',
            symbolName:'FLOW_B1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_FLOW_R1}": [
            ["style", "left", '1121px'],
            ["style", "top", '602px']
         ],
         "${_throttle}": [
            ["style", "top", '423px'],
            ["style", "left", '1193px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_txt2}": [
            ["style", "width", '1113px']
         ],
         "${_FLOW3}": [
            ["style", "top", '440px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '1133px'],
            ["transform", "rotateZ", '29deg']
         ],
         "${_txt1}": [
            ["style", "left", '188px'],
            ["style", "width", '391px']
         ],
         "${_AIRTEXT}": [
            ["style", "left", '797px'],
            ["style", "top", '312px']
         ],
         "${_movie_arrow}": [
            ["style", "top", '734px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.9'],
            ["style", "left", '1219px']
         ],
         "${_FLOW_B1}": [
            ["style", "left", '1097px'],
            ["style", "top", '604px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(239,239,239,1.00)'],
            ["style", "width", '1896px'],
            ["style", "height", '996px'],
            ["style", "overflow", 'hidden']
         ],
         "${_ENG}": [
            ["style", "top", '236px'],
            ["style", "left", '141px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid165", tween: [ "transform", "${_throttle}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 0, duration: 500 },
            { id: "eid167", tween: [ "transform", "${_throttle}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 3000, duration: 500 },
            { id: "eid175", tween: [ "transform", "${_movie_arrow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 }         ]
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
      rect: ['8px','5px','52','51','auto','auto'],
      id: 'fireBlack',
      fill: ['rgba(0,0,0,0)','images/fireBlack.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['8px','5px','52','51','auto','auto'],
      id: 'fireWhite',
      fill: ['rgba(0,0,0,0)','images/fireWhite.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','68','65','auto','auto'],
      id: 'fire3',
      fill: ['rgba(0,0,0,0)','images/fire3.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['3px','1px','61','63','auto','auto'],
      id: 'fire2',
      fill: ['rgba(0,0,0,0)','images/fire2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','68','65','auto','auto'],
      id: 'fire1',
      fill: ['rgba(0,0,0,0)','images/fire1.png'],
      type: 'image',
      tag: 'img'
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
         "${_fireWhite}": [
            ["style", "top", '5px'],
            ["style", "opacity", '0'],
            ["style", "left", '8px']
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
         "${symbolSelector}": [
            ["style", "height", '65px'],
            ["style", "width", '68px']
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
            { id: "eid30", tween: [ "style", "${_fire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 81 },
            { id: "eid49", tween: [ "style", "${_fire1}", "opacity", '0', { fromValue: '1'}], position: 81, duration: 81 },
            { id: "eid45", tween: [ "style", "${_fire1}", "opacity", '0', { fromValue: '0'}], position: 162, duration: 0 },
            { id: "eid20", tween: [ "transform", "${_fire3}", "scaleY", '1.2', { fromValue: '1'}], position: 333, duration: 154 },
            { id: "eid2", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 56, duration: 56 },
            { id: "eid6", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 111, duration: 56 },
            { id: "eid9", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 56 },
            { id: "eid10", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 222, duration: 56 },
            { id: "eid13", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 278, duration: 56 },
            { id: "eid14", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 56 },
            { id: "eid17", tween: [ "style", "${_fireBlack}", "opacity", '1', { fromValue: '0'}], position: 389, duration: 56 },
            { id: "eid18", tween: [ "style", "${_fireBlack}", "opacity", '0', { fromValue: '1'}], position: 444, duration: 56 },
            { id: "eid21", tween: [ "transform", "${_fire2}", "scaleX", '1.2', { fromValue: '1'}], position: 162, duration: 163 },
            { id: "eid23", tween: [ "transform", "${_fire1}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 162 },
            { id: "eid24", tween: [ "transform", "${_fire1}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 162 }         ]
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
         "${_bombBlack}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "height", '95px']
         ],
         "${_bombWhite}": [
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
      transform: [[0,0],[],[],['1.03261']],
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
      transform: [[0,0],['110']],
      fill: ['rgba(0,0,0,0)','images/cam2.png'],
      id: 'cam2',
      type: 'image',
      rect: ['315px','49px','59','69','auto','auto'],
      tag: 'img'
   },
   {
      transform: [[0,0],['-105']],
      fill: ['rgba(0,0,0,0)','images/cam1.png'],
      id: 'cam1',
      type: 'image',
      rect: ['96px','49px','59','69','auto','auto'],
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
         "${_eng_body}": [
            ["style", "left", '16px'],
            ["style", "top", '8px']
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
            ["transform", "scaleY", '2.38298'],
            ["style", "left", '143px'],
            ["transform", "scaleX", '1.03261']
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
         "${_cam1}": [
            ["style", "top", '49px'],
            ["style", "-webkit-transform-origin", [50,58], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,58],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '96px'],
            ["transform", "rotateZ", '-110deg']
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
         "${_blinderS}": [
            ["style", "left", '0px'],
            ["style", "top", '196px']
         ],
         "${_cam2}": [
            ["style", "top", '49px'],
            ["style", "-webkit-transform-origin", [50,59], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '315px'],
            ["transform", "rotateZ", '110deg']
         ],
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
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "height", '165px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(0,175,244,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
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
            ["style", "opacity", '1'],
            ["style", "height", '1px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(244,0,114,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
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
            { id: "eid57", tween: [ "transform", "${_cam1}", "rotateZ", '250deg', { fromValue: '-110deg'}], position: 0, duration: 4000 },
            { id: "eid125", tween: [ "style", "${_airBlue4}", "left", '302px', { fromValue: '456px'}], position: 0, duration: 500 },
            { id: "eid127", tween: [ "style", "${_airBlue4}", "width", '156px', { fromValue: '2px'}], position: 0, duration: 500 },
            { id: "eid134", tween: [ "style", "${_airBlue4}", "width", '1px', { fromValue: '156px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid229", tween: [ "style", "${_inBlue}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid154", tween: [ "style", "${_airRed4}", "width", '156px', { fromValue: '1px'}], position: 3000, duration: 533 },
            { id: "eid162", tween: [ "style", "${_airRed4}", "width", '7px', { fromValue: '156px'}], position: 3667, duration: 333 },
            { id: "eid168", tween: [ "style", "${_inBlue}", "height", '235px', { fromValue: '165px'}], position: 500, duration: 500 },
            { id: "eid171", tween: [ "style", "${_inBlue}", "height", '92px', { fromValue: '235px'}], position: 1000, duration: 1000 },
            { id: "eid156", tween: [ "style", "${_airRed3}", "width", '175px', { fromValue: '2px'}], position: 3000, duration: 533 },
            { id: "eid161", tween: [ "style", "${_airRed3}", "width", '8px', { fromValue: '175px'}], position: 3667, duration: 333 },
            { id: "eid159", tween: [ "style", "${_airRed1}", "left", '5px', { fromValue: '189px'}], position: 3000, duration: 533 },
            { id: "eid158", tween: [ "style", "${_airRed2}", "width", '185px', { fromValue: '2px'}], position: 3000, duration: 533 },
            { id: "eid163", tween: [ "style", "${_airRed2}", "width", '8px', { fromValue: '185px'}], position: 3667, duration: 333 },
            { id: "eid89", tween: [ "style", "${_valve2}", "top", '135px', { fromValue: '109px'}], position: 500, duration: 500 },
            { id: "eid91", tween: [ "style", "${_valve2}", "top", '109px', { fromValue: '135px'}], position: 1000, duration: 1000 },
            { id: "eid131", tween: [ "style", "${_airBlue1}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
            { id: "eid135", tween: [ "style", "${_airBlue1}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid121", tween: [ "style", "${_airBlue2}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
            { id: "eid117", tween: [ "style", "${_airBlue3}", "left", '283px', { fromValue: '456px'}], position: 0, duration: 500 },
            { id: "eid137", tween: [ "style", "${_airBlue3}", "left", '285px', { fromValue: '283px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_airRed4}", "left", '5px', { fromValue: '161px'}], position: 3000, duration: 533 },
            { id: "eid228", tween: [ "style", "${_inRed}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeInQuad" },
            { id: "eid170", tween: [ "style", "${_inBlue}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid58", tween: [ "transform", "${_cam2}", "rotateZ", '470deg', { fromValue: '110deg'}], position: 0, duration: 4000 },
            { id: "eid123", tween: [ "style", "${_airBlue2}", "width", '185px', { fromValue: '2px'}], position: 0, duration: 500 },
            { id: "eid133", tween: [ "style", "${_airBlue2}", "width", '1px', { fromValue: '185px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
            { id: "eid129", tween: [ "style", "${_airBlue1}", "left", '273px', { fromValue: '456px'}], position: 0, duration: 500 },
            { id: "eid155", tween: [ "style", "${_airRed3}", "left", '5px', { fromValue: '179px'}], position: 3000, duration: 533 },
            { id: "eid88", tween: [ "style", "${_valve2}", "left", '247px', { fromValue: '262px'}], position: 500, duration: 500 },
            { id: "eid90", tween: [ "style", "${_valve2}", "left", '262px', { fromValue: '247px'}], position: 1000, duration: 1000 },
            { id: "eid157", tween: [ "style", "${_airRed2}", "left", '5px', { fromValue: '189px'}], position: 3000, duration: 533 },
            { id: "eid119", tween: [ "style", "${_airBlue3}", "width", '175px', { fromValue: '2px'}], position: 0, duration: 500 },
            { id: "eid132", tween: [ "style", "${_airBlue3}", "width", '1px', { fromValue: '175px'}], position: 767, duration: 1000, easing: "easeOutQuad" },
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
      transform: [],
      fill: ['rgba(0,0,0,0)','images/pistonBar.png'],
      id: 'pistonBar',
      type: 'image',
      rect: ['54px','50px','68','225','auto','auto'],
      tag: 'img'
   },
   {
      transform: [],
      fill: ['rgba(0,0,0,0)','images/crank.png'],
      type: 'image',
      id: 'crank',
      opacity: 1,
      rect: ['28px','211px','120','161','auto','auto'],
      tag: 'img'
   },
   {
      rect: ['0px','0px','175','97','auto','auto'],
      id: 'pistonHead',
      fill: ['rgba(0,0,0,0)','images/pistonHead.png'],
      type: 'image',
      tag: 'img'
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
            ["style", "top", '50px'],
            ["style", "-webkit-transform-origin", [50,8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,8],{valueTemplate:'@@0@@% @@1@@%'}],
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
            { id: "eid66", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 0, duration: 250 },
            { id: "eid67", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 250, duration: 250 },
            { id: "eid78", tween: [ "style", "${_pistonBar}", "left", '59px', { fromValue: '54px'}], position: 1500, duration: 250 },
            { id: "eid79", tween: [ "style", "${_pistonBar}", "left", '54px', { fromValue: '59px'}], position: 1750, duration: 250 },
            { id: "eid59", tween: [ "transform", "${_crank}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid60", tween: [ "transform", "${_crank}", "rotateZ", '-180deg', { fromValue: '-90deg'}], position: 500, duration: 500 },
            { id: "eid71", tween: [ "transform", "${_crank}", "rotateZ", '-270deg', { fromValue: '-180deg'}], position: 1000, duration: 500 },
            { id: "eid72", tween: [ "transform", "${_crank}", "rotateZ", '-360deg', { fromValue: '-270deg'}], position: 1500, duration: 500 }         ]
      }
   }
},
"FLOW_R1": {
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
      rect: ['0px','0px','13','178','auto','auto'],
      id: 'flow_r1',
      fill: ['rgba(0,0,0,0)','images/flow_r1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie2',
      type: 'rect',
      transform: [[0,0],['90']],
      rect: ['-743px','-574px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movie2',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${_flow_movie2}": [
            ["style", "top", '-574px'],
            ["style", "left", '-743px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '178px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '13px']
         ],
         "${_flow_r1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
      fill: ['rgba(0,0,0,0)','images/flow_src2.png']
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
            ["style", "overflow", 'hidden'],
            ["style", "width", '1500px']
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
"FLOW_B1": {
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
      rect: ['0px','0px','13','140','auto','auto'],
      id: 'flow_b1',
      fill: ['rgba(0,0,0,0)','images/flow_b1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie2Copy',
      type: 'rect',
      rect: ['61','-630px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movie2Copy',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${_flow_movie2Copy}": [
            ["style", "top", '-630px'],
            ["style", "left", '-744px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_flow_b1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '140px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '13px']
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
"movie_arrow": {
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
      rect: ['97px','-5px','80','198','auto','auto'],
      transform: [[],['270']],
      fill: ['rgba(0,0,0,0)','images/arrow-back_red.png'],
      id: 'arrow-back_red',
      opacity: 1,
      type: 'image',
      tag: 'img'
   },
   {
      id: 'FLOWSRC9',
      type: 'rect',
      rect: ['-182px','28px','auto','auto','auto','auto']
   },
   {
      rect: ['44px','-44px','187','275','auto','auto'],
      transform: [[],['270']],
      id: 'arrow-cover',
      fill: ['rgba(0,0,0,0)','images/arrow-cover.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   {
      id: 'FLOWSRC9',
      symbolName: 'FLOWSRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_FLOWSRC9}": [
            ["style", "left", '-182px'],
            ["style", "top", '28px']
         ],
         "${_arrow-cover}": [
            ["style", "top", '-44px'],
            ["style", "left", '44px'],
            ["transform", "rotateZ", '270deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '275px']
         ],
         "${_arrow-back_red}": [
            ["style", "top", '-5px'],
            ["style", "opacity", '1'],
            ["style", "left", '97px'],
            ["transform", "rotateZ", '270deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 767,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"flow_movie_1": {
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
      rect: ['0px','0px','1097','6','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/flow_src22.png']
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
            ["style", "width", '820px'],
            ["style", "overflow", 'hidden']
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
      symbolName: 'flow_movie_1'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '6px'],
            ["style", "overflow", 'hidden']
         ],
         "${_flow_movieCopy2}": [
            ["style", "top", '405px'],
            ["style", "left", '-407px'],
            ["transform", "rotateZ", '270deg']
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
"FLOWSRC": {
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
      rect: ['0px','0px','716','131','auto','auto'],
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
            ["style", "height", '131px'],
            ["style", "width", '716px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid100", tween: [ "style", "${_flow_src}", "left", '-20px', { fromValue: '0px'}], position: 25, duration: 475 }         ]
      }
   }
},
"BLD1_1": {
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
      id: 'FLOWSRC2',
      type: 'rect',
      rect: ['153','50','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','111','136','auto','auto'],
      id: 'blinder1_1',
      fill: ['rgba(0,0,0,0)','images/blinder1_1.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   {
      id: 'FLOWSRC2',
      symbolName: 'FLOWSRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_FLOWSRC2}": [
            ["style", "left", '-24px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '136px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '111px']
         ],
         "${_blinder1_1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1125,
         autoPlay: true,
         timeline: [
            { id: "eid104", tween: [ "style", "${_FLOWSRC2}", "top", '0px', { fromValue: '0px'}], position: 1125, duration: 0 },
            { id: "eid103", tween: [ "style", "${_FLOWSRC2}", "left", '-24px', { fromValue: '-24px'}], position: 1125, duration: 0 }         ]
      }
   }
},
"BLD1_2": {
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
      rect: ['0px','0px','155','27','auto','auto'],
      id: 'blinder1_2',
      fill: ['rgba(0,0,0,0)','images/blinder1_2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'FLOWSRC3',
      type: 'rect',
      rect: ['239','-49','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'FLOWSRC3',
      symbolName: 'FLOWSRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_FLOWSRC3}": [
            ["style", "left", '20px'],
            ["style", "top", '-55px']
         ],
         "${_blinder1_2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '155px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1125,
         autoPlay: true,
         timeline: [
            { id: "eid108", tween: [ "style", "${_FLOWSRC3}", "left", '20px', { fromValue: '20px'}], position: 1125, duration: 0 },
            { id: "eid109", tween: [ "style", "${_FLOWSRC3}", "top", '-55px', { fromValue: '-55px'}], position: 1125, duration: 0 }         ]
      }
   }
},
"BLD1_3": {
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
      id: 'FLOWSRC4',
      type: 'rect',
      rect: ['-41','-67','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','38','99','auto','auto'],
      id: 'blinder1_3',
      fill: ['rgba(0,0,0,0)','images/blinder1_3.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   {
      id: 'FLOWSRC4',
      symbolName: 'FLOWSRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_blinder1_3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_FLOWSRC4}": [
            ["style", "top", '-240px'],
            ["style", "left", '-341px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '38px']
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
"AIRS": {
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
      rect: ['8px','199px','764','133','auto','auto'],
      id: 'airRoad3',
      fill: ['rgba(0,0,0,0)','images/airRoad3.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'BLD3_3',
      type: 'rect',
      rect: ['0','202','auto','auto','auto','auto']
   },
   {
      id: 'BLD3_2',
      type: 'rect',
      rect: ['690','282','auto','auto','auto','auto']
   },
   {
      id: 'BLD3_1',
      type: 'rect',
      rect: ['690','184','auto','auto','auto','auto']
   },
   {
      rect: ['8px','209px','602','33','auto','auto'],
      id: 'airRoad2',
      fill: ['rgba(0,0,0,0)','images/airRoad2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'BLD2',
      type: 'rect',
      rect: ['0','202','auto','auto','auto','auto']
   },
   {
      rect: ['643px','4px','468','168','auto','auto'],
      id: 'airRoad1',
      fill: ['rgba(0,0,0,0)','images/airRoad1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'BLD1_3',
      type: 'rect',
      rect: ['636px','77px','auto','auto','auto','auto']
   },
   {
      id: 'BLD1_2',
      type: 'rect',
      rect: ['646px','51px','auto','auto','auto','auto']
   },
   {
      id: 'BLD1_1',
      type: 'rect',
      rect: ['1006px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'BLD3_2',
      symbolName: 'BLD3_2'
   },
   {
      id: 'BLD2',
      symbolName: 'BLD2'
   },
   {
      id: 'BLD1_2',
      symbolName: 'BLD1_2'
   },
   {
      id: 'BLD1_1',
      symbolName: 'BLD1_1'
   },
   {
      id: 'BLD3_3',
      symbolName: 'BLD3_3'
   },
   {
      id: 'BLD3_1',
      symbolName: 'BLD3_1'
   },
   {
      id: 'BLD1_3',
      symbolName: 'BLD1_3'
   }   ]
   },
   states: {
      "Base State": {
         "${_BLD1_1}": [
            ["style", "left", '1006px'],
            ["style", "top", '0px']
         ],
         "${_BLD3_3}": [
            ["style", "opacity", '0']
         ],
         "${_BLD3_1}": [
            ["style", "opacity", '0']
         ],
         "${_BLD3_2}": [
            ["style", "opacity", '0']
         ],
         "${_BLD2}": [
            ["style", "opacity", '1']
         ],
         "${_BLD1_2}": [
            ["style", "left", '646px'],
            ["style", "top", '51px']
         ],
         "${_BLD1_3}": [
            ["style", "left", '636px'],
            ["style", "top", '77px']
         ],
         "${_airRoad2}": [
            ["style", "top", '209px'],
            ["style", "opacity", '1'],
            ["style", "left", '8px']
         ],
         "${symbolSelector}": [
            ["style", "height", '345px'],
            ["style", "width", '1117px']
         ],
         "${_airRoad1}": [
            ["style", "left", '643px'],
            ["style", "top", '4px']
         ],
         "${_airRoad3}": [
            ["style", "top", '199px'],
            ["style", "opacity", '0'],
            ["style", "left", '8px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1067,
         autoPlay: false,
         labels: {
            "air1Hide": 33,
            "air2Hide": 567
         },
         timeline: [
            { id: "eid126", tween: [ "style", "${_BLD2}", "opacity", '0', { fromValue: '1'}], position: 33, duration: 500 },
            { id: "eid141", tween: [ "style", "${_BLD2}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 500 },
            { id: "eid122", tween: [ "style", "${_BLD3_3}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 500 },
            { id: "eid145", tween: [ "style", "${_BLD3_3}", "opacity", '0', { fromValue: '1'}], position: 567, duration: 500 },
            { id: "eid124", tween: [ "style", "${_airRoad2}", "opacity", '0', { fromValue: '1'}], position: 33, duration: 500 },
            { id: "eid142", tween: [ "style", "${_airRoad2}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 500 },
            { id: "eid116", tween: [ "style", "${_BLD3_2}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 500 },
            { id: "eid144", tween: [ "style", "${_BLD3_2}", "opacity", '0', { fromValue: '1'}], position: 567, duration: 500 },
            { id: "eid118", tween: [ "style", "${_BLD3_1}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 500 },
            { id: "eid143", tween: [ "style", "${_BLD3_1}", "opacity", '0', { fromValue: '1'}], position: 567, duration: 500 },
            { id: "eid120", tween: [ "style", "${_airRoad3}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 500 },
            { id: "eid146", tween: [ "style", "${_airRoad3}", "opacity", '0', { fromValue: '1'}], position: 567, duration: 500 }         ]
      }
   }
},
"BLD2": {
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
      id: 'FLOWSRC5',
      type: 'rect',
      rect: ['59px','-42px','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','613','48','auto','auto'],
      id: 'blinder2',
      fill: ['rgba(0,0,0,0)','images/blinder2.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   {
      id: 'FLOWSRC5',
      symbolName: 'FLOWSRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_FLOWSRC5}": [
            ["style", "left", '-1px'],
            ["style", "top", '-42px']
         ],
         "${_blinder2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '613px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 33,
         autoPlay: true,
         timeline: [
            { id: "eid169", tween: [ "style", "${_FLOWSRC5}", "left", '-1px', { fromValue: '-1px'}], position: 33, duration: 0 }         ]
      }
   }
},
"BLD3_1": {
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
      rect: ['0px','0px','96','99','auto','auto'],
      id: 'blinder3_1',
      fill: ['rgba(0,0,0,0)','images/blinder3_1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'FLOWSRC6',
      type: 'rect',
      transform: [[],['-135']],
      rect: ['-446px','-154px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'FLOWSRC6',
      symbolName: 'FLOWSRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_blinder3_1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_FLOWSRC6}": [
            ["style", "top", '-154px'],
            ["style", "left", '-446px'],
            ["transform", "rotateZ", '-135deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '96px']
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
"BLD3_2": {
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
      rect: ['0px','0px','96','63','auto','auto'],
      id: 'blinder3_2',
      fill: ['rgba(0,0,0,0)','images/blinder3_2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'FLOWSRC7',
      type: 'rect',
      transform: [[],['-45']],
      rect: ['-109px','-241px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'FLOWSRC7',
      symbolName: 'FLOWSRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_FLOWSRC7}": [
            ["style", "top", '-241px'],
            ["style", "left", '-109px'],
            ["transform", "rotateZ", '-45deg']
         ],
         "${_blinder3_2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '96px']
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
"BLD3_3": {
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
      id: 'FLOWSRC8',
      type: 'rect',
      rect: ['45px','2px','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','691','143','auto','auto'],
      id: 'blinder3_3',
      fill: ['rgba(0,0,0,0)','images/blinder3_3.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   {
      id: 'FLOWSRC8',
      symbolName: 'FLOWSRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_blinder3_3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_FLOWSRC8}": [
            ["style", "left", '-6px'],
            ["style", "top", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '143px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '691px']
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
            { id: "eid172", tween: [ "style", "${_FLOWSRC8}", "left", '-6px', { fromValue: '-6px'}], position: 0, duration: 0 }         ]
      }
   }
},
"AIRTEXT": {
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
      rect: ['0px','0px','244','66','auto','auto'],
      font: ['굴림',60,'rgb(0,113,187)','normal','none','normal'],
      id: 'txt_c1Copy',
      text: '저속회전',
      align: 'auto',
      type: 'text'
   },
   {
      rect: ['0px','0px','244','66','auto','auto'],
      font: ['굴림',60,'rgb(211,19,89)','normal','none','normal'],
      id: 'txt_c2Copy',
      text: '고속회전',
      align: 'auto',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_txt_c1Copy}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '66px'],
            ["style", "width", '244px']
         ],
         "${_txt_c2Copy}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 600,
         autoPlay: false,
         labels: {
            "SHOWLOW": 33,
            "SHOWHIGH": 333
         },
         timeline: [
            { id: "eid148", tween: [ "style", "${_txt_c2Copy}", "opacity", '0', { fromValue: '1'}], position: 33, duration: 267 },
            { id: "eid151", tween: [ "style", "${_txt_c2Copy}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 267 },
            { id: "eid147", tween: [ "style", "${_txt_c1Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 267 },
            { id: "eid152", tween: [ "style", "${_txt_c1Copy}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 267 }         ]
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
})(jQuery, AdobeEdge, "EDGE-27165250");
