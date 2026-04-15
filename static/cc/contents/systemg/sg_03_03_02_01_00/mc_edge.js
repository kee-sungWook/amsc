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
                            id: 'body',
                            type: 'image',
                            tag: 'img',
                            rect: ['401', '176', '638', '808', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"body.png"],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'parts2-3',
                            type: 'image',
                            tag: 'img',
                            rect: ['715', '537', '173', '198', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"parts2-3.png"],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'parts2-2',
                            type: 'image',
                            tag: 'img',
                            rect: ['596', '544', '285', '274', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"parts2-2.png"],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'parts2-1',
                            type: 'image',
                            tag: 'img',
                            rect: ['558', '618', '218', '244', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"parts2-1.png"],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'parts1-3',
                            type: 'image',
                            tag: 'img',
                            rect: ['672', '311', '174', '199', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"parts1-3.png"],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'parts1-2',
                            type: 'image',
                            tag: 'img',
                            rect: ['548', '321', '285', '274', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"parts1-2.png"],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'parts1-1',
                            type: 'image',
                            tag: 'img',
                            rect: ['510', '389', '218', '244', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"parts1-1.png"],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'txt2',
                            type: 'text',
                            rect: ['1442', '419', '889', '536', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​브레이크를 밟을 경우 패드가 디스크를</p><p style=\"margin: 0px;\">양쪽에서 압착하여 제동력을 발생시킵니다.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">캘리퍼에는 실린더와 피스톤 브레이크</p><p style=\"margin: 0px;\">패드가 내장되어 있습니다.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​브레이크 페달을 조작하면 유압이 발생하여 실린더 내에 있는 피스톤이 작동하여 패드를 밀어주고 패드는 디스크와 마찰하여 제동력을 발생시킵니다.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                            align: "auto",
                            font: ['굴림', [45, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt1',
                            type: 'text',
                            rect: ['1451', '241', '394', '86', 'auto', 'auto'],
                            opacity: '0',
                            text: "캘리퍼 란?",
                            align: "auto",
                            font: ['굴림', [80, ""], "rgb(0,74,140)", "normal", "none", "normal", "break-word", ""]
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
                    duration: 1266,
                    autoPlay: true,
                    data: [
                        [
                            "eid132",
                            "opacity",
                            0,
                            433,
                            "easeInQuad",
                            "${parts1-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            500,
                            0,
                            "easeOutQuad",
                            "${parts1-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            766,
                            0,
                            "easeOutQuad",
                            "${parts1-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid20",
                            "top",
                            567,
                            267,
                            "easeOutQuad",
                            "${parts2-2}",
                            '544px',
                            '791px'
                        ],
                        [
                            "eid18",
                            "left",
                            567,
                            267,
                            "easeOutQuad",
                            "${parts2-2}",
                            '596px',
                            '307px'
                        ],
                        [
                            "eid128",
                            "opacity",
                            0,
                            433,
                            "easeInQuad",
                            "${parts2-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            500,
                            0,
                            "easeOutQuad",
                            "${parts2-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            766,
                            0,
                            "easeOutQuad",
                            "${parts2-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${body}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid95",
                            "scaleY",
                            500,
                            0,
                            "easeOutQuad",
                            "${body}",
                            '1',
                            '1'
                        ],
                        [
                            "eid96",
                            "scaleY",
                            766,
                            0,
                            "easeOutQuad",
                            "${body}",
                            '1',
                            '1'
                        ],
                        [
                            "eid123",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${parts1-1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid105",
                            "scaleX",
                            500,
                            0,
                            "easeOutQuad",
                            "${parts1-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid106",
                            "scaleX",
                            766,
                            0,
                            "easeOutQuad",
                            "${parts1-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid4",
                            "top",
                            633,
                            267,
                            "easeOutQuad",
                            "${parts1-3}",
                            '311px',
                            '448px'
                        ],
                        [
                            "eid116",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${parts2-1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid91",
                            "scaleY",
                            500,
                            0,
                            "easeOutQuad",
                            "${parts2-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid92",
                            "scaleY",
                            766,
                            0,
                            "easeOutQuad",
                            "${parts2-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            0,
                            433,
                            "easeInQuad",
                            "${body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            500,
                            0,
                            "easeOutQuad",
                            "${body}",
                            '1',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            766,
                            0,
                            "easeOutQuad",
                            "${body}",
                            '1',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            0,
                            433,
                            "easeInQuad",
                            "${parts2-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            567,
                            0,
                            "easeOutQuad",
                            "${parts2-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            833,
                            0,
                            "easeOutQuad",
                            "${parts2-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${parts2-1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid89",
                            "scaleX",
                            500,
                            0,
                            "easeOutQuad",
                            "${parts2-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            766,
                            0,
                            "easeOutQuad",
                            "${parts2-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid121",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${parts2-3}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid101",
                            "scaleX",
                            633,
                            0,
                            "easeOutQuad",
                            "${parts2-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid102",
                            "scaleX",
                            900,
                            0,
                            "easeOutQuad",
                            "${parts2-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid117",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${body}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid93",
                            "scaleX",
                            500,
                            0,
                            "easeOutQuad",
                            "${body}",
                            '1',
                            '1'
                        ],
                        [
                            "eid94",
                            "scaleX",
                            766,
                            0,
                            "easeOutQuad",
                            "${body}",
                            '1',
                            '1'
                        ],
                        [
                            "eid114",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${parts1-3}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid87",
                            "scaleY",
                            633,
                            0,
                            "easeOutQuad",
                            "${parts1-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            900,
                            0,
                            "easeOutQuad",
                            "${parts1-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid16",
                            "top",
                            500,
                            267,
                            "easeOutQuad",
                            "${parts1-1}",
                            '389px',
                            '704px'
                        ],
                        [
                            "eid2",
                            "left",
                            633,
                            267,
                            "easeOutQuad",
                            "${parts1-3}",
                            '672px',
                            '515px'
                        ],
                        [
                            "eid14",
                            "left",
                            500,
                            267,
                            "easeOutQuad",
                            "${parts1-1}",
                            '510px',
                            '70px'
                        ],
                        [
                            "eid24",
                            "top",
                            500,
                            267,
                            "easeOutQuad",
                            "${parts2-1}",
                            '618px',
                            '958px'
                        ],
                        [
                            "eid8",
                            "top",
                            633,
                            267,
                            "easeOutQuad",
                            "${parts2-3}",
                            '537px',
                            '676px'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${parts2-3}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid103",
                            "scaleY",
                            633,
                            0,
                            "easeOutQuad",
                            "${parts2-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid104",
                            "scaleY",
                            900,
                            0,
                            "easeOutQuad",
                            "${parts2-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            0,
                            433,
                            "easeInQuad",
                            "${parts2-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            633,
                            0,
                            "easeOutQuad",
                            "${parts2-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            900,
                            0,
                            "easeOutQuad",
                            "${parts2-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid22",
                            "left",
                            500,
                            267,
                            "easeOutQuad",
                            "${parts2-1}",
                            '558px',
                            '144px'
                        ],
                        [
                            "eid127",
                            "opacity",
                            0,
                            433,
                            "easeInQuad",
                            "${parts1-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            633,
                            0,
                            "easeOutQuad",
                            "${parts1-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            900,
                            0,
                            "easeOutQuad",
                            "${parts1-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            0,
                            433,
                            "easeInQuad",
                            "${parts1-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid83",
                            "opacity",
                            567,
                            0,
                            "easeOutQuad",
                            "${parts1-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            833,
                            0,
                            "easeOutQuad",
                            "${parts1-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${parts2-2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid99",
                            "scaleY",
                            567,
                            0,
                            "easeOutQuad",
                            "${parts2-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid100",
                            "scaleY",
                            833,
                            0,
                            "easeOutQuad",
                            "${parts2-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid119",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${parts2-2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid97",
                            "scaleX",
                            567,
                            0,
                            "easeOutQuad",
                            "${parts2-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid98",
                            "scaleX",
                            833,
                            0,
                            "easeOutQuad",
                            "${parts2-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${parts1-3}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid85",
                            "scaleX",
                            633,
                            0,
                            "easeOutQuad",
                            "${parts1-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            900,
                            0,
                            "easeOutQuad",
                            "${parts1-3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid26",
                            "left",
                            500,
                            267,
                            "easeOutQuad",
                            "${body}",
                            '401px',
                            '637px'
                        ],
                        [
                            "eid137",
                            "opacity",
                            1033,
                            233,
                            "easeInQuad",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "left",
                            567,
                            267,
                            "easeOutQuad",
                            "${parts1-2}",
                            '548px',
                            '252px'
                        ],
                        [
                            "eid12",
                            "top",
                            567,
                            267,
                            "easeOutQuad",
                            "${parts1-2}",
                            '321px',
                            '543px'
                        ],
                        [
                            "eid6",
                            "left",
                            633,
                            267,
                            "easeOutQuad",
                            "${parts2-3}",
                            '715px',
                            '548px'
                        ],
                        [
                            "eid124",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${parts1-1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid107",
                            "scaleY",
                            500,
                            0,
                            "easeOutQuad",
                            "${parts1-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid108",
                            "scaleY",
                            766,
                            0,
                            "easeOutQuad",
                            "${parts1-1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            0,
                            433,
                            "easeInQuad",
                            "${parts1-2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid109",
                            "scaleX",
                            567,
                            0,
                            "easeOutQuad",
                            "${parts1-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid110",
                            "scaleX",
                            833,
                            0,
                            "easeOutQuad",
                            "${parts1-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid28",
                            "top",
                            500,
                            267,
                            "easeOutQuad",
                            "${body}",
                            '176px',
                            '28px'
                        ],
                        [
                            "eid135",
                            "opacity",
                            900,
                            233,
                            "easeInQuad",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "scaleY",
                            0,
                            433,
                            "easeInQuad",
                            "${parts1-2}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid111",
                            "scaleY",
                            567,
                            0,
                            "easeOutQuad",
                            "${parts1-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid112",
                            "scaleY",
                            833,
                            0,
                            "easeOutQuad",
                            "${parts1-2}",
                            '1',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mc_edgeActions.js");
})("EDGE-29390595");
