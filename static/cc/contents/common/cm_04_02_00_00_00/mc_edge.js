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
            js+"jquery-1.7.1.min.js",
            js+"jquery-2.0.3.min.js"
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
                            id: 'smallPics',
                            symbolName: 'smallPics',
                            display: 'block',
                            type: 'rect',
                            rect: ['38', '335', '1825', '483', 'auto', 'auto']
                        },
                        {
                            id: 'bigPics',
                            symbolName: 'bigPics',
                            display: 'none',
                            type: 'rect',
                            rect: ['38', '56', '1824', '1174', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1900', '1230', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1317,
                    autoPlay: false,
                    labels: {
                        "showBig": 133
                    },
                    data: [
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${bigPics}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            133,
                            0,
                            "easeOutQuad",
                            "${bigPics}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${smallPics}",
                            'block',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            133,
                            0,
                            "easeOutQuad",
                            "${smallPics}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "opacity",
                            133,
                            500,
                            "easeOutQuad",
                            "${bigPics}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "bigPics": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '79', '1820', '1091', 'auto', 'auto'],
                            id: 'Big_nemo',
                            stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'bigPic3',
                            rect: ['-1', '0', '1824', '1165', 'auto', 'auto'],
                            id: 'bigPic3'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'bigPic2',
                            rect: ['-1', '0', '1824', '1165', 'auto', 'auto'],
                            id: 'bigPic2'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'bigPic1',
                            rect: ['-1', '0', '1824', '1165', 'auto', 'auto'],
                            id: 'bigPic1'
                        },
                        {
                            rect: ['9', '88', '1806', '1077', 'auto', 'auto'],
                            stroke: [2, 'rgb(0, 0, 0)', 'none'],
                            id: 'closealls',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            id: 'BUTTON_CLOSE',
                            symbolName: 'BUTTON_CLOSE',
                            rect: ['1728', '99', '75', '75', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1824', '1174']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${BUTTON_CLOSE}",
                            '1728px',
                            '1728px'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${bigPic2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${bigPic1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${BUTTON_CLOSE}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${bigPic3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "smallPic1": {
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
                            id: 'small_nemo',
                            stroke: ['2px', 'rgba(140,140,140,1.00)', 'solid'],
                            rect: [0, 0, 396, 396, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: [1, 424, 397, 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, ''], 'rgba(140,140,140,1.00)', 'normal', 'none', 'normal', '', ''],
                            id: 'Text2',
                            text: '브레이크 패드',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['9', '9', 382, 382, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'pic_src1',
                            symbolName: 'pic_src1',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 400, 483]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "smallPic2": {
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
                            id: 'small_nemo',
                            stroke: ['1px', 'rgba(140,140,140,1.00)', 'solid'],
                            rect: [0, 0, 396, 396, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: [1, 424, 398, 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, ''], 'rgba(140,140,140,1.00)', 'normal', 'none', 'normal', '', ''],
                            id: 'Text2',
                            text: '브레이크 드럼',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: [9, 9, 382, 382, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'pic_src2',
                            symbolName: 'pic_src2',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 400, 483]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pic_src2}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid11",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pic_src2}",
                            '9px',
                            '9px'
                        ]
                    ]
                }
            },
            "smallPic3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '396', '396', 'auto', 'auto'],
                            id: 'small_nemo',
                            stroke: [1, 'rgba(140,140,140,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1', '424', '399', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, ''], 'rgba(140,140,140,1.00)', 'normal', 'none', 'normal', 'break-word', ''],
                            id: 'Text2',
                            text: '<p style=\"margin:0px\">브레이크 액</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'pic_src3',
                            symbolName: 'pic_src3',
                            rect: ['9', '9', '382', '382', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '400', '483']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pic_src3}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pic_src3}",
                            '9px',
                            '9px'
                        ]
                    ]
                }
            },
            "pic_src1": {
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
                            id: 'pic1',
                            rect: [-129, 0, 640, 382, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 382, 382]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pic_src2": {
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
                            id: 'pic2',
                            rect: [-130, 0, 641, 382, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 382, 382]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pic_src3": {
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
                            id: 'pic3',
                            rect: [-130, 0, 641, 382, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic3.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 382, 382]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "smallPics": {
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
                            transform: [[], [], [], ['0.95', '0.95']],
                            id: 'smallPic3',
                            symbolName: 'smallPic3',
                            opacity: '0',
                            rect: ['1194', '0', '400', '483', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.95', '0.95']],
                            id: 'smallPic2',
                            symbolName: 'smallPic2',
                            opacity: '0',
                            rect: ['719', '0', '400', '483', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.95', '0.95']],
                            id: 'smallPic1',
                            symbolName: 'smallPic1',
                            opacity: '0',
                            rect: ['244', '0', '400', '483', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1825', '483']
                        }
                    }
                },
                timeline: {
                    duration: 1317,
                    autoPlay: true,
                    data: [
                        [
                            "eid23",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${smallPic1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleY",
                            0,
                            500,
                            "easeOutQuad",
                            "${smallPic1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            252,
                            500,
                            "easeOutQuad",
                            "${smallPic2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            500,
                            500,
                            "easeOutQuad",
                            "${smallPic3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            500,
                            500,
                            "easeOutQuad",
                            "${smallPic3}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid27",
                            "scaleY",
                            252,
                            500,
                            "easeOutQuad",
                            "${smallPic2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            0,
                            500,
                            "easeOutQuad",
                            "${smallPic1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            500,
                            500,
                            "easeOutQuad",
                            "${smallPic3}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            252,
                            500,
                            "easeOutQuad",
                            "${smallPic2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "BUTTON_CLOSE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '75', '75', 'auto', 'auto'],
                            tag: 'img',
                            id: 'close_btn',
                            opacity: 0.6,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/close_btn.png']
                        },
                        {
                            rect: [2, 2, '70', '70', 'auto', 'auto'],
                            tag: 'img',
                            id: 'close_x',
                            opacity: 0.6,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/close_x.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 75, 75]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bigPic1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pic1',
                            type: 'image',
                            rect: ['9', '88', '1806px', '1077px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic1.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1824', '80', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            id: 'Text1',
                            text: '정상인 브레이크 패드와 마모된 브레이크 패드',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['248px', '970px', '418px', '118px', 'auto', 'auto'],
                            stroke: [1, 'rgb(140, 140, 140)', 'none'],
                            id: 'Rectangle2',
                            opacity: '0.5',
                            type: 'rect',
                            fill: ['rgba(255,143,0,1.00)']
                        },
                        {
                            rect: ['1174px', '970px', '418px', '118px', 'auto', 'auto'],
                            stroke: [1, 'rgb(140, 140, 140)', 'none'],
                            id: 'Rectangle2Copy',
                            opacity: '0.5',
                            type: 'rect',
                            fill: ['rgba(255,143,0,1.00)']
                        },
                        {
                            rect: ['248px', '970px', '418px', '107px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [80, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', ''],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​정상</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['1174px', '970px', '418px', '107px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [80, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', ''],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​마모</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1824', '1165']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bigPic2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pic2',
                            type: 'image',
                            rect: ['9', '88', '1806px', '1077px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1824', '80', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            id: 'Text2',
                            text: '마모된 브레이크 드럼과 정상 브레이크 드럼',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['248px', '970px', '418px', '118px', 'auto', 'auto'],
                            stroke: [1, 'rgb(140, 140, 140)', 'none'],
                            id: 'Rectangle2Copy3',
                            opacity: '0.5',
                            type: 'rect',
                            fill: ['rgba(255,143,0,1.00)']
                        },
                        {
                            rect: ['1174px', '970px', '418px', '118px', 'auto', 'auto'],
                            stroke: [1, 'rgb(140, 140, 140)', 'none'],
                            id: 'Rectangle2Copy2',
                            opacity: '0.5',
                            type: 'rect',
                            fill: ['rgba(255,143,0,1.00)']
                        },
                        {
                            rect: ['248px', '970px', '418px', '107px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [80, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', ''],
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">​정상</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['1174px', '970px', '418px', '107px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [80, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', ''],
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">​마모</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1824', '1165']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bigPic3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pic3',
                            type: 'image',
                            rect: ['10', '88', '1806px', '1077px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pic3.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0', '0px', '1824', '80', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            id: 'Text3',
                            text: '브레이크 액',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['76px', '274px', '1674px', '346px', 'auto', 'auto'],
                            stroke: [1, 'rgb(140, 140, 140)', 'none'],
                            id: 'Rectangle',
                            opacity: '0.41463414634146',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0', '332px', '1824', '282px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1.00)', '700', 'none', '', 'break-word', ''],
                            id: 'Text3Copy',
                            text: '<p style=\"margin: 0px;\">​블레이크액 교환은 색이 아닌 수분함유량으로 판단이 필요합니다.</p><p style=\"margin: 0px;\">(수분체크장비 필요)</p><p style=\"margin: 0px;\">교환주기는 취급설명서상의 정기점검 항목을 참고하시기 바랍니다.&nbsp;</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1824', '1165']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-5260140");
