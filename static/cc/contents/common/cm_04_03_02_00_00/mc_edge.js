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
                            id: 'NORMAL_DRUM',
                            symbolName: 'NORMAL_DRUM',
                            type: 'rect',
                            rect: ['411', '257', '417', '452', 'auto', 'auto']
                        },
                        {
                            id: 'ABRASION_DRUM',
                            symbolName: 'ABRASION_DRUM',
                            type: 'rect',
                            rect: ['939', '257', '417', '452', 'auto', 'auto']
                        },
                        {
                            id: 'contentTxt1',
                            type: 'text',
                            rect: ['464px', '104', '356px', '66', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">정상<span style=\"font-family: 굴림; font-weight: 400; font-style: normal; text-decoration: none; font-size: 45px; color: rgb(0, 75, 140); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span>라이닝​</p>",
                            align: "center",
                            font: ['굴림', [60, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'contentTxt2',
                            type: 'text',
                            rect: ['946px', '104', '436px', '66', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">마모된<span style=\"font-family: 굴림; font-weight: 400; font-style: normal; text-decoration: none; font-size: 45px; color: rgb(0, 75, 140); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span>라이닝​</p>",
                            align: "center",
                            font: ['굴림', [60, ""], "rgb(198,0,95)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['578', '762', '649', '50', 'auto', 'auto'],
                            text: "브레이크 드럼 마모로 인한 증상",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['627', '848', '552', '181px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">*제동시 제동거리가 길어짐 *브레이크 작동시 소음발생​</p><p style=\"margin:0px\">​<span style=\"font-family: 굴림; font-weight: 400; font-style: normal; text-decoration: none; font-size: 45px; color: rgb(0, 75, 140); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">*브레이크 드럼 손상</span></p>",
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
                    duration: 4000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "DRUM_movie": {
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
                            fill: ['rgba(0,0,0,0)', 'images/drum.png'],
                            id: 'drum',
                            rect: [0, 0, '395', '395', 'auto', 'auto'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 395, 395]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid75",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${drum}",
                            '0deg',
                            '180deg'
                        ]
                    ]
                }
            },
            "DRUM_ABRASION_movie": {
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
                            fill: ['rgba(0,0,0,0)', 'images/drum_abrasion.png'],
                            id: 'drum_abrasion',
                            rect: [0, 0, '394', '395', 'auto', 'auto'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 394, 395]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "slowStop": 1000
                    },
                    data: [
                        [
                            "eid77",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${drum_abrasion}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid78",
                            "rotateZ",
                            1000,
                            1000,
                            "easeOutQuad",
                            "${drum_abrasion}",
                            '0deg',
                            '180deg'
                        ]
                    ]
                }
            },
            "AJ_SPRING": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '57', '34', 'auto', 'auto'],
                            id: 'AJ_spring_tail',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_tail.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [38, 10, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [44, 11, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src2',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [50, 12, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src3',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [56, 14, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src4',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [62, 15, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src5',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [68, 16, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src6',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [74, 18, '94', '25', 'auto', 'auto'],
                            id: 'AJ_spring_head',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_head.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 168, 43]
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: false,
                    data: [
                        [
                            "eid56",
                            "top",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src2}",
                            '11px',
                            '8px'
                        ],
                        [
                            "eid64",
                            "top",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src5}",
                            '15px',
                            '16px'
                        ],
                        [
                            "eid60",
                            "left",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src5}",
                            '62px',
                            '67px'
                        ],
                        [
                            "eid72",
                            "top",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src3}",
                            '12px',
                            '11px'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_tail}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid70",
                            "left",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src3}",
                            '50px',
                            '46px'
                        ],
                        [
                            "eid52",
                            "top",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src}",
                            '10px',
                            '6px'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_head}",
                            '18px',
                            '22px'
                        ],
                        [
                            "eid58",
                            "left",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src6}",
                            '68px',
                            '78px'
                        ],
                        [
                            "eid6",
                            "left",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_head}",
                            '74px',
                            '91px'
                        ],
                        [
                            "eid50",
                            "left",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src}",
                            '38px',
                            '24px'
                        ],
                        [
                            "eid66",
                            "left",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src4}",
                            '56px',
                            '57px'
                        ],
                        [
                            "eid62",
                            "top",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src6}",
                            '16px',
                            '19px'
                        ],
                        [
                            "eid54",
                            "left",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_src2}",
                            '44px',
                            '35px'
                        ],
                        [
                            "eid73",
                            "top",
                            0,
                            0,
                            "linear",
                            "${AJ_spring_src4}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid74",
                            "top",
                            750,
                            0,
                            "linear",
                            "${AJ_spring_src4}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid16",
                            "top",
                            0,
                            867,
                            "linear",
                            "${AJ_spring_tail}",
                            '0px',
                            '-5px'
                        ]
                    ]
                }
            },
            "WC_SPRING": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [14, 3, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src2',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [28, 6, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src3',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [43, 9, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src4',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [57, 12, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src5',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [71, 15, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src6',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 117, 64]
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: false,
                    data: [
                        [
                            "eid42",
                            "top",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src3}",
                            '6px',
                            '5px'
                        ],
                        [
                            "eid40",
                            "top",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src5}",
                            '12px',
                            '14px'
                        ],
                        [
                            "eid28",
                            "top",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src}",
                            '0px',
                            '-5px'
                        ],
                        [
                            "eid38",
                            "top",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src6}",
                            '15px',
                            '19px'
                        ],
                        [
                            "eid36",
                            "left",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src4}",
                            '43px',
                            '44px'
                        ],
                        [
                            "eid46",
                            "left",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src2}",
                            '14px',
                            '2px'
                        ],
                        [
                            "eid32",
                            "left",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src5}",
                            '57px',
                            '65px'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src}",
                            '0px',
                            '-19px'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src6}",
                            '71px',
                            '86px'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src4}",
                            '9px',
                            '10px'
                        ],
                        [
                            "eid48",
                            "top",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src2}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid34",
                            "left",
                            0,
                            867,
                            "linear",
                            "${WC_spring_src3}",
                            '28px',
                            '23px'
                        ]
                    ]
                }
            },
            "NORMAL_DRUM": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [39, 10, '378', '411', 'auto', 'auto'],
                            id: 'backPic',
                            fill: ['rgba(0,0,0,0)', 'images/backPic.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [73, 92, '114', '226', 'auto', 'auto'],
                            id: 'pad1',
                            fill: ['rgba(0,0,0,0)', 'images/pad1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'AJ_SPRING',
                            symbolName: 'AJ_SPRING',
                            rect: [137, 238, 168, 43, 'auto', 'auto']
                        },
                        {
                            rect: [113, 141, '92', '58', 'auto', 'auto'],
                            id: 'WC_bar2',
                            fill: ['rgba(0,0,0,0)', 'images/WC_bar2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'WC_SPRING',
                            symbolName: 'WC_SPRING',
                            rect: [157, 150, 117, 64, 'auto', 'auto']
                        },
                        {
                            rect: [105, 135, '244', '98', 'auto', 'auto'],
                            id: 'WC_body',
                            fill: ['rgba(0,0,0,0)', 'images/WC_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [237, 167, '104', '61', 'auto', 'auto'],
                            id: 'WC_bar1',
                            fill: ['rgba(0,0,0,0)', 'images/WC_bar1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [241, 112, '114', '237', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pad2.png'],
                            id: 'pad2',
                            opacity: '0.7',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [212, 11, '205', '373', 'auto', 'auto'],
                            id: 'drum_outSide',
                            fill: ['rgba(0,0,0,0)', 'images/drum_outSide.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [129, 15, '276', '399', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/drum_body.png'],
                            id: 'drum_body',
                            opacity: '0.7',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'DRUM_movie',
                            symbolName: 'DRUM_movie',
                            transform: [[0, 0, 0], ['165', 0, 0], [0, 0], ['0.69114', 1, 1], ['50%', '50%']],
                            rect: [-15, 29, 395, 395, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 417, 452]
                        }
                    }
                },
                timeline: {
                    duration: 1867,
                    autoPlay: false,
                    labels: {
                        "brakeOn": 33,
                        "brakeOff": 1000
                    },
                    data: [
                        [
                            "eid18",
                            "left",
                            33,
                            867,
                            "linear",
                            "${pad1}",
                            '73px',
                            '53px'
                        ],
                        [
                            "eid110",
                            "left",
                            1000,
                            867,
                            "linear",
                            "${pad1}",
                            '53px',
                            '73px'
                        ],
                        [
                            "eid24",
                            "top",
                            33,
                            867,
                            "linear",
                            "${WC_bar2}",
                            '141px',
                            '136px'
                        ],
                        [
                            "eid109",
                            "top",
                            1000,
                            867,
                            "linear",
                            "${WC_bar2}",
                            '136px',
                            '141px'
                        ],
                        [
                            "eid2",
                            "left",
                            33,
                            867,
                            "linear",
                            "${WC_bar1}",
                            '237px',
                            '254px'
                        ],
                        [
                            "eid107",
                            "left",
                            1000,
                            867,
                            "linear",
                            "${WC_bar1}",
                            '254px',
                            '237px'
                        ],
                        [
                            "eid8",
                            "top",
                            33,
                            867,
                            "linear",
                            "${WC_bar1}",
                            '167px',
                            '171px'
                        ],
                        [
                            "eid106",
                            "top",
                            1000,
                            867,
                            "linear",
                            "${WC_bar1}",
                            '171px',
                            '167px'
                        ],
                        [
                            "eid20",
                            "top",
                            33,
                            867,
                            "linear",
                            "${pad1}",
                            '92px',
                            '87px'
                        ],
                        [
                            "eid111",
                            "top",
                            1000,
                            867,
                            "linear",
                            "${pad1}",
                            '87px',
                            '92px'
                        ],
                        [
                            "eid10",
                            "top",
                            33,
                            867,
                            "linear",
                            "${pad2}",
                            '112px',
                            '116px'
                        ],
                        [
                            "eid105",
                            "top",
                            1000,
                            867,
                            "linear",
                            "${pad2}",
                            '116px',
                            '112px'
                        ],
                        [
                            "eid4",
                            "left",
                            33,
                            867,
                            "linear",
                            "${pad2}",
                            '241px',
                            '258px'
                        ],
                        [
                            "eid104",
                            "left",
                            1000,
                            867,
                            "linear",
                            "${pad2}",
                            '258px',
                            '241px'
                        ],
                        [
                            "eid22",
                            "left",
                            33,
                            867,
                            "linear",
                            "${WC_bar2}",
                            '113px',
                            '93px'
                        ],
                        [
                            "eid108",
                            "left",
                            1000,
                            867,
                            "linear",
                            "${WC_bar2}",
                            '93px',
                            '113px'
                        ]
                    ]
                }
            },
            "ABRASION_DRUM": {
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
                            id: 'backPic_abrasion',
                            rect: [38, 10, '379px', '411px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/backPic_abrasion.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'pad1_abrasion',
                            rect: [73, 92, '115px', '226px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pad1_abrasion.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'AJ_SPRING',
                            symbolName: 'AJ_SPRING',
                            rect: [137, 238, 168, 43, 'auto', 'auto']
                        },
                        {
                            rect: [113, 141, '92', '58', 'auto', 'auto'],
                            id: 'WC_bar2',
                            fill: ['rgba(0,0,0,0)', 'images/WC_bar2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'WC_SPRING',
                            symbolName: 'WC_SPRING',
                            rect: [157, 150, 117, 64, 'auto', 'auto']
                        },
                        {
                            rect: [105, 135, '244', '98', 'auto', 'auto'],
                            id: 'WC_body',
                            fill: ['rgba(0,0,0,0)', 'images/WC_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [237, 167, '104', '61', 'auto', 'auto'],
                            id: 'WC_bar1',
                            fill: ['rgba(0,0,0,0)', 'images/WC_bar1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [241, 112, '114px', '237px', 'auto', 'auto'],
                            id: 'pad2_abrasion',
                            opacity: '0.7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pad2_abrasion.png', '0px', '0px']
                        },
                        {
                            rect: [212, 11, '205', '373', 'auto', 'auto'],
                            id: 'drum_outSide',
                            fill: ['rgba(0,0,0,0)', 'images/drum_outSide.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [130, 15, '276px', '399px', 'auto', 'auto'],
                            id: 'drum_body_abrasion',
                            opacity: '0.7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/drum_body_abrasion.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'DRUM_ABRASION_movie',
                            symbolName: 'DRUM_ABRASION_movie',
                            rect: [-15, 29, 394, 395, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['165', 0, 0], [0, 0], ['0.69289', 1, 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 417, 452]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "brakeOn": 33,
                        "brakeOff": 1000
                    },
                    data: [
                        [
                            "eid24",
                            "top",
                            33,
                            867,
                            "linear",
                            "${WC_bar2}",
                            '141px',
                            '136px'
                        ],
                        [
                            "eid125",
                            "top",
                            1000,
                            867,
                            "linear",
                            "${WC_bar2}",
                            '136px',
                            '141px'
                        ],
                        [
                            "eid22",
                            "left",
                            33,
                            867,
                            "linear",
                            "${WC_bar2}",
                            '113px',
                            '93px'
                        ],
                        [
                            "eid124",
                            "left",
                            1000,
                            867,
                            "linear",
                            "${WC_bar2}",
                            '93px',
                            '113px'
                        ],
                        [
                            "eid95",
                            "top",
                            33,
                            867,
                            "linear",
                            "${pad1_abrasion}",
                            '92px',
                            '87px'
                        ],
                        [
                            "eid126",
                            "top",
                            1000,
                            867,
                            "linear",
                            "${pad1_abrasion}",
                            '87px',
                            '92px'
                        ],
                        [
                            "eid92",
                            "left",
                            33,
                            867,
                            "linear",
                            "${pad2_abrasion}",
                            '241px',
                            '258px'
                        ],
                        [
                            "eid121",
                            "left",
                            1000,
                            867,
                            "linear",
                            "${pad2_abrasion}",
                            '258px',
                            '241px'
                        ],
                        [
                            "eid2",
                            "left",
                            33,
                            867,
                            "linear",
                            "${WC_bar1}",
                            '237px',
                            '254px'
                        ],
                        [
                            "eid122",
                            "left",
                            1000,
                            867,
                            "linear",
                            "${WC_bar1}",
                            '254px',
                            '237px'
                        ],
                        [
                            "eid8",
                            "top",
                            33,
                            867,
                            "linear",
                            "${WC_bar1}",
                            '167px',
                            '171px'
                        ],
                        [
                            "eid123",
                            "top",
                            1000,
                            867,
                            "linear",
                            "${WC_bar1}",
                            '171px',
                            '167px'
                        ],
                        [
                            "eid94",
                            "left",
                            33,
                            867,
                            "linear",
                            "${pad1_abrasion}",
                            '73px',
                            '53px'
                        ],
                        [
                            "eid127",
                            "left",
                            1000,
                            867,
                            "linear",
                            "${pad1_abrasion}",
                            '53px',
                            '73px'
                        ],
                        [
                            "eid93",
                            "top",
                            33,
                            867,
                            "linear",
                            "${pad2_abrasion}",
                            '112px',
                            '116px'
                        ],
                        [
                            "eid120",
                            "top",
                            1000,
                            867,
                            "linear",
                            "${pad2_abrasion}",
                            '116px',
                            '112px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-11912305");
