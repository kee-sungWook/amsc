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
                            id: 'steering',
                            type: 'image',
                            tag: 'img',
                            rect: ['1266', '318', '244', '205', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"steering.png"],
                            transform: [[],['50']]
                        },
                        {
                            id: 'back',
                            type: 'image',
                            tag: 'img',
                            rect: ['1030', '442', '513', '699', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png"]
                        },
                        {
                            id: 'MD',
                            symbolName: 'MD',
                            type: 'rect',
                            rect: ['1362', '568', '141', '197', 'auto', 'auto']
                        },
                        {
                            id: 'myTire_ISIDE_L',
                            symbolName: 'myTire_ISIDE',
                            display: 'block',
                            type: 'rect',
                            rect: ['256px', '765px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'myTire_ISIDE_R',
                            symbolName: 'myTire_ISIDE',
                            display: 'none',
                            type: 'rect',
                            rect: ['1875px', '765px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'MOVER_CLIP',
                            symbolName: 'MOVER_CLIP',
                            type: 'rect',
                            rect: ['567', '971', '1426', '157', 'auto', 'auto']
                        },
                        {
                            id: 'myTire_Oside_R',
                            symbolName: 'myTire_Oside',
                            display: 'block',
                            type: 'rect',
                            rect: ['1875px', '765px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'myTire_Oside_L',
                            symbolName: 'myTire_Oside',
                            display: 'none',
                            type: 'rect',
                            rect: ['256px', '765px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'tire_center',
                            display: 'block',
                            type: 'image',
                            rect: ['362px', '765px', '218px', '604px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tire_center.gif",'0px','0px']
                        },
                        {
                            id: 'tire_centerCopy',
                            display: 'block',
                            type: 'image',
                            rect: ['1981px', '765px', '218px', '604px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tire_center.gif",'0px','0px']
                        },
                        {
                            id: 'another',
                            type: 'image',
                            tag: 'img',
                            rect: ['1007', '1025', '558', '84', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"another.png"]
                        },
                        {
                            id: 'car',
                            type: 'image',
                            tag: 'img',
                            rect: ['408', '180', '1744', '1080', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '207', '207', 'auto', 'auto'],
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
                    duration: 5917,
                    autoPlay: true,
                    data: [
                        [
                            "eid361",
                            "rotateZ",
                            500,
                            792,
                            "linear",
                            "${steering}",
                            '0deg',
                            '-50deg'
                        ],
                        [
                            "eid363",
                            "rotateZ",
                            2041,
                            792,
                            "linear",
                            "${steering}",
                            '-50deg',
                            '0deg'
                        ],
                        [
                            "eid364",
                            "rotateZ",
                            3583,
                            792,
                            "linear",
                            "${steering}",
                            '0deg',
                            '50deg'
                        ],
                        [
                            "eid366",
                            "rotateZ",
                            5125,
                            792,
                            "linear",
                            "${steering}",
                            '50deg',
                            '0deg'
                        ],
                        [
                            "eid408",
                            "display",
                            500,
                            0,
                            "linear",
                            "${tire_center}",
                            'block',
                            'none'
                        ],
                        [
                            "eid411",
                            "display",
                            2833,
                            0,
                            "linear",
                            "${tire_center}",
                            'none',
                            'block'
                        ],
                        [
                            "eid413",
                            "display",
                            3600,
                            0,
                            "linear",
                            "${tire_center}",
                            'block',
                            'none'
                        ],
                        [
                            "eid415",
                            "display",
                            5917,
                            0,
                            "linear",
                            "${tire_center}",
                            'none',
                            'block'
                        ],
                        [
                            "eid395",
                            "display",
                            0,
                            0,
                            "linear",
                            "${myTire_Oside_L}",
                            'none',
                            'none'
                        ],
                        [
                            "eid397",
                            "display",
                            3583,
                            0,
                            "linear",
                            "${myTire_Oside_L}",
                            'none',
                            'block'
                        ],
                        [
                            "eid409",
                            "display",
                            500,
                            0,
                            "linear",
                            "${tire_centerCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid410",
                            "display",
                            2833,
                            0,
                            "linear",
                            "${tire_centerCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid412",
                            "display",
                            3600,
                            0,
                            "linear",
                            "${tire_centerCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid414",
                            "display",
                            5917,
                            0,
                            "linear",
                            "${tire_centerCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid400",
                            "display",
                            3583,
                            0,
                            "linear",
                            "${myTire_ISIDE_L}",
                            'block',
                            'none'
                        ],
                        [
                            "eid399",
                            "display",
                            3583,
                            0,
                            "linear",
                            "${myTire_Oside_R}",
                            'block',
                            'none'
                        ],
                        [
                            "eid442",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${steering}",
                            [50,65.5],
                            [50,65.5],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid468",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${steering}",
                            [50,65.5],
                            [50,65.5],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid469",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${steering}",
                            [50,65.5],
                            [50,65.5],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid470",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${steering}",
                            [50,65.5],
                            [50,65.5],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid471",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${steering}",
                            [50,65.5],
                            [50,65.5],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid472",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${steering}",
                            [50,65.5],
                            [50,65.5],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid396",
                            "display",
                            0,
                            0,
                            "linear",
                            "${myTire_ISIDE_R}",
                            'none',
                            'none'
                        ],
                        [
                            "eid398",
                            "display",
                            3583,
                            0,
                            "linear",
                            "${myTire_ISIDE_R}",
                            'none',
                            'block'
                        ],
                            [ "eid388", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${myTire_Oside_R}', [0] ] ],
                            [ "eid387", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${myTire_ISIDE_L}', [0] ] ],
                            [ "eid402", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${myTire_Oside_L}', [0] ] ],
                            [ "eid416", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MOVER_CLIP}', [0] ] ],
                            [ "eid401", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${myTire_ISIDE_R}', [0] ] ],
                            [ "eid389", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${myTire_Oside_R}', [] ] ],
                            [ "eid390", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${myTire_ISIDE_L}', [] ] ],
                            [ "eid371", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${MOVER_CLIP}', ['goL'] ] ],
                            [ "eid417", "trigger", 1292, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MOVER_CLIP}', [] ] ],
                            [ "eid392", "trigger", 2041, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${myTire_Oside_R}', [] ] ],
                            [ "eid391", "trigger", 2041, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${myTire_ISIDE_L}', [] ] ],
                            [ "eid372", "trigger", 2041.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${MOVER_CLIP}', ['reL'] ] ],
                            [ "eid418", "trigger", 2833, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MOVER_CLIP}', [] ] ],
                            [ "eid404", "trigger", 3583, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${myTire_ISIDE_R}', [] ] ],
                            [ "eid403", "trigger", 3583, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${myTire_Oside_L}', [] ] ],
                            [ "eid373", "trigger", 3583, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${MOVER_CLIP}', ['goR'] ] ],
                            [ "eid419", "trigger", 4375, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MOVER_CLIP}', [] ] ],
                            [ "eid406", "trigger", 5125, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${myTire_ISIDE_R}', [] ] ],
                            [ "eid405", "trigger", 5125, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${myTire_Oside_L}', [] ] ],
                            [ "eid374", "trigger", 5125, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${MOVER_CLIP}', ['reR'] ] ],
                            [ "eid420", "trigger", 5917, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MOVER_CLIP}', [] ] ]
                    ]
                }
            },
            "MOVER_CLIP": {
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
                            fill: ['rgba(0,0,0,0)', 'images/joint2.png'],
                            id: 'joint2',
                            rect: ['997px', '37px', '210px', '118', 'auto', 'auto'],
                            transform: [[], [], [], [], ['0%']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/joint1.png'],
                            id: 'joint1',
                            rect: ['330px', '37px', '112px', '118', 'auto', 'auto'],
                            transform: [[], [], [], [], ['100%']],
                            tag: 'img'
                        },
                        {
                            rect: ['50px', '65px', '1426', '62', 'auto', 'auto'],
                            id: 'mover',
                            fill: ['rgba(0,0,0,0)', 'images/mover.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jointLine2.png'],
                            id: 'jointLine2',
                            rect: ['994px', '35px', '218px', '122', 'auto', 'auto'],
                            transform: [[], [], [], [], ['0%']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/jointLine1.png'],
                            id: 'jointLine1',
                            rect: ['329px', '35px', '115px', '122', 'auto', 'auto'],
                            transform: [[], [], [], [], ['100%']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wormGear.png'],
                            id: 'wormGear',
                            rect: ['786px', '0px', '73', '74', 'auto', 'auto'],
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1426px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 3792,
                    autoPlay: false,
                    labels: {
                        "goL": 0,
                        "reL": 1000,
                        "goR": 2000,
                        "reR": 3000
                    },
                    data: [
                        [
                            "eid316",
                            "width",
                            0,
                            792,
                            "linear",
                            "${jointLine1}",
                            '167px',
                            '217px'
                        ],
                        [
                            "eid331",
                            "width",
                            1000,
                            792,
                            "linear",
                            "${jointLine1}",
                            '217px',
                            '167px'
                        ],
                        [
                            "eid339",
                            "width",
                            2000,
                            792,
                            "linear",
                            "${jointLine1}",
                            '167px',
                            '115px'
                        ],
                        [
                            "eid355",
                            "width",
                            3000,
                            792,
                            "linear",
                            "${jointLine1}",
                            '115px',
                            '167px'
                        ],
                        [
                            "eid308",
                            "rotateZ",
                            0,
                            792,
                            "linear",
                            "${wormGear}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid329",
                            "rotateZ",
                            1000,
                            792,
                            "linear",
                            "${wormGear}",
                            '90deg',
                            '0deg'
                        ],
                        [
                            "eid337",
                            "rotateZ",
                            2000,
                            792,
                            "linear",
                            "${wormGear}",
                            '0deg',
                            '-90deg'
                        ],
                        [
                            "eid353",
                            "rotateZ",
                            3000,
                            792,
                            "linear",
                            "${wormGear}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid318",
                            "width",
                            0,
                            792,
                            "linear",
                            "${joint1}",
                            '163px',
                            '212px'
                        ],
                        [
                            "eid335",
                            "width",
                            1000,
                            792,
                            "linear",
                            "${joint1}",
                            '212px',
                            '163px'
                        ],
                        [
                            "eid343",
                            "width",
                            2000,
                            792,
                            "linear",
                            "${joint1}",
                            '163px',
                            '112px'
                        ],
                        [
                            "eid359",
                            "width",
                            3000,
                            792,
                            "linear",
                            "${joint1}",
                            '112px',
                            '163px'
                        ],
                        [
                            "eid320",
                            "width",
                            0,
                            792,
                            "linear",
                            "${joint2}",
                            '162px',
                            '111px'
                        ],
                        [
                            "eid336",
                            "width",
                            1000,
                            792,
                            "linear",
                            "${joint2}",
                            '111px',
                            '162px'
                        ],
                        [
                            "eid344",
                            "width",
                            2000,
                            792,
                            "linear",
                            "${joint2}",
                            '162px',
                            '210px'
                        ],
                        [
                            "eid360",
                            "width",
                            3000,
                            792,
                            "linear",
                            "${joint2}",
                            '210px',
                            '162px'
                        ],
                        [
                            "eid317",
                            "left",
                            0,
                            792,
                            "linear",
                            "${joint1}",
                            '279px',
                            '230px'
                        ],
                        [
                            "eid334",
                            "left",
                            1000,
                            792,
                            "linear",
                            "${joint1}",
                            '230px',
                            '279px'
                        ],
                        [
                            "eid342",
                            "left",
                            2000,
                            792,
                            "linear",
                            "${joint1}",
                            '279px',
                            '330px'
                        ],
                        [
                            "eid358",
                            "left",
                            3000,
                            792,
                            "linear",
                            "${joint1}",
                            '330px',
                            '279px'
                        ],
                        [
                            "eid307",
                            "left",
                            0,
                            792,
                            "linear",
                            "${mover}",
                            '0px',
                            '-50px'
                        ],
                        [
                            "eid333",
                            "left",
                            1000,
                            792,
                            "linear",
                            "${mover}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid341",
                            "left",
                            2000,
                            792,
                            "linear",
                            "${mover}",
                            '0px',
                            '50px'
                        ],
                        [
                            "eid357",
                            "left",
                            3000,
                            792,
                            "linear",
                            "${mover}",
                            '50px',
                            '0px'
                        ],
                        [
                            "eid315",
                            "left",
                            0,
                            792,
                            "linear",
                            "${jointLine1}",
                            '277px',
                            '227px'
                        ],
                        [
                            "eid330",
                            "left",
                            1000,
                            792,
                            "linear",
                            "${jointLine1}",
                            '227px',
                            '277px'
                        ],
                        [
                            "eid338",
                            "left",
                            2000,
                            792,
                            "linear",
                            "${jointLine1}",
                            '277px',
                            '329px'
                        ],
                        [
                            "eid354",
                            "left",
                            3000,
                            792,
                            "linear",
                            "${jointLine1}",
                            '329px',
                            '277px'
                        ],
                        [
                            "eid319",
                            "width",
                            0,
                            792,
                            "linear",
                            "${jointLine2}",
                            '168px',
                            '115px'
                        ],
                        [
                            "eid332",
                            "width",
                            1000,
                            792,
                            "linear",
                            "${jointLine2}",
                            '115px',
                            '168px'
                        ],
                        [
                            "eid340",
                            "width",
                            2000,
                            792,
                            "linear",
                            "${jointLine2}",
                            '168px',
                            '218px'
                        ],
                        [
                            "eid356",
                            "width",
                            3000,
                            792,
                            "linear",
                            "${jointLine2}",
                            '218px',
                            '168px'
                        ]
                    ]
                }
            },
            "myTire_Oside": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['104px', '0px', '220px', '2460px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'myTire',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/myTire.png', '-2521px', '-604px', '4096px', '2460px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '429px', '604px']
                        }
                    }
                },
                timeline: {
                    duration: 792,
                    autoPlay: false,
                    data: [
                        [
                            "eid623",
                            "width",
                            0,
                            0,
                            "linear",
                            "${myTire}",
                            '220px',
                            '220px'
                        ],
                        [
                            "eid627",
                            "width",
                            42,
                            0,
                            "linear",
                            "${myTire}",
                            '231px',
                            '243px'
                        ],
                        [
                            "eid621",
                            "width",
                            84,
                            0,
                            "linear",
                            "${myTire}",
                            '243px',
                            '243px'
                        ],
                        [
                            "eid620",
                            "width",
                            126,
                            0,
                            "linear",
                            "${myTire}",
                            '243px',
                            '256px'
                        ],
                        [
                            "eid619",
                            "width",
                            167,
                            0,
                            "linear",
                            "${myTire}",
                            '256px',
                            '270px'
                        ],
                        [
                            "eid618",
                            "width",
                            209,
                            0,
                            "linear",
                            "${myTire}",
                            '270px',
                            '282px'
                        ],
                        [
                            "eid617",
                            "width",
                            251,
                            0,
                            "linear",
                            "${myTire}",
                            '282px',
                            '294px'
                        ],
                        [
                            "eid616",
                            "width",
                            292,
                            0,
                            "linear",
                            "${myTire}",
                            '294px',
                            '304px'
                        ],
                        [
                            "eid615",
                            "width",
                            334,
                            0,
                            "linear",
                            "${myTire}",
                            '304px',
                            '315px'
                        ],
                        [
                            "eid614",
                            "width",
                            376,
                            0,
                            "linear",
                            "${myTire}",
                            '315px',
                            '326px'
                        ],
                        [
                            "eid613",
                            "width",
                            417,
                            0,
                            "linear",
                            "${myTire}",
                            '326px',
                            '336px'
                        ],
                        [
                            "eid612",
                            "width",
                            459,
                            0,
                            "linear",
                            "${myTire}",
                            '336px',
                            '348px'
                        ],
                        [
                            "eid611",
                            "width",
                            501,
                            0,
                            "linear",
                            "${myTire}",
                            '348px',
                            '358px'
                        ],
                        [
                            "eid610",
                            "width",
                            542,
                            0,
                            "linear",
                            "${myTire}",
                            '358px',
                            '370px'
                        ],
                        [
                            "eid609",
                            "width",
                            584,
                            0,
                            "linear",
                            "${myTire}",
                            '370px',
                            '379px'
                        ],
                        [
                            "eid608",
                            "width",
                            626,
                            0,
                            "linear",
                            "${myTire}",
                            '379px',
                            '390px'
                        ],
                        [
                            "eid607",
                            "width",
                            667,
                            0,
                            "linear",
                            "${myTire}",
                            '390px',
                            '400px'
                        ],
                        [
                            "eid606",
                            "width",
                            709,
                            0,
                            "linear",
                            "${myTire}",
                            '400px',
                            '410px'
                        ],
                        [
                            "eid605",
                            "width",
                            751,
                            0,
                            "linear",
                            "${myTire}",
                            '410px',
                            '420px'
                        ],
                        [
                            "eid625",
                            "width",
                            792,
                            0,
                            "linear",
                            "${myTire}",
                            '420px',
                            '429px'
                        ],
                        [
                            "eid547",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${myTire}",
                            [-2521,-604],
                            [-2521,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid628",
                            "background-position",
                            42,
                            0,
                            "linear",
                            "${myTire}",
                            [-2290,-604],
                            [-2047,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid545",
                            "background-position",
                            84,
                            0,
                            "linear",
                            "${myTire}",
                            [-2047,-604],
                            [-2047,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid544",
                            "background-position",
                            126,
                            0,
                            "linear",
                            "${myTire}",
                            [-2047,-604],
                            [-1791,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid543",
                            "background-position",
                            167,
                            0,
                            "linear",
                            "${myTire}",
                            [-1791,-604],
                            [-1521,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid542",
                            "background-position",
                            209,
                            0,
                            "linear",
                            "${myTire}",
                            [-1521,-604],
                            [-1239,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid541",
                            "background-position",
                            251,
                            0,
                            "linear",
                            "${myTire}",
                            [-1239,-604],
                            [-945,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid540",
                            "background-position",
                            292,
                            0,
                            "linear",
                            "${myTire}",
                            [-945,-604],
                            [-641,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid539",
                            "background-position",
                            334,
                            0,
                            "linear",
                            "${myTire}",
                            [-641,-604],
                            [-326,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid538",
                            "background-position",
                            376,
                            0,
                            "linear",
                            "${myTire}",
                            [-326,-604],
                            [0,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid537",
                            "background-position",
                            417,
                            0,
                            "linear",
                            "${myTire}",
                            [0,-604],
                            [-3504,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid536",
                            "background-position",
                            459,
                            0,
                            "linear",
                            "${myTire}",
                            [-3504,0],
                            [-3156,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid535",
                            "background-position",
                            501,
                            0,
                            "linear",
                            "${myTire}",
                            [-3156,0],
                            [-2798,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid534",
                            "background-position",
                            542,
                            0,
                            "linear",
                            "${myTire}",
                            [-2798,0],
                            [-2428,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid533",
                            "background-position",
                            584,
                            0,
                            "linear",
                            "${myTire}",
                            [-2428,0],
                            [-2049,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid532",
                            "background-position",
                            626,
                            0,
                            "linear",
                            "${myTire}",
                            [-2049,0],
                            [-1659,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid531",
                            "background-position",
                            667,
                            0,
                            "linear",
                            "${myTire}",
                            [-1659,0],
                            [-1259,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid530",
                            "background-position",
                            709,
                            0,
                            "linear",
                            "${myTire}",
                            [-1259,0],
                            [-849,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid529",
                            "background-position",
                            751,
                            0,
                            "linear",
                            "${myTire}",
                            [-849,0],
                            [-429,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid626",
                            "background-position",
                            792,
                            0,
                            "linear",
                            "${myTire}",
                            [-429,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${myTire}",
                            '0px',
                            '604px'
                        ],
                        [
                            "eid604",
                            "left",
                            0,
                            0,
                            "linear",
                            "${myTire}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid629",
                            "left",
                            42,
                            0,
                            "linear",
                            "${myTire}",
                            '104px',
                            '93px'
                        ],
                        [
                            "eid602",
                            "left",
                            84,
                            0,
                            "linear",
                            "${myTire}",
                            '93px',
                            '93px'
                        ],
                        [
                            "eid601",
                            "left",
                            126,
                            0,
                            "linear",
                            "${myTire}",
                            '93px',
                            '86px'
                        ],
                        [
                            "eid600",
                            "left",
                            167,
                            0,
                            "linear",
                            "${myTire}",
                            '86px',
                            '79px'
                        ],
                        [
                            "eid599",
                            "left",
                            209,
                            0,
                            "linear",
                            "${myTire}",
                            '79px',
                            '73px'
                        ],
                        [
                            "eid598",
                            "left",
                            251,
                            0,
                            "linear",
                            "${myTire}",
                            '73px',
                            '67px'
                        ],
                        [
                            "eid597",
                            "left",
                            292,
                            0,
                            "linear",
                            "${myTire}",
                            '67px',
                            '62px'
                        ],
                        [
                            "eid596",
                            "left",
                            334,
                            0,
                            "linear",
                            "${myTire}",
                            '62px',
                            '57px'
                        ],
                        [
                            "eid595",
                            "left",
                            376,
                            0,
                            "linear",
                            "${myTire}",
                            '57px',
                            '51px'
                        ],
                        [
                            "eid594",
                            "left",
                            417,
                            0,
                            "linear",
                            "${myTire}",
                            '51px',
                            '46px'
                        ],
                        [
                            "eid593",
                            "left",
                            459,
                            0,
                            "linear",
                            "${myTire}",
                            '46px',
                            '40px'
                        ],
                        [
                            "eid592",
                            "left",
                            501,
                            0,
                            "linear",
                            "${myTire}",
                            '40px',
                            '35px'
                        ],
                        [
                            "eid591",
                            "left",
                            542,
                            0,
                            "linear",
                            "${myTire}",
                            '35px',
                            '29px'
                        ],
                        [
                            "eid590",
                            "left",
                            584,
                            0,
                            "linear",
                            "${myTire}",
                            '29px',
                            '25px'
                        ],
                        [
                            "eid589",
                            "left",
                            626,
                            0,
                            "linear",
                            "${myTire}",
                            '25px',
                            '19px'
                        ],
                        [
                            "eid588",
                            "left",
                            667,
                            0,
                            "linear",
                            "${myTire}",
                            '19px',
                            '14px'
                        ],
                        [
                            "eid587",
                            "left",
                            709,
                            0,
                            "linear",
                            "${myTire}",
                            '14px',
                            '9px'
                        ],
                        [
                            "eid586",
                            "left",
                            751,
                            0,
                            "linear",
                            "${myTire}",
                            '9px',
                            '4px'
                        ],
                        [
                            "eid624",
                            "left",
                            792,
                            0,
                            "linear",
                            "${myTire}",
                            '4px',
                            '0px'
                        ]
                    ]
                }
            },
            "myTire_ISIDE": {
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
                            id: 'myTire',
                            rect: ['0px', '0px', '4096px', '2460px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/myTire.png', '0px', '0px', '4096px', '2460px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '429px', '604px']
                        }
                    }
                },
                timeline: {
                    duration: 792,
                    autoPlay: false,
                    data: [
                        [
                            "eid59",
                            "width",
                            0,
                            0,
                            "linear",
                            "${myTire}",
                            '231px',
                            '220px'
                        ],
                        [
                            "eid62",
                            "width",
                            42,
                            0,
                            "linear",
                            "${myTire}",
                            '220px',
                            '231px'
                        ],
                        [
                            "eid65",
                            "width",
                            84,
                            0,
                            "linear",
                            "${myTire}",
                            '231px',
                            '243px'
                        ],
                        [
                            "eid68",
                            "width",
                            125,
                            0,
                            "linear",
                            "${myTire}",
                            '243px',
                            '256px'
                        ],
                        [
                            "eid71",
                            "width",
                            167,
                            0,
                            "linear",
                            "${myTire}",
                            '256px',
                            '270px'
                        ],
                        [
                            "eid74",
                            "width",
                            209,
                            0,
                            "linear",
                            "${myTire}",
                            '270px',
                            '282px'
                        ],
                        [
                            "eid77",
                            "width",
                            250,
                            0,
                            "linear",
                            "${myTire}",
                            '282px',
                            '294px'
                        ],
                        [
                            "eid80",
                            "width",
                            292,
                            0,
                            "linear",
                            "${myTire}",
                            '294px',
                            '304px'
                        ],
                        [
                            "eid83",
                            "width",
                            334,
                            0,
                            "linear",
                            "${myTire}",
                            '304px',
                            '315px'
                        ],
                        [
                            "eid86",
                            "width",
                            375,
                            0,
                            "linear",
                            "${myTire}",
                            '315px',
                            '326px'
                        ],
                        [
                            "eid89",
                            "width",
                            417,
                            0,
                            "linear",
                            "${myTire}",
                            '326px',
                            '336px'
                        ],
                        [
                            "eid92",
                            "width",
                            459,
                            0,
                            "linear",
                            "${myTire}",
                            '336px',
                            '348px'
                        ],
                        [
                            "eid95",
                            "width",
                            500,
                            0,
                            "linear",
                            "${myTire}",
                            '348px',
                            '358px'
                        ],
                        [
                            "eid98",
                            "width",
                            542,
                            0,
                            "linear",
                            "${myTire}",
                            '358px',
                            '370px'
                        ],
                        [
                            "eid101",
                            "width",
                            584,
                            0,
                            "linear",
                            "${myTire}",
                            '370px',
                            '379px'
                        ],
                        [
                            "eid104",
                            "width",
                            625,
                            0,
                            "linear",
                            "${myTire}",
                            '379px',
                            '390px'
                        ],
                        [
                            "eid107",
                            "width",
                            667,
                            0,
                            "linear",
                            "${myTire}",
                            '390px',
                            '400px'
                        ],
                        [
                            "eid110",
                            "width",
                            709,
                            0,
                            "linear",
                            "${myTire}",
                            '400px',
                            '410px'
                        ],
                        [
                            "eid113",
                            "width",
                            750,
                            0,
                            "linear",
                            "${myTire}",
                            '410px',
                            '420px'
                        ],
                        [
                            "eid116",
                            "width",
                            792,
                            0,
                            "linear",
                            "${myTire}",
                            '420px',
                            '429px'
                        ],
                        [
                            "eid60",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${myTire}",
                            [-2290,-604],
                            [-2521,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid63",
                            "background-position",
                            42,
                            0,
                            "linear",
                            "${myTire}",
                            [-2521,-604],
                            [-2741,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid66",
                            "background-position",
                            84,
                            0,
                            "linear",
                            "${myTire}",
                            [-2741,-604],
                            [-2972,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid69",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${myTire}",
                            [-2972,-604],
                            [-3215,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid72",
                            "background-position",
                            167,
                            0,
                            "linear",
                            "${myTire}",
                            [-3215,-604],
                            [-3471,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid75",
                            "background-position",
                            209,
                            0,
                            "linear",
                            "${myTire}",
                            [-3471,-604],
                            [-3741,-604],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid78",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${myTire}",
                            [-3741,-604],
                            [0,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid81",
                            "background-position",
                            292,
                            0,
                            "linear",
                            "${myTire}",
                            [0,-1208],
                            [-294,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid84",
                            "background-position",
                            334,
                            0,
                            "linear",
                            "${myTire}",
                            [-294,-1208],
                            [-598,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid87",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${myTire}",
                            [-598,-1208],
                            [-913,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid90",
                            "background-position",
                            417,
                            0,
                            "linear",
                            "${myTire}",
                            [-913,-1208],
                            [-1239,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid93",
                            "background-position",
                            459,
                            0,
                            "linear",
                            "${myTire}",
                            [-1239,-1208],
                            [-1575,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid96",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${myTire}",
                            [-1575,-1208],
                            [-1923,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid99",
                            "background-position",
                            542,
                            0,
                            "linear",
                            "${myTire}",
                            [-1923,-1208],
                            [-2281,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid102",
                            "background-position",
                            584,
                            0,
                            "linear",
                            "${myTire}",
                            [-2281,-1208],
                            [-2651,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid105",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${myTire}",
                            [-2651,-1208],
                            [-3030,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid108",
                            "background-position",
                            667,
                            0,
                            "linear",
                            "${myTire}",
                            [-3030,-1208],
                            [-3420,-1208],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid111",
                            "background-position",
                            709,
                            0,
                            "linear",
                            "${myTire}",
                            [-3420,-1208],
                            [0,-1812],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid114",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${myTire}",
                            [0,-1812],
                            [-410,-1812],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid117",
                            "background-position",
                            792,
                            0,
                            "linear",
                            "${myTire}",
                            [-410,-1812],
                            [-830,-1812],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${myTire}",
                            '0px',
                            '604px'
                        ],
                        [
                            "eid58",
                            "left",
                            0,
                            0,
                            "linear",
                            "${myTire}",
                            '99px',
                            '104px'
                        ],
                        [
                            "eid61",
                            "left",
                            42,
                            0,
                            "linear",
                            "${myTire}",
                            '104px',
                            '99px'
                        ],
                        [
                            "eid64",
                            "left",
                            84,
                            0,
                            "linear",
                            "${myTire}",
                            '99px',
                            '93px'
                        ],
                        [
                            "eid67",
                            "left",
                            125,
                            0,
                            "linear",
                            "${myTire}",
                            '93px',
                            '86px'
                        ],
                        [
                            "eid70",
                            "left",
                            167,
                            0,
                            "linear",
                            "${myTire}",
                            '86px',
                            '79px'
                        ],
                        [
                            "eid73",
                            "left",
                            209,
                            0,
                            "linear",
                            "${myTire}",
                            '79px',
                            '73px'
                        ],
                        [
                            "eid76",
                            "left",
                            250,
                            0,
                            "linear",
                            "${myTire}",
                            '73px',
                            '67px'
                        ],
                        [
                            "eid79",
                            "left",
                            292,
                            0,
                            "linear",
                            "${myTire}",
                            '67px',
                            '62px'
                        ],
                        [
                            "eid82",
                            "left",
                            334,
                            0,
                            "linear",
                            "${myTire}",
                            '62px',
                            '57px'
                        ],
                        [
                            "eid85",
                            "left",
                            375,
                            0,
                            "linear",
                            "${myTire}",
                            '57px',
                            '51px'
                        ],
                        [
                            "eid88",
                            "left",
                            417,
                            0,
                            "linear",
                            "${myTire}",
                            '51px',
                            '46px'
                        ],
                        [
                            "eid91",
                            "left",
                            459,
                            0,
                            "linear",
                            "${myTire}",
                            '46px',
                            '40px'
                        ],
                        [
                            "eid94",
                            "left",
                            500,
                            0,
                            "linear",
                            "${myTire}",
                            '40px',
                            '35px'
                        ],
                        [
                            "eid97",
                            "left",
                            542,
                            0,
                            "linear",
                            "${myTire}",
                            '35px',
                            '29px'
                        ],
                        [
                            "eid100",
                            "left",
                            584,
                            0,
                            "linear",
                            "${myTire}",
                            '29px',
                            '25px'
                        ],
                        [
                            "eid103",
                            "left",
                            625,
                            0,
                            "linear",
                            "${myTire}",
                            '25px',
                            '19px'
                        ],
                        [
                            "eid106",
                            "left",
                            667,
                            0,
                            "linear",
                            "${myTire}",
                            '19px',
                            '14px'
                        ],
                        [
                            "eid109",
                            "left",
                            709,
                            0,
                            "linear",
                            "${myTire}",
                            '14px',
                            '9px'
                        ],
                        [
                            "eid112",
                            "left",
                            750,
                            0,
                            "linear",
                            "${myTire}",
                            '9px',
                            '4px'
                        ],
                        [
                            "eid115",
                            "left",
                            792,
                            0,
                            "linear",
                            "${myTire}",
                            '4px',
                            '0px'
                        ]
                    ]
                }
            },
            "MD": {
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
                            id: 'LINE',
                            symbolName: 'LINE',
                            rect: ['58', '65', '75', '41', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '141', '197', 'auto', 'auto'],
                            id: 'md_body',
                            fill: ['rgba(0,0,0,0)', 'images/md_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'LIGHT',
                            symbolName: 'LIGHT',
                            rect: ['62', '32', '64', '17', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '197px']
                        }
                    }
                },
                timeline: {
                    duration: 233,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "LIGHT": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '15', '17', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/md_light.png'],
                            id: 'md_light',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['25px', '0px', '15', '17', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/md_light.png'],
                            id: 'md_lightCopy',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['49px', '0px', '15', '17', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/md_light.png'],
                            id: 'md_lightCopy2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '17px']
                        }
                    }
                },
                timeline: {
                    duration: 967,
                    autoPlay: true,
                    data: [
                        [
                            "eid422",
                            "opacity",
                            233,
                            233,
                            "linear",
                            "${md_lightCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid431",
                            "opacity",
                            500,
                            233,
                            "linear",
                            "${md_lightCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid424",
                            "opacity",
                            467,
                            233,
                            "linear",
                            "${md_light}",
                            '0',
                            '1'
                        ],
                        [
                            "eid432",
                            "opacity",
                            734,
                            233,
                            "linear",
                            "${md_light}",
                            '1',
                            '0'
                        ],
                        [
                            "eid426",
                            "opacity",
                            0,
                            233,
                            "linear",
                            "${md_lightCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid430",
                            "opacity",
                            267,
                            233,
                            "linear",
                            "${md_lightCopy2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "LINE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-8px', '0px', '75', '41', 'auto', 'auto'],
                            id: 'md_line',
                            fill: ['rgba(0,0,0,0)', 'images/md_line.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '75px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 267,
                    autoPlay: true,
                    data: [
                        [
                            "eid433",
                            "left",
                            0,
                            267,
                            "linear",
                            "${md_line}",
                            '0px',
                            '-8px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort3_edgeActions.js");
})("EDGE-4227444");
