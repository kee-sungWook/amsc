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
                id: 'powerSteering',
                type: 'image',
                tag: 'img',
                rect: ['454', '45','1809','1140','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"powerSteering.png"]
            },
            {
                id: 'blackThing',
                type: 'image',
                tag: 'img',
                rect: ['454', '46','1808','1138','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blackThing.png"]
            },
            {
                id: 'whiteThing',
                type: 'image',
                tag: 'img',
                rect: ['454', '46','1808','1138','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whiteThing.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['135', '549','511','86','auto', 'auto'],
                text: "파워 스티어링",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'Text-1',
                type: 'text',
                rect: ['135', '696','1849','428','auto', 'auto'],
                text: "고형으로 된 웜과 롤러가 맞물려 있으며 롤러는 일반으로 니들베어링<br>또는 볼베어링을 거쳐서 섹터 샤프트에 장치되어 있다.<br><br>웜이 회전하면 반대방향으로 롤러가 회전하여 롤러가 웜의<br>홈치면을 전동하면서 섹터 샤프트를 회전시킨다. <br><br>따라서 기계효율은 비교적 높으나 회전각이 커져서 양단으로 가면서 효율은 저하한다. <br>또 웜이 고형으로 되어 있기 때문에 조향각도를 크게 할 때 웜이 굵어져 기어 전체가 커진다.",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_powerSteering}": [
                ["style", "opacity", '0']
            ],
            "${_Text}": [
                ["style", "opacity", '0']
            ],
            "${_blackThing}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text-1}": [
                ["style", "opacity", '0']
            ],
            "${_whiteThing}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1266,
            autoPlay: true,
            timeline: [
                { id: "eid48", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0.000000'}], position: 68, duration: 67 },
                { id: "eid50", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 135, duration: 66 },
                { id: "eid53", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0.000000'}], position: 201, duration: 67 },
                { id: "eid54", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 268, duration: 66 },
                { id: "eid57", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0.000000'}], position: 334, duration: 67 },
                { id: "eid58", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 401, duration: 66 },
                { id: "eid61", tween: [ "style", "${_blackThing}", "opacity", '1', { fromValue: '0.000000'}], position: 467, duration: 67 },
                { id: "eid62", tween: [ "style", "${_blackThing}", "opacity", '0', { fromValue: '1'}], position: 534, duration: 66 },
                { id: "eid64", tween: [ "style", "${_powerSteering}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 333 },
                { id: "eid68", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 933, duration: 333 },
                { id: "eid47", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 67 },
                { id: "eid49", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 67, duration: 66 },
                { id: "eid51", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0.000000'}], position: 133, duration: 67 },
                { id: "eid52", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 66 },
                { id: "eid55", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0.000000'}], position: 266, duration: 67 },
                { id: "eid56", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 66 },
                { id: "eid59", tween: [ "style", "${_whiteThing}", "opacity", '1', { fromValue: '0.000000'}], position: 399, duration: 67 },
                { id: "eid60", tween: [ "style", "${_whiteThing}", "opacity", '0', { fromValue: '1'}], position: 466, duration: 66 },
                { id: "eid66", tween: [ "style", "${_Text-1}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 333 }            ]
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
})(jQuery, AdobeEdge, "EDGE-41935568");
