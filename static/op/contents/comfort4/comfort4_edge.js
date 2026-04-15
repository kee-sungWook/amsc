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
                            id: 'SCENE2',
                            display: 'none',
                            type: 'group',
                            rect: ['296', '323', '3301', '1040', 'auto', 'auto'],
                            c: [
                            {
                                id: 'car_big',
                                type: 'image',
                                tag: 'img',
                                rect: ['1337px', '0px', '2812', '1040', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"car_big.png"]
                            },
                            {
                                id: 'hood',
                                type: 'image',
                                tag: 'img',
                                rect: ['1345px', '136px', '866', '427', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hood.png"],
                                transform: [[],['3']]
                            },
                            {
                                id: 'hood_color',
                                type: 'image',
                                tag: 'img',
                                rect: ['384px', '137px', '864', '426', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"hood_color.png"]
                            },
                            {
                                id: 'dummy2',
                                type: 'image',
                                tag: 'img',
                                rect: ['-134px', '112px', '1097', '760', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"dummy2.png"],
                                transform: [[],['-56']]
                            },
                            {
                                id: 'dummy2_blinker',
                                type: 'image',
                                tag: 'img',
                                rect: ['2px', '49px', '1093', '755', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"dummy2_blinker.png"]
                            }]
                        },
                        {
                            id: 'SCENE1',
                            display: 'block',
                            type: 'group',
                            rect: ['0', '0', '2563', '1442', 'auto', 'auto'],
                            c: [
                            {
                                id: 'landscape',
                                type: 'image',
                                tag: 'img',
                                rect: ['0', '0', '2563', '1442', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"landscape.png"]
                            },
                            {
                                id: 'dummy1',
                                type: 'image',
                                tag: 'img',
                                rect: ['532px', '791px', '170', '415', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"dummy1.png"]
                            },
                            {
                                id: 'dummy1_blinker',
                                type: 'image',
                                tag: 'img',
                                rect: ['375', '864', '169', '413', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"dummy1_blinker.png"]
                            },
                            {
                                id: 'CAR_CLIP1',
                                symbolName: 'CAR_CLIP',
                                type: 'rect',
                                rect: ['832px', '886px', 'undefined', 'undefined', 'auto', 'auto'],
                                transform: [[],[],[],['0.9','0.9']]
                            }]
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
                            display: 'none',
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
                            rect: ['40', '41', '200', '200', 'auto', 'auto'],
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
                    duration: 9458,
                    autoPlay: true,
                    data: [
                        [
                            "eid187",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid188",
                            "display",
                            9208,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${hood}",
                            [0,94],
                            [0,94],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid256",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${hood}",
                            [0,94],
                            [0,94],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid257",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${hood}",
                            [0,94],
                            [0,94],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid258",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutQuad",
                            "${hood}",
                            [0,94],
                            [0,94],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid259",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${hood}",
                            [0,94],
                            [0,94],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid260",
                            "transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${hood}",
                            [0,94],
                            [0,94],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53",
                            "rotateZ",
                            4708,
                            500,
                            "easeOutQuad",
                            "${hood}",
                            '3deg',
                            '0deg'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            1000,
                            "easeOutQuad",
                            "${CAR_CLIP1}",
                            '832px',
                            '-318px'
                        ],
                        [
                            "eid47",
                            "top",
                            4708,
                            500,
                            "easeOutQuad",
                            "${dummy2}",
                            '112px',
                            '46px'
                        ],
                        [
                            "eid165",
                            "top",
                            7333,
                            417,
                            "easeOutQuad",
                            "${dummy2}",
                            '46px',
                            '204px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${dummy1_blinker}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${dummy1_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2333,
                            250,
                            "linear",
                            "${dummy1_blinker}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            2583,
                            250,
                            "linear",
                            "${dummy1_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "opacity",
                            2917,
                            250,
                            "linear",
                            "${dummy1_blinker}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            3167,
                            250,
                            "linear",
                            "${dummy1_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${dummy1_blinker}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            3750,
                            250,
                            "linear",
                            "${dummy1_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18",
                            "top",
                            1000,
                            750,
                            "linear",
                            "${dummy1}",
                            '791px',
                            '863px'
                        ],
                        [
                            "eid57",
                            "left",
                            4000,
                            500,
                            "easeOutQuad",
                            "${hood}",
                            '1345px',
                            '383px'
                        ],
                        [
                            "eid96",
                            "left",
                            4000,
                            500,
                            "easeOutQuad",
                            "${car_big}",
                            '1337px',
                            '375px'
                        ],
                        [
                            "eid39",
                            "display",
                            4000,
                            0,
                            "easeOutQuad",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            4000,
                            0,
                            "easeOutQuad",
                            "${SCENE2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "left",
                            1000,
                            750,
                            "linear",
                            "${dummy1}",
                            '532px',
                            '374px'
                        ],
                        [
                            "eid45",
                            "left",
                            4708,
                            500,
                            "easeOutQuad",
                            "${dummy2}",
                            '-134px',
                            '0px'
                        ],
                        [
                            "eid164",
                            "left",
                            7333,
                            417,
                            "easeOutQuad",
                            "${dummy2}",
                            '0px',
                            '-360px'
                        ],
                        [
                            "eid189",
                            "opacity",
                            9208,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid186",
                            "opacity",
                            9208,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            5250,
                            208,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            5458,
                            208,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid136",
                            "opacity",
                            5750,
                            208,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "opacity",
                            5958,
                            208,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "opacity",
                            6167,
                            0,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid141",
                            "opacity",
                            6250,
                            208,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            6458,
                            208,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid140",
                            "opacity",
                            6667,
                            0,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "opacity",
                            6750,
                            208,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            6958,
                            208,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid152",
                            "opacity",
                            7167,
                            0,
                            "easeOutQuad",
                            "${dummy2_blinker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid42",
                            "rotateZ",
                            4708,
                            500,
                            "easeOutQuad",
                            "${dummy2}",
                            '-56deg',
                            '0deg'
                        ],
                        [
                            "eid184",
                            "display",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            9208,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "opacity",
                            7333,
                            417,
                            "easeOutQuad",
                            "${dummy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid103",
                            "opacity",
                            5208,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            5417,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid138",
                            "opacity",
                            5750,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            5958,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid135",
                            "opacity",
                            6167,
                            0,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid144",
                            "opacity",
                            6250,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid151",
                            "opacity",
                            6458,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid143",
                            "opacity",
                            6667,
                            0,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            6750,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            6958,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid155",
                            "opacity",
                            7167,
                            0,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid221",
                            "opacity",
                            7250,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid222",
                            "opacity",
                            7458,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid223",
                            "opacity",
                            7792,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "opacity",
                            8000,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid225",
                            "opacity",
                            8208,
                            0,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid226",
                            "opacity",
                            8292,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid228",
                            "opacity",
                            8500,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid230",
                            "opacity",
                            8708,
                            0,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid231",
                            "opacity",
                            8792,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid233",
                            "opacity",
                            9000,
                            208,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid235",
                            "opacity",
                            9208,
                            0,
                            "easeOutQuad",
                            "${hood_color}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${dummy1}",
                            '0',
                            '1'
                        ],
                            [ "eid172", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP1}', [0] ] ],
                            [ "eid173", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP1}', ['sst'] ] ]
                    ]
                }
            },
            "WHEEL_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '126', '110', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel2',
                            display: 'none',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel2.png']
                        },
                        {
                            rect: ['0px', '0px', '126', '110', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel1',
                            display: 'block',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 166.66666666667,
                    autoPlay: false,
                    labels: {
                        "gogo": 33
                    },
                    data: [
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wheel1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            101,
                            0,
                            "linear",
                            "${wheel1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wheel2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            101,
                            0,
                            "linear",
                            "${wheel2}",
                            'none',
                            'block'
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
                            id: 'car_shadow',
                            tag: 'img',
                            rect: ['1169px', '326px', '1123', '161', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car_shadow.png']
                        },
                        {
                            type: 'image',
                            id: 'car',
                            tag: 'img',
                            rect: ['1124px', '16px', '1200', '445', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car.png']
                        },
                        {
                            rect: ['2018px', '334px', '126', '110', 'auto', 'auto'],
                            id: 'WHEEL_CLIP',
                            symbolName: 'WHEEL_CLIP',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['-1']],
                            id: 'WHEEL_CLIPCopy',
                            symbolName: 'WHEEL_CLIP',
                            rect: ['1218px', '330px', '126', '110', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '2560px', '529px']
                        }
                    }
                },
                timeline: {
                    duration: 233,
                    autoPlay: false,
                    labels: {
                        "sst": 233
                    },
                    data: [
                        [
                            "eid207",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${WHEEL_CLIPCopy}",
                            '-1',
                            '-1'
                        ],
                            [ "eid10", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL_CLIPCopy}', ['gogo'] ] ],
                            [ "eid11", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WHEEL_CLIP}', ['gogo'] ] ],
                            [ "eid12", "trigger", 233, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL_CLIPCopy}', [0] ] ],
                            [ "eid13", "trigger", 233, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WHEEL_CLIP}', [0] ] ]
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
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_src',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy3',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy2',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy7',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy6',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy5',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy4',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy15',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy14',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy13',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy12',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1200px', '248px']
                        }
                    }
                },
                timeline: {
                    duration: 2873,
                    autoPlay: false,
                    labels: {
                        "gogo": 1375
                    },
                    data: [
                        [
                            "eid71",
                            "opacity",
                            251,
                            187,
                            "linear",
                            "${signal_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            1564,
                            187,
                            "linear",
                            "${signal_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "scaleY",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid119",
                            "left",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid60",
                            "scaleX",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            875,
                            187,
                            "linear",
                            "${signal_srcCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            2186,
                            187,
                            "linear",
                            "${signal_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "left",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid91",
                            "opacity",
                            500,
                            187,
                            "linear",
                            "${signal_srcCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1811,
                            187,
                            "linear",
                            "${signal_srcCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            0,
                            187,
                            "linear",
                            "${signal_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            1311,
                            187,
                            "linear",
                            "${signal_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            1250,
                            187,
                            "linear",
                            "${signal_srcCopy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            2561,
                            187,
                            "linear",
                            "${signal_srcCopy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid88",
                            "left",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid80",
                            "scaleX",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            624,
                            187,
                            "linear",
                            "${signal_srcCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            1937,
                            187,
                            "linear",
                            "${signal_srcCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "left",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid52",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid128",
                            "left",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            1375,
                            186,
                            "linear",
                            "${signal_srcCopy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            2687,
                            186,
                            "linear",
                            "${signal_srcCopy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1000,
                            187,
                            "linear",
                            "${signal_srcCopy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            2313,
                            187,
                            "linear",
                            "${signal_srcCopy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid123",
                            "left",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "left",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid124",
                            "scaleY",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid94",
                            "left",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid126",
                            "opacity",
                            1125,
                            187,
                            "linear",
                            "${signal_srcCopy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            2436,
                            187,
                            "linear",
                            "${signal_srcCopy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "left",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid85",
                            "scaleX",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            375,
                            187,
                            "linear",
                            "${signal_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            1686,
                            187,
                            "linear",
                            "${signal_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid81",
                            "opacity",
                            749,
                            187,
                            "linear",
                            "${signal_srcCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            2060,
                            187,
                            "linear",
                            "${signal_srcCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "left",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid69",
                            "left",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid61",
                            "opacity",
                            126,
                            187,
                            "linear",
                            "${signal_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            1437,
                            187,
                            "linear",
                            "${signal_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort4_edgeActions.js");
})("EDGE-25766391");
