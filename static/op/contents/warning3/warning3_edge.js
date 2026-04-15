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
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SCENE2',
                            display: 'none',
                            type: 'group',
                            rect: ['602', '7', '1283', '1427', 'auto', 'auto'],
                            c: [
                            {
                                id: 'backPic',
                                type: 'image',
                                tag: 'img',
                                rect: ['0px', '0px', '1081', '1205', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"backPic.png"]
                            },
                            {
                                id: 'pad_inner',
                                type: 'image',
                                tag: 'img',
                                rect: ['426px', '714px', '159', '353', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"pad_inner.png"]
                            },
                            {
                                id: 'disk',
                                type: 'image',
                                tag: 'img',
                                rect: ['492px', '474px', '557', '675', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"disk.png"]
                            },
                            {
                                id: 'ROTATOR',
                                symbolName: 'ROTATOR',
                                type: 'rect',
                                rect: ['633px', '622px', '378', '433', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                id: 'pad_outter',
                                type: 'image',
                                tag: 'img',
                                rect: ['566px', '756px', '163', '352', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"pad_outter.png"]
                            },
                            {
                                id: 'calliper1',
                                type: 'image',
                                tag: 'img',
                                rect: ['343px', '239px', '407', '935', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"calliper1.png"]
                            },
                            {
                                id: 'tire1',
                                type: 'image',
                                tag: 'img',
                                rect: ['205px', '186px', '1077', '1240', 'auto', 'auto'],
                                opacity: '0.4000000059604645',
                                fill: ["rgba(0,0,0,0)",im+"tire1.png"]
                            },
                            {
                                id: 'WHEEL',
                                symbolName: 'WHEEL',
                                type: 'rect',
                                rect: ['526px', '408px', '679', '922', 'auto', 'auto'],
                                opacity: '0.8'
                            },
                            {
                                id: 'tire_outLine',
                                type: 'image',
                                tag: 'img',
                                rect: ['206px', '187px', '1077', '1240', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"tire_outLine.png"]
                            }]
                        },
                        {
                            id: 'SCENE1',
                            display: 'block',
                            type: 'group',
                            rect: ['-275', '417', '2834', '607', 'auto', 'auto'],
                            c: [
                            {
                                id: 'ROAD_CLIP',
                                symbolName: 'ROAD_CLIP',
                                type: 'rect',
                                rect: ['0px', '0px', '2834', '607', 'auto', 'auto']
                            },
                            {
                                id: 'SIGNAL',
                                symbolName: 'SIGNAL',
                                display: 'none',
                                type: 'rect',
                                rect: ['1064px', '179px', '1200px', '248', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                id: 'CAR1_CLIP',
                                symbolName: 'CAR1_CLIP',
                                type: 'rect',
                                rect: ['1848', '97', '919', '413', 'auto', 'auto']
                            },
                            {
                                id: 'CAR2_CLIP',
                                symbolName: 'CAR2_CLIP',
                                type: 'rect',
                                rect: ['2877px', '620px', '809', '379', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['39px', '40', '200', '200', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['1069', '526', '346', '346', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"replayBtn.png"]
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
                    duration: 9750,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "opacity",
                            5959,
                            0,
                            "linear",
                            "${pad_outter}",
                            '1',
                            '1'
                        ],
                        [
                            "eid140",
                            "left",
                            6375,
                            625,
                            "easeOutQuad",
                            "${pad_inner}",
                            '426px',
                            '452px'
                        ],
                        [
                            "eid57",
                            "opacity",
                            5959,
                            0,
                            "linear",
                            "${calliper1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            5959,
                            0,
                            "linear",
                            "${tire_outLine}",
                            '1',
                            '1'
                        ],
                        [
                            "eid31",
                            "left",
                            500,
                            1000,
                            "linear",
                            "${CAR2_CLIP}",
                            '2877px',
                            '757px'
                        ],
                        [
                            "eid28",
                            "left",
                            1583,
                            750,
                            "linear",
                            "${CAR2_CLIP}",
                            '757px',
                            '379px'
                        ],
                        [
                            "eid27",
                            "left",
                            2375,
                            584,
                            "linear",
                            "${CAR2_CLIP}",
                            '379px',
                            '38px'
                        ],
                        [
                            "eid26",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${CAR2_CLIP}",
                            '38px',
                            '291px'
                        ],
                        [
                            "eid105",
                            "opacity",
                            5959,
                            0,
                            "linear",
                            "${disk}",
                            '1',
                            '1'
                        ],
                        [
                            "eid50",
                            "display",
                            5959,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            7292,
                            0,
                            "easeOutQuad",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "left",
                            7333,
                            875,
                            "easeOutQuad",
                            "${CAR1_CLIP}",
                            '1848px',
                            '1122px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            9500,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${SCENE2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            5959,
                            0,
                            "easeOutQuad",
                            "${SCENE2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            7292,
                            0,
                            "easeOutQuad",
                            "${SCENE2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "top",
                            1583,
                            750,
                            "linear",
                            "${CAR2_CLIP}",
                            '620px',
                            '114px'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SIGNAL}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            4042,
                            0,
                            "linear",
                            "${SIGNAL}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            5959,
                            0,
                            "linear",
                            "${SIGNAL}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "opacity",
                            5959,
                            0,
                            "linear",
                            "${backPic}",
                            '1',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            5959,
                            0,
                            "linear",
                            "${tire1}",
                            '0.4000000059604645',
                            '0.4000000059604645'
                        ],
                        [
                            "eid104",
                            "opacity",
                            5959,
                            0,
                            "linear",
                            "${ROTATOR}",
                            '1',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            9500,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid53",
                            "opacity",
                            5959,
                            0,
                            "linear",
                            "${WHEEL}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid141",
                            "top",
                            6375,
                            625,
                            "easeOutQuad",
                            "${pad_inner}",
                            '714px',
                            '691px'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "opacity",
                            5959,
                            0,
                            "linear",
                            "${pad_inner}",
                            '1',
                            '1'
                        ],
                        [
                            "eid138",
                            "left",
                            6375,
                            625,
                            "easeOutQuad",
                            "${pad_outter}",
                            '566px',
                            '539px'
                        ],
                        [
                            "eid139",
                            "top",
                            6375,
                            625,
                            "easeOutQuad",
                            "${pad_outter}",
                            '756px',
                            '744px'
                        ],
                            [ "eid10", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ROAD_CLIP}', [0] ] ],
                            [ "eid150", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR2_CLIP}', [0] ] ],
                            [ "eid38", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR1_CLIP}', [0] ] ],
                            [ "eid34", "trigger", 3500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR2_CLIP}', ['lampOn'] ] ],
                            [ "eid35", "trigger", 4000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${ROAD_CLIP}', [] ] ],
                            [ "eid49", "trigger", 4042, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR2_CLIP}', ['blink'] ] ],
                            [ "eid44", "trigger", 4042, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL}', [] ] ],
                            [ "eid143", "trigger", 5959, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ROTATOR}', [0] ] ],
                            [ "eid142", "trigger", 5959, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL}', [0] ] ],
                            [ "eid144", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL}', ['st'] ] ],
                            [ "eid145", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${ROTATOR}', ['st'] ] ],
                            [ "eid149", "trigger", 7333.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR1_CLIP}', [0] ] ]
                    ]
                }
            },
            "ROAD_CLIP": {
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
                            id: 'road',
                            tag: 'img',
                            rect: ['365px', '0px', '2834', '607', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '2834px', '607px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${road}",
                            '0px',
                            '365px'
                        ]
                    ]
                }
            },
            "CAR2_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '3px', '803', '373', 'auto', 'auto'],
                            id: 'car2',
                            fill: ['rgba(0,0,0,0)', 'images/car2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '809', '379', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car2_blink.png'],
                            id: 'car2_blink',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['697px', '49px', '82', '281', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car2_redLamp.png'],
                            id: 'car2_redLamp',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '809px', '379px']
                        }
                    }
                },
                timeline: {
                    duration: 2416,
                    autoPlay: false,
                    labels: {
                        "lampOn": 42,
                        "blink": 500
                    },
                    data: [
                        [
                            "eid14",
                            "opacity",
                            500,
                            208,
                            "linear",
                            "${car2_blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            708,
                            208,
                            "linear",
                            "${car2_blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17",
                            "opacity",
                            1000,
                            208,
                            "linear",
                            "${car2_blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1208,
                            208,
                            "linear",
                            "${car2_blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1500,
                            208,
                            "linear",
                            "${car2_blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1708,
                            208,
                            "linear",
                            "${car2_blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21",
                            "opacity",
                            2000,
                            208,
                            "linear",
                            "${car2_blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2208,
                            208,
                            "linear",
                            "${car2_blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "opacity",
                            42,
                            250,
                            "linear",
                            "${car2_redLamp}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CAR1_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '919', '413', 'auto', 'auto'],
                            id: 'car1',
                            fill: ['rgba(0,0,0,0)', 'images/car1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['821px', '53px', '73', '307', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1_redLamp.png'],
                            id: 'car1_redLamp',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '919px', '413px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid37",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${car1_redLamp}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "SIGNAL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_src',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy3',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy2',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy7',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy6',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy5',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy4',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy15',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy14',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy13',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src12.png'],
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            id: 'signal_srcCopy12',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1200px', '248px']
                        }
                    }
                },
                timeline: {
                    duration: 2873,
                    autoPlay: true,
                    labels: {
                        "gogo": 1375
                    },
                    data: [
                        [
                            "eid71",
                            "opacity",
                            251,
                            187,
                            "linear",
                            "${signal_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            1564,
                            187,
                            "linear",
                            "${signal_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "scaleY",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid119",
                            "left",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid60",
                            "scaleX",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            875,
                            187,
                            "linear",
                            "${signal_srcCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            2186,
                            187,
                            "linear",
                            "${signal_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "left",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid91",
                            "opacity",
                            500,
                            187,
                            "linear",
                            "${signal_srcCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1811,
                            187,
                            "linear",
                            "${signal_srcCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            0,
                            187,
                            "linear",
                            "${signal_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            1311,
                            187,
                            "linear",
                            "${signal_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            1250,
                            187,
                            "linear",
                            "${signal_srcCopy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            2561,
                            187,
                            "linear",
                            "${signal_srcCopy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid88",
                            "left",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid80",
                            "scaleX",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            624,
                            187,
                            "linear",
                            "${signal_srcCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            1937,
                            187,
                            "linear",
                            "${signal_srcCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "left",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid52",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid128",
                            "left",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            1375,
                            186,
                            "linear",
                            "${signal_srcCopy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            2687,
                            186,
                            "linear",
                            "${signal_srcCopy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1000,
                            187,
                            "linear",
                            "${signal_srcCopy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            2313,
                            187,
                            "linear",
                            "${signal_srcCopy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid123",
                            "left",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "left",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid124",
                            "scaleY",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid94",
                            "left",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid126",
                            "opacity",
                            1125,
                            187,
                            "linear",
                            "${signal_srcCopy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            2436,
                            187,
                            "linear",
                            "${signal_srcCopy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "left",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid85",
                            "scaleX",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            375,
                            187,
                            "linear",
                            "${signal_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            1686,
                            187,
                            "linear",
                            "${signal_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid81",
                            "opacity",
                            749,
                            187,
                            "linear",
                            "${signal_srcCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            2060,
                            187,
                            "linear",
                            "${signal_srcCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "left",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid69",
                            "left",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid61",
                            "opacity",
                            126,
                            187,
                            "linear",
                            "${signal_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            1437,
                            187,
                            "linear",
                            "${signal_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "WHEEL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '679', '922', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel_normal',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel_normal.png']
                        },
                        {
                            rect: ['0px', '0px', '679', '922', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel_rot_back',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel_rot_back.png']
                        },
                        {
                            rect: ['0px', '0px', '679', '922', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel_rot2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel_rot2.png']
                        },
                        {
                            rect: ['0px', '0px', '679', '922', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel_rot1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel_rot1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '679px', '922px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "st": 250
                    },
                    data: [
                        [
                            "eid21",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel_rot1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            83,
                            0,
                            "linear",
                            "${wheel_rot1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid24",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel_normal}",
                            '0',
                            '0'
                        ],
                        [
                            "eid36",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${wheel_normal}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel_rot2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            83,
                            0,
                            "linear",
                            "${wheel_rot2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${wheel_rot2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel_rot_back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${wheel_rot_back}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "ROTATOR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '378', '433', 'auto', 'auto'],
                            tag: 'img',
                            id: 'rotator1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rotator1.png']
                        },
                        {
                            rect: ['0px', '0px', '378', '433', 'auto', 'auto'],
                            tag: 'img',
                            id: 'rotator_rot2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rotator_rot2.png']
                        },
                        {
                            rect: ['0px', '0px', '369', '432', 'auto', 'auto'],
                            tag: 'img',
                            id: 'rotator_rot1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rotator_rot1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '378px', '433px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "st": 250
                    },
                    data: [
                        [
                            "eid27",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rotator_rot1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            83,
                            0,
                            "linear",
                            "${rotator_rot1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rotator_rot2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            83,
                            0,
                            "linear",
                            "${rotator_rot2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${rotator_rot2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rotator1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${rotator1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("warning3_edgeActions.js");
})("EDGE-13365574");
