/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'carbody',
                            type: 'image',
                            tag: 'img',
                            rect: ['298', '213', '2097', '1128', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"carbody.png"]
                        },
                        {
                            id: 'door1_back',
                            type: 'image',
                            tag: 'img',
                            rect: ['624', '269', '161', '632', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"door1_back.png"]
                        },
                        {
                            id: 'door1_point',
                            type: 'image',
                            tag: 'img',
                            rect: ['624', '269', '161', '631', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"door1_point.png"]
                        },
                        {
                            id: 'door1',
                            type: 'image',
                            tag: 'img',
                            rect: ['386', '267', '398px', '635', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"door1.png"]
                        },
                        {
                            id: 'door2_back',
                            type: 'image',
                            tag: 'img',
                            rect: ['906', '313', '229', '693', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"door2_back.png"]
                        },
                        {
                            id: 'door2_point',
                            type: 'image',
                            tag: 'img',
                            rect: ['906', '314', '228', '692', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"door2_point.png"]
                        },
                        {
                            id: 'door2',
                            type: 'image',
                            tag: 'img',
                            rect: ['634', '267', '491px', '741', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"door2.png"]
                        },
                        {
                            id: 'sensor',
                            type: 'image',
                            tag: 'img',
                            rect: ['584', '643', '410', '116', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sensor.png"]
                        },
                        {
                            id: 'sensor_point',
                            type: 'image',
                            tag: 'img',
                            rect: ['584', '643', '410', '116', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sensor_point.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['38', '38', '204', '204', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
                            type: 'image',
                            tag: 'img',
                            rect: ['1069', '526', '346', '346', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"replayBtn.png"]
                        },
                        {
                            id: 'SIGNAL_INCAR',
                            symbolName: 'SIGNAL_INCAR',
                            type: 'rect',
                            rect: ['715px', '473px', '509px', '515px', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'SIGNAL_INCARCopy',
                            symbolName: 'SIGNAL_INCAR',
                            type: 'rect',
                            rect: ['347px', '411px', '509px', '515px', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(140,142,144,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5833.3333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "opacity",
                            250,
                            125,
                            "linear",
                            "${door1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            375,
                            125,
                            "linear",
                            "${door1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            542,
                            125,
                            "linear",
                            "${door1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            667,
                            125,
                            "linear",
                            "${door1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid29",
                            "opacity",
                            833,
                            125,
                            "linear",
                            "${door1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            958,
                            125,
                            "linear",
                            "${door1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1125,
                            125,
                            "linear",
                            "${door1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            1250,
                            125,
                            "linear",
                            "${door1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid6",
                            "width",
                            4042,
                            333,
                            "linear",
                            "${door2}",
                            '491px',
                            '508px'
                        ],
                        [
                            "eid2",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${door2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid127",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${door2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid128",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${door2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid129",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${door2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid130",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${door2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid131",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${door2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4",
                            "width",
                            3708,
                            333,
                            "linear",
                            "${door1}",
                            '398px',
                            '417px'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid60",
                            "opacity",
                            5583,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            5583,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1417,
                            333,
                            "linear",
                            "${sensor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            3250,
                            333,
                            "linear",
                            "${sensor}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${door1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid132",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${door1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid133",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${door1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid134",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${door1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid135",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${door1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid136",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${door1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35",
                            "opacity",
                            1792,
                            167,
                            "linear",
                            "${sensor_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            1958,
                            167,
                            "linear",
                            "${sensor_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2167,
                            163,
                            "linear",
                            "${sensor_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            2329,
                            163,
                            "linear",
                            "${sensor_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2542,
                            146,
                            "linear",
                            "${sensor_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            2687,
                            146,
                            "linear",
                            "${sensor_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid61",
                            "opacity",
                            2875,
                            162,
                            "linear",
                            "${sensor_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            3037,
                            163,
                            "linear",
                            "${sensor_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17",
                            "opacity",
                            250,
                            125,
                            "linear",
                            "${door2_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            375,
                            125,
                            "linear",
                            "${door2_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid23",
                            "opacity",
                            542,
                            125,
                            "linear",
                            "${door2_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            667,
                            125,
                            "linear",
                            "${door2_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            833,
                            125,
                            "linear",
                            "${door2_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            958,
                            125,
                            "linear",
                            "${door2_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1125,
                            125,
                            "linear",
                            "${door2_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1250,
                            125,
                            "linear",
                            "${door2_point}",
                            '1',
                            '0'
                        ],
                            [ "eid73", "trigger", 1792, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_INCAR}', [] ] ],
                            [ "eid74", "trigger", 1792, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_INCARCopy}', [] ] ],
                            [ "eid75", "trigger", 2500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_INCAR}', [0] ] ],
                            [ "eid76", "trigger", 2500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_INCARCopy}', [0] ] ]
                    ]
                }
            },
            "SIGNAL_INCAR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'Ellipse',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'EllipseCopy',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'EllipseCopy2',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'EllipseCopy3',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'EllipseCopy4',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '509px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 700,
                    autoPlay: false,
                    data: [
                        [
                            "eid248",
                            "scaleY",
                            200,
                            433,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid244",
                            "scaleY",
                            133,
                            433,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid233",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${Ellipse}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            0,
                            200,
                            "easeInQuad",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            200,
                            233,
                            "easeInQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid252",
                            "scaleY",
                            267,
                            433,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid242",
                            "opacity",
                            133,
                            200,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid243",
                            "opacity",
                            333,
                            233,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid245",
                            "scaleX",
                            200,
                            433,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid238",
                            "opacity",
                            67,
                            200,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "opacity",
                            267,
                            233,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid246",
                            "opacity",
                            200,
                            200,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid247",
                            "opacity",
                            400,
                            233,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid241",
                            "scaleX",
                            133,
                            433,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${Ellipse}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid250",
                            "opacity",
                            267,
                            200,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid251",
                            "opacity",
                            467,
                            233,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid249",
                            "scaleX",
                            267,
                            433,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid240",
                            "scaleY",
                            67,
                            433,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid237",
                            "scaleX",
                            67,
                            433,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0.2',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort6_edgeActions.js");
})("EDGE-26308358");
