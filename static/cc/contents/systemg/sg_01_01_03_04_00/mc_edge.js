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
                id: 'oilfence-copy',
                type: 'image',
                tag: 'img',
                rect: ['703', '731','416','252','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilfence-copy.png"]
            },
            {
                id: '00-copy',
                type: 'image',
                tag: 'img',
                rect: ['678px', '697px','154','109','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"00-copy.png"]
            },
            {
                id: 'rear04-copy',
                type: 'image',
                tag: 'img',
                rect: ['1111', '151','70','84','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear04-copy.png"]
            },
            {
                id: 'rear03-copy',
                type: 'image',
                tag: 'img',
                rect: ['1076', '166','76','89','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear03-copy.png"]
            },
            {
                id: 'rear02-copy',
                type: 'image',
                tag: 'img',
                rect: ['1033', '177','100','123','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear02-copy.png"]
            },
            {
                id: 'rear01-copy',
                type: 'image',
                tag: 'img',
                rect: ['887', '94','382','387','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rear01-copy.png"]
            },
            {
                id: 'oilp01-copy',
                type: 'image',
                tag: 'img',
                rect: ['161px', '166px','95','93','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilp01-copy.png"]
            },
            {
                id: 'oilp01_ov',
                type: 'image',
                rect: ['161px', '166px','95px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilp01_ov.png",'0px','0px']
            },
            {
                id: 'lubri-copy',
                type: 'image',
                tag: 'img',
                rect: ['243px', '254px','251','169','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubri-copy.png"]
            },
            {
                id: 'body02-copy',
                type: 'image',
                tag: 'img',
                rect: ['523', '170','509','561','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body02-copy.png"]
            },
            {
                id: 'body01-copy',
                type: 'image',
                tag: 'img',
                rect: ['541', '135','384','249','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body01-copy.png"]
            },
            {
                id: 'bolt-copy',
                type: 'image',
                tag: 'img',
                rect: ['519', '1010','96','125','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bolt-copy.png"]
            },
            {
                id: 'oilpump03-copy',
                type: 'image',
                tag: 'img',
                rect: ['523px', '650px','106','116','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilpump03-copy.png"]
            },
            {
                id: 'oilpump02-copy',
                type: 'image',
                tag: 'img',
                rect: ['495px', '706px','68','79','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilpump02-copy.png"]
            },
            {
                id: 'oilpump01-copy',
                type: 'image',
                tag: 'img',
                rect: ['466px', '734px','57','66','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oilpump01-copy.png"]
            },
            {
                id: 'lubrication_05-copy',
                type: 'image',
                tag: 'img',
                rect: ['268px', '693px','73','111','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubrication_05-copy.png"]
            },
            {
                id: 'lubrication_04-copy',
                type: 'image',
                tag: 'img',
                rect: ['230px', '732px','44','48','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubrication_04-copy.png"]
            },
            {
                id: 'lubrication_03-copy',
                type: 'image',
                tag: 'img',
                rect: ['194px', '780px','75','58','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubrication_03-copy.png"]
            },
            {
                id: 'lubrication_02-copy',
                type: 'image',
                tag: 'img',
                rect: ['181', '681','284','290','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubrication_02-copy.png"]
            },
            {
                id: 'lubrication_01-copy',
                type: 'image',
                tag: 'img',
                rect: ['194', '918','55','64','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lubrication_01-copy.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_lubrication_03-copy}": [
                ["style", "left", '444px'],
                ["style", "top", '561px']
            ],
            "${_oilp01_ov}": [
                ["style", "top", '166px'],
                ["style", "opacity", '0'],
                ["style", "left", '161px']
            ],
            "${_lubri-copy}": [
                ["style", "left", '415px'],
                ["style", "top", '345px']
            ],
            "${_lubrication_04-copy}": [
                ["style", "left", '480px'],
                ["style", "top", '513px']
            ],
            "${_oilpump01-copy}": [
                ["style", "left", '579px'],
                ["style", "top", '586px']
            ],
            "${_lubrication_05-copy}": [
                ["style", "left", '518px'],
                ["style", "top", '474px']
            ],
            "${_oilpump02-copy}": [
                ["style", "left", '587px'],
                ["style", "top", '573px']
            ],
            "${_rear02-copy}": [
                ["style", "left", '778px'],
                ["style", "top", '296px']
            ],
            "${_rear01-copy}": [
                ["style", "left", '579px'],
                ["style", "top", '255px']
            ],
            "${_00-copy}": [
                ["style", "left", '666px'],
                ["style", "top", '568px']
            ],
            "${_rear04-copy}": [
                ["style", "left", '856px'],
                ["style", "top", '270px']
            ],
            "${_bolt-copy}": [
                ["style", "left", '531px'],
                ["style", "top", '573px']
            ],
            "${_lubrication_02-copy}": [
                ["style", "left", '431px'],
                ["style", "top", '462px']
            ],
            "${_oilp01-copy}": [
                ["style", "left", '427px'],
                ["style", "top", '330px']
            ],
            "${_oilfence-copy}": [
                ["style", "left", '575px'],
                ["style", "top", '462px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_rear03-copy}": [
                ["style", "left", '821px'],
                ["style", "top", '285px']
            ],
            "${_lubrication_01-copy}": [
                ["style", "left", '551px'],
                ["style", "top", '613px']
            ],
            "${_oilpump03-copy}": [
                ["style", "left", '587px'],
                ["style", "top", '549px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 818,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "style", "${_oilpump01-copy}", "top", '805px', { fromValue: '586px'}], position: 0, duration: 250 },
                { id: "eid12", tween: [ "style", "${_oilpump01-copy}", "top", '734px', { fromValue: '805px'}], position: 250, duration: 167 },
                { id: "eid73", tween: [ "style", "${_rear04-copy}", "left", '1111px', { fromValue: '856px'}], position: 426, duration: 294 },
                { id: "eid55", tween: [ "style", "${_bolt-copy}", "top", '780px', { fromValue: '573px'}], position: 0, duration: 250 },
                { id: "eid53", tween: [ "style", "${_bolt-copy}", "top", '926px', { fromValue: '780px'}], position: 250, duration: 250 },
                { id: "eid67", tween: [ "style", "${_rear02-copy}", "top", '177px', { fromValue: '296px'}], position: 426, duration: 294 },
                { id: "eid54", tween: [ "style", "${_bolt-copy}", "left", '338px', { fromValue: '531px'}], position: 0, duration: 250 },
                { id: "eid51", tween: [ "style", "${_bolt-copy}", "left", '576px', { fromValue: '338px'}], position: 250, duration: 250 },
                { id: "eid33", tween: [ "style", "${_lubrication_05-copy}", "top", '693px', { fromValue: '474px'}], position: 0, duration: 250 },
                { id: "eid89", tween: [ "style", "${_lubrication_05-copy}", "top", '588px', { fromValue: '693px'}], position: 250, duration: 167 },
                { id: "eid42", tween: [ "style", "${_lubrication_01-copy}", "left", '301px', { fromValue: '551px'}], position: 0, duration: 250 },
                { id: "eid22", tween: [ "style", "${_lubrication_01-copy}", "left", '194px', { fromValue: '301px'}], position: 250, duration: 250 },
                { id: "eid2", tween: [ "style", "${_lubri-copy}", "left", '243px', { fromValue: '415px'}], position: 426, duration: 294 },
                { id: "eid31", tween: [ "style", "${_lubrication_05-copy}", "left", '268px', { fromValue: '518px'}], position: 0, duration: 250 },
                { id: "eid88", tween: [ "style", "${_lubrication_05-copy}", "left", '440px', { fromValue: '268px'}], position: 250, duration: 167 },
                { id: "eid43", tween: [ "style", "${_lubrication_01-copy}", "top", '832px', { fromValue: '613px'}], position: 0, duration: 250 },
                { id: "eid24", tween: [ "style", "${_lubrication_01-copy}", "top", '918px', { fromValue: '832px'}], position: 250, duration: 250 },
                { id: "eid47", tween: [ "style", "${_lubrication_02-copy}", "left", '181px', { fromValue: '431px'}], position: 0, duration: 250 },
                { id: "eid29", tween: [ "style", "${_lubrication_04-copy}", "top", '732px', { fromValue: '513px'}], position: 0, duration: 250 },
                { id: "eid85", tween: [ "style", "${_lubrication_04-copy}", "top", '627px', { fromValue: '732px'}], position: 250, duration: 167 },
                { id: "eid6", tween: [ "style", "${_oilp01-copy}", "left", '161px', { fromValue: '427px'}], position: 426, duration: 294 },
                { id: "eid61", tween: [ "style", "${_rear01-copy}", "left", '887px', { fromValue: '579px'}], position: 426, duration: 294 },
                { id: "eid49", tween: [ "style", "${_lubrication_02-copy}", "top", '681px', { fromValue: '462px'}], position: 0, duration: 250 },
                { id: "eid63", tween: [ "style", "${_rear01-copy}", "top", '94px', { fromValue: '255px'}], position: 426, duration: 294 },
                { id: "eid69", tween: [ "style", "${_rear03-copy}", "left", '1076px', { fromValue: '821px'}], position: 426, duration: 294 },
                { id: "eid35", tween: [ "style", "${_lubrication_03-copy}", "left", '194px', { fromValue: '444px'}], position: 0, duration: 250 },
                { id: "eid86", tween: [ "style", "${_lubrication_03-copy}", "left", '366px', { fromValue: '194px'}], position: 250, duration: 167 },
                { id: "eid44", tween: [ "style", "${_oilpump03-copy}", "left", '337px', { fromValue: '587px'}], position: 0, duration: 250 },
                { id: "eid18", tween: [ "style", "${_oilpump03-copy}", "left", '523px', { fromValue: '337px'}], position: 250, duration: 167 },
                { id: "eid71", tween: [ "style", "${_rear03-copy}", "top", '166px', { fromValue: '285px'}], position: 426, duration: 294 },
                { id: "eid4", tween: [ "style", "${_lubri-copy}", "top", '254px', { fromValue: '345px'}], position: 426, duration: 294 },
                { id: "eid37", tween: [ "style", "${_lubrication_03-copy}", "top", '780px', { fromValue: '561px'}], position: 0, duration: 250 },
                { id: "eid87", tween: [ "style", "${_lubrication_03-copy}", "top", '675px', { fromValue: '780px'}], position: 250, duration: 167 },
                { id: "eid75", tween: [ "style", "${_rear04-copy}", "top", '151px', { fromValue: '270px'}], position: 426, duration: 294 },
                { id: "eid83", tween: [ "style", "${_oilfence-copy}", "top", '731px', { fromValue: '462px'}], position: 491, duration: 294 },
                { id: "eid40", tween: [ "style", "${_oilpump02-copy}", "left", '337px', { fromValue: '587px'}], position: 0, duration: 250 },
                { id: "eid14", tween: [ "style", "${_oilpump02-copy}", "left", '495px', { fromValue: '337px'}], position: 250, duration: 167 },
                { id: "eid27", tween: [ "style", "${_lubrication_04-copy}", "left", '230px', { fromValue: '480px'}], position: 0, duration: 250 },
                { id: "eid84", tween: [ "style", "${_lubrication_04-copy}", "left", '402px', { fromValue: '230px'}], position: 250, duration: 167 },
                { id: "eid77", tween: [ "style", "${_00-copy}", "left", '678px', { fromValue: '666px'}], position: 491, duration: 294 },
                { id: "eid41", tween: [ "style", "${_oilpump02-copy}", "top", '792px', { fromValue: '573px'}], position: 0, duration: 250 },
                { id: "eid16", tween: [ "style", "${_oilpump02-copy}", "top", '706px', { fromValue: '792px'}], position: 250, duration: 167 },
                { id: "eid81", tween: [ "style", "${_oilfence-copy}", "left", '703px', { fromValue: '575px'}], position: 491, duration: 294 },
                { id: "eid98", tween: [ "style", "${_oilp01_ov}", "opacity", '1', { fromValue: '0'}], position: 720, duration: 98 },
                { id: "eid45", tween: [ "style", "${_oilpump03-copy}", "top", '768px', { fromValue: '549px'}], position: 0, duration: 250 },
                { id: "eid20", tween: [ "style", "${_oilpump03-copy}", "top", '650px', { fromValue: '768px'}], position: 250, duration: 167 },
                { id: "eid38", tween: [ "style", "${_oilpump01-copy}", "left", '329px', { fromValue: '579px'}], position: 0, duration: 250 },
                { id: "eid10", tween: [ "style", "${_oilpump01-copy}", "left", '466px', { fromValue: '329px'}], position: 250, duration: 167 },
                { id: "eid8", tween: [ "style", "${_oilp01-copy}", "top", '166px', { fromValue: '330px'}], position: 426, duration: 294 },
                { id: "eid79", tween: [ "style", "${_00-copy}", "top", '697px', { fromValue: '568px'}], position: 491, duration: 294 },
                { id: "eid65", tween: [ "style", "${_rear02-copy}", "left", '1033px', { fromValue: '778px'}], position: 426, duration: 294 }            ]
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
})(jQuery, AdobeEdge, "EDGE-3254825");
