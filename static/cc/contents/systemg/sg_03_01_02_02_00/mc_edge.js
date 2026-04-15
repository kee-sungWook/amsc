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
                            id: 'bottom',
                            type: 'image',
                            tag: 'img',
                            rect: ['176', '13', '921', '1173', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bottom.png"]
                        },
                        {
                            id: 'Mid_gear',
                            symbolName: 'Mid_gear',
                            type: 'rect',
                            rect: ['353', '334', '674', '674', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['26'],[],['0.81']]
                        },
                        {
                            id: 'cover',
                            type: 'image',
                            tag: 'img',
                            rect: ['221', '63', '876', '1153', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cover.png"]
                        },
                        {
                            id: 'pad',
                            type: 'image',
                            tag: 'img',
                            rect: ['939', '47', '318', '803', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pad.png"]
                        },
                        {
                            id: 'GEAR',
                            symbolName: 'GEAR',
                            type: 'rect',
                            rect: ['407', '281', '615', '755', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'SENSOR',
                            symbolName: 'SENSOR',
                            type: 'rect',
                            rect: ['65', '656', '367', '97', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['1349px', '239px', '946', '934px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​ABS가 장착되어 있지 않는 자동차와 동일한 디스크를 사용하지만 회전속도를 감지하는 톤 휠과 ABS센서가 추가로 장착되어 있습니다.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">제동 시 디스크와 패드의 마찰에 의한 열이 발생하고 제동장치의 과도한 사용으로 과열되면 제동거리가 길어질 수 있으나 디스크가 냉각되면 정상 수준으로 복귀됩니다.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">디스크가 과열된 상태로 급제동을 반복하면 디스크가 변형될 수 있으며, 디스크가 과열된 상태로 디스크에 물을 분사하면 급속 냉각되면서 디스크가 변형될 수 있어 세차 시 주의가 필요합니다.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">디스크가 변형되면 제동 시 차체의 떨림이 발생해서 교환이 필요합니다.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['1349px', '68px', '898', '86', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">ABS브레이크 디스크란 ?​</p>",
                            align: "auto",
                            font: ['굴림', [80, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2400', '1230', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "gogo": 1767
                    },
                    data: [
                        [
                            "eid47",
                            "opacity",
                            933,
                            300,
                            "linear",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${txt2}",
                            '1349px',
                            '1349px'
                        ],
                        [
                            "eid42",
                            "left",
                            1767,
                            500,
                            "linear",
                            "${pad}",
                            '939px',
                            '897px'
                        ],
                        [
                            "eid44",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${pad}",
                            '897px',
                            '939px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${bottom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            200,
                            500,
                            "linear",
                            "${GEAR}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            433,
                            500,
                            "linear",
                            "${SENSOR}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${txt2}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid49",
                            "opacity",
                            1166,
                            300,
                            "linear",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${txt2}",
                            '934px',
                            '934px'
                        ],
                        [
                            "eid33",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Mid_gear}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${txt1}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid43",
                            "top",
                            1767,
                            500,
                            "linear",
                            "${pad}",
                            '47px',
                            '43px'
                        ],
                        [
                            "eid45",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${pad}",
                            '43px',
                            '47px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            300,
                            500,
                            "linear",
                            "${pad}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            100,
                            500,
                            "linear",
                            "${cover}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${txt1}",
                            '1349px',
                            '1349px'
                        ]
                    ]
                }
            },
            "SENSOR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [303, 5, '64', '48', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor_head1.png'],
                            id: 'sensor_head1',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sensor_head2.png'],
                            id: 'sensor_head2',
                            opacity: '0',
                            rect: [303, 5, '64', '48', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            rect: [0, 0, '337', '97', 'auto', 'auto'],
                            id: 'sensor_body',
                            fill: ['rgba(0,0,0,0)', 'images/sensor_body.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 367, 97]
                        }
                    }
                },
                timeline: {
                    duration: 133,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "opacity",
                            0,
                            33,
                            "linear",
                            "${sensor_head2}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid5",
                            "opacity",
                            67,
                            33,
                            "linear",
                            "${sensor_head2}",
                            '0.8',
                            '0'
                        ]
                    ]
                }
            },
            "Mid_gear": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/m_gear_shadow.png'],
                            id: 'm_gear_shadow',
                            rect: [0, 0, '674', '674', 'auto', 'auto'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/m_gear.png'],
                            id: 'm_gear',
                            rect: [35, 35, '604', '604', 'auto', 'auto'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 674, 674]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid27",
                            "rotateZ",
                            0,
                            5000,
                            "linear",
                            "${m_gear_shadow}",
                            '0deg',
                            '-360deg'
                        ],
                        [
                            "eid26",
                            "rotateZ",
                            0,
                            5000,
                            "linear",
                            "${m_gear}",
                            '0deg',
                            '-360deg'
                        ]
                    ]
                }
            },
            "GEAR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [293, 307, '282', '219', 'auto', 'auto'],
                            id: 'gearBack',
                            fill: ['rgba(0,0,0,0)', 'images/gearBack.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [280, 259, '327', '294', 'auto', 'auto'],
                            id: 'gearLine',
                            fill: ['rgba(0,0,0,0)', 'images/gearLine.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'FRONT',
                            fill: ['rgba(0,0,0,0)', 'images/FRONT.png'],
                            rect: [0, 0, '615', '755', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 615, 755]
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "left",
                            0,
                            200,
                            "linear",
                            "${gearLine}",
                            '280px',
                            '270px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            200,
                            "linear",
                            "${gearLine}",
                            '259px',
                            '278px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-10210187");
