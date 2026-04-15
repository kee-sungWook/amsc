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
                id: 'eng',
                type: 'image',
                tag: 'img',
                rect: ['674', '345','615','666','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eng.png"]
            },
            {
                id: 'airduct',
                type: 'image',
                tag: 'img',
                rect: ['179', '135','426','440','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"airduct.png"]
            },
            {
                id: 'LINE1_IN',
                type: 'rect',
                rect: ['1078', '752','auto','auto','auto', 'auto']
            },
            {
                id: 'line1',
                type: 'image',
                tag: 'img',
                rect: ['1070', '733','167','329','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line1.png"]
            },
            {
                id: 'LINE2_IN',
                type: 'rect',
                rect: ['400', '465','auto','auto','auto', 'auto']
            },
            {
                id: 'line2',
                type: 'image',
                tag: 'img',
                rect: ['389', '454','787','385','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line2.png"]
            },
            {
                id: 'LINE3_IN',
                type: 'rect',
                rect: ['399', '405','auto','auto','auto', 'auto']
            },
            {
                id: 'line3',
                type: 'image',
                tag: 'img',
                rect: ['388', '394','345','105','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line3.png"]
            },
            {
                id: 'LINE4_IN',
                type: 'rect',
                rect: ['1267', '523','auto','auto','auto', 'auto']
            },
            {
                id: 'line4',
                type: 'image',
                tag: 'img',
                rect: ['1210', '511','254','112','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line4.png"]
            },
            {
                id: 'radiator_back',
                type: 'image',
                tag: 'img',
                rect: ['1251', '608','250','459','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator_back.png"]
            },
            {
                id: 'pipe',
                type: 'image',
                tag: 'img',
                rect: ['1277', '662','179','317','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pipe.png"]
            },
            {
                id: 'liquide_mid_50pct',
                type: 'image',
                tag: 'img',
                rect: ['1248', '622','253','443','auto', 'auto'],
                opacity: 0.5,
                fill: ["rgba(0,0,0,0)",im+"liquide_mid_50pct.png"]
            },
            {
                id: 'liquide_top_90pct',
                type: 'image',
                tag: 'img',
                rect: ['1253px', '606px','247','236','auto', 'auto'],
                opacity: 0.9,
                fill: ["rgba(0,0,0,0)",im+"liquide_top_90pct.png"]
            },
            {
                id: 'radiator_top',
                type: 'image',
                tag: 'img',
                rect: ['1172', '571','341','524','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator_top.png"]
            },
            {
                id: 'guideLine',
                type: 'image',
                tag: 'img',
                rect: ['494', '321','1032','683','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"guideLine.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['381', '672','244','66','auto', 'auto'],
                text: "냉각라인",
                align: "auto",
                font: ['굴림', 60, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['1126', '247','244','66','auto', 'auto'],
                text: "서모스탯",
                align: "auto",
                font: ['굴림', 60, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt3',
                type: 'text',
                rect: ['574', '953','244','66','auto', 'auto'],
                text: "워터펌프",
                align: "auto",
                font: ['굴림', 60, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt4',
                type: 'text',
                rect: ['1538', '941','184','66','auto', 'auto'],
                text: "냉각수",
                align: "auto",
                font: ['굴림', 60, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'LINE2_IN',
                symbolName: 'LINE2_IN'
            },
            {
                id: 'LINE4_IN',
                symbolName: 'LINE4_IN'
            },
            {
                id: 'LINE1_IN',
                symbolName: 'LINE1_IN'
            },
            {
                id: 'LINE3_IN',
                symbolName: 'LINE3_IN'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_liquide_top_90pct}": [
                ["style", "top", '606px'],
                ["style", "opacity", '0.9']
            ],
            "${_liquide_mid_50pct}": [
                ["style", "opacity", '0.5']
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
"LINE1_IN": {
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
                    rect: ['0px', '0px', '130', '284', 'auto', 'auto'],
                    id: 'line1_in',
                    fill: ['rgba(0,0,0,0)', 'images/line1_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'FLOW_SRC',
                    type: 'rect',
                    autoOrient: 'true',
                    rect: ['123px', '262px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC',
                symbolName: 'FLOW_SRC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC}": [
                ["motion", "location", '139.25px 279.5px'],
                ["transform", "rotateZ", '-62deg']
            ],
            "${_line1_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '284px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '130px']
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
                { id: "eid22", tween: [ "motion", "${_FLOW_SRC}", [[139.25, 279.5, 0, 0],[28.19, 224.01, -21.46, -9.52, -111.68, -49.54],[14.94, 196.85, -0.35, -50.35, -0.27, -39.33],[14.61, 137.1, -0.45, -92.14, -0.31, -64.61],[14.25, 57.47, -0.23, -50.6, -0.25, -53.95],[29.74, 30.15, 11.3, -8.18, 36.71, -26.55],[75.75, -2.5, 0, 0]]], position: 0, duration: 767 },
                { id: "eid24", tween: [ "transform", "${_FLOW_SRC}", "rotateZ", '-62deg', { fromValue: '-62deg'}], position: 0, duration: 0 }            ]
        }
    }
},
"LINE2_IN": {
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
                    rect: ['0px', '0px', '765', '364', 'auto', 'auto'],
                    id: 'line2_in',
                    fill: ['rgba(0,0,0,0)', 'images/line2_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['743px', '305px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'FLOW_SRC4',
                    transform: [[], [], [], ['1', '0.91666']],
                    autoOrient: 'true',
                    type: 'rect'
                },
                {
                    rect: ['743px', '305px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'FLOW_SRC4Copy',
                    transform: [[], [], [], ['1', '0.91666']],
                    autoOrient: 'true',
                    type: 'rect'
                },
                {
                    rect: ['743px', '305px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'FLOW_SRC4Copy2',
                    transform: [[], [], [], ['1', '0.91666']],
                    autoOrient: 'true',
                    type: 'rect'
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC4',
                symbolName: 'FLOW_SRC',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_SRC4Copy',
                symbolName: 'FLOW_SRC',
                autoPlay: {

               }
            },
            {
                id: 'FLOW_SRC4Copy2',
                symbolName: 'FLOW_SRC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC4Copy2}": [
                ["transform", "scaleX", '0.96507'],
                ["motion", "location", '245.59px 84.75px'],
                ["transform", "scaleY", '0.91666'],
                ["transform", "rotateZ", '-60deg']
            ],
            "${_line2_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '364px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '765px']
            ],
            "${_FLOW_SRC4}": [
                ["transform", "scaleY", '0.91666'],
                ["transform", "rotateZ", '28deg'],
                ["transform", "scaleX", '0.96507'],
                ["motion", "location", '759px 323px']
            ],
            "${_FLOW_SRC4Copy}": [
                ["transform", "scaleX", '0.96507'],
                ["motion", "location", '502.42px 235.07px'],
                ["transform", "scaleY", '0.91666'],
                ["transform", "rotateZ", '-50deg']
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
                { id: "eid81", tween: [ "transform", "${_FLOW_SRC4}", "rotateZ", '28deg', { fromValue: '28deg'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "transform", "${_FLOW_SRC4Copy2}", "rotateZ", '-60deg', { fromValue: '-60deg'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "motion", "${_FLOW_SRC4}", [[759, 323, 0, 0],[747.39, 343.2, -2.25, 2.51, -7.95, 8.84],[729.57, 348.81, -77.27, -41.07, -38.94, -20.7],[509.49, 241.57, -0.9, -0.47, -17.46, -9.21],[502.42, 235.07, -12.17, -11.49]]], position: 0, duration: 767 },
                { id: "eid93", tween: [ "motion", "${_FLOW_SRC4Copy2}", [[245.59, 84.75, -144.54, -73.07],[156.65, 39.63, -47.54, -25.8, -8.06, -4.38],[128, 37.38, -13.67, 4.29, -20.12, 6.31],[98.84, 54.55, -3.09, 1.67, -24.61, 13.28],[71.95, 56.99, -12.54, -8.52, -38.04, -25.85],[29.68, 33.17, -54.02, -32.35, -7.87, -4.71],[26.36, 14.87, 37.18, -19, 39.41, -20.14],[50.5, -0.41, 0, 0]]], position: 0, duration: 767 },
                { id: "eid98", tween: [ "transform", "${_FLOW_SRC4Copy}", "rotateZ", '-50deg', { fromValue: '-50deg'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "motion", "${_FLOW_SRC4Copy}", [[502.42, 235.07, -43.54, -41.13],[455.66, 190.51, -36.76, -17.74, -1.44, -0.69],[245.59, 84.75, -251, -126.89]]], position: 0, duration: 767 }            ]
        }
    }
},
"LINE3_IN": {
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
                    rect: ['0px', '0px', '275', '82', 'auto', 'auto'],
                    id: 'line3_in',
                    fill: ['rgba(0,0,0,0)', 'images/line3_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'FLOW_SRC3',
                    type: 'rect',
                    autoOrient: 'true',
                    rect: ['29px', '-4px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'FLOW_SRC3Copy2',
                    type: 'rect',
                    autoOrient: 'true',
                    rect: ['29px', '-4px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC3Copy2',
                symbolName: 'FLOW_SRC'
            },
            {
                id: 'FLOW_SRC3',
                symbolName: 'FLOW_SRC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_FLOW_SRC3}": [
                ["transform", "scaleY", '0.2539'],
                ["transform", "rotateZ", '60deg'],
                ["transform", "scaleX", '0.72891'],
                ["motion", "location", '44.75px 13.75px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '275px']
            ],
            "${_line3_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_FLOW_SRC3Copy2}": [
                ["transform", "scaleX", '0.72891'],
                ["motion", "location", '44.75px 13.75px'],
                ["transform", "scaleY", '0.2539'],
                ["transform", "rotateZ", '60deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 967,
            autoPlay: true,
            timeline: [
                { id: "eid75", tween: [ "motion", "${_FLOW_SRC3Copy2}", [[44.75, 13.75, 0, 0],[21.15, 27.57, -27.29, 15.62, -8.33, 4.77],[25.57, 40.13, 17.54, 14.64, 14.02, 11.71],[70.88, 64.58, 21.09, 16.76, 11.96, 9.5],[98, 64.14, 9.71, -5.2, 32.15, -17.23],[185.71, 16.3, 41.98, -21.64, 122.2, -62.99],[214.6, 15.96, 20.02, 8.38, 19.17, 8.02],[282.86, 50.6, 0, 0]]], position: 200, duration: 767 },
                { id: "eid68", tween: [ "motion", "${_FLOW_SRC3}", [[44.75, 13.75, 0, 0],[21.15, 27.57, -27.29, 15.62, -8.33, 4.77],[25.57, 40.13, 17.54, 14.64, 14.02, 11.71],[70.88, 64.58, 21.09, 16.76, 11.96, 9.5],[98, 64.14, 9.71, -5.2, 32.15, -17.23],[185.71, 16.3, 41.98, -21.64, 122.2, -62.99],[214.6, 15.96, 20.02, 8.38, 19.17, 8.02],[282.86, 50.6, 0, 0]]], position: 0, duration: 767 },
                { id: "eid76", tween: [ "transform", "${_FLOW_SRC3Copy2}", "scaleY", '0.68419', { fromValue: '0.2539'}], position: 200, duration: 67 },
                { id: "eid74", tween: [ "transform", "${_FLOW_SRC3}", "scaleY", '0.68419', { fromValue: '0.2539'}], position: 0, duration: 67 },
                { id: "eid70", tween: [ "transform", "${_FLOW_SRC3}", "rotateZ", '60deg', { fromValue: '60deg'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "transform", "${_FLOW_SRC3Copy2}", "rotateZ", '60deg', { fromValue: '60deg'}], position: 200, duration: 0 }            ]
        }
    }
},
"LINE4_IN": {
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
                    rect: ['0px', '0px', '151', '66', 'auto', 'auto'],
                    id: 'line4_in',
                    fill: ['rgba(0,0,0,0)', 'images/line4_in.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'FLOW_SRC2',
                    type: 'rect',
                    autoOrient: 'true',
                    rect: ['-23px', '47px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_SRC2',
                symbolName: 'FLOW_SRC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_line4_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_FLOW_SRC2}": [
                ["motion", "location", '-7px 65px'],
                ["transform", "scaleY", '0.78433'],
                ["transform", "rotateZ", '57deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '66px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '151px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 667,
            autoPlay: true,
            timeline: [
                { id: "eid31", tween: [ "transform", "${_FLOW_SRC2}", "rotateZ", '57deg', { fromValue: '57deg'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "motion", "${_FLOW_SRC2}", [[-7, 65, 0, 0],[63.15, 18.9, 27.78, -17.99, 121.33, -78.59],[90, 17.71, 92.41, 53.58, 47.68, 27.64],[160.2, 58.91, 0, 0]]], position: 0, duration: 667 }            ]
        }
    }
},
"FLOW_SRC": {
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
                    rect: ['0px', '0px', '32px', '36px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.80)', 50], ['rgba(255,255,255,0.00)', 100]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.80)',50],['rgba(255,255,255,0.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '32px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '32px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
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
})(jQuery, AdobeEdge, "EDGE-19734490");
