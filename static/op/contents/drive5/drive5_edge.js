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
                            rect: ['-2px', '-2px', '2562px', '1442px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.png",'0px','0px']
                        },
                        {
                            id: 'car2',
                            type: 'image',
                            tag: 'img',
                            rect: ['-570px', '559px', '558', '260', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car2.png"],
                            transform: [[],['-137']]
                        },
                        {
                            id: 'car1',
                            type: 'image',
                            tag: 'img',
                            rect: ['-622px', '21px', '609', '287', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car1.png"],
                            transform: [[],['-180']]
                        },
                        {
                            id: 'memo_rot',
                            type: 'image',
                            tag: 'img',
                            rect: ['1062px', '339px', '268', '308', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"memo_rot.png"]
                        },
                        {
                            id: 'memo_body',
                            type: 'image',
                            tag: 'img',
                            rect: ['1611', '473', '299', '299', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"memo_body.png"]
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
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid56",
                            "left",
                            1333,
                            1000,
                            "easeInQuad",
                            "${memo_rot}",
                            '1626px',
                            '1396px'
                        ],
                        [
                            "eid72",
                            "left",
                            2417,
                            1000,
                            "linear",
                            "${memo_rot}",
                            '1396px',
                            '1062px'
                        ],
                        [
                            "eid75",
                            "left",
                            3583,
                            1417,
                            "linear",
                            "${memo_rot}",
                            '1062px',
                            '-648px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            1000,
                            292,
                            "easeInQuad",
                            "${memo_rot}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            1000,
                            292,
                            "easeInQuad",
                            "${memo_body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "rotateZ",
                            1333,
                            1000,
                            "linear",
                            "${car1}",
                            '0deg',
                            '-90deg'
                        ],
                        [
                            "eid50",
                            "rotateZ",
                            2417,
                            1000,
                            "linear",
                            "${car1}",
                            '-90deg',
                            '-180deg'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            1849,
                            485,
                            "easeInQuad",
                            "${memo_rot}",
                            '0deg',
                            '-53deg'
                        ],
                        [
                            "eid74",
                            "rotateZ",
                            2417,
                            1000,
                            "linear",
                            "${memo_rot}",
                            '-53deg',
                            '-107deg'
                        ],
                        [
                            "eid38",
                            "top",
                            250,
                            750,
                            "easeOutQuad",
                            "${car1}",
                            '772px',
                            '769px'
                        ],
                        [
                            "eid49",
                            "top",
                            1333,
                            1000,
                            "linear",
                            "${car1}",
                            '769px',
                            '413px'
                        ],
                        [
                            "eid52",
                            "top",
                            2417,
                            1000,
                            "linear",
                            "${car1}",
                            '413px',
                            '21px'
                        ],
                        [
                            "eid78",
                            "rotateZ",
                            3583,
                            1167,
                            "linear",
                            "${car2}",
                            '0deg',
                            '-105deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            4917,
                            792,
                            "linear",
                            "${car2}",
                            '-105deg',
                            '-161deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            5792,
                            708,
                            "linear",
                            "${car2}",
                            '-161deg',
                            '-180deg'
                        ],
                        [
                            "eid54",
                            "left",
                            1333,
                            1000,
                            "easeInQuad",
                            "${memo_body}",
                            '1611px',
                            '1359px'
                        ],
                        [
                            "eid70",
                            "left",
                            2417,
                            1000,
                            "linear",
                            "${memo_body}",
                            '1359px',
                            '1021px'
                        ],
                        [
                            "eid76",
                            "left",
                            3583,
                            1417,
                            "linear",
                            "${memo_body}",
                            '1021px',
                            '-689px'
                        ],
                        [
                            "eid42",
                            "top",
                            625,
                            721,
                            "easeOutQuad",
                            "${car2}",
                            '786px',
                            '783px'
                        ],
                        [
                            "eid80",
                            "top",
                            3583,
                            1167,
                            "linear",
                            "${car2}",
                            '783px',
                            '451px'
                        ],
                        [
                            "eid86",
                            "top",
                            4917,
                            792,
                            "linear",
                            "${car2}",
                            '451px',
                            '579px'
                        ],
                        [
                            "eid90",
                            "top",
                            5792,
                            708,
                            "linear",
                            "${car2}",
                            '579px',
                            '559px'
                        ],
                        [
                            "eid122",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${car2}",
                            [14,18],
                            [14,18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid204",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${car2}",
                            [14,18],
                            [14,18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid205",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${car2}",
                            [14,18],
                            [14,18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid206",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${car2}",
                            [14,18],
                            [14,18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid207",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${car2}",
                            [14,18],
                            [14,18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid208",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${car2}",
                            [14,18],
                            [14,18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid40",
                            "left",
                            625,
                            721,
                            "easeOutQuad",
                            "${car2}",
                            '-1290px',
                            '1100px'
                        ],
                        [
                            "eid53",
                            "left",
                            2750,
                            696,
                            "easeOutQuad",
                            "${car2}",
                            '1100px',
                            '1751px'
                        ],
                        [
                            "eid79",
                            "left",
                            3583,
                            1167,
                            "linear",
                            "${car2}",
                            '1751px',
                            '1669px'
                        ],
                        [
                            "eid85",
                            "left",
                            4917,
                            792,
                            "linear",
                            "${car2}",
                            '1669px',
                            '2155px'
                        ],
                        [
                            "eid89",
                            "left",
                            5792,
                            708,
                            "linear",
                            "${car2}",
                            '2155px',
                            '1599px'
                        ],
                        [
                            "eid91",
                            "left",
                            6542,
                            958,
                            "easeInQuad",
                            "${car2}",
                            '1599px',
                            '-570px'
                        ],
                        [
                            "eid36",
                            "left",
                            250,
                            750,
                            "easeOutQuad",
                            "${car1}",
                            '-628px',
                            '1762px'
                        ],
                        [
                            "eid48",
                            "left",
                            1333,
                            1000,
                            "linear",
                            "${car1}",
                            '1762px',
                            '1684px'
                        ],
                        [
                            "eid51",
                            "left",
                            2417,
                            1000,
                            "linear",
                            "${car1}",
                            '1684px',
                            '1228px'
                        ],
                        [
                            "eid77",
                            "left",
                            3583,
                            1417,
                            "linear",
                            "${car1}",
                            '1228px',
                            '-622px'
                        ],
                        [
                            "eid57",
                            "top",
                            1333,
                            1000,
                            "easeInQuad",
                            "${memo_rot}",
                            '488px',
                            '365px'
                        ],
                        [
                            "eid73",
                            "top",
                            2417,
                            1000,
                            "linear",
                            "${memo_rot}",
                            '365px',
                            '339px'
                        ],
                        [
                            "eid55",
                            "top",
                            1333,
                            1000,
                            "easeInQuad",
                            "${memo_body}",
                            '473px',
                            '358px'
                        ],
                        [
                            "eid71",
                            "top",
                            2417,
                            1000,
                            "linear",
                            "${memo_body}",
                            '358px',
                            '354px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive5_edgeActions.js");
})("EDGE-779266");
