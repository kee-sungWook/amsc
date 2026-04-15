/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'tire1_shadow',
                type: 'image',
                tag: 'img',
                rect: ['32', '378','1321','597','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tire1_shadow.png"]
            },
            {
                id: 'BODY',
                type: 'image',
                tag: 'img',
                rect: ['29', '254','1371','717','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BODY.png"]
            },
            {
                id: 'r_brake2',
                type: 'image',
                tag: 'img',
                rect: ['532', '427','86','101','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r_brake2.png"]
            },
            {
                id: 'rearWheel',
                type: 'image',
                tag: 'img',
                rect: ['166', '472','399','172','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rearWheel.png"]
            },
            {
                id: 'f_brake2',
                type: 'image',
                tag: 'img',
                rect: ['1172', '629','104','120','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_brake2.png"]
            },
            {
                id: 'frontWheel',
                type: 'image',
                tag: 'img',
                rect: ['748', '667','481','226','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frontWheel.png"]
            },
            {
                id: 'shaft',
                type: 'image',
                tag: 'img',
                rect: ['440', '558','452','210','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shaft.png"]
            },
            {
                id: 'brakeLine',
                type: 'image',
                tag: 'img',
                rect: ['233', '499','1015','377','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"brakeLine.png"]
            },
            {
                id: 'masterCylinder',
                type: 'image',
                tag: 'img',
                rect: ['924', '607','228','102','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"masterCylinder.png"]
            },
            {
                id: 'ABS',
                type: 'image',
                tag: 'img',
                rect: ['1137', '631','96','88','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ABS.png"]
            },
            {
                id: 't_mission',
                type: 'image',
                tag: 'img',
                rect: ['748', '652','224','126','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t_mission.png"]
            },
            {
                id: 'exhaust2',
                type: 'image',
                tag: 'img',
                rect: ['282', '411','490','324','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exhaust2.png"]
            },
            {
                id: 'fuelTank',
                type: 'image',
                tag: 'img',
                rect: ['218', '352','382','246','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fuelTank.png"]
            },
            {
                id: 'blower_heater',
                type: 'image',
                tag: 'img',
                rect: ['838', '493','204','179','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blower_heater.png"]
            },
            {
                id: 'aircon_comp',
                type: 'image',
                tag: 'img',
                rect: ['961', '553','420','222','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"aircon_comp.png"]
            },
            {
                id: 'engine',
                type: 'image',
                tag: 'img',
                rect: ['930', '562','322','294','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"engine.png"]
            },
            {
                id: 'r_brake1',
                type: 'image',
                tag: 'img',
                rect: ['148', '566','94','115','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r_brake1.png"]
            },
            {
                id: 'exhaust1',
                type: 'image',
                tag: 'img',
                rect: ['747', '621','331','212','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exhaust1.png"]
            },
            {
                id: 'piug_ov',
                type: 'image',
                rect: ['978px', '559px','117px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"piug_ov.png",'0px','0px']
            },
            {
                id: 'electric',
                type: 'image',
                tag: 'img',
                rect: ['806', '538','324','391','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"electric.png"]
            },
            {
                id: 'radiator',
                type: 'image',
                tag: 'img',
                rect: ['1097', '610','239','299','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator.png"]
            },
            {
                id: 'f_brake1',
                type: 'image',
                tag: 'img',
                rect: ['740', '792','112','128','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_brake1.png"]
            },
            {
                id: 'tire1',
                type: 'image',
                tag: 'img',
                rect: ['108', '526','792','446','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tire1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_shaft}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_f_brake1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_r_brake1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_fuelTank}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_rearWheel}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_engine}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_masterCylinder}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_exhaust1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_t_mission}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_aircon_comp}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_frontWheel}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_r_brake2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_tire1_shadow}": [
                ["style", "opacity", '0']
            ],
            "${_blower_heater}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_exhaust2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_f_brake2}": [
                ["style", "opacity", '0']
            ],
            "${_ABS}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_electric}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_BODY}": [
                ["style", "opacity", '0.01']
            ],
            "${_tire1}": [
                ["style", "left", '106px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_brakeLine}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_radiator}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_piug_ov}": [
                ["style", "top", '559px'],
                ["style", "opacity", '0'],
                ["style", "left", '978px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 881,
            autoPlay: true,
            timeline: [
                { id: "eid216", tween: [ "transform", "${_r_brake1}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid180", tween: [ "style", "${_fuelTank}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid320", tween: [ "style", "${_fuelTank}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid30", tween: [ "transform", "${_r_brake2}", "scaleX", '1', { fromValue: '1.1'}], position: 466, duration: 214 },
                { id: "eid290", tween: [ "style", "${_frontWheel}", "opacity", '0.7', { fromValue: '0'}], position: 465, duration: 215 },
                { id: "eid304", tween: [ "style", "${_frontWheel}", "opacity", '0.4', { fromValue: '0.699999988079071'}], position: 680, duration: 34 },
                { id: "eid158", tween: [ "style", "${_ABS}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid314", tween: [ "style", "${_ABS}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid208", tween: [ "style", "${_engine}", "opacity", '0.7', { fromValue: '0'}], position: 467, duration: 248 },
                { id: "eid224", tween: [ "transform", "${_exhaust1}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid174", tween: [ "style", "${_exhaust2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid318", tween: [ "style", "${_exhaust2}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid220", tween: [ "style", "${_exhaust1}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid339", tween: [ "style", "${_exhaust1}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid178", tween: [ "transform", "${_exhaust2}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid146", tween: [ "style", "${_tire1}", "left", '108px', { fromValue: '106px'}], position: 0, duration: 248 },
                { id: "eid6", tween: [ "style", "${_BODY}", "opacity", '0.99', { fromValue: '0.01'}], position: 0, duration: 248 },
                { id: "eid67", tween: [ "style", "${_f_brake2}", "opacity", '0.8', { fromValue: '0'}], position: 465, duration: 215 },
                { id: "eid302", tween: [ "style", "${_f_brake2}", "opacity", '0.4', { fromValue: '0.800000'}], position: 680, duration: 34 },
                { id: "eid234", tween: [ "transform", "${_radiator}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid148", tween: [ "transform", "${_brakeLine}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid166", tween: [ "transform", "${_t_mission}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid125", tween: [ "transform", "${_shaft}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid232", tween: [ "style", "${_radiator}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid337", tween: [ "style", "${_radiator}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid248", tween: [ "transform", "${_f_brake1}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid198", tween: [ "transform", "${_aircon_comp}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid156", tween: [ "transform", "${_masterCylinder}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid39", tween: [ "style", "${_rearWheel}", "opacity", '0.8', { fromValue: '0'}], position: 467, duration: 214 },
                { id: "eid298", tween: [ "style", "${_rearWheel}", "opacity", '0.4', { fromValue: '0.800000011920929'}], position: 680, duration: 34 },
                { id: "eid218", tween: [ "transform", "${_r_brake1}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid355", tween: [ "style", "${_piug_ov}", "opacity", '1', { fromValue: '0'}], position: 633, duration: 248 },
                { id: "eid222", tween: [ "transform", "${_exhaust1}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid210", tween: [ "transform", "${_engine}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 248 },
                { id: "eid109", tween: [ "transform", "${_frontWheel}", "scaleY", '1', { fromValue: '1.1'}], position: 465, duration: 215 },
                { id: "eid127", tween: [ "transform", "${_shaft}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid37", tween: [ "style", "${_r_brake2}", "opacity", '0.8', { fromValue: '0'}], position: 466, duration: 214 },
                { id: "eid295", tween: [ "style", "${_r_brake2}", "opacity", '0.4', { fromValue: '0.800000011920929'}], position: 680, duration: 33 },
                { id: "eid230", tween: [ "transform", "${_electric}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 248 },
                { id: "eid214", tween: [ "style", "${_r_brake1}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid340", tween: [ "style", "${_r_brake1}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid164", tween: [ "style", "${_t_mission}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid316", tween: [ "style", "${_t_mission}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid154", tween: [ "transform", "${_masterCylinder}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid150", tween: [ "transform", "${_brakeLine}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid184", tween: [ "transform", "${_fuelTank}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid160", tween: [ "transform", "${_ABS}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid144", tween: [ "style", "${_brakeLine}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid310", tween: [ "style", "${_brakeLine}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid200", tween: [ "transform", "${_aircon_comp}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid94", tween: [ "transform", "${_rearWheel}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 214 },
                { id: "eid12", tween: [ "style", "${_tire1_shadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 248 },
                { id: "eid228", tween: [ "transform", "${_electric}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 248 },
                { id: "eid196", tween: [ "style", "${_aircon_comp}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid327", tween: [ "style", "${_aircon_comp}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid182", tween: [ "transform", "${_fuelTank}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid162", tween: [ "transform", "${_ABS}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid226", tween: [ "style", "${_electric}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 248 },
                { id: "eid244", tween: [ "style", "${_f_brake1}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid343", tween: [ "style", "${_f_brake1}", "opacity", '0.5', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid108", tween: [ "transform", "${_frontWheel}", "scaleX", '1', { fromValue: '1.1'}], position: 465, duration: 215 },
                { id: "eid212", tween: [ "transform", "${_engine}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 248 },
                { id: "eid95", tween: [ "transform", "${_rearWheel}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 214 },
                { id: "eid168", tween: [ "transform", "${_t_mission}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid9", tween: [ "style", "${_tire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 248 },
                { id: "eid152", tween: [ "style", "${_masterCylinder}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid312", tween: [ "style", "${_masterCylinder}", "opacity", '0.4', { fromValue: '1'}], position: 682, duration: 32 },
                { id: "eid129", tween: [ "style", "${_shaft}", "opacity", '0.8', { fromValue: '0'}], position: 467, duration: 215 },
                { id: "eid308", tween: [ "style", "${_shaft}", "opacity", '0.4', { fromValue: '0.800000011920929'}], position: 682, duration: 32 },
                { id: "eid236", tween: [ "transform", "${_radiator}", "scaleY", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid246", tween: [ "transform", "${_f_brake1}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 },
                { id: "eid32", tween: [ "transform", "${_r_brake2}", "scaleY", '1', { fromValue: '1.1'}], position: 466, duration: 214 },
                { id: "eid176", tween: [ "transform", "${_exhaust2}", "scaleX", '1', { fromValue: '1.1'}], position: 467, duration: 215 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-108052827");
