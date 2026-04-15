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
                id: 'car',
                type: 'image',
                tag: 'img',
                rect: ['52', '448','1795','735','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car.png"]
            },
            {
                id: 'flowLine',
                type: 'image',
                tag: 'img',
                rect: ['564', '390','1030','658','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"flowLine.png"]
            },
            {
                id: 'FLOWMOVIE',
                type: 'rect',
                rect: ['557', '398','auto','auto','auto', 'auto']
            },
            {
                id: 'key_signal',
                type: 'image',
                rect: ['430px', '640px','211px','268px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"key_signal.png",'0px','0px']
            },
            {
                id: 'modules',
                type: 'image',
                tag: 'img',
                rect: ['814', '341','955','793','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"modules.png"]
            },
            {
                id: 'key_module',
                type: 'image',
                tag: 'img',
                rect: ['124', '300','460','341','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"key_module.png"]
            },
            {
                id: 'key_module_line',
                type: 'image',
                tag: 'img',
                rect: ['123', '299','462','343','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"key_module_line.png"]
            },
            {
                id: 'KEYHOLE',
                type: 'rect',
                rect: ['276', '461','auto','auto','auto', 'auto']
            },
            {
                id: 'KEYMOVIE',
                type: 'rect',
                rect: ['127px', '470','auto','auto','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'txt_b2',
                type: 'text',
                rect: ['982', '992px','388','109','auto', 'auto'],
                opacity: 1,
                text: "정상키가 아닐경우<br>시동금지",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_b1',
                type: 'text',
                rect: ['1095', '754px','164','109','auto', 'auto'],
                opacity: 1,
                text: "정상시<br>시동ON",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_mt3',
                type: 'text',
                rect: ['1349px', '213','477px','109','auto', 'auto'],
                opacity: 1,
                text: "키 신호 정상확인<br>이모빌라이져 기능수행",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_mt2',
                type: 'text',
                rect: ['797', '271','388','51','auto', 'auto'],
                opacity: 1,
                text: "자동차키 신호입력",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_mt1',
                type: 'text',
                rect: ['224', '232','295','51','auto', 'auto'],
                opacity: 1,
                text: "자동차키 삽입",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'smatraECU',
                type: 'text',
                rect: ['897', '415','188','109','auto', 'auto'],
                opacity: 1,
                text: "스마트라<br>ECU",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'engineECU',
                type: 'text',
                rect: ['1542', '415','100','109','auto', 'auto'],
                opacity: 1,
                text: "엔진<br>ECU",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'keyCylinder',
                type: 'text',
                rect: ['215', '326','284','97','auto', 'auto'],
                opacity: 1,
                text: "키 실린더<br>(안테나 코일)",
                align: "center",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['622', '38','1101','106','auto', 'auto'],
                text: "이모빌라이져는 기계적인 키와 무선암호가 일치하여야만 <br>시동이 걸리는 도난방지 시스템입니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['72px', '46','496px','76','auto', 'auto'],
                text: "이모빌라이져",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'KEYHOLE',
                symbolName: 'KEYHOLE',
                autoPlay: {

                }
            },
            {
                id: 'KEYMOVIE',
                symbolName: 'KEYMOVIE',
                autoPlay: {

                }
            },
            {
                id: 'FLOWMOVIE',
                symbolName: 'FLOWMOVIE',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_modules}": [
                ["style", "opacity", '0']
            ],
            "${_txt_mt1}": [
                ["style", "opacity", '0']
            ],
            "${_KEYMOVIE}": [
                ["style", "left", '127px'],
                ["style", "opacity", '1']
            ],
            "${_txt2}": [
                ["style", "opacity", '0']
            ],
            "${_txt1}": [
                ["style", "opacity", '0'],
                ["style", "left", '72px'],
                ["style", "width", '496px']
            ],
            "${_flowLine}": [
                ["style", "opacity", '0']
            ],
            "${_KEYHOLE}": [
                ["style", "opacity", '0']
            ],
            "${_key_module}": [
                ["style", "opacity", '0']
            ],
            "${_car}": [
                ["style", "left", '82px'],
                ["style", "opacity", '0']
            ],
            "${_FLOWMOVIE}": [
                ["style", "opacity", '0']
            ],
            "${_keyCylinder}": [
                ["style", "opacity", '0']
            ],
            "${_engineECU}": [
                ["style", "opacity", '0']
            ],
            "${_smatraECU}": [
                ["style", "opacity", '0']
            ],
            "${_txt_mt2}": [
                ["style", "opacity", '0']
            ],
            "${_txt_b2}": [
                ["style", "top", '992px'],
                ["style", "opacity", '0']
            ],
            "${_key_module_line}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1900px']
            ],
            "${_txt_b1}": [
                ["style", "top", '754px'],
                ["style", "opacity", '0']
            ],
            "${_txt_mt3}": [
                ["style", "opacity", '0'],
                ["style", "left", '1349px'],
                ["style", "width", '477px']
            ],
            "${_key_signal}": [
                ["style", "top", '640px'],
                ["style", "opacity", '0'],
                ["style", "left", '430px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1767,
            autoPlay: true,
            timeline: [
                { id: "eid22", tween: [ "style", "${_smatraECU}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 500, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_keyCylinder}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 500, easing: "easeOutQuad" },
                { id: "eid1", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 750, easing: "easeInQuad" },
                { id: "eid38", tween: [ "style", "${_txt_b1}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 500, easing: "easeOutQuad" },
                { id: "eid3", tween: [ "style", "${_car}", "opacity", '1', { fromValue: '0'}], position: 317, duration: 750, easing: "easeOutQuad" },
                { id: "eid9", tween: [ "style", "${_key_module_line}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_key_signal}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 500, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_flowLine}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 500, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_txt_mt2}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 500, easing: "easeOutQuad" },
                { id: "eid7", tween: [ "style", "${_key_module}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutQuad" },
                { id: "eid5", tween: [ "style", "${_car}", "left", '52px', { fromValue: '82px'}], position: 317, duration: 750, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_txt_b2}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 500, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_txt_mt3}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 500, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_engineECU}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 500, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeInQuad" },
                { id: "eid11", tween: [ "style", "${_modules}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_txt_mt1}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 500, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_FLOWMOVIE}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 500, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_KEYHOLE}", "opacity", '1', { fromValue: '0'}], position: 1267, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"KEYHOLE": {
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
                    rect: ['0px', '0px', '292', '139', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/key_hole.png'],
                    id: 'key_hole',
                    opacity: 1,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['40px', '8px', '121', '124', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/key_hole_nasa.png'],
                    id: 'key_hole_nasa',
                    opacity: 1,
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_key_hole}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_key_hole_nasa}": [
                ["style", "top", '8px'],
                ["style", "opacity", '0'],
                ["style", "left", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '139px'],
                ["style", "width", '292px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 433,
            autoPlay: false,
            timeline: [
                { id: "eid42", tween: [ "style", "${_key_hole_nasa}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233, easing: "easeOutQuad" },
                { id: "eid43", tween: [ "style", "${_key_hole_nasa}", "opacity", '0', { fromValue: '0.999998'}], position: 267, duration: 166, easing: "easeOutQuad" }            ]
        }
    }
},
"KEYMOVIE": {
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
                    rect: ['20px', '0px', '237', '121', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/key.png'],
                    id: 'key',
                    opacity: 1,
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '121px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '183px']
            ],
            "${_key}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-125px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2900,
            autoPlay: false,
            timeline: [
                { id: "eid47", tween: [ "style", "${_key}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_key}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "style", "${_key}", "left", '20px', { fromValue: '-125px'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid49", tween: [ "style", "${_key}", "left", '-125px', { fromValue: '20px'}], position: 2000, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"FLOWMOVIE": {
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
                    rect: ['599px', '93px', '350', '16', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_blue.png'],
                    id: 'flow_blue',
                    opacity: 1,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['567px', '27px', '350', '16', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_red.png'],
                    id: 'flow_red',
                    opacity: 1,
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0px', '0px', '350', '16', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flow_red.png'],
                    id: 'flow_redCopy',
                    opacity: 1,
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '109px'],
                ["style", "width", '949px']
            ],
            "${_flow_redCopy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_flow_red}": [
                ["style", "top", '27px'],
                ["style", "opacity", '1'],
                ["style", "left", '567px']
            ],
            "${_flow_blue}": [
                ["style", "top", '93px'],
                ["style", "opacity", '1'],
                ["style", "left", '599px']
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
                { id: "eid12", tween: [ "style", "${_flow_redCopy}", "left", '15px', { fromValue: '0px'}], position: 0, duration: 167, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${_flow_blue}", "left", '583px', { fromValue: '599px'}], position: 0, duration: 167, easing: "easeOutQuad" },
                { id: "eid13", tween: [ "style", "${_flow_red}", "left", '582px', { fromValue: '567px'}], position: 0, duration: 167, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-1882126");
