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
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'btn2',
                            symbolName: 'btn2',
                            type: 'rect',
                            rect: ['1324px', '1082px', '850px', '124', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'btn1',
                            symbolName: 'btn1',
                            type: 'rect',
                            rect: ['1324px', '935px', '850px', '124', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt2_2',
                            type: 'text',
                            rect: ['1317px', '595px', '1033px', '299px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">1. 가솔린\n</p><p style=\"margin: 0px;\">&nbsp;- MPI/GDI : 매 7,500Km/6개월(하이브리드포함)\n</p><p style=\"margin: 0px;\">&nbsp;- TCI/T-GDI :매 5,000Km또는 3개월\n</p><p style=\"margin: 0px;\">2. LPI : 매 7,500Km/6개월(하이브리드포함)\n</p><p style=\"margin: 0px;\">3. 디젤 : 매 10,000Km/6개월​</p>",
                            align: "auto",
                            font: ['나눔고딕', [42, "px"], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "51px", "", ""]
                        },
                        {
                            id: 'txt2_1',
                            type: 'text',
                            rect: ['1317px', '515px', '1092px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">가혹조건&nbsp;</p>",
                            align: "auto",
                            font: ['나눔고딕', [42, "px"], "rgb(199,0,95)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1_2',
                            type: 'text',
                            rect: ['1317px', '138px', '1082px', '363px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">1. 가솔린\n</p><p style=\"margin: 0px;\">&nbsp;- MPI/GDI : 매 15,000Km/12개월(하이브리드포함)\n</p><p style=\"margin: 0px;\">&nbsp;- TCI/T-GDI :최초 5,000Km 교환 후 매 8,000Km &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(또는 교환 후 매 6개월)\n</p><p style=\"margin: 0px;\">2. LPI : 매 15,000Km/12개월(하이브리드포함)\n</p><p style=\"margin: 0px;\">3. 디젤 : 매 20,000Km/12개월​</p>",
                            align: "auto",
                            font: ['나눔고딕', [42, "px"], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "51px", "", ""]
                        },
                        {
                            id: 'txt1_1',
                            type: 'text',
                            rect: ['1317px', '60px', '1032px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">정상조건​</p>",
                            align: "auto",
                            font: ['나눔고딕', [42, "px"], "rgb(199,0,95)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'engMovie',
                            symbolName: 'engMovie',
                            type: 'rect',
                            rect: ['170px', '49px', '888', '1134', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.04','1.04']]
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
                    duration: 3667,
                    autoPlay: true,
                    data: [
                        [
                            "eid275",
                            "left",
                            750,
                            250,
                            "easeOutQuad",
                            "${btn1}",
                            '1324px',
                            '1274px'
                        ],
                        [
                            "eid180",
                            "opacity",
                            750,
                            250,
                            "easeOutQuad",
                            "${btn1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid285",
                            "left",
                            333,
                            250,
                            "easeOutQuad",
                            "${txt1_2}",
                            '1317px',
                            '1267px'
                        ],
                        [
                            "eid281",
                            "left",
                            250,
                            250,
                            "easeOutQuad",
                            "${txt1_1}",
                            '1317px',
                            '1267px'
                        ],
                        [
                            "eid279",
                            "left",
                            500,
                            250,
                            "easeOutQuad",
                            "${txt2_2}",
                            '1317px',
                            '1267px'
                        ],
                        [
                            "eid155",
                            "opacity",
                            333,
                            250,
                            "easeOutQuad",
                            "${txt1_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "opacity",
                            500,
                            250,
                            "easeOutQuad",
                            "${txt2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${txt1_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            875,
                            250,
                            "easeOutQuad",
                            "${btn2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${engMovie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid277",
                            "left",
                            875,
                            250,
                            "easeOutQuad",
                            "${btn2}",
                            '1324px',
                            '1274px'
                        ],
                        [
                            "eid149",
                            "opacity",
                            417,
                            250,
                            "easeOutQuad",
                            "${txt2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid273",
                            "left",
                            417,
                            250,
                            "easeOutQuad",
                            "${txt2_1}",
                            '1317px',
                            '1267px'
                        ],
                            [ "eid33", "trigger", 750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn1}', [0] ] ],
                            [ "eid32", "trigger", 875, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn2}', [0] ] ]
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
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'btnTxt1',
                            text: '<p style=\"margin:0px\">왜 교환해야 하는가​</p>',
                            align: 'auto',
                            rect: ['118px', '27px', '702px', '85px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'btnArrow1',
                            tag: 'img',
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png']
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
                            type: 'image',
                            id: 'btnArrow2',
                            tag: 'img',
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png']
                        },
                        {
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'btnTxt2',
                            text: '<p style=\"margin:0px\">엔진오일의 종류​</p>',
                            align: 'auto',
                            rect: ['118px', '27px', '708px', '85px', 'auto', 'auto']
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
                            rect: ['0px', '0px', '960px', '120px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'btnBody3',
                            stroke: [2, 'rgba(0,75,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,75,141,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'btnArrow3',
                            tag: 'img',
                            rect: ['35px', '37px', '50', '50', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btnArrow.png']
                        },
                        {
                            font: ['나눔고딕', [55, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'btnTxt3',
                            text: '타이어 표기법',
                            align: 'auto',
                            rect: ['118px', '27px', '708px', '85px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '964px', '124px']
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
                            "eid5",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${btnBody3}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,1)'
                        ],
                        [
                            "eid6",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${btnBody3}",
                            'rgba(255,255,255,1)',
                            'rgba(0,75,141,1.00)'
                        ],
                        [
                            "eid3",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnTxt3}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,1)'
                        ],
                        [
                            "eid4",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${btnTxt3}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            },
            "flowMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '572', '933', 'auto', 'auto'],
                            id: 'flowRoad',
                            fill: ['rgba(0,0,0,0)', 'images/flowRoad.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['263', '905', '23', '125', 'auto', 'auto'],
                            id: 'flowSrc_A1',
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            type: 'rect',
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['320', '710', '17', '125', 'auto', 'auto'],
                            transform: [[], ['60'], [0, 0, 0], [1, 1, 1]],
                            id: 'flowSrc_A2',
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            type: 'rect',
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['31', '934', '17', '125', 'auto', 'auto'],
                            id: 'flowSrc_A3',
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            type: 'rect',
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_D6',
                            opacity: '1',
                            rect: ['245', '104', '17', '2', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-110'], ['0', '22'], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_D5',
                            opacity: '1',
                            rect: ['246', '103', '17', '8', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-110'], ['0', '22'], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_D4',
                            opacity: '1',
                            rect: ['248', '160', '17', '2', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-111'], ['0', '22'], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_D3',
                            opacity: '1',
                            rect: ['243', '160', '17', '8', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-111'], ['0', '22'], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_D2',
                            opacity: '1',
                            rect: ['234', '479', '12', '232', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['2'], ['0', '-22'], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_D1',
                            opacity: '1',
                            rect: ['218', '483', '23', '10', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-22'], ['34'], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['336', '695', '49', '10', 'auto', 'auto'],
                            transform: [[], ['26'], [0, 0, 0], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            id: 'flowSrc_C3',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(12,208,253,1)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['161', '612', '49', '10', 'auto', 'auto'],
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            id: 'flowSrc_C2',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(12,208,253,1)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['34', '754', '49', '10', 'auto', 'auto'],
                            transform: [[], ['16'], [0, 0, 0], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            id: 'flowSrc_C1',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_B1',
                            opacity: '1',
                            rect: ['13', '573', '17', '10', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-15'], [0, 0, 0], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_B2',
                            opacity: '1',
                            rect: ['121', '529', '17', '10', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-19'], [0, 0, 0], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_B3',
                            opacity: '1',
                            rect: ['237', '479', '17', '10', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-19'], [0, 0, 0], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_B4',
                            opacity: '1',
                            rect: ['376', '421', '17', '10', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-19'], [0, 0, 0], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            id: 'flowSrc_B5',
                            opacity: '1',
                            rect: ['411', '404', '88', '2', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-23'], [0, 0, 0], [1, 1, 1]],
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['-114', '514', '17', '232', 'auto', 'auto'],
                            transform: [[], ['67'], [0, 0, 0], [1, 1, 1]],
                            id: 'flowSrc_B0',
                            stroke: [5, 'rgb(199, 0, 96)', 'none'],
                            type: 'rect',
                            fill: ['rgba(12,208,253,1.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,34,103,1.00)', 9], ['rgba(255,255,255,1.00)', 20], ['rgba(255,34,103,1.00)', 30], ['rgba(255,255,255,1.00)', 40], ['rgba(255,34,103,1.00)', 50], ['rgba(255,255,255,1.00)', 60], ['rgba(255,34,103,1.00)', 70], ['rgba(255,255,255,1.00)', 80], ['rgba(255,34,103,1.00)', 90], ['rgba(255,255,255,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '572', '933']
                        }
                    }
                },
                timeline: {
                    duration: 3167,
                    autoPlay: false,
                    data: [
                        [
                            "eid208",
                            "left",
                            2433,
                            286,
                            "linear",
                            "${flowSrc_D5}",
                            '246px',
                            '170px'
                        ],
                        [
                            "eid209",
                            "left",
                            2719,
                            381,
                            "linear",
                            "${flowSrc_D5}",
                            '170px',
                            '-38px'
                        ],
                        [
                            "eid134",
                            "left",
                            1699,
                            267,
                            "linear",
                            "${flowSrc_C2}",
                            '161px',
                            '196px'
                        ],
                        [
                            "eid150",
                            "left",
                            1966,
                            234,
                            "linear",
                            "${flowSrc_C2}",
                            '196px',
                            '228px'
                        ],
                        [
                            "eid196",
                            "left",
                            2299,
                            272,
                            "linear",
                            "${flowSrc_D4}",
                            '248px',
                            '320px'
                        ],
                        [
                            "eid201",
                            "left",
                            2571,
                            362,
                            "linear",
                            "${flowSrc_D4}",
                            '320px',
                            '630px'
                        ],
                        [
                            "eid219",
                            "display",
                            2433,
                            0,
                            "linear",
                            "${flowSrc_D5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "left",
                            1167,
                            1333,
                            "linear",
                            "${flowSrc_B0}",
                            '-114px',
                            '605px'
                        ],
                        [
                            "eid227",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_B4}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid240",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_B1}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid106",
                            "height",
                            2100,
                            277,
                            "linear",
                            "${flowSrc_B5}",
                            '2px',
                            '162px'
                        ],
                        [
                            "eid111",
                            "height",
                            2377,
                            223,
                            "linear",
                            "${flowSrc_B5}",
                            '162px',
                            '12px'
                        ],
                        [
                            "eid142",
                            "top",
                            2032,
                            267,
                            "linear",
                            "${flowSrc_C3}",
                            '695px',
                            '506px'
                        ],
                        [
                            "eid146",
                            "top",
                            2299,
                            234,
                            "linear",
                            "${flowSrc_C3}",
                            '506px',
                            '516px'
                        ],
                        [
                            "eid20",
                            "top",
                            0,
                            367,
                            "linear",
                            "${flowSrc_A1}",
                            '905px',
                            '677px'
                        ],
                        [
                            "eid241",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_A3}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid222",
                            "display",
                            2299,
                            0,
                            "linear",
                            "${flowSrc_D4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid206",
                            "top",
                            2433,
                            286,
                            "linear",
                            "${flowSrc_D5}",
                            '103px',
                            '49px'
                        ],
                        [
                            "eid210",
                            "top",
                            2719,
                            381,
                            "linear",
                            "${flowSrc_D5}",
                            '49px',
                            '126px'
                        ],
                        [
                            "eid239",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_C1}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid71",
                            "top",
                            1667,
                            277,
                            "linear",
                            "${flowSrc_B3}",
                            '479px',
                            '476px'
                        ],
                        [
                            "eid72",
                            "top",
                            1944,
                            223,
                            "linear",
                            "${flowSrc_B3}",
                            '476px',
                            '580px'
                        ],
                        [
                            "eid22",
                            "top",
                            300,
                            633,
                            "linear",
                            "${flowSrc_A2}",
                            '710px',
                            '903px'
                        ],
                        [
                            "eid173",
                            "display",
                            1633,
                            0,
                            "linear",
                            "${flowSrc_D2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid224",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_D4}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid164",
                            "top",
                            1633,
                            967,
                            "linear",
                            "${flowSrc_D2}",
                            '479px',
                            '32px'
                        ],
                        [
                            "eid223",
                            "top",
                            2600,
                            400,
                            "linear",
                            "${flowSrc_D2}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid23",
                            "left",
                            767,
                            400,
                            "linear",
                            "${flowSrc_A3}",
                            '31px',
                            '30px'
                        ],
                        [
                            "eid235",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_D6}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid236",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_D2}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid204",
                            "height",
                            2433,
                            286,
                            "linear",
                            "${flowSrc_D5}",
                            '8px',
                            '171px'
                        ],
                        [
                            "eid78",
                            "height",
                            1900,
                            277,
                            "linear",
                            "${flowSrc_B4}",
                            '10px',
                            '98px'
                        ],
                        [
                            "eid79",
                            "height",
                            2177,
                            223,
                            "linear",
                            "${flowSrc_B4}",
                            '98px',
                            '3px'
                        ],
                        [
                            "eid214",
                            "top",
                            2433,
                            286,
                            "linear",
                            "${flowSrc_D6}",
                            '104px',
                            '-3px'
                        ],
                        [
                            "eid218",
                            "top",
                            2720,
                            380,
                            "linear",
                            "${flowSrc_D6}",
                            '-3px',
                            '-103px'
                        ],
                        [
                            "eid156",
                            "left",
                            1633,
                            267,
                            "linear",
                            "${flowSrc_D1}",
                            '218px',
                            '175px'
                        ],
                        [
                            "eid159",
                            "left",
                            1900,
                            232,
                            "linear",
                            "${flowSrc_D1}",
                            '175px',
                            '131px'
                        ],
                        [
                            "eid21",
                            "left",
                            300,
                            633,
                            "linear",
                            "${flowSrc_A2}",
                            '320px',
                            '-20px'
                        ],
                        [
                            "eid183",
                            "top",
                            2300,
                            316,
                            "linear",
                            "${flowSrc_D3}",
                            '160px',
                            '132px'
                        ],
                        [
                            "eid187",
                            "top",
                            2616,
                            317,
                            "linear",
                            "${flowSrc_D3}",
                            '132px',
                            '184px'
                        ],
                        [
                            "eid226",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_C2}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid49",
                            "height",
                            1467,
                            277,
                            "linear",
                            "${flowSrc_B2}",
                            '10px',
                            '111px'
                        ],
                        [
                            "eid50",
                            "height",
                            1744,
                            223,
                            "linear",
                            "${flowSrc_B2}",
                            '111px',
                            '12px'
                        ],
                        [
                            "eid232",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_B3}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid46",
                            "display",
                            1233,
                            0,
                            "linear",
                            "${flowSrc_B1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "top",
                            1233,
                            277,
                            "linear",
                            "${flowSrc_C1}",
                            '754px',
                            '588px'
                        ],
                        [
                            "eid126",
                            "top",
                            1510,
                            224,
                            "linear",
                            "${flowSrc_C1}",
                            '588px',
                            '591px'
                        ],
                        [
                            "eid237",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_A2}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid124",
                            "left",
                            1233,
                            277,
                            "linear",
                            "${flowSrc_C1}",
                            '34px',
                            '57px'
                        ],
                        [
                            "eid127",
                            "left",
                            1510,
                            224,
                            "linear",
                            "${flowSrc_C1}",
                            '57px',
                            '82px'
                        ],
                        [
                            "eid212",
                            "height",
                            2433,
                            286,
                            "linear",
                            "${flowSrc_D6}",
                            '2px',
                            '162px'
                        ],
                        [
                            "eid221",
                            "display",
                            2299,
                            0,
                            "linear",
                            "${flowSrc_D3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid193",
                            "height",
                            2600,
                            400,
                            "linear",
                            "${flowSrc_D2}",
                            '232px',
                            '60px'
                        ],
                        [
                            "eid55",
                            "height",
                            1667,
                            277,
                            "linear",
                            "${flowSrc_B3}",
                            '10px',
                            '111px'
                        ],
                        [
                            "eid56",
                            "height",
                            1944,
                            223,
                            "linear",
                            "${flowSrc_B3}",
                            '111px',
                            '12px'
                        ],
                        [
                            "eid54",
                            "display",
                            1667,
                            0,
                            "linear",
                            "${flowSrc_B3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "height",
                            2299,
                            272,
                            "linear",
                            "${flowSrc_D4}",
                            '2px',
                            '141px'
                        ],
                        [
                            "eid162",
                            "left",
                            1633,
                            967,
                            "linear",
                            "${flowSrc_D2}",
                            '234px',
                            '249px'
                        ],
                        [
                            "eid194",
                            "left",
                            2600,
                            400,
                            "linear",
                            "${flowSrc_D2}",
                            '249px',
                            '251px'
                        ],
                        [
                            "eid38",
                            "top",
                            1233,
                            277,
                            "linear",
                            "${flowSrc_B1}",
                            '573px',
                            '572px'
                        ],
                        [
                            "eid44",
                            "top",
                            1511,
                            223,
                            "linear",
                            "${flowSrc_B1}",
                            '572px',
                            '683px'
                        ],
                        [
                            "eid185",
                            "left",
                            2300,
                            316,
                            "linear",
                            "${flowSrc_D3}",
                            '243px',
                            '202px'
                        ],
                        [
                            "eid186",
                            "left",
                            2616,
                            317,
                            "linear",
                            "${flowSrc_D3}",
                            '202px',
                            '66px'
                        ],
                        [
                            "eid238",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_B2}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid114",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${flowSrc_B5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_A1}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid86",
                            "left",
                            1900,
                            277,
                            "linear",
                            "${flowSrc_B4}",
                            '376px',
                            '392px'
                        ],
                        [
                            "eid87",
                            "left",
                            2177,
                            223,
                            "linear",
                            "${flowSrc_B4}",
                            '392px',
                            '409px'
                        ],
                        [
                            "eid230",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_D1}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid231",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_B0}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid140",
                            "height",
                            2032,
                            267,
                            "linear",
                            "${flowSrc_C3}",
                            '10px',
                            '209px'
                        ],
                        [
                            "eid145",
                            "height",
                            2299,
                            234,
                            "linear",
                            "${flowSrc_C3}",
                            '209px',
                            '12px'
                        ],
                        [
                            "eid233",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_D5}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid29",
                            "top",
                            1167,
                            1333,
                            "linear",
                            "${flowSrc_B0}",
                            '514px',
                            '213px'
                        ],
                        [
                            "eid220",
                            "display",
                            2433,
                            0,
                            "linear",
                            "${flowSrc_D6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid154",
                            "top",
                            1633,
                            267,
                            "linear",
                            "${flowSrc_D1}",
                            '483px',
                            '412px'
                        ],
                        [
                            "eid158",
                            "top",
                            1900,
                            232,
                            "linear",
                            "${flowSrc_D1}",
                            '412px',
                            '426px'
                        ],
                        [
                            "eid36",
                            "height",
                            1233,
                            277,
                            "linear",
                            "${flowSrc_B1}",
                            '10px',
                            '125px'
                        ],
                        [
                            "eid43",
                            "height",
                            1511,
                            223,
                            "linear",
                            "${flowSrc_B1}",
                            '125px',
                            '12px'
                        ],
                        [
                            "eid132",
                            "top",
                            1699,
                            267,
                            "linear",
                            "${flowSrc_C2}",
                            '612px',
                            '604px'
                        ],
                        [
                            "eid149",
                            "top",
                            1966,
                            234,
                            "linear",
                            "${flowSrc_C2}",
                            '604px',
                            '738px'
                        ],
                        [
                            "eid144",
                            "left",
                            2032,
                            267,
                            "linear",
                            "${flowSrc_C3}",
                            '336px',
                            '380px'
                        ],
                        [
                            "eid147",
                            "left",
                            2299,
                            234,
                            "linear",
                            "${flowSrc_C3}",
                            '380px',
                            '423px'
                        ],
                        [
                            "eid216",
                            "left",
                            2433,
                            286,
                            "linear",
                            "${flowSrc_D6}",
                            '245px',
                            '320px'
                        ],
                        [
                            "eid217",
                            "left",
                            2720,
                            380,
                            "linear",
                            "${flowSrc_D6}",
                            '320px',
                            '590px'
                        ],
                        [
                            "eid122",
                            "height",
                            1233,
                            277,
                            "linear",
                            "${flowSrc_C1}",
                            '10px',
                            '179px'
                        ],
                        [
                            "eid125",
                            "height",
                            1510,
                            224,
                            "linear",
                            "${flowSrc_C1}",
                            '179px',
                            '2px'
                        ],
                        [
                            "eid228",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_C3}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid198",
                            "top",
                            2299,
                            272,
                            "linear",
                            "${flowSrc_D4}",
                            '160px',
                            '62px'
                        ],
                        [
                            "eid202",
                            "top",
                            2571,
                            362,
                            "linear",
                            "${flowSrc_D4}",
                            '62px',
                            '-60px'
                        ],
                        [
                            "eid181",
                            "height",
                            2300,
                            316,
                            "linear",
                            "${flowSrc_D3}",
                            '8px',
                            '95px'
                        ],
                        [
                            "eid160",
                            "display",
                            1633,
                            0,
                            "linear",
                            "${flowSrc_D1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid225",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_B5}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid90",
                            "display",
                            1900,
                            0,
                            "linear",
                            "${flowSrc_B4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "left",
                            1467,
                            277,
                            "linear",
                            "${flowSrc_B2}",
                            '121px',
                            '136px'
                        ],
                        [
                            "eid52",
                            "left",
                            1744,
                            223,
                            "linear",
                            "${flowSrc_B2}",
                            '136px',
                            '155px'
                        ],
                        [
                            "eid108",
                            "top",
                            2100,
                            277,
                            "linear",
                            "${flowSrc_B5}",
                            '404px',
                            '397px'
                        ],
                        [
                            "eid112",
                            "top",
                            2377,
                            223,
                            "linear",
                            "${flowSrc_B5}",
                            '397px',
                            '551px'
                        ],
                        [
                            "eid152",
                            "height",
                            1633,
                            267,
                            "linear",
                            "${flowSrc_D1}",
                            '10px',
                            '95px'
                        ],
                        [
                            "eid157",
                            "height",
                            1900,
                            232,
                            "linear",
                            "${flowSrc_D1}",
                            '95px',
                            '8px'
                        ],
                        [
                            "eid88",
                            "top",
                            1900,
                            277,
                            "linear",
                            "${flowSrc_B4}",
                            '421px',
                            '424px'
                        ],
                        [
                            "eid89",
                            "top",
                            2177,
                            223,
                            "linear",
                            "${flowSrc_B4}",
                            '424px',
                            '518px'
                        ],
                        [
                            "eid69",
                            "left",
                            1667,
                            277,
                            "linear",
                            "${flowSrc_B3}",
                            '237px',
                            '254px'
                        ],
                        [
                            "eid70",
                            "left",
                            1944,
                            223,
                            "linear",
                            "${flowSrc_B3}",
                            '254px',
                            '273px'
                        ],
                        [
                            "eid40",
                            "left",
                            1233,
                            277,
                            "linear",
                            "${flowSrc_B1}",
                            '13px',
                            '28px'
                        ],
                        [
                            "eid45",
                            "left",
                            1511,
                            223,
                            "linear",
                            "${flowSrc_B1}",
                            '28px',
                            '42px'
                        ],
                        [
                            "eid24",
                            "top",
                            767,
                            400,
                            "linear",
                            "${flowSrc_A3}",
                            '934px',
                            '739px'
                        ],
                        [
                            "eid47",
                            "top",
                            1467,
                            277,
                            "linear",
                            "${flowSrc_B2}",
                            '529px',
                            '524px'
                        ],
                        [
                            "eid48",
                            "top",
                            1744,
                            223,
                            "linear",
                            "${flowSrc_B2}",
                            '524px',
                            '623px'
                        ],
                        [
                            "eid53",
                            "display",
                            1467,
                            0,
                            "linear",
                            "${flowSrc_B2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "left",
                            2100,
                            277,
                            "linear",
                            "${flowSrc_B5}",
                            '411px',
                            '443px'
                        ],
                        [
                            "eid113",
                            "left",
                            2377,
                            223,
                            "linear",
                            "${flowSrc_B5}",
                            '443px',
                            '483px'
                        ],
                        [
                            "eid234",
                            "background-image",
                            3167,
                            0,
                            "linear",
                            "${flowSrc_D3}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(255,34,103,1.00)',9],['rgba(255,255,255,1.00)',20],['rgba(255,34,103,1.00)',30],['rgba(255,255,255,1.00)',40],['rgba(255,34,103,1.00)',50],['rgba(255,255,255,1.00)',60],['rgba(255,34,103,1.00)',70],['rgba(255,255,255,1.00)',80],['rgba(255,34,103,1.00)',90],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid130",
                            "height",
                            1699,
                            267,
                            "linear",
                            "${flowSrc_C2}",
                            '10px',
                            '162px'
                        ],
                        [
                            "eid148",
                            "height",
                            1966,
                            234,
                            "linear",
                            "${flowSrc_C2}",
                            '162px',
                            '20px'
                        ]
                    ]
                }
            },
            "engMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'flowMovie',
                            symbolName: 'flowMovie',
                            rect: ['182px', '110px', '572', '933', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'eng',
                            tag: 'img',
                            rect: ['0px', '0px', '888', '1134', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/eng.png']
                        },
                        {
                            type: 'image',
                            id: 'flow_outLine',
                            tag: 'img',
                            rect: ['182px', '110px', '573', '934', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/flow_outLine.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '888px', '1134px']
                        }
                    }
                },
                timeline: {
                    duration: 3667,
                    autoPlay: true,
                    data: [
                            [ "eid27", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${flowMovie}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-1039014998");
