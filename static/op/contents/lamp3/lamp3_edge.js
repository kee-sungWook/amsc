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
                            id: 'ROAD_LINE_CLIP',
                            symbolName: 'ROAD_LINE_CLIP',
                            display: 'block',
                            type: 'rect',
                            rect: ['-295', '436', '2855', '568', 'auto', 'auto']
                        },
                        {
                            id: 'road',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '77px', '2560', '1363', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.png"]
                        },
                        {
                            id: 'road2',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '0', '2560', '1384', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road2.png"]
                        },
                        {
                            id: 'CAR_CLIP2',
                            symbolName: 'CAR_CLIP',
                            type: 'rect',
                            rect: ['0px', '25px', '2560px', '1440px', 'auto', 'auto'],
                            autoOrient: true
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40', '40', '200', '200', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        },
                        {
                            id: 'Text',
                            display: 'block',
                            type: 'text',
                            rect: ['970px', '140px', '712px', '147px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​고속주행시</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [100, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
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
                    duration: 10500,
                    autoPlay: true,
                    data: [
                        [
                            "eid183",
                            "location",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP2}",
                            [[2252.8, 701.8, 0, 0, 0, 0,0],[2252.8, 701.8, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid182",
                            "location",
                            3500,
                            3000,
                            "linear",
                            "${CAR_CLIP2}",
                            [[2934.8, 299.8, 0, 0, 0, 0,0],[1694.69, 301.27, -4427.9, 179.47, -142.68, 5.78,1240.11],[122.8, 1745.8, 0, 0, 0, 0,3586.2]]
                        ],
                        [
                            "eid415",
                            "location",
                            7000,
                            3000,
                            "linear",
                            "${CAR_CLIP2}",
                            [[2944.8, 737.8, 0, 0, 0, 0,0],[1564.81, 755.63, -2869.46, 10.95, -5.41, 0.02,1380.11],[454.8, -514.2, 0, 0, 0, 0,3226.17]]
                        ],
                        [
                            "eid172",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP2}",
                            [88,47],
                            [88,47],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid568",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP2}",
                            [88,47],
                            [88,47],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid569",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP2}",
                            [88,47],
                            [88,47],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid570",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP2}",
                            [88,47],
                            [88,47],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid571",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP2}",
                            [88,47],
                            [88,47],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid572",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR_CLIP2}",
                            [88,47],
                            [88,47],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${road}",
                            'none',
                            'none'
                        ],
                        [
                            "eid174",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${road}",
                            'none',
                            'block'
                        ],
                        [
                            "eid412",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${road}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${road2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid413",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${road2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${ROAD_LINE_CLIP}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                            [ "eid236", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP2}', [0] ] ],
                            [ "eid63", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ROAD_LINE_CLIP}', [0] ] ],
                            [ "eid64", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ROAD_LINE_CLIP}', ['high'] ] ],
                            [ "eid140", "trigger", 1500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP2}', ['HIGH'] ] ],
                            [ "eid141", "trigger", 2333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP2}', [] ] ],
                            [ "eid189", "trigger", 3500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP2}', [0] ] ],
                            [ "eid190", "trigger", 3833.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP2}', ['LEFT'] ] ],
                            [ "eid421", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP2}', [0] ] ],
                            [ "eid422", "trigger", 7708.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP2}', ['RIGHT'] ] ]
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
                            type: 'image',
                            id: 'road_line',
                            tag: 'img',
                            rect: ['0px', '0px', '2855', '568', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2855px', '568px']
                        }
                    }
                },
                timeline: {
                    duration: 625,
                    autoPlay: true,
                    labels: {
                        "high": 500
                    },
                    data: [
                        [
                            "eid3",
                            "left",
                            0,
                            250,
                            "linear",
                            "${road_line}",
                            '0px',
                            '294px'
                        ],
                        [
                            "eid4",
                            "left",
                            500,
                            125,
                            "linear",
                            "${road_line}",
                            '0px',
                            '294px'
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
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'car1',
                            tag: 'img',
                            rect: ['1922px', '539px', '591', '266', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1.png']
                        },
                        {
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            id: 'light1',
                            type: 'image',
                            rect: ['730px', '569px', '1229px', '401px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/light1.png']
                        },
                        {
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            id: 'light2',
                            type: 'image',
                            rect: ['730px', '378px', '1229px', '401px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/light2.png']
                        },
                        {
                            type: 'image',
                            id: 'lamp_blinker',
                            tag: 'img',
                            rect: ['1878px', '525px', '131', '295', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lamp_blinker.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2560px', '1440px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: false,
                    labels: {
                        "HIGH": 500,
                        "LEFT": 1500,
                        "RIGHT": 2750
                    },
                    data: [
                        [
                            "eid6",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${light1}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid573",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${light1}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid574",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${light1}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid575",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${light1}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid576",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${light1}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid577",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${light1}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid118",
                            "rotateZ",
                            1500,
                            750,
                            "linear",
                            "${light2}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid124",
                            "rotateZ",
                            2750,
                            750,
                            "linear",
                            "${light2}",
                            '0deg',
                            '45deg'
                        ],
                        [
                            "eid106",
                            "width",
                            500,
                            708,
                            "linear",
                            "${light1}",
                            '1229px',
                            '1765px'
                        ],
                        [
                            "eid116",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${light1}",
                            '1765px',
                            '1229px'
                        ],
                        [
                            "eid107",
                            "height",
                            500,
                            708,
                            "linear",
                            "${light1}",
                            '401px',
                            '525px'
                        ],
                        [
                            "eid114",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${light1}",
                            '525px',
                            '401px'
                        ],
                        [
                            "eid5",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid578",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid579",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid580",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid581",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid582",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid108",
                            "top",
                            500,
                            708,
                            "linear",
                            "${light1}",
                            '569px',
                            '509px'
                        ],
                        [
                            "eid113",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${light1}",
                            '509px',
                            '569px'
                        ],
                        [
                            "eid117",
                            "rotateZ",
                            1500,
                            750,
                            "linear",
                            "${light1}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid123",
                            "rotateZ",
                            2750,
                            750,
                            "linear",
                            "${light1}",
                            '0deg',
                            '45deg'
                        ],
                        [
                            "eid105",
                            "left",
                            500,
                            708,
                            "linear",
                            "${light1}",
                            '730px',
                            '194px'
                        ],
                        [
                            "eid115",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${light1}",
                            '194px',
                            '730px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lamp3_edgeActions.js");
})("EDGE-3116372");
