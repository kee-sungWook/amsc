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
                            id: 'carClip',
                            symbolName: 'carClip',
                            display: 'block',
                            type: 'rect',
                            rect: ['31px', '311', '1308', '820', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'picMovie',
                            symbolName: 'picMovie',
                            display: 'none',
                            type: 'rect',
                            rect: ['159', '310', '1100', '770', 'auto', 'auto']
                        },
                        {
                            id: 'txt_mamo',
                            type: 'text',
                            rect: ['456px', '104px', '514px', '96', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​브레이킹 록</p>",
                            align: "center",
                            font: ['나눔고딕', [90, ""], "rgb(0,73,141)", "600", "none", "normal", "break-word", ""],
                            transform: [[],[],[],['1.17','1.2']]
                        },
                        {
                            id: 'btn2',
                            symbolName: 'btn2',
                            type: 'rect',
                            rect: ['1520px', '979px', '850px', '124', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'btn1_1',
                            symbolName: 'btn1_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['1520px', '818px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'btn1',
                            symbolName: 'btn1',
                            display: 'block',
                            type: 'rect',
                            rect: ['1520px', '818px', '850px', '124', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'txt2_2',
                            type: 'text',
                            rect: ['1517px', '460px', '900px', '192', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​급격한 브레이킹, 브레이크 문제,  </p><p style=\"margin: 0px;\">제동시 불규칙한 노면에 의해 발생.</p><p style=\"margin: 0px; line-height: 98px;\">​브레이크 계통 점검.</p>",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2_1',
                            type: 'text',
                            rect: ['1517px', '430px', '822px', '60', 'auto', 'auto'],
                            opacity: '0',
                            text: "발생원인 및 조치방법",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(199,0,95)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1_2',
                            type: 'text',
                            rect: ['1517px', '136px', '883px', '192', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​주행 중 급격한 브레이킹으로</p><p style=\"margin: 0px;\">나타날 수 있음.</p><p style=\"margin: 0px;\">​</p>",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1_1',
                            type: 'text',
                            rect: ['1518px', '46px', '720px', '60', 'auto', 'auto'],
                            opacity: '0',
                            text: "마모증상",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(199,0,95)", "normal", "none", "normal", "break-word", ""]
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
                    duration: 6000,
                    autoPlay: true,
                    labels: {
                        "ani": 1208,
                        "pic": 1500
                    },
                    data: [
                        [
                            "eid14",
                            "top",
                            583,
                            250,
                            "easeInQuad",
                            "${txt1_2}",
                            '136px',
                            '196px'
                        ],
                        [
                            "eid219",
                            "display",
                            1500,
                            0,
                            "easeInQuad",
                            "${btn1_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "opacity",
                            750,
                            250,
                            "easeInQuad",
                            "${txt2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            958,
                            250,
                            "easeInQuad",
                            "${btn2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            667,
                            250,
                            "easeInQuad",
                            "${txt2_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid221",
                            "display",
                            1500,
                            0,
                            "easeInQuad",
                            "${picMovie}",
                            'none',
                            'block'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            958,
                            250,
                            "easeInQuad",
                            "${btn2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid218",
                            "top",
                            1500,
                            0,
                            "easeInQuad",
                            "${btn1_1}",
                            '818px',
                            '818px'
                        ],
                        [
                            "eid220",
                            "display",
                            1500,
                            0,
                            "easeInQuad",
                            "${btn1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            958,
                            250,
                            "easeInQuad",
                            "${btn2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            875,
                            250,
                            "easeInQuad",
                            "${btn1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid217",
                            "left",
                            1500,
                            0,
                            "easeInQuad",
                            "${btn1_1}",
                            '1520px',
                            '1520px'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${txt_mamo}",
                            '1.17',
                            '1'
                        ],
                        [
                            "eid214",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${carClip}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "top",
                            667,
                            250,
                            "easeInQuad",
                            "${txt2_1}",
                            '370px',
                            '430px'
                        ],
                        [
                            "eid53",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${txt_mamo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid176",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${carClip}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            875,
                            250,
                            "easeInQuad",
                            "${btn1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            500,
                            250,
                            "easeOutQuad",
                            "${txt1_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "top",
                            500,
                            250,
                            "easeOutQuad",
                            "${txt1_1}",
                            '46px',
                            '106px'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            875,
                            250,
                            "easeInQuad",
                            "${btn1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${txt_mamo}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            583,
                            250,
                            "easeInQuad",
                            "${txt1_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "top",
                            750,
                            250,
                            "easeInQuad",
                            "${txt2_2}",
                            '460px',
                            '520px'
                        ],
                            [ "eid45", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn1}', [0] ] ],
                            [ "eid46", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${btn2}', [0] ] ],
                            [ "eid228", "trigger", 1208, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picMovie}', [0] ] ],
                            [ "eid229", "trigger", 1500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${picMovie}', [] ] ]
                    ]
                }
            },
            "carClip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.95', '0.95']],
                            id: 'carMove',
                            symbolName: 'carMove',
                            rect: ['70px', '-5px', '1309', '809', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1308px', '820px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid178",
                            "left",
                            0,
                            750,
                            "easeOutQuad",
                            "${carMove}",
                            '70px',
                            '60px'
                        ],
                        [
                            "eid181",
                            "left",
                            750,
                            790,
                            "easeInQuad",
                            "${carMove}",
                            '60px',
                            '50px'
                        ],
                        [
                            "eid183",
                            "left",
                            1625,
                            750,
                            "easeOutQuad",
                            "${carMove}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid187",
                            "left",
                            2375,
                            750,
                            "easeInQuad",
                            "${carMove}",
                            '60px',
                            '68px'
                        ],
                        [
                            "eid180",
                            "top",
                            0,
                            750,
                            "easeOutQuad",
                            "${carMove}",
                            '-5px',
                            '0px'
                        ],
                        [
                            "eid182",
                            "top",
                            750,
                            790,
                            "easeInQuad",
                            "${carMove}",
                            '0px',
                            '-5px'
                        ],
                        [
                            "eid184",
                            "top",
                            1625,
                            750,
                            "easeOutQuad",
                            "${carMove}",
                            '-5px',
                            '0px'
                        ],
                        [
                            "eid188",
                            "top",
                            2375,
                            750,
                            "easeInQuad",
                            "${carMove}",
                            '0px',
                            '-5px'
                        ],
                        [
                            "eid237",
                            "scaleY",
                            3167,
                            125,
                            "linear",
                            "${carMove}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid241",
                            "scaleY",
                            3334,
                            83,
                            "linear",
                            "${carMove}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid245",
                            "scaleY",
                            3458,
                            63,
                            "linear",
                            "${carMove}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid249",
                            "scaleY",
                            3521,
                            63,
                            "linear",
                            "${carMove}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid238",
                            "scaleX",
                            3167,
                            125,
                            "linear",
                            "${carMove}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid242",
                            "scaleX",
                            3334,
                            83,
                            "linear",
                            "${carMove}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid246",
                            "scaleX",
                            3458,
                            63,
                            "linear",
                            "${carMove}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid250",
                            "scaleX",
                            3521,
                            63,
                            "linear",
                            "${carMove}",
                            '0.95',
                            '1'
                        ]
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
                            rect: ['118px', '27px', '702px', '85px', 'auto', 'auto'],
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', ''],
                            id: 'btnTxt1',
                            text: '<p style=\"margin:0px\">​관련사진 보기</p>',
                            align: 'auto',
                            type: 'text'
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
                            rect: ['118px', '27px', '708px', '85px', 'auto', 'auto'],
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', ''],
                            id: 'btnTxt2',
                            text: '<p style=\"margin:0px\">다른 마모증상 선택</p>',
                            align: 'auto',
                            type: 'text'
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
            "errMovie1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '133', '341', 'auto', 'auto'],
                            tag: 'img',
                            id: 'errPos1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/errPos1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '341px']
                        }
                    }
                },
                timeline: {
                    duration: 583,
                    autoPlay: true,
                    data: [
                        [
                            "eid73",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${errPos1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            333,
                            250,
                            "linear",
                            "${errPos1}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "errMovie2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '220', '86', 'auto', 'auto'],
                            tag: 'img',
                            id: 'errPos2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/errPos2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '220px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 583,
                    autoPlay: true,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${errPos2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            333,
                            250,
                            "linear",
                            "${errPos2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "treadMovie": {
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
                            id: 'tireBody',
                            tag: 'img',
                            rect: ['0px', '0px', '178', '334', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tireBody.png']
                        },
                        {
                            rect: ['3px', '-63px', '171px', '446px', 'auto', 'auto'],
                            id: 'tread',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tread.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '178px', '334px']
                        }
                    }
                },
                timeline: {
                    duration: 125,
                    autoPlay: true,
                    data: [
                        [
                            "eid129",
                            "top",
                            0,
                            125,
                            "linear",
                            "${tread}",
                            '-63px',
                            '-23px'
                        ]
                    ]
                }
            },
            "airMovie": {
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
                            tag: 'img',
                            rect: ['-54px', '-5px', '29px', '15px', 'auto', 'auto'],
                            id: 'airSrc1',
                            opacity: '0',
                            transform: [[], ['10'], [], ['0.4', '0.4']],
                            fill: ['rgba(0,0,0,0)', 'images/airSrc.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['-37px', '24px', '39px', '6px', 'auto', 'auto'],
                            id: 'airSrc2',
                            opacity: '0',
                            transform: [[], [], [], ['0.4', '0.4']],
                            fill: ['rgba(0,0,0,0)', 'images/airSrc.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['-46px', '85px', '29px', '14px', 'auto', 'auto'],
                            id: 'airSrc3',
                            opacity: '0',
                            transform: [[], ['-24'], [], ['0.4', '0.4']],
                            fill: ['rgba(0,0,0,0)', 'images/airSrc.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '76px']
                        }
                    }
                },
                timeline: {
                    duration: 583.33333333333,
                    autoPlay: false,
                    data: [
                        [
                            "eid151",
                            "left",
                            83,
                            203,
                            "linear",
                            "${airSrc3}",
                            '-24px',
                            '-54px'
                        ],
                        [
                            "eid156",
                            "left",
                            286,
                            203,
                            "linear",
                            "${airSrc3}",
                            '-53px',
                            '-46px'
                        ],
                        [
                            "eid145",
                            "top",
                            167,
                            208,
                            "linear",
                            "${airSrc1}",
                            '-1px',
                            '1px'
                        ],
                        [
                            "eid161",
                            "top",
                            375,
                            208,
                            "linear",
                            "${airSrc1}",
                            '1px',
                            '-5px'
                        ],
                        [
                            "eid158",
                            "height",
                            208,
                            208,
                            "linear",
                            "${airSrc2}",
                            '14px',
                            '6px'
                        ],
                        [
                            "eid133",
                            "scaleY",
                            167,
                            208,
                            "linear",
                            "${airSrc1}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid153",
                            "top",
                            83,
                            203,
                            "linear",
                            "${airSrc3}",
                            '56px',
                            '58px'
                        ],
                        [
                            "eid155",
                            "top",
                            286,
                            203,
                            "linear",
                            "${airSrc3}",
                            '58px',
                            '85px'
                        ],
                        [
                            "eid141",
                            "scaleY",
                            83,
                            203,
                            "linear",
                            "${airSrc3}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            0,
                            208,
                            "linear",
                            "${airSrc2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "opacity",
                            208,
                            208,
                            "linear",
                            "${airSrc2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid143",
                            "left",
                            167,
                            208,
                            "linear",
                            "${airSrc1}",
                            '-27px',
                            '-57px'
                        ],
                        [
                            "eid162",
                            "left",
                            375,
                            208,
                            "linear",
                            "${airSrc1}",
                            '-56px',
                            '-54px'
                        ],
                        [
                            "eid147",
                            "left",
                            0,
                            208,
                            "linear",
                            "${airSrc2}",
                            '-37px',
                            '-66px'
                        ],
                        [
                            "eid159",
                            "width",
                            208,
                            208,
                            "linear",
                            "${airSrc2}",
                            '124px',
                            '39px'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            167,
                            208,
                            "linear",
                            "${airSrc1}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid137",
                            "scaleY",
                            0,
                            208,
                            "linear",
                            "${airSrc2}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid170",
                            "opacity",
                            83,
                            203,
                            "linear",
                            "${airSrc3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            286,
                            203,
                            "linear",
                            "${airSrc3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            0,
                            208,
                            "linear",
                            "${airSrc2}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid163",
                            "width",
                            375,
                            208,
                            "linear",
                            "${airSrc1}",
                            '110px',
                            '29px'
                        ],
                        [
                            "eid157",
                            "width",
                            286,
                            203,
                            "linear",
                            "${airSrc3}",
                            '124px',
                            '29px'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            83,
                            203,
                            "linear",
                            "${airSrc3}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid160",
                            "height",
                            375,
                            208,
                            "linear",
                            "${airSrc1}",
                            '15px',
                            '5px'
                        ],
                        [
                            "eid154",
                            "height",
                            286,
                            203,
                            "linear",
                            "${airSrc3}",
                            '14px',
                            '6px'
                        ],
                        [
                            "eid168",
                            "opacity",
                            167,
                            208,
                            "linear",
                            "${airSrc1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            375,
                            208,
                            "linear",
                            "${airSrc1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid149",
                            "top",
                            0,
                            208,
                            "linear",
                            "${airSrc2}",
                            '24px',
                            '26px'
                        ],
                        [
                            "eid164",
                            "top",
                            208,
                            208,
                            "linear",
                            "${airSrc2}",
                            '26px',
                            '31px'
                        ]
                    ]
                }
            },
            "tireMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['53px', '3px', '178', '334', 'auto', 'auto'],
                            id: 'treadMovie',
                            symbolName: 'treadMovie',
                            type: 'rect'
                        },
                        {
                            rect: ['90', '52', '105', '230', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'mamoMovie',
                            id: 'mamoMovie',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'tireOutLine',
                            tag: 'img',
                            rect: ['50px', '0px', '184', '340', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tireOutLine.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '234px', '376px']
                        }
                    }
                },
                timeline: {
                    duration: 291.66666666667,
                    autoPlay: true,
                    data: [
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mamoMovie}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "carMove": {
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
                            id: 'car',
                            tag: 'img',
                            rect: ['67px', '0px', '1171', '724', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car.png']
                        },
                        {
                            rect: ['0px', '433px', '234', '376', 'auto', 'auto'],
                            id: 'tireMovie1',
                            symbolName: 'tireMovie',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['-1']],
                            id: 'tireMovie2',
                            symbolName: 'tireMovie',
                            rect: ['1080px', '433px', '234', '376', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1309px', '809px']
                        }
                    }
                },
                timeline: {
                    duration: 751,
                    autoPlay: true,
                    data: [
                        [
                            "eid189",
                            "left",
                            0,
                            188,
                            "linear",
                            "${tireMovie2}",
                            '1075px',
                            '1078px'
                        ],
                        [
                            "eid197",
                            "left",
                            188,
                            188,
                            "linear",
                            "${tireMovie2}",
                            '1078px',
                            '1075px'
                        ],
                        [
                            "eid201",
                            "left",
                            375,
                            188,
                            "linear",
                            "${tireMovie2}",
                            '1075px',
                            '1072px'
                        ],
                        [
                            "eid209",
                            "left",
                            563,
                            188,
                            "linear",
                            "${tireMovie2}",
                            '1072px',
                            '1075px'
                        ],
                        [
                            "eid190",
                            "top",
                            0,
                            188,
                            "linear",
                            "${tireMovie2}",
                            '433px',
                            '430px'
                        ],
                        [
                            "eid198",
                            "top",
                            188,
                            188,
                            "linear",
                            "${tireMovie2}",
                            '430px',
                            '433px'
                        ],
                        [
                            "eid202",
                            "top",
                            375,
                            188,
                            "linear",
                            "${tireMovie2}",
                            '433px',
                            '436px'
                        ],
                        [
                            "eid210",
                            "top",
                            563,
                            188,
                            "linear",
                            "${tireMovie2}",
                            '436px',
                            '433px'
                        ],
                        [
                            "eid191",
                            "left",
                            0,
                            188,
                            "linear",
                            "${tireMovie1}",
                            '0px',
                            '-3px'
                        ],
                        [
                            "eid199",
                            "left",
                            188,
                            188,
                            "linear",
                            "${tireMovie1}",
                            '-3px',
                            '0px'
                        ],
                        [
                            "eid203",
                            "left",
                            375,
                            188,
                            "linear",
                            "${tireMovie1}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid211",
                            "left",
                            563,
                            188,
                            "linear",
                            "${tireMovie1}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid192",
                            "top",
                            0,
                            188,
                            "linear",
                            "${tireMovie1}",
                            '433px',
                            '430px'
                        ],
                        [
                            "eid200",
                            "top",
                            188,
                            188,
                            "linear",
                            "${tireMovie1}",
                            '430px',
                            '433px'
                        ],
                        [
                            "eid204",
                            "top",
                            375,
                            188,
                            "linear",
                            "${tireMovie1}",
                            '433px',
                            '436px'
                        ],
                        [
                            "eid212",
                            "top",
                            563,
                            188,
                            "linear",
                            "${tireMovie1}",
                            '436px',
                            '433px'
                        ]
                    ]
                }
            },
            "btn1_1": {
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
                            text: '<p style=\"margin:0px\">마모증상 보기</p>',
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
            "picMovie": {
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
                            fill: ['rgba(0,0,0,0)', 'images/pic.jpg'],
                            rect: ['0px', '0px', '1100', '770', 'auto', 'auto'],
                            id: 'pic',
                            opacity: '0',
                            transform: [[], [], [], ['0.8', '0.8']],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1100px', '770px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid225",
                            "scaleY",
                            0,
                            500,
                            "easeInQuad",
                            "${pic}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            0,
                            500,
                            "easeInQuad",
                            "${pic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid223",
                            "scaleX",
                            0,
                            500,
                            "easeInQuad",
                            "${pic}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            },
            "mamoMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '105', '230', 'auto', 'auto'],
                            tag: 'img',
                            id: 'mamo7th',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mamo7th.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '105px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 291.66666666667,
                    autoPlay: true,
                    data: [
                        [
                            "eid113",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${mamo7th}",
                            '1',
                            '0'
                        ],
                        [
                            "eid121",
                            "opacity",
                            166,
                            125,
                            "linear",
                            "${mamo7th}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-13840729");
