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
                            id: 'txt2',
                            type: 'text',
                            rect: ['1584', '376', '816px', '644', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​<span style=\"font-size: 42px;\">ABS모듈레이터 어셈블리는 컴퓨터와</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">일체형이며 결함 발생시는 분해 및</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">수리를 할 수 없습니다.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">ABS모듈레이터는 ABS브레이크에&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">핵심적인 역활을 담담하고 있으며&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">고장시는 ABS만 작동하지 않으며</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">일반적인 브레이크 작동은 가능합니다.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">모듈레이터는 연산을 위한 컴퓨터, </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">유압 제어를 위한 밸브, 유압 상승을 </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 42px;\">위한 모터로 구성되어 있습니다.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,74,140)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['1584', '222px', '816px', '86', 'auto', 'auto'],
                            opacity: '0',
                            text: "ABS 모듈레이터 란?",
                            align: "auto",
                            font: ['굴림', [80, ""], "rgb(0,74,140)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'bocshType',
                            type: 'image',
                            tag: 'img',
                            rect: ['730', '346', '777', '477', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bocshType.png"],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'delpieType',
                            type: 'image',
                            tag: 'img',
                            rect: ['33', '205', '597', '690', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"delpieType.png"],
                            transform: [[],[],[],['0.95','0.95']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2400', '1230', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(239,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1534,
                    autoPlay: true,
                    data: [
                        [
                            "eid26",
                            "opacity",
                            934,
                            400,
                            "easeInQuad",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "width",
                            1534,
                            0,
                            "easeOutQuad",
                            "${txt1}",
                            '816px',
                            '816px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            367,
                            567,
                            "easeOutQuad",
                            "${bocshType}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            0,
                            567,
                            "easeOutQuad",
                            "${delpieType}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "scaleX",
                            367,
                            567,
                            "easeOutQuad",
                            "${bocshType}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid31",
                            "width",
                            1534,
                            0,
                            "easeOutQuad",
                            "${txt2}",
                            '816px',
                            '816px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1134,
                            400,
                            "easeInQuad",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            0,
                            567,
                            "easeOutQuad",
                            "${delpieType}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid29",
                            "top",
                            1534,
                            0,
                            "easeOutQuad",
                            "${txt1}",
                            '222px',
                            '222px'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            0,
                            567,
                            "easeOutQuad",
                            "${delpieType}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            367,
                            567,
                            "easeOutQuad",
                            "${bocshType}",
                            '0.95',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-29390595");
