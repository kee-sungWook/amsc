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
                id: 'mover',
                type: 'image',
                rect: ['480px', '415px','205px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mover.png",'0px','0px']
            },
            {
                id: 'imgPic1',
                type: 'image',
                tag: 'img',
                rect: ['209', '40','350','668','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgPic1.png"]
            },
            {
                id: 'TIRE',
                type: 'rect',
                rect: ['559', '291','auto','auto','auto', 'auto']
            },
            {
                id: 'tire_normal',
                type: 'image',
                rect: ['559px', '291px','320px','587px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tire_normal.png",'0px','0px']
            },
            {
                id: 'LINK',
                type: 'group',
                rect: ['384px', '511','247','74','auto', 'auto'],
                c: [
                {
                    id: 'linker',
                    type: 'image',
                    tag: 'img',
                    rect: ['0px', '0px','247','74','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linker.png"]
                },
                {
                    id: 'linkerRed_40pct',
                    type: 'image',
                    tag: 'img',
                    rect: ['0px', '0px','247','74','auto', 'auto'],
                    opacity: 0.4,
                    fill: ["rgba(0,0,0,0)",im+"linkerRed_40pct.png"]
                }]
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
                rect: ['242px', '899','1533','136','auto', 'auto'],
                text: "토우인이란 차량의 위에서 봤을때 바퀴의 각도를 말하여<br>기본적으로 앞의 두바퀴가 앞쪽으로 약간 좁아진 상태 입니다<br>토우인 정렬은 정해진 기준값에 맞춰서 바퀴의 기울기 각도를 조정합니다.",
                align: "auto",
                font: ['굴림', 40, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'content_txt1',
                display: 'block',
                type: 'text',
                rect: ['1151px', '90px','341px','46','auto', 'auto'],
                text: "토우인정렬",
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
                id: 'EQUIPMENT',
                symbolName: 'EQUIPMENT',
                autoPlay: {

                }
            },
            {
                id: 'TIRE',
                symbolName: 'TIRE',
                autoPlay: {

                }
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
            "${_content_txt2}": [
                ["style", "top", '153px'],
                ["style", "opacity", '0']
            ],
            "${_rewind_btn}": [
                ["style", "top", '133px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '601px']
            ],
            "${_txt}": [
                ["style", "left", '242px']
            ],
            "${_tire_normal}": [
                ["style", "top", '291px'],
                ["style", "opacity", '0'],
                ["style", "left", '559px']
            ],
            "${_content_txt5-5}": [
                ["style", "top", '219px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "display", 'none'],
                ["style", "height", '46px']
            ],
            "${_content_txt3}": [
                ["style", "top", '153px'],
                ["style", "opacity", '0']
            ],
            "${_linker}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_linkerRed_40pct}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.4000000059604645'],
                ["style", "left", '0px']
            ],
            "${_TIRE}": [
                ["style", "opacity", '1']
            ],
            "${_LINK}": [
                ["style", "left", '384px']
            ],
            "${_content_txt5-2}": [
                ["style", "display", 'none'],
                ["style", "top", '219px'],
                ["style", "height", '46px'],
                ["color", "color", 'rgba(199,0,96,1.00)']
            ],
            "${_content_txt4}": [
                ["style", "top", '219px'],
                ["style", "opacity", '0'],
                ["style", "height", '46px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-size", '45px'],
                ["style", "left", '0px'],
                ["style", "width", '256px']
            ],
            "${_content_txt1}": [
                ["style", "top", '90px'],
                ["style", "display", 'block'],
                ["style", "left", '1151px'],
                ["style", "width", '341px']
            ],
            "${_content_txt5-1}": [
                ["style", "top", '219px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(199,0,96,1.00)'],
                ["style", "height", '46px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_mover}": [
                ["style", "left", '480px'],
                ["style", "top", '415px']
            ],
            "${_content_txt5-4}": [
                ["style", "display", 'none'],
                ["style", "height", '46px'],
                ["color", "color", 'rgba(199,0,96,1.00)'],
                ["style", "top", '219px']
            ],
            "${_content_txt5-3}": [
                ["style", "display", 'none'],
                ["color", "color", 'rgba(199,0,96,1.00)'],
                ["style", "top", '219px'],
                ["style", "height", '46px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7918,
            autoPlay: true,
            timeline: [
                { id: "eid31", tween: [ "style", "${_content_txt5-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 700 },
                { id: "eid50", tween: [ "style", "${_content_txt5-5}", "opacity", '0', { fromValue: '1'}], position: 6684, duration: 267 },
                { id: "eid54", tween: [ "style", "${_content_txt5-5}", "opacity", '1', { fromValue: '0'}], position: 6984, duration: 267 },
                { id: "eid56", tween: [ "style", "${_content_txt5-5}", "opacity", '0', { fromValue: '1'}], position: 7351, duration: 267 },
                { id: "eid57", tween: [ "style", "${_content_txt5-5}", "opacity", '1', { fromValue: '0'}], position: 7651, duration: 267 },
                { id: "eid25", tween: [ "style", "${_content_txt2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 700 },
                { id: "eid23", tween: [ "style", "${_content_txt5-3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_content_txt5-3}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid43", tween: [ "style", "${_content_txt5-3}", "display", 'none', { fromValue: 'block'}], position: 4767, duration: 0 },
                { id: "eid27", tween: [ "style", "${_content_txt3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 700 },
                { id: "eid122", tween: [ "style", "${_LINK}", "left", '329px', { fromValue: '384px'}], position: 1067, duration: 933 },
                { id: "eid123", tween: [ "style", "${_LINK}", "left", '384px', { fromValue: '329px'}], position: 2633, duration: 700 },
                { id: "eid124", tween: [ "style", "${_LINK}", "left", '356px', { fromValue: '384px'}], position: 3967, duration: 633 },
                { id: "eid125", tween: [ "style", "${_LINK}", "left", '372px', { fromValue: '356px'}], position: 5233, duration: 367 },
                { id: "eid129", tween: [ "style", "${_tire_normal}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid21", tween: [ "style", "${_content_txt5-5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_content_txt5-5}", "display", 'block', { fromValue: 'none'}], position: 5767, duration: 0 },
                { id: "eid66", tween: [ "style", "${_rewind_btn}", "opacity", '1', { fromValue: '0'}], position: 6684, duration: 267 },
                { id: "eid35", tween: [ "style", "${_content_txt5-1}", "display", 'none', { fromValue: 'block'}], position: 2167, duration: 0 },
                { id: "eid130", tween: [ "style", "${_linkerRed_40pct}", "opacity", '0', { fromValue: '0.4000000059604645'}], position: 6000, duration: 500 },
                { id: "eid20", tween: [ "style", "${_content_txt5-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_content_txt5-2}", "display", 'block', { fromValue: 'none'}], position: 2167, duration: 0 },
                { id: "eid40", tween: [ "style", "${_content_txt5-2}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid139", tween: [ "style", "${_TIRE}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 500 },
                { id: "eid29", tween: [ "style", "${_content_txt4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 700 },
                { id: "eid51", tween: [ "style", "${_content_txt4}", "opacity", '0', { fromValue: '1'}], position: 6684, duration: 267 },
                { id: "eid55", tween: [ "style", "${_content_txt4}", "opacity", '1', { fromValue: '0'}], position: 6984, duration: 267 },
                { id: "eid58", tween: [ "style", "${_content_txt4}", "opacity", '0', { fromValue: '1'}], position: 7351, duration: 267 },
                { id: "eid59", tween: [ "style", "${_content_txt4}", "opacity", '1', { fromValue: '0'}], position: 7651, duration: 267 },
                { id: "eid22", tween: [ "style", "${_content_txt5-4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_content_txt5-4}", "display", 'block', { fromValue: 'none'}], position: 4767, duration: 0 },
                { id: "eid46", tween: [ "style", "${_content_txt5-4}", "display", 'none', { fromValue: 'block'}], position: 5767, duration: 0 },
                { id: "eid138", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TIRE}', [0] ], ""], position: 0 },
                { id: "eid131", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TIRE}', [] ], ""], position: 1067.3333333333 },
                { id: "eid132", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_TIRE}', [] ], ""], position: 2633 },
                { id: "eid133", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TIRE}', [] ], ""], position: 3300 },
                { id: "eid134", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TIRE}', [] ], ""], position: 3966.6666666667 },
                { id: "eid135", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TIRE}', [] ], ""], position: 4567 },
                { id: "eid136", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_TIRE}', [] ], ""], position: 5233.3333333333 },
                { id: "eid137", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TIRE}', [] ], ""], position: 5600 }            ]
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
                    rect: ['0px', '0px', '428', '808', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equipment.png']
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
                    id: 'tire_red',
                    type: 'image',
                    rect: ['0px', '0px', '4800px', '587px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire_red.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tire_red}": [
                ["style", "left", '-4480px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '587px'],
                ["style", "width", '320px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 933,
            autoPlay: false,
            labels: {
                "s1": 0,
                "s2": 66,
                "s3": 133,
                "s4": 200,
                "s5": 266,
                "s6": 333,
                "s7": 400,
                "s8": 466,
                "s9": 533,
                "s10": 600,
                "s11": 666,
                "s12": 733,
                "s13": 800,
                "s14": 866,
                "s15": 933
            },
            timeline: [
                { id: "eid120", tween: [ "style", "${_tire_red}", "left", '-4480px', { fromValue: '-4480px'}], position: 0, duration: 0 },
                { id: "eid119", tween: [ "style", "${_tire_red}", "left", '-4160px', { fromValue: '-4480px'}], position: 67, duration: 0 },
                { id: "eid118", tween: [ "style", "${_tire_red}", "left", '-3840px', { fromValue: '-4160px'}], position: 134, duration: 0 },
                { id: "eid117", tween: [ "style", "${_tire_red}", "left", '-3520px', { fromValue: '-3840px'}], position: 200, duration: 0 },
                { id: "eid116", tween: [ "style", "${_tire_red}", "left", '-3200px', { fromValue: '-3520px'}], position: 267, duration: 0 },
                { id: "eid115", tween: [ "style", "${_tire_red}", "left", '-2880px', { fromValue: '-3200px'}], position: 334, duration: 0 },
                { id: "eid114", tween: [ "style", "${_tire_red}", "left", '-2560px', { fromValue: '-2880px'}], position: 400, duration: 0 },
                { id: "eid113", tween: [ "style", "${_tire_red}", "left", '-2240px', { fromValue: '-2560px'}], position: 467, duration: 0 },
                { id: "eid112", tween: [ "style", "${_tire_red}", "left", '-1920px', { fromValue: '-2240px'}], position: 534, duration: 0 },
                { id: "eid111", tween: [ "style", "${_tire_red}", "left", '-1600px', { fromValue: '-1920px'}], position: 600, duration: 0 },
                { id: "eid110", tween: [ "style", "${_tire_red}", "left", '-1280px', { fromValue: '-1600px'}], position: 667, duration: 0 },
                { id: "eid109", tween: [ "style", "${_tire_red}", "left", '-960px', { fromValue: '-1280px'}], position: 734, duration: 0 },
                { id: "eid108", tween: [ "style", "${_tire_red}", "left", '-640px', { fromValue: '-960px'}], position: 800, duration: 0 },
                { id: "eid107", tween: [ "style", "${_tire_red}", "left", '-320px', { fromValue: '-640px'}], position: 867, duration: 0 },
                { id: "eid121", tween: [ "style", "${_tire_red}", "left", '0px', { fromValue: '-320px'}], position: 933, duration: 0 }            ]
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
