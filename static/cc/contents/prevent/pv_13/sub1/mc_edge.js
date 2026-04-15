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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['124px', '1014px', '872px', '124px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['1404px', '1014px', '872px', '124px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['359px', '1028px', '402', '85', 'auto', 'auto'],
                            text: "정상 타이어",
                            align: "center",
                            font: ['나눔고딕', [80, ""], "rgb(0,0,0)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['1602px', '1028px', '476', '85', 'auto', 'auto'],
                            text: "마모된 타이어",
                            align: "center",
                            font: ['나눔고딕', [80, ""], "rgb(243,6,91)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'midLine',
                            type: 'image',
                            tag: 'img',
                            rect: ['1198px', '108px', '4', '1041', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"midLine.png"]
                        },
                        {
                            id: 'mamoMovie',
                            symbolName: 'mamoMovie',
                            type: 'rect',
                            rect: ['1612', '176', '456', '792', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'normalMovie',
                            symbolName: 'normalMovie',
                            type: 'rect',
                            rect: ['332px', '176px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2400px', '1230px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3875,
                    autoPlay: true,
                    data: [
                        [
                            "eid457",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${normalMovie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid455",
                            "opacity",
                            3500,
                            250,
                            "easeOutQuad",
                            "${normalMovie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid458",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${mamoMovie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid456",
                            "opacity",
                            3500,
                            250,
                            "easeOutQuad",
                            "${mamoMovie}",
                            '1',
                            '0'
                        ],
                            [ "eid166", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${mamoMovie}', [0] ] ],
                            [ "eid303", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${normalMovie}', [0] ] ],
                            [ "eid39", "trigger", 750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${mamoMovie}', [] ] ],
                            [ "eid304", "trigger", 750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${normalMovie}', [] ] ]
                    ]
                }
            },
            "mamoMovie": {
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
                            id: 'tread2',
                            tag: 'img',
                            rect: ['0px', '0px', '456', '557px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tread2.png']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '456px', '16px', 'auto', 'auto'],
                            fill: ['rgba(239,239,239,1.00)']
                        },
                        {
                            rect: ['-1px', '388px', null, null, 'auto', 'auto'],
                            id: 'carAxle3',
                            symbolName: 'carAxle',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'tire_abrasion',
                            opacity: '0.5',
                            rect: ['1px', '390px', '456px', '148px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_abrasion.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '456px', '792px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid85",
                            "height",
                            42,
                            250,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '792px',
                            '538px'
                        ],
                        [
                            "eid197",
                            "height",
                            292,
                            958,
                            "easeOutQuad",
                            "${Rectangle3Copy}",
                            '538px',
                            '16px'
                        ],
                        [
                            "eid4",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid619",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid620",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid621",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid622",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid623",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid8",
                            "top",
                            42,
                            250,
                            "easeInQuad",
                            "${carAxle3}",
                            '641px',
                            '388px'
                        ],
                        [
                            "eid81",
                            "top",
                            292,
                            958,
                            "easeOutQuad",
                            "${carAxle3}",
                            '388px',
                            '-112px'
                        ],
                        [
                            "eid6",
                            "top",
                            42,
                            250,
                            "easeInQuad",
                            "${tire_abrasion}",
                            '643px',
                            '390px'
                        ],
                        [
                            "eid80",
                            "top",
                            292,
                            958,
                            "easeOutQuad",
                            "${tire_abrasion}",
                            '390px',
                            '-110px'
                        ]
                    ]
                }
            },
            "tireMovie": {
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
                            id: 'tire_fill',
                            tag: 'img',
                            rect: ['2px', '2px', '72', '149', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_fill.png']
                        },
                        {
                            rect: ['2px', '-26px', '72px', '178px', 'auto', 'auto'],
                            id: 'tire_tread',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tire_tread.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tire_line',
                            tag: 'img',
                            rect: ['0px', '-1px', '76', '153', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tire_line.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '76px', '152px']
                        }
                    }
                },
                timeline: {
                    duration: 83,
                    autoPlay: false,
                    data: [
                        [
                            "eid2",
                            "top",
                            0,
                            83,
                            "linear",
                            "${tire_tread}",
                            '-11px',
                            '-26px'
                        ]
                    ]
                }
            },
            "carAxle": {
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
                            id: 'axle',
                            tag: 'img',
                            rect: ['35px', '38px', '391', '79', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/axle.png']
                        },
                        {
                            rect: ['0px', '0px', '76px', '152px', 'auto', 'auto'],
                            id: 'tireMovie1',
                            symbolName: 'tireMovie',
                            type: 'rect'
                        },
                        {
                            rect: ['383px', '0px', '76', '152px', 'auto', 'auto'],
                            id: 'tireMovie2',
                            symbolName: 'tireMovie',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '459px', '151px']
                        }
                    }
                },
                timeline: {
                    duration: 42,
                    autoPlay: false,
                    data: [
                        [
                            "eid301",
                            "height",
                            42,
                            0,
                            "linear",
                            "${tireMovie2}",
                            '152px',
                            '152px'
                        ],
                        [
                            "eid300",
                            "height",
                            42,
                            0,
                            "linear",
                            "${tireMovie1}",
                            '152px',
                            '152px'
                        ]
                    ]
                }
            },
            "normalMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '456px', '557px', 'auto', 'auto'],
                            id: 'tread1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tread1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '456px', '328px', 'auto', 'auto'],
                            fill: ['rgba(239,239,239,1.00)']
                        },
                        {
                            rect: ['-2px', '195px', null, null, 'auto', 'auto'],
                            id: 'carAxle3',
                            symbolName: 'carAxle',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '456px', '792px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid85",
                            "height",
                            42,
                            250,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '792px',
                            '538px'
                        ],
                        [
                            "eid197",
                            "height",
                            292,
                            458,
                            "easeOutQuad",
                            "${Rectangle3Copy}",
                            '538px',
                            '328px'
                        ],
                        [
                            "eid4",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid624",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid625",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid626",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid627",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid628",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid302",
                            "left",
                            750,
                            0,
                            "easeOutQuad",
                            "${carAxle3}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid8",
                            "top",
                            42,
                            250,
                            "easeInQuad",
                            "${carAxle3}",
                            '641px',
                            '388px'
                        ],
                        [
                            "eid81",
                            "top",
                            292,
                            458,
                            "easeOutQuad",
                            "${carAxle3}",
                            '388px',
                            '195px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-73065678");
