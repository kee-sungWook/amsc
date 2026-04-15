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
                id: 'movall_01',
                type: 'rect',
                rect: ['194', '150','auto','auto','auto', 'auto']
            },
            {
                id: 'movall_02',
                type: 'rect',
                rect: ['953', '352','auto','auto','auto', 'auto']
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['1104px', '454px','468px','160px','auto', 'auto'],
                text: "엔진부조 현상<br>가속불량 현상<br>매연 발생<br>",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['1103px', '387px','652px','57px','auto', 'auto'],
                text: "인젝터 오염으로 인한 증상",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['1104px', '739px','468px','160px','auto', 'auto'],
                text: "시동불능 현상 발생<br>가속불량 현상 발생<br>시동꺼짐 현상 발생",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1103px', '672px','652px','57px','auto', 'auto'],
                text: "인젝터 막힘으로 인한 증상<br>",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['169px', '65px','269px','57px','auto', 'auto'],
                text: "정상 인젝터",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['700px', '65px','269px','57px','auto', 'auto'],
                text: "오염 인젝터",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,0,0,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [
            {
                id: 'movall_01',
                symbolName: 'movall_01',
                autoPlay: {

                }
            },
            {
                id: 'movall_02',
                symbolName: 'movall_02',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["style", "top", '65px'],
                ["style", "font-size", '45px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '700px'],
                ["style", "width", '269px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '454px'],
                ["style", "width", '468px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1104px'],
                ["style", "font-size", '35px']
            ],
            "${_Text}": [
                ["style", "top", '672px'],
                ["style", "width", '652px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1103px'],
                ["style", "font-size", '40px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '387px'],
                ["style", "font-size", '40px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1103px'],
                ["style", "width", '652px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy5}": [
                ["style", "top", '65px'],
                ["style", "width", '269px'],
                ["style", "height", '57px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '169px'],
                ["style", "font-size", '45px']
            ],
            "${_TextCopy}": [
                ["style", "top", '739px'],
                ["style", "font-size", '35px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '1104px'],
                ["style", "width", '468px']
            ],
            "${_movall_02}": [
                ["style", "left", '708px'],
                ["style", "top", '150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2305,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "style", "${_movall_02}", "top", '150px', { fromValue: '150px'}], position: 2000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_movall_02}", "left", '708px', { fromValue: '708px'}], position: 2000, duration: 0 }            ]
        }
    }
},
"an01": {
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
                    rect: ['4px', '0px', '42', '438', 'auto', 'auto'],
                    id: 't00',
                    fill: ['rgba(0,0,0,0)', 'images/t00.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '212px', '50', '25', 'auto', 'auto'],
                    id: 'spring_05',
                    fill: ['rgba(0,0,0,0)', 'images/spring_05.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '205px', '50', '25', 'auto', 'auto'],
                    id: 'spring_04',
                    fill: ['rgba(0,0,0,0)', 'images/spring_04.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '198px', '50', '25', 'auto', 'auto'],
                    id: 'spring_03',
                    fill: ['rgba(0,0,0,0)', 'images/spring_03.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '191px', '50', '25', 'auto', 'auto'],
                    id: 'spring_02',
                    fill: ['rgba(0,0,0,0)', 'images/spring_02.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '184px', '50', '24', 'auto', 'auto'],
                    id: 'spring_01',
                    fill: ['rgba(0,0,0,0)', 'images/spring_01.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spring_03}": [
                ["style", "top", '198px'],
                ["style", "left", '0px']
            ],
            "${_spring_04}": [
                ["style", "top", '205px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '438px'],
                ["style", "width", '50px']
            ],
            "${_t00}": [
                ["style", "top", '0px'],
                ["style", "left", '4px']
            ],
            "${_spring_02}": [
                ["style", "top", '191px'],
                ["style", "left", '0px']
            ],
            "${_spring_05}": [
                ["style", "left", '0px'],
                ["style", "top", '212px']
            ],
            "${_spring_01}": [
                ["style", "top", '184px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_spring_01}", "top", '139px', { fromValue: '184px'}], position: 0, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_spring_01}", "top", '184px', { fromValue: '139px'}], position: 1000, duration: 1000 },
                { id: "eid5", tween: [ "style", "${_spring_03}", "top", '177px', { fromValue: '198px'}], position: 0, duration: 1000 },
                { id: "eid8", tween: [ "style", "${_spring_03}", "top", '198px', { fromValue: '177px'}], position: 1000, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_t00}", "top", '-39px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_t00}", "top", '0px', { fromValue: '-39px'}], position: 1000, duration: 1000 },
                { id: "eid4", tween: [ "style", "${_spring_02}", "top", '159px', { fromValue: '191px'}], position: 0, duration: 1000 },
                { id: "eid9", tween: [ "style", "${_spring_02}", "top", '191px', { fromValue: '159px'}], position: 1000, duration: 1000 },
                { id: "eid6", tween: [ "style", "${_spring_04}", "top", '194px', { fromValue: '205px'}], position: 0, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_spring_04}", "top", '205px', { fromValue: '194px'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"movall_01": {
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
                    id: 'bg',
                    tag: 'img',
                    rect: ['0px', '0px', '441', '776', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg.png']
                },
                {
                    id: 'an01',
                    type: 'rect',
                    rect: ['43px', '323px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'one',
                    type: 'image',
                    rect: ['393px', '8px', '44px', '44px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/one.png', '0px', '0px']
                },
                {
                    id: 'one_01',
                    type: 'image',
                    rect: ['35px', '296px', '66px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/one_01.png', '0px', '0px']
                },
                {
                    id: 'bg01',
                    type: 'image',
                    rect: ['16px', '655px', '104px', '121px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg01.png', '0px', '0px']
                },
                {
                    id: 'bg022',
                    type: 'image',
                    rect: ['5px', '231px', '219px', '119px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg02.png', '0px', '0px']
                },
                {
                    rect: ['34px', '312px', '69', '368', 'auto', 'auto'],
                    tag: 'img',
                    id: 'transform',
                    opacity: 0.7,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/transform.png']
                },
                {
                    id: 'TRUBLE_MOVE',
                    type: 'rect',
                    rect: ['56px', '817px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'an01',
                symbolName: 'an01',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bg022}": [
                ["style", "top", '231px'],
                ["style", "left", '5px']
            ],
            "${_one}": [
                ["motion", "location", '415px 30px']
            ],
            "${_an01}": [
                ["style", "left", '43px'],
                ["style", "top", '323px']
            ],
            "${_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_one_01}": [
                ["style", "top", '296px'],
                ["style", "opacity", '1'],
                ["style", "left", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '776px'],
                ["style", "width", '441px']
            ],
            "${_TRUBLE_MOVE}": [
                ["style", "top", '786px'],
                ["style", "left", '61px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_transform}": [
                ["style", "top", '312px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '34px']
            ],
            "${_bg01}": [
                ["style", "top", '655px'],
                ["style", "left", '16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2301,
            autoPlay: true,
            timeline: [
                { id: "eid47", tween: [ "style", "${_one_01}", "top", '651px', { fromValue: '296px'}], position: 1126, duration: 874 },
                { id: "eid76", tween: [ "transform", "${_TRUBLE_MOVE}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 2000, duration: 0 },
                { id: "eid133", tween: [ "style", "${_one_01}", "opacity", '0', { fromValue: '1'}], position: 1936, duration: 64 },
                { id: "eid46", tween: [ "motion", "${_one}", [[415, 30, 0, 0],[412.4, 162.4, -73.8, 40.03, -3.25, 164.15],[150.33, 287.33, 0, 0]]], position: 0, duration: 1204 },
                { id: "eid78", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE}', [] ], ""], position: 1867.9699916902 }            ]
        }
    }
},
"movall_02": {
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
                    id: 'bg',
                    tag: 'img',
                    rect: ['0px', '0px', '441', '776', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg_gray.png']
                },
                {
                    id: 'an01_1',
                    type: 'rect',
                    rect: ['54px', '335px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House01',
                    type: 'rect',
                    rect: ['221', '249', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House02',
                    type: 'rect',
                    rect: ['298', '209', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House06',
                    type: 'rect',
                    rect: ['85', '469', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House012',
                    type: 'rect',
                    rect: ['50', '537', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House03',
                    type: 'rect',
                    rect: ['309', '209', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House04',
                    type: 'rect',
                    rect: ['362', '181', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House054',
                    type: 'rect',
                    rect: ['78px', '388', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House042',
                    type: 'rect',
                    rect: ['73', '597', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'one_02',
                    type: 'image',
                    rect: ['394px', '3px', '44px', '44px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/one_02.png', '0px', '0px']
                },
                {
                    id: 'one_01_01',
                    type: 'image',
                    rect: ['35px', '302px', '66px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/one_01_01.png', '0px', '0px']
                },
                {
                    id: 'bg01',
                    type: 'image',
                    rect: ['16px', '655px', '104px', '121px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg01.png', '0px', '0px']
                },
                {
                    id: 'bg02',
                    type: 'image',
                    rect: ['5px', '231px', '219px', '119px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg02.png', '0px', '0px']
                },
                {
                    rect: ['34px', '312px', '69', '368', 'auto', 'auto'],
                    tag: 'img',
                    id: 'transform',
                    opacity: 0.7,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/transform01.png']
                },
                {
                    id: 'TRUBLE_MOVE2',
                    type: 'rect',
                    rect: ['69', '821', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'House042',
                symbolName: 'House04',
                autoPlay: {

               }
            },
            {
                id: 'House012',
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
                id: 'House054',
                symbolName: 'House05',
                autoPlay: {

               }
            },
            {
                id: 'House04',
                symbolName: 'House04',
                autoPlay: {

               }
            },
            {
                id: 'TRUBLE_MOVE2',
                symbolName: 'TRUBLE_MOVE',
                autoPlay: {

               }
            },
            {
                id: 'House03',
                symbolName: 'House03',
                autoPlay: {

               }
            },
            {
                id: 'an01_1',
                symbolName: 'an01_1',
                autoPlay: {

               }
            },
            {
                id: 'House06',
                symbolName: 'House06',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_House04}": [
                ["style", "left", '406px'],
                ["style", "top", '66px']
            ],
            "${_one_02}": [
                ["motion", "location", '416px 25px'],
                ["style", "opacity", '0.7']
            ],
            "${_one_01_01}": [
                ["style", "top", '287px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '35px']
            ],
            "${_TRUBLE_MOVE2}": [
                ["style", "top", '772px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '64px']
            ],
            "${_an01_1}": [
                ["style", "left", '43px'],
                ["style", "top", '312px']
            ],
            "${_House06}": [
                ["style", "left", '73px'],
                ["style", "top", '434px']
            ],
            "${_House054}": [
                ["style", "left", '43px'],
                ["style", "top", '371px']
            ],
            "${_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_bg01}": [
                ["style", "top", '655px'],
                ["style", "left", '16px']
            ],
            "${_House03}": [
                ["style", "left", '268px'],
                ["style", "top", '222px']
            ],
            "${symbolSelector}": [
                ["style", "height", '776px'],
                ["style", "width", '441px']
            ],
            "${_House01}": [
                ["style", "left", '196px'],
                ["style", "top", '250px']
            ],
            "${_House02}": [
                ["style", "left", '344px'],
                ["style", "top", '176px']
            ],
            "${_transform}": [
                ["style", "top", '312px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '34px']
            ],
            "${_bg02}": [
                ["style", "left", '5px'],
                ["style", "top", '231px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2305,
            autoPlay: true,
            timeline: [
                { id: "eid122", tween: [ "style", "${_one_01_01}", "top", '649px', { fromValue: '287px'}], position: 1126, duration: 874 },
                { id: "eid127", tween: [ "transform", "${_TRUBLE_MOVE2}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 2254, duration: 0 },
                { id: "eid96", tween: [ "style", "${_House01}", "top", '250px', { fromValue: '250px'}], position: 2254, duration: 0 },
                { id: "eid124", tween: [ "style", "${_one_01_01}", "opacity", '0.7', { fromValue: '0.7'}], position: 1126, duration: 0 },
                { id: "eid134", tween: [ "style", "${_one_01_01}", "opacity", '0.00081299620915232', { fromValue: '0.699999988079071'}], position: 1949, duration: 51 },
                { id: "eid95", tween: [ "style", "${_House01}", "left", '196px', { fromValue: '196px'}], position: 2254, duration: 0 },
                { id: "eid107", tween: [ "style", "${_House04}", "top", '66px', { fromValue: '66px'}], position: 2254, duration: 0 },
                { id: "eid116", tween: [ "style", "${_House06}", "top", '434px', { fromValue: '434px'}], position: 2254, duration: 0 },
                { id: "eid129", tween: [ "transform", "${_TRUBLE_MOVE2}", "scaleY", '0.6', { fromValue: '0.6'}], position: 2254, duration: 0 },
                { id: "eid114", tween: [ "style", "${_House054}", "top", '371px', { fromValue: '371px'}], position: 2254, duration: 0 },
                { id: "eid29", tween: [ "style", "${_an01_1}", "left", '43px', { fromValue: '43px'}], position: 2000, duration: 0 },
                { id: "eid125", tween: [ "style", "${_TRUBLE_MOVE2}", "left", '64px', { fromValue: '64px'}], position: 2254, duration: 0 },
                { id: "eid131", tween: [ "style", "${_TRUBLE_MOVE2}", "top", '772px', { fromValue: '772px'}], position: 2254, duration: 0 },
                { id: "eid100", tween: [ "style", "${_House03}", "top", '222px', { fromValue: '222px'}], position: 2254, duration: 0 },
                { id: "eid115", tween: [ "style", "${_House06}", "left", '73px', { fromValue: '73px'}], position: 2254, duration: 0 },
                { id: "eid108", tween: [ "style", "${_House04}", "left", '406px', { fromValue: '406px'}], position: 2254, duration: 0 },
                { id: "eid123", tween: [ "style", "${_one_02}", "opacity", '0.7', { fromValue: '0.7'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "style", "${_House02}", "left", '344px', { fromValue: '344px'}], position: 2254, duration: 0 },
                { id: "eid99", tween: [ "style", "${_House03}", "left", '268px', { fromValue: '268px'}], position: 2254, duration: 0 },
                { id: "eid28", tween: [ "style", "${_an01_1}", "top", '312px', { fromValue: '312px'}], position: 2000, duration: 0 },
                { id: "eid128", tween: [ "transform", "${_TRUBLE_MOVE2}", "scaleX", '0.6', { fromValue: '0.6'}], position: 2254, duration: 0 },
                { id: "eid113", tween: [ "style", "${_House054}", "left", '43px', { fromValue: '43px'}], position: 2254, duration: 0 },
                { id: "eid121", tween: [ "motion", "${_one_02}", [[416, 25, 0, 0],[416, 160.95, -76, 38.19, 0, 163.08],[160, 288, 0, 0]]], position: 0, duration: 1204 },
                { id: "eid106", tween: [ "style", "${_House02}", "top", '176px', { fromValue: '176px'}], position: 2254, duration: 0 },
                { id: "eid132", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TRUBLE_MOVE2}', [] ], ""], position: 1871.6145096939 }            ]
        }
    }
},
"an01_1": {
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
                    rect: ['4px', '0px', '42', '438', 'auto', 'auto'],
                    id: 't00',
                    fill: ['rgba(0,0,0,0)', 'images/t01.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '212px', '50', '25', 'auto', 'auto'],
                    id: 'spring_05',
                    fill: ['rgba(0,0,0,0)', 'images/spring_05.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '205px', '50', '25', 'auto', 'auto'],
                    id: 'spring_04',
                    fill: ['rgba(0,0,0,0)', 'images/spring_04.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '198px', '50', '25', 'auto', 'auto'],
                    id: 'spring_03',
                    fill: ['rgba(0,0,0,0)', 'images/spring_03.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '191px', '50', '25', 'auto', 'auto'],
                    id: 'spring_02',
                    fill: ['rgba(0,0,0,0)', 'images/spring_02.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '184px', '50', '24', 'auto', 'auto'],
                    id: 'spring_01',
                    fill: ['rgba(0,0,0,0)', 'images/spring_01.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spring_03}": [
                ["style", "top", '198px'],
                ["style", "left", '0px']
            ],
            "${_spring_04}": [
                ["style", "top", '205px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '438px'],
                ["style", "width", '50px']
            ],
            "${_t00}": [
                ["style", "top", '0px'],
                ["style", "left", '4px']
            ],
            "${_spring_02}": [
                ["style", "top", '191px'],
                ["style", "left", '0px']
            ],
            "${_spring_05}": [
                ["style", "left", '0px'],
                ["style", "top", '212px']
            ],
            "${_spring_01}": [
                ["style", "top", '184px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_spring_01}", "top", '139px', { fromValue: '184px'}], position: 0, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_spring_01}", "top", '184px', { fromValue: '139px'}], position: 1000, duration: 1000 },
                { id: "eid5", tween: [ "style", "${_spring_03}", "top", '177px', { fromValue: '198px'}], position: 0, duration: 1000 },
                { id: "eid8", tween: [ "style", "${_spring_03}", "top", '198px', { fromValue: '177px'}], position: 1000, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_t00}", "top", '-39px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_t00}", "top", '0px', { fromValue: '-39px'}], position: 1000, duration: 1000 },
                { id: "eid4", tween: [ "style", "${_spring_02}", "top", '159px', { fromValue: '191px'}], position: 0, duration: 1000 },
                { id: "eid9", tween: [ "style", "${_spring_02}", "top", '191px', { fromValue: '159px'}], position: 1000, duration: 1000 },
                { id: "eid6", tween: [ "style", "${_spring_04}", "top", '194px', { fromValue: '205px'}], position: 0, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_spring_04}", "top", '205px', { fromValue: '194px'}], position: 1000, duration: 1000 }            ]
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
                    transform: [[0, 0], ['-30'], [], ['0.5', '0.5']],
                    rect: ['-39px', '44px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R1',
                    type: 'rect',
                    transform: [[0, 0], ['16']],
                    rect: ['25px', '29px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'TRUBLE_MOVE_SRC_R2',
                    type: 'rect',
                    transform: [[0, 0], ['30'], [], ['0.5', '0.5']],
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
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '10px']
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
},
"house_all": {
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
                    id: 'wate_01',
                    type: 'image',
                    rect: ['-45px', '-45px', '159px', '143px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wate_01.png', '0px', '0px']
                },
                {
                    id: 'wate_02',
                    type: 'image',
                    rect: ['-44px', '-28px', '157px', '126px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wate_02.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wate_01}": [
                ["style", "top", '-45px'],
                ["style", "opacity", '1'],
                ["style", "left", '-45px']
            ],
            "${_wate_02}": [
                ["style", "top", '-28px'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '95px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid220", tween: [ "style", "${_wate_02}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 883, easing: "easeOutQuad" },
                { id: "eid221", tween: [ "style", "${_wate_02}", "opacity", '0', { fromValue: '1'}], position: 1117, duration: 883, easing: "easeOutQuad" },
                { id: "eid217", tween: [ "style", "${_wate_01}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid222", tween: [ "style", "${_wate_01}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 733, easing: "easeOutQuad" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/house054.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house05}": [
                ["style", "top", '3px'],
                ["style", "height", '16px'],
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
                { id: "eid215", tween: [ "style", "${_house05}", "left", '-1px', { fromValue: '1px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid206", tween: [ "style", "${_house05}", "top", '18px', { fromValue: '3px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid207", tween: [ "style", "${_house05}", "top", '3px', { fromValue: '18px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid210", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_house05}", "height", '16px', { fromValue: '16px'}], position: 1000, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"House04": {
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
                    id: 'house04',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house042.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house04}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '20px']
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
                { id: "eid204", tween: [ "style", "${_house04}", "width", '15px', { fromValue: '20px'}], position: 0, duration: 534, easing: "easeOutQuad" },
                { id: "eid205", tween: [ "style", "${_house04}", "width", '20px', { fromValue: '15px'}], position: 534, duration: 466, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "transform", "${_house04}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 534, easing: "easeOutQuad" },
                { id: "eid193", tween: [ "transform", "${_house04}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 534, duration: 466, easing: "easeOutQuad" }            ]
        }
    }
},
"House06": {
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
                    id: 'house06',
                    type: 'image',
                    rect: ['0px', '0px', '27px', '27px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house062.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house06}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '27px'],
                ["style", "width", '27px']
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
                { id: "eid223", tween: [ "style", "${_house06}", "top", '8px', { fromValue: '0px'}], position: 0, duration: 600, easing: "easeOutQuad" },
                { id: "eid224", tween: [ "style", "${_house06}", "top", '0px', { fromValue: '8px'}], position: 600, duration: 400, easing: "easeOutQuad" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/house012.png', '0px', '0px']
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
"House03": {
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
                    id: 'house03',
                    type: 'image',
                    rect: ['0px', '0px', '19px', '17px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house032.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house03}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '17px'],
                ["style", "width", '19px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1067,
            autoPlay: true,
            timeline: [
                { id: "eid190", tween: [ "transform", "${_house03}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 100, duration: 512, easing: "easeOutQuad" },
                { id: "eid191", tween: [ "transform", "${_house03}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 612, duration: 455, easing: "easeOutQuad" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/house023.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_house02}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '27px']
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
"house_all_1": {
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
                    id: 'wate_01',
                    type: 'image',
                    rect: ['-45px', '-45px', '159px', '143px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wate_012.png', '0px', '0px']
                },
                {
                    id: 'wate_02',
                    type: 'image',
                    rect: ['-44px', '-28px', '157px', '126px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wate_022.png', '0px', '0px']
                },
                {
                    id: 'House01',
                    type: 'rect',
                    rect: ['0px', '12px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House02',
                    type: 'rect',
                    rect: ['32px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House03',
                    type: 'rect',
                    rect: ['74px', '7px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House04',
                    type: 'rect',
                    rect: ['0px', '41px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House05',
                    type: 'rect',
                    rect: ['32px', '38px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'House06',
                    type: 'rect',
                    rect: ['68', '33', 'auto', 'auto', 'auto', 'auto']
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
                id: 'House04',
                symbolName: 'House04',
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
                id: 'House03',
                symbolName: 'House03',
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
                id: 'House06',
                symbolName: 'House06',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_House02}": [
                ["style", "left", '32px'],
                ["style", "top", '0px']
            ],
            "${_wate_01}": [
                ["style", "top", '-45px'],
                ["style", "opacity", '1'],
                ["style", "left", '-45px']
            ],
            "${_House05}": [
                ["style", "left", '32px'],
                ["style", "top", '38px']
            ],
            "${_House03}": [
                ["style", "left", '74px'],
                ["style", "top", '7px']
            ],
            "${_House04}": [
                ["style", "left", '0px'],
                ["style", "top", '41px']
            ],
            "${_wate_02}": [
                ["style", "top", '-28px'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px']
            ],
            "${_House01}": [
                ["style", "left", '0px'],
                ["style", "top", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '95px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid220", tween: [ "style", "${_wate_02}", "opacity", '1', { fromValue: '0'}], position: 233, duration: 883, easing: "easeOutQuad" },
                { id: "eid221", tween: [ "style", "${_wate_02}", "opacity", '0', { fromValue: '1'}], position: 1117, duration: 883, easing: "easeOutQuad" },
                { id: "eid217", tween: [ "style", "${_wate_01}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 800, easing: "easeOutQuad" },
                { id: "eid222", tween: [ "style", "${_wate_01}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 733, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-23184375");
