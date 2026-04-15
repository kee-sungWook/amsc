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
                id: 'imgPic2',
                type: 'image',
                tag: 'img',
                rect: ['272', '555','329','163','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgPic2.png"]
            },
            {
                id: 'TIRE_MOVER',
                type: 'group',
                rect: ['477', '281','317','589','auto', 'auto'],
                transform: [[],[],[],[],['28%','64%']],
                c: [
                {
                    id: 'MOVER',
                    type: 'rect',
                    rect: ['0px', '135px','auto','auto','auto', 'auto']
                },
                {
                    id: 'TIRE',
                    type: 'rect',
                    rect: ['137px', '0px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'imgPic1',
                type: 'image',
                tag: 'img',
                rect: ['209', '40','350','668','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgPic1.png"]
            },
            {
                id: 'linker',
                type: 'image',
                tag: 'img',
                rect: ['309', '511','247','74','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"linker.png"]
            },
            {
                id: 'EQUIPMENT',
                type: 'rect',
                rect: ['1108', '61','auto','auto','auto', 'auto']
            },
            {
                id: 'mornitorLine',
                type: 'image',
                tag: 'img',
                rect: ['1151', '143','341','137','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mornitorLine.png"]
            },
            {
                id: 'txt',
                type: 'text',
                rect: ['134', '899','1533','136','auto', 'auto'],
                text: "캠버란 차량을 정면,혹은 후면에서 보았을 때 휠이 지면과 수직을 이루는 각을 말하며 \r윗부분이 모이거나 벌어지게 하여 코너링시 차체의 안정성에 영향을 줍니다\r킴버정렬은 정해진 기준값에 맞춰서 바퀴의 수직 기울기를 조정합니다.",
                align: "auto",
                font: ['굴림', 40, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt1',
                display: 'block',
                type: 'text',
                rect: ['1239', '90px','164','46','auto', 'auto'],
                text: "캠버정렬",
                align: "center",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt2',
                type: 'text',
                rect: ['1180', '153px','124','46','auto', 'auto'],
                text: "기준값",
                align: "center",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt3',
                type: 'text',
                rect: ['1345', '153px','124','46','auto', 'auto'],
                text: "측정값",
                align: "center",
                font: ['굴림', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt4',
                type: 'text',
                rect: ['1205', '219px','76','46px','auto', 'auto'],
                text: "0.3˚",
                align: "center",
                font: ['Arial', 40, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt5-1',
                display: 'block',
                type: 'text',
                rect: ['1369', '219px','76','46px','auto', 'auto'],
                text: "0.1˚",
                align: "center",
                font: ['Arial', 40, "rgba(199,0,96,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt5-2',
                display: 'none',
                type: 'text',
                rect: ['1369', '219px','76','46px','auto', 'auto'],
                text: "0.5˚",
                align: "center",
                font: ['Arial', 40, "rgba(199,0,96,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt5-3',
                display: 'none',
                type: 'text',
                rect: ['1369', '219px','76','46px','auto', 'auto'],
                text: "0.4˚",
                align: "center",
                font: ['Arial', 40, "rgba(199,0,96,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt5-4',
                display: 'none',
                type: 'text',
                rect: ['1369', '219px','76','46px','auto', 'auto'],
                text: "0.2˚",
                align: "center",
                font: ['Arial', 40, "rgba(199,0,96,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt5-5',
                display: 'none',
                type: 'text',
                rect: ['1369', '219px','76','46px','auto', 'auto'],
                text: "0.3˚",
                align: "center",
                font: ['Arial', 40, "rgba(0,0,0,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'rewind_btn',
                type: 'group',
                rect: ['576px', '133px','256','86','auto', 'auto'],
                opacity: 1,
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
            }],
            symbolInstances: [
            {
                id: 'MOVER',
                symbolName: 'MOVER'
            },
            {
                id: 'EQUIPMENT',
                symbolName: 'EQUIPMENT'
            },
            {
                id: 'TIRE',
                symbolName: 'TIRE'
            }
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
                ["style", "left", '0px'],
                ["style", "border-width", '3px']
            ],
            "${_content_txt5-1}": [
                ["style", "top", '219px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(199,0,96,1.00)']
            ],
            "${_content_txt5-2}": [
                ["color", "color", 'rgba(199,0,96,1.00)'],
                ["style", "display", 'none'],
                ["style", "height", '46px'],
                ["style", "top", '219px']
            ],
            "${_TIRE_MOVER}": [
                ["style", "-webkit-transform-origin", [28,64], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [28,64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [28,64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [28,64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [28,64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '281px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_content_txt5-5}": [
                ["style", "top", '219px'],
                ["style", "height", '46px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none']
            ],
            "${_content_txt3}": [
                ["style", "top", '153px'],
                ["style", "opacity", '0']
            ],
            "${_MOVER}": [
                ["style", "left", '0px'],
                ["style", "top", '135px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-size", '45px'],
                ["style", "left", '0px'],
                ["style", "width", '256px']
            ],
            "${_rewind_btn}": [
                ["style", "top", '133px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '601px']
            ],
            "${_TIRE}": [
                ["style", "left", '137px'],
                ["style", "top", '0px']
            ],
            "${_content_txt2}": [
                ["style", "top", '153px'],
                ["style", "opacity", '0']
            ],
            "${_content_txt1}": [
                ["style", "top", '90px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_content_txt4}": [
                ["style", "top", '219px'],
                ["style", "opacity", '0'],
                ["style", "height", '46px']
            ],
            "${_content_txt5-4}": [
                ["style", "top", '219px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(199,0,96,1.00)'],
                ["style", "height", '46px']
            ],
            "${_content_txt5-3}": [
                ["style", "height", '46px'],
                ["style", "display", 'none'],
                ["style", "top", '219px'],
                ["color", "color", 'rgba(199,0,96,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8667,
            autoPlay: true,
            timeline: [
                { id: "eid73", tween: [ "style", "${_rewind_btn}", "left", '601px', { fromValue: '601px'}], position: 700, duration: 0 },
                { id: "eid66", tween: [ "style", "${_rewind_btn}", "opacity", '1', { fromValue: '0'}], position: 8400, duration: 267 },
                { id: "eid25", tween: [ "style", "${_content_txt2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 700 },
                { id: "eid35", tween: [ "style", "${_content_txt5-1}", "display", 'none', { fromValue: 'block'}], position: 1800, duration: 0 },
                { id: "eid23", tween: [ "style", "${_content_txt5-3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_content_txt5-3}", "display", 'block', { fromValue: 'none'}], position: 3300, duration: 0 },
                { id: "eid43", tween: [ "style", "${_content_txt5-3}", "display", 'none', { fromValue: 'block'}], position: 4800, duration: 0 },
                { id: "eid50", tween: [ "style", "${_content_txt5-5}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 267 },
                { id: "eid54", tween: [ "style", "${_content_txt5-5}", "opacity", '1', { fromValue: '0'}], position: 6800, duration: 267 },
                { id: "eid56", tween: [ "style", "${_content_txt5-5}", "opacity", '0', { fromValue: '1'}], position: 7167, duration: 267 },
                { id: "eid57", tween: [ "style", "${_content_txt5-5}", "opacity", '1', { fromValue: '0'}], position: 7467, duration: 267 },
                { id: "eid60", tween: [ "style", "${_content_txt5-5}", "opacity", '0', { fromValue: '1'}], position: 7833, duration: 267 },
                { id: "eid61", tween: [ "style", "${_content_txt5-5}", "opacity", '1', { fromValue: '0'}], position: 8133, duration: 267 },
                { id: "eid21", tween: [ "style", "${_content_txt5-5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_content_txt5-5}", "display", 'block', { fromValue: 'none'}], position: 6133, duration: 0 },
                { id: "eid33", tween: [ "style", "${_TIRE_MOVER}", "top", '288px', { fromValue: '281px'}], position: 1000, duration: 800 },
                { id: "eid20", tween: [ "style", "${_content_txt5-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_content_txt5-2}", "display", 'block', { fromValue: 'none'}], position: 1800, duration: 0 },
                { id: "eid40", tween: [ "style", "${_content_txt5-2}", "display", 'none', { fromValue: 'block'}], position: 3300, duration: 0 },
                { id: "eid31", tween: [ "style", "${_content_txt5-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 700 },
                { id: "eid32", tween: [ "transform", "${_TIRE_MOVER}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 1000, duration: 800 },
                { id: "eid39", tween: [ "transform", "${_TIRE_MOVER}", "rotateZ", '6deg', { fromValue: '8deg'}], position: 2500, duration: 800 },
                { id: "eid42", tween: [ "transform", "${_TIRE_MOVER}", "rotateZ", '2deg', { fromValue: '6deg'}], position: 4000, duration: 800 },
                { id: "eid45", tween: [ "transform", "${_TIRE_MOVER}", "rotateZ", '4deg', { fromValue: '2deg'}], position: 5500, duration: 633 },
                { id: "eid27", tween: [ "style", "${_content_txt3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 700 },
                { id: "eid29", tween: [ "style", "${_content_txt4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 700 },
                { id: "eid51", tween: [ "style", "${_content_txt4}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 267 },
                { id: "eid55", tween: [ "style", "${_content_txt4}", "opacity", '1', { fromValue: '0'}], position: 6800, duration: 267 },
                { id: "eid58", tween: [ "style", "${_content_txt4}", "opacity", '0', { fromValue: '1'}], position: 7167, duration: 267 },
                { id: "eid59", tween: [ "style", "${_content_txt4}", "opacity", '1', { fromValue: '0'}], position: 7467, duration: 267 },
                { id: "eid62", tween: [ "style", "${_content_txt4}", "opacity", '0', { fromValue: '1'}], position: 7833, duration: 267 },
                { id: "eid63", tween: [ "style", "${_content_txt4}", "opacity", '1', { fromValue: '0'}], position: 8133, duration: 267 },
                { id: "eid22", tween: [ "style", "${_content_txt5-4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_content_txt5-4}", "display", 'block', { fromValue: 'none'}], position: 4800, duration: 0 },
                { id: "eid46", tween: [ "style", "${_content_txt5-4}", "display", 'none', { fromValue: 'block'}], position: 6133, duration: 0 },
                { id: "eid67", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_MOVER}', [0] ], ""], position: 0 },
                { id: "eid68", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TIRE}', [0] ], ""], position: 0 },
                { id: "eid65", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_MOVER}', [] ], ""], position: 6500 },
                { id: "eid64", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TIRE}', [] ], ""], position: 6500 }            ]
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
                    rect: ['0px', '0px', '37', '36', 'auto', 'auto'],
                    id: 'equipment_light1',
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light1.png'],
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
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light2_4.png'],
                    id: 'equipment_light2_4',
                    rect: ['0px', '0px', '214', '70', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light2_3.png'],
                    id: 'equipment_light2_3',
                    rect: ['7px', '0px', '207', '70', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light2_2.png'],
                    id: 'equipment_light2_2',
                    rect: ['0px', '0px', '212', '70', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light2_1.png'],
                    id: 'equipment_light2_1',
                    rect: ['0px', '0px', '214', '70', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
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
"TIRE": {
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
                    rect: ['0px', '0px', '180', '589', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire_normal.png'],
                    id: 'tire_normal',
                    opacity: 0,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '180', '589', 'auto', 'auto'],
                    id: 'tire_red',
                    fill: ['rgba(0,0,0,0)', 'images/tire_red.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tire_red}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_tire_normal}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '589px'],
                ["style", "width", '180px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: false,
            timeline: [
                { id: "eid1", tween: [ "style", "${_tire_red}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 767 },
                { id: "eid2", tween: [ "style", "${_tire_normal}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 767 }            ]
        }
    }
},
"MOVER": {
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
                    rect: ['0px', '0px', '205', '260', 'auto', 'auto'],
                    id: 'mover',
                    fill: ['rgba(0,0,0,0)', 'images/mover.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '205', '260', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/moverRed_50pct.png'],
                    id: 'moverRed_50pct',
                    opacity: 0.5,
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mover}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_moverRed_50pct}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '260px'],
                ["style", "width", '205px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: false,
            timeline: [
                { id: "eid3", tween: [ "style", "${_moverRed_50pct}", "opacity", '0', { fromValue: '0.5'}], position: 0, duration: 767 }            ]
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3158576");
