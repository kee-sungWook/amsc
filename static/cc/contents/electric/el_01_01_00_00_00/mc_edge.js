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
                id: 'CAR3',
                type: 'rect',
                rect: ['18px', '178px','auto','auto','auto', 'auto']
            },
            {
                id: 'HUMAN',
                type: 'rect',
                rect: ['1351px', '169px','auto','auto','auto', 'auto']
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['151', '184','979','212','auto', 'auto'],
                text: "인간의 신체중 뇌에 해당하는 부분으로서 \r인간의 뇌가 외부의 시각,후각,청각등의 자극에 따라\r신경을 조절하듯이 ECM은 입력되는 신호에 따라\r출력을 조절하여 센서및 단품을 제어합니다.",
                align: "auto",
                font: ['나눔고딕', 45, "rgb(0,74,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['144', '70','376','85','auto', 'auto'],
                text: "ECM이란?",
                align: "auto",
                font: ['나눔고딕', 80, "rgb(0,74,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'HUMAN',
                symbolName: 'HUMAN',
                autoPlay: {

                }
            },
            {
                id: 'CAR3',
                symbolName: 'CAR',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1900px']
            ],
            "${_txt1}": [
                ["style", "opacity", '0']
            ],
            "${_txt2}": [
                ["style", "opacity", '0']
            ],
            "${_CAR3}": [
                ["style", "top", '178px'],
                ["style", "left", '18px']
            ],
            "${_HUMAN}": [
                ["style", "top", '169px'],
                ["style", "left", '1351px']
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
                { id: "eid19", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid21", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"HUMAN": {
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
                    id: 'human_nerve',
                    tag: 'img',
                    rect: ['163px', '57px', '173', '456', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/human_nerve.png']
                },
                {
                    type: 'image',
                    id: 'flow_src_human',
                    tag: 'img',
                    rect: ['156px', '41px', '189', '474', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src_human.png']
                },
                {
                    type: 'image',
                    id: 'human_body_fill',
                    tag: 'img',
                    rect: ['6px', '9px', '487', '986', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/human_body_fill.png']
                },
                {
                    type: 'image',
                    id: 'human_out_fill',
                    tag: 'img',
                    rect: ['0px', '0px', '496', '1005', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/human_out_fill.png']
                },
                {
                    type: 'image',
                    id: 'human_body_outLine',
                    tag: 'img',
                    rect: ['5px', '7px', '489', '989', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/human_body_outLine.png']
                },
                {
                    type: 'image',
                    id: 'human_brain',
                    tag: 'img',
                    rect: ['211px', '16px', '78', '51', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/human_brain.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_human_out_fill}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_human_nerve}": [
                ["style", "left", '163px'],
                ["style", "top", '57px']
            ],
            "${_human_body_outLine}": [
                ["style", "left", '5px'],
                ["style", "top", '7px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1005px'],
                ["style", "width", '496px']
            ],
            "${_flow_src_human}": [
                ["style", "left", '156px'],
                ["style", "top", '41px']
            ],
            "${_human_body_fill}": [
                ["style", "left", '6px'],
                ["style", "top", '9px']
            ],
            "${_human_brain}": [
                ["style", "left", '211px'],
                ["style", "top", '16px']
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
                { id: "eid1", tween: [ "style", "${_flow_src_human}", "left", '155px', { fromValue: '156px'}], position: 0, duration: 500 },
                { id: "eid2", tween: [ "style", "${_flow_src_human}", "top", '67px', { fromValue: '41px'}], position: 0, duration: 500 }            ]
        }
    }
},
"CAR": {
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
                    id: 'car_elecLine',
                    tag: 'img',
                    rect: ['202px', '580px', '696', '245', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/car_elecLine.png']
                },
                {
                    type: 'image',
                    id: 'flow_src_car',
                    tag: 'img',
                    rect: ['211px', '670px', '677px', '191', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src_car.png']
                },
                {
                    type: 'image',
                    id: 'flow_src_car2',
                    tag: 'img',
                    rect: ['34px', '517px', '571px', '191', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_src_car.png']
                },
                {
                    type: 'image',
                    id: 'car_body',
                    tag: 'img',
                    rect: ['19px', '370px', '1198', '614', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/car_body.png']
                },
                {
                    type: 'image',
                    id: 'car_ecm',
                    tag: 'img',
                    rect: ['346px', '660px', '85', '62', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/car_ecm.png']
                },
                {
                    type: 'image',
                    id: 'car_out_fill',
                    tag: 'img',
                    rect: ['0px', '0px', '1286', '1005', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/car_out_fill.png']
                },
                {
                    type: 'image',
                    id: 'car_out_line',
                    tag: 'img',
                    rect: ['17px', '369px', '1201', '616', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/car_out_line.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_car_body}": [
                ["style", "left", '19px'],
                ["style", "top", '370px']
            ],
            "${_car_ecm}": [
                ["style", "left", '346px'],
                ["style", "top", '660px']
            ],
            "${_car_elecLine}": [
                ["style", "left", '202px'],
                ["style", "top", '580px']
            ],
            "${_car_out_line}": [
                ["style", "left", '17px'],
                ["style", "top", '369px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1005px'],
                ["style", "width", '1286px']
            ],
            "${_flow_src_car}": [
                ["style", "top", '670px'],
                ["style", "left", '211px'],
                ["style", "width", '677px']
            ],
            "${_flow_src_car2}": [
                ["style", "top", '517px'],
                ["style", "left", '34px'],
                ["style", "width", '571px']
            ],
            "${_car_out_fill}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                { id: "eid5", tween: [ "style", "${_flow_src_car}", "left", '243px', { fromValue: '211px'}], position: 0, duration: 500 },
                { id: "eid3", tween: [ "style", "${_flow_src_car2}", "left", '6px', { fromValue: '34px'}], position: 0, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-8721385");
