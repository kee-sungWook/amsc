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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'btn3',
                            symbolName: 'btn3',
                            type: 'rect',
                            rect: ['1311', '914px', '964', '124', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'btn2',
                            symbolName: 'btn2',
                            type: 'rect',
                            rect: ['1311', '788px', '964', '124', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'btn1',
                            symbolName: 'btn1',
                            type: 'rect',
                            rect: ['1311', '650px', '964', '124', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt2_2',
                            type: 'text',
                            rect: ['1338px', '470px', '1033px', '177', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">타이어에 큰 마모나 이상이 발생하면 </p><p style=\"margin:0px\">교환시기에 상관없이 즉시 교환한다​</p>",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "70px", "", ""]
                        },
                        {
                            id: 'txt2_1',
                            type: 'text',
                            rect: ['1308px', '375px', '1092px', '111', 'auto', 'auto'],
                            opacity: '0',
                            text: "2. 타이어 교환 : 매 50,000Km 점검 및 교환",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(199,0,95)", "normal", "none", "normal", "break-word", ""],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'txt1_2',
                            type: 'text',
                            rect: ['1338px', '114px', '1082px', '309', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">타이어 위치교환은 운행조건에 따라 각각의 </p><p style=\"margin:0px\">타이어에 소모되는 부분이 달라 주기적인 </p><p style=\"margin:0px\">위치교환을 해주어야만 정상적으로 사용가능.​</p>",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "70px", "", ""]
                        },
                        {
                            id: 'txt1_1',
                            type: 'text',
                            rect: ['1309px', '21px', '1032px', '111', 'auto', 'auto'],
                            opacity: '0',
                            text: "1. 타이어위치 교환 : 매 10,000Km",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(199,0,95)", "normal", "none", "normal", "break-word", ""],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'backPan',
                            type: 'image',
                            tag: 'img',
                            rect: ['81px', '790px', '1159', '345', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"backPan.png"]
                        },
                        {
                            id: 'tire',
                            type: 'image',
                            tag: 'img',
                            rect: ['184px', '7px', '809', '1027', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tire.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2400px', '1230px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1833,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "top",
                            500,
                            300,
                            "easeInQuad",
                            "${tire}",
                            '7px',
                            '67px'
                        ],
                        [
                            "eid151",
                            "left",
                            1125,
                            250,
                            "easeOutQuad",
                            "${txt1_2}",
                            '1338px',
                            '1308px'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            750,
                            "easeOutQuad",
                            "${backPan}",
                            '81px',
                            '11px'
                        ],
                        [
                            "eid157",
                            "opacity",
                            1208,
                            250,
                            "easeOutQuad",
                            "${txt2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            1458,
                            250,
                            "easeOutQuad",
                            "${btn2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "scaleY",
                            1000,
                            250,
                            "easeOutQuad",
                            "${txt1_1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleY",
                            800,
                            100,
                            "easeInQuad",
                            "${tire}",
                            '1',
                            '0.96105'
                        ],
                        [
                            "eid46",
                            "scaleY",
                            899,
                            101,
                            "easeInQuad",
                            "${tire}",
                            '0.96105',
                            '1'
                        ],
                        [
                            "eid47",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInQuad",
                            "${tire}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid205",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInQuad",
                            "${tire}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid206",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInQuad",
                            "${tire}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid207",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInQuad",
                            "${tire}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid208",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInQuad",
                            "${tire}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid209",
                            "transform-origin",
                            0,
                            0,
                            "easeInQuad",
                            "${tire}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid180",
                            "opacity",
                            1333,
                            250,
                            "easeOutQuad",
                            "${btn1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "left",
                            1208,
                            250,
                            "easeOutQuad",
                            "${txt2_2}",
                            '1338px',
                            '1308px'
                        ],
                        [
                            "eid184",
                            "opacity",
                            1583,
                            250,
                            "easeOutQuad",
                            "${btn3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid176",
                            "top",
                            1458,
                            250,
                            "easeOutQuad",
                            "${btn2}",
                            '788px',
                            '858px'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            1000,
                            250,
                            "easeOutQuad",
                            "${txt1_1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid174",
                            "top",
                            1333,
                            250,
                            "easeOutQuad",
                            "${btn1}",
                            '650px',
                            '680px'
                        ],
                        [
                            "eid145",
                            "scaleY",
                            1083,
                            250,
                            "easeOutQuad",
                            "${txt2_1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            0,
                            750,
                            "easeOutQuad",
                            "${backPan}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            1000,
                            250,
                            "easeOutQuad",
                            "${txt1_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "scaleX",
                            1083,
                            250,
                            "easeOutQuad",
                            "${txt2_1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid178",
                            "top",
                            1583,
                            250,
                            "easeOutQuad",
                            "${btn3}",
                            '914px',
                            '1024px'
                        ],
                        [
                            "eid155",
                            "opacity",
                            1125,
                            250,
                            "easeOutQuad",
                            "${txt1_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            1083,
                            250,
                            "easeOutQuad",
                            "${txt2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            500,
                            300,
                            "easeInQuad",
                            "${tire}",
                            '0',
                            '1'
                        ],
                            [ "eid31", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn3}', [0] ] ],
                            [ "eid32", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn2}', [0] ] ],
                            [ "eid33", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn1}', [0] ] ]
                    ]
                }
            },
            "btn1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '960px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody1',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['118px', '27px', '702px', '85px', 'auto', 'auto'],
                            id: 'btnTxt1',
                            text: '제동력 비교',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow1',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '964px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "out 1": 0,
                        "over": 1000,
                        "over 1": 1000
                    },
                    data: [
                        [
                            "eid30",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody1}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid27",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody1}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid28",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt1}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,1)'
                        ],
                        [
                            "eid29",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt1}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            },
            "btn2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '960px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody2',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow2',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'text',
                            rect: ['118px', '27px', '708px', '85px', 'auto', 'auto'],
                            id: 'btnTxt2',
                            text: '마모증상 분석',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '964px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "over": 1000
                    },
                    data: [
                        [
                            "eid21",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody2}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,1)'
                        ],
                        [
                            "eid22",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody2}",
                            'rgba(255,255,255,1)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid19",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt2}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,1)'
                        ],
                        [
                            "eid20",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt2}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            },
            "btn3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '960px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody3',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,75,141,1.00)']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow3',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'text',
                            rect: ['118px', '27px', '708px', '85px', 'auto', 'auto'],
                            id: 'btnTxt3',
                            text: '타이어 표기법',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '964px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "over": 1000
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody3}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,1)'
                        ],
                        [
                            "eid6",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody3}",
                            'rgba(255,255,255,1)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid3",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt3}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,1)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt3}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-1039014998");
