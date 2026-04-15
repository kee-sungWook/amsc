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
                text: "수냉식 엔진에서 열을 공기 중에 방출하기 위한 장치<br>실린더 블록과 실린더 헤드의 냉각수 통로에서 열을 흡수한 냉각수를 냉각하는 장치이다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1473px', '426px','299px','92px','auto', 'auto'],
                text: "라디에이터란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            },
            {
                id: 'cap_lower',
                type: 'image',
                tag: 'img',
                rect: ['738px', '1012','51','51','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cap_lower.png"]
            },
            {
                id: 'con_lower',
                type: 'image',
                tag: 'img',
                rect: ['398px', '864','444','271','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con_lower.png"]
            },
            {
                id: 'con_right',
                type: 'image',
                tag: 'img',
                rect: ['870px', '229','61','547','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con_right.png"]
            },
            {
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['1319px', '397px','656','655','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'con01_1',
                type: 'image',
                rect: ['1370px', '470px','555px','508px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01_1.png",'0px','0px']
            },
            {
                id: 'con_01',
                type: 'image',
                tag: 'img',
                rect: ['395px', '333','452','628','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con_01.png"]
            },
            {
                id: 'con_top',
                type: 'image',
                tag: 'img',
                rect: ['397px', '168px','442','168','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con_top.png"]
            },
            {
                id: 'cap',
                type: 'image',
                tag: 'img',
                rect: ['591px', '95px','86','47','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cap.png"]
            },
            {
                id: 'con_left',
                type: 'image',
                tag: 'img',
                rect: ['304px', '267','71','712','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con_left.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_con_lower}": [
                ["style", "left", '402px'],
                ["style", "top", '782px']
            ],
            "${_con01_1}": [
                ["style", "top", '470px'],
                ["style", "opacity", '0'],
                ["style", "left", '1370px']
            ],
            "${_txt1}": [
                ["style", "top", '199px'],
                ["style", "font-size", '45px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "height", '160px'],
                ["style", "opacity", '0'],
                ["style", "left", '1269px'],
                ["style", "width", '1056px']
            ],
            "${_con_right}": [
                ["style", "left", '787px'],
                ["style", "top", '288px']
            ],
            "${_con_top}": [
                ["style", "left", '397px'],
                ["style", "top", '249px']
            ],
            "${_con01}": [
                ["style", "top", '397px'],
                ["subproperty", "filter.contrast", '1'],
                ["subproperty", "filter.invert", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '1319px']
            ],
            "${_cap_lower}": [
                ["style", "left", '741px'],
                ["style", "top", '894px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1331px'],
                ["style", "font-size", '80px'],
                ["style", "top", '68px'],
                ["transform", "scaleY", '1'],
                ["style", "width", 'auto'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cap}": [
                ["style", "left", '595px'],
                ["style", "top", '203px']
            ],
            "${_con_01}": [
                ["style", "left", '395px']
            ],
            "${_con_left}": [
                ["style", "left", '383px'],
                ["style", "top", '340px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1875,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 1608, duration: 267 },
                { id: "eid86", tween: [ "style", "${_txt_title}", "left", '1309px', { fromValue: '1331px'}], position: 1559, duration: 217 },
                { id: "eid189", tween: [ "style", "${_txt_title}", "left", '1270px', { fromValue: '1309px'}], position: 1776, duration: 99 },
                { id: "eid128", tween: [ "style", "${_cap}", "top", '203px', { fromValue: '203px'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "style", "${_cap}", "top", '95px', { fromValue: '203px'}], position: 83, duration: 342 },
                { id: "eid131", tween: [ "style", "${_con_right}", "top", '288px', { fromValue: '288px'}], position: 0, duration: 0 },
                { id: "eid110", tween: [ "style", "${_con_right}", "top", '254px', { fromValue: '288px'}], position: 458, duration: 342 },
                { id: "eid133", tween: [ "style", "${_con_lower}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_con_lower}", "top", '864px', { fromValue: '782px'}], position: 708, duration: 342 },
                { id: "eid98", tween: [ "style", "${_txt1}", "height", '160px', { fromValue: '160px'}], position: 1875, duration: 0 },
                { id: "eid174", tween: [ "style", "${_con01_1}", "opacity", '1', { fromValue: '0'}], position: 1292, duration: 83 },
                { id: "eid178", tween: [ "style", "${_con01_1}", "opacity", '1', { fromValue: '0'}], position: 1417, duration: 41 },
                { id: "eid180", tween: [ "style", "${_con01_1}", "opacity", '0', { fromValue: '1'}], position: 1542, duration: 41 },
                { id: "eid127", tween: [ "style", "${_cap}", "left", '595px', { fromValue: '595px'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${_cap}", "left", '593px', { fromValue: '595px'}], position: 83, duration: 342 },
                { id: "eid130", tween: [ "style", "${_con_right}", "left", '787px', { fromValue: '787px'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${_con_right}", "left", '938px', { fromValue: '787px'}], position: 458, duration: 342 },
                { id: "eid126", tween: [ "style", "${_con_left}", "top", '340px', { fromValue: '340px'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "style", "${_con_left}", "top", '311px', { fromValue: '340px'}], position: 367, duration: 342, easing: "easeInQuad" },
                { id: "eid129", tween: [ "style", "${_con_top}", "top", '249px', { fromValue: '249px'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_con_top}", "top", '168px', { fromValue: '249px'}], position: 167, duration: 342 },
                { id: "eid19", tween: [ "style", "${_txt_title}", "opacity", '1', { fromValue: '0'}], position: 1292, duration: 267 },
                { id: "eid187", tween: [ "style", "${_txt1}", "left", '1269px', { fromValue: '1269px'}], position: 1875, duration: 0 },
                { id: "eid134", tween: [ "style", "${_cap_lower}", "left", '741px', { fromValue: '741px'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "style", "${_cap_lower}", "left", '738px', { fromValue: '741px'}], position: 625, duration: 342 },
                { id: "eid132", tween: [ "style", "${_con_lower}", "left", '402px', { fromValue: '402px'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_con_lower}", "left", '398px', { fromValue: '402px'}], position: 708, duration: 342 },
                { id: "eid188", tween: [ "style", "${_txt1}", "width", '1056px', { fromValue: '1056px'}], position: 1875, duration: 0 },
                { id: "eid93", tween: [ "style", "${_txt1}", "top", '199px', { fromValue: '199px'}], position: 1875, duration: 0 },
                { id: "eid135", tween: [ "style", "${_cap_lower}", "top", '894px', { fromValue: '894px'}], position: 0, duration: 0 },
                { id: "eid120", tween: [ "style", "${_cap_lower}", "top", '1012px', { fromValue: '894px'}], position: 625, duration: 342 },
                { id: "eid137", tween: [ "style", "${_con01}", "opacity", '1', { fromValue: '0'}], position: 1028, duration: 297 },
                { id: "eid92", tween: [ "style", "${_txt_title}", "top", '68px', { fromValue: '68px'}], position: 1776, duration: 0 },
                { id: "eid125", tween: [ "style", "${_con_left}", "left", '383px', { fromValue: '383px'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_con_left}", "left", '218px', { fromValue: '383px'}], position: 367, duration: 342, easing: "easeInQuad" }            ]
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
