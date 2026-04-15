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
                id: 'smallPics',
                display: 'block',
                type: 'rect',
                rect: ['40', '55','auto','auto','auto', 'auto']
            },
            {
                id: 'bigPics',
                display: 'none',
                type: 'rect',
                rect: ['38', '53px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'bigPics',
                symbolName: 'bigPics',
                autoPlay: {

                }
            },
            {
                id: 'smallPics',
                symbolName: 'smallPics',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1900px']
            ],
            "${_smallPics}": [
                ["style", "display", 'block']
            ],
            "${_bigPics}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "top", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1600,
            autoPlay: false,
            labels: {
                "showBig": 1100
            },
            timeline: [
                { id: "eid89", tween: [ "style", "${_smallPics}", "display", 'none', { fromValue: 'block'}], position: 1100, duration: 0, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_bigPics}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 500, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "style", "${_bigPics}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "style", "${_bigPics}", "display", 'block', { fromValue: 'none'}], position: 1100, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"smallPic1": {
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
                    id: 'small_nemo',
                    stroke: [2, 'rgba(140,140,140,1.00)', 'solid'],
                    rect: ['0px', '0px', '896px', '256px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'picArea',
                    stroke: [2, 'rgba(140,140,140,1.00)', 'none'],
                    rect: ['8px', '8px', '324px', '244px', 'auto', 'auto'],
                    fill: ['rgba(178,178,178,1.00)']
                },
                {
                    rect: ['332px', '75px', '560px', '175px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                    id: 'TextArea',
                    text: '인젝터 오염 및 막힘 ',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'pic1',
                    type: 'image',
                    rect: ['10px', '10px', '320px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic1.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_picArea}": [
                ["color", "background-color", 'rgba(178,178,178,1.00)'],
                ["style", "top", '8px'],
                ["style", "left", '8px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '244px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '2px'],
                ["style", "width", '324px']
            ],
            "${_small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '256px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '896px']
            ],
            "${_pic1}": [
                ["style", "left", '10px'],
                ["style", "top", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '260px'],
                ["style", "width", '900px']
            ],
            "${_TextArea}": [
                ["style", "top", '75px'],
                ["style", "height", '175px'],
                ["style", "width", '560px'],
                ["style", "left", '332px'],
                ["style", "font-size", '42px']
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
"smallPic2": {
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
                    id: 'small_nemo',
                    stroke: [2, 'rgba(140,140,140,1.00)', 'solid'],
                    rect: ['0px', '0px', '896px', '256px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'picArea',
                    stroke: [2, 'rgba(140,140,140,1.00)', 'none'],
                    rect: ['8px', '8px', '324px', '244px', 'auto', 'auto'],
                    fill: ['rgba(178,178,178,1.00)']
                },
                {
                    rect: ['332px', '75px', '560px', '175px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                    id: 'TextArea',
                    text: '연료펌프 작동불량 ',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'pic2',
                    type: 'image',
                    rect: ['10px', '10px', '320px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic2.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_picArea}": [
                ["color", "background-color", 'rgba(178,178,178,1.00)'],
                ["style", "top", '8px'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'none'],
                ["style", "height", '244px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "left", '8px'],
                ["style", "width", '324px']
            ],
            "${_small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '256px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '896px']
            ],
            "${_TextArea}": [
                ["style", "top", '75px'],
                ["style", "height", '175px'],
                ["style", "font-size", '42px'],
                ["style", "left", '332px'],
                ["style", "width", '560px']
            ],
            "${symbolSelector}": [
                ["style", "height", '260px'],
                ["style", "width", '900px']
            ],
            "${_pic2}": [
                ["style", "left", '10px'],
                ["style", "top", '10px']
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
"smallPic3": {
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
                    id: 'small_nemo',
                    stroke: [2, 'rgba(140,140,140,1.00)', 'solid'],
                    rect: ['0px', '0px', '896px', '256px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'picArea',
                    stroke: [2, 'rgba(140,140,140,1.00)', 'none'],
                    rect: ['8px', '8px', '324px', '244px', 'auto', 'auto'],
                    fill: ['rgba(178,178,178,1.00)']
                },
                {
                    rect: ['332px', '75px', '560px', '175px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                    id: 'TextArea',
                    text: '연료필터 오염 및 막힘 ',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'pic3',
                    type: 'image',
                    rect: ['10px', '10px', '320px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic3.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_picArea}": [
                ["color", "background-color", 'rgba(178,178,178,1.00)'],
                ["style", "top", '8px'],
                ["style", "left", '8px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '244px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '2px'],
                ["style", "width", '324px']
            ],
            "${_pic3}": [
                ["style", "left", '10px'],
                ["style", "top", '10px']
            ],
            "${_small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '256px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '896px']
            ],
            "${symbolSelector}": [
                ["style", "height", '260px'],
                ["style", "width", '900px']
            ],
            "${_TextArea}": [
                ["style", "top", '75px'],
                ["style", "height", '175px'],
                ["style", "width", '560px'],
                ["style", "left", '332px'],
                ["style", "font-size", '42px']
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
"smallPic4": {
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
                    id: 'small_nemo',
                    stroke: [2, 'rgba(140,140,140,1.00)', 'solid'],
                    rect: ['0px', '0px', '896px', '256px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'picArea',
                    stroke: [2, 'rgba(140,140,140,1.00)', 'none'],
                    rect: ['8px', '8px', '324px', '244px', 'auto', 'auto'],
                    fill: ['rgba(178,178,178,1.00)']
                },
                {
                    rect: ['332px', '75px', '560px', '175px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                    id: 'TextArea',
                    text: '연료라인 세정 ',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'pic4',
                    type: 'image',
                    rect: ['10px', '10px', '320px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic4.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_picArea}": [
                ["color", "background-color", 'rgba(178,178,178,1.00)'],
                ["style", "top", '8px'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'none'],
                ["style", "height", '244px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "left", '8px'],
                ["style", "width", '324px']
            ],
            "${_small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '256px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '896px']
            ],
            "${_TextArea}": [
                ["style", "top", '75px'],
                ["style", "height", '175px'],
                ["style", "font-size", '42px'],
                ["style", "left", '332px'],
                ["style", "width", '560px']
            ],
            "${symbolSelector}": [
                ["style", "height", '260px'],
                ["style", "width", '900px']
            ],
            "${_pic4}": [
                ["style", "left", '10px'],
                ["style", "top", '10px']
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
"smallPics": {
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
                    id: 'smallPic1',
                    type: 'rect',
                    rect: ['-40px', '-55px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'smallPic2',
                    type: 'rect',
                    rect: ['1022px', '498px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'smallPic3',
                    type: 'rect',
                    rect: ['419px', '673px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'smallPic4',
                    type: 'rect',
                    rect: ['1320px', '626px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'smallPic4',
                symbolName: 'smallPic4',
                autoPlay: {

               }
            },
            {
                id: 'smallPic3',
                symbolName: 'smallPic3',
                autoPlay: {

               }
            },
            {
                id: 'smallPic2',
                symbolName: 'smallPic2',
                autoPlay: {

               }
            },
            {
                id: 'smallPic1',
                symbolName: 'smallPic1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_smallPic4}": [
                ["style", "top", '280px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '919px']
            ],
            "${_smallPic3}": [
                ["style", "top", '280px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1100px'],
                ["style", "width", '1819px']
            ],
            "${_smallPic2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '919px']
            ],
            "${_smallPic1}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 800,
            autoPlay: true,
            timeline: [
                { id: "eid65", tween: [ "transform", "${_smallPic2}", "scaleX", '1', { fromValue: '0.95'}], position: 100, duration: 500, easing: "easeOutQuad" },
                { id: "eid47", tween: [ "style", "${_smallPic4}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 500, easing: "easeOutQuad" },
                { id: "eid55", tween: [ "style", "${_smallPic3}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 500, easing: "easeOutQuad" },
                { id: "eid77", tween: [ "transform", "${_smallPic3}", "scaleX", '1', { fromValue: '0.95'}], position: 200, duration: 500, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "style", "${_smallPic2}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 500, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "style", "${_smallPic1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid81", tween: [ "transform", "${_smallPic1}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid61", tween: [ "transform", "${_smallPic4}", "scaleX", '1', { fromValue: '0.95'}], position: 300, duration: 500, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "transform", "${_smallPic2}", "scaleY", '1', { fromValue: '0.95'}], position: 100, duration: 500, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "transform", "${_smallPic4}", "scaleY", '1', { fromValue: '0.95'}], position: 300, duration: 500, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "transform", "${_smallPic1}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid79", tween: [ "transform", "${_smallPic3}", "scaleY", '1', { fromValue: '0.95'}], position: 200, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"BUTTON_CLOSE": {
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
                    rect: ['0px', '0px', '75', '75', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/close_btn.png'],
                    id: 'close_btn',
                    opacity: 0.6,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['2px', '2px', '70', '70', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/close_x.png'],
                    id: 'close_x',
                    opacity: 0.6,
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_close_btn}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_close_x}": [
                ["style", "left", '2px'],
                ["style", "top", '2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '75px'],
                ["style", "width", '75px']
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
"bigPics": {
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
                    rect: ['0px', '0px', '1823px', '79px', 'auto', 'auto'],
                    id: 'blinder',
                    stroke: [2, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(239,239,239,1.00)']
                },
                {
                    rect: ['0px', '79px', '1820px', '1091px', 'auto', 'auto'],
                    id: 'Big_nemo',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['9px', '88px', '1806px', '1077px', 'auto', 'auto'],
                    stroke: [2, 'rgb(0, 0, 0)', 'none'],
                    id: 'movieArea',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(239,239,239,1.00)']
                },
                {
                    id: 'BUTTON_CLOSE',
                    type: 'rect',
                    rect: ['1845', '338', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '1824px', '80px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 50, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'textArea',
                    text: 'text area',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'BUTTON_CLOSE',
                symbolName: 'BUTTON_CLOSE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_BUTTON_CLOSE}": [
                ["style", "left", '1728px'],
                ["style", "top", '99px']
            ],
            "${_Big_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '79px'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '1091px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1820px']
            ],
            "${_movieArea}": [
                ["style", "top", '88px'],
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "height", '1077px'],
                ["style", "opacity", '1'],
                ["style", "left", '9px'],
                ["style", "width", '1806px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1174px'],
                ["style", "width", '1824px']
            ],
            "${_textArea}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '80px'],
                ["style", "font-size", '50px'],
                ["style", "left", '0px'],
                ["style", "width", '1824px']
            ],
            "${_blinder}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "height", '79px'],
                ["style", "width", '1823px']
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
                { id: "eid40", tween: [ "style", "${_BUTTON_CLOSE}", "left", '1728px', { fromValue: '1728px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "style", "${_BUTTON_CLOSE}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-13633348");
