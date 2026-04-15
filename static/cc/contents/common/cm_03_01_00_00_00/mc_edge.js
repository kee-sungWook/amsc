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
                id: 'Layer-3',
                type: 'image',
                tag: 'img',
                rect: ['186', '93','1111','808','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Layer-3.png"]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['479px', '865px','251px','44px','auto', 'auto'],
                text: "베이퍼라이저",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['913px', '355px','87px','32px','auto', 'auto'],
                text: "믹서",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['985px', '749px','190px','44px','auto', 'auto'],
                text: "연료필터",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'one_an01',
                type: 'rect',
                rect: ['1271', '447','auto','auto','auto', 'auto']
            },
            {
                id: 'one_an02',
                type: 'rect',
                rect: ['1271', '447','auto','auto','auto', 'auto']
            },
            {
                id: 'one_an03',
                type: 'rect',
                rect: ['831', '533','auto','auto','auto', 'auto']
            },
            {
                id: 'one_an042',
                type: 'rect',
                rect: ['768', '521','auto','auto','auto', 'auto']
            },
            {
                id: 'led',
                type: 'rect',
                rect: ['462', '428','auto','auto','auto', 'auto']
            },
            {
                id: 'shell_01',
                type: 'image',
                rect: ['831px', '484px','82px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shell_01.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'one_an03',
                symbolName: 'one_an02',
                autoPlay: {

                }
            },
            {
                id: 'one_an01',
                symbolName: 'one_ani01',
                autoPlay: {

                }
            },
            {
                id: 'led',
                symbolName: 'led'
            },
            {
                id: 'one_an02',
                symbolName: 'one_ani01',
                autoPlay: {

                }
            },
            {
                id: 'one_an042',
                symbolName: 'one_an04'
            }
            ]
        },
    states: {
        "Base State": {
            "${_one_an042}": [
                ["style", "top", '504px'],
                ["style", "left", '754px']
            ],
            "${_TextCopy}": [
                ["style", "top", '749px'],
                ["style", "text-align", 'center'],
                ["style", "height", '44px'],
                ["style", "width", '190px'],
                ["style", "left", '985px'],
                ["style", "font-size", '40px']
            ],
            "${_Text}": [
                ["style", "top", '355px'],
                ["style", "left", '913px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '40px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '865px'],
                ["style", "text-align", 'center'],
                ["style", "height", '44px'],
                ["style", "font-size", '40px'],
                ["style", "left", '479px'],
                ["style", "width", '251px']
            ],
            "${_one_an02}": [
                ["style", "top", '428px'],
                ["style", "left", '1275px']
            ],
            "${_shell_01}": [
                ["style", "left", '831px'],
                ["style", "top", '484px']
            ],
            "${_stage}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2583,
            autoPlay: true,
            timeline: [
                { id: "eid38", tween: [ "style", "${_one_an02}", "top", '428px', { fromValue: '428px'}], position: 1000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_one_an02}", "left", '1275px', { fromValue: '1275px'}], position: 1000, duration: 0 },
                { id: "eid50", tween: [ "style", "${_one_an042}", "left", '754px', { fromValue: '754px'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_one_an042}", "top", '504px', { fromValue: '504px'}], position: 0, duration: 0 }            ]
        }
    }
},
"one_ani01": {
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
                    rect: ['-393px', '90px', '9px', '8px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    rect: ['0px', '0px', '9px', '8px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy',
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
            "${_EllipseCopy}": [
                ["motion", "location", '4.5px 4.01px']
            ],
            "${_Ellipse}": [
                ["motion", "location", '4.501953125px 4.01171875px']
            ],
            "${symbolSelector}": [
                ["style", "height", '8px'],
                ["style", "width", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2583,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "motion", "${_Ellipse}", [[4.5, 4.01, 0, 0],[-341.29, 115.08, -29.68, -13.01, -5.15, -2.26],[-399.43, 89.68, 0, 0]]], position: 0, duration: 1000 },
                { id: "eid31", tween: [ "motion", "${_Ellipse}", [[4.5, 4.01, 0, 0],[-341.29, 115.08, -29.68, -13.01, -5.15, -2.26],[-399.43, 89.68, 0, 0]]], position: 1000, duration: 1000 },
                { id: "eid32", tween: [ "motion", "${_EllipseCopy}", [[4.5, 4.01, 0, 0],[-341.29, 115.08, -29.68, -13.01, -5.15, -2.26],[-399.43, 89.68, 0, 0]]], position: 583, duration: 1000 },
                { id: "eid33", tween: [ "motion", "${_EllipseCopy}", [[4.5, 4.01, 0, 0],[-341.29, 115.08, -29.68, -13.01, -5.15, -2.26],[-399.43, 89.68, 0, 0]]], position: 1583, duration: 1000 }            ]
        }
    }
},
"one_an02": {
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
                    rect: ['-80px', '90px', '9px', '8px', 'auto', 'auto'],
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
            "${_Ellipse3}": [
                ["motion", "location", '4.5px 4px']
            ],
            "${symbolSelector}": [
                ["style", "height", '8px'],
                ["style", "width", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1417,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "motion", "${_Ellipse3}", [[4.5, 4, 0, 0],[-28.25, 15.42, -0.87, 48.79, -42.53, 14.99],[-28.32, 88.22, -8.93, 9.53, -0.5, 31.31],[-46.79, 105.97, -30.35, -12.37, -17.34, 15.62],[-75.25, 94, 0, 0]]], position: 0, duration: 708 },
                { id: "eid40", tween: [ "motion", "${_Ellipse3}", [[4.5, 4, 0, 0],[-28.25, 15.42, -0.87, 48.79, -42.53, 14.99],[-28.32, 88.22, -8.93, 9.53, -0.5, 31.31],[-46.79, 105.97, -30.35, -12.37, -17.34, 15.62],[-75.25, 94, 0, 0]]], position: 708, duration: 708 }            ]
        }
    }
},
"one_an04": {
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
                    rect: ['2px', '84px', '9px', '8px', 'auto', 'auto'],
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
                ["motion", "location", '6.5px 87.5px'],
                ["style", "opacity", '1'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '8px'],
                ["style", "width", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 583,
            autoPlay: true,
            timeline: [
                { id: "eid58", tween: [ "motion", "${_Ellipse}", [[6.5, 87.5, 0, 0],[31.85, 98.07, 0.61, -28.6, 29.63, 11.17],[32.5, 17.24, -47.04, -20.59, 0.06, -60.03],[5.5, 5, 0, 0]]], position: 0, duration: 500 },
                { id: "eid61", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 83 }            ]
        }
    }
},
"led": {
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
                    id: 'right',
                    type: 'image',
                    rect: ['0px', '0px', '187px', '108px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/right.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '108px'],
                ["style", "width", '187px']
            ],
            "${_right}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
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
                { id: "eid54", tween: [ "style", "${_right}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 238 },
                { id: "eid55", tween: [ "style", "${_right}", "opacity", '0', { fromValue: '1'}], position: 238, duration: 262 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1400135673198");
