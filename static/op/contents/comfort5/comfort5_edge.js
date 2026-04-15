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
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bMirror',
                            type: 'image',
                            tag: 'img',
                            rect: ['350px', '407px', '502', '309', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bMirror.png"]
                        },
                        {
                            id: 'bMirror_light',
                            type: 'image',
                            tag: 'img',
                            rect: ['364px', '408px', '473', '160', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bMirror_light.png"]
                        },
                        {
                            id: 'bMirror_body',
                            type: 'image',
                            tag: 'img',
                            rect: ['270px', '376px', '920', '422', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bMirror_body.png"]
                        },
                        {
                            id: 'bMirror_blink',
                            type: 'image',
                            rect: ['269px', '376px', '920px', '422px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bMirror_blink.png",'0px','0px']
                        },
                        {
                            id: 'pic',
                            type: 'image',
                            tag: 'img',
                            rect: ['-5px', '-1px', '2572', '1445', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic.png"]
                        },
                        {
                            id: 'chair_back',
                            type: 'image',
                            tag: 'img',
                            rect: ['1368px', '190px', '938', '938', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"chair_back.png"]
                        },
                        {
                            id: 'chair',
                            type: 'image',
                            tag: 'img',
                            rect: ['1571px', '301px', '677', '703', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"chair.png"]
                        },
                        {
                            id: 'chair_arrow',
                            type: 'image',
                            tag: 'img',
                            rect: ['1564px', '333px', '285', '116', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"chair_arrow.png"]
                        },
                        {
                            id: 'set',
                            type: 'image',
                            tag: 'img',
                            rect: ['922px', '236px', '1490', '713', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"set.png"]
                        },
                        {
                            id: 'btn2',
                            type: 'image',
                            tag: 'img',
                            rect: ['1434px', '481px', '245', '245', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"btn2.png"]
                        },
                        {
                            id: 'btn1',
                            type: 'image',
                            tag: 'img',
                            rect: ['1130px', '481px', '245', '245', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"btn1.png"]
                        },
                        {
                            id: 'hand',
                            type: 'image',
                            tag: 'img',
                            rect: ['763px', '723px', '457', '953', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"hand.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
                            type: 'image',
                            tag: 'img',
                            rect: ['1069', '526', '346', '346', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"replayBtn.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '201', '201', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(140,142,144,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 9750,
                    autoPlay: true,
                    data: [
                        [
                            "eid279",
                            "left",
                            5333,
                            667,
                            "linear",
                            "${bMirror_light}",
                            '364px',
                            '385px'
                        ],
                        [
                            "eid72",
                            "left",
                            7583,
                            500,
                            "linear",
                            "${chair}",
                            '1571px',
                            '1443px'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            1749,
                            250,
                            "linear",
                            "${hand}",
                            '1.1',
                            '1.05'
                        ],
                        [
                            "eid43",
                            "scaleY",
                            1999,
                            250,
                            "linear",
                            "${hand}",
                            '1.05',
                            '1.1'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            2750,
                            250,
                            "linear",
                            "${hand}",
                            '1.1',
                            '1.05'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            3000,
                            250,
                            "linear",
                            "${hand}",
                            '1.05',
                            '1.1'
                        ],
                        [
                            "eid278",
                            "width",
                            5333,
                            667,
                            "linear",
                            "${bMirror}",
                            '502px',
                            '480px'
                        ],
                        [
                            "eid277",
                            "left",
                            5333,
                            667,
                            "linear",
                            "${bMirror}",
                            '350px',
                            '372px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btn2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            3000,
                            125,
                            "easeOutQuad",
                            "${btn2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            3125,
                            125,
                            "easeOutQuad",
                            "${btn2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid276",
                            "height",
                            4458,
                            834,
                            "linear",
                            "${bMirror_light}",
                            '160px',
                            '148px'
                        ],
                        [
                            "eid280",
                            "width",
                            5333,
                            667,
                            "linear",
                            "${bMirror_light}",
                            '473px',
                            '452px'
                        ],
                        [
                            "eid81",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            9500,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btn1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid45",
                            "opacity",
                            2000,
                            125,
                            "easeOutQuad",
                            "${btn1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            2125,
                            125,
                            "easeOutQuad",
                            "${btn1}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${chair_back}",
                            '0',
                            '0'
                        ],
                        [
                            "eid62",
                            "opacity",
                            6000,
                            250,
                            "easeOutQuad",
                            "${chair_back}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            8250,
                            250,
                            "linear",
                            "${chair_back}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "left",
                            250,
                            500,
                            "easeOutQuad",
                            "${set}",
                            '922px',
                            '892px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${chair_arrow}",
                            '0',
                            '0'
                        ],
                        [
                            "eid63",
                            "opacity",
                            6250,
                            125,
                            "easeOutQuad",
                            "${chair_arrow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            6375,
                            125,
                            "easeOutQuad",
                            "${chair_arrow}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid66",
                            "opacity",
                            6583,
                            125,
                            "easeOutQuad",
                            "${chair_arrow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            6708,
                            125,
                            "easeOutQuad",
                            "${chair_arrow}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid68",
                            "opacity",
                            6917,
                            125,
                            "easeOutQuad",
                            "${chair_arrow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            7042,
                            125,
                            "easeOutQuad",
                            "${chair_arrow}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid70",
                            "opacity",
                            7250,
                            125,
                            "easeOutQuad",
                            "${chair_arrow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            7375,
                            125,
                            "easeOutQuad",
                            "${chair_arrow}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${chair}",
                            '0',
                            '0'
                        ],
                        [
                            "eid61",
                            "opacity",
                            6000,
                            250,
                            "easeOutQuad",
                            "${chair}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            8250,
                            250,
                            "linear",
                            "${chair}",
                            '1',
                            '0'
                        ],
                        [
                            "eid281",
                            "opacity",
                            4000,
                            125,
                            "linear",
                            "${bMirror_blink}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid282",
                            "opacity",
                            4125,
                            125,
                            "linear",
                            "${bMirror_blink}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid283",
                            "opacity",
                            4292,
                            125,
                            "linear",
                            "${bMirror_blink}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid284",
                            "opacity",
                            4417,
                            125,
                            "linear",
                            "${bMirror_blink}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${set}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            3500,
                            500,
                            "easeOutQuad",
                            "${set}",
                            '1',
                            '0'
                        ],
                        [
                            "eid275",
                            "height",
                            4458,
                            834,
                            "linear",
                            "${bMirror}",
                            '309px',
                            '285px'
                        ],
                        [
                            "eid1",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${hand}",
                            '0',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1000,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            3500,
                            500,
                            "easeOutQuad",
                            "${hand}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid84",
                            "opacity",
                            9500,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            1749,
                            250,
                            "linear",
                            "${hand}",
                            '1.1',
                            '1.05'
                        ],
                        [
                            "eid44",
                            "scaleX",
                            2000,
                            250,
                            "linear",
                            "${hand}",
                            '1.05',
                            '1.1'
                        ],
                        [
                            "eid53",
                            "scaleX",
                            2750,
                            250,
                            "linear",
                            "${hand}",
                            '1.1',
                            '1.05'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            3001,
                            250,
                            "linear",
                            "${hand}",
                            '1.05',
                            '1.1'
                        ],
                        [
                            "eid30",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${hand}",
                            '723px',
                            '713px'
                        ],
                        [
                            "eid35",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${hand}",
                            '713px',
                            '637px'
                        ],
                        [
                            "eid41",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${hand}",
                            '637px',
                            '713px'
                        ],
                        [
                            "eid55",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${hand}",
                            '713px',
                            '636px'
                        ],
                        [
                            "eid58",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${hand}",
                            '636px',
                            '713px'
                        ],
                        [
                            "eid32",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${hand}",
                            '763px',
                            '773px'
                        ],
                        [
                            "eid36",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${hand}",
                            '773px',
                            '813px'
                        ],
                        [
                            "eid42",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${hand}",
                            '813px',
                            '773px'
                        ],
                        [
                            "eid50",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${hand}",
                            '773px',
                            '1141px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("comfort5_edgeActions.js");
})("EDGE-20205592");
