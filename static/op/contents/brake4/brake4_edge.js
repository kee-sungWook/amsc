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
                            id: 'backPic',
                            type: 'image',
                            tag: 'img',
                            rect: ['960', '371', '691', '726', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"backPic.png"]
                        },
                        {
                            id: 'piston_r',
                            type: 'image',
                            tag: 'img',
                            rect: ['1324px', '475px', '137', '113', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piston_r.png"]
                        },
                        {
                            id: 'piston_l_body',
                            type: 'image',
                            tag: 'img',
                            rect: ['1211px', '549px', '107', '97', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piston_l_body.png"]
                        },
                        {
                            id: 'cylinder_body',
                            type: 'image',
                            tag: 'img',
                            rect: ['1226', '474', '186', '168', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cylinder_body.png"]
                        },
                        {
                            id: 'piston_l_head',
                            type: 'image',
                            tag: 'img',
                            rect: ['1177px', '574px', '83', '88', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piston_l_head.png"]
                        },
                        {
                            id: 'pad2',
                            type: 'image',
                            tag: 'img',
                            rect: ['1410px', '457px', '233', '469', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pad2.png"]
                        },
                        {
                            id: 'spring',
                            type: 'image',
                            tag: 'img',
                            rect: ['1150px', '628px', '400px', '23', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"spring.png"],
                            transform: [[],['-26']]
                        },
                        {
                            id: 'ROTATOR',
                            symbolName: 'ROTATOR',
                            type: 'rect',
                            rect: ['1206', '600', '373', '391', 'auto', 'auto']
                        },
                        {
                            id: 'pad1',
                            type: 'image',
                            tag: 'img',
                            rect: ['1003px', '579px', '257', '491', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pad1.png"]
                        },
                        {
                            id: 'tire1',
                            type: 'image',
                            tag: 'img',
                            rect: ['743px', '100px', '1077', '1240', 'auto', 'auto'],
                            opacity: '0.4000000059604645',
                            fill: ["rgba(0,0,0,0)",im+"tire1.png"],
                            transform: [[],['14']]
                        },
                        {
                            id: 'WHEEL',
                            symbolName: 'WHEEL',
                            type: 'rect',
                            rect: ['1045px', '349px', '679', '922', 'auto', 'auto'],
                            opacity: '0.8',
                            transform: [[],['14']]
                        },
                        {
                            id: 'PATTERN',
                            symbolName: 'PATTERN',
                            type: 'rect',
                            rect: ['743px', '71px', '824', '1269', 'auto', 'auto'],
                            opacity: '0.4',
                            transform: [[],['14']]
                        },
                        {
                            id: 'tire_outLine',
                            type: 'image',
                            tag: 'img',
                            rect: ['744px', '101px', '1077px', '1240px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tire_outLine.png"],
                            transform: [[],['14']]
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
                            "eid67",
                            "top",
                            933,
                            467,
                            "linear",
                            "${piston_r}",
                            '475px',
                            '486px'
                        ],
                        [
                            "eid102",
                            "top",
                            2133,
                            467,
                            "linear",
                            "${piston_r}",
                            '486px',
                            '475px'
                        ],
                        [
                            "eid130",
                            "top",
                            3333,
                            467,
                            "linear",
                            "${piston_r}",
                            '475px',
                            '486px'
                        ],
                        [
                            "eid144",
                            "top",
                            4533,
                            467,
                            "linear",
                            "${piston_r}",
                            '486px',
                            '475px'
                        ],
                        [
                            "eid71",
                            "left",
                            933,
                            467,
                            "linear",
                            "${spring}",
                            '1150px',
                            '1162px'
                        ],
                        [
                            "eid94",
                            "left",
                            2133,
                            467,
                            "linear",
                            "${spring}",
                            '1162px',
                            '1150px'
                        ],
                        [
                            "eid122",
                            "left",
                            3333,
                            467,
                            "linear",
                            "${spring}",
                            '1150px',
                            '1162px'
                        ],
                        [
                            "eid136",
                            "left",
                            4533,
                            467,
                            "linear",
                            "${spring}",
                            '1162px',
                            '1150px'
                        ],
                        [
                            "eid63",
                            "left",
                            933,
                            467,
                            "linear",
                            "${piston_r}",
                            '1324px',
                            '1291px'
                        ],
                        [
                            "eid103",
                            "left",
                            2133,
                            467,
                            "linear",
                            "${piston_r}",
                            '1291px',
                            '1324px'
                        ],
                        [
                            "eid131",
                            "left",
                            3333,
                            467,
                            "linear",
                            "${piston_r}",
                            '1324px',
                            '1291px'
                        ],
                        [
                            "eid145",
                            "left",
                            4533,
                            467,
                            "linear",
                            "${piston_r}",
                            '1291px',
                            '1324px'
                        ],
                        [
                            "eid65",
                            "top",
                            933,
                            467,
                            "linear",
                            "${pad2}",
                            '457px',
                            '468px'
                        ],
                        [
                            "eid97",
                            "top",
                            2133,
                            467,
                            "linear",
                            "${pad2}",
                            '468px',
                            '457px'
                        ],
                        [
                            "eid125",
                            "top",
                            3333,
                            467,
                            "linear",
                            "${pad2}",
                            '457px',
                            '468px'
                        ],
                        [
                            "eid139",
                            "top",
                            4533,
                            467,
                            "linear",
                            "${pad2}",
                            '468px',
                            '457px'
                        ],
                        [
                            "eid61",
                            "left",
                            933,
                            467,
                            "linear",
                            "${pad2}",
                            '1410px',
                            '1377px'
                        ],
                        [
                            "eid96",
                            "left",
                            2133,
                            467,
                            "linear",
                            "${pad2}",
                            '1377px',
                            '1410px'
                        ],
                        [
                            "eid124",
                            "left",
                            3333,
                            467,
                            "linear",
                            "${pad2}",
                            '1410px',
                            '1377px'
                        ],
                        [
                            "eid138",
                            "left",
                            4533,
                            467,
                            "linear",
                            "${pad2}",
                            '1377px',
                            '1410px'
                        ],
                        [
                            "eid53",
                            "top",
                            933,
                            467,
                            "linear",
                            "${piston_l_body}",
                            '549px',
                            '529px'
                        ],
                        [
                            "eid100",
                            "top",
                            2133,
                            467,
                            "linear",
                            "${piston_l_body}",
                            '529px',
                            '549px'
                        ],
                        [
                            "eid128",
                            "top",
                            3333,
                            467,
                            "linear",
                            "${piston_l_body}",
                            '549px',
                            '529px'
                        ],
                        [
                            "eid142",
                            "top",
                            4533,
                            467,
                            "linear",
                            "${piston_l_body}",
                            '529px',
                            '549px'
                        ],
                        [
                            "eid47",
                            "left",
                            933,
                            467,
                            "linear",
                            "${piston_l_head}",
                            '1177px',
                            '1216px'
                        ],
                        [
                            "eid99",
                            "left",
                            2133,
                            467,
                            "linear",
                            "${piston_l_head}",
                            '1216px',
                            '1177px'
                        ],
                        [
                            "eid127",
                            "left",
                            3333,
                            467,
                            "linear",
                            "${piston_l_head}",
                            '1177px',
                            '1216px'
                        ],
                        [
                            "eid141",
                            "left",
                            4533,
                            467,
                            "linear",
                            "${piston_l_head}",
                            '1216px',
                            '1177px'
                        ],
                        [
                            "eid49",
                            "top",
                            933,
                            467,
                            "linear",
                            "${piston_l_head}",
                            '574px',
                            '554px'
                        ],
                        [
                            "eid98",
                            "top",
                            2133,
                            467,
                            "linear",
                            "${piston_l_head}",
                            '554px',
                            '574px'
                        ],
                        [
                            "eid126",
                            "top",
                            3333,
                            467,
                            "linear",
                            "${piston_l_head}",
                            '574px',
                            '554px'
                        ],
                        [
                            "eid140",
                            "top",
                            4533,
                            467,
                            "linear",
                            "${piston_l_head}",
                            '554px',
                            '574px'
                        ],
                        [
                            "eid73",
                            "width",
                            933,
                            467,
                            "linear",
                            "${spring}",
                            '400px',
                            '354px'
                        ],
                        [
                            "eid95",
                            "width",
                            2133,
                            467,
                            "linear",
                            "${spring}",
                            '354px',
                            '400px'
                        ],
                        [
                            "eid121",
                            "width",
                            3333,
                            467,
                            "linear",
                            "${spring}",
                            '400px',
                            '354px'
                        ],
                        [
                            "eid135",
                            "width",
                            4533,
                            467,
                            "linear",
                            "${spring}",
                            '354px',
                            '400px'
                        ],
                        [
                            "eid75",
                            "rotateZ",
                            933,
                            467,
                            "linear",
                            "${spring}",
                            '-26deg',
                            '-27deg'
                        ],
                        [
                            "eid93",
                            "rotateZ",
                            2133,
                            467,
                            "linear",
                            "${spring}",
                            '-27deg',
                            '-26deg'
                        ],
                        [
                            "eid123",
                            "rotateZ",
                            3333,
                            467,
                            "linear",
                            "${spring}",
                            '-26deg',
                            '-27deg'
                        ],
                        [
                            "eid137",
                            "rotateZ",
                            4533,
                            467,
                            "linear",
                            "${spring}",
                            '-27deg',
                            '-26deg'
                        ],
                        [
                            "eid57",
                            "top",
                            933,
                            467,
                            "linear",
                            "${pad1}",
                            '579px',
                            '559px'
                        ],
                        [
                            "eid91",
                            "top",
                            2133,
                            467,
                            "linear",
                            "${pad1}",
                            '559px',
                            '579px'
                        ],
                        [
                            "eid119",
                            "top",
                            3333,
                            467,
                            "linear",
                            "${pad1}",
                            '579px',
                            '559px'
                        ],
                        [
                            "eid133",
                            "top",
                            4533,
                            467,
                            "linear",
                            "${pad1}",
                            '559px',
                            '579px'
                        ],
                        [
                            "eid55",
                            "left",
                            933,
                            467,
                            "linear",
                            "${pad1}",
                            '1003px',
                            '1042px'
                        ],
                        [
                            "eid90",
                            "left",
                            2133,
                            467,
                            "linear",
                            "${pad1}",
                            '1042px',
                            '1003px'
                        ],
                        [
                            "eid118",
                            "left",
                            3333,
                            467,
                            "linear",
                            "${pad1}",
                            '1003px',
                            '1042px'
                        ],
                        [
                            "eid132",
                            "left",
                            4533,
                            467,
                            "linear",
                            "${pad1}",
                            '1042px',
                            '1003px'
                        ],
                        [
                            "eid69",
                            "top",
                            933,
                            467,
                            "linear",
                            "${spring}",
                            '628px',
                            '633px'
                        ],
                        [
                            "eid92",
                            "top",
                            2133,
                            467,
                            "linear",
                            "${spring}",
                            '633px',
                            '628px'
                        ],
                        [
                            "eid120",
                            "top",
                            3333,
                            467,
                            "linear",
                            "${spring}",
                            '628px',
                            '633px'
                        ],
                        [
                            "eid134",
                            "top",
                            4533,
                            467,
                            "linear",
                            "${spring}",
                            '633px',
                            '628px'
                        ],
                        [
                            "eid51",
                            "left",
                            933,
                            467,
                            "linear",
                            "${piston_l_body}",
                            '1211px',
                            '1250px'
                        ],
                        [
                            "eid101",
                            "left",
                            2133,
                            467,
                            "linear",
                            "${piston_l_body}",
                            '1250px',
                            '1211px'
                        ],
                        [
                            "eid129",
                            "left",
                            3333,
                            467,
                            "linear",
                            "${piston_l_body}",
                            '1211px',
                            '1250px'
                        ],
                        [
                            "eid143",
                            "left",
                            4533,
                            467,
                            "linear",
                            "${piston_l_body}",
                            '1250px',
                            '1211px'
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
                            rect: ['0px', '0px', '363', '381', 'auto', 'auto'],
                            tag: 'img',
                            id: 'rotator',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rotator.png']
                        },
                        {
                            rect: ['0px', '0px', '363', '381', 'auto', 'auto'],
                            tag: 'img',
                            id: 'rotator_rot1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rotator_rot1.png']
                        },
                        {
                            rect: ['0px', '1px', '373', '390', 'auto', 'auto'],
                            tag: 'img',
                            id: 'rotator_rot2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rotator_rot2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '373px', '391px']
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
                            "eid39",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rotator_rot1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            83,
                            0,
                            "linear",
                            "${rotator_rot1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${rotator_rot1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rotator_rot2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            83,
                            0,
                            "linear",
                            "${rotator_rot2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid45",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${rotator_rot2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid40",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rotator}",
                            '0',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${rotator}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake4_edgeActions.js");
})("EDGE-24385882");
