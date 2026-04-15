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
                id: 'equipmentBar',
                type: 'image',
                tag: 'img',
                rect: ['478px', '573px','362','68','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"equipmentBar.png"]
            },
            {
                id: 'choo',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['825px', '282px','78','83','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"choo.png"]
            },
            {
                id: 'choo2',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['492px', '664px','78','83','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"choo.png"],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'EQUIPMENT',
                type: 'rect',
                rect: ['94px', '127px','auto','auto','auto', 'auto']
            },
            {
                id: 'TIRE_TWIST',
                type: 'rect',
                rect: ['591', '172','auto','auto','auto', 'auto']
            },
            {
                id: 'DOT_MOVER',
                type: 'rect',
                rect: ['232', '152','auto','auto','auto', 'auto']
            },
            {
                id: 'TXT_NUM2_2',
                display: 'none',
                type: 'text',
                rect: ['384px', '275px','60','66','auto', 'auto'],
                text: "00",
                align: "center",
                font: ['Arial', 50, "rgb(122,122,122)", "700", "none", "normal"]
            },
            {
                id: 'TXT_NUM1_2',
                display: 'none',
                type: 'text',
                rect: ['163px', '275px','60','66','auto', 'auto'],
                text: "00",
                align: "center",
                font: ['Arial', 50, "rgb(122,122,122)", "700", "none", "normal"]
            },
            {
                id: 'TXT_NUM2_1',
                display: 'block',
                type: 'text',
                rect: ['384px', '275px','60','66','auto', 'auto'],
                text: "20",
                align: "center",
                font: ['Arial', 50, "rgb(122,122,122)", "700", "none", "normal"]
            },
            {
                id: 'TXT_NUM1_1',
                display: 'block',
                type: 'text',
                rect: ['163px', '275px','60','66','auto', 'auto'],
                text: "10",
                align: "center",
                font: ['Arial', 50, "rgb(122,122,122)", "700", "none", "normal"]
            },
            {
                id: 'TXT_OUT',
                type: 'text',
                rect: ['359px', '172px','110','66','auto', 'auto'],
                text: "OUT",
                align: "center",
                font: ['Arial', 50, "rgb(0,0,0)", "700", "none", "normal"]
            },
            {
                id: 'TXT_IN',
                type: 'text',
                rect: ['166px', '172px','54','66','auto', 'auto'],
                text: "IN",
                align: "center",
                font: ['Arial', 50, "rgb(0,0,0)", "700", "none", "normal"]
            },
            {
                id: 'txt',
                type: 'text',
                rect: ['996px', '309px','709','496','auto', 'auto'],
                text: "휠 밸런스는 타이어 중앙 부분에서 \r네 방향의 무게중심을 맞추는 것입니다.<br><br>타이어의 중심 으로부터 무게가 <br>일정하지 않으면 고속 주행시 <br>핸들떨림이 발생 할수 있습니다.<br><br>휠 밸런스를 조정하여 타이어의 <br>중심으로부터 무게를 일정하게 맞추면 <br>고속 주행시 안정성을 <br>향상 시킬 수 있습니다.",
                align: "auto",
                font: ['굴림', 40, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'rewind_btn',
                type: 'group',
                rect: ['998px', '848px','256','86','auto', 'auto'],
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
                id: 'TIRE_TWIST',
                symbolName: 'TIRE_TWIST'
            },
            {
                id: 'DOT_MOVER',
                symbolName: 'DOT_MOVER'
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
            "${_choo}": [
                ["motion", "location", '864px 323.5px'],
                ["style", "opacity", '0'],
                ["style", "display", 'block']
            ],
            "${_rewind_btn}": [
                ["style", "top", '848px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '998px']
            ],
            "${_txt}": [
                ["style", "left", '996px'],
                ["style", "top", '309px']
            ],
            "${_TXT_NUM1_1}": [
                ["style", "top", '275px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '163px'],
                ["style", "font-weight", '700']
            ],
            "${_TXT_NUM2_1}": [
                ["style", "top", '275px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '384px'],
                ["style", "font-weight", '700']
            ],
            "${_DOT_MOVER}": [
                ["style", "opacity", '0']
            ],
            "${_choo2}": [
                ["transform", "scaleY", '1'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '0'],
                ["motion", "location", '531px 705.5px']
            ],
            "${_TXT_NUM2_2}": [
                ["style", "top", '275px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '384px'],
                ["style", "opacity", '0']
            ],
            "${_TXT_NUM1_2}": [
                ["style", "top", '275px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '163px'],
                ["style", "opacity", '0']
            ],
            "${_equipmentBar}": [
                ["style", "left", '478px'],
                ["style", "top", '573px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "width", '256px'],
                ["style", "left", '0px'],
                ["style", "font-size", '45px']
            ],
            "${_TXT_OUT}": [
                ["style", "top", '172px'],
                ["style", "font-weight", '700'],
                ["style", "left", '359px'],
                ["style", "opacity", '0']
            ],
            "${_EQUIPMENT}": [
                ["style", "left", '94px'],
                ["style", "top", '127px']
            ],
            "${_TXT_IN}": [
                ["style", "top", '172px'],
                ["style", "font-weight", '700'],
                ["style", "left", '166px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10861,
            autoPlay: true,
            timeline: [
                { id: "eid100", tween: [ "motion", "${_choo2}", [[531, 705.5, 0, 0],[552.99, 796.03, 82.75, 87.97, 83.74, 89.02],[642, 823.5, 0, 0]]], position: 6319, duration: 500, easing: "easeInQuad" },
                { id: "eid85", tween: [ "style", "${_DOT_MOVER}", "opacity", '1', { fromValue: '0'}], position: 433, duration: 500 },
                { id: "eid104", tween: [ "style", "${_rewind_btn}", "opacity", '0.9775279760360718', { fromValue: '0'}], position: 10561, duration: 300, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "style", "${_TXT_NUM1_2}", "opacity", '1', { fromValue: '0'}], position: 9261, duration: 133 },
                { id: "eid117", tween: [ "style", "${_TXT_NUM1_2}", "opacity", '0', { fromValue: '1'}], position: 9427, duration: 133 },
                { id: "eid121", tween: [ "style", "${_TXT_NUM1_2}", "opacity", '1', { fromValue: '0'}], position: 9594, duration: 133 },
                { id: "eid123", tween: [ "style", "${_TXT_NUM1_2}", "opacity", '0', { fromValue: '1'}], position: 9761, duration: 133 },
                { id: "eid124", tween: [ "style", "${_TXT_NUM1_2}", "opacity", '1', { fromValue: '0'}], position: 9928, duration: 133 },
                { id: "eid127", tween: [ "style", "${_TXT_NUM1_2}", "opacity", '0', { fromValue: '1'}], position: 10094, duration: 133 },
                { id: "eid128", tween: [ "style", "${_TXT_NUM1_2}", "opacity", '1', { fromValue: '0'}], position: 10261, duration: 133 },
                { id: "eid79", tween: [ "style", "${_TXT_OUT}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 500 },
                { id: "eid98", tween: [ "style", "${_choo}", "opacity", '1', { fromValue: '0'}], position: 4900, duration: 300 },
                { id: "eid74", tween: [ "style", "${_TXT_NUM1_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_TXT_NUM1_2}", "display", 'none', { fromValue: 'none'}], position: 2800, duration: 0 },
                { id: "eid107", tween: [ "style", "${_TXT_NUM1_2}", "display", 'block', { fromValue: 'none'}], position: 9261, duration: 0 },
                { id: "eid101", tween: [ "style", "${_choo2}", "display", 'none', { fromValue: 'block'}], position: 6818, duration: 0, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "style", "${_choo2}", "opacity", '1', { fromValue: '0'}], position: 5200, duration: 300 },
                { id: "eid112", tween: [ "style", "${_TXT_NUM2_2}", "opacity", '1', { fromValue: '0'}], position: 9261, duration: 133 },
                { id: "eid118", tween: [ "style", "${_TXT_NUM2_2}", "opacity", '0', { fromValue: '1'}], position: 9427, duration: 133 },
                { id: "eid122", tween: [ "style", "${_TXT_NUM2_2}", "opacity", '1', { fromValue: '0'}], position: 9594, duration: 133 },
                { id: "eid125", tween: [ "style", "${_TXT_NUM2_2}", "opacity", '0', { fromValue: '1'}], position: 9761, duration: 133 },
                { id: "eid126", tween: [ "style", "${_TXT_NUM2_2}", "opacity", '1', { fromValue: '0'}], position: 9928, duration: 133 },
                { id: "eid129", tween: [ "style", "${_TXT_NUM2_2}", "opacity", '0', { fromValue: '1'}], position: 10094, duration: 133 },
                { id: "eid130", tween: [ "style", "${_TXT_NUM2_2}", "opacity", '1', { fromValue: '0'}], position: 10261, duration: 133 },
                { id: "eid77", tween: [ "style", "${_TXT_IN}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid75", tween: [ "style", "${_TXT_NUM2_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_TXT_NUM2_2}", "display", 'none', { fromValue: 'none'}], position: 2800, duration: 0 },
                { id: "eid108", tween: [ "style", "${_TXT_NUM2_2}", "display", 'block', { fromValue: 'none'}], position: 9261, duration: 0 },
                { id: "eid106", tween: [ "style", "${_TXT_NUM2_1}", "display", 'none', { fromValue: 'block'}], position: 9261, duration: 0 },
                { id: "eid102", tween: [ "style", "${_choo}", "display", 'none', { fromValue: 'block'}], position: 6818, duration: 0, easing: "easeOutQuad" },
                { id: "eid105", tween: [ "style", "${_TXT_NUM1_1}", "display", 'none', { fromValue: 'block'}], position: 9261, duration: 0 },
                { id: "eid99", tween: [ "motion", "${_choo}", [[864, 323.5, 0, 0],[832.41, 414.82, -104.29, 81.84, -111.47, 87.47],[720, 436.5, 0, 0]]], position: 5818, duration: 500, easing: "easeInQuad" },
                { id: "eid81", tween: [ "style", "${_TXT_NUM1_1}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 400 },
                { id: "eid83", tween: [ "style", "${_TXT_NUM2_1}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 400 }            ]
        }
    }
},
"TIRE_LINE_MOVE": {
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
                    id: 'tire_moveLine',
                    tag: 'img',
                    rect: ['0px', '0px', '158', '129', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire_moveLine.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tire_moveLine}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '129px'],
                ["style", "width", '158px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            timeline: [
                { id: "eid4", tween: [ "style", "${_tire_moveLine}", "top", '723px', { fromValue: '0px'}], position: 0, duration: 300 }            ]
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
                    id: 'tire_redFill',
                    type: 'image',
                    rect: ['4px', '144px', '172px', '581px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire_redFill.png', '0px', '0px']
                },
                {
                    rect: ['0px', '140px', '180', '589', 'auto', 'auto'],
                    id: 'tire_normal',
                    fill: ['rgba(0,0,0,0)', 'images/tire_normal.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'TIRE_LINE_MOVE',
                    type: 'rect',
                    rect: ['11', '6', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['4px', '0px', '172', '870', 'auto', 'auto'],
                    id: 'tire_blinder',
                    fill: ['rgba(0,0,0,0)', 'images/tire_blinder.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'TRUBLE_MOVE',
                    type: 'rect',
                    transform: [[], ['53']],
                    rect: ['207px', '432px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_R1',
                    type: 'rect',
                    transform: [[], ['141']],
                    rect: ['177px', '705px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_R2',
                    type: 'rect',
                    transform: [[], ['69'], [], ['0.9', '0.9']],
                    rect: ['207px', '77px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_L1',
                    type: 'rect',
                    transform: [[], ['-57'], [], ['0.7', '0.7']],
                    rect: ['-31px', '97px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_L2',
                    type: 'rect',
                    transform: [[], ['-133']],
                    rect: ['-32px', '668px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TIRE_LINE_MOVE',
                symbolName: 'TIRE_LINE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_R1',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_L2',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_L1',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_R2',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_tire_blinder}": [
                ["style", "left", '4px'],
                ["style", "top", '0px']
            ],
            "${_tire_redFill}": [
                ["style", "top", '144px'],
                ["style", "opacity", '1'],
                ["style", "left", '4px']
            ],
            "${_TRUBLE_MOVE_R2}": [
                ["style", "top", '77px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "rotateZ", '37deg'],
                ["transform", "scaleX", '0.9'],
                ["style", "left", '207px']
            ],
            "${_TRUBLE_MOVE_R1}": [
                ["style", "top", '705px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '141deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '177px']
            ],
            "${_tire_normal}": [
                ["style", "left", '0px'],
                ["style", "top", '140px']
            ],
            "${symbolSelector}": [
                ["style", "height", '870px'],
                ["style", "width", '180px']
            ],
            "${_TRUBLE_MOVE}": [
                ["style", "top", '432px'],
                ["style", "left", '207px'],
                ["transform", "rotateZ", '53deg']
            ],
            "${_TRUBLE_MOVE_L2}": [
                ["style", "top", '668px'],
                ["style", "left", '-32px'],
                ["transform", "rotateZ", '-133deg']
            ],
            "${_TRUBLE_MOVE_L1}": [
                ["style", "top", '97px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-57deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-31px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2800,
            autoPlay: false,
            labels: {
                "truble": 200,
                "fix": 2000
            },
            timeline: [
                { id: "eid39", tween: [ "style", "${_tire_redFill}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 800 },
                { id: "eid16", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TRUBLE_MOVE_L2}', [0] ], ""], position: 0 },
                { id: "eid23", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TRUBLE_MOVE}', [0] ], ""], position: 0 },
                { id: "eid41", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TRUBLE_MOVE_R2}', [0] ], ""], position: 0 },
                { id: "eid25", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TRUBLE_MOVE_R1}', [0] ], ""], position: 0 },
                { id: "eid24", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_TRUBLE_MOVE_L1}', [0] ], ""], position: 0 },
                { id: "eid38", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE}', [] ], ""], position: 200 },
                { id: "eid36", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_L1}', [] ], ""], position: 200 },
                { id: "eid37", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_L2}', [] ], ""], position: 200 },
                { id: "eid26", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_R1}', [] ], ""], position: 200 },
                { id: "eid42", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_R2}', [] ], ""], position: 200 }            ]
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
            "${_equipment_light2_3}": [
                ["style", "top", '0px'],
                ["style", "left", '7px'],
                ["style", "display", 'none']
            ],
            "${_equipment_light2_2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_equipment_light2_4}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
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
            "${_equipment_light1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '34px'],
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["style", "width", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '37px']
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
            "#symbolStage_EQUIPMENT": [
                ["style", "left", '94px'],
                ["style", "top", '127px']
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
"TRUBLE_MOVE": {
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
                    id: 'TRUBLE_MOVE_SRC',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_L1',
                    type: 'rect',
                    rect: ['-27px', '21px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_L2',
                    type: 'rect',
                    transform: [[], ['-30'], [], ['0.5', '0.5']],
                    rect: ['-39px', '44px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R1',
                    type: 'rect',
                    transform: [[], ['16']],
                    rect: ['25px', '29px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R2',
                    type: 'rect',
                    transform: [[], ['30'], [], ['0.5', '0.5']],
                    rect: ['38px', '52px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TRUBLE_MOVE_SRC_L2',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC_R2',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC_L1',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC_R1',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '10px']
            ],
            "${_TRUBLE_MOVE_SRC_L1}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '-16deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '-27px']
            ],
            "${_TRUBLE_MOVE_SRC_R2}": [
                ["style", "top", '52px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '30deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '38px']
            ],
            "${_TRUBLE_MOVE_SRC_L2}": [
                ["style", "top", '44px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '-30deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-39px']
            ],
            "${_TRUBLE_MOVE_SRC_R1}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '16deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '25px']
            ],
            "${_TRUBLE_MOVE_SRC}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1200,
            autoPlay: false,
            timeline: [
                { id: "eid27", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L1}', [] ], ""], position: 0 },
                { id: "eid28", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R1}', [] ], ""], position: 66.666666666667 },
                { id: "eid29", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L2}', [] ], ""], position: 133.33333333333 },
                { id: "eid30", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R2}', [] ], ""], position: 200 },
                { id: "eid31", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R1}', [] ], ""], position: 666.33333333333 },
                { id: "eid32", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L1}', [] ], ""], position: 666.33333333333 },
                { id: "eid33", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L2}', [] ], ""], position: 666.33333333333 },
                { id: "eid34", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC}', [] ], ""], position: 666.66666666667 },
                { id: "eid35", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R2}', [] ], ""], position: 666.66666666667 }            ]
        }
    }
},
"TRUBLE_MOVE_SRC": {
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
                    id: 'truble_src',
                    type: 'image',
                    rect: ['-17px', '23px', '10px', '99px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/truble_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '10px']
            ],
            "${_truble_src}": [
                ["style", "top", '92px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '7px']
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
                { id: "eid19", tween: [ "style", "${_truble_src}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid22", tween: [ "style", "${_truble_src}", "opacity", '0', { fromValue: '1'}], position: 233, duration: 200 },
                { id: "eid15", tween: [ "style", "${_truble_src}", "height", '99px', { fromValue: '7px'}], position: 0, duration: 200 },
                { id: "eid20", tween: [ "style", "${_truble_src}", "height", '16px', { fromValue: '99px'}], position: 233, duration: 200 },
                { id: "eid17", tween: [ "style", "${_truble_src}", "top", '0px', { fromValue: '92px'}], position: 0, duration: 200 },
                { id: "eid21", tween: [ "style", "${_truble_src}", "top", '-17px', { fromValue: '0px'}], position: 233, duration: 200 }            ]
        }
    }
},
"DOT_MOVER": {
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
                    rect: ['23px', '11px', '90px', '178px', 'auto', 'auto'],
                    id: 'dotBack',
                    stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(114,114,114,1.00)']
                },
                {
                    rect: ['38px', '1px', '20px', '18px', 'auto', 'auto'],
                    id: 'Rectangle1',
                    stroke: [3, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(199,0,96,1)']
                },
                {
                    rect: ['87px', '1px', '20px', '18px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [3, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(199,0,96,1)']
                },
                {
                    rect: ['0px', '0px', '142', '200', 'auto', 'auto'],
                    id: 'dotMask',
                    fill: ['rgba(0,0,0,0)', 'images/dotMask.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '1px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'none'],
                ["style", "left", '87px'],
                ["style", "width", '20px']
            ],
            "${_dotBack}": [
                ["style", "top", '11px'],
                ["color", "background-color", 'rgba(114,114,114,1.00)'],
                ["style", "left", '23px'],
                ["style", "width", '90px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '142px']
            ],
            "${_Rectangle1}": [
                ["style", "top", '1px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'none'],
                ["style", "left", '38px'],
                ["style", "width", '20px']
            ],
            "${_dotMask}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "fix": 1000
            },
            timeline: [
                { id: "eid50", tween: [ "style", "${_Rectangle1}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Rectangle1}", "top", '19px', { fromValue: '1px'}], position: 67, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Rectangle1}", "top", '50px', { fromValue: '19px'}], position: 134, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Rectangle1}", "top", '80px', { fromValue: '50px'}], position: 200, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Rectangle1}", "top", '111px', { fromValue: '80px'}], position: 267, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Rectangle1}", "top", '141px', { fromValue: '111px'}], position: 334, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Rectangle1}", "top", '172px', { fromValue: '141px'}], position: 400, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Rectangle1}", "top", '192px', { fromValue: '172px'}], position: 467, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Rectangle1}", "top", '80px', { fromValue: '192px'}], position: 1000, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Rectangle2}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Rectangle2}", "top", '19px', { fromValue: '1px'}], position: 67, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Rectangle2}", "top", '50px', { fromValue: '19px'}], position: 134, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Rectangle2}", "top", '80px', { fromValue: '50px'}], position: 200, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Rectangle2}", "top", '111px', { fromValue: '80px'}], position: 267, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Rectangle2}", "top", '141px', { fromValue: '111px'}], position: 334, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Rectangle2}", "top", '172px', { fromValue: '141px'}], position: 400, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Rectangle2}", "top", '192px', { fromValue: '172px'}], position: 467, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Rectangle2}", "top", '111px', { fromValue: '192px'}], position: 1000, duration: 0 }            ]
        }
    }
},
"TIRE_TWIST": {
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
                    id: 'TIRE',
                    type: 'rect',
                    rect: ['0px', '-164px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TIRE',
                symbolName: 'TIRE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TIRE}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '870px'],
                ["style", "width", '180px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            timeline: [
                { id: "eid86", tween: [ "transform", "${_TIRE}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 100 },
                { id: "eid88", tween: [ "transform", "${_TIRE}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 100, duration: 100 },
                { id: "eid89", tween: [ "transform", "${_TIRE}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 201, duration: 100 },
                { id: "eid91", tween: [ "transform", "${_TIRE}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 300, duration: 100 }            ]
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
})(jQuery, AdobeEdge, "EDGE-691007");
