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
                id: 'car_bg',
                type: 'image',
                rect: ['175px', '43px','1336px','973px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car_bg.png",'0px','0px']
            },
            {
                id: 'Engine',
                type: 'rect',
                rect: ['176', '106','auto','auto','auto', 'auto']
            },
            {
                id: 'bg2',
                type: 'image',
                rect: ['552px', '214px','783px','486px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'spark_all',
                type: 'rect',
                rect: ['543px', '446px','auto','auto','auto', 'auto']
            },
            {
                id: 'one_mov01',
                type: 'rect',
                rect: ['1322px', '214px','auto','auto','auto', 'auto']
            },
            {
                id: 'bg02',
                type: 'image',
                rect: ['962px', '411px','71px','119px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg02.png",'0px','0px']
            },
            {
                id: 'line01',
                type: 'image',
                rect: ['1005px', '416px','168px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line01.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['223px', '145px','168px','32px','auto', 'auto'],
                text: "인젝터",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['1175px', '399px','168px','32px','auto', 'auto'],
                text: "연료필터",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['1210px', '799px','168px','32px','auto', 'auto'],
                text: "고압펌프",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'line022',
                type: 'image',
                rect: ['925px', '665px','274px','167px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line02.png",'0px','0px']
            },
            {
                id: 'line03',
                type: 'image',
                rect: ['378px', '157px','191px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line03.png",'0px','0px']
            }],
            symbolInstances: [
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
                id: 'one_mov01',
                symbolName: 'one_mov01',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_spark_all}": [
                ["style", "left", '543px'],
                ["style", "top", '446px']
            ],
            "${_one_mov01}": [
                ["style", "left", '1322px'],
                ["style", "top", '214px']
            ],
            "${_Engine}": [
                ["style", "top", '138px'],
                ["transform", "scaleX", '0.54573'],
                ["style", "left", '243px'],
                ["transform", "scaleY", '0.54573']
            ],
            "${_TextCopy2}": [
                ["style", "top", '399px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '40px'],
                ["style", "left", '1175px'],
                ["style", "width", '168px']
            ],
            "${_line01}": [
                ["style", "left", '1005px'],
                ["style", "top", '416px']
            ],
            "${_line03}": [
                ["style", "top", '157px'],
                ["style", "left", '378px']
            ],
            "${_TextCopy}": [
                ["style", "top", '799px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '40px'],
                ["style", "left", '1210px'],
                ["style", "width", '168px']
            ],
            "${_Text}": [
                ["style", "top", '145px'],
                ["style", "text-align", 'center'],
                ["style", "width", '168px'],
                ["style", "left", '223px'],
                ["style", "font-size", '40px']
            ],
            "${_car_bg}": [
                ["style", "left", '175px'],
                ["style", "top", '43px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_line022}": [
                ["style", "left", '925px'],
                ["style", "top", '665px']
            ],
            "${_bg2}": [
                ["style", "left", '552px'],
                ["style", "top", '214px']
            ],
            "${_bg02}": [
                ["style", "left", '962px'],
                ["style", "top", '411px']
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
                { id: "eid371", tween: [ "style", "${_Engine}", "top", '138px', { fromValue: '138px'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "transform", "${_Engine}", "scaleY", '0.54573', { fromValue: '0.54573'}], position: 0, duration: 0 },
                { id: "eid372", tween: [ "style", "${_Engine}", "left", '243px', { fromValue: '243px'}], position: 0, duration: 0 },
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
                    rect: ['0px', '0px', '686', '889', 'auto', 'auto'],
                    id: 'engineBody',
                    fill: ['rgba(0,0,0,0)', 'images/engineBody.png'],
                    type: 'image',
                    tag: 'img'
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
                    rect: ['142px', '146px', '544', '275', 'auto', 'auto'],
                    id: 'cam_back',
                    fill: ['rgba(0,0,0,0)', 'images/cam_back.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['551px', '322px', '133', '97', 'auto', 'auto'],
                    id: 'cam_front',
                    fill: ['rgba(0,0,0,0)', 'images/cam_front.png'],
                    type: 'image',
                    tag: 'img'
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
            "${_cam_front}": [
                ["style", "left", '551px'],
                ["style", "top", '322px']
            ],
            "${_EquipmentMover4}": [
                ["style", "left", '414px'],
                ["style", "top", '306px']
            ],
            "${_EquipmentMover3}": [
                ["style", "left", '330px'],
                ["style", "top", '270px']
            ],
            "${symbolSelector}": [
                ["style", "height", '889px'],
                ["style", "width", '690px']
            ],
            "${_engineBody}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_EquipmentMover2}": [
                ["style", "left", '249px'],
                ["style", "top", '235px']
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
                    type: 'image',
                    tag: 'img',
                    id: 'driveBelt_mover',
                    rect: ['-4px', '-2px', '36', '19', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt_mover.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_driveBelt_mover}": [
                ["motion", "location", '14px 7.5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '19px'],
                ["style", "width", '36px']
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
                    type: 'image',
                    id: 'blackOval',
                    tag: 'img',
                    rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blackOval.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '9px']
            ],
            "${_blackOval}": [
                ["motion", "location", '4.5px 6.5px']
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
                    type: 'image',
                    id: 'blackOvalCopy',
                    tag: 'img',
                    rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blackOval.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '9px']
            ],
            "${_blackOvalCopy}": [
                ["motion", "location", '4.5px 6.5px']
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
                    type: 'image',
                    id: 'blackOval',
                    tag: 'img',
                    rect: ['0px', '0px', '9', '13', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blackOval.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '9px']
            ],
            "${_blackOval}": [
                ["motion", "location", '4.5px 6.5px']
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
                    type: 'image',
                    id: 'blackOvalCopy',
                    tag: 'img',
                    rect: ['2px', '4px', '9', '13', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blackOval.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '9px']
            ],
            "${_blackOvalCopy}": [
                ["motion", "location", '6.5px 10.5px']
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
                    opacity: 1,
                    rect: ['-6px', '259px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['37px', '115px', '108', '228', 'auto', 'auto'],
                    id: 'piston',
                    fill: ['rgba(0,0,0,0)', 'images/piston.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['36px', '113px', '110', '235', 'auto', 'auto'],
                    id: 'cylinder',
                    fill: ['rgba(0,0,0,0)', 'images/cylinder.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    type: 'rect',
                    id: 'burnMovie',
                    rect: ['40', '41px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    transform: [[0, 0], [], [], ['1', '0.39313']]
                },
                {
                    rect: ['66px', '0px', '109', '149', 'auto', 'auto'],
                    id: 'exhaustValve',
                    fill: ['rgba(0,0,0,0)', 'images/exhaustValve.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '65px', '117', '113', 'auto', 'auto'],
                    id: 'intakeValve',
                    fill: ['rgba(0,0,0,0)', 'images/intakeValve.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'CrankMove_front',
                    type: 'rect',
                    opacity: 1,
                    rect: ['24px', '268px', 'auto', 'auto', 'auto', 'auto']
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
            "${_CrankMove_front}": [
                ["style", "top", '268px'],
                ["style", "opacity", '1'],
                ["style", "left", '24px']
            ],
            "${_intakeValve}": [
                ["style", "left", '-20px'],
                ["style", "top", '45px']
            ],
            "${_piston}": [
                ["style", "left", '37px'],
                ["style", "top", '115px']
            ],
            "${symbolSelector}": [
                ["style", "height", '394px'],
                ["style", "width", '175px']
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
            "${_exhaustValve}": [
                ["style", "left", '66px'],
                ["style", "top", '0px']
            ],
            "${_CrankMove_rear}": [
                ["style", "top", '259px'],
                ["style", "opacity", '1'],
                ["style", "left", '-6px']
            ],
            "${_cylinder}": [
                ["style", "left", '36px'],
                ["style", "top", '113px']
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '160px']
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
                    fill: ['rgba(0,0,0,0)', 'images/burn.png'],
                    overflow: 'visible',
                    id: 'burn',
                    rect: ['0px', '0px', '103', '131', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '103px', '131px', 'auto', 'auto'],
                    overflow: 'hidden',
                    id: 'burn2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/burn2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '103px', '131px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'burn3',
                    type: 'image',
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
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${_burn}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${_burn2}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "overflow", 'hidden']
            ],
            "${symbolSelector}": [
                ["style", "height", '131px'],
                ["style", "width", '103px']
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
            "${_driveBelt_bottom}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '114px'],
                ["style", "width", '74px']
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
            "${_spark}": [
                ["style", "top", '0px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '18px'],
                ["style", "width", '31px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '49px']
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
                { id: "eid250", tween: [ "style", "${_spark}", "opacity", '1', { fromValue: '0'}], position: 1067, duration: 67 },
                { id: "eid254", tween: [ "style", "${_spark}", "opacity", '0', { fromValue: '1'}], position: 1234, duration: 66 },
                { id: "eid251", tween: [ "style", "${_spark}", "height", '47px', { fromValue: '30px'}], position: 1133, duration: 100 },
                { id: "eid252", tween: [ "style", "${_spark}", "left", '0px', { fromValue: '18px'}], position: 1133, duration: 100 },
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
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '140px']
            ],
            "${_spark02}": [
                ["style", "left", '24px'],
                ["style", "top", '16px']
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
                { id: "eid352", tween: [ "style", "${_spark03}", "top", '34px', { fromValue: '34px'}], position: 1133, duration: 0 },
                { id: "eid353", tween: [ "style", "${_spark03}", "left", '66px', { fromValue: '66px'}], position: 1133, duration: 0 },
                { id: "eid336", tween: [ "style", "${_spark02}", "top", '16px', { fromValue: '16px'}], position: 1100, duration: 0 },
                { id: "eid354", tween: [ "style", "${_spark02}", "left", '21px', { fromValue: '24px'}], position: 1100, duration: 33 },
                { id: "eid351", tween: [ "style", "${_spark04}", "top", '51px', { fromValue: '51px'}], position: 1133, duration: 0 },
                { id: "eid332", tween: [ "style", "${_spark01}", "top", '1px', { fromValue: '1px'}], position: 1100, duration: 0 }            ]
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
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid357", tween: [ "motion", "${_Ellipse}", [[6.5, 6, 0, 0],[-314.21, 135.42, -14.25, 5.75, -36.51, 13.9],[-325, 150.98, 0.18, 26.05, 1.49, 24.47],[-325.81, 359.22, -1.15, 17.47, -0.72, 161.88],[-329.54, 373.01, -28.47, 18.8, -9.96, 6.58],[-537.9, 479.27, 0, 0, 0, 0],[-537.9, 334.78, 0, 0, 0, 0],[-447.84, 280.36, 0, 0, 0, 0],[-448.22, 176.24, -30.15, -17.32, -0.4, -110.23],[-495.9, 155, 0, 0]]], position: 0, duration: 2000 }            ]
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
            "${symbolSelector}": [
                ["style", "height", '12px'],
                ["style", "width", '13px']
            ],
            "${_Ellipse2}": [
                ["motion", "location", '6.5px 6px']
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
