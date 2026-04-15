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
                            id: 'road',
                            type: 'image',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.png",'0px','0px']
                        },
                        {
                            id: 'CAR',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['2458px', '1496px', '462', '479', 'auto', 'auto'],
                            autoOrient: true
                        },
                        {
                            id: 'car2',
                            type: 'image',
                            tag: 'img',
                            rect: ['963', '464', '509', '308', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car2.png"]
                        },
                        {
                            id: 'RED_LINE',
                            symbolName: 'RED_LINE',
                            type: 'rect',
                            rect: ['959', '460', '517', '316', 'auto', 'auto']
                        },
                        {
                            id: 'MEMOS',
                            symbolName: 'MEMOS',
                            type: 'rect',
                            rect: ['1511', '189', '951', '550', 'auto', 'auto'],
                            opacity: '1'
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
                    duration: 3533,
                    autoPlay: true,
                    data: [
                        [
                            "eid170",
                            "rotateZ",
                            0,
                            775,
                            "linear",
                            "${CAR}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid171",
                            "rotateZ",
                            775,
                            1187,
                            "linear",
                            "${CAR}",
                            '9deg',
                            '24deg'
                        ],
                        [
                            "eid172",
                            "rotateZ",
                            1962,
                            309,
                            "linear",
                            "${CAR}",
                            '24deg',
                            '15deg'
                        ],
                        [
                            "eid173",
                            "rotateZ",
                            2270,
                            730,
                            "linear",
                            "${CAR}",
                            '15deg',
                            '14deg'
                        ],
                        [
                            "eid168",
                            "location",
                            0,
                            3000,
                            "linear",
                            "${CAR}",
                            [[2813.81, 1869.62, 0, 0, 0, 0,0],[2014.92, 1018.69, -883.25, -480.73, -1331.2, -724.54,1178.94],[1156.18, 997.16, -719.17, -142.12, -1225.93, -242.26,2053.67],[599.68, 800.41, -1374.76, -736.43, -485.16, -259.89,2646.35],[-138.26, 297.62, 0, 0, 0, 0,3541.13]]
                        ],
                        [
                            "eid192",
                            "opacity",
                            967,
                            300,
                            "linear",
                            "${MEMOS}",
                            '1',
                            '0'
                        ],
                        [
                            "eid222",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR}",
                            [77,78],
                            [77,78],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid443",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR}",
                            [77,78],
                            [77,78],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid444",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR}",
                            [77,78],
                            [77,78],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid445",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${CAR}",
                            [77,78],
                            [77,78],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid446",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR}",
                            [77,78],
                            [77,78],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid447",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${CAR}",
                            [77,78],
                            [77,78],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                            [ "eid193", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR}', ['sig'] ] ],
                            [ "eid175", "trigger", 666.66666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${RED_LINE}', [] ] ],
                            [ "eid181", "trigger", 799.99999999997, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${MEMOS}', [] ] ],
                            [ "eid194", "trigger", 1038.4615384615, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR}', [0] ] ],
                            [ "eid182", "trigger", 1266.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MEMOS}', [0] ] ],
                            [ "eid197", "trigger", 1793.9635843513, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR}', [0] ] ],
                            [ "eid183", "trigger", 1899.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${RED_LINE}', [0] ] ]
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
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_src',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy2',
                            opacity: '0',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy3',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy4',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy5',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy6',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy7',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy8',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy9',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy10',
                            opacity: '1',
                            rect: ['0px', '0px', '110', '46', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 1433.3333333333,
                    autoPlay: true,
                    labels: {
                        "go1": 700
                    },
                    data: [
                        [
                            "eid42",
                            "top",
                            200,
                            767,
                            "linear",
                            "${signal_srcCopy3}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            133,
                            767,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            67,
                            767,
                            "linear",
                            "${signal_srcCopy}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid58",
                            "top",
                            467,
                            767,
                            "linear",
                            "${signal_srcCopy7}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            67,
                            767,
                            "linear",
                            "${signal_srcCopy}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid206",
                            "opacity",
                            267,
                            0,
                            "linear",
                            "${signal_srcCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            812,
                            222,
                            "linear",
                            "${signal_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid66",
                            "top",
                            600,
                            767,
                            "linear",
                            "${signal_srcCopy9}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid46",
                            "top",
                            267,
                            767,
                            "linear",
                            "${signal_srcCopy4}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid65",
                            "top",
                            533,
                            767,
                            "linear",
                            "${signal_srcCopy8}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid209",
                            "opacity",
                            467,
                            0,
                            "linear",
                            "${signal_srcCopy7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            1012,
                            222,
                            "linear",
                            "${signal_srcCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid203",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${signal_src}",
                            '1',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            545,
                            222,
                            "linear",
                            "${signal_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid208",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${signal_srcCopy6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            945,
                            222,
                            "linear",
                            "${signal_srcCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid62",
                            "scaleX",
                            533,
                            767,
                            "linear",
                            "${signal_srcCopy8}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid73",
                            "top",
                            666,
                            767,
                            "linear",
                            "${signal_srcCopy10}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            0,
                            767,
                            "linear",
                            "${signal_src}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid44",
                            "scaleY",
                            200,
                            767,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            0,
                            767,
                            "linear",
                            "${signal_src}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid72",
                            "scaleY",
                            666,
                            767,
                            "linear",
                            "${signal_srcCopy10}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            267,
                            767,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            133,
                            767,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            533,
                            0,
                            "linear",
                            "${signal_srcCopy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1078,
                            222,
                            "linear",
                            "${signal_srcCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid50",
                            "top",
                            333,
                            767,
                            "linear",
                            "${signal_srcCopy5}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            600,
                            767,
                            "linear",
                            "${signal_srcCopy9}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid69",
                            "scaleX",
                            600,
                            767,
                            "linear",
                            "${signal_srcCopy9}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid45",
                            "scaleX",
                            200,
                            767,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            533,
                            767,
                            "linear",
                            "${signal_srcCopy8}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid53",
                            "scaleX",
                            333,
                            767,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            267,
                            767,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid26",
                            "top",
                            0,
                            767,
                            "linear",
                            "${signal_src}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid41",
                            "top",
                            133,
                            767,
                            "linear",
                            "${signal_srcCopy2}",
                            '0px',
                            '-822px'
                        ],
                        [
                            "eid205",
                            "opacity",
                            200,
                            0,
                            "linear",
                            "${signal_srcCopy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            745,
                            222,
                            "linear",
                            "${signal_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            400,
                            767,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            467,
                            767,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid211",
                            "opacity",
                            600,
                            0,
                            "linear",
                            "${signal_srcCopy9}",
                            '1',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            1145,
                            222,
                            "linear",
                            "${signal_srcCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid61",
                            "scaleX",
                            467,
                            767,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            678,
                            222,
                            "linear",
                            "${signal_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid207",
                            "opacity",
                            333,
                            0,
                            "linear",
                            "${signal_srcCopy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            878,
                            222,
                            "linear",
                            "${signal_srcCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            666,
                            767,
                            "linear",
                            "${signal_srcCopy10}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            67,
                            767,
                            "linear",
                            "${signal_srcCopy}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            400,
                            767,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            333,
                            767,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid212",
                            "opacity",
                            666,
                            0,
                            "linear",
                            "${signal_srcCopy10}",
                            '1',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            1211,
                            222,
                            "linear",
                            "${signal_srcCopy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid204",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${signal_srcCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            612,
                            222,
                            "linear",
                            "${signal_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid57",
                            "top",
                            400,
                            767,
                            "linear",
                            "${signal_srcCopy6}",
                            '0px',
                            '-822px'
                        ]
                    ]
                }
            },
            "RED_LINE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '517', '316', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car2_redLine.png'],
                            id: 'car2_redLine',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '517px', '316px']
                        }
                    }
                },
                timeline: {
                    duration: 366.66666666667,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            133,
                            "linear",
                            "${car2_redLine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            233,
                            133,
                            "linear",
                            "${car2_redLine}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "M3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '84', '161', 'auto', 'auto'],
                            id: 'alram',
                            fill: ['rgba(0,0,0,0)', 'images/alram.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            fill: ['rgba(0,0,0,0)', 'images/alram_wave.png'],
                            type: 'image',
                            id: 'alram_wave',
                            opacity: '0',
                            rect: ['179px', '8px', '42', '145', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            fill: ['rgba(0,0,0,0)', 'images/alram_wave.png'],
                            type: 'image',
                            id: 'alram_waveCopy',
                            opacity: '0',
                            rect: ['179px', '8px', '42', '145', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            fill: ['rgba(0,0,0,0)', 'images/alram_wave.png'],
                            type: 'image',
                            id: 'alram_waveCopy2',
                            opacity: '0',
                            rect: ['179px', '8px', '42', '145', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            fill: ['rgba(0,0,0,0)', 'images/alram_wave.png'],
                            type: 'image',
                            id: 'alram_waveCopy3',
                            opacity: '0',
                            rect: ['179px', '8px', '42', '145', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '201px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 667,
                    autoPlay: false,
                    labels: {
                        "gogo": 300
                    },
                    data: [
                        [
                            "eid94",
                            "opacity",
                            100,
                            262,
                            "linear",
                            "${alram_waveCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            362,
                            104,
                            "linear",
                            "${alram_waveCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid104",
                            "opacity",
                            300,
                            262,
                            "linear",
                            "${alram_waveCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            562,
                            104,
                            "linear",
                            "${alram_waveCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "scaleY",
                            0,
                            367,
                            "linear",
                            "${alram_wave}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid80",
                            "left",
                            0,
                            367,
                            "linear",
                            "${alram_wave}",
                            '84px',
                            '179px'
                        ],
                        [
                            "eid107",
                            "scaleY",
                            300,
                            367,
                            "linear",
                            "${alram_waveCopy3}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid106",
                            "left",
                            300,
                            367,
                            "linear",
                            "${alram_waveCopy3}",
                            '84px',
                            '179px'
                        ],
                        [
                            "eid82",
                            "scaleX",
                            0,
                            367,
                            "linear",
                            "${alram_wave}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            200,
                            367,
                            "linear",
                            "${alram_waveCopy2}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid103",
                            "scaleX",
                            300,
                            367,
                            "linear",
                            "${alram_waveCopy3}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid101",
                            "left",
                            200,
                            367,
                            "linear",
                            "${alram_waveCopy2}",
                            '84px',
                            '179px'
                        ],
                        [
                            "eid96",
                            "scaleY",
                            100,
                            367,
                            "linear",
                            "${alram_waveCopy}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid99",
                            "opacity",
                            200,
                            262,
                            "linear",
                            "${alram_waveCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            462,
                            104,
                            "linear",
                            "${alram_waveCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid98",
                            "scaleX",
                            200,
                            367,
                            "linear",
                            "${alram_waveCopy2}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid93",
                            "scaleX",
                            100,
                            367,
                            "linear",
                            "${alram_waveCopy}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid97",
                            "left",
                            100,
                            367,
                            "linear",
                            "${alram_waveCopy}",
                            '84px',
                            '179px'
                        ],
                        [
                            "eid86",
                            "opacity",
                            0,
                            262,
                            "linear",
                            "${alram_wave}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            262,
                            104,
                            "linear",
                            "${alram_wave}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "M2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['15px', '0px', '222', '217', 'auto', 'auto'],
                            id: 'steering',
                            fill: ['rgba(0,0,0,0)', 'images/steering.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '21px', '245', '176', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wave_src2.png'],
                            id: 'wave_src2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '245px', '217px']
                        }
                    }
                },
                timeline: {
                    duration: 467,
                    autoPlay: false,
                    data: [
                        [
                            "eid110",
                            "scaleX",
                            0,
                            200,
                            "linear",
                            "${steering}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid118",
                            "scaleX",
                            267,
                            200,
                            "linear",
                            "${steering}",
                            '0.98',
                            '1'
                        ],
                        [
                            "eid109",
                            "scaleY",
                            0,
                            200,
                            "linear",
                            "${wave_src2}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid117",
                            "scaleY",
                            267,
                            200,
                            "linear",
                            "${wave_src2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid108",
                            "scaleX",
                            0,
                            200,
                            "linear",
                            "${wave_src2}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid116",
                            "scaleX",
                            267,
                            200,
                            "linear",
                            "${wave_src2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${wave_src2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            267,
                            200,
                            "linear",
                            "${wave_src2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid111",
                            "scaleY",
                            0,
                            200,
                            "linear",
                            "${steering}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid119",
                            "scaleY",
                            267,
                            200,
                            "linear",
                            "${steering}",
                            '0.98',
                            '1'
                        ]
                    ]
                }
            },
            "M1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '23px', '176', '227', 'auto', 'auto'],
                            id: 'seat',
                            fill: ['rgba(0,0,0,0)', 'images/seat.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['48px', '0px', '163', '183', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wave_src1.png'],
                            id: 'wave_src1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '211px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 467,
                    autoPlay: false,
                    data: [
                        [
                            "eid131",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${wave_src1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            267,
                            200,
                            "linear",
                            "${wave_src1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "scaleY",
                            0,
                            200,
                            "linear",
                            "${seat}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid141",
                            "scaleY",
                            267,
                            200,
                            "linear",
                            "${seat}",
                            '0.98',
                            '1'
                        ],
                        [
                            "eid126",
                            "scaleX",
                            0,
                            200,
                            "linear",
                            "${seat}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid140",
                            "scaleX",
                            267,
                            200,
                            "linear",
                            "${seat}",
                            '0.98',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            0,
                            200,
                            "linear",
                            "${wave_src1}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid139",
                            "scaleY",
                            267,
                            200,
                            "linear",
                            "${wave_src1}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid128",
                            "scaleX",
                            0,
                            200,
                            "linear",
                            "${wave_src1}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            267,
                            200,
                            "linear",
                            "${wave_src1}",
                            '1.05',
                            '1'
                        ]
                    ]
                }
            },
            "CAR": {
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
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                            id: 'SIGNAL',
                            symbolName: 'SIGNAL',
                            opacity: '0',
                            rect: ['-3px', '24px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'car1',
                            tag: 'img',
                            rect: ['0px', '0px', '462', '479', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '462px', '479px']
                        }
                    }
                },
                timeline: {
                    duration: 1033.3333333333,
                    autoPlay: false,
                    labels: {
                        "sig": 300
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${SIGNAL}",
                            '0',
                            '0'
                        ],
                        [
                            "eid191",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${SIGNAL}",
                            '0',
                            '1'
                        ],
                            [ "eid200", "trigger", 300, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL}', ['go1'] ] ]
                    ]
                }
            },
            "MEMOS": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '951', '550', 'auto', 'auto'],
                            tag: 'img',
                            id: 'memo_back',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/memo_back.png']
                        },
                        {
                            rect: ['671px', '145px', '201', '161', 'auto', 'auto'],
                            id: 'M3',
                            symbolName: 'M3',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['352px', '117px', '245', '217', 'auto', 'auto'],
                            id: 'M2',
                            symbolName: 'M2',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['66px', '89px', '211', '250', 'auto', 'auto'],
                            id: 'M1',
                            symbolName: 'M1',
                            type: 'rect',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '951px', '550px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid179",
                            "opacity",
                            167,
                            267,
                            "linear",
                            "${M1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid180",
                            "opacity",
                            367,
                            267,
                            "linear",
                            "${M3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            267,
                            "linear",
                            "${memo_back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid177",
                            "opacity",
                            267,
                            267,
                            "linear",
                            "${M2}",
                            '0',
                            '1'
                        ],
                            [ "eid184", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${M3}', [0] ] ],
                            [ "eid185", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${M1}', [0] ] ],
                            [ "eid186", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${M2}', [0] ] ],
                            [ "eid187", "trigger", 433, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${M1}', [] ] ],
                            [ "eid188", "trigger", 533, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${M2}', [] ] ],
                            [ "eid189", "trigger", 633, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${M3}', ['gogo'] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive7_edgeActions.js");
})("EDGE-3465292");
