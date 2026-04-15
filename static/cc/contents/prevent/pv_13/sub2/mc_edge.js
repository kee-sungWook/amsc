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
                            id: 'btn1',
                            symbolName: 'btn1',
                            type: 'rect',
                            rect: ['75px', '416px', '450', '124', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'btn2',
                            symbolName: 'btn2',
                            type: 'rect',
                            rect: ['675px', '411px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'btn3',
                            symbolName: 'btn3',
                            type: 'rect',
                            rect: ['1275px', '416px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'btn4',
                            symbolName: 'btn4',
                            type: 'rect',
                            rect: ['1875px', '416px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'btn5',
                            symbolName: 'btn5',
                            type: 'rect',
                            rect: ['75px', '1026px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'btn6',
                            symbolName: 'btn6',
                            type: 'rect',
                            rect: ['675px', '1026px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'btn7',
                            symbolName: 'btn7',
                            type: 'rect',
                            rect: ['1275px', '1026px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'btn8',
                            symbolName: 'btn8',
                            type: 'rect',
                            rect: ['1875px', '1026px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'abrs_pyunc',
                            type: 'image',
                            tag: 'img',
                            rect: ['205px', '-4px', '190', '344', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"abrs_pyunc.png"]
                        },
                        {
                            id: 'abrs_joki',
                            type: 'image',
                            tag: 'img',
                            rect: ['805px', '-4px', '190', '344', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"abrs_joki.png"]
                        },
                        {
                            id: 'abrs_shoulder',
                            type: 'image',
                            tag: 'img',
                            rect: ['1405px', '-4px', '190', '344', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"abrs_shoulder.png"]
                        },
                        {
                            id: 'abrs_feather',
                            type: 'image',
                            tag: 'img',
                            rect: ['2005px', '-4px', '190', '344', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"abrs_feather.png"]
                        },
                        {
                            id: 'abrs_dancha',
                            type: 'image',
                            tag: 'img',
                            rect: ['205px', '606px', '190', '344', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"abrs_dancha.png"]
                        },
                        {
                            id: 'abrs_oval',
                            type: 'image',
                            tag: 'img',
                            rect: ['805px', '606px', '190', '344', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"abrs_oval.png"]
                        },
                        {
                            id: 'abrs_brakingRock',
                            type: 'image',
                            tag: 'img',
                            rect: ['1405px', '606px', '190', '344', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"abrs_brakingRock.png"]
                        },
                        {
                            id: 'abrs_mid',
                            type: 'image',
                            tag: 'img',
                            rect: ['2005px', '606px', '190', '344', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"abrs_mid.png"]
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
                    duration: 1167,
                    autoPlay: true,
                    data: [
                        [
                            "eid19",
                            "scaleX",
                            583,
                            292,
                            "linear",
                            "${btn8}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid96",
                            "scaleY",
                            927,
                            37,
                            "linear",
                            "${abrs_oval}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid104",
                            "scaleY",
                            964,
                            36,
                            "linear",
                            "${abrs_oval}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid117",
                            "-webkit-transform-origin",
                            375,
                            0,
                            "linear",
                            "${abrs_joki}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid398",
                            "-moz-transform-origin",
                            375,
                            0,
                            "linear",
                            "${abrs_joki}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid399",
                            "-ms-transform-origin",
                            375,
                            0,
                            "linear",
                            "${abrs_joki}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid400",
                            "msTransformOrigin",
                            375,
                            0,
                            "linear",
                            "${abrs_joki}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid401",
                            "-o-transform-origin",
                            375,
                            0,
                            "linear",
                            "${abrs_joki}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid402",
                            "transform-origin",
                            375,
                            0,
                            "linear",
                            "${abrs_joki}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57",
                            "opacity",
                            333,
                            292,
                            "linear",
                            "${btn5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "top",
                            875,
                            219,
                            "linear",
                            "${abrs_mid}",
                            '606px',
                            '656px'
                        ],
                        [
                            "eid37",
                            "scaleY",
                            333,
                            292,
                            "linear",
                            "${btn5}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid63",
                            "top",
                            292,
                            219,
                            "linear",
                            "${abrs_pyunc}",
                            '-4px',
                            '46px'
                        ],
                        [
                            "eid53",
                            "opacity",
                            167,
                            292,
                            "linear",
                            "${btn3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid115",
                            "-webkit-transform-origin",
                            542,
                            0,
                            "linear",
                            "${abrs_feather}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid403",
                            "-moz-transform-origin",
                            542,
                            0,
                            "linear",
                            "${abrs_feather}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid404",
                            "-ms-transform-origin",
                            542,
                            0,
                            "linear",
                            "${abrs_feather}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid405",
                            "msTransformOrigin",
                            542,
                            0,
                            "linear",
                            "${abrs_feather}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid406",
                            "-o-transform-origin",
                            542,
                            0,
                            "linear",
                            "${abrs_feather}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid407",
                            "transform-origin",
                            542,
                            0,
                            "linear",
                            "${abrs_feather}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid71",
                            "top",
                            792,
                            219,
                            "linear",
                            "${abrs_brakingRock}",
                            '606px',
                            '656px'
                        ],
                        [
                            "eid15",
                            "scaleX",
                            83,
                            292,
                            "linear",
                            "${btn2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            333,
                            292,
                            "linear",
                            "${btn5}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            583,
                            292,
                            "linear",
                            "${btn8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "scaleY",
                            594,
                            37,
                            "linear",
                            "${abrs_joki}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid105",
                            "scaleY",
                            631,
                            36,
                            "linear",
                            "${abrs_joki}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            417,
                            292,
                            "linear",
                            "${btn6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "-webkit-transform-origin",
                            625,
                            0,
                            "linear",
                            "${abrs_dancha}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid408",
                            "-moz-transform-origin",
                            625,
                            0,
                            "linear",
                            "${abrs_dancha}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid409",
                            "-ms-transform-origin",
                            625,
                            0,
                            "linear",
                            "${abrs_dancha}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid410",
                            "msTransformOrigin",
                            625,
                            0,
                            "linear",
                            "${abrs_dancha}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid411",
                            "-o-transform-origin",
                            625,
                            0,
                            "linear",
                            "${abrs_dancha}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid412",
                            "transform-origin",
                            625,
                            0,
                            "linear",
                            "${abrs_dancha}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid100",
                            "scaleY",
                            761,
                            37,
                            "linear",
                            "${abrs_feather}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid108",
                            "scaleY",
                            797,
                            36,
                            "linear",
                            "${abrs_feather}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            500,
                            292,
                            "linear",
                            "${btn7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "scaleX",
                            167,
                            292,
                            "linear",
                            "${btn3}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid95",
                            "scaleY",
                            1094,
                            37,
                            "linear",
                            "${abrs_mid}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid103",
                            "scaleY",
                            1131,
                            36,
                            "linear",
                            "${abrs_mid}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            459,
                            219,
                            "linear",
                            "${abrs_shoulder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid116",
                            "-webkit-transform-origin",
                            459,
                            0,
                            "linear",
                            "${abrs_shoulder}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid413",
                            "-moz-transform-origin",
                            459,
                            0,
                            "linear",
                            "${abrs_shoulder}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid414",
                            "-ms-transform-origin",
                            459,
                            0,
                            "linear",
                            "${abrs_shoulder}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid415",
                            "msTransformOrigin",
                            459,
                            0,
                            "linear",
                            "${abrs_shoulder}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid416",
                            "-o-transform-origin",
                            459,
                            0,
                            "linear",
                            "${abrs_shoulder}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid417",
                            "transform-origin",
                            459,
                            0,
                            "linear",
                            "${abrs_shoulder}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid73",
                            "top",
                            459,
                            219,
                            "linear",
                            "${abrs_shoulder}",
                            '-4px',
                            '46px'
                        ],
                        [
                            "eid67",
                            "top",
                            709,
                            219,
                            "linear",
                            "${abrs_oval}",
                            '606px',
                            '656px'
                        ],
                        [
                            "eid21",
                            "scaleY",
                            583,
                            292,
                            "linear",
                            "${btn8}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            417,
                            292,
                            "linear",
                            "${btn6}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            375,
                            219,
                            "linear",
                            "${abrs_joki}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            792,
                            219,
                            "linear",
                            "${abrs_brakingRock}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            875,
                            219,
                            "linear",
                            "${abrs_mid}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            500,
                            292,
                            "linear",
                            "${btn7}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            292,
                            "linear",
                            "${btn1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            250,
                            292,
                            "linear",
                            "${btn4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            250,
                            292,
                            "linear",
                            "${btn4}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            83,
                            292,
                            "linear",
                            "${btn2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "scaleY",
                            1011,
                            37,
                            "linear",
                            "${abrs_brakingRock}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid106",
                            "scaleY",
                            1047,
                            36,
                            "linear",
                            "${abrs_brakingRock}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid75",
                            "top",
                            542,
                            219,
                            "linear",
                            "${abrs_feather}",
                            '-4px',
                            '46px'
                        ],
                        [
                            "eid77",
                            "top",
                            625,
                            219,
                            "linear",
                            "${abrs_dancha}",
                            '606px',
                            '656px'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            500,
                            292,
                            "linear",
                            "${btn7}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid111",
                            "-webkit-transform-origin",
                            875,
                            0,
                            "linear",
                            "${abrs_mid}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid418",
                            "-moz-transform-origin",
                            875,
                            0,
                            "linear",
                            "${abrs_mid}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid419",
                            "-ms-transform-origin",
                            875,
                            0,
                            "linear",
                            "${abrs_mid}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid420",
                            "msTransformOrigin",
                            875,
                            0,
                            "linear",
                            "${abrs_mid}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid421",
                            "-o-transform-origin",
                            875,
                            0,
                            "linear",
                            "${abrs_mid}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid422",
                            "transform-origin",
                            875,
                            0,
                            "linear",
                            "${abrs_mid}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid45",
                            "scaleY",
                            417,
                            292,
                            "linear",
                            "${btn6}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            292,
                            219,
                            "linear",
                            "${abrs_pyunc}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "-webkit-transform-origin",
                            709,
                            0,
                            "linear",
                            "${abrs_oval}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid423",
                            "-moz-transform-origin",
                            709,
                            0,
                            "linear",
                            "${abrs_oval}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid424",
                            "-ms-transform-origin",
                            709,
                            0,
                            "linear",
                            "${abrs_oval}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid425",
                            "msTransformOrigin",
                            709,
                            0,
                            "linear",
                            "${abrs_oval}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid426",
                            "-o-transform-origin",
                            709,
                            0,
                            "linear",
                            "${abrs_oval}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid427",
                            "transform-origin",
                            709,
                            0,
                            "linear",
                            "${abrs_oval}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41",
                            "scaleY",
                            0,
                            292,
                            "linear",
                            "${btn1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            542,
                            219,
                            "linear",
                            "${abrs_feather}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "-webkit-transform-origin",
                            292,
                            0,
                            "linear",
                            "${abrs_pyunc}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid428",
                            "-moz-transform-origin",
                            292,
                            0,
                            "linear",
                            "${abrs_pyunc}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid429",
                            "-ms-transform-origin",
                            292,
                            0,
                            "linear",
                            "${abrs_pyunc}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid430",
                            "msTransformOrigin",
                            292,
                            0,
                            "linear",
                            "${abrs_pyunc}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid431",
                            "-o-transform-origin",
                            292,
                            0,
                            "linear",
                            "${abrs_pyunc}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid432",
                            "transform-origin",
                            292,
                            0,
                            "linear",
                            "${abrs_pyunc}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid17",
                            "scaleY",
                            83,
                            292,
                            "linear",
                            "${btn2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid101",
                            "scaleY",
                            844,
                            37,
                            "linear",
                            "${abrs_dancha}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid109",
                            "scaleY",
                            881,
                            36,
                            "linear",
                            "${abrs_dancha}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid29",
                            "scaleY",
                            167,
                            292,
                            "linear",
                            "${btn3}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            625,
                            219,
                            "linear",
                            "${abrs_dancha}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            0,
                            292,
                            "linear",
                            "${btn1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid69",
                            "top",
                            375,
                            219,
                            "linear",
                            "${abrs_joki}",
                            '-4px',
                            '46px'
                        ],
                        [
                            "eid83",
                            "opacity",
                            709,
                            219,
                            "linear",
                            "${abrs_oval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "scaleY",
                            677,
                            37,
                            "linear",
                            "${abrs_shoulder}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid107",
                            "scaleY",
                            714,
                            36,
                            "linear",
                            "${abrs_shoulder}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid25",
                            "scaleY",
                            250,
                            292,
                            "linear",
                            "${btn4}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid112",
                            "-webkit-transform-origin",
                            792,
                            0,
                            "linear",
                            "${abrs_brakingRock}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid433",
                            "-moz-transform-origin",
                            792,
                            0,
                            "linear",
                            "${abrs_brakingRock}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid434",
                            "-ms-transform-origin",
                            792,
                            0,
                            "linear",
                            "${abrs_brakingRock}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid435",
                            "msTransformOrigin",
                            792,
                            0,
                            "linear",
                            "${abrs_brakingRock}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid436",
                            "-o-transform-origin",
                            792,
                            0,
                            "linear",
                            "${abrs_brakingRock}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid437",
                            "transform-origin",
                            792,
                            0,
                            "linear",
                            "${abrs_brakingRock}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid94",
                            "scaleY",
                            511,
                            37,
                            "linear",
                            "${abrs_pyunc}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            547,
                            36,
                            "linear",
                            "${abrs_pyunc}",
                            '0.9',
                            '1'
                        ],
                            [ "eid6", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn1}', [0] ] ],
                            [ "eid7", "trigger", 83.333333333337, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn2}', [0] ] ],
                            [ "eid12", "trigger", 166.66666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn3}', [0] ] ],
                            [ "eid11", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn4}', [0] ] ],
                            [ "eid8", "trigger", 333.33333333334, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn5}', [0] ] ],
                            [ "eid9", "trigger", 416.66666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn6}', [0] ] ],
                            [ "eid10", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn7}', [0] ] ],
                            [ "eid13", "trigger", 583.33333333334, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn8}', [0] ] ]
                    ]
                }
            },
            "btn1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '446px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '27px', '450px', '85px', 'auto', 'auto'],
                            id: 'btnTxt',
                            text: '<p style=\"margin: 0px; text-align: center;\">편마모</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgba(0,75,141,1.00)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "nm": 0,
                        "over": 1000,
                        "ov": 1000
                    },
                    data: [
                        [
                            "eid5",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ]
                    ]
                }
            },
            "btn2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '446px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '27px', '450px', '85px', 'auto', 'auto'],
                            id: 'btnTxt',
                            text: '<p style=\"margin: 0px; text-align: center;\">조기마모</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgba(0,75,141,1.00)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "nm": 0,
                        "over": 1000,
                        "ov": 1000
                    },
                    data: [
                        [
                            "eid5",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ]
                    ]
                }
            },
            "btn3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '446px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '27px', '450px', '85px', 'auto', 'auto'],
                            id: 'btnTxt',
                            text: '<p style=\"margin: 0px; text-align: center;\">숄더마모</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgba(0,75,141,1.00)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "nm": 0,
                        "over": 1000,
                        "ov": 1000
                    },
                    data: [
                        [
                            "eid5",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ]
                    ]
                }
            },
            "btn4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '446px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '27px', '450px', '85px', 'auto', 'auto'],
                            id: 'btnTxt',
                            text: '<p style=\"margin: 0px; text-align: center;\">깃털마모</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgba(0,75,141,1.00)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "nm": 0,
                        "over": 1000,
                        "ov": 1000
                    },
                    data: [
                        [
                            "eid5",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ]
                    ]
                }
            },
            "btn5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '446px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '27px', '450px', '85px', 'auto', 'auto'],
                            id: 'btnTxt',
                            text: '<p style=\"margin: 0px; text-align: center;\">단차마모</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgba(0,75,141,1.00)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "nm": 0,
                        "over": 1000,
                        "ov": 1000
                    },
                    data: [
                        [
                            "eid5",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ]
                    ]
                }
            },
            "btn6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '446px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '27px', '450px', '85px', 'auto', 'auto'],
                            id: 'btnTxt',
                            text: '<p style=\"margin: 0px; text-align: center;\">원형마모</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgba(0,75,141,1.00)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "nm": 0,
                        "over": 1000,
                        "ov": 1000
                    },
                    data: [
                        [
                            "eid5",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ]
                    ]
                }
            },
            "btn7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '446px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '27px', '450px', '85px', 'auto', 'auto'],
                            id: 'btnTxt',
                            text: '<p style=\"margin: 0px; text-align: center;\">&nbsp; &nbsp;브레이킹록</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgba(0,75,141,1.00)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "nm": 0,
                        "over": 1000,
                        "ov": 1000
                    },
                    data: [
                        [
                            "eid5",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ]
                    ]
                }
            },
            "btn8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '446px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '27px', '450px', '85px', 'auto', 'auto'],
                            id: 'btnTxt',
                            text: '<p style=\"margin: 0px; text-align: center;\">중앙마모</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgba(0,75,141,1.00)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "nm": 0,
                        "over": 1000,
                        "ov": 1000
                    },
                    data: [
                        [
                            "eid5",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt}",
                            'rgba(0,75,141,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-73065678");
