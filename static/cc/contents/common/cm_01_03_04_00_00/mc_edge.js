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
                            rect: ['995', '314', '794', '195', 'auto', 'auto'],
                            text: "벨트장력 감소에 따라<br>나타날 수 있는 증상",
                            align: "auto",
                            font: ['굴림', [45, "px"], "rgba(0,75,141,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['994', '552', '609', '251', 'auto', 'auto'],
                            text: "*타이밍 벨트 소음 심함<br>*주행중 출력부족 현상 발생<br>*매연 발생<br>*엔진 부조 현상 발생",
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
                    duration: 1000,
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
                            rect: ['0', '0', '312', '634', 'auto', 'auto'],
                            id: 'timing_back',
                            fill: ['rgba(0,0,0,0)', 'images/timing_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['74', '318', '127', '147', 'auto', 'auto'],
                            id: 'timing_belt3',
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt3.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'timing_belt_3_line_movie',
                            symbolName: 'timing_belt_3_line_movie',
                            rect: ['56', '334', '132', '146', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'timing_belt2_movie',
                            symbolName: 'timing_belt2_movie',
                            rect: ['195', '97', '48', '192', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['101', '392', '50', '74', 'auto', 'auto'],
                            id: 'timing_gear',
                            fill: ['rgba(0,0,0,0)', 'images/timing_gear.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['13', '41', '231', '444', 'auto', 'auto'],
                            id: 'timings',
                            fill: ['rgba(0,0,0,0)', 'images/timings.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'timing_belt1_move',
                            symbolName: 'timing_belt1_move',
                            rect: ['-6', '36', '250', '493', 'auto', 'auto']
                        },
                        {
                            id: 'blackOval_movie3',
                            symbolName: 'blackOval_movie3',
                            rect: ['137', '398', '9', '13', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'driveBelt_bottom_movie',
                            symbolName: 'driveBelt_bottom_movie',
                            rect: ['196', '368', '74', '114', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['55', '285', '241', '331', 'auto', 'auto'],
                            id: 'driveBelt_gears_btm',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_btm.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['55', '285', '241', '332', 'auto', 'auto'],
                            id: 'driveBelt_top',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_top.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'driveBelt_moving',
                            symbolName: 'driveBelt_moving',
                            rect: ['269', '276', '36', '19', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['56', '286', '239', '329', 'auto', 'auto'],
                            id: 'driveBelt_topCap',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_topCap.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['70', '292', '232', '330', 'auto', 'auto'],
                            id: 'driveBelt_gears_top2',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_top2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'blackOval_movie4',
                            symbolName: 'blackOval_movie4',
                            rect: ['183', '466', '9', '13', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['46', '275', '263', '356', 'auto', 'auto'],
                            id: 'driveBelt_gears_top',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_top.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'blackOval_movie1_1',
                            symbolName: 'blackOval_movie1_1',
                            rect: ['68', '179', '9', '13', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'blackOval_movie1_2',
                            symbolName: 'blackOval_movie1_1',
                            rect: ['171', '95', '9', '13', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'TentionBearing_movie',
                            symbolName: 'TentionBearing_movie',
                            rect: ['145', '258', '87', '93', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '312', '634']
                        }
                    }
                },
                timeline: {
                    duration: 1167,
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
                            rect: [0, 0, '686', '889', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/engineBody.png']
                        },
                        {
                            type: 'rect',
                            id: 'EquipmentMover1',
                            symbolName: 'EquipmentMover',
                            rect: ['159px', '198px', 175, 394, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'EquipmentMover2',
                            symbolName: 'EquipmentMover',
                            rect: [249, 235, 175, 394, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'EquipmentMover3',
                            symbolName: 'EquipmentMover',
                            rect: [330, 270, 175, 394, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'EquipmentMover4',
                            symbolName: 'EquipmentMover',
                            rect: [414, 306, 175, 394, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'cam_back',
                            tag: 'img',
                            rect: [142, 146, '544', '275', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cam_back.png']
                        },
                        {
                            type: 'image',
                            id: 'cam_front',
                            tag: 'img',
                            rect: [551, 322, '133', '97', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cam_front.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 690, 889]
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
            "timing_belt_3_line_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '132', '146', 'auto', 'auto'],
                            id: 'timing_belt3_line',
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt3_line.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '132', '146']
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid234",
                            "left",
                            0,
                            167,
                            "linear",
                            "${timing_belt3_line}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid235",
                            "top",
                            0,
                            167,
                            "linear",
                            "${timing_belt3_line}",
                            '-11px',
                            '0px'
                        ]
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
                            rect: ['-204px', '337px', '36', '19', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_mover.png'],
                            id: 'driveBelt_mover',
                            type: 'image',
                            autoOrient: 'true',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '36', '19']
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid228",
                            "location",
                            0,
                            767,
                            "linear",
                            "${driveBelt_mover}",
                            [[-186.5, 346, 0, 0, 0, 0,0],[-174.98, 222.49, 31.7, -52.74, 182.7, -303.94,136.15],[-137.71, 172.41, 150.91, -162.66, 42.41, -45.72,198.68],[14, 7.5, 0, 0, 0, 0,422.76]]
                        ]
                    ]
                }
            },
            "blackOval_movie1_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '-2px', '9', '13', 'auto', 'auto'],
                            id: 'blackOval',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '9', '13']
                        }
                    }
                },
                timeline: {
                    duration: 733,
                    autoPlay: true,
                    data: [
                        [
                            "eid226",
                            "location",
                            0,
                            733,
                            "linear",
                            "${blackOval}",
                            [[5.5, 4.5, 0, 0, 0, 0,0],[48.51, -35.46, 52.26, 5.51, 49.49, 5.21,60.37],[67.33, 3.28, -0.13, 70.77, -0.09, 49.89,107.68],[37.21, 77.06, -11.03, 15.69, -12.32, 17.54,188.05],[-14.44, 75.27, -8.45, -91.36, -16.24, -175.53,267.77],[4.5, 6.5, 0, 0, 0, 0,339.89]]
                        ]
                    ]
                }
            },
            "blackOval_movie2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '4px', '9', '13', 'auto', 'auto'],
                            id: 'blackOvalCopy',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '9', '13']
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid236",
                            "location",
                            0,
                            767,
                            "linear",
                            "${blackOvalCopy}",
                            [[6.5, 10.5, 0, 0, 0, 0,0],[5.67, 42.56, -8.1, 18.47, -22.13, 50.49,32.78],[-22.17, 59.44, -10.68, -4.35, -35.75, -14.56,67.78],[-25.69, 30.32, 24.66, -65.5, 21.41, -56.85,99.37],[4.5, 6.5, 0, 0, 0, 0,139.58]]
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
                            rect: ['3px', '2px', '9', '13', 'auto', 'auto'],
                            id: 'blackOval',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '9', '13']
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid227",
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
            "blackOval_movie3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                            id: 'blackOvalCopy',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '9', '13']
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid231",
                            "location",
                            0,
                            767,
                            "linear",
                            "${blackOvalCopy}",
                            [[4.5, 6.5, 0, 0, 0, 0,0],[-25.69, 30.32, -21.41, 56.85, -24.66, 65.5,40.21],[-22.17, 59.44, 35.75, 14.56, 10.68, 4.35,71.8],[5.67, 42.56, 22.13, -50.49, 8.1, -18.47,106.79],[6.5, 10.5, 0, 0, 0, 0,139.58]]
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
                            rect: [-6, 259, 160, 180, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'CrankMove_rear',
                            opacity: '1',
                            type: 'rect',
                            symbolName: 'CrankMove'
                        },
                        {
                            type: 'image',
                            id: 'piston',
                            tag: 'img',
                            rect: [37, 115, '108', '228', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/piston.png']
                        },
                        {
                            type: 'image',
                            id: 'cylinder',
                            tag: 'img',
                            rect: [36, 113, '110', '235', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cylinder.png']
                        },
                        {
                            type: 'rect',
                            rect: ['40', 41, 103, 131, 'auto', 'auto'],
                            display: 'none',
                            id: 'burnMovie',
                            opacity: '1',
                            symbolName: 'burnMovie',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1', '0.39313', 1], ['50%', '100%']]
                        },
                        {
                            type: 'image',
                            id: 'exhaustValve',
                            tag: 'img',
                            rect: [66, 0, '109', '149', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/exhaustValve.png']
                        },
                        {
                            type: 'image',
                            id: 'intakeValve',
                            tag: 'img',
                            rect: [-20, 45, '117', '113', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intakeValve.png']
                        },
                        {
                            rect: [24, 268, 160, 180, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'CrankMove_front',
                            opacity: '1',
                            type: 'rect',
                            symbolName: 'CrankMove'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 175, 394]
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
                            type: 'image',
                            id: 'crank',
                            rect: [0, 0, 2560, '180px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crank.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 160, 180]
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
                            id: 'driveBelt_bottom',
                            type: 'image',
                            rect: ['0', '0', '74px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_bottom.png', '0px', '0px']
                        },
                        {
                            id: 'driveBelt_bottom_line',
                            type: 'image',
                            rect: ['-34', '-5', '108px', '166px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_bottom_line.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '74', '114']
                        }
                    }
                },
                timeline: {
                    duration: 467,
                    autoPlay: true,
                    data: [
                        [
                            "eid229",
                            "top",
                            0,
                            467,
                            "linear",
                            "${driveBelt_bottom_line}",
                            '-52px',
                            '-5px'
                        ],
                        [
                            "eid230",
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
                            id: 'timing_belt2',
                            type: 'image',
                            rect: ['0', '0', '48px', '192px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt2.png', '0px', '0px']
                        },
                        {
                            id: 'timing_belt2_line',
                            type: 'image',
                            rect: ['-3', '25', '47px', '187px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt2_line.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '48', '192']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid232",
                            "left",
                            0,
                            500,
                            "linear",
                            "${timing_belt2_line}",
                            '1px',
                            '-3px'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            500,
                            "linear",
                            "${timing_belt2_line}",
                            '-10px',
                            '25px'
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
                            rect: ['0', '0', '87', '93', 'auto', 'auto'],
                            id: 'tention_bearing',
                            fill: ['rgba(0,0,0,0)', 'images/tention_bearing.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'blackOval_movie2',
                            symbolName: 'blackOval_movie2',
                            rect: ['69', '20', '9', '13', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '87', '93']
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
            "timing_belt1_move": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 3750, 493, 'auto', 'auto'],
                            id: 'timing_belt1',
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt1.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 250, 493]
                        }
                    }
                },
                timeline: {
                    duration: 1167,
                    autoPlay: true,
                    data: [
                        [
                            "eid195",
                            "left",
                            0,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid197",
                            "left",
                            33,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '0px',
                            '-250px'
                        ],
                        [
                            "eid198",
                            "left",
                            67,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-250px',
                            '-500px'
                        ],
                        [
                            "eid199",
                            "left",
                            100,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-500px',
                            '-750px'
                        ],
                        [
                            "eid200",
                            "left",
                            133,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-750px',
                            '-1000px'
                        ],
                        [
                            "eid201",
                            "left",
                            167,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-1000px',
                            '-1250px'
                        ],
                        [
                            "eid202",
                            "left",
                            200,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-1250px',
                            '-1500px'
                        ],
                        [
                            "eid203",
                            "left",
                            233,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-1500px',
                            '-1750px'
                        ],
                        [
                            "eid204",
                            "left",
                            267,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-1750px',
                            '-1500px'
                        ],
                        [
                            "eid205",
                            "left",
                            300,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-1500px',
                            '-1250px'
                        ],
                        [
                            "eid206",
                            "left",
                            333,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-1250px',
                            '-1000px'
                        ],
                        [
                            "eid207",
                            "left",
                            367,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-1000px',
                            '-750px'
                        ],
                        [
                            "eid208",
                            "left",
                            400,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-750px',
                            '-500px'
                        ],
                        [
                            "eid209",
                            "left",
                            433,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-500px',
                            '-250px'
                        ],
                        [
                            "eid210",
                            "left",
                            467,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-250px',
                            '0px'
                        ],
                        [
                            "eid211",
                            "left",
                            500,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '0px',
                            '-2000px'
                        ],
                        [
                            "eid212",
                            "left",
                            533,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-2000px',
                            '-2250px'
                        ],
                        [
                            "eid213",
                            "left",
                            567,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-2250px',
                            '-2500px'
                        ],
                        [
                            "eid214",
                            "left",
                            600,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-2500px',
                            '-2750px'
                        ],
                        [
                            "eid215",
                            "left",
                            633,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-2750px',
                            '-3000px'
                        ],
                        [
                            "eid216",
                            "left",
                            667,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-3000px',
                            '-3250px'
                        ],
                        [
                            "eid217",
                            "left",
                            700,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-3250px',
                            '-3500px'
                        ],
                        [
                            "eid218",
                            "left",
                            733,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-3500px',
                            '-3250px'
                        ],
                        [
                            "eid220",
                            "left",
                            767,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-3250px',
                            '-3000px'
                        ],
                        [
                            "eid221",
                            "left",
                            800,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-3000px',
                            '-2750px'
                        ],
                        [
                            "eid222",
                            "left",
                            833,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-2750px',
                            '-2500px'
                        ],
                        [
                            "eid223",
                            "left",
                            867,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-2500px',
                            '-2250px'
                        ],
                        [
                            "eid224",
                            "left",
                            900,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-2250px',
                            '-2000px'
                        ],
                        [
                            "eid225",
                            "left",
                            933,
                            0,
                            "linear",
                            "${timing_belt1}",
                            '-2000px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-8934384");
