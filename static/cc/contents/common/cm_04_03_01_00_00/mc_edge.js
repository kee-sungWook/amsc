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
                            id: 'BRAKE',
                            symbolName: 'BRAKE',
                            type: 'rect',
                            rect: ['350', '162', '470', '500', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'BRAKE_abrasion',
                            symbolName: 'BRAKE_abrasion',
                            type: 'rect',
                            rect: ['991', '163', '470', '500', 'auto', 'auto']
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['629', '746px', '650', '326px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​*제동시 제동거리가 길어짐</p><p style=\"margin: 0px;\">*브레이크 디스크 손상발생</p><p style=\"margin: 0px;\">*브레이크 작동시 소음발생</p><p style=\"margin: 0px;\">*베이퍼록 현상 발생</p><p style=\"margin: 0px; font-family: 굴림; font-weight: 400; font-style: normal; text-decoration: none; font-size: 45px; color: rgb(0, 75, 140); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: 60px;\">*제동시<span style=\"font-family: 굴림; font-weight: 400; font-style: normal; text-decoration: none; font-size: 45px; color: rgb(0, 75, 140); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span>소음 발생</p><p style=\"margin: 0px;\"></p>",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "60px", "", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['481', '662px', '844', '51', 'auto', 'auto'],
                            text: "브레이크 패드 마모로 인한 증상",
                            align: "center",
                            font: ['굴림', [45, ""], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'contentText2',
                            type: 'text',
                            rect: ['1088', '92', 'auto', 'auto', 'auto', 'auto'],
                            text: "마모된패드",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(199,0,96,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'contentText1',
                            type: 'text',
                            rect: ['456', '92', 'auto', 'auto', 'auto', 'auto'],
                            text: "정상패드",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
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
                    duration: 5000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "BRAKE_partsMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            id: 'brake_partsA',
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts25.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            id: 'brake_parts2B',
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts25.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            id: 'brake_parts2C',
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts25.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            id: 'brake_parts2D',
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts25.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['-43px', '30px', '40', '24', 'auto', 'auto'],
                            id: 'brake_parts2E',
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts25.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 24]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "slowStop": 750
                    },
                    data: [
                        [
                            "eid32",
                            "location",
                            0,
                            500,
                            "linear",
                            "${brake_parts2C}",
                            [[64.9, 161.23, -85.66, 23.55, 0, 0,0],[-4.24, 143.38, 0, 0, 0, 0,73.01]]
                        ],
                        [
                            "eid41",
                            "location",
                            750,
                            500,
                            "linear",
                            "${brake_parts2C}",
                            [[64.9, 161.23, -85.66, 23.55, 0, 0,0],[-4.24, 143.38, 0, 0, 0, 0,73.01]]
                        ],
                        [
                            "eid33",
                            "location",
                            1250,
                            1750,
                            "easeOutQuad",
                            "${brake_parts2C}",
                            [[64.9, 161.23, -85.66, 23.55, 0, 0,0],[-4.24, 143.38, 0, 0, 0, 0,73.01]]
                        ],
                        [
                            "eid38",
                            "location",
                            0,
                            500,
                            "linear",
                            "${brake_parts2D}",
                            [[-4.24, 143.38, -0.24, -0.26, 0, 0,0],[-4.48, 143.12, -67.88, -74.53, -0.24, -0.26,0.35],[-22.57, 42.02, 0, 0, 0, 0,104.84]]
                        ],
                        [
                            "eid40",
                            "location",
                            750,
                            500,
                            "linear",
                            "${brake_parts2D}",
                            [[-4.24, 143.38, -0.24, -0.26, 0, 0,0],[-4.48, 143.12, -67.88, -74.53, -0.24, -0.26,0.35],[-22.57, 42.02, 0, 0, 0, 0,104.84]]
                        ],
                        [
                            "eid31",
                            "location",
                            1250,
                            1750,
                            "easeOutQuad",
                            "${brake_parts2D}",
                            [[-4.24, 143.38, -0.24, -0.26, 0, 0,0],[-4.48, 143.12, -67.88, -74.53, -0.24, -0.26,0.35],[-22.57, 42.02, 0, 0, 0, 0,104.84]]
                        ],
                        [
                            "eid26",
                            "location",
                            0,
                            500,
                            "linear",
                            "${brake_parts2B}",
                            [[83.21, 73.23, 0.09, 0.19, 0, 0,0],[83.3, 73.42, 48.4, 103.34, 0.09, 0.18,0.21],[65.3, 161.12, -0.4, 0.11, -86.67, 24,100.28],[64.9, 161.23, 0, 0, 0, 0,100.7]]
                        ],
                        [
                            "eid42",
                            "location",
                            750,
                            500,
                            "linear",
                            "${brake_parts2B}",
                            [[83.21, 73.23, 0.09, 0.19, 0, 0,0],[83.3, 73.42, 48.4, 103.34, 0.09, 0.18,0.21],[65.3, 161.12, -0.4, 0.11, -86.67, 24,100.28],[64.9, 161.23, 0, 0, 0, 0,100.7]]
                        ],
                        [
                            "eid34",
                            "location",
                            1250,
                            1750,
                            "easeOutQuad",
                            "${brake_parts2B}",
                            [[83.21, 73.23, 0.09, 0.19, 0, 0,0],[83.3, 73.42, 48.4, 103.34, 0.09, 0.18,0.21],[65.3, 161.12, -0.4, 0.11, -86.67, 24,100.28],[64.9, 161.23, 0, 0, 0, 0,100.7]]
                        ],
                        [
                            "eid16",
                            "location",
                            0,
                            500,
                            "linear",
                            "${brake_partsA}",
                            [[20, 12, 135.62, 21.27, 0, 0,0],[83.21, 73.23, 0, 0, 0, 0,92.05]]
                        ],
                        [
                            "eid43",
                            "location",
                            750,
                            500,
                            "linear",
                            "${brake_partsA}",
                            [[20, 12, 135.62, 21.27, 0, 0,0],[83.21, 73.23, 0, 0, 0, 0,92.05]]
                        ],
                        [
                            "eid35",
                            "location",
                            1250,
                            1750,
                            "easeOutQuad",
                            "${brake_partsA}",
                            [[20, 12, 135.62, 21.27, 0, 0,0],[83.21, 73.23, 0, 0, 0, 0,92.05]]
                        ],
                        [
                            "eid44",
                            "location",
                            0,
                            500,
                            "linear",
                            "${brake_parts2E}",
                            [[-22.57, 42.02, 0.07, -0.17, 0, 0,0],[-22.5, 41.85, 11.67, -29.19, 0.07, -0.17,0.18],[-7.17, 21.09, 38.54, -29.34, 17.53, -13.35,26.29],[19.75, 11.82, 0, 0, 0, 0,55.2]]
                        ],
                        [
                            "eid39",
                            "location",
                            750,
                            500,
                            "linear",
                            "${brake_parts2E}",
                            [[-22.57, 42.02, 0.07, -0.17, 0, 0,0],[-22.5, 41.85, 11.67, -29.19, 0.07, -0.17,0.18],[-7.17, 21.09, 38.54, -29.34, 17.53, -13.35,26.29],[19.75, 11.82, 0, 0, 0, 0,55.2]]
                        ],
                        [
                            "eid30",
                            "location",
                            1250,
                            1750,
                            "easeOutQuad",
                            "${brake_parts2E}",
                            [[-22.57, 42.02, 0.07, -0.17, 0, 0,0],[-22.5, 41.85, 11.67, -29.19, 0.07, -0.17,0.18],[-7.17, 21.09, 38.54, -29.34, 17.53, -13.35,26.29],[19.75, 11.82, 0, 0, 0, 0,55.2]]
                        ]
                    ]
                }
            },
            "BRAKE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [302, 110, '133', '138', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad1-2.png'],
                            id: 'brake_pad1-2',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [324, 167, '70', '54', 'auto', 'auto'],
                            id: 'brake_pad2-2',
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [293, 104, '80', '167', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-1.png'],
                            id: 'brake_pad2-1',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [293, 104, '80px', '166px', 'auto', 'auto'],
                            id: 'brake_pad2-1_line',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-1_line.png', '0px', '0px']
                        },
                        {
                            rect: [63, 43, '256', '396', 'auto', 'auto'],
                            id: 'brake_back',
                            fill: ['rgba(0,0,0,0)', 'images/brake_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['51', '4', 277, 457, 'auto', 'auto'],
                            id: 'BRAKE_lineMove',
                            symbolName: 'BRAKE_lineMove',
                            type: 'rect'
                        },
                        {
                            rect: [40, 0, '406', 500, 'auto', 'auto'],
                            id: 'brake_cover',
                            fill: ['rgba(0,0,0,0)', 'images/brake_cover.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 40, '330', '406', 'auto', 'auto'],
                            id: 'brake_body',
                            fill: ['rgba(0,0,0,0)', 'images/brake_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['52', '176', 40, 24, 'auto', 'auto'],
                            id: 'BRAKE_partsMovie',
                            symbolName: 'BRAKE_partsMovie',
                            type: 'rect'
                        },
                        {
                            rect: [1, 219, '117', '103', 'auto', 'auto'],
                            id: 'brake_parts1',
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 40, '331', '407', 'auto', 'auto'],
                            id: 'brake_outLine',
                            fill: ['rgba(0,0,0,0)', 'images/brake_outLine.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [170, 84, '227', '242', 'auto', 'auto'],
                            id: 'brake_pad1-1',
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad1-1.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 470, 500]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "brakeOn": 33,
                        "brakeOff": 1000
                    },
                    data: [
                        [
                            "eid46",
                            "top",
                            33,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '167px',
                            '164px'
                        ],
                        [
                            "eid74",
                            "top",
                            1600,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '164px',
                            '167px'
                        ],
                        [
                            "eid50",
                            "left",
                            634,
                            266,
                            "linear",
                            "${brake_pad1-2}",
                            '302px',
                            '320px'
                        ],
                        [
                            "eid70",
                            "left",
                            1000,
                            266,
                            "linear",
                            "${brake_pad1-2}",
                            '320px',
                            '302px'
                        ],
                        [
                            "eid57",
                            "top",
                            634,
                            266,
                            "linear",
                            "${brake_pad1-1}",
                            '84px',
                            '83px'
                        ],
                        [
                            "eid68",
                            "top",
                            1000,
                            266,
                            "linear",
                            "${brake_pad1-1}",
                            '83px',
                            '84px'
                        ],
                        [
                            "eid49",
                            "left",
                            634,
                            266,
                            "linear",
                            "${brake_pad1-1}",
                            '170px',
                            '188px'
                        ],
                        [
                            "eid67",
                            "left",
                            1000,
                            266,
                            "linear",
                            "${brake_pad1-1}",
                            '188px',
                            '170px'
                        ],
                        [
                            "eid58",
                            "top",
                            634,
                            266,
                            "linear",
                            "${brake_pad1-2}",
                            '110px',
                            '109px'
                        ],
                        [
                            "eid71",
                            "top",
                            1000,
                            266,
                            "linear",
                            "${brake_pad1-2}",
                            '109px',
                            '110px'
                        ],
                        [
                            "eid45",
                            "left",
                            33,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '324px',
                            '308px'
                        ],
                        [
                            "eid47",
                            "left",
                            333,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '308px',
                            '280px'
                        ],
                        [
                            "eid73",
                            "left",
                            1300,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '280px',
                            '308px'
                        ],
                        [
                            "eid72",
                            "left",
                            1600,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '308px',
                            '324px'
                        ],
                        [
                            "eid48",
                            "left",
                            333,
                            267,
                            "linear",
                            "${brake_pad2-1}",
                            '293px',
                            '265px'
                        ],
                        [
                            "eid69",
                            "left",
                            1300,
                            267,
                            "linear",
                            "${brake_pad2-1}",
                            '265px',
                            '293px'
                        ],
                        [
                            "eid3",
                            "left",
                            333,
                            267,
                            "linear",
                            "${brake_pad2-1_line}",
                            '293px',
                            '265px'
                        ],
                        [
                            "eid11",
                            "left",
                            1300,
                            267,
                            "linear",
                            "${brake_pad2-1_line}",
                            '265px',
                            '293px'
                        ]
                    ]
                }
            },
            "BRAKE_lineMove": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '277', '457', 'auto', 'auto'],
                            id: 'brake_move_line',
                            fill: ['rgba(0,0,0,0)', 'images/brake_move_line.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 277, 457]
                        }
                    }
                },
                timeline: {
                    duration: 2767,
                    autoPlay: true,
                    labels: {
                        "slowStop": 750
                    },
                    data: [
                        [
                            "eid15",
                            "left",
                            0,
                            267,
                            "linear",
                            "${brake_move_line}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid37",
                            "left",
                            750,
                            267,
                            "linear",
                            "${brake_move_line}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid29",
                            "left",
                            1017,
                            1750,
                            "easeOutQuad",
                            "${brake_move_line}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            267,
                            "linear",
                            "${brake_move_line}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid36",
                            "top",
                            750,
                            267,
                            "linear",
                            "${brake_move_line}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid28",
                            "top",
                            1017,
                            1750,
                            "easeOutQuad",
                            "${brake_move_line}",
                            '0px',
                            '20px'
                        ]
                    ]
                }
            },
            "BRAKE_abrasion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [302, 110, '133', '138', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad1-2.png'],
                            id: 'brake_pad1-2',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [324, 167, '70', '54', 'auto', 'auto'],
                            id: 'brake_pad2-2',
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [293, 104, '80px', '167px', 'auto', 'auto'],
                            id: 'brake_pad2-1_abrasion',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-1_abrasion.png', '0px', '0px']
                        },
                        {
                            rect: [293, 104, '80px', '166px', 'auto', 'auto'],
                            id: 'brake_pad2-1_line',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-1_line.png', '0px', '0px']
                        },
                        {
                            rect: [63, 43, '256', '396', 'auto', 'auto'],
                            id: 'brake_back',
                            fill: ['rgba(0,0,0,0)', 'images/brake_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['51', '4', 277, 457, 'auto', 'auto'],
                            id: 'BRAKE_lineMove',
                            symbolName: 'BRAKE_lineMove',
                            type: 'rect'
                        },
                        {
                            rect: [40, 0, '406', 500, 'auto', 'auto'],
                            id: 'brake_cover',
                            fill: ['rgba(0,0,0,0)', 'images/brake_cover.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 40, '330', '406', 'auto', 'auto'],
                            id: 'brake_body',
                            fill: ['rgba(0,0,0,0)', 'images/brake_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [10, 61, '269px', '373px', 'auto', 'auto'],
                            id: 'brake_body_abrasion',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brake_body_abrasion.png', '0px', '0px']
                        },
                        {
                            rect: ['52', '176', 40, 24, 'auto', 'auto'],
                            id: 'BRAKE_partsMovie',
                            symbolName: 'BRAKE_partsMovie',
                            type: 'rect'
                        },
                        {
                            rect: [1, 219, '117', '103', 'auto', 'auto'],
                            id: 'brake_parts1',
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 40, '331', '407', 'auto', 'auto'],
                            id: 'brake_outLine',
                            fill: ['rgba(0,0,0,0)', 'images/brake_outLine.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [170, 84, '227px', '242px', 'auto', 'auto'],
                            id: 'brake_pad1-1_abrasion',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad1-1_abrasion.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 470, 500]
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
                            "eid19",
                            "left",
                            333,
                            267,
                            "linear",
                            "${brake_pad2-1_abrasion}",
                            '293px',
                            '265px'
                        ],
                        [
                            "eid22",
                            "left",
                            1300,
                            267,
                            "linear",
                            "${brake_pad2-1_abrasion}",
                            '265px',
                            '293px'
                        ],
                        [
                            "eid45",
                            "left",
                            33,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '324px',
                            '308px'
                        ],
                        [
                            "eid47",
                            "left",
                            333,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '308px',
                            '280px'
                        ],
                        [
                            "eid73",
                            "left",
                            1300,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '280px',
                            '308px'
                        ],
                        [
                            "eid72",
                            "left",
                            1600,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '308px',
                            '324px'
                        ],
                        [
                            "eid50",
                            "left",
                            634,
                            266,
                            "linear",
                            "${brake_pad1-2}",
                            '302px',
                            '320px'
                        ],
                        [
                            "eid70",
                            "left",
                            1000,
                            266,
                            "linear",
                            "${brake_pad1-2}",
                            '320px',
                            '302px'
                        ],
                        [
                            "eid58",
                            "top",
                            634,
                            266,
                            "linear",
                            "${brake_pad1-2}",
                            '110px',
                            '109px'
                        ],
                        [
                            "eid71",
                            "top",
                            1000,
                            266,
                            "linear",
                            "${brake_pad1-2}",
                            '109px',
                            '110px'
                        ],
                        [
                            "eid23",
                            "left",
                            634,
                            266,
                            "linear",
                            "${brake_pad1-1_abrasion}",
                            '170px',
                            '188px'
                        ],
                        [
                            "eid24",
                            "left",
                            1000,
                            266,
                            "linear",
                            "${brake_pad1-1_abrasion}",
                            '188px',
                            '170px'
                        ],
                        [
                            "eid12",
                            "left",
                            333,
                            267,
                            "linear",
                            "${brake_pad2-1_line}",
                            '293px',
                            '265px'
                        ],
                        [
                            "eid13",
                            "left",
                            1300,
                            267,
                            "linear",
                            "${brake_pad2-1_line}",
                            '265px',
                            '293px'
                        ],
                        [
                            "eid25",
                            "top",
                            634,
                            266,
                            "linear",
                            "${brake_pad1-1_abrasion}",
                            '84px',
                            '83px'
                        ],
                        [
                            "eid27",
                            "top",
                            1000,
                            266,
                            "linear",
                            "${brake_pad1-1_abrasion}",
                            '83px',
                            '84px'
                        ],
                        [
                            "eid46",
                            "top",
                            33,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '167px',
                            '164px'
                        ],
                        [
                            "eid74",
                            "top",
                            1600,
                            267,
                            "linear",
                            "${brake_pad2-2}",
                            '164px',
                            '167px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-30351776");
