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
                            id: 'horizon',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '175', '2560', '107', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"horizon.png"]
                        },
                        {
                            id: 'Mc_roadLamp',
                            symbolName: 'Mc_roadLamp',
                            type: 'rect',
                            rect: ['-74', '-202', '2190', '925', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'road',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '279', '2100', '444', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"road.png"]
                        },
                        {
                            id: 'Mc_rightLine',
                            symbolName: 'Mc_rightLine',
                            type: 'rect',
                            rect: ['1503px', '423', '128', '66', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'Mc_leftLine',
                            symbolName: 'Mc_leftLine',
                            type: 'rect',
                            rect: ['587', '370', '214', '32', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'crashCar',
                            type: 'image',
                            tag: 'img',
                            rect: ['124px', '-80px', '1394', '859', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crashCar.png"],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'Mc_glass',
                            symbolName: 'Mc_glass',
                            type: 'rect',
                            rect: ['20px', '68px', '2560', '635', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'myCar',
                            type: 'image',
                            tag: 'img',
                            rect: ['20px', '-6px', '2560', '1440', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Layer-1.png"]
                        },
                        {
                            id: 'aribag_dirver',
                            type: 'image',
                            tag: 'img',
                            rect: ['265px', '379px', '809', '822', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"aribag_dirver.png"],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'airbag_passenger',
                            type: 'image',
                            tag: 'img',
                            rect: ['1438px', '330px', '704', '911', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"airbag_passenger.png"],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
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
                    duration: 3583,
                    autoPlay: true,
                    data: [
                        [
                            "eid540",
                            "left",
                            2273,
                            160,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '265px',
                            '320px'
                        ],
                        [
                            "eid547",
                            "left",
                            2433,
                            133,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '320px',
                            '306px'
                        ],
                        [
                            "eid552",
                            "left",
                            2567,
                            133,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '306px',
                            '305px'
                        ],
                        [
                            "eid484",
                            "scaleY",
                            2167,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid499",
                            "scaleY",
                            2300,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid504",
                            "scaleY",
                            2434,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid517",
                            "scaleY",
                            2567,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid508",
                            "top",
                            2300,
                            267,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '88px',
                            '68px'
                        ],
                        [
                            "eid525",
                            "top",
                            2567,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '68px',
                            '88px'
                        ],
                        [
                            "eid544",
                            "left",
                            2273,
                            160,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '1438px',
                            '1493px'
                        ],
                        [
                            "eid548",
                            "left",
                            2433,
                            133,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '1493px',
                            '1479px'
                        ],
                        [
                            "eid551",
                            "left",
                            2567,
                            133,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '1479px',
                            '1478px'
                        ],
                        [
                            "eid530",
                            "scaleY",
                            2200,
                            367,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid556",
                            "scaleY",
                            2567,
                            66,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid560",
                            "scaleY",
                            2633,
                            67,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '0.98',
                            '1'
                        ],
                        [
                            "eid462",
                            "left",
                            800,
                            800,
                            "easeInQuad",
                            "${crashCar}",
                            '529px',
                            '417px'
                        ],
                        [
                            "eid469",
                            "left",
                            1600,
                            200,
                            "easeInQuad",
                            "${crashCar}",
                            '417px',
                            '459px'
                        ],
                        [
                            "eid470",
                            "left",
                            1833,
                            167,
                            "easeInQuad",
                            "${crashCar}",
                            '459px',
                            '104px'
                        ],
                        [
                            "eid467",
                            "left",
                            2034,
                            133,
                            "easeInQuad",
                            "${crashCar}",
                            '104px',
                            '299px'
                        ],
                        [
                            "eid486",
                            "scaleY",
                            2167,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid501",
                            "scaleY",
                            2301,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid506",
                            "scaleY",
                            2434,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid519",
                            "scaleY",
                            2567,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid532",
                            "scaleX",
                            2200,
                            367,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid557",
                            "scaleX",
                            2567,
                            66,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid561",
                            "scaleX",
                            2633,
                            67,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '0.98',
                            '1'
                        ],
                        [
                            "eid528",
                            "scaleX",
                            2200,
                            367,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid555",
                            "scaleX",
                            2567,
                            66,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid559",
                            "scaleX",
                            2633,
                            67,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '0.98',
                            '1'
                        ],
                        [
                            "eid483",
                            "scaleX",
                            2167,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid498",
                            "scaleX",
                            2300,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid503",
                            "scaleX",
                            2434,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid516",
                            "scaleX",
                            2567,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid542",
                            "top",
                            2273,
                            160,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '379px',
                            '367px'
                        ],
                        [
                            "eid549",
                            "top",
                            2433,
                            133,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '367px',
                            '364px'
                        ],
                        [
                            "eid554",
                            "top",
                            2567,
                            133,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '364px',
                            '369px'
                        ],
                        [
                            "eid546",
                            "top",
                            2273,
                            160,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '330px',
                            '318px'
                        ],
                        [
                            "eid550",
                            "top",
                            2433,
                            133,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '318px',
                            '315px'
                        ],
                        [
                            "eid553",
                            "top",
                            2567,
                            133,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '315px',
                            '320px'
                        ],
                        [
                            "eid487",
                            "top",
                            2167,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '0px',
                            '14px'
                        ],
                        [
                            "eid500",
                            "top",
                            2300,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '14px',
                            '0px'
                        ],
                        [
                            "eid505",
                            "top",
                            2434,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '0px',
                            '-6px'
                        ],
                        [
                            "eid518",
                            "top",
                            2567,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '-6px',
                            '0px'
                        ],
                        [
                            "eid569",
                            "opacity",
                            100,
                            0,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '0',
                            '0'
                        ],
                        [
                            "eid536",
                            "opacity",
                            2200,
                            122,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '0',
                            '0.92'
                        ],
                        [
                            "eid509",
                            "left",
                            2300,
                            267,
                            "easeInOutElastic",
                            "${myCar}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid524",
                            "left",
                            2567,
                            133,
                            "easeInOutElastic",
                            "${myCar}",
                            '20px',
                            '0px'
                        ],
                        [
                            "eid727",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid728",
                            "opacity",
                            3333,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid573",
                            "opacity",
                            100,
                            0,
                            "easeInQuad",
                            "${crashCar}",
                            '0',
                            '0'
                        ],
                        [
                            "eid478",
                            "opacity",
                            800,
                            133,
                            "easeInQuad",
                            "${crashCar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid570",
                            "opacity",
                            100,
                            0,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '0',
                            '0'
                        ],
                        [
                            "eid538",
                            "opacity",
                            2200,
                            122,
                            "easeOutElastic",
                            "${aribag_dirver}",
                            '0',
                            '0.92'
                        ],
                        [
                            "eid460",
                            "scaleY",
                            800,
                            800,
                            "easeInQuad",
                            "${crashCar}",
                            '0.02',
                            '0.1'
                        ],
                        [
                            "eid475",
                            "scaleY",
                            1600,
                            200,
                            "easeInQuad",
                            "${crashCar}",
                            '0.1',
                            '0.3'
                        ],
                        [
                            "eid476",
                            "scaleY",
                            1833,
                            167,
                            "easeInQuad",
                            "${crashCar}",
                            '0.3',
                            '0.5'
                        ],
                        [
                            "eid466",
                            "scaleY",
                            2034,
                            133,
                            "easeInQuad",
                            "${crashCar}",
                            '0.5',
                            '0.99885'
                        ],
                        [
                            "eid725",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid726",
                            "opacity",
                            3333,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid510",
                            "left",
                            2300,
                            267,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid526",
                            "left",
                            2567,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '20px',
                            '0px'
                        ],
                        [
                            "eid458",
                            "scaleX",
                            800,
                            800,
                            "easeInQuad",
                            "${crashCar}",
                            '0.02',
                            '0.1'
                        ],
                        [
                            "eid473",
                            "scaleX",
                            1600,
                            200,
                            "easeInQuad",
                            "${crashCar}",
                            '0.1',
                            '0.3'
                        ],
                        [
                            "eid474",
                            "scaleX",
                            1833,
                            167,
                            "easeInQuad",
                            "${crashCar}",
                            '0.3',
                            '0.5'
                        ],
                        [
                            "eid465",
                            "scaleX",
                            2034,
                            133,
                            "easeInQuad",
                            "${crashCar}",
                            '0.5',
                            '0.99885'
                        ],
                        [
                            "eid485",
                            "scaleX",
                            2167,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid502",
                            "scaleX",
                            2301,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid507",
                            "scaleX",
                            2434,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid520",
                            "scaleX",
                            2567,
                            133,
                            "easeInOutElastic",
                            "${Mc_glass}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid464",
                            "top",
                            800,
                            800,
                            "easeInQuad",
                            "${crashCar}",
                            '-148px',
                            '-137px'
                        ],
                        [
                            "eid471",
                            "top",
                            1600,
                            200,
                            "easeInQuad",
                            "${crashCar}",
                            '-137px',
                            '-87px'
                        ],
                        [
                            "eid472",
                            "top",
                            1833,
                            167,
                            "easeInQuad",
                            "${crashCar}",
                            '-87px',
                            '-72px'
                        ],
                        [
                            "eid468",
                            "top",
                            2034,
                            133,
                            "easeInQuad",
                            "${crashCar}",
                            '-72px',
                            '124px'
                        ],
                        [
                            "eid534",
                            "scaleY",
                            2200,
                            367,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid558",
                            "scaleY",
                            2567,
                            66,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid562",
                            "scaleY",
                            2633,
                            67,
                            "easeOutElastic",
                            "${airbag_passenger}",
                            '0.98',
                            '1'
                        ],
                            [ "eid680", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Mc_roadLamp}', [] ] ],
                            [ "eid681", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Mc_leftLine}', [] ] ],
                            [ "eid682", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Mc_rightLine}', [] ] ],
                            [ "eid683", "trigger", 100, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Mc_roadLamp}', [] ] ],
                            [ "eid684", "trigger", 100, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Mc_rightLine}', [] ] ],
                            [ "eid685", "trigger", 100, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Mc_leftLine}', [] ] ]
                    ]
                }
            },
            "Mc_glass": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['388px', '14px', '965px', '458px', 'auto', 'auto'],
                            id: 'scratch',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scratch.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/glass_blue.png'],
                            rect: ['0px', '0px', '2560', '635', 'auto', 'auto'],
                            id: 'glass_blue',
                            opacity: '0.15',
                            display: 'block',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/glass_red.png'],
                            rect: ['0px', '0px', '2560', '635', 'auto', 'auto'],
                            id: 'glass_red',
                            opacity: '0.15',
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/glass_black.png'],
                            rect: ['0px', '0px', '2560', '635', 'auto', 'auto'],
                            id: 'glass_black',
                            opacity: '0.5',
                            display: 'none',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '2560px', '635px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    data: [
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${glass_red}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            33,
                            0,
                            "linear",
                            "${glass_red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "display",
                            67,
                            0,
                            "linear",
                            "${glass_red}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            100,
                            0,
                            "linear",
                            "${glass_red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "display",
                            133,
                            0,
                            "linear",
                            "${glass_red}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            166,
                            0,
                            "linear",
                            "${glass_red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "display",
                            200,
                            0,
                            "linear",
                            "${glass_red}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            233,
                            0,
                            "linear",
                            "${glass_red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            267,
                            0,
                            "linear",
                            "${glass_red}",
                            'block',
                            'none'
                        ],
                        [
                            "eid565",
                            "display",
                            300,
                            0,
                            "linear",
                            "${glass_red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${glass_black}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            67,
                            0,
                            "linear",
                            "${glass_black}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9",
                            "display",
                            100,
                            0,
                            "linear",
                            "${glass_black}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            133,
                            0,
                            "linear",
                            "${glass_black}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            166,
                            0,
                            "linear",
                            "${glass_black}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            200,
                            0,
                            "linear",
                            "${glass_black}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            233,
                            0,
                            "linear",
                            "${glass_black}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            267,
                            0,
                            "linear",
                            "${glass_black}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3",
                            "display",
                            0,
                            0,
                            "linear",
                            "${glass_blue}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            33,
                            0,
                            "linear",
                            "${glass_blue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            267,
                            0,
                            "linear",
                            "${glass_blue}",
                            'none',
                            'block'
                        ],
                        [
                            "eid568",
                            "display",
                            300,
                            0,
                            "linear",
                            "${glass_blue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid566",
                            "opacity",
                            267,
                            0,
                            "linear",
                            "${glass_red}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid567",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${glass_red}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid572",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${scratch}",
                            '0',
                            '0'
                        ],
                        [
                            "eid23",
                            "opacity",
                            166,
                            101,
                            "linear",
                            "${scratch}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Mc_leftLine": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_line',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy2',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy3',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy4',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy5',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy6',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy7',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy8',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy9',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy10',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-1178px', '205px', '214px', '32px', 'auto', 'auto'],
                            id: 'left_lineCopy11',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left_line.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '214px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 1667,
                    autoPlay: true,
                    labels: {
                        "start": 733
                    },
                    data: [
                        [
                            "eid415",
                            "opacity",
                            200,
                            210,
                            "easeInQuad",
                            "${left_lineCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid450",
                            "opacity",
                            666,
                            202,
                            "easeInQuad",
                            "${left_lineCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid432",
                            "top",
                            466,
                            934,
                            "easeInQuad",
                            "${left_lineCopy7}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid437",
                            "top",
                            533,
                            934,
                            "easeInQuad",
                            "${left_lineCopy8}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid433",
                            "scaleY",
                            466,
                            934,
                            "easeInQuad",
                            "${left_lineCopy7}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid423",
                            "scaleY",
                            333,
                            934,
                            "easeInQuad",
                            "${left_lineCopy5}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid411",
                            "left",
                            133,
                            967,
                            "easeInQuad",
                            "${left_lineCopy2}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid408",
                            "scaleY",
                            133,
                            967,
                            "easeInQuad",
                            "${left_lineCopy2}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid399",
                            "scaleY",
                            0,
                            967,
                            "easeInQuad",
                            "${left_line}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid446",
                            "left",
                            600,
                            934,
                            "easeInQuad",
                            "${left_lineCopy9}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid410",
                            "opacity",
                            133,
                            210,
                            "easeInQuad",
                            "${left_lineCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid448",
                            "scaleY",
                            666,
                            934,
                            "easeInQuad",
                            "${left_lineCopy10}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid403",
                            "scaleY",
                            66,
                            967,
                            "easeInQuad",
                            "${left_lineCopy}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid442",
                            "top",
                            600,
                            934,
                            "easeInQuad",
                            "${left_lineCopy9}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid405",
                            "opacity",
                            66,
                            210,
                            "easeInQuad",
                            "${left_lineCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid406",
                            "left",
                            66,
                            967,
                            "easeInQuad",
                            "${left_lineCopy}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid427",
                            "top",
                            400,
                            934,
                            "easeInQuad",
                            "${left_lineCopy6}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid420",
                            "opacity",
                            266,
                            202,
                            "easeInQuad",
                            "${left_lineCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid428",
                            "scaleY",
                            400,
                            934,
                            "easeInQuad",
                            "${left_lineCopy6}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid417",
                            "top",
                            266,
                            934,
                            "easeInQuad",
                            "${left_lineCopy4}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid421",
                            "left",
                            266,
                            934,
                            "easeInQuad",
                            "${left_lineCopy4}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid422",
                            "top",
                            333,
                            934,
                            "easeInQuad",
                            "${left_lineCopy5}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid436",
                            "left",
                            466,
                            934,
                            "easeInQuad",
                            "${left_lineCopy7}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid443",
                            "scaleY",
                            600,
                            934,
                            "easeInQuad",
                            "${left_lineCopy9}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid449",
                            "scaleX",
                            666,
                            934,
                            "easeInQuad",
                            "${left_lineCopy10}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid444",
                            "scaleX",
                            600,
                            934,
                            "easeInQuad",
                            "${left_lineCopy9}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid429",
                            "scaleX",
                            400,
                            934,
                            "easeInQuad",
                            "${left_lineCopy6}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid395",
                            "top",
                            0,
                            967,
                            "easeInQuad",
                            "${left_line}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid447",
                            "top",
                            666,
                            934,
                            "easeInQuad",
                            "${left_lineCopy10}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid419",
                            "scaleX",
                            266,
                            934,
                            "easeInQuad",
                            "${left_lineCopy4}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid409",
                            "scaleX",
                            133,
                            967,
                            "easeInQuad",
                            "${left_lineCopy2}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid452",
                            "top",
                            733,
                            934,
                            "easeInQuad",
                            "${left_lineCopy11}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid435",
                            "opacity",
                            466,
                            202,
                            "easeInQuad",
                            "${left_lineCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid412",
                            "top",
                            200,
                            967,
                            "easeInQuad",
                            "${left_lineCopy3}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid397",
                            "scaleX",
                            0,
                            967,
                            "easeInQuad",
                            "${left_line}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid441",
                            "left",
                            533,
                            934,
                            "easeInQuad",
                            "${left_lineCopy8}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid431",
                            "left",
                            400,
                            934,
                            "easeInQuad",
                            "${left_lineCopy6}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid424",
                            "scaleX",
                            333,
                            934,
                            "easeInQuad",
                            "${left_lineCopy5}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid404",
                            "scaleX",
                            66,
                            967,
                            "easeInQuad",
                            "${left_lineCopy}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid434",
                            "scaleX",
                            466,
                            934,
                            "easeInQuad",
                            "${left_lineCopy7}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid425",
                            "opacity",
                            333,
                            202,
                            "easeInQuad",
                            "${left_lineCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid401",
                            "opacity",
                            0,
                            210,
                            "easeInQuad",
                            "${left_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid451",
                            "left",
                            666,
                            934,
                            "easeInQuad",
                            "${left_lineCopy10}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid430",
                            "opacity",
                            400,
                            202,
                            "easeInQuad",
                            "${left_lineCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid445",
                            "opacity",
                            600,
                            202,
                            "easeInQuad",
                            "${left_lineCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid438",
                            "scaleY",
                            533,
                            934,
                            "easeInQuad",
                            "${left_lineCopy8}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid439",
                            "scaleX",
                            533,
                            934,
                            "easeInQuad",
                            "${left_lineCopy8}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid402",
                            "top",
                            66,
                            967,
                            "easeInQuad",
                            "${left_lineCopy}",
                            '-99px',
                            '205px'
                        ],
                        [
                            "eid455",
                            "opacity",
                            733,
                            202,
                            "easeInQuad",
                            "${left_lineCopy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid414",
                            "scaleX",
                            200,
                            967,
                            "easeInQuad",
                            "${left_lineCopy3}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid416",
                            "left",
                            200,
                            967,
                            "easeInQuad",
                            "${left_lineCopy3}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid393",
                            "left",
                            0,
                            967,
                            "easeInQuad",
                            "${left_line}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid454",
                            "scaleX",
                            733,
                            934,
                            "easeInQuad",
                            "${left_lineCopy11}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid426",
                            "left",
                            333,
                            934,
                            "easeInQuad",
                            "${left_lineCopy5}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid440",
                            "opacity",
                            533,
                            202,
                            "easeInQuad",
                            "${left_lineCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid456",
                            "left",
                            733,
                            934,
                            "easeInQuad",
                            "${left_lineCopy11}",
                            '532px',
                            '-1178px'
                        ],
                        [
                            "eid453",
                            "scaleY",
                            733,
                            934,
                            "easeInQuad",
                            "${left_lineCopy11}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid413",
                            "scaleY",
                            200,
                            967,
                            "easeInQuad",
                            "${left_lineCopy3}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid418",
                            "scaleY",
                            266,
                            934,
                            "easeInQuad",
                            "${left_lineCopy4}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid407",
                            "top",
                            133,
                            967,
                            "easeInQuad",
                            "${left_lineCopy2}",
                            '-99px',
                            '205px'
                        ]
                    ]
                }
            },
            "Mc_roadLamp": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.5', '1.5']],
                            rect: ['2007px', '-29px', '594px', '925px', 'auto', 'auto'],
                            id: 'roadLamp_R',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadLamp.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['-0.02', '0.02']],
                            rect: ['992px', '-100px', '594px', '925px', 'auto', 'auto'],
                            id: 'roadLamp_L',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadLamp.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.5', '1.5']],
                            rect: ['2007px', '-29px', '594px', '925px', 'auto', 'auto'],
                            id: 'roadLamp_RCopy',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadLamp.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['-0.02', '0.02']],
                            rect: ['992px', '-100px', '594px', '925px', 'auto', 'auto'],
                            id: 'roadLamp_LCopy',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/roadLamp.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2190px', '925px']
                        }
                    }
                },
                timeline: {
                    duration: 1200,
                    autoPlay: true,
                    data: [
                        [
                            "eid325",
                            "scaleY",
                            367,
                            666,
                            "easeInQuad",
                            "${roadLamp_LCopy}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid303",
                            "left",
                            0,
                            666,
                            "easeInQuad",
                            "${roadLamp_L}",
                            '992px',
                            '0px'
                        ],
                        [
                            "eid311",
                            "opacity",
                            0,
                            103,
                            "easeInQuad",
                            "${roadLamp_L}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "scaleY",
                            0,
                            666,
                            "easeInQuad",
                            "${roadLamp_L}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid305",
                            "top",
                            0,
                            666,
                            "easeInQuad",
                            "${roadLamp_L}",
                            '18px',
                            '-100px'
                        ],
                        [
                            "eid327",
                            "opacity",
                            367,
                            103,
                            "easeInQuad",
                            "${roadLamp_LCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid299",
                            "scaleX",
                            0,
                            666,
                            "easeInQuad",
                            "${roadLamp_R}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid321",
                            "scaleX",
                            666,
                            167,
                            "easeInQuad",
                            "${roadLamp_R}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid295",
                            "scaleX",
                            0,
                            666,
                            "easeInQuad",
                            "${roadLamp_L}",
                            '-0.02',
                            '-1'
                        ],
                        [
                            "eid324",
                            "top",
                            367,
                            666,
                            "easeInQuad",
                            "${roadLamp_LCopy}",
                            '18px',
                            '-100px'
                        ],
                        [
                            "eid309",
                            "top",
                            0,
                            666,
                            "easeInQuad",
                            "${roadLamp_R}",
                            '18px',
                            '-90px'
                        ],
                        [
                            "eid318",
                            "top",
                            666,
                            167,
                            "easeInQuad",
                            "${roadLamp_R}",
                            '-90px',
                            '-29px'
                        ],
                        [
                            "eid326",
                            "scaleX",
                            367,
                            666,
                            "easeInQuad",
                            "${roadLamp_LCopy}",
                            '-0.02',
                            '-1'
                        ],
                        [
                            "eid307",
                            "left",
                            0,
                            666,
                            "easeInQuad",
                            "${roadLamp_R}",
                            '1062px',
                            '1596px'
                        ],
                        [
                            "eid320",
                            "left",
                            666,
                            167,
                            "easeInQuad",
                            "${roadLamp_R}",
                            '1596px',
                            '2007px'
                        ],
                        [
                            "eid328",
                            "left",
                            367,
                            666,
                            "easeInQuad",
                            "${roadLamp_LCopy}",
                            '992px',
                            '0px'
                        ],
                        [
                            "eid313",
                            "opacity",
                            0,
                            103,
                            "easeInQuad",
                            "${roadLamp_R}",
                            '0',
                            '1'
                        ],
                        [
                            "eid301",
                            "scaleY",
                            0,
                            666,
                            "easeInQuad",
                            "${roadLamp_R}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid319",
                            "scaleY",
                            666,
                            167,
                            "easeInQuad",
                            "${roadLamp_R}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid335",
                            "opacity",
                            367,
                            103,
                            "easeInQuad",
                            "${roadLamp_RCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid329",
                            "top",
                            367,
                            666,
                            "easeInQuad",
                            "${roadLamp_RCopy}",
                            '18px',
                            '-90px'
                        ],
                        [
                            "eid330",
                            "top",
                            1033,
                            167,
                            "easeInQuad",
                            "${roadLamp_RCopy}",
                            '-90px',
                            '-29px'
                        ],
                        [
                            "eid331",
                            "scaleY",
                            367,
                            666,
                            "easeInQuad",
                            "${roadLamp_RCopy}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid332",
                            "scaleY",
                            1033,
                            167,
                            "easeInQuad",
                            "${roadLamp_RCopy}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid336",
                            "left",
                            367,
                            666,
                            "easeInQuad",
                            "${roadLamp_RCopy}",
                            '1062px',
                            '1596px'
                        ],
                        [
                            "eid337",
                            "left",
                            1033,
                            167,
                            "easeInQuad",
                            "${roadLamp_RCopy}",
                            '1596px',
                            '2007px'
                        ],
                        [
                            "eid333",
                            "scaleX",
                            367,
                            666,
                            "easeInQuad",
                            "${roadLamp_RCopy}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid334",
                            "scaleX",
                            1033,
                            167,
                            "easeInQuad",
                            "${roadLamp_RCopy}",
                            '1',
                            '1.5'
                        ]
                    ]
                }
            },
            "Mc_rightLine": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            tag: 'img',
                            type: 'image',
                            id: 'right_line',
                            opacity: 0,
                            rect: ['446px', '283px', '128', '66', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right_line.png']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            tag: 'img',
                            type: 'image',
                            id: 'right_lineCopy',
                            opacity: 0,
                            rect: ['446px', '283px', '128', '66', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right_line.png']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            tag: 'img',
                            type: 'image',
                            id: 'right_lineCopy2',
                            opacity: 0,
                            rect: ['446px', '283px', '128', '66', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right_line.png']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            tag: 'img',
                            type: 'image',
                            id: 'right_lineCopy3',
                            opacity: 0,
                            rect: ['446px', '283px', '128', '66', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right_line.png']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            tag: 'img',
                            type: 'image',
                            id: 'right_lineCopy4',
                            opacity: 0,
                            rect: ['446px', '283px', '128', '66', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right_line.png']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            tag: 'img',
                            type: 'image',
                            id: 'right_lineCopy5',
                            opacity: 0,
                            rect: ['446px', '283px', '128', '66', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right_line.png']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            tag: 'img',
                            type: 'image',
                            id: 'right_lineCopy6',
                            opacity: 0,
                            rect: ['446px', '283px', '128', '66', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right_line.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 1467,
                    autoPlay: true,
                    labels: {
                        "start": 500
                    },
                    data: [
                        [
                            "eid367",
                            "top",
                            400,
                            867,
                            "easeInQuad",
                            "${right_lineCopy4}",
                            '-166px',
                            '283px'
                        ],
                        [
                            "eid384",
                            "opacity",
                            200,
                            188,
                            "easeInQuad",
                            "${right_lineCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid359",
                            "top",
                            200,
                            867,
                            "easeInQuad",
                            "${right_lineCopy2}",
                            '-166px',
                            '283px'
                        ],
                        [
                            "eid380",
                            "opacity",
                            400,
                            188,
                            "easeInQuad",
                            "${right_lineCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid382",
                            "opacity",
                            0,
                            188,
                            "easeInQuad",
                            "${right_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid348",
                            "top",
                            0,
                            867,
                            "easeInQuad",
                            "${right_line}",
                            '-166px',
                            '283px'
                        ],
                        [
                            "eid346",
                            "left",
                            0,
                            867,
                            "easeInQuad",
                            "${right_line}",
                            '-276px',
                            '446px'
                        ],
                        [
                            "eid369",
                            "left",
                            400,
                            867,
                            "easeInQuad",
                            "${right_lineCopy4}",
                            '-276px',
                            '446px'
                        ],
                        [
                            "eid386",
                            "opacity",
                            300,
                            188,
                            "easeInQuad",
                            "${right_lineCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid360",
                            "left",
                            200,
                            867,
                            "easeInQuad",
                            "${right_lineCopy2}",
                            '-276px',
                            '446px'
                        ],
                        [
                            "eid356",
                            "top",
                            100,
                            867,
                            "easeInQuad",
                            "${right_lineCopy}",
                            '-166px',
                            '283px'
                        ],
                        [
                            "eid391",
                            "left",
                            600,
                            867,
                            "easeInQuad",
                            "${right_lineCopy6}",
                            '-276px',
                            '446px'
                        ],
                        [
                            "eid355",
                            "left",
                            100,
                            867,
                            "easeInQuad",
                            "${right_lineCopy}",
                            '-276px',
                            '446px'
                        ],
                        [
                            "eid352",
                            "scaleY",
                            0,
                            867,
                            "easeInQuad",
                            "${right_line}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid365",
                            "left",
                            300,
                            867,
                            "easeInQuad",
                            "${right_lineCopy3}",
                            '-276px',
                            '446px'
                        ],
                        [
                            "eid387",
                            "top",
                            600,
                            867,
                            "easeInQuad",
                            "${right_lineCopy6}",
                            '-166px',
                            '283px'
                        ],
                        [
                            "eid376",
                            "opacity",
                            500,
                            188,
                            "easeInQuad",
                            "${right_lineCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid353",
                            "scaleX",
                            100,
                            867,
                            "easeInQuad",
                            "${right_lineCopy}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid373",
                            "left",
                            500,
                            867,
                            "easeInQuad",
                            "${right_lineCopy5}",
                            '-276px',
                            '446px'
                        ],
                        [
                            "eid364",
                            "scaleY",
                            300,
                            867,
                            "easeInQuad",
                            "${right_lineCopy3}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid350",
                            "scaleX",
                            0,
                            867,
                            "easeInQuad",
                            "${right_line}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid366",
                            "top",
                            300,
                            867,
                            "easeInQuad",
                            "${right_lineCopy3}",
                            '-166px',
                            '283px'
                        ],
                        [
                            "eid354",
                            "scaleY",
                            100,
                            867,
                            "easeInQuad",
                            "${right_lineCopy}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid362",
                            "scaleX",
                            200,
                            867,
                            "easeInQuad",
                            "${right_lineCopy2}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid363",
                            "scaleX",
                            300,
                            867,
                            "easeInQuad",
                            "${right_lineCopy3}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid368",
                            "scaleX",
                            400,
                            867,
                            "easeInQuad",
                            "${right_lineCopy4}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid370",
                            "scaleY",
                            400,
                            867,
                            "easeInQuad",
                            "${right_lineCopy4}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid372",
                            "scaleX",
                            500,
                            867,
                            "easeInQuad",
                            "${right_lineCopy5}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid371",
                            "top",
                            500,
                            867,
                            "easeInQuad",
                            "${right_lineCopy5}",
                            '-166px',
                            '283px'
                        ],
                        [
                            "eid374",
                            "scaleY",
                            500,
                            867,
                            "easeInQuad",
                            "${right_lineCopy5}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid378",
                            "opacity",
                            100,
                            188,
                            "easeInQuad",
                            "${right_lineCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid361",
                            "scaleY",
                            200,
                            867,
                            "easeInQuad",
                            "${right_lineCopy2}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid389",
                            "scaleX",
                            600,
                            867,
                            "easeInQuad",
                            "${right_lineCopy6}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid388",
                            "scaleY",
                            600,
                            867,
                            "easeInQuad",
                            "${right_lineCopy6}",
                            '0.1',
                            '1.2'
                        ],
                        [
                            "eid390",
                            "opacity",
                            600,
                            188,
                            "easeInQuad",
                            "${right_lineCopy6}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("airbag2_edgeActions.js");
})("EDGE-27681480");
