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
                            id: 'topFlow',
                            symbolName: 'topFlow',
                            type: 'rect',
                            rect: ['176', '487', '1289', '31', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'topFlow_flowMovie',
                            symbolName: 'topFlow_flowMovie',
                            type: 'rect',
                            rect: ['351', '492', '1113', '21', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'PEDAL',
                            symbolName: 'PEDAL',
                            type: 'rect',
                            rect: ['259', '658', '990', '515', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'module',
                            type: 'image',
                            tag: 'img',
                            rect: ['612', '338', '382', '339', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"module.png"]
                        },
                        {
                            id: 'BRAKE',
                            symbolName: 'BRAKE',
                            type: 'rect',
                            rect: ['1407', '233', '470', '500', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'tm',
                            type: 'image',
                            tag: 'img',
                            rect: ['46', '237', '335', '421', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tm.png"],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'txt_back3',
                            type: 'text',
                            rect: ['612px', '456', '382px', '75', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">ESC 모듈</p>",
                            align: "center",
                            font: ['굴림', [69, ""], "rgb(76,76,76)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['763', '49', '1072', '106', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">auto hold 기능은 브레이크 페달에서 발을 떼고 있어도 정지상태를 유지하는 기능입니다.​</p>",
                            align: "auto",
                            font: ['나눔고딕', [46, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['99', '57', '610', '76', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">auto hold 기능​</p>",
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
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid162",
                            "opacity",
                            300,
                            500,
                            "linear",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "opacity",
                            433,
                            500,
                            "linear",
                            "${txt_back3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${tm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "scaleX",
                            233,
                            500,
                            "linear",
                            "${BRAKE}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            433,
                            500,
                            "linear",
                            "${module}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            433,
                            500,
                            "linear",
                            "${topFlow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid173",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${txt_back3}",
                            '612px',
                            '612px'
                        ],
                        [
                            "eid146",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${tm}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            233,
                            500,
                            "linear",
                            "${BRAKE}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid4",
                            "top",
                            600,
                            0,
                            "linear",
                            "${topFlow_flowMovie}",
                            '492px',
                            '492px'
                        ],
                        [
                            "eid144",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${tm}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            433,
                            500,
                            "linear",
                            "${PEDAL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "left",
                            600,
                            0,
                            "linear",
                            "${topFlow_flowMovie}",
                            '351px',
                            '351px'
                        ],
                        [
                            "eid175",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${txt_back3}",
                            '382px',
                            '382px'
                        ],
                        [
                            "eid172",
                            "opacity",
                            233,
                            0,
                            "linear",
                            "${BRAKE}",
                            '1',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            433,
                            500,
                            "linear",
                            "${topFlow_flowMovie}",
                            '0',
                            '1'
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
                            type: 'image',
                            id: 'brake_pad2-2',
                            tag: 'img',
                            rect: [324, 167, '70', '54', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-2.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_pad1-2',
                            tag: 'img',
                            rect: [302, 110, '133', '138', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad1-2.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_pad2-1',
                            tag: 'img',
                            rect: [293, 104, '80', '167', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_pad2-1.png']
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
                    duration: 1867,
                    autoPlay: false,
                    labels: {
                        "brakeOn": 33,
                        "brakeOff": 1000
                    },
                    data: [
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
            "topFlow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1254', '31', 'auto', 'auto'],
                            id: 'topFlow_back',
                            fill: ['rgba(0,0,0,0)', 'images/topFlow_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/topFlow_back_red.png'],
                            id: 'topFlow_back_red',
                            rect: [816, 5, '426', '21', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/topFlow_back_blue.png'],
                            id: 'topFlow_back_blue',
                            rect: [816, 5, '426', '21', 'auto', 'auto'],
                            display: 'block',
                            tag: 'img'
                        },
                        {
                            font: ['굴림', [58, ''], 'rgb(236,30,121)', 'normal', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'center',
                            id: 'txt_contents2',
                            text: '브레이크 작동',
                            display: 'none',
                            rect: [836, -91, '372', '63', 'auto', 'auto']
                        },
                        {
                            font: ['굴림', [58, ''], 'rgb(0,113,187)', 'normal', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'center',
                            id: 'txt_contents1',
                            text: '브레이크 해제',
                            display: 'block',
                            rect: [836, -91, '372', '63', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1289, 31]
                        }
                    }
                },
                timeline: {
                    duration: 233,
                    autoPlay: false,
                    labels: {
                        "brakeOff": 0,
                        "brakeOn": 233
                    },
                    data: [
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${topFlow_back_red}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            233,
                            0,
                            "linear",
                            "${topFlow_back_red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8",
                            "display",
                            233,
                            0,
                            "linear",
                            "${topFlow_back_blue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt_contents2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            233,
                            0,
                            "linear",
                            "${txt_contents2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "display",
                            233,
                            0,
                            "linear",
                            "${txt_contents1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "topFlow_flowMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1113', '21', 'auto', 'auto'],
                            id: 'topFlow_src',
                            fill: ['rgba(0,0,0,0)', 'images/topFlow_src.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1113, 21]
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "left",
                            0,
                            167,
                            "linear",
                            "${topFlow_src}",
                            '0px',
                            '18px'
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
                    duration: 267,
                    autoPlay: true,
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
                            "eid14",
                            "top",
                            0,
                            267,
                            "linear",
                            "${brake_move_line}",
                            '0px',
                            '20px'
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
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts2.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_parts2B',
                            tag: 'img',
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts2.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_parts2C',
                            tag: 'img',
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts2.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_parts2D',
                            tag: 'img',
                            rect: ['0px', '0px', '40', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts2.png']
                        },
                        {
                            type: 'image',
                            id: 'brake_parts2E',
                            tag: 'img',
                            rect: ['-43px', '30px', '40', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brake_parts2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
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
                            "eid38",
                            "location",
                            0,
                            500,
                            "linear",
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
                            "eid16",
                            "location",
                            0,
                            500,
                            "linear",
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
                        ]
                    ]
                }
            },
            "PEDAL": {
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
                            fill: ['rgba(0,0,0,0)', 'images/flow_accel_stop.png'],
                            id: 'flow_accel_stop',
                            rect: [641, 0, '8', '310', 'auto', 'auto'],
                            display: 'block',
                            tag: 'img'
                        },
                        {
                            rect: ['641', '0', 8, 310, 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'PEDAL_flow2',
                            type: 'rect',
                            id: 'PEDAL_flow2'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flow_brake_stop.png'],
                            id: 'flow_brake_stop',
                            rect: [444, 0, '9', '310', 'auto', 'auto'],
                            display: 'block',
                            tag: 'img'
                        },
                        {
                            rect: ['444', '0', 9, 310, 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'PEDAL_flow1',
                            type: 'rect',
                            id: 'PEDAL_flow1'
                        },
                        {
                            rect: [593, 251, '104', '264', 'auto', 'auto'],
                            id: 'pedal_accel',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_accel.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_accel_sel.png'],
                            id: 'pedal_accel_sel',
                            opacity: '0',
                            rect: [594, 252, '102', '262', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            rect: [373, 251, '115', '264', 'auto', 'auto'],
                            id: 'pedal_brake',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_brake.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_brake_sel.png'],
                            id: 'pedal_brake_sel',
                            opacity: '0',
                            rect: [375, 252, '111', '262', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            rect: [98, 247, '892', '10', 'auto', 'auto'],
                            id: 'h_line',
                            fill: ['rgba(0,0,0,0)', 'images/h_line.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            font: ['굴림', [58, ''], 'rgb(76,76,76)', 'normal', 'none', 'normal', '', ''],
                            type: 'text',
                            id: 'txt_back2',
                            text: '가속페달',
                            align: 'center',
                            rect: [721, 389, '236', '63', 'auto', 'auto']
                        },
                        {
                            font: ['굴림', [58, ''], 'rgb(76,76,76)', 'normal', 'none', 'normal', '', ''],
                            type: 'text',
                            id: 'txt_back1',
                            text: '브레이크페달',
                            align: 'center',
                            rect: [0, 389, '352', '63', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 990, 515]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    labels: {
                        "gogo": 1000
                    },
                    data: [
                        [
                            "eid112",
                            "scaleX",
                            3500,
                            500,
                            "linear",
                            "${pedal_accel_sel}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid126",
                            "scaleX",
                            4750,
                            500,
                            "linear",
                            "${pedal_accel_sel}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid140",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${flow_accel_stop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${flow_accel_stop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '252px',
                            '231px'
                        ],
                        [
                            "eid103",
                            "top",
                            2250,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '231px',
                            '252px'
                        ],
                        [
                            "eid90",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${pedal_brake}",
                            '251px',
                            '230px'
                        ],
                        [
                            "eid108",
                            "top",
                            2250,
                            500,
                            "linear",
                            "${pedal_brake}",
                            '230px',
                            '251px'
                        ],
                        [
                            "eid114",
                            "scaleX",
                            3500,
                            500,
                            "linear",
                            "${pedal_accel}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            4750,
                            500,
                            "linear",
                            "${pedal_accel}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid86",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid104",
                            "scaleY",
                            2250,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid87",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid109",
                            "scaleX",
                            2250,
                            500,
                            "linear",
                            "${pedal_brake}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid134",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${PEDAL_flow2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${PEDAL_flow2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${PEDAL_flow2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid110",
                            "scaleY",
                            2250,
                            500,
                            "linear",
                            "${pedal_brake}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid117",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${pedal_accel}",
                            '251px',
                            '229px'
                        ],
                        [
                            "eid132",
                            "top",
                            4750,
                            500,
                            "linear",
                            "${pedal_accel}",
                            '229px',
                            '251px'
                        ],
                        [
                            "eid133",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${PEDAL_flow1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${PEDAL_flow1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${PEDAL_flow1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '375px',
                            '379px'
                        ],
                        [
                            "eid107",
                            "left",
                            2250,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '379px',
                            '375px'
                        ],
                        [
                            "eid93",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '0',
                            '0.9921875'
                        ],
                        [
                            "eid106",
                            "opacity",
                            2250,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '0.9921875',
                            '0'
                        ],
                        [
                            "eid118",
                            "opacity",
                            3500,
                            500,
                            "linear",
                            "${pedal_accel_sel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            4750,
                            500,
                            "linear",
                            "${pedal_accel_sel}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "scaleY",
                            3500,
                            500,
                            "linear",
                            "${pedal_accel_sel}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            4750,
                            500,
                            "linear",
                            "${pedal_accel_sel}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid92",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${pedal_brake}",
                            '373px',
                            '377px'
                        ],
                        [
                            "eid111",
                            "left",
                            2250,
                            500,
                            "linear",
                            "${pedal_brake}",
                            '377px',
                            '373px'
                        ],
                        [
                            "eid115",
                            "scaleY",
                            3500,
                            500,
                            "linear",
                            "${pedal_accel}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid131",
                            "scaleY",
                            4750,
                            500,
                            "linear",
                            "${pedal_accel}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid116",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${pedal_accel_sel}",
                            '252px',
                            '230px'
                        ],
                        [
                            "eid129",
                            "top",
                            4750,
                            500,
                            "linear",
                            "${pedal_accel_sel}",
                            '230px',
                            '252px'
                        ],
                        [
                            "eid85",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid105",
                            "scaleX",
                            2250,
                            500,
                            "linear",
                            "${pedal_brake_sel}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid135",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${flow_brake_stop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${flow_brake_stop}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "PEDAL_flow1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '9', '310', 'auto', 'auto'],
                            id: 'flow_brake_move',
                            fill: ['rgba(0,0,0,0)', 'images/flow_brake_move.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 9, 310]
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: true,
                    data: [
                        [
                            "eid75",
                            "top",
                            0,
                            200,
                            "linear",
                            "${flow_brake_move}",
                            '0px',
                            '-25px'
                        ]
                    ]
                }
            },
            "PEDAL_flow2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '8', '310', 'auto', 'auto'],
                            id: 'flow_accel_move',
                            fill: ['rgba(0,0,0,0)', 'images/flow_accel_move.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 8, 310]
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: true,
                    data: [
                        [
                            "eid76",
                            "top",
                            0,
                            200,
                            "linear",
                            "${flow_accel_move}",
                            '0px',
                            '-25px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-4921528");
