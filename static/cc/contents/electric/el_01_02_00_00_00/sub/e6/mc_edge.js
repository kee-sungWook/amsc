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
            id:'e_line',
            type:'image',
            tag:'img',
            rect:['460','514','706','35','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"e_line.png"]
         },
         {
            id:'ENG',
            type:'rect',
            rect:['67px','75px','auto','auto','auto','auto']
         },
         {
            id:'PMOVIE',
            type:'rect',
            rect:['808','847','auto','auto','auto','auto']
         },
         {
            id:'exhaust',
            type:'image',
            tag:'img',
            rect:['918','357','462','584','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"exhaust.png"]
         },
         {
            id:'FLOW_B2',
            type:'rect',
            rect:['739','677','auto','auto','auto','auto']
         },
         {
            id:'FLOW_R2',
            type:'rect',
            rect:['700','715','auto','auto','auto','auto']
         },
         {
            id:'ECM',
            type:'image',
            tag:'img',
            rect:['79','334','408','390','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ECM.png"]
         },
         {
            id:'pulse_back',
            type:'image',
            tag:'img',
            rect:['651','406','364','253','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pulse_back.png"]
         },
         {
            id:'PULSE',
            type:'rect',
            rect:['586','475','auto','auto','auto','auto']
         },
         {
            id:'SENSOR',
            type:'rect',
            rect:['1138','494','auto','auto','auto','auto']
         },
         {
            id:'txt_c2',
            type:'text',
            rect:['1123','411','98','76','auto','auto'],
            text:"O2",
            align:"auto",
            font:['굴림',70,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt_c1',
            type:'text',
            rect:['194','474','155','76','auto','auto'],
            text:"ECM",
            align:"auto",
            font:['굴림',70,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt2',
            type:'text',
            rect:['472','46','1346','167','auto','auto'],
            text:"산소센서는 연소 가스의 잔류 산소량을 감지하여 ECM으로 보내며 \rECM은 산소 센서의 신호 및 여러가지 신호를 분석하여\r연료 분사량을 조절 합니다.",
            align:"auto",
            font:['굴림',45,"rgb(0,0,0)","normal","none","normal"]
         },
         {
            id:'txt1',
            type:'text',
            rect:['82','41','336','158','auto','auto'],
            text:"O2센서\r(산소센서)",
            align:"center",
            font:['굴림',70,"rgb(0,0,0)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'FLOW_R2',
            symbolName:'FLOW_R2'
         },
         {
            id:'ENG',
            symbolName:'ENG'
         },
         {
            id:'FLOW_B2',
            symbolName:'FLOW_B2'
         },
         {
            id:'SENSOR',
            symbolName:'SENSOR'
         },
         {
            id:'PULSE',
            symbolName:'PULSE'
         },
         {
            id:'PMOVIE',
            symbolName:'PMOVIE'
         }
         ]
      },
   states: {
      "Base State": {
         "${_FLOW_B2}": [
            ["style", "top", '514px'],
            ["style", "left", '472px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(239,239,239,1.00)'],
            ["style", "width", '1896px'],
            ["style", "height", '996px'],
            ["style", "overflow", 'hidden']
         ],
         "${_FLOW_R2}": [
            ["style", "top", '535px'],
            ["style", "left", '405px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_PULSE}": [
            ["style", "left", '656px']
         ],
         "${_ENG}": [
            ["style", "top", '186px'],
            ["style", "left", '1359px']
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
"PULSE": {
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
      rect: ['-70px','0px','474','120','auto','auto'],
      id: 'pulse_O2',
      fill: ['rgba(0,0,0,0)','images/pulse_O2.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pulse_O2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.3'],
            ["style", "left", '-70px']
         ],
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '355px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid44", tween: [ "style", "${_pulse_O2}", "opacity", '1', { fromValue: '0.3'}], position: 0, duration: 467 },
            { id: "eid46", tween: [ "style", "${_pulse_O2}", "opacity", '0.3', { fromValue: '1'}], position: 533, duration: 467 }         ]
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
      transform: [],
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
            ["transform", "rotateZ", '0deg']
         ],
         "${_flow_r2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '751px']
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
      rect: ['0px','0px','1786','8','auto','auto'],
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
      transform: [[0,0],['180']],
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
            ["transform", "rotateZ", '180deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '708px']
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
      rect: ['1px','1px','151','76','auto','auto'],
      id: 'o2',
      fill: ['rgba(0,0,0,0)','images/o2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','153','77','auto','auto'],
      id: 'o2_whiteLine',
      fill: ['rgba(0,0,0,0)','images/o2_whiteLine.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','153','77','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/o2_redLine.png'],
      id: 'o2_redLine',
      opacity: 0,
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','0px','153','77','auto','auto'],
      id: 'o2_redLineCopy2',
      fill: ['rgba(0,0,0,0)','images/o2_redLine.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_o2_redLineCopy2}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_o2_whiteLine}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_o2_redLine}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '77px'],
            ["style", "width", '153px']
         ],
         "${_o2}": [
            ["style", "left", '1px'],
            ["style", "top", '1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid53", tween: [ "style", "${_o2_redLine}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 166 },
            { id: "eid74", tween: [ "style", "${_o2_redLine}", "opacity", '0', { fromValue: '1'}], position: 166, duration: 167 },
            { id: "eid101", tween: [ "style", "${_o2_redLine}", "opacity", '1', { fromValue: '0'}], position: 666, duration: 166 },
            { id: "eid102", tween: [ "style", "${_o2_redLine}", "opacity", '0', { fromValue: '1'}], position: 833, duration: 167 },
            { id: "eid97", tween: [ "transform", "${_o2_redLineCopy2}", "scaleY", '1.1', { fromValue: '1'}], position: 333, duration: 166 },
            { id: "eid98", tween: [ "transform", "${_o2_redLineCopy2}", "scaleY", '1.2', { fromValue: '1.1'}], position: 499, duration: 168 },
            { id: "eid54", tween: [ "transform", "${_o2_redLine}", "scaleX", '1.1', { fromValue: '1'}], position: 0, duration: 166 },
            { id: "eid56", tween: [ "transform", "${_o2_redLine}", "scaleX", '1.2', { fromValue: '1.1'}], position: 166, duration: 167 },
            { id: "eid99", tween: [ "transform", "${_o2_redLine}", "scaleX", '1.1', { fromValue: '1'}], position: 666, duration: 166 },
            { id: "eid100", tween: [ "transform", "${_o2_redLine}", "scaleX", '1.2', { fromValue: '1.1'}], position: 833, duration: 167 },
            { id: "eid77", tween: [ "style", "${_o2_redLineCopy2}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 166 },
            { id: "eid96", tween: [ "style", "${_o2_redLineCopy2}", "opacity", '0', { fromValue: '1'}], position: 499, duration: 168 },
            { id: "eid55", tween: [ "transform", "${_o2_redLine}", "scaleY", '1.1', { fromValue: '1'}], position: 0, duration: 166 },
            { id: "eid73", tween: [ "transform", "${_o2_redLine}", "scaleY", '1.2', { fromValue: '1.1'}], position: 166, duration: 167 },
            { id: "eid103", tween: [ "transform", "${_o2_redLine}", "scaleY", '1.1', { fromValue: '1'}], position: 666, duration: 166 },
            { id: "eid104", tween: [ "transform", "${_o2_redLine}", "scaleY", '1.2', { fromValue: '1.1'}], position: 833, duration: 167 },
            { id: "eid75", tween: [ "transform", "${_o2_redLineCopy2}", "scaleX", '1.1', { fromValue: '1'}], position: 333, duration: 166 },
            { id: "eid76", tween: [ "transform", "${_o2_redLineCopy2}", "scaleX", '1.2', { fromValue: '1.1'}], position: 499, duration: 168 },
            { id: "eid51", tween: [ "style", "${_o2_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267 },
            { id: "eid52", tween: [ "style", "${_o2_whiteLine}", "opacity", '0', { fromValue: '1'}], position: 733, duration: 267 }         ]
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
      rect: ['0px','0px','102','94','auto','auto'],
      id: 'pollution',
      fill: ['rgba(0,0,0,0)','images/pollution.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '94px'],
            ["style", "width", '102px']
         ],
         "${_pollution}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '34px']
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
            { id: "eid130", tween: [ "style", "${_pollution}", "left", '-70px', { fromValue: '34px'}], position: 0, duration: 300, easing: "easeInOutQuad" },
            { id: "eid136", tween: [ "style", "${_pollution}", "left", '-100px', { fromValue: '-70px'}], position: 300, duration: 300, easing: "easeInOutQuad" },
            { id: "eid116", tween: [ "style", "${_pollution}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300, easing: "easeInOutQuad" },
            { id: "eid122", tween: [ "style", "${_pollution}", "opacity", '0', { fromValue: '1'}], position: 300, duration: 300, easing: "easeInOutQuad" },
            { id: "eid114", tween: [ "transform", "${_pollution}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 300, easing: "easeInOutQuad" },
            { id: "eid126", tween: [ "transform", "${_pollution}", "scaleY", '0.5', { fromValue: '1'}], position: 300, duration: 300, easing: "easeInOutQuad" },
            { id: "eid112", tween: [ "transform", "${_pollution}", "scaleX", '1.2', { fromValue: '0.5'}], position: 0, duration: 300, easing: "easeInOutQuad" },
            { id: "eid124", tween: [ "transform", "${_pollution}", "scaleX", '0.5', { fromValue: '1.2'}], position: 300, duration: 300, easing: "easeInOutQuad" }         ]
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
      id: 'P_SRC',
      type: 'rect',
      rect: ['10px','0px','auto','auto','auto','auto']
   },
   {
      id: 'P_SRCCopy',
      type: 'rect',
      transform: [[],[],[],['1.34314','1.34314']],
      rect: ['26px','-16px','auto','auto','auto','auto']
   },
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
      id: 'P_SRCCopy9',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy8',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy7',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy4',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy2',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy6',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy5',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRCCopy3',
      symbolName: 'P_SRC'
   },
   {
      id: 'P_SRC',
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
            ["style", "left", '465px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5']
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
         "${_P_SRC}": [
            ["style", "left", '10px'],
            ["style", "top", '0px']
         ],
         "${_P_SRCCopy8}": [
            ["style", "top", '-309px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '425px']
         ],
         "${_P_SRCCopy4}": [
            ["style", "top", '-481px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '425px']
         ],
         "${symbolSelector}": [
            ["style", "height", '94px'],
            ["style", "width", '102px']
         ],
         "${_P_SRCCopy}": [
            ["style", "top", '-16px'],
            ["transform", "scaleY", '1.34314'],
            ["style", "left", '26px'],
            ["transform", "scaleX", '1.34314']
         ],
         "${_P_SRCCopy2}": [
            ["style", "top", '-490px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '506px']
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
         duration: 526,
         autoPlay: false,
         timeline: [
            { id: "eid139", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy2}', [] ], ""], position: 0 },
            { id: "eid140", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy3}', [] ], ""], position: 66.666666666667 },
            { id: "eid141", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy4}', [] ], ""], position: 100 },
            { id: "eid142", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy5}', [] ], ""], position: 133.33333333333 },
            { id: "eid143", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy6}', [] ], ""], position: 166.66666666667 },
            { id: "eid144", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy7}', [] ], ""], position: 200 },
            { id: "eid145", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy8}', [] ], ""], position: 233.33333333333 },
            { id: "eid146", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy9}', [] ], ""], position: 266.66666666667 },
            { id: "eid147", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRC}', [] ], ""], position: 400 },
            { id: "eid148", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_P_SRCCopy}', [] ], ""], position: 526 }         ]
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
})(jQuery, AdobeEdge, "EDGE-9848292");
