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
                            rect: ['540px', '104px', '344', '96', 'auto', 'auto'],
                            opacity: '0',
                            text: "편측마모",
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
                            rect: ['1517px', '490px', '900px', '192', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">서스팬션의 고장부위를 점검 하고 </p><p style=\"margin:0px\">이상이 없을 경우 얼라이먼트 조정 </p><p style=\"margin:0px\">(얼라이먼트 조정 전에 타이어 교환)​</p>",
                            align: "auto",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2_1',
                            type: 'text',
                            rect: ['1517px', '400px', '822px', '60', 'auto', 'auto'],
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
                            text: "<p style=\"margin:0px\">주행 중 타이어 전체가 고르게 </p><p style=\"margin:0px\">마모 되지 않고 한쪽만 과다하게 </p><p style=\"margin:0px\">마모되는 현상​</p>",
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
                    duration: 3333,
                    autoPlay: true,
                    labels: {
                        "ani": 1208,
                        "pic": 1500
                    },
                    data: [
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
                            "eid10",
                            "top",
                            750,
                            250,
                            "easeInQuad",
                            "${txt2_2}",
                            '490px',
                            '550px'
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
                            '400px',
                            '460px'
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
                            "eid32",
                            "scaleY",
                            958,
                            250,
                            "easeInQuad",
                            "${btn2}",
                            '0.9',
                            '1'
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
                            type: 'rect',
                            id: 'carMove',
                            symbolName: 'carMove',
                            rect: ['70px', '-5px', '1309', '809', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1308px', '820px']
                        }
                    }
                },
                timeline: {
                    duration: 3333,
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
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'btnTxt1',
                            text: '<p style=\"margin:0px\">​관련사진 보기</p>',
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
                            text: '<p style=\"margin:0px\">다른 마모증상 선택</p>',
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
                            fill: ['rgba(0,0,0,0)', 'images/errPos1.png'],
                            id: 'errPos1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
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
                            fill: ['rgba(0,0,0,0)', 'images/errPos2.png'],
                            id: 'errPos2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '220', '86', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/errPos2.png'],
                            id: 'errPos2Copy',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '220px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 417,
                    autoPlay: true,
                    data: [
                        [
                            "eid232",
                            "opacity",
                            0,
                            167,
                            "linear",
                            "${errPos2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid233",
                            "opacity",
                            250,
                            167,
                            "linear",
                            "${errPos2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid230",
                            "opacity",
                            0,
                            167,
                            "linear",
                            "${errPos2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid231",
                            "opacity",
                            250,
                            167,
                            "linear",
                            "${errPos2}",
                            '0',
                            '1'
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
                            rect: ['0px', '0px', '178', '334', 'auto', 'auto'],
                            id: 'tireBody',
                            fill: ['rgba(0,0,0,0)', 'images/tireBody.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'tread',
                            rect: ['3px', '-63px', '171px', '446px', 'auto', 'auto'],
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
                            rect: ['-54px', '-5px', '29px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/airSrc.png'],
                            transform: [[], ['10'], [], ['0.4', '0.4']],
                            id: 'airSrc1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['-37px', '24px', '39px', '6px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/airSrc.png'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'airSrc2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['-46px', '85px', '29px', '14px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/airSrc.png'],
                            transform: [[], ['-24'], [], ['0.4', '0.4']],
                            id: 'airSrc3',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
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
                            "eid137",
                            "scaleY",
                            0,
                            208,
                            "linear",
                            "${airSrc2}",
                            '0.4',
                            '1'
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
                            type: 'rect',
                            id: 'treadMovie',
                            symbolName: 'treadMovie',
                            rect: ['53px', '3px', '178', '334', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'mamoMovie',
                            symbolName: 'mamoMovie',
                            rect: ['53', '3', '99', '334', 'auto', 'auto']
                        },
                        {
                            rect: ['50px', '0px', '184', '340', 'auto', 'auto'],
                            id: 'tireOutLine',
                            fill: ['rgba(0,0,0,0)', 'images/tireOutLine.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '234px', '376px']
                        }
                    }
                },
                timeline: {
                    duration: 375,
                    autoPlay: true,
                    data: [

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
                            rect: ['67px', '0px', '1171', '724', 'auto', 'auto'],
                            id: 'car',
                            fill: ['rgba(0,0,0,0)', 'images/car.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'errMovie2',
                            symbolName: 'errMovie2',
                            rect: ['234px', '616px', '220', '86', 'auto', 'auto']
                        },
                        {
                            rect: ['855px', '616px', '220', '86', 'auto', 'auto'],
                            id: 'errMovie2Copy',
                            symbolName: 'errMovie2',
                            type: 'rect',
                            transform: [[], [], [], ['-1']]
                        },
                        {
                            rect: ['0px', '433px', '234', '376', 'auto', 'auto'],
                            id: 'tireMovie1',
                            symbolName: 'tireMovie',
                            type: 'rect',
                            transform: [[], ['-3'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['1080px', '433px', '234', '376', 'auto', 'auto'],
                            id: 'tireMovie2',
                            symbolName: 'tireMovie',
                            type: 'rect',
                            transform: [[], ['3'], [], ['-1']]
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
                            rect: ['118px', '27px', '702px', '85px', 'auto', 'auto'],
                            font: ['나눔고딕', [55, ''], 'rgb(0,0,0)', 'normal', 'none', 'normal', 'break-word', ''],
                            id: 'btnTxt1',
                            text: '<p style=\"margin:0px\">마모증상 보기</p>',
                            align: 'auto',
                            type: 'text'
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
                            rect: ['0px', '0px', '1100', '770', 'auto', 'auto'],
                            tag: 'img',
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'pic',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pic.jpg']
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
                            rect: ['0px', '0px', '99', '334', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mamo1st.png'],
                            id: 'mamo1st',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '99px', '334px']
                        }
                    }
                },
                timeline: {
                    duration: 375,
                    autoPlay: true,
                    data: [
                        [
                            "eid119",
                            "opacity",
                            0,
                            167,
                            "linear",
                            "${mamo1st}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "opacity",
                            208,
                            167,
                            "linear",
                            "${mamo1st}",
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
