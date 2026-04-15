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
                id: 'mov01',
                type: 'rect',
                rect: ['215', '129','auto','auto','auto', 'auto']
            },
            {
                id: 'mov01_1',
                type: 'rect',
                rect: ['729', '345','auto','auto','auto', 'auto']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['206px', '62px','auto','auto','auto', 'auto'],
                text: "정상인젝터",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['650px', '57px','auto','auto','auto', 'auto'],
                text: "오염인젝터",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['1035px', '255px','468px','160px','auto', 'auto'],
                text: "엔진부조 현상<br>가속불량 현상<br>매연 발생<br>",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['1034px', '188px','652px','57px','auto', 'auto'],
                text: "인젝터 오염으로 인한 증상",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['1035px', '540px','468px','160px','auto', 'auto'],
                text: "시동불능 현상 발생<br>가속불량 현상 발생<br>시동꺼짐 현상 발생",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['1034px', '473px','652px','57px','auto', 'auto'],
                text: "인젝터 막힘으로 인한 증상<br>",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TRUBLE_MOVE',
                type: 'rect',
                rect: ['343', '844px','auto','auto','auto', 'auto']
            },
            {
                id: 'TRUBLE_MOVECopy4',
                type: 'rect',
                rect: ['757px', '824px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.7','0.7']]
            }],
            symbolInstances: [
            {
                id: 'mov01_1',
                symbolName: 'mov01_1',
                autoPlay: {

                }
            },
            {
                id: 'TRUBLE_MOVECopy4',
                symbolName: 'TRUBLE_MOVE'
            },
            {
                id: 'mov01',
                symbolName: 'mov01',
                autoPlay: {

                }
            },
            {
                id: 'TRUBLE_MOVE',
                symbolName: 'TRUBLE_MOVE'
            }
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["style", "top", '473px'],
                ["style", "width", '652px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1034px'],
                ["style", "font-size", '40px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '255px'],
                ["style", "width", '468px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1035px'],
                ["style", "font-size", '35px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '540px'],
                ["style", "font-size", '35px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1035px'],
                ["style", "width", '468px']
            ],
            "${_TRUBLE_MOVECopy4}": [
                ["style", "top", '824px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '757px']
            ],
            "${_stage}": [
                ["style", "height", '1077px'],
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "width", '1806px']
            ],
            "${_Text}": [
                ["style", "top", '62px'],
                ["style", "left", '206px'],
                ["style", "font-size", '45px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '188px'],
                ["style", "font-size", '40px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1034px'],
                ["style", "width", '652px']
            ],
            "${_mov01_1}": [
                ["style", "top", '128px'],
                ["style", "left", '653px']
            ],
            "${_TRUBLE_MOVE}": [
                ["style", "top", '844px'],
                ["style", "left", '315px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_TextCopy}": [
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "top", '57px'],
                ["style", "left", '650px'],
                ["style", "font-size", '45px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2233,
            autoPlay: true,
            timeline: [
                { id: "eid112", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE}', [] ], ""], position: 0 },
                { id: "eid113", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVECopy4}', [] ], ""], position: 0 }            ]
        }
    }
},
"mov01": {
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
                    id: 'Layer-3',
                    tag: 'img',
                    rect: ['0px', '0px', '217', '690', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Layer-3.png']
                },
                {
                    type: 'image',
                    id: 'fin',
                    tag: 'img',
                    rect: ['76px', '263px', '65', '375', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fin.png']
                },
                {
                    type: 'image',
                    id: 'spring_05',
                    tag: 'img',
                    rect: ['69px', '436px', '78', '40', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_05.png']
                },
                {
                    type: 'image',
                    id: 'spring_04',
                    tag: 'img',
                    rect: ['69px', '425px', '78', '39', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_04.png']
                },
                {
                    type: 'image',
                    id: 'spring_03',
                    tag: 'img',
                    rect: ['69px', '414px', '78', '39', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_03.png']
                },
                {
                    type: 'image',
                    id: 'spring_02',
                    tag: 'img',
                    rect: ['69px', '402px', '78', '39', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_02.png']
                },
                {
                    type: 'image',
                    id: 'spring_01',
                    tag: 'img',
                    rect: ['69px', '392px', '78', '37', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spring_01.png']
                },
                {
                    type: 'image',
                    id: 'layers_02',
                    tag: 'img',
                    rect: ['48px', '564px', '124', '126', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/layers_02.png']
                },
                {
                    rect: ['55px', '185px', '108', '416', 'auto', 'auto'],
                    tag: 'img',
                    id: 'layers',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/layers.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fin}": [
                ["style", "top", '263px'],
                ["style", "left", '76px']
            ],
            "${_spring_03}": [
                ["style", "top", '414px'],
                ["style", "left", '69px']
            ],
            "${_spring_02}": [
                ["style", "top", '402px'],
                ["style", "left", '69px']
            ],
            "${_spring_01}": [
                ["style", "top", '392px'],
                ["style", "left", '69px']
            ],
            "${_spring_05}": [
                ["style", "top", '436px'],
                ["style", "opacity", '1'],
                ["style", "left", '69px']
            ],
            "${_layers_02}": [
                ["style", "top", '564px'],
                ["style", "opacity", '1'],
                ["style", "left", '48px']
            ],
            "${symbolSelector}": [
                ["style", "height", '690px'],
                ["style", "width", '217px']
            ],
            "${_spring_04}": [
                ["style", "top", '425px'],
                ["style", "left", '69px']
            ],
            "${_Layer-3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.95121908130081'],
                ["style", "left", '0px']
            ],
            "${_layers}": [
                ["style", "top", '185px'],
                ["style", "opacity", '0.80487804878049'],
                ["style", "left", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2233,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_spring_01}", "top", '338px', { fromValue: '392px'}], position: 0, duration: 1000 },
                { id: "eid4", tween: [ "style", "${_spring_01}", "top", '392px', { fromValue: '338px'}], position: 1000, duration: 1000 },
                { id: "eid6", tween: [ "style", "${_spring_03}", "top", '387px', { fromValue: '414px'}], position: 0, duration: 1000 },
                { id: "eid13", tween: [ "style", "${_spring_03}", "top", '414px', { fromValue: '387px'}], position: 1000, duration: 1000 },
                { id: "eid50", tween: [ "style", "${_Layer-3}", "opacity", '1', { fromValue: '0.95121908130081'}], position: 0, duration: 100 },
                { id: "eid55", tween: [ "style", "${_spring_05}", "top", '435px', { fromValue: '436px'}], position: 0, duration: 1000 },
                { id: "eid56", tween: [ "style", "${_spring_05}", "top", '436px', { fromValue: '435px'}], position: 1000, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_fin}", "top", '214px', { fromValue: '263px'}], position: 0, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_fin}", "top", '263px', { fromValue: '214px'}], position: 1000, duration: 1000 },
                { id: "eid5", tween: [ "style", "${_spring_02}", "top", '362px', { fromValue: '402px'}], position: 0, duration: 1000 },
                { id: "eid14", tween: [ "style", "${_spring_02}", "top", '402px', { fromValue: '362px'}], position: 1000, duration: 1000 },
                { id: "eid47", tween: [ "style", "${_layers_02}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_spring_04}", "top", '412px', { fromValue: '425px'}], position: 0, duration: 1000 },
                { id: "eid12", tween: [ "style", "${_spring_04}", "top", '425px', { fromValue: '412px'}], position: 1000, duration: 1000 },
                { id: "eid36", tween: [ "style", "${_layers}", "opacity", '1', { fromValue: '0.80487804878049'}], position: 0, duration: 100 }            ]
        }
    }
},
"mov01_1": {
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
                    id: 'Layer_04',
                    type: 'image',
                    rect: ['1px', '0', '217px', '690px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Layer_04.png', '0px', '0px']
                },
                {
                    rect: ['76px', '263px', '65', '375', 'auto', 'auto'],
                    id: 'fin',
                    fill: ['rgba(0,0,0,0)', 'images/fin_01.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['69px', '436px', '78', '40', 'auto', 'auto'],
                    id: 'spring_05',
                    fill: ['rgba(0,0,0,0)', 'images/spring_05_1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['69px', '425px', '78', '39', 'auto', 'auto'],
                    id: 'spring_04',
                    fill: ['rgba(0,0,0,0)', 'images/spring_04_1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['69px', '414px', '78', '39', 'auto', 'auto'],
                    id: 'spring_03',
                    fill: ['rgba(0,0,0,0)', 'images/spring_031.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['69px', '402px', '78', '39', 'auto', 'auto'],
                    id: 'spring_02',
                    fill: ['rgba(0,0,0,0)', 'images/spring_02_1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['69px', '392px', '78', '37', 'auto', 'auto'],
                    id: 'spring_01',
                    fill: ['rgba(0,0,0,0)', 'images/spring_01_1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['48px', '564px', '124', '126', 'auto', 'auto'],
                    id: 'layers_02',
                    fill: ['rgba(0,0,0,0)', 'images/layers_02_01.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'layers_01',
                    type: 'image',
                    rect: ['55px', '184px', '108px', '416px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/layers_01.png', '0px', '0px']
                },
                {
                    id: 'House01',
                    type: 'rect',
                    rect: ['86', '233', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House01Copy2',
                    type: 'rect',
                    rect: ['86', '233', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House02',
                    type: 'rect',
                    rect: ['141', '270', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House05',
                    type: 'rect',
                    rect: ['76', '375', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House05_1',
                    type: 'rect',
                    rect: ['76', '402', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'House05',
                symbolName: 'House05',
                autoPlay: {

               }
            },
            {
                id: 'House01Copy2',
                symbolName: 'House01',
                autoPlay: {

               }
            },
            {
                id: 'House01',
                symbolName: 'House01',
                autoPlay: {

               }
            },
            {
                id: 'House02',
                symbolName: 'House02',
                autoPlay: {

               }
            },
            {
                id: 'House05_1',
                symbolName: 'House05_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_fin}": [
                ["style", "top", '263px'],
                ["style", "left", '76px']
            ],
            "${_spring_03}": [
                ["style", "top", '414px'],
                ["style", "left", '69px']
            ],
            "${_layers_01}": [
                ["style", "left", '55px'],
                ["style", "top", '184px']
            ],
            "${_spring_04}": [
                ["style", "top", '425px'],
                ["style", "left", '69px']
            ],
            "${_spring_02}": [
                ["style", "top", '402px'],
                ["style", "left", '69px']
            ],
            "${_House01}": [
                ["style", "left", '69px'],
                ["style", "top", '223px']
            ],
            "${_House05}": [
                ["style", "left", '107px'],
                ["style", "top", '200px']
            ],
            "${_House02}": [
                ["style", "left", '133px'],
                ["style", "top", '288px']
            ],
            "${symbolSelector}": [
                ["style", "height", '690px'],
                ["style", "width", '217px']
            ],
            "${_Layer_04}": [
                ["style", "left", '1px']
            ],
            "${_layers_02}": [
                ["style", "top", '564px'],
                ["style", "opacity", '1'],
                ["style", "left", '48px']
            ],
            "${_House01Copy2}": [
                ["style", "left", '133px'],
                ["style", "top", '528px']
            ],
            "${_House05_1}": [
                ["style", "top", '564px'],
                ["style", "left", '94px']
            ],
            "${_spring_05}": [
                ["style", "top", '436px'],
                ["style", "opacity", '1'],
                ["style", "left", '69px']
            ],
            "${_spring_01}": [
                ["style", "top", '392px'],
                ["style", "left", '69px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2233,
            autoPlay: true,
            timeline: [
                { id: "eid68", tween: [ "style", "${_House05}", "top", '200px', { fromValue: '200px'}], position: 2233, duration: 0 },
                { id: "eid6", tween: [ "style", "${_spring_03}", "top", '387px', { fromValue: '414px'}], position: 0, duration: 1000 },
                { id: "eid13", tween: [ "style", "${_spring_03}", "top", '414px', { fromValue: '387px'}], position: 1000, duration: 1000 },
                { id: "eid5", tween: [ "style", "${_spring_02}", "top", '362px', { fromValue: '402px'}], position: 0, duration: 1000 },
                { id: "eid14", tween: [ "style", "${_spring_02}", "top", '402px', { fromValue: '362px'}], position: 1000, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_fin}", "top", '214px', { fromValue: '263px'}], position: 0, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_fin}", "top", '263px', { fromValue: '214px'}], position: 1000, duration: 1000 },
                { id: "eid55", tween: [ "style", "${_spring_05}", "top", '435px', { fromValue: '436px'}], position: 0, duration: 1000 },
                { id: "eid56", tween: [ "style", "${_spring_05}", "top", '436px', { fromValue: '435px'}], position: 1000, duration: 1000 },
                { id: "eid3", tween: [ "style", "${_spring_01}", "top", '338px', { fromValue: '392px'}], position: 0, duration: 1000 },
                { id: "eid4", tween: [ "style", "${_spring_01}", "top", '392px', { fromValue: '338px'}], position: 1000, duration: 1000 },
                { id: "eid70", tween: [ "style", "${_House05_1}", "left", '94px', { fromValue: '94px'}], position: 2233, duration: 0 },
                { id: "eid67", tween: [ "style", "${_House05}", "left", '107px', { fromValue: '107px'}], position: 2233, duration: 0 },
                { id: "eid11", tween: [ "style", "${_spring_04}", "top", '412px', { fromValue: '425px'}], position: 0, duration: 1000 },
                { id: "eid12", tween: [ "style", "${_spring_04}", "top", '425px', { fromValue: '412px'}], position: 1000, duration: 1000 },
                { id: "eid69", tween: [ "style", "${_House05_1}", "top", '564px', { fromValue: '564px'}], position: 2233, duration: 0 }            ]
        }
    }
},
"spark_all01": {
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
                    id: 'spark03',
                    type: 'image',
                    rect: ['47px', '0px', '83px', '75px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark03.png', '0px', '0px']
                },
                {
                    id: 'spark02',
                    type: 'image',
                    rect: ['22px', '16px', '130px', '118px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark02.png', '0px', '0px']
                },
                {
                    id: 'spark01',
                    type: 'image',
                    rect: ['0px', '23px', '178px', '162px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spark03}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '47px']
            ],
            "${_spark01}": [
                ["style", "top", '23px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '185px'],
                ["style", "width", '178px']
            ],
            "${_spark02}": [
                ["style", "top", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2233,
            autoPlay: true,
            timeline: [
                { id: "eid27", tween: [ "style", "${_spark02}", "opacity", '1', { fromValue: '0'}], position: 1881, duration: 67 },
                { id: "eid28", tween: [ "style", "${_spark02}", "opacity", '0', { fromValue: '1'}], position: 1948, duration: 99 },
                { id: "eid23", tween: [ "style", "${_spark03}", "opacity", '1', { fromValue: '0.000000'}], position: 1833, duration: 67 },
                { id: "eid24", tween: [ "style", "${_spark03}", "opacity", '0', { fromValue: '1'}], position: 1900, duration: 100 }            ]
        }
    }
},
"spark_all02": {
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
                    id: 'spark03',
                    type: 'image',
                    rect: ['47px', '0px', '83px', '75px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark03.png', '0px', '0px']
                },
                {
                    id: 'spark01',
                    type: 'image',
                    rect: ['0px', '23px', '178px', '162px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spark03}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '47px']
            ],
            "${_spark01}": [
                ["style", "top", '23px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '185px'],
                ["style", "width", '178px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2233,
            autoPlay: true,
            timeline: [
                { id: "eid23", tween: [ "style", "${_spark03}", "opacity", '1', { fromValue: '0.000000'}], position: 1913, duration: 120 },
                { id: "eid24", tween: [ "style", "${_spark03}", "opacity", '0', { fromValue: '1'}], position: 2033, duration: 133 }            ]
        }
    }
},
"House01": {
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
                    id: 'house01',
                    type: 'image',
                    rect: ['0px', '-2px', '15px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house01}": [
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '15px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid180", tween: [ "style", "${_house01}", "top", '-2px', { fromValue: '0px'}], position: 498, duration: 502, easing: "easeOutQuad" },
                { id: "eid173", tween: [ "style", "${_house01}", "height", '22px', { fromValue: '16px'}], position: 0, duration: 498, easing: "easeOutQuad" },
                { id: "eid181", tween: [ "style", "${_house01}", "height", '18px', { fromValue: '22px'}], position: 498, duration: 502, easing: "easeOutQuad" }            ]
        }
    }
},
"House02": {
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
                    id: 'house02',
                    type: 'image',
                    rect: ['0px', '0px', '27px', '31px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house02.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '27px']
            ],
            "${_house02}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid182", tween: [ "style", "${_house02}", "top", '10px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid188", tween: [ "style", "${_house02}", "top", '0px', { fromValue: '10px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "transform", "${_house02}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid187", tween: [ "transform", "${_house02}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 500, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"House05": {
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
                    id: 'house05',
                    type: 'image',
                    rect: ['-1px', '3px', '28px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house05.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house05}": [
                ["style", "height", '16px'],
                ["style", "top", '3px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '15deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '31px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid225", tween: [ "transform", "${_house05}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid226", tween: [ "transform", "${_house05}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid210", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid206", tween: [ "style", "${_house05}", "top", '18px', { fromValue: '3px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid207", tween: [ "style", "${_house05}", "top", '3px', { fromValue: '18px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid215", tween: [ "style", "${_house05}", "left", '-1px', { fromValue: '1px'}], position: 500, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"House05_1": {
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
                    id: 'house05',
                    type: 'image',
                    rect: ['-1px', '3px', '28px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house052.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house05}": [
                ["style", "height", '16px'],
                ["style", "top", '3px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '15deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '31px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid225", tween: [ "transform", "${_house05}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid226", tween: [ "transform", "${_house05}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid210", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid206", tween: [ "style", "${_house05}", "top", '18px', { fromValue: '3px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid207", tween: [ "style", "${_house05}", "top", '3px', { fromValue: '18px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid215", tween: [ "style", "${_house05}", "left", '-1px', { fromValue: '1px'}], position: 500, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"TRUBLE_MOVE": {
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
                    id: 'TRUBLE_MOVE_SRC',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_L1',
                    type: 'rect',
                    rect: ['-27px', '21px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_L2',
                    type: 'rect',
                    transform: [[], ['-30'], [], ['0.5', '0.5']],
                    rect: ['-39px', '44px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R1',
                    type: 'rect',
                    transform: [[], ['16']],
                    rect: ['25px', '29px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R2',
                    type: 'rect',
                    transform: [[], ['30'], [], ['0.5', '0.5']],
                    rect: ['38px', '52px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'TRUBLE_MOVE_SRC_L2',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC_R2',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC_L1',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE_SRC_R1',
                symbolName: 'TRUBLE_MOVE_SRC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '10px']
            ],
            "${_TRUBLE_MOVE_SRC_L1}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '-16deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '-27px']
            ],
            "${_TRUBLE_MOVE_SRC_R2}": [
                ["style", "top", '52px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '30deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '38px']
            ],
            "${_TRUBLE_MOVE_SRC_L2}": [
                ["style", "top", '44px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '-30deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-39px']
            ],
            "${_TRUBLE_MOVE_SRC_R1}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '16deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '25px']
            ],
            "${_TRUBLE_MOVE_SRC}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 433,
            autoPlay: false,
            timeline: [
                { id: "eid33", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L2}', [] ], ""], position: 0 },
                { id: "eid32", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_L1}', [] ], ""], position: 0 },
                { id: "eid31", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R1}', [] ], ""], position: 0 },
                { id: "eid34", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC}', [] ], ""], position: 0.33333333334008 },
                { id: "eid35", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE_SRC_R2}', [] ], ""], position: 0.33333333334008 }            ]
        }
    }
},
"TRUBLE_MOVE_SRC": {
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
                    id: 'truble_src',
                    type: 'image',
                    rect: ['-17px', '23px', '10px', '99px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/truble_src.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '10px']
            ],
            "${_truble_src}": [
                ["style", "top", '92px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '7px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 433,
            autoPlay: false,
            timeline: [
                { id: "eid19", tween: [ "style", "${_truble_src}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid22", tween: [ "style", "${_truble_src}", "opacity", '0', { fromValue: '1'}], position: 233, duration: 200 },
                { id: "eid15", tween: [ "style", "${_truble_src}", "height", '99px', { fromValue: '7px'}], position: 0, duration: 200 },
                { id: "eid20", tween: [ "style", "${_truble_src}", "height", '16px', { fromValue: '99px'}], position: 233, duration: 200 },
                { id: "eid17", tween: [ "style", "${_truble_src}", "top", '0px', { fromValue: '92px'}], position: 0, duration: 200 },
                { id: "eid21", tween: [ "style", "${_truble_src}", "top", '-17px', { fromValue: '0px'}], position: 233, duration: 200 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1400644743837");
