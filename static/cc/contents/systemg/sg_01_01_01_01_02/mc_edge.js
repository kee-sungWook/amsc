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
                id: 'txt1',
                type: 'text',
                rect: ['1473px', '582px','821px','259px','auto', 'auto'],
                opacity: 1,
                text: "엔진회전에 의해서 작동되며 엔진 열에 의해 냉각펜 클러치 내부에 있는 바이메탈에 의해 회전속도가 변화하여 라디에이터 열을 냉각한다. ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1473px', '426px','299px','92px','auto', 'auto'],
                text: "냉각팬 클러치란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'fan_side',
                type: 'rect',
                rect: ['913', '162','auto','auto','auto', 'auto']
            },
            {
                id: 'fan_front',
                type: 'rect',
                rect: ['62', '208','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'fan_front',
                symbolName: 'fan_front',
                autoPlay: {

                }
            },
            {
                id: 'fan_side',
                symbolName: 'fan_side',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_fan_front}": [
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.8']
            ],
            "${_fan_side}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt1}": [
                ["style", "top", '582px'],
                ["style", "font-size", '45px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "height", '259px'],
                ["style", "opacity", '0'],
                ["style", "left", '1473px'],
                ["style", "width", '840px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1473px'],
                ["style", "font-size", '80px'],
                ["style", "top", '426px'],
                ["transform", "scaleY", '1'],
                ["style", "width", 'auto'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 636, duration: 267 },
                { id: "eid4", tween: [ "transform", "${_fan_front}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 267 },
                { id: "eid50", tween: [ "style", "${_txt1}", "width", '840px', { fromValue: '840px'}], position: 2214, duration: 0 },
                { id: "eid2", tween: [ "transform", "${_fan_front}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 267 },
                { id: "eid6", tween: [ "style", "${_fan_front}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267 },
                { id: "eid8", tween: [ "style", "${_fan_side}", "opacity", '1', { fromValue: '0'}], position: 205, duration: 267 },
                { id: "eid19", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 419, duration: 267 }            ]
        }
    }
},
"fan_front": {
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
                    id: 'front',
                    tag: 'img',
                    rect: ['0px', '0px', '798', '809', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/front.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '809px'],
                ["style", "width", '798px']
            ],
            "${_front}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '360deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4250,
            autoPlay: true,
            labels: {
                "move1": 267,
                "move2": 2537,
                "move3": 3750
            },
            timeline: [
                { id: "eid24", tween: [ "transform", "${_front}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 267, duration: 2001 },
                { id: "eid28", tween: [ "transform", "${_front}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 2537, duration: 899 },
                { id: "eid32", tween: [ "transform", "${_front}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 3750, duration: 500 }            ]
        }
    }
},
"fan_side": {
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
                    id: 'side_inner',
                    tag: 'img',
                    rect: ['32px', '121px', '190', '679', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/side_inner.png']
                },
                {
                    type: 'image',
                    id: 'side',
                    tag: 'img',
                    rect: ['0px', '0px', '454', '905', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/side.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_side}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_side_inner}": [
                ["style", "top", '121px'],
                ["style", "opacity", '0'],
                ["style", "left", '32px']
            ],
            "${symbolSelector}": [
                ["style", "height", '905px'],
                ["style", "width", '454px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: true,
            labels: {
                "gogo": 0
            },
            timeline: [
                { id: "eid35", tween: [ "style", "${_side_inner}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 833 },
                { id: "eid46", tween: [ "style", "${_side_inner}", "opacity", '1', { fromValue: '0.500000'}], position: 1667, duration: 833 },
                { id: "eid47", tween: [ "style", "${_side_inner}", "opacity", '0.500000', { fromValue: '1'}], position: 3300, duration: 833 },
                { id: "eid48", tween: [ "style", "${_side_inner}", "opacity", '0', { fromValue: '0.500000'}], position: 5000, duration: 833 }            ]
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
})(jQuery, AdobeEdge, "EDGE-27168194");
