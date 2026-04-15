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
                            id: 'btn2',
                            symbolName: 'btn2',
                            type: 'rect',
                            rect: ['1534px', '933px', '850px', '124', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'btn1',
                            symbolName: 'btn1',
                            type: 'rect',
                            rect: ['1534px', '763px', '850px', '124', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt4',
                            type: 'text',
                            rect: ['1531px', '563px', '859', '126', 'auto', 'auto'],
                            opacity: '0',
                            text: "또한 시동 시 스타팅모터를 구동하는 \r아주 중요한 역할도 하고 있다.",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt3',
                            type: 'text',
                            rect: ['1531px', '366px', '859', '192', 'auto', 'auto'],
                            opacity: '0',
                            text: "배터리는 초기시동 및 시동 중 전장품\r(라디오등)을 작동할 경우 사용된다.\r",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['1531px', '169px', '812', '126', 'auto', 'auto'],
                            opacity: '0',
                            text: "매 2~3년 또는 50,000Km 주행시 \r점검 및 교환",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['1532px', '79px', '212', '60', 'auto', 'auto'],
                            opacity: '0',
                            text: "정상주행",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(199,0,95)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'body',
                            type: 'image',
                            tag: 'img',
                            rect: ['598px', '133px', '824', '741', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"body.png"]
                        },
                        {
                            id: 'panGroup',
                            type: 'image',
                            tag: 'img',
                            rect: ['662px', '355px', '494', '440', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"panGroup.png"]
                        },
                        {
                            id: 'cutting',
                            type: 'image',
                            tag: 'img',
                            rect: ['650px', '193px', '568', '603', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cutting.png"]
                        },
                        {
                            id: 'pan5',
                            type: 'image',
                            tag: 'img',
                            rect: ['516px', '507px', '389', '412', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pan5.png"]
                        },
                        {
                            id: 'pan4',
                            type: 'image',
                            tag: 'img',
                            rect: ['523px', '508px', '369', '400', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pan4.png"]
                        },
                        {
                            id: 'pan3',
                            type: 'image',
                            tag: 'img',
                            rect: ['517px', '515px', '369', '401', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pan3.png"]
                        },
                        {
                            id: 'pan2',
                            type: 'image',
                            tag: 'img',
                            rect: ['517px', '529px', '369', '387', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pan2.png"]
                        },
                        {
                            id: 'pan1',
                            type: 'image',
                            tag: 'img',
                            rect: ['508px', '532px', '369', '387', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pan1.png"]
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
                    duration: 2375,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "top",
                            1875,
                            250,
                            "linear",
                            "${txt4}",
                            '563px',
                            '613px'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1000,
                            333,
                            "linear",
                            "${pan4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1000,
                            333,
                            "linear",
                            "${pan5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1000,
                            333,
                            "linear",
                            "${pan3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            2125,
                            250,
                            "linear",
                            "${btn2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "top",
                            1625,
                            375,
                            "easeOutQuad",
                            "${pan4}",
                            '508px',
                            '578px'
                        ],
                        [
                            "eid36",
                            "left",
                            1542,
                            375,
                            "easeOutQuad",
                            "${pan3}",
                            '517px',
                            '264px'
                        ],
                        [
                            "eid52",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${txt3}",
                            '366px',
                            '416px'
                        ],
                        [
                            "eid60",
                            "opacity",
                            2042,
                            250,
                            "linear",
                            "${btn1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${txt3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "top",
                            1542,
                            375,
                            "easeOutQuad",
                            "${pan3}",
                            '515px',
                            '635px'
                        ],
                        [
                            "eid10",
                            "opacity",
                            583,
                            417,
                            "easeOutQuad",
                            "${panGroup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1000,
                            333,
                            "linear",
                            "${pan2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "left",
                            1375,
                            375,
                            "easeOutQuad",
                            "${pan1}",
                            '508px',
                            '12px'
                        ],
                        [
                            "eid42",
                            "top",
                            1458,
                            375,
                            "easeOutQuad",
                            "${pan2}",
                            '529px',
                            '694px'
                        ],
                        [
                            "eid46",
                            "top",
                            1375,
                            375,
                            "easeOutQuad",
                            "${pan1}",
                            '532px',
                            '739px'
                        ],
                        [
                            "eid54",
                            "top",
                            2125,
                            250,
                            "linear",
                            "${btn2}",
                            '933px',
                            '983px'
                        ],
                        [
                            "eid32",
                            "left",
                            1625,
                            375,
                            "easeOutQuad",
                            "${pan4}",
                            '523px',
                            '390px'
                        ],
                        [
                            "eid48",
                            "top",
                            2042,
                            250,
                            "linear",
                            "${btn1}",
                            '763px',
                            '813px'
                        ],
                        [
                            "eid68",
                            "opacity",
                            1625,
                            250,
                            "linear",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid56",
                            "top",
                            1625,
                            250,
                            "linear",
                            "${txt2}",
                            '169px',
                            '219px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1000,
                            333,
                            "linear",
                            "${pan1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${txt1}",
                            '79px',
                            '129px'
                        ],
                        [
                            "eid40",
                            "left",
                            1458,
                            375,
                            "easeOutQuad",
                            "${pan2}",
                            '517px',
                            '138px'
                        ],
                        [
                            "eid62",
                            "opacity",
                            1875,
                            250,
                            "linear",
                            "${txt4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            583,
                            417,
                            "easeOutQuad",
                            "${cutting}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${body}",
                            '0',
                            '1'
                        ],
                            [ "eid5", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn1}', [0] ] ],
                            [ "eid6", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn2}', [0] ] ]
                    ]
                }
            },
            "btn1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '846px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody1',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['118px', '27px', '702px', '85px', 'auto', 'auto'],
                            id: 'btnTxt1',
                            text: '<p style=\"margin:0px\">​배터리 종류</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow1',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '850px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "out 1": 0,
                        "over": 1000,
                        "over 1": 1000
                    },
                    data: [
                        [
                            "eid30",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody1}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid27",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody1}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid28",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt1}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,1)'
                        ],
                        [
                            "eid29",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt1}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
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
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '846px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody2',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            id: 'btnArrow2',
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'text',
                            rect: ['118px', '27px', '708px', '85px', 'auto', 'auto'],
                            id: 'btnTxt2',
                            text: '<p style=\"margin:0px\">점검 및 관리​</p>',
                            align: 'auto',
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '850px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "over": 1000
                    },
                    data: [
                        [
                            "eid21",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody2}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,1)'
                        ],
                        [
                            "eid22",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody2}",
                            'rgba(255,255,255,1)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid19",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt2}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,1)'
                        ],
                        [
                            "eid20",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt2}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-357657143");
