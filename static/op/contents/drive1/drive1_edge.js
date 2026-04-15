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
                            id: 'SCEAN2',
                            symbolName: 'SCEAN2',
                            display: 'none',
                            type: 'rect',
                            rect: ['-3688', '0', '6248', '1440', 'auto', 'auto']
                        },
                        {
                            id: 'SCENE1',
                            symbolName: 'SCENE1',
                            display: 'block',
                            type: 'rect',
                            rect: ['-1988', '644', '4548', '796', 'auto', 'auto']
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['38px', '38px', '204', '204', 'auto', 'auto'],
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
                    duration: 9500,
                    autoPlay: true,
                    data: [
                        [
                            "eid395",
                            "display",
                            3833,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid397",
                            "display",
                            6875,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid299",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCEAN2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid394",
                            "display",
                            3833,
                            0,
                            "linear",
                            "${SCEAN2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid396",
                            "display",
                            6875,
                            0,
                            "linear",
                            "${SCEAN2}",
                            'block',
                            'none'
                        ],
                            [ "eid66", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SCENE1}', [0] ] ],
                            [ "eid398", "trigger", 3792, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SCENE1}', [] ] ],
                            [ "eid399", "trigger", 3833, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SCEAN2}', [0] ] ],
                            [ "eid400", "trigger", 6875, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SCENE1}', ['scene3'] ] ]
                    ]
                }
            },
            "AWHEEL1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['39px', '39px', '207', '207', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel1',
                            transform: [[], ['24'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel1.png']
                        },
                        {
                            type: 'image',
                            id: 'tire1',
                            tag: 'img',
                            rect: ['0px', '0px', '285', '285', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '285px', '285px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${wheel1}",
                            '0deg',
                            '359deg'
                        ]
                    ]
                }
            },
            "SCENE1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3882px', '558px', '167', '79', 'auto', 'auto'],
                            id: 'rock1',
                            fill: ['rgba(0,0,0,0)', 'images/rock1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['3884px', '560px', '163', '75', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rock1_point.png'],
                            id: 'rock1_point',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'body1_bottomer',
                            type: 'image',
                            rect: ['2759px', '297px', '1575px', '222px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/body1_bottomer.png', '0px', '0px']
                        },
                        {
                            id: 'AWHEEL1_1',
                            symbolName: 'AWHEEL1',
                            rect: ['2776px', '313px', '285', '285', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'AWHEEL1_2',
                            symbolName: 'AWHEEL1',
                            rect: ['4031px', '313px', '285', '285', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['2492px', '0px', '1980', '524', 'auto', 'auto'],
                            id: 'body1',
                            fill: ['rgba(0,0,0,0)', 'images/body1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['1988px', '596px', '2560px', '200px', 'auto', 'auto'],
                            id: 'Road_rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(102,102,102,1.00)']
                        },
                        {
                            rect: ['3526px', '122px', '742px', '556px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            stroke: [20, 'rgba(33,75,141,1.00)', 'solid'],
                            id: 'zoomRect',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '4548px', '796px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: false,
                    labels: {
                        "scene1": 0,
                        "scene3": 4000
                    },
                    data: [
                        [
                            "eid56",
                            "scaleX",
                            2000,
                            250,
                            "linear",
                            "${zoomRect}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${AWHEEL1_2}",
                            '1539px',
                            '3637px'
                        ],
                        [
                            "eid368",
                            "left",
                            4000,
                            2000,
                            "linear",
                            "${AWHEEL1_2}",
                            '4031px',
                            '6115px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2000,
                            125,
                            "linear",
                            "${rock1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            2125,
                            125,
                            "linear",
                            "${rock1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid35",
                            "opacity",
                            2291,
                            125,
                            "linear",
                            "${rock1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2416,
                            125,
                            "linear",
                            "${rock1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            2583,
                            125,
                            "linear",
                            "${rock1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            2708,
                            125,
                            "linear",
                            "${rock1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid39",
                            "opacity",
                            2875,
                            125,
                            "linear",
                            "${rock1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            3000,
                            125,
                            "linear",
                            "${rock1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            3167,
                            125,
                            "linear",
                            "${rock1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            3292,
                            125,
                            "linear",
                            "${rock1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            3459,
                            125,
                            "linear",
                            "${rock1_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            3585,
                            125,
                            "linear",
                            "${rock1_point}",
                            '1',
                            '0'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${AWHEEL1_2}",
                            '313px',
                            '313px'
                        ],
                        [
                            "eid24",
                            "top",
                            2000,
                            0,
                            "easeOutQuad",
                            "${AWHEEL1_2}",
                            '313px',
                            '313px'
                        ],
                        [
                            "eid60",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${zoomRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            4000,
                            0,
                            "linear",
                            "${zoomRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${body1_bottomer}",
                            '267px',
                            '2365px'
                        ],
                        [
                            "eid369",
                            "left",
                            4000,
                            2000,
                            "linear",
                            "${body1_bottomer}",
                            '2759px',
                            '4843px'
                        ],
                        [
                            "eid16",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${AWHEEL1_1}",
                            '284px',
                            '2382px'
                        ],
                        [
                            "eid366",
                            "left",
                            4000,
                            2000,
                            "linear",
                            "${AWHEEL1_1}",
                            '2776px',
                            '4860px'
                        ],
                        [
                            "eid20",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${body1}",
                            '0px',
                            '2098px'
                        ],
                        [
                            "eid367",
                            "left",
                            4000,
                            2000,
                            "linear",
                            "${body1}",
                            '2492px',
                            '4576px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${body1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid30",
                            "top",
                            2000,
                            0,
                            "easeOutQuad",
                            "${body1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${AWHEEL1_1}",
                            '313px',
                            '313px'
                        ],
                        [
                            "eid28",
                            "top",
                            2000,
                            0,
                            "easeOutQuad",
                            "${AWHEEL1_1}",
                            '313px',
                            '313px'
                        ],
                        [
                            "eid381",
                            "top",
                            4875,
                            125,
                            "linear",
                            "${AWHEEL1_1}",
                            '313px',
                            '283px'
                        ],
                        [
                            "eid383",
                            "top",
                            5042,
                            125,
                            "linear",
                            "${AWHEEL1_1}",
                            '283px',
                            '313px'
                        ],
                        [
                            "eid58",
                            "scaleY",
                            2000,
                            250,
                            "linear",
                            "${zoomRect}",
                            '1.2',
                            '1'
                        ],
                            [ "eid431", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${AWHEEL1_2}', [0] ] ],
                            [ "eid432", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${AWHEEL1_1}', [0] ] ],
                            [ "eid433", "trigger", 4000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${AWHEEL1_1}', [0] ] ],
                            [ "eid434", "trigger", 4000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${AWHEEL1_2}', [0] ] ]
                    ]
                }
            },
            "SUSP_BODY_POINT_BLINK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '166', '272', 'auto', 'auto'],
                            tag: 'img',
                            id: 'susp_body_point',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/susp_body_point.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '166px', '272px']
                        }
                    }
                },
                timeline: {
                    duration: 375,
                    autoPlay: false,
                    data: [
                        [
                            "eid128",
                            "opacity",
                            0,
                            188,
                            "linear",
                            "${susp_body_point}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            188,
                            187,
                            "linear",
                            "${susp_body_point}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "SIGNAL_INCAR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy3',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy4',
                            opacity: '0',
                            rect: ['0px', '0px', '489px', '495px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            stroke: [10, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '509px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 700,
                    autoPlay: false,
                    data: [
                        [
                            "eid248",
                            "scaleY",
                            200,
                            433,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid244",
                            "scaleY",
                            133,
                            433,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid233",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${Ellipse}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            0,
                            200,
                            "easeInQuad",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            200,
                            233,
                            "easeInQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid237",
                            "scaleX",
                            67,
                            433,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid252",
                            "scaleY",
                            267,
                            433,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid245",
                            "scaleX",
                            200,
                            433,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid238",
                            "opacity",
                            67,
                            200,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "opacity",
                            267,
                            233,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid246",
                            "opacity",
                            200,
                            200,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid247",
                            "opacity",
                            400,
                            233,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid241",
                            "scaleX",
                            133,
                            433,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${Ellipse}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid240",
                            "scaleY",
                            67,
                            433,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid249",
                            "scaleX",
                            267,
                            433,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid250",
                            "opacity",
                            267,
                            200,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid251",
                            "opacity",
                            467,
                            233,
                            "easeInQuad",
                            "${EllipseCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid242",
                            "opacity",
                            133,
                            200,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid243",
                            "opacity",
                            333,
                            233,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "AWHEEL2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['359'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'wheel2',
                            opacity: '0.5',
                            rect: ['0px', '0px', '612', '612', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '612px', '612px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid144",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${wheel2}",
                            '0deg',
                            '359deg'
                        ]
                    ]
                }
            },
            "SCEAN2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['4680px', '1109px', '575', '266', 'auto', 'auto'],
                            id: 'rock2',
                            fill: ['rgba(0,0,0,0)', 'images/rock2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['4206px', '270px', '231px', '87px', 'auto', 'auto'],
                            id: 'susp_sp2',
                            fill: ['rgba(0,0,0,0)', 'images/susp_sp2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['4225px', '236px', '182', '280', 'auto', 'auto'],
                            id: 'susp_body',
                            fill: ['rgba(0,0,0,0)', 'images/susp_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'SUSP_BODY_POINT_BLINK',
                            symbolName: 'SUSP_BODY_POINT_BLINK',
                            rect: ['4233px', '241px', '166', '272', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['4206px', '227px', '269', '165px', 'auto', 'auto'],
                            transform: [[], ['-5']],
                            id: 'susp_sp1',
                            fill: ['rgba(0,0,0,0)', 'images/susp_sp1.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['4238px', '453px', '249', '289', 'auto', 'auto'],
                            id: 'susp_bottom',
                            fill: ['rgba(0,0,0,0)', 'images/susp_bottom.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['4186px', '156px', '249', '143', 'auto', 'auto'],
                            id: 'susp_top',
                            fill: ['rgba(0,0,0,0)', 'images/susp_top.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['4186px', '641px', '354', '354', 'auto', 'auto'],
                            id: 'pan',
                            fill: ['rgba(0,0,0,0)', 'images/pan.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['3941px', '396px', '844', '844', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire2.png'],
                            id: 'tire2',
                            opacity: '0.2',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'AWHEEL2',
                            symbolName: 'AWHEEL2',
                            rect: ['4057px', '508px', '612', '612', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '0px', '5255', '1016', 'auto', 'auto'],
                            id: 'body2',
                            fill: ['rgba(0,0,0,0)', 'images/body2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'SIGNAL_INCAR',
                            symbolName: 'SIGNAL_INCAR',
                            rect: ['4061px', '101px', '509px', '515px', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['3688px', '1240px', '2560px', '200px', 'auto', 'auto'],
                            id: 'Road_rect2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(102,102,102,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '6248px', '1440px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid152",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${susp_sp1}",
                            '4206px',
                            '4872px'
                        ],
                        [
                            "eid196",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${susp_sp1}",
                            '4872px',
                            '5578px'
                        ],
                        [
                            "eid199",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${susp_sp2}",
                            '279px',
                            '270px'
                        ],
                        [
                            "eid229",
                            "top",
                            1500,
                            833,
                            "linear",
                            "${susp_sp2}",
                            '270px',
                            '279px'
                        ],
                        [
                            "eid153",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${susp_body}",
                            '4225px',
                            '5597px'
                        ],
                        [
                            "eid148",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${pan}",
                            '4186px',
                            '4852px'
                        ],
                        [
                            "eid183",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${pan}",
                            '4852px',
                            '5558px'
                        ],
                        [
                            "eid151",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${susp_sp2}",
                            '4206px',
                            '4877px'
                        ],
                        [
                            "eid201",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${susp_sp2}",
                            '4877px',
                            '5578px'
                        ],
                        [
                            "eid191",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid495",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid496",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid497",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${susp_sp2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid498",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid499",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid155",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${susp_top}",
                            '4186px',
                            '5558px'
                        ],
                        [
                            "eid149",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${SUSP_BODY_POINT_BLINK}",
                            '4233px',
                            '5605px'
                        ],
                        [
                            "eid174",
                            "top",
                            292,
                            1208,
                            "linear",
                            "${susp_bottom}",
                            '453px',
                            '336px'
                        ],
                        [
                            "eid212",
                            "top",
                            1500,
                            833,
                            "linear",
                            "${susp_bottom}",
                            '336px',
                            '453px'
                        ],
                        [
                            "eid193",
                            "height",
                            0,
                            1500,
                            "linear",
                            "${susp_sp2}",
                            '193px',
                            '87px'
                        ],
                        [
                            "eid232",
                            "height",
                            1500,
                            833,
                            "linear",
                            "${susp_sp2}",
                            '87px',
                            '193px'
                        ],
                        [
                            "eid147",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${body2}",
                            '0px',
                            '1372px'
                        ],
                        [
                            "eid175",
                            "top",
                            292,
                            1208,
                            "linear",
                            "${pan}",
                            '641px',
                            '524px'
                        ],
                        [
                            "eid211",
                            "top",
                            1500,
                            833,
                            "linear",
                            "${pan}",
                            '524px',
                            '641px'
                        ],
                        [
                            "eid150",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${AWHEEL2}",
                            '4057px',
                            '4723px'
                        ],
                        [
                            "eid180",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${AWHEEL2}",
                            '4723px',
                            '5429px'
                        ],
                        [
                            "eid173",
                            "top",
                            292,
                            1208,
                            "linear",
                            "${tire2}",
                            '396px',
                            '279px'
                        ],
                        [
                            "eid210",
                            "top",
                            1500,
                            833,
                            "linear",
                            "${tire2}",
                            '279px',
                            '396px'
                        ],
                        [
                            "eid172",
                            "top",
                            292,
                            1208,
                            "linear",
                            "${AWHEEL2}",
                            '512px',
                            '395px'
                        ],
                        [
                            "eid209",
                            "top",
                            1500,
                            833,
                            "linear",
                            "${AWHEEL2}",
                            '395px',
                            '508px'
                        ],
                        [
                            "eid200",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${susp_sp2}",
                            '0deg',
                            '-7deg'
                        ],
                        [
                            "eid234",
                            "rotateZ",
                            1500,
                            833,
                            "linear",
                            "${susp_sp2}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid146",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${susp_bottom}",
                            '4238px',
                            '4904px'
                        ],
                        [
                            "eid182",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${susp_bottom}",
                            '4904px',
                            '5610px'
                        ],
                        [
                            "eid202",
                            "width",
                            0,
                            1500,
                            "linear",
                            "${susp_sp2}",
                            '268px',
                            '249px'
                        ],
                        [
                            "eid230",
                            "width",
                            1500,
                            833,
                            "linear",
                            "${susp_sp2}",
                            '249px',
                            '268px'
                        ],
                        [
                            "eid195",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${susp_sp1}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid214",
                            "rotateZ",
                            1500,
                            833,
                            "linear",
                            "${susp_sp1}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid145",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${tire2}",
                            '3941px',
                            '4607px'
                        ],
                        [
                            "eid181",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${tire2}",
                            '4607px',
                            '5313px'
                        ],
                        [
                            "eid190",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid500",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid501",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid502",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${susp_sp1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid503",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid504",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${susp_sp1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid192",
                            "height",
                            0,
                            1500,
                            "linear",
                            "${susp_sp1}",
                            '299px',
                            '165px'
                        ],
                        [
                            "eid213",
                            "height",
                            1500,
                            833,
                            "linear",
                            "${susp_sp1}",
                            '165px',
                            '299px'
                        ],
                        [
                            "eid154",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${SIGNAL_INCAR}",
                            '4061px',
                            '5433px'
                        ],
                            [ "eid263", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${AWHEEL2}', [] ] ],
                            [ "eid264", "trigger", 292, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SUSP_BODY_POINT_BLINK}', [] ] ],
                            [ "eid265", "trigger", 458.33333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_INCAR}', [0] ] ],
                            [ "eid297", "trigger", 1291.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL_INCAR}', [0] ] ],
                            [ "eid298", "trigger", 2333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SUSP_BODY_POINT_BLINK}', [0] ] ],
                            [ "eid266", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${AWHEEL2}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive1_edgeActions.js");
})("EDGE-31142096");
