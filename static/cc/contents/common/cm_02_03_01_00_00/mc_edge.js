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
                id: 'bg02',
                type: 'image',
                rect: ['930px', '198px','353px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg02.png",'0px','0px']
            },
            {
                id: 'bg01',
                type: 'image',
                rect: ['793px', '197px','468px','629px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg01.png",'0px','0px']
            },
            {
                id: 'Symbol_23',
                type: 'rect',
                rect: ['749', '198','auto','auto','auto', 'auto']
            },
            {
                id: 'bg03',
                type: 'image',
                rect: ['438px', '322px','395px','519px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg03.png",'0px','0px']
            },
            {
                id: 'Symbol_13',
                type: 'rect',
                rect: ['385', '330','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Symbol_23',
                symbolName: 'Symbol_2',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_13',
                symbolName: 'Symbol_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bg01}": [
                ["style", "left", '793px'],
                ["style", "top", '197px']
            ],
            "${_bg03}": [
                ["style", "top", '322px'],
                ["style", "height", '519px'],
                ["style", "left", '438px'],
                ["style", "width", '395px']
            ],
            "${_Symbol_13}": [
                ["transform", "skewY", '10deg'],
                ["style", "left", '268px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)']
            ],
            "${_Symbol_23}": [
                ["transform", "skewY", '10deg'],
                ["style", "left", '582px']
            ],
            "${_stage}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "height", '1077px'],
                ["style", "width", '1806px']
            ],
            "${_bg02}": [
                ["style", "left", '930px'],
                ["style", "top", '198px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4023,
            autoPlay: true,
            timeline: [
                { id: "eid17", tween: [ "transform", "${_Symbol_13}", "skewY", '10deg', { fromValue: '10deg'}], position: 2000, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Symbol_13}", "left", '268px', { fromValue: '268px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid18", tween: [ "transform", "${_Symbol_23}", "skewY", '10deg', { fromValue: '10deg'}], position: 2000, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Symbol_23}", "left", '582px', { fromValue: '582px'}], position: 2000, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"Symbol_1": {
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
                    rect: ['0px', '0px', '548', '548', 'auto', 'auto'],
                    id: 'disc01',
                    fill: ['rgba(0,0,0,0)', 'images/disc01.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_disc01}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '548px'],
                ["style", "width", '548px']
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
                { id: "eid12", tween: [ "transform", "${_disc01}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000 }            ]
        }
    }
},
"Symbol_2": {
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
                    rect: ['0px', '0px', '672', '671', 'auto', 'auto'],
                    id: 'disc02',
                    fill: ['rgba(0,0,0,0)', 'images/disc02.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_disc02}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '671px'],
                ["style", "width", '672px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4023,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "transform", "${_disc02}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeInQuad" },
                { id: "eid27", tween: [ "transform", "${_disc02}", "rotateZ", '720deg', { fromValue: '360deg'}], position: 2000, duration: 2023, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-1399961456844");
