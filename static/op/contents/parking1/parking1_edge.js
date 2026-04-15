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
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'backPic',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '706px', '2560', '734px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"backPic.png"]
                        },
                        {
                            id: 'P_CAR',
                            symbolName: 'P_CAR',
                            type: 'rect',
                            rect: ['606px', '537px', '1439', '599', 'auto', 'auto'],
                            transform: [[],['-36']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
                            type: 'image',
                            tag: 'img',
                            rect: ['1069', '526', '346', '346', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"replayBtn.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(140,142,144,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid370",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid371",
                            "opacity",
                            7750,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid300",
                            "left",
                            250,
                            1167,
                            "easeOutQuad",
                            "${P_CAR}",
                            '-1518px',
                            '1102px'
                        ],
                        [
                            "eid304",
                            "left",
                            1750,
                            1708,
                            "linear",
                            "${P_CAR}",
                            '1102px',
                            '606px'
                        ],
                        [
                            "eid310",
                            "left",
                            3834,
                            2083,
                            "linear",
                            "${P_CAR}",
                            '606px',
                            '380px'
                        ],
                        [
                            "eid311",
                            "left",
                            6250,
                            833,
                            "linear",
                            "${P_CAR}",
                            '380px',
                            '544px'
                        ],
                        [
                            "eid305",
                            "top",
                            1750,
                            1708,
                            "linear",
                            "${P_CAR}",
                            '121px',
                            '537px'
                        ],
                        [
                            "eid317",
                            "top",
                            3834,
                            2083,
                            "linear",
                            "${P_CAR}",
                            '537px',
                            '809px'
                        ],
                        [
                            "eid303",
                            "rotateZ",
                            1750,
                            1708,
                            "linear",
                            "${P_CAR}",
                            '0deg',
                            '-36deg'
                        ],
                        [
                            "eid309",
                            "rotateZ",
                            3834,
                            2083,
                            "linear",
                            "${P_CAR}",
                            '-36deg',
                            '0deg'
                        ],
                        [
                            "eid368",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid369",
                            "opacity",
                            7750,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "SIGNAL1": {
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
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1.png'],
                            rect: ['-15px', '-56px', '52', '186', 'auto', 'auto'],
                            id: 'signal_src1',
                            opacity: '0',
                            transform: [[], [], [], ['0.4', '0.4']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1.png'],
                            rect: ['-15px', '-56px', '52', '186', 'auto', 'auto'],
                            id: 'signal_src1Copy',
                            opacity: '0',
                            transform: [[], [], [], ['0.4', '0.4']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1.png'],
                            rect: ['-15px', '-56px', '52', '186', 'auto', 'auto'],
                            id: 'signal_src1Copy2',
                            opacity: '0',
                            transform: [[], [], [], ['0.4', '0.4']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src1.png'],
                            rect: ['-15px', '-56px', '52', '186', 'auto', 'auto'],
                            id: 'signal_src1Copy3',
                            opacity: '0',
                            transform: [[], [], [], ['0.4', '0.4']],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '21px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 733.33333333333,
                    autoPlay: false,
                    data: [
                        [
                            "eid44",
                            "top",
                            200,
                            433,
                            "linear",
                            "${signal_src1Copy2}",
                            '-56px',
                            '-58px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            68,
                            "linear",
                            "${signal_src1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            365,
                            68,
                            "linear",
                            "${signal_src1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "top",
                            100,
                            433,
                            "linear",
                            "${signal_src1Copy}",
                            '-56px',
                            '-58px'
                        ],
                        [
                            "eid49",
                            "left",
                            200,
                            433,
                            "linear",
                            "${signal_src1Copy2}",
                            '-15px',
                            '-142px'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            0,
                            433,
                            "linear",
                            "${signal_src1}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            100,
                            433,
                            "linear",
                            "${signal_src1Copy}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            300,
                            68,
                            "linear",
                            "${signal_src1Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            665,
                            68,
                            "linear",
                            "${signal_src1Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid50",
                            "top",
                            300,
                            433,
                            "linear",
                            "${signal_src1Copy3}",
                            '-56px',
                            '-58px'
                        ],
                        [
                            "eid46",
                            "scaleX",
                            200,
                            433,
                            "linear",
                            "${signal_src1Copy2}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleY",
                            100,
                            433,
                            "linear",
                            "${signal_src1Copy}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid55",
                            "left",
                            300,
                            433,
                            "linear",
                            "${signal_src1Copy3}",
                            '-15px',
                            '-142px'
                        ],
                        [
                            "eid47",
                            "opacity",
                            200,
                            68,
                            "linear",
                            "${signal_src1Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            565,
                            68,
                            "linear",
                            "${signal_src1Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            433,
                            "linear",
                            "${signal_src1}",
                            '-15px',
                            '-142px'
                        ],
                        [
                            "eid43",
                            "left",
                            100,
                            433,
                            "linear",
                            "${signal_src1Copy}",
                            '-15px',
                            '-142px'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            300,
                            433,
                            "linear",
                            "${signal_src1Copy3}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            200,
                            433,
                            "linear",
                            "${signal_src1Copy2}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            100,
                            68,
                            "linear",
                            "${signal_src1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            465,
                            68,
                            "linear",
                            "${signal_src1Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid52",
                            "scaleX",
                            300,
                            433,
                            "linear",
                            "${signal_src1Copy3}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            0,
                            433,
                            "linear",
                            "${signal_src1}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            433,
                            "linear",
                            "${signal_src1}",
                            '-56px',
                            '-58px'
                        ]
                    ]
                }
            },
            "P_CAR": {
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
                            id: 'car1',
                            tag: 'img',
                            rect: ['161px', '0px', '1278', '599', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1.png']
                        },
                        {
                            rect: ['113px', '272px', '21', '74', 'auto', 'auto'],
                            id: 'SIGNAL1',
                            symbolName: 'SIGNAL1',
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-123'], [0, 0, 0], [1, 1, 1]],
                            id: 'SIGNAL2',
                            symbolName: 'SIGNAL1',
                            rect: ['1353px', '484px', '21', '74', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['80', '192', '100', '277', 'auto', 'auto'],
                            id: 'SIGNAL_SHORT',
                            symbolName: 'SIGNAL_SHORT',
                            type: 'rect'
                        },
                        {
                            rect: ['74px', '186px', null, null, 'auto', 'auto'],
                            id: 'SIGNAL_MID',
                            symbolName: 'SIGNAL_MID',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL_LONG',
                            symbolName: 'SIGNAL_LONG',
                            rect: ['80px', '186px', null, null, 'auto', 'auto'],
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1439px', '599px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "SIGNAL_SHORT": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['70'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src2_1',
                            opacity: '0',
                            rect: ['-25px', '-92px', '40px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png']
                        },
                        {
                            transform: [[], ['-70'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src2_2',
                            opacity: '0',
                            rect: ['-4px', '316px', '53px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png']
                        },
                        {
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src3_1',
                            opacity: '0',
                            rect: ['-75px', '-53px', '77px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src3.png']
                        },
                        {
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src3_2',
                            opacity: '0',
                            rect: ['-60px', '304px', '96px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src3.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '277px']
                        }
                    }
                },
                timeline: {
                    duration: 266.66666666667,
                    autoPlay: false,
                    data: [
                        [
                            "eid91",
                            "opacity",
                            0,
                            67,
                            "linear",
                            "${signal_src2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            134,
                            66,
                            "linear",
                            "${signal_src2_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid75",
                            "left",
                            0,
                            67,
                            "linear",
                            "${signal_src3_1}",
                            '-3px',
                            '-96px'
                        ],
                        [
                            "eid141",
                            "left",
                            134,
                            66,
                            "linear",
                            "${signal_src3_1}",
                            '-96px',
                            '-75px'
                        ],
                        [
                            "eid95",
                            "opacity",
                            0,
                            67,
                            "linear",
                            "${signal_src2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            134,
                            66,
                            "linear",
                            "${signal_src2_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid81",
                            "top",
                            0,
                            67,
                            "linear",
                            "${signal_src2_1}",
                            '11px',
                            '-51px'
                        ],
                        [
                            "eid143",
                            "top",
                            134,
                            66,
                            "linear",
                            "${signal_src2_1}",
                            '-51px',
                            '-92px'
                        ],
                        [
                            "eid57",
                            "top",
                            0,
                            67,
                            "linear",
                            "${signal_src3_2}",
                            '223px',
                            '248px'
                        ],
                        [
                            "eid150",
                            "top",
                            134,
                            66,
                            "linear",
                            "${signal_src3_2}",
                            '248px',
                            '304px'
                        ],
                        [
                            "eid59",
                            "left",
                            0,
                            67,
                            "linear",
                            "${signal_src3_2}",
                            '1px',
                            '-83px'
                        ],
                        [
                            "eid151",
                            "left",
                            134,
                            66,
                            "linear",
                            "${signal_src3_2}",
                            '-83px',
                            '-60px'
                        ],
                        [
                            "eid67",
                            "left",
                            0,
                            67,
                            "linear",
                            "${signal_src2_2}",
                            '53px',
                            '-27px'
                        ],
                        [
                            "eid154",
                            "left",
                            134,
                            66,
                            "linear",
                            "${signal_src2_2}",
                            '-27px',
                            '-4px'
                        ],
                        [
                            "eid65",
                            "top",
                            0,
                            67,
                            "linear",
                            "${signal_src2_2}",
                            '214px',
                            '261px'
                        ],
                        [
                            "eid153",
                            "top",
                            134,
                            66,
                            "linear",
                            "${signal_src2_2}",
                            '261px',
                            '316px'
                        ],
                        [
                            "eid63",
                            "height",
                            0,
                            67,
                            "linear",
                            "${signal_src3_2}",
                            '24px',
                            '33px'
                        ],
                        [
                            "eid157",
                            "height",
                            134,
                            66,
                            "linear",
                            "${signal_src3_2}",
                            '33px',
                            '12px'
                        ],
                        [
                            "eid93",
                            "opacity",
                            0,
                            67,
                            "linear",
                            "${signal_src3_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            134,
                            66,
                            "linear",
                            "${signal_src3_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid89",
                            "opacity",
                            0,
                            67,
                            "linear",
                            "${signal_src3_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            134,
                            66,
                            "linear",
                            "${signal_src3_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "height",
                            0,
                            67,
                            "linear",
                            "${signal_src3_1}",
                            '24px',
                            '33px'
                        ],
                        [
                            "eid149",
                            "height",
                            134,
                            66,
                            "linear",
                            "${signal_src3_1}",
                            '33px',
                            '18px'
                        ],
                        [
                            "eid83",
                            "left",
                            0,
                            67,
                            "linear",
                            "${signal_src2_1}",
                            '36px',
                            '-53px'
                        ],
                        [
                            "eid144",
                            "left",
                            134,
                            66,
                            "linear",
                            "${signal_src2_1}",
                            '-53px',
                            '-25px'
                        ],
                        [
                            "eid77",
                            "width",
                            0,
                            67,
                            "linear",
                            "${signal_src3_1}",
                            '77px',
                            '189px'
                        ],
                        [
                            "eid142",
                            "width",
                            134,
                            66,
                            "linear",
                            "${signal_src3_1}",
                            '189px',
                            '88px'
                        ],
                        [
                            "eid73",
                            "top",
                            0,
                            67,
                            "linear",
                            "${signal_src3_1}",
                            '27px',
                            '-19px'
                        ],
                        [
                            "eid140",
                            "top",
                            134,
                            66,
                            "linear",
                            "${signal_src3_1}",
                            '-19px',
                            '-53px'
                        ],
                        [
                            "eid69",
                            "width",
                            0,
                            67,
                            "linear",
                            "${signal_src2_2}",
                            '53px',
                            '165px'
                        ],
                        [
                            "eid155",
                            "width",
                            134,
                            66,
                            "linear",
                            "${signal_src2_2}",
                            '165px',
                            '64px'
                        ],
                        [
                            "eid87",
                            "height",
                            0,
                            67,
                            "linear",
                            "${signal_src2_1}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid147",
                            "height",
                            134,
                            66,
                            "linear",
                            "${signal_src2_1}",
                            '34px',
                            '18px'
                        ],
                        [
                            "eid61",
                            "width",
                            0,
                            67,
                            "linear",
                            "${signal_src3_2}",
                            '96px',
                            '189px'
                        ],
                        [
                            "eid152",
                            "width",
                            134,
                            66,
                            "linear",
                            "${signal_src3_2}",
                            '189px',
                            '82px'
                        ],
                        [
                            "eid85",
                            "width",
                            0,
                            67,
                            "linear",
                            "${signal_src2_1}",
                            '40px',
                            '165px'
                        ],
                        [
                            "eid145",
                            "width",
                            134,
                            66,
                            "linear",
                            "${signal_src2_1}",
                            '165px',
                            '56px'
                        ],
                        [
                            "eid71",
                            "height",
                            0,
                            67,
                            "linear",
                            "${signal_src2_2}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid156",
                            "height",
                            134,
                            66,
                            "linear",
                            "${signal_src2_2}",
                            '34px',
                            '12px'
                        ]
                    ]
                }
            },
            "SIGNAL_MID": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['70'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src2_1',
                            opacity: '0',
                            rect: ['-25px', '-92px', '40px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png']
                        },
                        {
                            transform: [[], ['-70'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src2_2',
                            opacity: '0',
                            rect: ['-4px', '316px', '53px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png']
                        },
                        {
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src3_1',
                            opacity: '0',
                            rect: ['-75px', '-53px', '77px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src3.png']
                        },
                        {
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src3_2',
                            opacity: '0',
                            rect: ['-60px', '304px', '96px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src3.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '277px']
                        }
                    }
                },
                timeline: {
                    duration: 533,
                    autoPlay: false,
                    data: [
                        [
                            "eid91",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            267,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid75",
                            "left",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '-3px',
                            '-96px'
                        ],
                        [
                            "eid141",
                            "left",
                            267,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '-96px',
                            '-75px'
                        ],
                        [
                            "eid95",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            267,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid81",
                            "top",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '11px',
                            '-51px'
                        ],
                        [
                            "eid143",
                            "top",
                            267,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '-51px',
                            '-92px'
                        ],
                        [
                            "eid63",
                            "height",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '24px',
                            '33px'
                        ],
                        [
                            "eid157",
                            "height",
                            267,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '33px',
                            '12px'
                        ],
                        [
                            "eid59",
                            "left",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '1px',
                            '-83px'
                        ],
                        [
                            "eid151",
                            "left",
                            267,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '-83px',
                            '-60px'
                        ],
                        [
                            "eid67",
                            "left",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '53px',
                            '-27px'
                        ],
                        [
                            "eid154",
                            "left",
                            267,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '-27px',
                            '-4px'
                        ],
                        [
                            "eid65",
                            "top",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '214px',
                            '261px'
                        ],
                        [
                            "eid153",
                            "top",
                            267,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '261px',
                            '316px'
                        ],
                        [
                            "eid71",
                            "height",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid156",
                            "height",
                            267,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '34px',
                            '12px'
                        ],
                        [
                            "eid83",
                            "left",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '36px',
                            '-53px'
                        ],
                        [
                            "eid144",
                            "left",
                            267,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '-53px',
                            '-25px'
                        ],
                        [
                            "eid89",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            267,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "height",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '24px',
                            '33px'
                        ],
                        [
                            "eid149",
                            "height",
                            267,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '33px',
                            '18px'
                        ],
                        [
                            "eid85",
                            "width",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '40px',
                            '165px'
                        ],
                        [
                            "eid145",
                            "width",
                            267,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '165px',
                            '56px'
                        ],
                        [
                            "eid69",
                            "width",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '53px',
                            '165px'
                        ],
                        [
                            "eid155",
                            "width",
                            267,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '165px',
                            '64px'
                        ],
                        [
                            "eid73",
                            "top",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '27px',
                            '-19px'
                        ],
                        [
                            "eid140",
                            "top",
                            267,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '-19px',
                            '-53px'
                        ],
                        [
                            "eid77",
                            "width",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '77px',
                            '189px'
                        ],
                        [
                            "eid142",
                            "width",
                            267,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '189px',
                            '88px'
                        ],
                        [
                            "eid87",
                            "height",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid147",
                            "height",
                            267,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '34px',
                            '18px'
                        ],
                        [
                            "eid61",
                            "width",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '96px',
                            '189px'
                        ],
                        [
                            "eid152",
                            "width",
                            267,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '189px',
                            '82px'
                        ],
                        [
                            "eid93",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            267,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid57",
                            "top",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '223px',
                            '248px'
                        ],
                        [
                            "eid150",
                            "top",
                            267,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '248px',
                            '304px'
                        ]
                    ]
                }
            },
            "SIGNAL_LONG": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['21px', '1px', '62px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png'],
                            transform: [[], ['70'], [0, 0, 0], [1, 1, 1]],
                            id: 'signal_src2_1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['33px', '227px', '83px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src2.png'],
                            transform: [[], ['-70'], [0, 0, 0], [1, 1, 1]],
                            id: 'signal_src2_2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['-40px', '12px', '120px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src3.png'],
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            id: 'signal_src3_1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['-45px', '242px', '150px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src3.png'],
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                            id: 'signal_src3_2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '277px']
                        }
                    }
                },
                timeline: {
                    duration: 967,
                    autoPlay: false,
                    labels: {
                        "gogo": 500
                    },
                    data: [
                        [
                            "eid357",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid358",
                            "opacity",
                            233,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid281",
                            "opacity",
                            501,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid282",
                            "opacity",
                            734,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid339",
                            "left",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '-40px',
                            '-96px'
                        ],
                        [
                            "eid340",
                            "left",
                            233,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '-96px',
                            '-40px'
                        ],
                        [
                            "eid263",
                            "left",
                            501,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '-40px',
                            '-96px'
                        ],
                        [
                            "eid264",
                            "left",
                            734,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '-96px',
                            '-40px'
                        ],
                        [
                            "eid347",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid348",
                            "opacity",
                            233,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid271",
                            "opacity",
                            501,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid272",
                            "opacity",
                            734,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid345",
                            "height",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid346",
                            "height",
                            233,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '34px',
                            '24px'
                        ],
                        [
                            "eid269",
                            "height",
                            501,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid270",
                            "height",
                            734,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '34px',
                            '24px'
                        ],
                        [
                            "eid323",
                            "top",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '242px',
                            '248px'
                        ],
                        [
                            "eid324",
                            "top",
                            233,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '248px',
                            '242px'
                        ],
                        [
                            "eid247",
                            "top",
                            501,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '242px',
                            '248px'
                        ],
                        [
                            "eid248",
                            "top",
                            734,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '248px',
                            '242px'
                        ],
                        [
                            "eid329",
                            "left",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '-45px',
                            '-83px'
                        ],
                        [
                            "eid330",
                            "left",
                            233,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '-83px',
                            '-45px'
                        ],
                        [
                            "eid253",
                            "left",
                            501,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '-45px',
                            '-83px'
                        ],
                        [
                            "eid254",
                            "left",
                            734,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '-83px',
                            '-45px'
                        ],
                        [
                            "eid349",
                            "left",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '33px',
                            '-27px'
                        ],
                        [
                            "eid350",
                            "left",
                            233,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '-27px',
                            '33px'
                        ],
                        [
                            "eid273",
                            "left",
                            501,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '33px',
                            '-27px'
                        ],
                        [
                            "eid274",
                            "left",
                            734,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '-27px',
                            '33px'
                        ],
                        [
                            "eid343",
                            "top",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '227px',
                            '261px'
                        ],
                        [
                            "eid344",
                            "top",
                            233,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '261px',
                            '227px'
                        ],
                        [
                            "eid267",
                            "top",
                            501,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '227px',
                            '261px'
                        ],
                        [
                            "eid268",
                            "top",
                            734,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '261px',
                            '227px'
                        ],
                        [
                            "eid353",
                            "top",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '1px',
                            '-51px'
                        ],
                        [
                            "eid354",
                            "top",
                            233,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '-51px',
                            '1px'
                        ],
                        [
                            "eid277",
                            "top",
                            501,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '1px',
                            '-51px'
                        ],
                        [
                            "eid278",
                            "top",
                            734,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '-51px',
                            '1px'
                        ],
                        [
                            "eid359",
                            "left",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '21px',
                            '-53px'
                        ],
                        [
                            "eid360",
                            "left",
                            233,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '-53px',
                            '21px'
                        ],
                        [
                            "eid283",
                            "left",
                            501,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '21px',
                            '-53px'
                        ],
                        [
                            "eid284",
                            "left",
                            734,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '-53px',
                            '21px'
                        ],
                        [
                            "eid327",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid328",
                            "opacity",
                            233,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid251",
                            "opacity",
                            501,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid252",
                            "opacity",
                            734,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid335",
                            "height",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '24px',
                            '33px'
                        ],
                        [
                            "eid336",
                            "height",
                            233,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '33px',
                            '24px'
                        ],
                        [
                            "eid259",
                            "height",
                            501,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '24px',
                            '33px'
                        ],
                        [
                            "eid260",
                            "height",
                            734,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '33px',
                            '24px'
                        ],
                        [
                            "eid361",
                            "width",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '62px',
                            '165px'
                        ],
                        [
                            "eid362",
                            "width",
                            233,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '165px',
                            '62px'
                        ],
                        [
                            "eid285",
                            "width",
                            501,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '62px',
                            '165px'
                        ],
                        [
                            "eid286",
                            "width",
                            734,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '165px',
                            '62px'
                        ],
                        [
                            "eid351",
                            "width",
                            0,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '83px',
                            '165px'
                        ],
                        [
                            "eid352",
                            "width",
                            233,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '165px',
                            '83px'
                        ],
                        [
                            "eid275",
                            "width",
                            501,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '83px',
                            '165px'
                        ],
                        [
                            "eid276",
                            "width",
                            734,
                            233,
                            "linear",
                            "${signal_src2_2}",
                            '165px',
                            '83px'
                        ],
                        [
                            "eid333",
                            "top",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '12px',
                            '-19px'
                        ],
                        [
                            "eid334",
                            "top",
                            233,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '-19px',
                            '12px'
                        ],
                        [
                            "eid257",
                            "top",
                            501,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '12px',
                            '-19px'
                        ],
                        [
                            "eid258",
                            "top",
                            734,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '-19px',
                            '12px'
                        ],
                        [
                            "eid341",
                            "width",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '120px',
                            '189px'
                        ],
                        [
                            "eid342",
                            "width",
                            233,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '189px',
                            '120px'
                        ],
                        [
                            "eid265",
                            "width",
                            501,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '120px',
                            '189px'
                        ],
                        [
                            "eid266",
                            "width",
                            734,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '189px',
                            '120px'
                        ],
                        [
                            "eid355",
                            "height",
                            0,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid356",
                            "height",
                            233,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '34px',
                            '24px'
                        ],
                        [
                            "eid279",
                            "height",
                            501,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid280",
                            "height",
                            734,
                            233,
                            "linear",
                            "${signal_src2_1}",
                            '34px',
                            '24px'
                        ],
                        [
                            "eid331",
                            "width",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '150px',
                            '189px'
                        ],
                        [
                            "eid332",
                            "width",
                            233,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '189px',
                            '150px'
                        ],
                        [
                            "eid255",
                            "width",
                            501,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '150px',
                            '189px'
                        ],
                        [
                            "eid256",
                            "width",
                            734,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '189px',
                            '150px'
                        ],
                        [
                            "eid337",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid338",
                            "opacity",
                            233,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid261",
                            "opacity",
                            501,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid262",
                            "opacity",
                            734,
                            233,
                            "linear",
                            "${signal_src3_1}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid325",
                            "height",
                            0,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '24px',
                            '33px'
                        ],
                        [
                            "eid326",
                            "height",
                            233,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '33px',
                            '24px'
                        ],
                        [
                            "eid249",
                            "height",
                            501,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '24px',
                            '33px'
                        ],
                        [
                            "eid250",
                            "height",
                            734,
                            233,
                            "linear",
                            "${signal_src3_2}",
                            '33px',
                            '24px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("parking1_edgeActions.js");
})("EDGE-14473072");
