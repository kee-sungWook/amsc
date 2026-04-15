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
                            id: 'crashCar',
                            type: 'image',
                            tag: 'img',
                            rect: ['407px', '50px', '1517', '965', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crashCar.png"],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'myCar',
                            symbolName: 'myCar',
                            type: 'rect',
                            rect: ['0', '0', '2560', '1440', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'road',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '0', '2560', '1440', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"road.png"]
                        },
                        {
                            id: 'car2',
                            type: 'image',
                            tag: 'img',
                            rect: ['1347', '255px', '237', '509', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"car2.png"]
                        },
                        {
                            id: 'car1',
                            type: 'image',
                            tag: 'img',
                            rect: ['1212px', '752', '508', '240', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"car1.png"]
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
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "left",
                            1250,
                            533,
                            "easeOutQuad",
                            "${crashCar}",
                            '407px',
                            '307px'
                        ],
                        [
                            "eid44",
                            "scaleY",
                            1783,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid47",
                            "scaleY",
                            1916,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            2049,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            2182,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            1783,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            1916,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            2049,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid50",
                            "scaleX",
                            2182,
                            133,
                            "easeOutQuad",
                            "${myCar}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            1250,
                            533,
                            "easeOutQuad",
                            "${crashCar}",
                            '0.7',
                            '1.1'
                        ],
                        [
                            "eid38",
                            "top",
                            1250,
                            533,
                            "easeOutQuad",
                            "${crashCar}",
                            '-145px',
                            '50px'
                        ],
                        [
                            "eid171",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid172",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid135",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${road}",
                            '1',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${road}",
                            '1',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${road}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${car1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${car1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${car1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            1250,
                            533,
                            "easeOutQuad",
                            "${crashCar}",
                            '0.7',
                            '1.1'
                        ],
                        [
                            "eid14",
                            "top",
                            750,
                            500,
                            "easeOutQuad",
                            "${car2}",
                            '-537px',
                            '255px'
                        ],
                        [
                            "eid137",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${crashCar}",
                            '0',
                            '0'
                        ],
                        [
                            "eid84",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${crashCar}",
                            '0',
                            '0'
                        ],
                        [
                            "eid93",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${crashCar}",
                            '1',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid170",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "left",
                            250,
                            1000,
                            "easeOutQuad",
                            "${car1}",
                            '-519px',
                            '1212px'
                        ],
                        [
                            "eid136",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${myCar}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${myCar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${myCar}",
                            '1',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${car2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${car2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${car2}",
                            '1',
                            '0'
                        ],
                            [ "eid82", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${myCar}', [0] ] ],
                            [ "eid83", "trigger", 1916, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${myCar}', [] ] ]
                    ]
                }
            },
            "myCar": {
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
                            id: 'backMirror',
                            tag: 'img',
                            rect: ['1898px', '247px', '149', '119', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/backMirror.png']
                        },
                        {
                            rect: ['0px', '0px', '2560', '452', 'auto', 'auto'],
                            tag: 'img',
                            display: 'block',
                            id: 'classBlue',
                            opacity: '0.15',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/classBlue.png']
                        },
                        {
                            rect: ['0px', '0px', '2560', '452', 'auto', 'auto'],
                            tag: 'img',
                            display: 'none',
                            id: 'classRed',
                            opacity: '0.3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/classRed.png']
                        },
                        {
                            rect: ['0px', '0px', '2560', '452', 'auto', 'auto'],
                            tag: 'img',
                            display: 'none',
                            id: 'classBlack',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/classBlack.png']
                        },
                        {
                            type: 'image',
                            id: 'pics_b',
                            tag: 'img',
                            rect: ['0px', '0px', '2560', '1440', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pics_b.png']
                        },
                        {
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'airbag_r2',
                            opacity: '0',
                            rect: ['501px', '563px', '92px', '252px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/airbag_r2.png']
                        },
                        {
                            rect: ['454', '366', '430', '459', 'auto', 'auto'],
                            tag: 'img',
                            id: 'airbag_r2_blinker',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/airbag_r2_blinker.png']
                        },
                        {
                            transform: [[], ['-25'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'airbag_f2',
                            opacity: '0',
                            rect: ['1278px', '522px', '121px', '280px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/airbag_f2.png']
                        },
                        {
                            rect: ['1255', '345', '430', '459', 'auto', 'auto'],
                            tag: 'img',
                            id: 'airbag_f2_blinker',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/airbag_f2_blinker.png']
                        },
                        {
                            type: 'image',
                            id: 'pics_f',
                            tag: 'img',
                            rect: ['0px', '0px', '2560', '1440', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pics_f.png']
                        },
                        {
                            transform: [[], ['-15'], [0, 0, 0], [1, 1, 1]],
                            tag: 'img',
                            type: 'image',
                            id: 'airbag_r1',
                            opacity: '0',
                            rect: ['115', '661px', '112px', '350px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/airbag_r1.png']
                        },
                        {
                            rect: ['117', '662', '603', '665', 'auto', 'auto'],
                            tag: 'img',
                            id: 'airbag_r1_blinker',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/airbag_r1_blinker.png']
                        },
                        {
                            type: 'image',
                            id: 'airbag_f1',
                            tag: 'img',
                            rect: ['1188', '560', '607px', '668', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/airbag_f1.png']
                        },
                        {
                            rect: ['1190', '562', '604', '664', 'auto', 'auto'],
                            tag: 'img',
                            id: 'airbag_f1_blinker',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/airbag_f1_blinker.png']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2560px', '1440px']
                        }
                    }
                },
                timeline: {
                    duration: 1875,
                    autoPlay: false,
                    data: [
                        [
                            "eid178",
                            "width",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r1}",
                            '112px',
                            '607px'
                        ],
                        [
                            "eid191",
                            "width",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f1}",
                            '112px',
                            '607px'
                        ],
                        [
                            "eid189",
                            "opacity",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid188",
                            "height",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f1}",
                            '350px',
                            '667px'
                        ],
                        [
                            "eid186",
                            "opacity",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid211",
                            "opacity",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "rotateZ",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r1}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid306",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${airbag_f1_blinker}",
                            '0',
                            '0'
                        ],
                        [
                            "eid219",
                            "opacity",
                            791,
                            167,
                            "easeInQuad",
                            "${airbag_f1_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid226",
                            "opacity",
                            958,
                            167,
                            "easeInQuad",
                            "${airbag_f1_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid230",
                            "opacity",
                            1166,
                            167,
                            "easeInQuad",
                            "${airbag_f1_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid231",
                            "opacity",
                            1333,
                            167,
                            "easeInQuad",
                            "${airbag_f1_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid238",
                            "opacity",
                            1541,
                            167,
                            "easeInQuad",
                            "${airbag_f1_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid239",
                            "opacity",
                            1708,
                            167,
                            "easeInQuad",
                            "${airbag_f1_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid201",
                            "left",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f2}",
                            '1278px',
                            '1254px'
                        ],
                        [
                            "eid309",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${airbag_r2_blinker}",
                            '0',
                            '0'
                        ],
                        [
                            "eid215",
                            "opacity",
                            791,
                            167,
                            "easeInQuad",
                            "${airbag_r2_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid229",
                            "opacity",
                            958,
                            167,
                            "easeInQuad",
                            "${airbag_r2_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid236",
                            "opacity",
                            1166,
                            167,
                            "easeInQuad",
                            "${airbag_r2_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid237",
                            "opacity",
                            1333,
                            167,
                            "easeInQuad",
                            "${airbag_r2_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid244",
                            "opacity",
                            1541,
                            167,
                            "easeInQuad",
                            "${airbag_r2_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid245",
                            "opacity",
                            1708,
                            167,
                            "easeInQuad",
                            "${airbag_r2_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid308",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${airbag_f2_blinker}",
                            '0',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            791,
                            167,
                            "easeInQuad",
                            "${airbag_f2_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid228",
                            "opacity",
                            958,
                            167,
                            "easeInQuad",
                            "${airbag_f2_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid234",
                            "opacity",
                            1166,
                            167,
                            "easeInQuad",
                            "${airbag_f2_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid235",
                            "opacity",
                            1333,
                            167,
                            "easeInQuad",
                            "${airbag_f2_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid242",
                            "opacity",
                            1541,
                            167,
                            "easeInQuad",
                            "${airbag_f2_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid243",
                            "opacity",
                            1708,
                            167,
                            "easeInQuad",
                            "${airbag_f2_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid203",
                            "width",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r2}",
                            '92px',
                            '432px'
                        ],
                        [
                            "eid195",
                            "width",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f2}",
                            '121px',
                            '432px'
                        ],
                        [
                            "eid190",
                            "rotateZ",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f1}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            133,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            200,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'block',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            333,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            400,
                            0,
                            "easeOutQuad",
                            "${classBlack}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "height",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r1}",
                            '350px',
                            '667px'
                        ],
                        [
                            "eid205",
                            "height",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r2}",
                            '252px',
                            '461px'
                        ],
                        [
                            "eid207",
                            "top",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r2}",
                            '563px',
                            '365px'
                        ],
                        [
                            "eid192",
                            "rotateZ",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r2}",
                            '-27deg',
                            '0deg'
                        ],
                        [
                            "eid175",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid410",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid411",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid412",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid413",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid414",
                            "transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid197",
                            "height",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f2}",
                            '280px',
                            '461px'
                        ],
                        [
                            "eid176",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid415",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid416",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid417",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid418",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid419",
                            "transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r2}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid173",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid420",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid421",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid422",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid423",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid424",
                            "transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_f1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid193",
                            "rotateZ",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f2}",
                            '-25deg',
                            '0deg'
                        ],
                        [
                            "eid174",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid425",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid426",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid427",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid428",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid429",
                            "transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${airbag_r1}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid199",
                            "top",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f2}",
                            '522px',
                            '344px'
                        ],
                        [
                            "eid209",
                            "left",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_r2}",
                            '501px',
                            '453px'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'block',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            67,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            200,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            267,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            400,
                            0,
                            "easeOutQuad",
                            "${classBlue}",
                            'none',
                            'block'
                        ],
                        [
                            "eid213",
                            "opacity",
                            417,
                            333,
                            "easeInQuad",
                            "${airbag_f2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid307",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${airbag_r1_blinker}",
                            '0',
                            '0'
                        ],
                        [
                            "eid221",
                            "opacity",
                            791,
                            167,
                            "easeInQuad",
                            "${airbag_r1_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid227",
                            "opacity",
                            958,
                            167,
                            "easeInQuad",
                            "${airbag_r1_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid232",
                            "opacity",
                            1166,
                            167,
                            "easeInQuad",
                            "${airbag_r1_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid233",
                            "opacity",
                            1333,
                            167,
                            "easeInQuad",
                            "${airbag_r1_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid240",
                            "opacity",
                            1541,
                            167,
                            "easeInQuad",
                            "${airbag_r1_blinker}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid241",
                            "opacity",
                            1708,
                            167,
                            "easeInQuad",
                            "${airbag_r1_blinker}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            67,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            133,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            200,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            267,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            333,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            400,
                            0,
                            "easeOutQuad",
                            "${classRed}",
                            'none',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("airbag5_edgeActions.js");
})("EDGE-29908615");
