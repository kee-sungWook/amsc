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
                id: 'backPic',
                type: 'image',
                tag: 'img',
                rect: ['110', '133px','1096','812','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"backPic.png"]
            },
            {
                id: 'BRAKE_LINE_IN3',
                type: 'rect',
                rect: ['541', '608px','auto','auto','auto', 'auto']
            },
            {
                id: 'BRAKE_LINE_IN2',
                type: 'rect',
                rect: ['312', '589px','auto','auto','auto', 'auto']
            },
            {
                id: 'BRAKE_LINE_IN1_2',
                type: 'rect',
                rect: ['563', '479px','auto','auto','auto', 'auto']
            },
            {
                id: 'BRAKE_LINE_IN1_1',
                type: 'rect',
                rect: ['639', '479px','auto','auto','auto', 'auto']
            },
            {
                id: 'brake_Line',
                type: 'image',
                tag: 'img',
                rect: ['305', '471px','452','344','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"brake_Line.png"]
            },
            {
                id: 'M_CYLINDER',
                type: 'rect',
                rect: ['646', '375px','auto','auto','auto', 'auto']
            },
            {
                id: 'oil_color_fixer',
                type: 'image',
                tag: 'img',
                rect: ['703', '385px','34','8','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oil_color_fixer.png"]
            },
            {
                id: 'EQUIP_LINE2_IN',
                type: 'rect',
                rect: ['778', '638','auto','auto','auto', 'auto']
            },
            {
                id: 'equip_line2',
                type: 'image',
                tag: 'img',
                rect: ['771', '631px','396','137','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"equip_line2.png"]
            },
            {
                id: 'EQUIP_LINE1_IN',
                type: 'rect',
                rect: ['712', '304','auto','auto','auto', 'auto']
            },
            {
                id: 'equip_line1',
                type: 'image',
                tag: 'img',
                rect: ['695', '297px','468','329','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"equip_line1.png"]
            },
            {
                id: 'EQUIPMENT',
                type: 'rect',
                rect: ['1073', '489','auto','auto','auto', 'auto']
            },
            {
                id: 'ABS_brake',
                type: 'image',
                tag: 'img',
                rect: ['478', '491px','400','385','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ABS_brake.png"]
            },
            {
                id: 'wheelLine',
                type: 'image',
                tag: 'img',
                rect: ['203', '430px','732','515','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wheelLine.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1144', '96px','484','50','auto', 'auto'],
                text: "장비를 사용한 교환작업",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1144', '183px','460','176','auto', 'auto'],
                text: "전용 장비를 이용하여 오일을<br>교환 할 경우 브레이크 라인<br>내부의 오염물질 까지<br>깨긋하게 제거 합니다.",
                align: "auto",
                font: ['굴림', 35, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'rewind_btn',
                type: 'group',
                rect: ['1144px', '370px','256','86','auto', 'auto'],
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
                id: 'BRAKE_LINE_IN1_1',
                symbolName: 'BRAKE_LINE_IN1_1',
                autoPlay: {

                }
            },
            {
                id: 'EQUIP_LINE1_IN',
                symbolName: 'EQUIP_LINE1_IN',
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
                id: 'BRAKE_LINE_IN1_2',
                symbolName: 'BRAKE_LINE_IN1_2',
                autoPlay: {

                }
            },
            {
                id: 'BRAKE_LINE_IN2',
                symbolName: 'BRAKE_LINE_IN2',
                autoPlay: {

                }
            },
            {
                id: 'M_CYLINDER',
                symbolName: 'M_CYLINDER',
                autoPlay: {

                }
            },
            {
                id: 'BRAKE_LINE_IN3',
                symbolName: 'BRAKE_LINE_IN3',
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
            "${_txt2}": [
                ["style", "top", '183px']
            ],
            "${_rewind_btn}": [
                ["style", "top", '370px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '1144px']
            ],
            "${_BRAKE_LINE_IN1_1}": [
                ["style", "top", '479px']
            ],
            "${_backPic}": [
                ["style", "top", '133px']
            ],
            "${_BRAKE_LINE_IN1_2}": [
                ["style", "top", '479px']
            ],
            "${_txt1}": [
                ["style", "top", '96px']
            ],
            "${_ABS_brake}": [
                ["style", "top", '491px']
            ],
            "${_brake_Line}": [
                ["style", "top", '471px']
            ],
            "${_M_CYLINDER}": [
                ["style", "top", '375px']
            ],
            "${_oil_color_fixer}": [
                ["style", "top", '385px']
            ],
            "${_BRAKE_LINE_IN3}": [
                ["style", "top", '608px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "width", '256px'],
                ["style", "left", '0px'],
                ["style", "font-size", '45px']
            ],
            "${_equip_line1}": [
                ["style", "top", '297px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_BRAKE_LINE_IN2}": [
                ["style", "top", '589px']
            ],
            "${_wheelLine}": [
                ["style", "top", '430px']
            ],
            "${_equip_line2}": [
                ["style", "top", '631px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7033,
            autoPlay: true,
            timeline: [
                { id: "eid266", tween: [ "style", "${_rewind_btn}", "opacity", '1', { fromValue: '0'}], position: 6800, duration: 233 },
                { id: "eid189", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LINE1_IN}', [] ], ""], position: 67 },
                { id: "eid206", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_M_CYLINDER}', [] ], ""], position: 2333 },
                { id: "eid207", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BRAKE_LINE_IN1_1}', [] ], ""], position: 3267 },
                { id: "eid208", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BRAKE_LINE_IN1_2}', [] ], ""], position: 3567 },
                { id: "eid267", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BRAKE_LINE_IN2}', [] ], ""], position: 4400 },
                { id: "eid268", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BRAKE_LINE_IN3}', [] ], ""], position: 4400 },
                { id: "eid269", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIP_LINE2_IN}', [] ], ""], position: 5667 }            ]
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
                { id: "eid1", tween: [ "style", "${_pollution_src1}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_pollution_src1}", "top", '0px', { fromValue: '4px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid2", tween: [ "style", "${_pollution_src1}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_pollution_src1}", "left", '0px', { fromValue: '6px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid3", tween: [ "transform", "${_pollution_src1}", "scaleX", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid10", tween: [ "transform", "${_pollution_src1}", "scaleX", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid4", tween: [ "transform", "${_pollution_src1}", "scaleY", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid11", tween: [ "transform", "${_pollution_src1}", "scaleY", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
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
"M_CYLINDER": {
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
                    id: 'pedal',
                    tag: 'img',
                    rect: ['300px', '46px', '111', '193', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pedal.png']
                },
                {
                    type: 'image',
                    id: 'pedal_axle',
                    tag: 'img',
                    rect: ['289px', '73px', '49', '36', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pedal_axle.png']
                },
                {
                    type: 'image',
                    id: 'M_cylinder_back',
                    tag: 'img',
                    rect: ['30px', '135px', '118', '74', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_back.png']
                },
                {
                    type: 'image',
                    id: 'M_cylinder_bar',
                    tag: 'img',
                    rect: ['57px', '130px', '130', '58', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_bar.png']
                },
                {
                    type: 'image',
                    id: 'M_cylinder_bar_pollution',
                    tag: 'img',
                    rect: ['58px', '131px', '128', '55', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_bar_pollution.png']
                },
                {
                    type: 'image',
                    id: 'M_cylinder_inner',
                    tag: 'img',
                    rect: ['113px', '135px', '35', '42', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_inner.png']
                },
                {
                    rect: ['31px', '136px', '117', '72', 'auto', 'auto'],
                    tag: 'img',
                    id: 'M_cylinder_liquid_60pct',
                    opacity: 0.6,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_liquid_60pct.png']
                },
                {
                    rect: ['30px', '135px', '118', '74', 'auto', 'auto'],
                    tag: 'img',
                    id: 'M_cylinder_liquid_polution_60pct',
                    opacity: 0.6,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_liquid_polution_60pct.png']
                },
                {
                    type: 'image',
                    id: 'M_cylinder',
                    tag: 'img',
                    rect: ['0px', '0px', '305', '223', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder.png']
                },
                {
                    id: 'M_CYLINDER_TOP_HEAD',
                    type: 'rect',
                    rect: ['36', '67px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'M_cylinder_top',
                    tag: 'img',
                    rect: ['25px', '2px', '98', '157', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_top.png']
                }
            ],
            symbolInstances: [
            {
                id: 'M_CYLINDER_TOP_HEAD',
                symbolName: 'M_CYLINDER_TOP_HEAD',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_M_cylinder_liquid_polution_60pct}": [
                ["style", "top", '135px'],
                ["style", "opacity", '0.6000000238418579'],
                ["style", "left", '30px']
            ],
            "${_M_CYLINDER_TOP_HEAD}": [
                ["style", "top", '67px']
            ],
            "${_M_cylinder_bar_pollution}": [
                ["style", "top", '131px'],
                ["style", "opacity", '1'],
                ["style", "left", '58px']
            ],
            "${_pedal_axle}": [
                ["style", "left", '289px'],
                ["style", "top", '73px']
            ],
            "${_M_cylinder_bar}": [
                ["style", "left", '57px'],
                ["style", "top", '130px']
            ],
            "${_M_cylinder_inner}": [
                ["style", "left", '113px'],
                ["style", "top", '135px']
            ],
            "${_M_cylinder}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '239px'],
                ["style", "width", '411px']
            ],
            "${_M_cylinder_liquid_60pct}": [
                ["style", "top", '136px'],
                ["style", "opacity", '0'],
                ["style", "left", '31px']
            ],
            "${_M_cylinder_top}": [
                ["style", "left", '25px'],
                ["style", "top", '2px']
            ],
            "${_pedal}": [
                ["style", "left", '300px'],
                ["style", "top", '46px']
            ],
            "${_M_cylinder_back}": [
                ["style", "left", '30px'],
                ["style", "top", '135px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: false,
            timeline: [
                { id: "eid40", tween: [ "style", "${_M_cylinder_liquid_polution_60pct}", "opacity", '0', { fromValue: '0.6000000238418579'}], position: 533, duration: 334, easing: "easeInQuad" },
                { id: "eid42", tween: [ "style", "${_M_cylinder_liquid_60pct}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 533, duration: 334, easing: "easeInQuad" },
                { id: "eid190", tween: [ "style", "${_M_cylinder_bar_pollution}", "opacity", '0', { fromValue: '1'}], position: 533, duration: 334 },
                { id: "eid43", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_M_CYLINDER_TOP_HEAD}', [] ], ""], position: 33.333333333333 }            ]
        }
    }
},
"M_CYLINDER_TOP_HEAD": {
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
                    id: 'M_cylinder_top_inner',
                    tag: 'img',
                    rect: ['0px', '0px', '76', '56', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_top_inner.png']
                },
                {
                    rect: ['0px', '-49px', '76', '105', 'auto', 'auto'],
                    tag: 'img',
                    id: 'M_cylinder_top_liquid_60pct',
                    opacity: 0.6,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/M_cylinder_top_liquid_60pct.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_M_cylinder_top_liquid_60pct}": [
                ["style", "top", '-49px'],
                ["style", "opacity", '0.6'],
                ["style", "left", '0px']
            ],
            "${_M_cylinder_top_inner}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '76px'],
                ["style", "overflow", 'hidden']
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
                { id: "eid39", tween: [ "style", "${_M_cylinder_top_liquid_60pct}", "top", '-1px', { fromValue: '-49px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"BRAKE_LINE_IN1_1": {
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
                    id: 'brake_Line_inner1_1',
                    tag: 'img',
                    rect: ['0px', '0px', '58', '64', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_Line_inner1_1.png']
                },
                {
                    transform: [[0, 0], ['24']],
                    rect: ['-9px', '8px', '71px', '20px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(246,169,167,1.00)']
                },
                {
                    transform: [[0, 0], ['24']],
                    rect: ['-7px', '40px', '32px', '20px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(246,169,167,1.00)']
                },
                {
                    id: 'POLLUTION_A1',
                    type: 'rect',
                    rect: ['11px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_A2',
                    type: 'rect',
                    rect: ['1px', '41px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_A2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_A1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_brake_Line_inner1_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(246,169,167,1.00)'],
                ["transform", "rotateZ", '24deg'],
                ["style", "height", '20px'],
                ["style", "top", '45px'],
                ["style", "left", '19px'],
                ["style", "width", '5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '58px']
            ],
            "${_POLLUTION_A2}": [
                ["style", "top", '41px'],
                ["style", "opacity", '1'],
                ["style", "left", '1px']
            ],
            "${_Rectangle}": [
                ["style", "top", '22px'],
                ["transform", "rotateZ", '24deg'],
                ["style", "height", '20px'],
                ["color", "background-color", 'rgba(246,169,167,1.00)'],
                ["style", "left", '55px'],
                ["style", "width", '5px']
            ],
            "${_POLLUTION_A1}": [
                ["style", "top", '9px'],
                ["style", "opacity", '1'],
                ["style", "left", '11px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: false,
            timeline: [
                { id: "eid196", tween: [ "style", "${_POLLUTION_A2}", "opacity", '0', { fromValue: '1'}], position: 133, duration: 167 },
                { id: "eid53", tween: [ "style", "${_Rectangle}", "left", '-9px', { fromValue: '55px'}], position: 0, duration: 300 },
                { id: "eid55", tween: [ "style", "${_Rectangle}", "width", '71px', { fromValue: '5px'}], position: 0, duration: 300 },
                { id: "eid191", tween: [ "style", "${_POLLUTION_A1}", "left", '1px', { fromValue: '11px'}], position: 133, duration: 167 },
                { id: "eid192", tween: [ "style", "${_POLLUTION_A1}", "top", '5px', { fromValue: '9px'}], position: 133, duration: 167 },
                { id: "eid47", tween: [ "style", "${_RectangleCopy}", "left", '-7px', { fromValue: '19px'}], position: 0, duration: 300 },
                { id: "eid193", tween: [ "style", "${_POLLUTION_A1}", "opacity", '0', { fromValue: '1'}], position: 133, duration: 167 },
                { id: "eid45", tween: [ "style", "${_RectangleCopy}", "top", '40px', { fromValue: '45px'}], position: 0, duration: 300 },
                { id: "eid195", tween: [ "style", "${_POLLUTION_A2}", "top", '39px', { fromValue: '41px'}], position: 133, duration: 167 },
                { id: "eid49", tween: [ "style", "${_RectangleCopy}", "width", '32px', { fromValue: '5px'}], position: 0, duration: 300 },
                { id: "eid194", tween: [ "style", "${_POLLUTION_A2}", "left", '-3px', { fromValue: '1px'}], position: 133, duration: 167 },
                { id: "eid51", tween: [ "style", "${_Rectangle}", "top", '8px', { fromValue: '22px'}], position: 0, duration: 300 }            ]
        }
    }
},
"BRAKE_LINE_IN1_2": {
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
                    id: 'brake_Line_inner1_2',
                    tag: 'img',
                    rect: ['0px', '0px', '77', '60', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_Line_inner1_2.png']
                },
                {
                    transform: [[0, 0], ['-19']],
                    rect: ['-9px', '8px', '71px', '20px', 'auto', 'auto'],
                    id: 'Rectangle1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(246,169,167,1.00)']
                },
                {
                    transform: [[0, 0], ['-19']],
                    rect: ['-9px', '8px', '71px', '20px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(246,169,167,1.00)']
                },
                {
                    id: 'POLLUTION_B1',
                    type: 'rect',
                    rect: ['48px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_B2',
                    type: 'rect',
                    rect: ['33px', '13px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_B3',
                    type: 'rect',
                    rect: ['58px', '43px', 'auto', 'auto', 'auto', 'auto']
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
                id: 'POLLUTION_B3',
                symbolName: 'POLLUTION3',
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
            "${_Rectangle2}": [
                ["style", "top", '33px'],
                ["transform", "rotateZ", '-19deg'],
                ["style", "height", '20px'],
                ["color", "background-color", 'rgba(246,169,167,1.00)'],
                ["style", "left", '81px'],
                ["style", "width", '5px']
            ],
            "${_POLLUTION_B1}": [
                ["style", "top", '5px'],
                ["style", "opacity", '1'],
                ["style", "left", '48px']
            ],
            "${_brake_Line_inner1_2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '77px']
            ],
            "${_POLLUTION_B3}": [
                ["style", "top", '43px'],
                ["style", "opacity", '1'],
                ["style", "left", '58px']
            ],
            "${_POLLUTION_B2}": [
                ["style", "top", '13px'],
                ["style", "opacity", '1'],
                ["style", "left", '33px']
            ],
            "${_Rectangle1}": [
                ["color", "background-color", 'rgba(246,169,167,1.00)'],
                ["transform", "rotateZ", '-19deg'],
                ["style", "height", '20px'],
                ["style", "top", '-5px'],
                ["style", "left", '80px'],
                ["style", "width", '5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: false,
            timeline: [
                { id: "eid58", tween: [ "style", "${_Rectangle1}", "left", '-1px', { fromValue: '80px'}], position: 0, duration: 300 },
                { id: "eid57", tween: [ "style", "${_Rectangle1}", "top", '10px', { fromValue: '-5px'}], position: 0, duration: 300 },
                { id: "eid198", tween: [ "style", "${_POLLUTION_B3}", "left", '49px', { fromValue: '58px'}], position: 39, duration: 161 },
                { id: "eid59", tween: [ "style", "${_Rectangle1}", "width", '84px', { fromValue: '5px'}], position: 0, duration: 300 },
                { id: "eid62", tween: [ "style", "${_Rectangle2}", "width", '32px', { fromValue: '5px'}], position: 0, duration: 300 },
                { id: "eid203", tween: [ "style", "${_POLLUTION_B1}", "top", '7px', { fromValue: '5px'}], position: 39, duration: 161 },
                { id: "eid60", tween: [ "style", "${_Rectangle2}", "top", '38px', { fromValue: '33px'}], position: 0, duration: 300 },
                { id: "eid197", tween: [ "style", "${_POLLUTION_B3}", "opacity", '0', { fromValue: '1'}], position: 39, duration: 161 },
                { id: "eid200", tween: [ "style", "${_POLLUTION_B2}", "left", '25px', { fromValue: '33px'}], position: 133, duration: 161 },
                { id: "eid61", tween: [ "style", "${_Rectangle2}", "left", '50px', { fromValue: '81px'}], position: 0, duration: 300 },
                { id: "eid199", tween: [ "style", "${_POLLUTION_B3}", "top", '45px', { fromValue: '43px'}], position: 39, duration: 161 },
                { id: "eid201", tween: [ "style", "${_POLLUTION_B2}", "top", '15px', { fromValue: '13px'}], position: 133, duration: 161 },
                { id: "eid204", tween: [ "style", "${_POLLUTION_B2}", "opacity", '0', { fromValue: '1'}], position: 133, duration: 161 },
                { id: "eid202", tween: [ "style", "${_POLLUTION_B1}", "left", '40px', { fromValue: '48px'}], position: 39, duration: 161 },
                { id: "eid205", tween: [ "style", "${_POLLUTION_B1}", "opacity", '0', { fromValue: '1'}], position: 39, duration: 161 }            ]
        }
    }
},
"BRAKE_LINE_IN2": {
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
                    id: 'brake_Line_inner2',
                    tag: 'img',
                    rect: ['0px', '0px', '203', '100', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_Line_inner2.png']
                },
                {
                    type: 'rect',
                    id: 'Rectangle1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['189px', '-25px', '14px', '25px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    transform: [[0, 0], ['115']],
                    rect: ['88px', '-57px', '19px', '215px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    id: 'POLLUTION_C1',
                    type: 'rect',
                    rect: ['195', '29', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_C2',
                    type: 'rect',
                    rect: ['195', '58', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_C3',
                    type: 'rect',
                    rect: ['181px', '83px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_C4',
                    type: 'rect',
                    rect: ['116px', '59px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_C5',
                    type: 'rect',
                    rect: ['72px', '33px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_C6',
                    type: 'rect',
                    rect: ['22', '18', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_C2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_C6',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_C5',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_C4',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_C3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_C1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '97px'],
                ["transform", "rotateZ", '115deg'],
                ["style", "height", '5px'],
                ["style", "left", '201px'],
                ["style", "width", '19px']
            ],
            "${_POLLUTION_C4}": [
                ["style", "top", '59px'],
                ["style", "opacity", '1'],
                ["style", "left", '116px']
            ],
            "${_POLLUTION_C5}": [
                ["style", "top", '33px'],
                ["style", "opacity", '1'],
                ["style", "left", '72px']
            ],
            "${_Rectangle1}": [
                ["style", "height", '5px'],
                ["style", "top", '13px'],
                ["style", "left", '186px'],
                ["style", "width", '17px']
            ],
            "${_POLLUTION_C3}": [
                ["style", "top", '83px'],
                ["style", "opacity", '1'],
                ["style", "left", '181px']
            ],
            "${_POLLUTION_C2}": [
                ["style", "top", '52px'],
                ["style", "opacity", '1'],
                ["style", "left", '185px']
            ],
            "${_POLLUTION_C1}": [
                ["style", "top", '27px'],
                ["style", "opacity", '1'],
                ["style", "left", '183px'],
                ["transform", "scaleX", '0.69565']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '203px']
            ],
            "${_brake_Line_inner2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_POLLUTION_C6}": [
                ["style", "top", '18px'],
                ["style", "opacity", '1'],
                ["style", "left", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1166,
            autoPlay: false,
            timeline: [
                { id: "eid210", tween: [ "style", "${_POLLUTION_C2}", "top", '62px', { fromValue: '52px'}], position: 133, duration: 134 },
                { id: "eid85", tween: [ "style", "${_Rectangle2}", "height", '215px', { fromValue: '5px'}], position: 300, duration: 866 },
                { id: "eid209", tween: [ "style", "${_POLLUTION_C1}", "top", '37px', { fromValue: '27px'}], position: 33, duration: 134 },
                { id: "eid215", tween: [ "style", "${_POLLUTION_C4}", "top", '52px', { fromValue: '59px'}], position: 588, duration: 146 },
                { id: "eid79", tween: [ "style", "${_Rectangle1}", "height", '84px', { fromValue: '5px'}], position: 0, duration: 300 },
                { id: "eid218", tween: [ "style", "${_POLLUTION_C5}", "top", '26px', { fromValue: '33px'}], position: 800, duration: 133 },
                { id: "eid216", tween: [ "style", "${_POLLUTION_C4}", "opacity", '0', { fromValue: '1'}], position: 588, duration: 146 },
                { id: "eid211", tween: [ "style", "${_POLLUTION_C1}", "opacity", '0', { fromValue: '1'}], position: 33, duration: 134 },
                { id: "eid80", tween: [ "style", "${_Rectangle1}", "top", '16px', { fromValue: '13px'}], position: 0, duration: 300 },
                { id: "eid89", tween: [ "style", "${_Rectangle2}", "left", '88px', { fromValue: '201px'}], position: 300, duration: 866 },
                { id: "eid87", tween: [ "style", "${_Rectangle2}", "top", '-57px', { fromValue: '97px'}], position: 300, duration: 866 },
                { id: "eid217", tween: [ "style", "${_POLLUTION_C5}", "left", '61px', { fromValue: '72px'}], position: 800, duration: 133 },
                { id: "eid212", tween: [ "style", "${_POLLUTION_C2}", "opacity", '0', { fromValue: '1'}], position: 133, duration: 134 },
                { id: "eid219", tween: [ "style", "${_POLLUTION_C5}", "opacity", '0', { fromValue: '1'}], position: 800, duration: 133 },
                { id: "eid214", tween: [ "style", "${_POLLUTION_C4}", "left", '106px', { fromValue: '116px'}], position: 588, duration: 146 },
                { id: "eid220", tween: [ "style", "${_POLLUTION_C6}", "left", '8px', { fromValue: '22px'}], position: 1033, duration: 133 },
                { id: "eid221", tween: [ "style", "${_POLLUTION_C6}", "top", '8px', { fromValue: '18px'}], position: 1033, duration: 133 },
                { id: "eid213", tween: [ "style", "${_POLLUTION_C3}", "opacity", '0', { fromValue: '1'}], position: 267, duration: 133 },
                { id: "eid222", tween: [ "style", "${_POLLUTION_C6}", "opacity", '0', { fromValue: '1'}], position: 1033, duration: 133 }            ]
        }
    }
},
"BRAKE_LINE_IN3": {
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
                    id: 'brake_Line_inner3',
                    tag: 'img',
                    rect: ['0px', '0px', '207', '197', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brake_Line_inner3.png']
                },
                {
                    type: 'rect',
                    id: 'Rectangle1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '19px', '93px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle1Copy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['92px', '26px', '19px', '231px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    id: 'POLLUTION16',
                    type: 'rect',
                    rect: ['0', '15', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION26',
                    type: 'rect',
                    rect: ['7', '63', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION35',
                    type: 'rect',
                    rect: ['29', '109px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION17',
                    type: 'rect',
                    rect: ['80px', '131px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['90'], [], ['0.6087']]
                },
                {
                    id: 'POLLUTION27',
                    type: 'rect',
                    rect: ['132px', '153px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION36',
                    type: 'rect',
                    rect: ['169px', '170px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION17',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION35',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION27',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION36',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION16',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION26',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION26}": [
                ["style", "top", '62px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_POLLUTION27}": [
                ["style", "top", '153px'],
                ["style", "opacity", '1'],
                ["style", "left", '132px']
            ],
            "${_POLLUTION16}": [
                ["transform", "scaleX", '0.65217'],
                ["style", "opacity", '1'],
                ["style", "left", '-4px'],
                ["style", "top", '15px']
            ],
            "${_POLLUTION17}": [
                ["style", "top", '131px'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0.6087'],
                ["style", "opacity", '1'],
                ["style", "left", '80px']
            ],
            "${_Rectangle1}": [
                ["style", "top", '-6px'],
                ["style", "height", '6px'],
                ["style", "width", '19px']
            ],
            "${_POLLUTION36}": [
                ["style", "top", '170px'],
                ["style", "opacity", '1'],
                ["style", "left", '169px']
            ],
            "${symbolSelector}": [
                ["style", "height", '197px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '207px']
            ],
            "${_POLLUTION35}": [
                ["style", "top", '109px'],
                ["style", "opacity", '1'],
                ["style", "left", '29px']
            ],
            "${_Rectangle1Copy3}": [
                ["style", "top", '86px'],
                ["transform", "rotateZ", '-65deg'],
                ["style", "height", '6px'],
                ["style", "left", '-17px'],
                ["style", "width", '20px']
            ],
            "${_brake_Line_inner3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1166,
            autoPlay: false,
            timeline: [
                { id: "eid112", tween: [ "style", "${_Rectangle1Copy3}", "height", '231px', { fromValue: '6px'}], position: 300, duration: 866 },
                { id: "eid236", tween: [ "style", "${_POLLUTION35}", "top", '112px', { fromValue: '109px'}], position: 500, duration: 133 },
                { id: "eid242", tween: [ "style", "${_POLLUTION17}", "opacity", '0', { fromValue: '1'}], position: 667, duration: 133 },
                { id: "eid231", tween: [ "style", "${_POLLUTION27}", "left", '143px', { fromValue: '132px'}], position: 900, duration: 133 },
                { id: "eid223", tween: [ "style", "${_POLLUTION16}", "top", '30px', { fromValue: '15px'}], position: 67, duration: 133 },
                { id: "eid232", tween: [ "style", "${_POLLUTION35}", "left", '40px', { fromValue: '29px'}], position: 500, duration: 133 },
                { id: "eid99", tween: [ "style", "${_Rectangle1}", "height", '93px', { fromValue: '6px'}], position: 0, duration: 300 },
                { id: "eid240", tween: [ "style", "${_POLLUTION35}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 133 },
                { id: "eid226", tween: [ "style", "${_POLLUTION26}", "opacity", '0', { fromValue: '1'}], position: 234, duration: 133 },
                { id: "eid234", tween: [ "style", "${_POLLUTION17}", "left", '91px', { fromValue: '80px'}], position: 667, duration: 133 },
                { id: "eid101", tween: [ "style", "${_Rectangle1}", "top", '0px', { fromValue: '-6px'}], position: 0, duration: 300 },
                { id: "eid239", tween: [ "style", "${_POLLUTION27}", "opacity", '0', { fromValue: '1'}], position: 900, duration: 133 },
                { id: "eid114", tween: [ "style", "${_Rectangle1Copy3}", "top", '26px', { fromValue: '86px'}], position: 300, duration: 866 },
                { id: "eid116", tween: [ "style", "${_Rectangle1Copy3}", "left", '92px', { fromValue: '-17px'}], position: 300, duration: 866 },
                { id: "eid233", tween: [ "style", "${_POLLUTION36}", "left", '180px', { fromValue: '169px'}], position: 1000, duration: 133 },
                { id: "eid235", tween: [ "style", "${_POLLUTION27}", "top", '156px', { fromValue: '153px'}], position: 900, duration: 133 },
                { id: "eid224", tween: [ "style", "${_POLLUTION26}", "top", '77px', { fromValue: '62px'}], position: 234, duration: 133 },
                { id: "eid237", tween: [ "style", "${_POLLUTION36}", "top", '173px', { fromValue: '170px'}], position: 1000, duration: 133 },
                { id: "eid225", tween: [ "style", "${_POLLUTION16}", "opacity", '0', { fromValue: '1'}], position: 67, duration: 133 },
                { id: "eid241", tween: [ "style", "${_POLLUTION36}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 133 },
                { id: "eid238", tween: [ "style", "${_POLLUTION17}", "top", '134px', { fromValue: '131px'}], position: 667, duration: 133 }            ]
        }
    }
},
"EQUIPMENT_LIGHT1": {
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
                    rect: ['0px', '0px', '45', '24', 'auto', 'auto'],
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
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '45px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 367,
            autoPlay: false,
            timeline: [
                { id: "eid123", tween: [ "style", "${_equipment_light1}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 167 },
                { id: "eid126", tween: [ "style", "${_equipment_light1}", "opacity", '1', { fromValue: '0.000000'}], position: 200, duration: 167 }            ]
        }
    }
},
"EQUIPMENT_LIGHT2": {
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
                    rect: ['0px', '0px', '385', '193', 'auto', 'auto'],
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
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '193px'],
                ["style", "width", '385px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 367,
            autoPlay: false,
            timeline: [
                { id: "eid128", tween: [ "style", "${_equipment_light2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 167 },
                { id: "eid129", tween: [ "style", "${_equipment_light2}", "opacity", '0', { fromValue: '0.998004'}], position: 200, duration: 167 }            ]
        }
    }
},
"EQUIPMENT_LIGHT3": {
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
                    rect: ['0px', '0px', '145', '50', 'auto', 'auto'],
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
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '145px']
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
                { id: "eid130", tween: [ "style", "${_equipment_light3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 200 },
                { id: "eid131", tween: [ "style", "${_equipment_light3}", "opacity", '1', { fromValue: '0.000000'}], position: 233, duration: 200 }            ]
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
                    rect: ['0px', '0px', '511', '411', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equipment.png']
                },
                {
                    id: 'EQUIPMENT_LIGHT3',
                    type: 'rect',
                    rect: ['225px', '56px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIPMENT_LIGHT2',
                    type: 'rect',
                    rect: ['30px', '29px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIPMENT_LIGHT1',
                    type: 'rect',
                    rect: ['187px', '34px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIPMENT_LIGHT1Copy',
                    type: 'rect',
                    rect: ['230px', '29px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.95', '0.95']]
                },
                {
                    id: 'EQUIPMENT_LIGHT1Copy2',
                    type: 'rect',
                    rect: ['273px', '24px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.9', '0.9']]
                }
            ],
            symbolInstances: [
            {
                id: 'EQUIPMENT_LIGHT1Copy',
                symbolName: 'EQUIPMENT_LIGHT1',
                autoPlay: {

               }
            },
            {
                id: 'EQUIPMENT_LIGHT1Copy2',
                symbolName: 'EQUIPMENT_LIGHT1',
                autoPlay: {

               }
            },
            {
                id: 'EQUIPMENT_LIGHT3',
                symbolName: 'EQUIPMENT_LIGHT3',
                autoPlay: {

               }
            },
            {
                id: 'EQUIPMENT_LIGHT1',
                symbolName: 'EQUIPMENT_LIGHT1',
                autoPlay: {

               }
            },
            {
                id: 'EQUIPMENT_LIGHT2',
                symbolName: 'EQUIPMENT_LIGHT2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_equipment}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_EQUIPMENT_LIGHT1}": [
                ["style", "top", '34px'],
                ["style", "left", '187px']
            ],
            "${symbolSelector}": [
                ["style", "height", '411px'],
                ["style", "width", '511px']
            ],
            "${_EQUIPMENT_LIGHT1Copy}": [
                ["style", "top", '29px'],
                ["transform", "scaleX", '0.95'],
                ["transform", "scaleY", '0.95'],
                ["style", "left", '230px']
            ],
            "${_EQUIPMENT_LIGHT1Copy2}": [
                ["style", "top", '24px'],
                ["transform", "scaleX", '0.9'],
                ["transform", "scaleY", '0.9'],
                ["style", "left", '273px']
            ],
            "${_EQUIPMENT_LIGHT2}": [
                ["style", "left", '30px'],
                ["style", "top", '29px']
            ],
            "${_EQUIPMENT_LIGHT3}": [
                ["style", "left", '225px'],
                ["style", "top", '56px']
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
                { id: "eid140", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT1Copy2}', [] ], ""], position: 0 },
                { id: "eid143", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT3}', [] ], ""], position: 0 },
                { id: "eid142", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT1}', [] ], ""], position: 0 },
                { id: "eid141", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT2}', [] ], ""], position: 0 },
                { id: "eid144", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT1Copy}', [] ], ""], position: 367 }            ]
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
                    id: 'equip_line1_inner',
                    tag: 'img',
                    rect: ['0px', '0px', '444', '315', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equip_line1_inner.png']
                },
                {
                    type: 'rect',
                    id: 'Rectangle1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['401px', '294px', '43px', '21px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    transform: [[0, 0], ['45']],
                    type: 'rect',
                    display: 'none',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['368px', '283px', '43px', '21px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    type: 'rect',
                    rect: ['369px', '25px', '23px', '256px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    transform: [[0, 0], ['45']],
                    type: 'rect',
                    display: 'none',
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['353px', '12px', '37px', '21px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    type: 'rect',
                    rect: ['29px', '-2px', '342px', '21px', 'auto', 'auto'],
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    transform: [[0, 0], ['-45']],
                    type: 'rect',
                    display: 'none',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-4px', '4px', '53px', '21px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    type: 'rect',
                    rect: ['-3px', '15px', '23px', '53px', 'auto', 'auto'],
                    id: 'Rectangle7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(246,169,167,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle7}": [
                ["style", "top", '15px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["style", "left", '-3px'],
                ["style", "width", '23px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '297px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '21px'],
                ["style", "display", 'none'],
                ["style", "left", '404px'],
                ["style", "width", '5px']
            ],
            "${_Rectangle1}": [
                ["style", "height", '21px'],
                ["style", "top", '294px'],
                ["style", "left", '441px'],
                ["style", "width", '5px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '-13px'],
                ["transform", "rotateZ", '-45deg'],
                ["style", "height", '21px'],
                ["style", "display", 'none'],
                ["style", "left", '38px'],
                ["style", "width", '4px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '290px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["style", "left", '369px'],
                ["style", "width", '23px']
            ],
            "${symbolSelector}": [
                ["style", "height", '315px'],
                ["style", "width", '444px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle5}": [
                ["style", "top", '-2px'],
                ["style", "display", 'none'],
                ["style", "height", '21px'],
                ["style", "left", '367px'],
                ["style", "width", '4px']
            ],
            "${_Rectangle4}": [
                ["style", "top", '27px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '21px'],
                ["style", "display", 'none'],
                ["style", "left", '384px'],
                ["style", "width", '5px']
            ],
            "${_equip_line1_inner}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2267,
            autoPlay: false,
            timeline: [
                { id: "eid162", tween: [ "style", "${_Rectangle4}", "left", '353px', { fromValue: '384px'}], position: 1033, duration: 200 },
                { id: "eid181", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'none'}], position: 167, duration: 0 },
                { id: "eid185", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 1033, duration: 0 },
                { id: "eid179", tween: [ "style", "${_Rectangle6}", "display", 'none', { fromValue: 'none'}], position: 333, duration: 0 },
                { id: "eid187", tween: [ "style", "${_Rectangle6}", "display", 'block', { fromValue: 'none'}], position: 1800, duration: 0 },
                { id: "eid176", tween: [ "style", "${_Rectangle7}", "height", '68px', { fromValue: '3px'}], position: 2000, duration: 267 },
                { id: "eid182", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid184", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 400, duration: 0 },
                { id: "eid180", tween: [ "style", "${_Rectangle5}", "display", 'none', { fromValue: 'none'}], position: 167, duration: 0 },
                { id: "eid186", tween: [ "style", "${_Rectangle5}", "display", 'block', { fromValue: 'none'}], position: 1234, duration: 0 },
                { id: "eid170", tween: [ "style", "${_Rectangle6}", "top", '0px', { fromValue: '-13px'}], position: 1800, duration: 200 },
                { id: "eid168", tween: [ "style", "${_Rectangle5}", "width", '342px', { fromValue: '4px'}], position: 1233, duration: 567 },
                { id: "eid172", tween: [ "style", "${_Rectangle6}", "left", '5px', { fromValue: '38px'}], position: 1800, duration: 200 },
                { id: "eid156", tween: [ "style", "${_Rectangle3}", "height", '266px', { fromValue: '3px'}], position: 400, duration: 633 },
                { id: "eid148", tween: [ "style", "${_Rectangle1}", "width", '43px', { fromValue: '5px'}], position: 0, duration: 200 },
                { id: "eid154", tween: [ "style", "${_Rectangle2}", "width", '33px', { fromValue: '5px'}], position: 200, duration: 200 },
                { id: "eid174", tween: [ "style", "${_Rectangle6}", "width", '43px', { fromValue: '4px'}], position: 1800, duration: 200 },
                { id: "eid150", tween: [ "style", "${_Rectangle2}", "top", '287px', { fromValue: '297px'}], position: 200, duration: 200 },
                { id: "eid166", tween: [ "style", "${_Rectangle5}", "left", '29px', { fromValue: '367px'}], position: 1233, duration: 567 },
                { id: "eid178", tween: [ "style", "${_Rectangle7}", "display", 'none', { fromValue: 'none'}], position: 333, duration: 0 },
                { id: "eid188", tween: [ "style", "${_Rectangle7}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Rectangle4}", "width", '37px', { fromValue: '5px'}], position: 1033, duration: 200 },
                { id: "eid160", tween: [ "style", "${_Rectangle4}", "top", '12px', { fromValue: '27px'}], position: 1033, duration: 200 },
                { id: "eid152", tween: [ "style", "${_Rectangle2}", "left", '376px', { fromValue: '404px'}], position: 200, duration: 200 },
                { id: "eid146", tween: [ "style", "${_Rectangle1}", "left", '401px', { fromValue: '441px'}], position: 0, duration: 200 },
                { id: "eid158", tween: [ "style", "${_Rectangle3}", "top", '28px', { fromValue: '290px'}], position: 400, duration: 633 },
                { id: "eid177", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 }            ]
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
                    id: 'equip_line2_inner',
                    tag: 'img',
                    rect: ['0px', '0px', '382', '122', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equip_line2_inner.png']
                },
                {
                    type: 'rect',
                    rect: ['29px', '-2px', '342px', '21px', 'auto', 'auto'],
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    transform: [[0, 0], ['-45']],
                    type: 'rect',
                    display: 'none',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-4px', '4px', '53px', '21px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-3px', '15px', '23px', '53px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle7}": [
                ["style", "height", '3px'],
                ["style", "top", '123px'],
                ["style", "left", '-3px'],
                ["style", "width", '23px']
            ],
            "${symbolSelector}": [
                ["style", "height", '122px'],
                ["style", "width", '382px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle5}": [
                ["style", "top", '-2px'],
                ["style", "height", '21px'],
                ["style", "display", 'none'],
                ["style", "left", '18px'],
                ["style", "width", '4px']
            ],
            "${_equip_line2_inner}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '28px'],
                ["transform", "rotateZ", '-45deg'],
                ["style", "height", '21px'],
                ["style", "display", 'none'],
                ["style", "left", '-1px'],
                ["style", "width", '4px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1100,
            autoPlay: false,
            timeline: [
                { id: "eid249", tween: [ "style", "${_Rectangle6}", "left", '-8px', { fromValue: '-1px'}], position: 333, duration: 200 },
                { id: "eid261", tween: [ "style", "${_Rectangle6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid263", tween: [ "style", "${_Rectangle6}", "display", 'block', { fromValue: 'none'}], position: 333, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Rectangle7}", "height", '92px', { fromValue: '3px'}], position: 0, duration: 333 },
                { id: "eid258", tween: [ "style", "${_Rectangle7}", "top", '31px', { fromValue: '123px'}], position: 0, duration: 333 },
                { id: "eid250", tween: [ "style", "${_Rectangle6}", "width", '43px', { fromValue: '4px'}], position: 333, duration: 200 },
                { id: "eid262", tween: [ "style", "${_Rectangle5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid264", tween: [ "style", "${_Rectangle5}", "display", 'block', { fromValue: 'none'}], position: 533, duration: 0 },
                { id: "eid253", tween: [ "style", "${_Rectangle5}", "left", '14px', { fromValue: '18px'}], position: 533, duration: 567 },
                { id: "eid246", tween: [ "style", "${_Rectangle6}", "top", '14px', { fromValue: '28px'}], position: 333, duration: 200 },
                { id: "eid254", tween: [ "style", "${_Rectangle5}", "width", '368px', { fromValue: '4px'}], position: 533, duration: 567 }            ]
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
})(jQuery, AdobeEdge, "EDGE-4261929");
