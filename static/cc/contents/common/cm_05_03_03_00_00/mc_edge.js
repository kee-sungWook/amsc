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
                id: 'mov_01',
                type: 'rect',
                rect: ['152', '60','auto','auto','auto', 'auto']
            },
            {
                id: 'mov_022',
                type: 'rect',
                rect: ['876', '354','auto','auto','auto', 'auto']
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['1035px', '418px','468px','160px','auto', 'auto'],
                text: "시동시 시동 늦음<br>가속불량 현상<br>인젝터 막힘 현상 발생",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['1034px', '351px','652px','57px','auto', 'auto'],
                text: "연료필터 오염으로 인한 증상",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['1035px', '703px','468px','160px','auto', 'auto'],
                text: "시동불능 현상 발생<br>가속불량 현상 발생",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['338px', '167px','269px','57px','auto', 'auto'],
                text: "정상필터",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['869px', '167px','269px','57px','auto', 'auto'],
                text: "오염필터",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1034px', '636px','652px','57px','auto', 'auto'],
                text: "연료필터 막힘으로 인한 증상<br>",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [
            {
                id: 'mov_01',
                symbolName: 'mov_01',
                autoPlay: {

                }
            },
            {
                id: 'mov_022',
                symbolName: 'mov_02',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["style", "top", '167px'],
                ["style", "width", '269px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '338px'],
                ["style", "font-size", '45px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '418px'],
                ["style", "width", '468px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1035px'],
                ["style", "font-size", '35px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '167px'],
                ["style", "font-size", '45px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '869px'],
                ["style", "width", '269px']
            ],
            "${_stage}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_mov_022}": [
                ["style", "top", '60px'],
                ["style", "left", '673px']
            ],
            "${_Text}": [
                ["style", "top", '636px'],
                ["style", "width", '652px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1034px'],
                ["style", "font-size", '40px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '351px'],
                ["style", "font-size", '40px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1034px'],
                ["style", "width", '652px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)']
            ],
            "${_TextCopy}": [
                ["style", "top", '703px'],
                ["style", "font-size", '35px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1035px'],
                ["style", "width", '468px']
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
                { id: "eid71", tween: [ "style", "${_mov_022}", "top", '60px', { fromValue: '60px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "style", "${_mov_022}", "left", '673px', { fromValue: '673px'}], position: 2000, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"flash_mov": {
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
                    rect: ['-1px', '-456px', '237', '46', 'auto', 'auto'],
                    id: 'flash',
                    fill: ['rgba(0,0,0,0)', 'images/Layer-1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '237px']
            ],
            "${_flash}": [
                ["style", "top", '-843px'],
                ["style", "opacity", '0.6'],
                ["style", "left", '0px']
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
                { id: "eid126", tween: [ "style", "${_flash}", "opacity", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_flash}", "opacity", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
                { id: "eid27", tween: [ "style", "${_flash}", "top", '0px', { fromValue: '-843px'}], position: 0, duration: 2000 }            ]
        }
    }
},
"House05": {
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
                    id: 'house05',
                    type: 'image',
                    rect: ['-1px', '3px', '28px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house05.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house05}": [
                ["style", "top", '3px'],
                ["style", "height", '16px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '15deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '31px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid225", tween: [ "transform", "${_house05}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid226", tween: [ "transform", "${_house05}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid215", tween: [ "style", "${_house05}", "left", '-1px', { fromValue: '1px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid206", tween: [ "style", "${_house05}", "top", '18px', { fromValue: '3px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid207", tween: [ "style", "${_house05}", "top", '3px', { fromValue: '18px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid210", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 1000, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"House04": {
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
                    id: 'house04',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house04.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house04}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid204", tween: [ "style", "${_house04}", "width", '15px', { fromValue: '20px'}], position: 0, duration: 534, easing: "easeOutQuad" },
                { id: "eid205", tween: [ "style", "${_house04}", "width", '20px', { fromValue: '15px'}], position: 534, duration: 466, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "transform", "${_house04}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 534, easing: "easeOutQuad" },
                { id: "eid193", tween: [ "transform", "${_house04}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 534, duration: 466, easing: "easeOutQuad" }            ]
        }
    }
},
"House06": {
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
                    id: 'house06',
                    type: 'image',
                    rect: ['0px', '0px', '27px', '27px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house06.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house06}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '27px'],
                ["style", "width", '27px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid223", tween: [ "style", "${_house06}", "top", '8px', { fromValue: '0px'}], position: 0, duration: 600, easing: "easeOutQuad" },
                { id: "eid224", tween: [ "style", "${_house06}", "top", '0px', { fromValue: '8px'}], position: 600, duration: 400, easing: "easeOutQuad" }            ]
        }
    }
},
"House01": {
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
                    id: 'house01',
                    type: 'image',
                    rect: ['0px', '-2px', '15px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house01}": [
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '15px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid180", tween: [ "style", "${_house01}", "top", '-2px', { fromValue: '0px'}], position: 498, duration: 502, easing: "easeOutQuad" },
                { id: "eid173", tween: [ "style", "${_house01}", "height", '22px', { fromValue: '16px'}], position: 0, duration: 498, easing: "easeOutQuad" },
                { id: "eid181", tween: [ "style", "${_house01}", "height", '18px', { fromValue: '22px'}], position: 498, duration: 502, easing: "easeOutQuad" }            ]
        }
    }
},
"House03": {
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
                    id: 'house03',
                    type: 'image',
                    rect: ['0px', '0px', '19px', '17px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house03.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house03}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '17px'],
                ["style", "width", '19px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1067,
            autoPlay: true,
            timeline: [
                { id: "eid190", tween: [ "transform", "${_house03}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 100, duration: 512, easing: "easeOutQuad" },
                { id: "eid191", tween: [ "transform", "${_house03}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 612, duration: 455, easing: "easeOutQuad" }            ]
        }
    }
},
"House02": {
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
                    id: 'house02',
                    type: 'image',
                    rect: ['0px', '0px', '27px', '31px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house02.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house02}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '27px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid182", tween: [ "style", "${_house02}", "top", '10px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid188", tween: [ "style", "${_house02}", "top", '0px', { fromValue: '10px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "transform", "${_house02}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid187", tween: [ "transform", "${_house02}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 500, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"house_all": {
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
                    id: 'wate_02',
                    type: 'image',
                    rect: ['-44px', '-28px', '157px', '126px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wate_02.png', '0px', '0px']
                },
                {
                    id: 'House01',
                    type: 'rect',
                    rect: ['0px', '12px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House02',
                    type: 'rect',
                    rect: ['32px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House03',
                    type: 'rect',
                    rect: ['74px', '7px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House04',
                    type: 'rect',
                    rect: ['0px', '41px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House05',
                    type: 'rect',
                    rect: ['32px', '38px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House06',
                    type: 'rect',
                    rect: ['68', '33', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'House05',
                symbolName: 'House05',
                autoPlay: {

               }
            },
            {
                id: 'House04',
                symbolName: 'House04',
                autoPlay: {

               }
            },
            {
                id: 'House01',
                symbolName: 'House01',
                autoPlay: {

               }
            },
            {
                id: 'House03',
                symbolName: 'House03',
                autoPlay: {

               }
            },
            {
                id: 'House02',
                symbolName: 'House02',
                autoPlay: {

               }
            },
            {
                id: 'House06',
                symbolName: 'House06',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_House04}": [
                ["style", "left", '-27px'],
                ["style", "top", '34px']
            ],
            "${_House05}": [
                ["style", "left", '35px'],
                ["style", "top", '4px']
            ],
            "${_House06}": [
                ["style", "left", '84px'],
                ["style", "top", '36px']
            ],
            "${_House03}": [
                ["style", "left", '88px'],
                ["style", "top", '-1px']
            ],
            "${_House01}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_wate_02}": [
                ["style", "top", '-28px'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px']
            ],
            "${_House02}": [
                ["style", "left", '15px'],
                ["style", "top", '34px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '95px']
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
                { id: "eid46", tween: [ "style", "${_House06}", "left", '84px', { fromValue: '84px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "style", "${_House05}", "top", '4px', { fromValue: '4px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_House02}", "left", '15px', { fromValue: '15px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid59", tween: [ "style", "${_House03}", "left", '88px', { fromValue: '88px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "style", "${_House01}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid43", tween: [ "style", "${_House04}", "left", '-27px', { fromValue: '-27px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid60", tween: [ "style", "${_House03}", "top", '-1px', { fromValue: '-1px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_House04}", "top", '34px', { fromValue: '34px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid55", tween: [ "style", "${_House02}", "top", '34px', { fromValue: '34px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid47", tween: [ "style", "${_House06}", "top", '36px', { fromValue: '36px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "style", "${_House05}", "left", '35px', { fromValue: '35px'}], position: 2000, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"mov_01": {
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
                    rect: ['13px', '378px', '234', '272', 'auto', 'auto'],
                    id: 'filter_01',
                    fill: ['rgba(0,0,0,0)', 'images/filter_01.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['104px', '688px', '52', '197', 'auto', 'auto'],
                    id: 'line',
                    fill: ['rgba(0,0,0,0)', 'images/line.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'house_all',
                    type: 'rect',
                    rect: ['137px', '439px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House01',
                    type: 'rect',
                    rect: ['130px', '127px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House05',
                    type: 'rect',
                    rect: ['137px', '131px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House06',
                    type: 'rect',
                    rect: ['118px', '196px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['10px', '359px', '240', '296', 'auto', 'auto'],
                    id: 'filter',
                    fill: ['rgba(0,0,0,0)', 'images/filter.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['104px', '65px', '52', '189', 'auto', 'auto'],
                    id: 'line_top',
                    fill: ['rgba(0,0,0,0)', 'images/line_top.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'flash_mov',
                    type: 'rect',
                    rect: ['13px', '885px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['2px', '0px', '257px', '972px', 'auto', 'auto'],
                    id: 'bg',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/bg.png', '0px', '0px']
                },
                {
                    rect: ['0px', '40px', '259', '875', 'auto', 'auto'],
                    id: 'boby',
                    fill: ['rgba(0,0,0,0)', 'images/boby.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            {
                id: 'House05',
                symbolName: 'House05',
                autoPlay: {

               }
            },
            {
                id: 'House01',
                symbolName: 'House01',
                autoPlay: {

               }
            },
            {
                id: 'flash_mov',
                symbolName: 'flash_mov',
                autoPlay: {

               }
            },
            {
                id: 'House06',
                symbolName: 'House06',
                autoPlay: {

               }
            },
            {
                id: 'house_all',
                symbolName: 'house_all',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_House05}": [
                ["style", "left", '121px'],
                ["style", "top", '127px']
            ],
            "${_filter}": [
                ["style", "top", '359px'],
                ["style", "opacity", '1'],
                ["style", "left", '10px']
            ],
            "${_flash_mov}": [
                ["style", "left", '13px'],
                ["style", "top", '885px']
            ],
            "${_House06}": [
                ["style", "left", '110px'],
                ["style", "top", '188px']
            ],
            "${_House01}": [
                ["style", "top", '89px'],
                ["style", "left", '110px']
            ],
            "${_bg}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '2px']
            ],
            "${_house_all}": [
                ["style", "left", '83px'],
                ["style", "top", '412px']
            ],
            "${_line}": [
                ["style", "top", '688px'],
                ["style", "opacity", '1'],
                ["style", "left", '104px']
            ],
            "${symbolSelector}": [
                ["style", "height", '972px'],
                ["style", "width", '259px']
            ],
            "${_boby}": [
                ["style", "top", '40px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_line_top}": [
                ["style", "top", '65px'],
                ["style", "opacity", '1'],
                ["style", "left", '104px']
            ],
            "${_filter_01}": [
                ["style", "top", '378px'],
                ["style", "opacity", '1'],
                ["style", "left", '13px']
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
                { id: "eid41", tween: [ "style", "${_House06}", "left", '110px', { fromValue: '110px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_House05}", "top", '127px', { fromValue: '127px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_bg}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_filter_01}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_House01}", "top", '89px', { fromValue: '89px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid17", tween: [ "style", "${_line}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_house_all}", "left", '83px', { fromValue: '83px'}], position: 2000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_House01}", "left", '110px', { fromValue: '110px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_House06}", "top", '188px', { fromValue: '188px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${_house_all}", "top", '412px', { fromValue: '412px'}], position: 2000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_filter}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_boby}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_House05}", "left", '121px', { fromValue: '121px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid13", tween: [ "style", "${_line_top}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 }            ]
        }
    }
},
"mov_02": {
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
                    rect: ['13px', '378px', '234', '272', 'auto', 'auto'],
                    id: 'filter_01',
                    fill: ['rgba(0,0,0,0)', 'images/filter_01_01.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['104px', '688px', '52', '197', 'auto', 'auto'],
                    id: 'line',
                    fill: ['rgba(0,0,0,0)', 'images/line_02.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'house_all',
                    type: 'rect',
                    rect: ['137px', '439px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House01',
                    type: 'rect',
                    rect: ['130px', '127px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House01Copy',
                    type: 'rect',
                    rect: ['130px', '127px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House05',
                    type: 'rect',
                    rect: ['137px', '131px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House05Copy2',
                    type: 'rect',
                    rect: ['137px', '131px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House05Copy',
                    type: 'rect',
                    rect: ['137px', '131px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House06',
                    type: 'rect',
                    rect: ['118px', '196px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House06Copy2',
                    type: 'rect',
                    rect: ['118px', '196px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['10px', '359px', '240', '296', 'auto', 'auto'],
                    id: 'filter',
                    fill: ['rgba(0,0,0,0)', 'images/filter1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['104px', '65px', '52', '189', 'auto', 'auto'],
                    id: 'line_top',
                    fill: ['rgba(0,0,0,0)', 'images/line_top.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'flash_mov_1',
                    type: 'rect',
                    rect: ['83px', '905px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['2px', '0px', '257px', '972px', 'auto', 'auto'],
                    id: 'bg',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/bg.png', '0px', '0px']
                },
                {
                    rect: ['0px', '40px', '259', '875', 'auto', 'auto'],
                    id: 'boby',
                    fill: ['rgba(0,0,0,0)', 'images/boby.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            {
                id: 'House05Copy2',
                symbolName: 'House05',
                autoPlay: {

               }
            },
            {
                id: 'House01',
                symbolName: 'House01',
                autoPlay: {

               }
            },
            {
                id: 'House05Copy',
                symbolName: 'House05',
                autoPlay: {

               }
            },
            {
                id: 'house_all',
                symbolName: 'house_all',
                autoPlay: {

               }
            },
            {
                id: 'House05',
                symbolName: 'House05',
                autoPlay: {

               }
            },
            {
                id: 'House06Copy2',
                symbolName: 'House06',
                autoPlay: {

               }
            },
            {
                id: 'flash_mov_1',
                symbolName: 'flash_mov_1',
                autoPlay: {

               }
            },
            {
                id: 'House01Copy',
                symbolName: 'House01',
                autoPlay: {

               }
            },
            {
                id: 'House06',
                symbolName: 'House06',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_House05}": [
                ["style", "left", '121px'],
                ["style", "top", '127px']
            ],
            "${_House01}": [
                ["style", "top", '89px'],
                ["style", "left", '110px']
            ],
            "${_flash_mov_1}": [
                ["style", "top", '885px'],
                ["style", "left", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '972px'],
                ["style", "width", '259px']
            ],
            "${_line_top}": [
                ["style", "top", '65px'],
                ["style", "opacity", '1'],
                ["style", "left", '104px']
            ],
            "${_House05Copy2}": [
                ["style", "left", '187px'],
                ["style", "top", '507px']
            ],
            "${_House05Copy}": [
                ["style", "left", '106px'],
                ["style", "top", '708px']
            ],
            "${_House06}": [
                ["style", "left", '110px'],
                ["style", "top", '188px']
            ],
            "${_bg}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '2px']
            ],
            "${_house_all}": [
                ["style", "left", '83px'],
                ["style", "top", '412px']
            ],
            "${_filter}": [
                ["style", "top", '359px'],
                ["style", "opacity", '1'],
                ["style", "left", '10px']
            ],
            "${_House06Copy2}": [
                ["style", "left", '118px'],
                ["style", "top", '799px']
            ],
            "${_House01Copy}": [
                ["style", "top", '503px'],
                ["style", "left", '122px']
            ],
            "${_line}": [
                ["style", "top", '688px'],
                ["style", "opacity", '1'],
                ["style", "left", '104px']
            ],
            "${_boby}": [
                ["style", "top", '40px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_filter_01}": [
                ["style", "top", '378px'],
                ["style", "opacity", '1'],
                ["style", "left", '13px']
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
                { id: "eid41", tween: [ "style", "${_House06}", "left", '110px', { fromValue: '110px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_House05}", "top", '127px', { fromValue: '127px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_bg}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_filter_01}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_House01}", "top", '89px', { fromValue: '89px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "style", "${_House05Copy}", "top", '708px', { fromValue: '708px'}], position: 2000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_House01}", "left", '110px', { fromValue: '110px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid111", tween: [ "style", "${_House05Copy2}", "top", '507px', { fromValue: '507px'}], position: 2000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_filter}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_House06}", "top", '188px', { fromValue: '188px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_House06Copy2}", "top", '799px', { fromValue: '799px'}], position: 2000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_line_top}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_House06Copy2}", "left", '118px', { fromValue: '118px'}], position: 2000, duration: 0 },
                { id: "eid110", tween: [ "style", "${_House05Copy2}", "left", '187px', { fromValue: '187px'}], position: 2000, duration: 0 },
                { id: "eid117", tween: [ "style", "${_House01Copy}", "left", '122px', { fromValue: '122px'}], position: 2000, duration: 0 },
                { id: "eid39", tween: [ "style", "${_House05}", "left", '121px', { fromValue: '121px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_house_all}", "left", '83px', { fromValue: '83px'}], position: 2000, duration: 0 },
                { id: "eid122", tween: [ "style", "${_flash_mov_1}", "left", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "style", "${_House01Copy}", "top", '503px', { fromValue: '503px'}], position: 2000, duration: 0 },
                { id: "eid33", tween: [ "style", "${_house_all}", "top", '412px', { fromValue: '412px'}], position: 2000, duration: 0 },
                { id: "eid123", tween: [ "style", "${_flash_mov_1}", "top", '885px', { fromValue: '885px'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_boby}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_line}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_House05Copy}", "left", '106px', { fromValue: '106px'}], position: 2000, duration: 0 }            ]
        }
    }
},
"flash_mov_1": {
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
                    rect: ['-1px', '-456px', '237', '46', 'auto', 'auto'],
                    id: 'flash',
                    fill: ['rgba(0,0,0,0)', 'images/Layer_2.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flash}": [
                ["style", "top", '-843px'],
                ["style", "opacity", '0.6'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '237px']
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
                { id: "eid129", tween: [ "style", "${_flash}", "opacity", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
                { id: "eid130", tween: [ "style", "${_flash}", "opacity", '0.6', { fromValue: '0.6'}], position: 2000, duration: 0 },
                { id: "eid27", tween: [ "style", "${_flash}", "top", '0px', { fromValue: '-843px'}], position: 0, duration: 2000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1400741943270");
