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
                            rect: ['1379px', '905px', '842', '106', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'txt_contCopy',
                            type: 'text',
                            rect: ['auto', '394px', '1141px', '521px', '-126px', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">구성도에서 보는대로, 엔진에 필요한 흡입공기량은 </p><p style=\"margin: 0px;\">모두 터보의 흡입부를 통하여 공급 되고, </p><p style=\"margin: 0px;\">연소폭발 한 후에는 터보의 배기부( 터빈 실 )를 </p><p style=\"margin: 0px;\">통과하여 배출되는 구조이므로 터보의 불균일 동작은 </p><p style=\"margin: 0px;\">곧, 엔진출력의 불균일과 엔진트러블로 직결됩니다.​</p>",
                            align: "auto",
                            font: ['나눔고딕', [45, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["-2px", "0px", "80px", "", ""]
                        },
                        {
                            id: 'txt_titleCopy',
                            type: 'text',
                            rect: ['1365px', '190px', '1135px', '140px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">터보장치와 엔진내부 구성도​</p>",
                            align: "auto",
                            font: ['나눔고딕', [70, "px"], "rgba(1,169,228,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "60px", "", ""],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'ENG',
                            symbolName: 'ENG',
                            type: 'rect',
                            rect: ['597px', '508px', '466', '749', 'auto', 'auto'],
                            transform: [[],[],[],['-0.5928','0.59279']]
                        },
                        {
                            id: 'flowMovie',
                            symbolName: 'flowMovie',
                            type: 'rect',
                            rect: ['-406px', '59px', '1791', '920', 'auto', 'auto'],
                            transform: [[],[],[],['0.79','0.79']]
                        },
                        {
                            id: 'txtParts1',
                            type: 'text',
                            rect: ['29px', '212px', '393px', '56', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​에어크리너</p>",
                            align: "center",
                            font: ['나눔고딕', [45, "px"], "rgba(0,73,141,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txtParts1Copy',
                            type: 'text',
                            rect: ['657px', '86px', '393px', '56', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​터보차저</p>",
                            align: "center",
                            font: ['나눔고딕', [45, "px"], "rgba(0,73,141,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txtParts1Copy2',
                            type: 'text',
                            rect: ['1051px', '463px', '291px', '56', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​배기부</p>",
                            align: "left",
                            font: ['나눔고딕', [45, "px"], "rgba(0,0,0,1.00)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txtParts1Copy3',
                            type: 'text',
                            rect: ['396px', '463px', '291px', '56', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​흡입부</p>",
                            align: "right",
                            font: ['나눔고딕', [45, "px"], "rgba(0,0,0,1.00)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txtParts2',
                            type: 'text',
                            rect: ['368px', '184px', '243px', '106px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​공기량</p><p style=\"margin:0px\">센서</p>",
                            align: "center",
                            font: ['나눔고딕', [45, "px"], "rgba(0,73,141,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txtParts3',
                            type: 'text',
                            rect: ['239px', '901px', '393px', '56', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​인터쿨러</p>",
                            align: "center",
                            font: ['나눔고딕', [45, "px"], "rgba(0,73,141,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txtParts3Copy',
                            type: 'text',
                            rect: ['943px', '989px', '203px', '56', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: left;\">​엔진</p>",
                            align: "center",
                            font: ['나눔고딕', [45, "px"], "rgba(0,73,141,1)", "400", "none", "normal", "break-word", ""]
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
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "right",
                            167,
                            500,
                            "linear",
                            "${txt_contCopy}",
                            '-126px',
                            '-106px'
                        ],
                        [
                            "eid49649",
                            "letter-spacing",
                            1167,
                            0,
                            "linear",
                            "${txt_titleCopy}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            667,
                            500,
                            "linear",
                            "${btn1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "top",
                            667,
                            500,
                            "linear",
                            "${btn1}",
                            '905px',
                            '935px'
                        ],
                        [
                            "eid9",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_titleCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            167,
                            500,
                            "linear",
                            "${txt_contCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${txt_titleCopy}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${txt_titleCopy}",
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
                            font: ['나눔고딕', [50, ''], 'rgba(0,73,141,1)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'txt_menu1',
                            text: '<p style=\"margin:0px\">터보장치 메인페이지</p>',
                            align: 'auto',
                            rect: ['115px', '26px', '703px', '56', 'auto', 'auto']
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
            "SPARK_FIRE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [8, 5, '52', '51', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fireBlack.png'],
                            id: 'fireBlack',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [8, 5, '52', '51', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fireWhite.png'],
                            id: 'fireWhite',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 0, '68', '65', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fire3.png'],
                            id: 'fire3',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [3, 1, '61', '63', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fire2.png'],
                            id: 'fire2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '68', '65', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fire1.png'],
                            id: 'fire1',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 68, 65]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid22",
                            "scaleY",
                            162,
                            163,
                            "linear",
                            "${fire2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid2",
                            "opacity",
                            56,
                            56,
                            "linear",
                            "${fireBlack}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            111,
                            56,
                            "linear",
                            "${fireBlack}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "opacity",
                            167,
                            56,
                            "linear",
                            "${fireBlack}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "opacity",
                            222,
                            56,
                            "linear",
                            "${fireBlack}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "opacity",
                            278,
                            56,
                            "linear",
                            "${fireBlack}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            333,
                            56,
                            "linear",
                            "${fireBlack}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17",
                            "opacity",
                            389,
                            56,
                            "linear",
                            "${fireBlack}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            444,
                            56,
                            "linear",
                            "${fireBlack}",
                            '1',
                            '0'
                        ],
                        [
                            "eid26",
                            "opacity",
                            333,
                            77,
                            "linear",
                            "${fire3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            410,
                            77,
                            "linear",
                            "${fire3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            487,
                            0,
                            "linear",
                            "${fire3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            0,
                            81,
                            "linear",
                            "${fire1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            81,
                            81,
                            "linear",
                            "${fire1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid45",
                            "opacity",
                            162,
                            0,
                            "linear",
                            "${fire1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            0,
                            162,
                            "linear",
                            "${fire1}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            0,
                            162,
                            "linear",
                            "${fire1}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid4",
                            "opacity",
                            0,
                            56,
                            "linear",
                            "${fireWhite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            56,
                            56,
                            "linear",
                            "${fireWhite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "opacity",
                            111,
                            56,
                            "linear",
                            "${fireWhite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            167,
                            56,
                            "linear",
                            "${fireWhite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "opacity",
                            222,
                            56,
                            "linear",
                            "${fireWhite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            278,
                            56,
                            "linear",
                            "${fireWhite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "opacity",
                            333,
                            56,
                            "linear",
                            "${fireWhite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            389,
                            56,
                            "linear",
                            "${fireWhite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            162,
                            81,
                            "linear",
                            "${fire2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            243,
                            81,
                            "linear",
                            "${fire2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            325,
                            0,
                            "linear",
                            "${fire2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21",
                            "scaleX",
                            162,
                            163,
                            "linear",
                            "${fire2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            333,
                            154,
                            "linear",
                            "${fire3}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            333,
                            154,
                            "linear",
                            "${fire3}",
                            '1',
                            '1.2'
                        ]
                    ]
                }
            },
            "BOMB": {
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
                            id: 'bombBlack',
                            opacity: '0',
                            rect: ['0', '0', '184px', '95', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bombBlack.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bombRed',
                            opacity: '0',
                            rect: ['0', '0', '184px', '95', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bombRed.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bombWhite',
                            opacity: '0',
                            rect: ['0', '0', '184px', '95', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bombWhite.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '184', '94']
                        }
                    }
                },
                timeline: {
                    duration: 367,
                    autoPlay: false,
                    data: [
                        [
                            "eid203",
                            "opacity",
                            46,
                            46,
                            "linear",
                            "${bombRed}",
                            '0',
                            '1'
                        ],
                        [
                            "eid208",
                            "opacity",
                            92,
                            46,
                            "linear",
                            "${bombRed}",
                            '1',
                            '0'
                        ],
                        [
                            "eid213",
                            "opacity",
                            229,
                            46,
                            "linear",
                            "${bombRed}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "opacity",
                            275,
                            46,
                            "linear",
                            "${bombRed}",
                            '1',
                            '0'
                        ],
                        [
                            "eid207",
                            "opacity",
                            92,
                            46,
                            "linear",
                            "${bombBlack}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            137,
                            46,
                            "linear",
                            "${bombBlack}",
                            '1',
                            '0'
                        ],
                        [
                            "eid215",
                            "opacity",
                            275,
                            46,
                            "linear",
                            "${bombBlack}",
                            '0',
                            '1'
                        ],
                        [
                            "eid216",
                            "opacity",
                            321,
                            46,
                            "linear",
                            "${bombBlack}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            0,
                            46,
                            "linear",
                            "${bombWhite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid209",
                            "opacity",
                            46,
                            46,
                            "linear",
                            "${bombWhite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid211",
                            "opacity",
                            183,
                            46,
                            "linear",
                            "${bombWhite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid212",
                            "opacity",
                            229,
                            46,
                            "linear",
                            "${bombWhite}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "ENG": {
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
                            rect: ['147', '197', '173', '165', 'auto', 'auto'],
                            display: 'block',
                            id: 'inBlue',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)', [50, 50, 'true', 'farthest-corner', [['rgba(0,175,244,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['147', '197', '173', '1', 'auto', 'auto'],
                            opacity: '0',
                            id: 'inRed',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [50, 50, 'true', 'farthest-corner', [['rgba(244,0,114,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['143', '138', '184', '94', 'auto', 'auto'],
                            id: 'BOMB',
                            symbolName: 'BOMB',
                            type: 'rect',
                            transform: [[], [], [], ['1.03261', '2.38298']]
                        },
                        {
                            type: 'image',
                            id: 'blinderM',
                            tag: 'img',
                            rect: ['141', '10', '188', '235', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blinderM.png']
                        },
                        {
                            rect: ['456', '200', '2', '8', 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            id: 'airBlue1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                        },
                        {
                            rect: ['456', '209', '2', '8', 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            id: 'airBlue2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                        },
                        {
                            rect: ['456', '217', '2', '8', 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            id: 'airBlue3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                        },
                        {
                            rect: ['456', '226', '2', '8', 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            id: 'airBlue4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(0,173,252,1.00)', 50], ['rgba(239,239,239,1.00)', 100]]]]
                        },
                        {
                            rect: ['189', '200', '2', '8', 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            id: 'airRed1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                        },
                        {
                            rect: ['189', '209', '2', '8', 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            id: 'airRed2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                        },
                        {
                            rect: ['179', '217', '2', '8', 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            id: 'airRed3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                        },
                        {
                            rect: ['161', '226', '1', '8', 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            id: 'airRed4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [180, [['rgba(239,239,239,1.00)', 0], ['rgba(255,0,103,1.00)', 50], ['rgba(239,239,239,1.00)', 99]]]]
                        },
                        {
                            type: 'image',
                            id: 'blinderS',
                            tag: 'img',
                            rect: ['0', '196', '466', '43', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blinderS.png']
                        },
                        {
                            rect: ['146', '265', '175', '372', 'auto', 'auto'],
                            id: 'CRANK_PISTON',
                            symbolName: 'CRANK_PISTON',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'eng_body',
                            tag: 'img',
                            rect: ['16', '8', '436', '741', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/eng_body.png']
                        },
                        {
                            type: 'image',
                            id: 'valve2',
                            tag: 'img',
                            rect: ['262', '109', '90', '123', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/valve2.png']
                        },
                        {
                            type: 'image',
                            id: 'valve1',
                            tag: 'img',
                            rect: ['117', '109', '90', '123', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/valve1.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'cam2',
                            rect: ['315', '49', '59', '69', 'auto', 'auto'],
                            transform: [[], ['110'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/cam2.png']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'cam1',
                            rect: ['96', '49', '59', '69', 'auto', 'auto'],
                            transform: [[], ['-110'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/cam1.png']
                        },
                        {
                            type: 'image',
                            id: 'sp_plug',
                            tag: 'img',
                            rect: ['206', '0', '58', '224', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sp_plug.png']
                        },
                        {
                            rect: ['201', '186', '68', '65', 'auto', 'auto'],
                            id: 'SPARK_FIRE',
                            symbolName: 'SPARK_FIRE',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '466', '749']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid123",
                            "width",
                            0,
                            500,
                            "linear",
                            "${airBlue2}",
                            '2px',
                            '185px'
                        ],
                        [
                            "eid133",
                            "width",
                            767,
                            1000,
                            "easeOutQuad",
                            "${airBlue2}",
                            '185px',
                            '1px'
                        ],
                        [
                            "eid229",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${inBlue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${valve1}",
                            '109px',
                            '132px'
                        ],
                        [
                            "eid95",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${valve1}",
                            '132px',
                            '109px'
                        ],
                        [
                            "eid93",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${valve1}",
                            '117px',
                            '129px'
                        ],
                        [
                            "eid94",
                            "left",
                            3000,
                            1000,
                            "linear",
                            "${valve1}",
                            '129px',
                            '117px'
                        ],
                        [
                            "eid131",
                            "width",
                            0,
                            500,
                            "linear",
                            "${airBlue1}",
                            '2px',
                            '185px'
                        ],
                        [
                            "eid135",
                            "width",
                            767,
                            1000,
                            "easeOutQuad",
                            "${airBlue1}",
                            '185px',
                            '1px'
                        ],
                        [
                            "eid57",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${cam1}",
                            '-110deg',
                            '250deg'
                        ],
                        [
                            "eid156",
                            "width",
                            3000,
                            533,
                            "linear",
                            "${airRed3}",
                            '2px',
                            '175px'
                        ],
                        [
                            "eid161",
                            "width",
                            3667,
                            333,
                            "linear",
                            "${airRed3}",
                            '175px',
                            '8px'
                        ],
                        [
                            "eid58",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${cam2}",
                            '110deg',
                            '470deg'
                        ],
                        [
                            "eid158",
                            "width",
                            3000,
                            533,
                            "linear",
                            "${airRed2}",
                            '2px',
                            '185px'
                        ],
                        [
                            "eid163",
                            "width",
                            3667,
                            333,
                            "linear",
                            "${airRed2}",
                            '185px',
                            '8px'
                        ],
                        [
                            "eid88",
                            "left",
                            500,
                            500,
                            "linear",
                            "${valve2}",
                            '262px',
                            '247px'
                        ],
                        [
                            "eid90",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${valve2}",
                            '247px',
                            '262px'
                        ],
                        [
                            "eid129",
                            "left",
                            0,
                            500,
                            "linear",
                            "${airBlue1}",
                            '456px',
                            '273px'
                        ],
                        [
                            "eid127",
                            "width",
                            0,
                            500,
                            "linear",
                            "${airBlue4}",
                            '2px',
                            '156px'
                        ],
                        [
                            "eid134",
                            "width",
                            767,
                            1000,
                            "easeOutQuad",
                            "${airBlue4}",
                            '156px',
                            '1px'
                        ],
                        [
                            "eid226",
                            "height",
                            2000,
                            1000,
                            "easeOutQuad",
                            "${inRed}",
                            '69px',
                            '235px'
                        ],
                        [
                            "eid227",
                            "height",
                            3000,
                            1000,
                            "easeInQuad",
                            "${inRed}",
                            '235px',
                            '71px'
                        ],
                        [
                            "eid157",
                            "left",
                            3000,
                            533,
                            "linear",
                            "${airRed2}",
                            '189px',
                            '5px'
                        ],
                        [
                            "eid119",
                            "width",
                            0,
                            500,
                            "linear",
                            "${airBlue3}",
                            '2px',
                            '175px'
                        ],
                        [
                            "eid132",
                            "width",
                            767,
                            1000,
                            "easeOutQuad",
                            "${airBlue3}",
                            '175px',
                            '1px'
                        ],
                        [
                            "eid160",
                            "width",
                            3000,
                            533,
                            "linear",
                            "${airRed1}",
                            '2px',
                            '185px'
                        ],
                        [
                            "eid164",
                            "width",
                            3667,
                            333,
                            "linear",
                            "${airRed1}",
                            '185px',
                            '8px'
                        ],
                        [
                            "eid153",
                            "left",
                            3000,
                            533,
                            "linear",
                            "${airRed4}",
                            '161px',
                            '5px'
                        ],
                        [
                            "eid155",
                            "left",
                            3000,
                            533,
                            "linear",
                            "${airRed3}",
                            '179px',
                            '5px'
                        ],
                        [
                            "eid53",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${inRed}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            3000,
                            1000,
                            "linear",
                            "${inRed}",
                            '1',
                            '0'
                        ],
                        [
                            "eid125",
                            "left",
                            0,
                            500,
                            "linear",
                            "${airBlue4}",
                            '456px',
                            '302px'
                        ],
                        [
                            "eid168",
                            "height",
                            500,
                            500,
                            "linear",
                            "${inBlue}",
                            '165px',
                            '235px'
                        ],
                        [
                            "eid171",
                            "height",
                            1000,
                            1000,
                            "linear",
                            "${inBlue}",
                            '235px',
                            '92px'
                        ],
                        [
                            "eid170",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${inBlue}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "left",
                            0,
                            500,
                            "linear",
                            "${airBlue3}",
                            '456px',
                            '283px'
                        ],
                        [
                            "eid137",
                            "left",
                            767,
                            1000,
                            "easeOutQuad",
                            "${airBlue3}",
                            '283px',
                            '285px'
                        ],
                        [
                            "eid89",
                            "top",
                            500,
                            500,
                            "linear",
                            "${valve2}",
                            '109px',
                            '135px'
                        ],
                        [
                            "eid91",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${valve2}",
                            '135px',
                            '109px'
                        ],
                        [
                            "eid121",
                            "left",
                            0,
                            500,
                            "linear",
                            "${airBlue2}",
                            '456px',
                            '273px'
                        ],
                        [
                            "eid159",
                            "left",
                            3000,
                            533,
                            "linear",
                            "${airRed1}",
                            '189px',
                            '5px'
                        ],
                        [
                            "eid154",
                            "width",
                            3000,
                            533,
                            "linear",
                            "${airRed4}",
                            '1px',
                            '156px'
                        ],
                        [
                            "eid162",
                            "width",
                            3667,
                            333,
                            "linear",
                            "${airRed4}",
                            '156px',
                            '7px'
                        ],
                            [ "eid230", "trigger", 1833.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BOMB}', [] ] ],
                            [ "eid231", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CRANK_PISTON}', [] ] ]
                    ]
                }
            },
            "CRANK_PISTON": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [54, 50, '68', '225', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pistonBar.png'],
                            id: 'pistonBar',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '8%']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [28, 211, '120', '161', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crank.png'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '66%']],
                            id: 'crank',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: [0, 0, '175', '97', 'auto', 'auto'],
                            id: 'pistonHead',
                            fill: ['rgba(0,0,0,0)', 'images/pistonHead.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 175, 372]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid66",
                            "left",
                            0,
                            250,
                            "linear",
                            "${pistonBar}",
                            '54px',
                            '59px'
                        ],
                        [
                            "eid67",
                            "left",
                            250,
                            250,
                            "linear",
                            "${pistonBar}",
                            '59px',
                            '54px'
                        ],
                        [
                            "eid78",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${pistonBar}",
                            '54px',
                            '59px'
                        ],
                        [
                            "eid79",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${pistonBar}",
                            '59px',
                            '54px'
                        ],
                        [
                            "eid63",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${pistonBar}",
                            '0deg',
                            '20deg'
                        ],
                        [
                            "eid64",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${pistonBar}",
                            '20deg',
                            '26deg'
                        ],
                        [
                            "eid68",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${pistonBar}",
                            '26deg',
                            '0deg'
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            1000,
                            250,
                            "linear",
                            "${pistonBar}",
                            '0deg',
                            '-20deg'
                        ],
                        [
                            "eid81",
                            "rotateZ",
                            1250,
                            250,
                            "linear",
                            "${pistonBar}",
                            '-20deg',
                            '-26deg'
                        ],
                        [
                            "eid82",
                            "rotateZ",
                            1500,
                            500,
                            "linear",
                            "${pistonBar}",
                            '-26deg',
                            '0deg'
                        ],
                        [
                            "eid61",
                            "top",
                            0,
                            250,
                            "linear",
                            "${pistonBar}",
                            '50px',
                            '83px'
                        ],
                        [
                            "eid65",
                            "top",
                            250,
                            250,
                            "linear",
                            "${pistonBar}",
                            '83px',
                            '144px'
                        ],
                        [
                            "eid69",
                            "top",
                            500,
                            500,
                            "linear",
                            "${pistonBar}",
                            '144px',
                            '202px'
                        ],
                        [
                            "eid87",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${pistonBar}",
                            '202px',
                            '144px'
                        ],
                        [
                            "eid86",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${pistonBar}",
                            '144px',
                            '83px'
                        ],
                        [
                            "eid85",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${pistonBar}",
                            '83px',
                            '50px'
                        ],
                        [
                            "eid62",
                            "top",
                            0,
                            500,
                            "linear",
                            "${pistonHead}",
                            '0px',
                            '94px'
                        ],
                        [
                            "eid70",
                            "top",
                            500,
                            500,
                            "linear",
                            "${pistonHead}",
                            '94px',
                            '133px'
                        ],
                        [
                            "eid84",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${pistonHead}",
                            '133px',
                            '94px'
                        ],
                        [
                            "eid83",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${pistonHead}",
                            '94px',
                            '0px'
                        ],
                        [
                            "eid59",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${crank}",
                            '0deg',
                            '-90deg'
                        ],
                        [
                            "eid60",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${crank}",
                            '-90deg',
                            '-180deg'
                        ],
                        [
                            "eid71",
                            "rotateZ",
                            1000,
                            500,
                            "linear",
                            "${crank}",
                            '-180deg',
                            '-270deg'
                        ],
                        [
                            "eid72",
                            "rotateZ",
                            1500,
                            500,
                            "linear",
                            "${crank}",
                            '-270deg',
                            '-360deg'
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
                            type: 'image',
                            id: 'outFlowBack',
                            tag: 'img',
                            rect: ['1434px', '447px', '315', '396', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outFlowBack.png']
                        },
                        {
                            rect: ['1434', '447', '86', '85', 'auto', 'auto'],
                            id: 'outFlow4Movie',
                            symbolName: 'outFlow4Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1448', '531', '72', '71', 'auto', 'auto'],
                            id: 'outFlowSide3Movie',
                            symbolName: 'outFlowSide3Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1519', '545', '159', '57', 'auto', 'auto'],
                            id: 'outFlow3Movie',
                            symbolName: 'outFlow3Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1677', '545', '72', '72', 'auto', 'auto'],
                            id: 'outFlowSide2Movie',
                            symbolName: 'outFlowSide2Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1693', '616', '56', '141', 'auto', 'auto'],
                            id: 'outFlow2Movie',
                            symbolName: 'outFlow2Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1677', '756', '72', '72', 'auto', 'auto'],
                            id: 'outFlowSide1Movie',
                            symbolName: 'outFlowSide1Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1487', '757', '191', '86', 'auto', 'auto'],
                            id: 'outFlow1Movie',
                            symbolName: 'outFlow1Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1434px', '447px', '315px', '396px', 'auto', 'auto'],
                            id: 'outFlowBack2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/outFlowBack2.png', '0px', '0px']
                        },
                        {
                            rect: ['458px', '232px', '818px', '634px', 'auto', 'auto'],
                            id: 'inflowBack2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/inflowBack2.png', '0px', '0px']
                        },
                        {
                            rect: ['1017', '732', '147', '133', 'auto', 'auto'],
                            id: 'inFlow5Movie',
                            symbolName: 'inFlow5Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['529', '754px', '101', '87', 'auto', 'auto'],
                            id: 'inFlow4Movie',
                            symbolName: 'inFlow4Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['459', '640', '57', '116', 'auto', 'auto'],
                            id: 'inFlow3Movie',
                            symbolName: 'inFlow3Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['529', '569', '663', '57', 'auto', 'auto'],
                            id: 'inFlow2Movie',
                            symbolName: 'inFlow2Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1191', '473', '86', '82', 'auto', 'auto'],
                            id: 'inFlow1Movie',
                            symbolName: 'inFlow1Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['459', '755', '71', '71', 'auto', 'auto'],
                            id: 'inFlowSide3Movie',
                            symbolName: 'inFlowSide3Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['459', '569', '71', '72', 'auto', 'auto'],
                            id: 'inFlowSide2Movie',
                            symbolName: 'inFlowSide2Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1191', '554', '72', '72', 'auto', 'auto'],
                            id: 'inFlowSide1Movie',
                            symbolName: 'inFlowSide1Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['652', '231', '487', '134', 'auto', 'auto'],
                            id: 'inFlow0Movie',
                            symbolName: 'inFlowMovie0',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'inflowBack',
                            tag: 'img',
                            rect: ['459px', '231px', '818', '634', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inflowBack.png']
                        },
                        {
                            type: 'image',
                            id: 'parts',
                            tag: 'img',
                            rect: ['457px', '0px', '1139', '920', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/parts.png']
                        },
                        {
                            rect: ['1205px', '223px', '314', '156', 'auto', 'auto'],
                            tag: 'img',
                            id: 'EXTRA',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/EXTRA.png']
                        },
                        {
                            rect: ['1205', '229', '58', '75', 'auto', 'auto'],
                            id: 'wing1Movie',
                            symbolName: 'wing1Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['1429', '223', '90', '81', 'auto', 'auto'],
                            id: 'wing2Movie',
                            symbolName: 'wing2Movie',
                            type: 'rect'
                        },
                        {
                            rect: ['158', '237', '290', '133', 'auto', 'auto'],
                            id: 'inWindMovie',
                            symbolName: 'inWindMovie',
                            type: 'rect'
                        },
                        {
                            rect: ['1620', '238', '90', '114', 'auto', 'auto'],
                            id: 'arrowMovie',
                            symbolName: 'arrowMovie',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.40435', '1.66176']],
                            rect: ['1398px', '232px', '136', '136', 'auto', 'auto'],
                            id: 'fireOvalMovie',
                            symbolName: 'fireOvalMovie',
                            opacity: '0.95',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.33812', '1.45172']],
                            rect: ['1413px', '232px', '136', '136', 'auto', 'auto'],
                            id: 'fireOvalMovieCopy',
                            symbolName: 'fireOvalMovie',
                            opacity: '0.9',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.26459', '1.27165']],
                            rect: ['1426px', '235px', '136', '136', 'auto', 'auto'],
                            id: 'fireOvalMovieCopy2',
                            symbolName: 'fireOvalMovie',
                            opacity: '0.8',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.20594', '0.97758']],
                            rect: ['1438px', '232px', '136', '136', 'auto', 'auto'],
                            id: 'fireOvalMovieCopy3',
                            symbolName: 'fireOvalMovie',
                            opacity: '0.7',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.14712', '0.70098']],
                            rect: ['1448px', '232px', '136', '136', 'auto', 'auto'],
                            id: 'fireOvalMovieCopy4',
                            symbolName: 'fireOvalMovie',
                            opacity: '0.6',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '1791px', '920px']
                        }
                    }
                },
                timeline: {
                    duration: 833.33333333333,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "arrowMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['93px', '0px', '90px', '114', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arrows.png'],
                            id: 'arrows',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '114px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "width",
                            0,
                            125,
                            "linear",
                            "${arrows}",
                            '90px',
                            '151px'
                        ],
                        [
                            "eid77",
                            "width",
                            125,
                            125,
                            "linear",
                            "${arrows}",
                            '151px',
                            '98px'
                        ],
                        [
                            "eid73",
                            "left",
                            0,
                            125,
                            "linear",
                            "${arrows}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid76",
                            "left",
                            125,
                            125,
                            "linear",
                            "${arrows}",
                            '20px',
                            '93px'
                        ],
                        [
                            "eid75",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${arrows}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            125,
                            125,
                            "linear",
                            "${arrows}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "inWindMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['247px', '0px', '290px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inWind.png'],
                            id: 'inWind',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '290px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid105",
                            "opacity",
                            5,
                            245,
                            "linear",
                            "${inWind}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${inWind}",
                            '1',
                            '0'
                        ],
                        [
                            "eid97",
                            "left",
                            5,
                            245,
                            "linear",
                            "${inWind}",
                            '0px',
                            '81px'
                        ],
                        [
                            "eid101",
                            "left",
                            250,
                            250,
                            "linear",
                            "${inWind}",
                            '81px',
                            '247px'
                        ],
                        [
                            "eid99",
                            "top",
                            5,
                            245,
                            "linear",
                            "${inWind}",
                            '0px',
                            '-23px'
                        ],
                        [
                            "eid102",
                            "top",
                            250,
                            250,
                            "linear",
                            "${inWind}",
                            '-23px',
                            '-22px'
                        ],
                        [
                            "eid98",
                            "height",
                            5,
                            245,
                            "linear",
                            "${inWind}",
                            '133px',
                            '172px'
                        ],
                        [
                            "eid100",
                            "width",
                            5,
                            245,
                            "linear",
                            "${inWind}",
                            '290px',
                            '362px'
                        ],
                        [
                            "eid103",
                            "width",
                            250,
                            250,
                            "linear",
                            "${inWind}",
                            '362px',
                            '264px'
                        ]
                    ]
                }
            },
            "wing1Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_top7',
                            type: 'image',
                            rect: ['0px', '-1px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_top6',
                            type: 'image',
                            rect: ['0px', '-1px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_top5',
                            type: 'image',
                            rect: ['0px', '-1px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_top4',
                            type: 'image',
                            rect: ['0px', '-1px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_top3',
                            type: 'image',
                            rect: ['0px', '-1px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_top2',
                            type: 'image',
                            rect: ['auto', 'auto', '58', '75', '0px', '1px'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_top1',
                            type: 'image',
                            rect: ['0px', '-1px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_btm1',
                            type: 'image',
                            rect: ['0px', '-2px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_btm2',
                            type: 'image',
                            rect: ['0px', '-2px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_btm3',
                            type: 'image',
                            rect: ['0px', '-2px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_btm4',
                            type: 'image',
                            rect: ['0px', '-2px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_btm5',
                            type: 'image',
                            rect: ['0px', '-2px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_btm6',
                            type: 'image',
                            rect: ['0px', '-2px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/wing1.png'],
                            id: 'wing1_btm7',
                            type: 'image',
                            rect: ['0px', '-2px', '58', '75', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '58px', '75px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    labels: {
                        "gogo": 250
                    },
                    data: [
                        [
                            "eid187",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57354",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57355",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57356",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57357",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57358",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid169",
                            "scaleY",
                            417,
                            250,
                            "linear",
                            "${wing1_top6}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            333,
                            250,
                            "linear",
                            "${wing1_top5}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid185",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57359",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57360",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57361",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57362",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57363",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid184",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57364",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57365",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57366",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57367",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57368",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid186",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57369",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57370",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57371",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57372",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57373",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid144",
                            "scaleY",
                            167,
                            250,
                            "linear",
                            "${wing1_btm3}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid182",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57374",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57375",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57376",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57377",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57378",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid181",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57379",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57380",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57381",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_top7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57382",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57383",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid176",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57384",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57385",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57386",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_top2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57387",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57388",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid183",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57389",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57390",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57391",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57392",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57393",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid180",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57394",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57395",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57396",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_top6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57397",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57398",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid175",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57399",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57400",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57401",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57402",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57403",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid165",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${wing1_btm7}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid126",
                            "scaleY",
                            167,
                            250,
                            "linear",
                            "${wing1_top3}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid177",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57404",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57405",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57406",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_top3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57407",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57408",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid122",
                            "scaleY",
                            83,
                            250,
                            "linear",
                            "${wing1_top2}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid142",
                            "scaleY",
                            83,
                            250,
                            "linear",
                            "${wing1_btm2}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid147",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${wing1_btm4}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${wing1_top4}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid179",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57409",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57410",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57411",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_top5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57412",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57413",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid139",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${wing1_btm1}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid149",
                            "scaleY",
                            333,
                            250,
                            "linear",
                            "${wing1_btm5}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid151",
                            "scaleY",
                            417,
                            250,
                            "linear",
                            "${wing1_btm6}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid178",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57414",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57415",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57416",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_top4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57417",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57418",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_top4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid173",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${wing1_top7}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid188",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57419",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57420",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57421",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57422",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57423",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing1_btm2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid106",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${wing1_top1}",
                            '1',
                            '0.01'
                        ]
                    ]
                }
            },
            "wing2Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_top1Copy7',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_top1Copy6',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_top1Copy5',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_top1Copy4',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_top1Copy3',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_top1Copy2',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_top1',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-0.01']],
                            id: 'wing2_btm1',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 0],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_btm1Copy',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_btm1Copy2',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_btm1Copy3',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_btm1Copy4',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-1']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_btm1Copy5',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_btm1Copy6',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['1', '-0.01']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.png'],
                            id: 'wing2_btm1Copy7',
                            type: 'image',
                            rect: ['0px', '0px', '90', '81', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 833.33333333333,
                    autoPlay: true,
                    labels: {
                        "gogo": 250
                    },
                    data: [
                        [
                            "eid1693",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${wing2_top1Copy7}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid1704",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_btm1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57424",
                            "-moz-transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_btm1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57425",
                            "-ms-transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_btm1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57426",
                            "msTransformOrigin",
                            500,
                            0,
                            "linear",
                            "${wing2_btm1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57427",
                            "-o-transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_btm1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57428",
                            "transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_btm1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1707",
                            "-webkit-transform-origin",
                            583,
                            0,
                            "linear",
                            "${wing2_btm1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57429",
                            "-moz-transform-origin",
                            583,
                            0,
                            "linear",
                            "${wing2_btm1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57430",
                            "-ms-transform-origin",
                            583,
                            0,
                            "linear",
                            "${wing2_btm1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57431",
                            "msTransformOrigin",
                            583,
                            0,
                            "linear",
                            "${wing2_btm1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57432",
                            "-o-transform-origin",
                            583,
                            0,
                            "linear",
                            "${wing2_btm1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57433",
                            "transform-origin",
                            583,
                            0,
                            "linear",
                            "${wing2_btm1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1699",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_btm1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57434",
                            "-moz-transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_btm1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57435",
                            "-ms-transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_btm1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57436",
                            "msTransformOrigin",
                            250,
                            0,
                            "linear",
                            "${wing2_btm1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57437",
                            "-o-transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_btm1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57438",
                            "transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_btm1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1685",
                            "scaleY",
                            167,
                            250,
                            "linear",
                            "${wing2_top1Copy3}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid1683",
                            "-webkit-transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_top1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57439",
                            "-moz-transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_top1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57440",
                            "-ms-transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_top1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57441",
                            "msTransformOrigin",
                            83,
                            0,
                            "linear",
                            "${wing2_top1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57442",
                            "-o-transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_top1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57443",
                            "transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_top1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1700",
                            "-webkit-transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_btm1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57444",
                            "-moz-transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_btm1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57445",
                            "-ms-transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_btm1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57446",
                            "msTransformOrigin",
                            333,
                            0,
                            "linear",
                            "${wing2_btm1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57447",
                            "-o-transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_btm1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57448",
                            "transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_btm1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1690",
                            "scaleY",
                            417,
                            250,
                            "linear",
                            "${wing2_top1Copy6}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid1687",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_top1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57449",
                            "-moz-transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_top1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57450",
                            "-ms-transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_top1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57451",
                            "msTransformOrigin",
                            250,
                            0,
                            "linear",
                            "${wing2_top1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57452",
                            "-o-transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_top1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57453",
                            "transform-origin",
                            250,
                            0,
                            "linear",
                            "${wing2_top1Copy4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1705",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${wing2_btm1Copy6}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid1679",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${wing2_top1}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid1688",
                            "-webkit-transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_top1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57454",
                            "-moz-transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_top1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57455",
                            "-ms-transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_top1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57456",
                            "msTransformOrigin",
                            333,
                            0,
                            "linear",
                            "${wing2_top1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57457",
                            "-o-transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_top1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57458",
                            "transform-origin",
                            333,
                            0,
                            "linear",
                            "${wing2_top1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1701",
                            "scaleY",
                            333,
                            250,
                            "linear",
                            "${wing2_btm1Copy4}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid3464",
                            "scaleY",
                            417,
                            250,
                            "linear",
                            "${wing2_btm1Copy5}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid1694",
                            "scaleY",
                            83,
                            250,
                            "linear",
                            "${wing2_btm1Copy}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid1706",
                            "scaleY",
                            583,
                            250,
                            "linear",
                            "${wing2_btm1Copy7}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid3461",
                            "scaleY",
                            167,
                            250,
                            "linear",
                            "${wing2_btm1Copy2}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid1681",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${wing2_btm1}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid1698",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${wing2_btm1Copy3}",
                            '-0.01',
                            '-1'
                        ],
                        [
                            "eid1703",
                            "-webkit-transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_btm1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57459",
                            "-moz-transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_btm1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57460",
                            "-ms-transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_btm1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57461",
                            "msTransformOrigin",
                            417,
                            0,
                            "linear",
                            "${wing2_btm1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57462",
                            "-o-transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_btm1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57463",
                            "transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_btm1Copy5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1691",
                            "-webkit-transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_top1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57464",
                            "-moz-transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_top1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57465",
                            "-ms-transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_top1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57466",
                            "msTransformOrigin",
                            417,
                            0,
                            "linear",
                            "${wing2_top1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57467",
                            "-o-transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_top1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57468",
                            "transform-origin",
                            417,
                            0,
                            "linear",
                            "${wing2_top1Copy6}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1686",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${wing2_top1Copy4}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid1695",
                            "-webkit-transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_btm1Copy}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57469",
                            "-moz-transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_btm1Copy}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57470",
                            "-ms-transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_btm1Copy}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57471",
                            "msTransformOrigin",
                            83,
                            0,
                            "linear",
                            "${wing2_btm1Copy}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57472",
                            "-o-transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_btm1Copy}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57473",
                            "transform-origin",
                            83,
                            0,
                            "linear",
                            "${wing2_btm1Copy}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1692",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_top1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57474",
                            "-moz-transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_top1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57475",
                            "-ms-transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_top1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57476",
                            "msTransformOrigin",
                            500,
                            0,
                            "linear",
                            "${wing2_top1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57477",
                            "-o-transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_top1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57478",
                            "transform-origin",
                            500,
                            0,
                            "linear",
                            "${wing2_top1Copy7}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1677",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57479",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57480",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57481",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing2_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57482",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57483",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_btm1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1689",
                            "scaleY",
                            333,
                            250,
                            "linear",
                            "${wing2_top1Copy5}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid1684",
                            "-webkit-transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_top1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57484",
                            "-moz-transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_top1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57485",
                            "-ms-transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_top1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57486",
                            "msTransformOrigin",
                            167,
                            0,
                            "linear",
                            "${wing2_top1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57487",
                            "-o-transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_top1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57488",
                            "transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_top1Copy3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1697",
                            "-webkit-transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_btm1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57489",
                            "-moz-transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_btm1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57490",
                            "-ms-transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_btm1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57491",
                            "msTransformOrigin",
                            167,
                            0,
                            "linear",
                            "${wing2_btm1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57492",
                            "-o-transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_btm1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57493",
                            "transform-origin",
                            167,
                            0,
                            "linear",
                            "${wing2_btm1Copy2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1676",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57494",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57495",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57496",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${wing2_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57497",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57498",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${wing2_top1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1682",
                            "scaleY",
                            83,
                            250,
                            "linear",
                            "${wing2_top1Copy2}",
                            '1',
                            '0.01'
                        ]
                    ]
                }
            },
            "inFlowMovie0": {
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
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-201px', '36px', '889px', '73px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0)', [180, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,1.00)', 5], ['rgba(255,255,255,0.00)', 10], ['rgba(255,255,255,0.00)', 15]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'inFlow0',
                            tag: 'img',
                            rect: ['0px', '0px', '487', '134', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inFlow0.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '487px', '134px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid35548",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle7}",
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true],
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true]
                        ],
                        [
                            "eid36832",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle7}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid35547",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle7}",
                            '-201px',
                            '-68px'
                        ],
                        [
                            "eid36831",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle7}",
                            '73px',
                            '73px'
                        ]
                    ]
                }
            },
            "inFlow1Movie": {
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
                            rect: ['-453px', '-52px', '992px', '51px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            id: 'Rectangle',
                            opacity: '1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(255,255,255,0.00)', [180, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,1.00)', 5], ['rgba(255,255,255,0.00)', 10], ['rgba(255,255,255,0.00)', 15]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'inFlow1',
                            tag: 'img',
                            rect: ['0px', '0px', '86', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inFlow1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '86px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid14654",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '-52px',
                            '92px'
                        ],
                        [
                            "eid14652",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '992px',
                            '992px'
                        ],
                        [
                            "eid13482",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true],
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true]
                        ]
                    ]
                }
            },
            "inFlow2Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-239px', '6px', '992px', '46px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)', [180, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,1.00)', 5], ['rgba(255,255,255,0.00)', 10], ['rgba(255,255,255,0.00)', 15]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'inFlow2',
                            tag: 'img',
                            rect: ['0px', '0px', '663', '57', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inFlow2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '663px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid12611",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true],
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true]
                        ],
                        [
                            "eid24275",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid12175",
                            "left",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy}",
                            '-90px',
                            '-239px'
                        ]
                    ]
                }
            },
            "inFlow3Movie": {
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
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['6px', '-123px', '45px', '400px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0)', [90, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,1.00)', 10], ['rgba(255,255,255,0.00)', 20], ['rgba(255,255,255,0.00)', 30]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'inFlow3',
                            tag: 'img',
                            rect: ['0px', '0px', '57', '116', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inFlow3.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '57px', '116px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid29822",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            [90,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',10],['rgba(255,255,255,0.00)',20],['rgba(255,255,255,0.00)',30]],true],
                            [90,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',10],['rgba(255,255,255,0.00)',20],['rgba(255,255,255,0.00)',30]],true]
                        ],
                        [
                            "eid29821",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle4}",
                            '-243px',
                            '-123px'
                        ]
                    ]
                }
            },
            "inFlow4Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-377px', '21px', '992px', '46px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)', [180, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,1.00)', 5], ['rgba(255,255,255,0.00)', 10], ['rgba(255,255,255,0.00)', 15]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'inFlow4',
                            tag: 'img',
                            rect: ['0px', '0px', '101', '87', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inFlow4.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '101px', '87px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid22931",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true],
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true]
                        ],
                        [
                            "eid22932",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '-522px',
                            '-377px'
                        ]
                    ]
                }
            },
            "inFlow5Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-501px', '34px', '992px', '68px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)', [180, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,1.00)', 5], ['rgba(255,255,255,0.00)', 10], ['rgba(255,255,255,0.00)', 15]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'inFlow5',
                            tag: 'img',
                            rect: ['0px', '0px', '147', '133', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inFlow5.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '145px', '131px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid15237",
                            "top",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy4}",
                            '34px',
                            '33px'
                        ],
                        [
                            "eid15238",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true],
                            [180,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',5],['rgba(255,255,255,0.00)',10],['rgba(255,255,255,0.00)',15]],true]
                        ],
                        [
                            "eid15236",
                            "left",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy4}",
                            '-501px',
                            '-357px'
                        ]
                    ]
                }
            },
            "inFlowSide1Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['90'], [], ['1.2439']],
                            rect: ['-15px', '-16px', '41px', '32px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)', [90, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,1.00)', 50], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'inFlowSide1',
                            tag: 'img',
                            rect: ['0px', '0px', '72', '72', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inFlowSide1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '72px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid23369",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid23371",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '-16px',
                            '-9px'
                        ],
                        [
                            "eid23368",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57499",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57500",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57501",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57502",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57503",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid23370",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '21px',
                            '-15px'
                        ],
                        [
                            "eid23372",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '1.2439',
                            '1.50834'
                        ],
                        [
                            "eid23374",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '1.50834',
                            '1.06931'
                        ]
                    ]
                }
            },
            "inFlowSide2Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['90'], [], ['1.2439']],
                            rect: ['46px', '72px', '41px', '32px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)', [90, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,1.00)', 50], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'inFlowSide2',
                            tag: 'img',
                            rect: ['0px', '0px', '71', '72', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inFlowSide2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '71px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid25627",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '90deg',
                            '0deg'
                        ],
                        [
                            "eid25629",
                            "top",
                            0,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '36px',
                            '38px'
                        ],
                        [
                            "eid25631",
                            "top",
                            250,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '38px',
                            '72px'
                        ],
                        [
                            "eid25628",
                            "left",
                            0,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '46px',
                            '13px'
                        ],
                        [
                            "eid25630",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '13px',
                            '10px'
                        ],
                        [
                            "eid25626",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57504",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57505",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57506",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57507",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57508",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "inFlowSide3Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            rect: ['37px', '-24px', '46px', '24px', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)', [90, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,1.00)', 50], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'inFlowSide3',
                            tag: 'img',
                            rect: ['0px', '0px', '71', '71', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/inFlowSide3.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '71px', '71px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid31218",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57509",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57510",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57511",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57512",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57513",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid31219",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${Rectangle5}",
                            '0deg',
                            '-90deg'
                        ],
                        [
                            "eid31220",
                            "left",
                            0,
                            250,
                            "linear",
                            "${Rectangle5}",
                            '5px',
                            '6px'
                        ],
                        [
                            "eid31222",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Rectangle5}",
                            '6px',
                            '37px'
                        ],
                        [
                            "eid31221",
                            "top",
                            0,
                            250,
                            "linear",
                            "${Rectangle5}",
                            '-24px',
                            '7px'
                        ],
                        [
                            "eid31223",
                            "top",
                            250,
                            250,
                            "linear",
                            "${Rectangle5}",
                            '7px',
                            '8px'
                        ]
                    ]
                }
            },
            "outFlow1Movie": {
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
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-63px', '21px', '389px', '44px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0)', [180, [['rgba(0,0,0,0.00)', 0], ['rgba(0,0,0,1.00)', 5], ['rgba(0,0,0,0.00)', 10], ['rgba(0,0,0,0.00)', 15]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'outFlow1',
                            tag: 'img',
                            rect: ['0px', '0px', '191', '86', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outFlow1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '191px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid37473",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle8}",
                            [180,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',5],['rgba(0,0,0,0.00)',10],['rgba(0,0,0,0.00)',15]],true],
                            [180,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',5],['rgba(0,0,0,0.00)',10],['rgba(0,0,0,0.00)',15]],true]
                        ],
                        [
                            "eid38915",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle8}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid37474",
                            "left",
                            0,
                            250,
                            "linear",
                            "${Rectangle8}",
                            '-119px',
                            '-63px'
                        ]
                    ]
                }
            },
            "outFlow2Movie": {
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
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['4px', '-108px', '47px', '274px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0)', [90, [['rgba(0,0,0,0.00)', 0], ['rgba(0,0,0,1.00)', 5], ['rgba(0,0,0,0.00)', 10], ['rgba(0,0,0,0.00)', 15]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'outFlow2',
                            tag: 'img',
                            rect: ['0px', '0px', '56', '141', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outFlow2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '56px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid42446",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle9}",
                            [90,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',5],['rgba(0,0,0,0.00)',10],['rgba(0,0,0,0.00)',15]],true],
                            [90,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',5],['rgba(0,0,0,0.00)',10],['rgba(0,0,0,0.00)',15]],true]
                        ],
                        [
                            "eid42447",
                            "top",
                            0,
                            250,
                            "linear",
                            "${Rectangle9}",
                            '-67px',
                            '-108px'
                        ]
                    ]
                }
            },
            "outFlow3Movie": {
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
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-115px', '7px', '389px', '44px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0)', [180, [['rgba(0,0,0,0.00)', 0], ['rgba(0,0,0,1.00)', 5], ['rgba(0,0,0,0.00)', 10], ['rgba(0,0,0,0.00)', 15]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'outFlow3',
                            tag: 'img',
                            rect: ['0px', '0px', '159', '57', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outFlow3.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '159px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid40357",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle8}",
                            [180,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',5],['rgba(0,0,0,0.00)',10],['rgba(0,0,0,0.00)',15]],true],
                            [180,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',5],['rgba(0,0,0,0.00)',10],['rgba(0,0,0,0.00)',15]],true]
                        ],
                        [
                            "eid40356",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle8}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid40359",
                            "left",
                            0,
                            250,
                            "linear",
                            "${Rectangle8}",
                            '-56px',
                            '-115px'
                        ]
                    ]
                }
            },
            "outFlow4Movie": {
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
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['19px', '-108px', '47px', '274px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0)', [90, [['rgba(0,0,0,0.00)', 0], ['rgba(0,0,0,1.00)', 5], ['rgba(0,0,0,0.00)', 10], ['rgba(0,0,0,0.00)', 15]], 'true']]
                        },
                        {
                            type: 'image',
                            id: 'outFlow4',
                            tag: 'img',
                            rect: ['0px', '0px', '86', '85', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outFlow4.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '86px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid44368",
                            "top",
                            0,
                            250,
                            "linear",
                            "${Rectangle9}",
                            '-67px',
                            '-108px'
                        ],
                        [
                            "eid44369",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle9}",
                            [90,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',5],['rgba(0,0,0,0.00)',10],['rgba(0,0,0,0.00)',15]],true],
                            [90,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',5],['rgba(0,0,0,0.00)',10],['rgba(0,0,0,0.00)',15]],true]
                        ],
                        [
                            "eid44370",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle9}",
                            '19px',
                            '19px'
                        ]
                    ]
                }
            },
            "outFlowSide1Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['270'], [], ['1.14316']],
                            rect: ['-54px', '-32px', '38px', '32px', 'auto', 'auto'],
                            id: 'Rectangle3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)', [90, [['rgba(255,255,255,0.00)', 0], ['rgba(0,0,0,1.00)', 50], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'outFlowSide1',
                            tag: 'img',
                            rect: ['0px', '0px', '72', '72', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outFlowSide1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '72px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid47540",
                            "top",
                            0,
                            125,
                            "linear",
                            "${Rectangle3Copy3}",
                            '8px',
                            '1px'
                        ],
                        [
                            "eid47545",
                            "top",
                            125,
                            125,
                            "linear",
                            "${Rectangle3Copy3}",
                            '1px',
                            '-32px'
                        ],
                        [
                            "eid47541",
                            "left",
                            0,
                            125,
                            "linear",
                            "${Rectangle3Copy3}",
                            '-54px',
                            '-21px'
                        ],
                        [
                            "eid47544",
                            "left",
                            125,
                            125,
                            "linear",
                            "${Rectangle3Copy3}",
                            '-21px',
                            '-15px'
                        ],
                        [
                            "eid47548",
                            "scaleX",
                            0,
                            125,
                            "linear",
                            "${Rectangle3Copy3}",
                            '1.02411',
                            '1.39254'
                        ],
                        [
                            "eid47547",
                            "scaleX",
                            125,
                            125,
                            "linear",
                            "${Rectangle3Copy3}",
                            '1.39254',
                            '1.14316'
                        ],
                        [
                            "eid47531",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57514",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57515",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57516",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57517",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57518",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid47528",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            [90,[['rgba(255,255,255,0.00)',0],['rgba(0,0,0,1.00)',50],['rgba(255,255,255,0.00)',100]]],
                            [90,[['rgba(255,255,255,0.00)',0],['rgba(0,0,0,1.00)',50],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid47543",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${Rectangle3Copy3}",
                            '270deg',
                            '180deg'
                        ]
                    ]
                }
            },
            "outFlowSide2Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['180'], [], ['1.09916']],
                            rect: ['-17px', '35px', '38px', '32px', 'auto', 'auto'],
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)', [90, [['rgba(255,255,255,0.00)', 0], ['rgba(0,0,0,1.00)', 50], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'outFlowSide2',
                            tag: 'img',
                            rect: ['0px', '0px', '72', '72', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outFlowSide2.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '72px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid46835",
                            "left",
                            0,
                            125,
                            "linear",
                            "${Rectangle3Copy2}",
                            '-17px',
                            '-21px'
                        ],
                        [
                            "eid46836",
                            "left",
                            125,
                            125,
                            "linear",
                            "${Rectangle3Copy2}",
                            '-21px',
                            '-54px'
                        ],
                        [
                            "eid46833",
                            "scaleX",
                            0,
                            125,
                            "linear",
                            "${Rectangle3Copy2}",
                            '1.09916',
                            '1.43308'
                        ],
                        [
                            "eid46842",
                            "scaleX",
                            125,
                            125,
                            "linear",
                            "${Rectangle3Copy2}",
                            '1.43308',
                            '1.2046'
                        ],
                        [
                            "eid46834",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            [90,[['rgba(255,255,255,0.00)',0],['rgba(0,0,0,1.00)',50],['rgba(255,255,255,0.00)',100]]],
                            [90,[['rgba(255,255,255,0.00)',0],['rgba(0,0,0,1.00)',50],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid46830",
                            "top",
                            0,
                            125,
                            "linear",
                            "${Rectangle3Copy2}",
                            '72px',
                            '40px'
                        ],
                        [
                            "eid46831",
                            "top",
                            125,
                            125,
                            "linear",
                            "${Rectangle3Copy2}",
                            '40px',
                            '35px'
                        ],
                        [
                            "eid46838",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57519",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57520",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57521",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57522",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57523",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid46841",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${Rectangle3Copy2}",
                            '180deg',
                            '90deg'
                        ]
                    ]
                }
            },
            "outFlowSide3Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['180'], [], ['1.2439']],
                            rect: ['88px', '7px', '38px', '32px', 'auto', 'auto'],
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)', [90, [['rgba(255,255,255,0.00)', 0], ['rgba(0,0,0,1.00)', 50], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'outFlowSide3',
                            tag: 'img',
                            rect: ['0px', '0px', '72', '71', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outFlowSide3.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '72px', '71px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid45338",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [90,[['rgba(255,255,255,0.00)',0],['rgba(0,0,0,1.00)',50],['rgba(255,255,255,0.00)',100]]],
                            [90,[['rgba(255,255,255,0.00)',0],['rgba(0,0,0,1.00)',50],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid45340",
                            "left",
                            0,
                            125,
                            "linear",
                            "${Rectangle3Copy}",
                            '88px',
                            '53px'
                        ],
                        [
                            "eid45342",
                            "left",
                            125,
                            125,
                            "linear",
                            "${Rectangle3Copy}",
                            '53px',
                            '54px'
                        ],
                        [
                            "eid45341",
                            "top",
                            0,
                            125,
                            "linear",
                            "${Rectangle3Copy}",
                            '7px',
                            '4px'
                        ],
                        [
                            "eid45343",
                            "top",
                            125,
                            125,
                            "linear",
                            "${Rectangle3Copy}",
                            '4px',
                            '-32px'
                        ],
                        [
                            "eid45339",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${Rectangle3Copy}",
                            '90deg',
                            '180deg'
                        ],
                        [
                            "eid45333",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57524",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57525",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57526",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57527",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid57528",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid45344",
                            "scaleX",
                            0,
                            125,
                            "linear",
                            "${Rectangle3Copy}",
                            '1.2439',
                            '1.34934'
                        ]
                    ]
                }
            },
            "fireOvalMovie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-364'], [0, 0, 0], [1, 1, 1]],
                            rect: ['0px', '0px', '136px', '136px', 'auto', 'auto'],
                            id: 'fireOval',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fireOval.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '136px', '136px']
                        }
                    }
                },
                timeline: {
                    duration: 292,
                    autoPlay: true,
                    data: [
                        [
                            "eid50350",
                            "rotateZ",
                            0,
                            292,
                            "linear",
                            "${fireOval}",
                            '0deg',
                            '-364deg'
                        ],
                        [
                            "eid50351",
                            "opacity",
                            0,
                            146,
                            "linear",
                            "${fireOval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid50352",
                            "opacity",
                            146,
                            146,
                            "linear",
                            "${fireOval}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-4052948280");
