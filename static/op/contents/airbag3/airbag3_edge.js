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
                            id: 'pic2',
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '0px', '2561', '1439', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic2.png"]
                        },
                        {
                            id: 'airbag',
                            type: 'image',
                            tag: 'img',
                            rect: ['634px', '626px', '237px', '209px', 'auto', 'auto'],
                            opacity: '0.024390243902439',
                            fill: ["rgba(0,0,0,0)",im+"airbag.png"]
                        },
                        {
                            id: 'AIRBAG_BLINKER',
                            symbolName: 'AIRBAG_BLINKER',
                            type: 'rect',
                            rect: ['634px', '625px', '445', '475', 'auto', 'auto']
                        },
                        {
                            id: 'pic1',
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '0px', '2561', '1439', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic1.png"]
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
                            rect: ['40px', '38px', '201', '200', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
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
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid27",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2500,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid25",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid26",
                            "opacity",
                            2500,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "top",
                            500,
                            750,
                            "easeOutElastic",
                            "${airbag}",
                            '635px',
                            '626px'
                        ],
                        [
                            "eid14",
                            "height",
                            500,
                            750,
                            "easeOutElastic",
                            "${airbag}",
                            '209px',
                            '475px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            500,
                            750,
                            "easeOutElastic",
                            "${airbag}",
                            '0.024390243902439',
                            '1'
                        ],
                        [
                            "eid18",
                            "width",
                            500,
                            750,
                            "easeOutElastic",
                            "${airbag}",
                            '237px',
                            '445px'
                        ],
                        [
                            "eid16",
                            "left",
                            500,
                            750,
                            "easeOutElastic",
                            "${airbag}",
                            '786px',
                            '634px'
                        ],
                            [ "eid23", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${AIRBAG_BLINKER}', [0] ] ],
                            [ "eid24", "trigger", 1083.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${AIRBAG_BLINKER}', ['gogo'] ] ]
                    ]
                }
            },
            "AIRBAG_BLINKER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '445', '475', 'auto', 'auto'],
                            tag: 'img',
                            id: 'airbag_blinker',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/airbag_blinker.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '445px', '475px']
                        }
                    }
                },
                timeline: {
                    duration: 542,
                    autoPlay: false,
                    labels: {
                        "gogo": 42
                    },
                    data: [
                        [
                            "eid2",
                            "opacity",
                            42,
                            250,
                            "linear",
                            "${airbag_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid4",
                            "opacity",
                            292,
                            250,
                            "linear",
                            "${airbag_blinker}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("airbag3_edgeActions.js");
})("EDGE-32519105");
