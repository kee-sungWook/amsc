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
                id: 'car',
                type: 'image',
                tag: 'img',
                rect: ['93', '286','1661','732','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car.png"]
            },
            {
                id: 'flow_back',
                type: 'image',
                tag: 'img',
                rect: ['534', '638','1188','463','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flow_back.png"]
            },
            {
                id: 'FLOW4',
                type: 'rect',
                rect: ['681', '900','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW2',
                type: 'rect',
                rect: ['640px', '663px','auto','auto','auto', 'auto'],
                transform: [[],['14']]
            },
            {
                id: 'FLOW3',
                type: 'rect',
                rect: ['702', '644','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW1',
                type: 'rect',
                rect: ['654px', '631px','auto','auto','auto', 'auto'],
                transform: [[],['-19']]
            },
            {
                id: 'module_green',
                type: 'image',
                tag: 'img',
                rect: ['121', '1037','416','125','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"module_green.png"]
            },
            {
                id: 'MODULE',
                type: 'rect',
                rect: ['577', '601','auto','auto','auto', 'auto']
            },
            {
                id: 'SIGNAL',
                type: 'rect',
                rect: ['928', '1116','auto','auto','auto', 'auto']
            },
            {
                id: 'key2',
                type: 'image',
                tag: 'img',
                rect: ['960', '1091','177','90','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"key2.png"]
            },
            {
                id: 'key1',
                type: 'image',
                tag: 'img',
                rect: ['1263', '253','230','230','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"key1.png"]
            },
            {
                id: 'txt_module_red',
                type: 'text',
                rect: ['141px', '1073px','295','51','auto', 'auto'],
                text: "도어잠금해제 명령",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_key_signal',
                type: 'text',
                rect: ['1200', '1065','295','109','auto', 'auto'],
                text: "도어핸들<br>푸시버튼 누름",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'IPM',
                type: 'text',
                rect: ['593px', '880px','82','51','auto', 'auto'],
                text: "IPM",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c5',
                type: 'text',
                rect: ['1589', '848','188','109','auto', 'auto'],
                text: "스마트키<br>유니트",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c4',
                type: 'text',
                rect: ['1665px', '451','142px','109','auto', 'auto'],
                text: "범퍼<br>안테나",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c3',
                type: 'text',
                rect: ['1441', '705','234','51','auto', 'auto'],
                text: "실내안테나",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c2',
                type: 'text',
                rect: ['1060', '705','234','51','auto', 'auto'],
                text: "실내안테나",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['400', '619','215','51','auto', 'auto'],
                text: "RF 수신기",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['631px', '68','1213','106','auto', 'auto'],
                text: "스마트키 시스템은 스마트키 소지자가 도어핸들의 푸쉬 버튼을 <br>작동함으로서 도어 LOCK, UNLOCK, 시동기능이 가능합니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['15px', '41px','630px','145','auto', 'auto'],
                text: "도어잠금해제기능<br>(UNLOCK)",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'FLOW2',
                symbolName: 'FLOW2',
                autoPlay: {

                }
            },
            {
                id: 'FLOW1',
                symbolName: 'FLOW1',
                autoPlay: {

                }
            },
            {
                id: 'FLOW4',
                symbolName: 'FLOW4',
                autoPlay: {

                }
            },
            {
                id: 'FLOW3',
                symbolName: 'FLOW3',
                autoPlay: {

                }
            },
            {
                id: 'SIGNAL',
                symbolName: 'SIGNAL',
                autoPlay: {

                }
            },
            {
                id: 'MODULE',
                symbolName: 'MODULE',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_txt_c5}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW2}": [
                ["style", "top", '663px'],
                ["transform", "rotateZ", '14deg'],
                ["style", "opacity", '0'],
                ["style", "left", '640px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_FLOW1}": [
                ["style", "top", '631px'],
                ["transform", "rotateZ", '-19deg'],
                ["style", "opacity", '0'],
                ["style", "left", '654px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_txt2}": [
                ["style", "left", '631px'],
                ["style", "opacity", '0']
            ],
            "${_key2}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_txt1}": [
                ["style", "top", '41px'],
                ["style", "opacity", '0'],
                ["style", "left", '15px'],
                ["style", "width", '630px']
            ],
            "${_txt_key_signal}": [
                ["style", "opacity", '0']
            ],
            "${_txt_module_red}": [
                ["style", "top", '1073px'],
                ["style", "opacity", '0'],
                ["style", "left", '141px'],
                ["style", "width", '398px']
            ],
            "${_txt_c1}": [
                ["style", "opacity", '0']
            ],
            "${_car}": [
                ["style", "left", '143px'],
                ["style", "opacity", '0']
            ],
            "${_txt_c3}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c4}": [
                ["style", "opacity", '0'],
                ["style", "left", '1665px'],
                ["style", "width", '142px']
            ],
            "${_MODULE}": [
                ["style", "opacity", '0']
            ],
            "${_txt_c2}": [
                ["style", "opacity", '0']
            ],
            "${_flow_back}": [
                ["style", "opacity", '0']
            ],
            "${_module_green}": [
                ["style", "opacity", '0']
            ],
            "${_key1}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_IPM}": [
                ["style", "top", '880px'],
                ["style", "opacity", '0'],
                ["style", "left", '593px']
            ],
            "${_FLOW4}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW3}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2534,
            autoPlay: true,
            timeline: [
                { id: "eid218", tween: [ "style", "${_FLOW2}", "opacity", '1', { fromValue: '0'}], position: 2024, duration: 404, easing: "easeInQuad" },
                { id: "eid196", tween: [ "transform", "${_key1}", "scaleX", '1', { fromValue: '0.9'}], position: 1281, duration: 404, easing: "easeInQuad" },
                { id: "eid192", tween: [ "style", "${_txt_c4}", "opacity", '1', { fromValue: '0'}], position: 1111, duration: 403, easing: "easeInQuad" },
                { id: "eid303", tween: [ "style", "${_txt_module_red}", "width", '398px', { fromValue: '398px'}], position: 2321, duration: 0, easing: "easeInQuad" },
                { id: "eid166", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 498, easing: "easeInQuad" },
                { id: "eid92", tween: [ "style", "${_FLOW1}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid360", tween: [ "style", "${_FLOW1}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid361", tween: [ "style", "${_FLOW1}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid362", tween: [ "style", "${_FLOW1}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid363", tween: [ "style", "${_FLOW1}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid164", tween: [ "style", "${_car}", "opacity", '1', { fromValue: '0'}], position: 289, duration: 498, easing: "easeInQuad" },
                { id: "eid91", tween: [ "style", "${_FLOW2}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid364", tween: [ "style", "${_FLOW2}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid365", tween: [ "style", "${_FLOW2}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid366", tween: [ "style", "${_FLOW2}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid367", tween: [ "style", "${_FLOW2}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 813, duration: 0, easing: "easeInQuad" },
                { id: "eid188", tween: [ "style", "${_IPM}", "opacity", '1', { fromValue: '0'}], position: 1111, duration: 403, easing: "easeInQuad" },
                { id: "eid210", tween: [ "style", "${_txt_module_red}", "opacity", '1', { fromValue: '0'}], position: 1472, duration: 404, easing: "easeInQuad" },
                { id: "eid206", tween: [ "style", "${_key2}", "opacity", '1', { fromValue: '0'}], position: 1281, duration: 404, easing: "easeInQuad" },
                { id: "eid212", tween: [ "style", "${_FLOW4}", "opacity", '1', { fromValue: '0'}], position: 2130, duration: 404, easing: "easeInQuad" },
                { id: "eid216", tween: [ "style", "${_FLOW1}", "opacity", '1', { fromValue: '0'}], position: 1811, duration: 404, easing: "easeInQuad" },
                { id: "eid186", tween: [ "style", "${_txt_c3}", "opacity", '1', { fromValue: '0'}], position: 1111, duration: 403, easing: "easeInQuad" },
                { id: "eid182", tween: [ "style", "${_flow_back}", "opacity", '1', { fromValue: '0'}], position: 942, duration: 403, easing: "easeInQuad" },
                { id: "eid208", tween: [ "style", "${_txt_key_signal}", "opacity", '1', { fromValue: '0'}], position: 1472, duration: 404, easing: "easeInQuad" },
                { id: "eid198", tween: [ "transform", "${_key1}", "scaleY", '1', { fromValue: '0.9'}], position: 1281, duration: 404, easing: "easeInQuad" },
                { id: "eid202", tween: [ "transform", "${_key2}", "scaleY", '1', { fromValue: '0.9'}], position: 1281, duration: 404, easing: "easeInQuad" },
                { id: "eid300", tween: [ "style", "${_module_green}", "opacity", '1', { fromValue: '0'}], position: 1111, duration: 403 },
                { id: "eid168", tween: [ "style", "${_car}", "left", '93px', { fromValue: '143px'}], position: 289, duration: 498, easing: "easeInQuad" },
                { id: "eid194", tween: [ "style", "${_txt_c1}", "opacity", '1', { fromValue: '0'}], position: 1111, duration: 403, easing: "easeInQuad" },
                { id: "eid204", tween: [ "style", "${_key1}", "opacity", '1', { fromValue: '0'}], position: 1281, duration: 404, easing: "easeInQuad" },
                { id: "eid200", tween: [ "transform", "${_key2}", "scaleX", '1', { fromValue: '0.9'}], position: 1281, duration: 404, easing: "easeInQuad" },
                { id: "eid184", tween: [ "style", "${_txt_c2}", "opacity", '1', { fromValue: '0'}], position: 1111, duration: 403, easing: "easeInQuad" },
                { id: "eid178", tween: [ "style", "${_MODULE}", "opacity", '1', { fromValue: '0'}], position: 708, duration: 403, easing: "easeInQuad" },
                { id: "eid190", tween: [ "style", "${_txt_c5}", "opacity", '1', { fromValue: '0'}], position: 1111, duration: 403, easing: "easeInQuad" },
                { id: "eid162", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 498, easing: "easeInQuad" },
                { id: "eid214", tween: [ "style", "${_FLOW3}", "opacity", '1', { fromValue: '0'}], position: 1917, duration: 404, easing: "easeInQuad" }            ]
        }
    }
},
"MODULE": {
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
                    type: 'image',
                    id: 'modules',
                    tag: 'img',
                    rect: ['1px', '0px', '1172', '352', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/modules.png']
                },
                {
                    type: 'image',
                    id: 'modules_whiteLine',
                    tag: 'img',
                    rect: ['0px', '10px', '995', '343', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/modules_whiteLine.png']
                },
                {
                    type: 'image',
                    id: 'modules_redLine',
                    tag: 'img',
                    rect: ['0px', '10px', '995', '343', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/modules_redLine.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_modules}": [
                ["style", "left", '1px'],
                ["style", "top", '0px']
            ],
            "${_modules_whiteLine}": [
                ["style", "top", '10px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_modules_redLine}": [
                ["style", "top", '10px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '353px'],
                ["style", "width", '1173px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 700,
            autoPlay: false,
            timeline: [
                { id: "eid4", tween: [ "style", "${_modules_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 233 },
                { id: "eid6", tween: [ "style", "${_modules_whiteLine}", "opacity", '0', { fromValue: '1'}], position: 467, duration: 233 },
                { id: "eid2", tween: [ "style", "${_modules_redLine}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233 },
                { id: "eid5", tween: [ "style", "${_modules_redLine}", "opacity", '0', { fromValue: '1'}], position: 233, duration: 233 }            ]
        }
    }
},
"SIGNAL": {
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
                    type: 'image',
                    id: 'signal_src',
                    tag: 'img',
                    rect: ['0px', '0px', '245', '74', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                },
                {
                    type: 'image',
                    id: 'signal_srcCopy6',
                    tag: 'img',
                    rect: ['0px', '0px', '245', '74', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                },
                {
                    type: 'image',
                    id: 'signal_srcCopy7',
                    tag: 'img',
                    rect: ['0px', '0px', '245', '74', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                },
                {
                    type: 'image',
                    id: 'signal_srcCopy8',
                    tag: 'img',
                    rect: ['0px', '0px', '245', '74', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                },
                {
                    type: 'image',
                    id: 'signal_srcCopy9',
                    tag: 'img',
                    rect: ['0px', '0px', '245', '74', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                },
                {
                    type: 'image',
                    id: 'signal_srcCopy10',
                    tag: 'img',
                    rect: ['0px', '0px', '245', '74', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_signal_srcCopy8}": [
                ["style", "top", '-158px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_signal_srcCopy6}": [
                ["style", "top", '-158px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_signal_srcCopy10}": [
                ["style", "top", '-158px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_signal_srcCopy7}": [
                ["style", "top", '-158px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_signal_srcCopy9}": [
                ["style", "top", '-158px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_signal_src}": [
                ["style", "top", '-158px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '74px'],
                ["style", "width", '245px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 833,
            autoPlay: false,
            timeline: [
                { id: "eid86", tween: [ "style", "${_signal_srcCopy10}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 233, easing: "easeInQuad" },
                { id: "eid87", tween: [ "style", "${_signal_srcCopy10}", "opacity", '0.59375', { fromValue: '1'}], position: 566, duration: 100, easing: "easeInQuad" },
                { id: "eid88", tween: [ "style", "${_signal_srcCopy10}", "opacity", '0', { fromValue: '0.59375'}], position: 666, duration: 0, easing: "easeInQuad" },
                { id: "eid74", tween: [ "style", "${_signal_srcCopy8}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 233, easing: "easeInQuad" },
                { id: "eid75", tween: [ "style", "${_signal_srcCopy8}", "opacity", '0.59375', { fromValue: '1'}], position: 433, duration: 100, easing: "easeInQuad" },
                { id: "eid76", tween: [ "style", "${_signal_srcCopy8}", "opacity", '0', { fromValue: '0.59375'}], position: 533, duration: 0, easing: "easeInQuad" },
                { id: "eid78", tween: [ "style", "${_signal_srcCopy8}", "top", '0px', { fromValue: '-158px'}], position: 200, duration: 333, easing: "easeInQuad" },
                { id: "eid71", tween: [ "transform", "${_signal_srcCopy7}", "scaleY", '1', { fromValue: '0.5'}], position: 133, duration: 333, easing: "easeInQuad" },
                { id: "eid80", tween: [ "style", "${_signal_srcCopy9}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 233, easing: "easeInQuad" },
                { id: "eid81", tween: [ "style", "${_signal_srcCopy9}", "opacity", '0.59375', { fromValue: '1'}], position: 500, duration: 100, easing: "easeInQuad" },
                { id: "eid82", tween: [ "style", "${_signal_srcCopy9}", "opacity", '0', { fromValue: '0.59375'}], position: 600, duration: 0, easing: "easeInQuad" },
                { id: "eid89", tween: [ "transform", "${_signal_srcCopy10}", "scaleY", '1', { fromValue: '0.5'}], position: 333, duration: 333, easing: "easeInQuad" },
                { id: "eid68", tween: [ "style", "${_signal_srcCopy7}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 233, easing: "easeInQuad" },
                { id: "eid69", tween: [ "style", "${_signal_srcCopy7}", "opacity", '0.59375', { fromValue: '1'}], position: 366, duration: 100, easing: "easeInQuad" },
                { id: "eid70", tween: [ "style", "${_signal_srcCopy7}", "opacity", '0', { fromValue: '0.59375'}], position: 466, duration: 0, easing: "easeInQuad" },
                { id: "eid12", tween: [ "transform", "${_signal_src}", "scaleY", '1', { fromValue: '0.5'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid72", tween: [ "style", "${_signal_srcCopy7}", "top", '0px', { fromValue: '-158px'}], position: 133, duration: 333, easing: "easeInQuad" },
                { id: "eid79", tween: [ "style", "${_signal_srcCopy9}", "top", '0px', { fromValue: '-158px'}], position: 267, duration: 333, easing: "easeInQuad" },
                { id: "eid10", tween: [ "transform", "${_signal_src}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid62", tween: [ "style", "${_signal_srcCopy6}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 233, easing: "easeInQuad" },
                { id: "eid63", tween: [ "style", "${_signal_srcCopy6}", "opacity", '0.59375', { fromValue: '1'}], position: 300, duration: 100, easing: "easeInQuad" },
                { id: "eid64", tween: [ "style", "${_signal_srcCopy6}", "opacity", '0', { fromValue: '0.59375'}], position: 400, duration: 0, easing: "easeInQuad" },
                { id: "eid65", tween: [ "transform", "${_signal_srcCopy6}", "scaleY", '1', { fromValue: '0.5'}], position: 67, duration: 333, easing: "easeInQuad" },
                { id: "eid83", tween: [ "transform", "${_signal_srcCopy9}", "scaleY", '1', { fromValue: '0.5'}], position: 267, duration: 333, easing: "easeInQuad" },
                { id: "eid8", tween: [ "style", "${_signal_src}", "top", '0px', { fromValue: '-158px'}], position: 0, duration: 333, easing: "easeInQuad" },
                { id: "eid66", tween: [ "transform", "${_signal_srcCopy6}", "scaleX", '1', { fromValue: '0.5'}], position: 67, duration: 333, easing: "easeInQuad" },
                { id: "eid73", tween: [ "transform", "${_signal_srcCopy8}", "scaleX", '1', { fromValue: '0.5'}], position: 200, duration: 333, easing: "easeInQuad" },
                { id: "eid84", tween: [ "transform", "${_signal_srcCopy9}", "scaleX", '1', { fromValue: '0.5'}], position: 267, duration: 333, easing: "easeInQuad" },
                { id: "eid61", tween: [ "style", "${_signal_srcCopy6}", "top", '0px', { fromValue: '-158px'}], position: 67, duration: 333, easing: "easeInQuad" },
                { id: "eid67", tween: [ "transform", "${_signal_srcCopy7}", "scaleX", '1', { fromValue: '0.5'}], position: 133, duration: 333, easing: "easeInQuad" },
                { id: "eid77", tween: [ "transform", "${_signal_srcCopy8}", "scaleY", '1', { fromValue: '0.5'}], position: 200, duration: 333, easing: "easeInQuad" },
                { id: "eid59", tween: [ "style", "${_signal_src}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233, easing: "easeInQuad" },
                { id: "eid60", tween: [ "style", "${_signal_src}", "opacity", '0.59375', { fromValue: '1'}], position: 233, duration: 100, easing: "easeInQuad" },
                { id: "eid58", tween: [ "style", "${_signal_src}", "opacity", '0', { fromValue: '0.59375'}], position: 333, duration: 0, easing: "easeInQuad" },
                { id: "eid90", tween: [ "transform", "${_signal_srcCopy10}", "scaleX", '1', { fromValue: '0.5'}], position: 333, duration: 333, easing: "easeInQuad" },
                { id: "eid85", tween: [ "style", "${_signal_srcCopy10}", "top", '0px', { fromValue: '-158px'}], position: 333, duration: 333, easing: "easeInQuad" }            ]
        }
    }
},
"FLOW2": {
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
                    type: 'image',
                    id: 'flow_blue',
                    tag: 'img',
                    rect: ['-25px', '0px', '943', '6', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_blue.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_blue}": [
                ["style", "left", '-25px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '943px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid94", tween: [ "style", "${_flow_blue}", "left", '-14px', { fromValue: '-25px'}], position: 0, duration: 167, easing: "easeInQuad" }            ]
        }
    }
},
"FLOW1": {
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
                    type: 'image',
                    id: 'flow_red',
                    tag: 'img',
                    rect: ['0px', '0px', '871', '6', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_red.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '871px']
            ],
            "${_flow_red}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid93", tween: [ "style", "${_flow_red}", "left", '-12px', { fromValue: '0px'}], position: 0, duration: 167, easing: "easeInQuad" }            ]
        }
    }
},
"FLOW3": {
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
                    type: 'image',
                    id: 'flow_src1',
                    tag: 'img',
                    rect: ['0px', '0px', '1041', '11', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '11px'],
                ["style", "width", '1041px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid95", tween: [ "style", "${_flow_src1}", "left", '-14px', { fromValue: '0px'}], position: 0, duration: 167, easing: "easeInQuad" }            ]
        }
    }
},
"FLOW4": {
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
                    type: 'image',
                    id: 'flow_src2',
                    tag: 'img',
                    rect: ['0px', '0px', '829', '11', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src2.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '11px'],
                ["style", "width", '829px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid96", tween: [ "style", "${_flow_src2}", "left", '-15px', { fromValue: '0px'}], position: 0, duration: 167, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-5332057");
