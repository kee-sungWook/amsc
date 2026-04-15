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
            id:'FLOW_H3',
            type:'rect',
            rect:['609','821','auto','auto','auto','auto']
         },
         {
            id:'FLOW_H2',
            type:'rect',
            rect:['1202','406','auto','auto','auto','auto']
         },
         {
            id:'FLOW_H1',
            type:'rect',
            rect:['495','287','auto','auto','auto','auto']
         },
         {
            id:'FLOW_V3',
            type:'rect',
            rect:['1581','476','auto','auto','auto','auto']
         },
         {
            id:'FLOW_V2',
            type:'rect',
            rect:['1202','406','auto','auto','auto','auto']
         },
         {
            id:'FLOW_V1',
            type:'rect',
            rect:['495','287','auto','auto','auto','auto']
         },
         {
            id:'AIR_ROAD',
            type:'rect',
            rect:['116','575','auto','auto','auto','auto']
         },
         {
            id:'ETC_BACK',
            type:'image',
            tag:'img',
            rect:['423','541','159','257','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ETC_BACK.png"]
         },
         {
            id:'backPic',
            type:'image',
            tag:'img',
            rect:['108','218','1681','707','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"backPic.png"]
         },
         {
            id:'ETC',
            type:'rect',
            rect:['401','540','auto','auto','auto','auto']
         },
         {
            id:'PEDAL_ACCEL',
            type:'rect',
            rect:['1488','632','auto','auto','auto','auto']
         },
         {
            id:'txt_c3',
            type:'text',
            rect:['1587','772','94','50','auto','auto'],
            text:"페달",
            align:"auto",
            font:['굴림',44,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt_c2',
            type:'text',
            rect:['1511','315','148','73','auto','auto'],
            text:"ECM",
            align:"auto",
            font:['굴림',67,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt_c2-1',
            type:'text',
            rect:['525','449','133','73','auto','auto'],
            text:"ETC",
            align:"auto",
            font:['굴림',67,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt2',
            type:'text',
            rect:['365px','42px','1496px','115','auto','auto'],
            text:"ETC는 TPS와 APS가 일체형으로 되어있는 형식입니다.<br>케이블이 아닌 전자식 제어에 의해 스로틀 플랩이 작동됩니다.",
            align:"auto",
            font:['굴림',50,"rgb(0,0,0)","normal","none","normal"]
         },
         {
            id:'txt1',
            type:'text',
            rect:['132px','59px','210px','81','auto','auto'],
            text:"ETC",
            align:"auto",
            font:['굴림',75,"rgb(0,0,0)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'ETC',
            symbolName:'ETC'
         },
         {
            id:'AIR_ROAD',
            symbolName:'AIR_ROAD'
         },
         {
            id:'FLOW_V3',
            symbolName:'FLOW_V3'
         },
         {
            id:'FLOW_V2',
            symbolName:'FLOW_V2'
         },
         {
            id:'FLOW_H2',
            symbolName:'FLOW_H2'
         },
         {
            id:'FLOW_V1',
            symbolName:'FLOW_V1'
         },
         {
            id:'PEDAL_ACCEL',
            symbolName:'PEDAL_ACCEL'
         },
         {
            id:'FLOW_H3',
            symbolName:'FLOW_H3'
         },
         {
            id:'FLOW_H1',
            symbolName:'FLOW_H1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(239,239,239,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '996px'],
            ["style", "width", '1896px']
         ],
         "${_txt2}": [
            ["style", "top", '42px'],
            ["style", "left", '365px'],
            ["style", "width", '1496px']
         ],
         "${_txt1}": [
            ["style", "top", '59px'],
            ["style", "left", '132px'],
            ["style", "width", '210px']
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
"AIR_ROAD": {
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
      rect: ['7px','4px','969','185','auto','auto'],
      id: 'airRoad',
      fill: ['rgba(0,0,0,0)','images/airRoad.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'FLOWSRC',
      type: 'rect',
      transform: [[],[],[],['1.45671']],
      rect: ['170px','-525px','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','984','193','auto','auto'],
      id: 'blinder',
      fill: ['rgba(0,0,0,0)','images/blinder.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   {
      id: 'FLOWSRC',
      symbolName: 'FLOWSRC'
   }   ]
   },
   states: {
      "Base State": {
         "${_FLOWSRC}": [
            ["transform", "scaleX", '1.45671'],
            ["transform", "scaleY", '1.39695'],
            ["style", "left", '170px'],
            ["style", "top", '30px']
         ],
         "${_airRoad}": [
            ["style", "left", '7px'],
            ["style", "top", '4px']
         ],
         "${symbolSelector}": [
            ["style", "height", '193px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '984px']
         ],
         "${_blinder}": [
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
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ETC": {
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
      rect: ['0px','0px','246','326','auto','auto'],
      id: 'ETC',
      fill: ['rgba(0,0,0,0)','images/ETC.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'ETCwhiteLine',
      type: 'image',
      rect: ['-1px','-1px','248px','327px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ETCwhiteLine.png','0px','0px']
   },
   {
      id: 'ETCredLine',
      type: 'image',
      rect: ['-1px','-1px','248px','327px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ETCredLine.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '326px'],
            ["style", "width", '246px']
         ],
         "${_ETCwhiteLine}": [
            ["style", "top", '-1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px']
         ],
         "${_ETC}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ETCredLine}": [
            ["style", "top", '-1px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500.33333333334,
         autoPlay: false,
         timeline: [
            { id: "eid20", tween: [ "transform", "${_ETCredLine}", "scaleY", '1.02', { fromValue: '1'}], position: 0, duration: 117 },
            { id: "eid23", tween: [ "transform", "${_ETCredLine}", "scaleY", '1.05', { fromValue: '1.02'}], position: 117, duration: 117 },
            { id: "eid28", tween: [ "transform", "${_ETCredLine}", "scaleY", '1.02', { fromValue: '1'}], position: 267, duration: 117 },
            { id: "eid29", tween: [ "transform", "${_ETCredLine}", "scaleY", '1.05', { fromValue: '1.02'}], position: 384, duration: 117 },
            { id: "eid14", tween: [ "style", "${_ETCredLine}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 117 },
            { id: "eid21", tween: [ "style", "${_ETCredLine}", "opacity", '0', { fromValue: '1'}], position: 117, duration: 117 },
            { id: "eid26", tween: [ "style", "${_ETCredLine}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 117 },
            { id: "eid27", tween: [ "style", "${_ETCredLine}", "opacity", '0', { fromValue: '1'}], position: 384, duration: 117 },
            { id: "eid19", tween: [ "transform", "${_ETCredLine}", "scaleX", '1.02', { fromValue: '1'}], position: 0, duration: 117 },
            { id: "eid22", tween: [ "transform", "${_ETCredLine}", "scaleX", '1.05', { fromValue: '1.02'}], position: 117, duration: 117 },
            { id: "eid24", tween: [ "transform", "${_ETCredLine}", "scaleX", '1.02', { fromValue: '1'}], position: 267, duration: 117 },
            { id: "eid25", tween: [ "transform", "${_ETCredLine}", "scaleX", '1.05', { fromValue: '1.02'}], position: 384, duration: 117 },
            { id: "eid11", tween: [ "style", "${_ETCwhiteLine}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233 },
            { id: "eid12", tween: [ "style", "${_ETCwhiteLine}", "opacity", '0', { fromValue: '1'}], position: 267, duration: 233 }         ]
      }
   }
},
"FLOW_V1": {
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
      rect: ['0px','0px','13','262','auto','auto'],
      id: 'flowRoad_v1',
      fill: ['rgba(0,0,0,0)','images/flowRoad_v1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie',
      type: 'rect',
      transform: [[],['90']],
      rect: ['-744px','-85px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movie',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '262px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '13px']
         ],
         "${_flow_movie}": [
            ["style", "top", '-85px'],
            ["style", "left", '-744px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_flowRoad_v1}": [
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
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"FLOW_V2": {
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
      rect: ['0px','0px','13','428','auto','auto'],
      id: 'flowRoad_v2',
      fill: ['rgba(0,0,0,0)','images/flowRoad_v2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie',
      type: 'rect',
      transform: [[],['-90']],
      rect: ['-744px','-85px','auto','auto','auto','auto']
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
            ["style", "top", '-85px'],
            ["style", "left", '-744px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '428px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '13px']
         ],
         "${_flowRoad_v2}": [
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
"FLOW_V3": {
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
      rect: ['0px','0px','13','154','auto','auto'],
      id: 'flowRoad_v3',
      fill: ['rgba(0,0,0,0)','images/flowRoad_v3.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie',
      type: 'rect',
      transform: [[],['90']],
      rect: ['-744px','-85px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movie',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${_flowRoad_v3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_flow_movie}": [
            ["style", "top", '-85px'],
            ["style", "left", '-743px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '154px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '13px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid33", tween: [ "style", "${_flow_movie}", "left", '-743px', { fromValue: '-743px'}], position: 5000, duration: 0 }         ]
      }
   }
},
"FLOW_H1": {
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
      rect: ['0px','0px','906','13','auto','auto'],
      id: 'flowRoad_h1',
      fill: ['rgba(0,0,0,0)','images/flowRoad_h1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie',
      type: 'rect',
      transform: [[],['180']],
      rect: ['-291px','3px','auto','auto','auto','auto']
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
            ["style", "top", '3px'],
            ["style", "left", '-291px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_flowRoad_h1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '906px']
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
"FLOW_H2": {
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
      rect: ['0px','0px','210','13','auto','auto'],
      id: 'flowRoad_h2',
      fill: ['rgba(0,0,0,0)','images/flowRoad_h2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie',
      type: 'rect',
      transform: [],
      rect: ['-291px','3px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movie',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '210px']
         ],
         "${_flow_movie}": [
            ["style", "top", '3px'],
            ["style", "left", '-291px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_flowRoad_h2}": [
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
"FLOW_H3": {
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
      rect: ['0px','0px','606','13','auto','auto'],
      id: 'flowRoad_h3',
      fill: ['rgba(0,0,0,0)','images/flowRoad_h3.png'],
      type: 'image',
      tag: 'img'
   },
   {
      id: 'flow_movie',
      type: 'rect',
      transform: [],
      rect: ['-291px','3px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flow_movie',
      symbolName: 'flow_movie'
   }   ]
   },
   states: {
      "Base State": {
         "${_flowRoad_h3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_flow_movie}": [
            ["style", "top", '3px'],
            ["style", "left", '-291px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '606px']
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
      fill: ['rgba(0,0,0,0)','images/flow_src2.png'],
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
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid2", tween: [ "style", "${_flow_src}", "left", '-63px', { fromValue: '0px'}], position: 0, duration: 2000 }         ]
      }
   }
},
"PEDAL_ACCEL": {
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
      rect: ['0px','0px','154','322','auto','auto'],
      transform: [],
      id: 'accelerator',
      fill: ['rgba(0,0,0,0)','images/accelerator.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '322px'],
            ["style", "width", '154px']
         ],
         "${_accelerator}": [
            ["style", "-webkit-transform-origin", [18,7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [18,7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [18,7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [18,7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [18,7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1133.3333333333,
         autoPlay: false,
         labels: {
            "down": 33,
            "up": 600
         },
         timeline: [
            { id: "eid30", tween: [ "transform", "${_accelerator}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 33, duration: 533 },
            { id: "eid32", tween: [ "transform", "${_accelerator}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 600, duration: 533 }         ]
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
})(jQuery, AdobeEdge, "EDGE-20022076");
