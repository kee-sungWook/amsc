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
                id: 'back2',
                type: 'image',
                tag: 'img',
                rect: ['1027', '171','382','404','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back2.png"]
            },
            {
                id: 'wCylinder2',
                type: 'image',
                tag: 'img',
                rect: ['1179', '225','124','106','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wCylinder2.png"]
            },
            {
                id: 'back1-7',
                type: 'image',
                tag: 'img',
                rect: ['20', '168','349','421','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back1-7.png"]
            },
            {
                id: 'back1-6',
                type: 'image',
                tag: 'img',
                rect: ['621', '796','94','69','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back1-6.png"]
            },
            {
                id: 'back1-5',
                type: 'image',
                tag: 'img',
                rect: ['574', '741','52','44','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back1-5.png"]
            },
            {
                id: 'back1-4',
                type: 'image',
                tag: 'img',
                rect: ['509', '439','214','173','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back1-4.png"]
            },
            {
                id: 'back1-3',
                type: 'image',
                tag: 'img',
                rect: ['369', '585','168','297','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back1-3.png"]
            },
            {
                id: 'back1-2',
                type: 'image',
                tag: 'img',
                rect: ['753', '399','140','299','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back1-2.png"]
            },
            {
                id: 'back1-1',
                type: 'image',
                tag: 'img',
                rect: ['909', '521','28','28','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back1-1.png"]
            },
            {
                id: 'wCylinder1-3',
                type: 'image',
                tag: 'img',
                rect: ['362', '403','50','34','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wCylinder1-3.png"]
            },
            {
                id: 'wCylinder1-2',
                type: 'image',
                tag: 'img',
                rect: ['418', '391','27','25','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wCylinder1-2.png"]
            },
            {
                id: 'wCylinder1-1',
                type: 'image',
                tag: 'img',
                rect: ['437', '428','103','93','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wCylinder1-1.png"]
            },
            {
                id: 'drum',
                type: 'image',
                tag: 'img',
                rect: ['780', '620','369','442','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drum.png"]
            },
            {
                id: 'SELECT_wCylinder2',
                type: 'image',
                tag: 'img',
                rect: ['1179', '225','124','106','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_wCylinder2.png"]
            },
            {
                id: 'SELECT_wCylinder1-3',
                type: 'image',
                tag: 'img',
                rect: ['362', '403','50','34','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_wCylinder1-3.png"]
            },
            {
                id: 'SELECT_wCylinder1-2',
                type: 'image',
                tag: 'img',
                rect: ['418', '391','27','25','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_wCylinder1-2.png"]
            },
            {
                id: 'SELECT_wCylinder1-1',
                type: 'image',
                tag: 'img',
                rect: ['437', '428','103','93','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_wCylinder1-1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_back1-5}": [
                ["style", "top", '699px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '487px']
            ],
            "${_drum}": [
                ["style", "top", '406px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '412px']
            ],
            "${_SELECT_wCylinder1-3}": [
                ["style", "opacity", '0']
            ],
            "${_wCylinder1-1}": [
                ["style", "top", '489px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '541px']
            ],
            "${_back1-7}": [
                ["style", "top", '392px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '387px']
            ],
            "${_back1-1}": [
                ["style", "top", '536px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '686px']
            ],
            "${_back1-3}": [
                ["style", "top", '516px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '425px']
            ],
            "${_wCylinder2}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_back1-4}": [
                ["style", "top", '477px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '472px']
            ],
            "${_back1-6}": [
                ["style", "top", '701px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '550px']
            ],
            "${_SELECT_wCylinder1-1}": [
                ["style", "opacity", '0']
            ],
            "${_back2}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_SELECT_wCylinder2}": [
                ["style", "opacity", '0']
            ],
            "${_wCylinder1-3}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '545px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_SELECT_wCylinder1-2}": [
                ["style", "opacity", '0']
            ],
            "${_wCylinder1-2}": [
                ["style", "top", '489px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '561px']
            ],
            "${_back1-2}": [
                ["style", "top", '456px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '597px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1400,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "transform", "${_back1-3}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid48", tween: [ "transform", "${_wCylinder1-2}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid114", tween: [ "transform", "${_wCylinder2}", "scaleY", '1', { fromValue: '0.9'}], position: 267, duration: 266, easing: "easeOutQuad" },
                { id: "eid106", tween: [ "style", "${_back1-7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid86", tween: [ "transform", "${_back1-1}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid78", tween: [ "transform", "${_back1-7}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid116", tween: [ "transform", "${_back2}", "scaleX", '1', { fromValue: '0.9'}], position: 267, duration: 266, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "style", "${_wCylinder1-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid88", tween: [ "transform", "${_back1-1}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid126", tween: [ "style", "${_SELECT_wCylinder2}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 300, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_back1-3}", "top", '585px', { fromValue: '516px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_back1-7}", "left", '20px', { fromValue: '387px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid128", tween: [ "style", "${_SELECT_wCylinder1-2}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 300, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "transform", "${_back1-7}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid34", tween: [ "style", "${_wCylinder1-2}", "left", '418px', { fromValue: '561px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "style", "${_back1-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_back1-2}", "left", '753px', { fromValue: '597px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "transform", "${_back1-4}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid104", tween: [ "style", "${_back1-6}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid16", tween: [ "style", "${_back1-4}", "top", '439px', { fromValue: '477px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_back1-6}", "left", '621px', { fromValue: '550px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_back1-7}", "top", '168px', { fromValue: '392px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid132", tween: [ "style", "${_SELECT_wCylinder1-3}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 300, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_wCylinder1-1}", "left", '437px', { fromValue: '541px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_back1-4}", "left", '509px', { fromValue: '472px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_wCylinder1-3}", "left", '362px', { fromValue: '545px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_wCylinder1-3}", "top", '403px', { fromValue: '501px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "transform", "${_back1-2}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid60", tween: [ "transform", "${_back1-5}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid6", tween: [ "style", "${_back1-3}", "left", '369px', { fromValue: '425px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "transform", "${_back1-6}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid94", tween: [ "style", "${_wCylinder1-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid98", tween: [ "style", "${_back1-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid24", tween: [ "style", "${_back1-6}", "top", '796px', { fromValue: '701px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "transform", "${_back1-2}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid68", tween: [ "transform", "${_back1-4}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid122", tween: [ "style", "${_back2}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 266, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "transform", "${_back1-3}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid20", tween: [ "style", "${_back1-5}", "top", '741px', { fromValue: '699px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_drum}", "left", '780px', { fromValue: '412px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid118", tween: [ "transform", "${_back2}", "scaleY", '1', { fromValue: '0.9'}], position: 267, duration: 266, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_back1-4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid130", tween: [ "style", "${_SELECT_wCylinder1-1}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 300, easing: "easeOutQuad" },
                { id: "eid120", tween: [ "style", "${_wCylinder2}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 266, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_drum}", "top", '620px', { fromValue: '406px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_back1-2}", "top", '399px', { fromValue: '456px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "transform", "${_wCylinder1-1}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid92", tween: [ "style", "${_back1-3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid46", tween: [ "transform", "${_wCylinder1-2}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid72", tween: [ "transform", "${_drum}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid96", tween: [ "style", "${_back1-5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid102", tween: [ "style", "${_drum}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid84", tween: [ "transform", "${_wCylinder1-3}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid36", tween: [ "style", "${_wCylinder1-2}", "top", '391px', { fromValue: '489px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "transform", "${_wCylinder2}", "scaleX", '1', { fromValue: '0.9'}], position: 267, duration: 266, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_back1-5}", "left", '574px', { fromValue: '487px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_back1-1}", "top", '521px', { fromValue: '536px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "style", "${_wCylinder1-3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid70", tween: [ "transform", "${_drum}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_back1-1}", "left", '909px', { fromValue: '686px'}], position: 633, duration: 400, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "transform", "${_back1-5}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid82", tween: [ "transform", "${_wCylinder1-3}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid74", tween: [ "transform", "${_back1-6}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid54", tween: [ "transform", "${_wCylinder1-1}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid32", tween: [ "style", "${_wCylinder1-1}", "top", '428px', { fromValue: '489px'}], position: 633, duration: 400, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-21540836");
