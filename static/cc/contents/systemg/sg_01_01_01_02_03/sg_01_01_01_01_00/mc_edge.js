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
            id:'engineBody',
            type:'image',
            tag:'img',
            rect:['879','91','487','573','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"engineBody.png"]
         },
         {
            id:'thermostat4',
            type:'image',
            tag:'img',
            rect:['415','271','104','72','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"thermostat4.png"]
         },
         {
            id:'thermostat3',
            type:'image',
            tag:'img',
            rect:['521','296','59','64','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"thermostat3.png"]
         },
         {
            id:'thermostat2',
            type:'image',
            tag:'img',
            rect:['584','311','121','81','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"thermostat2.png"]
         },
         {
            id:'thermostat1',
            type:'image',
            tag:'img',
            rect:['693','355','59','64','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"thermostat1.png"]
         },
         {
            id:'w_pump',
            type:'image',
            tag:'img',
            rect:['757','371','194','164','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"w_pump.png"]
         },
         {
            id:'w_pump_pulley',
            type:'image',
            tag:'img',
            rect:['667','460','123','147','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"w_pump_pulley.png"]
         },
         {
            id:'drive_belt',
            type:'image',
            tag:'img',
            rect:['517','481','263','296','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"drive_belt.png"]
         },
         {
            id:'c_fan',
            type:'image',
            tag:'img',
            rect:['339','505','302','349','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"c_fan.png"]
         },
         {
            id:'c_fan_clutch',
            type:'image',
            tag:'img',
            rect:['569','516','127','146','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"c_fan_clutch.png"]
         },
         {
            id:'c_fan_clutch-1',
            type:'image',
            tag:'img',
            rect:['569','516','127','146','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"c_fan_clutch-1.png"]
         },
         {
            id:'c_fan-1',
            type:'image',
            tag:'img',
            rect:['339','505','302','349','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"c_fan-1.png"]
         },
         {
            id:'radiator',
            type:'image',
            tag:'img',
            rect:['64px','600px','413','530','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"radiator.png"]
         },
         {
            id:'BUDONGAEK',
            type:'image',
            tag:'img',
            rect:['251px','692px','756','446','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"BUDONGAEK.png"]
         },
         {
            id:'radiator_cap',
            type:'image',
            tag:'img',
            rect:['216px','658px','54','39','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"radiator_cap.png"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_c_fan}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0.609375'],
            ["transform", "scaleY", '1.1']
         ],
         "${_thermostat3}": [
            ["style", "top", '486px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '486px']
         ],
         "${_radiator}": [
            ["style", "top", '453px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '280px']
         ],
         "${_c_fan_clutch}": [
            ["style", "left", '506px'],
            ["style", "top", '572px']
         ],
         "${_thermostat2}": [
            ["style", "top", '491px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '491px']
         ],
         "${_w_pump}": [
            ["style", "top", '522px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '558px']
         ],
         "${_w_pump_pulley}": [
            ["style", "top", '545px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '565px']
         ],
         "${_thermostat1}": [
            ["transform", "scaleX", '1.1'],
            ["style", "top", '513px'],
            ["style", "left", '551px'],
            ["transform", "scaleY", '1.1']
         ],
         "${_c_fan_clutch-1}": [
            ["style", "top", '572px'],
            ["style", "opacity", '0'],
            ["style", "left", '506px']
         ],
         "${_drive_belt}": [
            ["style", "left", '415px'],
            ["style", "top", '566px']
         ],
         "${_c_fan-1}": [
            ["style", "opacity", '0']
         ],
         "${_thermostat4}": [
            ["style", "top", '482px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '443px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1230px'],
            ["style", "width", '1430px']
         ],
         "${_BUDONGAEK}": [
            ["style", "top", '545px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '467px']
         ],
         "${_engineBody}": [
            ["style", "top", '244px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '558px']
         ],
         "${_radiator_cap}": [
            ["style", "top", '511px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["style", "left", '432px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 785,
         autoPlay: true,
         timeline: [
            { id: "eid95", tween: [ "transform", "${_thermostat1}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid109", tween: [ "transform", "${_thermostat3}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid40", tween: [ "style", "${_thermostat2}", "top", '311px', { fromValue: '491px'}], position: 476, duration: 233 },
            { id: "eid36", tween: [ "style", "${_thermostat1}", "top", '355px', { fromValue: '513px'}], position: 476, duration: 233 },
            { id: "eid107", tween: [ "transform", "${_thermostat3}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid82", tween: [ "transform", "${_w_pump}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid76", tween: [ "style", "${_BUDONGAEK}", "opacity", '1', { fromValue: '0'}], position: 84, duration: 183 },
            { id: "eid102", tween: [ "transform", "${_thermostat2}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid116", tween: [ "transform", "${_thermostat4}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid44", tween: [ "style", "${_thermostat3}", "top", '296px', { fromValue: '486px'}], position: 476, duration: 233 },
            { id: "eid164", tween: [ "style", "${_c_fan_clutch-1}", "opacity", '1', { fromValue: '0'}], position: 709, duration: 76 },
            { id: "eid16", tween: [ "style", "${_c_fan_clutch-1}", "top", '516px', { fromValue: '572px'}], position: 709, duration: 0 },
            { id: "eid80", tween: [ "transform", "${_w_pump}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid105", tween: [ "style", "${_thermostat3}", "left", '486px', { fromValue: '486px'}], position: 84, duration: 0 },
            { id: "eid42", tween: [ "style", "${_thermostat3}", "left", '521px', { fromValue: '486px'}], position: 476, duration: 233 },
            { id: "eid64", tween: [ "transform", "${_radiator}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid14", tween: [ "style", "${_c_fan_clutch-1}", "left", '569px', { fromValue: '506px'}], position: 709, duration: 0 },
            { id: "eid156", tween: [ "style", "${_c_fan_clutch-1}", "left", '569px', { fromValue: '569px'}], position: 785, duration: 0 },
            { id: "eid74", tween: [ "transform", "${_BUDONGAEK}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid129", tween: [ "transform", "${_c_fan}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid68", tween: [ "style", "${_radiator}", "opacity", '1', { fromValue: '0'}], position: 84, duration: 183 },
            { id: "eid118", tween: [ "style", "${_thermostat4}", "opacity", '1', { fromValue: '0'}], position: 84, duration: 183 },
            { id: "eid24", tween: [ "style", "${_drive_belt}", "top", '481px', { fromValue: '566px'}], position: 476, duration: 233 },
            { id: "eid92", tween: [ "style", "${_w_pump_pulley}", "opacity", '1', { fromValue: '0'}], position: 84, duration: 183 },
            { id: "eid143", tween: [ "style", "${_c_fan-1}", "opacity", '1', { fromValue: '0'}], position: 709, duration: 76 },
            { id: "eid123", tween: [ "transform", "${_radiator_cap}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid54", tween: [ "style", "${_engineBody}", "left", '558px', { fromValue: '558px'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_engineBody}", "left", '558px', { fromValue: '558px'}], position: 183, duration: 0 },
            { id: "eid50", tween: [ "style", "${_engineBody}", "left", '879px', { fromValue: '558px'}], position: 476, duration: 233 },
            { id: "eid28", tween: [ "style", "${_w_pump_pulley}", "top", '460px', { fromValue: '545px'}], position: 476, duration: 233 },
            { id: "eid20", tween: [ "style", "${_c_fan_clutch}", "top", '516px', { fromValue: '572px'}], position: 476, duration: 233 },
            { id: "eid72", tween: [ "transform", "${_BUDONGAEK}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid90", tween: [ "transform", "${_w_pump_pulley}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid8", tween: [ "style", "${_radiator_cap}", "top", '658px', { fromValue: '511px'}], position: 476, duration: 233 },
            { id: "eid112", tween: [ "style", "${_thermostat4}", "left", '443px', { fromValue: '443px'}], position: 84, duration: 0 },
            { id: "eid46", tween: [ "style", "${_thermostat4}", "left", '415px', { fromValue: '443px'}], position: 476, duration: 233 },
            { id: "eid12", tween: [ "style", "${_radiator}", "top", '600px', { fromValue: '453px'}], position: 476, duration: 233 },
            { id: "eid62", tween: [ "style", "${_radiator}", "left", '280px', { fromValue: '280px'}], position: 84, duration: 0 },
            { id: "eid61", tween: [ "style", "${_radiator}", "left", '280px', { fromValue: '280px'}], position: 267, duration: 0 },
            { id: "eid10", tween: [ "style", "${_radiator}", "left", '64px', { fromValue: '280px'}], position: 476, duration: 233 },
            { id: "eid56", tween: [ "transform", "${_engineBody}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 183 },
            { id: "eid119", tween: [ "style", "${_radiator_cap}", "left", '432px', { fromValue: '432px'}], position: 84, duration: 0 },
            { id: "eid6", tween: [ "style", "${_radiator_cap}", "left", '216px', { fromValue: '432px'}], position: 476, duration: 233 },
            { id: "eid22", tween: [ "style", "${_drive_belt}", "left", '517px', { fromValue: '415px'}], position: 476, duration: 233 },
            { id: "eid97", tween: [ "transform", "${_thermostat1}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid18", tween: [ "style", "${_c_fan_clutch}", "left", '569px', { fromValue: '506px'}], position: 476, duration: 233 },
            { id: "eid4", tween: [ "style", "${_BUDONGAEK}", "top", '692px', { fromValue: '545px'}], position: 476, duration: 233 },
            { id: "eid78", tween: [ "style", "${_w_pump}", "left", '558px', { fromValue: '558px'}], position: 84, duration: 0 },
            { id: "eid77", tween: [ "style", "${_w_pump}", "left", '558px', { fromValue: '558px'}], position: 267, duration: 0 },
            { id: "eid30", tween: [ "style", "${_w_pump}", "left", '757px', { fromValue: '558px'}], position: 476, duration: 233 },
            { id: "eid60", tween: [ "style", "${_engineBody}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 183 },
            { id: "eid88", tween: [ "transform", "${_w_pump_pulley}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid48", tween: [ "style", "${_thermostat4}", "top", '271px', { fromValue: '482px'}], position: 476, duration: 233 },
            { id: "eid52", tween: [ "style", "${_engineBody}", "top", '91px', { fromValue: '244px'}], position: 476, duration: 233 },
            { id: "eid98", tween: [ "style", "${_thermostat2}", "left", '491px', { fromValue: '491px'}], position: 84, duration: 0 },
            { id: "eid38", tween: [ "style", "${_thermostat2}", "left", '584px', { fromValue: '491px'}], position: 476, duration: 233 },
            { id: "eid58", tween: [ "transform", "${_engineBody}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 183 },
            { id: "eid114", tween: [ "transform", "${_thermostat4}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid32", tween: [ "style", "${_w_pump}", "top", '371px', { fromValue: '522px'}], position: 476, duration: 233 },
            { id: "eid131", tween: [ "transform", "${_c_fan}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid70", tween: [ "style", "${_BUDONGAEK}", "left", '467px', { fromValue: '467px'}], position: 84, duration: 0 },
            { id: "eid69", tween: [ "style", "${_BUDONGAEK}", "left", '467px', { fromValue: '467px'}], position: 267, duration: 0 },
            { id: "eid2", tween: [ "style", "${_BUDONGAEK}", "left", '251px', { fromValue: '467px'}], position: 476, duration: 233 },
            { id: "eid100", tween: [ "transform", "${_thermostat2}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid86", tween: [ "style", "${_w_pump_pulley}", "left", '565px', { fromValue: '565px'}], position: 84, duration: 0 },
            { id: "eid85", tween: [ "style", "${_w_pump_pulley}", "left", '565px', { fromValue: '565px'}], position: 267, duration: 0 },
            { id: "eid26", tween: [ "style", "${_w_pump_pulley}", "left", '667px', { fromValue: '565px'}], position: 476, duration: 233 },
            { id: "eid121", tween: [ "transform", "${_radiator_cap}", "scaleX", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid111", tween: [ "style", "${_thermostat3}", "opacity", '1', { fromValue: '0'}], position: 84, duration: 183 },
            { id: "eid125", tween: [ "style", "${_radiator_cap}", "opacity", '1', { fromValue: '0'}], position: 84, duration: 183 },
            { id: "eid84", tween: [ "style", "${_w_pump}", "opacity", '1', { fromValue: '0'}], position: 84, duration: 183 },
            { id: "eid66", tween: [ "transform", "${_radiator}", "scaleY", '1', { fromValue: '1.1'}], position: 84, duration: 183 },
            { id: "eid93", tween: [ "style", "${_thermostat1}", "left", '551px', { fromValue: '551px'}], position: 84, duration: 0 },
            { id: "eid34", tween: [ "style", "${_thermostat1}", "left", '693px', { fromValue: '551px'}], position: 476, duration: 233 },
            { id: "eid104", tween: [ "style", "${_thermostat2}", "opacity", '1', { fromValue: '0'}], position: 84, duration: 183 },
            { id: "eid141", tween: [ "style", "${_c_fan}", "opacity", '1', { fromValue: '0'}], position: 84, duration: 183 }         ]
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
})(jQuery, AdobeEdge, "EDGE-18834027");
