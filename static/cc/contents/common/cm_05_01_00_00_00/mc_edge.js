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
                id: 'waterPump',
                type: 'image',
                tag: 'img',
                rect: ['497px', '575px','117px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"waterPump.png"]
            },
            {
                id: 'Timing',
                type: 'rect',
                rect: ['957', '489','auto','auto','auto', 'auto']
            },
            {
                id: 'bg02',
                type: 'image',
                rect: ['369px', '177px','1206px','713px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg02.png",'0px','0px']
            },
            {
                id: 'one_mov01',
                type: 'rect',
                rect: ['778', '673','auto','auto','auto', 'auto']
            },
            {
                id: 'one_mov02',
                type: 'rect',
                rect: ['1339', '524','auto','auto','auto', 'auto']
            },
            {
                id: 'one_moc03',
                type: 'rect',
                rect: ['659', '603','auto','auto','auto', 'auto']
            },
            {
                id: 'one_mov04',
                type: 'rect',
                rect: ['554', '507','auto','auto','auto', 'auto']
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['185px', '204px','161px','52px','auto', 'auto'],
                text: "인젝터",
                align: "center",
                font: ['굴림', 45, "rgba(0,75,141,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'txt2Copy',
                type: 'text',
                rect: ['649px', '369px','188px','52px','auto', 'auto'],
                text: "연료필터",
                align: "center",
                font: ['굴림', 45, "rgba(0,75,141,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'txt2Copy2',
                type: 'text',
                rect: ['1241px', '125px','188px','52px','auto', 'auto'],
                text: "연료펌프",
                align: "center",
                font: ['굴림', 45, "rgba(0,75,141,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'line',
                type: 'image',
                rect: ['258px', '191px','1091px','364px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line.png",'0px','0px']
            },
            {
                id: 'spark_all',
                type: 'rect',
                rect: ['355px', '493px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'one_moc03',
                symbolName: 'one_moc03',
                autoPlay: {

                }
            },
            {
                id: 'one_mov02',
                symbolName: 'one_mov02',
                autoPlay: {

                }
            },
            {
                id: 'one_mov01',
                symbolName: 'one_mov01',
                autoPlay: {

                }
            },
            {
                id: 'one_mov04',
                symbolName: 'one_mov04',
                autoPlay: {

                }
            },
            {
                id: 'spark_all',
                symbolName: 'spark',
                autoPlay: {

                }
            },
            {
                id: 'Timing',
                symbolName: 'Timing',
                autoPlay: {

                }
            },
            {
                id: 'Engine',
                symbolName: 'Engine',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_spark_all}": [
                ["style", "left", '355px'],
                ["style", "top", '493px']
            ],
            "${_one_mov02}": [
                ["style", "left", '1219px'],
                ["style", "top", '458px']
            ],
            "${_txt2}": [
                ["style", "line-height", '60px'],
                ["style", "width", '161px'],
                ["style", "text-align", 'center'],
                ["style", "height", '52px'],
                ["color", "color", 'rgba(0,75,141,1)'],
                ["style", "top", '204px'],
                ["style", "left", '185px'],
                ["style", "font-size", '45px']
            ],
            "${_Engine}": [
                ["transform", "scaleX", '0.54573'],
                ["style", "top", '246px'],
                ["transform", "scaleY", '0.54573'],
                ["style", "left", '-23px']
            ],
            "${_one_mov04}": [
                ["style", "left", '434px'],
                ["style", "top", '441px']
            ],
            "${_txt2Copy2}": [
                ["style", "line-height", '60px'],
                ["style", "width", '188px'],
                ["style", "text-align", 'center'],
                ["style", "height", '52px'],
                ["color", "color", 'rgba(0,75,141,1)'],
                ["style", "top", '125px'],
                ["style", "left", '1241px'],
                ["style", "font-size", '45px']
            ],
            "${_one_moc03}": [
                ["style", "left", '539px'],
                ["style", "top", '537px']
            ],
            "${_txt2Copy}": [
                ["style", "line-height", '60px'],
                ["style", "font-size", '45px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,75,141,1)'],
                ["style", "height", '52px'],
                ["style", "top", '369px'],
                ["style", "left", '649px'],
                ["style", "width", '188px']
            ],
            "${_line}": [
                ["style", "left", '258px'],
                ["style", "top", '191px']
            ],
            "${_one_mov01}": [
                ["style", "left", '658px'],
                ["style", "top", '607px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_waterPump}": [
                ["style", "top", '575px'],
                ["style", "height", '125px'],
                ["style", "left", '497px'],
                ["style", "width", '117px']
            ],
            "${_Timing}": [
                ["style", "top", '445px'],
                ["transform", "scaleY", '0.54573'],
                ["style", "left", '387px'],
                ["transform", "scaleX", '0.54573']
            ],
            "${_bg02}": [
                ["style", "left", '369px'],
                ["style", "top", '177px']
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
                { id: "eid195", tween: [ "transform", "${_Timing}", "scaleX", '0.54573', { fromValue: '0.54573'}], position: 0, duration: 0 },
                { id: "eid269", tween: [ "style", "${_Timing}", "left", '387px', { fromValue: '387px'}], position: 0, duration: 0 },
                { id: "eid268", tween: [ "style", "${_Engine}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "transform", "${_Engine}", "scaleY", '0.54573', { fromValue: '0.54573'}], position: 0, duration: 0 },
                { id: "eid278", tween: [ "style", "${_one_mov02}", "top", '458px', { fromValue: '458px'}], position: 0, duration: 0 },
                { id: "eid272", tween: [ "style", "${_one_moc03}", "top", '537px', { fromValue: '537px'}], position: 0, duration: 0 },
                { id: "eid276", tween: [ "style", "${_one_mov04}", "top", '441px', { fromValue: '441px'}], position: 0, duration: 0 },
                { id: "eid275", tween: [ "style", "${_one_mov04}", "left", '434px', { fromValue: '434px'}], position: 0, duration: 0 },
                { id: "eid271", tween: [ "style", "${_one_moc03}", "left", '539px', { fromValue: '539px'}], position: 0, duration: 0 },
                { id: "eid274", tween: [ "style", "${_one_mov01}", "top", '607px', { fromValue: '607px'}], position: 0, duration: 0 },
                { id: "eid273", tween: [ "style", "${_one_mov01}", "left", '658px', { fromValue: '658px'}], position: 0, duration: 0 },
                { id: "eid196", tween: [ "transform", "${_Timing}", "scaleY", '0.54573', { fromValue: '0.54573'}], position: 0, duration: 0 },
                { id: "eid270", tween: [ "style", "${_Timing}", "top", '445px', { fromValue: '445px'}], position: 0, duration: 0 },
                { id: "eid267", tween: [ "style", "${_Engine}", "left", '-23px', { fromValue: '-23px'}], position: 0, duration: 0 },
                { id: "eid199", tween: [ "transform", "${_Engine}", "scaleX", '0.54573', { fromValue: '0.54573'}], position: 0, duration: 0 },
                { id: "eid277", tween: [ "style", "${_one_mov02}", "left", '1219px', { fromValue: '1219px'}], position: 0, duration: 0 }            ]
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
            "${_driveBelt_topCap}": [
                ["style", "left", '56px'],
                ["style", "top", '286px']
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
            "${_timing_belt1Cap}": [
                ["style", "left", '3px'],
                ["style", "top", '4px']
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
            "${_driveBelt_gears_top}": [
                ["style", "left", '46px'],
                ["style", "top", '275px']
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
                    id: 'one_mov01_1',
                    type: 'rect',
                    rect: ['562', '-91', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'one_mov01_2',
                    type: 'rect',
                    rect: ['0', '5', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'one_mov01_2',
                symbolName: 'one_mov01_2',
                autoPlay: {

               }
            },
            {
                id: 'one_mov01_1',
                symbolName: 'one_mov01_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_one_mov01_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '10px']
            ],
            "${_one_mov01_2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            labels: {
                "a1": 0
            },
            timeline: [
                { id: "eid240", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_one_mov01_2}', [500] ], ""], position: 0 }            ]
        }
    }
},
"one_mov01_1": {
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
                    rect: ['593px', '-143px', '10px', '10px', 'auto', 'auto'],
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
                ["motion", "location", '598px -137.828125px'],
                ["style", "opacity", '1'],
                ["style", "height", '10px'],
                ["style", "width", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '10px']
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
                { id: "eid214", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 1911, duration: 89 },
                { id: "eid213", tween: [ "motion", "${_Ellipse}", [[598, -137.83, 0, 0],[658.77, -114.19, 26.48, 33.46, 48.9, 22.65],[665.99, -90.68, 0.49, 21.59, -0.68, 21.91],[664.65, 86.55, -0.07, 8.18, -1.23, 137.42],[658.83, 112.15, -8.09, 18.58, -10.28, 23.6],[638.33, 135.77, -24.63, 17.68, -30.27, 21.73],[330.04, 273.39, -7.3, 3.2, -155.14, 68.04],[304.91, 278.28, -31.45, -2.89, -32.61, -2.99],[29.46, 169.52, -15.03, -6.13, -160.93, -65.6],[6.63, 146.85, -10.53, -20.99, -18.73, -37.36],[5, 5.01, 0, 0]]], position: 0, duration: 1967 }            ]
        }
    }
},
"one_mov01_2": {
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
                    rect: ['593px', '-143px', '10px', '10px', 'auto', 'auto'],
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
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '598px -137.828125px'],
                ["style", "width", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '10px']
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
                { id: "eid214", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 1911, duration: 89 },
                { id: "eid213", tween: [ "motion", "${_Ellipse}", [[598, -137.83, 0, 0],[658.77, -114.19, 26.48, 33.46, 48.9, 22.65],[665.99, -90.68, 0.49, 21.59, -0.68, 21.91],[664.65, 86.55, -0.07, 8.18, -1.23, 137.42],[658.83, 112.15, -8.09, 18.58, -10.28, 23.6],[638.33, 135.77, -24.63, 17.68, -30.27, 21.73],[330.04, 273.39, -7.3, 3.2, -155.14, 68.04],[304.91, 278.28, -31.45, -2.89, -32.61, -2.99],[29.46, 169.52, -15.03, -6.13, -160.93, -65.6],[6.63, 146.85, -10.53, -20.99, -18.73, -37.36],[5, 5.01, 0, 0]]], position: 0, duration: 1967 }            ]
        }
    }
},
"one_mov02": {
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
                    rect: ['-719px', '8px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse3',
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
                ["style", "height", '10px'],
                ["style", "width", '10px']
            ],
            "${_Ellipse3}": [
                ["motion", "location", '-713.796875px 13.109375px'],
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid242", tween: [ "style", "${_Ellipse3}", "opacity", '0', { fromValue: '1'}], position: 1433, duration: 67 },
                { id: "eid241", tween: [ "motion", "${_Ellipse3}", [[-713.8, 13.11, 0, 0],[-658.79, 32.5, 28.83, -14.72, 85.86, 28.67],[-563.37, -19.89, 28.1, -20.74, 53.01, -27.64],[-562.73, -35.98, 0, 0, 0, 0],[-610.88, -52.37, -32.26, -14.48, -47.7, -17.67],[-601.91, -67.34, 62.49, -33.32, 6.85, -4.43],[-377.35, -191.35, 20.11, -10.87, 160.3, -88.89],[-348.28, -192.56, 28.28, 7.26, 45.63, 12.35],[-8.78, -84.54, 47.94, 11.07, 283.22, 90.66],[4.46, -62.44, 0, 0, 0, 0],[5, 5.01, 0, 0]]], position: 0, duration: 1500 }            ]
        }
    }
},
"one_moc03": {
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
                    rect: ['100px', '-14px', '9px', '9px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse4',
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
                ["style", "height", '9px'],
                ["style", "width", '9px']
            ],
            "${_Ellipse4}": [
                ["style", "height", '9px'],
                ["style", "opacity", '1'],
                ["motion", "location", '104.84375px -9.5px'],
                ["style", "width", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 567,
            autoPlay: true,
            timeline: [
                { id: "eid244", tween: [ "style", "${_Ellipse4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 67 },
                { id: "eid243", tween: [ "motion", "${_Ellipse4}", [[104.84, -9.5, 0, 0],[11.8, 34.91, -12.15, -0.47, -36.34, 16.33],[4.3, 28.55, -0.14, -30.6, -3.56, -12.06],[4.51, 4.5, 0, 0]]], position: 0, duration: 500 }            ]
        }
    }
},
"one_mov04": {
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
                    rect: ['-40px', '13px', '9px', '9px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse5',
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
                ["style", "height", '9px'],
                ["style", "width", '9px']
            ],
            "${_Ellipse5}": [
                ["motion", "location", '-35.5px 17.5px'],
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 567,
            autoPlay: true,
            timeline: [
                { id: "eid246", tween: [ "style", "${_Ellipse5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 67 },
                { id: "eid245", tween: [ "motion", "${_Ellipse5}", [[-35.5, 17.5, 0, 0],[-34.9, -1.23, 11.75, -7.74, 27.93, -29.8],[-20.34, -4.98, 18.27, 4.61, 16.6, 4.19],[0.9, 2.7, 0, 0]]], position: 0, duration: 500 },
                { id: "eid247", tween: [ "motion", "${_Ellipse5}", [[0.9, 2.7, 0, 0],[4.5, 4.5, 0, 0]]], position: 500, duration: 67 }            ]
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
                ["style", "left", '63px'],
                ["style", "top", '25px']
            ],
            "${_spark04}": [
                ["style", "left", '91px'],
                ["style", "top", '35px']
            ],
            "${_spark01}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '140px']
            ],
            "${_spark02}": [
                ["style", "left", '30px'],
                ["style", "top", '15px']
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
            ]
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
