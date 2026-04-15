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
            js+"jquery-1.7.1.min.js",
            js+"jquery.easing.1.3.js"
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
                            id: 'backPic',
                            type: 'image',
                            tag: 'img',
                            rect: ['602px', '7px', '1081', '1205', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"backPic.png"]
                        },
                        {
                            id: 'pad_inner',
                            type: 'image',
                            tag: 'img',
                            rect: ['1059px', '706px', '159', '353', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"pad_inner.png"]
                        },
                        {
                            id: 'disk',
                            type: 'image',
                            tag: 'img',
                            rect: ['1094px', '481px', '557', '675', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"disk.png"]
                        },
                        {
                            id: 'ROTATOR',
                            symbolName: 'ROTATOR',
                            type: 'rect',
                            rect: ['1235', '629', '378', '433', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'pad_outter',
                            type: 'image',
                            tag: 'img',
                            rect: ['1146px', '759px', '163', '352', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"pad_outter.png"]
                        },
                        {
                            id: 'calliper1',
                            type: 'image',
                            tag: 'img',
                            rect: ['945px', '246px', '407', '935', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"calliper1.png"]
                        },
                        {
                            id: 'tire1',
                            type: 'image',
                            tag: 'img',
                            rect: ['807px', '193px', '1077', '1240', 'auto', 'auto'],
                            opacity: '0.4000000059604645',
                            fill: ["rgba(0,0,0,0)",im+"tire1.png"]
                        },
                        {
                            id: 'WHEEL',
                            symbolName: 'WHEEL',
                            type: 'rect',
                            rect: ['1128', '415', '679', '922', 'auto', 'auto'],
                            opacity: '0.8'
                        },
                        {
                            id: 'tire_outLine',
                            type: 'image',
                            tag: 'img',
                            rect: ['808px', '194px', '1077', '1240', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tire_outLine.png"]
                        },
                        {
                            id: 'PATTERN',
                            symbolName: 'PATTERN',
                            type: 'rect',
                            rect: ['810', '196', '824', '1269', 'auto', 'auto'],
                            opacity: '0.4'
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
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${backPic}",
                            '1',
                            '1'
                        ],
                        [
                            "eid85",
                            "left",
                            833,
                            417,
                            "easeOutQuad",
                            "${pad_inner}",
                            '1059px',
                            '1035px'
                        ],
                        [
                            "eid69",
                            "left",
                            2083,
                            417,
                            "easeOutQuad",
                            "${pad_inner}",
                            '1035px',
                            '1059px'
                        ],
                        [
                            "eid77",
                            "left",
                            3333,
                            417,
                            "easeOutQuad",
                            "${pad_inner}",
                            '1059px',
                            '1035px'
                        ],
                        [
                            "eid81",
                            "left",
                            4583,
                            417,
                            "easeOutQuad",
                            "${pad_inner}",
                            '1035px',
                            '1059px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${PATTERN}",
                            '0.4',
                            '0.4'
                        ],
                        [
                            "eid11",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pad_inner}",
                            '1',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${calliper1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pad_outter}",
                            '1',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tire1}",
                            '0.4000000059604645',
                            '0.4000000059604645'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${WHEEL}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tire_outLine}",
                            '1',
                            '1'
                        ],
                        [
                            "eid86",
                            "top",
                            833,
                            417,
                            "easeOutQuad",
                            "${pad_inner}",
                            '706px',
                            '715px'
                        ],
                        [
                            "eid70",
                            "top",
                            2083,
                            417,
                            "easeOutQuad",
                            "${pad_inner}",
                            '715px',
                            '706px'
                        ],
                        [
                            "eid78",
                            "top",
                            3333,
                            417,
                            "easeOutQuad",
                            "${pad_inner}",
                            '706px',
                            '715px'
                        ],
                        [
                            "eid82",
                            "top",
                            4583,
                            417,
                            "easeOutQuad",
                            "${pad_inner}",
                            '715px',
                            '706px'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${disk}",
                            '1',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ROTATOR}",
                            '1',
                            '1'
                        ],
                        [
                            "eid83",
                            "left",
                            833,
                            417,
                            "easeOutQuad",
                            "${pad_outter}",
                            '1146px',
                            '1175px'
                        ],
                        [
                            "eid64",
                            "left",
                            2083,
                            417,
                            "easeOutQuad",
                            "${pad_outter}",
                            '1175px',
                            '1146px'
                        ],
                        [
                            "eid75",
                            "left",
                            3333,
                            417,
                            "easeOutQuad",
                            "${pad_outter}",
                            '1146px',
                            '1175px'
                        ],
                        [
                            "eid79",
                            "left",
                            4583,
                            417,
                            "easeOutQuad",
                            "${pad_outter}",
                            '1175px',
                            '1146px'
                        ],
                        [
                            "eid84",
                            "top",
                            833,
                            417,
                            "easeOutQuad",
                            "${pad_outter}",
                            '759px',
                            '757px'
                        ],
                        [
                            "eid68",
                            "top",
                            2083,
                            417,
                            "easeOutQuad",
                            "${pad_outter}",
                            '757px',
                            '759px'
                        ],
                        [
                            "eid76",
                            "top",
                            3333,
                            417,
                            "easeOutQuad",
                            "${pad_outter}",
                            '759px',
                            '757px'
                        ],
                        [
                            "eid80",
                            "top",
                            4583,
                            417,
                            "easeOutQuad",
                            "${pad_outter}",
                            '757px',
                            '759px'
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
                            fill: ['rgba(0,0,0,0)', 'images/wheel_normal.png'],
                            id: 'wheel_normal',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '679', '922', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel_rot_back.png'],
                            id: 'wheel_rot_back',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '679', '922', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel_rot2.png'],
                            id: 'wheel_rot2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '679', '922', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel_rot1.png'],
                            id: 'wheel_rot1',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
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
                            fill: ['rgba(0,0,0,0)', 'images/rotator1.png'],
                            id: 'rotator1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '378', '433', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rotator_rot2.png'],
                            id: 'rotator_rot2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '369', '432', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rotator_rot1.png'],
                            id: 'rotator_rot1',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
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
            },
            "PATTERN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['6px', '1px', '778', '1165', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pattern_normal.png'],
                            id: 'pattern_normal',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['1px', '0px', '814', '1180', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pattern_rot2.png'],
                            id: 'pattern_rot2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '824', '1269', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pattern_rot1.png'],
                            id: 'pattern_rot1',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '824px', '1269px']
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
                            "eid18",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pattern_normal}",
                            '0',
                            '0'
                        ],
                        [
                            "eid33",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${pattern_normal}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pattern_rot2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20",
                            "opacity",
                            83,
                            0,
                            "linear",
                            "${pattern_rot2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${pattern_rot2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pattern_rot1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            83,
                            0,
                            "linear",
                            "${pattern_rot1}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake3_edgeActions.js");
})("EDGE-1417590484088");
