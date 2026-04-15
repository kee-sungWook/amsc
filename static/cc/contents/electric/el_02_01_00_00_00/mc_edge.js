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
            id:'FLOWS',
            type:'rect',
            rect:['630','454','auto','auto','auto','auto']
         },
         {
            id:'OUTPARTS',
            type:'rect',
            rect:['13','417','auto','auto','auto','auto']
         },
         {
            id:'INPARTS',
            type:'rect',
            rect:['1460','417','auto','auto','auto','auto']
         },
         {
            id:'TCU',
            type:'image',
            tag:'img',
            rect:['857px','316px','403','843','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"TCU.png"]
         },
         {
            id:'txt3',
            type:'text',
            rect:['875px','520px','365px','555px','auto','auto'],
            text:"변속패턴제어<br><br>변속시 유압제어<br><br>댐퍼클러치 제어<br><br>INVECS 제어<br><br>엔진총합제어<br><br>DIAGNOSIS 제어",
            align:"center",
            font:['굴림',40,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'TCU-1',
            type:'text',
            rect:['935px','351','244px','76','auto','auto'],
            text:"TCU",
            align:"center",
            font:['굴림',70,"rgb(76,76,76)","normal","none","normal"]
         },
         {
            id:'txt2',
            type:'text',
            rect:['689px','75px','965px','106','auto','auto'],
            text:"변속단 제어에 사용되는 내부 솔레노이드로 <br>고장이 발생 할 경우 변속이 불가능합니다.",
            align:"auto",
            font:['나눔고딕',46,"rgb(0,0,0)","normal","none","normal"]
         },
         {
            id:'txt1',
            type:'text',
            rect:['248px','56','466px','181px','auto','auto'],
            text:"변속제어<br>(밸브바디)",
            align:"center",
            font:['나눔고딕',70,"rgb(0,0,0)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'OUTPARTS',
            symbolName:'OUTPARTS'
         },
         {
            id:'INPARTS',
            symbolName:'INPARTS'
         },
         {
            id:'FLOWS',
            symbolName:'FLOWS'
         }
         ]
      },
   states: {
      "Base State": {
         "${_INPARTS}": [
            ["style", "opacity", '0']
         ],
         "${_txt2}": [
            ["style", "top", '75px'],
            ["style", "opacity", '0'],
            ["style", "left", '689px'],
            ["style", "width", '965px']
         ],
         "${_txt1}": [
            ["style", "height", '181px'],
            ["style", "opacity", '0'],
            ["style", "left", '248px'],
            ["style", "width", '466px']
         ],
         "${_TCU}": [
            ["style", "opacity", '0']
         ],
         "${_FLOWS}": [
            ["style", "opacity", '0']
         ],
         "${_OUTPARTS}": [
            ["style", "opacity", '0']
         ],
         "${_TCU-1}": [
            ["style", "opacity", '0'],
            ["style", "left", '935px'],
            ["style", "width", '244px']
         ],
         "${_txt3}": [
            ["style", "top", '520px'],
            ["style", "opacity", '0'],
            ["style", "height", '555px'],
            ["style", "font-family", '굴림'],
            ["style", "left", '875px'],
            ["style", "width", '365px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(239,239,239,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1230px'],
            ["style", "width", '1900px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20000,
         autoPlay: true,
         labels: {
            "M1": 2000,
            "M2": 5000,
            "M3": 8000,
            "M4": 11000,
            "M5": 14000,
            "M6": 17000
         },
         timeline: [
            { id: "eid116", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid118", tween: [ "style", "${_TCU-1}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 500 },
            { id: "eid106", tween: [ "style", "${_TCU}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 500 },
            { id: "eid104", tween: [ "style", "${_OUTPARTS}", "opacity", '1', { fromValue: '0'}], position: 833, duration: 500 },
            { id: "eid112", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 500 },
            { id: "eid110", tween: [ "style", "${_INPARTS}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 500 },
            { id: "eid108", tween: [ "style", "${_FLOWS}", "opacity", '1', { fromValue: '0'}], position: 967, duration: 500 },
            { id: "eid114", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 500 }         ]
      }
   }
},
"OUTPARTS": {
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
      id: 'OUTPARTS1',
      type: 'rect',
      rect: ['17','0','auto','auto','auto','auto']
   },
   {
      id: 'OUTPARTS2',
      type: 'rect',
      rect: ['16','124','auto','auto','auto','auto']
   },
   {
      id: 'OUTPARTS3',
      type: 'rect',
      rect: ['74','248','auto','auto','auto','auto']
   },
   {
      id: 'OUTPARTS4',
      type: 'rect',
      rect: ['0','371','auto','auto','auto','auto']
   },
   {
      id: 'OUTPARTS5',
      type: 'rect',
      rect: ['111','495','auto','auto','auto','auto']
   },
   {
      id: 'OUTPARTS6',
      type: 'rect',
      rect: ['97','619','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'OUTPARTS4',
      symbolName: 'OUTPARTS4'
   },
   {
      id: 'OUTPARTS1',
      symbolName: 'OUTPARTS1'
   },
   {
      id: 'OUTPARTS2',
      symbolName: 'OUTPARTS2'
   },
   {
      id: 'OUTPARTS5',
      symbolName: 'OUTPARTS5'
   },
   {
      id: 'OUTPARTS6',
      symbolName: 'OUTPARTS6'
   },
   {
      id: 'OUTPARTS3',
      symbolName: 'OUTPARTS3'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '717px'],
            ["style", "width", '660px']
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
"OUTPARTS1": {
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
      rect: ['447px','1px','196','97','auto','auto'],
      id: 'outPart1',
      fill: ['rgba(0,0,0,0)','images/outPart1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/outPart1_red.png'],
      id: 'outPart1_red',
      rect: ['447px','1px','196','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['447px','0px','196','98','auto','auto'],
      id: 'outPLine1',
      fill: ['rgba(0,0,0,0)','images/outPLine1.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','25px','433px','41','auto','auto'],
      font: ['굴림',35,'rgb(0,0,0)','normal','none','normal'],
      id: 'outTxt1',
      text: '언더드라이버클러치(UD)',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outPart1}": [
            ["style", "top", '1px'],
            ["style", "left", '447px'],
            ["style", "display", 'block']
         ],
         "${_outPart1_red}": [
            ["style", "top", '1px'],
            ["style", "left", '447px'],
            ["style", "display", 'none']
         ],
         "${_outTxt1}": [
            ["style", "top", '25px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '433px']
         ],
         "${_outPLine1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '447px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '643px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333.33333333333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid9", tween: [ "style", "${_outPart1_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_outPart1_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0 },
            { id: "eid2", tween: [ "style", "${_outPLine1}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 133, easing: "easeInQuad" },
            { id: "eid3", tween: [ "style", "${_outPLine1}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 133, easing: "easeOutQuad" },
            { id: "eid7", tween: [ "color", "${_outTxt1}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "color", "${_outTxt1}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 33, duration: 0 },
            { id: "eid8", tween: [ "style", "${_outPart1}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0 }         ]
      }
   }
},
"OUTPARTS2": {
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
      rect: ['448px','0px','196','97','auto','auto'],
      id: 'outPart2',
      fill: ['rgba(0,0,0,0)','images/outPart2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/outPart2_red.png'],
      id: 'outPart2_red',
      rect: ['448px','0px','196','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['448px','0px','196','98','auto','auto'],
      id: 'outPLine2',
      fill: ['rgba(0,0,0,0)','images/outPLine2.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','25px','435px','41','auto','auto'],
      font: ['굴림',35,'rgb(0,0,0)','normal','none','normal'],
      id: 'outTxt2',
      text: '오버드라이버클러치(OD)',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outPLine2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '448px']
         ],
         "${_outPart2_red}": [
            ["style", "top", '0px'],
            ["style", "left", '448px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '644px']
         ],
         "${_outTxt2}": [
            ["style", "top", '25px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '0px'],
            ["style", "width", '435px']
         ],
         "${_outPart2}": [
            ["style", "top", '0px'],
            ["style", "left", '448px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333.33333333333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid17", tween: [ "style", "${_outPart2}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0 },
            { id: "eid12", tween: [ "style", "${_outPLine2}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 133, easing: "easeInQuad" },
            { id: "eid13", tween: [ "style", "${_outPLine2}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 133, easing: "easeOutQuad" },
            { id: "eid15", tween: [ "style", "${_outPart2_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "style", "${_outPart2_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0 },
            { id: "eid18", tween: [ "color", "${_outTxt2}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "color", "${_outTxt2}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0 }         ]
      }
   }
},
"OUTPARTS3": {
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
      rect: ['390px','0px','196','97','auto','auto'],
      id: 'outPart3',
      fill: ['rgba(0,0,0,0)','images/outPart3.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/outPart3_red.png'],
      id: 'outPart3_red',
      rect: ['390px','0px','196','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['390px','0px','196','98','auto','auto'],
      id: 'outPLine3',
      fill: ['rgba(0,0,0,0)','images/outPLine3.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','24px','376px','41','auto','auto'],
      font: ['굴림',35,'rgb(0,0,0)','normal','none','normal'],
      id: 'outTxt3',
      text: '세컨드브레이크(2ND)',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outPart3}": [
            ["style", "top", '0px'],
            ["style", "left", '390px'],
            ["style", "display", 'block']
         ],
         "${_outTxt3}": [
            ["style", "top", '24px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(237,30,121,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '376px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '586px']
         ],
         "${_outPLine3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '390px']
         ],
         "${_outPart3_red}": [
            ["style", "top", '0px'],
            ["style", "left", '390px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333.33333333333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid31", tween: [ "style", "${_outPart3}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid21", tween: [ "style", "${_outPLine3}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 133, easing: "easeInQuad" },
            { id: "eid22", tween: [ "style", "${_outPLine3}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 133, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_outPart3_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid30", tween: [ "style", "${_outPart3_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid27", tween: [ "color", "${_outTxt3}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid28", tween: [ "color", "${_outTxt3}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeOutQuad" }         ]
      }
   }
},
"OUTPARTS4": {
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
      rect: ['464px','1px','196','97','auto','auto'],
      id: 'outPart4',
      fill: ['rgba(0,0,0,0)','images/outPart4.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/outPart4_red.png'],
      id: 'outPart4_red',
      rect: ['464px','1px','196','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['464px','0px','196','98','auto','auto'],
      id: 'outPLine4',
      fill: ['rgba(0,0,0,0)','images/outPLine4.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','25px','450px','41','auto','auto'],
      font: ['굴림',35,'rgb(0,0,0)','normal','none','normal'],
      id: 'outTxt4',
      text: '로우&리버스브레이크(LR)',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outPart4_red}": [
            ["style", "top", '1px'],
            ["style", "left", '464px'],
            ["style", "display", 'none']
         ],
         "${_outTxt4}": [
            ["style", "top", '25px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '0px'],
            ["style", "width", '450px']
         ],
         "${_outPart4}": [
            ["style", "top", '1px'],
            ["style", "left", '464px'],
            ["style", "display", 'block']
         ],
         "${_outPLine4}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '464px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '660px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333.33333333333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid33", tween: [ "style", "${_outPLine4}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 133, easing: "easeInQuad" },
            { id: "eid34", tween: [ "style", "${_outPLine4}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 133, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_outPart4_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid37", tween: [ "style", "${_outPart4_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid40", tween: [ "color", "${_outTxt4}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid41", tween: [ "color", "${_outTxt4}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid35", tween: [ "style", "${_outPart4}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"OUTPARTS5": {
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
      rect: ['353px','1px','196','97','auto','auto'],
      id: 'outPart5',
      fill: ['rgba(0,0,0,0)','images/outPart5.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/outPart5_red.png'],
      id: 'outPart5_red',
      rect: ['353px','1px','196','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['353px','0px','196','98','auto','auto'],
      id: 'outPLine5',
      fill: ['rgba(0,0,0,0)','images/outPLine5.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','25px','339px','41','auto','auto'],
      font: ['굴림',35,'rgb(0,0,0)','normal','none','normal'],
      id: 'outTxt5',
      text: '리버스클러치(RUS)',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outPLine5}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '353px']
         ],
         "${_outPart5}": [
            ["style", "top", '1px'],
            ["style", "left", '353px'],
            ["style", "display", 'block']
         ],
         "${_outPart5_red}": [
            ["style", "top", '1px'],
            ["style", "left", '353px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '549px']
         ],
         "${_outTxt5}": [
            ["style", "top", '25px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '0px'],
            ["style", "width", '339px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333.33333333333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid45", tween: [ "style", "${_outPLine5}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 133, easing: "easeInQuad" },
            { id: "eid46", tween: [ "style", "${_outPLine5}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 133, easing: "easeOutQuad" },
            { id: "eid51", tween: [ "style", "${_outPart5}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid43", tween: [ "style", "${_outPart5_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid52", tween: [ "style", "${_outPart5_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid48", tween: [ "color", "${_outTxt5}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid49", tween: [ "color", "${_outTxt5}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeOutQuad" }         ]
      }
   }
},
"OUTPARTS6": {
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
      rect: ['367px','0px','196','97','auto','auto'],
      id: 'outPart6',
      fill: ['rgba(0,0,0,0)','images/outPart6.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/outPart6_red.png'],
      id: 'outPart6_red',
      rect: ['367px','0px','196','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['367px','0px','196','98','auto','auto'],
      id: 'outPLine6',
      fill: ['rgba(0,0,0,0)','images/outPLine6.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['0px','25px','354px','41','auto','auto'],
      font: ['굴림',35,'rgb(0,0,0)','normal','none','normal'],
      id: 'outTxt6',
      text: '원웨이클러치(OWC)',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outPart6_red}": [
            ["style", "top", '0px'],
            ["style", "left", '367px'],
            ["style", "display", 'none']
         ],
         "${_outTxt6}": [
            ["style", "top", '25px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '0px'],
            ["style", "width", '354px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '563px']
         ],
         "${_outPart6}": [
            ["style", "top", '0px'],
            ["style", "left", '367px'],
            ["style", "display", 'block']
         ],
         "${_outPLine6}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '367px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid57", tween: [ "style", "${_outPart6}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid58", tween: [ "style", "${_outPart6_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_outPLine6}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 134, easing: "easeInQuad" },
            { id: "eid61", tween: [ "style", "${_outPLine6}", "opacity", '0', { fromValue: '0.995031'}], position: 200, duration: 133, easing: "easeInQuad" },
            { id: "eid55", tween: [ "color", "${_outTxt6}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid56", tween: [ "color", "${_outTxt6}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"INPARTS1": {
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
      rect: ['0px','1px','386','97','auto','auto'],
      id: 'inputBar',
      fill: ['rgba(0,0,0,0)','images/inputBar.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/inputBar_red.png'],
      id: 'inputBar_red',
      rect: ['0px','1px','386','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['0px','0px','386','98','auto','auto'],
      id: 'inputBar_whiteLine',
      fill: ['rgba(0,0,0,0)','images/inputBar_whiteLine.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['82px','26px','222px','46','auto','auto'],
      font: ['굴림',40,'rgb(0,0,0)','normal','none','normal'],
      id: 'inTxt1Copy',
      text: 'P,N 레인지',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_inputBar_whiteLine}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '386px']
         ],
         "${_inputBar_red}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_inTxt1}": [
            ["style", "top", '441px'],
            ["style", "left", '1543px'],
            ["style", "width", '222px']
         ],
         "${_inputBar}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_inTxt1Copy}": [
            ["style", "top", '26px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '82px'],
            ["style", "width", '222px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid65", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid66", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid68", tween: [ "style", "${_inputBar}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid63", tween: [ "style", "${_inputBar_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${_inputBar_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 134, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '0', { fromValue: '0.995031'}], position: 200, duration: 133, easing: "easeOutQuad" }         ]
      }
   }
},
"INPARTS2": {
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
      rect: ['0px','1px','386','97','auto','auto'],
      id: 'inputBar',
      fill: ['rgba(0,0,0,0)','images/inputBar.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/inputBar_red.png'],
      id: 'inputBar_red',
      rect: ['0px','1px','386','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['0px','0px','386','98','auto','auto'],
      id: 'inputBar_whiteLine',
      fill: ['rgba(0,0,0,0)','images/inputBar_whiteLine.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['82px','26px','222px','46','auto','auto'],
      font: ['굴림',40,'rgb(0,0,0)','normal','none','normal'],
      id: 'inTxt1Copy',
      text: 'D,3,2,L 레인지 1속',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_inputBar_whiteLine}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '386px']
         ],
         "${_inputBar_red}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_inTxt1}": [
            ["style", "top", '441px'],
            ["style", "left", '1543px'],
            ["style", "width", '222px']
         ],
         "${_inputBar}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_inTxt1Copy}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '26px'],
            ["style", "left", '6px'],
            ["style", "width", '374px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid68", tween: [ "style", "${_inputBar}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid63", tween: [ "style", "${_inputBar_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${_inputBar_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid65", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid66", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 134, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '0', { fromValue: '0.995031'}], position: 200, duration: 133, easing: "easeOutQuad" }         ]
      }
   }
},
"INPARTS3": {
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
      rect: ['0px','1px','386','97','auto','auto'],
      id: 'inputBar',
      fill: ['rgba(0,0,0,0)','images/inputBar.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/inputBar_red.png'],
      id: 'inputBar_red',
      rect: ['0px','1px','386','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['0px','0px','386','98','auto','auto'],
      id: 'inputBar_whiteLine',
      fill: ['rgba(0,0,0,0)','images/inputBar_whiteLine.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['82px','26px','222px','46','auto','auto'],
      font: ['굴림',40,'rgb(0,0,0)','normal','none','normal'],
      id: 'inTxt1Copy',
      text: 'D,3,2 레인지 2속',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_inputBar_whiteLine}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '386px']
         ],
         "${_inputBar_red}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_inTxt1}": [
            ["style", "top", '441px'],
            ["style", "left", '1543px'],
            ["style", "width", '222px']
         ],
         "${_inputBar}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_inTxt1Copy}": [
            ["style", "top", '26px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '6px'],
            ["style", "width", '374px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid68", tween: [ "style", "${_inputBar}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid63", tween: [ "style", "${_inputBar_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${_inputBar_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid65", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid66", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 134, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '0', { fromValue: '0.995031'}], position: 200, duration: 133, easing: "easeOutQuad" }         ]
      }
   }
},
"INPARTS4": {
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
      rect: ['0px','1px','386','97','auto','auto'],
      id: 'inputBar',
      fill: ['rgba(0,0,0,0)','images/inputBar.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/inputBar_red.png'],
      id: 'inputBar_red',
      rect: ['0px','1px','386','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['0px','0px','386','98','auto','auto'],
      id: 'inputBar_whiteLine',
      fill: ['rgba(0,0,0,0)','images/inputBar_whiteLine.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['4px','26px','374px','46','auto','auto'],
      font: ['굴림',40,'rgb(0,0,0)','normal','none','normal'],
      id: 'inTxt1Copy',
      text: 'D,3 레인지 3속',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_inputBar_whiteLine}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '386px']
         ],
         "${_inputBar_red}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_inTxt1}": [
            ["style", "top", '441px'],
            ["style", "left", '1543px'],
            ["style", "width", '222px']
         ],
         "${_inputBar}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_inTxt1Copy}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '26px'],
            ["style", "left", '4px'],
            ["style", "width", '374px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid63", tween: [ "style", "${_inputBar_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${_inputBar_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid68", tween: [ "style", "${_inputBar}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid65", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid66", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 134, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '0', { fromValue: '0.995031'}], position: 200, duration: 133, easing: "easeOutQuad" }         ]
      }
   }
},
"INPARTS5": {
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
      rect: ['0px','1px','386','97','auto','auto'],
      id: 'inputBar',
      fill: ['rgba(0,0,0,0)','images/inputBar.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/inputBar_red.png'],
      id: 'inputBar_red',
      rect: ['0px','1px','386','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['0px','0px','386','98','auto','auto'],
      id: 'inputBar_whiteLine',
      fill: ['rgba(0,0,0,0)','images/inputBar_whiteLine.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['8px','26px','370px','46','auto','auto'],
      font: ['굴림',40,'rgb(0,0,0)','normal','none','normal'],
      id: 'inTxt1Copy',
      text: 'D 레인지 4속',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_inputBar_whiteLine}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '386px']
         ],
         "${_inputBar_red}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_inTxt1}": [
            ["style", "top", '441px'],
            ["style", "left", '1543px'],
            ["style", "width", '222px']
         ],
         "${_inputBar}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_inTxt1Copy}": [
            ["style", "top", '26px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '8px'],
            ["style", "width", '370px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid65", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid66", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid68", tween: [ "style", "${_inputBar}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid63", tween: [ "style", "${_inputBar_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${_inputBar_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 134, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '0', { fromValue: '0.995031'}], position: 200, duration: 133, easing: "easeOutQuad" }         ]
      }
   }
},
"INPARTS6": {
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
      rect: ['0px','1px','386','97','auto','auto'],
      id: 'inputBar',
      fill: ['rgba(0,0,0,0)','images/inputBar.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/inputBar_red.png'],
      id: 'inputBar_red',
      rect: ['0px','1px','386','97','auto','auto'],
      display: 'none',
      tag: 'img'
   },
   {
      rect: ['0px','0px','386','98','auto','auto'],
      id: 'inputBar_whiteLine',
      fill: ['rgba(0,0,0,0)','images/inputBar_whiteLine.png'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['2px','26px','376px','46','auto','auto'],
      font: ['굴림',40,'rgb(0,0,0)','normal','none','normal'],
      id: 'inTxt1Copy',
      text: 'R 레인지 후진',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_inputBar_whiteLine}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '386px']
         ],
         "${_inputBar_red}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_inTxt1}": [
            ["style", "top", '441px'],
            ["style", "left", '1543px'],
            ["style", "width", '222px']
         ],
         "${_inputBar}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_inTxt1Copy}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '26px'],
            ["style", "left", '2px'],
            ["style", "width", '376px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid63", tween: [ "style", "${_inputBar_red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${_inputBar_red}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid68", tween: [ "style", "${_inputBar}", "display", 'none', { fromValue: 'block'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid65", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid66", tween: [ "color", "${_inTxt1Copy}", "color", 'rgba(237,30,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 33, duration: 0, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 134, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_inputBar_whiteLine}", "opacity", '0', { fromValue: '0.995031'}], position: 200, duration: 133, easing: "easeOutQuad" }         ]
      }
   }
},
"INPARTS": {
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
      id: 'INPARTS6',
      type: 'rect',
      rect: ['1px','618px','auto','auto','auto','auto']
   },
   {
      id: 'INPARTS5',
      type: 'rect',
      rect: ['1px','496px','auto','auto','auto','auto']
   },
   {
      id: 'INPARTS4',
      type: 'rect',
      rect: ['1px','372px','auto','auto','auto','auto']
   },
   {
      id: 'INPARTS3',
      type: 'rect',
      rect: ['1px','245px','auto','auto','auto','auto']
   },
   {
      id: 'INPARTS2',
      type: 'rect',
      rect: ['690px','164px','auto','auto','auto','auto']
   },
   {
      id: 'INPARTS1',
      type: 'rect',
      rect: ['1px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'INPARTS5',
      symbolName: 'INPARTS5'
   },
   {
      id: 'INPARTS1',
      symbolName: 'INPARTS1'
   },
   {
      id: 'INPARTS3',
      symbolName: 'INPARTS3'
   },
   {
      id: 'INPARTS2',
      symbolName: 'INPARTS2'
   },
   {
      id: 'INPARTS6',
      symbolName: 'INPARTS6'
   },
   {
      id: 'INPARTS4',
      symbolName: 'INPARTS4'
   }   ]
   },
   states: {
      "Base State": {
         "${_INPARTS2}": [
            ["style", "left", '1px'],
            ["style", "top", '125px']
         ],
         "${_INPARTS1}": [
            ["style", "left", '1px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '716px'],
            ["style", "width", '387px']
         ],
         "${_INPARTS3}": [
            ["style", "left", '1px'],
            ["style", "top", '245px']
         ],
         "${_INPARTS6}": [
            ["style", "top", '618px'],
            ["style", "left", '1px']
         ],
         "${_INPARTS4}": [
            ["style", "left", '1px'],
            ["style", "top", '372px']
         ],
         "${_INPARTS5}": [
            ["style", "left", '1px'],
            ["style", "top", '496px']
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
"FLOW_MOVE": {
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
      rect: ['3px','0px','244','25','auto','auto'],
      id: 'flow_back',
      fill: ['rgba(0,0,0,0)','images/flow_back.png'],
      type: 'image',
      tag: 'img'
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/flow_src.png'],
      id: 'flow_src',
      rect: ['0px','5px','414','15','auto','auto'],
      display: 'none',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_flow_back}": [
            ["style", "left", '3px'],
            ["style", "top", '0px']
         ],
         "${_flow_src}": [
            ["style", "top", '5px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '414px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         labels: {
            "gogo": 33
         },
         timeline: [
            { id: "eid80", tween: [ "style", "${_flow_src}", "left", '-40px', { fromValue: '0px'}], position: 33, duration: 967 },
            { id: "eid81", tween: [ "style", "${_flow_src}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "style", "${_flow_src}", "display", 'block', { fromValue: 'none'}], position: 33, duration: 0, easing: "easeOutQuad" }         ]
      }
   }
},
"FLOWS": {
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
      id: 'FLOWOUT1',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWOUT2',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWOUT3',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWOUT4',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWOUT5',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWOUT6',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWIN1',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWIN2',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWIN3',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWIN4',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWIN5',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'FLOWIN6',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'FLOWIN2',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWOUT4',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWIN3',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWOUT2',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWOUT3',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWIN6',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWIN5',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWOUT1',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWOUT6',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWIN1',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWOUT5',
      symbolName: 'FLOW_MOVE'
   },
   {
      id: 'FLOWIN4',
      symbolName: 'FLOW_MOVE'
   }   ]
   },
   states: {
      "Base State": {
         "${_FLOWIN6}": [
            ["style", "left", '607px'],
            ["style", "top", '618px']
         ],
         "${_FLOWOUT6}": [
            ["style", "left", '0px'],
            ["style", "top", '618px']
         ],
         "${_FLOWIN1}": [
            ["style", "left", '607px'],
            ["style", "top", '0px']
         ],
         "${_FLOWIN5}": [
            ["style", "left", '607px'],
            ["style", "top", '494px']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '414px']
         ],
         "${_FLOWIN4}": [
            ["style", "left", '607px'],
            ["style", "top", '371px']
         ],
         "${_FLOWIN2}": [
            ["style", "left", '607px'],
            ["style", "top", '120px']
         ],
         "${_FLOWOUT1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_FLOWOUT5}": [
            ["style", "left", '0px'],
            ["style", "top", '494px']
         ],
         "${_FLOWOUT3}": [
            ["style", "left", '0px'],
            ["style", "top", '247px']
         ],
         "${_FLOWOUT2}": [
            ["style", "left", '0px'],
            ["style", "top", '120px']
         ],
         "${_FLOWIN3}": [
            ["style", "left", '607px'],
            ["style", "top", '247px']
         ],
         "${_FLOWOUT4}": [
            ["style", "left", '0px'],
            ["style", "top", '371px']
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
            { id: "eid94", tween: [ "style", "${_FLOWIN4}", "top", '371px', { fromValue: '371px'}], position: 0, duration: 0 },
            { id: "eid93", tween: [ "style", "${_FLOWIN5}", "top", '494px', { fromValue: '494px'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_FLOWIN3}", "top", '247px', { fromValue: '247px'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "style", "${_FLOWIN6}", "left", '607px', { fromValue: '607px'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_FLOWOUT3}", "top", '247px', { fromValue: '247px'}], position: 0, duration: 0 },
            { id: "eid102", tween: [ "style", "${_FLOWIN2}", "left", '607px', { fromValue: '607px'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_FLOWIN2}", "top", '120px', { fromValue: '120px'}], position: 0, duration: 0 },
            { id: "eid92", tween: [ "style", "${_FLOWIN6}", "top", '618px', { fromValue: '618px'}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "style", "${_FLOWIN5}", "left", '607px', { fromValue: '607px'}], position: 0, duration: 0 },
            { id: "eid83", tween: [ "style", "${_FLOWOUT2}", "top", '120px', { fromValue: '120px'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "style", "${_FLOWOUT4}", "top", '371px', { fromValue: '371px'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_FLOWOUT6}", "top", '618px', { fromValue: '618px'}], position: 0, duration: 0 },
            { id: "eid101", tween: [ "style", "${_FLOWIN3}", "left", '607px', { fromValue: '607px'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_FLOWOUT5}", "top", '494px', { fromValue: '494px'}], position: 0, duration: 0 },
            { id: "eid100", tween: [ "style", "${_FLOWIN4}", "left", '607px', { fromValue: '607px'}], position: 0, duration: 0 },
            { id: "eid99", tween: [ "style", "${_FLOWIN1}", "left", '607px', { fromValue: '607px'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-3795665");
