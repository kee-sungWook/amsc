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
                            rect: ['83px', '91px', '2426', '182', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png"]
                        },
                        {
                            id: 'LAMP_CLIP',
                            symbolName: 'LAMP_CLIP',
                            type: 'rect',
                            rect: ['-108', '35', '106', '265', 'auto', 'auto']
                        },
                        {
                            id: 'road',
                            type: 'image',
                            tag: 'img',
                            rect: ['-2px', '263px', '2564', '1177', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.png"]
                        },
                        {
                            id: 'LINE_CLIP',
                            symbolName: 'LINE_CLIP',
                            type: 'rect',
                            rect: ['-433', '654', '3012', '395', 'auto', 'auto']
                        },
                        {
                            id: 'CAR',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['2008px', '566px', '1335', '426', 'auto', 'auto']
                        },
                        {
                            id: 'GAGE',
                            symbolName: 'GAGE',
                            type: 'rect',
                            rect: ['787', '53', '545', '579', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'PEDAL',
                            symbolName: 'PEDAL',
                            type: 'rect',
                            rect: ['1360', '105px', '569', '498', 'auto', 'auto'],
                            opacity: '0'
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
                    duration: 12250,
                    autoPlay: true,
                    data: [
                        [
                            "eid91",
                            "left",
                            0,
                            3367,
                            "linear",
                            "${CAR}",
                            '2008px',
                            '536px'
                        ],
                        [
                            "eid130",
                            "left",
                            7067,
                            2467,
                            "linear",
                            "${CAR}",
                            '536px',
                            '-527px'
                        ],
                        [
                            "eid165",
                            "left",
                            11000,
                            733,
                            "linear",
                            "${CAR}",
                            '-527px',
                            '-1385px'
                        ],
                        [
                            "eid126",
                            "opacity",
                            533,
                            1167,
                            "linear",
                            "${GAGE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            11000,
                            367,
                            "linear",
                            "${GAGE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid124",
                            "opacity",
                            533,
                            1167,
                            "linear",
                            "${PEDAL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            11000,
                            367,
                            "linear",
                            "${PEDAL}",
                            '1',
                            '0'
                        ],
                            [ "eid29", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${LAMP_CLIP}', [] ] ],
                            [ "eid63", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${LINE_CLIP}', [] ] ],
                            [ "eid39", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${LINE_CLIP}', [] ] ],
                            [ "eid64", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${LAMP_CLIP}', [] ] ],
                            [ "eid136", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${PEDAL}', [0] ] ],
                            [ "eid137", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${GAGE}', [0] ] ],
                            [ "eid127", "trigger", 533, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GAGE}', [] ] ],
                            [ "eid128", "trigger", 3266.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PEDAL}', [] ] ],
                            [ "eid129", "trigger", 3967, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${GAGE}', ['on'] ] ],
                            [ "eid131", "trigger", 6000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PEDAL}', ['gogo'] ] ],
                            [ "eid132", "trigger", 7066.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GAGE}', ['high'] ] ],
                            [ "eid135", "trigger", 8702.692626481, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PEDAL}', [] ] ]
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
                            rect: ['0px', '0px', '106', '265', 'auto', 'auto'],
                            id: 'lamp',
                            fill: ['rgba(0,0,0,0)', 'images/lamp.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '106', '265', 'auto', 'auto'],
                            id: 'lampCopy',
                            fill: ['rgba(0,0,0,0)', 'images/lamp.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '106', '265', 'auto', 'auto'],
                            id: 'lampCopy2',
                            fill: ['rgba(0,0,0,0)', 'images/lamp.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '106', '265', 'auto', 'auto'],
                            id: 'lampCopy3',
                            fill: ['rgba(0,0,0,0)', 'images/lamp.png'],
                            type: 'image',
                            tag: 'img'
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
                            isStage: 'true',
                            rect: [undefined, undefined, '3012px', '395px']
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
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png'],
                            id: 'car_shadow',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['571px', '82px', '764', '337', 'auto', 'auto'],
                            id: 'car_body',
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'WHEEL',
                            symbolName: 'WHEEL',
                            rect: ['666', '326', '553', '75', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1335px', '426px']
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
                            rect: ['478px', '13px', '75px', '59px', 'auto', 'auto'],
                            id: 'wheel2',
                            opacity: '0.2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel2.png', '0px', '0px']
                        },
                        {
                            rect: ['3px', '0px', '107px', '72px', 'auto', 'auto'],
                            id: 'wheel1',
                            opacity: '0.2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '110', '75', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel1_2.png'],
                            id: 'wheel1_2',
                            opacity: '0.9',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['3px', '2px', '107', '72', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel1_1.png'],
                            id: 'wheel1_1',
                            opacity: '0.9',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['478px', '13px', '75', '59', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel2_2.png'],
                            id: 'wheel2_2',
                            opacity: '0.9',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['478px', '13px', '75', '59', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel2_1.png'],
                            id: 'wheel2_1',
                            opacity: '0.9',
                            type: 'image',
                            tag: 'img'
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
                            "eid61",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel2}",
                            '0.2',
                            '0.2'
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
                            type: 'image',
                            id: 'pedal_back',
                            tag: 'img',
                            rect: ['7px', '7px', '555', '484', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pedal_back.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'pedal_axccel',
                            rect: ['366px', '54px', '98', '239', 'auto', 'auto'],
                            transform: [[], ['9'], [], ['0.95', '0.95'], ['30%', '16%']],
                            fill: ['rgba(0,0,0,0)', 'images/pedal_axccel.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'pedal_brake',
                            rect: ['132px', '103px', '158', '188', 'auto', 'auto'],
                            transform: [[], [], [], [], ['16%', '10%']],
                            fill: ['rgba(0,0,0,0)', 'images/pedal_brake.png']
                        },
                        {
                            type: 'image',
                            id: 'foot',
                            rect: ['386px', '113px', '466px', '356px', 'auto', 'auto'],
                            transform: [[], ['-6'], [], [], ['50%', '79%']],
                            fill: ['rgba(0,0,0,0)', 'images/foot.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'pedalPic',
                            tag: 'img',
                            rect: ['0px', '0px', '569', '498', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pedalPic.png']
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
                    duration: 2700,
                    autoPlay: false,
                    labels: {
                        "gogo": 1500
                    },
                    data: [
                        [
                            "eid106",
                            "rotateZ",
                            67,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid122",
                            "rotateZ",
                            2200,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid103",
                            "rotateZ",
                            0,
                            500,
                            "easeInQuad",
                            "${foot}",
                            '-6deg',
                            '4deg'
                        ],
                        [
                            "eid119",
                            "rotateZ",
                            2200,
                            500,
                            "linear",
                            "${foot}",
                            '4deg',
                            '-6deg'
                        ],
                        [
                            "eid109",
                            "left",
                            533,
                            667,
                            "linear",
                            "${foot}",
                            '386px',
                            '567px'
                        ],
                        [
                            "eid118",
                            "left",
                            1500,
                            667,
                            "linear",
                            "${foot}",
                            '567px',
                            '386px'
                        ],
                        [
                            "eid108",
                            "scaleY",
                            67,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid121",
                            "scaleY",
                            2200,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid110",
                            "top",
                            533,
                            667,
                            "linear",
                            "${foot}",
                            '113px',
                            '154px'
                        ],
                        [
                            "eid117",
                            "top",
                            1500,
                            667,
                            "linear",
                            "${foot}",
                            '154px',
                            '113px'
                        ],
                        [
                            "eid107",
                            "scaleX",
                            67,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            2200,
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
                            rect: ['138px', '157px', '166', '147', 'auto', 'auto'],
                            transform: [[], ['70']],
                            id: 'gagePin',
                            fill: ['rgba(0,0,0,0)', 'images/gagePin.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'TXT_ON',
                            symbolName: 'TXT_ON',
                            opacity: '0',
                            rect: ['0', '369', '545', '150', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '545px', '579px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: false,
                    labels: {
                        "on": 3500,
                        "high": 4000
                    },
                    data: [
                        [
                            "eid99",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TXT_ON}",
                            '0',
                            '0'
                        ],
                        [
                            "eid100",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${TXT_ON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            4000,
                            0,
                            "linear",
                            "${TXT_ON}",
                            '1',
                            '0'
                        ],
                        [
                            "eid134",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${TXT_ON}",
                            '0',
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
                            "eid211",
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
                            "eid212",
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
                            "eid213",
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
                            "eid214",
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
                            "eid215",
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
                            3000,
                            "linear",
                            "${gagePin}",
                            '0deg',
                            '40deg'
                        ],
                        [
                            "eid102",
                            "rotateZ",
                            4000,
                            2000,
                            "linear",
                            "${gagePin}",
                            '40deg',
                            '70deg'
                        ]
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
                            textStyle: ['', '', '65px', '', ''],
                            rect: ['0px', '0px', '545px', '150', 'auto', 'auto'],
                            font: ['Arial', [65, ''], 'rgba(33,75,141,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            id: 'CRUISE-ON',
                            opacity: '0',
                            text: 'CRUISE<br>ON',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '545px', '150px']
                        }
                    }
                },
                timeline: {
                    duration: 534,
                    autoPlay: true,
                    data: [
                        [
                            "eid95",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${CRUISE-ON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            333,
                            200,
                            "linear",
                            "${CRUISE-ON}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive6_edgeActions.js");
})("EDGE-19188744");
