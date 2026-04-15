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
                            id: 'SCENE3',
                            display: 'none',
                            type: 'group',
                            rect: ['-232', '-173', '3024', '2234', 'auto', 'auto'],
                            c: [
                            {
                                id: 'landscapeBack',
                                type: 'image',
                                tag: 'img',
                                rect: ['232px', '380px', '2560', '695', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"landscapeBack.png"]
                            },
                            {
                                id: 'lamp_clip_left',
                                symbolName: 'lamp_clip',
                                type: 'rect',
                                rect: ['0px', '0px', '1488px', '998', 'auto', 'auto']
                            },
                            {
                                id: 'lamp_clip_right',
                                symbolName: 'lamp_clip',
                                type: 'rect',
                                rect: ['1536px', '0px', '1488px', '998', 'auto', 'auto'],
                                transform: [[],[],[],['-1']]
                            },
                            {
                                id: 'lane_clip_left',
                                symbolName: 'lane_clip',
                                type: 'rect',
                                rect: ['320px', '546px', '2384', '1688', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                id: 'lane_clip_right',
                                symbolName: 'lane_clip',
                                type: 'rect',
                                rect: ['319px', '546px', '2384', '1688', 'auto', 'auto'],
                                opacity: '1',
                                transform: [[],[],[],['-1']]
                            },
                            {
                                id: 'interrior',
                                type: 'image',
                                tag: 'img',
                                rect: ['232px', '174px', '2560', '1440', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"interrior.png"]
                            },
                            {
                                id: 'HUD_DISPLAY',
                                symbolName: 'HUD_DISPLAY',
                                type: 'rect',
                                rect: ['682px', '623px', '404', '354', 'auto', 'auto']
                            },
                            {
                                id: 'hud1_right',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['928px', '742px', '61', '114', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"hud1_right.png"]
                            },
                            {
                                id: 'hud1_left',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['813px', '742px', '60', '114', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"hud1_left.png"]
                            }]
                        },
                        {
                            id: 'SCENE2',
                            display: 'none',
                            type: 'group',
                            rect: ['-3', '0', '2562', '2075', 'auto', 'auto'],
                            c: [
                            {
                                id: 'board',
                                type: 'image',
                                tag: 'img',
                                rect: ['0px', '0', '2562', '1442', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"board.png"]
                            },
                            {
                                id: 'btn',
                                type: 'image',
                                tag: 'img',
                                rect: ['962px', '765', '113', '125', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"btn.png"]
                            },
                            {
                                id: 'hand',
                                type: 'image',
                                tag: 'img',
                                rect: ['371px', '946px', '591', '1233', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"hand.png"]
                            }]
                        },
                        {
                            id: 'SCENE1',
                            display: 'block',
                            type: 'group',
                            rect: ['-274', '499', '2833', '552', 'auto', 'auto'],
                            c: [
                            {
                                id: 'ROAD_CLIP2',
                                symbolName: 'ROAD_CLIP',
                                type: 'rect',
                                rect: ['0px', '36px', '2833', '479', 'auto', 'auto']
                            },
                            {
                                id: 'CAR_CLIP',
                                symbolName: 'CAR_CLIP',
                                type: 'rect',
                                rect: ['798px', '0px', '1512', '552', 'auto', 'auto']
                            }]
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
                            rect: ['40px', '40px', '200', '200', 'auto', 'auto'],
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
                    duration: 11250,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            3875,
                            0,
                            "linear",
                            "${SCENE3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${SCENE3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${SCENE3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${SCENE3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            1333,
                            125,
                            "linear",
                            "${hand}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid57",
                            "scaleY",
                            1625,
                            125,
                            "linear",
                            "${hand}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid44",
                            "scaleX",
                            1333,
                            125,
                            "linear",
                            "${hand}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid58",
                            "scaleX",
                            1625,
                            125,
                            "linear",
                            "${hand}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hud1_right}",
                            'none',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${hud1_right}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${hud1_right}",
                            'block',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hud1_left}",
                            'none',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${hud1_left}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${hud1_left}",
                            'block',
                            'none'
                        ],
                        [
                            "eid81",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '0'
                        ],
                        [
                            "eid67",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            4292,
                            125,
                            "linear",
                            "${hud1_left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid72",
                            "opacity",
                            4417,
                            125,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            4583,
                            125,
                            "linear",
                            "${hud1_left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "opacity",
                            4708,
                            125,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            4875,
                            125,
                            "linear",
                            "${hud1_left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "opacity",
                            5000,
                            125,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            5167,
                            125,
                            "linear",
                            "${hud1_left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            5292,
                            125,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid118",
                            "opacity",
                            11000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid35",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            750,
                            0,
                            "linear",
                            "${SCENE2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SCENE2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "left",
                            750,
                            500,
                            "linear",
                            "${hand}",
                            '371px',
                            '475px'
                        ],
                        [
                            "eid46",
                            "left",
                            1333,
                            125,
                            "linear",
                            "${hand}",
                            '475px',
                            '499px'
                        ],
                        [
                            "eid56",
                            "left",
                            1625,
                            125,
                            "linear",
                            "${hand}",
                            '499px',
                            '475px'
                        ],
                        [
                            "eid62",
                            "top",
                            3000,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '0px',
                            '88px'
                        ],
                        [
                            "eid90",
                            "top",
                            5750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '88px',
                            '0px'
                        ],
                        [
                            "eid91",
                            "top",
                            6750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '0px',
                            '-166px'
                        ],
                        [
                            "eid112",
                            "top",
                            9750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '-166px',
                            '0px'
                        ],
                        [
                            "eid114",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid115",
                            "opacity",
                            11000,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "top",
                            750,
                            500,
                            "linear",
                            "${hand}",
                            '946px',
                            '823px'
                        ],
                        [
                            "eid47",
                            "top",
                            1333,
                            125,
                            "linear",
                            "${hand}",
                            '823px',
                            '776px'
                        ],
                        [
                            "eid55",
                            "top",
                            1625,
                            125,
                            "linear",
                            "${hand}",
                            '776px',
                            '823px'
                        ],
                        [
                            "eid37",
                            "display",
                            750,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            3875,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${hand}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            1333,
                            125,
                            "linear",
                            "${btn}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid64",
                            "left",
                            3000,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '798px',
                            '808px'
                        ],
                        [
                            "eid92",
                            "left",
                            6750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '808px',
                            '732px'
                        ],
                        [
                            "eid113",
                            "left",
                            9750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '732px',
                            '808px'
                        ],
                        [
                            "eid82",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '0'
                        ],
                        [
                            "eid96",
                            "opacity",
                            7750,
                            250,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "opacity",
                            8042,
                            125,
                            "linear",
                            "${hud1_right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "opacity",
                            8167,
                            125,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            8333,
                            125,
                            "linear",
                            "${hud1_right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid101",
                            "opacity",
                            8458,
                            125,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid102",
                            "opacity",
                            8625,
                            125,
                            "linear",
                            "${hud1_right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid103",
                            "opacity",
                            8750,
                            125,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            8917,
                            125,
                            "linear",
                            "${hud1_right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid105",
                            "opacity",
                            9042,
                            125,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "scaleY",
                            1333,
                            125,
                            "linear",
                            "${btn}",
                            '1',
                            '0.9'
                        ],
                            [ "eid119", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP}', [0] ] ],
                            [ "eid80", "trigger", 2167, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP}', [] ] ]
                    ]
                }
            },
            "lane_clip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'lane',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['938px', '-230px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy2',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy3',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy4',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy5',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy6',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy7',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png'],
                            id: 'laneCopy8',
                            transform: [[], [], [], ['0.01', '0.01']],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2384px', '1577px']
                        }
                    }
                },
                timeline: {
                    duration: 167,
                    autoPlay: true,
                    data: [
                        [
                            "eid180",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '885px',
                            '830px'
                        ],
                        [
                            "eid227",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '49px',
                            '250px'
                        ],
                        [
                            "eid264",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '0.36467',
                            '0.61217'
                        ],
                        [
                            "eid301",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '0.61217',
                            '1'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '0.03475',
                            '0.0595'
                        ],
                        [
                            "eid116",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '0.0595',
                            '0.09242'
                        ],
                        [
                            "eid199",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '0.14192',
                            '0.22459'
                        ],
                        [
                            "eid282",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '614px',
                            '375px'
                        ],
                        [
                            "eid291",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '0.36467',
                            '0.61217'
                        ],
                        [
                            "eid69",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '950px',
                            '934px'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '-260px',
                            '-248px'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '-230px',
                            '-188px'
                        ],
                        [
                            "eid42",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '-248px',
                            '-224px'
                        ],
                        [
                            "eid6",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '0.01',
                            '0.01817'
                        ],
                        [
                            "eid125",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '-200px',
                            '-141px'
                        ],
                        [
                            "eid162",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '0.09242',
                            '0.14192'
                        ],
                        [
                            "eid310",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '606px',
                            '1163px'
                        ],
                        [
                            "eid254",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '0.22459',
                            '0.36467'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '958px',
                            '950px'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '0.01817',
                            '0.03475'
                        ],
                        [
                            "eid190",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '-72px',
                            '49px'
                        ],
                        [
                            "eid208",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '832px',
                            '750px'
                        ],
                        [
                            "eid171",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '0.09242',
                            '0.14192'
                        ],
                        [
                            "eid319",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '375px',
                            '0px'
                        ],
                        [
                            "eid328",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy8}",
                            '0.61217',
                            '1'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${lane}",
                            '0.01',
                            '0.01817'
                        ],
                        [
                            "eid97",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '938px',
                            '910px'
                        ],
                        [
                            "eid153",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '-150px',
                            '-70px'
                        ],
                        [
                            "eid245",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '0.22459',
                            '0.36467'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy}",
                            '0.01817',
                            '0.03475'
                        ],
                        [
                            "eid236",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy6}",
                            '750px',
                            '614px'
                        ],
                        [
                            "eid273",
                            "top",
                            0,
                            167,
                            "linear",
                            "${laneCopy7}",
                            '250px',
                            '606px'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '0.0595',
                            '0.09242'
                        ],
                        [
                            "eid106",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy2}",
                            '0.03475',
                            '0.0595'
                        ],
                        [
                            "eid217",
                            "scaleX",
                            0,
                            167,
                            "linear",
                            "${laneCopy5}",
                            '0.14192',
                            '0.22459'
                        ],
                        [
                            "eid143",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '918px',
                            '878px'
                        ]
                    ]
                }
            },
            "lamp_clip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png'],
                            id: 'roadlamp',
                            transform: [[], [], [], ['0.05', '0.05']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png'],
                            id: 'roadlampCopy',
                            transform: [[], [], [], ['0.05', '0.05']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png'],
                            id: 'roadlampCopy2',
                            transform: [[], [], [], ['0.05', '0.05']],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1488px', '998px']
                        }
                    }
                },
                timeline: {
                    duration: 417,
                    autoPlay: true,
                    data: [
                        [
                            "eid368",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '12px',
                            '0px'
                        ],
                        [
                            "eid361",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '1197px',
                            '798px'
                        ],
                        [
                            "eid338",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '0.05',
                            '0.16875'
                        ],
                        [
                            "eid374",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '0.44615',
                            '1'
                        ],
                        [
                            "eid364",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '18px',
                            '12px'
                        ],
                        [
                            "eid336",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '0.05',
                            '0.16875'
                        ],
                        [
                            "eid358",
                            "scaleY",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '0.16875',
                            '0.44615'
                        ],
                        [
                            "eid377",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '798px',
                            '0px'
                        ],
                        [
                            "eid371",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '0.44615',
                            '1'
                        ],
                        [
                            "eid344",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '1368px',
                            '1197px'
                        ],
                        [
                            "eid345",
                            "top",
                            0,
                            417,
                            "linear",
                            "${roadlamp}",
                            '20px',
                            '18px'
                        ],
                        [
                            "eid355",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '0.16875',
                            '0.44615'
                        ]
                    ]
                }
            },
            "ROAD_CLIP": {
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
                            id: 'road_line',
                            tag: 'img',
                            rect: ['0px', '455px', '2833', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        },
                        {
                            type: 'image',
                            id: 'road_lineCopy',
                            tag: 'img',
                            rect: ['0px', '0px', '2833', '24', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['274px', '-1px', '2559px', '25px', 'auto', 'auto'],
                            id: 'middle_road',
                            fill: ['rgba(0,0,0,0)', 'images/middle_road.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2833px', '479px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "left",
                            0,
                            250,
                            "linear",
                            "${road_lineCopy}",
                            '0px',
                            '367px'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${middle_road}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "left",
                            0,
                            250,
                            "linear",
                            "${road_line}",
                            '0px',
                            '367px'
                        ]
                    ]
                }
            },
            "CAR_CLIP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '851', '552', 'auto', 'auto'],
                            tag: 'img',
                            id: 'line_sensor',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/line_sensor.png']
                        },
                        {
                            type: 'image',
                            id: 'car1',
                            tag: 'img',
                            rect: ['774px', '111px', '738', '332', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1512px', '552px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "gogo": 83
                    },
                    data: [
                        [
                            "eid16",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${line_sensor}",
                            '0',
                            '0'
                        ],
                        [
                            "eid19",
                            "opacity",
                            83,
                            167,
                            "linear",
                            "${line_sensor}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20",
                            "opacity",
                            333,
                            167,
                            "linear",
                            "${line_sensor}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "HUD_DISPLAY": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['134px', '254px', '270', '85', 'auto', 'auto'],
                            tag: 'img',
                            id: 'HUD5',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/HUD5.png']
                        },
                        {
                            rect: ['0px', '248px', '106', '106', 'auto', 'auto'],
                            tag: 'img',
                            id: 'HUD4',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/HUD4.png']
                        },
                        {
                            rect: ['185px', '0px', '67', '75', 'auto', 'auto'],
                            tag: 'img',
                            id: 'HUD2',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/HUD2.png']
                        },
                        {
                            rect: ['131px', '91px', '176', '142', 'auto', 'auto'],
                            tag: 'img',
                            id: 'HUD1',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/HUD1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '404px', '354px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid25",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${HUD4}",
                            '0.5',
                            '0.8'
                        ],
                        [
                            "eid33",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${HUD4}",
                            '0.8',
                            '0.5'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${HUD2}",
                            '0.5',
                            '0.8'
                        ],
                        [
                            "eid32",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${HUD2}",
                            '0.8',
                            '0.5'
                        ],
                        [
                            "eid26",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${HUD5}",
                            '0.5',
                            '0.8'
                        ],
                        [
                            "eid34",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${HUD5}",
                            '0.8',
                            '0.5'
                        ],
                        [
                            "eid24",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${HUD1}",
                            '0.5',
                            '0.8'
                        ],
                        [
                            "eid31",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${HUD1}",
                            '0.8',
                            '0.5'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive11_edgeActions.js");
})("EDGE-10141767");
