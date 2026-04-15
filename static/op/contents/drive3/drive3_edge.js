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
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'MY_ALL',
                            symbolName: 'MY_ALL',
                            type: 'rect',
                            rect: ['705px', '248px', '1150', '944', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.4','1.4']]
                        },
                        {
                            id: 'title_iconCopy',
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
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid229",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${MY_ALL}",
                            '0',
                            '1'
                        ],
                            [ "eid191", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${MY_ALL}', [] ] ]
                    ]
                }
            },
            "parts_info1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '202', '212', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [8, 'rgba(31,76,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'sensor',
                            rect: ['17', '26', '184px', '175px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sensor.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'loc_pos_short',
                            rect: ['-130', '-130', '138px', '138px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/loc_pos_short.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '218', '228']
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
            "parts_info2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '202', '212', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [8, 'rgba(31,76,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'loc_pos_short',
                            rect: ['-130', '-130', '138px', '138px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/loc_pos_short.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'receiver',
                            rect: ['14', '26', '189px', '176px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/receiver.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '218', '228']
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
            "parts_info3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '202', '212', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [8, 'rgba(31,76,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'loc_pos_long',
                            rect: ['209', '219', '205px', '164px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/loc_pos_long.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'mil',
                            rect: ['40', '34', '138px', '160px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mil.png', '0px', '0px']
                        },
                        {
                            rect: ['40', '34', '138px', '119px', 'auto', 'auto'],
                            id: 'mil_red',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mil_red.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '218', '228']
                        }
                    }
                },
                timeline: {
                    duration: 1267,
                    autoPlay: false,
                    data: [
                        [
                            "eid2",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${mil_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${mil_red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            433,
                            200,
                            "linear",
                            "${mil_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            633,
                            200,
                            "linear",
                            "${mil_red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid189",
                            "opacity",
                            867,
                            200,
                            "linear",
                            "${mil_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid190",
                            "opacity",
                            1067,
                            200,
                            "linear",
                            "${mil_red}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "car": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'car_body',
                            type: 'image',
                            rect: ['0px', '0px', '1074px', '562px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png', '0px', '0px']
                        },
                        {
                            rect: ['37', '97', '656', '319', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire2.png'],
                            id: 'tire2',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['449', '250', '539', '277', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire1_inner.png'],
                            id: 'tire1_inner',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['98', '127', '883', '394', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/carParts.png'],
                            id: 'carParts',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['414', '226', '362', '82', 'auto', 'auto'],
                            id: 'signal_road_back',
                            fill: ['rgba(0,0,0,0)', 'images/signal_road_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['772px', '262px', '4', '4', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'SIG_CIRCLE',
                            stroke: [0, 'rgb(187, 22, 43)', 'none'],
                            autoOrient: false,
                            fill: ['rgba(31,76,141,1.00)']
                        },
                        {
                            rect: ['772px', '262px', '4', '4', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'SIG_CIRCLECopy',
                            stroke: [0, 'rgb(187, 22, 43)', 'none'],
                            autoOrient: false,
                            fill: ['rgba(31,76,141,1.00)']
                        },
                        {
                            rect: ['772px', '262px', '4', '4', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'SIG_CIRCLECopy2',
                            stroke: [0, 'rgb(187, 22, 43)', 'none'],
                            autoOrient: false,
                            fill: ['rgba(31,76,141,1.00)']
                        },
                        {
                            rect: ['772px', '262px', '4', '4', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'SIG_CIRCLECopy3',
                            stroke: [0, 'rgb(187, 22, 43)', 'none'],
                            autoOrient: false,
                            fill: ['rgba(31,76,141,1.00)']
                        },
                        {
                            rect: ['772px', '262px', '4', '4', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'SIG_CIRCLECopy4',
                            stroke: [0, 'rgb(187, 22, 43)', 'none'],
                            autoOrient: false,
                            fill: ['rgba(31,76,141,1.00)']
                        },
                        {
                            rect: ['413', '225', '364', '84', 'auto', 'auto'],
                            id: 'signal_road_Line',
                            fill: ['rgba(0,0,0,0)', 'images/signal_road_Line.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['431', '127', '189', '246', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/seet.png'],
                            id: 'seet',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'car_glass',
                            type: 'image',
                            rect: ['268px', '59px', '364px', '205px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_glass.png', '0px', '0px']
                        },
                        {
                            rect: ['391', '213', '622', '350', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire1.png'],
                            id: 'tire1',
                            opacity: '0.3',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['408', '243', '19', '16', 'auto', 'auto'],
                            id: 'sm_mil',
                            fill: ['rgba(0,0,0,0)', 'images/sm_mil.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['408', '243', '19', '16', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sm_mil_red.png'],
                            id: 'sm_mil_red',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['765', '256', '38', '21', 'auto', 'auto'],
                            id: 'sm_receiver',
                            fill: ['rgba(0,0,0,0)', 'images/sm_receiver.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['766', '257', '36', '19', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sm_receiver_red.png'],
                            id: 'sm_receiver_red',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1074', '563']
                        }
                    }
                },
                timeline: {
                    duration: 2267,
                    autoPlay: false,
                    data: [
                        [
                            "eid155",
                            "location",
                            30,
                            767,
                            "linear",
                            "${SIG_CIRCLECopy2}",
                            [[773.5, 264, 0, 0, 0, 0,0],[686.96, 230.54, -21.4, -7.57, -83.98, -29.72,92.79],[666.07, 229.86, -11.08, 1.47, -24.29, 3.21,113.91],[426.85, 304.63, -9, 2.81, -62.88, 19.64,364.55],[417.63, 299.82, 0.26, -45.57, 0.1, -18.22,376.87],[417, 255, 0, 0, 0, 0,421.7]]
                        ],
                        [
                            "eid153",
                            "location",
                            0,
                            767,
                            "linear",
                            "${SIG_CIRCLE}",
                            [[773.5, 264, 0, 0, 0, 0,0],[686.96, 230.54, -21.4, -7.57, -83.98, -29.72,92.79],[666.07, 229.86, -11.08, 1.47, -24.29, 3.21,113.91],[426.85, 304.63, -9, 2.81, -62.88, 19.64,364.55],[417.63, 299.82, 0.26, -45.57, 0.1, -18.22,376.87],[417, 255, 0, 0, 0, 0,421.7]]
                        ],
                        [
                            "eid176",
                            "opacity",
                            833,
                            200,
                            "linear",
                            "${sm_mil_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid178",
                            "opacity",
                            1033,
                            200,
                            "linear",
                            "${sm_mil_red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid183",
                            "opacity",
                            1267,
                            196,
                            "linear",
                            "${sm_mil_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            1463,
                            203,
                            "linear",
                            "${sm_mil_red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid187",
                            "opacity",
                            1700,
                            196,
                            "linear",
                            "${sm_mil_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid188",
                            "opacity",
                            1896,
                            203,
                            "linear",
                            "${sm_mil_red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid154",
                            "location",
                            15,
                            767,
                            "linear",
                            "${SIG_CIRCLECopy}",
                            [[773.5, 264, 0, 0, 0, 0,0],[686.96, 230.54, -21.4, -7.57, -83.98, -29.72,92.79],[666.07, 229.86, -11.08, 1.47, -24.29, 3.21,113.91],[426.85, 304.63, -9, 2.81, -62.88, 19.64,364.55],[417.63, 299.82, 0.26, -45.57, 0.1, -18.22,376.87],[417, 255, 0, 0, 0, 0,421.7]]
                        ],
                        [
                            "eid159",
                            "opacity",
                            0,
                            133,
                            "linear",
                            "${sm_receiver_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            133,
                            133,
                            "linear",
                            "${sm_receiver_red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid171",
                            "opacity",
                            300,
                            133,
                            "linear",
                            "${sm_receiver_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            433,
                            133,
                            "linear",
                            "${sm_receiver_red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid185",
                            "opacity",
                            600,
                            133,
                            "linear",
                            "${sm_receiver_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "opacity",
                            733,
                            133,
                            "linear",
                            "${sm_receiver_red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "location",
                            45,
                            767,
                            "linear",
                            "${SIG_CIRCLECopy3}",
                            [[773.5, 264, 0, 0, 0, 0,0],[686.96, 230.54, -21.4, -7.57, -83.98, -29.72,92.79],[666.07, 229.86, -11.08, 1.47, -24.29, 3.21,113.91],[426.85, 304.63, -9, 2.81, -62.88, 19.64,364.55],[417.63, 299.82, 0.26, -45.57, 0.1, -18.22,376.87],[417, 255, 0, 0, 0, 0,421.7]]
                        ],
                        [
                            "eid157",
                            "location",
                            60,
                            767,
                            "linear",
                            "${SIG_CIRCLECopy4}",
                            [[773.5, 264, 0, 0, 0, 0,0],[686.96, 230.54, -21.4, -7.57, -83.98, -29.72,92.79],[666.07, 229.86, -11.08, 1.47, -24.29, 3.21,113.91],[426.85, 304.63, -9, 2.81, -62.88, 19.64,364.55],[417.63, 299.82, 0.26, -45.57, 0.1, -18.22,376.87],[417, 255, 0, 0, 0, 0,421.7]]
                        ]
                    ]
                }
            },
            "sm_sensor": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '25', '30', 'auto', 'auto'],
                            id: 'sm_sensor_src',
                            fill: ['rgba(0,0,0,0)', 'images/sm_sensor_src.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['3', '5', '18', '18', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [1, 'rgba(31,76,141,1.00)', 'solid'],
                            id: 'Ellipse',
                            opacity: '0.000000',
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['3', '5', '18', '18', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [1, 'rgba(31,76,141,1.00)', 'solid'],
                            id: 'EllipseCopy',
                            opacity: '0.000000',
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['3', '5', '18', '18', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [1, 'rgba(31,76,141,1.00)', 'solid'],
                            id: 'EllipseCopy2',
                            opacity: '0.000000',
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['3', '5', '18', '18', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [1, 'rgba(31,76,141,1.00)', 'solid'],
                            id: 'EllipseCopy3',
                            opacity: '0.000000',
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '25', '30']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid45",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${EllipseCopy3}",
                            '1',
                            '2'
                        ],
                        [
                            "eid46",
                            "scaleY",
                            750,
                            250,
                            "linear",
                            "${EllipseCopy3}",
                            '2',
                            '5'
                        ],
                        [
                            "eid39",
                            "scaleY",
                            333,
                            250,
                            "linear",
                            "${EllipseCopy2}",
                            '1',
                            '2'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            583,
                            250,
                            "linear",
                            "${EllipseCopy2}",
                            '2',
                            '5'
                        ],
                        [
                            "eid23",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '2'
                        ],
                        [
                            "eid27",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '2',
                            '5'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            167,
                            250,
                            "linear",
                            "${EllipseCopy}",
                            '1',
                            '2'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            417,
                            250,
                            "linear",
                            "${EllipseCopy}",
                            '2',
                            '5'
                        ],
                        [
                            "eid37",
                            "opacity",
                            333,
                            250,
                            "linear",
                            "${EllipseCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            583,
                            250,
                            "linear",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "scaleX",
                            500,
                            250,
                            "linear",
                            "${EllipseCopy3}",
                            '1',
                            '2'
                        ],
                        [
                            "eid42",
                            "scaleX",
                            750,
                            250,
                            "linear",
                            "${EllipseCopy3}",
                            '2',
                            '5'
                        ],
                        [
                            "eid31",
                            "opacity",
                            167,
                            250,
                            "linear",
                            "${EllipseCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            417,
                            250,
                            "linear",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${EllipseCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            333,
                            250,
                            "linear",
                            "${EllipseCopy2}",
                            '1',
                            '2'
                        ],
                        [
                            "eid36",
                            "scaleX",
                            583,
                            250,
                            "linear",
                            "${EllipseCopy2}",
                            '2',
                            '5'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '2'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '2',
                            '5'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            167,
                            250,
                            "linear",
                            "${EllipseCopy}",
                            '1',
                            '2'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            417,
                            250,
                            "linear",
                            "${EllipseCopy}",
                            '2',
                            '5'
                        ],
                        [
                            "eid19",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sm_sensorAll": {
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
                            id: 'sm_sensor4',
                            symbolName: 'sm_sensor',
                            transform: [[], [], [], ['0.9', '0.9']],
                            rect: ['831', '123', '25', '30', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sm_sensor3',
                            symbolName: 'sm_sensor',
                            transform: [[], [], [], ['0.9', '0.9']],
                            rect: ['514', '-1', '25', '30', 'auto', 'auto']
                        },
                        {
                            id: 'sm_sensor2',
                            symbolName: 'sm_sensor',
                            rect: ['0', '155', '25', '30', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'sm_sensor1',
                            symbolName: 'sm_sensor',
                            rect: ['360', '285', '25', '30', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['366', '275', '75', '11px', 'auto', 'auto'],
                            transform: [[], ['-27']],
                            id: 'signal_flow_src1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_flow_src1.png', '0px', '0px']
                        },
                        {
                            rect: ['12', '164', '91', '11px', 'auto', 'auto'],
                            transform: [[], ['-3']],
                            id: 'signal_flow_src2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_flow_src2.png', '0px', '0px']
                        },
                        {
                            rect: ['512', '19', '55', '11px', 'auto', 'auto'],
                            transform: [[], ['38']],
                            id: 'signal_flow_src3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_flow_src3.png', '0px', '0px']
                        },
                        {
                            rect: ['809', '132', '37', '11px', 'auto', 'auto'],
                            id: 'signal_flow_src4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_flow_src4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '855', '315']
                        }
                    }
                },
                timeline: {
                    duration: 1566,
                    autoPlay: false,
                    data: [
                        [
                            "eid62",
                            "left",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src3}",
                            '512px',
                            '497px'
                        ],
                        [
                            "eid91",
                            "left",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src3}",
                            '497px',
                            '640px'
                        ],
                        [
                            "eid70",
                            "width",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src1}",
                            '75px',
                            '351px'
                        ],
                        [
                            "eid89",
                            "width",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src1}",
                            '351px',
                            '59px'
                        ],
                        [
                            "eid58",
                            "width",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src2}",
                            '91px',
                            '657px'
                        ],
                        [
                            "eid85",
                            "width",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src2}",
                            '657px',
                            '82px'
                        ],
                        [
                            "eid74",
                            "width",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src4}",
                            '37px',
                            '157px'
                        ],
                        [
                            "eid86",
                            "width",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src4}",
                            '157px',
                            '43px'
                        ],
                        [
                            "eid68",
                            "left",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src1}",
                            '366px',
                            '351px'
                        ],
                        [
                            "eid88",
                            "left",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src1}",
                            '351px',
                            '626px'
                        ],
                        [
                            "eid64",
                            "width",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src3}",
                            '55px',
                            '203px'
                        ],
                        [
                            "eid92",
                            "width",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src3}",
                            '203px',
                            '43px'
                        ],
                        [
                            "eid76",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid72",
                            "left",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src4}",
                            '809px',
                            '689px'
                        ],
                        [
                            "eid80",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "left",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src2}",
                            '12px',
                            '587px'
                        ],
                        [
                            "eid60",
                            "top",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src3}",
                            '19px',
                            '65px'
                        ],
                        [
                            "eid90",
                            "top",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src3}",
                            '65px',
                            '114px'
                        ],
                        [
                            "eid66",
                            "top",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src1}",
                            '275px',
                            '212px'
                        ],
                        [
                            "eid87",
                            "top",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src1}",
                            '212px',
                            '146px'
                        ],
                        [
                            "eid82",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "top",
                            500,
                            500,
                            "easeInQuad",
                            "${signal_flow_src2}",
                            '164px',
                            '149px'
                        ],
                        [
                            "eid83",
                            "top",
                            1067,
                            499,
                            "easeOutQuad",
                            "${signal_flow_src2}",
                            '149px',
                            '134px'
                        ],
                            [ "eid97", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sm_sensor1}', [] ] ],
                            [ "eid98", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sm_sensor3}', [] ] ],
                            [ "eid99", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sm_sensor2}', [] ] ],
                            [ "eid100", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sm_sensor4}', [] ] ]
                    ]
                }
            },
            "MY_ALL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['289px', '387px', '787', '319', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/shadow.png'],
                            id: 'shadow',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'car',
                            symbolName: 'car',
                            opacity: '0',
                            rect: ['5px', '141px', '1074', '563', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sm_sensorAll',
                            symbolName: 'sm_sensorAll',
                            opacity: '0',
                            rect: ['105px', '272px', '855', '315', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'parts_info3',
                            symbolName: 'parts_info3',
                            opacity: '0',
                            rect: ['0px', '0px', '218', '228', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'parts_info2',
                            symbolName: 'parts_info2',
                            opacity: '0',
                            rect: ['932px', '550px', '218', '228', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'parts_info1',
                            symbolName: 'parts_info1',
                            opacity: '0',
                            rect: ['626px', '716px', '218', '228', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1150px', '944px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    labels: {
                        "start": 1000
                    },
                    data: [
                        [
                            "eid134",
                            "opacity",
                            433,
                            567,
                            "easeOutQuad",
                            "${parts_info1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "left",
                            433,
                            567,
                            "easeOutQuad",
                            "${parts_info1}",
                            '626px',
                            '616px'
                        ],
                        [
                            "eid130",
                            "opacity",
                            433,
                            567,
                            "easeOutQuad",
                            "${parts_info3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "left",
                            433,
                            567,
                            "easeOutQuad",
                            "${parts_info2}",
                            '932px',
                            '922px'
                        ],
                        [
                            "eid144",
                            "top",
                            433,
                            567,
                            "easeOutQuad",
                            "${parts_info1}",
                            '716px',
                            '706px'
                        ],
                        [
                            "eid152",
                            "top",
                            433,
                            567,
                            "easeOutQuad",
                            "${parts_info3}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid140",
                            "opacity",
                            67,
                            367,
                            "easeInQuad",
                            "${sm_sensorAll}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            100,
                            367,
                            "easeInQuad",
                            "${shadow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            0,
                            367,
                            "easeInQuad",
                            "${car}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "top",
                            433,
                            567,
                            "easeOutQuad",
                            "${parts_info2}",
                            '550px',
                            '540px'
                        ],
                        [
                            "eid150",
                            "left",
                            433,
                            567,
                            "easeOutQuad",
                            "${parts_info3}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid138",
                            "opacity",
                            433,
                            567,
                            "easeOutQuad",
                            "${parts_info2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive3_edgeActions.js");
})("EDGE-9868033");
