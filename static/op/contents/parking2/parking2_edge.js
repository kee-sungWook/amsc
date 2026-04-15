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
                            id: 'back',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '677px', '2560', '763px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png"]
                        },
                        {
                            id: 'CAR_CLIP',
                            symbolName: 'CAR_CLIP',
                            display: 'block',
                            type: 'rect',
                            rect: ['973px', '132px', '320', '940', 'auto', 'auto'],
                            transform: [[],['-33']]
                        },
                        {
                            id: 'backPic',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '0', '2560', '1440px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"backPic.png"]
                        },
                        {
                            id: 'SCREEN_MONITOR',
                            symbolName: 'SCREEN_MONITOR',
                            display: 'none',
                            type: 'rect',
                            rect: ['1476px', '574px', '872', '461', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1'
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
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
                    duration: 8750,
                    autoPlay: true,
                    data: [
                        [
                            "eid144",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid145",
                            "opacity",
                            8500,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3265",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCREEN_MONITOR}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3266",
                            "display",
                            2234,
                            0,
                            "linear",
                            "${SCREEN_MONITOR}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "top",
                            0,
                            0,
                            "linear",
                            "${SCREEN_MONITOR}",
                            '574px',
                            '574px'
                        ],
                        [
                            "eid84",
                            "top",
                            5200,
                            0,
                            "linear",
                            "${SCREEN_MONITOR}",
                            '574px',
                            '102px'
                        ],
                        [
                            "eid36",
                            "top",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP}",
                            '-84px',
                            '-84px'
                        ],
                        [
                            "eid41",
                            "top",
                            500,
                            1734,
                            "linear",
                            "${CAR_CLIP}",
                            '-84px',
                            '132px'
                        ],
                        [
                            "eid89",
                            "top",
                            5200,
                            2500,
                            "linear",
                            "${CAR_CLIP}",
                            '132px',
                            '734px'
                        ],
                        [
                            "eid34",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP}",
                            '-48deg',
                            '-48deg'
                        ],
                        [
                            "eid42",
                            "rotateZ",
                            500,
                            1734,
                            "linear",
                            "${CAR_CLIP}",
                            '-48deg',
                            '-33deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            5200,
                            2500,
                            "linear",
                            "${CAR_CLIP}",
                            '-33deg',
                            '0deg'
                        ],
                        [
                            "eid81",
                            "left",
                            0,
                            0,
                            "linear",
                            "${SCREEN_MONITOR}",
                            '1476px',
                            '1476px'
                        ],
                        [
                            "eid83",
                            "left",
                            5200,
                            0,
                            "linear",
                            "${SCREEN_MONITOR}",
                            '1476px',
                            '1480px'
                        ],
                        [
                            "eid199",
                            "display",
                            2234,
                            0,
                            "linear",
                            "${CAR_CLIP}",
                            'block',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            5200,
                            0,
                            "linear",
                            "${CAR_CLIP}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP}",
                            '851px',
                            '851px'
                        ],
                        [
                            "eid40",
                            "left",
                            500,
                            1734,
                            "linear",
                            "${CAR_CLIP}",
                            '851px',
                            '973px'
                        ],
                        [
                            "eid88",
                            "left",
                            5200,
                            2500,
                            "linear",
                            "${CAR_CLIP}",
                            '973px',
                            '1120px'
                        ],
                        [
                            "eid198",
                            "display",
                            0,
                            0,
                            "linear",
                            "${backPic}",
                            'none',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            2234,
                            0,
                            "linear",
                            "${backPic}",
                            'none',
                            'block'
                        ],
                        [
                            "eid208",
                            "display",
                            5200,
                            0,
                            "linear",
                            "${backPic}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid147",
                            "opacity",
                            8500,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                            [ "eid93", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SCREEN_MONITOR}', [0] ] ],
                            [ "eid90", "trigger", 2234, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SCREEN_MONITOR}', [0] ] ],
                            [ "eid3267", "trigger", 5200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SCREEN_MONITOR}', [0] ] ]
                    ]
                }
            },
            "SCREEN_MONITOR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '872', '461', 'auto', 'auto'],
                            id: 'screen_normal',
                            fill: ['rgba(0,0,0,0)', 'images/screen_normal.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'line_fix',
                            type: 'image',
                            rect: ['233px', '62px', '406px', '434px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/line_fix.png', '0px', '0px']
                        },
                        {
                            rect: ['233px', '58px', '406px', '461px', 'auto', 'auto'],
                            id: 'line_mover',
                            transform: [[], ['34']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/line_mover.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '852px', '441px', 'auto', 'auto'],
                            id: 'out_Line',
                            stroke: [10, 'rgba(77,77,77,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(77,77,77,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '872px', '461px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid123",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${line_mover}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3268",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${line_mover}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3269",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${line_mover}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3270",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${line_mover}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3271",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${line_mover}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3272",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${line_mover}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid68",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${line_mover}",
                            '34deg',
                            '0deg'
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
                            rect: ['10', '636', '298', '304', 'auto', 'auto'],
                            id: 'SIGNAL',
                            symbolName: 'SIGNAL',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'car',
                            tag: 'img',
                            rect: ['0px', '0px', '320', '678', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '320px', '940px']
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
            "SIGNAL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['69px', '0px', '160px', '114px', 'auto', 'auto'],
                            tag: 'img',
                            id: 'signal_src',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '298px', '304px']
                        }
                    }
                },
                timeline: {
                    duration: 333,
                    autoPlay: false,
                    labels: {
                        "gogo": 66
                    },
                    data: [
                        [
                            "eid30",
                            "width",
                            66,
                            167,
                            "linear",
                            "${signal_src}",
                            '160px',
                            '298px'
                        ],
                        [
                            "eid28",
                            "left",
                            66,
                            167,
                            "linear",
                            "${signal_src}",
                            '69px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "height",
                            66,
                            167,
                            "linear",
                            "${signal_src}",
                            '114px',
                            '304px'
                        ],
                        [
                            "eid33",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${signal_src}",
                            '0',
                            '0'
                        ],
                        [
                            "eid32",
                            "opacity",
                            66,
                            167,
                            "linear",
                            "${signal_src}",
                            '0.3',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("parking2_edgeActions.js");
})("EDGE-2748086");
