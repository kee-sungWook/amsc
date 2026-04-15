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
                            id: 'back',
                            type: 'image',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
                        },
                        {
                            id: 'light_btm',
                            type: 'image',
                            tag: 'img',
                            rect: ['2230', '257', '66', '83', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"light_btm.png"]
                        },
                        {
                            id: 'light_top',
                            type: 'image',
                            tag: 'img',
                            rect: ['2230', '163', '64', '71', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"light_top.png"]
                        },
                        {
                            id: 'car_shadow',
                            type: 'image',
                            tag: 'img',
                            rect: ['1712px', '1706px', '1022', '591', 'auto', 'auto'],
                            opacity: '0.5',
                            fill: ["rgba(0,0,0,0)",im+"car_shadow.png"]
                        },
                        {
                            id: 'car_fill',
                            type: 'image',
                            tag: 'img',
                            rect: ['135', '368', '1045', '799', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car_fill.png"]
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['881px', '880px', '112px', '147px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'E_LINE',
                            symbolName: 'E_LINE',
                            type: 'rect',
                            rect: ['885px', '848px', '100', '195', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'engine',
                            type: 'image',
                            tag: 'img',
                            rect: ['878px', '800px', '202', '255', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"engine.png"]
                        },
                        {
                            id: 'E_GEAR1',
                            symbolName: 'E_GEAR1',
                            type: 'rect',
                            rect: ['881px', '936px', '32', '33', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-35'],[],['0.48058','1.02917']]
                        },
                        {
                            id: 'E_GEAR2Copy3',
                            symbolName: 'E_GEAR2',
                            type: 'rect',
                            rect: ['899px', '891px', '47', '47', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-35'],[],['0.42553','1.06383']]
                        },
                        {
                            id: 'E_GEAR2Copy2',
                            symbolName: 'E_GEAR2',
                            type: 'rect',
                            rect: ['922px', '960px', '47', '47', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-33'],[],['0.6383','1.53191']]
                        },
                        {
                            id: 'car_line',
                            type: 'image',
                            tag: 'img',
                            rect: ['137', '371', '1040', '794', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"car_line.png"]
                        },
                        {
                            id: 'CAR',
                            symbolName: 'CAR',
                            type: 'rect',
                            rect: ['1707px', '1482px', '1045', '799', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'MEMO',
                            symbolName: 'MEMO',
                            type: 'rect',
                            rect: ['1077px', '569px', '405', '352', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'PEDAL',
                            symbolName: 'PEDAL',
                            type: 'rect',
                            rect: ['850px', '37px', '569', '498', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        },
                        {
                            id: 'RectangleCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['1069', '526', '346', '346', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"replayBtn.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2560px', '1440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 12716,
                    autoPlay: true,
                    data: [
                        [
                            "eid186",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${MEMO}",
                            '0',
                            '0'
                        ],
                        [
                            "eid204",
                            "opacity",
                            4333,
                            533,
                            "linear",
                            "${MEMO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid280",
                            "opacity",
                            10333,
                            400,
                            "linear",
                            "${MEMO}",
                            '1',
                            '0'
                        ],
                        [
                            "eid189",
                            "left",
                            333,
                            2800,
                            "easeOutQuad",
                            "${CAR}",
                            '-1055px',
                            '135px'
                        ],
                        [
                            "eid276",
                            "left",
                            10466,
                            1067,
                            "easeInQuad",
                            "${CAR}",
                            '135px',
                            '1707px'
                        ],
                        [
                            "eid217",
                            "opacity",
                            3266,
                            667,
                            "easeOutQuad",
                            "${CAR}",
                            '1',
                            '0'
                        ],
                        [
                            "eid254",
                            "opacity",
                            8533,
                            666,
                            "easeOutQuad",
                            "${CAR}",
                            '0',
                            '1'
                        ],
                        [
                            "eid300",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${light_btm}",
                            '0',
                            '0'
                        ],
                        [
                            "eid199",
                            "opacity",
                            533,
                            867,
                            "linear",
                            "${light_btm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid253",
                            "opacity",
                            5733,
                            867,
                            "linear",
                            "${light_btm}",
                            '1',
                            '0'
                        ],
                        [
                            "eid306",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid307",
                            "display",
                            12466,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid195",
                            "top",
                            333,
                            2800,
                            "easeOutQuad",
                            "${car_shadow}",
                            '-284px',
                            '592px'
                        ],
                        [
                            "eid279",
                            "top",
                            10466,
                            1067,
                            "easeInQuad",
                            "${car_shadow}",
                            '592px',
                            '1706px'
                        ],
                        [
                            "eid240",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${E_LINE}",
                            '0',
                            '0'
                        ],
                        [
                            "eid245",
                            "opacity",
                            3133,
                            0,
                            "easeOutQuad",
                            "${E_LINE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid274",
                            "opacity",
                            9199,
                            0,
                            "easeOutQuad",
                            "${E_LINE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid302",
                            "opacity",
                            12466,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid305",
                            "display",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            12466,
                            0,
                            "linear",
                            "${replayBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid304",
                            "opacity",
                            12466,
                            250,
                            "linear",
                            "${RectangleCopy}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid238",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${E_GEAR1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid243",
                            "opacity",
                            3133,
                            0,
                            "easeOutQuad",
                            "${E_GEAR1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid272",
                            "opacity",
                            9199,
                            0,
                            "easeOutQuad",
                            "${E_GEAR1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid187",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${PEDAL}",
                            '0',
                            '0'
                        ],
                        [
                            "eid196",
                            "opacity",
                            533,
                            933,
                            "linear",
                            "${PEDAL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid298",
                            "opacity",
                            11533,
                            933,
                            "linear",
                            "${PEDAL}",
                            '1',
                            '0'
                        ],
                        [
                            "eid293",
                            "display",
                            3133,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid294",
                            "display",
                            9199,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid191",
                            "top",
                            333,
                            2800,
                            "easeOutQuad",
                            "${CAR}",
                            '-508px',
                            '368px'
                        ],
                        [
                            "eid277",
                            "top",
                            10466,
                            1067,
                            "easeInQuad",
                            "${CAR}",
                            '368px',
                            '1482px'
                        ],
                        [
                            "eid213",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${car_line}",
                            '0',
                            '0'
                        ],
                        [
                            "eid214",
                            "opacity",
                            3133,
                            0,
                            "linear",
                            "${car_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid269",
                            "opacity",
                            9199,
                            0,
                            "easeOutQuad",
                            "${car_line}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "left",
                            333,
                            2800,
                            "easeOutQuad",
                            "${car_shadow}",
                            '-1050px',
                            '140px'
                        ],
                        [
                            "eid278",
                            "left",
                            10466,
                            1067,
                            "easeInQuad",
                            "${car_shadow}",
                            '140px',
                            '1712px'
                        ],
                        [
                            "eid237",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${E_GEAR2Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid242",
                            "opacity",
                            3133,
                            0,
                            "easeOutQuad",
                            "${E_GEAR2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            9199,
                            0,
                            "easeOutQuad",
                            "${E_GEAR2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${E_GEAR2Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid241",
                            "opacity",
                            3133,
                            0,
                            "easeOutQuad",
                            "${E_GEAR2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid270",
                            "opacity",
                            9199,
                            0,
                            "easeOutQuad",
                            "${E_GEAR2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid212",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${car_fill}",
                            '0',
                            '0'
                        ],
                        [
                            "eid216",
                            "opacity",
                            3133,
                            0,
                            "linear",
                            "${car_fill}",
                            '0',
                            '1'
                        ],
                        [
                            "eid275",
                            "opacity",
                            9199,
                            0,
                            "easeOutQuad",
                            "${car_fill}",
                            '1',
                            '0'
                        ],
                        [
                            "eid239",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${engine}",
                            '0',
                            '0'
                        ],
                        [
                            "eid244",
                            "opacity",
                            3133,
                            0,
                            "easeOutQuad",
                            "${engine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid273",
                            "opacity",
                            9199,
                            0,
                            "easeOutQuad",
                            "${engine}",
                            '1',
                            '0'
                        ],
                        [
                            "eid299",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${light_top}",
                            '1',
                            '1'
                        ],
                        [
                            "eid197",
                            "opacity",
                            533,
                            867,
                            "linear",
                            "${light_top}",
                            '1',
                            '0'
                        ],
                        [
                            "eid252",
                            "opacity",
                            5733,
                            867,
                            "linear",
                            "${light_top}",
                            '0',
                            '1'
                        ],
                            [ "eid288", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MEMO}', ['OFF'] ] ],
                            [ "eid218", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PEDAL}', [0] ] ],
                            [ "eid246", "trigger", 4866.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${E_GEAR2Copy3}', [] ] ],
                            [ "eid249", "trigger", 4866.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${E_LINE}', [] ] ],
                            [ "eid248", "trigger", 4866.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${E_GEAR1}', [] ] ],
                            [ "eid247", "trigger", 4866.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${E_GEAR2Copy2}', [] ] ],
                            [ "eid281", "trigger", 6600.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PEDAL}', ['brakeOff'] ] ],
                            [ "eid283", "trigger", 7199.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${E_LINE}', [] ] ],
                            [ "eid285", "trigger", 7199.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${E_GEAR1}', [] ] ],
                            [ "eid284", "trigger", 7199.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${E_GEAR2Copy2}', [] ] ],
                            [ "eid282", "trigger", 7199.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${E_GEAR2Copy3}', [] ] ],
                            [ "eid286", "trigger", 7199.6666666666, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${MEMO}', ['ON'] ] ],
                            [ "eid287", "trigger", 9733.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PEDAL}', ['gogo'] ] ]
                    ]
                }
            },
            "PEDAL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['7px', '7px', '555', '484', 'auto', 'auto'],
                            id: 'pedal_back',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_back.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_axccel.png'],
                            id: 'pedal_axccel',
                            rect: ['366px', '54px', '98', '239', 'auto', 'auto'],
                            transform: [[], [], [], [], ['30%', '16%']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pedal_brake.png'],
                            id: 'pedal_brake',
                            rect: ['132px', '103px', '158', '188', 'auto', 'auto'],
                            transform: [[], [], [], [], ['16%', '10%']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'foot',
                            rect: ['386px', '113px', '466px', '356px', 'auto', 'auto'],
                            transform: [[], ['-6'], [], [], ['50%', '79%']],
                            fill: ['rgba(0,0,0,0)', 'images/foot.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '569', '498', 'auto', 'auto'],
                            id: 'pedalPic',
                            fill: ['rgba(0,0,0,0)', 'images/pedalPic.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '569px', '498px']
                        }
                    }
                },
                timeline: {
                    duration: 4900,
                    autoPlay: false,
                    labels: {
                        "brakeOff": 3000,
                        "gogo": 4133
                    },
                    data: [
                        [
                            "eid70",
                            "scaleY",
                            1333,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            3000,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '1'
                        ],
                        [
                            "eid69",
                            "scaleX",
                            1333,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '1'
                        ],
                        [
                            "eid128",
                            "scaleX",
                            3000,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '1',
                            '1'
                        ],
                        [
                            "eid64",
                            "left",
                            533,
                            234,
                            "linear",
                            "${foot}",
                            '386px',
                            '443px'
                        ],
                        [
                            "eid67",
                            "left",
                            833,
                            467,
                            "linear",
                            "${foot}",
                            '443px',
                            '206px'
                        ],
                        [
                            "eid125",
                            "left",
                            3600,
                            467,
                            "linear",
                            "${foot}",
                            '206px',
                            '443px'
                        ],
                        [
                            "eid124",
                            "left",
                            4133,
                            234,
                            "linear",
                            "${foot}",
                            '443px',
                            '386px'
                        ],
                        [
                            "eid106",
                            "rotateZ",
                            67,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid133",
                            "rotateZ",
                            4467,
                            433,
                            "linear",
                            "${pedal_axccel}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid103",
                            "rotateZ",
                            0,
                            500,
                            "easeInQuad",
                            "${foot}",
                            '-6deg',
                            '4deg'
                        ],
                        [
                            "eid68",
                            "rotateZ",
                            1333,
                            567,
                            "linear",
                            "${foot}",
                            '4deg',
                            '-6deg'
                        ],
                        [
                            "eid127",
                            "rotateZ",
                            3000,
                            567,
                            "linear",
                            "${foot}",
                            '-6deg',
                            '4deg'
                        ],
                        [
                            "eid126",
                            "rotateZ",
                            4400,
                            500,
                            "easeInQuad",
                            "${foot}",
                            '4deg',
                            '-6deg'
                        ],
                        [
                            "eid108",
                            "scaleY",
                            67,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid132",
                            "scaleY",
                            4467,
                            433,
                            "linear",
                            "${pedal_axccel}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid65",
                            "top",
                            533,
                            234,
                            "linear",
                            "${foot}",
                            '113px',
                            '126px'
                        ],
                        [
                            "eid66",
                            "top",
                            833,
                            467,
                            "linear",
                            "${foot}",
                            '126px',
                            '133px'
                        ],
                        [
                            "eid123",
                            "top",
                            3600,
                            467,
                            "linear",
                            "${foot}",
                            '133px',
                            '126px'
                        ],
                        [
                            "eid116",
                            "top",
                            4133,
                            234,
                            "linear",
                            "${foot}",
                            '126px',
                            '113px'
                        ],
                        [
                            "eid71",
                            "rotateZ",
                            1333,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid130",
                            "rotateZ",
                            3000,
                            567,
                            "linear",
                            "${pedal_brake}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid107",
                            "scaleX",
                            67,
                            500,
                            "linear",
                            "${pedal_axccel}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            4467,
                            433,
                            "linear",
                            "${pedal_axccel}",
                            '1',
                            '0.95'
                        ]
                    ]
                }
            },
            "MEMO": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '405', '352', 'auto', 'auto'],
                            id: 'memo_body',
                            fill: ['rgba(0,0,0,0)', 'images/memo_body.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['127px', '157px', '204', '128', 'auto', 'auto'],
                            font: ['Arial', [100, ''], 'rgba(140,142,144,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            id: 'OFF',
                            opacity: '1',
                            text: 'OFF',
                            type: 'text'
                        },
                        {
                            rect: ['152px', '157px', '154', '128', 'auto', 'auto'],
                            font: ['Arial', [100, ''], 'rgba(140,142,144,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            id: 'ON',
                            opacity: '0',
                            text: 'ON',
                            type: 'text'
                        },
                        {
                            rect: ['75px', '86px', '310', '104', 'auto', 'auto'],
                            font: ['Arial', [80, ''], 'rgba(140,142,144,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            id: 'ENGINE',
                            text: 'ENGINE',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '405px', '352px']
                        }
                    }
                },
                timeline: {
                    duration: 233,
                    autoPlay: false,
                    labels: {
                        "OFF": 0,
                        "ON": 233
                    },
                    data: [
                        [
                            "eid136",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ON}",
                            '0',
                            '0'
                        ],
                        [
                            "eid134",
                            "opacity",
                            233,
                            0,
                            "linear",
                            "${ON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${OFF}",
                            '1',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            233,
                            0,
                            "linear",
                            "${OFF}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CAR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1045', '799', 'auto', 'auto'],
                            id: 'car_color',
                            fill: ['rgba(0,0,0,0)', 'images/car_color.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1045px', '799px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "E_GEAR2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '47', '47', 'auto', 'auto'],
                            id: 'eng_gear2',
                            fill: ['rgba(0,0,0,0)', 'images/eng_gear2.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid162",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${eng_gear2}",
                            '0deg',
                            '355deg'
                        ]
                    ]
                }
            },
            "E_GEAR1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '32', '33', 'auto', 'auto'],
                            id: 'eng_gear1',
                            fill: ['rgba(0,0,0,0)', 'images/eng_gear1.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '32px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    data: [
                        [
                            "eid163",
                            "rotateZ",
                            0,
                            600,
                            "linear",
                            "${eng_gear1}",
                            '0deg',
                            '90deg'
                        ]
                    ]
                }
            },
            "E_LINE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['25px', '6px', '75', '195', 'auto', 'auto'],
                            id: 'eng_line2',
                            fill: ['rgba(0,0,0,0)', 'images/eng_line2.png'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '38px', '27', '52', 'auto', 'auto'],
                            id: 'eng_line1',
                            fill: ['rgba(0,0,0,0)', 'images/eng_line1.png'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '195px']
                        }
                    }
                },
                timeline: {
                    duration: 433.33333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid171",
                            "top",
                            0,
                            433,
                            "linear",
                            "${eng_line1}",
                            '45px',
                            '38px'
                        ],
                        [
                            "eid172",
                            "left",
                            0,
                            433,
                            "linear",
                            "${eng_line2}",
                            '25px',
                            '27px'
                        ],
                        [
                            "eid173",
                            "top",
                            0,
                            433,
                            "linear",
                            "${eng_line2}",
                            '0px',
                            '6px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drive8_edgeActions.js");
})("EDGE-22344208");
