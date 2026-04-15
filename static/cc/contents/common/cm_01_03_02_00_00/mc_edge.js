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
            'gAudioPreloadPreference': 'false',
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
                            id: 'Engine',
                            symbolName: 'Engine',
                            type: 'rect',
                            rect: ['98', '83', '690', '889', 'auto', 'auto']
                        },
                        {
                            id: 'Timing',
                            symbolName: 'Timing',
                            type: 'rect',
                            rect: ['640', '299', '312', '634', 'auto', 'auto']
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['994', '357', '794', '195', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​타이밍벨트 절손으로 인한 엔진 구동 정지에 따라 나타날수 있는 증상</p>",
                            align: "auto",
                            font: ['굴림', [45, "px"], "rgba(0,75,141,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['994', '552', '609', '251', 'auto', 'auto'],
                            text: "*엔진시동 불능<br>*실린더 헤드 및 피스톤 손상<br>*주행시 제동불능 현상 발생<br>*파워스티어링 핸들 작동불능",
                            align: "auto",
                            font: ['굴림', [45, "px"], "rgba(0,75,141,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "60px", "", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1806', '1077', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid171",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Timing}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid164",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Engine}",
                            '98px',
                            '98px'
                        ],
                        [
                            "eid162",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Engine}",
                            '83px',
                            '83px'
                        ],
                        [
                            "eid168",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Timing}",
                            '640px',
                            '640px'
                        ]
                    ]
                }
            },
            "Timing": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'timing_back',
                            tag: 'img',
                            rect: ['0', '0', '312', '634', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_back.png']
                        },
                        {
                            rect: ['74', '318', '127', '147', 'auto', 'auto'],
                            id: 'timing_belt3_movie',
                            symbolName: 'timing_belt3_movie',
                            type: 'rect'
                        },
                        {
                            rect: ['195', '97', '48', '192', 'auto', 'auto'],
                            id: 'timing_belt2_movie',
                            symbolName: 'timing_belt2_movie',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'timing_gear',
                            tag: 'img',
                            rect: ['101', '392', '50', '74', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_gear.png']
                        },
                        {
                            type: 'image',
                            id: 'timings',
                            tag: 'img',
                            rect: ['13', '41', '231', '444', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timings.png']
                        },
                        {
                            rect: ['10', '38', '233', '330', 'auto', 'auto'],
                            id: 'timing_belt1_movie',
                            symbolName: 'timing_belt1_movie',
                            type: 'rect'
                        },
                        {
                            rect: ['196', '368', '74', '114', 'auto', 'auto'],
                            id: 'driveBelt_bottom_movie',
                            symbolName: 'driveBelt_bottom_movie',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'driveBelt_gears_btm',
                            tag: 'img',
                            rect: ['55', '285', '241', '331', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_btm.png']
                        },
                        {
                            type: 'image',
                            id: 'driveBelt_top',
                            tag: 'img',
                            rect: ['55', '285', '241', '332', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_top.png']
                        },
                        {
                            rect: ['269', '276', '36', '19', 'auto', 'auto'],
                            id: 'driveBelt_moving',
                            symbolName: 'driveBelt_moving',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'driveBelt_topCap',
                            tag: 'img',
                            rect: ['56', '286', '239', '329', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_topCap.png']
                        },
                        {
                            type: 'image',
                            id: 'driveBelt_gears_top2',
                            tag: 'img',
                            rect: ['70', '292', '232', '330', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_top2.png']
                        },
                        {
                            rect: ['183', '466', '9', '13', 'auto', 'auto'],
                            id: 'blackOval_movie4',
                            symbolName: 'blackOval_movie4',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'driveBelt_gears_top',
                            tag: 'img',
                            rect: ['46', '275', '263', '356', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_top.png']
                        },
                        {
                            rect: ['145', '258', '87', '93', 'auto', 'auto'],
                            id: 'TentionBearing_movie',
                            symbolName: 'TentionBearing_movie',
                            type: 'rect'
                        },
                        {
                            rect: ['219', '56', '9px', '13px', 'auto', 'auto'],
                            id: 'blackOval',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png', '0px', '0px']
                        },
                        {
                            rect: ['116', '139', '9px', '13px', 'auto', 'auto'],
                            id: 'blackOvalCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png', '0px', '0px']
                        },
                        {
                            rect: ['215', '279', '9px', '13px', 'auto', 'auto'],
                            id: 'blackOvalCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png', '0px', '0px']
                        },
                        {
                            rect: ['103', '437', '9px', '13px', 'auto', 'auto'],
                            id: 'blackOvalCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '312', '634']
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Engine": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'engineBody',
                            tag: 'img',
                            rect: ['0', '0', '686', '889', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/engineBody.png']
                        },
                        {
                            rect: ['159px', '198px', '175', '394', 'auto', 'auto'],
                            id: 'EquipmentMover1',
                            symbolName: 'EquipmentMover',
                            type: 'rect'
                        },
                        {
                            rect: ['249', '235', '175', '394', 'auto', 'auto'],
                            id: 'EquipmentMover2',
                            symbolName: 'EquipmentMover',
                            type: 'rect'
                        },
                        {
                            rect: ['330', '270', '175', '394', 'auto', 'auto'],
                            id: 'EquipmentMover3',
                            symbolName: 'EquipmentMover',
                            type: 'rect'
                        },
                        {
                            rect: ['414', '306', '175', '394', 'auto', 'auto'],
                            id: 'EquipmentMover4',
                            symbolName: 'EquipmentMover',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'cam_back',
                            tag: 'img',
                            rect: ['142', '146', '544', '275', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cam_back.png']
                        },
                        {
                            type: 'image',
                            id: 'cam_front',
                            tag: 'img',
                            rect: ['551', '322', '133', '97', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cam_front.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690', '889']
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
            "driveBelt_moving": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'driveBelt_mover',
                            opacity: '1',
                            rect: ['-204px', '337px', '36', '19', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img',
                            autoOrient: 'true',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_mover.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '36', '19']
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid210",
                            "location",
                            0,
                            767,
                            "linear",
                            "${driveBelt_mover}",
                            [[-186.5, 346, 0, 0, 0, 0,0],[-174.98, 222.49, 31.7, -52.74, 182.7, -303.94,136.15],[-137.71, 172.41, 150.91, -162.66, 42.41, -45.72,198.68],[14, 7.5, 0, 0, 0, 0,422.76]]
                        ],
                        [
                            "eid214",
                            "display",
                            0,
                            0,
                            "linear",
                            "${driveBelt_mover}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "blackOval_movie4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'blackOval',
                            tag: 'img',
                            rect: ['3px', '2px', '9', '13', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '9', '13']
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid209",
                            "location",
                            0,
                            767,
                            "linear",
                            "${blackOval}",
                            [[7.5, 8.3, 0, 0, 0, 0,0],[9.96, 42.37, -44.71, 162.85, -23.76, 86.53,35.8],[-50.6, 137.52, -70.07, 48.71, -48.06, 33.41,150.63],[-76.12, 118.59, 78.26, -298.97, 4.91, -18.77,194.38],[4.5, 6.5, 0, 0, 0, 0,337.78]]
                        ]
                    ]
                }
            },
            "EquipmentMover": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'CrankMove_rear',
                            symbolName: 'CrankMove',
                            rect: ['-6', '259', '160', '180', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            type: 'image',
                            id: 'piston',
                            tag: 'img',
                            rect: ['37', '115', '108', '228', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/piston.png']
                        },
                        {
                            type: 'image',
                            id: 'cylinder',
                            tag: 'img',
                            rect: ['36', '113', '110', '235', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cylinder.png']
                        },
                        {
                            transform: [[], [], [], ['1', '0.39313']],
                            id: 'burnMovie',
                            rect: ['40', '41', '103', '131', 'auto', 'auto'],
                            display: 'none',
                            opacity: '1',
                            symbolName: 'burnMovie',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'exhaustValve',
                            tag: 'img',
                            rect: ['66', '0', '109', '149', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/exhaustValve.png']
                        },
                        {
                            type: 'image',
                            id: 'intakeValve',
                            tag: 'img',
                            rect: ['-20', '45', '117', '113', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intakeValve.png']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'CrankMove_front',
                            symbolName: 'CrankMove',
                            rect: ['24', '268', '160', '180', 'auto', 'auto'],
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '175', '394']
                        }
                    }
                },
                timeline: {
                    duration: 2134,
                    autoPlay: false,
                    labels: {
                        "step1": 0,
                        "step2": 533,
                        "step3": 1067,
                        "step4": 1600
                    },
                    data: [
                        [
                            "eid111",
                            "scaleY",
                            1067,
                            533,
                            "linear",
                            "${burnMovie}",
                            '0.39313',
                            '1.15648'
                        ],
                        [
                            "eid113",
                            "scaleY",
                            1600,
                            133,
                            "linear",
                            "${burnMovie}",
                            '1.15648',
                            '0.98091'
                        ],
                        [
                            "eid112",
                            "top",
                            1067,
                            533,
                            "linear",
                            "${burnMovie}",
                            '41px',
                            '136px'
                        ],
                        [
                            "eid114",
                            "top",
                            1600,
                            133,
                            "linear",
                            "${burnMovie}",
                            '136px',
                            '113px'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            533,
                            "linear",
                            "${piston}",
                            '115px',
                            '208px'
                        ],
                        [
                            "eid84",
                            "top",
                            533,
                            534,
                            "linear",
                            "${piston}",
                            '208px',
                            '115px'
                        ],
                        [
                            "eid91",
                            "top",
                            1067,
                            533,
                            "linear",
                            "${piston}",
                            '115px',
                            '208px'
                        ],
                        [
                            "eid92",
                            "top",
                            1600,
                            534,
                            "linear",
                            "${piston}",
                            '208px',
                            '115px'
                        ],
                        [
                            "eid127",
                            "top",
                            0,
                            267,
                            "linear",
                            "${exhaustValve}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid131",
                            "top",
                            533,
                            267,
                            "linear",
                            "${exhaustValve}",
                            '-20px',
                            '0px'
                        ],
                        [
                            "eid128",
                            "left",
                            0,
                            267,
                            "linear",
                            "${exhaustValve}",
                            '66px',
                            '86px'
                        ],
                        [
                            "eid132",
                            "left",
                            533,
                            267,
                            "linear",
                            "${exhaustValve}",
                            '86px',
                            '66px'
                        ],
                        [
                            "eid126",
                            "left",
                            0,
                            267,
                            "linear",
                            "${intakeValve}",
                            '-20px',
                            '0px'
                        ],
                        [
                            "eid122",
                            "left",
                            1600,
                            267,
                            "linear",
                            "${intakeValve}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid125",
                            "top",
                            0,
                            267,
                            "linear",
                            "${intakeValve}",
                            '45px',
                            '65px'
                        ],
                        [
                            "eid121",
                            "top",
                            1600,
                            267,
                            "linear",
                            "${intakeValve}",
                            '65px',
                            '45px'
                        ],
                        [
                            "eid115",
                            "opacity",
                            1067,
                            666,
                            "linear",
                            "${burnMovie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${burnMovie}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            1067,
                            0,
                            "linear",
                            "${burnMovie}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            1733,
                            0,
                            "linear",
                            "${burnMovie}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "CrankMove": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '2560', '180px', 'auto', 'auto'],
                            id: 'crank',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/crank.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '160', '180']
                        }
                    }
                },
                timeline: {
                    duration: 2133,
                    autoPlay: false,
                    labels: {
                        "down": 533
                    },
                    data: [
                        [
                            "eid65",
                            "left",
                            0,
                            0,
                            "linear",
                            "${crank}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid66",
                            "left",
                            67,
                            0,
                            "linear",
                            "${crank}",
                            '0px',
                            '-160px'
                        ],
                        [
                            "eid67",
                            "left",
                            133,
                            0,
                            "linear",
                            "${crank}",
                            '-160px',
                            '-320px'
                        ],
                        [
                            "eid68",
                            "left",
                            200,
                            0,
                            "linear",
                            "${crank}",
                            '-320px',
                            '-480px'
                        ],
                        [
                            "eid69",
                            "left",
                            267,
                            0,
                            "linear",
                            "${crank}",
                            '-480px',
                            '-640px'
                        ],
                        [
                            "eid70",
                            "left",
                            333,
                            0,
                            "linear",
                            "${crank}",
                            '-640px',
                            '-800px'
                        ],
                        [
                            "eid71",
                            "left",
                            400,
                            0,
                            "linear",
                            "${crank}",
                            '-800px',
                            '-960px'
                        ],
                        [
                            "eid72",
                            "left",
                            467,
                            0,
                            "linear",
                            "${crank}",
                            '-960px',
                            '-1120px'
                        ],
                        [
                            "eid73",
                            "left",
                            533,
                            0,
                            "linear",
                            "${crank}",
                            '-1120px',
                            '-1280px'
                        ],
                        [
                            "eid74",
                            "left",
                            600,
                            0,
                            "linear",
                            "${crank}",
                            '-1280px',
                            '-1440px'
                        ],
                        [
                            "eid75",
                            "left",
                            667,
                            0,
                            "linear",
                            "${crank}",
                            '-1440px',
                            '-1600px'
                        ],
                        [
                            "eid76",
                            "left",
                            733,
                            0,
                            "linear",
                            "${crank}",
                            '-1600px',
                            '-1760px'
                        ],
                        [
                            "eid77",
                            "left",
                            800,
                            0,
                            "linear",
                            "${crank}",
                            '-1760px',
                            '-1920px'
                        ],
                        [
                            "eid78",
                            "left",
                            867,
                            0,
                            "linear",
                            "${crank}",
                            '0px',
                            '-2080px'
                        ],
                        [
                            "eid79",
                            "left",
                            933,
                            0,
                            "linear",
                            "${crank}",
                            '-2080px',
                            '-2240px'
                        ],
                        [
                            "eid80",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${crank}",
                            '-2240px',
                            '-2400px'
                        ],
                        [
                            "eid82",
                            "left",
                            1067,
                            0,
                            "linear",
                            "${crank}",
                            '-2400px',
                            '0px'
                        ],
                        [
                            "eid141",
                            "left",
                            1133,
                            0,
                            "linear",
                            "${crank}",
                            '0px',
                            '-160px'
                        ],
                        [
                            "eid142",
                            "left",
                            1199,
                            0,
                            "linear",
                            "${crank}",
                            '-160px',
                            '-320px'
                        ],
                        [
                            "eid143",
                            "left",
                            1266,
                            0,
                            "linear",
                            "${crank}",
                            '-320px',
                            '-480px'
                        ],
                        [
                            "eid144",
                            "left",
                            1333,
                            0,
                            "linear",
                            "${crank}",
                            '-480px',
                            '-640px'
                        ],
                        [
                            "eid145",
                            "left",
                            1399,
                            0,
                            "linear",
                            "${crank}",
                            '-640px',
                            '-800px'
                        ],
                        [
                            "eid146",
                            "left",
                            1466,
                            0,
                            "linear",
                            "${crank}",
                            '-800px',
                            '-960px'
                        ],
                        [
                            "eid147",
                            "left",
                            1533,
                            0,
                            "linear",
                            "${crank}",
                            '-960px',
                            '-1120px'
                        ],
                        [
                            "eid148",
                            "left",
                            1599,
                            0,
                            "linear",
                            "${crank}",
                            '-1120px',
                            '-1280px'
                        ],
                        [
                            "eid149",
                            "left",
                            1666,
                            0,
                            "linear",
                            "${crank}",
                            '-1280px',
                            '-1440px'
                        ],
                        [
                            "eid150",
                            "left",
                            1733,
                            0,
                            "linear",
                            "${crank}",
                            '-1440px',
                            '-1600px'
                        ],
                        [
                            "eid151",
                            "left",
                            1799,
                            0,
                            "linear",
                            "${crank}",
                            '-1600px',
                            '-1760px'
                        ],
                        [
                            "eid152",
                            "left",
                            1866,
                            0,
                            "linear",
                            "${crank}",
                            '-1760px',
                            '-1920px'
                        ],
                        [
                            "eid153",
                            "left",
                            1933,
                            0,
                            "linear",
                            "${crank}",
                            '-1920px',
                            '-2080px'
                        ],
                        [
                            "eid154",
                            "left",
                            1999,
                            0,
                            "linear",
                            "${crank}",
                            '-2080px',
                            '-2240px'
                        ],
                        [
                            "eid155",
                            "left",
                            2066,
                            0,
                            "linear",
                            "${crank}",
                            '-2240px',
                            '-2400px'
                        ],
                        [
                            "eid156",
                            "left",
                            2133,
                            0,
                            "linear",
                            "${crank}",
                            '-2400px',
                            '0px'
                        ]
                    ]
                }
            },
            "burnMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/burn.png'],
                            overflow: 'visible',
                            id: 'burn',
                            rect: [0, 0, '103', '131', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            rect: [0, 0, '103px', '131px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'burn2',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/burn2.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '103px', '131px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'burn3',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/burn3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 103, 131]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid95",
                            "display",
                            0,
                            0,
                            "linear",
                            "${burn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            67,
                            0,
                            "linear",
                            "${burn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            400,
                            0,
                            "linear",
                            "${burn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            0,
                            0,
                            "linear",
                            "${burn2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            67,
                            0,
                            "linear",
                            "${burn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            200,
                            0,
                            "linear",
                            "${burn2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            267,
                            0,
                            "linear",
                            "${burn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            400,
                            0,
                            "linear",
                            "${burn2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            0,
                            0,
                            "linear",
                            "${burn3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            200,
                            0,
                            "linear",
                            "${burn3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid100",
                            "display",
                            267,
                            0,
                            "linear",
                            "${burn3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            400,
                            0,
                            "linear",
                            "${burn3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "driveBelt_bottom_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '74px', '114px', 'auto', 'auto'],
                            id: 'driveBelt_bottom',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_bottom.png', '0px', '0px']
                        },
                        {
                            rect: ['-34', '-5', '108px', '166px', 'auto', 'auto'],
                            id: 'driveBelt_bottom_line',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_bottom_line.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '74', '114']
                        }
                    }
                },
                timeline: {
                    duration: 467,
                    autoPlay: true,
                    data: [
                        [
                            "eid211",
                            "top",
                            0,
                            467,
                            "linear",
                            "${driveBelt_bottom_line}",
                            '-52px',
                            '-5px'
                        ],
                        [
                            "eid212",
                            "left",
                            0,
                            467,
                            "linear",
                            "${driveBelt_bottom_line}",
                            '-6px',
                            '-34px'
                        ]
                    ]
                }
            },
            "timing_belt2_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'timing_belt2',
                            rect: [0, 0, '48px', '192px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'timing_belt2_red',
                            opacity: '0.2',
                            rect: [1, 0, '47px', '191px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt2_red.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 48, 192]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid206",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${timing_belt2_red}",
                            '0.2',
                            '0.8'
                        ],
                        [
                            "eid208",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${timing_belt2_red}",
                            '0.8',
                            '0.2'
                        ]
                    ]
                }
            },
            "TentionBearing_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'tention_bearing',
                            tag: 'img',
                            rect: [0, 0, '87', '93', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tention_bearing.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 87, 93]
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "timing_belt3_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'timing_belt3',
                            tag: 'img',
                            rect: [0, 0, '127', '147', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt3.png']
                        },
                        {
                            type: 'image',
                            id: 'timing_belt3_red',
                            opacity: '0.20000000298023224',
                            rect: [0, 0, '126px', '145px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt3_red.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 127, 147]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid197",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${timing_belt3_red}",
                            '0.20000000298023224',
                            '0.8'
                        ],
                        [
                            "eid199",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${timing_belt3_red}",
                            '0.8',
                            '0.20000000298023224'
                        ]
                    ]
                }
            },
            "timing_belt1_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'timing_belt1',
                            tag: 'img',
                            rect: [0, 0, 233, 330, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt1.png']
                        },
                        {
                            type: 'image',
                            id: 'timing_belt1_red',
                            opacity: '0.20000000298023224',
                            rect: [1, 0, '231px', '328px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt1_red.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 233, 330]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid195",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${timing_belt1_red}",
                            '0.20000000298023224',
                            '0.8'
                        ],
                        [
                            "eid196",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${timing_belt1_red}",
                            '0.800000',
                            '0.2'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-8934384");
