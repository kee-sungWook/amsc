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
            id:'shadow',
            type:'image',
            tag:'img',
            rect:['43','568','989','401','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow.png"]
         },
         {
            id:'tire1_inner',
            type:'image',
            tag:'img',
            rect:['149','382','1193','539','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tire1_inner.png"]
         },
         {
            id:'exhaust2',
            type:'image',
            tag:'img',
            rect:['289','414','483','319','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"exhaust2.png"]
         },
         {
            id:'fuelTank',
            type:'image',
            tag:'img',
            rect:['226','356','375','242','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuelTank.png"]
         },
         {
            id:'canister',
            type:'image',
            tag:'img',
            rect:['915','559','44','79','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"canister.png"]
         },
         {
            id:'fuelLine',
            type:'image',
            tag:'img',
            rect:['454','441','605','263','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuelLine.png"]
         },
         {
            id:'fuelPump',
            type:'image',
            tag:'img',
            rect:['445','439','16','25','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuelPump.png"]
         },
         {
            id:'fuelFilter',
            type:'image',
            tag:'img',
            rect:['1035','602','39','85','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuelFilter.png"]
         },
         {
            id:'airCleaner',
            type:'image',
            tag:'img',
            rect:['1021','546','328','139','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"airCleaner.png"]
         },
         {
            id:'distributor',
            type:'image',
            tag:'img',
            rect:['874','579','51','96','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"distributor.png"]
         },
         {
            id:'startMotor',
            type:'image',
            tag:'img',
            rect:['867','652','109','88','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"startMotor.png"]
         },
         {
            id:'fuelTank-1',
            type:'image',
            tag:'img',
            rect:['226','356','375','242','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuelTank-1.png"]
         },
         {
            id:'canister-1',
            type:'image',
            tag:'img',
            rect:['915','559','44','79','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"canister-1.png"]
         },
         {
            id:'fuelLine-1',
            type:'image',
            tag:'img',
            rect:['454','441','605','263','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuelLine-1.png"]
         },
         {
            id:'fuelPump-1',
            type:'image',
            tag:'img',
            rect:['445','439','16','25','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuelPump-1.png"]
         },
         {
            id:'fuelFilter-1',
            type:'image',
            tag:'img',
            rect:['1035','602','39','85','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuelFilter-1.png"]
         },
         {
            id:'engine',
            type:'image',
            tag:'img',
            rect:['926','563','317','289','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"engine.png"]
         },
         {
            id:'exhaust1',
            type:'image',
            tag:'img',
            rect:['746','621','326','209','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"exhaust1.png"]
         },
         {
            id:'generator',
            type:'image',
            tag:'img',
            rect:['1017','715','106','91','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"generator.png"]
         },
         {
            id:'radiator',
            type:'image',
            tag:'img',
            rect:['1090','610','236','295','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"radiator.png"]
         },
         {
            id:'battery',
            type:'image',
            tag:'img',
            rect:['828','664','197','260','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"battery.png"]
         },
         {
            id:'spk_plug',
            type:'image',
            tag:'img',
            rect:['974','561','114','84','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"spk_plug.png"]
         },
         {
            id:'spk_cable',
            type:'image',
            tag:'img',
            rect:['885','539','204','71','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"spk_cable.png"]
         },
         {
            id:'spk_coil',
            type:'image',
            tag:'img',
            rect:['804','558','100','123','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"spk_coil.png"]
         },
         {
            id:'BODY',
            type:'image',
            tag:'img',
            rect:['40','260','1349','706','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"BODY.png"]
         },
         {
            id:'tire1',
            type:'image',
            tag:'img',
            rect:['118','527','779','439','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tire1.png"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_shadow}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_fuelTank-1}": [
            ["style", "opacity", '0']
         ],
         "${_canister-1}": [
            ["style", "opacity", '0']
         ],
         "${_spk_plug}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_fuelFilter}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_canister}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_startMotor}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_engine}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_fuelLine-1}": [
            ["style", "opacity", '0']
         ],
         "${_exhaust1}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_exhaust2}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_airCleaner}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_generator}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_fuelPump-1}": [
            ["style", "opacity", '0']
         ],
         "${_fuelPump}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_spk_coil}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_fuelTank}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_spk_cable}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_tire1_inner}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1']
         ],
         "${_BODY}": [
            ["style", "opacity", '0.23770491803279']
         ],
         "${_fuelLine}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_fuelFilter-1}": [
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1230px'],
            ["style", "width", '1430px']
         ],
         "${_distributor}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_radiator}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ],
         "${_battery}": [
            ["transform", "scaleX", '1.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 974,
         autoPlay: true,
         timeline: [
            { id: "eid30", tween: [ "transform", "${_fuelFilter}", "scaleX", '1', { fromValue: '1.1'}], position: 208, duration: 250 },
            { id: "eid124", tween: [ "style", "${_fuelTank}", "opacity", '0.7', { fromValue: '0'}], position: 42, duration: 250 },
            { id: "eid8", tween: [ "style", "${_fuelLine-1}", "opacity", '1', { fromValue: '0'}], position: 724, duration: 250 },
            { id: "eid98", tween: [ "style", "${_fuelFilter}", "opacity", '0.7', { fromValue: '0'}], position: 208, duration: 250 },
            { id: "eid108", tween: [ "style", "${_engine}", "opacity", '0.5', { fromValue: '0'}], position: 375, duration: 250 },
            { id: "eid60", tween: [ "transform", "${_exhaust1}", "scaleY", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
            { id: "eid110", tween: [ "style", "${_exhaust2}", "opacity", '0.7', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid118", tween: [ "style", "${_battery}", "opacity", '0.7', { fromValue: '0'}], position: 542, duration: 250 },
            { id: "eid56", tween: [ "transform", "${_exhaust2}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
            { id: "eid102", tween: [ "style", "${_spk_plug}", "opacity", '0.5', { fromValue: '0'}], position: 583, duration: 250 },
            { id: "eid4", tween: [ "style", "${_fuelFilter-1}", "opacity", '1', { fromValue: '0'}], position: 724, duration: 250 },
            { id: "eid94", tween: [ "style", "${_fuelPump}", "opacity", '0.7', { fromValue: '0'}], position: 167, duration: 250 },
            { id: "eid100", tween: [ "style", "${_spk_cable}", "opacity", '0.5', { fromValue: '0'}], position: 625, duration: 250 },
            { id: "eid126", tween: [ "style", "${_generator}", "opacity", '0.7', { fromValue: '0'}], position: 458, duration: 250 },
            { id: "eid62", tween: [ "transform", "${_radiator}", "scaleX", '1', { fromValue: '1.1'}], position: 500, duration: 250 },
            { id: "eid92", tween: [ "style", "${_fuelLine}", "opacity", '0.7', { fromValue: '0'}], position: 125, duration: 250 },
            { id: "eid54", tween: [ "transform", "${_exhaust2}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
            { id: "eid50", tween: [ "transform", "${_engine}", "scaleX", '1', { fromValue: '1.1'}], position: 375, duration: 250 },
            { id: "eid114", tween: [ "style", "${_radiator}", "opacity", '0.81', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid10", tween: [ "style", "${_canister-1}", "opacity", '1', { fromValue: '0'}], position: 724, duration: 250 },
            { id: "eid42", tween: [ "transform", "${_spk_coil}", "scaleX", '1', { fromValue: '1.1'}], position: 667, duration: 250 },
            { id: "eid32", tween: [ "transform", "${_fuelFilter}", "scaleY", '1', { fromValue: '1.1'}], position: 208, duration: 250 },
            { id: "eid44", tween: [ "transform", "${_spk_coil}", "scaleY", '1', { fromValue: '1.1'}], position: 667, duration: 250 },
            { id: "eid68", tween: [ "transform", "${_airCleaner}", "scaleY", '1', { fromValue: '1.1'}], position: 250, duration: 250 },
            { id: "eid96", tween: [ "style", "${_shadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid28", tween: [ "transform", "${_shadow}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
            { id: "eid74", tween: [ "transform", "${_startMotor}", "scaleX", '1', { fromValue: '1.1'}], position: 333, duration: 250 },
            { id: "eid58", tween: [ "transform", "${_exhaust1}", "scaleX", '1', { fromValue: '1.1'}], position: 417, duration: 250 },
            { id: "eid120", tween: [ "style", "${_startMotor}", "opacity", '0.7', { fromValue: '0'}], position: 333, duration: 250 },
            { id: "eid6", tween: [ "style", "${_fuelPump-1}", "opacity", '1', { fromValue: '0'}], position: 724, duration: 250 },
            { id: "eid34", tween: [ "transform", "${_spk_cable}", "scaleX", '1', { fromValue: '1.1'}], position: 625, duration: 250 },
            { id: "eid38", tween: [ "transform", "${_spk_plug}", "scaleX", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
            { id: "eid104", tween: [ "style", "${_spk_coil}", "opacity", '0.5', { fromValue: '0'}], position: 667, duration: 250 },
            { id: "eid24", tween: [ "transform", "${_fuelPump}", "scaleY", '1', { fromValue: '1.1'}], position: 167, duration: 250 },
            { id: "eid72", tween: [ "transform", "${_battery}", "scaleY", '1', { fromValue: '1.1'}], position: 542, duration: 250 },
            { id: "eid14", tween: [ "transform", "${_canister}", "scaleX", '1', { fromValue: '1.1'}], position: 83, duration: 250 },
            { id: "eid12", tween: [ "style", "${_fuelTank-1}", "opacity", '1', { fromValue: '0'}], position: 724, duration: 250 },
            { id: "eid84", tween: [ "transform", "${_fuelTank}", "scaleY", '1', { fromValue: '1.1'}], position: 42, duration: 250 },
            { id: "eid66", tween: [ "transform", "${_airCleaner}", "scaleX", '1', { fromValue: '1.1'}], position: 250, duration: 250 },
            { id: "eid70", tween: [ "transform", "${_battery}", "scaleX", '1', { fromValue: '1.1'}], position: 542, duration: 250 },
            { id: "eid80", tween: [ "transform", "${_distributor}", "scaleY", '1', { fromValue: '1.1'}], position: 292, duration: 250 },
            { id: "eid40", tween: [ "transform", "${_spk_plug}", "scaleY", '1', { fromValue: '1.1'}], position: 583, duration: 250 },
            { id: "eid78", tween: [ "transform", "${_distributor}", "scaleX", '1', { fromValue: '1.1'}], position: 292, duration: 250 },
            { id: "eid116", tween: [ "style", "${_airCleaner}", "opacity", '0.7', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid26", tween: [ "transform", "${_shadow}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
            { id: "eid82", tween: [ "transform", "${_fuelTank}", "scaleX", '1', { fromValue: '1.1'}], position: 42, duration: 250 },
            { id: "eid36", tween: [ "transform", "${_spk_cable}", "scaleY", '1', { fromValue: '1.1'}], position: 625, duration: 250 },
            { id: "eid88", tween: [ "transform", "${_generator}", "scaleY", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
            { id: "eid2", tween: [ "style", "${_BODY}", "opacity", '1', { fromValue: '0.23770491803279'}], position: 0, duration: 250 },
            { id: "eid16", tween: [ "transform", "${_canister}", "scaleY", '1', { fromValue: '1.1'}], position: 83, duration: 250 },
            { id: "eid20", tween: [ "transform", "${_fuelLine}", "scaleY", '1', { fromValue: '1.1'}], position: 125, duration: 250 },
            { id: "eid52", tween: [ "transform", "${_engine}", "scaleY", '1', { fromValue: '1.1'}], position: 375, duration: 250 },
            { id: "eid112", tween: [ "style", "${_exhaust1}", "opacity", '0.7', { fromValue: '0'}], position: 417, duration: 250 },
            { id: "eid76", tween: [ "transform", "${_startMotor}", "scaleY", '1', { fromValue: '1.1'}], position: 333, duration: 250 },
            { id: "eid122", tween: [ "style", "${_distributor}", "opacity", '0.5', { fromValue: '0'}], position: 292, duration: 250 },
            { id: "eid18", tween: [ "transform", "${_fuelLine}", "scaleX", '1', { fromValue: '1.1'}], position: 125, duration: 250 },
            { id: "eid64", tween: [ "transform", "${_radiator}", "scaleY", '1', { fromValue: '1.1'}], position: 500, duration: 250 },
            { id: "eid86", tween: [ "transform", "${_generator}", "scaleX", '1', { fromValue: '1.1'}], position: 458, duration: 250 },
            { id: "eid22", tween: [ "transform", "${_fuelPump}", "scaleX", '1', { fromValue: '1.1'}], position: 167, duration: 250 },
            { id: "eid90", tween: [ "style", "${_canister}", "opacity", '0.7', { fromValue: '0'}], position: 83, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-27298247");
