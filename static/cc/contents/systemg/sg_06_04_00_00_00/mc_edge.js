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
                id: 'radiator',
                type: 'image',
                tag: 'img',
                rect: ['825', '76','372','352','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator.png"]
            },
            {
                id: 'condenser',
                type: 'image',
                tag: 'img',
                rect: ['1026', '101','208','289','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"condenser.png"]
            },
            {
                id: 'compresor',
                type: 'image',
                tag: 'img',
                rect: ['1036', '470','148','158','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"compresor.png"]
            },
            {
                id: 'blowerMotor',
                type: 'image',
                tag: 'img',
                rect: ['1133', '864','128','172','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blowerMotor.png"]
            },
            {
                id: 'heaterCore',
                type: 'image',
                tag: 'img',
                rect: ['692', '813','254','187','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"heaterCore.png"]
            },
            {
                id: 'select_heaterCore',
                type: 'image',
                tag: 'img',
                rect: ['692', '813','254','187','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"select_heaterCore.png"]
            },
            {
                id: 'KITA',
                type: 'image',
                tag: 'img',
                rect: ['61', '420','1308','643','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"KITA.png"]
            },
            {
                id: 'flowLine',
                type: 'image',
                tag: 'img',
                rect: ['1014', '139','337','657','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flowLine.png"]
            },
            {
                id: 'eva',
                type: 'image',
                tag: 'img',
                rect: ['939', '806','118','137','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eva.png"]
            },
            {
                id: 'fan',
                type: 'image',
                tag: 'img',
                rect: ['829', '132','246','252','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fan.png"]
            },
            {
                id: 'KITA2',
                type: 'image',
                tag: 'img',
                rect: ['273', '545','1068','608','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"KITA2.png"]
            },
            {
                id: 'flows1',
                type: 'rect',
                rect: ['1048', '782','auto','auto','auto', 'auto']
            },
            {
                id: 'flows2',
                type: 'rect',
                rect: ['1081', '599','auto','auto','auto', 'auto']
            },
            {
                id: 'extraThing1',
                display: 'none',
                type: 'image',
                rect: ['1220px', '357px','132px','67px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"extraThing1.png",'0px','0px']
            },
            {
                id: 'FLOW3',
                type: 'rect',
                rect: ['1224', '360','auto','auto','auto', 'auto']
            },
            {
                id: 'extraThing2',
                display: 'none',
                type: 'image',
                rect: ['1049px', '743px','44px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"extraThing2.png",'0px','0px']
            },
            {
                id: 'extraThing3',
                display: 'none',
                type: 'image',
                rect: ['1275px', '420px','69px','153px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"extraThing3.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'flows1',
                symbolName: 'flows1',
                autoPlay: {

                }
            },
            {
                id: 'FLOW3',
                symbolName: 'FLOW3',
                autoPlay: {

                }
            },
            {
                id: 'flows2',
                symbolName: 'flows2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_KITA}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_flows2}": [
                ["style", "opacity", '0']
            ],
            "${_heaterCore}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_extraThing3}": [
                ["style", "top", '420px'],
                ["style", "left", '1275px'],
                ["style", "display", 'none']
            ],
            "${_stage}": [
                ["style", "height", '1230px'],
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "width", '1430px']
            ],
            "${_flowLine}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_select_heaterCore}": [
                ["style", "opacity", '0']
            ],
            "${_blowerMotor}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_compresor}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_eva}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_extraThing2}": [
                ["style", "top", '743px'],
                ["style", "left", '1049px'],
                ["style", "display", 'none']
            ],
            "${_flows1}": [
                ["style", "opacity", '0']
            ],
            "${_FLOW3}": [
                ["style", "opacity", '0']
            ],
            "${_fan}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_KITA2}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.95']
            ],
            "${_extraThing1}": [
                ["style", "top", '357px'],
                ["style", "left", '1220px'],
                ["style", "display", 'none']
            ],
            "${_radiator}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ],
            "${_condenser}": [
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.05']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15629,
            autoPlay: true,
            timeline: [
                { id: "eid204", tween: [ "transform", "${_KITA}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 296 },
                { id: "eid220", tween: [ "transform", "${_KITA2}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 296 },
                { id: "eid288", tween: [ "style", "${_flows1}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 200 },
                { id: "eid271", tween: [ "style", "${_select_heaterCore}", "opacity", '1', { fromValue: '0.000000'}], position: 800, duration: 200 },
                { id: "eid252", tween: [ "style", "${_eva}", "opacity", '1', { fromValue: '0'}], position: 356, duration: 296 },
                { id: "eid202", tween: [ "transform", "${_fan}", "scaleY", '1', { fromValue: '1.05'}], position: 281, duration: 296 },
                { id: "eid222", tween: [ "transform", "${_KITA2}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 296 },
                { id: "eid280", tween: [ "style", "${_extraThing1}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid281", tween: [ "style", "${_extraThing1}", "display", 'block', { fromValue: 'none'}], position: 1726, duration: 0 },
                { id: "eid234", tween: [ "transform", "${_blowerMotor}", "scaleY", '1', { fromValue: '1.05'}], position: 244, duration: 296 },
                { id: "eid214", tween: [ "transform", "${_flowLine}", "scaleY", '1', { fromValue: '1.05'}], position: 430, duration: 296 },
                { id: "eid230", tween: [ "transform", "${_eva}", "scaleY", '1', { fromValue: '1.05'}], position: 356, duration: 296 },
                { id: "eid226", tween: [ "transform", "${_condenser}", "scaleY", '1', { fromValue: '1.05'}], position: 207, duration: 296 },
                { id: "eid250", tween: [ "style", "${_condenser}", "opacity", '1', { fromValue: '0'}], position: 207, duration: 296 },
                { id: "eid242", tween: [ "style", "${_compresor}", "opacity", '1', { fromValue: '0'}], position: 281, duration: 296 },
                { id: "eid210", tween: [ "transform", "${_compresor}", "scaleY", '1', { fromValue: '1.05'}], position: 281, duration: 296 },
                { id: "eid236", tween: [ "style", "${_heaterCore}", "opacity", '1', { fromValue: '0'}], position: 319, duration: 296 },
                { id: "eid208", tween: [ "transform", "${_compresor}", "scaleX", '1', { fromValue: '1.05'}], position: 281, duration: 296 },
                { id: "eid216", tween: [ "transform", "${_radiator}", "scaleX", '1', { fromValue: '1.05'}], position: 133, duration: 296 },
                { id: "eid279", tween: [ "style", "${_FLOW3}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 200 },
                { id: "eid224", tween: [ "transform", "${_condenser}", "scaleX", '1', { fromValue: '1.05'}], position: 207, duration: 296 },
                { id: "eid244", tween: [ "style", "${_flowLine}", "opacity", '1', { fromValue: '0'}], position: 430, duration: 296 },
                { id: "eid196", tween: [ "transform", "${_heaterCore}", "scaleX", '1', { fromValue: '1.05'}], position: 319, duration: 296 },
                { id: "eid198", tween: [ "transform", "${_heaterCore}", "scaleY", '1', { fromValue: '1.05'}], position: 319, duration: 296 },
                { id: "eid212", tween: [ "transform", "${_flowLine}", "scaleX", '1', { fromValue: '1.05'}], position: 430, duration: 296 },
                { id: "eid246", tween: [ "style", "${_radiator}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 296 },
                { id: "eid206", tween: [ "transform", "${_KITA}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 296 },
                { id: "eid238", tween: [ "style", "${_fan}", "opacity", '1', { fromValue: '0'}], position: 281, duration: 296 },
                { id: "eid200", tween: [ "transform", "${_fan}", "scaleX", '1', { fromValue: '1.05'}], position: 281, duration: 296 },
                { id: "eid254", tween: [ "style", "${_blowerMotor}", "opacity", '1', { fromValue: '0'}], position: 244, duration: 296 },
                { id: "eid277", tween: [ "style", "${_extraThing2}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid278", tween: [ "style", "${_extraThing2}", "display", 'block', { fromValue: 'none'}], position: 1726, duration: 0 },
                { id: "eid228", tween: [ "transform", "${_eva}", "scaleX", '1', { fromValue: '1.05'}], position: 356, duration: 296 },
                { id: "eid248", tween: [ "style", "${_KITA2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 296 },
                { id: "eid282", tween: [ "style", "${_flows2}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 200 },
                { id: "eid218", tween: [ "transform", "${_radiator}", "scaleY", '1', { fromValue: '1.05'}], position: 133, duration: 296 },
                { id: "eid232", tween: [ "transform", "${_blowerMotor}", "scaleX", '1', { fromValue: '1.05'}], position: 244, duration: 296 },
                { id: "eid240", tween: [ "style", "${_KITA}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 296 },
                { id: "eid275", tween: [ "style", "${_extraThing3}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid276", tween: [ "style", "${_extraThing3}", "display", 'block', { fromValue: 'none'}], position: 1726, duration: 0 }            ]
        }
    }
},
"FLOW3": {
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
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOval',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy10',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy12',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy13',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy14',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yOvalCopy15',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(215,141,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yOvalCopy8}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy3}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy7}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOval}": [
                ["motion", "location", '5.0000564345164px 5.0166402896602px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy6}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy4}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy15}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy11}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy10}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy5}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy13}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '10px']
            ],
            "${_yOvalCopy12}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy9}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy2}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ],
            "${_yOvalCopy14}": [
                ["motion", "location", '5px 5.02px'],
                ["color", "background-color", 'rgba(215,141,0,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15500,
            autoPlay: true,
            labels: {
                "gogo": 7500
            },
            timeline: [
                { id: "eid365", tween: [ "motion", "${_yOvalCopy13}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 6500, duration: 8000 },
                { id: "eid358", tween: [ "motion", "${_yOvalCopy6}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 3000, duration: 8000 },
                { id: "eid354", tween: [ "motion", "${_yOvalCopy2}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 1000, duration: 8000 },
                { id: "eid353", tween: [ "motion", "${_yOvalCopy}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 500, duration: 8000 },
                { id: "eid360", tween: [ "motion", "${_yOvalCopy8}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 4000, duration: 8000 },
                { id: "eid359", tween: [ "motion", "${_yOvalCopy7}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 3500, duration: 8000 },
                { id: "eid352", tween: [ "motion", "${_yOval}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 0, duration: 8000 },
                { id: "eid362", tween: [ "motion", "${_yOvalCopy10}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 5000, duration: 8000 },
                { id: "eid361", tween: [ "motion", "${_yOvalCopy9}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 4500, duration: 8000 },
                { id: "eid356", tween: [ "motion", "${_yOvalCopy4}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 2000, duration: 8000 },
                { id: "eid364", tween: [ "motion", "${_yOvalCopy12}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 6000, duration: 8000 },
                { id: "eid366", tween: [ "motion", "${_yOvalCopy14}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 7000, duration: 8000 },
                { id: "eid357", tween: [ "motion", "${_yOvalCopy5}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 2500, duration: 8000 },
                { id: "eid367", tween: [ "motion", "${_yOvalCopy15}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 7500, duration: 8000 },
                { id: "eid355", tween: [ "motion", "${_yOvalCopy3}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 1500, duration: 8000 },
                { id: "eid363", tween: [ "motion", "${_yOvalCopy11}", [[5, 5.02, 0, 0],[109.21, 14.83, 42.25, 4.72, 70.29, 7.85],[117.55, 26.15, 6.43, -9.64, 6.43, -9.64],[21.51, 187.7, -25.56, 48.72, -2.63, 5.01],[15.17, 211.92, -0.69, 29.82, -0.01, 0.57],[15.79, 281.5, -4.23, 20.94, -1.78, 8.82],[1.03, 292.59, -19.09, -2.73, -19.68, -2.81],[-56.23, 287.7, -7.57, 3.44, -5.24, 2.38],[-75.22, 296.55, -35.87, 59.67, -19.2, 31.94],[-139, 402.93, 0, 0]]], position: 5500, duration: 8000 }            ]
        }
    }
},
"flows2": {
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
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOval',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy10',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy12',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy13',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy14',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueOvalCopy15',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,141,215,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blueOvalCopy3}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy4}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy10}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOval}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy12}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy6}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy14}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy15}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy7}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy8}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy13}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy5}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy11}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${_blueOvalCopy2}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '10px']
            ],
            "${_blueOvalCopy9}": [
                ["color", "background-color", 'rgba(0,141,215,1.00)'],
                ["motion", "location", '5px 5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15629,
            autoPlay: true,
            labels: {
                "go": 7500
            },
            timeline: [
                { id: "eid310", tween: [ "motion", "${_blueOvalCopy8}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 4000, duration: 8129 },
                { id: "eid313", tween: [ "motion", "${_blueOvalCopy11}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 5504, duration: 8129 },
                { id: "eid315", tween: [ "motion", "${_blueOvalCopy13}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 6504, duration: 8129 },
                { id: "eid312", tween: [ "motion", "${_blueOvalCopy10}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 5000, duration: 8129 },
                { id: "eid308", tween: [ "motion", "${_blueOvalCopy6}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 3000, duration: 8129 },
                { id: "eid295", tween: [ "motion", "${_blueOval}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 0, duration: 8000 },
                { id: "eid349", tween: [ "motion", "${_blueOvalCopy15}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 7500, duration: 8129 },
                { id: "eid303", tween: [ "motion", "${_blueOvalCopy}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 500, duration: 8129 },
                { id: "eid348", tween: [ "motion", "${_blueOvalCopy14}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 7000, duration: 8129 },
                { id: "eid304", tween: [ "motion", "${_blueOvalCopy2}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 1000, duration: 8129 },
                { id: "eid314", tween: [ "motion", "${_blueOvalCopy12}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 6004, duration: 8129 },
                { id: "eid305", tween: [ "motion", "${_blueOvalCopy3}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 1500, duration: 8129 },
                { id: "eid311", tween: [ "motion", "${_blueOvalCopy9}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 4500, duration: 8129 },
                { id: "eid309", tween: [ "motion", "${_blueOvalCopy7}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 3500, duration: 8129 },
                { id: "eid307", tween: [ "motion", "${_blueOvalCopy5}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 2500, duration: 8129 },
                { id: "eid306", tween: [ "motion", "${_blueOvalCopy4}", [[5, 5, 0, 0],[-7.5, 26.25, -6.75, 11.25, -6.75, 11.25],[-1.5, 38.5, 24.75, 2.25, 24.75, 2.25],[57, 44.25, 0, 0, 0, 0],[209.25, -204, 17.25, -30, 17.25, -30],[214, -239, -0.75, -29.25, -0.75, -29.25],[214, -431.5, -2.25, -22.5, -2.25, -22.5],[201.5, -449, -35.25, -3.75, -35.25, -3.75],[148, -452, 0, 0]]], position: 2000, duration: 8129 }            ]
        }
    }
},
"flows1": {
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
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOval',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOvalCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOvalCopy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOvalCopy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOvalCopy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOvalCopy5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOvalCopy6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOvalCopy7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOvalCopy8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                },
                {
                    rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.019108280254777,
                    id: 'redOvalCopy9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,111,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_redOvalCopy6}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ],
            "${_redOvalCopy5}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ],
            "${_redOvalCopy8}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ],
            "${_redOvalCopy7}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ],
            "${_redOvalCopy4}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '10px']
            ],
            "${_redOval}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ],
            "${_redOvalCopy3}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ],
            "${_redOvalCopy}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ],
            "${_redOvalCopy9}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ],
            "${_redOvalCopy2}": [
                ["color", "background-color", 'rgba(255,0,111,1.00)'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["motion", "location", '5px 5px'],
                ["style", "width", '10px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5700,
            autoPlay: true,
            labels: {
                "go": 2700
            },
            timeline: [
                { id: "eid287", tween: [ "motion", "${_redOvalCopy9}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 2700, duration: 3000 },
                { id: "eid278", tween: [ "motion", "${_redOval}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 0, duration: 3000 },
                { id: "eid281", tween: [ "motion", "${_redOvalCopy3}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 900, duration: 3000 },
                { id: "eid347", tween: [ "style", "${_redOvalCopy9}", "opacity", '1', { fromValue: '1'}], position: 2700, duration: 0 },
                { id: "eid336", tween: [ "style", "${_redOvalCopy9}", "opacity", '0', { fromValue: '1'}], position: 5400, duration: 0 },
                { id: "eid346", tween: [ "style", "${_redOvalCopy7}", "opacity", '1', { fromValue: '1'}], position: 2100, duration: 0 },
                { id: "eid335", tween: [ "style", "${_redOvalCopy7}", "opacity", '0', { fromValue: '1'}], position: 4800, duration: 0 },
                { id: "eid286", tween: [ "motion", "${_redOvalCopy8}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 2400, duration: 3000 },
                { id: "eid285", tween: [ "motion", "${_redOvalCopy7}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 2100, duration: 3000 },
                { id: "eid338", tween: [ "style", "${_redOval}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid327", tween: [ "style", "${_redOval}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 0 },
                { id: "eid344", tween: [ "style", "${_redOvalCopy6}", "opacity", '1', { fromValue: '1'}], position: 1800, duration: 0 },
                { id: "eid333", tween: [ "style", "${_redOvalCopy6}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 0 },
                { id: "eid282", tween: [ "motion", "${_redOvalCopy4}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 1200, duration: 3000 },
                { id: "eid284", tween: [ "motion", "${_redOvalCopy6}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 1800, duration: 3000 },
                { id: "eid283", tween: [ "motion", "${_redOvalCopy5}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 1500, duration: 3000 },
                { id: "eid280", tween: [ "motion", "${_redOvalCopy2}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 600, duration: 3000 },
                { id: "eid343", tween: [ "style", "${_redOvalCopy5}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
                { id: "eid332", tween: [ "style", "${_redOvalCopy5}", "opacity", '0', { fromValue: '1'}], position: 4200, duration: 0 },
                { id: "eid339", tween: [ "style", "${_redOvalCopy8}", "opacity", '1', { fromValue: '1'}], position: 2400, duration: 0 },
                { id: "eid328", tween: [ "style", "${_redOvalCopy8}", "opacity", '0', { fromValue: '1'}], position: 5100, duration: 0 },
                { id: "eid341", tween: [ "style", "${_redOvalCopy2}", "opacity", '1', { fromValue: '1'}], position: 600, duration: 0 },
                { id: "eid330", tween: [ "style", "${_redOvalCopy2}", "opacity", '0', { fromValue: '1'}], position: 3600, duration: 0 },
                { id: "eid340", tween: [ "style", "${_redOvalCopy}", "opacity", '1', { fromValue: '1'}], position: 300, duration: 0 },
                { id: "eid329", tween: [ "style", "${_redOvalCopy}", "opacity", '0', { fromValue: '1'}], position: 3300, duration: 0 },
                { id: "eid342", tween: [ "style", "${_redOvalCopy3}", "opacity", '1', { fromValue: '1'}], position: 900, duration: 0 },
                { id: "eid331", tween: [ "style", "${_redOvalCopy3}", "opacity", '0', { fromValue: '1'}], position: 3900, duration: 0 },
                { id: "eid279", tween: [ "motion", "${_redOvalCopy}", [[5, 5, 0, 0],[73.98, -108.32, 10.63, -21.75, 0.4, -0.82],[69.28, -120.49, -1.27, -0.31, -16.17, -3.92],[-18.45, -129.97, -12.33, -2.26, -2.52, -0.46],[-25.07, -139.89, 0.38, -1.49, 6.49, -25.45],[8, -195.75, 0, 0]]], position: 300, duration: 3000 },
                { id: "eid345", tween: [ "style", "${_redOvalCopy4}", "opacity", '1', { fromValue: '1'}], position: 1200, duration: 0 },
                { id: "eid334", tween: [ "style", "${_redOvalCopy4}", "opacity", '0', { fromValue: '1'}], position: 4700, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1389233900791");
