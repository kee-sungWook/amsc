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
                id: 'car',
                type: 'image',
                tag: 'img',
                rect: ['931', '206','843','523','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car.png"]
            },
            {
                id: 'TIREMOVE',
                type: 'rect',
                rect: ['895', '488','auto','auto','auto', 'auto']
            },
            {
                id: 'TIREMOVE2',
                type: 'rect',
                rect: ['895', '488','auto','auto','auto', 'auto'],
                transform: [[],['180']]
            },
            {
                id: 'FLOW_MOVE',
                type: 'rect',
                rect: ['605', '953','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWS4',
                type: 'rect',
                rect: ['1372', '612px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWS3',
                type: 'rect',
                rect: ['1374', '612','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWS2',
                type: 'rect',
                rect: ['1317', '612px','auto','auto','auto', 'auto']
            },
            {
                id: 'FLOWS1',
                type: 'rect',
                rect: ['985', '612','auto','auto','auto', 'auto']
            },
            {
                id: 'sensor',
                type: 'image',
                tag: 'img',
                rect: ['271', '760','409','409','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sensor.png"]
            },
            {
                id: 'arrow',
                type: 'image',
                tag: 'img',
                rect: ['421', '483','109','314','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png"]
            },
            {
                id: 'handle',
                type: 'image',
                tag: 'img',
                rect: ['84', '233','675','478','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"handle.png"]
            },
            {
                id: 'module',
                type: 'image',
                tag: 'img',
                rect: ['1119', '825','461','279','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"module.png"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['1159', '890px','378','160','auto', 'auto'],
                text: "ABS & VDC<br>모듈",
                align: "center",
                font: ['굴림', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['490', '69','1370px','51','auto', 'auto'],
                text: "운전자의 조향(회전)의지를 각도로 검출하여 모듈로 입력합니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['52px', '49','409px','76','auto', 'auto'],
                text: "조향각센서",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'FLOW_MOVE',
                symbolName: 'FLOW_MOVE',
                autoPlay: {

                }
            },
            {
                id: 'FLOWS2',
                symbolName: 'FLOWS2',
                autoPlay: {

                }
            },
            {
                id: 'FLOWS1',
                symbolName: 'FLOWS1',
                autoPlay: {

                }
            },
            {
                id: 'FLOWS3',
                symbolName: 'FLOWS3',
                autoPlay: {

                }
            },
            {
                id: 'FLOWS4',
                symbolName: 'FLOWS4',
                autoPlay: {

                }
            },
            {
                id: 'TIREMOVE2',
                symbolName: 'TIREMOVE',
                autoPlay: {

                }
            },
            {
                id: 'TIREMOVE',
                symbolName: 'TIREMOVE',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_FLOWS2}": [
                ["style", "top", '612px'],
                ["style", "opacity", '0']
            ],
            "${_txt2}": [
                ["style", "opacity", '0'],
                ["style", "width", '1370px']
            ],
            "${_TIREMOVE2}": [
                ["style", "opacity", '0'],
                ["style", "left", '1639px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_txt1}": [
                ["style", "opacity", '0'],
                ["style", "left", '52px'],
                ["style", "width", '409px']
            ],
            "${_sensor}": [
                ["style", "opacity", '0']
            ],
            "${_FLOWS3}": [
                ["style", "opacity", '0']
            ],
            "${_handle}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW_MOVE}": [
                ["style", "opacity", '0']
            ],
            "${_TIREMOVE}": [
                ["style", "left", '885px'],
                ["style", "opacity", '0']
            ],
            "${_module}": [
                ["style", "opacity", '0']
            ],
            "${_FLOWS1}": [
                ["style", "opacity", '0']
            ],
            "${_FLOWS4}": [
                ["style", "top", '612px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_arrow}": [
                ["style", "opacity", '0']
            ],
            "${_txt3}": [
                ["style", "top", '890px'],
                ["style", "opacity", '0']
            ],
            "${_car}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2267,
            autoPlay: true,
            timeline: [
                { id: "eid155", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 600 },
                { id: "eid171", tween: [ "style", "${_TIREMOVE}", "opacity", '0.9', { fromValue: '0'}], position: 1467, duration: 600 },
                { id: "eid177", tween: [ "style", "${_FLOW_MOVE}", "opacity", '1', { fromValue: '0'}], position: 1333, duration: 467 },
                { id: "eid167", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 600 },
                { id: "eid173", tween: [ "style", "${_TIREMOVE2}", "opacity", '0.9', { fromValue: '0'}], position: 1467, duration: 600 },
                { id: "eid161", tween: [ "style", "${_module}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 600 },
                { id: "eid179", tween: [ "style", "${_FLOWS2}", "opacity", '1', { fromValue: '0'}], position: 1666, duration: 467 },
                { id: "eid169", tween: [ "style", "${_car}", "opacity", '1', { fromValue: '0'}], position: 1467, duration: 600 },
                { id: "eid165", tween: [ "style", "${_handle}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 600 },
                { id: "eid183", tween: [ "style", "${_FLOWS4}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 467 },
                { id: "eid175", tween: [ "style", "${_FLOWS1}", "opacity", '1', { fromValue: '0'}], position: 1666, duration: 467 },
                { id: "eid163", tween: [ "style", "${_arrow}", "opacity", '1', { fromValue: '0'}], position: 867, duration: 600 },
                { id: "eid181", tween: [ "style", "${_FLOWS3}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 467 },
                { id: "eid159", tween: [ "style", "${_sensor}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 600 },
                { id: "eid157", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 333, duration: 600 }            ]
        }
    }
},
"TIREMOVE": {
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
                    id: 'tire_move1',
                    type: 'image',
                    rect: ['0px', '0px', '3600px', '260px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tire_move1.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '3600px', '260px', 'auto', 'auto'],
                    id: 'tire_move2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/tire_move2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tire_move2}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_tire_move1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${symbolSelector}": [
                ["style", "height", '263px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '180px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3200,
            autoPlay: false,
            labels: {
                "REV": 1600
            },
            timeline: [
                { id: "eid1", tween: [ "style", "${_tire_move1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_tire_move1}", "left", '-180px', { fromValue: '0px'}], position: 33, duration: 0 },
                { id: "eid3", tween: [ "style", "${_tire_move1}", "left", '-360px', { fromValue: '-180px'}], position: 67, duration: 0 },
                { id: "eid4", tween: [ "style", "${_tire_move1}", "left", '-540px', { fromValue: '-360px'}], position: 100, duration: 0 },
                { id: "eid5", tween: [ "style", "${_tire_move1}", "left", '-720px', { fromValue: '-540px'}], position: 133, duration: 0 },
                { id: "eid6", tween: [ "style", "${_tire_move1}", "left", '-900px', { fromValue: '-720px'}], position: 167, duration: 0 },
                { id: "eid7", tween: [ "style", "${_tire_move1}", "left", '-1080px', { fromValue: '-900px'}], position: 200, duration: 0 },
                { id: "eid8", tween: [ "style", "${_tire_move1}", "left", '-1260px', { fromValue: '-1080px'}], position: 233, duration: 0 },
                { id: "eid9", tween: [ "style", "${_tire_move1}", "left", '-1440px', { fromValue: '-1260px'}], position: 267, duration: 0 },
                { id: "eid10", tween: [ "style", "${_tire_move1}", "left", '-1620px', { fromValue: '-1440px'}], position: 300, duration: 0 },
                { id: "eid11", tween: [ "style", "${_tire_move1}", "left", '-1800px', { fromValue: '-1620px'}], position: 333, duration: 0 },
                { id: "eid12", tween: [ "style", "${_tire_move1}", "left", '-1980px', { fromValue: '-1800px'}], position: 367, duration: 0 },
                { id: "eid13", tween: [ "style", "${_tire_move1}", "left", '-2160px', { fromValue: '-1980px'}], position: 400, duration: 0 },
                { id: "eid14", tween: [ "style", "${_tire_move1}", "left", '-2340px', { fromValue: '-2160px'}], position: 433, duration: 0 },
                { id: "eid15", tween: [ "style", "${_tire_move1}", "left", '-2520px', { fromValue: '-2340px'}], position: 467, duration: 0 },
                { id: "eid16", tween: [ "style", "${_tire_move1}", "left", '-2700px', { fromValue: '-2520px'}], position: 500, duration: 0 },
                { id: "eid17", tween: [ "style", "${_tire_move1}", "left", '-2880px', { fromValue: '-2700px'}], position: 533, duration: 0 },
                { id: "eid18", tween: [ "style", "${_tire_move1}", "left", '-3060px', { fromValue: '-2880px'}], position: 567, duration: 0 },
                { id: "eid19", tween: [ "style", "${_tire_move1}", "left", '-3240px', { fromValue: '-3060px'}], position: 600, duration: 0 },
                { id: "eid20", tween: [ "style", "${_tire_move1}", "left", '-3420px', { fromValue: '-3240px'}], position: 633, duration: 0 },
                { id: "eid143", tween: [ "style", "${_tire_move1}", "left", '-3420px', { fromValue: '-3420px'}], position: 2400, duration: 0 },
                { id: "eid142", tween: [ "style", "${_tire_move1}", "left", '-3240px', { fromValue: '-3420px'}], position: 2433, duration: 0 },
                { id: "eid141", tween: [ "style", "${_tire_move1}", "left", '-3060px', { fromValue: '-3240px'}], position: 2467, duration: 0 },
                { id: "eid140", tween: [ "style", "${_tire_move1}", "left", '-2880px', { fromValue: '-3060px'}], position: 2500, duration: 0 },
                { id: "eid139", tween: [ "style", "${_tire_move1}", "left", '-2700px', { fromValue: '-2880px'}], position: 2533, duration: 0 },
                { id: "eid138", tween: [ "style", "${_tire_move1}", "left", '-2520px', { fromValue: '-2700px'}], position: 2567, duration: 0 },
                { id: "eid137", tween: [ "style", "${_tire_move1}", "left", '-2340px', { fromValue: '-2520px'}], position: 2600, duration: 0 },
                { id: "eid136", tween: [ "style", "${_tire_move1}", "left", '-2160px', { fromValue: '-2340px'}], position: 2633, duration: 0 },
                { id: "eid135", tween: [ "style", "${_tire_move1}", "left", '-1980px', { fromValue: '-2160px'}], position: 2667, duration: 0 },
                { id: "eid134", tween: [ "style", "${_tire_move1}", "left", '-1800px', { fromValue: '-1980px'}], position: 2700, duration: 0 },
                { id: "eid133", tween: [ "style", "${_tire_move1}", "left", '-1620px', { fromValue: '-1800px'}], position: 2733, duration: 0 },
                { id: "eid132", tween: [ "style", "${_tire_move1}", "left", '-1440px', { fromValue: '-1620px'}], position: 2767, duration: 0 },
                { id: "eid131", tween: [ "style", "${_tire_move1}", "left", '-1260px', { fromValue: '-1440px'}], position: 2800, duration: 0 },
                { id: "eid130", tween: [ "style", "${_tire_move1}", "left", '-1080px', { fromValue: '-1260px'}], position: 2833, duration: 0 },
                { id: "eid129", tween: [ "style", "${_tire_move1}", "left", '-900px', { fromValue: '-1080px'}], position: 2867, duration: 0 },
                { id: "eid128", tween: [ "style", "${_tire_move1}", "left", '-720px', { fromValue: '-900px'}], position: 2900, duration: 0 },
                { id: "eid127", tween: [ "style", "${_tire_move1}", "left", '-540px', { fromValue: '-720px'}], position: 2933, duration: 0 },
                { id: "eid126", tween: [ "style", "${_tire_move1}", "left", '-360px', { fromValue: '-540px'}], position: 2967, duration: 0 },
                { id: "eid125", tween: [ "style", "${_tire_move1}", "left", '-180px', { fromValue: '-360px'}], position: 3000, duration: 0 },
                { id: "eid144", tween: [ "style", "${_tire_move1}", "left", '0px', { fromValue: '-180px'}], position: 3033, duration: 0 },
                { id: "eid145", tween: [ "style", "${_tire_move2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid146", tween: [ "style", "${_tire_move2}", "display", 'block', { fromValue: 'none'}], position: 801, duration: 0 },
                { id: "eid147", tween: [ "style", "${_tire_move2}", "display", 'none', { fromValue: 'block'}], position: 2233, duration: 0 },
                { id: "eid21", tween: [ "style", "${_tire_move2}", "left", '0px', { fromValue: '0px'}], position: 800, duration: 0 },
                { id: "eid22", tween: [ "style", "${_tire_move2}", "left", '-180px', { fromValue: '0px'}], position: 833, duration: 0 },
                { id: "eid23", tween: [ "style", "${_tire_move2}", "left", '-360px', { fromValue: '-180px'}], position: 867, duration: 0 },
                { id: "eid24", tween: [ "style", "${_tire_move2}", "left", '-540px', { fromValue: '-360px'}], position: 900, duration: 0 },
                { id: "eid25", tween: [ "style", "${_tire_move2}", "left", '-720px', { fromValue: '-540px'}], position: 933, duration: 0 },
                { id: "eid26", tween: [ "style", "${_tire_move2}", "left", '-900px', { fromValue: '-720px'}], position: 967, duration: 0 },
                { id: "eid27", tween: [ "style", "${_tire_move2}", "left", '-1080px', { fromValue: '-900px'}], position: 1000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_tire_move2}", "left", '-1260px', { fromValue: '-1080px'}], position: 1033, duration: 0 },
                { id: "eid29", tween: [ "style", "${_tire_move2}", "left", '-1440px', { fromValue: '-1260px'}], position: 1067, duration: 0 },
                { id: "eid30", tween: [ "style", "${_tire_move2}", "left", '-1620px', { fromValue: '-1440px'}], position: 1100, duration: 0 },
                { id: "eid31", tween: [ "style", "${_tire_move2}", "left", '-1800px', { fromValue: '-1620px'}], position: 1133, duration: 0 },
                { id: "eid32", tween: [ "style", "${_tire_move2}", "left", '-1980px', { fromValue: '-1800px'}], position: 1167, duration: 0 },
                { id: "eid33", tween: [ "style", "${_tire_move2}", "left", '-2160px', { fromValue: '-1980px'}], position: 1200, duration: 0 },
                { id: "eid34", tween: [ "style", "${_tire_move2}", "left", '-2340px', { fromValue: '-2160px'}], position: 1233, duration: 0 },
                { id: "eid35", tween: [ "style", "${_tire_move2}", "left", '-2520px', { fromValue: '-2340px'}], position: 1267, duration: 0 },
                { id: "eid36", tween: [ "style", "${_tire_move2}", "left", '-2700px', { fromValue: '-2520px'}], position: 1300, duration: 0 },
                { id: "eid37", tween: [ "style", "${_tire_move2}", "left", '-2880px', { fromValue: '-2700px'}], position: 1333, duration: 0 },
                { id: "eid38", tween: [ "style", "${_tire_move2}", "left", '-3060px', { fromValue: '-2880px'}], position: 1367, duration: 0 },
                { id: "eid39", tween: [ "style", "${_tire_move2}", "left", '-3240px', { fromValue: '-3060px'}], position: 1400, duration: 0 },
                { id: "eid40", tween: [ "style", "${_tire_move2}", "left", '-3420px', { fromValue: '-3240px'}], position: 1433, duration: 0 },
                { id: "eid83", tween: [ "style", "${_tire_move2}", "left", '-3420px', { fromValue: '-3420px'}], position: 1600, duration: 0 },
                { id: "eid102", tween: [ "style", "${_tire_move2}", "left", '-3240px', { fromValue: '-3420px'}], position: 1633, duration: 0 },
                { id: "eid84", tween: [ "style", "${_tire_move2}", "left", '-3060px', { fromValue: '-3240px'}], position: 1666, duration: 0 },
                { id: "eid86", tween: [ "style", "${_tire_move2}", "left", '-2880px', { fromValue: '-3060px'}], position: 1700, duration: 0 },
                { id: "eid87", tween: [ "style", "${_tire_move2}", "left", '-2700px', { fromValue: '-2880px'}], position: 1733, duration: 0 },
                { id: "eid88", tween: [ "style", "${_tire_move2}", "left", '-2520px', { fromValue: '-2700px'}], position: 1766, duration: 0 },
                { id: "eid89", tween: [ "style", "${_tire_move2}", "left", '-2340px', { fromValue: '-2520px'}], position: 1800, duration: 0 },
                { id: "eid90", tween: [ "style", "${_tire_move2}", "left", '-2160px', { fromValue: '-2340px'}], position: 1833, duration: 0 },
                { id: "eid91", tween: [ "style", "${_tire_move2}", "left", '-1980px', { fromValue: '-2160px'}], position: 1866, duration: 0 },
                { id: "eid92", tween: [ "style", "${_tire_move2}", "left", '-1800px', { fromValue: '-1980px'}], position: 1900, duration: 0 },
                { id: "eid93", tween: [ "style", "${_tire_move2}", "left", '-1620px', { fromValue: '-1800px'}], position: 1933, duration: 0 },
                { id: "eid94", tween: [ "style", "${_tire_move2}", "left", '-1440px', { fromValue: '-1620px'}], position: 1966, duration: 0 },
                { id: "eid95", tween: [ "style", "${_tire_move2}", "left", '-1260px', { fromValue: '-1440px'}], position: 2000, duration: 0 },
                { id: "eid96", tween: [ "style", "${_tire_move2}", "left", '-1080px', { fromValue: '-1260px'}], position: 2033, duration: 0 },
                { id: "eid97", tween: [ "style", "${_tire_move2}", "left", '-900px', { fromValue: '-1080px'}], position: 2066, duration: 0 },
                { id: "eid98", tween: [ "style", "${_tire_move2}", "left", '-720px', { fromValue: '-900px'}], position: 2100, duration: 0 },
                { id: "eid103", tween: [ "style", "${_tire_move2}", "left", '-540px', { fromValue: '-720px'}], position: 2133, duration: 0 },
                { id: "eid104", tween: [ "style", "${_tire_move2}", "left", '-360px', { fromValue: '-540px'}], position: 2167, duration: 0 },
                { id: "eid105", tween: [ "style", "${_tire_move2}", "left", '-180px', { fromValue: '-360px'}], position: 2200, duration: 0 },
                { id: "eid43", tween: [ "style", "${_tire_move2}", "left", '0px', { fromValue: '-180px'}], position: 2234, duration: 0 }            ]
        }
    }
},
"FLOWS1": {
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
                    id: 'FLOW_SRC_MOVE2',
                    type: 'rect',
                    transform: [[0, 0], ['180']],
                    rect: ['-167px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVE2',
                symbolName: 'FLOW_SRC_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVE2}": [
                ["style", "top", '0px'],
                ["style", "left", '-167px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '336px']
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
"FLOWS2": {
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
                    id: 'FLOW_SRC_MOVE2Copy2',
                    type: 'rect',
                    transform: [[0, 0], ['90']],
                    rect: ['-332px', '189px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVE2Copy2',
                symbolName: 'FLOW_SRC_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVE2Copy2}": [
                ["style", "top", '189px'],
                ["style", "left", '-332px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '213px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '6px']
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
"FLOWS3": {
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
                    id: 'FLOW_SRC_MOVE2Copy',
                    type: 'rect',
                    transform: [[0, 0], ['180']],
                    rect: ['-167px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVE2Copy',
                symbolName: 'FLOW_SRC_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVE2Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '-167px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '335px']
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
"FLOWS4": {
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
                    id: 'FLOW_SRC_MOVE2Copy3',
                    type: 'rect',
                    transform: [[0, 0], ['90']],
                    rect: ['-332px', '189px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC_MOVE2Copy3',
                symbolName: 'FLOW_SRC_MOVE'
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC_MOVE2Copy3}": [
                ["style", "top", '189px'],
                ["style", "left", '-332px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '213px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '6px']
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
"FLOW_MOVE": {
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
                    rect: ['71px', '0px', '515', '24', 'auto', 'auto'],
                    id: 'flow_back',
                    fill: ['rgba(0,0,0,0)', 'images/flow_back.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['-90px', '5px', '664', '14', 'auto', 'auto'],
                    id: 'flow_src1',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src1}": [
                ["style", "left", '-90px'],
                ["style", "top", '5px']
            ],
            "${_flow_back}": [
                ["style", "left", '71px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '664px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1233,
            autoPlay: true,
            timeline: [
                { id: "eid152", tween: [ "style", "${_flow_src1}", "left", '50px', { fromValue: '-90px'}], position: 0, duration: 1233 }            ]
        }
    }
},
"FLOW_SRC_MOVE": {
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
                    rect: ['0px', '0px', '778', '6', 'auto', 'auto'],
                    id: 'flow_src',
                    fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flow_src}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '670px'],
                ["style", "overflow", 'hidden']
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
                { id: "eid1", tween: [ "style", "${_flow_src}", "left", '-110px', { fromValue: '0px'}], position: 0, duration: 2000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-3362645");
