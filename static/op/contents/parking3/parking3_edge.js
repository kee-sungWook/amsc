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
                            id: 'extra_carCopy',
                            type: 'image',
                            tag: 'img',
                            rect: ['-99px', '907', '846', '392', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"extra_car.png"]
                        },
                        {
                            id: 'extra_car',
                            type: 'image',
                            tag: 'img',
                            rect: ['1927px', '907', '846', '392', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"extra_car.png"]
                        },
                        {
                            id: 'p_area',
                            type: 'image',
                            tag: 'img',
                            rect: ['866', '937', '947', '362', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p_area.png"]
                        },
                        {
                            id: 'guide_arrow',
                            type: 'image',
                            tag: 'img',
                            rect: ['940', '601', '538', '570', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"guide_arrow.png"]
                        },
                        {
                            id: 'CAR',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['685px', '729px', '1300px', '769', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'MEMO',
                            symbolName: 'MEMO',
                            type: 'rect',
                            rect: ['442px', '198px', '952', '522', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'steering',
                            type: 'image',
                            rect: ['514px', '262px', '319px', '313px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"steering.png",'0px','0px'],
                            transform: [[],['60']]
                        },
                        {
                            id: 'BTN_CLIP',
                            symbolName: 'BTN_CLIP',
                            type: 'rect',
                            rect: ['1046', '311', '1007', '2024', 'auto', 'auto'],
                            opacity: '1'
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
                    duration: 17250,
                    autoPlay: true,
                    data: [
                        [
                            "eid151",
                            "rotateZ",
                            10500,
                            667,
                            "linear",
                            "${steering}",
                            '0deg',
                            '65deg'
                        ],
                        [
                            "eid152",
                            "rotateZ",
                            11750,
                            1250,
                            "linear",
                            "${steering}",
                            '65deg',
                            '-65deg'
                        ],
                        [
                            "eid153",
                            "rotateZ",
                            13501,
                            749,
                            "linear",
                            "${steering}",
                            '-65deg',
                            '60deg'
                        ],
                        [
                            "eid154",
                            "rotateZ",
                            14866,
                            717,
                            "linear",
                            "${steering}",
                            '60deg',
                            '0deg'
                        ],
                        [
                            "eid175",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid176",
                            "opacity",
                            17000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid36",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${guide_arrow}",
                            '0',
                            '0'
                        ],
                        [
                            "eid105",
                            "opacity",
                            7995,
                            267,
                            "linear",
                            "${guide_arrow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid124",
                            "opacity",
                            8294,
                            267,
                            "linear",
                            "${guide_arrow}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid125",
                            "opacity",
                            8594,
                            267,
                            "linear",
                            "${guide_arrow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            8894,
                            267,
                            "linear",
                            "${guide_arrow}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid127",
                            "opacity",
                            9194,
                            267,
                            "linear",
                            "${guide_arrow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid128",
                            "opacity",
                            9494,
                            267,
                            "linear",
                            "${guide_arrow}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid61",
                            "left",
                            250,
                            4250,
                            "linear",
                            "${CAR}",
                            '-1123px',
                            '1297px'
                        ],
                        [
                            "eid137",
                            "left",
                            10500,
                            1083,
                            "linear",
                            "${CAR}",
                            '1297px',
                            '1037px'
                        ],
                        [
                            "eid139",
                            "left",
                            11750,
                            1583,
                            "linear",
                            "${CAR}",
                            '1037px',
                            '596px'
                        ],
                        [
                            "eid145",
                            "left",
                            14333,
                            533,
                            "linear",
                            "${CAR}",
                            '596px',
                            '685px'
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${CAR}",
                            '1',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            5750,
                            0,
                            "easeOutQuad",
                            "${CAR}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "opacity",
                            7167,
                            250,
                            "easeOutQuad",
                            "${CAR}",
                            '0',
                            '1'
                        ],
                        [
                            "eid177",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${CAR}",
                            [20,50],
                            [20,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid356",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${CAR}",
                            [20,50],
                            [20,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid357",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${CAR}",
                            [20,50],
                            [20,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid358",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutQuad",
                            "${CAR}",
                            [20,50],
                            [20,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid359",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${CAR}",
                            [20,50],
                            [20,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid360",
                            "transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${CAR}",
                            [20,50],
                            [20,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid67",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${extra_carCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            5750,
                            0,
                            "easeOutQuad",
                            "${extra_carCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            7167,
                            250,
                            "easeOutQuad",
                            "${extra_carCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "top",
                            10500,
                            1083,
                            "linear",
                            "${CAR}",
                            '233px',
                            '645px'
                        ],
                        [
                            "eid140",
                            "top",
                            11750,
                            1583,
                            "linear",
                            "${CAR}",
                            '645px',
                            '729px'
                        ],
                        [
                            "eid134",
                            "rotateZ",
                            10500,
                            1083,
                            "linear",
                            "${CAR}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid141",
                            "rotateZ",
                            11750,
                            1583,
                            "linear",
                            "${CAR}",
                            '-30deg',
                            '-6deg'
                        ],
                        [
                            "eid144",
                            "rotateZ",
                            14333,
                            533,
                            "linear",
                            "${CAR}",
                            '-6deg',
                            '0deg'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${p_area}",
                            '0',
                            '0'
                        ],
                        [
                            "eid99",
                            "opacity",
                            3458,
                            250,
                            "linear",
                            "${p_area}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            3750,
                            250,
                            "linear",
                            "${p_area}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid102",
                            "opacity",
                            4042,
                            250,
                            "linear",
                            "${p_area}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            4333,
                            250,
                            "linear",
                            "${p_area}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid104",
                            "opacity",
                            4625,
                            250,
                            "linear",
                            "${p_area}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            4917,
                            250,
                            "linear",
                            "${p_area}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid334",
                            "opacity",
                            5208,
                            250,
                            "linear",
                            "${p_area}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid335",
                            "opacity",
                            5500,
                            250,
                            "linear",
                            "${p_area}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid66",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${extra_car}",
                            '1',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            5750,
                            0,
                            "easeOutQuad",
                            "${extra_car}",
                            '1',
                            '0'
                        ],
                        [
                            "eid77",
                            "opacity",
                            7167,
                            250,
                            "easeOutQuad",
                            "${extra_car}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            10000,
                            250,
                            "linear",
                            "${steering}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${MEMO}",
                            '0',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            10000,
                            250,
                            "linear",
                            "${MEMO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${BTN_CLIP}",
                            '0',
                            '0'
                        ],
                        [
                            "eid55",
                            "opacity",
                            5750,
                            292,
                            "linear",
                            "${BTN_CLIP}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            7167,
                            250,
                            "linear",
                            "${BTN_CLIP}",
                            '1',
                            '0'
                        ],
                        [
                            "eid245",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid174",
                            "opacity",
                            17000,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                            [ "eid45", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${BTN_CLIP}', [0] ] ],
                            [ "eid229", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR}', [] ] ],
                            [ "eid306", "trigger", 5750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR}', [0] ] ],
                            [ "eid46", "trigger", 6041.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BTN_CLIP}', [] ] ],
                            [ "eid107", "trigger", 7541.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR}', [] ] ],
                            [ "eid322", "trigger", 14866, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR}', [0] ] ]
                    ]
                }
            },
            "MEMO": {
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
                            id: 'memo_back',
                            tag: 'img',
                            rect: ['0px', '0px', '952', '522', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/memo_back.png']
                        },
                        {
                            font: ['Arial', [100, ''], 'rgba(140,142,144,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'AUTO-MOVING',
                            text: 'AUTO\rMOVING',
                            align: 'center',
                            rect: ['340px', '94px', '612px', '248', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '952px', '522px']
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
            "CAR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['189px', '168px', '926', '436', 'auto', 'auto'],
                            id: 'car_body',
                            fill: ['rgba(0,0,0,0)', 'images/car_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            id: 'SIGNAL',
                            symbolName: 'SIGNAL',
                            rect: ['144', '353', '18', '65', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL2',
                            symbolName: 'SIGNAL',
                            transform: [[], ['45']],
                            rect: ['253px', '152px', '18', '65', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL3',
                            symbolName: 'SIGNAL',
                            transform: [[], ['90']],
                            rect: ['638px', '121px', '18', '65', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL4',
                            symbolName: 'SIGNAL',
                            transform: [[], ['-45']],
                            rect: ['253px', '555px', '18', '65', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL5',
                            symbolName: 'SIGNAL',
                            transform: [[], ['-90']],
                            rect: ['638px', '586px', '18', '65', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL6',
                            symbolName: 'SIGNAL',
                            transform: [[], ['180']],
                            rect: ['1140px', '353', '18', '65', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL7',
                            symbolName: 'SIGNAL',
                            transform: [[], ['-232']],
                            rect: ['1075px', '152px', '18', '65', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SIGNAL8',
                            symbolName: 'SIGNAL',
                            transform: [[], ['232']],
                            rect: ['1075px', '555px', '18', '65', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1300px', '769px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 609,
                    autoPlay: false,
                    data: [
                            [ "eid108", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL5}', [] ] ],
                            [ "eid112", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL4}', [] ] ],
                            [ "eid361", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL6}', [] ] ],
                            [ "eid362", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL7}', [] ] ],
                            [ "eid109", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL}', [] ] ],
                            [ "eid111", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL2}', [] ] ],
                            [ "eid110", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL3}', [] ] ],
                            [ "eid363", "trigger", 41.666666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL8}', [] ] ]
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
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_src',
                            opacity: '0',
                            rect: ['-17px', '-60px', '52', '186', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy3',
                            opacity: '0',
                            rect: ['-17px', '-60px', '52', '186', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy4',
                            opacity: '0',
                            rect: ['-17px', '-60px', '52', '186', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy5',
                            opacity: '0',
                            rect: ['-17px', '-60px', '52', '186', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src.png'],
                            type: 'image',
                            id: 'signal_srcCopy6',
                            opacity: '0',
                            rect: ['-17px', '-60px', '52', '186', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '18px', '65px']
                        }
                    }
                },
                timeline: {
                    duration: 567,
                    autoPlay: false,
                    data: [
                        [
                            "eid80",
                            "opacity",
                            67,
                            27,
                            "linear",
                            "${signal_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            339,
                            27,
                            "linear",
                            "${signal_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid82",
                            "scaleY",
                            67,
                            300,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${signal_src}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            133,
                            27,
                            "linear",
                            "${signal_srcCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            406,
                            27,
                            "linear",
                            "${signal_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid97",
                            "left",
                            267,
                            300,
                            "linear",
                            "${signal_srcCopy6}",
                            '-17px',
                            '-144px'
                        ],
                        [
                            "eid87",
                            "left",
                            133,
                            300,
                            "linear",
                            "${signal_srcCopy4}",
                            '-17px',
                            '-144px'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            300,
                            "linear",
                            "${signal_src}",
                            '-17px',
                            '-144px'
                        ],
                        [
                            "eid92",
                            "left",
                            200,
                            300,
                            "linear",
                            "${signal_srcCopy5}",
                            '-17px',
                            '-144px'
                        ],
                        [
                            "eid94",
                            "scaleX",
                            267,
                            300,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid98",
                            "scaleY",
                            267,
                            300,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid84",
                            "scaleX",
                            133,
                            300,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            27,
                            "linear",
                            "${signal_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            272,
                            27,
                            "linear",
                            "${signal_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid90",
                            "opacity",
                            200,
                            27,
                            "linear",
                            "${signal_srcCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            472,
                            27,
                            "linear",
                            "${signal_srcCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "left",
                            67,
                            300,
                            "linear",
                            "${signal_srcCopy3}",
                            '-17px',
                            '-144px'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            200,
                            300,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${signal_src}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            133,
                            300,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid89",
                            "scaleX",
                            200,
                            300,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.35',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            267,
                            27,
                            "linear",
                            "${signal_srcCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            539,
                            27,
                            "linear",
                            "${signal_srcCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "scaleX",
                            67,
                            300,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.35',
                            '1'
                        ]
                    ]
                }
            },
            "BTN_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '457', '494', 'auto', 'auto'],
                            id: 'btn_back',
                            fill: ['rgba(0,0,0,0)', 'images/btn_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['37px', '54px', '369', '393', 'auto', 'auto'],
                            id: 'btn_body',
                            fill: ['rgba(0,0,0,0)', 'images/btn_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['41px', '58px', '361', '385', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_red.png'],
                            id: 'btn_red',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['128px', '283px', '703', '1319', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hand.png'],
                            id: 'hand',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1007px', '2024px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid41",
                            "scaleX",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_body}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_body}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            0,
                            0,
                            "easeOutQuad",
                            "${btn_body}",
                            '1',
                            '1'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_body}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_body}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            633,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '1.2',
                            '1.1'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            833,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '1.1',
                            '1.2'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${btn_red}",
                            '0',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '0',
                            '0.3'
                        ],
                        [
                            "eid49",
                            "opacity",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '0.3',
                            '0'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            667,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            833,
                            133,
                            "easeOutQuad",
                            "${btn_red}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleX",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            633,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '1.2',
                            '1.1'
                        ],
                        [
                            "eid60",
                            "scaleX",
                            833,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '1.1',
                            '1.2'
                        ],
                        [
                            "eid27",
                            "top",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '705px',
                            '283px'
                        ],
                        [
                            "eid37",
                            "top",
                            633,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '283px',
                            '233px'
                        ],
                        [
                            "eid57",
                            "top",
                            833,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '233px',
                            '283px'
                        ],
                        [
                            "eid29",
                            "left",
                            0,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '304px',
                            '128px'
                        ],
                        [
                            "eid36",
                            "left",
                            633,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '128px',
                            '96px'
                        ],
                        [
                            "eid58",
                            "left",
                            833,
                            167,
                            "easeOutQuad",
                            "${hand}",
                            '96px',
                            '128px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("parking3_edgeActions.js");
})("EDGE-19255143");
