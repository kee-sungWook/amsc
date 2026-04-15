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
                id: 'eng',
                type: 'image',
                tag: 'img',
                rect: ['654px', '271px','615','666','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eng.png"]
            },
            {
                id: 'airduct',
                type: 'image',
                tag: 'img',
                rect: ['159px', '61px','426','440','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"airduct.png"]
            },
            {
                id: 'EQUIPMENT',
                type: 'rect',
                rect: ['1301', '282','auto','auto','auto', 'auto']
            },
            {
                id: 'LINE0_IN',
                type: 'rect',
                rect: ['1357', '447','auto','auto','auto', 'auto']
            },
            {
                id: 'line0',
                type: 'image',
                tag: 'img',
                rect: ['1347px', '420px','109','118','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line0.png"]
            },
            {
                id: 'LINE1_IN',
                type: 'rect',
                rect: ['1058px', '678px','auto','auto','auto', 'auto']
            },
            {
                id: 'line1',
                type: 'image',
                tag: 'img',
                rect: ['1050px', '659px','167','329','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line1.png"]
            },
            {
                id: 'LINE2_IN',
                type: 'rect',
                rect: ['380px', '391px','auto','auto','auto', 'auto']
            },
            {
                id: 'line2',
                type: 'image',
                tag: 'img',
                rect: ['369px', '380px','787','385','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line2.png"]
            },
            {
                id: 'LINE3_IN',
                type: 'rect',
                rect: ['379px', '331px','auto','auto','auto', 'auto']
            },
            {
                id: 'line3',
                type: 'image',
                tag: 'img',
                rect: ['368px', '320px','345','105','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line3.png"]
            },
            {
                id: 'LINE4_IN',
                type: 'rect',
                rect: ['1247', '431','auto','auto','auto', 'auto']
            },
            {
                id: 'line4',
                type: 'image',
                tag: 'img',
                rect: ['1190px', '404px','197','145','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line4.png"]
            },
            {
                id: 'radiator_back',
                type: 'image',
                tag: 'img',
                rect: ['1231px', '534px','250','459','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator_back.png"]
            },
            {
                id: 'liquide_bottom_80pct',
                type: 'image',
                tag: 'img',
                rect: ['1192px', '526px','235','218','auto', 'auto'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,0)",im+"liquide_bottom_80pct.png"]
            },
            {
                id: 'liquide_bottom_90pct',
                type: 'image',
                rect: ['1234px', '526px','235px','218px','auto', 'auto'],
                opacity: 0.9,
                fill: ["rgba(0,0,0,0)",im+"liquide_bottom_90pct.png",'0px','0px']
            },
            {
                id: 'pipe',
                type: 'image',
                tag: 'img',
                rect: ['1257px', '588px','179','317','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pipe.png"]
            },
            {
                id: 'liquide_mid',
                type: 'rect',
                rect: ['1231px', '648px','250px','182px','auto', 'auto'],
                opacity: 0.5,
                fill: ["rgba(24,47,1,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],['0','-42']]
            },
            {
                id: 'liquide_mid2',
                type: 'rect',
                rect: ['1231px', '648px','250px','182px','auto', 'auto'],
                opacity: 0.5,
                fill: ["rgba(24,47,1,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],['0','-42']]
            },
            {
                id: 'pipe_pollution',
                type: 'image',
                tag: 'img',
                rect: ['1259px', '589px','176','314','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pipe_pollution.png"]
            },
            {
                id: 'liquide_top_80pct',
                type: 'image',
                tag: 'img',
                rect: ['1192px', '530px','247','232','auto', 'auto'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,0)",im+"liquide_top_80pct.png"]
            },
            {
                id: 'liquide_top_90pct',
                type: 'image',
                rect: ['1234px', '530px','247px','232px','auto', 'auto'],
                opacity: 0.9,
                fill: ["rgba(0,0,0,0)",im+"liquide_top_90pct.png",'0px','0px']
            },
            {
                id: 'radiator_top',
                type: 'image',
                tag: 'img',
                rect: ['1152px', '497px','341','524','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator_top.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['170px', '698px','833px','266px','auto', 'auto'],
                text: "전용장비를 이용하여 부동액을<br>교환할 경우 라디에이터 및 냉각라인<br>내부의 모든 부동액 교체가 이루어 지며<br>또한 라디에이터 내부 및 냉각라인 내부의<br>모든 오염 물질을 깨끗하게 제거 합니다.",
                align: "auto",
                font: ['굴림', 35, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'rewind_btn',
                type: 'group',
                rect: ['170px', '578px','256','86','auto', 'auto'],
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
                id: 'LINE2_IN',
                symbolName: 'LINE2_IN',
                autoPlay: {

                }
            },
            {
                id: 'LINE0_IN',
                symbolName: 'LINE0_IN',
                autoPlay: {

                }
            },
            {
                id: 'LINE1_IN',
                symbolName: 'LINE1_IN',
                autoPlay: {

                }
            },
            {
                id: 'LINE4_IN',
                symbolName: 'LINE4_IN',
                autoPlay: {

                }
            },
            {
                id: 'LINE3_IN',
                symbolName: 'LINE3_IN',
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
                ["style", "border-width", '3px'],
                ["style", "left", '0px']
            ],
            "${_liquide_mid2}": [
                ["color", "background-color", 'rgba(69,255,0,1.00)'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '-42deg'],
                ["style", "top", '699px'],
                ["style", "height", '1px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1231px'],
                ["style", "width", '250px']
            ],
            "${_line1}": [
                ["style", "left", '1050px'],
                ["style", "top", '659px']
            ],
            "${_liquide_bottom_80pct}": [
                ["style", "top", '577px'],
                ["style", "opacity", '0.800000011920929'],
                ["style", "left", '1233px']
            ],
            "${_line4}": [
                ["style", "left", '1190px'],
                ["style", "top", '404px']
            ],
            "${_txt1}": [
                ["style", "line-height", '45px'],
                ["style", "width", '833px'],
                ["style", "height", '266px'],
                ["style", "top", '698px'],
                ["style", "left", '170px'],
                ["style", "font-size", '35px']
            ],
            "${_liquide_bottom_90pct}": [
                ["style", "top", '575px'],
                ["style", "opacity", '0'],
                ["style", "left", '1234px']
            ],
            "${_line0}": [
                ["style", "left", '1347px'],
                ["style", "top", '420px']
            ],
            "${_liquide_mid}": [
                ["color", "background-color", 'rgba(24,47,1,1.00)'],
                ["style", "top", '699px'],
                ["transform", "skewY", '-42deg'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '182px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1231px'],
                ["style", "width", '250px']
            ],
            "${_radiator_top}": [
                ["style", "left", '1152px'],
                ["style", "top", '497px']
            ],
            "${_line3}": [
                ["style", "left", '368px'],
                ["style", "top", '320px']
            ],
            "${_pipe_pollution}": [
                ["style", "top", '589px'],
                ["style", "opacity", '1'],
                ["style", "left", '1259px']
            ],
            "${_liquide_top_80pct}": [
                ["style", "top", '581px'],
                ["style", "opacity", '0.800000011920929'],
                ["style", "left", '1233px']
            ],
            "${_radiator_back}": [
                ["style", "left", '1231px'],
                ["style", "top", '534px']
            ],
            "${_rewind_btn}": [
                ["style", "top", '578px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '170px']
            ],
            "${_airduct}": [
                ["style", "left", '159px'],
                ["style", "top", '61px']
            ],
            "${_line2}": [
                ["style", "left", '369px'],
                ["style", "top", '380px']
            ],
            "${_LINE1_IN}": [
                ["style", "left", '1058px'],
                ["style", "top", '678px']
            ],
            "${_LINE3_IN}": [
                ["style", "left", '379px'],
                ["style", "top", '331px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '256px'],
                ["style", "left", '0px'],
                ["style", "font-size", '45px']
            ],
            "${_liquide_top_90pct}": [
                ["style", "top", '579px'],
                ["style", "opacity", '0'],
                ["style", "left", '1234px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_pipe}": [
                ["style", "left", '1257px'],
                ["style", "top", '588px']
            ],
            "${_eng}": [
                ["style", "left", '654px'],
                ["style", "top", '271px']
            ],
            "${_LINE2_IN}": [
                ["style", "left", '380px'],
                ["style", "top", '391px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8800,
            autoPlay: true,
            timeline: [
                { id: "eid311", tween: [ "transform", "${_rewind_btn}", "scaleX", '1', { fromValue: '0.9'}], position: 8567, duration: 233 },
                { id: "eid348", tween: [ "style", "${_liquide_mid}", "top", '880px', { fromValue: '699px'}], position: 2067, duration: 767 },
                { id: "eid397", tween: [ "style", "${_liquide_bottom_90pct}", "top", '515px', { fromValue: '575px'}], position: 1368, duration: 699 },
                { id: "eid312", tween: [ "style", "${_rewind_btn}", "opacity", '1', { fromValue: '0'}], position: 8567, duration: 233 },
                { id: "eid347", tween: [ "style", "${_liquide_mid}", "height", '6px', { fromValue: '182px'}], position: 2067, duration: 767 },
                { id: "eid354", tween: [ "style", "${_liquide_top_80pct}", "opacity", '0', { fromValue: '0.800000011920929'}], position: 1134, duration: 234 },
                { id: "eid385", tween: [ "style", "${_liquide_mid2}", "height", '63px', { fromValue: '1px'}], position: 1368, duration: 699 },
                { id: "eid402", tween: [ "style", "${_liquide_mid2}", "height", '240px', { fromValue: '63px'}], position: 2067, duration: 767 },
                { id: "eid355", tween: [ "style", "${_liquide_bottom_80pct}", "opacity", '0', { fromValue: '0.800000011920929'}], position: 1134, duration: 234 },
                { id: "eid384", tween: [ "style", "${_liquide_mid2}", "top", '639px', { fromValue: '699px'}], position: 1368, duration: 699 },
                { id: "eid431", tween: [ "style", "${_pipe_pollution}", "opacity", '0', { fromValue: '1'}], position: 2767, duration: 400 },
                { id: "eid401", tween: [ "style", "${_liquide_top_80pct}", "top", '581px', { fromValue: '581px'}], position: 1134, duration: 0 },
                { id: "eid361", tween: [ "style", "${_liquide_top_90pct}", "opacity", '0.8999999761581421', { fromValue: '0'}], position: 1134, duration: 234 },
                { id: "eid313", tween: [ "transform", "${_rewind_btn}", "scaleY", '1', { fromValue: '0.9'}], position: 8567, duration: 233 },
                { id: "eid396", tween: [ "style", "${_liquide_top_90pct}", "top", '519px', { fromValue: '579px'}], position: 1368, duration: 699 },
                { id: "eid363", tween: [ "style", "${_liquide_bottom_90pct}", "opacity", '0.8999999761581421', { fromValue: '0'}], position: 1134, duration: 234 },
                { id: "eid462", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_LINE3_IN}', [0] ], ""], position: 0 },
                { id: "eid458", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_LINE2_IN}', [0] ], ""], position: 0 },
                { id: "eid460", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_LINE1_IN}', [0] ], ""], position: 0 },
                { id: "eid461", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_LINE0_IN}', [0] ], ""], position: 0 },
                { id: "eid459", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_LINE4_IN}', [0] ], ""], position: 0 },
                { id: "eid463", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_LINE0_IN}', [] ], ""], position: 400 },
                { id: "eid159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_LINE1_IN}', [] ], ""], position: 3166.6666666667 },
                { id: "eid464", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_LINE2_IN}', [] ], ""], position: 4233.6666666667 },
                { id: "eid465", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_LINE3_IN}', [] ], ""], position: 6300.6666666667 },
                { id: "eid466", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_LINE4_IN}', [] ], ""], position: 8066.6666666667 }            ]
        }
    }
},
"LINE1_IN": {
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
                    id: 'line1_in',
                    tag: 'img',
                    rect: ['0px', '0px', '130', '284', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/line1_in.png']
                },
                {
                    id: 'POLLUTION_L1_1',
                    type: 'rect',
                    rect: ['53px', '238px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L1_2',
                    type: 'rect',
                    rect: ['72px', '185px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L1_3',
                    type: 'rect',
                    rect: ['7px', '124px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L1_4',
                    type: 'rect',
                    rect: ['38px', '12px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], ['-64']],
                    rect: ['57px', '177px', '36px', '142px', 'auto', 'auto'],
                    id: 'Rectangle1_1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-43']],
                    type: 'rect',
                    display: 'none',
                    id: 'Rectangle1_2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['7px', '199px', '38px', '41px', 'auto', 'auto'],
                    fill: ['rgba(69,255,0,1.00)']
                },
                {
                    type: 'rect',
                    rect: ['-4px', '47px', '38px', '180px', 'auto', 'auto'],
                    id: 'Rectangle1_3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(69,255,0,1.00)']
                },
                {
                    transform: [[0, 0], ['54']],
                    type: 'rect',
                    display: 'none',
                    id: 'Rectangle1_4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['7px', '-18px', '34px', '108px', 'auto', 'auto'],
                    fill: ['rgba(69,255,0,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L1_4',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L1_1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L1_2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L1_3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L1_2}": [
                ["style", "left", '8px'],
                ["style", "top", '185px']
            ],
            "${_Rectangle1_3}": [
                ["style", "top", '214px'],
                ["color", "background-color", 'rgba(69,255,0,1.00)'],
                ["style", "height", '9px'],
                ["style", "display", 'none'],
                ["style", "left", '-4px'],
                ["style", "width", '38px']
            ],
            "${_POLLUTION_L1_1}": [
                ["style", "left", '53px'],
                ["style", "top", '238px']
            ],
            "${_POLLUTION_L1_3}": [
                ["style", "top", '124px'],
                ["style", "left", '7px']
            ],
            "${_Rectangle1_4}": [
                ["style", "top", '42px'],
                ["style", "display", 'none'],
                ["transform", "rotateZ", '54deg'],
                ["style", "height", '33px'],
                ["color", "background-color", 'rgba(69,255,0,1.00)'],
                ["style", "left", '-24px'],
                ["style", "width", '34px']
            ],
            "${symbolSelector}": [
                ["style", "height", '284px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '130px']
            ],
            "${_Rectangle1_2}": [
                ["color", "background-color", 'rgba(69,255,0,1.00)'],
                ["style", "display", 'none'],
                ["transform", "rotateZ", '-37deg'],
                ["style", "height", '9px'],
                ["style", "top", '221px'],
                ["style", "left", '7px'],
                ["style", "width", '38px']
            ],
            "${_line1_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle1_1}": [
                ["color", "background-color", 'rgba(69,255,0,1.00)'],
                ["transform", "rotateZ", '-64deg'],
                ["style", "height", '9px'],
                ["style", "top", '272px'],
                ["style", "left", '117px'],
                ["style", "width", '36px']
            ],
            "${_POLLUTION_L1_4}": [
                ["style", "left", '38px'],
                ["style", "top", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1067,
            autoPlay: false,
            timeline: [
                { id: "eid154", tween: [ "style", "${_Rectangle1_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Rectangle1_3}", "display", 'block', { fromValue: 'none'}], position: 467, duration: 0 },
                { id: "eid142", tween: [ "style", "${_Rectangle1_2}", "left", '2px', { fromValue: '7px'}], position: 333, duration: 134 },
                { id: "eid138", tween: [ "style", "${_Rectangle1_2}", "height", '27px', { fromValue: '9px'}], position: 333, duration: 134 },
                { id: "eid150", tween: [ "style", "${_Rectangle1_4}", "top", '-18px', { fromValue: '42px'}], position: 800, duration: 267 },
                { id: "eid117", tween: [ "style", "${_Rectangle1_3}", "height", '172px', { fromValue: '9px'}], position: 467, duration: 333 },
                { id: "eid115", tween: [ "style", "${_Rectangle1_1}", "left", '64px', { fromValue: '117px'}], position: 0, duration: 333 },
                { id: "eid111", tween: [ "style", "${_Rectangle1_1}", "height", '127px', { fromValue: '9px'}], position: 0, duration: 333 },
                { id: "eid148", tween: [ "style", "${_Rectangle1_4}", "height", '108px', { fromValue: '33px'}], position: 800, duration: 267 },
                { id: "eid140", tween: [ "style", "${_Rectangle1_2}", "top", '205px', { fromValue: '221px'}], position: 333, duration: 134 },
                { id: "eid153", tween: [ "style", "${_Rectangle1_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid156", tween: [ "style", "${_Rectangle1_2}", "display", 'block', { fromValue: 'none'}], position: 333, duration: 0 },
                { id: "eid146", tween: [ "style", "${_Rectangle1_3}", "top", '47px', { fromValue: '214px'}], position: 467, duration: 333 },
                { id: "eid113", tween: [ "style", "${_Rectangle1_1}", "top", '187px', { fromValue: '272px'}], position: 0, duration: 333 },
                { id: "eid152", tween: [ "style", "${_Rectangle1_4}", "left", '7px', { fromValue: '-24px'}], position: 800, duration: 267 },
                { id: "eid155", tween: [ "style", "${_Rectangle1_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid158", tween: [ "style", "${_Rectangle1_4}", "display", 'block', { fromValue: 'none'}], position: 800, duration: 0 }            ]
        }
    }
},
"LINE2_IN": {
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
                    id: 'line2_in',
                    tag: 'img',
                    rect: ['0px', '0px', '765', '364', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/line2_in.png']
                },
                {
                    id: 'POLLUTION_L2_1',
                    type: 'rect',
                    rect: ['704', '335', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_2',
                    type: 'rect',
                    rect: ['630px', '299px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_3',
                    type: 'rect',
                    rect: ['544px', '256px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_4',
                    type: 'rect',
                    rect: ['452px', '191px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_5',
                    type: 'rect',
                    rect: ['350px', '134px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_6',
                    type: 'rect',
                    rect: ['246px', '85px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_7',
                    type: 'rect',
                    rect: ['129px', '28px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_8',
                    type: 'rect',
                    rect: ['13px', '19px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], ['32']],
                    rect: ['737px', '317px', '21px', '54px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2_1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    opacity: 1,
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    transform: [[0, 0], ['26']],
                    rect: ['473px', '340px', '269px', '30px', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    id: 'Rectangle2_2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    transform: [[0, 0], ['45'], [], [], ['100%']],
                    rect: ['425px', '233px', '89px', '30px', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    id: 'Rectangle2_3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    transform: [[0, 0], ['27'], [], [], ['100%']],
                    rect: ['104px', '180px', '359px', '30px', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    id: 'Rectangle2_4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    transform: [[0, 0], ['-29'], ['32'], [], ['100%']],
                    rect: ['59px', '9px', '100px', '25px', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    id: 'Rectangle2_5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    transform: [[0, 0], ['-29'], ['32'], [], ['50%', '100%']],
                    rect: ['88px', '-29px', '27px', '103px', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    id: 'Rectangle2_6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    transform: [[0, 0], ['-29'], ['32'], [], ['0%']],
                    rect: ['-7px', '22px', '63px', '25px', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    id: 'Rectangle2_7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L2_1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_8',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_7',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_5',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_6',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_4',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2_2}": [
                ["style", "top", '340px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '26deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '735px'],
                ["style", "width", '7px']
            ],
            "${_POLLUTION_L2_2}": [
                ["style", "left", '630px'],
                ["style", "top", '299px']
            ],
            "${_POLLUTION_L2_4}": [
                ["style", "left", '452px'],
                ["style", "top", '191px']
            ],
            "${_Rectangle2_6}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-29deg'],
                ["style", "opacity", '1'],
                ["style", "left", '88px'],
                ["style", "width", '27px'],
                ["style", "top", '69px'],
                ["transform", "skewX", '32deg'],
                ["style", "height", '5px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2_1}": [
                ["style", "top", '320px'],
                ["transform", "rotateZ", '32deg'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewX", '0deg'],
                ["style", "height", '5px'],
                ["style", "opacity", '1'],
                ["style", "left", '752px'],
                ["style", "width", '21px']
            ],
            "${_POLLUTION_L2_6}": [
                ["style", "left", '246px'],
                ["style", "top", '85px']
            ],
            "${_POLLUTION_L2_3}": [
                ["style", "left", '544px'],
                ["style", "top", '256px']
            ],
            "${_Rectangle2_3}": [
                ["style", "top", '233px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '45deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '507px'],
                ["style", "width", '7px']
            ],
            "${_POLLUTION_L2_7}": [
                ["style", "left", '129px'],
                ["style", "top", '28px']
            ],
            "${_POLLUTION_L2_8}": [
                ["style", "left", '13px'],
                ["style", "top", '19px']
            ],
            "${_line2_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle2_4}": [
                ["style", "top", '180px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '27deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '456px'],
                ["style", "width", '7px']
            ],
            "${symbolSelector}": [
                ["style", "height", '364px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '765px']
            ],
            "${_Rectangle2_7}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-29deg'],
                ["style", "opacity", '1'],
                ["style", "left", '-7px'],
                ["style", "width", '7px'],
                ["style", "top", '22px'],
                ["transform", "skewX", '32deg'],
                ["style", "height", '25px'],
                ["style", "display", 'none']
            ],
            "${_POLLUTION_L2_5}": [
                ["style", "left", '350px'],
                ["style", "top", '134px']
            ],
            "${_Rectangle2_5}": [
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-29deg'],
                ["style", "opacity", '1'],
                ["style", "left", '152px'],
                ["style", "width", '7px'],
                ["style", "top", '9px'],
                ["transform", "skewX", '32deg'],
                ["style", "height", '25px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2067,
            autoPlay: false,
            timeline: [
                { id: "eid205", tween: [ "style", "${_Rectangle2_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid207", tween: [ "style", "${_Rectangle2_3}", "display", 'block', { fromValue: 'none'}], position: 600, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Rectangle2_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid211", tween: [ "style", "${_Rectangle2_7}", "display", 'block', { fromValue: 'none'}], position: 1800, duration: 0 },
                { id: "eid175", tween: [ "style", "${_Rectangle2_2}", "left", '473px', { fromValue: '735px'}], position: 200, duration: 400 },
                { id: "eid187", tween: [ "style", "${_Rectangle2_4}", "left", '104px', { fromValue: '456px'}], position: 867, duration: 400 },
                { id: "eid191", tween: [ "style", "${_Rectangle2_5}", "left", '59px', { fromValue: '152px'}], position: 1267, duration: 267 },
                { id: "eid173", tween: [ "style", "${_Rectangle2_1}", "height", '54px', { fromValue: '5px'}], position: 0, duration: 200 },
                { id: "eid185", tween: [ "style", "${_Rectangle2_3}", "width", '89px', { fromValue: '7px'}], position: 600, duration: 267 },
                { id: "eid197", tween: [ "style", "${_Rectangle2_6}", "top", '-29px', { fromValue: '69px'}], position: 1533, duration: 267 },
                { id: "eid189", tween: [ "style", "${_Rectangle2_4}", "width", '359px', { fromValue: '7px'}], position: 867, duration: 400 },
                { id: "eid199", tween: [ "style", "${_Rectangle2_7}", "width", '63px', { fromValue: '7px'}], position: 1800, duration: 267 },
                { id: "eid193", tween: [ "style", "${_Rectangle2_5}", "width", '100px', { fromValue: '7px'}], position: 1267, duration: 267 },
                { id: "eid195", tween: [ "style", "${_Rectangle2_6}", "height", '103px', { fromValue: '5px'}], position: 1533, duration: 267 },
                { id: "eid202", tween: [ "style", "${_Rectangle2_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid210", tween: [ "style", "${_Rectangle2_6}", "display", 'block', { fromValue: 'none'}], position: 1533, duration: 0 },
                { id: "eid177", tween: [ "style", "${_Rectangle2_2}", "width", '269px', { fromValue: '7px'}], position: 200, duration: 400 },
                { id: "eid183", tween: [ "style", "${_Rectangle2_3}", "left", '425px', { fromValue: '507px'}], position: 600, duration: 267 },
                { id: "eid200", tween: [ "style", "${_Rectangle2_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid206", tween: [ "style", "${_Rectangle2_2}", "display", 'block', { fromValue: 'none'}], position: 233, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Rectangle2_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid209", tween: [ "style", "${_Rectangle2_5}", "display", 'block', { fromValue: 'none'}], position: 1267, duration: 0 },
                { id: "eid204", tween: [ "style", "${_Rectangle2_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid208", tween: [ "style", "${_Rectangle2_4}", "display", 'block', { fromValue: 'none'}], position: 867, duration: 0 }            ]
        }
    }
},
"LINE3_IN": {
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
                    id: 'line3_in',
                    tag: 'img',
                    rect: ['0px', '0px', '275', '82', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/line3_in.png']
                },
                {
                    id: 'POLLUTION_L3_1',
                    type: 'rect',
                    rect: ['7px', '26px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L3_2',
                    type: 'rect',
                    rect: ['78px', '61px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L3_3',
                    type: 'rect',
                    rect: ['153px', '24px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L3_4',
                    type: 'rect',
                    rect: ['223px', '22px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], ['-28'], ['10']],
                    rect: ['-8px', '2px', '52px', '23px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle3_1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    opacity: 1,
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    transform: [[0, 0], ['-28'], ['32']],
                    rect: ['-3px', '32px', '28px', '82px', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    id: 'Rectangle3_2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    transform: [[0, 0], ['-28'], ['32']],
                    rect: ['77px', '63px', '155px', '23px', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    id: 'Rectangle3_3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    transform: [[0, 0], ['-31'], ['32']],
                    rect: ['178px', '5px', '28px', '82px', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    id: 'Rectangle3_4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L3_4',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L3_3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L3_1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L3_2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L3_4}": [
                ["style", "top", '22px'],
                ["style", "left", '223px']
            ],
            "${_POLLUTION_L3_1}": [
                ["style", "left", '7px'],
                ["style", "top", '26px']
            ],
            "${_Rectangle3_1}": [
                ["style", "top", '2px'],
                ["transform", "skewX", '10deg'],
                ["transform", "rotateZ", '-28deg'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "opacity", '1'],
                ["style", "left", '42px'],
                ["style", "width", '2px']
            ],
            "${_Rectangle3_3}": [
                ["style", "top", '63px'],
                ["transform", "rotateZ", '-28deg'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewX", '32deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '77px'],
                ["style", "width", '14px']
            ],
            "${_Rectangle3_2}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-28deg'],
                ["style", "opacity", '1'],
                ["style", "left", '-3px'],
                ["style", "width", '28px'],
                ["style", "top", '32px'],
                ["transform", "skewX", '32deg'],
                ["style", "height", '9px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle3_4}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-31deg'],
                ["style", "opacity", '1'],
                ["style", "left", '178px'],
                ["style", "width", '28px'],
                ["style", "top", '5px'],
                ["transform", "skewX", '32deg'],
                ["style", "height", '10px'],
                ["style", "display", 'none']
            ],
            "${_POLLUTION_L3_3}": [
                ["style", "left", '153px'],
                ["style", "top", '24px']
            ],
            "${_line3_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_POLLUTION_L3_2}": [
                ["style", "top", '61px'],
                ["style", "left", '78px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '275px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1633,
            autoPlay: false,
            timeline: [
                { id: "eid224", tween: [ "style", "${_Rectangle3_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid225", tween: [ "style", "${_Rectangle3_2}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0 },
                { id: "eid222", tween: [ "style", "${_Rectangle3_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid227", tween: [ "style", "${_Rectangle3_4}", "display", 'block', { fromValue: 'none'}], position: 1233, duration: 0 },
                { id: "eid221", tween: [ "style", "${_Rectangle3_4}", "height", '82px', { fromValue: '10px'}], position: 1233, duration: 400 },
                { id: "eid215", tween: [ "style", "${_Rectangle3_1}", "width", '52px', { fromValue: '2px'}], position: 0, duration: 267 },
                { id: "eid213", tween: [ "style", "${_Rectangle3_1}", "left", '-8px', { fromValue: '42px'}], position: 0, duration: 267 },
                { id: "eid219", tween: [ "style", "${_Rectangle3_3}", "width", '155px', { fromValue: '14px'}], position: 709, duration: 525 },
                { id: "eid223", tween: [ "style", "${_Rectangle3_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid226", tween: [ "style", "${_Rectangle3_3}", "display", 'block', { fromValue: 'none'}], position: 700, duration: 0 },
                { id: "eid217", tween: [ "style", "${_Rectangle3_2}", "height", '82px', { fromValue: '9px'}], position: 267, duration: 433 }            ]
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
                    type: 'image',
                    id: 'pollution_src3',
                    tag: 'img',
                    rect: ['0px', '0px', '15', '9', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src3.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '15px']
            ],
            "${_pollution_src3}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
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
                { id: "eid23", tween: [ "transform", "${_pollution_src3}", "scaleY", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid24", tween: [ "transform", "${_pollution_src3}", "scaleY", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid25", tween: [ "style", "${_pollution_src3}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_pollution_src3}", "left", '0px', { fromValue: '6px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid27", tween: [ "transform", "${_pollution_src3}", "scaleX", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid28", tween: [ "transform", "${_pollution_src3}", "scaleX", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid21", tween: [ "style", "${_pollution_src3}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_pollution_src3}", "top", '0px', { fromValue: '4px'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
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
                    type: 'image',
                    id: 'pollution_src2',
                    tag: 'img',
                    rect: ['0px', '0px', '14', '13', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src2.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src2}": [
                ["style", "top", '4px'],
                ["transform", "scaleX", '0.59'],
                ["style", "left", '6px'],
                ["transform", "scaleY", '0.59']
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
                { id: "eid66", tween: [ "transform", "${_pollution_src2}", "scaleX", '1', { fromValue: '0.59'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid70", tween: [ "transform", "${_pollution_src2}", "scaleX", '0.59', { fromValue: '1'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid63", tween: [ "style", "${_pollution_src2}", "top", '0px', { fromValue: '4px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid67", tween: [ "style", "${_pollution_src2}", "top", '4px', { fromValue: '0px'}], position: 367, duration: 367, easing: "easeInQuad" },
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
                    type: 'image',
                    id: 'pollution_src1',
                    tag: 'img',
                    rect: ['0px', '0px', '23', '10', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src1}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
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
                { id: "eid2", tween: [ "style", "${_pollution_src1}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_pollution_src1}", "left", '0px', { fromValue: '6px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid1", tween: [ "style", "${_pollution_src1}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_pollution_src1}", "top", '0px', { fromValue: '4px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid3", tween: [ "transform", "${_pollution_src1}", "scaleX", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid10", tween: [ "transform", "${_pollution_src1}", "scaleX", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid4", tween: [ "transform", "${_pollution_src1}", "scaleY", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid11", tween: [ "transform", "${_pollution_src1}", "scaleY", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
        }
    }
},
"LINE4_IN": {
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
                    id: 'line4_in',
                    tag: 'img',
                    rect: ['0px', '0px', '109', '84', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/line4_in.png']
                },
                {
                    transform: [[0, 0], ['56']],
                    rect: ['35px', '-24px', '36px', '134px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '75px'],
                ["transform", "rotateZ", '56deg'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(69,255,0,1.00)'],
                ["style", "left", '-18px'],
                ["style", "width", '36px']
            ],
            "${_line4_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '84px'],
                ["style", "width", '109px'],
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
                { id: "eid437", tween: [ "style", "${_Rectangle2}", "left", '35px', { fromValue: '-18px'}], position: 0, duration: 500 },
                { id: "eid433", tween: [ "style", "${_Rectangle2}", "height", '134px', { fromValue: '8px'}], position: 0, duration: 500 },
                { id: "eid435", tween: [ "style", "${_Rectangle2}", "top", '-24px', { fromValue: '75px'}], position: 0, duration: 500 }            ]
        }
    }
},
"LINE0_IN": {
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
                    rect: ['0px', '0px', '68', '59', 'auto', 'auto'],
                    id: 'line0_in',
                    fill: ['rgba(0,0,0,0)', 'images/line0_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['-6px', '9px', '91px', '26px', 'auto', 'auto'],
                    transform: [[], ['-35']],
                    id: 'Rectangle1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    rect: ['8px', '30px', '38px', '39px', 'auto', 'auto'],
                    transform: [[], ['-35']],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(69,255,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_line0_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '59px'],
                ["style", "width", '68px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle1}": [
                ["style", "top", '-15px'],
                ["transform", "rotateZ", '-35deg'],
                ["style", "height", '26px'],
                ["style", "left", '68px'],
                ["style", "width", '9px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '32px'],
                ["transform", "rotateZ", '-35deg'],
                ["style", "height", '11px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '38px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 633,
            autoPlay: false,
            timeline: [
                { id: "eid441", tween: [ "style", "${_Rectangle1}", "left", '-6px', { fromValue: '68px'}], position: 0, duration: 367 },
                { id: "eid439", tween: [ "style", "${_Rectangle1}", "top", '9px', { fromValue: '-15px'}], position: 0, duration: 367 },
                { id: "eid447", tween: [ "style", "${_Rectangle2}", "top", '30px', { fromValue: '32px'}], position: 367, duration: 266 },
                { id: "eid443", tween: [ "style", "${_Rectangle1}", "width", '91px', { fromValue: '9px'}], position: 0, duration: 367 },
                { id: "eid445", tween: [ "style", "${_Rectangle2}", "height", '39px', { fromValue: '11px'}], position: 367, duration: 266 },
                { id: "eid449", tween: [ "style", "${_Rectangle2}", "left", '8px', { fromValue: '0px'}], position: 367, duration: 266 },
                { id: "eid450", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid451", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 367, duration: 0 }            ]
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
                    rect: ['0px', '0px', '346', '345', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/equipment.png']
                },
                {
                    id: 'EQUIPMENT_LIGHT1_1',
                    type: 'rect',
                    rect: ['106', '29', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIPMENT_LIGHT1_2',
                    type: 'rect',
                    rect: ['144px', '25px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIPMENT_LIGHT1_3',
                    type: 'rect',
                    rect: ['181px', '21px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIPMENT_LIGHT2_1',
                    type: 'rect',
                    rect: ['230', '22', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIPMENT_LIGHT2_2',
                    type: 'rect',
                    rect: ['268px', '45px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EQUIPMENT_LIGHT3',
                    type: 'rect',
                    rect: ['225px', '56px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'EQUIPMENT_LIGHT2_2',
                symbolName: 'EQUIPMENT_LIGHT2'
            },
            {
                id: 'EQUIPMENT_LIGHT1_3',
                symbolName: 'EQUIPMENT_LIGHT1'
            },
            {
                id: 'EQUIPMENT_LIGHT3',
                symbolName: 'EQUIPMENT_LIGHT3'
            },
            {
                id: 'EQUIPMENT_LIGHT1_1',
                symbolName: 'EQUIPMENT_LIGHT1'
            },
            {
                id: 'EQUIPMENT_LIGHT2_1',
                symbolName: 'EQUIPMENT_LIGHT2'
            },
            {
                id: 'EQUIPMENT_LIGHT1_2',
                symbolName: 'EQUIPMENT_LIGHT1'
            }            ]
        },
    states: {
        "Base State": {
            "${_EQUIPMENT_LIGHT1_2}": [
                ["style", "left", '144px'],
                ["style", "top", '25px']
            ],
            "${_equipment}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '346px']
            ],
            "${_EQUIPMENT_LIGHT3}": [
                ["style", "top", '43px'],
                ["transform", "scaleX", '0.82759'],
                ["transform", "scaleY", '0.8'],
                ["style", "left", '128px']
            ],
            "${_EQUIPMENT_LIGHT1_3}": [
                ["style", "left", '181px'],
                ["style", "top", '21px']
            ],
            "${_EQUIPMENT_LIGHT2_2}": [
                ["style", "top", '45px'],
                ["style", "left", '268px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 700,
            autoPlay: true,
            timeline: [
                { id: "eid452", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT3}', [] ], ""], position: 0 },
                { id: "eid453", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT2_1}', [] ], ""], position: 0 },
                { id: "eid454", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT1_2}', [] ], ""], position: 0 },
                { id: "eid455", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT2_2}', [] ], ""], position: 233 },
                { id: "eid456", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT1_3}', [] ], ""], position: 233 },
                { id: "eid457", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_EQUIPMENT_LIGHT1_1}', [] ], ""], position: 233 }            ]
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
                    rect: ['0px', '0px', '145', '50', 'auto', 'auto'],
                    id: 'equipment_light3',
                    fill: ['rgba(0,0,0,0)', 'images/equipment_light3.png'],
                    type: 'image',
                    tag: 'img'
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
                    transform: [[0, 0], ['10']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['1px', '3px', '35px', '13px', 'auto', 'auto'],
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,0,1.00)'],
                ["style", "top", '3px'],
                ["transform", "rotateZ", '10deg'],
                ["style", "height", '13px'],
                ["style", "opacity", '1'],
                ["style", "left", '1px'],
                ["style", "width", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '19px'],
                ["style", "width", '37px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 467,
            autoPlay: false,
            timeline: [
                { id: "eid427", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 200 },
                { id: "eid428", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 200 }            ]
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
                    transform: [[0, 0], ['11']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['1px', '3px', '35px', '14px', 'auto', 'auto'],
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,143,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["style", "top", '3px'],
                ["color", "background-color", 'rgba(255,143,0,1.00)'],
                ["transform", "rotateZ", '11deg'],
                ["style", "height", '14px'],
                ["style", "opacity", '1'],
                ["style", "left", '1px'],
                ["style", "width", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '37px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 467,
            autoPlay: false,
            timeline: [
                { id: "eid425", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 200 },
                { id: "eid426", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 200 }            ]
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
})(jQuery, AdobeEdge, "EDGE-19734490");
