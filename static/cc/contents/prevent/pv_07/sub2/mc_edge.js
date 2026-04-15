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
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'btn1',
                            symbolName: 'btn1',
                            type: 'rect',
                            rect: ['1299px', '894px', '842', '106', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt_cont',
                            type: 'text',
                            rect: ['1285px', '359px', '1083px', '434px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">엔진출력에 필요한 공기는, 터보장치의 터빈휠을 </p><p style=\"margin: 0px;\">통과하는 배출가스의 양과 속도에 따라 조정되는데,  </p><p style=\"margin: 0px;\">그림처럼 복잡한 구조의 터빈실 내부로 통과하는 </p><p style=\"margin: 0px;\">배출가스에 의해 구동되는 원리때문에 일정한시간</p><p style=\"margin: 0px;\">( 15000km 내외 )이 경과되면 그 동작이 불균일 또는 </p><p style=\"margin: 0px;\">고착되어 여러가지 엔진트러블을 야기하게됩니다.​</p>",
                            align: "auto",
                            font: ['나눔고딕', [45, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "70px", "", ""],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'txt_title',
                            type: 'text',
                            rect: ['1280px', '186px', '1135px', '140px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">터보 관리는 왜 해야 하는가​ ?</p>",
                            align: "auto",
                            font: ['나눔고딕', [70, "px"], "rgba(1,169,228,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "60px", "", ""]
                        },
                        {
                            id: 'movieClip',
                            symbolName: 'movieClip',
                            type: 'rect',
                            rect: ['68px', '-22px', '1024', '1287', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.94','0.94']]
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
                    duration: 25000,
                    autoPlay: true,
                    data: [
                        [
                            "eid766",
                            "scaleY",
                            167,
                            500,
                            "linear",
                            "${txt_cont}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid764",
                            "scaleX",
                            167,
                            500,
                            "linear",
                            "${txt_cont}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid768",
                            "opacity",
                            667,
                            500,
                            "linear",
                            "${btn1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid772",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid778",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${movieClip}",
                            '0',
                            '1'
                        ],
                        [
                            "eid756",
                            "top",
                            0,
                            500,
                            "linear",
                            "${txt_title}",
                            '186px',
                            '216px'
                        ],
                        [
                            "eid770",
                            "opacity",
                            167,
                            500,
                            "linear",
                            "${txt_cont}",
                            '0',
                            '1'
                        ],
                        [
                            "eid758",
                            "top",
                            667,
                            500,
                            "linear",
                            "${btn1}",
                            '894px',
                            '924px'
                        ],
                            [ "eid900", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${movieClip}', [0] ] ],
                            [ "eid849", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${movieClip}', [] ] ]
                    ]
                }
            },
            "btn1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '838px', '102px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [2, 'rgba(0,74,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,73,141,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'con-1',
                            tag: 'img',
                            rect: ['30px', '34px', '40', '40', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/con-1.png']
                        },
                        {
                            rect: ['115px', '26px', '703px', '56', 'auto', 'auto'],
                            font: ['나눔고딕', [50, ''], 'rgba(0,73,141,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'txt_menu1',
                            text: '<p style=\"margin:0px\">터보장치 메인페이지</p>',
                            align: 'auto',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '842px', '106px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "over": 250
                    },
                    data: [
                        [
                            "eid50",
                            "color",
                            0,
                            0,
                            "easeOutQuad",
                            "${txt_menu1}",
                            'rgba(0,73,141,1)',
                            'rgba(0,73,141,1)'
                        ],
                        [
                            "eid51",
                            "color",
                            250,
                            0,
                            "easeOutQuad",
                            "${txt_menu1}",
                            'rgba(0,73,141,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid47",
                            "background-color",
                            0,
                            0,
                            "easeOutQuad",
                            "${RoundRect}",
                            'rgba(255,255,255,0)',
                            'rgba(255,255,255,0)'
                        ],
                        [
                            "eid48",
                            "background-color",
                            250,
                            0,
                            "easeOutQuad",
                            "${RoundRect}",
                            'rgba(255,255,255,0)',
                            'rgba(0,73,141,1.00)'
                        ]
                    ]
                }
            },
            "turbine": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '299', '302', 'auto', 'auto'],
                            id: 'wheel',
                            fill: ['rgba(0,0,0,0)', 'images/wheel.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['26px', '5px', '245', '267', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel_pollution1.png'],
                            id: 'wheel_pollution1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['8px', '15px', '279', '264', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel_pollution2.png'],
                            id: 'wheel_pollution2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '299px', '302px']
                        }
                    }
                },
                timeline: {
                    duration: 2542,
                    autoPlay: false,
                    labels: {
                        "pollution": 500,
                        "cleaning": 1542
                    },
                    data: [
                        [
                            "eid221",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${wheel_pollution1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            1542,
                            1000,
                            "linear",
                            "${wheel_pollution1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid220",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${wheel_pollution2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "opacity",
                            1542,
                            1000,
                            "linear",
                            "${wheel_pollution2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "turbine_move": {
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
                            id: 'turbine',
                            symbolName: 'turbine',
                            rect: ['0px', '0px', '299', '302', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '299px', '302px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid405",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${turbine}",
                            '358deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "blows": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['677px', '815px', '14', '309', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inBlow.png'],
                            id: 'inBlow1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['707px', '745px', '14', '309', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inBlow.png'],
                            id: 'inBlow2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['737px', '675px', '14', '309', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inBlow.png'],
                            id: 'inBlow3',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['767px', '605px', '14', '309', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inBlow.png'],
                            id: 'inBlow4',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['290px', '0px', '231', '785', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/circleBlow.png'],
                            id: 'circleBlow1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['277px', '0px', '231', '785', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/circleBlow.png'],
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            id: 'circleBlow2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['277px', '0px', '231', '785', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/circleBlow.png'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            id: 'circleBlow3',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['277px', '0px', '231', '785', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/circleBlow.png'],
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                            id: 'circleBlow4',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '785px', '1124px']
                        }
                    }
                },
                timeline: {
                    duration: 292,
                    autoPlay: true,
                    data: [
                        [
                            "eid11",
                            "opacity",
                            125,
                            83,
                            "linear",
                            "${inBlow4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            209,
                            83,
                            "linear",
                            "${inBlow4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid54",
                            "rotateZ",
                            0,
                            292,
                            "linear",
                            "${circleBlow4}",
                            '-45deg',
                            '-90deg'
                        ],
                        [
                            "eid23",
                            "top",
                            125,
                            83,
                            "linear",
                            "${inBlow4}",
                            '605px',
                            '555px'
                        ],
                        [
                            "eid19",
                            "top",
                            209,
                            83,
                            "linear",
                            "${inBlow4}",
                            '555px',
                            '505px'
                        ],
                        [
                            "eid53",
                            "rotateZ",
                            0,
                            292,
                            "linear",
                            "${circleBlow3}",
                            '90deg',
                            '45deg'
                        ],
                        [
                            "eid9",
                            "opacity",
                            0,
                            83,
                            "linear",
                            "${inBlow1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            83,
                            83,
                            "linear",
                            "${inBlow1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid52",
                            "rotateZ",
                            0,
                            292,
                            "linear",
                            "${circleBlow2}",
                            '45deg',
                            '0deg'
                        ],
                        [
                            "eid49",
                            "rotateZ",
                            0,
                            292,
                            "linear",
                            "${circleBlow1}",
                            '0deg',
                            '-45deg'
                        ],
                        [
                            "eid22",
                            "top",
                            0,
                            83,
                            "linear",
                            "${inBlow1}",
                            '815px',
                            '765px'
                        ],
                        [
                            "eid18",
                            "top",
                            83,
                            83,
                            "linear",
                            "${inBlow1}",
                            '765px',
                            '715px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            42,
                            84,
                            "linear",
                            "${inBlow2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            125,
                            83,
                            "linear",
                            "${inBlow2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid65",
                            "opacity",
                            0,
                            146,
                            "linear",
                            "${circleBlow1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            146,
                            146,
                            "linear",
                            "${circleBlow1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "opacity",
                            83,
                            83,
                            "linear",
                            "${inBlow3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            167,
                            83,
                            "linear",
                            "${inBlow3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid75",
                            "opacity",
                            0,
                            146,
                            "linear",
                            "${circleBlow4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "opacity",
                            146,
                            146,
                            "linear",
                            "${circleBlow4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "top",
                            83,
                            83,
                            "linear",
                            "${inBlow3}",
                            '675px',
                            '625px'
                        ],
                        [
                            "eid17",
                            "top",
                            167,
                            83,
                            "linear",
                            "${inBlow3}",
                            '625px',
                            '575px'
                        ],
                        [
                            "eid73",
                            "opacity",
                            0,
                            146,
                            "linear",
                            "${circleBlow2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "opacity",
                            146,
                            146,
                            "linear",
                            "${circleBlow2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            146,
                            "linear",
                            "${circleBlow3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            146,
                            146,
                            "linear",
                            "${circleBlow3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20",
                            "top",
                            42,
                            84,
                            "linear",
                            "${inBlow2}",
                            '745px',
                            '695px'
                        ],
                        [
                            "eid16",
                            "top",
                            125,
                            83,
                            "linear",
                            "${inBlow2}",
                            '695px',
                            '645px'
                        ]
                    ]
                }
            },
            "outBlows": {
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
                            transform: [[], [], [], ['1.26462', '1.27777']],
                            display: 'none',
                            symbolName: 'outBlow_high',
                            rect: ['0', '0', '393', '504', 'auto', 'auto'],
                            id: 'outBlow_high'
                        },
                        {
                            type: 'rect',
                            id: 'outBlow_low',
                            symbolName: 'outBlow_low',
                            rect: ['109', '56', '225', '326', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '393px', '504px']
                        }
                    }
                },
                timeline: {
                    duration: 292,
                    autoPlay: true,
                    data: [
                        [
                            "eid654",
                            "display",
                            0,
                            0,
                            "linear",
                            "${outBlow_high}",
                            'none',
                            'none'
                        ],
                            [ "eid417", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${outBlow_low}', [] ] ],
                            [ "eid418", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${outBlow_high}', [] ] ]
                    ]
                }
            },
            "outBlow_low": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '225px', '326px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lowBlow2.png'],
                            id: 'lowBlow2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['16px', '31px', '183px', '283px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lowBlow1.png'],
                            id: 'lowBlow1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '225px', '326px']
                        }
                    }
                },
                timeline: {
                    duration: 292,
                    autoPlay: true,
                    data: [
                        [
                            "eid88",
                            "width",
                            0,
                            250,
                            "linear",
                            "${lowBlow2}",
                            '225px',
                            '326px'
                        ],
                        [
                            "eid86",
                            "left",
                            0,
                            250,
                            "linear",
                            "${lowBlow2}",
                            '0px',
                            '-101px'
                        ],
                        [
                            "eid92",
                            "left",
                            42,
                            250,
                            "linear",
                            "${lowBlow1}",
                            '16px',
                            '-66px'
                        ],
                        [
                            "eid96",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${lowBlow2}",
                            '0',
                            '0.49803921580314636'
                        ],
                        [
                            "eid99",
                            "opacity",
                            125,
                            125,
                            "linear",
                            "${lowBlow2}",
                            '0.49803900718688965',
                            '0'
                        ],
                        [
                            "eid94",
                            "width",
                            42,
                            250,
                            "linear",
                            "${lowBlow1}",
                            '183px',
                            '265px'
                        ],
                        [
                            "eid90",
                            "height",
                            42,
                            250,
                            "linear",
                            "${lowBlow1}",
                            '283px',
                            '495px'
                        ],
                        [
                            "eid98",
                            "opacity",
                            42,
                            125,
                            "linear",
                            "${lowBlow1}",
                            '0',
                            '0.49803921580314636'
                        ],
                        [
                            "eid100",
                            "opacity",
                            167,
                            125,
                            "linear",
                            "${lowBlow1}",
                            '0.49803900718688965',
                            '0'
                        ],
                        [
                            "eid84",
                            "height",
                            0,
                            250,
                            "linear",
                            "${lowBlow2}",
                            '326px',
                            '570px'
                        ]
                    ]
                }
            },
            "outBlow_high": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '393px', '504px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/highBlow2.png'],
                            id: 'highBlow2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['49px', '24px', '306px', '432px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/highBlow1.png'],
                            id: 'highBlow1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '393px', '504px']
                        }
                    }
                },
                timeline: {
                    duration: 292,
                    autoPlay: true,
                    data: [
                        [
                            "eid116",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${highBlow2}",
                            '0',
                            '0.49803921580314636'
                        ],
                        [
                            "eid118",
                            "opacity",
                            125,
                            125,
                            "linear",
                            "${highBlow2}",
                            '0.49803900718688965',
                            '0'
                        ],
                        [
                            "eid104",
                            "left",
                            0,
                            250,
                            "linear",
                            "${highBlow2}",
                            '0px',
                            '-107px'
                        ],
                        [
                            "eid114",
                            "opacity",
                            42,
                            125,
                            "linear",
                            "${highBlow1}",
                            '0',
                            '0.49803921580314636'
                        ],
                        [
                            "eid117",
                            "opacity",
                            167,
                            125,
                            "linear",
                            "${highBlow1}",
                            '0.49803900718688965',
                            '0'
                        ],
                        [
                            "eid102",
                            "height",
                            0,
                            250,
                            "linear",
                            "${highBlow2}",
                            '504px',
                            '737px'
                        ],
                        [
                            "eid110",
                            "left",
                            42,
                            250,
                            "linear",
                            "${highBlow1}",
                            '49px',
                            '-34px'
                        ],
                        [
                            "eid112",
                            "width",
                            42,
                            250,
                            "linear",
                            "${highBlow1}",
                            '306px',
                            '389px'
                        ],
                        [
                            "eid108",
                            "height",
                            42,
                            250,
                            "linear",
                            "${highBlow1}",
                            '432px',
                            '632px'
                        ],
                        [
                            "eid106",
                            "width",
                            0,
                            250,
                            "linear",
                            "${highBlow2}",
                            '393px',
                            '500px'
                        ]
                    ]
                }
            },
            "vane_move": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['36', '0', '53', '82', 'auto', 'auto'],
                            id: 'lowInBlow_movie',
                            symbolName: 'lowInBlow_movie',
                            opacity: '0.5',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            symbolName: 'highInBlow_movie',
                            display: 'none',
                            opacity: '0.8',
                            rect: ['41', '-5', '102', '100', 'auto', 'auto'],
                            id: 'highInBlow_movie'
                        },
                        {
                            rect: ['53px', '36px', '74', '100', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vane.png'],
                            id: 'vane',
                            transform: [[], ['29'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '297px']
                        }
                    }
                },
                timeline: {
                    duration: 2375,
                    autoPlay: false,
                    labels: {
                        "vn_st": 250,
                        "vn_rw": 792,
                        "vp_st": 1333,
                        "vp_rw": 1875
                    },
                    data: [
                        [
                            "eid354",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highInBlow_movie}",
                            'none',
                            'none'
                        ],
                        [
                            "eid355",
                            "display",
                            750,
                            0,
                            "linear",
                            "${highInBlow_movie}",
                            'none',
                            'block'
                        ],
                        [
                            "eid356",
                            "display",
                            1292,
                            0,
                            "linear",
                            "${highInBlow_movie}",
                            'block',
                            'none'
                        ],
                        [
                            "eid145",
                            "rotateZ",
                            250,
                            500,
                            "linear",
                            "${vane}",
                            '29deg',
                            '-16deg'
                        ],
                        [
                            "eid147",
                            "rotateZ",
                            792,
                            500,
                            "linear",
                            "${vane}",
                            '-16deg',
                            '29deg'
                        ],
                        [
                            "eid148",
                            "rotateZ",
                            1333,
                            500,
                            "linear",
                            "${vane}",
                            '29deg',
                            '18deg'
                        ],
                        [
                            "eid150",
                            "rotateZ",
                            1875,
                            500,
                            "linear",
                            "${vane}",
                            '18deg',
                            '29deg'
                        ],
                            [ "eid357", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${lowInBlow_movie}', [] ] ],
                            [ "eid358", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${highInBlow_movie}', [] ] ]
                    ]
                }
            },
            "movieClip": {
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
                            id: 'actuator',
                            tag: 'img',
                            rect: ['0px', '114px', '376', '655', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/actuator.png']
                        },
                        {
                            type: 'image',
                            id: 'vBodyOut',
                            tag: 'img',
                            rect: ['241px', '232px', '649', '649', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vBodyOut.png']
                        },
                        {
                            transform: [[], ['-29'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            id: 'checkV',
                            type: 'image',
                            rect: ['auto', '591px', '238', '125', '668px', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/checkV.png']
                        },
                        {
                            type: 'image',
                            id: 'vBodyIn',
                            tag: 'img',
                            rect: ['170px', '272px', '680', '568', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vBodyIn.png']
                        },
                        {
                            rect: ['auto', '580px', '103', '79', '650px', 'auto'],
                            tag: 'img',
                            id: 'checkSub',
                            opacity: '0.49803921568627',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/checkSub.png']
                        },
                        {
                            type: 'image',
                            id: 'vBodyDot',
                            tag: 'img',
                            rect: ['265px', '259px', '597', '597', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vBodyDot.png']
                        },
                        {
                            rect: ['272px', '268px', '577', '570', 'auto', 'auto'],
                            tag: 'img',
                            id: 'pollution1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pollution1.png']
                        },
                        {
                            rect: ['311px', '281px', '539', '537', 'auto', 'auto'],
                            tag: 'img',
                            id: 'pollution2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pollution2.png']
                        },
                        {
                            type: 'image',
                            id: 'wheel_btm',
                            tag: 'img',
                            rect: ['387px', '376px', '359', '359', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel_btm.png']
                        },
                        {
                            rect: ['399px', '391px', '335', '336', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel_btm_pollution1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel_btm_pollution1.png']
                        },
                        {
                            rect: ['414px', '404px', '299', '302', 'auto', 'auto'],
                            id: 'turbine_move',
                            symbolName: 'turbine_move',
                            type: 'rect'
                        },
                        {
                            rect: ['458px', '259px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move1',
                            symbolName: 'vane_move',
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-28'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move2',
                            symbolName: 'vane_move',
                            rect: ['393px', '292px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-56'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move3',
                            symbolName: 'vane_move',
                            rect: ['354px', '358px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-83'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move4',
                            symbolName: 'vane_move',
                            rect: ['344px', '423px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-111'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move5',
                            symbolName: 'vane_move',
                            rect: ['368px', '491px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-139'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move6',
                            symbolName: 'vane_move',
                            rect: ['427px', '540px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-165'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move7',
                            symbolName: 'vane_move',
                            rect: ['495px', '559px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-194'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move8',
                            symbolName: 'vane_move',
                            rect: ['566px', '540px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-222'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move9',
                            symbolName: 'vane_move',
                            rect: ['620px', '496px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-249'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move10',
                            symbolName: 'vane_move',
                            rect: ['648px', '430px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-278'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move11',
                            symbolName: 'vane_move',
                            rect: ['638px', '354px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-305'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move12',
                            symbolName: 'vane_move',
                            rect: ['590px', '290px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['28'], [0, 0, 0], [1, 1, 1]],
                            id: 'vane_move13',
                            symbolName: 'vane_move',
                            rect: ['530px', '258px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['109px', '99px', '915', '1002', 'auto', 'auto'],
                            tag: 'img',
                            id: 'turboBody',
                            opacity: '0.29803921568627',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/turboBody.png']
                        },
                        {
                            rect: ['175px', '163px', '785', '1124', 'auto', 'auto'],
                            id: 'blows',
                            symbolName: 'blows',
                            type: 'rect'
                        },
                        {
                            rect: ['265px', '468px', '393', '504', 'auto', 'auto'],
                            id: 'outBlows',
                            symbolName: 'outBlows',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '0px', '376px', '273px', 'auto', 'auto'],
                            id: 'actuator_head',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/actuator_head.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '1287px']
                        }
                    }
                },
                timeline: {
                    duration: 23000,
                    autoPlay: false,
                    data: [
                        [
                            "eid132",
                            "right",
                            1000,
                            500,
                            "linear",
                            "${checkV}",
                            '641px',
                            '668px'
                        ],
                        [
                            "eid316",
                            "right",
                            3000,
                            500,
                            "linear",
                            "${checkV}",
                            '668px',
                            '641px'
                        ],
                        [
                            "eid483",
                            "right",
                            5000,
                            500,
                            "linear",
                            "${checkV}",
                            '641px',
                            '668px'
                        ],
                        [
                            "eid484",
                            "right",
                            7000,
                            500,
                            "linear",
                            "${checkV}",
                            '668px',
                            '641px'
                        ],
                        [
                            "eid501",
                            "right",
                            10000,
                            1500,
                            "linear",
                            "${checkV}",
                            '641px',
                            '668px'
                        ],
                        [
                            "eid511",
                            "right",
                            13000,
                            1500,
                            "linear",
                            "${checkV}",
                            '668px',
                            '641px'
                        ],
                        [
                            "eid528",
                            "right",
                            16000,
                            1500,
                            "linear",
                            "${checkV}",
                            '641px',
                            '668px'
                        ],
                        [
                            "eid529",
                            "right",
                            19000,
                            1500,
                            "linear",
                            "${checkV}",
                            '668px',
                            '641px'
                        ],
                        [
                            "eid126",
                            "-webkit-transform-origin",
                            1500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1035",
                            "-moz-transform-origin",
                            1500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1036",
                            "-ms-transform-origin",
                            1500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1037",
                            "msTransformOrigin",
                            1500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1038",
                            "-o-transform-origin",
                            1500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1039",
                            "transform-origin",
                            1500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid482",
                            "-webkit-transform-origin",
                            5500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1040",
                            "-moz-transform-origin",
                            5500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1041",
                            "-ms-transform-origin",
                            5500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1042",
                            "msTransformOrigin",
                            5500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1043",
                            "-o-transform-origin",
                            5500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1044",
                            "transform-origin",
                            5500,
                            0,
                            "linear",
                            "${checkV}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid130",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${actuator}",
                            '0px',
                            '114px'
                        ],
                        [
                            "eid318",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${actuator}",
                            '114px',
                            '0px'
                        ],
                        [
                            "eid489",
                            "top",
                            5000,
                            500,
                            "linear",
                            "${actuator}",
                            '0px',
                            '114px'
                        ],
                        [
                            "eid490",
                            "top",
                            7000,
                            500,
                            "linear",
                            "${actuator}",
                            '114px',
                            '0px'
                        ],
                        [
                            "eid503",
                            "top",
                            10000,
                            1500,
                            "linear",
                            "${actuator}",
                            '0px',
                            '114px'
                        ],
                        [
                            "eid513",
                            "top",
                            13000,
                            1500,
                            "linear",
                            "${actuator}",
                            '114px',
                            '0px'
                        ],
                        [
                            "eid532",
                            "top",
                            16000,
                            1500,
                            "linear",
                            "${actuator}",
                            '0px',
                            '114px'
                        ],
                        [
                            "eid533",
                            "top",
                            19000,
                            1500,
                            "linear",
                            "${actuator}",
                            '114px',
                            '0px'
                        ],
                        [
                            "eid131",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${checkV}",
                            '568px',
                            '591px'
                        ],
                        [
                            "eid315",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${checkV}",
                            '591px',
                            '568px'
                        ],
                        [
                            "eid485",
                            "top",
                            5000,
                            500,
                            "linear",
                            "${checkV}",
                            '568px',
                            '591px'
                        ],
                        [
                            "eid486",
                            "top",
                            7000,
                            500,
                            "linear",
                            "${checkV}",
                            '591px',
                            '568px'
                        ],
                        [
                            "eid500",
                            "top",
                            10000,
                            1500,
                            "linear",
                            "${checkV}",
                            '568px',
                            '591px'
                        ],
                        [
                            "eid510",
                            "top",
                            13000,
                            1500,
                            "linear",
                            "${checkV}",
                            '591px',
                            '568px'
                        ],
                        [
                            "eid526",
                            "top",
                            16000,
                            1500,
                            "linear",
                            "${checkV}",
                            '568px',
                            '591px'
                        ],
                        [
                            "eid527",
                            "top",
                            19000,
                            1500,
                            "linear",
                            "${checkV}",
                            '591px',
                            '568px'
                        ],
                        [
                            "eid133",
                            "rotateZ",
                            1000,
                            500,
                            "linear",
                            "${checkSub}",
                            '0deg',
                            '-26deg'
                        ],
                        [
                            "eid314",
                            "rotateZ",
                            3000,
                            500,
                            "linear",
                            "${checkSub}",
                            '-26deg',
                            '0deg'
                        ],
                        [
                            "eid480",
                            "rotateZ",
                            5000,
                            500,
                            "linear",
                            "${checkSub}",
                            '0deg',
                            '-26deg'
                        ],
                        [
                            "eid481",
                            "rotateZ",
                            7000,
                            500,
                            "linear",
                            "${checkSub}",
                            '-26deg',
                            '0deg'
                        ],
                        [
                            "eid499",
                            "rotateZ",
                            10000,
                            1500,
                            "linear",
                            "${checkSub}",
                            '0deg',
                            '-26deg'
                        ],
                        [
                            "eid509",
                            "rotateZ",
                            13000,
                            1500,
                            "linear",
                            "${checkSub}",
                            '-26deg',
                            '0deg'
                        ],
                        [
                            "eid524",
                            "rotateZ",
                            16000,
                            1500,
                            "linear",
                            "${checkSub}",
                            '0deg',
                            '-26deg'
                        ],
                        [
                            "eid525",
                            "rotateZ",
                            19000,
                            1500,
                            "linear",
                            "${checkSub}",
                            '-26deg',
                            '0deg'
                        ],
                        [
                            "eid127",
                            "rotateZ",
                            1000,
                            500,
                            "linear",
                            "${checkV}",
                            '0deg',
                            '-29deg'
                        ],
                        [
                            "eid317",
                            "rotateZ",
                            3000,
                            500,
                            "linear",
                            "${checkV}",
                            '-29deg',
                            '0deg'
                        ],
                        [
                            "eid487",
                            "rotateZ",
                            5000,
                            500,
                            "linear",
                            "${checkV}",
                            '0deg',
                            '-29deg'
                        ],
                        [
                            "eid488",
                            "rotateZ",
                            7000,
                            500,
                            "linear",
                            "${checkV}",
                            '-29deg',
                            '0deg'
                        ],
                        [
                            "eid502",
                            "rotateZ",
                            10000,
                            1500,
                            "linear",
                            "${checkV}",
                            '0deg',
                            '-29deg'
                        ],
                        [
                            "eid512",
                            "rotateZ",
                            13000,
                            1500,
                            "linear",
                            "${checkV}",
                            '-29deg',
                            '0deg'
                        ],
                        [
                            "eid530",
                            "rotateZ",
                            16000,
                            1500,
                            "linear",
                            "${checkV}",
                            '0deg',
                            '-29deg'
                        ],
                        [
                            "eid531",
                            "rotateZ",
                            19000,
                            1500,
                            "linear",
                            "${checkV}",
                            '-29deg',
                            '0deg'
                        ],
                        [
                            "eid570",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel_btm_pollution1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid493",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${wheel_btm_pollution1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid537",
                            "opacity",
                            21000,
                            1000,
                            "linear",
                            "${wheel_btm_pollution1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid571",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pollution2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid492",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${pollution2}",
                            '0',
                            '0.69918699186992'
                        ],
                        [
                            "eid538",
                            "opacity",
                            21000,
                            1000,
                            "linear",
                            "${pollution2}",
                            '0.69918699186992',
                            '0'
                        ],
                        [
                            "eid572",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pollution1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid491",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${pollution1}",
                            '0',
                            '0.69918699186992'
                        ],
                        [
                            "eid539",
                            "opacity",
                            21000,
                            1000,
                            "linear",
                            "${pollution1}",
                            '0.69918699186992',
                            '0'
                        ]
                    ]
                }
            },
            "highInBlow_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-90px', '53px', '141', '222', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/highInBlow.png'],
                            transform: [[], ['-41'], [], ['0.72601', '0.45045']],
                            id: 'highInBlow',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid178",
                            "rotateZ",
                            250,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '0deg',
                            '-41deg'
                        ],
                        [
                            "eid167",
                            "scaleX",
                            0,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '0.72601',
                            '1'
                        ],
                        [
                            "eid174",
                            "scaleX",
                            250,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '1',
                            '0.32357'
                        ],
                        [
                            "eid171",
                            "top",
                            0,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '-61px',
                            '5px'
                        ],
                        [
                            "eid177",
                            "top",
                            250,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '5px',
                            '53px'
                        ],
                        [
                            "eid173",
                            "left",
                            0,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '-19px',
                            '-41px'
                        ],
                        [
                            "eid176",
                            "left",
                            250,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '-41px',
                            '-90px'
                        ],
                        [
                            "eid169",
                            "scaleY",
                            0,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '0.45045',
                            '1'
                        ],
                        [
                            "eid175",
                            "scaleY",
                            250,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '1',
                            '0.28327'
                        ],
                        [
                            "eid180",
                            "opacity",
                            0,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "opacity",
                            250,
                            250,
                            "easeInQuad",
                            "${highInBlow}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "lowInBlow_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-40px', '-70px', '134', '222', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lowInBlow.png'],
                            transform: [[], ['9'], [], ['0.24895', '0.23359']],
                            id: 'lowInBlow',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid187",
                            "left",
                            0,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '-40px',
                            '-30px'
                        ],
                        [
                            "eid195",
                            "left",
                            250,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '-30px',
                            '-74px'
                        ],
                        [
                            "eid191",
                            "rotateZ",
                            0,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid194",
                            "rotateZ",
                            250,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '0deg',
                            '-34deg'
                        ],
                        [
                            "eid189",
                            "top",
                            0,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '-70px',
                            '0px'
                        ],
                        [
                            "eid196",
                            "top",
                            250,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '0px',
                            '55px'
                        ],
                        [
                            "eid183",
                            "scaleX",
                            0,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '0.31343',
                            '1'
                        ],
                        [
                            "eid192",
                            "scaleX",
                            250,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '1',
                            '0.24895'
                        ],
                        [
                            "eid185",
                            "scaleY",
                            0,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '0.34234',
                            '1'
                        ],
                        [
                            "eid193",
                            "scaleY",
                            250,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '1',
                            '0.23359'
                        ],
                        [
                            "eid198",
                            "opacity",
                            0,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid199",
                            "opacity",
                            250,
                            250,
                            "easeInQuad",
                            "${lowInBlow}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-4052948280");
