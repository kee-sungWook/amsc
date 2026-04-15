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
                            rect: ['0px', '1px', '2560px', '1440px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.png",'0px','0px']
                        },
                        {
                            id: 'car2',
                            type: 'image',
                            tag: 'img',
                            rect: ['-508px', '794px', '466', '218', 'auto', 'auto'],
                            autoOrient: true,
                            fill: ["rgba(0,0,0,0)",im+"car2.png"]
                        },
                        {
                            id: 'car1',
                            type: 'image',
                            tag: 'img',
                            rect: ['-529px', '47px', '508', '240', 'auto', 'auto'],
                            autoOrient: true,
                            fill: ["rgba(0,0,0,0)",im+"car1.png"]
                        },
                        {
                            id: 'memo_body',
                            type: 'image',
                            tag: 'img',
                            rect: ['-800px', '31px', '259', '207', 'auto', 'auto'],
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
                    duration: 5333.3333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "rotateZ",
                            1983,
                            862,
                            "linear",
                            "${car2}",
                            '0deg',
                            '-37deg'
                        ],
                        [
                            "eid31",
                            "rotateZ",
                            2845,
                            2155,
                            "linear",
                            "${car2}",
                            '-37deg',
                            '3deg'
                        ],
                        [
                            "eid25",
                            "location",
                            0,
                            5000,
                            "linear",
                            "${car1}",
                            [[-275, 167, 0, 0, 0, 0,0],[786.07, 169.89, 1142.46, -31.29, 271.1, -7.43,1061.08],[1488.44, 527.21, 361.52, -1.07, 881.74, -2.61,1876.24],[3129, 531, 0, 0, 0, 0,3516.8]]
                        ],
                        [
                            "eid35",
                            "location",
                            0,
                            5000,
                            "linear",
                            "${memo_body}",
                            [[-670.5, 134.5, 0, 0, 0, 0,0],[668.23, 167.2, 361.55, 5.79, 2848.84, 45.63,1339.16],[1099.24, 486.15, 491.29, 279.31, 382.31, 217.36,1881.63],[1670.56, 510.29, 1225.5, 18.1, 591.76, 8.74,2461.67],[2729.5, 500.5, 0, 0, 0, 0,3520.7]]
                        ],
                        [
                            "eid28",
                            "location",
                            0,
                            5000,
                            "linear",
                            "${car2}",
                            [[-275, 903, 0, 0, 0, 0,0],[776.82, 905.96, 557.35, 12.23, 1740.88, 38.21,1051.89],[1517.95, 1230.71, 797.01, 17.5, 593.4, 13.03,1867.67],[2122.44, 955.63, 1505.8, 33.05, 716.09, 15.72,2547.3],[2885, 1335, 0, 0, 0, 0,3427.03]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("brake6_edgeActions.js");
})("EDGE-2301196");
