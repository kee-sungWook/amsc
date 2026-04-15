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
                id: 'select_rearWheel',
                type: 'image',
                rect: ['166px', '472px','399px','172px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"select_rearWheel.png",'0px','0px']
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
                id: 'select_shaft',
                type: 'image',
                rect: ['440px', '558px','452px','210px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"select_shaft.png",'0px','0px']
            },
            {
                id: 't_mission',
                type: 'image',
                tag: 'img',
                rect: ['748', '652','224','126','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t_mission.png"]
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
            "${_tire1_shadow}": [
                ["style", "opacity", '0']
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
            "${_select_shaft}": [
                ["style", "top", '558px'],
                ["style", "opacity", '0.019108280254777'],
                ["style", "left", '440px']
            ],
            "${_r_brake1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_select_rearWheel}": [
                ["style", "top", '472px'],
                ["style", "opacity", '0.019108280254777'],
                ["style", "left", '166px']
            ],
            "${_f_brake2}": [
                ["style", "opacity", '0']
            ],
            "${_t_mission}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_BODY}": [
                ["style", "opacity", '0.01']
            ],
            "${_rearWheel}": [
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
            "${_r_brake2}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_frontWheel}": [
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
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid210", tween: [ "transform", "${_engine}", "scaleX", '1', { fromValue: '1.1'}], position: 400, duration: 248 },
                { id: "eid109", tween: [ "transform", "${_frontWheel}", "scaleY", '1', { fromValue: '1.1'}], position: 300, duration: 248 },
                { id: "eid95", tween: [ "transform", "${_rearWheel}", "scaleY", '1', { fromValue: '1.1'}], position: 219, duration: 248 },
                { id: "eid374", tween: [ "style", "${_t_mission}", "opacity", '1', { fromValue: '0'}], position: 448, duration: 248 },
                { id: "eid375", tween: [ "style", "${_t_mission}", "opacity", '0.4', { fromValue: '1'}], position: 696, duration: 37 },
                { id: "eid30", tween: [ "transform", "${_r_brake2}", "scaleX", '1', { fromValue: '1.1'}], position: 185, duration: 248 },
                { id: "eid290", tween: [ "style", "${_frontWheel}", "opacity", '0.7', { fromValue: '0'}], position: 300, duration: 248 },
                { id: "eid304", tween: [ "style", "${_frontWheel}", "opacity", '0.4', { fromValue: '0.699999988079071'}], position: 548, duration: 39 },
                { id: "eid353", tween: [ "style", "${_select_shaft}", "opacity", '1', { fromValue: '0.019108280254777'}], position: 800, duration: 200 },
                { id: "eid212", tween: [ "transform", "${_engine}", "scaleY", '1', { fromValue: '1.1'}], position: 400, duration: 248 },
                { id: "eid127", tween: [ "transform", "${_shaft}", "scaleY", '1', { fromValue: '1.1'}], position: 367, duration: 248 },
                { id: "eid216", tween: [ "transform", "${_r_brake1}", "scaleX", '1', { fromValue: '1.1'}], position: 400, duration: 248 },
                { id: "eid146", tween: [ "style", "${_tire1}", "left", '108px', { fromValue: '106px'}], position: 0, duration: 200 },
                { id: "eid37", tween: [ "style", "${_r_brake2}", "opacity", '0.8', { fromValue: '0'}], position: 185, duration: 248 },
                { id: "eid295", tween: [ "style", "${_r_brake2}", "opacity", '0.4', { fromValue: '0.800000011920929'}], position: 433, duration: 38 },
                { id: "eid94", tween: [ "transform", "${_rearWheel}", "scaleX", '1', { fromValue: '1.1'}], position: 219, duration: 248 },
                { id: "eid12", tween: [ "style", "${_tire1_shadow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid6", tween: [ "style", "${_BODY}", "opacity", '0.99', { fromValue: '0.01'}], position: 0, duration: 200 },
                { id: "eid67", tween: [ "style", "${_f_brake2}", "opacity", '0.8', { fromValue: '0'}], position: 252, duration: 248 },
                { id: "eid302", tween: [ "style", "${_f_brake2}", "opacity", '0.4', { fromValue: '0.800000'}], position: 500, duration: 39 },
                { id: "eid355", tween: [ "style", "${_select_rearWheel}", "opacity", '1', { fromValue: '0.019108280254777'}], position: 800, duration: 200 },
                { id: "eid248", tween: [ "transform", "${_f_brake1}", "scaleY", '1', { fromValue: '1.1'}], position: 386, duration: 248 },
                { id: "eid214", tween: [ "style", "${_r_brake1}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 248 },
                { id: "eid340", tween: [ "style", "${_r_brake1}", "opacity", '0.4', { fromValue: '1'}], position: 648, duration: 37 },
                { id: "eid373", tween: [ "transform", "${_t_mission}", "scaleX", '1', { fromValue: '1.1'}], position: 448, duration: 248 },
                { id: "eid108", tween: [ "transform", "${_frontWheel}", "scaleX", '1', { fromValue: '1.1'}], position: 300, duration: 248 },
                { id: "eid244", tween: [ "style", "${_f_brake1}", "opacity", '1', { fromValue: '0'}], position: 386, duration: 248 },
                { id: "eid343", tween: [ "style", "${_f_brake1}", "opacity", '0.5', { fromValue: '1'}], position: 634, duration: 37 },
                { id: "eid125", tween: [ "transform", "${_shaft}", "scaleX", '1', { fromValue: '1.1'}], position: 367, duration: 248 },
                { id: "eid376", tween: [ "transform", "${_t_mission}", "scaleY", '1', { fromValue: '1.1'}], position: 448, duration: 248 },
                { id: "eid9", tween: [ "style", "${_tire1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid218", tween: [ "transform", "${_r_brake1}", "scaleY", '1', { fromValue: '1.1'}], position: 400, duration: 248 },
                { id: "eid129", tween: [ "style", "${_shaft}", "opacity", '0.8', { fromValue: '0'}], position: 367, duration: 248 },
                { id: "eid308", tween: [ "style", "${_shaft}", "opacity", '0.4', { fromValue: '0.800000011920929'}], position: 615, duration: 37 },
                { id: "eid39", tween: [ "style", "${_rearWheel}", "opacity", '0.8', { fromValue: '0'}], position: 219, duration: 248 },
                { id: "eid298", tween: [ "style", "${_rearWheel}", "opacity", '0.4', { fromValue: '0.800000011920929'}], position: 467, duration: 39 },
                { id: "eid246", tween: [ "transform", "${_f_brake1}", "scaleX", '1', { fromValue: '1.1'}], position: 386, duration: 248 },
                { id: "eid32", tween: [ "transform", "${_r_brake2}", "scaleY", '1', { fromValue: '1.1'}], position: 185, duration: 248 },
                { id: "eid208", tween: [ "style", "${_engine}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 248 },
                { id: "eid341", tween: [ "style", "${_engine}", "opacity", '0.4', { fromValue: '1'}], position: 648, duration: 37 }            ]
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
