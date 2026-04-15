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
                rect: ['768', '219','492','402','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back2.png"]
            },
            {
                id: 'disk',
                type: 'image',
                tag: 'img',
                rect: ['1069', '508','343','416','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"disk.png"]
            },
            {
                id: 'SELECT_disk',
                type: 'image',
                tag: 'img',
                rect: ['1069', '508','343','416','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SELECT_disk.png"]
            },
            {
                id: 'back1',
                type: 'image',
                tag: 'img',
                rect: ['1156', '600','232','266','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back1.png"]
            },
            {
                id: 'calliper1',
                type: 'image',
                tag: 'img',
                rect: ['978', '364','251','575','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"calliper1.png"]
            },
            {
                id: 'calliper2-5',
                type: 'image',
                tag: 'img',
                rect: ['518px', '356px','215','414','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"calliper2-5.png"]
            },
            {
                id: 'pad-6',
                type: 'image',
                tag: 'img',
                rect: ['213px', '919px','162','125','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pad-6.png"]
            },
            {
                id: 'pad-5',
                type: 'image',
                tag: 'img',
                rect: ['97px', '600px','119','165','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pad-5.png"]
            },
            {
                id: 'pad-4',
                type: 'image',
                tag: 'img',
                rect: ['216px', '618px','112','251','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pad-4.png"]
            },
            {
                id: 'pad-3',
                type: 'image',
                tag: 'img',
                rect: ['325px', '690px','114','250','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pad-3.png"]
            },
            {
                id: 'pad-2',
                type: 'image',
                tag: 'img',
                rect: ['446px', '791px','104','199','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pad-2.png"]
            },
            {
                id: 'pad-1',
                type: 'image',
                tag: 'img',
                rect: ['293px', '556px','158','87','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pad-1.png"]
            },
            {
                id: 'calliper2-2',
                type: 'image',
                tag: 'img',
                rect: ['301px', '380px','53','64','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"calliper2-2.png"]
            },
            {
                id: 'calliper2-3',
                type: 'image',
                tag: 'img',
                rect: ['350px', '410px','78','74','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"calliper2-3.png"]
            },
            {
                id: 'calliper2-4',
                type: 'image',
                tag: 'img',
                rect: ['424px', '450px','56','65','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"calliper2-4.png"]
            },
            {
                id: 'calliper2-1',
                type: 'image',
                tag: 'img',
                rect: ['18px', '185px','271','355','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"calliper2-1.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_disk}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_back2}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_calliper2-5}": [
                ["style", "top", '509px'],
                ["style", "opacity", '0'],
                ["style", "left", '992px']
            ],
            "${_pad-1}": [
                ["style", "top", '589px'],
                ["style", "opacity", '0'],
                ["style", "left", '1023px']
            ],
            "${_pad-2}": [
                ["style", "top", '670px'],
                ["style", "opacity", '0'],
                ["style", "left", '1067px']
            ],
            "${_pad-6}": [
                ["style", "top", '761px'],
                ["style", "opacity", '0'],
                ["style", "left", '1004px']
            ],
            "${_back1}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_SELECT_disk}": [
                ["style", "opacity", '0']
            ],
            "${_pad-5}": [
                ["style", "top", '638px'],
                ["style", "opacity", '0'],
                ["style", "left", '992px']
            ],
            "${_calliper2-4}": [
                ["style", "top", '632px'],
                ["style", "opacity", '0'],
                ["style", "left", '1062px']
            ],
            "${_calliper2-1}": [
                ["style", "top", '522px'],
                ["style", "opacity", '0'],
                ["style", "left", '931px']
            ],
            "${_calliper2-3}": [
                ["style", "top", '611px'],
                ["style", "opacity", '0'],
                ["style", "left", '1023px']
            ],
            "${_calliper1}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1430px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_calliper2-2}": [
                ["style", "top", '602px'],
                ["style", "opacity", '0'],
                ["style", "left", '1011px']
            ],
            "${_pad-4}": [
                ["style", "top", '597px'],
                ["style", "opacity", '0'],
                ["style", "left", '1011px']
            ],
            "${_pad-3}": [
                ["style", "top", '627px'],
                ["style", "opacity", '0'],
                ["style", "left", '1047px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1733,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "style", "${_calliper2-2}", "top", '449px', { fromValue: '602px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_calliper2-2}", "top", '380px', { fromValue: '449px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "style", "${_pad-1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "style", "${_pad-4}", "left", '402px', { fromValue: '1011px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_pad-4}", "left", '216px', { fromValue: '402px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_calliper2-4}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_pad-6}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "style", "${_pad-4}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_pad-5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "transform", "${_back1}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid47", tween: [ "style", "${_pad-3}", "left", '438px', { fromValue: '1047px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_pad-3}", "left", '325px', { fromValue: '438px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "transform", "${_disk}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid61", tween: [ "style", "${_calliper2-4}", "left", '453px', { fromValue: '1062px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_calliper2-4}", "left", '424px', { fromValue: '453px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "transform", "${_calliper1}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid58", tween: [ "style", "${_pad-6}", "top", '608px', { fromValue: '761px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_pad-6}", "top", '919px', { fromValue: '608px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid70", tween: [ "style", "${_pad-3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_calliper2-4}", "top", '479px', { fromValue: '632px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_calliper2-4}", "top", '450px', { fromValue: '479px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "style", "${_calliper2-2}", "left", '402px', { fromValue: '1011px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_calliper2-2}", "left", '301px', { fromValue: '402px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid106", tween: [ "transform", "${_back2}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid56", tween: [ "style", "${_calliper2-1}", "top", '369px', { fromValue: '522px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_calliper2-1}", "top", '185px', { fromValue: '369px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "transform", "${_disk}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid52", tween: [ "style", "${_calliper2-5}", "top", '356px', { fromValue: '509px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_calliper2-5}", "top", '356px', { fromValue: '356px'}], position: 1200, duration: 0 },
                { id: "eid74", tween: [ "style", "${_calliper2-5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid55", tween: [ "style", "${_calliper2-1}", "left", '322px', { fromValue: '931px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_calliper2-1}", "left", '18px', { fromValue: '322px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid51", tween: [ "style", "${_calliper2-5}", "left", '383px', { fromValue: '992px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_calliper2-5}", "left", '518px', { fromValue: '383px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "style", "${_calliper2-2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid53", tween: [ "style", "${_calliper2-3}", "left", '414px', { fromValue: '1023px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_calliper2-3}", "left", '350px', { fromValue: '414px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid114", tween: [ "style", "${_back2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid65", tween: [ "style", "${_pad-1}", "left", '414px', { fromValue: '1023px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_pad-1}", "left", '293px', { fromValue: '414px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid104", tween: [ "transform", "${_back2}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid48", tween: [ "style", "${_pad-3}", "top", '474px', { fromValue: '627px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_pad-3}", "top", '690px', { fromValue: '474px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "style", "${_calliper2-3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "style", "${_calliper1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid116", tween: [ "style", "${_SELECT_disk}", "opacity", '1', { fromValue: '0'}], position: 1367, duration: 366, easing: "easeOutQuad" },
                { id: "eid78", tween: [ "style", "${_calliper2-1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_pad-1}", "top", '436px', { fromValue: '589px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_pad-1}", "top", '556px', { fromValue: '436px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "transform", "${_back1}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid112", tween: [ "style", "${_disk}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid94", tween: [ "transform", "${_calliper1}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid68", tween: [ "style", "${_pad-4}", "top", '444px', { fromValue: '597px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_pad-4}", "top", '618px', { fromValue: '444px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid59", tween: [ "style", "${_pad-5}", "left", '383px', { fromValue: '992px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_pad-5}", "left", '97px', { fromValue: '383px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "style", "${_pad-2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid60", tween: [ "style", "${_pad-5}", "top", '485px', { fromValue: '638px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_pad-5}", "top", '600px', { fromValue: '485px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "style", "${_pad-2}", "left", '458px', { fromValue: '1067px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_pad-2}", "left", '446px', { fromValue: '458px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "style", "${_calliper2-3}", "top", '458px', { fromValue: '611px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_calliper2-3}", "top", '410px', { fromValue: '458px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "style", "${_pad-6}", "left", '395px', { fromValue: '1004px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_pad-6}", "left", '213px', { fromValue: '395px'}], position: 967, duration: 333, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "style", "${_back1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInQuad" },
                { id: "eid64", tween: [ "style", "${_pad-2}", "top", '517px', { fromValue: '670px'}], position: 500, duration: 367, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_pad-2}", "top", '791px', { fromValue: '517px'}], position: 967, duration: 333, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-20250969");
