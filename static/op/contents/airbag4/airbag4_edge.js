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
                            id: 'crashCar',
                            type: 'image',
                            tag: 'img',
                            rect: ['407px', '50px', '1517', '965', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crashCar.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'myCar',
                            symbolName: 'myCar',
                            type: 'rect',
                            rect: ['0', '0', '2560', '1440', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'road',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '0', '2560', '1440', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"road.png"]
                        },
                        {
                            id: 'car2',
                            type: 'image',
                            tag: 'img',
                            rect: ['1347', '255px', '237', '509', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"car2.png"]
                        },
                        {
                            id: 'car1',
                            type: 'image',
                            tag: 'img',
                            rect: ['1212px', '752', '508', '240', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"car1.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
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
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "left",
                            1250,
                            533,
                            "easeOutQuad",
                            "${crashCar}",
                            '407px',
                            '307px'
                        ],
                        [
                            "eid44",
                            "scaleY",
                            1783,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid47",
                            "scaleY",
                            1916,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            2049,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            2182,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid171",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid172",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid134",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${car2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${car2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${car2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid136",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${myCar}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${myCar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            1250,
                            533,
                            "easeOutQuad",
                            "${crashCar}",
                            '0.7',
                            '1.1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${road}",
                            '1',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${road}",
                            '1',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${road}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid170",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            1250,
                            533,
                            "easeOutQuad",
                            "${crashCar}",
                            '0.7',
                            '1.1'
                        ],
                        [
                            "eid14",
                            "top",
                            750,
                            500,
                            "easeOutQuad",
                            "${car2}",
                            '-537px',
                            '255px'
                        ],
                        [
                            "eid137",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${crashCar}",
                            '0',
                            '0'
                        ],
                        [
                            "eid84",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${crashCar}",
                            '0',
                            '0'
                        ],
                        [
                            "eid93",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${crashCar}",
                            '1',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${car1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${car1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${car1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "left",
                            250,
                            1000,
                            "easeOutQuad",
                            "${car1}",
                            '-519px',
                            '1212px'
                        ],
                        [
                            "eid38",
                            "top",
                            1250,
                            533,
                            "easeOutQuad",
                            "${crashCar}",
                            '-145px',
                            '50px'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            1783,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            1916,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            2049,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid50",
                            "scaleX",
                            2182,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1.02',
                            '1'
                        ],
                            [ "eid82", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${myCar}', [0] ] ],
                            [ "eid83", "trigger", 1916, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${myCar}', [] ] ]
                    ]
                }
            },
            "myCar": {
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
                            id: 'backMirror',
                            tag: 'img',
                            rect: ['1898px', '247px', '149', '119', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/backMirror.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'block',
                            id: 'classBlue',
                            opacity: 0.15,
                            rect: ['0px', '0px', '2560', '452', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/classBlue.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'classRed',
                            opacity: 0.3,
                            rect: ['0px', '0px', '2560', '452', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/classRed.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'classBlack',
                            opacity: 0.5,
                            rect: ['0px', '0px', '2560', '452', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/classBlack.png']
                        },
                        {
                            type: 'image',
                            id: 'pics_b',
                            tag: 'img',
                            rect: ['0px', '0px', '2560', '1440', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pics_b.png']
                        },
                        {
                            rect: ['366px', '-80px', '1707', '136px', 'auto', 'auto'],
                            tag: 'img',
                            id: 'sideAirbag',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sideAirbag.png']
                        },
                        {
                            rect: ['370px', '4px', '1699', '570', 'auto', 'auto'],
                            tag: 'img',
                            id: 'sideAribag_red',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sideAribag_red.png']
                        },
                        {
                            type: 'image',
                            id: 'pics_f',
                            tag: 'img',
                            rect: ['0px', '0px', '2560', '1440', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pics_f.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2560px', '1440px']
                        }
                    }
                },
                timeline: {
                    duration: 1634,
                    autoPlay: false,
                    data: [
                        [
                            "eid73",
                            "height",
                            400,
                            433,
                            "easeOutQuad",
                            "${sideAirbag}",
                            '136px',
                            '578px'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            67,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            133,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            200,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            267,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            333,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            400,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "opacity",
                            900,
                            167,
                            "easeOutQuad",
                            "${sideAribag_red}",
                            '0',
                            '0.3'
                        ],
                        [
                            "eid79",
                            "opacity",
                            1067,
                            167,
                            "easeOutQuad",
                            "${sideAribag_red}",
                            '0.3',
                            '0'
                        ],
                        [
                            "eid80",
                            "opacity",
                            1300,
                            167,
                            "easeOutQuad",
                            "${sideAribag_red}",
                            '0',
                            '0.3'
                        ],
                        [
                            "eid81",
                            "opacity",
                            1467,
                            167,
                            "easeOutQuad",
                            "${sideAribag_red}",
                            '0.3',
                            '0'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'block',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            67,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            200,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            267,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            400,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${sideAirbag}",
                            '0',
                            '0'
                        ],
                        [
                            "eid76",
                            "opacity",
                            400,
                            433,
                            "easeOutQuad",
                            "${sideAirbag}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "top",
                            400,
                            433,
                            "easeOutQuad",
                            "${sideAirbag}",
                            '-80px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            133,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            200,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'block',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            333,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            400,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("airbag4_edgeActions.js");
})("EDGE-29908615");
