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
                            id: 'btn1',
                            symbolName: 'btn1',
                            type: 'rect',
                            rect: ['1679px', '765px', '842', '106', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt_cont',
                            type: 'text',
                            rect: ['1679px', '564px', '751px', '144px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">오염으로 베인이 잘 움직이지 않아&nbsp;\n</p><p style=\"margin: 0px;\">출력, 연비 문제를 발생 시킨다.\n​</p>",
                            align: "auto",
                            font: ['나눔고딕', [45, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "60px", "", ""],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'txt_title',
                            type: 'text',
                            rect: ['1670px', '292px', '973px', '190px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">청소를 하지 않으면</p><p style=\"margin: 0px;\">​어떻게 되는가 ?</p>",
                            align: "auto",
                            font: ['나눔고딕', [70, "px"], "rgba(1,169,228,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["-4px", "", "85px", "", ""]
                        },
                        {
                            id: 'normalClip',
                            symbolName: 'movieClip',
                            type: 'rect',
                            rect: ['-49px', '105px', '1024', '1287', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'pollutionClip',
                            symbolName: 'movieClip',
                            type: 'rect',
                            rect: ['754px', '105px', '1024', '1287', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
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
                    duration: 15000,
                    autoPlay: true,
                    data: [
                        [
                            "eid219",
                            "scaleY",
                            125,
                            500,
                            "linear",
                            "${txt_cont}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid233",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${normalClip}",
                            '0',
                            '1'
                        ],
                        [
                            "eid229",
                            "opacity",
                            625,
                            500,
                            "linear",
                            "${btn1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid215",
                            "top",
                            0,
                            500,
                            "linear",
                            "${txt_title}",
                            '292px',
                            '342px'
                        ],
                        [
                            "eid223",
                            "top",
                            625,
                            500,
                            "linear",
                            "${btn1}",
                            '765px',
                            '795px'
                        ],
                        [
                            "eid231",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${pollutionClip}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "opacity",
                            125,
                            500,
                            "linear",
                            "${txt_cont}",
                            '0',
                            '1'
                        ],
                        [
                            "eid217",
                            "scaleX",
                            125,
                            500,
                            "linear",
                            "${txt_cont}",
                            '0.9',
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
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '672px', '102px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [2, 'rgba(0,74,141,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,73,141,1.00)']
                        },
                        {
                            rect: ['30px', '34px', '40', '40', 'auto', 'auto'],
                            id: 'con-1',
                            fill: ['rgba(0,0,0,0)', 'images/con-1.png'],
                            type: 'image',
                            tag: 'img'
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
                            isStage: 'true',
                            rect: [undefined, undefined, '842px', '106px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
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
                            rect: ['53px', '36px', '74', '100', 'auto', 'auto'],
                            tag: 'img',
                            id: 'vane',
                            transform: [[], ['29'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/vane.png']
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
                        ]
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
                            rect: ['0px', '114px', '376', '655', 'auto', 'auto'],
                            id: 'actuator',
                            fill: ['rgba(0,0,0,0)', 'images/actuator.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['241px', '232px', '649', '649', 'auto', 'auto'],
                            id: 'vBodyOut',
                            fill: ['rgba(0,0,0,0)', 'images/vBodyOut.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/checkV.png'],
                            id: 'checkV',
                            rect: ['auto', '591px', '238', '125', '668px', 'auto'],
                            transform: [[], ['-29'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img'
                        },
                        {
                            rect: ['170px', '272px', '680', '568', 'auto', 'auto'],
                            id: 'vBodyIn',
                            fill: ['rgba(0,0,0,0)', 'images/vBodyIn.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['auto', '580px', '103', '79', '650px', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/checkSub.png'],
                            id: 'checkSub',
                            opacity: '0.49803921568627',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['265px', '259px', '597', '597', 'auto', 'auto'],
                            id: 'vBodyDot',
                            fill: ['rgba(0,0,0,0)', 'images/vBodyDot.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['272px', '268px', '577', '570', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution1.png'],
                            id: 'pollution1',
                            opacity: '0.6',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['311px', '281px', '539', '537', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution2.png'],
                            id: 'pollution2',
                            opacity: '0.8',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['387px', '376px', '359', '359', 'auto', 'auto'],
                            id: 'wheel_btm',
                            fill: ['rgba(0,0,0,0)', 'images/wheel_btm.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['399px', '391px', '335', '336', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel_btm_pollution1.png'],
                            id: 'wheel_btm_pollution1',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            id: 'turbine_move',
                            symbolName: 'turbine_move',
                            rect: ['414px', '404px', '299', '302', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move1',
                            symbolName: 'vane_move',
                            rect: ['458px', '259px', '141', '297', 'auto', 'auto']
                        },
                        {
                            rect: ['393px', '292px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move2',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-28'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['354px', '358px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move3',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-56'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['344px', '423px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move4',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-83'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['368px', '491px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move5',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-111'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['427px', '540px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move6',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-139'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['495px', '559px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move7',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-165'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['566px', '540px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move8',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-194'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['620px', '496px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move9',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-222'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['648px', '430px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move10',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-249'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['638px', '354px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move11',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-278'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['590px', '290px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move12',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['-305'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['530px', '258px', '141', '297', 'auto', 'auto'],
                            id: 'vane_move13',
                            symbolName: 'vane_move',
                            type: 'rect',
                            transform: [[], ['28'], [0, 0, 0], [1, 1, 1]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '1287px']
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "pollution": 9000
                    },
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
                            4000,
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
                            "eid349",
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
                            "eid350",
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
                            "eid351",
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
                            "eid352",
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
                            "eid353",
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
                            4000,
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
                            4000,
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
                            4000,
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
                            4000,
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
                            "eid10",
                            "opacity",
                            9000,
                            0,
                            "linear",
                            "${wheel_btm_pollution1}",
                            '1',
                            '1'
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
                            "eid8",
                            "opacity",
                            9000,
                            0,
                            "linear",
                            "${pollution1}",
                            '0.69918699186992',
                            '0.6'
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
                            "eid6",
                            "opacity",
                            9000,
                            0,
                            "linear",
                            "${pollution2}",
                            '0.69918699186992',
                            '0.8'
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
                            type: 'image',
                            id: 'wheel',
                            tag: 'img',
                            rect: ['0px', '0px', '299', '302', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel.png']
                        },
                        {
                            rect: ['26px', '5px', '245', '267', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel_pollution1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel_pollution1.png']
                        },
                        {
                            rect: ['8px', '15px', '279', '264', 'auto', 'auto'],
                            tag: 'img',
                            id: 'wheel_pollution2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel_pollution2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '299px', '302px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "pollution": 500
                    },
                    data: [
                        [
                            "eid27",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel_pollution1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid221",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${wheel_pollution1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wheel_pollution2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid220",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${wheel_pollution2}",
                            '0',
                            '1'
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
                            rect: ['0px', '0px', '299', '302', 'auto', 'auto'],
                            id: 'turbine',
                            symbolName: 'turbine',
                            type: 'rect'
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-4052948280");
