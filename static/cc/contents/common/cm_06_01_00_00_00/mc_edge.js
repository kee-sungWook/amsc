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
                            rect: ['504', '187', '690', '889', 'auto', 'auto']
                        },
                        {
                            id: 'waterPump',
                            type: 'image',
                            tag: 'img',
                            rect: ['1077', '579', '215', '228', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"waterPump.png"]
                        },
                        {
                            id: 'Timing',
                            symbolName: 'Timing',
                            type: 'rect',
                            rect: ['1043', '412', '312', '634', 'auto', 'auto']
                        },
                        {
                            id: 'batt2',
                            type: 'image',
                            rect: ['339px', '83px', '718px', '931px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"batt2.png",'0px','0px']
                        },
                        {
                            id: 'spark',
                            symbolName: 'spark',
                            type: 'rect',
                            rect: ['716', '439', '140', '82', 'auto', 'auto']
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['1329', '285', '251', '52', 'auto', 'auto'],
                            text: "점화플러그",
                            align: "center",
                            font: ['굴림', [45, "px"], "rgba(0,75,141,1)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "60px", "", ""]
                        },
                        {
                            id: 'txt2Copy2',
                            type: 'text',
                            rect: ['123', '770', '251', '52', 'auto', 'auto'],
                            opacity: '0',
                            text: "점화코일",
                            align: "center",
                            font: ['굴림', [45, "px"], "rgba(0,75,141,1)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "60px", "", ""]
                        },
                        {
                            id: 'txt2Copy',
                            type: 'text',
                            rect: ['753', '34', '398', '52', 'auto', 'auto'],
                            text: "점화플러그 케이블",
                            align: "center",
                            font: ['굴림', [45, "px"], "rgba(0,75,141,1)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "60px", "", ""]
                        },
                        {
                            id: 'line_01',
                            type: 'image',
                            rect: ['588', '57', '166px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line_01.png",'0px','0px']
                        },
                        {
                            id: 'line_012',
                            type: 'image',
                            rect: ['194', '614', '166px', '106px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"line_01.png",'0px','0px'],
                            transform: [[],['135']]
                        },
                        {
                            id: 'line_02',
                            type: 'image',
                            rect: ['1033', '309', '290px', '146px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line_02.png",'0px','0px']
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
                    duration: 2134,
                    autoPlay: true,
                    data: [
                        [
                            "eid270",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Engine}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid216",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spark}",
                            '716px',
                            '716px'
                        ],
                        [
                            "eid220",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Timing}",
                            '1043px',
                            '1043px'
                        ],
                        [
                            "eid271",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Timing}",
                            '412px',
                            '412px'
                        ],
                        [
                            "eid177",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${spark}",
                            '1',
                            '1'
                        ],
                        [
                            "eid269",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spark}",
                            '439px',
                            '439px'
                        ],
                        [
                            "eid178",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${spark}",
                            '1',
                            '1'
                        ],
                        [
                            "eid218",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Engine}",
                            '504px',
                            '504px'
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
                            rect: [0, 0, '312', '634', 'auto', 'auto'],
                            id: 'timing_back',
                            fill: ['rgba(0,0,0,0)', 'images/timing_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [74, 318, '127', '147', 'auto', 'auto'],
                            id: 'timing_belt3',
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt3.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'timing_belt_3_line_movie',
                            symbolName: 'timing_belt_3_line_movie',
                            rect: ['56', '334', 132, 146, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'timing_belt2_movie',
                            symbolName: 'timing_belt2_movie',
                            rect: ['195', '97', 48, 192, 'auto', 'auto']
                        },
                        {
                            rect: [101, 392, '50', '74', 'auto', 'auto'],
                            id: 'timing_gear',
                            fill: ['rgba(0,0,0,0)', 'images/timing_gear.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [13, 41, '231', '444', 'auto', 'auto'],
                            id: 'timings',
                            fill: ['rgba(0,0,0,0)', 'images/timings.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [10, 38, '218', '491', 'auto', 'auto'],
                            id: 'timing_belt1',
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'timing_belt1_line_movie',
                            symbolName: 'timing_belt1_line_movie',
                            rect: ['195', '29', 36, 19, 'auto', 'auto']
                        },
                        {
                            rect: [3, 4, '253', '522', 'auto', 'auto'],
                            id: 'timing_belt1Cap',
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt1Cap.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'blackOval_movie3',
                            symbolName: 'blackOval_movie3',
                            rect: [137, 398, 9, 13, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'driveBelt_bottom_movie',
                            symbolName: 'driveBelt_bottom_movie',
                            rect: ['196', '368', 74, 114, 'auto', 'auto']
                        },
                        {
                            rect: [55, 285, '241', '331', 'auto', 'auto'],
                            id: 'driveBelt_gears_btm',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_btm.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [55, 285, '241', '332', 'auto', 'auto'],
                            id: 'driveBelt_top',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_top.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'driveBelt_moving',
                            symbolName: 'driveBelt_moving',
                            rect: ['269', '276', 36, 19, 'auto', 'auto']
                        },
                        {
                            rect: [56, 286, '239', '329', 'auto', 'auto'],
                            id: 'driveBelt_topCap',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_topCap.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [70, 292, '232', '330', 'auto', 'auto'],
                            id: 'driveBelt_gears_top2',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_top2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'blackOval_movie4',
                            symbolName: 'blackOval_movie4',
                            rect: ['183', '466', 9, 13, 'auto', 'auto']
                        },
                        {
                            rect: [46, 275, '263', '356', 'auto', 'auto'],
                            id: 'driveBelt_gears_top',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_top.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'blackOval_movie1_1',
                            symbolName: 'blackOval_movie1_1',
                            rect: ['68', '179', 9, 13, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'blackOval_movie1_2',
                            symbolName: 'blackOval_movie1_1',
                            rect: [171, 95, 9, 13, 'auto', 'auto']
                        },
                        {
                            rect: [145, 258, '87', '93', 'auto', 'auto'],
                            id: 'tention_bearing',
                            fill: ['rgba(0,0,0,0)', 'images/tention_bearing.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'blackOval_movie2',
                            symbolName: 'blackOval_movie2',
                            rect: ['214', '279', 9, 13, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 312, 634]
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
                            rect: [0, 0, '686', '889', 'auto', 'auto'],
                            id: 'engineBody',
                            fill: ['rgba(0,0,0,0)', 'images/engineBody.png'],
                            type: 'image',
                            tag: 'img'
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
                            rect: [142, 146, '544', '275', 'auto', 'auto'],
                            id: 'cam_back',
                            fill: ['rgba(0,0,0,0)', 'images/cam_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [551, 322, '133', '97', 'auto', 'auto'],
                            id: 'cam_front',
                            fill: ['rgba(0,0,0,0)', 'images/cam_front.png'],
                            type: 'image',
                            tag: 'img'
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
                            rect: [0, 0, '132', '146', 'auto', 'auto'],
                            id: 'timing_belt3_line',
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt3_line.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 132, 146]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid38",
                            "left",
                            0,
                            167,
                            "linear",
                            "${timing_belt3_line}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid37",
                            "top",
                            0,
                            167,
                            "linear",
                            "${timing_belt3_line}",
                            '0px',
                            '-11px'
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
                            rect: ['-4px', '-2px', '36', '19', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_mover.png'],
                            id: 'driveBelt_mover',
                            type: 'image',
                            autoOrient: 'true',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 36, 19]
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "location",
                            0,
                            767,
                            "linear",
                            "${driveBelt_mover}",
                            [[14, 7.5, 0, 0, 0, 0,0],[-137.71, 172.41, -42.41, 45.72, -150.91, 162.66,224.08],[-174.98, 222.49, -182.7, 303.94, -31.7, 52.74,286.61],[-186.5, 346, 0, 0, 0, 0,422.76]]
                        ]
                    ]
                }
            },
            "timing_belt1_line_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [195, 29, '36', '19', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt1_mover.png'],
                            id: 'timing_belt1_mover',
                            type: 'image',
                            autoOrient: 'true',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 36, 19]
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "location",
                            0,
                            767,
                            "linear",
                            "${timing_belt1_mover}",
                            [[18, 9.5, 0, 0, 0, 0,0],[-77.73, 80.12, -36.07, 26.61, -107.58, 79.36,118.96],[-159.33, 276.29, 12.87, 46.72, 104.22, 378.46,348.03],[-108, 487.5, 0, 0, 0, 0,565.39]]
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
                            rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                            id: 'blackOval',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 9, 13]
                        }
                    }
                },
                timeline: {
                    duration: 733,
                    autoPlay: true,
                    data: [
                        [
                            "eid45",
                            "location",
                            0,
                            733,
                            "linear",
                            "${blackOval}",
                            [[4.5, 6.5, 0, 0, 0, 0,0],[-14.44, 75.27, 16.24, 175.53, 8.45, 91.36,72.12],[37.21, 77.06, 12.32, -17.54, 11.03, -15.69,151.84],[67.33, 3.28, 0.09, -49.89, 0.13, -70.77,232.21],[48.51, -35.46, -49.49, -5.21, -52.26, -5.51,279.52],[5.5, 4.5, 0, 0, 0, 0,339.89]]
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
                            rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                            id: 'blackOvalCopy',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 9, 13]
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid48",
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
                            rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                            id: 'blackOval',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 9, 13]
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "location",
                            0,
                            767,
                            "linear",
                            "${blackOval}",
                            [[4.5, 6.5, 0, 0, 0, 0,0],[-76.12, 118.59, -4.91, 18.77, -78.26, 298.97,143.4],[-50.6, 137.52, 48.06, -33.41, 70.07, -48.71,187.16],[9.96, 42.37, 23.76, -86.53, 44.71, -162.85,301.98],[7.5, 8.3, 0, 0, 0, 0,337.78]]
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
                            rect: ['2px', '4px', '9', '13', 'auto', 'auto'],
                            id: 'blackOvalCopy',
                            fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 9, 13]
                        }
                    }
                },
                timeline: {
                    duration: 767,
                    autoPlay: true,
                    data: [
                        [
                            "eid52",
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
                            rect: [37, 115, '108', '228', 'auto', 'auto'],
                            id: 'piston',
                            fill: ['rgba(0,0,0,0)', 'images/piston.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [36, 113, '110', '235', 'auto', 'auto'],
                            id: 'cylinder',
                            fill: ['rgba(0,0,0,0)', 'images/cylinder.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['40', 41, 103, 131, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1', '0.39313', 1], ['50%', '100%']],
                            id: 'burnMovie',
                            display: 'none',
                            opacity: '1',
                            symbolName: 'burnMovie',
                            type: 'rect'
                        },
                        {
                            rect: [66, 0, '109', '149', 'auto', 'auto'],
                            id: 'exhaustValve',
                            fill: ['rgba(0,0,0,0)', 'images/exhaustValve.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [-20, 45, '117', '113', 'auto', 'auto'],
                            id: 'intakeValve',
                            fill: ['rgba(0,0,0,0)', 'images/intakeValve.png'],
                            type: 'image',
                            tag: 'img'
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
                            tag: 'img',
                            overflow: 'visible',
                            id: 'burn',
                            display: 'none',
                            rect: [0, 0, '103', '131', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/burn.png']
                        },
                        {
                            type: 'image',
                            overflow: 'hidden',
                            id: 'burn2',
                            rect: [0, 0, '103px', '131px', 'auto', 'auto'],
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/burn2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            overflow: 'visible',
                            id: 'burn3',
                            rect: [0, 0, '103px', '131px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'driveBelt_bottom',
                            rect: [0, 0, '74px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_bottom.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'driveBelt_bottom_line',
                            rect: [-34, -5, '108px', '166px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt_bottom_line.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 74, 114]
                        }
                    }
                },
                timeline: {
                    duration: 467,
                    autoPlay: true,
                    data: [
                        [
                            "eid136",
                            "top",
                            0,
                            467,
                            "linear",
                            "${driveBelt_bottom_line}",
                            '-5px',
                            '-52px'
                        ],
                        [
                            "eid135",
                            "left",
                            0,
                            467,
                            "linear",
                            "${driveBelt_bottom_line}",
                            '-34px',
                            '-6px'
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
                            id: 'timing_belt2_line',
                            rect: [-3, 25, '47px', '187px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/timing_belt2_line.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 48, 192]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid137",
                            "left",
                            0,
                            500,
                            "linear",
                            "${timing_belt2_line}",
                            '-3px',
                            '1px'
                        ],
                        [
                            "eid138",
                            "top",
                            0,
                            500,
                            "linear",
                            "${timing_belt2_line}",
                            '25px',
                            '-10px'
                        ]
                    ]
                }
            },
            "spark": {
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
                            id: 'spark01',
                            symbolName: 'spark01',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['2', '2', 1], ['50%', '50%']],
                            rect: [1, 0, 49, 47, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'spark02',
                            symbolName: 'spark01',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['2', '2', 1], ['50%', '50%']],
                            rect: [94, 38, 49, 47, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'spark03',
                            symbolName: 'spark01',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['2', '2', 1], ['50%', '50%']],
                            rect: [175, 63, 49, 47, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'spark04',
                            symbolName: 'spark01',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['2', '2', 1], ['50%', '50%']],
                            rect: [265, 100, 49, 47, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 140, 82]
                        }
                    }
                },
                timeline: {
                    duration: 2134,
                    autoPlay: true,
                    data: [
                        [
                            "eid204",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spark01}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid192",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${spark03}",
                            '2',
                            '2'
                        ],
                        [
                            "eid182",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${spark02}",
                            '2',
                            '2'
                        ],
                        [
                            "eid194",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${spark04}",
                            '2',
                            '2'
                        ],
                        [
                            "eid179",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${spark01}",
                            '2',
                            '2'
                        ],
                        [
                            "eid193",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${spark04}",
                            '2',
                            '2'
                        ],
                        [
                            "eid203",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spark02}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid181",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${spark02}",
                            '2',
                            '2'
                        ],
                        [
                            "eid180",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${spark01}",
                            '2',
                            '2'
                        ],
                        [
                            "eid214",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spark03}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid191",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${spark03}",
                            '2',
                            '2'
                        ],
                        [
                            "eid239",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spark04}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid190",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spark02}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid215",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spark03}",
                            '63px',
                            '63px'
                        ],
                        [
                            "eid240",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spark04}",
                            '265px',
                            '265px'
                        ]
                    ]
                }
            },
            "spark01": {
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
                            id: 'spark',
                            opacity: '0',
                            rect: [18, 0, 31, 30, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spark.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 49, 47]
                        }
                    }
                },
                timeline: {
                    duration: 2134,
                    autoPlay: true,
                    labels: {
                        "step1": 0,
                        "step2": 533,
                        "step3": 1066,
                        "step4": 1600
                    },
                    data: [
                        [
                            "eid250",
                            "opacity",
                            1067,
                            67,
                            "linear",
                            "${spark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid254",
                            "opacity",
                            1234,
                            66,
                            "linear",
                            "${spark}",
                            '1',
                            '0'
                        ],
                        [
                            "eid253",
                            "width",
                            1133,
                            100,
                            "linear",
                            "${spark}",
                            '31px',
                            '49px'
                        ],
                        [
                            "eid251",
                            "height",
                            1133,
                            100,
                            "linear",
                            "${spark}",
                            '30px',
                            '47px'
                        ],
                        [
                            "eid252",
                            "left",
                            1133,
                            100,
                            "linear",
                            "${spark}",
                            '18px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-8934384");
