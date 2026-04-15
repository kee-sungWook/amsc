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
                            rect: ['1679px', '935px', '676px', '106', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt_cont',
                            type: 'text',
                            rect: ['1679px', '298px', '751px', '656px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​출력 가속응답성 저하.</p><p style=\"margin: 0px;\">연비저하.</p><p style=\"margin: 0px;\">배기개스 과다발생.</p><p style=\"margin: 0px;\">기타 엔진트러블 및 소음증가 등의 </p><p style=\"margin: 0px;\">문제점이 터보와 엔진의 언밸런스에 </p><p style=\"margin: 0px;\">의해 발생하게 됩니다.&nbsp;</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">그러므로, 터보차져는 엔진오일과 </p><p style=\"margin: 0px;\">함께 정기적으로 관리해야 합니다.</p>",
                            align: "auto",
                            font: ['나눔고딕', [45, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "70px", "", ""],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'txt_title',
                            type: 'text',
                            rect: ['1672px', '60px', '973px', '190px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">관리를 하지 않으면</p><p style=\"margin: 0px;\">​어떻게 되는가 ?</p>",
                            align: "auto",
                            font: ['나눔고딕', [70, "px"], "rgba(1,169,228,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["-4px", "", "85px", "", ""]
                        },
                        {
                            id: 'normalClip',
                            symbolName: 'movieClip',
                            type: 'rect',
                            rect: ['-51px', '113px', '1024', '1287', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'pollutionClip',
                            symbolName: 'movieClip',
                            type: 'rect',
                            rect: ['752px', '113px', '1024', '1287', 'auto', 'auto'],
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
                            1241,
                            509,
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
                            '60px',
                            '82px'
                        ],
                        [
                            "eid389",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${normalClip}",
                            '113px',
                            '113px'
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
                            "eid217",
                            "scaleX",
                            125,
                            500,
                            "linear",
                            "${txt_cont}",
                            '0.9',
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
                            "eid223",
                            "top",
                            625,
                            500,
                            "linear",
                            "${btn1}",
                            '935px',
                            '985px'
                        ],
                        [
                            "eid390",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${pollutionClip}",
                            '113px',
                            '113px'
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
                            rect: ['0px', '0px', '672px', '102px', 'auto', 'auto'],
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
                            font: ['나눔고딕', [50, ''], 'rgba(0,73,141,1)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'txt_menu1',
                            text: '<p style=\"margin:0px\">터보장치 메인페이지</p>',
                            align: 'auto',
                            rect: ['115px', '26px', '561px', '56', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '676px', '106px']
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
                            type: 'image',
                            tag: 'img',
                            id: 'vane',
                            rect: ['53px', '36px', '74', '100', 'auto', 'auto'],
                            transform: [[], ['29'], [0, 0, 0], [1, 1, 1]],
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
                            rect: ['auto', '591px', '238', '125', '668px', 'auto'],
                            transform: [[], ['-29']],
                            id: 'checkV',
                            fill: ['rgba(0,0,0,0)', 'images/checkV.png'],
                            type: 'image',
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
                            id: 'turbine_move',
                            symbolName: 'turbine_move',
                            rect: ['414px', '404px', '299', '302', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'vane_move1',
                            symbolName: 'vane_move',
                            rect: ['458px', '259px', '141', '297', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'vane_move2',
                            symbolName: 'vane_move',
                            transform: [[], ['-28']],
                            rect: ['393px', '292px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move3',
                            symbolName: 'vane_move',
                            transform: [[], ['-56']],
                            rect: ['354px', '358px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move4',
                            symbolName: 'vane_move',
                            transform: [[], ['-83']],
                            rect: ['344px', '423px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move5',
                            symbolName: 'vane_move',
                            transform: [[], ['-111']],
                            rect: ['368px', '491px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move6',
                            symbolName: 'vane_move',
                            transform: [[], ['-139']],
                            rect: ['427px', '540px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move7',
                            symbolName: 'vane_move',
                            transform: [[], ['-165']],
                            rect: ['495px', '559px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move8',
                            symbolName: 'vane_move',
                            transform: [[], ['-194']],
                            rect: ['566px', '540px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move9',
                            symbolName: 'vane_move',
                            transform: [[], ['-222']],
                            rect: ['620px', '496px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move10',
                            symbolName: 'vane_move',
                            transform: [[], ['-249']],
                            rect: ['648px', '430px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move11',
                            symbolName: 'vane_move',
                            transform: [[], ['-278']],
                            rect: ['638px', '354px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move12',
                            symbolName: 'vane_move',
                            transform: [[], ['-305']],
                            rect: ['590px', '290px', '141', '297', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'vane_move13',
                            symbolName: 'vane_move',
                            transform: [[], ['28']],
                            rect: ['530px', '258px', '141', '297', 'auto', 'auto']
                        },
                        {
                            id: 'actuator_head',
                            type: 'image',
                            rect: ['0px', '0px', '376px', '273px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/actuator_head.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '1287px']
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
                            "eid427",
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
                            "eid428",
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
                            "eid429",
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
                            "eid430",
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
                            "eid431",
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
