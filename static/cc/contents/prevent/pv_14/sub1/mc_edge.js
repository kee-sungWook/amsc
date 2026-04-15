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
                            id: 'txt3',
                            type: 'text',
                            rect: ['1501px', '812px', '939px', '305', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; line-height: 90px;\"><span style=\"font-weight: 700;\">EFB(Enhanced Flooded Bttery) 배터리</span></p><p style=\"margin:0px\"> 폴리에스터 직조포를 사용하여 </p><p style=\"margin:0px\">성능을 높인 배터리. </p><p style=\"margin:0px\">스타트&amp;스톱기능 적용차량은 </p><p style=\"margin:0px\">EFB 배터리를 사용​</p>",
                            align: "auto",
                            font: ['나눔고딕', [50, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['1503px', '435px', '937px', '305', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; line-height: 90px;\"><span style=\"font-weight: 700;\">AMG(Absorbent Gless Mat) 배터리</span> </p><p style=\"margin:0px\">유리섬유로 된 더 성능이 좋은 분리판을</p><p style=\"margin:0px\"> 사용 하여 성능을 높인 배터리. </p><p style=\"margin:0px\">스타트&amp;스톱, 회생제동 기능 적용차량은</p><p style=\"margin:0px\"> AMG 배터리를 사용.​</p>",
                            align: "auto",
                            font: ['나눔고딕', [50, ""], "rgb(0,73,141)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['1501px', '58px', '939px', '305', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; line-height: 90px;\"><span style=\"font-weight: 700;\">SLA(Sealed Lead Acid) 배터리</span> </p><p style=\"margin: 0px; line-height: 60px;\">납과 산성용액을 플라스틱 통에 채우고 </p><p style=\"margin:0px\">뚜껑을 고주파로 접착하여 완전히 밀페 </p><p style=\"margin:0px\">시킨 배터리이며, 증류수 보충이 필요없는</p><p style=\"margin:0px\"> 무보수 배터리.​</p>",
                            align: "auto",
                            font: ['나눔고딕', [50, ""], "rgb(0,73,141)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'bat3',
                            type: 'image',
                            tag: 'img',
                            rect: ['88px', '128px', '689', '706', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bat3.png"],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'bat2',
                            type: 'image',
                            tag: 'img',
                            rect: ['576px', '296px', '724', '653', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bat2.png"],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'bat1',
                            type: 'image',
                            tag: 'img',
                            rect: ['41px', '464px', '709', '655', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bat1.png"],
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
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "opacity",
                            1001,
                            499,
                            "easeOutQuad",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            667,
                            417,
                            "easeOutQuad",
                            "${bat2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid46",
                            "left",
                            1375,
                            500,
                            "easeOutQuad",
                            "${txt2}",
                            '1503px',
                            '1463px'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            417,
                            "easeOutQuad",
                            "${bat3}",
                            '128px',
                            '178px'
                        ],
                        [
                            "eid8",
                            "top",
                            333,
                            417,
                            "easeOutQuad",
                            "${bat1}",
                            '464px',
                            '514px'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            667,
                            417,
                            "easeOutQuad",
                            "${bat2}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1751,
                            499,
                            "easeOutQuad",
                            "${txt3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "top",
                            667,
                            417,
                            "easeOutQuad",
                            "${bat2}",
                            '296px',
                            '346px'
                        ],
                        [
                            "eid26",
                            "opacity",
                            333,
                            417,
                            "easeOutQuad",
                            "${bat1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "left",
                            1750,
                            500,
                            "easeOutQuad",
                            "${txt3}",
                            '1501px',
                            '1461px'
                        ],
                        [
                            "eid34",
                            "opacity",
                            1376,
                            499,
                            "easeOutQuad",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            667,
                            417,
                            "easeOutQuad",
                            "${bat2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            0,
                            417,
                            "easeOutQuad",
                            "${bat3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            0,
                            417,
                            "easeOutQuad",
                            "${bat3}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            333,
                            417,
                            "easeOutQuad",
                            "${bat1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            0,
                            417,
                            "easeOutQuad",
                            "${bat3}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            333,
                            417,
                            "easeOutQuad",
                            "${bat1}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid44",
                            "left",
                            1000,
                            500,
                            "easeOutQuad",
                            "${txt1}",
                            '1501px',
                            '1461px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-1880133");
