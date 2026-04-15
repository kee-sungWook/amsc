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
                id: 'body_back',
                type: 'image',
                tag: 'img',
                rect: ['458', '368','1504','542','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body_back.png"]
            },
            {
                id: 'body_back2',
                type: 'image',
                tag: 'img',
                rect: ['906', '370','1054','538','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"body_back2.png"]
            },
            {
                id: 'FLOW_A1',
                type: 'rect',
                rect: ['307', '621','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_A2',
                type: 'rect',
                rect: ['596', '699','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_A3',
                type: 'rect',
                rect: ['616', '758','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_B',
                type: 'rect',
                rect: ['825', '437','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOW_R',
                type: 'rect',
                rect: ['645', '454','auto','auto','auto', 'auto'],
                opacity: 0
            },
            {
                id: 'VALVE',
                type: 'rect',
                rect: ['1682', '596','auto','auto','auto', 'auto']
            },
            {
                id: 'VALVE_top',
                type: 'rect',
                rect: ['1682', '596','auto','auto','auto', 'auto']
            },
            {
                id: 'body_inner',
                type: 'image',
                tag: 'img',
                rect: ['639', '389','824','503','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body_inner.png"]
            },
            {
                id: 'MP5',
                type: 'rect',
                rect: ['625', '608','auto','auto','auto', 'auto']
            },
            {
                id: 'MP4',
                type: 'rect',
                rect: ['1469px', '589px','21px','100px','auto', 'auto'],
                fill: ["rgba(213,227,171,1.00)"],
                stroke: [1,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'MP2',
                type: 'rect',
                rect: ['932', '490','auto','auto','auto', 'auto']
            },
            {
                id: 'MP3',
                type: 'rect',
                rect: ['1338px', '540','auto','auto','auto', 'auto']
            },
            {
                id: 'MP1',
                type: 'rect',
                rect: ['1015', '460','auto','auto','auto', 'auto']
            },
            {
                id: 'MP0',
                type: 'rect',
                rect: ['825', '571','auto','auto','auto', 'auto']
            },
            {
                id: 'body_outter',
                type: 'image',
                tag: 'img',
                rect: ['459', '369','1502','540','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body_outter.png"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['2045', '585','214','76','auto', 'auto'],
                text: "인젝터",
                align: "auto",
                font: ['굴림', 70, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['140', '545','144','160','auto', 'auto'],
                text: "연료\r탱크",
                align: "right",
                font: ['굴림', 70, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt_title2',
                type: 'text',
                rect: ['636', '173','858','86','auto', 'auto'],
                opacity: 0,
                text: "연료라인내 압력 상승시",
                align: "center",
                font: ['굴림', 80, "rgb(198,0,95)", "normal", "none", "normal"]
            },
            {
                id: 'txt_title1',
                type: 'text',
                rect: ['863', '173','404','86','auto', 'auto'],
                text: "정상작동시",
                align: "center",
                font: ['굴림', 80, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'MP1',
                symbolName: 'MP1',
                autoPlay: {

                }
            },
            {
                id: 'MP3',
                symbolName: 'MP3',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_A1',
                symbolName: 'FLOW_A1',
                autoPlay: {

                }
            },
            {
                id: 'MP5',
                symbolName: 'MP5',
                autoPlay: {

                }
            },
            {
                id: 'VALVE',
                symbolName: 'VALVE',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_A2',
                symbolName: 'FLOW_A2',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_A3',
                symbolName: 'FLOW_A3',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_R',
                symbolName: 'FLOW_R'
            },
            {
                id: 'VALVE_top',
                symbolName: 'VALVE',
                autoPlay: {

                }
            },
            {
                id: 'MP0',
                symbolName: 'MP0',
                autoPlay: {

                }
            },
            {
                id: 'FLOW_B',
                symbolName: 'FLOW_B'
            },
            {
                id: 'MP2',
                symbolName: 'MP2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_FLOW_B}": [
                ["style", "opacity", '1']
            ],
            "${_VALVE_top}": [
                ["style", "top", '420px'],
                ["style", "left", '665px'],
                ["transform", "scaleX", '-1']
            ],
            "${_MP4}": [
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "top", '589px'],
                ["style", "left", '1469px'],
                ["style", "height", '100px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '21px']
            ],
            "${_body_back2}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_R}": [
                ["style", "opacity", '0']
            ],
            "${_txt_title1}": [
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_MP3}": [
                ["style", "left", '1338px']
            ],
            "${_txt_title2}": [
                ["style", "opacity", '0']
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
                { id: "eid412", tween: [ "style", "${_body_back2}", "opacity", '1', { fromValue: '0'}], position: 2400, duration: 333 },
                { id: "eid424", tween: [ "style", "${_body_back2}", "opacity", '0', { fromValue: '1'}], position: 5400, duration: 333 },
                { id: "eid413", tween: [ "style", "${_txt_title2}", "opacity", '1', { fromValue: '0'}], position: 2400, duration: 333 },
                { id: "eid421", tween: [ "style", "${_txt_title2}", "opacity", '0', { fromValue: '1'}], position: 5400, duration: 333 },
                { id: "eid411", tween: [ "style", "${_FLOW_B}", "opacity", '0', { fromValue: '1'}], position: 2400, duration: 333 },
                { id: "eid423", tween: [ "style", "${_FLOW_B}", "opacity", '1', { fromValue: '0'}], position: 5400, duration: 333 },
                { id: "eid410", tween: [ "style", "${_FLOW_R}", "opacity", '1', { fromValue: '0'}], position: 2400, duration: 333 },
                { id: "eid422", tween: [ "style", "${_FLOW_R}", "opacity", '0', { fromValue: '1'}], position: 5400, duration: 333 },
                { id: "eid414", tween: [ "style", "${_txt_title1}", "opacity", '0', { fromValue: '1'}], position: 2400, duration: 333 },
                { id: "eid420", tween: [ "style", "${_txt_title1}", "opacity", '1', { fromValue: '0'}], position: 5400, duration: 333 },
                { id: "eid21", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_VALVE_top}', ['open'] ], ""], position: 0 },
                { id: "eid408", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_VALVE_top}', ['open'] ], ""], position: 2000 },
                { id: "eid409", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_VALVE}', ['close'] ], ""], position: 2000 },
                { id: "eid425", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_VALVE_top}', ['close'] ], ""], position: 5000 },
                { id: "eid426", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_VALVE}', ['open'] ], ""], position: 5000 }            ]
        }
    }
},
"MP0": {
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
                    rect: ['0px', '0px', '106px', '138px', 'auto', 'auto'],
                    id: 'back',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(225,240,181,1)']
                },
                {
                    id: 'LINE_MOVE',
                    type: 'rect',
                    rect: ['46', '106', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'LINE_MOVE',
                symbolName: 'LINE_MOVE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_LINE_MOVE}": [
                ["style", "left", '-13px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '140px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '108px']
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
                { id: "eid25", tween: [ "style", "${_LINE_MOVE}", "left", '-13px', { fromValue: '-13px'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_LINE_MOVE}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"MP1": {
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
                    rect: ['1px', '0px', '232px', '359px', 'auto', 'auto'],
                    id: 'back',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(225,240,181,1)']
                },
                {
                    id: 'gear_ract',
                    type: 'group',
                    rect: ['0', '0', '234px', '418', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '234px', '16px', 'auto', 'auto'],
                        id: 'gear_ract1',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    },
                    {
                        rect: ['0px', '57px', '234px', '16px', 'auto', 'auto'],
                        id: 'gear_ract2',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    },
                    {
                        rect: ['0px', '114px', '234px', '16px', 'auto', 'auto'],
                        id: 'gear_ract3',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    },
                    {
                        rect: ['0px', '172px', '234px', '16px', 'auto', 'auto'],
                        id: 'gear_ract4',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    },
                    {
                        rect: ['0px', '229px', '234px', '16px', 'auto', 'auto'],
                        id: 'gear_ract5',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    },
                    {
                        rect: ['0px', '286px', '234px', '16px', 'auto', 'auto'],
                        id: 'gear_ract6',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    },
                    {
                        rect: ['0px', '343px', '234px', '16px', 'auto', 'auto'],
                        id: 'gear_ract7',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    },
                    {
                        rect: ['0px', '400px', '234px', '16px', 'auto', 'auto'],
                        id: 'gear_ract8',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gear_ract}": [
                ["style", "top", '0px'],
                ["style", "width", '234px']
            ],
            "${_gear_ract8}": [
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "top", '400px'],
                ["style", "height", '16px']
            ],
            "${_gear_ract2}": [
                ["style", "height", '16px'],
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "top", '57px']
            ],
            "${_back}": [
                ["style", "left", '1px'],
                ["style", "width", '232px']
            ],
            "${_gear_ract1}": [
                ["style", "height", '16px'],
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "top", '0px']
            ],
            "${_gear_ract7}": [
                ["style", "height", '16px'],
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "top", '343px']
            ],
            "${symbolSelector}": [
                ["style", "height", '361px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '236px']
            ],
            "${_gear_ract6}": [
                ["style", "top", '286px'],
                ["style", "height", '16px'],
                ["color", "background-color", 'rgba(213,227,171,1.00)']
            ],
            "${_gear_ract4}": [
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "top", '172px'],
                ["style", "height", '16px']
            ],
            "${_gear_ract3}": [
                ["style", "height", '16px'],
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "top", '114px']
            ],
            "${_gear_ract5}": [
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "top", '229px'],
                ["style", "height", '16px']
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
                { id: "eid27", tween: [ "style", "${_gear_ract}", "top", '-57px', { fromValue: '0px'}], position: 0, duration: 500 }            ]
        }
    }
},
"MP2": {
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
                    rect: ['0px', '0px', '407', '301', 'auto', 'auto'],
                    id: 'motor_parts2',
                    fill: ['rgba(0,0,0,0)', 'images/motor_parts2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '301px', '407px', '195px', 'auto', 'auto'],
                    id: 'gradi_ract',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(236,252,190,0.00)', [50, 50, 'true', 'farthest-corner', [['rgba(255,255,255,0.89)', 23], ['rgba(255,255,255,0.00)', 74]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_motor_parts2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_gradi_ract}": [
                ["color", "background-color", 'rgba(236,252,190,0.00)'],
                ["style", "top", '301px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.89)',23],['rgba(255,255,255,0.00)',74]]]],
                ["style", "height", '195px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '407px']
            ],
            "${symbolSelector}": [
                ["style", "height", '301px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '407px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: true,
            timeline: [
                { id: "eid29", tween: [ "style", "${_gradi_ract}", "top", '-195px', { fromValue: '301px'}], position: 0, duration: 700 }            ]
        }
    }
},
"MP3": {
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
                    rect: ['0px', '0px', '132px', '199px', 'auto', 'auto'],
                    id: 'back',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(225,240,181,1)']
                },
                {
                    id: 'LINE_MOVE',
                    type: 'rect',
                    rect: ['1339', '540', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'LINE_MOVE',
                symbolName: 'LINE_MOVE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_LINE_MOVE}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '201px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '134px']
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
                { id: "eid23", tween: [ "style", "${_LINE_MOVE}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_LINE_MOVE}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"MP5": {
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
                    rect: ['0px', '0px', '924px', '63px', 'auto', 'auto'],
                    id: 'back_fill',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(236,252,190,1.00)']
                },
                {
                    rect: ['0px', '65px', '926px', '65px', 'auto', 'auto'],
                    id: 'gradi_ract',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(236,252,190,0.00)', [270, [['rgba(255,255,255,0.00)', 10], ['rgba(255,255,255,1.00)', 45], ['rgba(255,255,255,0.87)', 50], ['rgba(255,255,255,0.00)', 90]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '926px']
            ],
            "${_back_fill}": [
                ["color", "background-color", 'rgba(236,252,190,1.00)']
            ],
            "${_gradi_ract}": [
                ["style", "top", '65px'],
                ["color", "background-color", 'rgba(236,252,190,0.00)'],
                ["style", "height", '65px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',10],['rgba(255,255,255,1.00)',45],['rgba(255,255,255,0.87)',50],['rgba(255,255,255,0.00)',90]]]],
                ["style", "border-style", 'none'],
                ["style", "width", '926px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: true,
            timeline: [
                { id: "eid28", tween: [ "style", "${_gradi_ract}", "top", '-65px', { fromValue: '65px'}], position: 0, duration: 500 }            ]
        }
    }
},
"VALVE": {
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
                    id: 'valveHead',
                    type: 'group',
                    rect: ['0', '0', '67', '86', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['28px', '19px', '37px', '46px', 'auto', 'auto'],
                        id: 'neck',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1)']
                    },
                    {
                        rect: ['0px', '0px', '49px', '84px', 'auto', 'auto'],
                        borderRadius: ['35px 35px', '0px 0px', '0px 0px', '35px 35px'],
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        id: 'head1',
                        opacity: 1,
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    },
                    {
                        rect: ['28px', '0px', '21px', '84px', 'auto', 'auto'],
                        id: 'head2',
                        stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                        type: 'rect',
                        fill: ['rgba(213,227,171,1.00)']
                    }]
                },
                {
                    rect: ['52px', '0px', '14px', '84px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'sp1',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(225,240,181,1.00)']
                },
                {
                    rect: ['67px', '0px', '14px', '84px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'sp2',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(225,240,181,1.00)']
                },
                {
                    rect: ['82px', '0px', '14px', '84px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'sp3',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(225,240,181,1.00)']
                },
                {
                    rect: ['97px', '0px', '14px', '84px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'sp4',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(225,240,181,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_valveHead}": [
                ["style", "left", '0px']
            ],
            "${_sp3}": [
                ["style", "top", '0px'],
                ["style", "left", '82px'],
                ["color", "background-color", 'rgba(225,240,181,1.00)']
            ],
            "${_head1}": [
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "border-top-left-radius", [35,35], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '49px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [35,35], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_sp4}": [
                ["style", "top", '0px'],
                ["style", "left", '97px'],
                ["color", "background-color", 'rgba(225,240,181,1.00)']
            ],
            "${_neck}": [
                ["style", "top", '19px'],
                ["style", "left", '28px'],
                ["style", "width", '37px']
            ],
            "${_sp1}": [
                ["style", "top", '0px'],
                ["style", "left", '52px'],
                ["color", "background-color", 'rgba(225,240,181,1.00)']
            ],
            "${_sp2}": [
                ["style", "top", '0px'],
                ["style", "left", '67px'],
                ["color", "background-color", 'rgba(225,240,181,1.00)']
            ],
            "${_head2}": [
                ["color", "background-color", 'rgba(213,227,171,1.00)'],
                ["style", "left", '28px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '86px'],
                ["style", "width", '113px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1533,
            autoPlay: false,
            labels: {
                "close": 33,
                "open": 800
            },
            timeline: [
                { id: "eid3", tween: [ "style", "${_sp2}", "left", '51px', { fromValue: '67px'}], position: 33, duration: 733 },
                { id: "eid10", tween: [ "style", "${_sp2}", "left", '67px', { fromValue: '51px'}], position: 800, duration: 733 },
                { id: "eid1", tween: [ "style", "${_valveHead}", "left", '-29px', { fromValue: '0px'}], position: 33, duration: 733 },
                { id: "eid12", tween: [ "style", "${_valveHead}", "left", '0px', { fromValue: '-29px'}], position: 800, duration: 733 },
                { id: "eid4", tween: [ "style", "${_sp3}", "left", '73px', { fromValue: '82px'}], position: 33, duration: 733 },
                { id: "eid9", tween: [ "style", "${_sp3}", "left", '82px', { fromValue: '73px'}], position: 800, duration: 733 },
                { id: "eid2", tween: [ "style", "${_sp1}", "left", '28px', { fromValue: '52px'}], position: 33, duration: 733 },
                { id: "eid11", tween: [ "style", "${_sp1}", "left", '52px', { fromValue: '28px'}], position: 800, duration: 733 }            ]
        }
    }
},
"LINE_MOVE": {
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
                    rect: ['0px', '0px', '133', '222', 'auto', 'auto'],
                    id: 'gear_src',
                    fill: ['rgba(0,0,0,0)', 'images/gear_src.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gear_src}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '222px'],
                ["style", "width", '133px']
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
                { id: "eid22", tween: [ "style", "${_gear_src}", "top", '-20px', { fromValue: '0px'}], position: 0, duration: 400 }            ]
        }
    }
},
"FLOW_A1": {
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
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy2',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy3',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy4',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy5',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_A1Copy5}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_flow_src_A1}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '56px']
            ],
            "${_flow_src_A1Copy4}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_flow_src_A1Copy3}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_flow_src_A1Copy}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_flow_src_A1Copy2}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 833,
            autoPlay: true,
            timeline: [
                { id: "eid40", tween: [ "style", "${_flow_src_A1Copy}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid41", tween: [ "style", "${_flow_src_A1Copy}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 },
                { id: "eid52", tween: [ "style", "${_flow_src_A1Copy5}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 250 },
                { id: "eid53", tween: [ "style", "${_flow_src_A1Copy5}", "opacity", '0', { fromValue: '1'}], position: 583, duration: 250 },
                { id: "eid46", tween: [ "style", "${_flow_src_A1Copy3}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 250 },
                { id: "eid47", tween: [ "style", "${_flow_src_A1Copy3}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 250 },
                { id: "eid39", tween: [ "style", "${_flow_src_A1Copy}", "left", '258px', { fromValue: '8px'}], position: 67, duration: 500 },
                { id: "eid30", tween: [ "style", "${_flow_src_A1}", "left", '258px', { fromValue: '8px'}], position: 0, duration: 500 },
                { id: "eid43", tween: [ "style", "${_flow_src_A1Copy2}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 250 },
                { id: "eid44", tween: [ "style", "${_flow_src_A1Copy2}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 250 },
                { id: "eid42", tween: [ "style", "${_flow_src_A1Copy2}", "left", '258px', { fromValue: '8px'}], position: 133, duration: 500 },
                { id: "eid48", tween: [ "style", "${_flow_src_A1Copy4}", "left", '258px', { fromValue: '8px'}], position: 267, duration: 500 },
                { id: "eid51", tween: [ "style", "${_flow_src_A1Copy5}", "left", '258px', { fromValue: '8px'}], position: 333, duration: 500 },
                { id: "eid45", tween: [ "style", "${_flow_src_A1Copy3}", "left", '258px', { fromValue: '8px'}], position: 200, duration: 500 },
                { id: "eid34", tween: [ "style", "${_flow_src_A1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid35", tween: [ "style", "${_flow_src_A1}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid49", tween: [ "style", "${_flow_src_A1Copy4}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 250 },
                { id: "eid50", tween: [ "style", "${_flow_src_A1Copy4}", "opacity", '0', { fromValue: '1'}], position: 517, duration: 250 }            ]
        }
    }
},
"FLOW_A2": {
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
                    rect: ['302px', '-31px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['60']],
                    id: 'flow_src_A3',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '2px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['60']],
                    id: 'flow_src_A3Copy',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '2px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['60']],
                    id: 'flow_src_A3Copy2',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '2px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['60']],
                    id: 'flow_src_A3Copy3',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '2px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['60']],
                    id: 'flow_src_A3Copy4',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '2px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['60']],
                    id: 'flow_src_A3Copy5',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['4px', '2px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['60']],
                    id: 'flow_src_A3Copy6',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_A3Copy5}": [
                ["motion", "location", '24.33px 15px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '60deg']
            ],
            "${_flow_src_A3}": [
                ["motion", "location", '24.3330078125px 15px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '60deg']
            ],
            "${_flow_src_A3Copy3}": [
                ["motion", "location", '24.33px 15px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '60deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_A3Copy6}": [
                ["motion", "location", '24.33px 15px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '60deg']
            ],
            "${_flow_src_A3Copy4}": [
                ["motion", "location", '24.33px 15px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '60deg']
            ],
            "${_flow_src_A3Copy}": [
                ["motion", "location", '24.33px 15px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '60deg']
            ],
            "${_flow_src_A3Copy2}": [
                ["motion", "location", '24.33px 15px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '60deg']
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
                { id: "eid101", tween: [ "style", "${_flow_src_A3Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 250 },
                { id: "eid108", tween: [ "style", "${_flow_src_A3Copy5}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 250 },
                { id: "eid85", tween: [ "motion", "${_flow_src_A3Copy2}", [[24.33, 15, 0, 0],[83.45, 66.93, 89.15, 16.19, 120.59, 21.9],[200.97, 71.16, 55.62, -0.5, 119.5, -1.08],[226.75, 55.27, 33.55, -14.55, 34.49, -14.96],[288.65, 50.95, 161.35, -25.57, 32.85, -5.21],[321.67, -18.33, 0, 0]]], position: 67, duration: 500 },
                { id: "eid86", tween: [ "motion", "${_flow_src_A3Copy3}", [[24.33, 15, 0, 0],[83.45, 66.93, 89.15, 16.19, 120.59, 21.9],[200.97, 71.16, 55.62, -0.5, 119.5, -1.08],[226.75, 55.27, 33.55, -14.55, 34.49, -14.96],[288.65, 50.95, 161.35, -25.57, 32.85, -5.21],[321.67, -18.33, 0, 0]]], position: 100, duration: 500 },
                { id: "eid98", tween: [ "style", "${_flow_src_A3Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 250 },
                { id: "eid105", tween: [ "style", "${_flow_src_A3Copy}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 250 },
                { id: "eid102", tween: [ "style", "${_flow_src_A3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid109", tween: [ "style", "${_flow_src_A3}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid87", tween: [ "motion", "${_flow_src_A3Copy4}", [[24.33, 15, 0, 0],[83.45, 66.93, 89.15, 16.19, 120.59, 21.9],[200.97, 71.16, 55.62, -0.5, 119.5, -1.08],[226.75, 55.27, 33.55, -14.55, 34.49, -14.96],[288.65, 50.95, 161.35, -25.57, 32.85, -5.21],[321.67, -18.33, 0, 0]]], position: 133, duration: 500 },
                { id: "eid100", tween: [ "style", "${_flow_src_A3Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 250 },
                { id: "eid107", tween: [ "style", "${_flow_src_A3Copy6}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 250 },
                { id: "eid104", tween: [ "style", "${_flow_src_A3Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 250 },
                { id: "eid111", tween: [ "style", "${_flow_src_A3Copy4}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 250 },
                { id: "eid89", tween: [ "motion", "${_flow_src_A3Copy6}", [[24.33, 15, 0, 0],[83.45, 66.93, 89.15, 16.19, 120.59, 21.9],[200.97, 71.16, 55.62, -0.5, 119.5, -1.08],[226.75, 55.27, 33.55, -14.55, 34.49, -14.96],[288.65, 50.95, 161.35, -25.57, 32.85, -5.21],[321.67, -18.33, 0, 0]]], position: 200, duration: 500 },
                { id: "eid103", tween: [ "style", "${_flow_src_A3Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid110", tween: [ "style", "${_flow_src_A3Copy2}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 },
                { id: "eid88", tween: [ "motion", "${_flow_src_A3Copy5}", [[24.33, 15, 0, 0],[83.45, 66.93, 89.15, 16.19, 120.59, 21.9],[200.97, 71.16, 55.62, -0.5, 119.5, -1.08],[226.75, 55.27, 33.55, -14.55, 34.49, -14.96],[288.65, 50.95, 161.35, -25.57, 32.85, -5.21],[321.67, -18.33, 0, 0]]], position: 167, duration: 500 },
                { id: "eid99", tween: [ "style", "${_flow_src_A3Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 250 },
                { id: "eid106", tween: [ "style", "${_flow_src_A3Copy3}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 250 },
                { id: "eid84", tween: [ "motion", "${_flow_src_A3Copy}", [[24.33, 15, 0, 0],[83.45, 66.93, 89.15, 16.19, 120.59, 21.9],[200.97, 71.16, 55.62, -0.5, 119.5, -1.08],[226.75, 55.27, 33.55, -14.55, 34.49, -14.96],[288.65, 50.95, 161.35, -25.57, 32.85, -5.21],[321.67, -18.33, 0, 0]]], position: 33, duration: 500 },
                { id: "eid83", tween: [ "motion", "${_flow_src_A3}", [[24.33, 15, 0, 0],[83.45, 66.93, 89.15, 16.19, 120.59, 21.9],[200.97, 71.16, 55.62, -0.5, 119.5, -1.08],[226.75, 55.27, 33.55, -14.55, 34.49, -14.96],[288.65, 50.95, 161.35, -25.57, 32.85, -5.21],[321.67, -18.33, 0, 0]]], position: 0, duration: 500 }            ]
        }
    }
},
"FLOW_A3": {
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
                    rect: ['242px', '-26px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['72']],
                    id: 'flow_src_A4',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['-5px', '-3px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['72']],
                    id: 'flow_src_A4Copy',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['-5px', '-3px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['72']],
                    id: 'flow_src_A4Copy2',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['-5px', '-3px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['72']],
                    id: 'flow_src_A4Copy4',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['-5px', '-3px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['72']],
                    id: 'flow_src_A4Copy3',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['-5px', '-3px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['72']],
                    id: 'flow_src_A4Copy6',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                },
                {
                    rect: ['-5px', '-3px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    transform: [[0, 0], ['72']],
                    id: 'flow_src_A4Copy5',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_A4Copy5}": [
                ["motion", "location", '15.33px 9.67px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '72deg']
            ],
            "${_flow_src_A4Copy6}": [
                ["motion", "location", '15.33px 9.67px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '72deg']
            ],
            "${_flow_src_A4Copy4}": [
                ["motion", "location", '15.33px 9.67px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '72deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_A4}": [
                ["motion", "location", '15.3330078125px 9.666015625px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '72deg']
            ],
            "${_flow_src_A4Copy3}": [
                ["motion", "location", '15.33px 9.67px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '72deg']
            ],
            "${_flow_src_A4Copy}": [
                ["motion", "location", '15.33px 9.67px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '72deg']
            ],
            "${_flow_src_A4Copy2}": [
                ["motion", "location", '15.33px 9.67px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '72deg']
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
                { id: "eid120", tween: [ "style", "${_flow_src_A4Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid121", tween: [ "style", "${_flow_src_A4Copy2}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 },
                { id: "eid114", tween: [ "style", "${_flow_src_A4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid115", tween: [ "style", "${_flow_src_A4}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid129", tween: [ "style", "${_flow_src_A4Copy5}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 250 },
                { id: "eid130", tween: [ "style", "${_flow_src_A4Copy5}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 250 },
                { id: "eid116", tween: [ "motion", "${_flow_src_A4Copy}", [[15.33, 9.67, 0, 0],[75.91, 82.99, 49.3, -1.81, 121.14, -4.44],[131.85, 47.65, 51.55, -100.81, 49.77, -97.34],[178.9, -0.6, 83.6, -24.3, 51.89, -15.09],[262, -13, 0, 0]]], position: 33, duration: 500 },
                { id: "eid131", tween: [ "motion", "${_flow_src_A4Copy6}", [[15.33, 9.67, 0, 0],[75.91, 82.99, 49.3, -1.81, 121.14, -4.44],[131.85, 47.65, 51.55, -100.81, 49.77, -97.34],[178.9, -0.6, 83.6, -24.3, 51.89, -15.09],[262, -13, 0, 0]]], position: 167, duration: 500 },
                { id: "eid117", tween: [ "style", "${_flow_src_A4Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 250 },
                { id: "eid118", tween: [ "style", "${_flow_src_A4Copy}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 250 },
                { id: "eid132", tween: [ "style", "${_flow_src_A4Copy6}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 250 },
                { id: "eid133", tween: [ "style", "${_flow_src_A4Copy6}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 250 },
                { id: "eid122", tween: [ "motion", "${_flow_src_A4Copy3}", [[15.33, 9.67, 0, 0],[75.91, 82.99, 49.3, -1.81, 121.14, -4.44],[131.85, 47.65, 51.55, -100.81, 49.77, -97.34],[178.9, -0.6, 83.6, -24.3, 51.89, -15.09],[262, -13, 0, 0]]], position: 133, duration: 500 },
                { id: "eid119", tween: [ "motion", "${_flow_src_A4Copy2}", [[15.33, 9.67, 0, 0],[75.91, 82.99, 49.3, -1.81, 121.14, -4.44],[131.85, 47.65, 51.55, -100.81, 49.77, -97.34],[178.9, -0.6, 83.6, -24.3, 51.89, -15.09],[262, -13, 0, 0]]], position: 67, duration: 500 },
                { id: "eid123", tween: [ "style", "${_flow_src_A4Copy3}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 250 },
                { id: "eid124", tween: [ "style", "${_flow_src_A4Copy3}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 250 },
                { id: "eid126", tween: [ "style", "${_flow_src_A4Copy4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 250 },
                { id: "eid127", tween: [ "style", "${_flow_src_A4Copy4}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 250 },
                { id: "eid112", tween: [ "motion", "${_flow_src_A4}", [[15.33, 9.67, 0, 0],[75.91, 82.99, 49.3, -1.81, 121.14, -4.44],[131.85, 47.65, 51.55, -100.81, 49.77, -97.34],[178.9, -0.6, 83.6, -24.3, 51.89, -15.09],[262, -13, 0, 0]]], position: 0, duration: 500 },
                { id: "eid125", tween: [ "motion", "${_flow_src_A4Copy4}", [[15.33, 9.67, 0, 0],[75.91, 82.99, 49.3, -1.81, 121.14, -4.44],[131.85, 47.65, 51.55, -100.81, 49.77, -97.34],[178.9, -0.6, 83.6, -24.3, 51.89, -15.09],[262, -13, 0, 0]]], position: 100, duration: 500 },
                { id: "eid128", tween: [ "motion", "${_flow_src_A4Copy5}", [[15.33, 9.67, 0, 0],[75.91, 82.99, 49.3, -1.81, 121.14, -4.44],[131.85, 47.65, 51.55, -100.81, 49.77, -97.34],[178.9, -0.6, 83.6, -24.3, 51.89, -15.09],[262, -13, 0, 0]]], position: 200, duration: 500 }            ]
        }
    }
},
"FLOW_B1": {
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
                    tag: 'img',
                    id: 'flow_src_B1',
                    rect: ['419px', '-58px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B1Copy',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B1Copy3',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B1Copy2',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B1Copy4',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B1Copy5',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B1Copy6',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_B1Copy5}": [
                ["motion", "location", '21.33px 14.33px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B1Copy4}": [
                ["motion", "location", '21.33px 14.33px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B1Copy2}": [
                ["motion", "location", '21.33px 14.33px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_B1Copy3}": [
                ["motion", "location", '21.33px 14.33px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B1Copy6}": [
                ["motion", "location", '21.33px 14.33px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B1}": [
                ["motion", "location", '21.3330078125px 14.33349609375px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B1Copy}": [
                ["motion", "location", '21.33px 14.33px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 934,
            autoPlay: true,
            timeline: [
                { id: "eid142", tween: [ "style", "${_flow_src_B1Copy2}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 367 },
                { id: "eid143", tween: [ "style", "${_flow_src_B1Copy2}", "opacity", '0', { fromValue: '1'}], position: 467, duration: 367 },
                { id: "eid141", tween: [ "motion", "${_flow_src_B1Copy2}", [[21.33, 14.33, 0, 0],[73.28, 15.12, 97.77, 1.77, 76.3, 1.38],[122.53, -21.89, 34.99, -30.81, 38.19, -33.63],[183.19, -46.14, 339.22, 2.64, 113.83, 0.89],[439, -45, 0, 0]]], position: 100, duration: 733 },
                { id: "eid148", tween: [ "style", "${_flow_src_B1Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 367 },
                { id: "eid149", tween: [ "style", "${_flow_src_B1Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 367 },
                { id: "eid154", tween: [ "style", "${_flow_src_B1Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 367 },
                { id: "eid155", tween: [ "style", "${_flow_src_B1Copy6}", "opacity", '0', { fromValue: '1'}], position: 567, duration: 367 },
                { id: "eid153", tween: [ "motion", "${_flow_src_B1Copy6}", [[21.33, 14.33, 0, 0],[73.28, 15.12, 97.77, 1.77, 76.3, 1.38],[122.53, -21.89, 34.99, -30.81, 38.19, -33.63],[183.19, -46.14, 339.22, 2.64, 113.83, 0.89],[439, -45, 0, 0]]], position: 200, duration: 733 },
                { id: "eid147", tween: [ "motion", "${_flow_src_B1Copy4}", [[21.33, 14.33, 0, 0],[73.28, 15.12, 97.77, 1.77, 76.3, 1.38],[122.53, -21.89, 34.99, -30.81, 38.19, -33.63],[183.19, -46.14, 339.22, 2.64, 113.83, 0.89],[439, -45, 0, 0]]], position: 133, duration: 733 },
                { id: "eid138", tween: [ "motion", "${_flow_src_B1Copy}", [[21.33, 14.33, 0, 0],[73.28, 15.12, 97.77, 1.77, 76.3, 1.38],[122.53, -21.89, 34.99, -30.81, 38.19, -33.63],[183.19, -46.14, 339.22, 2.64, 113.83, 0.89],[439, -45, 0, 0]]], position: 33, duration: 733 },
                { id: "eid144", tween: [ "motion", "${_flow_src_B1Copy3}", [[21.33, 14.33, 0, 0],[73.28, 15.12, 97.77, 1.77, 76.3, 1.38],[122.53, -21.89, 34.99, -30.81, 38.19, -33.63],[183.19, -46.14, 339.22, 2.64, 113.83, 0.89],[439, -45, 0, 0]]], position: 67, duration: 733 },
                { id: "eid151", tween: [ "style", "${_flow_src_B1Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 367 },
                { id: "eid152", tween: [ "style", "${_flow_src_B1Copy5}", "opacity", '0', { fromValue: '1'}], position: 533, duration: 367 },
                { id: "eid150", tween: [ "motion", "${_flow_src_B1Copy5}", [[21.33, 14.33, 0, 0],[73.28, 15.12, 97.77, 1.77, 76.3, 1.38],[122.53, -21.89, 34.99, -30.81, 38.19, -33.63],[183.19, -46.14, 339.22, 2.64, 113.83, 0.89],[439, -45, 0, 0]]], position: 167, duration: 733 },
                { id: "eid139", tween: [ "style", "${_flow_src_B1Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 367 },
                { id: "eid140", tween: [ "style", "${_flow_src_B1Copy}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 367 },
                { id: "eid145", tween: [ "style", "${_flow_src_B1Copy3}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 367 },
                { id: "eid146", tween: [ "style", "${_flow_src_B1Copy3}", "opacity", '0', { fromValue: '1'}], position: 433, duration: 367 },
                { id: "eid136", tween: [ "style", "${_flow_src_B1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 367 },
                { id: "eid137", tween: [ "style", "${_flow_src_B1}", "opacity", '0', { fromValue: '1'}], position: 367, duration: 367 },
                { id: "eid134", tween: [ "motion", "${_flow_src_B1}", [[21.33, 14.33, 0, 0],[73.28, 15.12, 97.77, 1.77, 76.3, 1.38],[122.53, -21.89, 34.99, -30.81, 38.19, -33.63],[183.19, -46.14, 339.22, 2.64, 113.83, 0.89],[439, -45, 0, 0]]], position: 0, duration: 733 }            ]
        }
    }
},
"FLOW_B2": {
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
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B2',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B2Copy',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B2Copy2',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B2Copy3',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B2Copy4',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B2Copy5',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B2Copy6',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_B2Copy6}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B2Copy3}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B2Copy2}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_B2Copy}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B2}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B2Copy5}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B2Copy4}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
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
                { id: "eid161", tween: [ "motion", "${_flow_src_B2Copy3}", [[20, 13, 0, 0],[50.58, 34.89, 56.59, 4.44, 89.17, 6.99],[81.25, 52.61, 34.91, 55.82, 33.11, 52.94],[132.11, 80.54, 141.37, 0.79, 107.28, 0.6],[233.33, 79, 0, 0]]], position: 100, duration: 500 },
                { id: "eid163", tween: [ "motion", "${_flow_src_B2Copy5}", [[20, 13, 0, 0],[50.58, 34.89, 56.59, 4.44, 89.17, 6.99],[81.25, 52.61, 34.91, 55.82, 33.11, 52.94],[132.11, 80.54, 141.37, 0.79, 107.28, 0.6],[233.33, 79, 0, 0]]], position: 167, duration: 500 },
                { id: "eid173", tween: [ "style", "${_flow_src_B2Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 250 },
                { id: "eid182", tween: [ "style", "${_flow_src_B2Copy5}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 250 },
                { id: "eid175", tween: [ "style", "${_flow_src_B2Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 250 },
                { id: "eid183", tween: [ "style", "${_flow_src_B2Copy}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 250 },
                { id: "eid157", tween: [ "motion", "${_flow_src_B2}", [[20, 13, 0, 0],[50.58, 34.89, 56.59, 4.44, 89.17, 6.99],[81.25, 52.61, 34.91, 55.82, 33.11, 52.94],[132.11, 80.54, 141.37, 0.79, 107.28, 0.6],[233.33, 79, 0, 0]]], position: 0, duration: 500 },
                { id: "eid166", tween: [ "style", "${_flow_src_B2Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 250 },
                { id: "eid167", tween: [ "style", "${_flow_src_B2Copy4}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 250 },
                { id: "eid169", tween: [ "style", "${_flow_src_B2Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid180", tween: [ "style", "${_flow_src_B2Copy2}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 },
                { id: "eid160", tween: [ "motion", "${_flow_src_B2Copy2}", [[20, 13, 0, 0],[50.58, 34.89, 56.59, 4.44, 89.17, 6.99],[81.25, 52.61, 34.91, 55.82, 33.11, 52.94],[132.11, 80.54, 141.37, 0.79, 107.28, 0.6],[233.33, 79, 0, 0]]], position: 67, duration: 500 },
                { id: "eid171", tween: [ "style", "${_flow_src_B2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid181", tween: [ "style", "${_flow_src_B2}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid164", tween: [ "motion", "${_flow_src_B2Copy6}", [[20, 13, 0, 0],[50.58, 34.89, 56.59, 4.44, 89.17, 6.99],[81.25, 52.61, 34.91, 55.82, 33.11, 52.94],[132.11, 80.54, 141.37, 0.79, 107.28, 0.6],[233.33, 79, 0, 0]]], position: 200, duration: 500 },
                { id: "eid162", tween: [ "motion", "${_flow_src_B2Copy4}", [[20, 13, 0, 0],[50.58, 34.89, 56.59, 4.44, 89.17, 6.99],[81.25, 52.61, 34.91, 55.82, 33.11, 52.94],[132.11, 80.54, 141.37, 0.79, 107.28, 0.6],[233.33, 79, 0, 0]]], position: 133, duration: 500 },
                { id: "eid159", tween: [ "motion", "${_flow_src_B2Copy}", [[20, 13, 0, 0],[50.58, 34.89, 56.59, 4.44, 89.17, 6.99],[81.25, 52.61, 34.91, 55.82, 33.11, 52.94],[132.11, 80.54, 141.37, 0.79, 107.28, 0.6],[233.33, 79, 0, 0]]], position: 33, duration: 500 },
                { id: "eid177", tween: [ "style", "${_flow_src_B2Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 250 },
                { id: "eid184", tween: [ "style", "${_flow_src_B2Copy6}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 250 },
                { id: "eid179", tween: [ "style", "${_flow_src_B2Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 250 },
                { id: "eid185", tween: [ "style", "${_flow_src_B2Copy3}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 250 }            ]
        }
    }
},
"FLOW_B3": {
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
                    transform: [[0, 0], ['24']],
                    tag: 'img',
                    rect: ['308px', '138px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B3',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['24']],
                    tag: 'img',
                    rect: ['7px', '5px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B3Copy',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['24']],
                    tag: 'img',
                    rect: ['7px', '5px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B3Copy2',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['24']],
                    tag: 'img',
                    rect: ['7px', '5px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B3Copy3',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['24']],
                    tag: 'img',
                    rect: ['7px', '5px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B3Copy4',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['24']],
                    tag: 'img',
                    rect: ['7px', '5px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B3Copy5',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['24']],
                    tag: 'img',
                    rect: ['7px', '5px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B3Copy6',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_B3Copy5}": [
                ["motion", "location", '27px 18px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '24deg']
            ],
            "${_flow_src_B3Copy3}": [
                ["motion", "location", '27px 18px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '24deg']
            ],
            "${_flow_src_B3Copy2}": [
                ["motion", "location", '27px 18px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '24deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_B3Copy}": [
                ["motion", "location", '27px 18px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '24deg']
            ],
            "${_flow_src_B3Copy6}": [
                ["motion", "location", '27px 18px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '24deg']
            ],
            "${_flow_src_B3Copy4}": [
                ["motion", "location", '27px 18px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '24deg']
            ],
            "${_flow_src_B3}": [
                ["motion", "location", '27px 18px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '24deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: true,
            timeline: [
                { id: "eid194", tween: [ "style", "${_flow_src_B3Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 333 },
                { id: "eid195", tween: [ "style", "${_flow_src_B3Copy2}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 333 },
                { id: "eid196", tween: [ "motion", "${_flow_src_B3Copy3}", [[27, 18, 0, 0],[59.64, 2.73, 14.34, -23.02, 42.63, -68.43],[80.71, -21.15, 32.11, -0.23, 80.1, -0.58],[180.18, -21.24, 118.16, 12.15, 62.63, 6.44],[215.23, 17.08, 28.75, 106.13, 10.78, 39.78],[257.52, 86.06, 60.89, 66.62, 36.16, 39.56],[321.5, 151.5, 0, 0]]], position: 100, duration: 667 },
                { id: "eid190", tween: [ "motion", "${_flow_src_B3Copy}", [[27, 18, 0, 0],[59.64, 2.73, 14.34, -23.02, 42.63, -68.43],[80.71, -21.15, 32.11, -0.23, 80.1, -0.58],[180.18, -21.24, 118.16, 12.15, 62.63, 6.44],[215.23, 17.08, 28.75, 106.13, 10.78, 39.78],[257.52, 86.06, 60.89, 66.62, 36.16, 39.56],[321.5, 151.5, 0, 0]]], position: 33, duration: 667 },
                { id: "eid206", tween: [ "style", "${_flow_src_B3Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 333 },
                { id: "eid207", tween: [ "style", "${_flow_src_B3Copy6}", "opacity", '0', { fromValue: '1'}], position: 533, duration: 333 },
                { id: "eid197", tween: [ "style", "${_flow_src_B3Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 333 },
                { id: "eid198", tween: [ "style", "${_flow_src_B3Copy3}", "opacity", '0', { fromValue: '1'}], position: 433, duration: 333 },
                { id: "eid199", tween: [ "motion", "${_flow_src_B3Copy4}", [[27, 18, 0, 0],[59.64, 2.73, 14.34, -23.02, 42.63, -68.43],[80.71, -21.15, 32.11, -0.23, 80.1, -0.58],[180.18, -21.24, 118.16, 12.15, 62.63, 6.44],[215.23, 17.08, 28.75, 106.13, 10.78, 39.78],[257.52, 86.06, 60.89, 66.62, 36.16, 39.56],[321.5, 151.5, 0, 0]]], position: 133, duration: 667 },
                { id: "eid186", tween: [ "motion", "${_flow_src_B3}", [[27, 18, 0, 0],[59.64, 2.73, 14.34, -23.02, 42.63, -68.43],[80.71, -21.15, 32.11, -0.23, 80.1, -0.58],[180.18, -21.24, 118.16, 12.15, 62.63, 6.44],[215.23, 17.08, 28.75, 106.13, 10.78, 39.78],[257.52, 86.06, 60.89, 66.62, 36.16, 39.56],[321.5, 151.5, 0, 0]]], position: 0, duration: 667 },
                { id: "eid188", tween: [ "style", "${_flow_src_B3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333 },
                { id: "eid189", tween: [ "style", "${_flow_src_B3}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 333 },
                { id: "eid193", tween: [ "motion", "${_flow_src_B3Copy2}", [[27, 18, 0, 0],[59.64, 2.73, 14.34, -23.02, 42.63, -68.43],[80.71, -21.15, 32.11, -0.23, 80.1, -0.58],[180.18, -21.24, 118.16, 12.15, 62.63, 6.44],[215.23, 17.08, 28.75, 106.13, 10.78, 39.78],[257.52, 86.06, 60.89, 66.62, 36.16, 39.56],[321.5, 151.5, 0, 0]]], position: 67, duration: 667 },
                { id: "eid202", tween: [ "motion", "${_flow_src_B3Copy5}", [[27, 18, 0, 0],[59.64, 2.73, 14.34, -23.02, 42.63, -68.43],[80.71, -21.15, 32.11, -0.23, 80.1, -0.58],[180.18, -21.24, 118.16, 12.15, 62.63, 6.44],[215.23, 17.08, 28.75, 106.13, 10.78, 39.78],[257.52, 86.06, 60.89, 66.62, 36.16, 39.56],[321.5, 151.5, 0, 0]]], position: 167, duration: 667 },
                { id: "eid191", tween: [ "style", "${_flow_src_B3Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 333 },
                { id: "eid192", tween: [ "style", "${_flow_src_B3Copy}", "opacity", '0', { fromValue: '1'}], position: 367, duration: 333 },
                { id: "eid205", tween: [ "motion", "${_flow_src_B3Copy6}", [[27, 18, 0, 0],[59.64, 2.73, 14.34, -23.02, 42.63, -68.43],[80.71, -21.15, 32.11, -0.23, 80.1, -0.58],[180.18, -21.24, 118.16, 12.15, 62.63, 6.44],[215.23, 17.08, 28.75, 106.13, 10.78, 39.78],[257.52, 86.06, 60.89, 66.62, 36.16, 39.56],[321.5, 151.5, 0, 0]]], position: 200, duration: 667 },
                { id: "eid203", tween: [ "style", "${_flow_src_B3Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 333 },
                { id: "eid204", tween: [ "style", "${_flow_src_B3Copy5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 333 },
                { id: "eid200", tween: [ "style", "${_flow_src_B3Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 333 },
                { id: "eid201", tween: [ "style", "${_flow_src_B3Copy4}", "opacity", '0', { fromValue: '1'}], position: 467, duration: 333 }            ]
        }
    }
},
"FLOW_B4": {
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
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['460px', '-20px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B4',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['3px', '-4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B4Copy',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['3px', '-4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B4Copy2',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['3px', '-4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B4Copy3',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['3px', '-4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B4Copy4',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['3px', '-4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B4Copy5',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['90']],
                    tag: 'img',
                    rect: ['3px', '-4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B4Copy6',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_B4Copy}": [
                ["motion", "location", '22.5px 9px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B4}": [
                ["motion", "location", '22.5px 9px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_B4Copy3}": [
                ["motion", "location", '22.5px 9px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B4Copy6}": [
                ["motion", "location", '22.5px 9px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B4Copy2}": [
                ["motion", "location", '22.5px 9px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B4Copy4}": [
                ["motion", "location", '22.5px 9px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_flow_src_B4Copy5}": [
                ["motion", "location", '22.5px 9px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '90deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: true,
            timeline: [
                { id: "eid220", tween: [ "style", "${_flow_src_B4Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 333 },
                { id: "eid221", tween: [ "style", "${_flow_src_B4Copy3}", "opacity", '0', { fromValue: '1'}], position: 433, duration: 333 },
                { id: "eid225", tween: [ "motion", "${_flow_src_B4Copy5}", [[22.5, 9, 0, 0],[90.74, 86.47, 239.18, 4.33, 187.4, 3.4],[410.08, 86.06, 218.56, -6.66, 236.59, -7.21],[480, -7, 0, 0]]], position: 167, duration: 667 },
                { id: "eid222", tween: [ "motion", "${_flow_src_B4Copy4}", [[22.5, 9, 0, 0],[90.74, 86.47, 239.18, 4.33, 187.4, 3.4],[410.08, 86.06, 218.56, -6.66, 236.59, -7.21],[480, -7, 0, 0]]], position: 133, duration: 667 },
                { id: "eid214", tween: [ "style", "${_flow_src_B4Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 333 },
                { id: "eid215", tween: [ "style", "${_flow_src_B4Copy}", "opacity", '0', { fromValue: '1'}], position: 367, duration: 333 },
                { id: "eid217", tween: [ "style", "${_flow_src_B4Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 333 },
                { id: "eid218", tween: [ "style", "${_flow_src_B4Copy2}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 333 },
                { id: "eid216", tween: [ "motion", "${_flow_src_B4Copy2}", [[22.5, 9, 0, 0],[90.74, 86.47, 239.18, 4.33, 187.4, 3.4],[410.08, 86.06, 218.56, -6.66, 236.59, -7.21],[480, -7, 0, 0]]], position: 67, duration: 667 },
                { id: "eid223", tween: [ "style", "${_flow_src_B4Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 333 },
                { id: "eid224", tween: [ "style", "${_flow_src_B4Copy4}", "opacity", '0', { fromValue: '1'}], position: 467, duration: 333 },
                { id: "eid219", tween: [ "motion", "${_flow_src_B4Copy3}", [[22.5, 9, 0, 0],[90.74, 86.47, 239.18, 4.33, 187.4, 3.4],[410.08, 86.06, 218.56, -6.66, 236.59, -7.21],[480, -7, 0, 0]]], position: 100, duration: 667 },
                { id: "eid213", tween: [ "motion", "${_flow_src_B4Copy}", [[22.5, 9, 0, 0],[90.74, 86.47, 239.18, 4.33, 187.4, 3.4],[410.08, 86.06, 218.56, -6.66, 236.59, -7.21],[480, -7, 0, 0]]], position: 33, duration: 667 },
                { id: "eid208", tween: [ "motion", "${_flow_src_B4}", [[22.5, 9, 0, 0],[90.74, 86.47, 239.18, 4.33, 187.4, 3.4],[410.08, 86.06, 218.56, -6.66, 236.59, -7.21],[480, -7, 0, 0]]], position: 0, duration: 667 },
                { id: "eid229", tween: [ "style", "${_flow_src_B4Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 333 },
                { id: "eid230", tween: [ "style", "${_flow_src_B4Copy6}", "opacity", '0', { fromValue: '1'}], position: 533, duration: 333 },
                { id: "eid228", tween: [ "motion", "${_flow_src_B4Copy6}", [[22.5, 9, 0, 0],[90.74, 86.47, 239.18, 4.33, 187.4, 3.4],[410.08, 86.06, 218.56, -6.66, 236.59, -7.21],[480, -7, 0, 0]]], position: 200, duration: 667 },
                { id: "eid226", tween: [ "style", "${_flow_src_B4Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 333 },
                { id: "eid227", tween: [ "style", "${_flow_src_B4Copy5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 333 },
                { id: "eid211", tween: [ "style", "${_flow_src_B4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333 },
                { id: "eid212", tween: [ "style", "${_flow_src_B4}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 333 }            ]
        }
    }
},
"FLOW_B5": {
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
                    transform: [[0, 0], ['-24']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B5',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['-24']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B5Copy',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['-24']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B5Copy2',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['-24']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B5Copy3',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['-24']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B5Copy4',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['-24']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B5Copy5',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['-24']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_B5Copy6',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_B5Copy5}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_flow_src_B5Copy}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_B5Copy2}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_flow_src_B5}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_flow_src_B5Copy6}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_flow_src_B5Copy3}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_flow_src_B5Copy4}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0'],
                ["transform", "rotateZ", '0deg']
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
                { id: "eid249", tween: [ "style", "${_flow_src_B5Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 250 },
                { id: "eid250", tween: [ "style", "${_flow_src_B5Copy3}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 250 },
                { id: "eid252", tween: [ "motion", "${_flow_src_B5Copy4}", [[20, 13, 0, 0],[48.11, 28.61, 22.57, 24.39, 55.01, 59.44],[73.54, 48.07, 97.81, 39.02, 35.43, 14.14],[187.67, 17.12, 24.2, -116.27, 28.21, -135.54],[212, -141, 0, 0]]], position: 133, duration: 500 },
                { id: "eid251", tween: [ "transform", "${_flow_src_B5Copy3}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 100, duration: 500 },
                { id: "eid239", tween: [ "transform", "${_flow_src_B5}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid256", tween: [ "motion", "${_flow_src_B5Copy5}", [[20, 13, 0, 0],[48.11, 28.61, 22.57, 24.39, 55.01, 59.44],[73.54, 48.07, 97.81, 39.02, 35.43, 14.14],[187.67, 17.12, 24.2, -116.27, 28.21, -135.54],[212, -141, 0, 0]]], position: 167, duration: 500 },
                { id: "eid241", tween: [ "style", "${_flow_src_B5Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 250 },
                { id: "eid242", tween: [ "style", "${_flow_src_B5Copy}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 250 },
                { id: "eid253", tween: [ "style", "${_flow_src_B5Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 250 },
                { id: "eid254", tween: [ "style", "${_flow_src_B5Copy4}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 250 },
                { id: "eid243", tween: [ "transform", "${_flow_src_B5Copy}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 33, duration: 500 },
                { id: "eid261", tween: [ "style", "${_flow_src_B5Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 250 },
                { id: "eid262", tween: [ "style", "${_flow_src_B5Copy6}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 250 },
                { id: "eid244", tween: [ "motion", "${_flow_src_B5Copy2}", [[20, 13, 0, 0],[48.11, 28.61, 22.57, 24.39, 55.01, 59.44],[73.54, 48.07, 97.81, 39.02, 35.43, 14.14],[187.67, 17.12, 24.2, -116.27, 28.21, -135.54],[212, -141, 0, 0]]], position: 67, duration: 500 },
                { id: "eid234", tween: [ "style", "${_flow_src_B5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid237", tween: [ "style", "${_flow_src_B5}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid245", tween: [ "style", "${_flow_src_B5Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid246", tween: [ "style", "${_flow_src_B5Copy2}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 },
                { id: "eid263", tween: [ "transform", "${_flow_src_B5Copy6}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 200, duration: 500 },
                { id: "eid240", tween: [ "motion", "${_flow_src_B5Copy}", [[20, 13, 0, 0],[48.11, 28.61, 22.57, 24.39, 55.01, 59.44],[73.54, 48.07, 97.81, 39.02, 35.43, 14.14],[187.67, 17.12, 24.2, -116.27, 28.21, -135.54],[212, -141, 0, 0]]], position: 33, duration: 500 },
                { id: "eid247", tween: [ "transform", "${_flow_src_B5Copy2}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 67, duration: 500 },
                { id: "eid231", tween: [ "motion", "${_flow_src_B5}", [[20, 13, 0, 0],[48.11, 28.61, 22.57, 24.39, 55.01, 59.44],[73.54, 48.07, 97.81, 39.02, 35.43, 14.14],[187.67, 17.12, 24.2, -116.27, 28.21, -135.54],[212, -141, 0, 0]]], position: 0, duration: 500 },
                { id: "eid260", tween: [ "motion", "${_flow_src_B5Copy6}", [[20, 13, 0, 0],[48.11, 28.61, 22.57, 24.39, 55.01, 59.44],[73.54, 48.07, 97.81, 39.02, 35.43, 14.14],[187.67, 17.12, 24.2, -116.27, 28.21, -135.54],[212, -141, 0, 0]]], position: 200, duration: 500 },
                { id: "eid257", tween: [ "style", "${_flow_src_B5Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 250 },
                { id: "eid258", tween: [ "style", "${_flow_src_B5Copy5}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 250 },
                { id: "eid259", tween: [ "transform", "${_flow_src_B5Copy5}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 167, duration: 500 },
                { id: "eid255", tween: [ "transform", "${_flow_src_B5Copy4}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 133, duration: 500 },
                { id: "eid248", tween: [ "motion", "${_flow_src_B5Copy3}", [[20, 13, 0, 0],[48.11, 28.61, 22.57, 24.39, 55.01, 59.44],[73.54, 48.07, 97.81, 39.02, 35.43, 14.14],[187.67, 17.12, 24.2, -116.27, 28.21, -135.54],[212, -141, 0, 0]]], position: 100, duration: 500 }            ]
        }
    }
},
"FLOW_B6": {
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
                    tag: 'img',
                    id: 'flow_src_B6',
                    rect: ['165px', '-45px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B6Copy',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B6Copy2',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B6Copy3',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B6Copy4',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B6Copy5',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B6Copy6',
                    rect: ['1px', '1px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_B6Copy3}": [
                ["motion", "location", '20.67px 14px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B6Copy}": [
                ["motion", "location", '20.67px 14px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B6Copy4}": [
                ["motion", "location", '20.67px 14px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_B6Copy2}": [
                ["motion", "location", '20.67px 14px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B6Copy6}": [
                ["motion", "location", '20.67px 14px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B6Copy5}": [
                ["motion", "location", '20.67px 14px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B6}": [
                ["motion", "location", '20.6669921875px 14px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 634,
            autoPlay: true,
            timeline: [
                { id: "eid278", tween: [ "style", "${_flow_src_B6Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 217 },
                { id: "eid279", tween: [ "style", "${_flow_src_B6Copy4}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 217 },
                { id: "eid283", tween: [ "motion", "${_flow_src_B6Copy6}", [[20.67, 14, 0, 0],[46.48, 14.05, 40.37, -1.1, 47.56, -1.3],[72.37, 5.26, 29.18, -27.78, 32.88, -31.3],[100.92, -23.95, 18.89, -17.95, 32.05, -30.47],[127.46, -31.7, 66.01, 0.49, 52.32, 0.39],[185, -32, 0, 0]]], position: 200, duration: 433 },
                { id: "eid281", tween: [ "style", "${_flow_src_B6Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 217 },
                { id: "eid282", tween: [ "style", "${_flow_src_B6Copy5}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 217 },
                { id: "eid274", tween: [ "motion", "${_flow_src_B6Copy3}", [[20.67, 14, 0, 0],[46.48, 14.05, 40.37, -1.1, 47.56, -1.3],[72.37, 5.26, 29.18, -27.78, 32.88, -31.3],[100.92, -23.95, 18.89, -17.95, 32.05, -30.47],[127.46, -31.7, 66.01, 0.49, 52.32, 0.39],[185, -32, 0, 0]]], position: 100, duration: 433 },
                { id: "eid272", tween: [ "style", "${_flow_src_B6Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 217 },
                { id: "eid273", tween: [ "style", "${_flow_src_B6Copy2}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 217 },
                { id: "eid277", tween: [ "motion", "${_flow_src_B6Copy4}", [[20.67, 14, 0, 0],[46.48, 14.05, 40.37, -1.1, 47.56, -1.3],[72.37, 5.26, 29.18, -27.78, 32.88, -31.3],[100.92, -23.95, 18.89, -17.95, 32.05, -30.47],[127.46, -31.7, 66.01, 0.49, 52.32, 0.39],[185, -32, 0, 0]]], position: 133, duration: 433 },
                { id: "eid269", tween: [ "style", "${_flow_src_B6Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 217 },
                { id: "eid270", tween: [ "style", "${_flow_src_B6Copy}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 217 },
                { id: "eid264", tween: [ "motion", "${_flow_src_B6}", [[20.67, 14, 0, 0],[46.48, 14.05, 40.37, -1.1, 47.56, -1.3],[72.37, 5.26, 29.18, -27.78, 32.88, -31.3],[100.92, -23.95, 18.89, -17.95, 32.05, -30.47],[127.46, -31.7, 66.01, 0.49, 52.32, 0.39],[185, -32, 0, 0]]], position: 0, duration: 433 },
                { id: "eid275", tween: [ "style", "${_flow_src_B6Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 217 },
                { id: "eid276", tween: [ "style", "${_flow_src_B6Copy3}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 217 },
                { id: "eid268", tween: [ "motion", "${_flow_src_B6Copy}", [[20.67, 14, 0, 0],[46.48, 14.05, 40.37, -1.1, 47.56, -1.3],[72.37, 5.26, 29.18, -27.78, 32.88, -31.3],[100.92, -23.95, 18.89, -17.95, 32.05, -30.47],[127.46, -31.7, 66.01, 0.49, 52.32, 0.39],[185, -32, 0, 0]]], position: 33, duration: 433 },
                { id: "eid284", tween: [ "style", "${_flow_src_B6Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 217 },
                { id: "eid285", tween: [ "style", "${_flow_src_B6Copy6}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 217 },
                { id: "eid271", tween: [ "motion", "${_flow_src_B6Copy2}", [[20.67, 14, 0, 0],[46.48, 14.05, 40.37, -1.1, 47.56, -1.3],[72.37, 5.26, 29.18, -27.78, 32.88, -31.3],[100.92, -23.95, 18.89, -17.95, 32.05, -30.47],[127.46, -31.7, 66.01, 0.49, 52.32, 0.39],[185, -32, 0, 0]]], position: 67, duration: 433 },
                { id: "eid266", tween: [ "style", "${_flow_src_B6}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 217 },
                { id: "eid267", tween: [ "style", "${_flow_src_B6}", "opacity", '0', { fromValue: '1'}], position: 217, duration: 217 },
                { id: "eid280", tween: [ "motion", "${_flow_src_B6Copy5}", [[20.67, 14, 0, 0],[46.48, 14.05, 40.37, -1.1, 47.56, -1.3],[72.37, 5.26, 29.18, -27.78, 32.88, -31.3],[100.92, -23.95, 18.89, -17.95, 32.05, -30.47],[127.46, -31.7, 66.01, 0.49, 52.32, 0.39],[185, -32, 0, 0]]], position: 167, duration: 433 }            ]
        }
    }
},
"FLOW_B7": {
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
                    tag: 'img',
                    id: 'flow_src_B7',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B7Copy',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B7Copy2',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B7Copy3',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B7Copy4',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B7Copy5',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    type: 'image',
                    tag: 'img',
                    id: 'flow_src_B7Copy6',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_B7Copy2}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B7Copy}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B7Copy5}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_B7Copy3}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B7}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B7Copy6}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0']
            ],
            "${_flow_src_B7Copy4}": [
                ["motion", "location", '20px 13px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 634,
            autoPlay: true,
            timeline: [
                { id: "eid294", tween: [ "style", "${_flow_src_B7Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 217 },
                { id: "eid295", tween: [ "style", "${_flow_src_B7Copy2}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 217 },
                { id: "eid296", tween: [ "motion", "${_flow_src_B7Copy3}", [[20, 13, 0, 0],[50.81, 12.56, 22.21, -0.3, 45.69, -0.62],[76.09, 24.52, 20.64, 25.29, 21.22, 26.01],[105.9, 53.53, 18.89, 19.51, 24.37, 25.17],[128.47, 59.5, 95.94, -0.96, 25.57, -0.26],[183, 59, 0, 0]]], position: 100, duration: 433 },
                { id: "eid291", tween: [ "style", "${_flow_src_B7Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 217 },
                { id: "eid292", tween: [ "style", "${_flow_src_B7Copy}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 217 },
                { id: "eid297", tween: [ "style", "${_flow_src_B7Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 217 },
                { id: "eid298", tween: [ "style", "${_flow_src_B7Copy3}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 217 },
                { id: "eid299", tween: [ "motion", "${_flow_src_B7Copy4}", [[20, 13, 0, 0],[50.81, 12.56, 22.21, -0.3, 45.69, -0.62],[76.09, 24.52, 20.64, 25.29, 21.22, 26.01],[105.9, 53.53, 18.89, 19.51, 24.37, 25.17],[128.47, 59.5, 95.94, -0.96, 25.57, -0.26],[183, 59, 0, 0]]], position: 133, duration: 433 },
                { id: "eid290", tween: [ "motion", "${_flow_src_B7Copy}", [[20, 13, 0, 0],[50.81, 12.56, 22.21, -0.3, 45.69, -0.62],[76.09, 24.52, 20.64, 25.29, 21.22, 26.01],[105.9, 53.53, 18.89, 19.51, 24.37, 25.17],[128.47, 59.5, 95.94, -0.96, 25.57, -0.26],[183, 59, 0, 0]]], position: 33, duration: 433 },
                { id: "eid293", tween: [ "motion", "${_flow_src_B7Copy2}", [[20, 13, 0, 0],[50.81, 12.56, 22.21, -0.3, 45.69, -0.62],[76.09, 24.52, 20.64, 25.29, 21.22, 26.01],[105.9, 53.53, 18.89, 19.51, 24.37, 25.17],[128.47, 59.5, 95.94, -0.96, 25.57, -0.26],[183, 59, 0, 0]]], position: 67, duration: 433 },
                { id: "eid305", tween: [ "motion", "${_flow_src_B7Copy6}", [[20, 13, 0, 0],[50.81, 12.56, 22.21, -0.3, 45.69, -0.62],[76.09, 24.52, 20.64, 25.29, 21.22, 26.01],[105.9, 53.53, 18.89, 19.51, 24.37, 25.17],[128.47, 59.5, 95.94, -0.96, 25.57, -0.26],[183, 59, 0, 0]]], position: 200, duration: 433 },
                { id: "eid300", tween: [ "style", "${_flow_src_B7Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 217 },
                { id: "eid301", tween: [ "style", "${_flow_src_B7Copy4}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 217 },
                { id: "eid306", tween: [ "style", "${_flow_src_B7Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 217 },
                { id: "eid307", tween: [ "style", "${_flow_src_B7Copy6}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 217 },
                { id: "eid302", tween: [ "motion", "${_flow_src_B7Copy5}", [[20, 13, 0, 0],[50.81, 12.56, 22.21, -0.3, 45.69, -0.62],[76.09, 24.52, 20.64, 25.29, 21.22, 26.01],[105.9, 53.53, 18.89, 19.51, 24.37, 25.17],[128.47, 59.5, 95.94, -0.96, 25.57, -0.26],[183, 59, 0, 0]]], position: 167, duration: 433 },
                { id: "eid288", tween: [ "style", "${_flow_src_B7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 217 },
                { id: "eid289", tween: [ "style", "${_flow_src_B7}", "opacity", '0', { fromValue: '1'}], position: 217, duration: 217 },
                { id: "eid303", tween: [ "style", "${_flow_src_B7Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 217 },
                { id: "eid304", tween: [ "style", "${_flow_src_B7Copy5}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 217 },
                { id: "eid286", tween: [ "motion", "${_flow_src_B7}", [[20, 13, 0, 0],[50.81, 12.56, 22.21, -0.3, 45.69, -0.62],[76.09, 24.52, 20.64, 25.29, 21.22, 26.01],[105.9, 53.53, 18.89, 19.51, 24.37, 25.17],[128.47, 59.5, 95.94, -0.96, 25.57, -0.26],[183, 59, 0, 0]]], position: 0, duration: 433 }            ]
        }
    }
},
"FLOW_B8": {
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
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy5',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy4',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy3',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy2',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1Copy',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], [], [], ['1.4', '1.4']],
                    tag: 'img',
                    id: 'flow_src_A1',
                    type: 'image',
                    rect: ['8px', '5px', '40', '26', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_A1Copy5}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_flow_src_A1}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_flow_src_A1Copy4}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '56px']
            ],
            "${_flow_src_A1Copy3}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_flow_src_A1Copy}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ],
            "${_flow_src_A1Copy2}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.4'],
                ["transform", "scaleX", '1.4'],
                ["style", "opacity", '0'],
                ["style", "left", '8px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 833,
            autoPlay: true,
            timeline: [
                { id: "eid312", tween: [ "style", "${_flow_src_A1Copy}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 250 },
                { id: "eid313", tween: [ "style", "${_flow_src_A1Copy}", "opacity", '0', { fromValue: '1'}], position: 517, duration: 250 },
                { id: "eid324", tween: [ "style", "${_flow_src_A1Copy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid325", tween: [ "style", "${_flow_src_A1Copy5}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid318", tween: [ "style", "${_flow_src_A1Copy3}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 250 },
                { id: "eid319", tween: [ "style", "${_flow_src_A1Copy3}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 250 },
                { id: "eid311", tween: [ "style", "${_flow_src_A1Copy}", "left", '258px', { fromValue: '8px'}], position: 267, duration: 500 },
                { id: "eid308", tween: [ "style", "${_flow_src_A1}", "left", '258px', { fromValue: '8px'}], position: 333, duration: 500 },
                { id: "eid315", tween: [ "style", "${_flow_src_A1Copy2}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 250 },
                { id: "eid316", tween: [ "style", "${_flow_src_A1Copy2}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 250 },
                { id: "eid314", tween: [ "style", "${_flow_src_A1Copy2}", "left", '258px', { fromValue: '8px'}], position: 200, duration: 500 },
                { id: "eid320", tween: [ "style", "${_flow_src_A1Copy4}", "left", '258px', { fromValue: '8px'}], position: 67, duration: 500 },
                { id: "eid323", tween: [ "style", "${_flow_src_A1Copy5}", "left", '258px', { fromValue: '8px'}], position: 0, duration: 500 },
                { id: "eid317", tween: [ "style", "${_flow_src_A1Copy3}", "left", '258px', { fromValue: '8px'}], position: 133, duration: 500 },
                { id: "eid309", tween: [ "style", "${_flow_src_A1}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 250 },
                { id: "eid310", tween: [ "style", "${_flow_src_A1}", "opacity", '0', { fromValue: '1'}], position: 583, duration: 250 },
                { id: "eid321", tween: [ "style", "${_flow_src_A1Copy4}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid322", tween: [ "style", "${_flow_src_A1Copy4}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 }            ]
        }
    }
},
"FLOW_R1": {
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
                    transform: [[0, 0], ['252']],
                    tag: 'img',
                    rect: ['-198px', '-78px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R1',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['252']],
                    tag: 'img',
                    rect: ['7px', '4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R1Copy',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['252']],
                    tag: 'img',
                    rect: ['7px', '4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R1Copy2',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['252']],
                    tag: 'img',
                    rect: ['7px', '4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R1Copy3',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['252']],
                    tag: 'img',
                    rect: ['7px', '4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R1Copy4',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['252']],
                    tag: 'img',
                    rect: ['7px', '4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R1Copy5',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['252']],
                    tag: 'img',
                    rect: ['7px', '4px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R1Copy6',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_R1Copy6}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '252deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '26.67px 16.67px']
            ],
            "${_flow_src_R1Copy3}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '252deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '26.67px 16.67px']
            ],
            "${_flow_src_R1Copy}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '252deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '26.67px 16.67px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_R1Copy2}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '252deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '26.67px 16.67px']
            ],
            "${_flow_src_R1Copy5}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '252deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '26.67px 16.67px']
            ],
            "${_flow_src_R1Copy4}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '252deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '26.67px 16.67px']
            ],
            "${_flow_src_R1}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '252deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '26.6669921875px 16.66650390625px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 634,
            autoPlay: true,
            timeline: [
                { id: "eid333", tween: [ "motion", "${_flow_src_R1Copy}", [[26.67, 16.67, 0, 0],[-3.07, -12.65, -27.95, -5.5, -98.1, -19.31],[-53.53, -25.07, -22.83, -20.78, -42.36, -38.57],[-89.33, -61.54, -28.78, -6.91, -81.16, -19.49],[-178, -65, 0, 0]]], position: 33, duration: 433 },
                { id: "eid334", tween: [ "style", "${_flow_src_R1Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 217 },
                { id: "eid335", tween: [ "style", "${_flow_src_R1Copy}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 217 },
                { id: "eid337", tween: [ "motion", "${_flow_src_R1Copy2}", [[26.67, 16.67, 0, 0],[-3.07, -12.65, -27.95, -5.5, -98.1, -19.31],[-53.53, -25.07, -22.83, -20.78, -42.36, -38.57],[-89.33, -61.54, -28.78, -6.91, -81.16, -19.49],[-178, -65, 0, 0]]], position: 67, duration: 433 },
                { id: "eid348", tween: [ "transform", "${_flow_src_R1Copy4}", "rotateZ", '279deg', { fromValue: '252deg'}], position: 133, duration: 433 },
                { id: "eid344", tween: [ "transform", "${_flow_src_R1Copy3}", "rotateZ", '279deg', { fromValue: '252deg'}], position: 100, duration: 433 },
                { id: "eid341", tween: [ "motion", "${_flow_src_R1Copy3}", [[26.67, 16.67, 0, 0],[-3.07, -12.65, -27.95, -5.5, -98.1, -19.31],[-53.53, -25.07, -22.83, -20.78, -42.36, -38.57],[-89.33, -61.54, -28.78, -6.91, -81.16, -19.49],[-178, -65, 0, 0]]], position: 100, duration: 433 },
                { id: "eid349", tween: [ "motion", "${_flow_src_R1Copy5}", [[26.67, 16.67, 0, 0],[-3.07, -12.65, -27.95, -5.5, -98.1, -19.31],[-53.53, -25.07, -22.83, -20.78, -42.36, -38.57],[-89.33, -61.54, -28.78, -6.91, -81.16, -19.49],[-178, -65, 0, 0]]], position: 167, duration: 433 },
                { id: "eid331", tween: [ "style", "${_flow_src_R1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 217 },
                { id: "eid332", tween: [ "style", "${_flow_src_R1}", "opacity", '0', { fromValue: '1'}], position: 217, duration: 217 },
                { id: "eid329", tween: [ "transform", "${_flow_src_R1}", "rotateZ", '279deg', { fromValue: '252deg'}], position: 0, duration: 433 },
                { id: "eid342", tween: [ "style", "${_flow_src_R1Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 217 },
                { id: "eid343", tween: [ "style", "${_flow_src_R1Copy3}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 217 },
                { id: "eid338", tween: [ "style", "${_flow_src_R1Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 217 },
                { id: "eid339", tween: [ "style", "${_flow_src_R1Copy2}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 217 },
                { id: "eid345", tween: [ "motion", "${_flow_src_R1Copy4}", [[26.67, 16.67, 0, 0],[-3.07, -12.65, -27.95, -5.5, -98.1, -19.31],[-53.53, -25.07, -22.83, -20.78, -42.36, -38.57],[-89.33, -61.54, -28.78, -6.91, -81.16, -19.49],[-178, -65, 0, 0]]], position: 133, duration: 433 },
                { id: "eid353", tween: [ "motion", "${_flow_src_R1Copy6}", [[26.67, 16.67, 0, 0],[-3.07, -12.65, -27.95, -5.5, -98.1, -19.31],[-53.53, -25.07, -22.83, -20.78, -42.36, -38.57],[-89.33, -61.54, -28.78, -6.91, -81.16, -19.49],[-178, -65, 0, 0]]], position: 200, duration: 433 },
                { id: "eid346", tween: [ "style", "${_flow_src_R1Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 217 },
                { id: "eid347", tween: [ "style", "${_flow_src_R1Copy4}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 217 },
                { id: "eid354", tween: [ "style", "${_flow_src_R1Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 217 },
                { id: "eid355", tween: [ "style", "${_flow_src_R1Copy6}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 217 },
                { id: "eid350", tween: [ "style", "${_flow_src_R1Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 217 },
                { id: "eid351", tween: [ "style", "${_flow_src_R1Copy5}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 217 },
                { id: "eid340", tween: [ "transform", "${_flow_src_R1Copy2}", "rotateZ", '279deg', { fromValue: '252deg'}], position: 67, duration: 433 },
                { id: "eid336", tween: [ "transform", "${_flow_src_R1Copy}", "rotateZ", '279deg', { fromValue: '252deg'}], position: 33, duration: 433 },
                { id: "eid328", tween: [ "motion", "${_flow_src_R1}", [[26.67, 16.67, 0, 0],[-3.07, -12.65, -27.95, -5.5, -98.1, -19.31],[-53.53, -25.07, -22.83, -20.78, -42.36, -38.57],[-89.33, -61.54, -28.78, -6.91, -81.16, -19.49],[-178, -65, 0, 0]]], position: 0, duration: 433 },
                { id: "eid352", tween: [ "transform", "${_flow_src_R1Copy5}", "rotateZ", '279deg', { fromValue: '252deg'}], position: 167, duration: 433 },
                { id: "eid356", tween: [ "transform", "${_flow_src_R1Copy6}", "rotateZ", '279deg', { fromValue: '252deg'}], position: 200, duration: 433 }            ]
        }
    }
},
"FLOW_R2": {
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
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R2',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R2Copy',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R2Copy2',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R2Copy3',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R2Copy4',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R2Copy5',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R2Copy6',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_R2Copy5}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R2Copy6}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R2Copy2}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R2Copy3}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_R2Copy4}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R2Copy}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R2}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
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
                { id: "eid370", tween: [ "style", "${_flow_src_R2Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid371", tween: [ "style", "${_flow_src_R2Copy2}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 },
                { id: "eid367", tween: [ "style", "${_flow_src_R2Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 250 },
                { id: "eid368", tween: [ "style", "${_flow_src_R2Copy}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 250 },
                { id: "eid366", tween: [ "motion", "${_flow_src_R2Copy}", [[20, 13, 0, 0],[-22.71, -38, -50.08, 0, -145.05, 0],[-96.85, -3.47, -41.06, 40.01, -96.78, 94.31],[-149.1, 12, -135.78, -3.25, -45.31, -1.09],[-231, 13, 0, 0]]], position: 33, duration: 500 },
                { id: "eid373", tween: [ "style", "${_flow_src_R2Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 250 },
                { id: "eid374", tween: [ "style", "${_flow_src_R2Copy3}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 250 },
                { id: "eid375", tween: [ "motion", "${_flow_src_R2Copy4}", [[20, 13, 0, 0],[-22.71, -38, -50.08, 0, -145.05, 0],[-96.85, -3.47, -41.06, 40.01, -96.78, 94.31],[-149.1, 12, -135.78, -3.25, -45.31, -1.09],[-231, 13, 0, 0]]], position: 133, duration: 500 },
                { id: "eid369", tween: [ "motion", "${_flow_src_R2Copy2}", [[20, 13, 0, 0],[-22.71, -38, -50.08, 0, -145.05, 0],[-96.85, -3.47, -41.06, 40.01, -96.78, 94.31],[-149.1, 12, -135.78, -3.25, -45.31, -1.09],[-231, 13, 0, 0]]], position: 67, duration: 500 },
                { id: "eid358", tween: [ "motion", "${_flow_src_R2}", [[20, 13, 0, 0],[-22.71, -38, -50.08, 0, -145.05, 0],[-96.85, -3.47, -41.06, 40.01, -96.78, 94.31],[-149.1, 12, -135.78, -3.25, -45.31, -1.09],[-231, 13, 0, 0]]], position: 0, duration: 500 },
                { id: "eid379", tween: [ "style", "${_flow_src_R2Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 250 },
                { id: "eid380", tween: [ "style", "${_flow_src_R2Copy5}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 250 },
                { id: "eid364", tween: [ "style", "${_flow_src_R2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid365", tween: [ "style", "${_flow_src_R2}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid372", tween: [ "motion", "${_flow_src_R2Copy3}", [[20, 13, 0, 0],[-22.71, -38, -50.08, 0, -145.05, 0],[-96.85, -3.47, -41.06, 40.01, -96.78, 94.31],[-149.1, 12, -135.78, -3.25, -45.31, -1.09],[-231, 13, 0, 0]]], position: 100, duration: 500 },
                { id: "eid382", tween: [ "style", "${_flow_src_R2Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 250 },
                { id: "eid383", tween: [ "style", "${_flow_src_R2Copy6}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 250 },
                { id: "eid376", tween: [ "style", "${_flow_src_R2Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 250 },
                { id: "eid377", tween: [ "style", "${_flow_src_R2Copy4}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 250 },
                { id: "eid378", tween: [ "motion", "${_flow_src_R2Copy5}", [[20, 13, 0, 0],[-22.71, -38, -50.08, 0, -145.05, 0],[-96.85, -3.47, -41.06, 40.01, -96.78, 94.31],[-149.1, 12, -135.78, -3.25, -45.31, -1.09],[-231, 13, 0, 0]]], position: 167, duration: 500 },
                { id: "eid381", tween: [ "motion", "${_flow_src_R2Copy6}", [[20, 13, 0, 0],[-22.71, -38, -50.08, 0, -145.05, 0],[-96.85, -3.47, -41.06, 40.01, -96.78, 94.31],[-149.1, 12, -135.78, -3.25, -45.31, -1.09],[-231, 13, 0, 0]]], position: 200, duration: 500 }            ]
        }
    }
},
"FLOW_R3": {
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
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R3',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R3Copy',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R3Copy2',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R3Copy3',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R3Copy4',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R3Copy5',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                },
                {
                    transform: [[0, 0], ['180']],
                    tag: 'img',
                    rect: ['0px', '0px', '40', '26', 'auto', 'auto'],
                    id: 'flow_src_R3Copy6',
                    type: 'image',
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src_R3}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R3Copy5}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R3Copy6}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '40px']
            ],
            "${_flow_src_R3Copy2}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R3Copy3}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R3Copy4}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
            ],
            "${_flow_src_R3Copy}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["motion", "location", '20px 13px']
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
                { id: "eid391", tween: [ "style", "${_flow_src_R3Copy}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 250 },
                { id: "eid392", tween: [ "style", "${_flow_src_R3Copy}", "opacity", '0', { fromValue: '1'}], position: 283, duration: 250 },
                { id: "eid396", tween: [ "motion", "${_flow_src_R3Copy3}", [[20, 13, 0, 0],[-18.03, 47.31, -17, 110.21, -16.65, 107.92],[-32.26, 185.52, -3.25, 89.45, -4.68, 128.88],[-30, 228, 0, 0]]], position: 100, duration: 500 },
                { id: "eid393", tween: [ "motion", "${_flow_src_R3Copy2}", [[20, 13, 0, 0],[-18.03, 47.31, -17, 110.21, -16.65, 107.92],[-32.26, 185.52, -3.25, 89.45, -4.68, 128.88],[-30, 228, 0, 0]]], position: 67, duration: 500 },
                { id: "eid397", tween: [ "style", "${_flow_src_R3Copy3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 250 },
                { id: "eid398", tween: [ "style", "${_flow_src_R3Copy3}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 250 },
                { id: "eid386", tween: [ "motion", "${_flow_src_R3}", [[20, 13, 0, 0],[-18.03, 47.31, -17, 110.21, -16.65, 107.92],[-32.26, 185.52, -3.25, 89.45, -4.68, 128.88],[-30, 228, 0, 0]]], position: 0, duration: 500 },
                { id: "eid390", tween: [ "motion", "${_flow_src_R3Copy}", [[20, 13, 0, 0],[-18.03, 47.31, -17, 110.21, -16.65, 107.92],[-32.26, 185.52, -3.25, 89.45, -4.68, 128.88],[-30, 228, 0, 0]]], position: 33, duration: 500 },
                { id: "eid394", tween: [ "style", "${_flow_src_R3Copy2}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 250 },
                { id: "eid395", tween: [ "style", "${_flow_src_R3Copy2}", "opacity", '0', { fromValue: '1'}], position: 317, duration: 250 },
                { id: "eid403", tween: [ "style", "${_flow_src_R3Copy5}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 250 },
                { id: "eid404", tween: [ "style", "${_flow_src_R3Copy5}", "opacity", '0', { fromValue: '1'}], position: 417, duration: 250 },
                { id: "eid406", tween: [ "style", "${_flow_src_R3Copy6}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 250 },
                { id: "eid407", tween: [ "style", "${_flow_src_R3Copy6}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 250 },
                { id: "eid400", tween: [ "style", "${_flow_src_R3Copy4}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 250 },
                { id: "eid401", tween: [ "style", "${_flow_src_R3Copy4}", "opacity", '0', { fromValue: '1'}], position: 383, duration: 250 },
                { id: "eid399", tween: [ "motion", "${_flow_src_R3Copy4}", [[20, 13, 0, 0],[-18.03, 47.31, -17, 110.21, -16.65, 107.92],[-32.26, 185.52, -3.25, 89.45, -4.68, 128.88],[-30, 228, 0, 0]]], position: 133, duration: 500 },
                { id: "eid405", tween: [ "motion", "${_flow_src_R3Copy6}", [[20, 13, 0, 0],[-18.03, 47.31, -17, 110.21, -16.65, 107.92],[-32.26, 185.52, -3.25, 89.45, -4.68, 128.88],[-30, 228, 0, 0]]], position: 200, duration: 500 },
                { id: "eid402", tween: [ "motion", "${_flow_src_R3Copy5}", [[20, 13, 0, 0],[-18.03, 47.31, -17, 110.21, -16.65, 107.92],[-32.26, 185.52, -3.25, 89.45, -4.68, 128.88],[-30, 228, 0, 0]]], position: 167, duration: 500 },
                { id: "eid388", tween: [ "style", "${_flow_src_R3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid389", tween: [ "style", "${_flow_src_R3}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 }            ]
        }
    }
},
"FLOW_B": {
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
                    id: 'FLOW_B1',
                    type: 'rect',
                    rect: ['0px', '58px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_B2',
                    type: 'rect',
                    rect: ['431px', '10px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_B3',
                    type: 'rect',
                    rect: ['442px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_B4',
                    type: 'rect',
                    rect: ['67px', '308px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_B5',
                    type: 'rect',
                    rect: ['462px', '383px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_B6',
                    type: 'rect',
                    rect: ['765px', '185px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_B7',
                    type: 'rect',
                    rect: ['765px', '193px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_B8',
                    type: 'rect',
                    rect: ['963px', '184px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_B6',
                symbolName: 'FLOW_B6',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_B3',
                symbolName: 'FLOW_B3',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_B7',
                symbolName: 'FLOW_B7',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_B8',
                symbolName: 'FLOW_B8',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_B2',
                symbolName: 'FLOW_B2',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_B4',
                symbolName: 'FLOW_B4',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_B1',
                symbolName: 'FLOW_B1',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_B5',
                symbolName: 'FLOW_B5',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_B5}": [
                ["style", "left", '462px'],
                ["style", "top", '383px']
            ],
            "${_FLOW_B4}": [
                ["style", "left", '67px'],
                ["style", "top", '308px']
            ],
            "${_FLOW_B7}": [
                ["style", "left", '765px'],
                ["style", "top", '193px']
            ],
            "${_FLOW_B2}": [
                ["style", "left", '431px'],
                ["style", "top", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '409px'],
                ["style", "width", '1019px']
            ],
            "${_FLOW_B1}": [
                ["style", "left", '0px'],
                ["style", "top", '58px']
            ],
            "${_FLOW_B3}": [
                ["style", "left", '442px'],
                ["style", "top", '0px']
            ],
            "${_FLOW_B8}": [
                ["style", "left", '963px'],
                ["style", "top", '184px']
            ],
            "${_FLOW_B6}": [
                ["style", "left", '765px'],
                ["style", "top", '185px']
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
"FLOW_R": {
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
                    id: 'FLOW_R1',
                    type: 'rect',
                    rect: ['247px', '72px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_R2',
                    type: 'rect',
                    rect: ['261px', '1px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_R3',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_R2',
                symbolName: 'FLOW_R2',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_R1',
                symbolName: 'FLOW_R1',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_R3',
                symbolName: 'FLOW_R3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_R1}": [
                ["style", "left", '247px'],
                ["style", "top", '72px']
            ],
            "${symbolSelector}": [
                ["style", "height", '98px'],
                ["style", "width", '301px']
            ],
            "${_FLOW_R3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_FLOW_R2}": [
                ["style", "left", '261px'],
                ["style", "top", '1px']
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
})(jQuery, AdobeEdge, "EDGE-26457878");
