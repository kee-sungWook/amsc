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
                            id: 'txt3_2',
                            type: 'text',
                            rect: ['1672px', '1038px', '532px', '60', 'auto', 'auto'],
                            opacity: '0',
                            text: "고가의 합성유",
                            align: "center",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt3_1',
                            type: 'text',
                            rect: ['1704px', '910px', '468px', '61', 'auto', 'auto'],
                            opacity: '0',
                            text: "PAO 합성유",
                            align: "center",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "700", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2_2',
                            type: 'text',
                            rect: ['882px', '1038px', '638px', '93px', 'auto', 'auto'],
                            opacity: '0',
                            text: "대부분의 엔진오일\r",
                            align: "center",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2_1',
                            type: 'text',
                            rect: ['1045px', '910px', '310px', '61', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">합성유​</p>",
                            align: "center",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "700", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1_2',
                            type: 'text',
                            rect: ['196px', '1000px', '514px', '180px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">가격이 저렴하나 </p><p style=\"margin:0px\">성능이 떨어짐​</p>",
                            align: "center",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "66px", "", ""]
                        },
                        {
                            id: 'txt1_1',
                            type: 'text',
                            rect: ['378px', '910px', '150px', '61', 'auto', 'auto'],
                            opacity: '0',
                            text: "광유",
                            align: "center",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "700", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'oil3',
                            type: 'image',
                            tag: 'img',
                            rect: ['1722px', '16px', '439', '746px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"oil3.png"]
                        },
                        {
                            id: 'oil2',
                            type: 'image',
                            tag: 'img',
                            rect: ['985px', '16px', '439', '746px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"oil2.png"]
                        },
                        {
                            id: 'oil1',
                            type: 'image',
                            tag: 'img',
                            rect: ['237px', '16px', '439', '747px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"oil1.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2400px', '1230px', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1167,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "scaleY",
                            375,
                            83,
                            "linear",
                            "${oil1}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            458,
                            84,
                            "linear",
                            "${oil1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid49",
                            "top",
                            375,
                            375,
                            "easeInQuad",
                            "${txt1_2}",
                            '1000px',
                            '1038px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            375,
                            "easeInQuad",
                            "${oil1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "top",
                            792,
                            365,
                            "easeInQuad",
                            "${txt3_2}",
                            '1038px',
                            '1078px'
                        ],
                        [
                            "eid109",
                            "top",
                            1157,
                            10,
                            "linear",
                            "${txt3_2}",
                            '1078px',
                            '1078px'
                        ],
                        [
                            "eid12",
                            "top",
                            417,
                            375,
                            "easeInQuad",
                            "${oil3}",
                            '16px',
                            '112px'
                        ],
                        [
                            "eid55",
                            "opacity",
                            584,
                            375,
                            "easeInQuad",
                            "${txt2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            792,
                            375,
                            "easeInQuad",
                            "${txt3_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${oil1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid110",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${oil1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid111",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${oil1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid112",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${oil1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid113",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${oil1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid114",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${oil1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57",
                            "opacity",
                            417,
                            375,
                            "easeInQuad",
                            "${txt2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "left",
                            208,
                            375,
                            "easeInQuad",
                            "${oil2}",
                            '985px',
                            '981px'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            375,
                            "easeInQuad",
                            "${oil1}",
                            '16px',
                            '112px'
                        ],
                        [
                            "eid10",
                            "left",
                            417,
                            375,
                            "easeInQuad",
                            "${oil3}",
                            '1722px',
                            '1718px'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            791,
                            83,
                            "linear",
                            "${oil3}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            874,
                            84,
                            "linear",
                            "${oil3}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid45",
                            "top",
                            417,
                            375,
                            "easeInQuad",
                            "${txt2_1}",
                            '910px',
                            '958px'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            375,
                            "easeInQuad",
                            "${oil1}",
                            '237px',
                            '233px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            417,
                            375,
                            "easeInQuad",
                            "${oil3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "scaleY",
                            583,
                            83,
                            "linear",
                            "${oil2}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            666,
                            84,
                            "linear",
                            "${oil2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            375,
                            375,
                            "easeInQuad",
                            "${txt1_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "top",
                            625,
                            375,
                            "easeInQuad",
                            "${txt3_1}",
                            '910px',
                            '950px'
                        ],
                        [
                            "eid41",
                            "top",
                            208,
                            375,
                            "easeInQuad",
                            "${txt1_1}",
                            '910px',
                            '950px'
                        ],
                        [
                            "eid43",
                            "top",
                            584,
                            375,
                            "easeInQuad",
                            "${txt2_2}",
                            '1038px',
                            '1078px'
                        ],
                        [
                            "eid53",
                            "opacity",
                            208,
                            375,
                            "easeInQuad",
                            "${txt1_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            208,
                            375,
                            "easeInQuad",
                            "${oil2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            625,
                            375,
                            "easeInQuad",
                            "${txt3_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "top",
                            208,
                            375,
                            "easeInQuad",
                            "${oil2}",
                            '16px',
                            '112px'
                        ],
                        [
                            "eid26",
                            "-webkit-transform-origin",
                            208,
                            0,
                            "linear",
                            "${oil2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid115",
                            "-moz-transform-origin",
                            208,
                            0,
                            "linear",
                            "${oil2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid116",
                            "-ms-transform-origin",
                            208,
                            0,
                            "linear",
                            "${oil2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid117",
                            "msTransformOrigin",
                            208,
                            0,
                            "linear",
                            "${oil2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid118",
                            "-o-transform-origin",
                            208,
                            0,
                            "linear",
                            "${oil2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid119",
                            "transform-origin",
                            208,
                            0,
                            "linear",
                            "${oil2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid27",
                            "-webkit-transform-origin",
                            417,
                            0,
                            "linear",
                            "${oil3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid120",
                            "-moz-transform-origin",
                            417,
                            0,
                            "linear",
                            "${oil3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid121",
                            "-ms-transform-origin",
                            417,
                            0,
                            "linear",
                            "${oil3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid122",
                            "msTransformOrigin",
                            417,
                            0,
                            "linear",
                            "${oil3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid123",
                            "-o-transform-origin",
                            417,
                            0,
                            "linear",
                            "${oil3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid139",
                            "transform-origin",
                            417,
                            0,
                            "linear",
                            "${oil3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-2873517");
