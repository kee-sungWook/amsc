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
                id: 'bg02',
                type: 'image',
                rect: ['930px', '198px','353px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg02.png",'0px','0px']
            },
            {
                id: 'bg01',
                type: 'image',
                rect: ['793px', '197px','468px','629px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg01.png",'0px','0px']
            },
            {
                id: 'bg01Copy',
                type: 'image',
                rect: ['793px', '191px','468px','629px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg01.png",'0px','0px']
            },
            {
                id: 'Symbol_23',
                type: 'rect',
                rect: ['749px', '198','auto','auto','auto', 'auto']
            },
            {
                id: 'mov03',
                type: 'rect',
                rect: ['64px', '654px','auto','auto','auto', 'auto']
            },
            {
                id: 'mov03Copy',
                type: 'rect',
                rect: ['64px', '654px','auto','auto','auto', 'auto']
            },
            {
                id: 'mov03Copy2',
                type: 'rect',
                rect: ['64px', '654px','auto','auto','auto', 'auto']
            },
            {
                id: 'bg03',
                type: 'image',
                rect: ['438px', '322px','395px','519px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg03.png",'0px','0px']
            },
            {
                id: 'Symbol_13',
                type: 'rect',
                rect: ['385', '330','auto','auto','auto', 'auto']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1201px', '863px','468px','160px','auto', 'auto'],
                text: "변속시 변속 불량<br>가속시 가속 불량<br>미끄러짐 현상 발생",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['1200px', '796px','652px','57px','auto', 'auto'],
                text: "디스크 및 커버 마모로 인한 증상",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'mov03Copy7',
                type: 'rect',
                rect: ['64px', '654px','auto','auto','auto', 'auto']
            },
            {
                id: 'mov03Copy8',
                type: 'rect',
                rect: ['64px', '654px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Symbol_23',
                symbolName: 'Symbol_2',
                autoPlay: {

                }
            },
            {
                id: 'mov03',
                symbolName: 'mov03',
                autoPlay: {

                }
            },
            {
                id: 'mov03Copy2',
                symbolName: 'mov03',
                autoPlay: {

                }
            },
            {
                id: 'mov03Copy8',
                symbolName: 'mov03',
                autoPlay: {

                }
            },
            {
                id: 'mov03Copy7',
                symbolName: 'mov03',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_13',
                symbolName: 'Symbol_1',
                autoPlay: {

                }
            },
            {
                id: 'mov03Copy',
                symbolName: 'mov03',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Symbol_13}": [
                ["transform", "skewY", '10deg'],
                ["style", "left", '268px']
            ],
            "${_mov03}": [
                ["style", "top", '293px'],
                ["transform", "scaleY", '0.59749'],
                ["transform", "rotateZ", '-69deg'],
                ["transform", "scaleX", '0.59749'],
                ["style", "left", '603px']
            ],
            "${_mov03Copy7}": [
                ["style", "top", '308px'],
                ["transform", "scaleY", '0.59749'],
                ["transform", "rotateZ", '-56deg'],
                ["transform", "scaleX", '0.59749'],
                ["style", "left", '971px']
            ],
            "${_Symbol_23}": [
                ["style", "left", '582px'],
                ["transform", "skewY", '10deg']
            ],
            "${_stage}": [
                ["style", "height", '1077px'],
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "width", '1806px']
            ],
            "${_mov03Copy}": [
                ["style", "top", '760px'],
                ["transform", "scaleY", '0.59749'],
                ["transform", "rotateZ", '58deg'],
                ["transform", "scaleX", '0.59749'],
                ["style", "left", '760px']
            ],
            "${_bg01}": [
                ["style", "left", '793px'],
                ["style", "top", '197px']
            ],
            "${_bg03}": [
                ["style", "height", '519px'],
                ["style", "top", '322px'],
                ["style", "left", '438px'],
                ["style", "width", '395px']
            ],
            "${_bg01Copy}": [
                ["style", "left", '793px'],
                ["style", "top", '191px']
            ],
            "${_mov03Copy8}": [
                ["style", "top", '360px'],
                ["transform", "scaleY", '0.38318'],
                ["transform", "rotateZ", '22deg'],
                ["transform", "scaleX", '0.38318'],
                ["style", "left", '1104px']
            ],
            "${_mov03Copy2}": [
                ["style", "top", '323px'],
                ["transform", "scaleY", '0.38318'],
                ["transform", "rotateZ", '-25deg'],
                ["transform", "scaleX", '0.38318'],
                ["style", "left", '639px']
            ],
            "${_Text}": [
                ["style", "top", '863px'],
                ["style", "font-size", '35px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1.00)'],
                ["style", "left", '1201px'],
                ["style", "width", '468px']
            ],
            "${_TextCopy}": [
                ["style", "top", '796px'],
                ["style", "width", '652px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1.00)'],
                ["style", "left", '1200px'],
                ["style", "font-size", '40px']
            ],
            "${_bg02}": [
                ["style", "left", '930px'],
                ["style", "top", '198px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7190,
            autoPlay: true,
            timeline: [
                { id: "eid231", tween: [ "transform", "${_mov03Copy7}", "rotateZ", '-56deg', { fromValue: '-56deg'}], position: 7190, duration: 0, easing: "easeOutQuad" },
                { id: "eid17", tween: [ "transform", "${_Symbol_13}", "skewY", '10deg', { fromValue: '10deg'}], position: 2000, duration: 0 },
                { id: "eid105", tween: [ "transform", "${_mov03}", "rotateZ", '-69deg', { fromValue: '-69deg'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid227", tween: [ "style", "${_mov03Copy7}", "left", '971px', { fromValue: '971px'}], position: 7190, duration: 0, easing: "easeOutQuad" },
                { id: "eid106", tween: [ "style", "${_mov03}", "top", '293px', { fromValue: '293px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid219", tween: [ "transform", "${_mov03Copy8}", "scaleX", '0.38318', { fromValue: '0.38318'}], position: 7190, duration: 0, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "transform", "${_mov03Copy2}", "scaleY", '0.38318', { fromValue: '0.38318'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid143", tween: [ "transform", "${_mov03Copy2}", "rotateZ", '-25deg', { fromValue: '-25deg'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid150", tween: [ "style", "${_mov03Copy}", "left", '760px', { fromValue: '760px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid136", tween: [ "transform", "${_mov03Copy2}", "scaleX", '0.38318', { fromValue: '0.38318'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid229", tween: [ "style", "${_mov03Copy8}", "left", '1104px', { fromValue: '1104px'}], position: 7190, duration: 0, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "transform", "${_Symbol_23}", "skewY", '10deg', { fromValue: '10deg'}], position: 2000, duration: 0 },
                { id: "eid228", tween: [ "style", "${_mov03Copy7}", "top", '308px', { fromValue: '308px'}], position: 7190, duration: 0, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "transform", "${_mov03}", "scaleY", '0.59749', { fromValue: '0.59749'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid146", tween: [ "style", "${_mov03Copy2}", "left", '639px', { fromValue: '639px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid25", tween: [ "style", "${_Symbol_13}", "left", '268px', { fromValue: '268px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_Symbol_23}", "left", '582px', { fromValue: '582px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid151", tween: [ "style", "${_mov03Copy}", "top", '760px', { fromValue: '760px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid113", tween: [ "transform", "${_mov03Copy}", "scaleX", '0.59749', { fromValue: '0.59749'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "transform", "${_mov03Copy8}", "rotateZ", '22deg', { fromValue: '22deg'}], position: 7190, duration: 0, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "transform", "${_mov03}", "scaleX", '0.59749', { fromValue: '0.59749'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid147", tween: [ "style", "${_mov03Copy2}", "top", '323px', { fromValue: '323px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "transform", "${_mov03Copy7}", "scaleY", '0.59749', { fromValue: '0.59749'}], position: 7190, duration: 0, easing: "easeOutQuad" },
                { id: "eid220", tween: [ "transform", "${_mov03Copy8}", "scaleY", '0.38318', { fromValue: '0.38318'}], position: 7190, duration: 0, easing: "easeOutQuad" },
                { id: "eid117", tween: [ "transform", "${_mov03Copy}", "rotateZ", '58deg', { fromValue: '58deg'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid194", tween: [ "transform", "${_mov03Copy7}", "scaleX", '0.59749', { fromValue: '0.59749'}], position: 7190, duration: 0, easing: "easeOutQuad" },
                { id: "eid103", tween: [ "style", "${_mov03}", "left", '603px', { fromValue: '603px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid111", tween: [ "transform", "${_mov03Copy}", "scaleY", '0.59749', { fromValue: '0.59749'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid230", tween: [ "style", "${_mov03Copy8}", "top", '360px', { fromValue: '360px'}], position: 7190, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"Symbol_1": {
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
                    id: 'disc01',
                    tag: 'img',
                    rect: ['0px', '0px', '548', '548', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/disc01.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_disc01}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '548px'],
                ["style", "width", '548px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "transform", "${_disc01}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000 }            ]
        }
    }
},
"Symbol_2": {
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
                    id: 'disc02',
                    tag: 'img',
                    rect: ['0px', '0px', '672', '671', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/disc02.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_disc02}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '671px'],
                ["style", "width", '672px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "transform", "${_disc02}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "transform", "${_disc02}", "rotateZ", '720deg', { fromValue: '360deg'}], position: 2000, duration: 2000, easing: "easeOutQuad" }            ]
        }
    }
},
"mov": {
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
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                    fill: ['rgba(248,26,26,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                    fill: ['rgba(225,18,18,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                    fill: ['rgba(225,18,18,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                    fill: ['rgba(225,18,18,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                    fill: ['rgba(225,18,18,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                    fill: ['rgba(225,18,18,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                    fill: ['rgba(225,18,18,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,20,20,1.00)']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(248,26,26,1.00)']
            ],
            "${_Rectangle2Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,20,20,1.00)']
            ],
            "${_Rectangle2Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,20,20,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '11px'],
                ["style", "width", '11px']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,20,20,1.00)']
            ],
            "${_Rectangle2Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,20,20,1.00)']
            ],
            "${_Rectangle2Copy6}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,20,20,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 233,
            autoPlay: true,
            timeline: [
                { id: "eid88", tween: [ "style", "${_Rectangle2Copy6}", "left", '25px', { fromValue: '0px'}], position: 0, duration: 85, easing: "easeOutQuad" },
                { id: "eid89", tween: [ "style", "${_Rectangle2Copy6}", "left", '49px', { fromValue: '25px'}], position: 85, duration: 37, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "style", "${_Rectangle2Copy6}", "left", '73px', { fromValue: '49px'}], position: 122, duration: 37, easing: "easeOutQuad" },
                { id: "eid91", tween: [ "style", "${_Rectangle2Copy6}", "left", '96px', { fromValue: '73px'}], position: 159, duration: 37, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_Rectangle2Copy6}", "left", '153px', { fromValue: '96px'}], position: 196, duration: 37, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "style", "${_Rectangle2Copy5}", "left", '25px', { fromValue: '0px'}], position: 0, duration: 85, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_Rectangle2Copy5}", "left", '49px', { fromValue: '25px'}], position: 85, duration: 37, easing: "easeOutQuad" },
                { id: "eid85", tween: [ "style", "${_Rectangle2Copy5}", "left", '73px', { fromValue: '49px'}], position: 122, duration: 37, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "style", "${_Rectangle2Copy5}", "left", '96px', { fromValue: '73px'}], position: 159, duration: 37, easing: "easeOutQuad" },
                { id: "eid87", tween: [ "style", "${_Rectangle2Copy5}", "left", '122px', { fromValue: '96px'}], position: 196, duration: 37, easing: "easeOutQuad" },
                { id: "eid35", tween: [ "style", "${_Rectangle2Copy4}", "left", '25px', { fromValue: '0px'}], position: 0, duration: 85, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_Rectangle2Copy4}", "left", '49px', { fromValue: '25px'}], position: 85, duration: 37, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_Rectangle2Copy4}", "left", '73px', { fromValue: '49px'}], position: 122, duration: 37, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_Rectangle2Copy4}", "left", '96px', { fromValue: '73px'}], position: 159, duration: 37, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_Rectangle2Copy3}", "left", '25px', { fromValue: '0px'}], position: 0, duration: 85, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${_Rectangle2Copy3}", "left", '49px', { fromValue: '25px'}], position: 85, duration: 37, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_Rectangle2Copy3}", "left", '73px', { fromValue: '49px'}], position: 122, duration: 37, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_Rectangle2Copy2}", "left", '25px', { fromValue: '0px'}], position: 0, duration: 85, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_Rectangle2Copy2}", "left", '49px', { fromValue: '25px'}], position: 85, duration: 37, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_Rectangle2Copy}", "left", '24px', { fromValue: '0px'}], position: 0, duration: 85, easing: "easeOutQuad" }            ]
        }
    }
},
"mov03": {
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
                    id: 'mov',
                    type: 'rect',
                    rect: ['-2px', '2px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'movCopy',
                    type: 'rect',
                    rect: ['-2px', '2px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'movCopy2',
                    type: 'rect',
                    rect: ['-2px', '2px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'movCopy',
                symbolName: 'mov',
                autoPlay: {

               }
            },
            {
                id: 'movCopy2',
                symbolName: 'mov',
                autoPlay: {

               }
            },
            {
                id: 'mov',
                symbolName: 'mov',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_movCopy2}": [
                ["style", "top", '41px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '20deg']
            ],
            "${_mov}": [
                ["style", "top", '2px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '-20deg']
            ],
            "${_movCopy}": [
                ["style", "top", '21px'],
                ["style", "left", '30px']
            ],
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid55", tween: [ "transform", "${_movCopy2}", "rotateZ", '20deg', { fromValue: '20deg'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "style", "${_movCopy}", "top", '21px', { fromValue: '21px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid51", tween: [ "style", "${_movCopy2}", "left", '6px', { fromValue: '6px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_movCopy}", "left", '30px', { fromValue: '30px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "transform", "${_mov}", "rotateZ", '-20deg', { fromValue: '-20deg'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "style", "${_movCopy2}", "top", '41px', { fromValue: '41px'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "style", "${_mov}", "left", '2px', { fromValue: '2px'}], position: 4000, duration: 0, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-1399961456844");
