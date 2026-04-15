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
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SCENE3',
                            display: 'none',
                            type: 'group',
                            rect: ['68', '94', '2492', '1346', 'auto', 'auto'],
                            c: [
                            {
                                id: 'car3_fill',
                                type: 'image',
                                tag: 'img',
                                rect: ['833px', '78px', '1659', '1268', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"car3_fill.png"]
                            },
                            {
                                id: 'car3_eng',
                                type: 'image',
                                tag: 'img',
                                rect: ['993px', '553px', '371', '430', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"car3_eng.png"]
                            },
                            {
                                id: 'car3_engLight',
                                type: 'image',
                                tag: 'img',
                                rect: ['991px', '551px', '375', '434', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"car3_engLight.png"]
                            },
                            {
                                id: 'car3_line',
                                type: 'image',
                                tag: 'img',
                                rect: ['828px', '73px', '1664', '1273', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"car3_line.png"]
                            },
                            {
                                id: 's3_txt3',
                                type: 'image',
                                tag: 'img',
                                rect: ['750px', '279px', '560', '65', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"s3_txt3.png"]
                            },
                            {
                                id: 's3_txt2',
                                type: 'image',
                                tag: 'img',
                                rect: ['750px', '159px', '989', '65', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"s3_txt2.png"]
                            },
                            {
                                id: 's3_txt1',
                                type: 'image',
                                tag: 'img',
                                rect: ['748px', '0px', '441', '111', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"s3_txt1.png"]
                            },
                            {
                                id: 'SCENE3_MEMO',
                                symbolName: 'SCENE3_MEMO',
                                type: 'rect',
                                rect: ['-20px', '312px', '961', '854', 'auto', 'auto'],
                                opacity: '0'
                            }]
                        },
                        {
                            id: 'SCENE2',
                            display: 'none',
                            type: 'group',
                            rect: ['209px', '412', '2115', '802', 'auto', 'auto'],
                            c: [
                            {
                                id: 'CAR2',
                                symbolName: 'CAR2',
                                type: 'rect',
                                rect: ['2164px', '-290px', '2030px', '802px', 'auto', 'auto'],
                                transform: [[],[],[],['0.8','0.8']]
                            },
                            {
                                id: 'zoom_rect',
                                type: 'rect',
                                rect: ['0px', '139px', '568px', '518px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [15,"rgba(33,75,141,1.00)","solid"],
                                transform: [[],[],[],['1.1','1.1']]
                            }]
                        },
                        {
                            id: 'SCENE1',
                            display: 'block',
                            type: 'group',
                            rect: ['510', '66', '1842', '1272', 'auto', 'auto'],
                            c: [
                            {
                                id: 'CAR1',
                                symbolName: 'CAR1',
                                type: 'rect',
                                rect: ['2137px', '881px', '1744', '1039', 'auto', 'auto'],
                                opacity: '0',
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: 'car1_memo',
                                type: 'image',
                                tag: 'img',
                                rect: ['1286px', '0px', '556', '556', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"car1_memo.png"]
                            },
                            {
                                id: 'TXT_CVVL',
                                type: 'text',
                                rect: ['1286px', '133px', '556px', '155px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin:0px\">CVVL<span style=\"font-size: 80px;\"></span></p>",
                                align: "center",
                                font: ['Arial', [140, ""], "rgb(140,141,144)", "700", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'TXT_ENGINE',
                                type: 'text',
                                rect: ['1286px', '271px', '556px', '155px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin:0px\">ENGINE​</p>",
                                align: "center",
                                font: ['Arial', [120, "px"], "rgb(140,141,144)", "700", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40', '40', '200', '200', 'auto', 'auto'],
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
                    duration: 11583,
                    autoPlay: true,
                    data: [
                        [
                            "eid95",
                            "left",
                            3750,
                            750,
                            "easeInOutQuad",
                            "${CAR2}",
                            '2164px',
                            '0px'
                        ],
                        [
                            "eid16",
                            "scaleX",
                            0,
                            750,
                            "easeInQuad",
                            "${CAR1}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid63",
                            "scaleX",
                            3250,
                            500,
                            "easeInQuad",
                            "${CAR1}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            6208,
                            0,
                            "easeInOutQuad",
                            "${SCENE3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "opacity",
                            1292,
                            250,
                            "easeInQuad",
                            "${TXT_ENGINE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            3000,
                            250,
                            "easeInQuad",
                            "${TXT_ENGINE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18",
                            "scaleY",
                            0,
                            750,
                            "easeInQuad",
                            "${CAR1}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            3250,
                            500,
                            "easeInQuad",
                            "${CAR1}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            6541,
                            250,
                            "easeInOutQuad",
                            "${s3_txt3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            0,
                            375,
                            "easeInQuad",
                            "${CAR1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "scaleY",
                            5083,
                            292,
                            "easeInOutQuad",
                            "${zoom_rect}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid422",
                            "opacity",
                            6625,
                            292,
                            "easeInOutQuad",
                            "${car3_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid424",
                            "opacity",
                            6917,
                            292,
                            "easeInOutQuad",
                            "${car3_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid425",
                            "opacity",
                            7292,
                            292,
                            "easeInOutQuad",
                            "${car3_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid426",
                            "opacity",
                            7584,
                            292,
                            "easeInOutQuad",
                            "${car3_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid427",
                            "opacity",
                            7958,
                            292,
                            "easeInOutQuad",
                            "${car3_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid428",
                            "opacity",
                            8250,
                            292,
                            "easeInOutQuad",
                            "${car3_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid444",
                            "opacity",
                            8625,
                            292,
                            "easeInOutQuad",
                            "${car3_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid445",
                            "opacity",
                            8917,
                            292,
                            "easeInOutQuad",
                            "${car3_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid46",
                            "opacity",
                            1292,
                            250,
                            "easeInQuad",
                            "${TXT_CVVL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            3000,
                            250,
                            "easeInQuad",
                            "${TXT_CVVL}",
                            '1',
                            '0'
                        ],
                        [
                            "eid374",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid375",
                            "opacity",
                            11333,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid97",
                            "top",
                            3750,
                            750,
                            "easeInOutQuad",
                            "${CAR2}",
                            '-290px',
                            '0px'
                        ],
                        [
                            "eid372",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid373",
                            "opacity",
                            11333,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "left",
                            6208,
                            417,
                            "easeInOutQuad",
                            "${SCENE3_MEMO}",
                            '-20px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            3750,
                            0,
                            "easeInQuad",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "scaleX",
                            3750,
                            750,
                            "easeInOutQuad",
                            "${CAR2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            3750,
                            0,
                            "easeInQuad",
                            "${SCENE2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid122",
                            "display",
                            6208,
                            0,
                            "easeInOutQuad",
                            "${SCENE2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid141",
                            "opacity",
                            6208,
                            417,
                            "easeInOutQuad",
                            "${SCENE3_MEMO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "left",
                            6541,
                            250,
                            "easeInOutQuad",
                            "${s3_txt3}",
                            '750px',
                            '730px'
                        ],
                        [
                            "eid44",
                            "opacity",
                            1292,
                            250,
                            "easeInQuad",
                            "${car1_memo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            3000,
                            250,
                            "easeInQuad",
                            "${car1_memo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid22",
                            "top",
                            0,
                            750,
                            "easeInQuad",
                            "${CAR1}",
                            '-117px',
                            '233px'
                        ],
                        [
                            "eid62",
                            "top",
                            3250,
                            500,
                            "easeInQuad",
                            "${CAR1}",
                            '233px',
                            '881px'
                        ],
                        [
                            "eid101",
                            "scaleY",
                            3750,
                            750,
                            "easeInOutQuad",
                            "${CAR2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid117",
                            "scaleX",
                            5083,
                            292,
                            "easeInOutQuad",
                            "${zoom_rect}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid135",
                            "left",
                            6458,
                            250,
                            "easeInOutQuad",
                            "${s3_txt2}",
                            '750px',
                            '730px'
                        ],
                        [
                            "eid129",
                            "opacity",
                            6458,
                            250,
                            "easeInOutQuad",
                            "${s3_txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            6375,
                            250,
                            "easeInOutQuad",
                            "${s3_txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "left",
                            0,
                            750,
                            "easeInQuad",
                            "${CAR1}",
                            '-1320px',
                            '0px'
                        ],
                        [
                            "eid61",
                            "left",
                            3250,
                            500,
                            "easeInQuad",
                            "${CAR1}",
                            '0px',
                            '2137px'
                        ],
                        [
                            "eid115",
                            "opacity",
                            5083,
                            292,
                            "easeInOutQuad",
                            "${zoom_rect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "left",
                            6375,
                            250,
                            "easeInOutQuad",
                            "${s3_txt1}",
                            '748px',
                            '728px'
                        ],
                            [ "eid47", "trigger", 750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR1}', ['START'] ] ],
                            [ "eid60", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR1}', ['END'] ] ],
                            [ "eid120", "trigger", 3750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR2}', [0] ] ],
                            [ "eid121", "trigger", 4500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR2}', ['START'] ] ]
                    ]
                }
            },
            "SCENE3_MEMO": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '961', '854', 'auto', 'auto'],
                            id: 'car3_memo',
                            fill: ['rgba(0,0,0,0)', 'images/car3_memo.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['171px', '679px', '519', '78', 'auto', 'auto'],
                            id: 'dotLine',
                            fill: ['rgba(0,0,0,0)', 'images/dotLine.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'G3',
                            symbolName: 'G3',
                            rect: ['387px', '245px', '140', '140', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'G2',
                            symbolName: 'G2',
                            rect: ['496px', '126px', '182', '181', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'G1',
                            symbolName: 'G1',
                            rect: ['188px', '18px', '400px', '400px', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['219px', '373px', '86', '203', 'auto', 'auto'],
                            id: 'px',
                            fill: ['rgba(0,0,0,0)', 'images/px.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['324px', '458px', '155', '277', 'auto', 'auto'],
                            id: 'piston',
                            fill: ['rgba(0,0,0,0)', 'images/piston.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['258px', '369px', '233', '102', 'auto', 'auto'],
                            transform: [[], ['12']],
                            id: 'axle',
                            fill: ['rgba(0,0,0,0)', 'images/axle.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['340px', '357px', '97', '98', 'auto', 'auto'],
                            id: 'Layer-2',
                            fill: ['rgba(0,0,0,0)', 'images/Layer-2.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '961px', '854px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid498",
                            "left",
                            0,
                            250,
                            "linear",
                            "${px}",
                            '219px',
                            '225px'
                        ],
                        [
                            "eid508",
                            "left",
                            501,
                            250,
                            "linear",
                            "${px}",
                            '225px',
                            '219px'
                        ],
                        [
                            "eid166",
                            "top",
                            1,
                            250,
                            "linear",
                            "${piston}",
                            '458px',
                            '478px'
                        ],
                        [
                            "eid507",
                            "top",
                            500,
                            250,
                            "linear",
                            "${piston}",
                            '478px',
                            '458px'
                        ],
                        [
                            "eid168",
                            "top",
                            1,
                            250,
                            "linear",
                            "${px}",
                            '390px',
                            '373px'
                        ],
                        [
                            "eid509",
                            "top",
                            500,
                            250,
                            "linear",
                            "${px}",
                            '373px',
                            '390px'
                        ],
                        [
                            "eid499",
                            "left",
                            0,
                            250,
                            "linear",
                            "${piston}",
                            '324px',
                            '315px'
                        ],
                        [
                            "eid506",
                            "left",
                            501,
                            250,
                            "linear",
                            "${piston}",
                            '315px',
                            '324px'
                        ],
                        [
                            "eid165",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${axle}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid505",
                            "rotateZ",
                            501,
                            250,
                            "linear",
                            "${axle}",
                            '12deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "WHEEL_MC": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '333', '333', 'auto', 'auto'],
                            id: 'wheel',
                            fill: ['rgba(0,0,0,0)', 'images/wheel.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '333px', '333px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 125,
                    autoPlay: false,
                    labels: {
                        "end": 125
                    },
                    data: [
                        [
                            "eid1",
                            "rotateZ",
                            0,
                            125,
                            "linear",
                            "${wheel}",
                            '0deg',
                            '24deg'
                        ]
                    ]
                }
            },
            "CAR1": {
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
                            id: 'car1_tire',
                            tag: 'img',
                            rect: ['48px', '457px', '779', '577', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1_tire.png']
                        },
                        {
                            transform: [[], ['-13'], [], ['0.1386', '0.67568']],
                            id: 'WHEEL1_2',
                            symbolName: 'WHEEL_MC',
                            rect: ['-75px', '448px', '333', '333', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-16'], [], ['0.35019', '1.07148']],
                            id: 'WHEEL1_1',
                            symbolName: 'WHEEL_MC',
                            rect: ['429px', '658px', '333', '333', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'car1_fill',
                            tag: 'img',
                            rect: ['5px', '5px', '1734', '970', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1_fill.png']
                        },
                        {
                            type: 'image',
                            id: 'car1_eng',
                            tag: 'img',
                            rect: ['984px', '285px', '466', '406', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1_eng.png']
                        },
                        {
                            rect: ['982px', '283px', '470', '410', 'auto', 'auto'],
                            tag: 'img',
                            id: 'car1_engLight',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/car1_engLight.png']
                        },
                        {
                            type: 'image',
                            id: 'car1_line',
                            tag: 'img',
                            rect: ['4px', '4px', '1736', '972', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1_line.png']
                        },
                        {
                            rect: ['4px', '5px', '1736', '970', 'auto', 'auto'],
                            tag: 'img',
                            id: 'car1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/car1.png']
                        },
                        {
                            type: 'image',
                            id: 'car1_outLine',
                            tag: 'img',
                            rect: ['0px', '0px', '1744', '1039', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1_outLine.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1744px', '1039px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "START": 250,
                        "END": 2250
                    },
                    data: [
                        [
                            "eid27",
                            "opacity",
                            750,
                            125,
                            "easeInQuad",
                            "${car1_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            875,
                            125,
                            "easeInQuad",
                            "${car1_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1042,
                            125,
                            "easeInQuad",
                            "${car1_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1167,
                            125,
                            "easeInQuad",
                            "${car1_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1333,
                            125,
                            "easeInQuad",
                            "${car1_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1458,
                            125,
                            "easeInQuad",
                            "${car1_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid34",
                            "opacity",
                            1625,
                            125,
                            "easeInQuad",
                            "${car1_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            1750,
                            125,
                            "easeInQuad",
                            "${car1_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            250,
                            500,
                            "easeInQuad",
                            "${car1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid39",
                            "opacity",
                            2250,
                            500,
                            "easeInQuad",
                            "${car1}",
                            '0',
                            '1'
                        ],
                            [ "eid40", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL1_1}', [0] ] ],
                            [ "eid41", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL1_2}', [0] ] ],
                            [ "eid42", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL1_1}', [] ] ],
                            [ "eid43", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL1_2}', [] ] ]
                    ]
                }
            },
            "CAR2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['399px', '357px', '1469', '440', 'auto', 'auto'],
                            id: 'car2_tire',
                            fill: ['rgba(0,0,0,0)', 'images/car2_tire.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL_MC2_1',
                            symbolName: 'WHEEL_MC',
                            transform: [[], ['21'], [], ['0.71563', '0.80265']],
                            rect: ['454px', '466px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'WHEEL_MC2_2',
                            symbolName: 'WHEEL_MC',
                            transform: [[], ['8'], [], ['0.52001', '0.67103']],
                            rect: ['1600px', '339px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            rect: ['5px', '5px', '2020', '719', 'auto', 'auto'],
                            id: 'car2_fill',
                            fill: ['rgba(0,0,0,0)', 'images/car2_fill.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['91px', '287px', '216', '249', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car2_engLight.png'],
                            id: 'car2_engLight',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['4px', '4px', '2022', '721', 'auto', 'auto'],
                            id: 'car2_line',
                            fill: ['rgba(0,0,0,0)', 'images/car2_line.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['5px', '5px', '2021', '720', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car2.png'],
                            id: 'car2',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '2030', '802', 'auto', 'auto'],
                            id: 'car2_outLine',
                            fill: ['rgba(0,0,0,0)', 'images/car2_outLine.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '2030px', '802px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 2208.3333333333,
                    autoPlay: false,
                    labels: {
                        "START": 500
                    },
                    data: [
                        [
                            "eid102",
                            "opacity",
                            500,
                            500,
                            "easeInOutQuad",
                            "${car2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid104",
                            "opacity",
                            1083,
                            125,
                            "easeInOutQuad",
                            "${car2_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "opacity",
                            1208,
                            125,
                            "easeInOutQuad",
                            "${car2_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid107",
                            "opacity",
                            1375,
                            125,
                            "easeInOutQuad",
                            "${car2_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            1500,
                            125,
                            "easeInOutQuad",
                            "${car2_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid109",
                            "opacity",
                            1666,
                            125,
                            "easeInOutQuad",
                            "${car2_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            1791,
                            125,
                            "easeInOutQuad",
                            "${car2_engLight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid111",
                            "opacity",
                            1958,
                            125,
                            "easeInOutQuad",
                            "${car2_engLight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid112",
                            "opacity",
                            2083,
                            125,
                            "easeInOutQuad",
                            "${car2_engLight}",
                            '1',
                            '0'
                        ],
                            [ "eid113", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${WHEEL_MC2_2}', ['end'] ] ],
                            [ "eid114", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${WHEEL_MC2_1}', ['end'] ] ],
                            [ "eid126", "trigger", 125, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${WHEEL_MC2_2}', ['end'] ] ],
                            [ "eid127", "trigger", 125, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${WHEEL_MC2_1}', ['end'] ] ],
                            [ "eid125", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL_MC2_1}', [] ] ],
                            [ "eid124", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL_MC2_2}', [] ] ]
                    ]
                }
            },
            "G1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['89px', '85px', '221', '291', 'auto', 'auto'],
                            id: 'gear1',
                            fill: ['rgba(0,0,0,0)', 'images/gear1.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '400px', '400px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid162",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${gear1}",
                            '0deg',
                            '359deg'
                        ],
                        [
                            "eid144",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear1}",
                            [50,39],
                            [50,39],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid555",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear1}",
                            [50,39],
                            [50,39],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid556",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear1}",
                            [50,39],
                            [50,39],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid557",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear1}",
                            [50,39],
                            [50,39],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid558",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear1}",
                            [50,39],
                            [50,39],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid559",
                            "transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear1}",
                            [50,39],
                            [50,39],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "G2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '182', '181', 'auto', 'auto'],
                            id: 'gear2',
                            fill: ['rgba(0,0,0,0)', 'images/gear2.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '182px', '181px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid163",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${gear2}",
                            '0deg',
                            '359deg'
                        ],
                        [
                            "eid145",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear2}",
                            [60,42],
                            [60,42],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid560",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear2}",
                            [60,42],
                            [60,42],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid561",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear2}",
                            [60,42],
                            [60,42],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid562",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear2}",
                            [60,42],
                            [60,42],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid563",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear2}",
                            [60,42],
                            [60,42],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid564",
                            "transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear2}",
                            [60,42],
                            [60,42],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "G3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '140', '140', 'auto', 'auto'],
                            id: 'gear3',
                            fill: ['rgba(0,0,0,0)', 'images/gear3.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '140px', '140px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid164",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${gear3}",
                            '0deg',
                            '359deg'
                        ],
                        [
                            "eid146",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear3}",
                            [59,60],
                            [59,60],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid565",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear3}",
                            [59,60],
                            [59,60],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid566",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear3}",
                            [59,60],
                            [59,60],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid567",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear3}",
                            [59,60],
                            [59,60],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid568",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear3}",
                            [59,60],
                            [59,60],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid569",
                            "transform-origin",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gear3}",
                            [59,60],
                            [59,60],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("system2_edgeActions.js");
})("EDGE-22479537");
