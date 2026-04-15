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
                id: 'IMAGE',
                type: 'image',
                tag: 'img',
                rect: ['221px', '44px','926','625','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMAGE.png"]
            },
            {
                id: 'spring01',
                type: 'image',
                tag: 'img',
                rect: ['1018px', '186px','44','315','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring01.png"]
            },
            {
                id: 'spring02',
                type: 'image',
                tag: 'img',
                rect: ['964', '186px','44','315','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring02.png"]
            },
            {
                id: 'spring03',
                type: 'image',
                tag: 'img',
                rect: ['919', '186px','44','315','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring03.png"]
            },
            {
                id: 'spring04',
                type: 'image',
                tag: 'img',
                rect: ['869', '186px','44','315','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring04.png"]
            },
            {
                id: 'spring05',
                type: 'image',
                tag: 'img',
                rect: ['820', '186px','43','315','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring05.png"]
            },
            {
                id: 'body',
                type: 'image',
                tag: 'img',
                rect: ['222px', '45px','924','623','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body.png"]
            },
            {
                id: 'Layer-3',
                type: 'image',
                tag: 'img',
                rect: ['771', '161px','82','360','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Layer-3.png"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['811px', '106px','10px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['6']]
            },
            {
                id: 'RectangleCopy2',
                type: 'rect',
                rect: ['814px', '501px','10px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['-11']]
            },
            {
                id: 'a0',
                type: 'image',
                tag: 'img',
                rect: ['375px', '314px','257','58','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a0.png"]
            },
            {
                id: 'Ellipse2',
                type: 'ellipse',
                rect: ['740px', '482px','18px','18px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(15,202,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse2Copy',
                type: 'ellipse',
                rect: ['740px', '482px','18px','18px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(15,202,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse2Copy2',
                type: 'ellipse',
                rect: ['740px', '482px','18px','18px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(15,202,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse2Copy3',
                type: 'ellipse',
                rect: ['740px', '482px','18px','18px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(15,202,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['775px', '219px','18px','18px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(15,202,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'EllipseCopy',
                type: 'ellipse',
                rect: ['775px', '219px','18px','18px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(15,202,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'EllipseCopy2',
                type: 'ellipse',
                rect: ['775px', '219px','18px','18px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(15,202,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'EllipseCopy3',
                type: 'ellipse',
                rect: ['775px', '219px','18px','18px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(15,202,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'a02',
                type: 'image',
                tag: 'img',
                rect: ['1084', '323','107','43','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a02.png"]
            },
            {
                id: 'a03',
                type: 'image',
                tag: 'img',
                rect: ['629px', '624','29','134','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a03.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1042px', '856px','1334px','223px','auto', 'auto'],
                opacity: 1,
                text: "흡기다기관 내의 압력변화에 대응하여 연료분사량을 일정하게 유지<br>하는게 목적이다. 저속 또는 고속회전시는 연료량의 변화가 있으므로<br>저속시 남는 연료를 탱크로 리턴하는 역활을하며 엔진 회전속도와<br>관계없이 연료압력을 일정하게 유지한다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1035px', '756px','905px','92px','auto', 'auto'],
                text: "연료압력조절기란?",
                font: ['abel, sans-serif', 75, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1212px', '315px','auto','auto','auto', 'auto'],
                text: "진공형성",
                align: "left",
                font: ['나눔고딕, NanumGothic', 45, "rgba(167,21,254,1.00)", "600", "none", "normal"]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['592px', '788px','123px','auto','auto', 'auto'],
                text: "연료 ",
                align: "left",
                font: ['나눔고딕, NanumGothic', 45, "rgba(22,152,254,1.00)", "600", "none", "normal"]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['33px', '315px','84px','auto','auto', 'auto'],
                text: "토출",
                align: "left",
                font: ['나눔고딕, NanumGothic', 45, "rgba(22,152,254,1.00)", "600", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Ellipse2}": [
                ["motion", "location", '749.3330078125px 491.3330078125px'],
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '1040px'],
                ["style", "font-size", '40px'],
                ["style", "top", '874px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '223px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "width", '1334px']
            ],
            "${_spring03}": [
                ["style", "left", '919px']
            ],
            "${_Ellipse2Copy2}": [
                ["motion", "location", '749.33px 491.33px'],
                ["style", "opacity", '0']
            ],
            "${_RectangleCopy2}": [
                ["style", "top", '500px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-11deg'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '821px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '6deg'],
                ["style", "top", '106px'],
                ["style", "left", '815px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Ellipse2Copy3}": [
                ["motion", "location", '749.33px 491.33px'],
                ["style", "opacity", '0']
            ],
            "${_EllipseCopy2}": [
                ["color", "background-color", 'rgba(15,202,255,1.00)'],
                ["style", "opacity", '0'],
                ["motion", "location", '784.13px 228.13px']
            ],
            "${_EllipseCopy3}": [
                ["color", "background-color", 'rgba(15,202,255,1.00)'],
                ["style", "opacity", '0'],
                ["motion", "location", '784.13px 228.13px']
            ],
            "${_a02}": [
                ["style", "top", '322px'],
                ["style", "opacity", '0'],
                ["style", "left", '986px']
            ],
            "${_Ellipse2Copy}": [
                ["motion", "location", '749.33px 491.33px'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(15,202,255,1.00)'],
                ["style", "opacity", '0'],
                ["motion", "location", '784.1337890625px 228.13330078125px']
            ],
            "${_a03}": [
                ["style", "top", '624px'],
                ["style", "opacity", '0']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(15,202,255,1.00)'],
                ["style", "opacity", '0'],
                ["motion", "location", '784.13px 228.13px']
            ],
            "${_spring02}": [
                ["style", "left", '964px']
            ],
            "${_spring05}": [
                ["style", "left", '820px']
            ],
            "${_spring04}": [
                ["style", "left", '869px']
            ],
            "${_Layer-3}": [
                ["style", "left", '771px']
            ],
            "${_Text}": [
                ["style", "top", '315px'],
                ["style", "opacity", '0'],
                ["style", "left", '1212px'],
                ["color", "color", 'rgba(167,21,254,1.00)']
            ],
            "${_a0}": [
                ["style", "top", '314px'],
                ["style", "opacity", '0'],
                ["style", "left", '375px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1033px'],
                ["style", "font-size", '75px'],
                ["style", "top", '756px'],
                ["transform", "scaleY", '1.1'],
                ["style", "width", '905px'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0']
            ],
            "${_TextCopy}": [
                ["color", "color", 'rgba(22,152,254,1.00)'],
                ["style", "top", '788px'],
                ["style", "left", '592px'],
                ["style", "width", '123px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '315px'],
                ["color", "color", 'rgba(22,152,254,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '33px'],
                ["style", "width", '134px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3609,
            autoPlay: true,
            labels: {
                "a1": 333
            },
            timeline: [
                { id: "eid14", tween: [ "transform", "${_Rectangle}", "scaleY", '1.3962', { fromValue: '1'}], position: 500, duration: 1000 },
                { id: "eid107", tween: [ "transform", "${_Rectangle}", "scaleY", '1', { fromValue: '1.3962'}], position: 2609, duration: 1000 },
                { id: "eid178", tween: [ "motion", "${_EllipseCopy}", [[784.13, 228.13, 0, 0],[821.82, 298.5, 9.88, 165.71, 9.71, 162.9],[673.73, 339.6, 0, 0]]], position: 2000, duration: 236 },
                { id: "eid149", tween: [ "style", "${_a0}", "left", '108px', { fromValue: '375px'}], position: 2356, duration: 269 },
                { id: "eid220", tween: [ "motion", "${_Ellipse2}", [[749.33, 491.33, 0, 0],[824.32, 411.44, -8.49, -288.11, -6.84, -232.25],[684.67, 345.33, 0, 0]]], position: 1965, duration: 237 },
                { id: "eid182", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 2042, duration: 48 },
                { id: "eid183", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 2090, duration: 237 },
                { id: "eid179", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 49 },
                { id: "eid180", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 2049, duration: 236 },
                { id: "eid48", tween: [ "style", "${_a03}", "top", '534px', { fromValue: '624px'}], position: 375, duration: 333 },
                { id: "eid847", tween: [ "style", "${_a03}", "top", '534px', { fromValue: '624px'}], position: 1000, duration: 333 },
                { id: "eid850", tween: [ "style", "${_a03}", "top", '534px', { fromValue: '624px'}], position: 1625, duration: 333 },
                { id: "eid853", tween: [ "style", "${_a03}", "top", '534px', { fromValue: '624px'}], position: 2250, duration: 333 },
                { id: "eid856", tween: [ "style", "${_a03}", "top", '534px', { fromValue: '624px'}], position: 2875, duration: 333 },
                { id: "eid7", tween: [ "style", "${_Rectangle}", "left", '815px', { fromValue: '815px'}], position: 500, duration: 1000 },
                { id: "eid106", tween: [ "style", "${_Rectangle}", "left", '815px', { fromValue: '815px'}], position: 2609, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_RectangleCopy2}", "top", '500px', { fromValue: '500px'}], position: 500, duration: 1000 },
                { id: "eid104", tween: [ "style", "${_RectangleCopy2}", "top", '500px', { fromValue: '500px'}], position: 2609, duration: 1000 },
                { id: "eid237", tween: [ "style", "${_Ellipse2Copy3}", "opacity", '1', { fromValue: '0'}], position: 2083, duration: 63 },
                { id: "eid238", tween: [ "style", "${_Ellipse2Copy3}", "opacity", '0', { fromValue: '1'}], position: 2146, duration: 240 },
                { id: "eid1352", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid1355", tween: [ "style", "${_txt1}", "left", '1040px', { fromValue: '1040px'}], position: 458, duration: 0 },
                { id: "eid781", tween: [ "style", "${_a03}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 42 },
                { id: "eid255", tween: [ "style", "${_a03}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 208 },
                { id: "eid848", tween: [ "style", "${_a03}", "opacity", '1', { fromValue: '0'}], position: 958, duration: 42 },
                { id: "eid849", tween: [ "style", "${_a03}", "opacity", '0', { fromValue: '1'}], position: 1125, duration: 208 },
                { id: "eid851", tween: [ "style", "${_a03}", "opacity", '1', { fromValue: '0'}], position: 1583, duration: 42 },
                { id: "eid852", tween: [ "style", "${_a03}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 208 },
                { id: "eid854", tween: [ "style", "${_a03}", "opacity", '1', { fromValue: '0'}], position: 2208, duration: 42 },
                { id: "eid855", tween: [ "style", "${_a03}", "opacity", '0', { fromValue: '1'}], position: 2375, duration: 208 },
                { id: "eid857", tween: [ "style", "${_a03}", "opacity", '1', { fromValue: '0'}], position: 2833, duration: 42 },
                { id: "eid858", tween: [ "style", "${_a03}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 208 },
                { id: "eid1346", tween: [ "transform", "${_txt_title}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid233", tween: [ "motion", "${_Ellipse2Copy2}", [[749.33, 491.33, 0, 0],[824.32, 411.44, -8.49, -288.11, -6.84, -232.25],[684.67, 345.33, 0, 0]]], position: 2042, duration: 242 },
                { id: "eid12", tween: [ "transform", "${_RectangleCopy2}", "scaleY", '1.28347', { fromValue: '1'}], position: 500, duration: 1000 },
                { id: "eid101", tween: [ "transform", "${_RectangleCopy2}", "scaleY", '1', { fromValue: '1.28347'}], position: 2609, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_spring03}", "left", '956px', { fromValue: '919px'}], position: 500, duration: 1000 },
                { id: "eid113", tween: [ "style", "${_spring03}", "left", '919px', { fromValue: '956px'}], position: 2609, duration: 1000 },
                { id: "eid898", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 1625, duration: 333 },
                { id: "eid901", tween: [ "style", "${_TextCopy2}", "opacity", '0', { fromValue: '1'}], position: 2646, duration: 334 },
                { id: "eid1354", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 83, duration: 250 },
                { id: "eid5", tween: [ "style", "${_Layer-3}", "left", '848px', { fromValue: '771px'}], position: 500, duration: 1000 },
                { id: "eid109", tween: [ "style", "${_Layer-3}", "left", '771px', { fromValue: '848px'}], position: 2609, duration: 1000 },
                { id: "eid1359", tween: [ "style", "${_txt_title}", "left", '1033px', { fromValue: '1033px'}], position: 250, duration: 0 },
                { id: "eid234", tween: [ "style", "${_Ellipse2Copy2}", "opacity", '1', { fromValue: '0'}], position: 2042, duration: 60 },
                { id: "eid235", tween: [ "style", "${_Ellipse2Copy2}", "opacity", '0', { fromValue: '1'}], position: 2102, duration: 231 },
                { id: "eid173", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 1965, duration: 40 },
                { id: "eid174", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 2005, duration: 238 },
                { id: "eid231", tween: [ "style", "${_Ellipse2Copy}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 67 },
                { id: "eid232", tween: [ "style", "${_Ellipse2Copy}", "opacity", '0', { fromValue: '1'}], position: 2067, duration: 218 },
                { id: "eid230", tween: [ "motion", "${_Ellipse2Copy}", [[749.33, 491.33, 0, 0],[824.32, 411.44, -8.49, -288.11, -6.84, -232.25],[684.67, 345.33, 0, 0]]], position: 2000, duration: 237 },
                { id: "eid1344", tween: [ "transform", "${_txt_title}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 250 },
                { id: "eid148", tween: [ "style", "${_a0}", "opacity", '1', { fromValue: '0'}], position: 2292, duration: 26 },
                { id: "eid1193", tween: [ "style", "${_a0}", "opacity", '0', { fromValue: '1'}], position: 2542, duration: 83 },
                { id: "eid184", tween: [ "motion", "${_EllipseCopy3}", [[784.13, 228.13, 0, 0],[821.82, 298.5, 9.88, 165.71, 9.71, 162.9],[673.73, 339.6, 0, 0]]], position: 2083, duration: 242 },
                { id: "eid171", tween: [ "motion", "${_Ellipse}", [[784.13, 228.13, 0, 0],[821.82, 298.5, 9.88, 165.71, 9.71, 162.9],[673.73, 339.6, 0, 0]]], position: 1965, duration: 230 },
                { id: "eid6", tween: [ "style", "${_Rectangle}", "-webkit-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 500, duration: 1000 },
                { id: "eid1456", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 500, duration: 1000 },
                { id: "eid1457", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 500, duration: 1000 },
                { id: "eid1458", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 500, duration: 1000 },
                { id: "eid1459", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 500, duration: 1000 },
                { id: "eid105", tween: [ "style", "${_Rectangle}", "-webkit-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 2609, duration: 1000 },
                { id: "eid1460", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 2609, duration: 1000 },
                { id: "eid1461", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 2609, duration: 1000 },
                { id: "eid1462", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 2609, duration: 1000 },
                { id: "eid1463", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 2609, duration: 1000 },
                { id: "eid222", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0'}], position: 1965, duration: 90 },
                { id: "eid229", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 2055, duration: 195 },
                { id: "eid11", tween: [ "transform", "${_RectangleCopy2}", "rotateZ", '43deg', { fromValue: '-11deg'}], position: 500, duration: 1000 },
                { id: "eid102", tween: [ "transform", "${_RectangleCopy2}", "rotateZ", '-11deg', { fromValue: '43deg'}], position: 2609, duration: 1000 },
                { id: "eid150", tween: [ "style", "${_a0}", "top", '315px', { fromValue: '314px'}], position: 2356, duration: 269 },
                { id: "eid71", tween: [ "style", "${_a02}", "opacity", '1', { fromValue: '0'}], position: 917, duration: 219 },
                { id: "eid72", tween: [ "style", "${_a02}", "opacity", '0', { fromValue: '1'}], position: 1134, duration: 74 },
                { id: "eid74", tween: [ "style", "${_a02}", "opacity", '1', { fromValue: '0'}], position: 1375, duration: 250 },
                { id: "eid75", tween: [ "style", "${_a02}", "opacity", '0', { fromValue: '1'}], position: 1623, duration: 85 },
                { id: "eid78", tween: [ "style", "${_a02}", "opacity", '1', { fromValue: '0'}], position: 1916, duration: 250 },
                { id: "eid79", tween: [ "style", "${_a02}", "opacity", '0', { fromValue: '1'}], position: 2165, duration: 84 },
                { id: "eid4", tween: [ "style", "${_spring05}", "left", '897px', { fromValue: '820px'}], position: 500, duration: 1000 },
                { id: "eid110", tween: [ "style", "${_spring05}", "left", '820px', { fromValue: '897px'}], position: 2609, duration: 1000 },
                { id: "eid13", tween: [ "transform", "${_Rectangle}", "rotateZ", '-43deg', { fromValue: '6deg'}], position: 500, duration: 1000 },
                { id: "eid108", tween: [ "transform", "${_Rectangle}", "rotateZ", '6deg', { fromValue: '-43deg'}], position: 2609, duration: 1000 },
                { id: "eid69", tween: [ "style", "${_a02}", "top", '323px', { fromValue: '322px'}], position: 917, duration: 219 },
                { id: "eid73", tween: [ "style", "${_a02}", "top", '323px', { fromValue: '322px'}], position: 1375, duration: 250 },
                { id: "eid77", tween: [ "style", "${_a02}", "top", '323px', { fromValue: '322px'}], position: 1916, duration: 250 },
                { id: "eid236", tween: [ "motion", "${_Ellipse2Copy3}", [[749.33, 491.33, 0, 0],[824.32, 411.44, -8.49, -288.11, -6.84, -232.25],[684.67, 345.33, 0, 0]]], position: 2083, duration: 251 },
                { id: "eid181", tween: [ "motion", "${_EllipseCopy2}", [[784.13, 228.13, 0, 0],[821.82, 298.5, 9.88, 165.71, 9.71, 162.9],[673.73, 339.6, 0, 0]]], position: 2042, duration: 237 },
                { id: "eid8", tween: [ "style", "${_RectangleCopy2}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 500, duration: 1000 },
                { id: "eid1464", tween: [ "style", "${_RectangleCopy2}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 500, duration: 1000 },
                { id: "eid1465", tween: [ "style", "${_RectangleCopy2}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 500, duration: 1000 },
                { id: "eid1466", tween: [ "style", "${_RectangleCopy2}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 500, duration: 1000 },
                { id: "eid1467", tween: [ "style", "${_RectangleCopy2}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 500, duration: 1000 },
                { id: "eid100", tween: [ "style", "${_RectangleCopy2}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2609, duration: 1000 },
                { id: "eid1468", tween: [ "style", "${_RectangleCopy2}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2609, duration: 1000 },
                { id: "eid1469", tween: [ "style", "${_RectangleCopy2}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2609, duration: 1000 },
                { id: "eid1470", tween: [ "style", "${_RectangleCopy2}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2609, duration: 1000 },
                { id: "eid1471", tween: [ "style", "${_RectangleCopy2}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2609, duration: 1000 },
                { id: "eid9", tween: [ "style", "${_RectangleCopy2}", "left", '821px', { fromValue: '821px'}], position: 500, duration: 1000 },
                { id: "eid103", tween: [ "style", "${_RectangleCopy2}", "left", '821px', { fromValue: '821px'}], position: 2609, duration: 1000 },
                { id: "eid1048", tween: [ "style", "${_TextCopy2}", "width", '134px', { fromValue: '134px'}], position: 1803, duration: 0 },
                { id: "eid1", tween: [ "style", "${_spring02}", "left", '987px', { fromValue: '964px'}], position: 500, duration: 1000 },
                { id: "eid114", tween: [ "style", "${_spring02}", "left", '964px', { fromValue: '987px'}], position: 2609, duration: 1000 },
                { id: "eid67", tween: [ "style", "${_a02}", "left", '1084px', { fromValue: '986px'}], position: 917, duration: 219 },
                { id: "eid76", tween: [ "style", "${_a02}", "left", '1084px', { fromValue: '986px'}], position: 1375, duration: 250 },
                { id: "eid80", tween: [ "style", "${_a02}", "left", '1084px', { fromValue: '986px'}], position: 1916, duration: 250 },
                { id: "eid1350", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '1.1'}], position: 83, duration: 250 },
                { id: "eid1348", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '1.1'}], position: 83, duration: 250 },
                { id: "eid892", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 916, duration: 250 },
                { id: "eid896", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250 },
                { id: "eid185", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 2083, duration: 61 },
                { id: "eid186", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 2144, duration: 231 },
                { id: "eid3", tween: [ "style", "${_spring04}", "left", '926px', { fromValue: '869px'}], position: 500, duration: 1000 },
                { id: "eid112", tween: [ "style", "${_spring04}", "left", '869px', { fromValue: '926px'}], position: 2609, duration: 1000 },
                { id: "eid1358", tween: [ "style", "${_txt1}", "top", '874px', { fromValue: '874px'}], position: 458, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-12672771");
