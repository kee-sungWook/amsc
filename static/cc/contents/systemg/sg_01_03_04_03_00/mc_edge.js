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
                id: 'bPic',
                type: 'rect',
                rect: ['50', '90','auto','auto','auto', 'auto']
            },
            {
                id: 'sPic1',
                type: 'rect',
                rect: ['1630', '320','auto','auto','auto', 'auto']
            },
            {
                id: 'sPic2',
                type: 'rect',
                rect: ['2000px', '320px','auto','auto','auto', 'auto']
            },
            {
                id: 'sPic3',
                type: 'rect',
                rect: ['1764', '743','auto','auto','auto', 'auto']
            },
            {
                id: 'sPic4',
                type: 'rect',
                rect: ['2251', '763','auto','auto','auto', 'auto']
            },
            {
                id: 'sPic5',
                type: 'rect',
                rect: ['1798', '1082','auto','auto','auto', 'auto']
            },
            {
                id: 'sPic6',
                type: 'rect',
                rect: ['2256', '1155','auto','auto','auto', 'auto']
            },
            {
                id: 'TitleText',
                type: 'rect',
                rect: ['1699', '116px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sPic1',
                symbolName: 'sPic1',
                autoPlay: {

                }
            },
            {
                id: 'TitleText',
                symbolName: 'TitleText',
                autoPlay: {

                }
            },
            {
                id: 'sPic4',
                symbolName: 'sPic4',
                autoPlay: {

                }
            },
            {
                id: 'bPic',
                symbolName: 'bPic',
                autoPlay: {

                }
            },
            {
                id: 'sPic5',
                symbolName: 'sPic5',
                autoPlay: {

                }
            },
            {
                id: 'sPic2',
                symbolName: 'sPic2',
                autoPlay: {

                }
            },
            {
                id: 'sPic6',
                symbolName: 'sPic6',
                autoPlay: {

                }
            },
            {
                id: 'sPic3',
                symbolName: 'sPic3',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_sPic3}": [
                ["style", "top", '580px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '1630px']
            ],
            "${_sPic1}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_TitleText}": [
                ["style", "top", '116px'],
                ["style", "opacity", '0']
            ],
            "${_bPic}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_sPic5}": [
                ["style", "top", '842px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '1630px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_sPic4}": [
                ["style", "top", '580px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '2000px']
            ],
            "${_sPic2}": [
                ["style", "top", '320px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '2000px']
            ],
            "${_sPic6}": [
                ["style", "top", '842px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '2000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1600,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "transform", "${_sPic6}", "scaleX", '1', { fromValue: '0.9'}], position: 512, duration: 233, easing: "easeOutQuad" },
                { id: "eid23", tween: [ "style", "${_sPic6}", "opacity", '1', { fromValue: '0'}], position: 512, duration: 233, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "transform", "${_sPic4}", "scaleY", '1', { fromValue: '0.9'}], position: 373, duration: 233, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_sPic2}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 233, easing: "easeOutQuad" },
                { id: "eid35", tween: [ "transform", "${_sPic4}", "scaleX", '1', { fromValue: '0.9'}], position: 373, duration: 233, easing: "easeOutQuad" },
                { id: "eid25", tween: [ "style", "${_sPic5}", "opacity", '1', { fromValue: '0'}], position: 442, duration: 233, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "transform", "${_sPic3}", "scaleY", '1', { fromValue: '0.9'}], position: 303, duration: 233, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_sPic1}", "opacity", '1', { fromValue: '0'}], position: 163, duration: 233, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "transform", "${_sPic6}", "scaleY", '1', { fromValue: '0.9'}], position: 512, duration: 233, easing: "easeOutQuad" },
                { id: "eid59", tween: [ "transform", "${_bPic}", "scaleY", '1', { fromValue: '0.9'}], position: 0, duration: 257, easing: "easeOutQuad" },
                { id: "eid19", tween: [ "style", "${_sPic3}", "opacity", '1', { fromValue: '0'}], position: 303, duration: 233, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "transform", "${_sPic1}", "scaleY", '1', { fromValue: '0.9'}], position: 163, duration: 233, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "transform", "${_bPic}", "scaleX", '1', { fromValue: '0.9'}], position: 0, duration: 257, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "transform", "${_sPic3}", "scaleX", '1', { fromValue: '0.9'}], position: 303, duration: 233, easing: "easeOutQuad" },
                { id: "eid53", tween: [ "transform", "${_sPic2}", "scaleY", '1', { fromValue: '0.9'}], position: 233, duration: 233, easing: "easeOutQuad" },
                { id: "eid51", tween: [ "transform", "${_sPic2}", "scaleX", '1', { fromValue: '0.9'}], position: 233, duration: 233, easing: "easeOutQuad" },
                { id: "eid47", tween: [ "transform", "${_sPic1}", "scaleX", '1', { fromValue: '0.9'}], position: 163, duration: 233, easing: "easeOutQuad" },
                { id: "eid61", tween: [ "style", "${_TitleText}", "opacity", '1', { fromValue: '0'}], position: 163, duration: 280, easing: "easeOutQuad" },
                { id: "eid21", tween: [ "style", "${_sPic4}", "opacity", '1', { fromValue: '0'}], position: 373, duration: 233, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "transform", "${_sPic5}", "scaleY", '1', { fromValue: '0.9'}], position: 442, duration: 233, easing: "easeOutQuad" },
                { id: "eid55", tween: [ "style", "${_bPic}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 257, easing: "easeOutQuad" },
                { id: "eid43", tween: [ "transform", "${_sPic5}", "scaleX", '1', { fromValue: '0.9'}], position: 442, duration: 233, easing: "easeOutQuad" }            ]
        }
    }
},
"sPic1": {
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
                    id: 'Small_nemo',
                    stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                    rect: ['0px', '0px', '348px', '238px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'inner_nemo',
                    stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                    rect: ['11px', '11px', '326px', '216px', 'auto', 'auto'],
                    fill: ['rgba(228,228,228,1.00)']
                },
                {
                    type: 'text',
                    id: 'Text',
                    text: 'NO IMAGE',
                    rect: ['76px', '97px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 40, 'rgba(205,205,205,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'image',
                    id: 'pic1',
                    rect: ['-540px', '-355px', '1430px', '950px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.23', '0.23']],
                    fill: ['rgba(0,0,0,0)', 'images/pic1.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '97px'],
                ["color", "color", 'rgba(205,205,205,1.00)'],
                ["style", "left", '76px'],
                ["style", "font-size", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '350px']
            ],
            "${_inner_nemo}": [
                ["color", "background-color", 'rgba(228,228,228,1.00)'],
                ["style", "height", '216px'],
                ["style", "top", '11px'],
                ["style", "left", '11px'],
                ["style", "width", '326px']
            ],
            "${_pic1}": [
                ["style", "top", '-355px'],
                ["transform", "scaleY", '0.23'],
                ["style", "left", '-540px'],
                ["transform", "scaleX", '0.23']
            ],
            "${_Small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '238px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '348px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sPic2": {
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
                    id: 'Small_nemo',
                    stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                    rect: ['0px', '0px', '348px', '238px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'inner_nemo',
                    stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                    rect: ['11px', '11px', '326px', '216px', 'auto', 'auto'],
                    fill: ['rgba(228,228,228,1.00)']
                },
                {
                    type: 'text',
                    id: 'Text',
                    text: 'NO IMAGE',
                    rect: ['76px', '97px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 40, 'rgba(205,205,205,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'image',
                    id: 'pic2',
                    rect: ['-540px', '-355px', '1430px', '950px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.23', '0.23']],
                    fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["color", "color", 'rgba(205,205,205,1.00)'],
                ["style", "top", '97px'],
                ["style", "left", '76px'],
                ["style", "font-size", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '350px']
            ],
            "${_inner_nemo}": [
                ["color", "background-color", 'rgba(228,228,228,1.00)'],
                ["style", "height", '216px'],
                ["style", "top", '11px'],
                ["style", "left", '11px'],
                ["style", "width", '326px']
            ],
            "${_pic2}": [
                ["style", "top", '-355px'],
                ["transform", "scaleX", '0.23'],
                ["style", "left", '-540px'],
                ["transform", "scaleY", '0.23']
            ],
            "${_Small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '238px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '348px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sPic3": {
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
                    rect: ['0px', '0px', '348px', '238px', 'auto', 'auto'],
                    id: 'Small_nemo',
                    stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['11px', '11px', '326px', '216px', 'auto', 'auto'],
                    id: 'inner_nemo',
                    stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(228,228,228,1.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 40, 'rgba(205,205,205,1.00)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'NO IMAGE',
                    type: 'text',
                    rect: ['76px', '97px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.23', '0.23']],
                    id: 'pic3',
                    type: 'image',
                    rect: ['-540px', '-355px', '1430px', '950px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic3.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["color", "color", 'rgba(205,205,205,1.00)'],
                ["style", "top", '97px'],
                ["style", "left", '76px'],
                ["style", "font-size", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '350px']
            ],
            "${_inner_nemo}": [
                ["color", "background-color", 'rgba(228,228,228,1.00)'],
                ["style", "height", '216px'],
                ["style", "top", '11px'],
                ["style", "left", '11px'],
                ["style", "width", '326px']
            ],
            "${_pic3}": [
                ["style", "top", '-355px'],
                ["transform", "scaleX", '0.23'],
                ["style", "left", '-540px'],
                ["transform", "scaleY", '0.23']
            ],
            "${_Small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '238px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '348px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sPic4": {
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
                    rect: ['0px', '0px', '348px', '238px', 'auto', 'auto'],
                    id: 'Small_nemo',
                    stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['11px', '11px', '326px', '216px', 'auto', 'auto'],
                    id: 'inner_nemo',
                    stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(228,228,228,1.00)']
                },
                {
                    rect: ['76px', '97px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'NO IMAGE',
                    font: ['Arial, Helvetica, sans-serif', 40, 'rgba(205,205,205,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_inner_nemo}": [
                ["color", "background-color", 'rgba(228,228,228,1.00)'],
                ["style", "height", '216px'],
                ["style", "top", '11px'],
                ["style", "left", '11px'],
                ["style", "width", '326px']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '350px']
            ],
            "${_Text}": [
                ["style", "top", '97px'],
                ["color", "color", 'rgba(205,205,205,1.00)'],
                ["style", "left", '76px'],
                ["style", "font-size", '40px']
            ],
            "${_Small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '238px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '348px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sPic5": {
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
                    rect: ['0px', '0px', '348px', '238px', 'auto', 'auto'],
                    id: 'Small_nemo',
                    stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['11px', '11px', '326px', '216px', 'auto', 'auto'],
                    id: 'inner_nemo',
                    stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(228,228,228,1.00)']
                },
                {
                    rect: ['76px', '97px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'NO IMAGE',
                    font: ['Arial, Helvetica, sans-serif', 40, 'rgba(205,205,205,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_inner_nemo}": [
                ["color", "background-color", 'rgba(228,228,228,1.00)'],
                ["style", "height", '216px'],
                ["style", "top", '11px'],
                ["style", "left", '11px'],
                ["style", "width", '326px']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '350px']
            ],
            "${_Text}": [
                ["style", "top", '97px'],
                ["color", "color", 'rgba(205,205,205,1.00)'],
                ["style", "left", '76px'],
                ["style", "font-size", '40px']
            ],
            "${_Small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '238px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '348px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sPic6": {
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
                    id: 'Small_nemo',
                    stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                    rect: ['0px', '0px', '348px', '238px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'inner_nemo',
                    stroke: [1, 'rgb(140, 140, 140)', 'solid'],
                    rect: ['11px', '11px', '326px', '216px', 'auto', 'auto'],
                    fill: ['rgba(228,228,228,1.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 40, 'rgba(205,205,205,1.00)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'NO IMAGE',
                    type: 'text',
                    rect: ['76px', '97px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_inner_nemo}": [
                ["color", "background-color", 'rgba(228,228,228,1.00)'],
                ["style", "height", '216px'],
                ["style", "top", '11px'],
                ["style", "left", '11px'],
                ["style", "width", '326px']
            ],
            "${_Small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '238px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '348px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(205,205,205,1.00)'],
                ["style", "top", '97px'],
                ["style", "left", '76px'],
                ["style", "font-size", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '350px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"bPic": {
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
                    rect: ['0px', '0px', '1470px', '990px', 'auto', 'auto'],
                    id: 'Big_nemo',
                    stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'pic3',
                    type: 'image',
                    rect: ['21px', '21px', '1430px', '950px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic3.jpg', '0px', '0px']
                },
                {
                    id: 'pic2',
                    type: 'image',
                    rect: ['21px', '21px', '1430px', '950px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                },
                {
                    id: 'pic1',
                    type: 'image',
                    rect: ['21px', '21px', '1430px', '950px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic1.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pic3}": [
                ["style", "top", '21px'],
                ["style", "opacity", '0'],
                ["style", "left", '21px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '992px'],
                ["style", "width", '1472px']
            ],
            "${_pic1}": [
                ["style", "top", '21px'],
                ["style", "opacity", '0'],
                ["style", "left", '21px'],
                ["style", "display", 'block']
            ],
            "${_Big_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '990px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '1470px']
            ],
            "${_pic2}": [
                ["style", "top", '21px'],
                ["style", "opacity", '0'],
                ["style", "left", '21px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1600,
            autoPlay: true,
            labels: {
                "pic1": 0,
                "pic2": 533,
                "pic3": 1067
            },
            timeline: [
                { id: "eid66", tween: [ "style", "${_pic2}", "opacity", '1', { fromValue: '0'}], position: 533, duration: 500 },
                { id: "eid69", tween: [ "style", "${_pic1}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0 },
                { id: "eid70", tween: [ "style", "${_pic2}", "display", 'none', { fromValue: 'block'}], position: 1067, duration: 0 },
                { id: "eid68", tween: [ "style", "${_pic3}", "opacity", '1', { fromValue: '0'}], position: 1067, duration: 500 },
                { id: "eid77", tween: [ "style", "${_pic3}", "display", 'none', { fromValue: 'block'}], position: 1600, duration: 0 },
                { id: "eid72", tween: [ "style", "${_pic1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"TitleText": {
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
                    font: ['Arial, Helvetica, sans-serif', 80, 'rgba(0,74,141,1)', '600', 'none', 'normal'],
                    type: 'text',
                    id: 'Title_Text',
                    text: '배전기<br>정상사진',
                    align: 'center',
                    rect: ['-84px', '0px', '752px', '92px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Title_Text}": [
                ["style", "top", '0px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '92px'],
                ["style", "right", 'auto'],
                ["style", "left", '-84px'],
                ["style", "width", '752px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '583px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
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
})(jQuery, AdobeEdge, "EDGE-26846989");
