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
                            },
                            {
                                id: 'HUD_ROAD2',
                                symbolName: 'HUD_ROAD',
                                type: 'rect',
                                rect: ['0', '0', '0', '0', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'SCENE2',
                            display: 'none',
                            type: 'group',
                            rect: ['-3', '0', '2562', '2075', 'auto', 'auto'],
                            c: [
                            {
                                id: 'landscapeBackCopy',
                                type: 'image',
                                tag: 'img',
                                rect: ['3px', '207px', '2560', '695', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"landscapeBack.png"]
                            },
                            {
                                id: 'lamp_clip_leftCopy',
                                symbolName: 'lamp_clip',
                                type: 'rect',
                                rect: ['-229px', '-173px', '1488px', '998', 'auto', 'auto']
                            },
                            {
                                id: 'lamp_clip_rightCopy',
                                symbolName: 'lamp_clip',
                                type: 'rect',
                                rect: ['1307px', '-173px', '1488px', '998', 'auto', 'auto'],
                                transform: [[],[],[],['-1']]
                            },
                            {
                                id: 'lane_clip_leftCopy',
                                symbolName: 'lane_clip',
                                type: 'rect',
                                rect: ['91px', '373px', '2384', '1688', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                id: 'lane_clip_rightCopy',
                                symbolName: 'lane_clip',
                                type: 'rect',
                                rect: ['90px', '373px', '2384', '1688', 'auto', 'auto'],
                                opacity: '1',
                                transform: [[],[],[],['-1']]
                            },
                            {
                                id: 'info_Txt2',
                                type: 'image',
                                tag: 'img',
                                rect: ['1203px', '745px', '166', '101', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"info_Txt2.png"],
                                transform: [[],[],[],['2','2']]
                            },
                            {
                                id: 'board1',
                                type: 'image',
                                tag: 'img',
                                rect: ['3px', '675', '2563', '932', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"board1.png"]
                            },
                            {
                                id: 'board1_display1',
                                type: 'image',
                                tag: 'img',
                                rect: ['829px', '888', '588', '458', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"board1_display1.png"]
                            },
                            {
                                id: 'board1_display2',
                                type: 'image',
                                tag: 'img',
                                rect: ['1016px', '1005', '455', '224', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"board1_display2.png"]
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
                                id: 'SIGNAL',
                                symbolName: 'SIGNAL',
                                type: 'rect',
                                rect: ['734px', '156px', '1200px', '248', 'auto', 'auto'],
                                opacity: '1',
                                transform: [[],[],[],['0.60541','0.64919']]
                            },
                            {
                                id: 'CAR_CLIP',
                                symbolName: 'CAR_CLIP',
                                type: 'rect',
                                rect: ['798px', '0px', '1512', '552', 'auto', 'auto']
                            },
                            {
                                id: 'car2',
                                type: 'image',
                                tag: 'img',
                                rect: ['-408px', '121px', '667', '310', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"car2.png"]
                            },
                            {
                                id: 'infoTxt1',
                                display: 'block',
                                type: 'image',
                                tag: 'img',
                                rect: ['32px', '149px', '205', '254', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"infoTxt1.png"]
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
                    duration: 18000,
                    autoPlay: true,
                    data: [
                        [
                            "eid161",
                            "left",
                            15542,
                            708,
                            "linear",
                            "${SIGNAL}",
                            '734px',
                            '906px'
                        ],
                        [
                            "eid129",
                            "opacity",
                            1750,
                            417,
                            "linear",
                            "${board1_display1}",
                            '1',
                            '0'
                        ],
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
                            5875,
                            0,
                            "linear",
                            "${SCENE3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${SCENE3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${SCENE3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${SCENE3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${SCENE3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            15542,
                            0,
                            "linear",
                            "${SCENE3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "left",
                            0,
                            750,
                            "linear",
                            "${infoTxt1}",
                            '32px',
                            '1114px'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1750,
                            417,
                            "linear",
                            "${board1_display2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            2209,
                            208,
                            "linear",
                            "${board1_display2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid136",
                            "opacity",
                            2417,
                            208,
                            "linear",
                            "${board1_display2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "opacity",
                            2667,
                            208,
                            "linear",
                            "${board1_display2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid138",
                            "opacity",
                            2875,
                            208,
                            "linear",
                            "${board1_display2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            3125,
                            208,
                            "linear",
                            "${board1_display2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid140",
                            "opacity",
                            3333,
                            208,
                            "linear",
                            "${board1_display2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            3584,
                            208,
                            "linear",
                            "${board1_display2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid142",
                            "opacity",
                            3792,
                            208,
                            "linear",
                            "${board1_display2}",
                            '0',
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
                            9750,
                            0,
                            "linear",
                            "${hud1_right}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${hud1_right}",
                            'block',
                            'none'
                        ],
                        [
                            "eid127",
                            "scaleX",
                            750,
                            750,
                            "linear",
                            "${info_Txt2}",
                            '1',
                            '2'
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
                            6000,
                            0,
                            "linear",
                            "${hud1_left}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            7750,
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
                            6000,
                            250,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            6292,
                            125,
                            "linear",
                            "${hud1_left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid72",
                            "opacity",
                            6417,
                            125,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            6583,
                            125,
                            "linear",
                            "${hud1_left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "opacity",
                            6708,
                            125,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            6875,
                            125,
                            "linear",
                            "${hud1_left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "opacity",
                            7000,
                            125,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            7167,
                            125,
                            "linear",
                            "${hud1_left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            7292,
                            125,
                            "linear",
                            "${hud1_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "top",
                            750,
                            750,
                            "linear",
                            "${info_Txt2}",
                            '455px',
                            '745px'
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
                            17750,
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
                            4000,
                            0,
                            "linear",
                            "${SCENE2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "top",
                            5000,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '0px',
                            '88px'
                        ],
                        [
                            "eid90",
                            "top",
                            7750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '88px',
                            '0px'
                        ],
                        [
                            "eid91",
                            "top",
                            8750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '0px',
                            '-166px'
                        ],
                        [
                            "eid112",
                            "top",
                            11750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '-166px',
                            '0px'
                        ],
                        [
                            "eid126",
                            "left",
                            750,
                            750,
                            "linear",
                            "${info_Txt2}",
                            '1203px',
                            '1202px'
                        ],
                        [
                            "eid122",
                            "display",
                            750,
                            0,
                            "linear",
                            "${infoTxt1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "left",
                            12792,
                            791,
                            "linear",
                            "${car2}",
                            '-408px',
                            '444px'
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
                            17750,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            750,
                            750,
                            "linear",
                            "${info_Txt2}",
                            '1',
                            '2'
                        ],
                        [
                            "eid64",
                            "left",
                            5000,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '798px',
                            '808px'
                        ],
                        [
                            "eid92",
                            "left",
                            8750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '808px',
                            '732px'
                        ],
                        [
                            "eid113",
                            "left",
                            11750,
                            750,
                            "linear",
                            "${CAR_CLIP}",
                            '732px',
                            '808px'
                        ],
                        [
                            "eid160",
                            "left",
                            15542,
                            708,
                            "linear",
                            "${CAR_CLIP}",
                            '808px',
                            '980px'
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
                            9750,
                            250,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "opacity",
                            10042,
                            125,
                            "linear",
                            "${hud1_right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "opacity",
                            10167,
                            125,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            10333,
                            125,
                            "linear",
                            "${hud1_right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid101",
                            "opacity",
                            10458,
                            125,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid102",
                            "opacity",
                            10625,
                            125,
                            "linear",
                            "${hud1_right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid103",
                            "opacity",
                            10750,
                            125,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            10917,
                            125,
                            "linear",
                            "${hud1_right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid105",
                            "opacity",
                            11042,
                            125,
                            "linear",
                            "${hud1_right}",
                            '0',
                            '1'
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
                            4000,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            5875,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${SCENE1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            15542,
                            0,
                            "linear",
                            "${SCENE1}",
                            'none',
                            'block'
                        ],
                            [ "eid119", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${CAR_CLIP}', [0] ] ],
                            [ "eid152", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${HUD_ROAD2}', [0] ] ],
                            [ "eid163", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${SIGNAL}', [0] ] ],
                            [ "eid80", "trigger", 4167, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CAR_CLIP}', [] ] ],
                            [ "eid164", "trigger", 13458, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${SIGNAL}', ['gogo'] ] ],
                            [ "eid165", "trigger", 14500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${HUD_ROAD2}', ['gogo'] ] ],
                            [ "eid166", "trigger", 15542, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${HUD_ROAD2}', [0] ] ]
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
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img',
                            id: 'lane',
                            type: 'image',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img',
                            id: 'laneCopy',
                            type: 'image',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img',
                            id: 'laneCopy2',
                            type: 'image',
                            rect: ['938px', '-230px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img',
                            id: 'laneCopy3',
                            type: 'image',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img',
                            id: 'laneCopy4',
                            type: 'image',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img',
                            id: 'laneCopy5',
                            type: 'image',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img',
                            id: 'laneCopy6',
                            type: 'image',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img',
                            id: 'laneCopy7',
                            type: 'image',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
                        },
                        {
                            transform: [[], [], [], ['0.01', '0.01']],
                            tag: 'img',
                            id: 'laneCopy8',
                            type: 'image',
                            rect: ['958px', '-260px', '459', '525', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lane99.png']
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
                            "eid143",
                            "left",
                            0,
                            167,
                            "linear",
                            "${laneCopy3}",
                            '918px',
                            '878px'
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
                            "eid171",
                            "scaleY",
                            0,
                            167,
                            "linear",
                            "${laneCopy4}",
                            '0.09242',
                            '0.14192'
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
                            transform: [[], [], [], ['0.05', '0.05']],
                            tag: 'img',
                            id: 'roadlamp',
                            type: 'image',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png']
                        },
                        {
                            transform: [[], [], [], ['0.05', '0.05']],
                            tag: 'img',
                            id: 'roadlampCopy',
                            type: 'image',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png']
                        },
                        {
                            transform: [[], [], [], ['0.05', '0.05']],
                            tag: 'img',
                            id: 'roadlampCopy2',
                            type: 'image',
                            rect: ['0px', '20px', '228', '998', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/roadlamp33.png']
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
                            "eid355",
                            "scaleX",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy}",
                            '0.16875',
                            '0.44615'
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
                            "eid377",
                            "left",
                            0,
                            417,
                            "linear",
                            "${roadlampCopy2}",
                            '798px',
                            '0px'
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
                            rect: ['0px', '455px', '2833', '24', 'auto', 'auto'],
                            id: 'road_line',
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '2833', '24', 'auto', 'auto'],
                            id: 'road_lineCopy',
                            fill: ['rgba(0,0,0,0)', 'images/road_line.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['274px', '-1px', '2559px', '25px', 'auto', 'auto'],
                            id: 'middle_road',
                            type: 'image',
                            display: 'none',
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
                            fill: ['rgba(0,0,0,0)', 'images/line_sensor.png'],
                            id: 'line_sensor',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['774px', '111px', '738', '332', 'auto', 'auto'],
                            id: 'car1',
                            fill: ['rgba(0,0,0,0)', 'images/car1.png'],
                            type: 'image',
                            tag: 'img'
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
                            fill: ['rgba(0,0,0,0)', 'images/HUD5.png'],
                            id: 'HUD5',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '248px', '106', '106', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/HUD4.png'],
                            id: 'HUD4',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['185px', '0px', '67', '75', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/HUD2.png'],
                            id: 'HUD2',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['131px', '91px', '176', '142', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/HUD1.png'],
                            id: 'HUD1',
                            opacity: '0.5',
                            type: 'image',
                            tag: 'img'
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
            },
            "HUD_ROAD": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['837px', '832px', '127', '23', 'auto', 'auto'],
                            tag: 'img',
                            id: 'hud1_load4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hud1_load4.png']
                        },
                        {
                            rect: ['846px', '804px', '109', '22', 'auto', 'auto'],
                            tag: 'img',
                            id: 'hud1_load3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hud1_load3.png']
                        },
                        {
                            rect: ['855px', '783px', '91', '17', 'auto', 'auto'],
                            tag: 'img',
                            id: 'hud1_load2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hud1_load2.png']
                        },
                        {
                            rect: ['861px', '769px', '79', '12', 'auto', 'auto'],
                            tag: 'img',
                            id: 'hud1_load1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hud1_load1.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 542,
                    autoPlay: false,
                    labels: {
                        "gogo": 42
                    },
                    data: [
                        [
                            "eid147",
                            "opacity",
                            292,
                            250,
                            "linear",
                            "${hud1_load1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            208,
                            250,
                            "linear",
                            "${hud1_load2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid151",
                            "opacity",
                            42,
                            250,
                            "linear",
                            "${hud1_load4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            125,
                            250,
                            "linear",
                            "${hud1_load3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "SIGNAL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_src',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy3',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy2',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy7',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy6',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy5',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy4',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy15',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy14',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy13',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/signal_src121212.png'],
                            type: 'image',
                            id: 'signal_srcCopy12',
                            opacity: '0',
                            rect: ['1134px', '0px', '66', '248', 'auto', 'auto'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1200px', '248px']
                        }
                    }
                },
                timeline: {
                    duration: 2873,
                    autoPlay: false,
                    labels: {
                        "gogo": 1375
                    },
                    data: [
                        [
                            "eid71",
                            "opacity",
                            251,
                            187,
                            "linear",
                            "${signal_srcCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            1564,
                            187,
                            "linear",
                            "${signal_srcCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "scaleY",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid119",
                            "left",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid60",
                            "scaleX",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            875,
                            187,
                            "linear",
                            "${signal_srcCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            2186,
                            187,
                            "linear",
                            "${signal_srcCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "left",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid91",
                            "opacity",
                            500,
                            187,
                            "linear",
                            "${signal_srcCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1811,
                            187,
                            "linear",
                            "${signal_srcCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            0,
                            187,
                            "linear",
                            "${signal_src}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            1311,
                            187,
                            "linear",
                            "${signal_src}",
                            '1',
                            '0'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            1250,
                            187,
                            "linear",
                            "${signal_srcCopy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            2561,
                            187,
                            "linear",
                            "${signal_srcCopy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid88",
                            "left",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid80",
                            "scaleX",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            624,
                            187,
                            "linear",
                            "${signal_srcCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            1937,
                            187,
                            "linear",
                            "${signal_srcCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "left",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid52",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid128",
                            "left",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            1000,
                            1500,
                            "linear",
                            "${signal_srcCopy15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            1375,
                            1498,
                            "linear",
                            "${signal_srcCopy12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            1375,
                            186,
                            "linear",
                            "${signal_srcCopy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            2687,
                            186,
                            "linear",
                            "${signal_srcCopy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1000,
                            187,
                            "linear",
                            "${signal_srcCopy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            2313,
                            187,
                            "linear",
                            "${signal_srcCopy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid123",
                            "left",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "left",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid124",
                            "scaleY",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            875,
                            1500,
                            "linear",
                            "${signal_srcCopy4}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            0,
                            1500,
                            "linear",
                            "${signal_src}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid94",
                            "left",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid126",
                            "opacity",
                            1125,
                            187,
                            "linear",
                            "${signal_srcCopy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            2436,
                            187,
                            "linear",
                            "${signal_srcCopy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "left",
                            749,
                            1500,
                            "linear",
                            "${signal_srcCopy5}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            1125,
                            1500,
                            "linear",
                            "${signal_srcCopy14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid85",
                            "scaleX",
                            624,
                            1500,
                            "linear",
                            "${signal_srcCopy6}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            375,
                            187,
                            "linear",
                            "${signal_srcCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            1686,
                            187,
                            "linear",
                            "${signal_srcCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid81",
                            "opacity",
                            749,
                            187,
                            "linear",
                            "${signal_srcCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            2060,
                            187,
                            "linear",
                            "${signal_srcCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "left",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            126,
                            1500,
                            "linear",
                            "${signal_srcCopy}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            500,
                            1500,
                            "linear",
                            "${signal_srcCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            1250,
                            1500,
                            "linear",
                            "${signal_srcCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid69",
                            "left",
                            375,
                            1500,
                            "linear",
                            "${signal_srcCopy2}",
                            '1134px',
                            '0px'
                        ],
                        [
                            "eid61",
                            "opacity",
                            126,
                            187,
                            "linear",
                            "${signal_srcCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            1437,
                            187,
                            "linear",
                            "${signal_srcCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            251,
                            1500,
                            "linear",
                            "${signal_srcCopy3}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive10_edgeActions.js");
})("EDGE-10141767");
