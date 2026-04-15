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
                            id: 'bat',
                            type: 'image',
                            tag: 'img',
                            rect: ['31px', '146px', '1089', '981px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bat.png"]
                        },
                        {
                            id: 'arrow',
                            type: 'image',
                            tag: 'img',
                            rect: ['610px', '201px', '640', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"arrow.png"]
                        },
                        {
                            id: 'txt2_2',
                            type: 'text',
                            rect: ['1297px', '683px', '1103px', '390', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">배터리 터미널부가 오염 및 부식이 되면 </p><p style=\"margin:0px\">전기의 흐름이 불량해지므로 단자를 분리해</p><p style=\"margin:0px\"> 깨끗이 닥아서 청결하게 유지해야 한다.</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"> </p><p style=\"margin:0px\">배터리 단자가 헐거우면 충전 및 시동불량의</p><p style=\"margin:0px\"> 원인이 될 수 있다.​</p>",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "66px", "", ""]
                        },
                        {
                            id: 'txt2_1',
                            type: 'text',
                            rect: ['1297px', '581px', '383', '62', 'auto', 'auto'],
                            opacity: '0',
                            text: "배터리 관리요령",
                            align: "auto",
                            font: ['나눔고딕 ExtraBold', [55, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1_4',
                            type: 'text',
                            rect: ['1355px', '440px', '242px', '60', 'auto', 'auto'],
                            opacity: '0',
                            text: "정상",
                            align: "left",
                            font: ['나눔고딕', [55, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1_3',
                            type: 'text',
                            rect: ['1597px', '440px', '338px', '60', 'auto', 'auto'],
                            opacity: '0',
                            text: "충전필요",
                            align: "left",
                            font: ['나눔고딕', [55, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1_2',
                            type: 'text',
                            rect: ['1943px', '440px', '234px', '60', 'auto', 'auto'],
                            opacity: '0',
                            text: "교체",
                            align: "left",
                            font: ['나눔고딕', [55, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'marker',
                            type: 'image',
                            tag: 'img',
                            rect: ['1299px', '116px', '710', '276', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"marker.png"]
                        },
                        {
                            id: 'txt1_1',
                            type: 'text',
                            rect: ['1297px', '19px', '338px', '62', 'auto', 'auto'],
                            opacity: '0',
                            text: "점검방법",
                            align: "auto",
                            font: ['나눔고딕 ExtraBold', [55, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""]
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
                    duration: 1583.3333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "top",
                            0,
                            250,
                            "easeOutQuad",
                            "${bat}",
                            '146px',
                            '196px'
                        ],
                        [
                            "eid10",
                            "top",
                            292,
                            62,
                            "easeInQuad",
                            "${bat}",
                            '196px',
                            '218px'
                        ],
                        [
                            "eid13",
                            "top",
                            354,
                            63,
                            "easeInQuad",
                            "${bat}",
                            '218px',
                            '196px'
                        ],
                        [
                            "eid89",
                            "opacity",
                            667,
                            291,
                            "easeInQuad",
                            "${marker}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            1167,
                            291,
                            "easeInQuad",
                            "${txt2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "height",
                            292,
                            62,
                            "easeInQuad",
                            "${bat}",
                            '981px',
                            '959px'
                        ],
                        [
                            "eid14",
                            "height",
                            354,
                            63,
                            "easeInQuad",
                            "${bat}",
                            '959px',
                            '981px'
                        ],
                        [
                            "eid85",
                            "top",
                            1167,
                            291,
                            "easeInQuad",
                            "${txt2_2}",
                            '683px',
                            '713px'
                        ],
                        [
                            "eid91",
                            "opacity",
                            917,
                            291,
                            "easeInQuad",
                            "${txt2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "top",
                            667,
                            291,
                            "easeInQuad",
                            "${marker}",
                            '116px',
                            '146px'
                        ],
                        [
                            "eid1",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bat}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid147",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bat}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid148",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bat}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid149",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${bat}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid150",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bat}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid151",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${bat}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid97",
                            "left",
                            1083,
                            250,
                            "easeInQuad",
                            "${txt1_3}",
                            '1597px',
                            '1547px'
                        ],
                        [
                            "eid107",
                            "opacity",
                            958,
                            250,
                            "easeInQuad",
                            "${txt1_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid83",
                            "top",
                            917,
                            291,
                            "easeInQuad",
                            "${txt2_1}",
                            '581px',
                            '611px'
                        ],
                        [
                            "eid124",
                            "height",
                            1333,
                            250,
                            "easeInQuad",
                            "${arrow}",
                            '107px',
                            '195px'
                        ],
                        [
                            "eid126",
                            "opacity",
                            1333,
                            250,
                            "easeInQuad",
                            "${arrow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            1083,
                            250,
                            "easeInQuad",
                            "${txt1_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            417,
                            291,
                            "easeInQuad",
                            "${txt1_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            250,
                            "easeOutQuad",
                            "${bat}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            1208,
                            250,
                            "easeInQuad",
                            "${txt1_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "left",
                            958,
                            250,
                            "easeInQuad",
                            "${txt1_4}",
                            '1355px',
                            '1305px'
                        ],
                        [
                            "eid99",
                            "left",
                            1208,
                            250,
                            "easeInQuad",
                            "${txt1_2}",
                            '1943px',
                            '1893px'
                        ],
                        [
                            "eid87",
                            "top",
                            417,
                            291,
                            "easeInQuad",
                            "${txt1_1}",
                            '19px',
                            '49px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-1880133");
