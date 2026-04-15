/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'preloadAudio': false
};
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
                id: 'Engine',
                type: 'rect',
                rect: ['176', '106','auto','auto','auto', 'auto']
            },
            {
                id: 'bg2',
                type: 'image',
                rect: ['299px', '222px','783px','486px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'spark_all',
                type: 'rect',
                rect: ['290px', '454px','auto','auto','auto', 'auto']
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['865px', '400px','770px','160px','auto', 'auto'],
                text: "고압 펌프는 엔진에 사용되는 높은 압력을<br>발생시키는 것으로써 마모마 심할 경우 출력부족,<br>매연발생,가속불량이 발생될수 있습니다.<br>",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['865px', '590px','770px','160px','auto', 'auto'],
                text: "고장이 발생 시 시동 불량이 발생되며<br>운행 중 고장이 발생될 경우는 시동 꺼짐이 <br>발생됩니다.",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,74,141,1.00)", "normal", "none", ""]
            },
            {
                id: 'pu_mov',
                type: 'rect',
                rect: ['548', '525','auto','auto','auto', 'auto']
            },
            {
                id: 'one_mov01',
                type: 'rect',
                rect: ['1069', '222','auto','auto','auto', 'auto']
            },
            {
                id: 'onw_mov02',
                type: 'rect',
                rect: ['576', '670','auto','auto','auto', 'auto']
            },
            {
                id: 'bg02',
                type: 'image',
                rect: ['709px', '419px','71px','119px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg02.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'onw_mov02',
                symbolName: 'onw_mov02'
            },
            {
                id: 'one_mov01',
                symbolName: 'one_mov01'
            },
            {
                id: 'spark_all',
                symbolName: 'spark',
                autoPlay: {

                }
            },
            {
                id: 'Engine',
                symbolName: 'Engine',
                autoPlay: {

                }
            },
            {
                id: 'pu_mov',
                symbolName: 'pu_mov'
            }
            ]
        },
    states: {
        "Base State": {
            "${_bg02}": [
                ["style", "left", '709px'],
                ["style", "top", '419px']
            ],
            "${_spark_all}": [
                ["style", "left", '290px'],
                ["style", "top", '454px']
            ],
            "${_Text}": [
                ["style", "top", '590px'],
                ["style", "font-size", '35px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '865px'],
                ["style", "width", '770px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '400px'],
                ["style", "width", '770px'],
                ["style", "height", '160px'],
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "left", '865px'],
                ["style", "font-size", '35px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Engine}": [
                ["style", "top", '146px'],
                ["style", "left", '-10px'],
                ["transform", "scaleY", '0.54573'],
                ["transform", "scaleX", '0.54573']
            ],
            "${_bg2}": [
                ["style", "left", '299px'],
                ["style", "top", '222px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2134,
            autoPlay: true,
            timeline: [
                { id: "eid320", tween: [ "style", "${_Engine}", "top", '146px', { fromValue: '146px'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "transform", "${_Engine}", "scaleY", '0.54573', { fromValue: '0.54573'}], position: 0, duration: 0 },
                { id: "eid331", tween: [ "style", "${_Engine}", "left", '-10px', { fromValue: '-10px'}], position: 0, duration: 0 },
                { id: "eid199", tween: [ "transform", "${_Engine}", "scaleX", '0.54573', { fromValue: '0.54573'}], position: 0, duration: 0 }            ]
        }
    }
},
"Engine": {
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
                    id: 'engineBody',
                    tag: 'img',
                    rect: ['0px', '0px', '686', '889', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/engineBody.png']
                },
                {
                    id: 'EquipmentMover1',
                    type: 'rect',
                    rect: ['159px', '198px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EquipmentMover2',
                    type: 'rect',
                    rect: ['249px', '235px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EquipmentMover3',
                    type: 'rect',
                    rect: ['330px', '270px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'EquipmentMover4',
                    type: 'rect',
                    rect: ['414px', '306px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'cam_back',
                    tag: 'img',
                    rect: ['142px', '146px', '544', '275', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cam_back.png']
                },
                {
                    type: 'image',
                    id: 'cam_front',
                    tag: 'img',
                    rect: ['551px', '322px', '133', '97', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cam_front.png']
                }
            ],
            symbolInstances: [
            {
                id: 'EquipmentMover2',
                symbolName: 'EquipmentMover',
                autoPlay: {

               }
            },
            {
                id: 'EquipmentMover4',
                symbolName: 'EquipmentMover',
                autoPlay: {

               }
            },
            {
                id: 'EquipmentMover3',
                symbolName: 'EquipmentMover',
                autoPlay: {

               }
            },
            {
                id: 'EquipmentMover1',
                symbolName: 'EquipmentMover',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_cam_back}": [
                ["style", "left", '142px'],
                ["style", "top", '146px']
            ],
            "${_EquipmentMover2}": [
                ["style", "left", '249px'],
                ["style", "top", '235px']
            ],
            "${_EquipmentMover4}": [
                ["style", "left", '414px'],
                ["style", "top", '306px']
            ],
            "${_engineBody}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '889px'],
                ["style", "width", '690px']
            ],
            "${_EquipmentMover3}": [
                ["style", "left", '330px'],
                ["style", "top", '270px']
            ],
            "${_cam_front}": [
                ["style", "left", '551px'],
                ["style", "top", '322px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"driveBelt_moving": {
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
                    rect: ['-4px', '-2px', '36', '19', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt_mover.png'],
                    id: 'driveBelt_mover',
                    type: 'image',
                    autoOrient: 'true',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '19px'],
                ["style", "width", '36px']
            ],
            "${_driveBelt_mover}": [
                ["motion", "location", '14px 7.5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "motion", "${_driveBelt_mover}", [[14, 7.5, 0, 0],[-137.71, 172.41, -42.41, 45.72, -150.91, 162.66],[-174.98, 222.49, -182.7, 303.94, -31.7, 52.74],[-186.5, 346, 0, 0]]], position: 0, duration: 767 }            ]
        }
    }
},
"blackOval_movie1_1": {
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
                    rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                    id: 'blackOval',
                    fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blackOval}": [
                ["motion", "location", '4.5px 6.5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 733,
            autoPlay: true,
            timeline: [
                { id: "eid45", tween: [ "motion", "${_blackOval}", [[4.5, 6.5, 0, 0],[-14.44, 75.27, 16.24, 175.53, 8.45, 91.36],[37.21, 77.06, 12.32, -17.54, 11.03, -15.69],[67.33, 3.28, 0.09, -49.89, 0.13, -70.77],[48.51, -35.46, -49.49, -5.21, -52.26, -5.51],[5.5, 4.5, 0, 0]]], position: 0, duration: 733 }            ]
        }
    }
},
"blackOval_movie2": {
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
                    rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                    id: 'blackOvalCopy',
                    fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blackOvalCopy}": [
                ["motion", "location", '4.5px 6.5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: true,
            timeline: [
                { id: "eid48", tween: [ "motion", "${_blackOvalCopy}", [[4.5, 6.5, 0, 0],[-25.69, 30.32, -21.41, 56.85, -24.66, 65.5],[-22.17, 59.44, 35.75, 14.56, 10.68, 4.35],[5.67, 42.56, 22.13, -50.49, 8.1, -18.47],[6.5, 10.5, 0, 0]]], position: 0, duration: 767 }            ]
        }
    }
},
"blackOval_movie4": {
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
                    rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                    id: 'blackOval',
                    fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blackOval}": [
                ["motion", "location", '4.5px 6.5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "motion", "${_blackOval}", [[4.5, 6.5, 0, 0],[-76.12, 118.59, -4.91, 18.77, -78.26, 298.97],[-50.6, 137.52, 48.06, -33.41, 70.07, -48.71],[9.96, 42.37, 23.76, -86.53, 44.71, -162.85],[7.5, 8.3, 0, 0]]], position: 0, duration: 767 }            ]
        }
    }
},
"blackOval_movie3": {
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
                    rect: ['2px', '4px', '9', '13', 'auto', 'auto'],
                    id: 'blackOvalCopy',
                    fill: ['rgba(0,0,0,0)', 'images/blackOval.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blackOvalCopy}": [
                ["motion", "location", '6.5px 10.5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 767,
            autoPlay: true,
            timeline: [
                { id: "eid52", tween: [ "motion", "${_blackOvalCopy}", [[6.5, 10.5, 0, 0],[5.67, 42.56, -8.1, 18.47, -22.13, 50.49],[-22.17, 59.44, -10.68, -4.35, -35.75, -14.56],[-25.69, 30.32, 24.66, -65.5, 21.41, -56.85],[4.5, 6.5, 0, 0]]], position: 0, duration: 767 }            ]
        }
    }
},
"EquipmentMover": {
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
                    id: 'CrankMove_rear',
                    type: 'rect',
                    rect: ['-6px', '259px', 'auto', 'auto', 'auto', 'auto'],
                    opacity: 1
                },
                {
                    type: 'image',
                    id: 'piston',
                    tag: 'img',
                    rect: ['37px', '115px', '108', '228', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/piston.png']
                },
                {
                    type: 'image',
                    id: 'cylinder',
                    tag: 'img',
                    rect: ['36px', '113px', '110', '235', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cylinder.png']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.39313']],
                    display: 'none',
                    type: 'rect',
                    id: 'burnMovie',
                    rect: ['40', '41px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'exhaustValve',
                    tag: 'img',
                    rect: ['66px', '0px', '109', '149', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/exhaustValve.png']
                },
                {
                    type: 'image',
                    id: 'intakeValve',
                    tag: 'img',
                    rect: ['0px', '65px', '117', '113', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/intakeValve.png']
                },
                {
                    id: 'CrankMove_front',
                    type: 'rect',
                    rect: ['24px', '268px', 'auto', 'auto', 'auto', 'auto'],
                    opacity: 1
                }
            ],
            symbolInstances: [
            {
                id: 'CrankMove_front',
                symbolName: 'CrankMove',
                autoPlay: {

               }
            },
            {
                id: 'burnMovie',
                symbolName: 'burnMovie',
                autoPlay: {

               }
            },
            {
                id: 'CrankMove_rear',
                symbolName: 'CrankMove',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_cylinder}": [
                ["style", "left", '36px'],
                ["style", "top", '113px']
            ],
            "${_intakeValve}": [
                ["style", "left", '-20px'],
                ["style", "top", '45px']
            ],
            "${symbolSelector}": [
                ["style", "height", '394px'],
                ["style", "width", '175px']
            ],
            "${_piston}": [
                ["style", "left", '37px'],
                ["style", "top", '115px']
            ],
            "${_exhaustValve}": [
                ["style", "left", '66px'],
                ["style", "top", '0px']
            ],
            "${_burnMovie}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.39313'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "top", '41px']
            ],
            "${_CrankMove_rear}": [
                ["style", "top", '259px'],
                ["style", "opacity", '1'],
                ["style", "left", '-6px']
            ],
            "${_CrankMove_front}": [
                ["style", "top", '268px'],
                ["style", "opacity", '1'],
                ["style", "left", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2134,
            autoPlay: false,
            labels: {
                "step1": 0,
                "step2": 533,
                "step3": 1067,
                "step4": 1600
            },
            timeline: [
                { id: "eid83", tween: [ "style", "${_piston}", "top", '208px', { fromValue: '115px'}], position: 0, duration: 533 },
                { id: "eid84", tween: [ "style", "${_piston}", "top", '115px', { fromValue: '208px'}], position: 533, duration: 534 },
                { id: "eid91", tween: [ "style", "${_piston}", "top", '208px', { fromValue: '115px'}], position: 1067, duration: 533 },
                { id: "eid92", tween: [ "style", "${_piston}", "top", '115px', { fromValue: '208px'}], position: 1600, duration: 534 },
                { id: "eid126", tween: [ "style", "${_intakeValve}", "left", '0px', { fromValue: '-20px'}], position: 0, duration: 267 },
                { id: "eid122", tween: [ "style", "${_intakeValve}", "left", '-20px', { fromValue: '0px'}], position: 1600, duration: 267 },
                { id: "eid116", tween: [ "style", "${_burnMovie}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid117", tween: [ "style", "${_burnMovie}", "display", 'block', { fromValue: 'none'}], position: 1067, duration: 0 },
                { id: "eid118", tween: [ "style", "${_burnMovie}", "display", 'none', { fromValue: 'block'}], position: 1733, duration: 0 },
                { id: "eid112", tween: [ "style", "${_burnMovie}", "top", '136px', { fromValue: '41px'}], position: 1067, duration: 533 },
                { id: "eid114", tween: [ "style", "${_burnMovie}", "top", '113px', { fromValue: '136px'}], position: 1600, duration: 133 },
                { id: "eid125", tween: [ "style", "${_intakeValve}", "top", '65px', { fromValue: '45px'}], position: 0, duration: 267 },
                { id: "eid121", tween: [ "style", "${_intakeValve}", "top", '45px', { fromValue: '65px'}], position: 1600, duration: 267 },
                { id: "eid115", tween: [ "style", "${_burnMovie}", "opacity", '0', { fromValue: '1'}], position: 1067, duration: 666 },
                { id: "eid111", tween: [ "transform", "${_burnMovie}", "scaleY", '1.15648', { fromValue: '0.39313'}], position: 1067, duration: 533 },
                { id: "eid113", tween: [ "transform", "${_burnMovie}", "scaleY", '0.98091', { fromValue: '1.15648'}], position: 1600, duration: 133 },
                { id: "eid127", tween: [ "style", "${_exhaustValve}", "top", '-20px', { fromValue: '0px'}], position: 0, duration: 267 },
                { id: "eid131", tween: [ "style", "${_exhaustValve}", "top", '0px', { fromValue: '-20px'}], position: 533, duration: 267 },
                { id: "eid128", tween: [ "style", "${_exhaustValve}", "left", '86px', { fromValue: '66px'}], position: 0, duration: 267 },
                { id: "eid132", tween: [ "style", "${_exhaustValve}", "left", '66px', { fromValue: '86px'}], position: 533, duration: 267 }            ]
        }
    }
},
"CrankMove": {
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
                    id: 'crank',
                    type: 'image',
                    rect: ['0px', '0px', '1280px', '180px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crank.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crank}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '2560px']
            ],
            "${symbolSelector}": [
                ["style", "height", '180px'],
                ["style", "width", '160px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2133,
            autoPlay: false,
            labels: {
                "down": 533
            },
            timeline: [
                { id: "eid65", tween: [ "style", "${_crank}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_crank}", "left", '-160px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid67", tween: [ "style", "${_crank}", "left", '-320px', { fromValue: '-160px'}], position: 133, duration: 0 },
                { id: "eid68", tween: [ "style", "${_crank}", "left", '-480px', { fromValue: '-320px'}], position: 200, duration: 0 },
                { id: "eid69", tween: [ "style", "${_crank}", "left", '-640px', { fromValue: '-480px'}], position: 267, duration: 0 },
                { id: "eid70", tween: [ "style", "${_crank}", "left", '-800px', { fromValue: '-640px'}], position: 333, duration: 0 },
                { id: "eid71", tween: [ "style", "${_crank}", "left", '-960px', { fromValue: '-800px'}], position: 400, duration: 0 },
                { id: "eid72", tween: [ "style", "${_crank}", "left", '-1120px', { fromValue: '-960px'}], position: 467, duration: 0 },
                { id: "eid73", tween: [ "style", "${_crank}", "left", '-1280px', { fromValue: '-1120px'}], position: 533, duration: 0 },
                { id: "eid74", tween: [ "style", "${_crank}", "left", '-1440px', { fromValue: '-1280px'}], position: 600, duration: 0 },
                { id: "eid75", tween: [ "style", "${_crank}", "left", '-1600px', { fromValue: '-1440px'}], position: 667, duration: 0 },
                { id: "eid76", tween: [ "style", "${_crank}", "left", '-1760px', { fromValue: '-1600px'}], position: 733, duration: 0 },
                { id: "eid77", tween: [ "style", "${_crank}", "left", '-1920px', { fromValue: '-1760px'}], position: 800, duration: 0 },
                { id: "eid78", tween: [ "style", "${_crank}", "left", '-2080px', { fromValue: '0px'}], position: 867, duration: 0 },
                { id: "eid79", tween: [ "style", "${_crank}", "left", '-2240px', { fromValue: '-2080px'}], position: 933, duration: 0 },
                { id: "eid80", tween: [ "style", "${_crank}", "left", '-2400px', { fromValue: '-2240px'}], position: 1000, duration: 0 },
                { id: "eid82", tween: [ "style", "${_crank}", "left", '0px', { fromValue: '-2400px'}], position: 1067, duration: 0 },
                { id: "eid141", tween: [ "style", "${_crank}", "left", '-160px', { fromValue: '0px'}], position: 1133, duration: 0 },
                { id: "eid142", tween: [ "style", "${_crank}", "left", '-320px', { fromValue: '-160px'}], position: 1199, duration: 0 },
                { id: "eid143", tween: [ "style", "${_crank}", "left", '-480px', { fromValue: '-320px'}], position: 1266, duration: 0 },
                { id: "eid144", tween: [ "style", "${_crank}", "left", '-640px', { fromValue: '-480px'}], position: 1333, duration: 0 },
                { id: "eid145", tween: [ "style", "${_crank}", "left", '-800px', { fromValue: '-640px'}], position: 1399, duration: 0 },
                { id: "eid146", tween: [ "style", "${_crank}", "left", '-960px', { fromValue: '-800px'}], position: 1466, duration: 0 },
                { id: "eid147", tween: [ "style", "${_crank}", "left", '-1120px', { fromValue: '-960px'}], position: 1533, duration: 0 },
                { id: "eid148", tween: [ "style", "${_crank}", "left", '-1280px', { fromValue: '-1120px'}], position: 1599, duration: 0 },
                { id: "eid149", tween: [ "style", "${_crank}", "left", '-1440px', { fromValue: '-1280px'}], position: 1666, duration: 0 },
                { id: "eid150", tween: [ "style", "${_crank}", "left", '-1600px', { fromValue: '-1440px'}], position: 1733, duration: 0 },
                { id: "eid151", tween: [ "style", "${_crank}", "left", '-1760px', { fromValue: '-1600px'}], position: 1799, duration: 0 },
                { id: "eid152", tween: [ "style", "${_crank}", "left", '-1920px', { fromValue: '-1760px'}], position: 1866, duration: 0 },
                { id: "eid153", tween: [ "style", "${_crank}", "left", '-2080px', { fromValue: '-1920px'}], position: 1933, duration: 0 },
                { id: "eid154", tween: [ "style", "${_crank}", "left", '-2240px', { fromValue: '-2080px'}], position: 1999, duration: 0 },
                { id: "eid155", tween: [ "style", "${_crank}", "left", '-2400px', { fromValue: '-2240px'}], position: 2066, duration: 0 },
                { id: "eid156", tween: [ "style", "${_crank}", "left", '0px', { fromValue: '-2400px'}], position: 2133, duration: 0 }            ]
        }
    }
},
"burnMovie": {
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
                    tag: 'img',
                    overflow: 'visible',
                    id: 'burn',
                    display: 'none',
                    rect: ['0px', '0px', '103', '131', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/burn.png']
                },
                {
                    type: 'image',
                    overflow: 'hidden',
                    id: 'burn2',
                    rect: ['0px', '0px', '103px', '131px', 'auto', 'auto'],
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/burn2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    overflow: 'visible',
                    id: 'burn3',
                    rect: ['0px', '0px', '103px', '131px', 'auto', 'auto'],
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/burn3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_burn3}": [
                ["style", "display", 'block'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${symbolSelector}": [
                ["style", "height", '131px'],
                ["style", "width", '103px']
            ],
            "${_burn2}": [
                ["style", "display", 'block'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'hidden']
            ],
            "${_burn}": [
                ["style", "display", 'none'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: true,
            timeline: [
                { id: "eid94", tween: [ "style", "${_burn2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_burn2}", "display", 'block', { fromValue: 'none'}], position: 67, duration: 0 },
                { id: "eid99", tween: [ "style", "${_burn2}", "display", 'none', { fromValue: 'block'}], position: 200, duration: 0 },
                { id: "eid102", tween: [ "style", "${_burn2}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0 },
                { id: "eid104", tween: [ "style", "${_burn2}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0 },
                { id: "eid93", tween: [ "style", "${_burn3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_burn3}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid100", tween: [ "style", "${_burn3}", "display", 'none', { fromValue: 'block'}], position: 267, duration: 0 },
                { id: "eid103", tween: [ "style", "${_burn3}", "display", 'none', { fromValue: 'none'}], position: 400, duration: 0 },
                { id: "eid95", tween: [ "style", "${_burn}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_burn}", "display", 'none', { fromValue: 'block'}], position: 67, duration: 0 },
                { id: "eid101", tween: [ "style", "${_burn}", "display", 'block', { fromValue: 'none'}], position: 400, duration: 0 }            ]
        }
    }
},
"driveBelt_bottom_movie": {
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
                    id: 'driveBelt_bottom',
                    type: 'image',
                    rect: ['0px', '0px', '74px', '114px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt_bottom.png', '0px', '0px']
                },
                {
                    id: 'driveBelt_bottom_line',
                    type: 'image',
                    rect: ['-36px', '-5px', '108px', '166px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt_bottom_line.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_driveBelt_bottom_line}": [
                ["style", "left", '-34px'],
                ["style", "top", '-5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '114px'],
                ["style", "width", '74px']
            ],
            "${_driveBelt_bottom}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 467,
            autoPlay: true,
            timeline: [
                { id: "eid136", tween: [ "style", "${_driveBelt_bottom_line}", "top", '-52px', { fromValue: '-5px'}], position: 0, duration: 467 },
                { id: "eid135", tween: [ "style", "${_driveBelt_bottom_line}", "left", '-6px', { fromValue: '-34px'}], position: 0, duration: 467 }            ]
        }
    }
},
"spark01": {
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
                    id: 'spark',
                    type: 'image',
                    rect: ['18px', '0px', '31px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spark.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '49px']
            ],
            "${_spark}": [
                ["style", "top", '0px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '18px'],
                ["style", "width", '31px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2134,
            autoPlay: true,
            labels: {
                "step1": 0,
                "step2": 533,
                "step3": 1066,
                "step4": 1600
            },
            timeline: [
                { id: "eid252", tween: [ "style", "${_spark}", "left", '0px', { fromValue: '18px'}], position: 1133, duration: 100 },
                { id: "eid251", tween: [ "style", "${_spark}", "height", '47px', { fromValue: '30px'}], position: 1133, duration: 100 },
                { id: "eid250", tween: [ "style", "${_spark}", "opacity", '1', { fromValue: '0'}], position: 1067, duration: 67 },
                { id: "eid254", tween: [ "style", "${_spark}", "opacity", '0', { fromValue: '1'}], position: 1234, duration: 66 },
                { id: "eid253", tween: [ "style", "${_spark}", "width", '49px', { fromValue: '31px'}], position: 1133, duration: 100 }            ]
        }
    }
},
"spark": {
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
                    id: 'spark01',
                    type: 'rect',
                    rect: ['-7px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'spark02',
                    type: 'rect',
                    rect: ['-7px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'spark03',
                    type: 'rect',
                    rect: ['-7px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'spark04',
                    type: 'rect',
                    rect: ['-7px', '5px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'spark02',
                symbolName: 'spark01',
                autoPlay: {

               }
            },
            {
                id: 'spark01',
                symbolName: 'spark01',
                autoPlay: {

               }
            },
            {
                id: 'spark04',
                symbolName: 'spark01',
                autoPlay: {

               }
            },
            {
                id: 'spark03',
                symbolName: 'spark01',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_spark03}": [
                ["style", "left", '66px'],
                ["style", "top", '34px']
            ],
            "${_spark04}": [
                ["style", "left", '109px'],
                ["style", "top", '51px']
            ],
            "${_spark01}": [
                ["style", "left", '-19px'],
                ["style", "top", '1px']
            ],
            "${_spark02}": [
                ["style", "left", '24px'],
                ["style", "top", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2134,
            autoPlay: true,
            timeline: [
                { id: "eid349", tween: [ "style", "${_spark04}", "left", '109px', { fromValue: '109px'}], position: 1133, duration: 0 },
                { id: "eid333", tween: [ "style", "${_spark01}", "left", '-19px', { fromValue: '-19px'}], position: 1100, duration: 0 },
                { id: "eid332", tween: [ "style", "${_spark01}", "top", '1px', { fromValue: '1px'}], position: 1100, duration: 0 },
                { id: "eid354", tween: [ "style", "${_spark02}", "left", '21px', { fromValue: '24px'}], position: 1100, duration: 33 },
                { id: "eid351", tween: [ "style", "${_spark04}", "top", '51px', { fromValue: '51px'}], position: 1133, duration: 0 },
                { id: "eid336", tween: [ "style", "${_spark02}", "top", '16px', { fromValue: '16px'}], position: 1100, duration: 0 },
                { id: "eid353", tween: [ "style", "${_spark03}", "left", '66px', { fromValue: '66px'}], position: 1133, duration: 0 },
                { id: "eid352", tween: [ "style", "${_spark03}", "top", '34px', { fromValue: '34px'}], position: 1133, duration: 0 }            ]
        }
    }
},
"pump_mov": {
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
                    id: 'pump',
                    type: 'image',
                    rect: ['0px', '0px', '35px', '54px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pump.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pump}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '35px']
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
                { id: "eid267", tween: [ "style", "${_pump}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 457 },
                { id: "eid268", tween: [ "style", "${_pump}", "opacity", '1', { fromValue: '0.000000'}], position: 457, duration: 543 }            ]
        }
    }
},
"pu_mov": {
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
                    id: 'pump',
                    type: 'image',
                    rect: ['0px', '0px', '163px', '176px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pump.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pump}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '176px'],
                ["style", "width", '163px']
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
                { id: "eid355", tween: [ "style", "${_pump}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid356", tween: [ "style", "${_pump}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"one_mov01": {
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
                    rect: ['0px', '0px', '13px', '12px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["motion", "location", '6.5px 6px']
            ],
            "${symbolSelector}": [
                ["style", "height", '12px'],
                ["style", "width", '13px']
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
                { id: "eid357", tween: [ "motion", "${_Ellipse}", [[6.5, 6, 0, 0],[-314.21, 135.42, -14.25, 5.75, -36.51, 13.9],[-325, 150.98, 0.18, 26.05, 1.49, 24.47],[-325.81, 359.22, -1.15, 17.47, -0.72, 161.88],[-329.54, 373.01, -32.54, 21.49, -9.96, 6.58],[-395.1, 408.4, 0, 0]]], position: 0, duration: 1000 }            ]
        }
    }
},
"onw_mov02": {
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
                    rect: ['0px', '0px', '13px', '12px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse2}": [
                ["motion", "location", '6.5px 6px']
            ],
            "${symbolSelector}": [
                ["style", "height", '12px'],
                ["style", "width", '13px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid358", tween: [ "motion", "${_Ellipse2}", [[6.5, 6, 0, 0],[-41.11, 31.39, -9.72, 5.18, -52.71, 28.11],[-45.6, 20.31, -0.54, -20.53, -0.55, -20.95],[-45.53, -114.63, 36.65, -21.54, 0.23, -113.16],[44.94, -167.16, 0.3, -48.59, 77.92, -45.55],[44.6, -272.63, -34.97, -14.56, -0.48, -90.47],[-1.5, -292.99, 0, 0]]], position: 0, duration: 3000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-8934384");
