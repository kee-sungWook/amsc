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
                            id: 'txt',
                            type: 'text',
                            rect: ['278px', '1039px', '1804px', '135', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">새 엔진오일은 끈적이는 액체이며 코팅 역할을 하여 기계를 보호 함. </p><p style=\"margin:0px\">엔진오일을 오랜기간 사용 할 경우 물처럼 되어 엔진을 보호하지 못함.​</p>",
                            align: "center",
                            font: ['나눔고딕', [55, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "70px", "", ""],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'engine2',
                            symbolName: 'engine',
                            type: 'rect',
                            rect: ['1309px', '27px', '888', '913', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'engine1',
                            symbolName: 'engine',
                            type: 'rect',
                            rect: ['178px', '27px', '888', '913', 'auto', 'auto'],
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
                    duration: 958,
                    autoPlay: true,
                    data: [
                        [
                            "eid24",
                            "scaleY",
                            250,
                            500,
                            "easeOutQuad",
                            "${engine2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            250,
                            357,
                            "easeOutQuad",
                            "${engine2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            625,
                            250,
                            "easeOutQuad",
                            "${txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            0,
                            500,
                            "easeOutQuad",
                            "${engine1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid16",
                            "scaleX",
                            625,
                            250,
                            "easeOutQuad",
                            "${txt}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleY",
                            625,
                            250,
                            "easeOutQuad",
                            "${txt}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid21",
                            "scaleX",
                            0,
                            500,
                            "easeOutQuad",
                            "${engine1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${engine1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            250,
                            500,
                            "easeOutQuad",
                            "${engine2}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "head": {
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
                            id: 'head',
                            tag: 'img',
                            rect: ['0', '0', '419', '315', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/head.png']
                        },
                        {
                            type: 'rect',
                            id: 'sideLight',
                            symbolName: 'sideLight',
                            display: 'block',
                            rect: ['361', '132', '10', '18', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution1_head',
                            rect: ['93', '12', '212', '150', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution1_head.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution2_head',
                            rect: ['52', '12', '303', '169', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution2_head.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution3_head',
                            rect: ['20', '3', '371', '193', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution3_head.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution4_head',
                            opacity: '0.87058823529412',
                            rect: ['6', '2', '406', '193', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution4_head.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '419', '315']
                        }
                    }
                },
                timeline: {
                    duration: 667,
                    autoPlay: false,
                    labels: {
                        "step0": 0,
                        "step1": 67,
                        "step2": 133,
                        "step3": 200,
                        "step4": 267
                    },
                    data: [
                        [
                            "eid320",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution4_head}",
                            'none',
                            'none'
                        ],
                        [
                            "eid324",
                            "display",
                            267,
                            0,
                            "linear",
                            "${pollution4_head}",
                            'none',
                            'block'
                        ],
                        [
                            "eid322",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution2_head}",
                            'none',
                            'none'
                        ],
                        [
                            "eid326",
                            "display",
                            133,
                            0,
                            "linear",
                            "${pollution2_head}",
                            'none',
                            'block'
                        ],
                        [
                            "eid319",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution1_head}",
                            'none',
                            'none'
                        ],
                        [
                            "eid323",
                            "display",
                            67,
                            0,
                            "linear",
                            "${pollution1_head}",
                            'none',
                            'block'
                        ],
                        [
                            "eid321",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution3_head}",
                            'none',
                            'none'
                        ],
                        [
                            "eid325",
                            "display",
                            200,
                            0,
                            "linear",
                            "${pollution3_head}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sideLight}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "engine": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['198', '442', '487', '471', 'auto', 'auto'],
                            id: 'body',
                            symbolName: 'body',
                            type: 'rect'
                        },
                        {
                            rect: ['245', '437', '408', '203', 'auto', 'auto'],
                            id: 'gasket',
                            symbolName: 'gasket',
                            type: 'rect'
                        },
                        {
                            rect: ['369', '366', '117', '260', 'auto', 'auto'],
                            id: 'piston',
                            symbolName: 'piston',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['243', '312', '419', '315', 'auto', 'auto'],
                            id: 'head',
                            symbolName: 'head',
                            type: 'rect'
                        },
                        {
                            rect: ['245', '243', '419', '262', 'auto', 'auto'],
                            id: 'cap',
                            symbolName: 'cap',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: ['264', '474', '181', '62', 'auto', 'auto'],
                            id: 'cam',
                            symbolName: 'cam',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '888', '913']
                        }
                    }
                },
                timeline: {
                    duration: 1433,
                    autoPlay: false,
                    data: [
                        [
                            "eid282",
                            "top",
                            800,
                            633,
                            "easeOutQuad",
                            "${head}",
                            '312px',
                            '214px'
                        ],
                        [
                            "eid318",
                            "top",
                            800,
                            633,
                            "easeOutQuad",
                            "${piston}",
                            '366px',
                            '335px'
                        ],
                        [
                            "eid286",
                            "top",
                            800,
                            633,
                            "easeOutQuad",
                            "${cam}",
                            '474px',
                            '376px'
                        ],
                        [
                            "eid357",
                            "top",
                            500,
                            600,
                            "easeInQuad",
                            "${cap}",
                            '243px',
                            '-26px'
                        ],
                        [
                            "eid280",
                            "left",
                            800,
                            633,
                            "easeOutQuad",
                            "${head}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid290",
                            "top",
                            800,
                            633,
                            "easeOutQuad",
                            "${gasket}",
                            '437px',
                            '182px'
                        ],
                        [
                            "eid316",
                            "left",
                            800,
                            633,
                            "easeOutQuad",
                            "${piston}",
                            '369px',
                            '771px'
                        ],
                        [
                            "eid358",
                            "opacity",
                            500,
                            600,
                            "easeInQuad",
                            "${cap}",
                            '1',
                            '0'
                        ],
                        [
                            "eid343",
                            "opacity",
                            800,
                            633,
                            "easeOutQuad",
                            "${piston}",
                            '0',
                            '1'
                        ],
                        [
                            "eid284",
                            "left",
                            800,
                            633,
                            "easeOutQuad",
                            "${cam}",
                            '264px',
                            '21px'
                        ],
                        [
                            "eid288",
                            "left",
                            800,
                            633,
                            "easeOutQuad",
                            "${gasket}",
                            '245px',
                            '460px'
                        ]
                    ]
                }
            },
            "body": {
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
                            id: 'engBody',
                            tag: 'img',
                            rect: [0, 4, '487', '467', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/engBody.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution1_body',
                            rect: [90, 32, '301', '126', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution1_body.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution2_body',
                            rect: [38, 0, '353', '209', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution2_body.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution3_body',
                            rect: [46, 5, '396', '204', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution3_body.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution4_body',
                            rect: [44, 4, '415', '204', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution4_body.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 487, 471]
                        }
                    }
                },
                timeline: {
                    duration: 267,
                    autoPlay: false,
                    labels: {
                        "step0": 0,
                        "step1": 67,
                        "step2": 133,
                        "step3": 200,
                        "step4": 267
                    },
                    data: [
                        [
                            "eid308",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution3_body}",
                            'none',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            200,
                            0,
                            "linear",
                            "${pollution3_body}",
                            'none',
                            'block'
                        ],
                        [
                            "eid307",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution4_body}",
                            'none',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            267,
                            0,
                            "linear",
                            "${pollution4_body}",
                            'none',
                            'block'
                        ],
                        [
                            "eid310",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution1_body}",
                            'none',
                            'none'
                        ],
                        [
                            "eid311",
                            "display",
                            67,
                            0,
                            "linear",
                            "${pollution1_body}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution2_body}",
                            'none',
                            'none'
                        ],
                        [
                            "eid312",
                            "display",
                            133,
                            0,
                            "linear",
                            "${pollution2_body}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "piston": {
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
                            id: 'piston',
                            tag: 'img',
                            rect: [0, 0, '113', '260', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/piston.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'block',
                            id: 'pollution1_piston',
                            rect: [25, 10, '76', '94', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution1_piston.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'block',
                            id: 'pollution2_piston',
                            rect: [2, 10, '115', '94', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution2_piston.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'block',
                            id: 'pollution3_piston',
                            rect: [1, 0, '116', '104', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution3_piston.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'block',
                            id: 'pollution4_piston',
                            rect: [1, 0, '114', '103', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution4_piston.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 117, 260]
                        }
                    }
                },
                timeline: {
                    duration: 267,
                    autoPlay: false,
                    labels: {
                        "step0": 0,
                        "step1": 67,
                        "step2": 133,
                        "step3": 200,
                        "step4": 267
                    },
                    data: [
                        [
                            "eid299",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution4_piston}",
                            'block',
                            'none'
                        ],
                        [
                            "eid303",
                            "display",
                            267,
                            0,
                            "linear",
                            "${pollution4_piston}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution2_piston}",
                            'block',
                            'none'
                        ],
                        [
                            "eid305",
                            "display",
                            133,
                            0,
                            "linear",
                            "${pollution2_piston}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution3_piston}",
                            'block',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            200,
                            0,
                            "linear",
                            "${pollution3_piston}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pollution1_piston}",
                            'block',
                            'none'
                        ],
                        [
                            "eid306",
                            "display",
                            67,
                            0,
                            "linear",
                            "${pollution1_piston}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "sideLight": {
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
                            fill: ['rgba(0,0,0,0)', 'images/sideLight_src3.png'],
                            id: 'sideLight_src',
                            opacity: '0',
                            rect: [0, 0, '10', '18', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sideLight_src3.png'],
                            id: 'sideLight_srcCopy',
                            opacity: '0',
                            rect: [-46, 45, '10', '18', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sideLight_src3.png'],
                            id: 'sideLight_srcCopy2',
                            opacity: '0',
                            rect: [-92, 91, '10', '18', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 10, 18]
                        }
                    }
                },
                timeline: {
                    duration: 667,
                    autoPlay: true,
                    data: [
                        [
                            "eid332",
                            "opacity",
                            333,
                            167,
                            "linear",
                            "${sideLight_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid335",
                            "opacity",
                            500,
                            167,
                            "linear",
                            "${sideLight_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid328",
                            "opacity",
                            167,
                            167,
                            "linear",
                            "${sideLight_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid333",
                            "opacity",
                            333,
                            167,
                            "linear",
                            "${sideLight_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid330",
                            "opacity",
                            0,
                            167,
                            "linear",
                            "${sideLight_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid334",
                            "opacity",
                            167,
                            167,
                            "linear",
                            "${sideLight_srcCopy2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "cap": {
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
                            id: 'cap',
                            opacity: '1',
                            rect: [0, 0, '419', '262', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cap.png']
                        },
                        {
                            rect: ['127', '35', 131, 109, 'auto', 'auto'],
                            id: 'topLight',
                            symbolName: 'topLight',
                            display: 'block',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 419, 262]
                        }
                    }
                },
                timeline: {
                    duration: 567,
                    autoPlay: false,
                    data: [
                        [
                            "eid356",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${topLight}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "topLight": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 99, 29, 10, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,143,0,1.00)']
                        },
                        {
                            rect: [34, 66, 29, 10, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'EllipseCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,143,0,1.00)']
                        },
                        {
                            rect: [68, 33, 29, 10, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'EllipseCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,143,0,1.00)']
                        },
                        {
                            rect: [102, 0, 29, 10, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,143,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 131, 109]
                        }
                    }
                },
                timeline: {
                    duration: 567,
                    autoPlay: true,
                    data: [
                        [
                            "eid349",
                            "opacity",
                            300,
                            133,
                            "easeInQuad",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid354",
                            "opacity",
                            433,
                            134,
                            "easeInQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid345",
                            "opacity",
                            100,
                            133,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid352",
                            "opacity",
                            233,
                            134,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid351",
                            "opacity",
                            0,
                            133,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid355",
                            "opacity",
                            133,
                            134,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid347",
                            "opacity",
                            200,
                            133,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid353",
                            "opacity",
                            333,
                            134,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "gasket": {
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
                            id: 'gasket',
                            tag: 'img',
                            rect: [0, 0, '408', '203', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/gasket.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution1_gasket',
                            rect: [47, 56, '302', '93', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution1_gasket.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution2_gasket',
                            rect: [4, 0, '345', '203', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution2_gasket.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution3_gasket',
                            rect: [4, 1, '396', '201', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution3_gasket.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'pollution4_gasket',
                            rect: [2, 0, '404', '203', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pollution4_gasket.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 408, 203]
                        }
                    }
                },
                timeline: {
                    duration: 267,
                    autoPlay: false,
                    labels: {
                        "step0": 0,
                        "step1": 67,
                        "step2": 133,
                        "step3": 200,
                        "step4": 267
                    },
                    data: [
                        [
                            "eid291",
                            "display",
                            67,
                            0,
                            "linear",
                            "${pollution1_gasket}",
                            'none',
                            'block'
                        ],
                        [
                            "eid292",
                            "display",
                            267,
                            0,
                            "linear",
                            "${pollution4_gasket}",
                            'none',
                            'block'
                        ],
                        [
                            "eid293",
                            "display",
                            200,
                            0,
                            "linear",
                            "${pollution3_gasket}",
                            'none',
                            'block'
                        ],
                        [
                            "eid294",
                            "display",
                            133,
                            0,
                            "linear",
                            "${pollution2_gasket}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "cam": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '181', '62', 'auto', 'auto'],
                            id: 'capFront',
                            fill: ['rgba(0,0,0,0)', 'images/capFront.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 181, 62]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-2873517");
