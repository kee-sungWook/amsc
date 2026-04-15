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
                id: 'bg',
                type: 'image',
                tag: 'img',
                rect: ['322px', '149px','1144','585','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png"]
            },
            {
                id: 'ENG_POLLUTION',
                type: 'rect',
                rect: ['384', '729','auto','auto','auto', 'auto']
            },
            {
                id: 'engine',
                type: 'rect',
                rect: ['282', '650','auto','auto','auto', 'auto']
            },
            {
                id: 'ani_01',
                type: 'rect',
                rect: ['320', '147','auto','auto','auto', 'auto']
            },
            {
                id: 'wheel_mov',
                type: 'rect',
                rect: ['1258', '244','auto','auto','auto', 'auto']
            },
            {
                id: 'INJECTION2',
                display: 'block',
                type: 'rect',
                rect: ['620', '736','auto','auto','auto', 'auto']
            },
            {
                id: 'INJECTION1',
                display: 'block',
                type: 'rect',
                rect: ['625', '736','auto','auto','auto', 'auto']
            },
            {
                id: 'layers',
                type: 'image',
                tag: 'img',
                rect: ['242px', '143px','1235','593','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"layers.png"]
            },
            {
                id: 'kk',
                type: 'image',
                tag: 'img',
                rect: ['630px', '538px','28','44','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"kk.png"]
            },
            {
                id: 'EQUIPMENT',
                type: 'rect',
                rect: ['1683px', '693px','auto','auto','auto', 'auto']
            },
            {
                id: 'butt',
                type: 'rect',
                rect: ['766px', '538px','auto','auto','auto', 'auto']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['63px', '58px','auto','auto','auto', 'auto'],
                text: "연료라인의 세정은 연료라인 내의 이물질을 제거하고 연료라인 관련 부품의 내구성을 향상시킵니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 38, "rgba(0,74,141,1.00)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'INJECTION1',
                symbolName: 'INJECTION1'
            },
            {
                id: 'wheel_mov',
                symbolName: 'wheel_mov',
                autoPlay: {

                }
            },
            {
                id: 'INJECTION2',
                symbolName: 'INJECTION2'
            },
            {
                id: 'ani_01',
                symbolName: 'ani_01',
                autoPlay: {

                }
            },
            {
                id: 'ENG_POLLUTION',
                symbolName: 'ENG_POLLUTION'
            },
            {
                id: 'butt',
                symbolName: 'butt',
                autoPlay: {

                }
            },
            {
                id: 'engine',
                symbolName: 'engine',
                autoPlay: {

                }
            },
            {
                id: 'EQUIPMENT',
                symbolName: 'EQUIPMENT',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_butt}": [
                ["style", "left", '766px'],
                ["style", "top", '538px']
            ],
            "${_INJECTION1}": [
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "top", '58px'],
                ["style", "left", '63px'],
                ["style", "font-size", '38px']
            ],
            "${_bg}": [
                ["style", "left", '322px'],
                ["style", "top", '149px']
            ],
            "${_INJECTION2}": [
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_kk}": [
                ["style", "left", '630px'],
                ["style", "top", '538px']
            ],
            "${_EQUIPMENT}": [
                ["style", "top", '298px'],
                ["transform", "scaleX", '0.73228'],
                ["style", "left", '1140px'],
                ["transform", "scaleY", '0.73228']
            ],
            "${_layers}": [
                ["style", "left", '242px'],
                ["style", "top", '143px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6252,
            autoPlay: true,
            labels: {
                "dirty": 33,
                "clean": 1000
            },
            timeline: [
                { id: "eid21", tween: [ "transform", "${_EQUIPMENT}", "scaleY", '0.73228', { fromValue: '0.73228'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_EQUIPMENT}", "left", '1140px', { fromValue: '1140px'}], position: 0, duration: 0 },
                { id: "eid556", tween: [ "style", "${_INJECTION2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid557", tween: [ "style", "${_INJECTION2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid555", tween: [ "style", "${_INJECTION1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid20", tween: [ "transform", "${_EQUIPMENT}", "scaleX", '0.73228', { fromValue: '0.73228'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_EQUIPMENT}", "top", '298px', { fromValue: '298px'}], position: 0, duration: 0 },
                { id: "eid559", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ani_01}', [] ], ""], position: 33 }            ]
        }
    }
},
"EQUIP_LIGHT2": {
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
                    rect: ['0px', '0px', '214', '70', 'auto', 'auto'],
                    tag: 'img',
                    id: 'equipment_light2_4',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light2_4.png']
                },
                {
                    rect: ['7px', '0px', '207', '70', 'auto', 'auto'],
                    tag: 'img',
                    id: 'equipment_light2_3',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light2_3.png']
                },
                {
                    rect: ['0px', '0px', '212', '70', 'auto', 'auto'],
                    tag: 'img',
                    id: 'equipment_light2_2',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light2_2.png']
                },
                {
                    rect: ['0px', '0px', '214', '70', 'auto', 'auto'],
                    tag: 'img',
                    id: 'equipment_light2_1',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light2_1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '214px']
            ],
            "${_equipment_light2_4}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_equipment_light2_2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_equipment_light2_3}": [
                ["style", "top", '0px'],
                ["style", "left", '7px'],
                ["style", "display", 'none']
            ],
            "${_equipment_light2_1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_equipment_light2_1}", "display", 'none', { fromValue: 'block'}], position: 100, duration: 0 },
                { id: "eid9", tween: [ "style", "${_equipment_light2_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_equipment_light2_4}", "display", 'block', { fromValue: 'none'}], position: 300, duration: 0 },
                { id: "eid8", tween: [ "style", "${_equipment_light2_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_equipment_light2_3}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid14", tween: [ "style", "${_equipment_light2_3}", "display", 'none', { fromValue: 'block'}], position: 300, duration: 0 },
                { id: "eid7", tween: [ "style", "${_equipment_light2_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_equipment_light2_2}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0 },
                { id: "eid12", tween: [ "style", "${_equipment_light2_2}", "display", 'none', { fromValue: 'block'}], position: 200, duration: 0 }            ]
        }
    }
},
"EQUIP_LIGHT1": {
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
                    rect: ['1px', '1px', '35px', '34px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'image',
                    id: 'equipment_light1',
                    tag: 'img',
                    rect: ['0px', '0px', '37', '36', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '37px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '34px'],
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["style", "width", '35px']
            ],
            "${_equipment_light1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 433,
            autoPlay: false,
            timeline: [
                { id: "eid4", tween: [ "style", "${_equipment_light1}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 200 },
                { id: "eid6", tween: [ "style", "${_equipment_light1}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 200 }            ]
        }
    }
},
"EQUIPMENT": {
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
                    rect: ['0px', '0px', '428', '808', 'auto', 'auto'],
                    id: 'equipment',
                    fill: ['rgba(0,0,0,0)', 'images/equipment.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'EQUIP_LIGHT2',
                    type: 'rect',
                    rect: ['37px', '304px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIP_LIGHT1',
                    type: 'rect',
                    rect: ['268px', '320px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIP_LIGHT1_2',
                    type: 'rect',
                    rect: ['268px', '320px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'EQUIP_LIGHT2',
                symbolName: 'EQUIP_LIGHT2',
                autoPlay: {

               }
            },
            {
                id: 'EQUIP_LIGHT1',
                symbolName: 'EQUIP_LIGHT1',
                autoPlay: {

               }
            },
            {
                id: 'EQUIP_LIGHT1_2',
                symbolName: 'EQUIP_LIGHT1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_equipment}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_EQUIP_LIGHT2}": [
                ["style", "left", '37px'],
                ["style", "top", '304px']
            ],
            "${_EQUIP_LIGHT1}": [
                ["style", "left", '268px'],
                ["style", "top", '320px']
            ],
            "${_EQUIP_LIGHT1_2}": [
                ["style", "left", '329px'],
                ["style", "top", '320px']
            ],
            "${symbolSelector}": [
                ["style", "height", '808px'],
                ["style", "width", '428px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 633,
            autoPlay: true,
            timeline: [
                { id: "eid18", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LIGHT1}', [] ], ""], position: 0 },
                { id: "eid19", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LIGHT1_2}', [] ], ""], position: 200 }            ]
        }
    }
},
"belt_02mov": {
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
                    rect: ['0px', '0px', '27', '302', 'auto', 'auto'],
                    id: 'belt_02',
                    fill: ['rgba(0,0,0,0)', 'images/belt_02.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_belt_02}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '302px'],
                ["style", "width", '27px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid45", tween: [ "style", "${_belt_02}", "top", '28px', { fromValue: '0px'}], position: 0, duration: 250 }            ]
        }
    }
},
"belt_mov": {
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
                    id: 'belt',
                    type: 'image',
                    rect: ['0px', '0px', '27px', '181px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/belt.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_belt}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '181px'],
                ["style", "width", '27px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid46", tween: [ "style", "${_belt}", "top", '16px', { fromValue: '0px'}], position: 0, duration: 250 }            ]
        }
    }
},
"engine": {
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
                    id: 'CYLINDER1',
                    type: 'rect',
                    rect: ['101', '78', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'CYLINDER2',
                    type: 'rect',
                    rect: ['210px', '78', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'CYLINDER3',
                    type: 'rect',
                    rect: ['317px', '78', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'CYLINDER4',
                    type: 'rect',
                    rect: ['423px', '78', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '584', '375', 'auto', 'auto'],
                    id: 'boby',
                    fill: ['rgba(0,0,0,0)', 'images/boby.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'belt_02mov',
                    type: 'rect',
                    rect: ['8px', '62px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'belt_mov',
                    type: 'rect',
                    rect: ['555px', '182px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'bg02',
                    type: 'image',
                    rect: ['0px', '156px', '612px', '244px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg02.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'belt_mov',
                symbolName: 'belt_mov',
                autoPlay: {

               }
            },
            {
                id: 'belt_02mov',
                symbolName: 'belt_02mov',
                autoPlay: {

               }
            },
            {
                id: 'CYLINDER4',
                symbolName: 'CYLINDER',
                autoPlay: {

               }
            },
            {
                id: 'CYLINDER1',
                symbolName: 'CYLINDER',
                autoPlay: {

               }
            },
            {
                id: 'CYLINDER3',
                symbolName: 'CYLINDER',
                autoPlay: {

               }
            },
            {
                id: 'CYLINDER2',
                symbolName: 'CYLINDER',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_CYLINDER4}": [
                ["style", "left", '423px']
            ],
            "${_CYLINDER3}": [
                ["style", "left", '317px']
            ],
            "${_belt_mov}": [
                ["style", "left", '555px'],
                ["style", "top", '182px']
            ],
            "${_CYLINDER2}": [
                ["style", "left", '210px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '612px']
            ],
            "${_boby}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_belt_02mov}": [
                ["style", "left", '8px'],
                ["style", "top", '62px']
            ],
            "${_bg02}": [
                ["style", "left", '0px'],
                ["style", "top", '156px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"wheel_mov": {
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
                    id: 'wheel01',
                    tag: 'img',
                    rect: ['86px', '0px', '114', '113', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wheel01.png']
                },
                {
                    type: 'image',
                    id: 'wheel02',
                    tag: 'img',
                    rect: ['0px', '4px', '106', '105', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wheel02.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '113px'],
                ["style", "width", '200px']
            ],
            "${_wheel02}": [
                ["style", "top", '4px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_wheel01}": [
                ["style", "top", '0px'],
                ["style", "left", '86px'],
                ["transform", "rotateZ", '0deg']
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
                { id: "eid48", tween: [ "transform", "${_wheel02}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 2000 },
                { id: "eid47", tween: [ "transform", "${_wheel01}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000 }            ]
        }
    }
},
"gear_mov": {
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
                    id: 'gear',
                    type: 'image',
                    rect: ['0px', '0px', '19px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gear.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gear}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '19px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 252,
            autoPlay: true,
            timeline: [
                { id: "eid114", tween: [ "style", "${_gear}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 252 }            ]
        }
    }
},
"ani_01": {
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
                    rect: ['1024px', '434px', '28px', '18px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['926px', '214px', '227px', '18px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['1024px', '67px', '28px', '12px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['1016px', '0px', '8px', '22px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['0px', '22px', '22px', '3px', 'auto', 'auto'],
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['75px', '114px', '22px', '7px', 'auto', 'auto'],
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['97px', '44px', '5px', '22px', 'auto', 'auto'],
                    id: 'Rectangle7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['512px', '66px', '22px', '7px', 'auto', 'auto'],
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['161px', '143px', '537px', '5px', 'auto', 'auto'],
                    id: 'Rectangle9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['485px', '221px', '22px', '5px', 'auto', 'auto'],
                    id: 'Rectangle10',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['482px', '329px', '3px', '24px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['765px', '223px', '22px', '5px', 'auto', 'auto'],
                    id: 'Rectangle12',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['787px', '502px', '4px', '24px', 'auto', 'auto'],
                    id: 'Rectangle13',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['305px', '377px', '38px', '5px', 'auto', 'auto'],
                    id: 'Rectangle14',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['310px', '499px', '28px', '6px', 'auto', 'auto'],
                    id: 'Rectangle15',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                },
                {
                    rect: ['315px', '536px', '19px', '5px', 'auto', 'auto'],
                    id: 'Rectangle17',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(241,112,110,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '926px'],
                ["style", "top", '214px']
            ],
            "${_Rectangle10}": [
                ["style", "top", '221px'],
                ["style", "height", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '485px'],
                ["color", "background-color", 'rgba(254,164,164,1.00)']
            ],
            "${_Rectangle15}": [
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '6px'],
                ["style", "opacity", '0'],
                ["style", "left", '310px'],
                ["style", "top", '499px']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '161px'],
                ["style", "top", '143px']
            ],
            "${symbolSelector}": [
                ["style", "height", '541px'],
                ["style", "width", '1153px']
            ],
            "${_Rectangle}": [
                ["style", "height", '18px'],
                ["style", "top", '434px'],
                ["style", "left", '1024px'],
                ["color", "background-color", 'rgba(192,192,192,1)']
            ],
            "${_Rectangle4}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '22px'],
                ["style", "opacity", '0'],
                ["style", "left", '1016px'],
                ["style", "width", '8px']
            ],
            "${_Rectangle8}": [
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '7px'],
                ["style", "opacity", '0'],
                ["style", "left", '512px'],
                ["style", "top", '66px']
            ],
            "${_Rectangle7}": [
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "top", '44px'],
                ["style", "opacity", '0'],
                ["style", "left", '97px'],
                ["style", "width", '5px']
            ],
            "${_Rectangle17}": [
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '315px'],
                ["style", "top", '536px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '114px'],
                ["style", "height", '7px'],
                ["style", "opacity", '0'],
                ["style", "left", '75px'],
                ["color", "background-color", 'rgba(254,164,164,1.00)']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '1024px'],
                ["style", "top", '67px']
            ],
            "${_Rectangle12}": [
                ["style", "top", '223px'],
                ["style", "height", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '765px'],
                ["color", "background-color", 'rgba(254,164,164,1.00)']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "top", '22px'],
                ["style", "height", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle11}": [
                ["style", "top", '329px'],
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '24px'],
                ["style", "opacity", '0'],
                ["style", "left", '482px'],
                ["style", "width", '3px']
            ],
            "${_Rectangle13}": [
                ["style", "top", '502px'],
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '24px'],
                ["style", "opacity", '0'],
                ["style", "left", '787px'],
                ["style", "width", '4px']
            ],
            "${_Rectangle14}": [
                ["style", "top", '377px'],
                ["color", "background-color", 'rgba(254,164,164,1.00)'],
                ["style", "height", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '305px'],
                ["style", "width", '38px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6219,
            autoPlay: false,
            timeline: [
                { id: "eid110", tween: [ "style", "${_Rectangle17}", "height", '51px', { fromValue: '5px'}], position: 4367, duration: 133 },
                { id: "eid52", tween: [ "style", "${_Rectangle2}", "height", '153px', { fromValue: '18px'}], position: 500, duration: 500 },
                { id: "eid281", tween: [ "color", "${_Rectangle7}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Rectangle12}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 14 },
                { id: "eid105", tween: [ "style", "${_Rectangle14}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 14 },
                { id: "eid89", tween: [ "style", "${_Rectangle11}", "left", '373px', { fromValue: '482px'}], position: 3749, duration: 251 },
                { id: "eid96", tween: [ "style", "${_Rectangle13}", "width", '102px', { fromValue: '4px'}], position: 4247, duration: 135 },
                { id: "eid72", tween: [ "style", "${_Rectangle6}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 15 },
                { id: "eid287", tween: [ "color", "${_Rectangle3}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Rectangle13}", "opacity", '1', { fromValue: '0'}], position: 4247, duration: 10 },
                { id: "eid57", tween: [ "style", "${_Rectangle3}", "top", '0px', { fromValue: '67px'}], position: 1000, duration: 250 },
                { id: "eid51", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(241,112,110,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 500 },
                { id: "eid286", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,112,110,1)'}], position: 500, duration: 315 },
                { id: "eid307", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 2767, duration: 0 },
                { id: "eid305", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Rectangle2}", "top", '79px', { fromValue: '214px'}], position: 500, duration: 500 },
                { id: "eid275", tween: [ "color", "${_Rectangle11}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Rectangle6}", "height", '79px', { fromValue: '7px'}], position: 2000, duration: 200 },
                { id: "eid76", tween: [ "style", "${_Rectangle8}", "height", '55px', { fromValue: '7px'}], position: 2767, duration: 233 },
                { id: "eid278", tween: [ "color", "${_Rectangle5}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid284", tween: [ "color", "${_Rectangle14}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Rectangle7}", "opacity", '1', { fromValue: '0'}], position: 2200, duration: 15 },
                { id: "eid92", tween: [ "style", "${_Rectangle11}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 18 },
                { id: "eid283", tween: [ "color", "${_Rectangle6}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Rectangle4}", "left", '0px', { fromValue: '1016px'}], position: 1250, duration: 500 },
                { id: "eid99", tween: [ "style", "${_Rectangle14}", "height", '122px', { fromValue: '5px'}], position: 4000, duration: 199 },
                { id: "eid108", tween: [ "style", "${_Rectangle15}", "opacity", '1', { fromValue: '0'}], position: 4200, duration: 14 },
                { id: "eid279", tween: [ "color", "${_Rectangle12}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid285", tween: [ "color", "${_Rectangle4}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Rectangle7}", "width", '436px', { fromValue: '5px'}], position: 2200, duration: 567 },
                { id: "eid64", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 17 },
                { id: "eid79", tween: [ "style", "${_Rectangle9}", "height", '37px', { fromValue: '5px'}], position: 3000, duration: 500 },
                { id: "eid106", tween: [ "style", "${_Rectangle15}", "height", '37px', { fromValue: '6px'}], position: 4200, duration: 167 },
                { id: "eid112", tween: [ "style", "${_Rectangle17}", "opacity", '1', { fromValue: '0'}], position: 4367, duration: 15 },
                { id: "eid282", tween: [ "color", "${_Rectangle8}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Rectangle12}", "height", '303px', { fromValue: '5px'}], position: 4000, duration: 247 },
                { id: "eid78", tween: [ "style", "${_Rectangle8}", "opacity", '1', { fromValue: '0'}], position: 2767, duration: 15 },
                { id: "eid70", tween: [ "style", "${_Rectangle6}", "top", '42px', { fromValue: '114px'}], position: 2000, duration: 200 },
                { id: "eid50", tween: [ "style", "${_Rectangle}", "top", '232px', { fromValue: '434px'}], position: 0, duration: 500 },
                { id: "eid306", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 2767, duration: 0 },
                { id: "eid280", tween: [ "color", "${_Rectangle15}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Rectangle10}", "height", '132px', { fromValue: '5px'}], position: 3500, duration: 249 },
                { id: "eid277", tween: [ "color", "${_Rectangle17}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Rectangle3}", "height", '79px', { fromValue: '12px'}], position: 1000, duration: 250 },
                { id: "eid59", tween: [ "style", "${_Rectangle4}", "width", '1024px', { fromValue: '8px'}], position: 1250, duration: 500 },
                { id: "eid276", tween: [ "color", "${_Rectangle10}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Rectangle3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 16 },
                { id: "eid49", tween: [ "style", "${_Rectangle}", "height", '220px', { fromValue: '18px'}], position: 0, duration: 500 },
                { id: "eid60", tween: [ "style", "${_Rectangle5}", "height", '107px', { fromValue: '3px'}], position: 1750, duration: 250 },
                { id: "eid66", tween: [ "style", "${_Rectangle5}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 8 },
                { id: "eid88", tween: [ "style", "${_Rectangle10}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 9 },
                { id: "eid274", tween: [ "color", "${_Rectangle9}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 42 },
                { id: "eid90", tween: [ "style", "${_Rectangle11}", "width", '112px', { fromValue: '3px'}], position: 3749, duration: 251 },
                { id: "eid83", tween: [ "style", "${_Rectangle9}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 18 },
                { id: "eid288", tween: [ "color", "${_Rectangle13}", "background-color", 'rgba(254,164,164,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,164,164,1.00)'}], position: 6219, duration: 0 }            ]
        }
    }
},
"butt": {
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
                    id: 'rewind_btn',
                    type: 'group',
                    rect: ['0px', '0px', '256', '86', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '250px', '80px', 'auto', 'auto'],
                        borderRadius: ['15px 15px', '15px 15px', '15px 15px', '15px 15px'],
                        id: 'RoundRect',
                        stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(199,0,96,1.00)']
                    },
                    {
                        rect: ['0px', '17px', '256px', 'auto', 'auto', 'auto'],
                        font: ['굴림', 45, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                        id: 'Text',
                        text: '다시보기',
                        align: 'center',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(199,0,96,1)'],
                ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '250px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '80px'],
                ["style", "border-width", '3px'],
                ["style", "left", '0px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "width", '256px'],
                ["style", "left", '0px'],
                ["style", "font-size", '45px']
            ],
            "${symbolSelector}": [
                ["style", "height", '86px'],
                ["style", "width", '256px']
            ],
            "${_rewind_btn}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 333,
            autoPlay: false,
            timeline: [
                { id: "eid511", tween: [ "style", "${_rewind_btn}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333 }            ]
        }
    }
},
"bg_ani": {
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
                    id: 'bg04',
                    type: 'image',
                    rect: ['0px', '0px', '404px', '204px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg04.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bg04}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '204px'],
                ["style", "width", '404px']
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
                { id: "eid223", tween: [ "style", "${_bg04}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 2000 }            ]
        }
    }
},
"INJECTION1": {
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
                    id: 'spark_01',
                    type: 'image',
                    rect: ['0px', '0px', '39px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark_01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spark_01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '38px']
            ],
            "${symbolSelector}": [
                ["style", "height", '18px'],
                ["style", "width", '39px']
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
                { id: "eid549", tween: [ "style", "${_spark_01}", "top", '28px', { fromValue: '0px'}], position: 0, duration: 250 },
                { id: "eid551", tween: [ "style", "${_spark_01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid552", tween: [ "style", "${_spark_01}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 125 },
                { id: "eid547", tween: [ "transform", "${_spark_01}", "scaleY", '2', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid546", tween: [ "transform", "${_spark_01}", "scaleX", '2', { fromValue: '1'}], position: 0, duration: 250 }            ]
        }
    }
},
"INJECTION2": {
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
                    id: 'spark_02',
                    type: 'image',
                    rect: ['0px', '0px', '48px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark_02.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spark_02}": [
                ["style", "top", '0px'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '12px'],
                ["style", "width", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '48px']
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
                { id: "eid558", tween: [ "style", "${_spark_02}", "height", '103px', { fromValue: '16px'}], position: 0, duration: 250 },
                { id: "eid562", tween: [ "style", "${_spark_02}", "width", '63px', { fromValue: '24px'}], position: 0, duration: 250 },
                { id: "eid560", tween: [ "style", "${_spark_02}", "left", '-8px', { fromValue: '12px'}], position: 0, duration: 250 },
                { id: "eid564", tween: [ "style", "${_spark_02}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid565", tween: [ "style", "${_spark_02}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 125 }            ]
        }
    }
},
"ENG_POLLUTION": {
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
                    id: 'bg04',
                    type: 'image',
                    rect: ['0px', '0px', '404px', '204px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg04.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bg04}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '204px'],
                ["style", "width", '404px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid566", tween: [ "style", "${_bg04}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 }            ]
        }
    }
},
"CYLINDER_POLLUTION": {
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
                    rect: ['0px', '0px', '69px', '118px', 'auto', 'auto'],
                    id: 'cylinder_scratch',
                    opacity: 0.8,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cylinder_scratch.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cylinder_scratch}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.800000011920929'],
                ["style", "left", '0px'],
                ["style", "width", '69px']
            ],
            "${symbolSelector}": [
                ["style", "height", '118px'],
                ["style", "width", '69px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid569", tween: [ "style", "${_cylinder_scratch}", "opacity", '0', { fromValue: '0.800000011920929'}], position: 0, duration: 500 }            ]
        }
    }
},
"BURN": {
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
                    rect: ['0px', '0px', '84px', '31px', 'auto', 'auto'],
                    type: 'rect',
                    opacity: 0.8,
                    id: 'RED',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,0,95,1.00)']
                },
                {
                    rect: ['0px', '0px', '84px', '31px', 'auto', 'auto'],
                    type: 'rect',
                    opacity: 0.8,
                    id: 'WHITE',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '84px', '31px', 'auto', 'auto'],
                    type: 'rect',
                    opacity: 0.8,
                    id: 'BLACK',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'block',
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '84px']
            ],
            "${_RED}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.800000011920929'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,0,95,1.00)']
            ],
            "${_WHITE}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.8'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_BLACK}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.8'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid595", tween: [ "style", "${_RED}", "opacity", '0', { fromValue: '0.800000011920929'}], position: 333, duration: 167 },
                { id: "eid583", tween: [ "style", "${_RED}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid587", tween: [ "style", "${_RED}", "display", 'block', { fromValue: 'none'}], position: 133, duration: 0 },
                { id: "eid592", tween: [ "style", "${_RED}", "display", 'none', { fromValue: 'block'}], position: 200, duration: 0 },
                { id: "eid593", tween: [ "style", "${_RED}", "display", 'block', { fromValue: 'none'}], position: 333, duration: 0 },
                { id: "eid584", tween: [ "style", "${_BLACK}", "display", 'none', { fromValue: 'block'}], position: 67, duration: 0 },
                { id: "eid594", tween: [ "style", "${_BLACK}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid588", tween: [ "style", "${_BLACK}", "display", 'none', { fromValue: 'block'}], position: 267, duration: 0 },
                { id: "eid582", tween: [ "style", "${_WHITE}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid585", tween: [ "style", "${_WHITE}", "display", 'block', { fromValue: 'none'}], position: 67, duration: 0 },
                { id: "eid586", tween: [ "style", "${_WHITE}", "display", 'none', { fromValue: 'block'}], position: 133, duration: 0 },
                { id: "eid589", tween: [ "style", "${_WHITE}", "display", 'none', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid590", tween: [ "style", "${_WHITE}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0 },
                { id: "eid591", tween: [ "style", "${_WHITE}", "display", 'none', { fromValue: 'block'}], position: 333, duration: 0 }            ]
        }
    }
},
"CYLINDER": {
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
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    type: 'rect',
                    id: 'BURN'
                },
                {
                    id: 'cylinder',
                    type: 'image',
                    rect: ['0px', '28px', '84px', '178px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cylinder.png', '0px', '0px']
                },
                {
                    id: 'CYLINDER_POLLUTION',
                    type: 'rect',
                    rect: ['7', '31', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'BURN',
                symbolName: 'BURN',
                autoPlay: {

               }
            },
            {
                id: 'CYLINDER_POLLUTION',
                symbolName: 'CYLINDER_POLLUTION',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_cylinder}": [
                ["style", "left", '0px'],
                ["style", "top", '28px']
            ],
            "${_BURN}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none']
            ],
            "${_CYLINDER_POLLUTION}": [
                ["style", "top", '31px']
            ],
            "${symbolSelector}": [
                ["style", "height", '206px'],
                ["style", "width", '84px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "step1": 0,
                "step2": 500,
                "step3": 1000,
                "step4": 1500
            },
            timeline: [
                { id: "eid598", tween: [ "transform", "${_BURN}", "scaleY", '3.87097', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid599", tween: [ "style", "${_BURN}", "top", '44px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid600", tween: [ "style", "${_BURN}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid601", tween: [ "style", "${_BURN}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid571", tween: [ "style", "${_CYLINDER_POLLUTION}", "top", '120px', { fromValue: '31px'}], position: 0, duration: 500 },
                { id: "eid574", tween: [ "style", "${_CYLINDER_POLLUTION}", "top", '31px', { fromValue: '120px'}], position: 500, duration: 500 },
                { id: "eid576", tween: [ "style", "${_CYLINDER_POLLUTION}", "top", '120px', { fromValue: '31px'}], position: 1000, duration: 500 },
                { id: "eid580", tween: [ "style", "${_CYLINDER_POLLUTION}", "top", '31px', { fromValue: '120px'}], position: 1500, duration: 500 },
                { id: "eid570", tween: [ "style", "${_cylinder}", "top", '117px', { fromValue: '28px'}], position: 0, duration: 500 },
                { id: "eid575", tween: [ "style", "${_cylinder}", "top", '28px', { fromValue: '117px'}], position: 500, duration: 500 },
                { id: "eid577", tween: [ "style", "${_cylinder}", "top", '117px', { fromValue: '28px'}], position: 1000, duration: 500 },
                { id: "eid581", tween: [ "style", "${_cylinder}", "top", '28px', { fromValue: '117px'}], position: 1500, duration: 500 },
                { id: "eid602", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BURN}', [] ], ""], position: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-18279344");
