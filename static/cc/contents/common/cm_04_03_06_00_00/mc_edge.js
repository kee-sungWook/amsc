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
                rect: ['123px', '51px','1096','812','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"backPic.png"]
            },
            {
                id: 'bucket_inner',
                type: 'image',
                tag: 'img',
                rect: ['561px', '834px','145','87','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bucket_inner.png"]
            },
            {
                id: 'bucket_liquid_pollution',
                type: 'image',
                tag: 'img',
                rect: ['567px', '868px','133','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bucket_liquid_pollution.png"]
            },
            {
                id: 'bucket',
                type: 'image',
                tag: 'img',
                rect: ['554px', '827px','158','199','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bucket.png"]
            },
            {
                id: 'bucket_liquid_road',
                type: 'image',
                tag: 'img',
                rect: ['626px', '842px','12','78','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bucket_liquid_road.png"]
            },
            {
                id: 'BUCKET_LIQUID_FLOW',
                type: 'rect',
                rect: ['626', '842','auto','auto','auto', 'auto']
            },
            {
                id: 'bucket_liquid_60pct',
                type: 'image',
                tag: 'img',
                rect: ['626px', '842px','12','78','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bucket_liquid_60pct.png"]
            },
            {
                id: 'BUCKET_LINE_IN',
                type: 'rect',
                rect: ['626', '698','auto','auto','auto', 'auto']
            },
            {
                id: 'bucket_line',
                type: 'image',
                tag: 'img',
                rect: ['620px', '691px','148','159','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bucket_line.png"]
            },
            {
                id: 'BRAKE_LINE_IN3',
                type: 'rect',
                rect: ['554px', '526px','auto','auto','auto', 'auto']
            },
            {
                id: 'BRAKE_LINE_IN2',
                type: 'rect',
                rect: ['325px', '507px','auto','auto','auto', 'auto']
            },
            {
                id: 'BRAKE_LINE_IN1_2',
                type: 'rect',
                rect: ['576px', '397px','auto','auto','auto', 'auto']
            },
            {
                id: 'BRAKE_LINE_IN1_1',
                type: 'rect',
                rect: ['652px', '397px','auto','auto','auto', 'auto']
            },
            {
                id: 'brake_Line',
                type: 'image',
                tag: 'img',
                rect: ['318px', '389px','452','344','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"brake_Line.png"]
            },
            {
                id: 'M_CYLINDER',
                type: 'rect',
                rect: ['659px', '293px','auto','auto','auto', 'auto']
            },
            {
                id: 'oil_color_fixer',
                type: 'image',
                tag: 'img',
                rect: ['716px', '303px','34','8','auto', 'auto'],
                opacity: 0.6,
                fill: ["rgba(0,0,0,0)",im+"oil_color_fixer.png"]
            },
            {
                id: 'bottle',
                type: 'image',
                tag: 'img',
                rect: ['555px', '71px','105','148','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bottle.png"]
            },
            {
                id: 'bottle_color_fixer',
                type: 'image',
                tag: 'img',
                rect: ['717px', '219px','30','13','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bottle_color_fixer.png"],
                transform: [[],['137']]
            },
            {
                id: 'BOTTLEOIL_FLOW',
                type: 'rect',
                rect: ['727', '221','auto','auto','auto', 'auto']
            },
            {
                id: 'bottle_cap',
                type: 'image',
                tag: 'img',
                rect: ['574px', '58px','66','52','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bottle_cap.png"]
            },
            {
                id: 'ABS_brake',
                type: 'image',
                tag: 'img',
                rect: ['491px', '409px','400','385','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ABS_brake.png"]
            },
            {
                id: 'wheelLine',
                type: 'image',
                tag: 'img',
                rect: ['216px', '348px','732','515','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wheelLine.png"]
            },
            {
                id: 'M_txt1',
                type: 'text',
                rect: ['1046px', '570px','469','50','auto', 'auto'],
                text: "브레이크액의 교환작업",
                align: "auto",
                font: ['굴림', 45, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'M_txt2',
                type: 'text',
                rect: ['1046px', '658px','577','176','auto', 'auto'],
                text: "일반교환 작업을 하면 브레이크 라인<br>내부의 오일 교환만 이루어 지며<br>오염물질은 제거 되지고 그대로<br>남아있게 됩니다.",
                align: "auto",
                font: ['굴림', 35, "rgb(0,75,140)", "normal", "none", "normal"]
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
            }],
            symbolInstances: [
            {
                id: 'BOTTLEOIL_FLOW',
                symbolName: 'BOTTLEOIL_FLOW',
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
                id: 'BRAKE_LINE_IN1_1',
                symbolName: 'BRAKE_LINE_IN1_1',
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
                id: 'BUCKET_LIQUID_FLOW',
                symbolName: 'BUCKET_LIQUID_FLOW',
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
                id: 'BUCKET_LINE_IN',
                symbolName: 'BUCKET_LINE_IN',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_BUCKET_LINE_IN}": [
                ["style", "opacity", '1']
            ],
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
            "${_bucket_liquid_pollution}": [
                ["style", "top", '921px'],
                ["style", "left", '567px']
            ],
            "${_rewind_btn}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.9']
            ],
            "${_bottle_color_fixer}": [
                ["style", "top", '219px'],
                ["style", "opacity", '0'],
                ["style", "left", '717px'],
                ["transform", "rotateZ", '137deg']
            ],
            "${_BRAKE_LINE_IN1_1}": [
                ["style", "left", '652px'],
                ["style", "top", '397px']
            ],
            "${_backPic}": [
                ["style", "left", '123px'],
                ["style", "top", '51px']
            ],
            "${_M_txt1}": [
                ["style", "top", '570px'],
                ["style", "left", '1046px']
            ],
            "${_M_txt2}": [
                ["style", "top", '658px'],
                ["style", "left", '1046px']
            ],
            "${_wheelLine}": [
                ["style", "left", '216px'],
                ["style", "top", '348px']
            ],
            "${_bucket_liquid_road}": [
                ["style", "top", '842px'],
                ["style", "opacity", '0'],
                ["style", "left", '626px'],
                ["style", "height", '8px']
            ],
            "${_bucket_line}": [
                ["style", "left", '620px'],
                ["style", "top", '691px']
            ],
            "${_bottle_cap}": [
                ["style", "top", '58px'],
                ["style", "opacity", '0'],
                ["style", "left", '574px']
            ],
            "${_bottle}": [
                ["style", "top", '71px'],
                ["style", "opacity", '0'],
                ["style", "left", '555px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_oil_color_fixer}": [
                ["style", "top", '303px'],
                ["style", "opacity", '0'],
                ["style", "left", '716px']
            ],
            "${_BUCKET_LIQUID_FLOW}": [
                ["style", "opacity", '1']
            ],
            "${_BRAKE_LINE_IN1_2}": [
                ["style", "left", '576px'],
                ["style", "top", '397px']
            ],
            "${_ABS_brake}": [
                ["style", "left", '491px'],
                ["style", "top", '409px']
            ],
            "${_brake_Line}": [
                ["style", "left", '318px'],
                ["style", "top", '389px']
            ],
            "${_M_CYLINDER}": [
                ["style", "left", '659px'],
                ["style", "top", '293px']
            ],
            "${_bucket_liquid_60pct}": [
                ["style", "top", '842px'],
                ["style", "opacity", '0'],
                ["style", "left", '626px'],
                ["style", "height", '78px']
            ],
            "${_bucket_inner}": [
                ["style", "left", '561px'],
                ["style", "top", '834px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '45px'],
                ["style", "left", '0px'],
                ["style", "width", '256px']
            ],
            "${_BRAKE_LINE_IN3}": [
                ["style", "left", '554px'],
                ["style", "top", '526px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_BRAKE_LINE_IN2}": [
                ["style", "left", '325px'],
                ["style", "top", '507px']
            ],
            "${_bucket}": [
                ["style", "left", '554px'],
                ["style", "top", '827px']
            ],
            "${_BOTTLEOIL_FLOW}": [
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7833,
            autoPlay: true,
            labels: {
                "rewind": 667
            },
            timeline: [
                { id: "eid137", tween: [ "style", "${_bottle_color_fixer}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 300 },
                { id: "eid219", tween: [ "style", "${_bottle_color_fixer}", "opacity", '0', { fromValue: '1'}], position: 6700, duration: 300 },
                { id: "eid203", tween: [ "style", "${_bucket_liquid_road}", "opacity", '1', { fromValue: '0'}], position: 4133, duration: 232 },
                { id: "eid211", tween: [ "style", "${_bucket_liquid_road}", "opacity", '0', { fromValue: '1'}], position: 7067, duration: 267 },
                { id: "eid228", tween: [ "style", "${_rewind_btn}", "opacity", '1', { fromValue: '0'}], position: 7600, duration: 233 },
                { id: "eid218", tween: [ "style", "${_BOTTLEOIL_FLOW}", "opacity", '0', { fromValue: '1'}], position: 6700, duration: 300 },
                { id: "eid127", tween: [ "style", "${_bottle_cap}", "left", '575px', { fromValue: '574px'}], position: 400, duration: 267, easing: "easeOutQuad" },
                { id: "eid131", tween: [ "transform", "${_bottle}", "rotateZ", '137deg', { fromValue: '0deg'}], position: 767, duration: 733 },
                { id: "eid225", tween: [ "transform", "${_bottle}", "rotateZ", '0deg', { fromValue: '137deg'}], position: 7000, duration: 267 },
                { id: "eid128", tween: [ "style", "${_bottle_cap}", "top", '11px', { fromValue: '58px'}], position: 400, duration: 267, easing: "easeOutQuad" },
                { id: "eid151", tween: [ "style", "${_oil_color_fixer}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 1800, duration: 233 },
                { id: "eid124", tween: [ "style", "${_bottle_cap}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367 },
                { id: "eid129", tween: [ "style", "${_bottle_cap}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 267, easing: "easeOutQuad" },
                { id: "eid199", tween: [ "style", "${_bucket_liquid_pollution}", "top", '868px', { fromValue: '921px'}], position: 4133, duration: 3461 },
                { id: "eid230", tween: [ "transform", "${_rewind_btn}", "scaleX", '1', { fromValue: '0.9'}], position: 7600, duration: 233 },
                { id: "eid213", tween: [ "style", "${_bucket_liquid_60pct}", "top", '912px', { fromValue: '842px'}], position: 7367, duration: 233 },
                { id: "eid201", tween: [ "style", "${_bucket_liquid_road}", "height", '78px', { fromValue: '8px'}], position: 4133, duration: 232 },
                { id: "eid210", tween: [ "style", "${_bucket_liquid_60pct}", "opacity", '0.6', { fromValue: '0'}], position: 7067, duration: 267 },
                { id: "eid214", tween: [ "style", "${_bucket_liquid_60pct}", "opacity", '0', { fromValue: '0.6000000238418579'}], position: 7367, duration: 233 },
                { id: "eid134", tween: [ "style", "${_bottle}", "top", '108px', { fromValue: '71px'}], position: 767, duration: 733 },
                { id: "eid223", tween: [ "style", "${_bottle}", "top", '71px', { fromValue: '108px'}], position: 7000, duration: 267 },
                { id: "eid133", tween: [ "style", "${_bottle}", "left", '640px', { fromValue: '555px'}], position: 767, duration: 733 },
                { id: "eid224", tween: [ "style", "${_bottle}", "left", '555px', { fromValue: '640px'}], position: 7000, duration: 267 },
                { id: "eid212", tween: [ "style", "${_bucket_liquid_60pct}", "height", '8px', { fromValue: '78px'}], position: 7367, duration: 233 },
                { id: "eid126", tween: [ "style", "${_bottle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367 },
                { id: "eid217", tween: [ "style", "${_BUCKET_LIQUID_FLOW}", "opacity", '0', { fromValue: '1'}], position: 7067, duration: 267 },
                { id: "eid232", tween: [ "transform", "${_rewind_btn}", "scaleY", '1', { fromValue: '0.9'}], position: 7600, duration: 233 },
                { id: "eid239", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_BUCKET_LIQUID_FLOW}', [0] ], ""], position: 667 },
                { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOTTLEOIL_FLOW}', [] ], ""], position: 1500 },
                { id: "eid153", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_M_CYLINDER}', [] ], ""], position: 2100 },
                { id: "eid182", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BRAKE_LINE_IN1_1}', [] ], ""], position: 3929 },
                { id: "eid183", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BRAKE_LINE_IN1_2}', [] ], ""], position: 4229 },
                { id: "eid216", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BUCKET_LIQUID_FLOW}', [] ], ""], position: 4365.3333333333 },
                { id: "eid185", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BRAKE_LINE_IN3}', [] ], ""], position: 4963 },
                { id: "eid184", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BRAKE_LINE_IN2}', [] ], ""], position: 4963 },
                { id: "eid197", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BUCKET_LINE_IN}', [] ], ""], position: 6129 },
                { id: "eid226", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_M_CYLINDER}', [] ], ""], position: 7266.6666666667 }            ]
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
                ["style", "left", '58px'],
                ["style", "top", '131px']
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
                ["style", "-webkit-transform-origin", [23,21], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [23,21],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [23,21],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [23,21],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [23,21],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '46px'],
                ["style", "left", '300px'],
                ["transform", "rotateZ", '0deg']
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
            duration: 1833,
            autoPlay: false,
            labels: {
                "goPedal": 1133
            },
            timeline: [
                { id: "eid162", tween: [ "style", "${_pedal}", "top", '51px', { fromValue: '46px'}], position: 1277, duration: 168 },
                { id: "eid179", tween: [ "style", "${_pedal}", "top", '46px', { fromValue: '51px'}], position: 1477, duration: 168 },
                { id: "eid154", tween: [ "transform", "${_pedal}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 1133, duration: 144 },
                { id: "eid181", tween: [ "transform", "${_pedal}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 1645, duration: 144 },
                { id: "eid159", tween: [ "style", "${_M_cylinder_bar}", "left", '44px', { fromValue: '57px'}], position: 1277, duration: 168 },
                { id: "eid174", tween: [ "style", "${_M_cylinder_bar}", "left", '57px', { fromValue: '44px'}], position: 1477, duration: 168 },
                { id: "eid42", tween: [ "style", "${_M_cylinder_liquid_60pct}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 566, duration: 567, easing: "easeInQuad" },
                { id: "eid40", tween: [ "style", "${_M_cylinder_liquid_polution_60pct}", "opacity", '0', { fromValue: '0.6000000238418579'}], position: 566, duration: 567, easing: "easeInQuad" },
                { id: "eid157", tween: [ "style", "${_pedal_axle}", "left", '276px', { fromValue: '289px'}], position: 1277, duration: 168 },
                { id: "eid176", tween: [ "style", "${_pedal_axle}", "left", '289px', { fromValue: '276px'}], position: 1477, duration: 168 },
                { id: "eid160", tween: [ "style", "${_M_cylinder_bar_pollution}", "top", '136px', { fromValue: '131px'}], position: 1277, duration: 168 },
                { id: "eid173", tween: [ "style", "${_M_cylinder_bar_pollution}", "top", '131px', { fromValue: '136px'}], position: 1477, duration: 168 },
                { id: "eid156", tween: [ "style", "${_M_cylinder_bar_pollution}", "left", '45px', { fromValue: '58px'}], position: 1277, duration: 168 },
                { id: "eid172", tween: [ "style", "${_M_cylinder_bar_pollution}", "left", '58px', { fromValue: '45px'}], position: 1477, duration: 168 },
                { id: "eid161", tween: [ "style", "${_pedal_axle}", "top", '78px', { fromValue: '73px'}], position: 1277, duration: 168 },
                { id: "eid177", tween: [ "style", "${_pedal_axle}", "top", '73px', { fromValue: '78px'}], position: 1477, duration: 168 },
                { id: "eid163", tween: [ "style", "${_M_cylinder_bar}", "top", '135px', { fromValue: '130px'}], position: 1277, duration: 168 },
                { id: "eid175", tween: [ "style", "${_M_cylinder_bar}", "top", '130px', { fromValue: '135px'}], position: 1477, duration: 168 },
                { id: "eid158", tween: [ "style", "${_pedal}", "left", '287px', { fromValue: '300px'}], position: 1277, duration: 168 },
                { id: "eid178", tween: [ "style", "${_pedal}", "left", '300px', { fromValue: '287px'}], position: 1477, duration: 168 },
                { id: "eid43", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_M_CYLINDER_TOP_HEAD}', [] ], ""], position: 66.666666666667 }            ]
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
                    rect: ['0px', '0px', '58', '64', 'auto', 'auto'],
                    id: 'brake_Line_inner1_1',
                    fill: ['rgba(0,0,0,0)', 'images/brake_Line_inner1_1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['-9px', '8px', '71px', '20px', 'auto', 'auto'],
                    transform: [[0, 0], ['24']],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(246,169,167,1.00)']
                },
                {
                    rect: ['-7px', '40px', '32px', '20px', 'auto', 'auto'],
                    transform: [[0, 0], ['24']],
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
                symbolName: 'POLLUTION2'
            },
            {
                id: 'POLLUTION_A1',
                symbolName: 'POLLUTION1'
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
                ["style", "left", '1px'],
                ["style", "top", '41px']
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
                ["style", "left", '11px'],
                ["style", "top", '9px']
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
                { id: "eid47", tween: [ "style", "${_RectangleCopy}", "left", '-7px', { fromValue: '19px'}], position: 0, duration: 300 },
                { id: "eid53", tween: [ "style", "${_Rectangle}", "left", '-9px', { fromValue: '55px'}], position: 0, duration: 300 },
                { id: "eid45", tween: [ "style", "${_RectangleCopy}", "top", '40px', { fromValue: '45px'}], position: 0, duration: 300 },
                { id: "eid49", tween: [ "style", "${_RectangleCopy}", "width", '32px', { fromValue: '5px'}], position: 0, duration: 300 },
                { id: "eid55", tween: [ "style", "${_Rectangle}", "width", '71px', { fromValue: '5px'}], position: 0, duration: 300 },
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
                ["style", "left", '48px'],
                ["style", "top", '5px']
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
                ["style", "left", '58px'],
                ["style", "top", '43px']
            ],
            "${_POLLUTION_B2}": [
                ["style", "left", '33px'],
                ["style", "top", '13px']
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
                { id: "eid61", tween: [ "style", "${_Rectangle2}", "left", '50px', { fromValue: '81px'}], position: 0, duration: 300 },
                { id: "eid62", tween: [ "style", "${_Rectangle2}", "width", '32px', { fromValue: '5px'}], position: 0, duration: 300 },
                { id: "eid59", tween: [ "style", "${_Rectangle1}", "width", '84px', { fromValue: '5px'}], position: 0, duration: 300 },
                { id: "eid60", tween: [ "style", "${_Rectangle2}", "top", '38px', { fromValue: '33px'}], position: 0, duration: 300 }            ]
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
                ["style", "left", '116px'],
                ["style", "top", '59px']
            ],
            "${_POLLUTION_C5}": [
                ["style", "left", '72px'],
                ["style", "top", '33px']
            ],
            "${_Rectangle1}": [
                ["style", "height", '5px'],
                ["style", "top", '13px'],
                ["style", "left", '186px'],
                ["style", "width", '17px']
            ],
            "${_POLLUTION_C3}": [
                ["style", "left", '181px'],
                ["style", "top", '83px']
            ],
            "${_POLLUTION_C2}": [
                ["style", "left", '185px'],
                ["style", "top", '52px']
            ],
            "${_POLLUTION_C1}": [
                ["style", "top", '27px'],
                ["style", "left", '183px'],
                ["transform", "scaleX", '0.69565']
            ],
            "${_brake_Line_inner2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '203px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1167,
            autoPlay: false,
            timeline: [
                { id: "eid80", tween: [ "style", "${_Rectangle1}", "top", '16px', { fromValue: '13px'}], position: 0, duration: 300 },
                { id: "eid79", tween: [ "style", "${_Rectangle1}", "height", '84px', { fromValue: '5px'}], position: 0, duration: 300 },
                { id: "eid89", tween: [ "style", "${_Rectangle2}", "left", '88px', { fromValue: '201px'}], position: 300, duration: 866 },
                { id: "eid85", tween: [ "style", "${_Rectangle2}", "height", '215px', { fromValue: '5px'}], position: 300, duration: 866 },
                { id: "eid87", tween: [ "style", "${_Rectangle2}", "top", '-57px', { fromValue: '97px'}], position: 300, duration: 866 }            ]
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
                ["style", "left", '0px'],
                ["style", "top", '62px']
            ],
            "${_POLLUTION27}": [
                ["style", "left", '132px'],
                ["style", "top", '153px']
            ],
            "${_POLLUTION16}": [
                ["transform", "scaleX", '0.65217'],
                ["style", "left", '-4px']
            ],
            "${_POLLUTION17}": [
                ["transform", "scaleX", '0.6087'],
                ["style", "top", '131px'],
                ["style", "left", '80px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_Rectangle1}": [
                ["style", "top", '-6px'],
                ["style", "height", '6px'],
                ["style", "width", '19px']
            ],
            "${_POLLUTION36}": [
                ["style", "left", '169px'],
                ["style", "top", '170px']
            ],
            "${symbolSelector}": [
                ["style", "height", '197px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '207px']
            ],
            "${_POLLUTION35}": [
                ["style", "top", '109px']
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
                { id: "eid116", tween: [ "style", "${_Rectangle1Copy3}", "left", '92px', { fromValue: '-17px'}], position: 300, duration: 866 },
                { id: "eid112", tween: [ "style", "${_Rectangle1Copy3}", "height", '231px', { fromValue: '6px'}], position: 300, duration: 866 },
                { id: "eid101", tween: [ "style", "${_Rectangle1}", "top", '0px', { fromValue: '-6px'}], position: 0, duration: 300 },
                { id: "eid99", tween: [ "style", "${_Rectangle1}", "height", '93px', { fromValue: '6px'}], position: 0, duration: 300 },
                { id: "eid114", tween: [ "style", "${_Rectangle1Copy3}", "top", '26px', { fromValue: '86px'}], position: 300, duration: 866 }            ]
        }
    }
},
"BOTTLEOIL_FLOW": {
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
                    id: 'bottleOil_road',
                    tag: 'img',
                    rect: ['0px', '0px', '15', '89', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bottleOil_road.png']
                },
                {
                    type: 'image',
                    id: 'bottleOil_src',
                    tag: 'img',
                    rect: ['0px', '1px', '15', '47px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bottleOil_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bottleOil_src}": [
                ["style", "top", '-47px'],
                ["style", "left", '0px']
            ],
            "${_bottleOil_road}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '6px']
            ],
            "${symbolSelector}": [
                ["style", "height", '89px'],
                ["style", "width", '15px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 700,
            autoPlay: false,
            labels: {
                "flow": 267
            },
            timeline: [
                { id: "eid145", tween: [ "style", "${_bottleOil_road}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267 },
                { id: "eid143", tween: [ "style", "${_bottleOil_road}", "height", '89px', { fromValue: '6px'}], position: 0, duration: 267 },
                { id: "eid149", tween: [ "style", "${_bottleOil_src}", "top", '89px', { fromValue: '-47px'}], position: 267, duration: 433 }            ]
        }
    }
},
"BUCKET_LINE_IN": {
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
                    id: 'bucket_line_inner',
                    tag: 'img',
                    rect: ['0px', '0px', '134', '145', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bucket_line_inner.png']
                },
                {
                    transform: [[0, 0], ['-66']],
                    rect: ['61px', '-45px', '18px', '154px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(246,169,167,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-1px', '-8px', '18px', '153px', 'auto', 'auto'],
                    fill: ['rgba(246,169,167,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bucket_line_inner}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '-8px'],
                ["style", "left", '-1px'],
                ["style", "height", '8px']
            ],
            "${_Rectangle}": [
                ["style", "top", '60px'],
                ["transform", "rotateZ", '-66deg'],
                ["style", "height", '5px'],
                ["style", "left", '129px'],
                ["style", "width", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '145px'],
                ["style", "width", '134px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 667,
            autoPlay: false,
            timeline: [
                { id: "eid190", tween: [ "style", "${_Rectangle}", "height", '154px', { fromValue: '5px'}], position: 0, duration: 333 },
                { id: "eid194", tween: [ "style", "${_Rectangle}", "left", '61px', { fromValue: '129px'}], position: 0, duration: 333 },
                { id: "eid196", tween: [ "style", "${_Rectangle2}", "height", '153px', { fromValue: '8px'}], position: 333, duration: 333 },
                { id: "eid192", tween: [ "style", "${_Rectangle}", "top", '-45px', { fromValue: '60px'}], position: 0, duration: 333 }            ]
        }
    }
},
"BUCKET_LIQUID_FLOW": {
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
                    id: 'bucket_liquid_pollution-1',
                    tag: 'img',
                    rect: ['0px', '-78px', '12', '78', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bucket_liquid_pollution-1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bucket_liquid_pollution-1}": [
                ["style", "top", '-78px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '78px'],
                ["style", "width", '12px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: false,
            timeline: [
                { id: "eid204", tween: [ "style", "${_bucket_liquid_pollution-1}", "top", '0px', { fromValue: '-78px'}], position: 0, duration: 300 },
                { id: "eid205", tween: [ "style", "${_bucket_liquid_pollution-1}", "top", '78px', { fromValue: '0px'}], position: 300, duration: 300 },
                { id: "eid207", tween: [ "style", "${_bucket_liquid_pollution-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
                { id: "eid208", tween: [ "style", "${_bucket_liquid_pollution-1}", "opacity", '0', { fromValue: '1'}], position: 300, duration: 300 }            ]
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
