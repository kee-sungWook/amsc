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
                id: 'Timing',
                type: 'rect',
                rect: ['957', '489','auto','auto','auto', 'auto']
            },
            {
                id: 'guideLine',
                type: 'image',
                rect: ['907px', '837px','190px','131px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"guideLine.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['570px', '917px','auto','auto','auto', 'auto'],
                text: "크랭크축",
                font: ['Arial, Helvetica, sans-serif', 80, "rgba(0,75,141,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [
            {
                id: 'Engine',
                symbolName: 'Engine',
                autoPlay: {

                }
            },
            {
                id: 'Timing',
                symbolName: 'Timing',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_guideLine}": [
                ["style", "left", '907px'],
                ["style", "top", '837px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(0,75,141,1.00)'],
                ["style", "top", '917px'],
                ["style", "left", '570px'],
                ["style", "font-size", '80px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_Engine}": [
                ["style", "top", '197px'],
                ["transform", "scaleY", '1.16304'],
                ["style", "left", '778px'],
                ["transform", "scaleX", '1.16304']
            ],
            "${_Timing}": [
                ["style", "top", '472px'],
                ["transform", "scaleY", '1.16304'],
                ["style", "left", '1423px'],
                ["transform", "scaleX", '1.16304']
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
                { id: "eid164", tween: [ "transform", "${_Timing}", "scaleX", '1.16304', { fromValue: '1.16304'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Timing}", "left", '1423px', { fromValue: '1423px'}], position: 0, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Engine}", "top", '197px', { fromValue: '197px'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "transform", "${_Engine}", "scaleY", '1.16304', { fromValue: '1.16304'}], position: 0, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Stage}", "width", '2400px', { fromValue: '2400px'}], position: 0, duration: 0 },
                { id: "eid165", tween: [ "transform", "${_Timing}", "scaleY", '1.16304', { fromValue: '1.16304'}], position: 0, duration: 0 },
                { id: "eid169", tween: [ "style", "${_Timing}", "top", '472px', { fromValue: '472px'}], position: 0, duration: 0 },
                { id: "eid170", tween: [ "style", "${_Engine}", "left", '778px', { fromValue: '778px'}], position: 0, duration: 0 },
                { id: "eid166", tween: [ "transform", "${_Engine}", "scaleX", '1.16304', { fromValue: '1.16304'}], position: 0, duration: 0 }            ]
        }
    }
},
"Timing": {
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
                    id: 'timing_back',
                    tag: 'img',
                    rect: ['0px', '0px', '312', '634', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timing_back.png']
                },
                {
                    type: 'image',
                    id: 'timing_belt3',
                    tag: 'img',
                    rect: ['74px', '318px', '127', '147', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timing_belt3.png']
                },
                {
                    id: 'timing_belt_3_line_movie',
                    type: 'rect',
                    rect: ['56', '334', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'timing_belt2_movie',
                    type: 'rect',
                    rect: ['195', '97', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'timing_gear',
                    tag: 'img',
                    rect: ['101px', '392px', '50', '74', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timing_gear.png']
                },
                {
                    type: 'image',
                    id: 'timings',
                    tag: 'img',
                    rect: ['13px', '41px', '231', '444', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timings.png']
                },
                {
                    type: 'image',
                    id: 'timing_belt1',
                    tag: 'img',
                    rect: ['10px', '38px', '218', '491', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timing_belt1.png']
                },
                {
                    id: 'timing_belt1_line_movie',
                    type: 'rect',
                    rect: ['195', '29', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'timing_belt1Cap',
                    tag: 'img',
                    rect: ['3px', '4px', '253', '522', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timing_belt1Cap.png']
                },
                {
                    id: 'blackOval_movie3',
                    type: 'rect',
                    rect: ['137px', '398px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'driveBelt_bottom_movie',
                    type: 'rect',
                    rect: ['196', '368', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'driveBelt_gears_btm',
                    tag: 'img',
                    rect: ['55px', '285px', '241', '331', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_btm.png']
                },
                {
                    type: 'image',
                    id: 'driveBelt_top',
                    tag: 'img',
                    rect: ['55px', '285px', '241', '332', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt_top.png']
                },
                {
                    id: 'driveBelt_moving',
                    type: 'rect',
                    rect: ['269', '276', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'driveBelt_topCap',
                    tag: 'img',
                    rect: ['56px', '286px', '239', '329', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt_topCap.png']
                },
                {
                    type: 'image',
                    id: 'driveBelt_gears_top2',
                    tag: 'img',
                    rect: ['70px', '292px', '232', '330', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_top2.png']
                },
                {
                    id: 'blackOval_movie4',
                    type: 'rect',
                    rect: ['183', '466', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'driveBelt_gears_top',
                    tag: 'img',
                    rect: ['46px', '275px', '263', '356', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/driveBelt_gears_top.png']
                },
                {
                    id: 'blackOval_movie1_1',
                    type: 'rect',
                    rect: ['68', '179', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'blackOval_movie1_2',
                    type: 'rect',
                    rect: ['171px', '95px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'tention_bearing',
                    tag: 'img',
                    rect: ['145px', '258px', '87', '93', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tention_bearing.png']
                },
                {
                    id: 'blackOval_movie2',
                    type: 'rect',
                    rect: ['214', '279', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'blackOval_movie2',
                symbolName: 'blackOval_movie2',
                autoPlay: {

               }
            },
            {
                id: 'driveBelt_bottom_movie',
                symbolName: 'driveBelt_bottom_movie',
                autoPlay: {

               }
            },
            {
                id: 'blackOval_movie3',
                symbolName: 'blackOval_movie3',
                autoPlay: {

               }
            },
            {
                id: 'driveBelt_moving',
                symbolName: 'driveBelt_moving',
                autoPlay: {

               }
            },
            {
                id: 'timing_belt2_movie',
                symbolName: 'timing_belt2_movie',
                autoPlay: {

               }
            },
            {
                id: 'timing_belt1_line_movie',
                symbolName: 'timing_belt1_line_movie',
                autoPlay: {

               }
            },
            {
                id: 'blackOval_movie1_1',
                symbolName: 'blackOval_movie1_1',
                autoPlay: {

               }
            },
            {
                id: 'timing_belt_3_line_movie',
                symbolName: 'timing_belt_3_line_movie',
                autoPlay: {

               }
            },
            {
                id: 'blackOval_movie1_2',
                symbolName: 'blackOval_movie1_1',
                autoPlay: {

               }
            },
            {
                id: 'blackOval_movie4',
                symbolName: 'blackOval_movie4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_driveBelt_gears_top}": [
                ["style", "left", '46px'],
                ["style", "top", '275px']
            ],
            "${_driveBelt_gears_top2}": [
                ["style", "left", '70px'],
                ["style", "top", '292px']
            ],
            "${_tention_bearing}": [
                ["style", "left", '145px'],
                ["style", "top", '258px']
            ],
            "${_driveBelt_top}": [
                ["style", "left", '55px'],
                ["style", "top", '285px']
            ],
            "${_driveBelt_gears_btm}": [
                ["style", "left", '55px'],
                ["style", "top", '285px']
            ],
            "${_timing_belt1}": [
                ["style", "left", '10px'],
                ["style", "top", '38px']
            ],
            "${_driveBelt_topCap}": [
                ["style", "left", '56px'],
                ["style", "top", '286px']
            ],
            "${_blackOval_movie3}": [
                ["style", "top", '398px'],
                ["style", "left", '137px']
            ],
            "${_blackOval_movie1_2}": [
                ["style", "left", '171px'],
                ["style", "top", '95px']
            ],
            "${_timing_gear}": [
                ["style", "left", '101px'],
                ["style", "top", '392px']
            ],
            "${symbolSelector}": [
                ["style", "height", '634px'],
                ["style", "width", '312px']
            ],
            "${_timings}": [
                ["style", "left", '13px'],
                ["style", "top", '41px']
            ],
            "${_timing_back}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_timing_belt3}": [
                ["style", "left", '74px'],
                ["style", "top", '318px']
            ],
            "${_timing_belt1Cap}": [
                ["style", "left", '3px'],
                ["style", "top", '4px']
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
            ]
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
                    rect: ['0px', '-63px', '877px', '946px', 'auto', 'auto'],
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
                ["style", "top", '-63px'],
                ["style", "height", '946px'],
                ["style", "left", '0px'],
                ["style", "width", '877px']
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
"timing_belt_3_line_movie": {
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
                    id: 'timing_belt3_line',
                    tag: 'img',
                    rect: ['0px', '0px', '132', '146', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timing_belt3_line.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_timing_belt3_line}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '146px'],
                ["style", "width", '132px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 167,
            autoPlay: true,
            timeline: [
                { id: "eid38", tween: [ "style", "${_timing_belt3_line}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 167 },
                { id: "eid37", tween: [ "style", "${_timing_belt3_line}", "top", '-11px', { fromValue: '0px'}], position: 0, duration: 167 }            ]
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
"timing_belt1_line_movie": {
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
                    id: 'timing_belt1_mover',
                    rect: ['0px', '0px', '36', '19', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/timing_belt1_mover.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_timing_belt1_mover}": [
                ["style", "top", '29px'],
                ["style", "left", '195px'],
                ["motion", "location", '18px 9.5px']
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
                { id: "eid40", tween: [ "motion", "${_timing_belt1_mover}", [[18, 9.5, 0, 0],[-77.73, 80.12, -36.07, 26.61, -107.58, 79.36],[-159.33, 276.29, 12.87, 46.72, 104.22, 378.46],[-108, 487.5, 0, 0]]], position: 0, duration: 767 }            ]
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
                    rect: ['40', '41px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    transform: [[0, 0], [], [], ['1', '0.39313']],
                    id: 'burnMovie',
                    type: 'rect'
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
"timing_belt2_movie": {
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
                    id: 'timing_belt2',
                    type: 'image',
                    rect: ['0px', '0px', '48px', '192px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timing_belt2.png', '0px', '0px']
                },
                {
                    id: 'timing_belt2_line',
                    type: 'image',
                    rect: ['-3px', '25px', '47px', '187px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timing_belt2_line.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_timing_belt2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_timing_belt2_line}": [
                ["style", "left", '-3px'],
                ["style", "top", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '192px'],
                ["style", "width", '48px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid137", tween: [ "style", "${_timing_belt2_line}", "left", '1px', { fromValue: '-3px'}], position: 0, duration: 500 },
                { id: "eid138", tween: [ "style", "${_timing_belt2_line}", "top", '-10px', { fromValue: '25px'}], position: 0, duration: 500 }            ]
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
