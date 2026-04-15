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
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        },
                        {
                            id: 'SCENE2',
                            display: 'none',
                            type: 'group',
                            rect: ['204', '92', '2145', '1272', 'auto', 'auto'],
                            c: [
                            {
                                id: 'TM',
                                type: 'image',
                                tag: 'img',
                                rect: ['0px', '201px', '810', '870', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"TM.png"]
                            },
                            {
                                id: 'TM_blink',
                                type: 'image',
                                rect: ['0px', '201px', '810px', '870px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"TM_blink.png",'0px','0px']
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['810px', '591px', '557px', '136px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​3~4단 변속</p>",
                                font: ['Arial, Helvetica, sans-serif', [80, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                            },
                            {
                                id: 'TCU_LINE_CLIP',
                                symbolName: 'TCU_LINE_CLIP',
                                type: 'rect',
                                rect: ['1322px', '823px', '665px', '248px', 'auto', 'auto']
                            },
                            {
                                id: 'TXT2',
                                type: 'image',
                                tag: 'img',
                                rect: ['1401px', '1122px', '619', '112', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"TXT2.png"]
                            },
                            {
                                id: 'TCU_LINE_CLIPCopy',
                                symbolName: 'TCU_LINE_CLIP',
                                type: 'rect',
                                rect: ['1322px', '203px', '665px', '248px', 'auto', 'auto'],
                                transform: [[],[],[],['1','-1']]
                            },
                            {
                                id: 'TXT1',
                                type: 'image',
                                tag: 'img',
                                rect: ['1401px', '39px', '619', '112', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"TXT1.png"]
                            },
                            {
                                id: 'actu_clutch',
                                type: 'image',
                                tag: 'img',
                                rect: ['572px', '773px', '838', '499', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"actu_clutch.png"]
                            },
                            {
                                id: 'actu_gear',
                                type: 'image',
                                tag: 'img',
                                rect: ['495px', '0px', '915', '499', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"actu_gear.png"]
                            },
                            {
                                id: 'TCU',
                                type: 'image',
                                tag: 'img',
                                rect: ['1757px', '449px', '388', '375', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"TCU.png"]
                            }]
                        },
                        {
                            id: 'SCENE1',
                            display: 'block',
                            type: 'group',
                            rect: ['-433', '35', '3012', '1405', 'auto', 'auto'],
                            c: [
                            {
                                id: 'back',
                                type: 'image',
                                tag: 'img',
                                rect: ['516px', '56px', '2426', '182', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"back.png"]
                            },
                            {
                                id: 'LAMP_CLIP',
                                symbolName: 'LAMP_CLIP',
                                type: 'rect',
                                rect: ['325px', '0px', '106', '265', 'auto', 'auto']
                            },
                            {
                                id: 'road',
                                type: 'image',
                                tag: 'img',
                                rect: ['431px', '228px', '2564', '1177', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"road.png"]
                            },
                            {
                                id: 'LINE_CLIP',
                                symbolName: 'LINE_CLIP',
                                type: 'rect',
                                rect: ['0px', '619px', '3012', '395', 'auto', 'auto']
                            },
                            {
                                id: 'CAR',
                                symbolName: 'CAR',
                                type: 'rect',
                                rect: ['969px', '531px', '1335', '426', 'auto', 'auto']
                            },
                            {
                                id: 'GAGE',
                                symbolName: 'GAGE',
                                type: 'rect',
                                rect: ['1220px', '18px', '545', '579', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                id: 'PEDAL',
                                symbolName: 'PEDAL',
                                type: 'rect',
                                rect: ['1793px', '70px', '569', '498', 'auto', 'auto'],
                                opacity: '0'
                            }]
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
                    duration: 12000,
                    autoPlay: true,
                    data: [
                        [
                            "eid285",
                            "opacity",
                            5000,
                            208,
                            "linear",
                            "${TXT2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid290",
                            "opacity",
                            5208,
                            208,
                            "linear",
                            "${TXT2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid293",
                            "opacity",
                            5500,
                            208,
                            "linear",
                            "${TXT2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid294",
                            "opacity",
                            5708,
                            208,
                            "linear",
                            "${TXT2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            6001,
                            208,
                            "linear",
                            "${TXT2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid298",
                            "opacity",
                            6209,
                            208,
                            "linear",
                            "${TXT2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid301",
                            "opacity",
                            6500,
                            208,
                            "linear",
                            "${TXT2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid302",
                            "opacity",
                            6708,
                            208,
                            "linear",
                            "${TXT2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid327",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid328",
                            "opacity",
                            11750,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid248",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "left",
                            0,
                            3367,
                            "linear",
                            "${CAR}",
                            '2225px',
                            '969px'
                        ],
                        [
                            "eid124",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${PEDAL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid350",
                            "opacity",
                            8917,
                            208,
                            "linear",
                            "${TM_blink}",
                            '0',
                            '0.7'
                        ],
                        [
                            "eid352",
                            "opacity",
                            9125,
                            208,
                            "linear",
                            "${TM_blink}",
                            '0.7',
                            '0'
                        ],
                        [
                            "eid353",
                            "opacity",
                            9417,
                            208,
                            "linear",
                            "${TM_blink}",
                            '0',
                            '0.7'
                        ],
                        [
                            "eid354",
                            "opacity",
                            9625,
                            208,
                            "linear",
                            "${TM_blink}",
                            '0.7',
                            '0'
                        ],
                        [
                            "eid355",
                            "opacity",
                            9917,
                            208,
                            "linear",
                            "${TM_blink}",
                            '0',
                            '0.7'
                        ],
                        [
                            "eid356",
                            "opacity",
                            10125,
                            208,
                            "linear",
                            "${TM_blink}",
                            '0.7',
                            '0'
                        ],
                        [
                            "eid286",
                            "opacity",
                            7001,
                            208,
                            "linear",
                            "${TXT1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid289",
                            "opacity",
                            7209,
                            208,
                            "linear",
                            "${TXT1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid291",
                            "opacity",
                            7501,
                            208,
                            "linear",
                            "${TXT1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid292",
                            "opacity",
                            7709,
                            208,
                            "linear",
                            "${TXT1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid295",
                            "opacity",
                            8001,
                            208,
                            "linear",
                            "${TXT1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid296",
                            "opacity",
                            8209,
                            208,
                            "linear",
                            "${TXT1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid299",
                            "opacity",
                            8501,
                            208,
                            "linear",
                            "${TXT1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid300",
                            "opacity",
                            8709,
                            208,
                            "linear",
                            "${TXT1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid241",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid242",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid126",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${GAGE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid325",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid326",
                            "opacity",
                            11750,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid358",
                            "opacity",
                            9125,
                            375,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                            [ "eid64", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${LAMP_CLIP}', [] ] ],
                            [ "eid39", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${LINE_CLIP}', [] ] ],
                            [ "eid137", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${GAGE}', [0] ] ],
                            [ "eid136", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${PEDAL}', [0] ] ],
                            [ "eid128", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PEDAL}', ['gogo'] ] ],
                            [ "eid127", "trigger", 1875, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GAGE}', [] ] ],
                            [ "eid303", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TCU_LINE_CLIP}', [0] ] ],
                            [ "eid304", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TCU_LINE_CLIPCopy}', [0] ] ]
                    ]
                }
            },
            "LAMP_CLIP": {
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
                            id: 'lamp',
                            tag: 'img',
                            rect: ['0px', '0px', '106', '265', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lamp.png']
                        },
                        {
                            type: 'image',
                            id: 'lampCopy',
                            tag: 'img',
                            rect: ['0px', '0px', '106', '265', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lamp.png']
                        },
                        {
                            type: 'image',
                            id: 'lampCopy2',
                            tag: 'img',
                            rect: ['0px', '0px', '106', '265', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lamp.png']
                        },
                        {
                            type: 'image',
                            id: 'lampCopy3',
                            tag: 'img',
                            rect: ['0px', '0px', '106', '265', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lamp.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '106px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 1166.6666666667,
                    autoPlay: false,
                    labels: {
                        "start": 533
                    },
                    data: [
                        [
                            "eid25",
                            "left",
                            0,
                            633,
                            "linear",
                            "${lamp}",
                            '0px',
                            '2676px'
                        ],
                        [
                            "eid28",
                            "left",
                            533,
                            633,
                            "linear",
                            "${lampCopy3}",
                            '0px',
                            '2676px'
                        ],
                        [
                            "eid26",
                            "left",
                            200,
                            633,
                            "linear",
                            "${lampCopy}",
                            '0px',
                            '2676px'
                        ],
                        [
                            "eid27",
                            "left",
                            367,
                            633,
                            "linear",
                            "${lampCopy2}",
                            '0px',
                            '2676px'
                        ]
                    ]
                }
            },
            "LINE_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '3012', '395', 'auto', 'auto'],
                            id: 'road_line',
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '3012px', '395px']
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: false,
                    data: [
                        [
                            "eid30",
                            "left",
                            0,
                            200,
                            "linear",
                            "${road_line}",
                            '0px',
                            '393px'
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
                            rect: ['584px', '277px', '748', '149', 'auto', 'auto'],
                            tag: 'img',
                            id: 'car_shadow',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png']
                        },
                        {
                            type: 'image',
                            id: 'car_body',
                            tag: 'img',
                            rect: ['571px', '82px', '764', '337', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png']
                        },
                        {
                            rect: ['666', '326', '553', '75', 'auto', 'auto'],
                            id: 'WHEEL',
                            symbolName: 'WHEEL',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1335px', '426px']
                        }
                    }
                },
                timeline: {
                    duration: 133.33333333333,
                    autoPlay: false,
                    data: [

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
                            type: 'image',
                            id: 'wheel2',
                            opacity: '0.2',
                            rect: ['478px', '13px', '75px', '59px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'wheel1',
                            opacity: '0.2',
                            rect: ['3px', '0px', '107px', '72px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '110', '75', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel1_2',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel1_2.png']
                        },
                        {
                            rect: ['3px', '2px', '107', '72', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel1_1',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel1_1.png']
                        },
                        {
                            rect: ['478px', '13px', '75', '59', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel2_2',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel2_2.png']
                        },
                        {
                            rect: ['478px', '13px', '75', '59', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel2_1',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel2_1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '553px', '75px']
                        }
                    }
                },
                timeline: {
                    duration: 133.33333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid52",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel2_1}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid56",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${wheel2_1}",
                            '0.9',
                            '0'
                        ],
                        [
                            "eid54",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel1_1}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid57",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${wheel1_1}",
                            '0.9',
                            '0'
                        ],
                        [
                            "eid60",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel1}",
                            '0.2',
                            '0.2'
                        ],
                        [
                            "eid53",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel2_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${wheel2_2}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel1_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid59",
                            "opacity",
                            67,
                            0,
                            "linear",
                            "${wheel1_2}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid61",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel2}",
                            '0.2',
                            '0.2'
                        ]
                    ]
                }
            },
            "PEDAL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['7px', '7px', '555', '484', 'auto', 'auto'],
                            id: 'pedal_back',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_axccel.png'],
                            id: 'pedal_axccel',
                            rect: ['366px', '54px', '98', '239', 'auto', 'auto'],
                            transform: [[], ['9'], [], ['0.95', '0.95']],
                            tag: 'img'
                        },
                        {
                            rect: ['132px', '103px', '158', '188', 'auto', 'auto'],
                            id: 'pedal_brake',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_brake.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'foot',
                            rect: ['386px', '113px', '466px', '356px', 'auto', 'auto'],
                            transform: [[], ['-6'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/foot.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '569', '498', 'auto', 'auto'],
                            id: 'pedalPic',
                            fill: ['rgba(0,0,0,0)', 'images/pedalPic.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '569px', '498px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "gogo": 0,
                        "end": 1000
                    },
                    data: [
                        [
                            "eid122",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid119",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${foot}",
                            '4deg',
                            '-6deg'
                        ],
                        [
                            "eid118",
                            "left",
                            0,
                            458,
                            "linear",
                            "${foot}",
                            '567px',
                            '386px'
                        ],
                        [
                            "eid121",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid117",
                            "top",
                            0,
                            458,
                            "linear",
                            "${foot}",
                            '154px',
                            '113px'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '1',
                            '0.95'
                        ]
                    ]
                }
            },
            "GAGE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '545', '579', 'auto', 'auto'],
                            id: 'gageBody',
                            fill: ['rgba(0,0,0,0)', 'images/gageBody.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gagePin.png'],
                            id: 'gagePin',
                            rect: ['138px', '157px', '166', '147', 'auto', 'auto'],
                            transform: [[], ['40'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img'
                        },
                        {
                            rect: ['0', '369', '545', '150', 'auto', 'auto'],
                            id: 'TXT_ON',
                            symbolName: 'TXT_ON',
                            opacity: '1',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '545px', '579px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid222",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TXT_ON}",
                            '1',
                            '1'
                        ],
                        [
                            "eid142",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gagePin}",
                            [81,79],
                            [81,79],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid389",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gagePin}",
                            [81,79],
                            [81,79],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid390",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gagePin}",
                            [81,79],
                            [81,79],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid391",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${gagePin}",
                            [81,79],
                            [81,79],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid392",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gagePin}",
                            [81,79],
                            [81,79],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid393",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${gagePin}",
                            [81,79],
                            [81,79],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid98",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${gagePin}",
                            '0deg',
                            '40deg'
                        ],
                            [ "eid237", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${TXT_ON}', [0] ] ],
                            [ "eid238", "trigger", 708.33333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TXT_ON}', [] ] ]
                    ]
                }
            },
            "TXT_ON": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            id: 'CRUISE-ON',
                            textStyle: ['', '', '65px', '', ''],
                            rect: ['0px', '0px', '545px', '150', 'auto', 'auto'],
                            align: 'center',
                            font: ['Arial', [65, ''], 'rgba(33,75,141,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            opacity: '1',
                            text: '<p style=\"margin:0px\">​3~4 단</p><p style=\"margin:0px\">​변속</p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '545px', '150px']
                        }
                    }
                },
                timeline: {
                    duration: 1292,
                    autoPlay: false,
                    data: [
                        [
                            "eid95",
                            "opacity",
                            0,
                            167,
                            "linear",
                            "${CRUISE-ON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "opacity",
                            209,
                            167,
                            "linear",
                            "${CRUISE-ON}",
                            '1',
                            '0'
                        ],
                        [
                            "eid227",
                            "opacity",
                            375,
                            167,
                            "linear",
                            "${CRUISE-ON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid228",
                            "opacity",
                            583,
                            167,
                            "linear",
                            "${CRUISE-ON}",
                            '1',
                            '0'
                        ],
                        [
                            "eid229",
                            "opacity",
                            750,
                            167,
                            "linear",
                            "${CRUISE-ON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid230",
                            "opacity",
                            958,
                            167,
                            "linear",
                            "${CRUISE-ON}",
                            '1',
                            '0'
                        ],
                        [
                            "eid231",
                            "opacity",
                            1125,
                            167,
                            "linear",
                            "${CRUISE-ON}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "TCU_LINE_CLIP": {
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
                            id: 'TCU_lineBack',
                            tag: 'img',
                            rect: ['0px', '0px', '665', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/TCU_lineBack.png']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle1_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['639px', '-16px', '19px', '16px', 'auto', 'auto'],
                            fill: ['rgba(253,25,118,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle1_2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['658px', '223px', '3px', '19px', 'auto', 'auto'],
                            fill: ['rgba(253,25,118,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['597px', '199px', '19px', '2px', 'auto', 'auto'],
                            fill: ['rgba(24,188,253,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2_2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['55px', '180px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(24,188,253,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'TCU_line',
                            tag: 'img',
                            rect: ['78px', '0px', '587', '248', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/TCU_line.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '665px', '248px']
                        }
                    }
                },
                timeline: {
                    duration: 1875,
                    autoPlay: false,
                    data: [
                        [
                            "eid261",
                            "left",
                            209,
                            250,
                            "linear",
                            "${Rectangle1_2}",
                            '658px',
                            '55px'
                        ],
                        [
                            "eid275",
                            "top",
                            458,
                            208,
                            "linear",
                            "${Rectangle1_1}",
                            '-16px',
                            '242px'
                        ],
                        [
                            "eid269",
                            "top",
                            1167,
                            250,
                            "linear",
                            "${Rectangle2_1}",
                            '199px',
                            '-22px'
                        ],
                        [
                            "eid278",
                            "left",
                            1417,
                            208,
                            "linear",
                            "${Rectangle2_2}",
                            '55px',
                            '616px'
                        ],
                        [
                            "eid259",
                            "height",
                            0,
                            208,
                            "linear",
                            "${Rectangle1_1}",
                            '16px',
                            '261px'
                        ],
                        [
                            "eid274",
                            "height",
                            458,
                            208,
                            "linear",
                            "${Rectangle1_1}",
                            '261px',
                            '3px'
                        ],
                        [
                            "eid263",
                            "width",
                            209,
                            250,
                            "linear",
                            "${Rectangle1_2}",
                            '3px',
                            '606px'
                        ],
                        [
                            "eid276",
                            "width",
                            667,
                            250,
                            "linear",
                            "${Rectangle1_2}",
                            '606px',
                            '19px'
                        ],
                        [
                            "eid267",
                            "height",
                            1167,
                            250,
                            "linear",
                            "${Rectangle2_1}",
                            '2px',
                            '223px'
                        ],
                        [
                            "eid277",
                            "height",
                            1625,
                            250,
                            "linear",
                            "${Rectangle2_1}",
                            '223px',
                            '19px'
                        ],
                        [
                            "eid265",
                            "width",
                            958,
                            208,
                            "linear",
                            "${Rectangle2_2}",
                            '19px',
                            '564px'
                        ],
                        [
                            "eid279",
                            "width",
                            1417,
                            208,
                            "linear",
                            "${Rectangle2_2}",
                            '564px',
                            '3px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("system1_edgeActions.js");
})("EDGE-19188744");
