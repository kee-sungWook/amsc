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
                id: 'HYDROBAG2',
                type: 'rect',
                rect: ['26', '28','auto','auto','auto', 'auto']
            },
            {
                id: 'COVER',
                type: 'image',
                tag: 'img',
                rect: ['446', '31','337','1170','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"COVER.png"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1561', '346','814','698','auto', 'auto'],
                text: "진공 서보식 브레이크의 대표적인 <br>것에는 하이드로올릭이 있다. <br><br>이 브레이크는 벤딕스형(bendix type)<br>이라고 부르는 것과 같이 미국의 <br>벤딕스 회사의 발명에 의한 것으로서 <br>하이드로 매스터(hydmaster)<br>라고도 한다. <br><br>하이드로올릭 브레이크는 <br>오일 브레이크의 슈우를 작용시키는 <br>힘을 진공 실린더에 의해서 유압을 <br>높게 하여 강력하게 작용시키는 것이다. ",
                align: "auto",
                font: ['굴림', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1561', '190','634','86','auto', 'auto'],
                text: "하이드로 백이란?",
                align: "auto",
                font: ['굴림', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'HYDROBAG2',
                symbolName: 'HYDROBAG',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_txt2}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["style", "opacity", '0']
            ],
            "${_HYDROBAG2}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11500,
            autoPlay: true,
            timeline: [
                { id: "eid303", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 500 },
                { id: "eid299", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
                { id: "eid301", tween: [ "style", "${_HYDROBAG2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 900 },
                { id: "eid304", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_HYDROBAG2}', [] ], ""], position: 1500 }            ]
        }
    }
},
"small_SPRING": {
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
                    rect: ['0px', '0px', '37', '160', 'auto', 'auto'],
                    id: 'small_SP4',
                    fill: ['rgba(0,0,0,0)', 'images/small_SP4.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['21px', '8px', '34', '144', 'auto', 'auto'],
                    id: 'small_SP3',
                    fill: ['rgba(0,0,0,0)', 'images/small_SP3.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['42px', '18px', '31', '121', 'auto', 'auto'],
                    id: 'small_SP2',
                    fill: ['rgba(0,0,0,0)', 'images/small_SP2.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['74px', '41px', '14', '92', 'auto', 'auto'],
                    id: 'small_SP1',
                    fill: ['rgba(0,0,0,0)', 'images/small_SP1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_small_SP3}": [
                ["style", "left", '21px'],
                ["style", "top", '8px']
            ],
            "${_small_SP2}": [
                ["style", "left", '42px'],
                ["style", "top", '18px']
            ],
            "${_small_SP1}": [
                ["style", "left", '74px'],
                ["style", "top", '41px']
            ],
            "${_small_SP4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '88px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            timeline: [
                { id: "eid5", tween: [ "style", "${_small_SP1}", "left", '63px', { fromValue: '74px'}], position: 0, duration: 750 },
                { id: "eid4", tween: [ "style", "${_small_SP2}", "left", '34px', { fromValue: '42px'}], position: 0, duration: 750 },
                { id: "eid3", tween: [ "style", "${_small_SP3}", "left", '17px', { fromValue: '21px'}], position: 0, duration: 750 }            ]
        }
    }
},
"SPRING": {
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
                    rect: ['346px', '0px', '23', '331', 'auto', 'auto'],
                    id: 'spring_srcV',
                    fill: ['rgba(0,0,0,0)', 'images/spring_srcV.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '1px', '58', '329', 'auto', 'auto'],
                    id: 'spring_src1',
                    fill: ['rgba(0,0,0,0)', 'images/spring_src1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['68px', '1px', '58', '329', 'auto', 'auto'],
                    id: 'spring_src2',
                    fill: ['rgba(0,0,0,0)', 'images/spring_src1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['136px', '1px', '58', '329', 'auto', 'auto'],
                    id: 'spring_src3',
                    fill: ['rgba(0,0,0,0)', 'images/spring_src1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['204px', '1px', '58', '329', 'auto', 'auto'],
                    id: 'spring_src4',
                    fill: ['rgba(0,0,0,0)', 'images/spring_src1.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['272px', '1px', '58', '329', 'auto', 'auto'],
                    id: 'spring_src5',
                    fill: ['rgba(0,0,0,0)', 'images/spring_src1.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spring_src2}": [
                ["style", "left", '68px'],
                ["style", "top", '1px']
            ],
            "${_spring_src1}": [
                ["style", "left", '0px'],
                ["style", "top", '1px']
            ],
            "${_spring_srcV}": [
                ["style", "left", '346px'],
                ["style", "top", '0px']
            ],
            "${_spring_src3}": [
                ["style", "left", '136px'],
                ["style", "top", '1px']
            ],
            "${_spring_src5}": [
                ["style", "left", '272px'],
                ["style", "top", '1px']
            ],
            "${_spring_src4}": [
                ["style", "left", '204px'],
                ["style", "top", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '335px'],
                ["style", "width", '369px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: false,
            timeline: [
                { id: "eid49", tween: [ "style", "${_spring_src2}", "left", '55px', { fromValue: '68px'}], position: 0, duration: 1000 },
                { id: "eid92", tween: [ "style", "${_spring_src2}", "left", '51px', { fromValue: '55px'}], position: 1000, duration: 500 },
                { id: "eid155", tween: [ "style", "${_spring_src2}", "left", '33px', { fromValue: '51px'}], position: 1500, duration: 1750 },
                { id: "eid50", tween: [ "style", "${_spring_src3}", "left", '109px', { fromValue: '136px'}], position: 0, duration: 1000 },
                { id: "eid91", tween: [ "style", "${_spring_src3}", "left", '102px', { fromValue: '109px'}], position: 1000, duration: 500 },
                { id: "eid153", tween: [ "style", "${_spring_src3}", "left", '66px', { fromValue: '102px'}], position: 1500, duration: 1750 },
                { id: "eid51", tween: [ "style", "${_spring_src4}", "left", '164px', { fromValue: '204px'}], position: 0, duration: 1000 },
                { id: "eid93", tween: [ "style", "${_spring_src4}", "left", '153px', { fromValue: '164px'}], position: 1000, duration: 500 },
                { id: "eid151", tween: [ "style", "${_spring_src4}", "left", '98px', { fromValue: '153px'}], position: 1500, duration: 1750 },
                { id: "eid52", tween: [ "style", "${_spring_src5}", "left", '218px', { fromValue: '272px'}], position: 0, duration: 1000 },
                { id: "eid86", tween: [ "style", "${_spring_src5}", "left", '204px', { fromValue: '218px'}], position: 1000, duration: 500 },
                { id: "eid152", tween: [ "style", "${_spring_src5}", "left", '131px', { fromValue: '204px'}], position: 1500, duration: 1750 },
                { id: "eid53", tween: [ "style", "${_spring_srcV}", "left", '289px', { fromValue: '346px'}], position: 0, duration: 1000 },
                { id: "eid85", tween: [ "style", "${_spring_srcV}", "left", '267px', { fromValue: '289px'}], position: 1000, duration: 500 },
                { id: "eid154", tween: [ "style", "${_spring_srcV}", "left", '192px', { fromValue: '267px'}], position: 1500, duration: 1750 }            ]
        }
    }
},
"HYDROBAG": {
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
                    id: 'BACK',
                    tag: 'img',
                    rect: ['138px', '12px', '591', '1151', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BACK.png']
                },
                {
                    type: 'rect',
                    id: 'BPER4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['560px', '531px', '122px', '273px', 'auto', 'auto'],
                    fill: ['rgba(0,161,255,1)']
                },
                {
                    type: 'rect',
                    id: 'BPER3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['486px', '804px', '196px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,161,255,1)']
                },
                {
                    type: 'rect',
                    id: 'BPER2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['462px', '870px', '220px', '235px', 'auto', 'auto'],
                    fill: ['rgba(0,161,255,1)']
                },
                {
                    type: 'rect',
                    id: 'BPER1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['337px', '1105px', '345px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,161,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'TPER4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['578px', '373px', '106px', '108px', 'auto', 'auto'],
                    fill: ['rgba(0,161,255,1)']
                },
                {
                    type: 'rect',
                    id: 'TPER3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['489px', '299px', '195px', '74px', 'auto', 'auto'],
                    fill: ['rgba(0,161,255,1)']
                },
                {
                    type: 'rect',
                    id: 'TPER2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['465px', '71px', '219px', '228px', 'auto', 'auto'],
                    fill: ['rgba(0,161,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'TPER1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['339px', '46px', '345px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,161,255,1.00)']
                },
                {
                    type: 'image',
                    id: 'BODY-LINE',
                    tag: 'img',
                    rect: ['0px', '0px', '753', '1174', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BODY-LINE.png']
                },
                {
                    type: 'image',
                    id: 'BOTTOM',
                    tag: 'img',
                    rect: ['727px', '426px', '296', '332', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BOTTOM.png']
                },
                {
                    type: 'image',
                    id: 'V-TIN',
                    tag: 'img',
                    rect: ['326px', '58px', '6', '1053', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/V-TIN.png']
                },
                {
                    type: 'image',
                    id: 'TIN4',
                    tag: 'img',
                    rect: ['343px', '11px', '106', '1152', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TIN4.png']
                },
                {
                    type: 'image',
                    id: 'TIN3',
                    tag: 'img',
                    rect: ['343px', '39px', '67', '1095', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TIN3.png']
                },
                {
                    type: 'image',
                    id: 'TIN2',
                    tag: 'img',
                    rect: ['325px', '39px', '85', '1095', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TIN2.png']
                },
                {
                    type: 'image',
                    id: 'TIN1',
                    tag: 'img',
                    rect: ['400px', '63px', '162', '1049', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TIN1.png']
                },
                {
                    type: 'image',
                    id: 'IN-FLO',
                    tag: 'img',
                    rect: ['628px', '495px', '305', '199', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IN-FLO.png']
                },
                {
                    type: 'image',
                    id: 'INNER',
                    tag: 'img',
                    rect: ['423px', '75px', '591', '1026', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/INNER.png']
                },
                {
                    id: 'SPRING',
                    type: 'rect',
                    rect: ['126px', '424px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'BODY',
                    tag: 'img',
                    rect: ['1px', '2px', '751', '1171', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BODY.png']
                },
                {
                    type: 'image',
                    id: 'FLOO',
                    tag: 'img',
                    rect: ['713px', '495px', '71', '199', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/FLOO.png']
                },
                {
                    id: 'small_SPRING',
                    type: 'rect',
                    rect: ['762px', '508px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'p2',
                    tag: 'img',
                    rect: ['569px', '503px', '886', '176', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/p2.png']
                },
                {
                    type: 'image',
                    id: 'p1',
                    tag: 'img',
                    rect: ['121px', '499px', '441', '179', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/p1.png']
                }
            ],
            symbolInstances: [
            {
                id: 'SPRING',
                symbolName: 'SPRING'
            },
            {
                id: 'small_SPRING',
                symbolName: 'small_SPRING'
            }            ]
        },
    states: {
        "Base State": {
            "${_TIN3}": [
                ["style", "left", '343px'],
                ["style", "top", '39px']
            ],
            "${_TPER2}": [
                ["color", "background-color", 'rgba(0,161,255,1.00)'],
                ["style", "top", '71px'],
                ["style", "height", '228px'],
                ["style", "opacity", '0'],
                ["style", "left", '465px'],
                ["style", "width", '219px']
            ],
            "${_TIN2}": [
                ["style", "left", '325px'],
                ["style", "top", '39px']
            ],
            "${_BOTTOM}": [
                ["style", "top", '426px'],
                ["style", "left", '727px'],
                ["style", "width", '296px']
            ],
            "${_TPER4}": [
                ["style", "top", '373px'],
                ["style", "height", '108px'],
                ["style", "opacity", '0'],
                ["style", "left", '578px'],
                ["style", "width", '106px']
            ],
            "${_BPER1}": [
                ["color", "background-color", 'rgba(0,161,255,1)'],
                ["style", "top", '1105px'],
                ["style", "height", '25px'],
                ["style", "opacity", '0'],
                ["style", "left", '337px'],
                ["style", "width", '345px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1174px'],
                ["style", "width", '1455px']
            ],
            "${_BPER4}": [
                ["style", "top", '531px'],
                ["style", "height", '273px'],
                ["style", "opacity", '0'],
                ["style", "left", '560px'],
                ["style", "width", '122px']
            ],
            "${_V-TIN}": [
                ["style", "left", '326px'],
                ["style", "top", '58px']
            ],
            "${_TIN1}": [
                ["style", "left", '400px'],
                ["style", "top", '63px']
            ],
            "${_BACK}": [
                ["style", "left", '138px'],
                ["style", "top", '12px']
            ],
            "${_IN-FLO}": [
                ["style", "left", '628px'],
                ["style", "top", '495px']
            ],
            "${_FLOO}": [
                ["style", "left", '713px'],
                ["style", "top", '495px']
            ],
            "${_p1}": [
                ["style", "left", '121px'],
                ["style", "top", '499px']
            ],
            "${_BPER2}": [
                ["style", "top", '870px'],
                ["style", "height", '235px'],
                ["style", "opacity", '0'],
                ["style", "left", '462px'],
                ["style", "width", '220px']
            ],
            "${_TIN4}": [
                ["style", "left", '343px'],
                ["style", "top", '11px']
            ],
            "${_INNER}": [
                ["style", "left", '423px'],
                ["style", "top", '75px']
            ],
            "${_BPER3}": [
                ["style", "top", '804px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '486px'],
                ["style", "width", '196px']
            ],
            "${_BODY}": [
                ["style", "left", '1px'],
                ["style", "top", '2px']
            ],
            "${_TPER1}": [
                ["color", "background-color", 'rgba(0,161,255,1.00)'],
                ["style", "top", '46px'],
                ["style", "height", '25px'],
                ["style", "opacity", '0'],
                ["style", "left", '339px'],
                ["style", "width", '345px']
            ],
            "${_TPER3}": [
                ["style", "top", '299px'],
                ["style", "height", '74px'],
                ["style", "opacity", '0'],
                ["style", "left", '489px'],
                ["style", "width", '195px']
            ],
            "${_BODY-LINE}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_small_SPRING}": [
                ["style", "left", '762px'],
                ["style", "top", '508px']
            ],
            "${_p2}": [
                ["style", "left", '569px'],
                ["style", "top", '503px']
            ],
            "${_SPRING}": [
                ["style", "left", '126px'],
                ["style", "top", '424px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: false,
            timeline: [
                { id: "eid41", tween: [ "style", "${_BPER4}", "opacity", '0.5', { fromValue: '0'}], position: 750, duration: 1000 },
                { id: "eid143", tween: [ "style", "${_BPER4}", "opacity", '1', { fromValue: '0.5'}], position: 1750, duration: 2250 },
                { id: "eid291", tween: [ "style", "${_BPER4}", "opacity", '0.5', { fromValue: '1'}], position: 5000, duration: 2250 },
                { id: "eid290", tween: [ "style", "${_BPER4}", "opacity", '0', { fromValue: '0.5'}], position: 7250, duration: 1000 },
                { id: "eid17", tween: [ "style", "${_TIN1}", "left", '344px', { fromValue: '400px'}], position: 750, duration: 1000 },
                { id: "eid119", tween: [ "style", "${_TIN1}", "left", '270px', { fromValue: '344px'}], position: 2250, duration: 1750 },
                { id: "eid246", tween: [ "style", "${_TIN1}", "left", '344px', { fromValue: '270px'}], position: 5000, duration: 1750 },
                { id: "eid245", tween: [ "style", "${_TIN1}", "left", '400px', { fromValue: '344px'}], position: 7250, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_p2}", "left", '558px', { fromValue: '569px'}], position: 0, duration: 750 },
                { id: "eid18", tween: [ "style", "${_p2}", "left", '502px', { fromValue: '558px'}], position: 750, duration: 1000 },
                { id: "eid77", tween: [ "style", "${_p2}", "left", '479px', { fromValue: '502px'}], position: 1750, duration: 500 },
                { id: "eid120", tween: [ "style", "${_p2}", "left", '405px', { fromValue: '479px'}], position: 2250, duration: 1750 },
                { id: "eid232", tween: [ "style", "${_p2}", "left", '479px', { fromValue: '405px'}], position: 5000, duration: 1750 },
                { id: "eid231", tween: [ "style", "${_p2}", "left", '502px', { fromValue: '479px'}], position: 6750, duration: 500 },
                { id: "eid230", tween: [ "style", "${_p2}", "left", '558px', { fromValue: '502px'}], position: 7250, duration: 1000 },
                { id: "eid229", tween: [ "style", "${_p2}", "left", '569px', { fromValue: '558px'}], position: 8250, duration: 750 },
                { id: "eid118", tween: [ "style", "${_TIN2}", "left", '251px', { fromValue: '325px'}], position: 2250, duration: 1750 },
                { id: "eid247", tween: [ "style", "${_TIN2}", "left", '325px', { fromValue: '251px'}], position: 5000, duration: 1750 },
                { id: "eid45", tween: [ "style", "${_TPER4}", "opacity", '0.5', { fromValue: '0'}], position: 750, duration: 1000 },
                { id: "eid149", tween: [ "style", "${_TPER4}", "opacity", '1', { fromValue: '0.5'}], position: 1750, duration: 2250 },
                { id: "eid269", tween: [ "style", "${_TPER4}", "opacity", '0.5', { fromValue: '1'}], position: 5000, duration: 2250 },
                { id: "eid268", tween: [ "style", "${_TPER4}", "opacity", '0', { fromValue: '0.5'}], position: 7250, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_BPER4}", "width", '159px', { fromValue: '122px'}], position: 750, duration: 1000 },
                { id: "eid142", tween: [ "style", "${_BPER4}", "width", '234px', { fromValue: '159px'}], position: 2250, duration: 1750 },
                { id: "eid295", tween: [ "style", "${_BPER4}", "width", '159px', { fromValue: '234px'}], position: 5000, duration: 1750 },
                { id: "eid294", tween: [ "style", "${_BPER4}", "width", '122px', { fromValue: '159px'}], position: 7250, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_BPER2}", "opacity", '0.5', { fromValue: '0'}], position: 750, duration: 1000 },
                { id: "eid147", tween: [ "style", "${_BPER2}", "opacity", '1', { fromValue: '0.5'}], position: 1750, duration: 2250 },
                { id: "eid279", tween: [ "style", "${_BPER2}", "opacity", '0.5', { fromValue: '1'}], position: 5000, duration: 2250 },
                { id: "eid278", tween: [ "style", "${_BPER2}", "opacity", '0', { fromValue: '0.5'}], position: 7250, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_BPER2}", "left", '408px', { fromValue: '462px'}], position: 750, duration: 1000 },
                { id: "eid137", tween: [ "style", "${_BPER2}", "left", '329px', { fromValue: '408px'}], position: 2250, duration: 1750 },
                { id: "eid281", tween: [ "style", "${_BPER2}", "left", '408px', { fromValue: '329px'}], position: 5000, duration: 1750 },
                { id: "eid280", tween: [ "style", "${_BPER2}", "left", '462px', { fromValue: '408px'}], position: 7250, duration: 1000 },
                { id: "eid46", tween: [ "style", "${_TPER2}", "opacity", '0.5', { fromValue: '0'}], position: 750, duration: 1000 },
                { id: "eid150", tween: [ "style", "${_TPER2}", "opacity", '1', { fromValue: '0.5'}], position: 1750, duration: 2250 },
                { id: "eid257", tween: [ "style", "${_TPER2}", "opacity", '0.5', { fromValue: '1'}], position: 5000, duration: 2250 },
                { id: "eid256", tween: [ "style", "${_TPER2}", "opacity", '0', { fromValue: '0.5'}], position: 7250, duration: 1000 },
                { id: "eid26", tween: [ "style", "${_TPER3}", "width", '246px', { fromValue: '195px'}], position: 750, duration: 1000 },
                { id: "eid132", tween: [ "style", "${_TPER3}", "width", '318px', { fromValue: '246px'}], position: 2250, duration: 1750 },
                { id: "eid267", tween: [ "style", "${_TPER3}", "width", '246px', { fromValue: '318px'}], position: 5000, duration: 1750 },
                { id: "eid266", tween: [ "style", "${_TPER3}", "width", '195px', { fromValue: '246px'}], position: 7250, duration: 1000 },
                { id: "eid23", tween: [ "style", "${_TPER2}", "left", '410px', { fromValue: '465px'}], position: 750, duration: 1000 },
                { id: "eid129", tween: [ "style", "${_TPER2}", "left", '337px', { fromValue: '410px'}], position: 2250, duration: 1750 },
                { id: "eid259", tween: [ "style", "${_TPER2}", "left", '410px', { fromValue: '337px'}], position: 5000, duration: 1750 },
                { id: "eid258", tween: [ "style", "${_TPER2}", "left", '465px', { fromValue: '410px'}], position: 7250, duration: 1000 },
                { id: "eid44", tween: [ "style", "${_BPER3}", "opacity", '0.5', { fromValue: '0'}], position: 750, duration: 1000 },
                { id: "eid148", tween: [ "style", "${_BPER3}", "opacity", '1', { fromValue: '0.5'}], position: 1750, duration: 2250 },
                { id: "eid285", tween: [ "style", "${_BPER3}", "opacity", '0.5', { fromValue: '1'}], position: 5000, duration: 2250 },
                { id: "eid284", tween: [ "style", "${_BPER3}", "opacity", '0', { fromValue: '0.5'}], position: 7250, duration: 1000 },
                { id: "eid127", tween: [ "style", "${_TPER1}", "left", '264px', { fromValue: '339px'}], position: 2250, duration: 1750 },
                { id: "eid254", tween: [ "style", "${_TPER1}", "left", '339px', { fromValue: '264px'}], position: 5000, duration: 1750 },
                { id: "eid24", tween: [ "style", "${_TPER2}", "width", '274px', { fromValue: '219px'}], position: 750, duration: 1000 },
                { id: "eid130", tween: [ "style", "${_TPER2}", "width", '347px', { fromValue: '274px'}], position: 2250, duration: 1750 },
                { id: "eid261", tween: [ "style", "${_TPER2}", "width", '274px', { fromValue: '347px'}], position: 5000, duration: 1750 },
                { id: "eid260", tween: [ "style", "${_TPER2}", "width", '219px', { fromValue: '274px'}], position: 7250, duration: 1000 },
                { id: "eid135", tween: [ "style", "${_BPER1}", "left", '259px', { fromValue: '337px'}], position: 2250, duration: 1750 },
                { id: "eid276", tween: [ "style", "${_BPER1}", "left", '337px', { fromValue: '259px'}], position: 5000, duration: 1750 },
                { id: "eid32", tween: [ "style", "${_BPER3}", "width", '253px', { fromValue: '196px'}], position: 750, duration: 1000 },
                { id: "eid140", tween: [ "style", "${_BPER3}", "width", '326px', { fromValue: '253px'}], position: 2250, duration: 1750 },
                { id: "eid289", tween: [ "style", "${_BPER3}", "width", '253px', { fromValue: '326px'}], position: 5000, duration: 1750 },
                { id: "eid288", tween: [ "style", "${_BPER3}", "width", '196px', { fromValue: '253px'}], position: 7250, duration: 1000 },
                { id: "eid124", tween: [ "style", "${_BOTTOM}", "width", '239px', { fromValue: '296px'}], position: 750, duration: 1000 },
                { id: "eid126", tween: [ "style", "${_BOTTOM}", "width", '163px', { fromValue: '239px'}], position: 2250, duration: 1750 },
                { id: "eid251", tween: [ "style", "${_BOTTOM}", "width", '239px', { fromValue: '163px'}], position: 5000, duration: 1750 },
                { id: "eid250", tween: [ "style", "${_BOTTOM}", "width", '296px', { fromValue: '239px'}], position: 7250, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_p1}", "left", '65px', { fromValue: '121px'}], position: 750, duration: 1000 },
                { id: "eid80", tween: [ "style", "${_p1}", "left", '42px', { fromValue: '65px'}], position: 1750, duration: 500 },
                { id: "eid115", tween: [ "style", "${_p1}", "left", '-32px', { fromValue: '42px'}], position: 2250, duration: 1750 },
                { id: "eid228", tween: [ "style", "${_p1}", "left", '42px', { fromValue: '-32px'}], position: 5000, duration: 1750 },
                { id: "eid227", tween: [ "style", "${_p1}", "left", '65px', { fromValue: '42px'}], position: 6750, duration: 500 },
                { id: "eid226", tween: [ "style", "${_p1}", "left", '121px', { fromValue: '65px'}], position: 7250, duration: 1000 },
                { id: "eid42", tween: [ "style", "${_TPER3}", "opacity", '0.5', { fromValue: '0'}], position: 750, duration: 1000 },
                { id: "eid144", tween: [ "style", "${_TPER3}", "opacity", '1', { fromValue: '0.5'}], position: 1750, duration: 2250 },
                { id: "eid263", tween: [ "style", "${_TPER3}", "opacity", '0.5', { fromValue: '1'}], position: 5000, duration: 2250 },
                { id: "eid262", tween: [ "style", "${_TPER3}", "opacity", '0', { fromValue: '0.5'}], position: 7250, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_TPER4}", "width", '162px', { fromValue: '106px'}], position: 750, duration: 1000 },
                { id: "eid134", tween: [ "style", "${_TPER4}", "width", '234px', { fromValue: '162px'}], position: 2250, duration: 1750 },
                { id: "eid273", tween: [ "style", "${_TPER4}", "width", '162px', { fromValue: '234px'}], position: 5000, duration: 1750 },
                { id: "eid272", tween: [ "style", "${_TPER4}", "width", '106px', { fromValue: '162px'}], position: 7250, duration: 1000 },
                { id: "eid33", tween: [ "style", "${_BPER4}", "left", '523px', { fromValue: '560px'}], position: 750, duration: 1000 },
                { id: "eid141", tween: [ "style", "${_BPER4}", "left", '448px', { fromValue: '523px'}], position: 2250, duration: 1750 },
                { id: "eid293", tween: [ "style", "${_BPER4}", "left", '523px', { fromValue: '448px'}], position: 5000, duration: 1750 },
                { id: "eid292", tween: [ "style", "${_BPER4}", "left", '560px', { fromValue: '523px'}], position: 7250, duration: 1000 },
                { id: "eid30", tween: [ "style", "${_BPER2}", "width", '274px', { fromValue: '220px'}], position: 750, duration: 1000 },
                { id: "eid138", tween: [ "style", "${_BPER2}", "width", '353px', { fromValue: '274px'}], position: 2250, duration: 1750 },
                { id: "eid283", tween: [ "style", "${_BPER2}", "width", '274px', { fromValue: '353px'}], position: 5000, duration: 1750 },
                { id: "eid282", tween: [ "style", "${_BPER2}", "width", '220px', { fromValue: '274px'}], position: 7250, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_TPER3}", "left", '433px', { fromValue: '489px'}], position: 750, duration: 1000 },
                { id: "eid131", tween: [ "style", "${_TPER3}", "left", '361px', { fromValue: '433px'}], position: 2250, duration: 1750 },
                { id: "eid265", tween: [ "style", "${_TPER3}", "left", '433px', { fromValue: '361px'}], position: 5000, duration: 1750 },
                { id: "eid264", tween: [ "style", "${_TPER3}", "left", '489px', { fromValue: '433px'}], position: 7250, duration: 1000 },
                { id: "eid31", tween: [ "style", "${_BPER3}", "left", '429px', { fromValue: '486px'}], position: 750, duration: 1000 },
                { id: "eid139", tween: [ "style", "${_BPER3}", "left", '356px', { fromValue: '429px'}], position: 2250, duration: 1750 },
                { id: "eid287", tween: [ "style", "${_BPER3}", "left", '429px', { fromValue: '356px'}], position: 5000, duration: 1750 },
                { id: "eid286", tween: [ "style", "${_BPER3}", "left", '486px', { fromValue: '429px'}], position: 7250, duration: 1000 },
                { id: "eid20", tween: [ "style", "${_small_SPRING}", "left", '706px', { fromValue: '762px'}], position: 750, duration: 1000 },
                { id: "eid78", tween: [ "style", "${_small_SPRING}", "left", '683px', { fromValue: '706px'}], position: 1750, duration: 500 },
                { id: "eid114", tween: [ "style", "${_small_SPRING}", "left", '609px', { fromValue: '683px'}], position: 2250, duration: 1750 },
                { id: "eid235", tween: [ "style", "${_small_SPRING}", "left", '683px', { fromValue: '609px'}], position: 5000, duration: 1750 },
                { id: "eid234", tween: [ "style", "${_small_SPRING}", "left", '706px', { fromValue: '683px'}], position: 6750, duration: 500 },
                { id: "eid233", tween: [ "style", "${_small_SPRING}", "left", '762px', { fromValue: '706px'}], position: 7250, duration: 1000 },
                { id: "eid136", tween: [ "style", "${_BPER1}", "width", '423px', { fromValue: '345px'}], position: 2250, duration: 1750 },
                { id: "eid277", tween: [ "style", "${_BPER1}", "width", '345px', { fromValue: '423px'}], position: 5000, duration: 1750 },
                { id: "eid116", tween: [ "style", "${_V-TIN}", "left", '252px', { fromValue: '326px'}], position: 2250, duration: 1750 },
                { id: "eid249", tween: [ "style", "${_V-TIN}", "left", '326px', { fromValue: '252px'}], position: 5000, duration: 1750 },
                { id: "eid21", tween: [ "style", "${_INNER}", "left", '367px', { fromValue: '423px'}], position: 750, duration: 1000 },
                { id: "eid121", tween: [ "style", "${_INNER}", "left", '293px', { fromValue: '367px'}], position: 2250, duration: 1750 },
                { id: "eid240", tween: [ "style", "${_INNER}", "left", '367px', { fromValue: '293px'}], position: 5000, duration: 1750 },
                { id: "eid239", tween: [ "style", "${_INNER}", "left", '423px', { fromValue: '367px'}], position: 7250, duration: 1000 },
                { id: "eid128", tween: [ "style", "${_TPER1}", "width", '420px', { fromValue: '345px'}], position: 2250, duration: 1750 },
                { id: "eid255", tween: [ "style", "${_TPER1}", "width", '345px', { fromValue: '420px'}], position: 5000, duration: 1750 },
                { id: "eid16", tween: [ "style", "${_FLOO}", "left", '657px', { fromValue: '713px'}], position: 750, duration: 1000 },
                { id: "eid76", tween: [ "style", "${_FLOO}", "left", '634px', { fromValue: '657px'}], position: 1750, duration: 500 },
                { id: "eid117", tween: [ "style", "${_FLOO}", "left", '560px', { fromValue: '634px'}], position: 2250, duration: 1750 },
                { id: "eid238", tween: [ "style", "${_FLOO}", "left", '634px', { fromValue: '560px'}], position: 5000, duration: 1750 },
                { id: "eid237", tween: [ "style", "${_FLOO}", "left", '657px', { fromValue: '634px'}], position: 6750, duration: 500 },
                { id: "eid236", tween: [ "style", "${_FLOO}", "left", '713px', { fromValue: '657px'}], position: 7250, duration: 1000 },
                { id: "eid27", tween: [ "style", "${_TPER4}", "left", '522px', { fromValue: '578px'}], position: 750, duration: 1000 },
                { id: "eid133", tween: [ "style", "${_TPER4}", "left", '450px', { fromValue: '522px'}], position: 2250, duration: 1750 },
                { id: "eid271", tween: [ "style", "${_TPER4}", "left", '522px', { fromValue: '450px'}], position: 5000, duration: 1750 },
                { id: "eid270", tween: [ "style", "${_TPER4}", "left", '578px', { fromValue: '522px'}], position: 7250, duration: 1000 },
                { id: "eid48", tween: [ "style", "${_BPER1}", "opacity", '0.5', { fromValue: '0'}], position: 750, duration: 1000 },
                { id: "eid146", tween: [ "style", "${_BPER1}", "opacity", '1', { fromValue: '0.5'}], position: 1750, duration: 2250 },
                { id: "eid275", tween: [ "style", "${_BPER1}", "opacity", '0.5', { fromValue: '1'}], position: 5000, duration: 2250 },
                { id: "eid274", tween: [ "style", "${_BPER1}", "opacity", '0', { fromValue: '0.5'}], position: 7250, duration: 1000 },
                { id: "eid122", tween: [ "style", "${_TIN3}", "left", '313px', { fromValue: '343px'}], position: 2250, duration: 1750 },
                { id: "eid248", tween: [ "style", "${_TIN3}", "left", '343px', { fromValue: '313px'}], position: 5000, duration: 1750 },
                { id: "eid2", tween: [ "style", "${_IN-FLO}", "left", '617px', { fromValue: '628px'}], position: 0, duration: 750 },
                { id: "eid19", tween: [ "style", "${_IN-FLO}", "left", '561px', { fromValue: '617px'}], position: 750, duration: 1000 },
                { id: "eid79", tween: [ "style", "${_IN-FLO}", "left", '538px', { fromValue: '561px'}], position: 1750, duration: 500 },
                { id: "eid113", tween: [ "style", "${_IN-FLO}", "left", '464px', { fromValue: '538px'}], position: 2250, duration: 1750 },
                { id: "eid244", tween: [ "style", "${_IN-FLO}", "left", '538px', { fromValue: '464px'}], position: 5000, duration: 1750 },
                { id: "eid243", tween: [ "style", "${_IN-FLO}", "left", '561px', { fromValue: '538px'}], position: 6750, duration: 500 },
                { id: "eid242", tween: [ "style", "${_IN-FLO}", "left", '617px', { fromValue: '561px'}], position: 7250, duration: 1000 },
                { id: "eid241", tween: [ "style", "${_IN-FLO}", "left", '628px', { fromValue: '617px'}], position: 8250, duration: 750 },
                { id: "eid47", tween: [ "style", "${_TPER1}", "opacity", '0.5', { fromValue: '0'}], position: 750, duration: 1000 },
                { id: "eid145", tween: [ "style", "${_TPER1}", "opacity", '1', { fromValue: '0.5'}], position: 1750, duration: 2250 },
                { id: "eid253", tween: [ "style", "${_TPER1}", "opacity", '0.5', { fromValue: '1'}], position: 5000, duration: 2250 },
                { id: "eid252", tween: [ "style", "${_TPER1}", "opacity", '0', { fromValue: '0.5'}], position: 7250, duration: 1000 },
                { id: "eid6", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_small_SPRING}', [] ], ""], position: 0 },
                { id: "eid54", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SPRING}', [] ], ""], position: 750 },
                { id: "eid305", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_SPRING}', [] ], ""], position: 4983.5494733201 },
                { id: "eid296", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_small_SPRING}', [] ], ""], position: 8250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-22294632");
