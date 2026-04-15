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
            js+"jquery-2.0.3.min.js"
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
                            id: 'car',
                            type: 'image',
                            tag: 'img',
                            rect: ['241', '297', '600', '962', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car.png"]
                        },
                        {
                            id: 'ARROW',
                            symbolName: 'ARROW',
                            type: 'rect',
                            rect: ['1458px', '461', '209', '552', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'FLOW2',
                            symbolName: 'FLOW2',
                            type: 'rect',
                            rect: ['1033', '468', '364', '6', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'FLOW1',
                            symbolName: 'FLOW1',
                            type: 'rect',
                            rect: ['1033', '470', '6', '242', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'posLine',
                            type: 'image',
                            tag: 'img',
                            rect: ['513', '706', '387', '65', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"posLine.png"]
                        },
                        {
                            id: 'module2',
                            type: 'image',
                            tag: 'img',
                            rect: ['897', '643', '266', '225', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"module2.png"]
                        },
                        {
                            id: 'module1',
                            type: 'image',
                            tag: 'img',
                            rect: ['1389', '358', '346', '226', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"module1.png"]
                        },
                        {
                            id: 'txt_c3',
                            type: 'text',
                            rect: ['1187px', '876', '713px', '353px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​- 브레이크 제어</p><p style=\"margin: 0px;\">- 동력장치 제어(엔진&amp;변속기 제어)</p><p style=\"margin: 0px;\">- 조향장치 제어</p><p style=\"margin: 0px;\">&nbsp;&nbsp;* 전자제어 스티어링 적용 시(MDPS)</p><p style=\"margin: 0px;\">- 현가장치 제어</p><p style=\"margin: 0px;\">&nbsp; * 전자제어 현가장치 적용 시(ECS)</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>",
                            align: "auto",
                            font: ['굴림', [38, "px"], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c2',
                            type: 'text',
                            rect: ['1071', '408', '270', '48', 'auto', 'auto'],
                            opacity: '0',
                            text: "센서신호 입력",
                            align: "center",
                            font: ['굴림', [42, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_c1',
                            type: 'text',
                            rect: ['943', '680', '172', '149', 'auto', 'auto'],
                            opacity: '0',
                            text: "요레이트<br>&<br>횡G센서",
                            align: "center",
                            font: ['굴림', [42, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt_module',
                            type: 'text',
                            rect: ['1448', '420', '228', '98', 'auto', 'auto'],
                            opacity: '0',
                            text: "ABS & VDC<br>모듈",
                            align: "center",
                            font: ['굴림', [42, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['139', '123', '1595', '105', 'auto', 'auto'],
                            opacity: '0',
                            text: "요레이트센서는 차량이 선회시 회전각도를 산출하여 모듈로 입력합니다.<br>횡G센서는 회전시 원심력을 측정하여 모듈로 입력합니다.",
                            align: "auto",
                            font: ['나눔고딕', [45, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['95', '18', '687', '76', 'auto', 'auto'],
                            opacity: '0',
                            text: "요레이트 & 횡G센서",
                            align: "center",
                            font: ['나눔고딕', [70, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1900', '1230', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1433,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "opacity",
                            0,
                            467,
                            "linear",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "top",
                            467,
                            367,
                            "linear",
                            "${car}",
                            '297px',
                            '267px'
                        ],
                        [
                            "eid38",
                            "height",
                            1433,
                            0,
                            "linear",
                            "${txt_c3}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            834,
                            300,
                            "linear",
                            "${posLine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1134,
                            299,
                            "linear",
                            "${ARROW}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            834,
                            300,
                            "linear",
                            "${module2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1000,
                            300,
                            "linear",
                            "${txt_c3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1001,
                            299,
                            "linear",
                            "${txt_module}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            834,
                            300,
                            "linear",
                            "${module1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1000,
                            300,
                            "linear",
                            "${txt_c1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            300,
                            467,
                            "linear",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "font-size",
                            1433,
                            0,
                            "linear",
                            "${txt_c3}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1134,
                            299,
                            "linear",
                            "${FLOW2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            467,
                            367,
                            "linear",
                            "${car}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "width",
                            1433,
                            0,
                            "linear",
                            "${txt_c3}",
                            '713px',
                            '713px'
                        ],
                        [
                            "eid34",
                            "left",
                            1433,
                            0,
                            "linear",
                            "${txt_c3}",
                            '1187px',
                            '1187px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1000,
                            300,
                            "linear",
                            "${txt_c2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            1134,
                            299,
                            "linear",
                            "${FLOW1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "ARROW": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [60, 163, '89', '222', 'auto', 'auto'],
                            id: 'arrow_back',
                            fill: ['rgba(0,0,0,0)', 'images/arrow_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [25, 87, '158', '300', 'auto', 'auto'],
                            id: 'arrow_mover',
                            fill: ['rgba(0,0,0,0)', 'images/arrow_mover.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 0, '209', '552', 'auto', 'auto'],
                            id: 'arrow_cover',
                            fill: ['rgba(0,0,0,0)', 'images/arrow_cover.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 209, 552]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid25",
                            "top",
                            0,
                            500,
                            "linear",
                            "${arrow_mover}",
                            '87px',
                            '110px'
                        ]
                    ]
                }
            },
            "FLOW1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'FLOW_SRC_MOVE2',
                            symbolName: 'FLOW_SRC_MOVE',
                            rect: [-332, 146, 670, 6, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6, 242]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "FLOW2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['180', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'FLOW_SRC_MOVE2Copy',
                            symbolName: 'FLOW_SRC_MOVE',
                            rect: [-167, 0, 670, 6, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 364, 6]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "FLOW_SRC_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '778', '6', 'auto', 'auto'],
                            id: 'flow_src',
                            fill: ['rgba(0,0,0,0)', 'images/flow_src.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 670, 6]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${flow_src}",
                            '0px',
                            '-110px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-31448746");
