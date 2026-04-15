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
                id: 'cover2',
                type: 'image',
                tag: 'img',
                rect: ['857', '656','255','217','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover2.png"]
            },
            {
                id: 'h_cover',
                type: 'image',
                tag: 'img',
                rect: ['1396', '38','189','238','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h_cover.png"]
            },
            {
                id: 'h_volt',
                type: 'image',
                tag: 'img',
                rect: ['1344', '194','57','52','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h_volt.png"]
            },
            {
                id: 'handle',
                type: 'image',
                tag: 'img',
                rect: ['1072', '132','293','367','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"handle.png"]
            },
            {
                id: 'head',
                type: 'image',
                tag: 'img',
                rect: ['806', '370','331','253','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"head.png"]
            },
            {
                id: 'body',
                type: 'image',
                tag: 'img',
                rect: ['315', '503','574','348','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body.png"]
            },
            {
                id: 'body_E',
                type: 'image',
                tag: 'img',
                rect: ['93', '305','551','342','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body_E.png"]
            },
            {
                id: 'leg',
                type: 'image',
                tag: 'img',
                rect: ['79', '854','207','338','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"leg.png"]
            },
            {
                id: 'cover1',
                type: 'image',
                tag: 'img',
                rect: ['754', '137','247','217','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover1.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1424', '334','714','86','auto', 'auto'],
                text: "스티어링 휠 이란?",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'Text-1',
                type: 'text',
                rect: ['1434', '464','889','644','auto', 'auto'],
                text: "차의 진행방향을 바꾸기 위해 운전자가<br>조작하는 조향기구 (스티어링 핸들).<br><br>원형의 림과 중앙부의 허브, 림과 허브를<br>연결하는 3 포크로 구성되고 있고,<br>허브와 3포크에 혼(경적기)을 단 것이 많다.<br><br>림의지름이 크면 조향조작을 가볍게 할 수<br>있지만 운전자의 움직임이 커지고, 지름이<br>작으면 빠르게 돌릴 수는 있으나 스티어링<br>휠이 무거워져 차의 성격에 따라<br>적당한 크기를 선택해야 한다.",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'Text-2',
                type: 'text',
                rect: ['241', '592','139','50','auto', 'auto'],
                text: "전동식",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'Text-3',
                type: 'text',
                rect: ['480', '786','139','50','auto', 'auto'],
                text: "기계식",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_h_cover}": [
                ["style", "top", '289px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '997px']
            ],
            "${_leg}": [
                ["style", "top", '712px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '290px']
            ],
            "${_h_volt}": [
                ["style", "top", '367px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1014px']
            ],
            "${_head}": [
                ["style", "top", '338px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '832px']
            ],
            "${_Text-1}": [
                ["style", "opacity", '0']
            ],
            "${_Text-2}": [
                ["style", "opacity", '0']
            ],
            "${_body_E}": [
                ["style", "top", '420px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '446px']
            ],
            "${_handle}": [
                ["style", "top", '212px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '930px']
            ],
            "${_Text}": [
                ["style", "opacity", '0']
            ],
            "${_cover1}": [
                ["style", "top", '346px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '814px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_cover2}": [
                ["style", "top", '393px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '832px']
            ],
            "${_body}": [
                ["style", "top", '395px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '475px']
            ],
            "${_Text-3}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1367,
            autoPlay: true,
            timeline: [
                { id: "eid38", tween: [ "transform", "${_head}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_cover1}", "left", '754px', { fromValue: '814px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_head}", "top", '370px', { fromValue: '338px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_h_volt}", "top", '194px', { fromValue: '367px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "style", "${_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid98", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 367, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "transform", "${_cover1}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid2", tween: [ "style", "${_body}", "left", '315px', { fromValue: '475px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "style", "${_h_cover}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid66", tween: [ "transform", "${_h_volt}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid96", tween: [ "style", "${_Text-1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 367, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "transform", "${_cover2}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_handle}", "top", '132px', { fromValue: '212px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_h_volt}", "left", '1344px', { fromValue: '1014px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "transform", "${_leg}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid52", tween: [ "transform", "${_leg}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid40", tween: [ "transform", "${_head}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid48", tween: [ "transform", "${_body_E}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid88", tween: [ "style", "${_h_volt}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid20", tween: [ "style", "${_h_cover}", "top", '38px', { fromValue: '289px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_body}", "top", '503px', { fromValue: '395px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_cover2}", "top", '656px', { fromValue: '393px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "transform", "${_body}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid30", tween: [ "style", "${_leg}", "left", '79px', { fromValue: '290px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "transform", "${_body}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_cover2}", "left", '857px', { fromValue: '832px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_leg}", "top", '854px', { fromValue: '712px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "transform", "${_h_cover}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid24", tween: [ "style", "${_cover1}", "top", '137px', { fromValue: '346px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_h_cover}", "left", '1396px', { fromValue: '997px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_body}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid92", tween: [ "style", "${_Text-2}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 267, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_head}", "left", '806px', { fromValue: '832px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "transform", "${_h_cover}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid78", tween: [ "style", "${_body_E}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_handle}", "left", '1072px', { fromValue: '930px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_leg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid60", tween: [ "transform", "${_cover1}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid46", tween: [ "transform", "${_body_E}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid72", tween: [ "transform", "${_handle}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid70", tween: [ "transform", "${_handle}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid76", tween: [ "style", "${_cover2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid90", tween: [ "style", "${_handle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid68", tween: [ "transform", "${_h_volt}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid36", tween: [ "style", "${_body_E}", "top", '305px', { fromValue: '420px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_Text-3}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 267, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_cover1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid34", tween: [ "style", "${_body_E}", "left", '93px', { fromValue: '446px'}], position: 433, duration: 300, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "transform", "${_cover2}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 367, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-42224011");
