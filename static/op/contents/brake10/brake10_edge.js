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
                            id: 'CAR_CLIP',
                            symbolName: 'CAR_CLIP',
                            type: 'rect',
                            rect: ['242', '47', '2077', '1339', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'HAND_STICK',
                            symbolName: 'HAND_STICK',
                            type: 'rect',
                            rect: ['376', '218', '2188', '1636', 'auto', 'auto'],
                            opacity: '1'
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
                    duration: 4683.3333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "opacity",
                            1033,
                            467,
                            "linear",
                            "${HAND_STICK}",
                            '1',
                            '0'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            4433,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid60",
                            "opacity",
                            4433,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid49",
                            "opacity",
                            1266,
                            467,
                            "linear",
                            "${CAR_CLIP}",
                            '0',
                            '1'
                        ],
                            [ "eid30", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${HAND_STICK}', [0] ] ],
                            [ "eid51", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP}', [0] ] ],
                            [ "eid31", "trigger", 266.66666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${HAND_STICK}', [] ] ],
                            [ "eid52", "trigger", 2300, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP}', [] ] ]
                    ]
                }
            },
            "HAND_STICK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['666px', '943px', '1522', '332', 'auto', 'auto'],
                            id: 'handStic_back',
                            fill: ['rgba(0,0,0,0)', 'images/handStic_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['242px', '10px', '1906', '1183', 'auto', 'auto'],
                            transform: [[], ['5']],
                            id: 'handStic_stic',
                            fill: ['rgba(0,0,0,0)', 'images/handStic_stic.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['1068px', '1121px', '1117', '134', 'auto', 'auto'],
                            id: 'handStic_blinder',
                            fill: ['rgba(0,0,0,0)', 'images/handStic_blinder.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '2188px', '1636px']
                        }
                    }
                },
                timeline: {
                    duration: 766.66666666667,
                    autoPlay: false,
                    data: [
                        [
                            "eid61",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${handStic_stic}",
                            [90,98],
                            [90,98],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid137",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${handStic_stic}",
                            [90,98],
                            [90,98],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid138",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${handStic_stic}",
                            [90,98],
                            [90,98],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid139",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${handStic_stic}",
                            [90,98],
                            [90,98],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid140",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${handStic_stic}",
                            [90,98],
                            [90,98],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid141",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${handStic_stic}",
                            [90,98],
                            [90,98],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid26",
                            "rotateZ",
                            0,
                            767,
                            "easeOutQuad",
                            "${handStic_stic}",
                            '-15deg',
                            '5deg'
                        ]
                    ]
                }
            },
            "RED_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '193', '107', 'auto', 'auto'],
                            tag: 'img',
                            id: 'brakeStic_red',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brakeStic_red.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '193px', '107px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "opacity",
                            0,
                            133,
                            "easeOutQuad",
                            "${brakeStic_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            166,
                            134,
                            "easeOutQuad",
                            "${brakeStic_red}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CAR_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['954px', '215px', '954px', '358px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1398px', '357px', '53px', '13px', 'auto', 'auto'],
                            transform: [[], ['-71']],
                            id: 'FLOW2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,75,141,1.00)']
                        },
                        {
                            rect: ['1082px', '541px', '26px', '65px', 'auto', 'auto'],
                            transform: [[], ['-30']],
                            id: 'FLOW1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,75,141,1.00)']
                        },
                        {
                            rect: ['3px', '3px', '2071', '1333', 'auto', 'auto'],
                            id: 'car2',
                            fill: ['rgba(0,0,0,0)', 'images/car2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['940px', '516px', '197', '111', 'auto', 'auto'],
                            id: 'brakeStic_body',
                            fill: ['rgba(0,0,0,0)', 'images/brakeStic_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'RED_CLIP',
                            symbolName: 'RED_CLIP',
                            rect: ['942px', '518px', '193', '107', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '0px', '2077', '1339', 'auto', 'auto'],
                            id: 'car1',
                            fill: ['rgba(0,0,0,0)', 'images/car1.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '2077px', '1339px']
                        }
                    }
                },
                timeline: {
                    duration: 1100,
                    autoPlay: false,
                    data: [
                        [
                            "eid40",
                            "left",
                            0,
                            600,
                            "linear",
                            "${FLOW1}",
                            '1082px',
                            '1052px'
                        ],
                        [
                            "eid44",
                            "height",
                            500,
                            600,
                            "linear",
                            "${FLOW2}",
                            '13px',
                            '650px'
                        ],
                        [
                            "eid42",
                            "width",
                            0,
                            600,
                            "linear",
                            "${FLOW1}",
                            '26px',
                            '478px'
                        ],
                        [
                            "eid48",
                            "left",
                            500,
                            600,
                            "linear",
                            "${FLOW2}",
                            '1398px',
                            '1554px'
                        ],
                        [
                            "eid46",
                            "top",
                            500,
                            600,
                            "linear",
                            "${FLOW2}",
                            '357px',
                            '91px'
                        ],
                        [
                            "eid36",
                            "height",
                            0,
                            600,
                            "linear",
                            "${FLOW1}",
                            '65px',
                            '64px'
                        ],
                        [
                            "eid38",
                            "top",
                            0,
                            600,
                            "linear",
                            "${FLOW1}",
                            '541px',
                            '428px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake10_edgeActions.js");
})("EDGE-6737748");
