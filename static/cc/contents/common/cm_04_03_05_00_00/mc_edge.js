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
                            id: 'BRAKE_CYLINDER',
                            symbolName: 'BRAKE_CYLINDER',
                            type: 'rect',
                            rect: ['374', '143', '1042', '742', 'auto', 'auto']
                        },
                        {
                            id: 'BRAKE',
                            symbolName: 'BRAKE',
                            type: 'rect',
                            rect: ['36', '442', '470', '500', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'NORMAL_DRUM',
                            symbolName: 'NORMAL_DRUM',
                            type: 'rect',
                            rect: ['334', '599', '417', '452', 'auto', 'auto'],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['1022', '143', '741', '50', 'auto', 'auto'],
                            text: "실린더 고무 파손으로 인한 증상",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['1022', '206px', '788', '255px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​<span style=\"font-size: 30px;\">*장거리 운행시 브레이크 작동불량</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">*제동시 제동거리가 길어짐</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">*브레이크 패킹 오일누유 발생</span></p><p style=\"margin: 0px; font-family: 굴림; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 75, 140); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: 60px;\">*브레이크 페달 작동거리 증가</p>",
                            align: "auto",
                            font: ['굴림', [40, "px"], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""],
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
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid179",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${BRAKE_CYLINDER}",
                            '143px',
                            '143px'
                        ],
                        [
                            "eid180",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${BRAKE}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid178",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${BRAKE_CYLINDER}",
                            '374px',
                            '374px'
                        ],
                        [
                            "eid181",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${BRAKE}",
                            '442px',
                            '442px'
                        ],
                        [
                            "eid177",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${NORMAL_DRUM}",
                            '599px',
                            '599px'
                        ],
                        [
                            "eid176",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${NORMAL_DRUM}",
                            '334px',
                            '334px'
                        ]
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
                            type: 'image',
                            id: 'brake_partsA',
                            tag: 'img',
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_parts2B',
                            tag: 'img',
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_parts2C',
                            tag: 'img',
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_parts2D',
                            tag: 'img',
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_parts2E',
                            tag: 'img',
                            rect: ['-43px', '30px', '40', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts255.png']
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
                            tag: 'img',
                            id: 'brake_pad1-2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad1-2.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_pad2-2',
                            tag: 'img',
                            rect: [324, 167, '70', '54', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-2.png']
                        },
                        {
                            rect: [293, 104, '80', '167', 'auto', 'auto'],
                            tag: 'img',
                            id: 'brake_pad2-1',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-1.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_pad2-1_line',
                            rect: [293, 104, '80px', '166px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-1_line.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'brake_back',
                            tag: 'img',
                            rect: [63, 43, '256', '396', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_back.png']
                        },
                        {
                            type: 'rect',
                            id: 'BRAKE_lineMove',
                            symbolName: 'BRAKE_lineMove',
                            rect: ['51', '4', 277, 457, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'brake_cover',
                            tag: 'img',
                            rect: [40, 0, '406', 500, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_cover.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_body',
                            tag: 'img',
                            rect: [0, 40, '330', '406', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_body.png']
                        },
                        {
                            type: 'rect',
                            id: 'BRAKE_partsMovie',
                            symbolName: 'BRAKE_partsMovie',
                            rect: ['52', '176', 40, 24, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'brake_parts1',
                            tag: 'img',
                            rect: [1, 219, '117', '103', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts1.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_outLine',
                            tag: 'img',
                            rect: [0, 40, '331', '407', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_outLine.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_pad1-1',
                            tag: 'img',
                            rect: [170, 84, '227', '242', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad1-1.png']
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
                            type: 'image',
                            id: 'brake_move_line',
                            tag: 'img',
                            rect: [0, 0, '277', '457', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_move_line.png']
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
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [44, 11, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src2',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [50, 12, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src3',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [56, 14, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src4',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [62, 15, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src5',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [68, 16, '24', '25', 'auto', 'auto'],
                            id: 'AJ_spring_src6',
                            fill: ['rgba(0,0,0,0)', 'images/AJ_spring_src6.png'],
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
                            type: 'image',
                            id: 'backPic',
                            tag: 'img',
                            rect: [39, 10, '378', '411', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/backPic.png']
                        },
                        {
                            type: 'image',
                            id: 'pad1',
                            tag: 'img',
                            rect: [73, 92, '114', '226', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pad1.png']
                        },
                        {
                            type: 'rect',
                            id: 'AJ_SPRING',
                            symbolName: 'AJ_SPRING',
                            rect: [137, 238, 168, 43, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'WC_bar2',
                            tag: 'img',
                            rect: [113, 141, '92', '58', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WC_bar2.png']
                        },
                        {
                            type: 'rect',
                            id: 'WC_SPRING',
                            symbolName: 'WC_SPRING',
                            rect: [157, 150, 117, 64, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'WC_body',
                            tag: 'img',
                            rect: [105, 135, '244', '98', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WC_body.png']
                        },
                        {
                            type: 'image',
                            id: 'WC_bar1',
                            tag: 'img',
                            rect: [237, 167, '104', '61', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WC_bar1.png']
                        },
                        {
                            rect: [241, 112, '114', '237', 'auto', 'auto'],
                            tag: 'img',
                            id: 'pad2',
                            opacity: '0.7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pad2.png']
                        },
                        {
                            type: 'image',
                            id: 'drum_outSide',
                            tag: 'img',
                            rect: [212, 11, '205', '373', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/drum_outSide.png']
                        },
                        {
                            rect: [129, 15, '276', '399', 'auto', 'auto'],
                            tag: 'img',
                            id: 'drum_body',
                            opacity: '0.7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/drum_body.png']
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
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [14, 3, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src2',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [28, 6, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src3',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [43, 9, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src4',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [57, 12, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src5',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [71, 15, '46', '49', 'auto', 'auto'],
                            id: 'WC_spring_src6',
                            fill: ['rgba(0,0,0,0)', 'images/WC_spring_src6.png'],
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
                            tag: 'img',
                            id: 'drum',
                            type: 'image',
                            rect: [0, 0, '395', '395', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/drum.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 395, 395]
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
                            "eid75",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${drum}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid215",
                            "rotateZ",
                            750,
                            2017,
                            "easeOutQuad",
                            "${drum}",
                            '0deg',
                            '60deg'
                        ]
                    ]
                }
            },
            "TOP_OILTANK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [2, 1, '438', '342', 'auto', 'auto'],
                            tag: 'img',
                            id: 'oilTank_body_20pct',
                            opacity: '0.2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oilTank_body_20pct.png']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, '0.95', 1], ['50%', '100%']],
                            tag: 'img',
                            type: 'image',
                            id: 'oilTank_oil1',
                            opacity: '0.2',
                            rect: [7, 62, '427', '276', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/oilTank_oil_20pct.png']
                        },
                        {
                            rect: [7, 62, '427', '276', 'auto', 'auto'],
                            tag: 'img',
                            id: 'oilTank_oil2',
                            opacity: '0.2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oilTank_oil_20pct.png']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, '1.05', 1], ['50%', '100%']],
                            tag: 'img',
                            type: 'image',
                            id: 'oilTank_oil3',
                            opacity: '0.2',
                            rect: [7, 62, '427', '276px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/oilTank_oil_20pct.png']
                        },
                        {
                            type: 'image',
                            id: 'topThing',
                            tag: 'img',
                            rect: [0, 0, '622', '478', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/topThing.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 622, 478]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid25",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${oilTank_oil1}",
                            '0.95',
                            '1.05'
                        ],
                        [
                            "eid21",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${oilTank_oil3}",
                            '1.05',
                            '0.95'
                        ]
                    ]
                }
            },
            "PIPE1_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '194', '79', 'auto', 'auto'],
                            id: 'pipe_inner1-2',
                            fill: ['rgba(0,0,0,0)', 'images/pipe_inner1-2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [199, -11, 2, 46, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '1',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[0, 0, 0], ['-13', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(246,169,167,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 194, 79]
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    data: [
                        [
                            "eid79",
                            "top",
                            0,
                            300,
                            "linear",
                            "${Rectangle2}",
                            '-11px',
                            '13px'
                        ],
                        [
                            "eid81",
                            "left",
                            0,
                            300,
                            "linear",
                            "${Rectangle2}",
                            '199px',
                            '1px'
                        ],
                        [
                            "eid83",
                            "width",
                            0,
                            300,
                            "linear",
                            "${Rectangle2}",
                            '2px',
                            '194px'
                        ]
                    ]
                }
            },
            "PIPE1_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '46', '126', 'auto', 'auto'],
                            id: 'pipe_inner1_1',
                            fill: ['rgba(0,0,0,0)', 'images/pipe_inner1_1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '-11px', '46px', 5, 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(246,169,167,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 46, 126]
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    data: [
                        [
                            "eid27",
                            "height",
                            0,
                            300,
                            "linear",
                            "${Rectangle}",
                            '5px',
                            '137px'
                        ]
                    ]
                }
            },
            "PIPE2_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '46', '237', 'auto', 'auto'],
                            id: 'pipe_inner2_1',
                            fill: ['rgba(0,0,0,0)', 'images/pipe_inner2_1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '-11px', '46px', 5, 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(246,169,167,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 46, 237]
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    data: [
                        [
                            "eid84",
                            "height",
                            0,
                            300,
                            "linear",
                            "${Rectangle}",
                            '5px',
                            '248px'
                        ]
                    ]
                }
            },
            "SPRING_S": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '69', '95', 'auto', 'auto'],
                            id: 'spring_Small',
                            fill: ['rgba(0,0,0,0)', 'images/spring_Small.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [23, 8, '69', '95', 'auto', 'auto'],
                            id: 'spring_SmallCopy',
                            fill: ['rgba(0,0,0,0)', 'images/spring_Small.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [45, 16, '69', '95', 'auto', 'auto'],
                            id: 'spring_SmallCopy2',
                            fill: ['rgba(0,0,0,0)', 'images/spring_Small.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [68, 24, '69', '95', 'auto', 'auto'],
                            id: 'spring_SmallCopy3',
                            fill: ['rgba(0,0,0,0)', 'images/spring_Small.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 137, 119]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid90",
                            "left",
                            0,
                            500,
                            "linear",
                            "${spring_SmallCopy2}",
                            '45px',
                            '24px'
                        ],
                        [
                            "eid92",
                            "left",
                            0,
                            500,
                            "linear",
                            "${spring_SmallCopy}",
                            '23px',
                            '12px'
                        ],
                        [
                            "eid88",
                            "left",
                            0,
                            500,
                            "linear",
                            "${spring_SmallCopy3}",
                            '68px',
                            '36px'
                        ],
                        [
                            "eid93",
                            "top",
                            0,
                            500,
                            "linear",
                            "${spring_SmallCopy}",
                            '8px',
                            '4px'
                        ],
                        [
                            "eid91",
                            "top",
                            0,
                            500,
                            "linear",
                            "${spring_SmallCopy2}",
                            '16px',
                            '8px'
                        ],
                        [
                            "eid89",
                            "top",
                            0,
                            500,
                            "linear",
                            "${spring_SmallCopy3}",
                            '24px',
                            '12px'
                        ]
                    ]
                }
            },
            "SPRING_B": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '128', '177', 'auto', 'auto'],
                            id: 'spring_Big',
                            fill: ['rgba(0,0,0,0)', 'images/spring_Big.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [21, 7, '128', '177', 'auto', 'auto'],
                            id: 'spring_BigCopy',
                            fill: ['rgba(0,0,0,0)', 'images/spring_Big.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [41, 15, '128', '177', 'auto', 'auto'],
                            id: 'spring_BigCopy2',
                            fill: ['rgba(0,0,0,0)', 'images/spring_Big.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 169, 192]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid122",
                            "left",
                            0,
                            500,
                            "linear",
                            "${spring_BigCopy2}",
                            '41px',
                            '18px'
                        ],
                        [
                            "eid121",
                            "top",
                            0,
                            500,
                            "linear",
                            "${spring_BigCopy}",
                            '7px',
                            '2px'
                        ],
                        [
                            "eid120",
                            "left",
                            0,
                            500,
                            "linear",
                            "${spring_BigCopy}",
                            '21px',
                            '9px'
                        ],
                        [
                            "eid123",
                            "top",
                            0,
                            500,
                            "linear",
                            "${spring_BigCopy2}",
                            '15px',
                            '5px'
                        ]
                    ]
                }
            },
            "BRAKE_CYLINDER": {
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
                            id: 'OILS',
                            symbolName: 'OILS',
                            rect: [511, 458, 156, 157, 'auto', 'auto']
                        },
                        {
                            rect: [85, 187, '741', '371', 'auto', 'auto'],
                            id: 'innerFill',
                            fill: ['rgba(0,0,0,0)', 'images/innerFill.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'LeakOil',
                            symbolName: 'LeakOil',
                            rect: [125, 387, 485, 17, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['17', 0, 0], [0, 0], ['1.05004', 1, 1], ['50%', '50%']]
                        },
                        {
                            rect: [365, 404, 46, 237, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'PIPE2_1',
                            symbolName: 'PIPE2_1',
                            type: 'rect'
                        },
                        {
                            rect: [156, 343, 46, 126, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'PIPE1_1',
                            symbolName: 'PIPE1_1',
                            type: 'rect'
                        },
                        {
                            rect: [7, 436, 194, 79, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'PIPE1_2',
                            symbolName: 'PIPE1_2',
                            type: 'rect'
                        },
                        {
                            rect: [216, 607, 194, 79, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'PIPE1_2Copy',
                            symbolName: 'PIPE1_2',
                            type: 'rect'
                        },
                        {
                            rect: [1, 307, '416', '386', 'auto', 'auto'],
                            id: 'pipe_fill',
                            fill: ['rgba(0,0,0,0)', 'images/pipe_fill.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 306, '418', '388', 'auto', 'auto'],
                            id: 'pipe_outLine',
                            fill: ['rgba(0,0,0,0)', 'images/pipe_outLine.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'SPRING_S2',
                            symbolName: 'SPRING_S',
                            rect: [113, 215, 137, 119, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, '0deg'], [1, 1, 1], ['0%', '0%']],
                            fill: ['rgba(0,0,0,0)', 'images/Oil1.png'],
                            type: 'image',
                            id: 'Oil2',
                            opacity: '0.5',
                            rect: [89, 191, 204, '172', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'PISTON2_CLIP',
                            symbolName: 'PISTON2_CLIP',
                            rect: [187, 220, 208, 174, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SPRING_S',
                            symbolName: 'SPRING_S',
                            rect: [323, 282, 137, 119, 'auto', 'auto']
                        },
                        {
                            rect: [294, 253, '204', '172', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Oil1.png'],
                            id: 'Oil1',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'PISTON1_CLIP',
                            symbolName: 'PISTON1_CLIP',
                            rect: [425, 293, 281, 174, 'auto', 'auto']
                        },
                        {
                            rect: [578, 308, '165', '224', 'auto', 'auto'],
                            id: 'hydroBag2',
                            fill: ['rgba(0,0,0,0)', 'images/hydroBag2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'SPRING_B',
                            symbolName: 'SPRING_B',
                            rect: [600, 334, 169, 192, 'auto', 'auto']
                        },
                        {
                            rect: [645, 333, '175', '217', 'auto', 'auto'],
                            id: 'hydroBag',
                            fill: ['rgba(0,0,0,0)', 'images/hydroBag.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [84, 186, '744', '374', 'auto', 'auto'],
                            id: 'outLine',
                            fill: ['rgba(0,0,0,0)', 'images/outLine.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'pedal_bar',
                            rect: [726, 428, '128px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pedal_bar.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'TOP_OILTANK',
                            symbolName: 'TOP_OILTANK',
                            rect: [166, 0, 622, 478, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'pedal_body',
                            rect: [787, 437, '255px', '305px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pedal_body.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1042, 742]
                        }
                    }
                },
                timeline: {
                    duration: 3133,
                    autoPlay: false,
                    labels: {
                        "cylinderOn": 33,
                        "cylinderOff": 2033
                    },
                    data: [
                        [
                            "eid158",
                            "left",
                            33,
                            500,
                            "linear",
                            "${SPRING_S}",
                            '323px',
                            '309px'
                        ],
                        [
                            "eid162",
                            "left",
                            2033,
                            500,
                            "linear",
                            "${SPRING_S}",
                            '309px',
                            '323px'
                        ],
                        [
                            "eid125",
                            "top",
                            33,
                            500,
                            "linear",
                            "${Oil1}",
                            '253px',
                            '244px'
                        ],
                        [
                            "eid153",
                            "top",
                            2033,
                            500,
                            "linear",
                            "${Oil1}",
                            '244px',
                            '253px'
                        ],
                        [
                            "eid114",
                            "left",
                            33,
                            500,
                            "linear",
                            "${pedal_body}",
                            '787px',
                            '754px'
                        ],
                        [
                            "eid145",
                            "left",
                            2033,
                            500,
                            "linear",
                            "${pedal_body}",
                            '754px',
                            '787px'
                        ],
                        [
                            "eid217",
                            "left",
                            33,
                            500,
                            "linear",
                            "${PISTON1_CLIP}",
                            '425px',
                            '358px'
                        ],
                        [
                            "eid235",
                            "left",
                            2033,
                            500,
                            "linear",
                            "${PISTON1_CLIP}",
                            '358px',
                            '425px'
                        ],
                        [
                            "eid115",
                            "top",
                            33,
                            500,
                            "linear",
                            "${pedal_body}",
                            '437px',
                            '427px'
                        ],
                        [
                            "eid144",
                            "top",
                            2033,
                            500,
                            "linear",
                            "${pedal_body}",
                            '427px',
                            '437px'
                        ],
                        [
                            "eid221",
                            "top",
                            33,
                            500,
                            "linear",
                            "${PISTON2_CLIP}",
                            '220px',
                            '211px'
                        ],
                        [
                            "eid238",
                            "top",
                            2033,
                            500,
                            "linear",
                            "${PISTON2_CLIP}",
                            '211px',
                            '220px'
                        ],
                        [
                            "eid126",
                            "width",
                            33,
                            500,
                            "linear",
                            "${Oil2}",
                            '204px',
                            '170px'
                        ],
                        [
                            "eid157",
                            "width",
                            2033,
                            500,
                            "linear",
                            "${Oil2}",
                            '170px',
                            '204px'
                        ],
                        [
                            "eid216",
                            "top",
                            33,
                            500,
                            "linear",
                            "${PISTON1_CLIP}",
                            '293px',
                            '272px'
                        ],
                        [
                            "eid236",
                            "top",
                            2033,
                            500,
                            "linear",
                            "${PISTON1_CLIP}",
                            '272px',
                            '293px'
                        ],
                        [
                            "eid118",
                            "left",
                            33,
                            500,
                            "linear",
                            "${pedal_bar}",
                            '726px',
                            '693px'
                        ],
                        [
                            "eid146",
                            "left",
                            2033,
                            500,
                            "linear",
                            "${pedal_bar}",
                            '693px',
                            '726px'
                        ],
                        [
                            "eid127",
                            "skewY",
                            33,
                            500,
                            "linear",
                            "${Oil2}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid156",
                            "skewY",
                            2033,
                            500,
                            "linear",
                            "${Oil2}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid124",
                            "left",
                            33,
                            500,
                            "linear",
                            "${Oil1}",
                            '294px',
                            '262px'
                        ],
                        [
                            "eid152",
                            "left",
                            2033,
                            500,
                            "linear",
                            "${Oil1}",
                            '262px',
                            '294px'
                        ],
                        [
                            "eid117",
                            "top",
                            33,
                            500,
                            "linear",
                            "${hydroBag}",
                            '333px',
                            '323px'
                        ],
                        [
                            "eid149",
                            "top",
                            2033,
                            500,
                            "linear",
                            "${hydroBag}",
                            '323px',
                            '333px'
                        ],
                        [
                            "eid119",
                            "top",
                            33,
                            500,
                            "linear",
                            "${pedal_bar}",
                            '428px',
                            '418px'
                        ],
                        [
                            "eid147",
                            "top",
                            2033,
                            500,
                            "linear",
                            "${pedal_bar}",
                            '418px',
                            '428px'
                        ],
                        [
                            "eid159",
                            "top",
                            33,
                            500,
                            "linear",
                            "${SPRING_S}",
                            '282px',
                            '277px'
                        ],
                        [
                            "eid163",
                            "top",
                            2033,
                            500,
                            "linear",
                            "${SPRING_S}",
                            '277px',
                            '282px'
                        ],
                        [
                            "eid220",
                            "left",
                            33,
                            500,
                            "linear",
                            "${PISTON2_CLIP}",
                            '187px',
                            '155px'
                        ],
                        [
                            "eid237",
                            "left",
                            2033,
                            500,
                            "linear",
                            "${PISTON2_CLIP}",
                            '155px',
                            '187px'
                        ],
                        [
                            "eid116",
                            "left",
                            33,
                            500,
                            "linear",
                            "${hydroBag}",
                            '645px',
                            '612px'
                        ],
                        [
                            "eid148",
                            "left",
                            2033,
                            500,
                            "linear",
                            "${hydroBag}",
                            '612px',
                            '645px'
                        ],
                            [ "eid164", "trigger", 33, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SPRING_S2}', [] ] ],
                            [ "eid165", "trigger", 33, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SPRING_S}', [] ] ],
                            [ "eid166", "trigger", 33, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SPRING_B}', [] ] ],
                            [ "eid87", "trigger", 533, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PIPE2_1}', [] ] ],
                            [ "eid77", "trigger", 533, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PIPE1_1}', [] ] ],
                            [ "eid85", "trigger", 833, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PIPE1_2}', [] ] ],
                            [ "eid86", "trigger", 833, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PIPE1_2Copy}', [] ] ],
                            [ "eid167", "trigger", 2033, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${SPRING_B}', [] ] ],
                            [ "eid168", "trigger", 2033, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${SPRING_S}', [] ] ],
                            [ "eid169", "trigger", 2033, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${SPRING_S2}', [] ] ],
                            [ "eid170", "trigger", 2533, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${PIPE1_2Copy}', [] ] ],
                            [ "eid171", "trigger", 2533, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${PIPE1_2}', [] ] ],
                            [ "eid172", "trigger", 2833, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${PIPE1_1}', [] ] ],
                            [ "eid173", "trigger", 2833, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${PIPE2_1}', [] ] ]
                    ]
                }
            },
            "PISTON1_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '281', '174', 'auto', 'auto'],
                            id: 'piston1',
                            fill: ['rgba(0,0,0,0)', 'images/piston1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'PAEKING_CLIP',
                            symbolName: 'PAEKING_CLIP',
                            rect: ['-1', '-1', 83, 143, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'OILS2',
                            symbolName: 'OILS',
                            rect: [-10, -17, 156, 157, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['0.53205', '0.8', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 281, 174]
                        }
                    }
                },
                timeline: {
                    duration: 1600,
                    autoPlay: true,
                    data: [
                            [ "eid240", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OILS2}', [] ] ]
                    ]
                }
            },
            "PISTON2_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '208', '174', 'auto', 'auto'],
                            id: 'piston2',
                            fill: ['rgba(0,0,0,0)', 'images/piston2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'PAEKING_CLIP2',
                            symbolName: 'PAEKING_CLIP',
                            rect: [-1, -1, 83, 143, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'OILS2',
                            symbolName: 'OILS',
                            rect: [-4, -17, 156, 157, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['0.53205', '0.8', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 208, 174]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid234",
                            "left",
                            0,
                            0,
                            "linear",
                            "${PAEKING_CLIP2}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${PAEKING_CLIP2}",
                            '-1px',
                            '-1px'
                        ],
                            [ "eid241", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OILS2}', [] ] ]
                    ]
                }
            },
            "PAEKING_CLIP": {
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
                            id: 'paeking',
                            rect: [0, 0, '83px', '143px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/paeking.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'paeking_white',
                            opacity: '0',
                            rect: [0, 0, '83px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/paeking_white.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 83, 143]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid225",
                            "opacity",
                            0,
                            133,
                            "linear",
                            "${paeking_white}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "opacity",
                            200,
                            133,
                            "linear",
                            "${paeking_white}",
                            '0.998004',
                            '0'
                        ]
                    ]
                }
            },
            "OIL1": {
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
                            rect: [2, -138, 7, 12, 'auto', 'auto'],
                            id: 'pollution_oil1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pollution_oil1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 8, 19]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid154",
                            "width",
                            0,
                            233,
                            "linear",
                            "${pollution_oil1}",
                            '7px',
                            '14px'
                        ],
                        [
                            "eid162",
                            "width",
                            233,
                            267,
                            "linear",
                            "${pollution_oil1}",
                            '14px',
                            '8px'
                        ],
                        [
                            "eid164",
                            "top",
                            233,
                            267,
                            "linear",
                            "${pollution_oil1}",
                            '-138px',
                            '0px'
                        ],
                        [
                            "eid163",
                            "left",
                            233,
                            267,
                            "linear",
                            "${pollution_oil1}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid152",
                            "height",
                            0,
                            233,
                            "linear",
                            "${pollution_oil1}",
                            '12px',
                            '155px'
                        ],
                        [
                            "eid159",
                            "height",
                            233,
                            267,
                            "linear",
                            "${pollution_oil1}",
                            '155px',
                            '19px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${pollution_oil1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            233,
                            267,
                            "linear",
                            "${pollution_oil1}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "OIL3": {
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
                            id: 'pollution_oil3',
                            opacity: '0',
                            rect: [0, 0, 5, 23, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution_oil3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 20, 103]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid187",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${pollution_oil3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid194",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${pollution_oil3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "width",
                            500,
                            0,
                            "linear",
                            "${pollution_oil3}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid185",
                            "height",
                            0,
                            250,
                            "linear",
                            "${pollution_oil3}",
                            '23px',
                            '103px'
                        ],
                        [
                            "eid188",
                            "height",
                            250,
                            250,
                            "linear",
                            "${pollution_oil3}",
                            '103px',
                            '17px'
                        ],
                        [
                            "eid189",
                            "top",
                            250,
                            250,
                            "linear",
                            "${pollution_oil3}",
                            '0px',
                            '86px'
                        ]
                    ]
                }
            },
            "OIL2": {
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
                            id: 'pollution_oil2',
                            opacity: '0',
                            rect: [0, 0, 12, 28, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution_oil2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 23, 135]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid176",
                            "width",
                            0,
                            250,
                            "linear",
                            "${pollution_oil2}",
                            '12px',
                            '23px'
                        ],
                        [
                            "eid182",
                            "width",
                            250,
                            250,
                            "linear",
                            "${pollution_oil2}",
                            '23px',
                            '11px'
                        ],
                        [
                            "eid174",
                            "height",
                            0,
                            250,
                            "linear",
                            "${pollution_oil2}",
                            '28px',
                            '135px'
                        ],
                        [
                            "eid179",
                            "height",
                            250,
                            250,
                            "linear",
                            "${pollution_oil2}",
                            '135px',
                            '27px'
                        ],
                        [
                            "eid180",
                            "top",
                            250,
                            250,
                            "linear",
                            "${pollution_oil2}",
                            '0px',
                            '108px'
                        ],
                        [
                            "eid181",
                            "left",
                            250,
                            250,
                            "linear",
                            "${pollution_oil2}",
                            '0px',
                            '12px'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${pollution_oil2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid183",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${pollution_oil2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "OILS": {
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
                            id: 'OIL1',
                            symbolName: 'OIL1',
                            rect: [65, 97, 8, 19, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.7', '0.7', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            id: 'OIL1Copy',
                            symbolName: 'OIL1',
                            rect: [84, 129, 8, 19, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            id: 'OIL2',
                            symbolName: 'OIL2',
                            rect: [78, 33, 23, 135, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'OIL2Copy',
                            symbolName: 'OIL2',
                            rect: [57, 17, 23, 135, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            id: 'OIL3',
                            symbolName: 'OIL3',
                            rect: [58, 15, 20, 103, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'OIL3Copy',
                            symbolName: 'OIL3',
                            rect: [78, 92, 20, 103, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 156, 157]
                        }
                    }
                },
                timeline: {
                    duration: 1533,
                    autoPlay: false,
                    data: [
                            [ "eid197", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OIL1}', [] ] ],
                            [ "eid198", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OIL2}', [] ] ],
                            [ "eid199", "trigger", 366.66666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OIL1Copy}', [] ] ],
                            [ "eid200", "trigger", 377, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OIL3}', [] ] ],
                            [ "eid201", "trigger", 600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OIL2Copy}', [] ] ],
                            [ "eid202", "trigger", 766.66666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OIL3Copy}', [] ] ]
                    ]
                }
            },
            "LeakOil": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '485px', '17px', 'auto', 'auto'],
                            id: 'leakOil_src',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leakOil_src.png', '0px', '0px']
                        },
                        {
                            rect: [0, 9, '485px', 8, 'auto', 'auto'],
                            id: 'leakOil_srcCopy',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leakOil_src.png', '0px', '0px']
                        },
                        {
                            rect: [0, -10, '485px', 27, 'auto', 'auto'],
                            id: 'leakOil_srcCopy2',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leakOil_src.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 485, 17]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid243",
                            "height",
                            0,
                            500,
                            "linear",
                            "${leakOil_srcCopy}",
                            '8px',
                            '27px'
                        ],
                        [
                            "eid249",
                            "top",
                            0,
                            500,
                            "linear",
                            "${leakOil_srcCopy2}",
                            '-10px',
                            '9px'
                        ],
                        [
                            "eid245",
                            "top",
                            0,
                            500,
                            "linear",
                            "${leakOil_srcCopy}",
                            '9px',
                            '-10px'
                        ],
                        [
                            "eid248",
                            "height",
                            0,
                            500,
                            "linear",
                            "${leakOil_srcCopy2}",
                            '27px',
                            '8px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-8800815");
