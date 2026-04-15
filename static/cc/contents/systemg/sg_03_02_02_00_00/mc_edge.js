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
                id: 'prop_valve',
                type: 'image',
                tag: 'img',
                rect: ['60', '940','139','138','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"prop_valve.png"]
            },
            {
                id: 'pedal-3',
                type: 'image',
                tag: 'img',
                rect: ['1066px', '151px','149','198','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pedal-3.png"]
            },
            {
                id: 'pedal-2',
                type: 'image',
                tag: 'img',
                rect: ['1223px', '225px','185','365','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pedal-2.png"]
            },
            {
                id: 'pedal-1',
                type: 'image',
                tag: 'img',
                rect: ['998px', '273px','75','106','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pedal-1.png"]
            },
            {
                id: 'h_bag-4',
                type: 'image',
                tag: 'img',
                rect: ['712', '318','286','265','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h_bag-4.png"]
            },
            {
                id: 'h_bag-3',
                type: 'image',
                tag: 'img',
                rect: ['724', '355','16','16','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h_bag-3.png"]
            },
            {
                id: 'h_bag-2',
                type: 'image',
                tag: 'img',
                rect: ['533', '228','206','119','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h_bag-2.png"]
            },
            {
                id: 'h_bag-1',
                type: 'image',
                tag: 'img',
                rect: ['509', '267','17','18','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h_bag-1.png"]
            },
            {
                id: 'm_Cylinder-7',
                type: 'image',
                tag: 'img',
                rect: ['704', '509','32','39','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m_Cylinder-7.png"]
            },
            {
                id: 'm_Cylinder-6',
                type: 'image',
                tag: 'img',
                rect: ['525', '528','177','128','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m_Cylinder-6.png"]
            },
            {
                id: 'm_Cylinder-5',
                type: 'image',
                tag: 'img',
                rect: ['326', '637','189','132','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m_Cylinder-5.png"]
            },
            {
                id: 'm_Cylinder-4',
                type: 'image',
                tag: 'img',
                rect: ['29', '721','342','250','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m_Cylinder-4.png"]
            },
            {
                id: 'm_Cylinder-3',
                type: 'image',
                tag: 'img',
                rect: ['120', '729','12','50','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m_Cylinder-3.png"]
            },
            {
                id: 'm_Cylinder-2',
                type: 'image',
                tag: 'img',
                rect: ['98', '666','56','50','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m_Cylinder-2.png"]
            },
            {
                id: 'm_Cylinder-1',
                type: 'image',
                tag: 'img',
                rect: ['206', '601','56','49','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m_Cylinder-1.png"]
            },
            {
                id: 'brakeOil-2',
                type: 'image',
                tag: 'img',
                rect: ['20', '320','303','300','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"brakeOil-2.png"]
            },
            {
                id: 'brakeOil-1',
                type: 'image',
                tag: 'img',
                rect: ['33', '173','170','131','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"brakeOil-1.png"]
            },
            {
                id: 'SELECT_pedal-3',
                type: 'image',
                tag: 'img',
                rect: ['1066', '151','149','198','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_pedal-3.png"]
            },
            {
                id: 'SELECT_pedal-2',
                type: 'image',
                tag: 'img',
                rect: ['1223', '225','185','365','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_pedal-2.png"]
            },
            {
                id: 'SELECT_pedal-1',
                type: 'image',
                tag: 'img',
                rect: ['998', '273','75','106','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_pedal-1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_SELECT_pedal-3}": [
                ["style", "opacity", '0']
            ],
            "${_brakeOil-1}": [
                ["style", "top", '347px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '411px']
            ],
            "${_pedal-2}": [
                ["style", "top", '385px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '922px']
            ],
            "${_pedal-3}": [
                ["style", "top", '350px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '807px']
            ],
            "${_h_bag-3}": [
                ["style", "top", '465px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '633px']
            ],
            "${_m_Cylinder-5}": [
                ["style", "top", '606px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '424px']
            ],
            "${_h_bag-4}": [
                ["style", "top", '398px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '621px']
            ],
            "${_m_Cylinder-4}": [
                ["style", "top", '521px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '409px']
            ],
            "${_m_Cylinder-3}": [
                ["style", "top", '596px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '499px']
            ],
            "${_brakeOil-2}": [
                ["style", "top", '379px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '384px']
            ],
            "${_h_bag-1}": [
                ["style", "top", '384px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '435px']
            ],
            "${_SELECT_pedal-2}": [
                ["style", "opacity", '0']
            ],
            "${_m_Cylinder-6}": [
                ["style", "top", '545px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '532px']
            ],
            "${_SELECT_pedal-1}": [
                ["style", "opacity", '0']
            ],
            "${_m_Cylinder-1}": [
                ["style", "top", '540px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '585px']
            ],
            "${_m_Cylinder-2}": [
                ["style", "top", '596px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '477px']
            ],
            "${_pedal-1}": [
                ["style", "top", '428px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '813px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_prop_valve}": [
                ["style", "top", '653px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '438px']
            ],
            "${_m_Cylinder-7}": [
                ["style", "top", '548px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '671px']
            ],
            "${_h_bag-2}": [
                ["style", "top", '353px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '443px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1267,
            autoPlay: true,
            timeline: [
                { id: "eid90", tween: [ "transform", "${_m_Cylinder-6}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid52", tween: [ "style", "${_m_Cylinder-1}", "left", '206px', { fromValue: '585px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_h_bag-3}", "top", '355px', { fromValue: '465px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid166", tween: [ "style", "${_brakeOil-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid164", tween: [ "style", "${_brakeOil-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid62", tween: [ "style", "${_brakeOil-1}", "left", '33px', { fromValue: '411px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "style", "${_m_Cylinder-7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid114", tween: [ "transform", "${_h_bag-3}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid60", tween: [ "style", "${_brakeOil-1}", "top", '173px', { fromValue: '347px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "transform", "${_prop_valve}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid18", tween: [ "style", "${_m_Cylinder-7}", "left", '704px', { fromValue: '671px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_h_bag-3}", "left", '724px', { fromValue: '633px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid120", tween: [ "transform", "${_brakeOil-1}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid36", tween: [ "style", "${_h_bag-2}", "top", '228px', { fromValue: '353px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "style", "${_h_bag-4}", "top", '318px', { fromValue: '398px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid130", tween: [ "transform", "${_h_bag-1}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid56", tween: [ "style", "${_prop_valve}", "left", '60px', { fromValue: '438px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid168", tween: [ "style", "${_m_Cylinder-4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid48", tween: [ "style", "${_m_Cylinder-2}", "left", '98px', { fromValue: '477px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid142", tween: [ "style", "${_pedal-3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid172", tween: [ "style", "${_h_bag-4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid146", tween: [ "style", "${_m_Cylinder-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_m_Cylinder-5}", "left", '326px', { fromValue: '424px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_pedal-1}", "top", '273px', { fromValue: '428px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid118", tween: [ "transform", "${_brakeOil-1}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid32", tween: [ "style", "${_m_Cylinder-4}", "top", '721px', { fromValue: '521px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_brakeOil-2}", "top", '320px', { fromValue: '379px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid106", tween: [ "transform", "${_pedal-2}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid154", tween: [ "style", "${_prop_valve}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid180", tween: [ "style", "${_SELECT_pedal-2}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 367, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "transform", "${_pedal-1}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid24", tween: [ "style", "${_m_Cylinder-6}", "top", '528px', { fromValue: '545px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "transform", "${_pedal-1}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid46", tween: [ "style", "${_m_Cylinder-3}", "top", '729px', { fromValue: '596px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "transform", "${_m_Cylinder-5}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid76", tween: [ "transform", "${_pedal-3}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid202", tween: [ "style", "${_SELECT_pedal-3}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 367, easing: "easeOutQuad" },
                { id: "eid124", tween: [ "transform", "${_brakeOil-2}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid128", tween: [ "transform", "${_m_Cylinder-4}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid50", tween: [ "style", "${_m_Cylinder-2}", "top", '666px', { fromValue: '596px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "transform", "${_m_Cylinder-7}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid30", tween: [ "style", "${_m_Cylinder-4}", "left", '29px', { fromValue: '409px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "transform", "${_h_bag-2}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid54", tween: [ "style", "${_m_Cylinder-1}", "top", '601px', { fromValue: '540px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid116", tween: [ "transform", "${_h_bag-3}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid174", tween: [ "style", "${_m_Cylinder-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid64", tween: [ "style", "${_brakeOil-2}", "left", '20px', { fromValue: '384px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_pedal-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid84", tween: [ "transform", "${_m_Cylinder-1}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid150", tween: [ "style", "${_m_Cylinder-6}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid148", tween: [ "style", "${_pedal-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid70", tween: [ "style", "${_h_bag-4}", "left", '712px', { fromValue: '621px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "transform", "${_pedal-3}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid122", tween: [ "transform", "${_brakeOil-2}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid196", tween: [ "style", "${_SELECT_pedal-1}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 367, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_pedal-1}", "left", '998px', { fromValue: '813px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_prop_valve}", "top", '940px', { fromValue: '653px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "transform", "${_m_Cylinder-1}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid92", tween: [ "transform", "${_m_Cylinder-6}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid100", tween: [ "transform", "${_prop_valve}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid28", tween: [ "style", "${_m_Cylinder-5}", "top", '637px', { fromValue: '606px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid132", tween: [ "transform", "${_h_bag-1}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid140", tween: [ "transform", "${_m_Cylinder-2}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid42", tween: [ "style", "${_h_bag-1}", "top", '267px', { fromValue: '384px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_m_Cylinder-6}", "left", '525px', { fromValue: '532px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "transform", "${_m_Cylinder-3}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid38", tween: [ "style", "${_h_bag-2}", "left", '533px', { fromValue: '443px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid136", tween: [ "transform", "${_h_bag-4}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid134", tween: [ "transform", "${_h_bag-4}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid162", tween: [ "style", "${_h_bag-3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid170", tween: [ "style", "${_h_bag-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid138", tween: [ "transform", "${_m_Cylinder-2}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid156", tween: [ "style", "${_m_Cylinder-3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid6", tween: [ "style", "${_pedal-3}", "left", '1066px', { fromValue: '807px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "transform", "${_m_Cylinder-5}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid8", tween: [ "style", "${_pedal-3}", "top", '151px', { fromValue: '350px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "transform", "${_h_bag-2}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid44", tween: [ "style", "${_m_Cylinder-3}", "left", '120px', { fromValue: '499px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_pedal-2}", "top", '225px', { fromValue: '385px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid152", tween: [ "style", "${_m_Cylinder-5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid160", tween: [ "style", "${_h_bag-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid40", tween: [ "style", "${_h_bag-1}", "left", '509px', { fromValue: '435px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_pedal-2}", "left", '1223px', { fromValue: '922px'}], position: 400, duration: 433, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "transform", "${_pedal-2}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid78", tween: [ "transform", "${_m_Cylinder-7}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid104", tween: [ "transform", "${_m_Cylinder-3}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid126", tween: [ "transform", "${_m_Cylinder-4}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid20", tween: [ "style", "${_m_Cylinder-7}", "top", '509px', { fromValue: '548px'}], position: 400, duration: 433, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-19160644");
