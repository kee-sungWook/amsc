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
            'gAudioPreloadPreference': 'false',
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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bucket_inner',
                            type: 'image',
                            tag: 'img',
                            rect: ['898', '738', '145', '87', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bucket_inner.png"]
                        },
                        {
                            id: 'bucket_liquid_pollution',
                            type: 'image',
                            tag: 'img',
                            rect: ['904', '830', '133', '53px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bucket_liquid_pollution.png"]
                        },
                        {
                            id: 'bucket',
                            type: 'image',
                            tag: 'img',
                            rect: ['891', '731', '158', '199', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bucket.png"]
                        },
                        {
                            id: 'bucket_liquid_road',
                            type: 'image',
                            tag: 'img',
                            rect: ['963', '746', '12', '8', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bucket_liquid_road.png"]
                        },
                        {
                            id: 'BUCKET_LIQUID_FLOW',
                            symbolName: 'BUCKET_LIQUID_FLOW',
                            type: 'rect',
                            rect: ['963', '746', '12', '78', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1'
                        },
                        {
                            id: 'bucket_liquid_60pct',
                            type: 'image',
                            tag: 'img',
                            rect: ['963', '747', '12', '78', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bucket_liquid_60pct.png"]
                        },
                        {
                            id: 'STEERING',
                            symbolName: 'STEERING',
                            type: 'rect',
                            rect: ['569', '180', '1021', '713', 'auto', 'auto']
                        },
                        {
                            id: 'POWER_PUMP_LINE',
                            symbolName: 'POWER_PUMP_LINE',
                            type: 'rect',
                            rect: ['581', '794', '119', '171', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'pPump',
                            type: 'image',
                            tag: 'img',
                            rect: ['558', '758', '237', '304', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pPump.png"]
                        },
                        {
                            id: 'M_LINE2_IN',
                            symbolName: 'M_LINE2_IN',
                            type: 'rect',
                            rect: ['963', '472', '192', '274', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'm_line2',
                            type: 'image',
                            tag: 'img',
                            rect: ['958', '467', '203', '284', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"m_line2.png"]
                        },
                        {
                            id: 'M_LINE1_IN',
                            symbolName: 'M_LINE1_IN',
                            type: 'rect',
                            rect: ['670', '456', '464', '359', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'm_line1',
                            type: 'image',
                            tag: 'img',
                            rect: ['665', '451', '474', '369', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"m_line1.png"]
                        },
                        {
                            id: 'PUBLIC_LINE_IN',
                            symbolName: 'PUBLIC_LINE_IN',
                            type: 'rect',
                            rect: ['485', '650', '171', '336', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'public_line',
                            type: 'image',
                            tag: 'img',
                            rect: ['479', '644', '183', '348', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"public_line.png"]
                        },
                        {
                            id: 'OILTANK',
                            symbolName: 'OILTANK',
                            type: 'rect',
                            rect: ['440', '400', '157', '291', 'auto', 'auto']
                        },
                        {
                            id: 'bottle',
                            type: 'image',
                            tag: 'img',
                            rect: ['338', '187', '105', '148', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bottle.png"]
                        },
                        {
                            id: 'bottle_color_fixer',
                            type: 'image',
                            tag: 'img',
                            rect: ['500', '335', '30', '13', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bottle_color_fixer.png"],
                            transform: [[],['137']]
                        },
                        {
                            id: 'BOTTLEOIL_FLOW',
                            symbolName: 'BOTTLEOIL_FLOW',
                            type: 'rect',
                            rect: ['510', '337', '15', '89', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1'
                        },
                        {
                            id: 'bottle_cap',
                            type: 'image',
                            tag: 'img',
                            rect: ['357', '174', '66', '52', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bottle_cap.png"]
                        },
                        {
                            id: 'rewind_btn',
                            type: 'group',
                            rect: ['1284', '362', '256', '86', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']],
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['0', '0', '250', '80', 'auto', 'auto'],
                                borderRadius: ["15px 15px", "15px 15px", "15px 15px", "15px 15px"],
                                fill: ["rgba(199,0,96,1.00)"],
                                stroke: [3,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['0', '17', '256', 'auto', 'auto', 'auto'],
                                text: "다시보기",
                                align: "center",
                                font: ['굴림', [45, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'txt',
                            type: 'text',
                            rect: ['1284', '174', '595px', '242px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​파워스티어링 오일이 오염되거나 </p><p style=\"margin:0px\">교환주기를 넘길 경우,오염물질이 </p><p style=\"margin:0px\">유로를 막아 핸들 무거움 및 소음이</p><p style=\"margin:0px\"> 발생할 수 있습니다.</p><p style=\"margin: 0px;\"></p>",
                            align: "auto",
                            font: ['굴림', [35, ""], "rgb(0,75,140)", "normal", "none", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1900', '1230', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7900,
                    autoPlay: true,
                    labels: {
                        "rewind": 767
                    },
                    data: [
                        [
                            "eid138",
                            "rotateZ",
                            767,
                            733,
                            "linear",
                            "${bottle}",
                            '0deg',
                            '137deg'
                        ],
                        [
                            "eid139",
                            "rotateZ",
                            7000,
                            267,
                            "linear",
                            "${bottle}",
                            '137deg',
                            '0deg'
                        ],
                        [
                            "eid146",
                            "top",
                            7367,
                            233,
                            "linear",
                            "${bucket_liquid_60pct}",
                            '747px',
                            '816px'
                        ],
                        [
                            "eid133",
                            "top",
                            767,
                            733,
                            "linear",
                            "${bottle}",
                            '187px',
                            '223px'
                        ],
                        [
                            "eid134",
                            "top",
                            7000,
                            267,
                            "linear",
                            "${bottle}",
                            '223px',
                            '187px'
                        ],
                        [
                            "eid121",
                            "scaleX",
                            7667,
                            233,
                            "linear",
                            "${rewind_btn}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid136",
                            "left",
                            767,
                            733,
                            "linear",
                            "${bottle}",
                            '338px',
                            '423px'
                        ],
                        [
                            "eid137",
                            "left",
                            7000,
                            267,
                            "linear",
                            "${bottle}",
                            '423px',
                            '338px'
                        ],
                        [
                            "eid122",
                            "opacity",
                            7667,
                            233,
                            "linear",
                            "${rewind_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "top",
                            400,
                            267,
                            "easeOutQuad",
                            "${bottle_cap}",
                            '174px',
                            '126px'
                        ],
                        [
                            "eid150",
                            "height",
                            7367,
                            233,
                            "linear",
                            "${bucket_liquid_60pct}",
                            '78px',
                            '8px'
                        ],
                        [
                            "eid147",
                            "opacity",
                            7067,
                            267,
                            "linear",
                            "${bucket_liquid_60pct}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid148",
                            "opacity",
                            7367,
                            233,
                            "linear",
                            "${bucket_liquid_60pct}",
                            '0.6000000238418579',
                            '0'
                        ],
                        [
                            "eid123",
                            "scaleY",
                            7667,
                            233,
                            "linear",
                            "${rewind_btn}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            2768,
                            232,
                            "linear",
                            "${bucket_liquid_road}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            7067,
                            267,
                            "linear",
                            "${bucket_liquid_road}",
                            '1',
                            '0'
                        ],
                        [
                            "eid130",
                            "opacity",
                            6700,
                            300,
                            "linear",
                            "${BOTTLEOIL_FLOW}",
                            '1',
                            '0'
                        ],
                        [
                            "eid135",
                            "opacity",
                            0,
                            367,
                            "linear",
                            "${bottle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "top",
                            2767,
                            4827,
                            "linear",
                            "${bucket_liquid_pollution}",
                            '830px',
                            '772px'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1500,
                            300,
                            "linear",
                            "${bottle_color_fixer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            6700,
                            300,
                            "linear",
                            "${bottle_color_fixer}",
                            '1',
                            '0'
                        ],
                        [
                            "eid152",
                            "height",
                            2768,
                            232,
                            "linear",
                            "${bucket_liquid_road}",
                            '8px',
                            '78px'
                        ],
                        [
                            "eid140",
                            "left",
                            400,
                            0,
                            "linear",
                            "${bottle_cap}",
                            '357px',
                            '357px'
                        ],
                        [
                            "eid141",
                            "left",
                            667,
                            0,
                            "linear",
                            "${bottle_cap}",
                            '358px',
                            '358px'
                        ],
                        [
                            "eid151",
                            "opacity",
                            7067,
                            267,
                            "linear",
                            "${BUCKET_LIQUID_FLOW}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "opacity",
                            0,
                            367,
                            "linear",
                            "${bottle_cap}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "opacity",
                            400,
                            267,
                            "easeOutQuad",
                            "${bottle_cap}",
                            '1',
                            '0'
                        ],
                            [ "eid168", "trigger", 767, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${OILTANK}', [0] ] ],
                            [ "eid165", "trigger", 767, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${BOTTLEOIL_FLOW}', [0] ] ],
                            [ "eid167", "trigger", 767, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${M_LINE2_IN}', [0] ] ],
                            [ "eid166", "trigger", 767, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${M_LINE1_IN}', [0] ] ],
                            [ "eid156", "trigger", 767, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${BUCKET_LIQUID_FLOW}', [0] ] ],
                            [ "eid163", "trigger", 767, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${STEERING}', [0] ] ],
                            [ "eid164", "trigger", 767, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${PUBLIC_LINE_IN}', [0] ] ],
                            [ "eid142", "trigger", 1500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BOTTLEOIL_FLOW}', [] ] ],
                            [ "eid144", "trigger", 1700, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OILTANK}', [] ] ],
                            [ "eid158", "trigger", 2767, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PUBLIC_LINE_IN}', [] ] ],
                            [ "eid157", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BUCKET_LIQUID_FLOW}', [] ] ],
                            [ "eid159", "trigger", 4167, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${M_LINE1_IN}', [] ] ],
                            [ "eid160", "trigger", 5533.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${STEERING}', [] ] ],
                            [ "eid162", "trigger", 6166.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${M_LINE2_IN}', [] ] ]
                    ]
                }
            },
            "POWER_PUMP_LINE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '119', '171', 'auto', 'auto'],
                            id: 'pPump_lineBack',
                            fill: ['rgba(0,0,0,0)', 'images/pPump_lineBack.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [-41, -55, '187', '232', 'auto', 'auto'],
                            id: 'pPump_line',
                            fill: ['rgba(0,0,0,0)', 'images/pPump_line.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 119, 171]
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            300,
                            "linear",
                            "${pPump_line}",
                            '-41px',
                            '-58px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            300,
                            "linear",
                            "${pPump_line}",
                            '-55px',
                            '-29px'
                        ]
                    ]
                }
            },
            "OILTANK_BACK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '120', '110', 'auto', 'auto'],
                            id: 'oilT_back',
                            fill: ['rgba(0,0,0,0)', 'images/oilT_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [1, -91, '119px', '201px', 'auto', 'auto'],
                            id: 'oilT_liquid_60pct',
                            opacity: '0.6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oilT_liquid_60pct.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 120, 110]
                        }
                    }
                },
                timeline: {
                    duration: 633,
                    autoPlay: false,
                    data: [
                        [
                            "eid17",
                            "top",
                            0,
                            633,
                            "linear",
                            "${oilT_liquid_60pct}",
                            '-91px',
                            '0px'
                        ]
                    ]
                }
            },
            "OILTANK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [18, 147, 120, 110, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'OILTANK_BACK',
                            symbolName: 'OILTANK_BACK',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, '157', '291', 'auto', 'auto'],
                            id: 'oilT',
                            fill: ['rgba(0,0,0,0)', 'images/oilT.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oilT_color_fixer.png'],
                            id: 'oilT_color_fixer',
                            opacity: '0',
                            rect: [61, 17, '35', '14', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 157, 291]
                        }
                    }
                },
                timeline: {
                    duration: 1033,
                    autoPlay: false,
                    data: [
                        [
                            "eid19",
                            "opacity",
                            0,
                            333,
                            "linear",
                            "${oilT_color_fixer}",
                            '0',
                            '1'
                        ],
                            [ "eid20", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${OILTANK_BACK}', [0] ] ],
                            [ "eid21", "trigger", 400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OILTANK_BACK}', [] ] ]
                    ]
                }
            },
            "PUBLIC_LINE_IN": {
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
                            id: 'public__line_in',
                            tag: 'img',
                            rect: [0, 0, '171', '336', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/public__line_in.png']
                        },
                        {
                            transform: [[0, 0, 0], ['-56', 0, 0], [0, 0], [1, 1, 1], ['50%', '0%']],
                            rect: [-12, 1, 17, 3, 'auto', 'auto'],
                            id: 'Rectangle1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,143,176,1.00)']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, 1, 1], ['50%', '0%']],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [22, 18, 18, 3, 'auto', 'auto'],
                            fill: ['rgba(255,143,176,1.00)']
                        },
                        {
                            transform: [[0, 0, 0], ['-28', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [22, 306, '17px', 7, 'auto', 'auto'],
                            fill: ['rgba(255,143,176,1)']
                        },
                        {
                            transform: [[0, 0, 0], ['60', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [28, 335, '17px', 2, 'auto', 'auto'],
                            fill: ['rgba(255,143,176,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 171, 336]
                        }
                    }
                },
                timeline: {
                    duration: 1333,
                    autoPlay: false,
                    data: [
                        [
                            "eid32",
                            "left",
                            933,
                            100,
                            "linear",
                            "${Rectangle3}",
                            '22px',
                            '26px'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            933,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "height",
                            1033,
                            300,
                            "linear",
                            "${Rectangle4}",
                            '2px',
                            '157px'
                        ],
                        [
                            "eid24",
                            "height",
                            267,
                            666,
                            "linear",
                            "${Rectangle2}",
                            '3px',
                            '299px'
                        ],
                        [
                            "eid35",
                            "left",
                            1033,
                            300,
                            "linear",
                            "${Rectangle4}",
                            '28px',
                            '94px'
                        ],
                        [
                            "eid34",
                            "top",
                            1033,
                            300,
                            "linear",
                            "${Rectangle4}",
                            '335px',
                            '221px'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            267,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "height",
                            0,
                            267,
                            "linear",
                            "${Rectangle1}",
                            '3px',
                            '41px'
                        ],
                        [
                            "eid30",
                            "height",
                            933,
                            100,
                            "linear",
                            "${Rectangle3}",
                            '7px',
                            '23px'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            1033,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "top",
                            933,
                            100,
                            "linear",
                            "${Rectangle3}",
                            '306px',
                            '305px'
                        ]
                    ]
                }
            },
            "M_LINE1_IN": {
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
                            id: 'm_line1_in',
                            tag: 'img',
                            rect: [0, 0, '464', '359', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/m_line1_in.png']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle_e1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [-2, 360, 18, 5, 'auto', 'auto'],
                            fill: ['rgba(255,143,176,1)']
                        },
                        {
                            transform: [[0, 0, 0], ['45', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            rect: [-9, 284, '18px', 7, 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle_e2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,143,176,1)']
                        },
                        {
                            transform: [[0, 0, 0], ['-30', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            rect: [10, 250, 8, 15, 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle_e3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,143,176,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 464, 359]
                        }
                    }
                },
                timeline: {
                    duration: 1367,
                    autoPlay: false,
                    data: [
                        [
                            "eid68",
                            "width",
                            467,
                            900,
                            "linear",
                            "${Rectangle_e3}",
                            '8px',
                            '524px'
                        ],
                        [
                            "eid72",
                            "left",
                            333,
                            134,
                            "linear",
                            "${Rectangle_e2}",
                            '-9px',
                            '-1px'
                        ],
                        [
                            "eid65",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle_e3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            467,
                            0,
                            "linear",
                            "${Rectangle_e3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "height",
                            333,
                            134,
                            "linear",
                            "${Rectangle_e2}",
                            '7px',
                            '32px'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle_e2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            333,
                            0,
                            "linear",
                            "${Rectangle_e2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "left",
                            467,
                            900,
                            "linear",
                            "${Rectangle_e3}",
                            '10px',
                            '-24px'
                        ],
                        [
                            "eid64",
                            "top",
                            467,
                            900,
                            "linear",
                            "${Rectangle_e3}",
                            '250px',
                            '123px'
                        ],
                        [
                            "eid74",
                            "height",
                            0,
                            333,
                            "linear",
                            "${Rectangle_e1}",
                            '5px',
                            '91px'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            333,
                            "linear",
                            "${Rectangle_e1}",
                            '360px',
                            '268px'
                        ],
                        [
                            "eid71",
                            "top",
                            333,
                            134,
                            "linear",
                            "${Rectangle_e2}",
                            '284px',
                            '250px'
                        ]
                    ]
                }
            },
            "M_LINE2_IN": {
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
                            id: 'm_line2_in',
                            tag: 'img',
                            rect: [0, 0, '192', '274', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/m_line2_in.png']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', 105, '15px', 2, 'auto', 'auto'],
                            id: 'Rectangle_m2_2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(255,143,176,1)']
                        },
                        {
                            transform: [[0, 0, 0], ['-30', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            rect: [194, -10, 3, 17, 'auto', 'auto'],
                            id: 'Rectangle_m2_1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,143,176,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 192, 274]
                        }
                    }
                },
                timeline: {
                    duration: 967,
                    autoPlay: false,
                    data: [
                        [
                            "eid101",
                            "width",
                            0,
                            500,
                            "linear",
                            "${Rectangle_m2_1}",
                            '3px',
                            '217px'
                        ],
                        [
                            "eid103",
                            "height",
                            500,
                            467,
                            "linear",
                            "${Rectangle_m2_2}",
                            '2px',
                            '169px'
                        ],
                        [
                            "eid104",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle_m2_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Rectangle_m2_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle_m2_1}",
                            '194px',
                            '-6px'
                        ],
                        [
                            "eid97",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle_m2_1}",
                            '-10px',
                            '44px'
                        ]
                    ]
                }
            },
            "STEERING": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [422, 273, '411', '276', 'auto', 'auto'],
                            tag: 'img',
                            id: 'steering_liquid_60pct',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/steering_liquid_60pct.png']
                        },
                        {
                            rect: [422, 273, '411', '276', 'auto', 'auto'],
                            tag: 'img',
                            id: 'steering_pollution_liquid_60pct',
                            opacity: '0.6000000238418579',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/steering_pollution_liquid_60pct.png']
                        },
                        {
                            type: 'image',
                            id: 'steering_leftArea',
                            tag: 'img',
                            rect: [2, 2, '660', '462', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/steering_leftArea.png']
                        },
                        {
                            type: 'image',
                            id: 'steering_inner',
                            tag: 'img',
                            rect: [398, 257, '444', '291', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/steering_inner.png']
                        },
                        {
                            rect: [399, 258, '440', '285', 'auto', 'auto'],
                            tag: 'img',
                            id: 'steering_pollution',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/steering_pollution.png']
                        },
                        {
                            type: 'rect',
                            id: 'POLLUTION_B1',
                            symbolName: 'POLLUTION1',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2', '1.2', 1], ['50%', '50%']],
                            rect: ['445px', '319px', 23, 10, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'POLLUTION_B2',
                            symbolName: 'POLLUTION2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2', '1.2', 1], ['50%', '50%']],
                            rect: ['511px', '357px', 14, 13, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'POLLUTION_B3',
                            symbolName: 'POLLUTION3',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2', '1.2', 1], ['50%', '50%']],
                            rect: ['544px', '379px', 15, 9, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'POLLUTION_B4',
                            symbolName: 'POLLUTION1',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2', '1.2', 1], ['50%', '50%']],
                            rect: ['574px', '420px', 23, 10, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'POLLUTION_B5',
                            symbolName: 'POLLUTION2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2', '1.2', 1], ['50%', '50%']],
                            rect: ['629px', '343px', 14, 13, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'POLLUTION_B6',
                            symbolName: 'POLLUTION1',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2', '1.2', 1], ['50%', '50%']],
                            rect: ['630px', '379px', 23, 10, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'POLLUTION_B7',
                            symbolName: 'POLLUTION1',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2', '1.2', 1], ['50%', '50%']],
                            rect: ['664px', '465px', 23, 10, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'POLLUTION_B8',
                            symbolName: 'POLLUTION2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2', '1.2', 1], ['50%', '50%']],
                            rect: ['721px', '495px', 14, 13, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'POLLUTION_B9',
                            symbolName: 'POLLUTION1',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2', '1.2', 1], ['50%', '50%']],
                            rect: ['748px', '453px', 23, 10, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'steering_topRight',
                            tag: 'img',
                            rect: [0, 0, '1021', '713', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/steering_topRight.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1021, 713]
                        }
                    }
                },
                timeline: {
                    duration: 734,
                    autoPlay: false,
                    data: [
                        [
                            "eid110",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${steering_pollution_liquid_60pct}",
                            '0.6000000238418579',
                            '0'
                        ],
                        [
                            "eid109",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${steering_liquid_60pct}",
                            '0',
                            '0.6000000238418579'
                        ]
                    ]
                }
            },
            "POLLUTION3": {
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
                            id: 'pollution_src3',
                            tag: 'img',
                            rect: [0, 0, '15', '9', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution_src3.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 15, 9]
                        }
                    }
                },
                timeline: {
                    duration: 734,
                    autoPlay: true,
                    data: [
                        [
                            "eid23",
                            "scaleY",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src3}",
                            '1',
                            '0.59'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src3}",
                            '0.59',
                            '1'
                        ],
                        [
                            "eid27",
                            "scaleX",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src3}",
                            '1',
                            '0.59'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src3}",
                            '0.59',
                            '1'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src3}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid26",
                            "left",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src3}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid21",
                            "top",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src3}",
                            '0px',
                            '4px'
                        ],
                        [
                            "eid22",
                            "top",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src3}",
                            '4px',
                            '0px'
                        ]
                    ]
                }
            },
            "POLLUTION2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.59', '0.59', 1], ['50%', '50%']],
                            tag: 'img',
                            id: 'pollution_src2',
                            type: 'image',
                            rect: [6, 4, '14', '13', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution_src2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 14, 13]
                        }
                    }
                },
                timeline: {
                    duration: 734,
                    autoPlay: true,
                    data: [
                        [
                            "eid66",
                            "scaleX",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src2}",
                            '0.59',
                            '1'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src2}",
                            '1',
                            '0.59'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src2}",
                            '0.59',
                            '1'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src2}",
                            '1',
                            '0.59'
                        ],
                        [
                            "eid65",
                            "left",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid69",
                            "left",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src2}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid63",
                            "top",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src2}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid67",
                            "top",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src2}",
                            '0px',
                            '4px'
                        ]
                    ]
                }
            },
            "POLLUTION1": {
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
                            id: 'pollution_src1',
                            tag: 'img',
                            rect: [0, 0, '23', '10', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution_src1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 23, 10]
                        }
                    }
                },
                timeline: {
                    duration: 734,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "top",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src1}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid9",
                            "top",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src1}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid3",
                            "scaleX",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src1}",
                            '1',
                            '0.7'
                        ],
                        [
                            "eid10",
                            "scaleX",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src1}",
                            '0.7',
                            '1'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src1}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid12",
                            "left",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src1}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            367,
                            "easeInQuad",
                            "${pollution_src1}",
                            '1',
                            '0.7'
                        ],
                        [
                            "eid11",
                            "scaleY",
                            367,
                            367,
                            "easeInQuad",
                            "${pollution_src1}",
                            '0.7',
                            '1'
                        ]
                    ]
                }
            },
            "BOTTLEOIL_FLOW": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '15', 6, 'auto', 'auto'],
                            tag: 'img',
                            id: 'bottleOil_road',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bottleOil_road.png']
                        },
                        {
                            type: 'image',
                            id: 'bottleOil_src',
                            tag: 'img',
                            rect: [0, -47, '15', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bottleOil_src.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 15, 89]
                        }
                    }
                },
                timeline: {
                    duration: 700,
                    autoPlay: false,
                    labels: {
                        "flow": 267
                    },
                    data: [
                        [
                            "eid149",
                            "top",
                            267,
                            433,
                            "linear",
                            "${bottleOil_src}",
                            '-47px',
                            '89px'
                        ],
                        [
                            "eid143",
                            "height",
                            0,
                            267,
                            "linear",
                            "${bottleOil_road}",
                            '6px',
                            '89px'
                        ],
                        [
                            "eid145",
                            "opacity",
                            0,
                            267,
                            "linear",
                            "${bottleOil_road}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "BUCKET_LIQUID_FLOW": {
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
                            fill: ['rgba(0,0,0,0)', 'images/bucket_liquid_pollution-1.png'],
                            id: 'bucket_liquid_pollution-1',
                            opacity: '0',
                            rect: [0, -78, '12', '78', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 12, 78]
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: false,
                    data: [
                        [
                            "eid204",
                            "top",
                            0,
                            300,
                            "linear",
                            "${bucket_liquid_pollution-1}",
                            '-78px',
                            '0px'
                        ],
                        [
                            "eid205",
                            "top",
                            300,
                            300,
                            "linear",
                            "${bucket_liquid_pollution-1}",
                            '0px',
                            '78px'
                        ],
                        [
                            "eid207",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${bucket_liquid_pollution-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid208",
                            "opacity",
                            300,
                            300,
                            "linear",
                            "${bucket_liquid_pollution-1}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-3592191");
