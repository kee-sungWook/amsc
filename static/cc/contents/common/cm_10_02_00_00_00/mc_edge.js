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
                rect: ['38', '335','auto','auto','auto', 'auto']
            },
            {
                id: 'bigPics',
                display: 'none',
                type: 'rect',
                rect: ['38', '56','auto','auto','auto', 'auto']
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
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1317,
            autoPlay: false,
            labels: {
                "showBig": 133
            },
            timeline: [
                { id: "eid48", tween: [ "style", "${_bigPics}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 500, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "style", "${_bigPics}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_bigPics}", "display", 'block', { fromValue: 'none'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid53", tween: [ "style", "${_smallPics}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "style", "${_smallPics}", "display", 'none', { fromValue: 'block'}], position: 133, duration: 0, easing: "easeOutQuad" }            ]
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
                    rect: ['0px', '79px', '1820px', '1091px', 'auto', 'auto'],
                    id: 'Big_nemo',
                    stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-1', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bigPic2'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-1', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bigPic1'
                },
                {
                    rect: ['9px', '88px', '1806px', '1077px', 'auto', 'auto'],
                    id: 'closealls',
                    stroke: [2, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    id: 'BUTTON_CLOSE',
                    type: 'rect',
                    rect: ['1845', '338', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'bigPic2',
                symbolName: 'bigPic2',
                autoPlay: {

               }
            },
            {
                id: 'bigPic1',
                symbolName: 'bigPic1',
                autoPlay: {

               }
            },
            {
                id: 'BUTTON_CLOSE',
                symbolName: 'BUTTON_CLOSE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bigPic1}": [
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '1174px'],
                ["style", "width", '1824px']
            ],
            "${_Big_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '79px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '1091px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '1820px']
            ],
            "${_bigPic2}": [
                ["style", "display", 'none']
            ],
            "${_closealls}": [
                ["style", "top", '88px'],
                ["style", "opacity", '0'],
                ["style", "height", '1077px'],
                ["style", "border-style", 'none'],
                ["style", "left", '9px'],
                ["style", "width", '1806px']
            ],
            "${_BUTTON_CLOSE}": [
                ["style", "left", '1728px'],
                ["style", "top", '99px']
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
                { id: "eid43", tween: [ "style", "${_bigPic2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_bigPic1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "style", "${_BUTTON_CLOSE}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0, easing: "easeOutQuad" }            ]
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
                    rect: ['0px', '0px', '396px', '396px', 'auto', 'auto'],
                    id: 'small_nemo',
                    stroke: [2, 'rgba(140,140,140,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['1px', '424px', '397px', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 50, 'rgba(140,140,140,1.00)', 'normal', 'none', 'normal'],
                    id: 'Text2',
                    text: '워터펌프',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'pic_src1',
                    type: 'rect',
                    rect: ['9', '9', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'pic_src1',
                symbolName: 'pic_src1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '483px'],
                ["style", "width", '400px']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(140,140,140,1.00)'],
                ["style", "top", '424px'],
                ["style", "left", '1px'],
                ["style", "width", '397px']
            ],
            "${_small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "height", '396px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '396px']
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
                    rect: ['0px', '0px', '396px', '396px', 'auto', 'auto'],
                    id: 'small_nemo',
                    stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['1px', '424px', '398px', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 50, 'rgba(140,140,140,1.00)', 'normal', 'none', 'normal'],
                    id: 'Text2',
                    text: '서모스탯',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'pic_src2',
                    type: 'rect',
                    rect: ['614', '111', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'pic_src2',
                symbolName: 'pic_src2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '483px'],
                ["style", "width", '400px']
            ],
            "${_pic_src2}": [
                ["style", "left", '9px'],
                ["style", "top", '9px']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(140,140,140,1.00)'],
                ["style", "top", '424px'],
                ["style", "left", '1px'],
                ["style", "width", '398px']
            ],
            "${_small_nemo}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '396px'],
                ["color", "border-color", 'rgba(140,140,140,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '396px']
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
                { id: "eid10", tween: [ "style", "${_pic_src2}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_pic_src2}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0 }            ]
        }
    }
},
"pic_src1": {
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
                    id: 'pic1',
                    type: 'image',
                    rect: ['-129px', '0px', '640px', '382px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic1.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '382px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '382px']
            ],
            "${_pic1}": [
                ["style", "top", '0px'],
                ["style", "height", '382px'],
                ["style", "left", '-129px'],
                ["style", "width", '640px']
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
"pic_src2": {
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
                    id: 'pic2',
                    type: 'image',
                    rect: ['-130px', '0px', '641px', '382px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pic2}": [
                ["style", "top", '0px'],
                ["style", "height", '382px'],
                ["style", "left", '-130px'],
                ["style", "width", '641px']
            ],
            "${symbolSelector}": [
                ["style", "height", '382px'],
                ["style", "width", '382px'],
                ["style", "overflow", 'hidden']
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
                    id: 'smallPic2',
                    type: 'rect',
                    rect: ['960px', '396px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'smallPic1',
                    type: 'rect',
                    rect: ['485px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
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
            "${_smallPic2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '960px']
            ],
            "${symbolSelector}": [
                ["style", "height", '483px'],
                ["style", "width", '1825px']
            ],
            "${_smallPic1}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '485px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1317,
            autoPlay: true,
            timeline: [
                { id: "eid25", tween: [ "transform", "${_smallPic2}", "scaleX", '1', { fromValue: '0.95'}], position: 252, duration: 500, easing: "easeOutQuad" },
                { id: "eid23", tween: [ "style", "${_smallPic1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "transform", "${_smallPic2}", "scaleY", '1', { fromValue: '0.95'}], position: 252, duration: 500, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "transform", "${_smallPic1}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "transform", "${_smallPic1}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid17", tween: [ "style", "${_smallPic2}", "opacity", '1', { fromValue: '0'}], position: 252, duration: 500, easing: "easeOutQuad" }            ]
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
                    tag: 'img',
                    id: 'close_btn',
                    opacity: 0.6,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/close_btn.png']
                },
                {
                    rect: ['2px', '2px', '70', '70', 'auto', 'auto'],
                    tag: 'img',
                    id: 'close_x',
                    opacity: 0.6,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/close_x.png']
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
"bigPic1": {
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
                    id: 'pic1',
                    type: 'image',
                    rect: ['9px', '88px', '1806px', '1077px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic1.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1824px', '80px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 50, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text1',
                    text: '워터펌프 정상과 비정상 비교',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pic1}": [
                ["style", "left", '9px'],
                ["style", "top", '88px']
            ],
            "${_Text1}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '80px'],
                ["style", "font-size", '50px'],
                ["style", "left", '0px'],
                ["style", "width", '1824px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1165px'],
                ["style", "width", '1824px']
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
"bigPic2": {
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
                    id: 'pic2',
                    type: 'image',
                    rect: ['9px', '88px', '1806px', '1077px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1824px', '80px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 50, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text2',
                    text: '서모스탯',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '1165px'],
                ["style", "width", '1824px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '80px'],
                ["style", "width", '1824px'],
                ["style", "left", '0px'],
                ["style", "font-size", '50px']
            ],
            "${_pic2}": [
                ["style", "left", '9px'],
                ["style", "top", '88px']
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
})(jQuery, AdobeEdge, "EDGE-5260140");
