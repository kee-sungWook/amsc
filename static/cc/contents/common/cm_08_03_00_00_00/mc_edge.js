/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'preloadAudio': false
};
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
                id: 'EQUIPMENT',
                type: 'rect',
                rect: ['122', '362','auto','auto','auto', 'auto']
            },
            {
                id: 'STEERING',
                type: 'rect',
                rect: ['569', '180','auto','auto','auto', 'auto']
            },
            {
                id: 'POWER_PUMP_LINE',
                type: 'rect',
                rect: ['581', '794','auto','auto','auto', 'auto']
            },
            {
                id: 'pPump',
                type: 'image',
                tag: 'img',
                rect: ['558', '758','237','304','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pPump.png"]
            },
            {
                id: 'EQUIP_LINE2_IN',
                type: 'rect',
                rect: ['540', '453','auto','auto','auto', 'auto']
            },
            {
                id: 'equip_line2',
                type: 'image',
                tag: 'img',
                rect: ['535', '447','609','184','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"equip_line2.png"]
            },
            {
                id: 'EQUIP_LINE1_IN',
                type: 'rect',
                rect: ['670', '470','auto','auto','auto', 'auto']
            },
            {
                id: 'equip_line1',
                type: 'image',
                tag: 'img',
                rect: ['665', '465','496','355','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"equip_line1.png"]
            },
            {
                id: 'PUBLIC_LINE_IN',
                type: 'rect',
                rect: ['485', '650','auto','auto','auto', 'auto']
            },
            {
                id: 'public_line',
                type: 'image',
                tag: 'img',
                rect: ['479', '644','183','348','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"public_line.png"]
            },
            {
                id: 'rewind_btn',
                type: 'group',
                rect: ['1046', '846','256','86','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect',
                    type: 'rect',
                    rect: ['0px', '0px','250px','80px','auto', 'auto'],
                    borderRadius: ["15px 15px", "15px 15px", "15px 15px", "15px 15px"],
                    fill: ["rgba(199,0,96,1.00)"],
                    stroke: [3,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['0px', '17px','256px','auto','auto', 'auto'],
                    text: "다시보기",
                    align: "center",
                    font: ['굴림', 45, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'm_txt',
                type: 'text',
                rect: ['1288', '177','460','176','auto', 'auto'],
                text: "전용장비를 이용하여 오일을<br>교환할 경우 스티어링 내부의<br>오염물질 까지 깨끗하게<br>제거 합니다.",
                align: "auto",
                font: ['굴림', 35, "rgb(0,75,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'EQUIP_LINE1_IN',
                symbolName: 'EQUIP_LINE1_IN',
                autoPlay: {

                }
            },
            {
                id: 'STEERING',
                symbolName: 'STEERING',
                autoPlay: {

                }
            },
            {
                id: 'EQUIP_LINE2_IN',
                symbolName: 'EQUIP_LINE2_IN',
                autoPlay: {

                }
            },
            {
                id: 'POWER_PUMP_LINE',
                symbolName: 'POWER_PUMP_LINE',
                autoPlay: {

                }
            },
            {
                id: 'PUBLIC_LINE_IN',
                symbolName: 'PUBLIC_LINE_IN',
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
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(199,0,96,1.00)'],
                ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '250px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '80px'],
                ["style", "left", '0px'],
                ["style", "border-width", '3px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '45px'],
                ["style", "left", '0px'],
                ["style", "width", '256px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1900px']
            ],
            "${_rewind_btn}": [
                ["style", "top", '362px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '1284px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: true,
            timeline: [
                { id: "eid121", tween: [ "transform", "${_rewind_btn}", "scaleX", '1', { fromValue: '0.9'}], position: 6267, duration: 233 },
                { id: "eid123", tween: [ "transform", "${_rewind_btn}", "scaleY", '1', { fromValue: '0.9'}], position: 6267, duration: 233 },
                { id: "eid122", tween: [ "style", "${_rewind_btn}", "opacity", '1', { fromValue: '0'}], position: 6267, duration: 233 },
                { id: "eid126", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_PUBLIC_LINE_IN}', [0] ], ""], position: 0 },
                { id: "eid128", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_STEERING}', [0] ], ""], position: 0 },
                { id: "eid129", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_EQUIP_LINE1_IN}', [0] ], ""], position: 0 },
                { id: "eid127", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_EQUIP_LINE2_IN}', [0] ], ""], position: 0 },
                { id: "eid130", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_PUBLIC_LINE_IN}', [] ], ""], position: 33 },
                { id: "eid131", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LINE1_IN}', [] ], ""], position: 1600 },
                { id: "eid132", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_STEERING}', [] ], ""], position: 2999.6666666667 },
                { id: "eid133", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LINE2_IN}', [] ], ""], position: 4733.3333333333 }            ]
        }
    }
},
"POWER_PUMP_LINE": {
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
                    rect: ['0px', '0px', '119', '171', 'auto', 'auto'],
                    id: 'pPump_lineBack',
                    fill: ['rgba(0,0,0,0)', 'images/pPump_lineBack.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['-41px', '-55px', '187', '232', 'auto', 'auto'],
                    id: 'pPump_line',
                    fill: ['rgba(0,0,0,0)', 'images/pPump_line.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pPump_lineBack}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '171px'],
                ["style", "width", '119px'],
                ["style", "overflow", 'hidden']
            ],
            "${_pPump_line}": [
                ["style", "top", '-55px'],
                ["style", "left", '-41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_pPump_line}", "left", '-58px', { fromValue: '-41px'}], position: 0, duration: 300 },
                { id: "eid2", tween: [ "style", "${_pPump_line}", "top", '-29px', { fromValue: '-55px'}], position: 0, duration: 300 }            ]
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
                    type: 'image',
                    id: 'equipment_light1',
                    tag: 'img',
                    rect: ['0px', '0px', '47', '22', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_equipment_light1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '47px']
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
                { id: "eid9", tween: [ "style", "${_equipment_light1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233 },
                { id: "eid10", tween: [ "style", "${_equipment_light1}", "opacity", '0', { fromValue: '1'}], position: 267, duration: 233 }            ]
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
                    type: 'image',
                    id: 'equipment_light2',
                    tag: 'img',
                    rect: ['0px', '0px', '44', '21', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light2.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_equipment_light2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '21px'],
                ["style", "width", '44px']
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
                { id: "eid6", tween: [ "style", "${_equipment_light2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 233 },
                { id: "eid7", tween: [ "style", "${_equipment_light2}", "opacity", '1', { fromValue: '0.000000'}], position: 267, duration: 233 }            ]
        }
    }
},
"EQUIP_LIGHT3": {
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
                    id: 'equipment_light3',
                    tag: 'img',
                    rect: ['0px', '0px', '154', '52', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light3.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_equipment_light3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '52px'],
                ["style", "width", '154px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_equipment_light3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233 },
                { id: "eid5", tween: [ "style", "${_equipment_light3}", "opacity", '0', { fromValue: '1'}], position: 267, duration: 233 }            ]
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
                    type: 'image',
                    id: 'equipment',
                    tag: 'img',
                    rect: ['0px', '0px', '476', '427', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equipment.png']
                },
                {
                    id: 'EQUIP_LIGHT3',
                    type: 'rect',
                    rect: ['151px', '58px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIP_LIGHT2',
                    type: 'rect',
                    rect: ['208px', '27px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIP_LIGHT2Copy',
                    type: 'rect',
                    rect: ['254px', '32px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIP_LIGHT2Copy2',
                    type: 'rect',
                    rect: ['300px', '37px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIP_LIGHT1',
                    type: 'rect',
                    rect: ['149px', '30px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIP_LIGHT1Copy',
                    type: 'rect',
                    rect: ['101px', '57px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'EQUIP_LIGHT2Copy',
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
                id: 'EQUIP_LIGHT1Copy',
                symbolName: 'EQUIP_LIGHT1',
                autoPlay: {

               }
            },
            {
                id: 'EQUIP_LIGHT2',
                symbolName: 'EQUIP_LIGHT2',
                autoPlay: {

               }
            },
            {
                id: 'EQUIP_LIGHT3',
                symbolName: 'EQUIP_LIGHT3',
                autoPlay: {

               }
            },
            {
                id: 'EQUIP_LIGHT2Copy2',
                symbolName: 'EQUIP_LIGHT2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_EQUIP_LIGHT2}": [
                ["style", "left", '208px'],
                ["style", "top", '27px']
            ],
            "${_equipment}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_EQUIP_LIGHT3}": [
                ["style", "left", '151px'],
                ["style", "top", '58px']
            ],
            "${symbolSelector}": [
                ["style", "height", '427px'],
                ["style", "width", '476px']
            ],
            "${_EQUIP_LIGHT2Copy}": [
                ["style", "left", '254px'],
                ["style", "top", '32px']
            ],
            "${_EQUIP_LIGHT2Copy2}": [
                ["style", "left", '300px'],
                ["style", "top", '37px']
            ],
            "${_EQUIP_LIGHT1Copy}": [
                ["style", "left", '101px'],
                ["style", "top", '57px']
            ],
            "${_EQUIP_LIGHT1}": [
                ["style", "left", '149px'],
                ["style", "top", '30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 733,
            autoPlay: true,
            timeline: [
                { id: "eid11", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LIGHT1Copy}', [] ], ""], position: 0 },
                { id: "eid12", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LIGHT2Copy}', [] ], ""], position: 0 },
                { id: "eid14", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LIGHT1}', [] ], ""], position: 233 },
                { id: "eid13", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LIGHT2Copy2}', [] ], ""], position: 233 },
                { id: "eid15", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LIGHT2}', [] ], ""], position: 233 }            ]
        }
    }
},
"PUBLIC_LINE_IN": {
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
                    rect: ['0px', '0px', '171', '336', 'auto', 'auto'],
                    id: 'public__line_in',
                    fill: ['rgba(0,0,0,0)', 'images/public__line_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['-12px', '1px', '17px', '41px', 'auto', 'auto'],
                    transform: [[0, 0], ['-56']],
                    id: 'Rectangle1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,143,176,1.00)']
                },
                {
                    rect: ['22px', '18px', '18px', '3px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,143,176,1.00)']
                },
                {
                    type: 'rect',
                    transform: [[0, 0], ['-28']],
                    rect: ['22px', '306px', '17px', '7px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,143,176,1)']
                },
                {
                    type: 'rect',
                    transform: [[0, 0], ['60']],
                    rect: ['27px', '334px', '17px', '2px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,143,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_public__line_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '306px'],
                ["transform", "rotateZ", '-28deg'],
                ["style", "height", '7px'],
                ["style", "left", '22px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '336px'],
                ["style", "width", '171px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle4}": [
                ["style", "top", '335px'],
                ["transform", "rotateZ", '60deg'],
                ["style", "height", '2px'],
                ["style", "left", '28px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle1}": [
                ["color", "background-color", 'rgba(255,143,176,1.00)'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-56deg'],
                ["style", "height", '3px'],
                ["style", "top", '1px'],
                ["style", "left", '-12px'],
                ["style", "width", '17px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '18px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,143,176,1.00)'],
                ["style", "left", '22px'],
                ["style", "width", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1333,
            autoPlay: false,
            timeline: [
                { id: "eid35", tween: [ "style", "${_Rectangle4}", "left", '94px', { fromValue: '28px'}], position: 1033, duration: 300 },
                { id: "eid38", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 1033, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Rectangle2}", "height", '299px', { fromValue: '3px'}], position: 267, duration: 666 },
                { id: "eid30", tween: [ "style", "${_Rectangle3}", "height", '23px', { fromValue: '7px'}], position: 933, duration: 100 },
                { id: "eid31", tween: [ "style", "${_Rectangle3}", "top", '305px', { fromValue: '306px'}], position: 933, duration: 100 },
                { id: "eid33", tween: [ "style", "${_Rectangle4}", "height", '157px', { fromValue: '2px'}], position: 1033, duration: 300 },
                { id: "eid23", tween: [ "style", "${_Rectangle1}", "height", '41px', { fromValue: '3px'}], position: 0, duration: 267 },
                { id: "eid32", tween: [ "style", "${_Rectangle3}", "left", '26px', { fromValue: '22px'}], position: 933, duration: 100 },
                { id: "eid34", tween: [ "style", "${_Rectangle4}", "top", '221px', { fromValue: '335px'}], position: 1033, duration: 300 },
                { id: "eid37", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 933, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0 }            ]
        }
    }
},
"EQUIP_LINE1_IN": {
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
                    id: 'equip_line1_in',
                    tag: 'img',
                    rect: ['0px', '0px', '485', '345', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equip_line1_in.png']
                },
                {
                    type: 'rect',
                    id: 'Rectangle_e1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-2px', '345px', '18px', '5px', 'auto', 'auto'],
                    fill: ['rgba(255,143,176,1)']
                },
                {
                    transform: [[0, 0], ['45']],
                    type: 'rect',
                    display: 'none',
                    id: 'Rectangle_e2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-1px', '263px', '18px', '32px', 'auto', 'auto'],
                    fill: ['rgba(255,143,176,1)']
                },
                {
                    transform: [[0, 0], ['-30']],
                    type: 'rect',
                    display: 'none',
                    id: 'Rectangle_e3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-26px', '130px', '548px', '15px', 'auto', 'auto'],
                    fill: ['rgba(255,143,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_equip_line1_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle_e3}": [
                ["style", "top", '265px'],
                ["transform", "rotateZ", '-30deg'],
                ["style", "height", '15px'],
                ["style", "display", 'none'],
                ["style", "left", '10px'],
                ["style", "width", '8px']
            ],
            "${_Rectangle_e2}": [
                ["style", "top", '284px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '7px'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle_e1}": [
                ["style", "height", '5px'],
                ["style", "top", '345px'],
                ["style", "left", '-2px'],
                ["style", "width", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '485px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1333,
            autoPlay: false,
            timeline: [
                { id: "eid49", tween: [ "style", "${_Rectangle_e2}", "left", '-1px', { fromValue: '-9px'}], position: 333, duration: 134 },
                { id: "eid60", tween: [ "style", "${_Rectangle_e2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Rectangle_e2}", "display", 'block', { fromValue: 'none'}], position: 333, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Rectangle_e3}", "left", '-26px', { fromValue: '10px'}], position: 467, duration: 866 },
                { id: "eid45", tween: [ "style", "${_Rectangle_e2}", "height", '32px', { fromValue: '7px'}], position: 333, duration: 134 },
                { id: "eid55", tween: [ "style", "${_Rectangle_e3}", "top", '130px', { fromValue: '265px'}], position: 467, duration: 866 },
                { id: "eid42", tween: [ "style", "${_Rectangle_e1}", "height", '69px', { fromValue: '5px'}], position: 0, duration: 333 },
                { id: "eid59", tween: [ "style", "${_Rectangle_e3}", "width", '548px', { fromValue: '8px'}], position: 467, duration: 866 },
                { id: "eid43", tween: [ "style", "${_Rectangle_e1}", "top", '281px', { fromValue: '345px'}], position: 0, duration: 333 },
                { id: "eid47", tween: [ "style", "${_Rectangle_e2}", "top", '263px', { fromValue: '284px'}], position: 333, duration: 134 },
                { id: "eid61", tween: [ "style", "${_Rectangle_e3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Rectangle_e3}", "display", 'block', { fromValue: 'none'}], position: 467, duration: 0 }            ]
        }
    }
},
"EQUIP_LINE2_IN": {
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
                    id: 'equip_line2_in',
                    tag: 'img',
                    rect: ['0px', '0px', '598', '173', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equip_line2_in.png']
                },
                {
                    transform: [[0, 0], ['-29']],
                    rect: ['281px', '76px', '343px', '16px', 'auto', 'auto'],
                    id: 'Rectangle1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,143,176,1)']
                },
                {
                    type: 'rect',
                    rect: ['97px', '159px', '211px', '17px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,143,176,1)']
                },
                {
                    transform: [[0, 0], ['30']],
                    type: 'rect',
                    display: 'none',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-8px', '133px', '117px', '16px', 'auto', 'auto'],
                    fill: ['rgba(255,143,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '159px'],
                ["style", "height", '17px'],
                ["style", "display", 'none'],
                ["style", "left", '305px'],
                ["style", "width", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '173px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '598px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '162px'],
                ["transform", "rotateZ", '30deg'],
                ["style", "height", '16px'],
                ["style", "display", 'none'],
                ["style", "left", '99px'],
                ["style", "width", '3px']
            ],
            "${_Rectangle1}": [
                ["style", "top", '-7px'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "height", '16px'],
                ["style", "left", '600px'],
                ["style", "width", '3px']
            ],
            "${_equip_line2_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: false,
            timeline: [
                { id: "eid79", tween: [ "style", "${_Rectangle1}", "left", '281px', { fromValue: '600px'}], position: 0, duration: 900 },
                { id: "eid77", tween: [ "style", "${_Rectangle1}", "top", '76px', { fromValue: '-7px'}], position: 0, duration: 900 },
                { id: "eid91", tween: [ "style", "${_Rectangle3}", "width", '117px', { fromValue: '3px'}], position: 1200, duration: 300 },
                { id: "eid81", tween: [ "style", "${_Rectangle1}", "width", '343px', { fromValue: '3px'}], position: 0, duration: 900 },
                { id: "eid85", tween: [ "style", "${_Rectangle2}", "width", '211px', { fromValue: '3px'}], position: 900, duration: 300 },
                { id: "eid93", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 900, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Rectangle3}", "top", '133px', { fromValue: '162px'}], position: 1200, duration: 300 },
                { id: "eid83", tween: [ "style", "${_Rectangle2}", "left", '97px', { fromValue: '305px'}], position: 900, duration: 300 },
                { id: "eid92", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 1200, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Rectangle3}", "left", '-8px', { fromValue: '99px'}], position: 1200, duration: 300 }            ]
        }
    }
},
"STEERING": {
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
                    rect: ['422px', '273px', '411', '276', 'auto', 'auto'],
                    tag: 'img',
                    id: 'steering_liquid_60pct',
                    opacity: 0.6,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/steering_liquid_60pct.png']
                },
                {
                    rect: ['422px', '273px', '411', '276', 'auto', 'auto'],
                    tag: 'img',
                    id: 'steering_pollution_liquid_60pct',
                    opacity: 0.6,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/steering_pollution_liquid_60pct.png']
                },
                {
                    type: 'image',
                    id: 'steering_leftArea',
                    tag: 'img',
                    rect: ['2px', '2px', '660', '462', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/steering_leftArea.png']
                },
                {
                    type: 'image',
                    id: 'steering_inner',
                    tag: 'img',
                    rect: ['398px', '257px', '444', '291', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/steering_inner.png']
                },
                {
                    type: 'image',
                    id: 'steering_pollution',
                    tag: 'img',
                    rect: ['399px', '258px', '440', '285', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/steering_pollution.png']
                },
                {
                    id: 'POLLUTION_B1',
                    type: 'rect',
                    rect: ['445px', '319px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.2', '1.2']]
                },
                {
                    id: 'POLLUTION_B2',
                    type: 'rect',
                    rect: ['511px', '357px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.2', '1.2']]
                },
                {
                    id: 'POLLUTION_B3',
                    type: 'rect',
                    rect: ['544px', '379px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.2', '1.2']]
                },
                {
                    id: 'POLLUTION_B4',
                    type: 'rect',
                    rect: ['574px', '420px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.2', '1.2']]
                },
                {
                    id: 'POLLUTION_B5',
                    type: 'rect',
                    rect: ['629px', '343px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.2', '1.2']]
                },
                {
                    id: 'POLLUTION_B6',
                    type: 'rect',
                    rect: ['630px', '379px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.2', '1.2']]
                },
                {
                    id: 'POLLUTION_B7',
                    type: 'rect',
                    rect: ['664px', '465px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.2', '1.2']]
                },
                {
                    id: 'POLLUTION_B8',
                    type: 'rect',
                    rect: ['721px', '495px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.2', '1.2']]
                },
                {
                    id: 'POLLUTION_B9',
                    type: 'rect',
                    rect: ['748px', '453px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.2', '1.2']]
                },
                {
                    type: 'image',
                    id: 'steering_topRight',
                    tag: 'img',
                    rect: ['0px', '0px', '1021', '713', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/steering_topRight.png']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_B2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_B5',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_B4',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_B3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_B8',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_B9',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_B6',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_B7',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_B1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_B8}": [
                ["transform", "scaleX", '1.2'],
                ["transform", "scaleY", '1.2'],
                ["motion", "location", '728px 501.5px']
            ],
            "${_steering_topRight}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_POLLUTION_B1}": [
                ["motion", "location", '456.5px 324px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2']
            ],
            "${_steering_pollution}": [
                ["style", "top", '258px'],
                ["style", "opacity", '1'],
                ["style", "left", '399px']
            ],
            "${_steering_pollution_liquid_60pct}": [
                ["style", "top", '273px'],
                ["style", "opacity", '0.6000000238418579'],
                ["style", "left", '422px']
            ],
            "${_POLLUTION_B5}": [
                ["transform", "scaleX", '1.2'],
                ["transform", "scaleY", '1.2'],
                ["motion", "location", '636px 349.5px']
            ],
            "${_POLLUTION_B2}": [
                ["motion", "location", '518px 363.5px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2']
            ],
            "${_steering_leftArea}": [
                ["style", "left", '2px'],
                ["style", "top", '2px']
            ],
            "${_POLLUTION_B9}": [
                ["transform", "scaleX", '1.2'],
                ["transform", "scaleY", '1.2'],
                ["motion", "location", '759.5px 458px']
            ],
            "${_POLLUTION_B4}": [
                ["transform", "scaleX", '1.2'],
                ["transform", "scaleY", '1.2'],
                ["motion", "location", '585.5px 425px']
            ],
            "${_steering_inner}": [
                ["style", "left", '398px'],
                ["style", "top", '257px']
            ],
            "${symbolSelector}": [
                ["style", "height", '713px'],
                ["style", "width", '1021px']
            ],
            "${_POLLUTION_B7}": [
                ["transform", "scaleX", '1.2'],
                ["transform", "scaleY", '1.2'],
                ["motion", "location", '675.5px 470px']
            ],
            "${_POLLUTION_B3}": [
                ["motion", "location", '551.5px 383.5px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2']
            ],
            "${_POLLUTION_B6}": [
                ["transform", "scaleX", '1.2'],
                ["transform", "scaleY", '1.2'],
                ["motion", "location", '641.5px 384px']
            ],
            "${_steering_liquid_60pct}": [
                ["style", "top", '273px'],
                ["style", "opacity", '0'],
                ["style", "left", '422px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1700,
            autoPlay: false,
            timeline: [
                { id: "eid116", tween: [ "motion", "${_POLLUTION_B5}", [[636, 349.5, 0, 0],[649.81, 331.76, 5.16, -38.14, 4.38, -32.33],[642.4, 302.2, 0, 0]]], position: 0, duration: 267, easing: "easeInQuad" },
                { id: "eid120", tween: [ "motion", "${_POLLUTION_B9}", [[759.5, 458, 0, 0],[684.73, 413.11, -53.51, -51.74, -90.47, -87.47],[621.27, 366.39, -56.47, -54.6, -46.64, -45.09],[617.8, 321, 0, 0]]], position: 734, duration: 416, easing: "easeInQuad" },
                { id: "eid118", tween: [ "motion", "${_POLLUTION_B7}", [[675.5, 470, 0, 0],[631.74, 408.93, -24.57, -83.79, -37.97, -129.46],[631.8, 321, 0, 0]]], position: 467, duration: 416, easing: "easeInQuad" },
                { id: "eid115", tween: [ "motion", "${_POLLUTION_B4}", [[585.5, 425, 0, 0],[590.36, 360.03, 20.56, -62.83, 32.54, -99.46],[622.8, 311, 0, 0]]], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid111", tween: [ "style", "${_steering_pollution}", "opacity", '0', { fromValue: '1'}], position: 1200, duration: 500, easing: "easeInQuad" },
                { id: "eid112", tween: [ "motion", "${_POLLUTION_B1}", [[456.5, 324, 0, 0],[566.22, 379.41, 112.63, -6.66, 115.77, -6.84],[608.8, 315, 0, 0]]], position: 767, duration: 416, easing: "easeInQuad" },
                { id: "eid110", tween: [ "style", "${_steering_pollution_liquid_60pct}", "opacity", '0', { fromValue: '0.6000000238418579'}], position: 1200, duration: 500, easing: "easeInQuad" },
                { id: "eid113", tween: [ "motion", "${_POLLUTION_B2}", [[518, 363.5, 0, 0],[575.61, 389.41, 60.07, -36.24, 55.88, -33.72],[595.4, 316.8, 0, 0]]], position: 600, duration: 416, easing: "easeInQuad" },
                { id: "eid109", tween: [ "style", "${_steering_liquid_60pct}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 1200, duration: 500, easing: "easeInQuad" },
                { id: "eid119", tween: [ "motion", "${_POLLUTION_B8}", [[728, 501.5, 0, 0],[671.01, 459.9, -31.12, -64.79, -52.42, -109.14],[636.18, 369.63, 61.4, -91.03, 38.91, -57.68],[636.4, 310.8, 0, 0]]], position: 600, duration: 416, easing: "easeInQuad" },
                { id: "eid114", tween: [ "motion", "${_POLLUTION_B3}", [[551.5, 383.5, 0, 0],[583.98, 391.14, 45.27, -53.62, 40.74, -48.25],[609, 315.4, 0, 0]]], position: 467, duration: 416, easing: "easeInQuad" },
                { id: "eid117", tween: [ "motion", "${_POLLUTION_B6}", [[641.5, 384, 0, 0],[645.22, 346.93, -16.05, -44.55, -17.9, -49.67],[618.8, 321, 0, 0]]], position: 167, duration: 333, easing: "easeInQuad" }            ]
        }
    }
},
"POLLUTION3": {
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
                    rect: ['0px', '0px', '15', '9', 'auto', 'auto'],
                    id: 'pollution_src3',
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src3.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '15px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${_pollution_src3}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_pollution_src3}", "top", '0px', { fromValue: '4px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid25", tween: [ "style", "${_pollution_src3}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_pollution_src3}", "left", '0px', { fromValue: '6px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid27", tween: [ "transform", "${_pollution_src3}", "scaleX", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid28", tween: [ "transform", "${_pollution_src3}", "scaleX", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid23", tween: [ "transform", "${_pollution_src3}", "scaleY", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid24", tween: [ "transform", "${_pollution_src3}", "scaleY", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
        }
    }
},
"POLLUTION2": {
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
                    rect: ['0px', '0px', '14', '13', 'auto', 'auto'],
                    id: 'pollution_src2',
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src2.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src2}": [
                ["style", "top", '4px'],
                ["style", "left", '6px'],
                ["transform", "scaleY", '0.59'],
                ["transform", "scaleX", '0.59']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '14px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: true,
            timeline: [
                { id: "eid65", tween: [ "style", "${_pollution_src2}", "left", '0px', { fromValue: '6px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid69", tween: [ "style", "${_pollution_src2}", "left", '6px', { fromValue: '0px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid63", tween: [ "style", "${_pollution_src2}", "top", '0px', { fromValue: '4px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid67", tween: [ "style", "${_pollution_src2}", "top", '4px', { fromValue: '0px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid66", tween: [ "transform", "${_pollution_src2}", "scaleX", '1', { fromValue: '0.59'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid70", tween: [ "transform", "${_pollution_src2}", "scaleX", '0.59', { fromValue: '1'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid64", tween: [ "transform", "${_pollution_src2}", "scaleY", '1', { fromValue: '0.59'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid68", tween: [ "transform", "${_pollution_src2}", "scaleY", '0.59', { fromValue: '1'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
        }
    }
},
"POLLUTION1": {
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
                    rect: ['0px', '0px', '23', '10', 'auto', 'auto'],
                    id: 'pollution_src1',
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src1}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '23px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_pollution_src1}", "top", '1px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_pollution_src1}", "top", '0px', { fromValue: '1px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid2", tween: [ "style", "${_pollution_src1}", "left", '2px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_pollution_src1}", "left", '0px', { fromValue: '2px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid3", tween: [ "transform", "${_pollution_src1}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid10", tween: [ "transform", "${_pollution_src1}", "scaleX", '1', { fromValue: '0.7'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid4", tween: [ "transform", "${_pollution_src1}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid11", tween: [ "transform", "${_pollution_src1}", "scaleY", '1', { fromValue: '0.7'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-3592191");
