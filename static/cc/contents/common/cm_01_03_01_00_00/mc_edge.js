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
                            id: 'HOT_LIQUID_MOVE',
                            symbolName: 'HOT_LIQUID_MOVE',
                            type: 'rect',
                            rect: ['145', '196', '817', '700', 'auto', 'auto']
                        },
                        {
                            id: 'L82',
                            symbolName: 'L8',
                            type: 'rect',
                            rect: ['587', '230', '292', '46', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'L7_MOVE',
                            symbolName: 'L7_MOVE',
                            type: 'rect',
                            rect: ['587', '275', '76', '338', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'L6_MOVE',
                            symbolName: 'L6_MOVE',
                            type: 'rect',
                            rect: ['145', '349', '443', '264', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'L5_MOVE',
                            symbolName: 'L5_MOVE',
                            type: 'rect',
                            rect: ['145', '317', '443', '33', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'L4_MOVE',
                            symbolName: 'L4_MOVE',
                            type: 'rect',
                            rect: ['145', '612', '664', '23', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'L3_MOVE',
                            symbolName: 'L3_MOVE',
                            type: 'rect',
                            rect: ['808', '612', '21', '269', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'L2_MOVE',
                            symbolName: 'L2_MOVE',
                            type: 'rect',
                            rect: ['828', '858', '51', '23', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'L1_MOVE',
                            symbolName: 'L1_MOVE',
                            type: 'rect',
                            rect: ['878', '196', '84', '700', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'back',
                            type: 'image',
                            tag: 'img',
                            rect: ['39', '185', '933', '729', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png"]
                        },
                        {
                            id: 'RETURN_SP_MOVE',
                            symbolName: 'RETURN_SP_MOVE',
                            type: 'rect',
                            rect: ['591', '314', '51', '55', 'auto', 'auto']
                        },
                        {
                            id: 'PROPELLER_MOVE',
                            symbolName: 'PROPELLER_MOVE',
                            type: 'rect',
                            rect: ['776', '361', '29', '262', 'auto', 'auto']
                        },
                        {
                            id: 'waterPump',
                            type: 'image',
                            tag: 'img',
                            rect: ['595', '427', '68', '143', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"waterPump.png"]
                        },
                        {
                            id: 'GEAR2_MOVE',
                            symbolName: 'GEAR2_MOVE',
                            type: 'rect',
                            rect: ['679', '688', '66', '124', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'GEAR1_MOVE',
                            symbolName: 'GEAR1_MOVE',
                            type: 'rect',
                            rect: ['679', '418', '62', '149', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'DRIVE_BELT_MOVE',
                            symbolName: 'DRIVE_BELT_MOVE',
                            type: 'rect',
                            rect: ['739', '678', '34', '146', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'TIMING_BELT_MOVE',
                            symbolName: 'TIMING_BELT_MOVE',
                            type: 'rect',
                            rect: ['694', '411', '34', '414', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'CRANK_P2_MOVE',
                            symbolName: 'CRANK_P2_MOVE',
                            type: 'rect',
                            rect: ['52', '672', '25', '157', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'CRANK_P1_MOVE',
                            symbolName: 'CRANK_P1_MOVE',
                            type: 'rect',
                            rect: ['74', '688', '29', '125', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'PISTON_MOVE',
                            symbolName: 'PISTON_MOVE',
                            type: 'rect',
                            rect: ['178', '424', '415', '401', 'auto', 'auto']
                        },
                        {
                            id: 'front_component',
                            type: 'image',
                            tag: 'img',
                            rect: ['156', '317', '791', '520', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"front_component.png"]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['1008', '229', '739', '50', 'auto', 'auto'],
                            text: "워터펌프 임펠러 파손으로 인한 증상",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['1008', '342', '522', '191', 'auto', 'auto'],
                            text: "*냉각수 순환불량<br>*엔진과열 현상<br>*과열로 인한 운행 불가능",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt3',
                            type: 'text',
                            rect: ['1008', '658', '739', '50', 'auto', 'auto'],
                            text: "워터펌프 베어링 손상으로 인한 증상",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt4',
                            type: 'text',
                            rect: ['1008', '770', '357', '110', 'auto', 'auto'],
                            text: "*베어링 소음발생<br>*냉각수 순환불량",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""]
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
                    duration: 2000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "PISTON_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [106, 90, '202', '311', 'auto', 'auto'],
                            id: 'piston2',
                            fill: ['rgba(0,0,0,0)', 'images/piston2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [320, 0, '95', '310', 'auto', 'auto'],
                            id: 'pistonExtra',
                            fill: ['rgba(0,0,0,0)', 'images/pistonExtra.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 0, '92', '310', 'auto', 'auto'],
                            id: 'piston1',
                            fill: ['rgba(0,0,0,0)', 'images/piston1.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 415, 401]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${piston2}",
                            '90px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${piston2}",
                            '0px',
                            '90px'
                        ],
                        [
                            "eid1",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${piston1}",
                            '0px',
                            '91px'
                        ],
                        [
                            "eid8",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${piston1}",
                            '91px',
                            '0px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${pistonExtra}",
                            '0px',
                            '91px'
                        ],
                        [
                            "eid9",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${pistonExtra}",
                            '91px',
                            '0px'
                        ]
                    ]
                }
            },
            "RETURN_SP_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, 1, 1], ['50%', '100%']],
                            fill: ['rgba(0,0,0,0)', 'images/return_sp.png'],
                            id: 'return_sp',
                            rect: [0, 0, '51', 55, 'auto', 'auto'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 51, 55]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid11",
                            "height",
                            0,
                            500,
                            "linear",
                            "${return_sp}",
                            '55px',
                            '39px'
                        ],
                        [
                            "eid16",
                            "height",
                            500,
                            500,
                            "linear",
                            "${return_sp}",
                            '39px',
                            '55px'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            500,
                            "linear",
                            "${return_sp}",
                            '0px',
                            '16px'
                        ],
                        [
                            "eid15",
                            "top",
                            500,
                            500,
                            "linear",
                            "${return_sp}",
                            '16px',
                            '0px'
                        ]
                    ]
                }
            },
            "CRANK_P1_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '29', '125', 'auto', 'auto'],
                            id: 'crank_p1',
                            fill: ['rgba(0,0,0,0)', 'images/crank_p1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['1', '-54', '27', '176', 'auto', 'auto'],
                            id: 'crand_flow_src',
                            fill: ['rgba(0,0,0,0)', 'images/crand_flow_src.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '29', '125'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid68",
                            "top",
                            0,
                            500,
                            "linear",
                            "${crand_flow_src}",
                            '0px',
                            '-54px'
                        ]
                    ]
                }
            },
            "CRANK_P2_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '25', '157', 'auto', 'auto'],
                            id: 'crank_p2',
                            fill: ['rgba(0,0,0,0)', 'images/crank_p2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'gear_flow_src2',
                            type: 'image',
                            rect: ['-18', '-96', '62px', '253px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/gear_flow_src.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '25', '157'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid69",
                            "top",
                            0,
                            500,
                            "linear",
                            "${gear_flow_src2}",
                            '-30px',
                            '-96px'
                        ]
                    ]
                }
            },
            "TIMING_BELT_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '34', '414', 'auto', 'auto'],
                            id: 'timingBelt',
                            fill: ['rgba(0,0,0,0)', 'images/timingBelt.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['4', '-63', '25', '490', 'auto', 'auto'],
                            id: 'belt_flow_src',
                            fill: ['rgba(0,0,0,0)', 'images/belt_flow_src.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '34', '414'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "top",
                            0,
                            867,
                            "linear",
                            "${belt_flow_src}",
                            '-1px',
                            '-63px'
                        ]
                    ]
                }
            },
            "DRIVE_BELT_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '34', '146', 'auto', 'auto'],
                            id: 'driveBelt',
                            fill: ['rgba(0,0,0,0)', 'images/driveBelt.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['4', '-63', '25', '490', 'auto', 'auto'],
                            id: 'belt_flow_src',
                            fill: ['rgba(0,0,0,0)', 'images/belt_flow_src.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '34', '146'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: true,
                    data: [
                        [
                            "eid71",
                            "top",
                            0,
                            867,
                            "linear",
                            "${belt_flow_src}",
                            '-1px',
                            '-63px'
                        ]
                    ]
                }
            },
            "GEAR1_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '62', '149', 'auto', 'auto'],
                            id: 'gear1',
                            fill: ['rgba(0,0,0,0)', 'images/gear1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0', '-94', '62', '253', 'auto', 'auto'],
                            id: 'gear_flow_src',
                            fill: ['rgba(0,0,0,0)', 'images/gear_flow_src.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '62', '149'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid72",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${gear_flow_src}",
                            '0px',
                            '-94px'
                        ]
                    ]
                }
            },
            "GEAR2_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '66', '124', 'auto', 'auto'],
                            id: 'gear2',
                            fill: ['rgba(0,0,0,0)', 'images/gear2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['2', '-94', '62', '253', 'auto', 'auto'],
                            id: 'gear_flow_src',
                            fill: ['rgba(0,0,0,0)', 'images/gear_flow_src.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '66', '124'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid73",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${gear_flow_src}",
                            '0px',
                            '-94px'
                        ]
                    ]
                }
            },
            "HOT_LIQUID_MOVE": {
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
                            fill: ['rgba(0,0,0,0)', 'images/hot_liquid.png'],
                            id: 'hot_liquid',
                            opacity: '1',
                            rect: [0, 0, '817', '700', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 817, 700]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${hot_liquid}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid31",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${hot_liquid}",
                            '0.500000',
                            '1'
                        ]
                    ]
                }
            },
            "L1_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3', -79, 77, 779, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'LIQUIDE_DOT_MOVE',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 84, 700]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "L2_MOVE": {
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
                            id: 'LIQUIDE_DOT_MOVE2',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [247, -384, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 51, 23]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "L3_MOVE": {
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
                            id: 'LIQUIDE_DOT_MOVE3',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [-23, -86, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 21, 269]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "L4_MOVE": {
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
                            id: 'LIQUIDE_DOT_MOVE4',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [351, -385, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 664, 23]
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
            "L5_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'LIQUIDE_DOT_MOVE5',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [91, -372, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 443, 33]
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
            "L6_MOVE": {
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
                            id: 'LIQUIDE_DOT_MOVE6',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [2, 0, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], ['180', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'LIQUIDE_DOT_MOVE6Copy',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [118, 0, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], ['180', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'LIQUIDE_DOT_MOVE6Copy2',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [213, 0, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], ['180', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'LIQUIDE_DOT_MOVE6Copy3',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [309, 0, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 443, 264]
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
            "L7_MOVE": {
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
                            id: 'LIQUIDE_DOT_MOVE7',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [-1, 0, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 76, 338]
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
            "L8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'LIQUIDE_DOT_MOVE8',
                            symbolName: 'LIQUIDE_DOT_MOVE',
                            rect: [-136, -372, 77, 779, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 292, 46]
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
            "LIQUIDE_DOT_MOVE": {
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
                            id: 'liquid_dot',
                            rect: [0, 0, '77px', '779px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/liquid_dot.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 77, 779]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid27",
                            "top",
                            0,
                            750,
                            "linear",
                            "${liquid_dot}",
                            '0px',
                            '68px'
                        ],
                        [
                            "eid33",
                            "top",
                            750,
                            750,
                            "linear",
                            "${liquid_dot}",
                            '68px',
                            '0px'
                        ]
                    ]
                }
            },
            "PROPELLER_MOVE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '136', '29', '124', 'auto', 'auto'],
                            id: 'propeller_down',
                            fill: ['rgba(0,0,0,0)', 'images/propeller_down.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0', '-1', '29', '125', 'auto', 'auto'],
                            id: 'propeller_up',
                            fill: ['rgba(0,0,0,0)', 'images/propeller_up.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '29', '262']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid63",
                            "height",
                            0,
                            250,
                            "linear",
                            "${propeller_down}",
                            '1px',
                            '124px'
                        ],
                        [
                            "eid67",
                            "height",
                            250,
                            250,
                            "linear",
                            "${propeller_down}",
                            '124px',
                            '5px'
                        ],
                        [
                            "eid60",
                            "top",
                            0,
                            250,
                            "linear",
                            "${propeller_up}",
                            '132px',
                            '-1px'
                        ],
                        [
                            "eid64",
                            "top",
                            250,
                            250,
                            "linear",
                            "${propeller_up}",
                            '-1px',
                            '122px'
                        ],
                        [
                            "eid61",
                            "height",
                            0,
                            250,
                            "linear",
                            "${propeller_up}",
                            '5px',
                            '125px'
                        ],
                        [
                            "eid65",
                            "height",
                            250,
                            250,
                            "linear",
                            "${propeller_up}",
                            '125px',
                            '1px'
                        ],
                        [
                            "eid62",
                            "top",
                            0,
                            250,
                            "linear",
                            "${propeller_down}",
                            '150px',
                            '136px'
                        ],
                        [
                            "eid66",
                            "top",
                            250,
                            250,
                            "linear",
                            "${propeller_down}",
                            '136px',
                            '132px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-9031664");
