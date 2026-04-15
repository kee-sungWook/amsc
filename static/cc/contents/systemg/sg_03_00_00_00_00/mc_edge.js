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
                id: 'SELECT_r_brake2',
                type: 'image',
                tag: 'img',
                rect: ['532px', '428px','86','101','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_r_brake2.png"]
            },
            {
                id: 'rearWheel',
                type: 'image',
                tag: 'img',
                rect: ['166', '472','399','172','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rearWheel.png"]
            },
            {
                id: 'r_susp2',
                type: 'image',
                tag: 'img',
                rect: ['496', '304','51','189','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r_susp2.png"]
            },
            {
                id: 'f_brake2',
                type: 'image',
                tag: 'img',
                rect: ['1172', '629','104','120','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_brake2.png"]
            },
            {
                id: 'SELECT_f_brake2',
                type: 'image',
                tag: 'img',
                rect: ['1172px', '630px','104','120','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_f_brake2.png"]
            },
            {
                id: 'frontWheel',
                type: 'image',
                tag: 'img',
                rect: ['748', '667','481','226','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frontWheel.png"]
            },
            {
                id: 'f_susp2',
                type: 'image',
                tag: 'img',
                rect: ['1106', '484','70','230','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_susp2.png"]
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
                id: 'SELECT_brakeLine',
                type: 'image',
                tag: 'img',
                rect: ['233px', '500px','1015','377','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_brakeLine.png"]
            },
            {
                id: 'masterCylinder',
                type: 'image',
                tag: 'img',
                rect: ['924', '607','228','102','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"masterCylinder.png"]
            },
            {
                id: 'SELECT_masterCylinder',
                type: 'image',
                tag: 'img',
                rect: ['924px', '608px','228','102','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_masterCylinder.png"]
            },
            {
                id: 'ABS',
                type: 'image',
                tag: 'img',
                rect: ['1137', '631','96','88','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ABS.png"]
            },
            {
                id: 'SELECT_ABS',
                type: 'image',
                tag: 'img',
                rect: ['1137px', '632px','96','88','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_ABS.png"]
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
                id: 'r_susp1',
                type: 'image',
                tag: 'img',
                rect: ['210', '388','60','227','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r_susp1.png"]
            },
            {
                id: 'steering',
                type: 'image',
                tag: 'img',
                rect: ['875', '385','269','328','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"steering.png"]
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
                id: 'airCleaner',
                type: 'image',
                tag: 'img',
                rect: ['1026', '545','334','142','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"airCleaner.png"]
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
                id: 'SELECT_r_brake1',
                type: 'image',
                tag: 'img',
                rect: ['148px', '567px','94','115','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_r_brake1.png"]
            },
            {
                id: 'exhaust1',
                type: 'image',
                tag: 'img',
                rect: ['747', '621','331','212','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exhaust1.png"]
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
                id: 'f_susp1',
                type: 'image',
                tag: 'img',
                rect: ['803', '592','71','257','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_susp1.png"]
            },
            {
                id: 'f_brake1',
                type: 'image',
                tag: 'img',
                rect: ['740', '792','112','128','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f_brake1.png"]
            },
            {
                id: 'SELECT_f_brake1',
                type: 'image',
                tag: 'img',
                rect: ['740px', '793px','112','128','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_f_brake1.png"]
            },
            {
                id: 'aircon_condenser',
                type: 'image',
                tag: 'img',
                rect: ['1136', '677','202','223','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"aircon_condenser.png"]
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
            "${_SELECT_f_brake1}": [
                ["style", "top", '793px'],
                ["style", "opacity", '0'],
                ["style", "left", '740px']
            ],
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
            "${_blower_heater}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_tire1}": [
                ["style", "left", '106px'],
                ["style", "opacity", '0']
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
            "${_r_brake2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_SELECT_r_brake2}": [
                ["style", "top", '428px'],
                ["style", "opacity", '0'],
                ["style", "left", '532px']
            ],
            "${_SELECT_ABS}": [
                ["style", "top", '632px'],
                ["style", "opacity", '0'],
                ["style", "left", '1137px']
            ],
            "${_electric}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_SELECT_f_brake2}": [
                ["style", "top", '630px'],
                ["style", "opacity", '0'],
                ["style", "left", '1172px']
            ],
            "${_SELECT_r_brake1}": [
                ["style", "top", '567px'],
                ["style", "opacity", '0'],
                ["style", "left", '148px']
            ],
            "${_f_susp1}": [
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
            "${_tire1_shadow}": [
                ["style", "opacity", '0']
            ],
            "${_BODY}": [
                ["style", "opacity", '0.01']
            ],
            "${_frontWheel}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_exhaust2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_SELECT_masterCylinder}": [
                ["style", "top", '608px'],
                ["style", "opacity", '0'],
                ["style", "left", '924px']
            ],
            "${_airCleaner}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_aircon_condenser}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_t_mission}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_r_susp1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_f_susp2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_f_brake2}": [
                ["style", "opacity", '0']
            ],
            "${_SELECT_brakeLine}": [
                ["style", "top", '500px'],
                ["style", "opacity", '0'],
                ["style", "left", '233px']
            ],
            "${_radiator}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_aircon_comp}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_ABS}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_brakeLine}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_r_susp2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_steering}": [
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
            duration: 1900,
            autoPlay: true,
            timeline: [
                { id: "eid103", tween: [ "transform", "${_r_susp2}", "scaleY", '1', { fromValue: '1.1'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid180", tween: [ "style", "${_fuelTank}", "opacity", '1', { fromValue: '0'}], position: 1192, duration: 248, easing: "easeOutQuad" },
                { id: "eid320", tween: [ "style", "${_fuelTank}", "opacity", '0.2', { fromValue: '1'}], position: 1440, duration: 37, easing: "easeOutQuad" },
                { id: "eid252", tween: [ "transform", "${_aircon_condenser}", "scaleX", '1', { fromValue: '1.1'}], position: 1155, duration: 248, easing: "easeOutQuad" },
                { id: "eid290", tween: [ "style", "${_frontWheel}", "opacity", '0.7', { fromValue: '0'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid304", tween: [ "style", "${_frontWheel}", "opacity", '0.2', { fromValue: '0.699999988079071'}], position: 380, duration: 39, easing: "easeOutQuad" },
                { id: "eid218", tween: [ "transform", "${_r_brake1}", "scaleY", '1', { fromValue: '1.1'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid140", tween: [ "transform", "${_steering}", "scaleY", '1', { fromValue: '1.1'}], position: 333, duration: 248, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "transform", "${_masterCylinder}", "scaleY", '1', { fromValue: '1.1'}], position: 593, duration: 248, easing: "easeOutQuad" },
                { id: "eid371", tween: [ "style", "${_SELECT_ABS}", "opacity", '1', { fromValue: '0'}], position: 1633, duration: 267, easing: "easeOutQuad" },
                { id: "eid204", tween: [ "transform", "${_airCleaner}", "scaleX", '1', { fromValue: '1.1'}], position: 907, duration: 248, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_BODY}", "opacity", '0.99', { fromValue: '0.01'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid242", tween: [ "transform", "${_f_susp1}", "scaleY", '1', { fromValue: '1.1'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid234", tween: [ "transform", "${_radiator}", "scaleX", '1', { fromValue: '1.1'}], position: 1248, duration: 248, easing: "easeOutQuad" },
                { id: "eid148", tween: [ "transform", "${_brakeLine}", "scaleX", '1', { fromValue: '1.1'}], position: 700, duration: 248, easing: "easeOutQuad" },
                { id: "eid166", tween: [ "transform", "${_t_mission}", "scaleX", '1', { fromValue: '1.1'}], position: 433, duration: 248, easing: "easeOutQuad" },
                { id: "eid125", tween: [ "transform", "${_shaft}", "scaleX", '1', { fromValue: '1.1'}], position: 367, duration: 248, easing: "easeOutQuad" },
                { id: "eid248", tween: [ "transform", "${_f_brake1}", "scaleY", '1', { fromValue: '1.1'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid222", tween: [ "transform", "${_exhaust1}", "scaleX", '1', { fromValue: '1.1'}], position: 1085, duration: 248, easing: "easeOutQuad" },
                { id: "eid210", tween: [ "transform", "${_engine}", "scaleX", '1', { fromValue: '1.1'}], position: 974, duration: 248, easing: "easeOutQuad" },
                { id: "eid136", tween: [ "style", "${_steering}", "opacity", '0.8', { fromValue: '0'}], position: 333, duration: 248, easing: "easeOutQuad" },
                { id: "eid342", tween: [ "style", "${_steering}", "opacity", '0.2', { fromValue: '0.800000011920929'}], position: 581, duration: 37, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "transform", "${_masterCylinder}", "scaleX", '1', { fromValue: '1.1'}], position: 593, duration: 248, easing: "easeOutQuad" },
                { id: "eid142", tween: [ "style", "${_blower_heater}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 248, easing: "easeOutQuad" },
                { id: "eid325", tween: [ "style", "${_blower_heater}", "opacity", '0.3', { fromValue: '1'}], position: 1048, duration: 37, easing: "easeOutQuad" },
                { id: "eid115", tween: [ "transform", "${_f_susp2}", "scaleX", '1', { fromValue: '1.1'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid200", tween: [ "transform", "${_aircon_comp}", "scaleY", '1', { fromValue: '1.1'}], position: 800, duration: 248, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "transform", "${_rearWheel}", "scaleX", '1', { fromValue: '1.1'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid196", tween: [ "style", "${_aircon_comp}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 248, easing: "easeOutQuad" },
                { id: "eid327", tween: [ "style", "${_aircon_comp}", "opacity", '0.3', { fromValue: '1'}], position: 1048, duration: 37, easing: "easeOutQuad" },
                { id: "eid367", tween: [ "style", "${_SELECT_r_brake1}", "opacity", '1', { fromValue: '0'}], position: 1633, duration: 267, easing: "easeOutQuad" },
                { id: "eid152", tween: [ "style", "${_masterCylinder}", "opacity", '1', { fromValue: '0'}], position: 593, duration: 248, easing: "easeOutQuad" },
                { id: "eid312", tween: [ "style", "${_masterCylinder}", "opacity", '0.4', { fromValue: '1'}], position: 841, duration: 37, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_rearWheel}", "opacity", '0.8', { fromValue: '0'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid298", tween: [ "style", "${_rearWheel}", "opacity", '0.2', { fromValue: '0.800000011920929'}], position: 380, duration: 39, easing: "easeOutQuad" },
                { id: "eid198", tween: [ "transform", "${_aircon_comp}", "scaleX", '1', { fromValue: '1.1'}], position: 800, duration: 248, easing: "easeOutQuad" },
                { id: "eid230", tween: [ "transform", "${_electric}", "scaleY", '1', { fromValue: '1.1'}], position: 1233, duration: 248, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "transform", "${_r_brake2}", "scaleX", '1', { fromValue: '1.1'}], position: 133, duration: 248, easing: "easeOutQuad" },
                { id: "eid127", tween: [ "transform", "${_shaft}", "scaleY", '1', { fromValue: '1.1'}], position: 367, duration: 248, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_ABS}", "opacity", '1', { fromValue: '0'}], position: 593, duration: 248, easing: "easeOutQuad" },
                { id: "eid314", tween: [ "style", "${_ABS}", "opacity", '0.4', { fromValue: '1'}], position: 841, duration: 37, easing: "easeOutQuad" },
                { id: "eid208", tween: [ "style", "${_engine}", "opacity", '1', { fromValue: '0'}], position: 974, duration: 248, easing: "easeOutQuad" },
                { id: "eid341", tween: [ "style", "${_engine}", "opacity", '0.2', { fromValue: '1'}], position: 1222, duration: 37, easing: "easeOutQuad" },
                { id: "eid224", tween: [ "transform", "${_exhaust1}", "scaleY", '1', { fromValue: '1.1'}], position: 1085, duration: 248, easing: "easeOutQuad" },
                { id: "eid174", tween: [ "style", "${_exhaust2}", "opacity", '1', { fromValue: '0'}], position: 1085, duration: 248, easing: "easeOutQuad" },
                { id: "eid318", tween: [ "style", "${_exhaust2}", "opacity", '0.2', { fromValue: '1'}], position: 1333, duration: 37, easing: "easeOutQuad" },
                { id: "eid178", tween: [ "transform", "${_exhaust2}", "scaleY", '1', { fromValue: '1.1'}], position: 1085, duration: 248, easing: "easeOutQuad" },
                { id: "eid206", tween: [ "transform", "${_airCleaner}", "scaleY", '1', { fromValue: '1.1'}], position: 907, duration: 248, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "transform", "${_r_susp2}", "scaleX", '1', { fromValue: '1.1'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid194", tween: [ "transform", "${_blower_heater}", "scaleY", '1', { fromValue: '1.1'}], position: 800, duration: 248, easing: "easeOutQuad" },
                { id: "eid138", tween: [ "transform", "${_steering}", "scaleX", '1', { fromValue: '1.1'}], position: 333, duration: 248, easing: "easeOutQuad" },
                { id: "eid212", tween: [ "transform", "${_engine}", "scaleY", '1', { fromValue: '1.1'}], position: 974, duration: 248, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "style", "${_r_brake1}", "opacity", '1', { fromValue: '0'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid340", tween: [ "style", "${_r_brake1}", "opacity", '0.4', { fromValue: '1'}], position: 380, duration: 37, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "transform", "${_fuelTank}", "scaleY", '1', { fromValue: '1.1'}], position: 1192, duration: 248, easing: "easeOutQuad" },
                { id: "eid150", tween: [ "transform", "${_brakeLine}", "scaleY", '1', { fromValue: '1.1'}], position: 700, duration: 248, easing: "easeOutQuad" },
                { id: "eid232", tween: [ "style", "${_radiator}", "opacity", '1', { fromValue: '0'}], position: 1248, duration: 248, easing: "easeOutQuad" },
                { id: "eid337", tween: [ "style", "${_radiator}", "opacity", '0.2', { fromValue: '1'}], position: 1496, duration: 37, easing: "easeOutQuad" },
                { id: "eid373", tween: [ "style", "${_SELECT_f_brake1}", "opacity", '1', { fromValue: '0'}], position: 1633, duration: 267, easing: "easeOutQuad" },
                { id: "eid216", tween: [ "transform", "${_r_brake1}", "scaleX", '1', { fromValue: '1.1'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid236", tween: [ "transform", "${_radiator}", "scaleY", '1', { fromValue: '1.1'}], position: 1248, duration: 248, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "transform", "${_blower_heater}", "scaleX", '1', { fromValue: '1.1'}], position: 800, duration: 248, easing: "easeOutQuad" },
                { id: "eid176", tween: [ "transform", "${_exhaust2}", "scaleX", '1', { fromValue: '1.1'}], position: 1085, duration: 248, easing: "easeOutQuad" },
                { id: "eid220", tween: [ "style", "${_exhaust1}", "opacity", '1', { fromValue: '0'}], position: 1085, duration: 248, easing: "easeOutQuad" },
                { id: "eid339", tween: [ "style", "${_exhaust1}", "opacity", '0.2', { fromValue: '1'}], position: 1333, duration: 37, easing: "easeOutQuad" },
                { id: "eid228", tween: [ "transform", "${_electric}", "scaleX", '1', { fromValue: '1.1'}], position: 1233, duration: 248, easing: "easeOutQuad" },
                { id: "eid188", tween: [ "transform", "${_r_susp1}", "scaleX", '1', { fromValue: '1.1'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid375", tween: [ "style", "${_SELECT_r_brake2}", "opacity", '1', { fromValue: '0'}], position: 1633, duration: 267, easing: "easeOutQuad" },
                { id: "eid190", tween: [ "transform", "${_r_susp1}", "scaleY", '1', { fromValue: '1.1'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid109", tween: [ "transform", "${_frontWheel}", "scaleY", '1', { fromValue: '1.1'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "style", "${_f_brake2}", "opacity", '0.8', { fromValue: '0'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid302", tween: [ "style", "${_f_brake2}", "opacity", '0.4', { fromValue: '0.800000'}], position: 380, duration: 39, easing: "easeOutQuad" },
                { id: "eid250", tween: [ "style", "${_aircon_condenser}", "opacity", '0.3', { fromValue: '0'}], position: 1155, duration: 248, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "transform", "${_frontWheel}", "scaleX", '1', { fromValue: '1.1'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid95", tween: [ "transform", "${_rearWheel}", "scaleY", '1', { fromValue: '1.1'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid164", tween: [ "style", "${_t_mission}", "opacity", '1', { fromValue: '0'}], position: 433, duration: 248, easing: "easeOutQuad" },
                { id: "eid316", tween: [ "style", "${_t_mission}", "opacity", '0.2', { fromValue: '1'}], position: 681, duration: 37, easing: "easeOutQuad" },
                { id: "eid162", tween: [ "transform", "${_ABS}", "scaleY", '1', { fromValue: '1.1'}], position: 593, duration: 248, easing: "easeOutQuad" },
                { id: "eid240", tween: [ "transform", "${_f_susp1}", "scaleX", '1', { fromValue: '1.1'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid116", tween: [ "transform", "${_f_susp2}", "scaleY", '1', { fromValue: '1.1'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid244", tween: [ "style", "${_f_brake1}", "opacity", '1', { fromValue: '0'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid343", tween: [ "style", "${_f_brake1}", "opacity", '0.5', { fromValue: '1'}], position: 380, duration: 37, easing: "easeOutQuad" },
                { id: "eid69", tween: [ "style", "${_r_susp2}", "opacity", '0.8', { fromValue: '0'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid300", tween: [ "style", "${_r_susp2}", "opacity", '0.2', { fromValue: '0.800000011920929'}], position: 515, duration: 39, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "style", "${_brakeLine}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 248, easing: "easeOutQuad" },
                { id: "eid310", tween: [ "style", "${_brakeLine}", "opacity", '0.4', { fromValue: '1'}], position: 948, duration: 37, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_tire1_shadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid377", tween: [ "style", "${_SELECT_f_brake2}", "opacity", '1', { fromValue: '0'}], position: 1633, duration: 267, easing: "easeOutQuad" },
                { id: "eid202", tween: [ "style", "${_airCleaner}", "opacity", '0.3', { fromValue: '0'}], position: 907, duration: 248, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_r_brake2}", "opacity", '0.8', { fromValue: '0'}], position: 133, duration: 248, easing: "easeOutQuad" },
                { id: "eid295", tween: [ "style", "${_r_brake2}", "opacity", '0.4', { fromValue: '0.800000011920929'}], position: 381, duration: 38, easing: "easeOutQuad" },
                { id: "eid182", tween: [ "transform", "${_fuelTank}", "scaleX", '1', { fromValue: '1.1'}], position: 1192, duration: 248, easing: "easeOutQuad" },
                { id: "eid160", tween: [ "transform", "${_ABS}", "scaleX", '1', { fromValue: '1.1'}], position: 593, duration: 248, easing: "easeOutQuad" },
                { id: "eid226", tween: [ "style", "${_electric}", "opacity", '1', { fromValue: '0'}], position: 1233, duration: 248, easing: "easeOutQuad" },
                { id: "eid338", tween: [ "style", "${_electric}", "opacity", '0.2', { fromValue: '1'}], position: 1481, duration: 37, easing: "easeOutQuad" },
                { id: "eid146", tween: [ "style", "${_tire1}", "left", '108px', { fromValue: '106px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid369", tween: [ "style", "${_SELECT_masterCylinder}", "opacity", '1', { fromValue: '0'}], position: 1633, duration: 267, easing: "easeOutQuad" },
                { id: "eid131", tween: [ "style", "${_f_susp2}", "opacity", '0.8', { fromValue: '0'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid306", tween: [ "style", "${_f_susp2}", "opacity", '0.4', { fromValue: '0.800000011920929'}], position: 515, duration: 37, easing: "easeOutQuad" },
                { id: "eid254", tween: [ "transform", "${_aircon_condenser}", "scaleY", '1', { fromValue: '1.1'}], position: 1155, duration: 248, easing: "easeOutQuad" },
                { id: "eid168", tween: [ "transform", "${_t_mission}", "scaleY", '1', { fromValue: '1.1'}], position: 433, duration: 248, easing: "easeOutQuad" },
                { id: "eid9", tween: [ "style", "${_tire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid380", tween: [ "style", "${_tire1}", "opacity", '0.37414965986395', { fromValue: '1'}], position: 1633, duration: 267, easing: "easeOutQuad" },
                { id: "eid186", tween: [ "style", "${_r_susp1}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid322", tween: [ "style", "${_r_susp1}", "opacity", '0.4', { fromValue: '1'}], position: 515, duration: 37, easing: "easeOutQuad" },
                { id: "eid129", tween: [ "style", "${_shaft}", "opacity", '0.8', { fromValue: '0'}], position: 367, duration: 248, easing: "easeOutQuad" },
                { id: "eid308", tween: [ "style", "${_shaft}", "opacity", '0.2', { fromValue: '0.800000011920929'}], position: 615, duration: 37, easing: "easeOutQuad" },
                { id: "eid238", tween: [ "style", "${_f_susp1}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 248, easing: "easeOutQuad" },
                { id: "eid336", tween: [ "style", "${_f_susp1}", "opacity", '0.3', { fromValue: '1'}], position: 515, duration: 37, easing: "easeOutQuad" },
                { id: "eid246", tween: [ "transform", "${_f_brake1}", "scaleX", '1', { fromValue: '1.1'}], position: 132, duration: 248, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "transform", "${_r_brake2}", "scaleY", '1', { fromValue: '1.1'}], position: 133, duration: 248, easing: "easeOutQuad" },
                { id: "eid379", tween: [ "style", "${_SELECT_brakeLine}", "opacity", '1', { fromValue: '0'}], position: 1633, duration: 267, easing: "easeOutQuad" }            ]
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
