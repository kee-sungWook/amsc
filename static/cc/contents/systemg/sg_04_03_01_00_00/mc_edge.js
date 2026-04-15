/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'BOTTOM',
                type: 'rect',
                rect: ['64', '150','auto','auto','auto', 'auto']
            },
            {
                id: 'MIDDLE',
                type: 'image',
                tag: 'img',
                rect: ['723', '482','174','392','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MIDDLE.png"]
            },
            {
                id: 'TOP',
                type: 'rect',
                rect: ['730', '37','auto','auto','auto', 'auto']
            },
            {
                id: 'SIDE',
                type: 'rect',
                rect: ['407', '755','auto','auto','auto', 'auto']
            },
            {
                id: 'RIGHT',
                type: 'rect',
                rect: ['825', '696','auto','auto','auto', 'auto']
            },
            {
                id: 'alls',
                type: 'image',
                tag: 'img',
                rect: ['1009', '55','612','597','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"alls.png"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1692', '420','324','86','auto', 'auto'],
                text: "파워펌프",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'Text-1',
                type: 'text',
                rect: ['1703', '550','634','320','auto', 'auto'],
                text: "엔진의 회전력을 사용하여<br>작동되는 펌프.<br><br>내부 오일의 힘을 이용하여<br>운전자가 쉽게핸들을 조작할 수<br>있도록 도와주는 장치.",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'RIGHT',
                symbolName: 'RIGHT',
                autoPlay: {

                }
            },
            {
                id: 'SIDE',
                symbolName: 'SIDE',
                autoPlay: {

                }
            },
            {
                id: 'TOP',
                symbolName: 'TOP',
                autoPlay: {

                }
            },
            {
                id: 'BOTTOM',
                symbolName: 'BOTTOM',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_SIDE}": [
                ["style", "opacity", '0']
            ],
            "${_RIGHT}": [
                ["style", "opacity", '0']
            ],
            "${_BOTTOM}": [
                ["style", "opacity", '0']
            ],
            "${_alls}": [
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.1']
            ],
            "${_Text}": [
                ["style", "opacity", '0']
            ],
            "${_MIDDLE}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TOP}": [
                ["style", "opacity", '0']
            ],
            "${_Text-1}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2133,
            autoPlay: true,
            timeline: [
                { id: "eid154", tween: [ "style", "${_BOTTOM}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "transform", "${_alls}", "scaleX", '1', { fromValue: '1.1'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid162", tween: [ "style", "${_alls}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid160", tween: [ "transform", "${_alls}", "scaleY", '1', { fromValue: '1.1'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid166", tween: [ "style", "${_Text-1}", "opacity", '1', { fromValue: '0'}], position: 1567, duration: 333, easing: "easeOutQuad" },
                { id: "eid152", tween: [ "style", "${_MIDDLE}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid148", tween: [ "style", "${_RIGHT}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid164", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 333, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_SIDE}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid150", tween: [ "style", "${_TOP}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid167", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_RIGHT}', [] ], ""], position: 766.66666666667 },
                { id: "eid168", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOTTOM}', [] ], ""], position: 800 },
                { id: "eid169", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TOP}', [] ], ""], position: 900 },
                { id: "eid170", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SIDE}', [] ], ""], position: 900 }            ]
        }
    }
},
"BOTTOM": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'B9',
                    tag: 'img',
                    rect: ['1px', '0px', '76', '56', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/B9.png']
                },
                {
                    type: 'image',
                    id: 'B8',
                    tag: 'img',
                    rect: ['0px', '49px', '199', '287', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/B8.png']
                },
                {
                    type: 'image',
                    id: 'B7',
                    tag: 'img',
                    rect: ['206px', '201px', '36', '38', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/B7.png']
                },
                {
                    type: 'image',
                    id: 'B6',
                    tag: 'img',
                    rect: ['240px', '185px', '104', '128', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/B6.png']
                },
                {
                    type: 'image',
                    id: 'B5',
                    tag: 'img',
                    rect: ['298px', '222px', '126', '144', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/B5.png']
                },
                {
                    type: 'image',
                    id: 'B4',
                    tag: 'img',
                    rect: ['410px', '290px', '117', '134', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/B4.png']
                },
                {
                    type: 'image',
                    id: 'B3',
                    tag: 'img',
                    rect: ['509px', '355px', '78', '99', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/B3.png']
                },
                {
                    type: 'image',
                    id: 'B2',
                    tag: 'img',
                    rect: ['578px', '410px', '38', '44', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/B2.png']
                },
                {
                    type: 'image',
                    id: 'B1',
                    tag: 'img',
                    rect: ['614px', '429px', '53', '56', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/B1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_B7}": [
                ["style", "left", '660px'],
                ["style", "top", '458px']
            ],
            "${_B9}": [
                ["style", "left", '570px'],
                ["style", "top", '373px']
            ],
            "${_B1}": [
                ["style", "left", '736px'],
                ["style", "top", '507px']
            ],
            "${_B5}": [
                ["style", "left", '620px'],
                ["style", "top", '413px']
            ],
            "${_B3}": [
                ["style", "left", '724px'],
                ["style", "top", '485px']
            ],
            "${symbolSelector}": [
                ["style", "height", '485px'],
                ["style", "width", '667px']
            ],
            "${_B6}": [
                ["style", "left", '631px'],
                ["style", "top", '423px']
            ],
            "${_B2}": [
                ["style", "left", '736px'],
                ["style", "top", '507px']
            ],
            "${_B8}": [
                ["style", "left", '525px'],
                ["style", "top", '333px']
            ],
            "${_B4}": [
                ["style", "left", '646px'],
                ["style", "top", '429px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: false,
            timeline: [
                { id: "eid76", tween: [ "style", "${_B4}", "top", '290px', { fromValue: '429px'}], position: 333, duration: 333, easing: "easeOutQuad" },
                { id: "eid70", tween: [ "style", "${_B3}", "left", '509px', { fromValue: '724px'}], position: 400, duration: 333, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_B9}", "left", '1px', { fromValue: '570px'}], position: 0, duration: 450, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${_B9}", "top", '0px', { fromValue: '373px'}], position: 0, duration: 450, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "style", "${_B4}", "left", '410px', { fromValue: '646px'}], position: 333, duration: 333, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_B5}", "top", '222px', { fromValue: '413px'}], position: 267, duration: 333, easing: "easeOutQuad" },
                { id: "eid78", tween: [ "style", "${_B5}", "left", '298px', { fromValue: '620px'}], position: 267, duration: 333, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "style", "${_B7}", "left", '206px', { fromValue: '660px'}], position: 150, duration: 375, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "style", "${_B7}", "top", '201px', { fromValue: '458px'}], position: 150, duration: 375, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "style", "${_B3}", "top", '355px', { fromValue: '485px'}], position: 400, duration: 333, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_B6}", "left", '240px', { fromValue: '631px'}], position: 225, duration: 375, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_B2}", "top", '410px', { fromValue: '507px'}], position: 467, duration: 333, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_B6}", "top", '185px', { fromValue: '423px'}], position: 225, duration: 375, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "style", "${_B1}", "top", '429px', { fromValue: '507px'}], position: 534, duration: 333, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_B8}", "top", '49px', { fromValue: '333px'}], position: 75, duration: 375, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "style", "${_B8}", "left", '0px', { fromValue: '525px'}], position: 75, duration: 375, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_B1}", "left", '614px', { fromValue: '736px'}], position: 534, duration: 333, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_B2}", "left", '578px', { fromValue: '736px'}], position: 467, duration: 333, easing: "easeOutQuad" }            ]
        }
    }
},
"TOP": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'T4',
                    tag: 'img',
                    rect: ['14px', '324px', '35', '93', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/T4.png']
                },
                {
                    type: 'image',
                    id: 'T3',
                    tag: 'img',
                    rect: ['13px', '184px', '37', '124', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/T3.png']
                },
                {
                    type: 'image',
                    id: 'T2',
                    tag: 'img',
                    rect: ['12px', '120px', '38', '24', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/T2.png']
                },
                {
                    type: 'image',
                    id: 'T1',
                    tag: 'img',
                    rect: ['0px', '0px', '65', '109', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/T1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '417px'],
                ["style", "width", '65px']
            ],
            "${_T2}": [
                ["style", "left", '22px'],
                ["style", "top", '574px']
            ],
            "${_T3}": [
                ["style", "left", '23px'],
                ["style", "top", '549px']
            ],
            "${_T1}": [
                ["style", "left", '9px'],
                ["style", "top", '557px']
            ],
            "${_T4}": [
                ["style", "left", '23px'],
                ["style", "top", '586px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 533,
            autoPlay: false,
            timeline: [
                { id: "eid52", tween: [ "style", "${_T3}", "top", '184px', { fromValue: '549px'}], position: 133, duration: 333, easing: "easeOutQuad" },
                { id: "eid60", tween: [ "style", "${_T1}", "left", '0px', { fromValue: '9px'}], position: 0, duration: 333, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_T3}", "left", '13px', { fromValue: '23px'}], position: 133, duration: 333, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_T4}", "left", '14px', { fromValue: '23px'}], position: 200, duration: 333, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_T1}", "top", '0px', { fromValue: '557px'}], position: 0, duration: 333, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "style", "${_T2}", "left", '12px', { fromValue: '22px'}], position: 67, duration: 333, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_T4}", "top", '324px', { fromValue: '586px'}], position: 200, duration: 333, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "style", "${_T2}", "top", '120px', { fromValue: '574px'}], position: 67, duration: 333, easing: "easeOutQuad" }            ]
        }
    }
},
"SIDE": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'S3',
                    tag: 'img',
                    rect: ['161px', '39px', '35', '40', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/S3.png']
                },
                {
                    type: 'image',
                    id: 'S2',
                    tag: 'img',
                    rect: ['67px', '0px', '119', '181', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/S2.png']
                },
                {
                    type: 'image',
                    id: 'S1',
                    tag: 'img',
                    rect: ['0px', '85px', '65', '47', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/S1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_S3}": [
                ["style", "left", '312px'],
                ["style", "top", '-74px']
            ],
            "${_S1}": [
                ["style", "left", '290px'],
                ["style", "top", '-101px']
            ],
            "${_S2}": [
                ["style", "left", '277px'],
                ["style", "top", '-138px']
            ],
            "${symbolSelector}": [
                ["style", "height", '181px'],
                ["style", "width", '196px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: false,
            timeline: [
                { id: "eid34", tween: [ "style", "${_S3}", "left", '161px', { fromValue: '312px'}], position: 267, duration: 333, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_S2}", "top", '0px', { fromValue: '-138px'}], position: 133, duration: 333, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_S2}", "left", '67px', { fromValue: '277px'}], position: 133, duration: 333, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_S3}", "top", '39px', { fromValue: '-74px'}], position: 267, duration: 333, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_S1}", "top", '85px', { fromValue: '-101px'}], position: 0, duration: 333, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_S1}", "left", '0px', { fromValue: '290px'}], position: 0, duration: 333, easing: "easeOutQuad" }            ]
        }
    }
},
"RIGHT": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'R7',
                    tag: 'img',
                    rect: ['0px', '0px', '118', '184', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/R7.png']
                },
                {
                    type: 'image',
                    id: 'R6',
                    tag: 'img',
                    rect: ['115px', '40px', '262', '167', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/R6.png']
                },
                {
                    type: 'image',
                    id: 'R5',
                    tag: 'img',
                    rect: ['368px', '171px', '82', '94', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/R5.png']
                },
                {
                    type: 'image',
                    id: 'R4',
                    tag: 'img',
                    rect: ['434px', '203px', '89', '110', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/R4.png']
                },
                {
                    type: 'image',
                    id: 'R3',
                    tag: 'img',
                    rect: ['501px', '190px', '252', '294', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/R3.png']
                },
                {
                    type: 'image',
                    id: 'R2',
                    tag: 'img',
                    rect: ['734px', '385px', '46', '57', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/R2.png']
                },
                {
                    type: 'image',
                    id: 'R1',
                    tag: 'img',
                    rect: ['800px', '428px', '65', '69', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/R1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_R1}": [
                ["style", "left", '93px'],
                ["style", "top", '8px']
            ],
            "${_R6}": [
                ["style", "height", '118px'],
                ["style", "top", '-30px'],
                ["style", "left", '-5px'],
                ["style", "width", '185px']
            ],
            "${_R2}": [
                ["style", "left", '98px'],
                ["style", "top", '13px']
            ],
            "${_R3}": [
                ["style", "left", '-28px'],
                ["style", "top", '-124px']
            ],
            "${_R7}": [
                ["style", "left", '-38px'],
                ["style", "top", '-25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '497px'],
                ["style", "width", '865px']
            ],
            "${_R4}": [
                ["style", "left", '35px'],
                ["style", "top", '-42px']
            ],
            "${_R5}": [
                ["style", "left", '31px'],
                ["style", "top", '-42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 900,
            autoPlay: false,
            timeline: [
                { id: "eid14", tween: [ "style", "${_R4}", "left", '434px', { fromValue: '35px'}], position: 200, duration: 500, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_R5}", "top", '171px', { fromValue: '-42px'}], position: 267, duration: 500, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_R1}", "top", '428px', { fromValue: '8px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_R7}", "top", '0px', { fromValue: '-25px'}], position: 400, duration: 500, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_R6}", "left", '115px', { fromValue: '-5px'}], position: 333, duration: 500, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_R4}", "top", '203px', { fromValue: '-42px'}], position: 200, duration: 500, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_R6}", "height", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_R7}", "left", '0px', { fromValue: '-38px'}], position: 400, duration: 500, easing: "easeOutQuad" },
                { id: "eid8", tween: [ "style", "${_R6}", "top", '40px', { fromValue: '-30px'}], position: 333, duration: 500, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_R3}", "left", '501px', { fromValue: '-28px'}], position: 133, duration: 500, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_R6}", "width", '185px', { fromValue: '185px'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_R5}", "left", '368px', { fromValue: '31px'}], position: 267, duration: 500, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_R2}", "top", '385px', { fromValue: '13px'}], position: 67, duration: 500, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${_R2}", "left", '734px', { fromValue: '98px'}], position: 67, duration: 500, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_R3}", "top", '190px', { fromValue: '-124px'}], position: 133, duration: 500, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_R1}", "left", '800px', { fromValue: '93px'}], position: 0, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-42433790");
