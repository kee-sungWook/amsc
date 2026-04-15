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
            js+"jquery-1.7.1.min.js",
            js+"jquery-2.0.3.min.js"
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
                            id: 'PCT_heater',
                            type: 'image',
                            tag: 'img',
                            rect: ['677', '637', '218', '180', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"PCT_heater.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'heaterCore',
                            type: 'image',
                            tag: 'img',
                            rect: ['556', '502', '365', '295', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"heaterCore.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'bodyR',
                            type: 'image',
                            tag: 'img',
                            rect: ['600', '303', '337', '494', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bodyR.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'eva',
                            type: 'image',
                            tag: 'img',
                            rect: ['556', '459', '243', '302', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"eva.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'select_eva',
                            type: 'image',
                            tag: 'img',
                            rect: ['735', '371', '243', '302', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"select_eva.png"]
                        },
                        {
                            id: 'extra3',
                            type: 'image',
                            tag: 'img',
                            rect: ['671', '675', '246', '187', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"extra3.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'extra2',
                            type: 'image',
                            tag: 'img',
                            rect: ['615', '628', '250', '213', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"extra2.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'extra1',
                            type: 'image',
                            tag: 'img',
                            rect: ['540', '323', '259', '194', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"extra1.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'bodyL',
                            type: 'image',
                            tag: 'img',
                            rect: ['525', '353', '349', '464', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bodyL.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'head',
                            type: 'image',
                            tag: 'img',
                            rect: ['525', '285', '378', '232', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"head.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['1509', '535', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "에바퍼레이터",
                            font: ['Arial, Helvetica, sans-serif', [80, "px"], "rgba(0,74,141,1.00)", "600", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {

                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid193",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${head}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid167",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${extra2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid201",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${extra3}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid69",
                            "top",
                            367,
                            266,
                            "linear",
                            "${eva}",
                            '459px',
                            '371px'
                        ],
                        [
                            "eid191",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${head}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid113",
                            "top",
                            367,
                            266,
                            "linear",
                            "${PCT_heater}",
                            '637px',
                            '1014px'
                        ],
                        [
                            "eid171",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${heaterCore}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid212",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${extra3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${bodyL}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid103",
                            "left",
                            367,
                            266,
                            "linear",
                            "${head}",
                            '525px',
                            '511px'
                        ],
                        [
                            "eid105",
                            "top",
                            367,
                            266,
                            "linear",
                            "${head}",
                            '285px',
                            '35px'
                        ],
                        [
                            "eid179",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${eva}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid204",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${extra2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid83",
                            "top",
                            367,
                            266,
                            "linear",
                            "${extra1}",
                            '323px',
                            '208px'
                        ],
                        [
                            "eid109",
                            "top",
                            367,
                            266,
                            "linear",
                            "${extra3}",
                            '675px',
                            '785px'
                        ],
                        [
                            "eid173",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${heaterCore}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid181",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${eva}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid61",
                            "top",
                            367,
                            266,
                            "linear",
                            "${bodyR}",
                            '303px',
                            '141px'
                        ],
                        [
                            "eid203",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${PCT_heater}",
                            '0',
                            '1'
                        ],
                        [
                            "eid195",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${extra1}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${head}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "top",
                            367,
                            266,
                            "linear",
                            "${bodyL}",
                            '353px',
                            '368px'
                        ],
                        [
                            "eid185",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${bodyR}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid91",
                            "left",
                            367,
                            266,
                            "linear",
                            "${bodyL}",
                            '525px',
                            '344px'
                        ],
                        [
                            "eid99",
                            "left",
                            367,
                            266,
                            "linear",
                            "${heaterCore}",
                            '556px',
                            '419px'
                        ],
                        [
                            "eid199",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${extra3}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid197",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${extra1}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid211",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${extra1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "left",
                            367,
                            266,
                            "linear",
                            "${extra2}",
                            '615px',
                            '824px'
                        ],
                        [
                            "eid207",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${eva}",
                            '0',
                            '1'
                        ],
                        [
                            "eid187",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${bodyL}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid59",
                            "left",
                            367,
                            266,
                            "linear",
                            "${bodyR}",
                            '600px',
                            '1008px'
                        ],
                        [
                            "eid169",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${extra2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid165",
                            "scaleY",
                            0,
                            300,
                            "linear",
                            "${PCT_heater}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid208",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${bodyR}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "left",
                            367,
                            266,
                            "linear",
                            "${eva}",
                            '556px',
                            '735px'
                        ],
                        [
                            "eid111",
                            "left",
                            367,
                            266,
                            "linear",
                            "${PCT_heater}",
                            '677px',
                            '657px'
                        ],
                        [
                            "eid163",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${PCT_heater}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid222",
                            "opacity",
                            733,
                            267,
                            "linear",
                            "${select_eva}",
                            '0',
                            '1'
                        ],
                        [
                            "eid209",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${bodyL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "left",
                            367,
                            266,
                            "linear",
                            "${extra3}",
                            '671px',
                            '894px'
                        ],
                        [
                            "eid101",
                            "top",
                            367,
                            266,
                            "linear",
                            "${heaterCore}",
                            '502px',
                            '817px'
                        ],
                        [
                            "eid85",
                            "left",
                            367,
                            266,
                            "linear",
                            "${extra1}",
                            '540px',
                            '663px'
                        ],
                        [
                            "eid183",
                            "scaleX",
                            0,
                            300,
                            "linear",
                            "${bodyR}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid89",
                            "top",
                            367,
                            266,
                            "linear",
                            "${extra2}",
                            '628px',
                            '563px'
                        ],
                        [
                            "eid236",
                            "opacity",
                            767,
                            233,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${heaterCore}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-1389249471697");
