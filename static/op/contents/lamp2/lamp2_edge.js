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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['9px', '725px', '2560px', '20px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'ROAD_LINE_CLIP',
                            symbolName: 'ROAD_LINE_CLIP',
                            type: 'rect',
                            rect: ['-295px', '346px', '2855', '748', 'auto', 'auto']
                        },
                        {
                            id: 'car2',
                            type: 'image',
                            tag: 'img',
                            rect: ['2578px', '735px', '1817', '375', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car2.png"]
                        },
                        {
                            id: 'CAR2_POINT',
                            symbolName: 'CAR2_POINT',
                            type: 'rect',
                            rect: ['2577px', '795', '539', '254', 'auto', 'auto']
                        },
                        {
                            id: 'LAMP_BLINKER2',
                            symbolName: 'LAMP_BLINKER2',
                            type: 'rect',
                            rect: ['3020px', '789', '131', '266', 'auto', 'auto']
                        },
                        {
                            id: 'car1',
                            type: 'image',
                            tag: 'img',
                            rect: ['1944px', '401px', '591', '266', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car1.png"]
                        },
                        {
                            id: 'light',
                            type: 'image',
                            tag: 'img',
                            rect: ['-112px', '261px', '2111', '524px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"light.png"]
                        },
                        {
                            id: 'LAMP_BLINKER1',
                            symbolName: 'LAMP_BLINKER1',
                            type: 'rect',
                            rect: ['1900', '387', '131', '295', 'auto', 'auto']
                        },
                        {
                            id: 'SIGNAL',
                            symbolName: 'SIGNAL',
                            type: 'rect',
                            rect: ['726px', '662px', '1200px', '248', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['-14']]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['41px', '41px', '200', '200', 'auto', 'auto'],
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
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "left",
                            500,
                            3000,
                            "linear",
                            "${LAMP_BLINKER2}",
                            '-1386px',
                            '3020px'
                        ],
                        [
                            "eid147",
                            "left",
                            500,
                            3000,
                            "linear",
                            "${CAR2_POINT}",
                            '-1828px',
                            '2577px'
                        ],
                        [
                            "eid40",
                            "left",
                            500,
                            3000,
                            "linear",
                            "${car2}",
                            '-1828px',
                            '2578px'
                        ],
                        [
                            "eid145",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${SIGNAL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            1750,
                            292,
                            "linear",
                            "${SIGNAL}",
                            '1',
                            '0'
                        ],
                        [
                            "eid161",
                            "top",
                            2125,
                            0,
                            "linear",
                            "${ROAD_LINE_CLIP}",
                            '346px',
                            '346px'
                        ],
                        [
                            "eid160",
                            "left",
                            2125,
                            0,
                            "linear",
                            "${ROAD_LINE_CLIP}",
                            '-295px',
                            '-295px'
                        ],
                        [
                            "eid163",
                            "width",
                            1000,
                            500,
                            "linear",
                            "${light}",
                            '2111px',
                            '1317px'
                        ],
                        [
                            "eid171",
                            "width",
                            2873,
                            500,
                            "linear",
                            "${light}",
                            '1317px',
                            '2111px'
                        ],
                        [
                            "eid162",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${light}",
                            '-112px',
                            '682px'
                        ],
                        [
                            "eid170",
                            "left",
                            2873,
                            500,
                            "linear",
                            "${light}",
                            '682px',
                            '-112px'
                        ],
                            [ "eid166", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR2_POINT}', [] ] ]
                    ]
                }
            },
            "ROAD_LINE_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '2855', '748', 'auto', 'auto'],
                            id: 'road_line',
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2855px', '748px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "left",
                            0,
                            250,
                            "linear",
                            "${road_line}",
                            '0px',
                            '294px'
                        ]
                    ]
                }
            },
            "LAMP_BLINKER2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '129px', '266', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lamp_blinker2.png'],
                            id: 'lamp_blinker2',
                            opacity: '0.8',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '266px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "width",
                            0,
                            500,
                            "linear",
                            "${lamp_blinker2}",
                            '129px',
                            '131px'
                        ],
                        [
                            "eid37",
                            "width",
                            500,
                            500,
                            "linear",
                            "${lamp_blinker2}",
                            '131px',
                            '129px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${lamp_blinker2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${lamp_blinker2}",
                            '1',
                            '0.8'
                        ]
                    ]
                }
            },
            "LAMP_BLINKER1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '0px', '129px', '295', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lamp_blinker1.png'],
                            id: 'lamp_blinker1',
                            opacity: '0.8',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '295px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid21",
                            "left",
                            0,
                            500,
                            "linear",
                            "${lamp_blinker1}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid29",
                            "left",
                            500,
                            500,
                            "linear",
                            "${lamp_blinker1}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid20",
                            "width",
                            0,
                            500,
                            "linear",
                            "${lamp_blinker1}",
                            '129px',
                            '131px'
                        ],
                        [
                            "eid30",
                            "width",
                            500,
                            500,
                            "linear",
                            "${lamp_blinker1}",
                            '131px',
                            '129px'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${lamp_blinker1}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid3",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${lamp_blinker1}",
                            '1',
                            '0.8'
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
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_src',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy3',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy2',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy7',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy6',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy5',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy4',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy15',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy14',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy13',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            type: 'image',
                            id: 'signal_srcCopy12',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
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
                            "eid70",
                            "scaleX",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
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
                            "eid65",
                            "scaleX",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "CAR2_POINT": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '539', '254', 'auto', 'auto'],
                            tag: 'img',
                            id: 'car2_point',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/car2_point.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '539px', '254px']
                        }
                    }
                },
                timeline: {
                    duration: 1125,
                    autoPlay: false,
                    data: [
                        [
                            "eid149",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${car2_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid151",
                            "opacity",
                            125,
                            125,
                            "linear",
                            "${car2_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid152",
                            "opacity",
                            292,
                            125,
                            "linear",
                            "${car2_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            417,
                            125,
                            "linear",
                            "${car2_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid154",
                            "opacity",
                            583,
                            125,
                            "linear",
                            "${car2_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            708,
                            125,
                            "linear",
                            "${car2_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            875,
                            125,
                            "linear",
                            "${car2_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "opacity",
                            1000,
                            125,
                            "linear",
                            "${car2_point}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lamp2_edgeActions.js");
})("EDGE-23992110");
