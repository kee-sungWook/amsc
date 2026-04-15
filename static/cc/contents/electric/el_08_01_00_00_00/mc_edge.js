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
                id: 'rock-side',
                type: 'image',
                tag: 'img',
                rect: ['914px', '314px','132','269','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rock.png"],
                transform: [[],['90']]
            },
            {
                id: 'rock-front',
                type: 'image',
                tag: 'img',
                rect: ['191px', '387px','132','269','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rock.png"]
            },
            {
                id: 'car_body',
                type: 'image',
                tag: 'img',
                rect: ['246', '476','1493','658','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car_body.png"]
            },
            {
                id: 'SIGNAL',
                display: 'none',
                type: 'rect',
                rect: ['263px', '544px','auto','auto','auto', 'auto']
            },
            {
                id: 'SIGNAL2',
                display: 'none',
                type: 'rect',
                rect: ['263', '544','auto','auto','auto', 'auto']
            },
            {
                id: 'SIGNAL3',
                display: 'none',
                type: 'rect',
                rect: ['263', '544','auto','auto','auto', 'auto']
            },
            {
                id: 'SIGNAL4',
                display: 'none',
                type: 'rect',
                rect: ['263', '544','auto','auto','auto', 'auto']
            },
            {
                id: 'AIRBAG',
                type: 'rect',
                rect: ['724', '522','auto','auto','auto', 'auto']
            },
            {
                id: 'CRASH',
                type: 'rect',
                rect: ['247', '316','auto','auto','auto', 'auto']
            },
            {
                id: 'MODULE',
                type: 'rect',
                rect: ['728', '773','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_c3',
                type: 'text',
                rect: ['219', '388','186','134','auto', 'auto'],
                text: "정면<br>충돌 감지<br>센서",
                align: "center",
                font: ['굴림', 41, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c2',
                type: 'text',
                rect: ['1125', '449','368','47','auto', 'auto'],
                text: "측면 충돌감지 센서",
                align: "center",
                font: ['굴림', 41, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_c1',
                type: 'text',
                rect: ['832', '752','271px','91','auto', 'auto'],
                text: "에어백<br>컨트롤 모듈",
                align: "auto",
                font: ['굴림', 41, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt2',
                type: 'text',
                rect: ['701px', '87','1131','106','auto', 'auto'],
                text: "에어백 컨트롤모듈은 에어백모듈과 안전벨트 프리텐셔너의\r작동여부와 전개시기를 결정하는 역할을 합니다.",
                align: "auto",
                font: ['나눔고딕', 46, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['60px', '92','572','76','auto', 'auto'],
                text: "에어백 컨트롤 모듈",
                align: "center",
                font: ['나눔고딕', 70, "rgb(0,0,0)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'SIGNAL4',
                symbolName: 'SIGNAL',
                autoPlay: {

                }
            },
            {
                id: 'SIGNAL3',
                symbolName: 'SIGNAL',
                autoPlay: {

                }
            },
            {
                id: 'MODULE',
                symbolName: 'MODULE',
                autoPlay: {

                }
            },
            {
                id: 'CRASH',
                symbolName: 'CRASH',
                autoPlay: {

                }
            },
            {
                id: 'AIRBAG',
                symbolName: 'AIRBAG',
                autoPlay: {

                }
            },
            {
                id: 'SIGNAL2',
                symbolName: 'SIGNAL',
                autoPlay: {

                }
            },
            {
                id: 'SIGNAL',
                symbolName: 'SIGNAL',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_rock-front}": [
                ["style", "top", '387px'],
                ["style", "opacity", '0'],
                ["style", "left", '21px']
            ],
            "${_SIGNAL2}": [
                ["style", "display", 'none'],
                ["style", "left", '262px'],
                ["style", "top", '948px']
            ],
            "${_rock-side}": [
                ["style", "top", '207px'],
                ["style", "opacity", '0'],
                ["style", "left", '914px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_SIGNAL4}": [
                ["style", "display", 'none'],
                ["style", "left", '1041px'],
                ["style", "top", '1015px']
            ],
            "${_txt_c2}": [
                ["style", "opacity", '0']
            ],
            "${_SIGNAL3}": [
                ["style", "display", 'none'],
                ["style", "left", '1042px'],
                ["style", "top", '477px']
            ],
            "${_txt1}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '60px'],
                ["transform", "scaleY", '0.95']
            ],
            "${_MODULE}": [
                ["style", "top", '773px'],
                ["style", "opacity", '0'],
                ["style", "left", '768px']
            ],
            "${_car_body}": [
                ["style", "top", '476px'],
                ["style", "opacity", '0'],
                ["style", "left", '286px']
            ],
            "${_txt2}": [
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '701px'],
                ["transform", "scaleY", '0.95']
            ],
            "${_txt_c1}": [
                ["style", "width", '271px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1900px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_CRASH}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["style", "left", '287px']
            ],
            "${_SIGNAL}": [
                ["style", "display", 'none']
            ],
            "${_txt_c3}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9800,
            autoPlay: true,
            labels: {
                "gogo": 1733
            },
            timeline: [
                { id: "eid186", tween: [ "transform", "${_txt1}", "scaleY", '1', { fromValue: '0.95'}], position: 0, duration: 433, easing: "easeOutQuad" },
                { id: "eid326", tween: [ "style", "${_car_body}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 467, easing: "easeOutQuad" },
                { id: "eid325", tween: [ "style", "${_CRASH}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 467, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "transform", "${_txt1}", "scaleX", '1', { fromValue: '0.95'}], position: 0, duration: 433, easing: "easeOutQuad" },
                { id: "eid194", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 433, easing: "easeOutQuad" },
                { id: "eid457", tween: [ "style", "${_MODULE}", "top", '793px', { fromValue: '773px'}], position: 6634, duration: 167, easing: "easeOutBounce" },
                { id: "eid460", tween: [ "style", "${_MODULE}", "top", '773px', { fromValue: '793px'}], position: 6800, duration: 166, easing: "easeOutBounce" },
                { id: "eid201", tween: [ "style", "${_SIGNAL2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid409", tween: [ "style", "${_SIGNAL2}", "display", 'block', { fromValue: 'none'}], position: 1400, duration: 0, easing: "easeOutQuad" },
                { id: "eid426", tween: [ "style", "${_SIGNAL2}", "display", 'none', { fromValue: 'block'}], position: 2267, duration: 0, easing: "easeOutBounce" },
                { id: "eid430", tween: [ "style", "${_SIGNAL2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
                { id: "eid465", tween: [ "style", "${_SIGNAL2}", "display", 'none', { fromValue: 'block'}], position: 6801, duration: 0, easing: "easeOutBounce" },
                { id: "eid434", tween: [ "style", "${_rock-side}", "opacity", '1', { fromValue: '0'}], position: 6101, duration: 533, easing: "easeInQuad" },
                { id: "eid467", tween: [ "style", "${_rock-side}", "opacity", '0', { fromValue: '1'}], position: 9267, duration: 33, easing: "easeOutQuad" },
                { id: "eid204", tween: [ "style", "${_rock-front}", "left", '191px', { fromValue: '21px'}], position: 1734, duration: 533, easing: "easeInQuad" },
                { id: "eid212", tween: [ "style", "${_MODULE}", "left", '728px', { fromValue: '768px'}], position: 600, duration: 467, easing: "easeOutQuad" },
                { id: "eid418", tween: [ "style", "${_MODULE}", "left", '748px', { fromValue: '728px'}], position: 2267, duration: 179, easing: "easeOutBounce" },
                { id: "eid421", tween: [ "style", "${_MODULE}", "left", '728px', { fromValue: '748px'}], position: 2446, duration: 154, easing: "easeOutBounce" },
                { id: "eid188", tween: [ "transform", "${_txt2}", "scaleX", '1', { fromValue: '0.95'}], position: 267, duration: 433, easing: "easeOutQuad" },
                { id: "eid458", tween: [ "style", "${_CRASH}", "top", '336px', { fromValue: '316px'}], position: 6634, duration: 167, easing: "easeOutBounce" },
                { id: "eid461", tween: [ "style", "${_CRASH}", "top", '316px', { fromValue: '336px'}], position: 6800, duration: 166, easing: "easeOutBounce" },
                { id: "eid218", tween: [ "style", "${_txt_c3}", "opacity", '1', { fromValue: '0'}], position: 1067, duration: 333, easing: "easeOutQuad" },
                { id: "eid459", tween: [ "style", "${_car_body}", "top", '496px', { fromValue: '476px'}], position: 6634, duration: 167, easing: "easeOutQuad" },
                { id: "eid462", tween: [ "style", "${_car_body}", "top", '476px', { fromValue: '496px'}], position: 6800, duration: 166, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 433, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "style", "${_CRASH}", "left", '247px', { fromValue: '287px'}], position: 600, duration: 467, easing: "easeOutQuad" },
                { id: "eid419", tween: [ "style", "${_CRASH}", "left", '267px', { fromValue: '247px'}], position: 2267, duration: 179, easing: "easeOutBounce" },
                { id: "eid422", tween: [ "style", "${_CRASH}", "left", '247px', { fromValue: '267px'}], position: 2446, duration: 154, easing: "easeOutBounce" },
                { id: "eid199", tween: [ "style", "${_SIGNAL4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid407", tween: [ "style", "${_SIGNAL4}", "display", 'block', { fromValue: 'none'}], position: 1400, duration: 0, easing: "easeOutQuad" },
                { id: "eid424", tween: [ "style", "${_SIGNAL4}", "display", 'none', { fromValue: 'block'}], position: 2267, duration: 0, easing: "easeOutBounce" },
                { id: "eid428", tween: [ "style", "${_SIGNAL4}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
                { id: "eid463", tween: [ "style", "${_SIGNAL4}", "display", 'none', { fromValue: 'block'}], position: 6801, duration: 0, easing: "easeOutBounce" },
                { id: "eid206", tween: [ "style", "${_rock-side}", "top", '314px', { fromValue: '207px'}], position: 6101, duration: 533, easing: "easeInQuad" },
                { id: "eid190", tween: [ "transform", "${_txt2}", "scaleY", '1', { fromValue: '0.95'}], position: 267, duration: 433, easing: "easeOutQuad" },
                { id: "eid216", tween: [ "style", "${_txt_c1}", "opacity", '1', { fromValue: '0'}], position: 1067, duration: 333, easing: "easeOutQuad" },
                { id: "eid202", tween: [ "style", "${_SIGNAL}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid410", tween: [ "style", "${_SIGNAL}", "display", 'block', { fromValue: 'none'}], position: 1400, duration: 0, easing: "easeOutQuad" },
                { id: "eid427", tween: [ "style", "${_SIGNAL}", "display", 'none', { fromValue: 'block'}], position: 2267, duration: 0, easing: "easeOutBounce" },
                { id: "eid431", tween: [ "style", "${_SIGNAL}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
                { id: "eid466", tween: [ "style", "${_SIGNAL}", "display", 'none', { fromValue: 'block'}], position: 6801, duration: 0, easing: "easeOutBounce" },
                { id: "eid220", tween: [ "style", "${_txt_c2}", "opacity", '1', { fromValue: '0'}], position: 1067, duration: 333, easing: "easeOutQuad" },
                { id: "eid324", tween: [ "style", "${_MODULE}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 467, easing: "easeOutQuad" },
                { id: "eid411", tween: [ "style", "${_rock-front}", "opacity", '1', { fromValue: '0'}], position: 1734, duration: 533, easing: "easeInQuad" },
                { id: "eid433", tween: [ "style", "${_rock-front}", "opacity", '0', { fromValue: '1'}], position: 4967, duration: 33, easing: "easeInQuad" },
                { id: "eid210", tween: [ "style", "${_car_body}", "left", '246px', { fromValue: '286px'}], position: 600, duration: 467, easing: "easeOutQuad" },
                { id: "eid420", tween: [ "style", "${_car_body}", "left", '266px', { fromValue: '246px'}], position: 2267, duration: 179, easing: "easeOutBounce" },
                { id: "eid423", tween: [ "style", "${_car_body}", "left", '246px', { fromValue: '266px'}], position: 2446, duration: 154, easing: "easeOutBounce" },
                { id: "eid200", tween: [ "style", "${_SIGNAL3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid408", tween: [ "style", "${_SIGNAL3}", "display", 'block', { fromValue: 'none'}], position: 1400, duration: 0, easing: "easeOutQuad" },
                { id: "eid425", tween: [ "style", "${_SIGNAL3}", "display", 'none', { fromValue: 'block'}], position: 2267, duration: 0, easing: "easeOutBounce" },
                { id: "eid429", tween: [ "style", "${_SIGNAL3}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
                { id: "eid464", tween: [ "style", "${_SIGNAL3}", "display", 'none', { fromValue: 'block'}], position: 6801, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"MODULE": {
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
                    rect: ['0px', '0px', '61', '59', 'auto', 'auto'],
                    tag: 'img',
                    id: 'module_crash',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/module_crash.png']
                },
                {
                    rect: ['0px', '0px', '62', '60', 'auto', 'auto'],
                    tag: 'img',
                    id: 'module_whiteLine',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/module_whiteLine.png']
                },
                {
                    type: 'image',
                    id: 'module_normal',
                    tag: 'img',
                    rect: ['0px', '0px', '61', '59', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/module_normal.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_module_whiteLine}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '62px']
            ],
            "${_module_normal}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_module_crash}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 667,
            autoPlay: false,
            labels: {
                "normal": 0,
                "crash": 167
            },
            timeline: [
                { id: "eid123", tween: [ "style", "${_module_crash}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid126", tween: [ "style", "${_module_crash}", "display", 'block', { fromValue: 'none'}], position: 167, duration: 0 },
                { id: "eid122", tween: [ "style", "${_module_whiteLine}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${_module_whiteLine}", "display", 'block', { fromValue: 'none'}], position: 167, duration: 0 },
                { id: "eid124", tween: [ "style", "${_module_normal}", "display", 'none', { fromValue: 'block'}], position: 167, duration: 0 },
                { id: "eid128", tween: [ "style", "${_module_whiteLine}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 233 },
                { id: "eid129", tween: [ "style", "${_module_whiteLine}", "opacity", '0', { fromValue: '1'}], position: 434, duration: 233 }            ]
        }
    }
},
"CRASH": {
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
                    display: 'none',
                    type: 'rect',
                    id: 'CRASH_S',
                    rect: ['560', '197', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'CRASH_F',
                    rect: ['0', '200', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'sensor',
                    tag: 'img',
                    rect: ['51px', '207px', '839', '564', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sensor.png']
                },
                {
                    rect: ['811px', '177px', '87', '624', 'auto', 'auto'],
                    tag: 'img',
                    id: 'sensor_selector_side',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/sensor_selector_side.png']
                },
                {
                    rect: ['32px', '244px', '86', '490', 'auto', 'auto'],
                    tag: 'img',
                    id: 'sensor_selector_front',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/sensor_selector_front.png']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SENSOR_FLOW1',
                    rect: ['197', '106', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SENSOR_FLOW1Copy',
                    rect: ['197', '106', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SENSOR_FLOW2',
                    rect: ['962', '-101', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'SENSOR_FLOW2Copy',
                    rect: ['962', '-101', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'SENSOR_FLOW1Copy',
                symbolName: 'SENSOR_FLOW1'
            },
            {
                id: 'SENSOR_FLOW2',
                symbolName: 'SENSOR_FLOW2'
            },
            {
                id: 'SENSOR_FLOW2Copy',
                symbolName: 'SENSOR_FLOW2'
            },
            {
                id: 'CRASH_F',
                symbolName: 'CRASH_F'
            },
            {
                id: 'CRASH_S',
                symbolName: 'CRASH_S'
            },
            {
                id: 'SENSOR_FLOW1',
                symbolName: 'SENSOR_FLOW1'
            }            ]
        },
    states: {
        "Base State": {
            "${_SENSOR_FLOW1}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '23deg'],
                ["style", "display", 'none'],
                ["style", "left", '112px'],
                ["style", "top", '300px']
            ],
            "${_CRASH_S}": [
                ["style", "display", 'none']
            ],
            "${_CRASH_F}": [
                ["style", "display", 'none']
            ],
            "${_sensor}": [
                ["style", "left", '51px'],
                ["style", "top", '207px']
            ],
            "${_sensor_selector_front}": [
                ["style", "top", '244px'],
                ["style", "left", '32px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '801px'],
                ["style", "width", '1260px']
            ],
            "${_SENSOR_FLOW2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-217deg'],
                ["style", "display", 'none'],
                ["style", "left", '823px'],
                ["style", "top", '241px']
            ],
            "${_SENSOR_FLOW1Copy}": [
                ["style", "top", '666px'],
                ["transform", "rotateZ", '-23deg'],
                ["style", "display", 'none'],
                ["style", "left", '112px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_SENSOR_FLOW2Copy}": [
                ["style", "top", '729px'],
                ["transform", "rotateZ", '217deg'],
                ["style", "display", 'none'],
                ["style", "left", '823px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_sensor_selector_side}": [
                ["style", "top", '177px'],
                ["style", "left", '811px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            labels: {
                "front": 67,
                "side": 300
            },
            timeline: [
                { id: "eid66", tween: [ "style", "${_SENSOR_FLOW1}", "display", 'block', { fromValue: 'none'}], position: 67, duration: 0 },
                { id: "eid68", tween: [ "style", "${_SENSOR_FLOW1}", "display", 'none', { fromValue: 'block'}], position: 300, duration: 0 },
                { id: "eid75", tween: [ "style", "${_SENSOR_FLOW2}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid1110", tween: [ "style", "${_SENSOR_FLOW2}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid1111", tween: [ "style", "${_SENSOR_FLOW2}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid1112", tween: [ "style", "${_SENSOR_FLOW2}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid1113", tween: [ "style", "${_SENSOR_FLOW2}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_sensor_selector_side}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_sensor_selector_side}", "display", 'block', { fromValue: 'none'}], position: 300, duration: 0 },
                { id: "eid86", tween: [ "style", "${_SENSOR_FLOW2}", "left", '823px', { fromValue: '823px'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_SENSOR_FLOW1}", "left", '112px', { fromValue: '112px'}], position: 67, duration: 0 },
                { id: "eid78", tween: [ "transform", "${_SENSOR_FLOW2}", "rotateZ", '-217deg', { fromValue: '-217deg'}], position: 0, duration: 0 },
                { id: "eid99", tween: [ "transform", "${_SENSOR_FLOW2Copy}", "rotateZ", '217deg', { fromValue: '217deg'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_sensor_selector_front}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_sensor_selector_front}", "display", 'block', { fromValue: 'none'}], position: 67, duration: 0 },
                { id: "eid50", tween: [ "style", "${_sensor_selector_front}", "display", 'none', { fromValue: 'block'}], position: 300, duration: 0 },
                { id: "eid56", tween: [ "transform", "${_SENSOR_FLOW1}", "rotateZ", '23deg', { fromValue: '23deg'}], position: 67, duration: 0 },
                { id: "eid63", tween: [ "style", "${_SENSOR_FLOW1Copy}", "left", '112px', { fromValue: '112px'}], position: 67, duration: 0 },
                { id: "eid43", tween: [ "style", "${_CRASH_S}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_CRASH_S}", "display", 'block', { fromValue: 'none'}], position: 300, duration: 0 },
                { id: "eid62", tween: [ "style", "${_SENSOR_FLOW1Copy}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid1114", tween: [ "style", "${_SENSOR_FLOW1Copy}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid1115", tween: [ "style", "${_SENSOR_FLOW1Copy}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid1116", tween: [ "style", "${_SENSOR_FLOW1Copy}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid1117", tween: [ "style", "${_SENSOR_FLOW1Copy}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid102", tween: [ "style", "${_SENSOR_FLOW2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${_SENSOR_FLOW2Copy}", "display", 'block', { fromValue: 'none'}], position: 300, duration: 0 },
                { id: "eid92", tween: [ "style", "${_SENSOR_FLOW2Copy}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid1118", tween: [ "style", "${_SENSOR_FLOW2Copy}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid1119", tween: [ "style", "${_SENSOR_FLOW2Copy}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid1120", tween: [ "style", "${_SENSOR_FLOW2Copy}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid1121", tween: [ "style", "${_SENSOR_FLOW2Copy}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_SENSOR_FLOW2Copy}", "top", '729px', { fromValue: '729px'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_CRASH_F}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_CRASH_F}", "display", 'block', { fromValue: 'none'}], position: 67, duration: 0 },
                { id: "eid45", tween: [ "style", "${_CRASH_F}", "display", 'none', { fromValue: 'block'}], position: 300, duration: 0 },
                { id: "eid60", tween: [ "style", "${_SENSOR_FLOW1}", "top", '300px', { fromValue: '300px'}], position: 67, duration: 0 },
                { id: "eid88", tween: [ "style", "${_SENSOR_FLOW2}", "top", '241px', { fromValue: '241px'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_SENSOR_FLOW1Copy}", "display", 'block', { fromValue: 'none'}], position: 67, duration: 0 },
                { id: "eid67", tween: [ "style", "${_SENSOR_FLOW1Copy}", "display", 'none', { fromValue: 'block'}], position: 300, duration: 0 },
                { id: "eid93", tween: [ "style", "${_SENSOR_FLOW2Copy}", "left", '823px', { fromValue: '823px'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_SENSOR_FLOW1Copy}", "top", '666px', { fromValue: '666px'}], position: 67, duration: 0 },
                { id: "eid54", tween: [ "style", "${_SENSOR_FLOW1}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid1122", tween: [ "style", "${_SENSOR_FLOW1}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid1123", tween: [ "style", "${_SENSOR_FLOW1}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid1124", tween: [ "style", "${_SENSOR_FLOW1}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid1125", tween: [ "style", "${_SENSOR_FLOW1}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 67, duration: 0 },
                { id: "eid103", tween: [ "style", "${_SENSOR_FLOW2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_SENSOR_FLOW2}", "display", 'block', { fromValue: 'none'}], position: 300, duration: 0 },
                { id: "eid64", tween: [ "transform", "${_SENSOR_FLOW1Copy}", "rotateZ", '-23deg', { fromValue: '-23deg'}], position: 67, duration: 0 }            ]
        }
    }
},
"AIRBAG": {
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
                    transform: [[0, 0], [], [], ['1', '0.4']],
                    tag: 'img',
                    id: 'airbag_side2',
                    type: 'image',
                    rect: ['120px', '504px', '713', '61', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/airbag_side2.png']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.4']],
                    tag: 'img',
                    id: 'airbag_side1',
                    type: 'image',
                    rect: ['120px', '0px', '713', '61', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/airbag_side1.png']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    id: 'airbag_passenger',
                    type: 'image',
                    rect: ['1px', '78px', '152', '158', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/airbag_passenger.png']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    id: 'airbag_driver',
                    type: 'image',
                    rect: ['2px', '318px', '145', '155', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/airbag_driver.png']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'AIRBAG_lineMovie2',
                    rect: ['120', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'AIRBAG_lineMovie1',
                    rect: ['0', '78', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'AIRBAG_lineMovie2',
                symbolName: 'AIRBAG_lineMovie2'
            },
            {
                id: 'AIRBAG_lineMovie1',
                symbolName: 'AIRBAG_lineMovie1'
            }            ]
        },
    states: {
        "Base State": {
            "${_airbag_passenger}": [
                ["style", "top", '78px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "display", 'block']
            ],
            "${_airbag_side1}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.4'],
                ["style", "opacity", '0'],
                ["style", "left", '120px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '565px'],
                ["style", "width", '833px']
            ],
            "${_AIRBAG_lineMovie1}": [
                ["style", "display", 'none']
            ],
            "${_AIRBAG_lineMovie2}": [
                ["style", "display", 'none']
            ],
            "${_airbag_side2}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["style", "opacity", '0'],
                ["style", "left", '120px'],
                ["style", "top", '504px']
            ],
            "${_airbag_driver}": [
                ["style", "top", '318px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1467,
            autoPlay: false,
            labels: {
                "front": 67,
                "side": 800
            },
            timeline: [
                { id: "eid155", tween: [ "transform", "${_airbag_passenger}", "scaleX", '1', { fromValue: '0.5'}], position: 67, duration: 667, easing: "easeOutBounce" },
                { id: "eid154", tween: [ "transform", "${_airbag_driver}", "scaleX", '1', { fromValue: '0.5'}], position: 67, duration: 667, easing: "easeOutBounce" },
                { id: "eid158", tween: [ "style", "${_airbag_driver}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 667, easing: "easeOutBounce" },
                { id: "eid162", tween: [ "style", "${_airbag_side1}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 667, easing: "easeOutBounce" },
                { id: "eid152", tween: [ "style", "${_AIRBAG_lineMovie2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid166", tween: [ "style", "${_AIRBAG_lineMovie2}", "display", 'block', { fromValue: 'none'}], position: 1467, duration: 0, easing: "easeOutBounce" },
                { id: "eid153", tween: [ "style", "${_AIRBAG_lineMovie1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "style", "${_AIRBAG_lineMovie1}", "display", 'block', { fromValue: 'none'}], position: 733, duration: 0, easing: "easeOutBounce" },
                { id: "eid165", tween: [ "style", "${_AIRBAG_lineMovie1}", "display", 'none', { fromValue: 'block'}], position: 800, duration: 0, easing: "easeOutBounce" },
                { id: "eid159", tween: [ "style", "${_airbag_passenger}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 667, easing: "easeOutBounce" },
                { id: "eid160", tween: [ "transform", "${_airbag_side1}", "scaleY", '1', { fromValue: '0.4'}], position: 800, duration: 667, easing: "easeOutBounce" },
                { id: "eid163", tween: [ "style", "${_airbag_side2}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 667, easing: "easeOutBounce" },
                { id: "eid156", tween: [ "transform", "${_airbag_driver}", "scaleY", '1', { fromValue: '0.5'}], position: 67, duration: 667, easing: "easeOutBounce" },
                { id: "eid157", tween: [ "transform", "${_airbag_passenger}", "scaleY", '1', { fromValue: '0.5'}], position: 67, duration: 667, easing: "easeOutBounce" },
                { id: "eid161", tween: [ "transform", "${_airbag_side2}", "scaleY", '1', { fromValue: '0.4'}], position: 800, duration: 667, easing: "easeOutBounce" },
                { id: "eid612", tween: [ "style", "${_airbag_driver}", "display", 'none', { fromValue: 'block'}], position: 800, duration: 0, easing: "easeOutBounce" },
                { id: "eid613", tween: [ "style", "${_airbag_passenger}", "display", 'none', { fromValue: 'block'}], position: 800, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"SIGNAL": {
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
                    id: 'signal_oval',
                    type: 'image',
                    rect: ['0px', '0px', '119px', '118px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_oval.png', '0px', '0px']
                },
                {
                    id: 'signal_ovalCopy',
                    type: 'image',
                    rect: ['0px', '0px', '119px', '118px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_oval.png', '0px', '0px']
                },
                {
                    id: 'signal_ovalCopy2',
                    type: 'image',
                    rect: ['0px', '0px', '119px', '118px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_oval.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_signal_ovalCopy}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_signal_oval}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_signal_ovalCopy2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '118px'],
                ["style", "width", '119px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "transform", "${_signal_ovalCopy}", "scaleY", '1', { fromValue: '0.7'}], position: 188, duration: 375 },
                { id: "eid14", tween: [ "style", "${_signal_ovalCopy2}", "opacity", '1', { fromValue: '0'}], position: 375, duration: 188 },
                { id: "eid15", tween: [ "style", "${_signal_ovalCopy2}", "opacity", '0', { fromValue: '1'}], position: 563, duration: 187 },
                { id: "eid6", tween: [ "style", "${_signal_oval}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 187 },
                { id: "eid8", tween: [ "style", "${_signal_oval}", "opacity", '0', { fromValue: '1'}], position: 187, duration: 187 },
                { id: "eid4", tween: [ "transform", "${_signal_oval}", "scaleY", '1', { fromValue: '0.7'}], position: 0, duration: 375 },
                { id: "eid13", tween: [ "transform", "${_signal_ovalCopy2}", "scaleX", '1', { fromValue: '0.7'}], position: 375, duration: 375 },
                { id: "eid9", tween: [ "transform", "${_signal_ovalCopy}", "scaleX", '1', { fromValue: '0.7'}], position: 188, duration: 375 },
                { id: "eid2", tween: [ "transform", "${_signal_oval}", "scaleX", '1', { fromValue: '0.7'}], position: 0, duration: 375 },
                { id: "eid16", tween: [ "transform", "${_signal_ovalCopy2}", "scaleY", '1', { fromValue: '0.7'}], position: 375, duration: 375 },
                { id: "eid10", tween: [ "style", "${_signal_ovalCopy}", "opacity", '1', { fromValue: '0'}], position: 188, duration: 187 },
                { id: "eid11", tween: [ "style", "${_signal_ovalCopy}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 187 }            ]
        }
    }
},
"CRASH_F": {
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
                    id: 'crash_front',
                    tag: 'img',
                    rect: ['0px', '0px', '206', '578', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crash_front.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crash_front}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '578px'],
                ["style", "width", '206px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 367,
            autoPlay: true,
            timeline: [
                { id: "eid40", tween: [ "style", "${_crash_front}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 167 },
                { id: "eid41", tween: [ "style", "${_crash_front}", "opacity", '0', { fromValue: '0.998004'}], position: 200, duration: 167 }            ]
        }
    }
},
"CRASH_S": {
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
                    id: 'crash_side',
                    tag: 'img',
                    rect: ['0px', '0px', '700', '584', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/crash_side.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_crash_side}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '584px'],
                ["style", "width", '700px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 367,
            autoPlay: true,
            timeline: [
                { id: "eid37", tween: [ "style", "${_crash_side}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 167 },
                { id: "eid38", tween: [ "style", "${_crash_side}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 167 }            ]
        }
    }
},
"SENSOR_FLOW1": {
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
                    id: 'signal_src',
                    tag: 'img',
                    rect: ['-45px', '0px', '851', '5', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_signal_src}": [
                ["style", "left", '-45px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '420px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            timeline: [
                { id: "eid69", tween: [ "style", "${_signal_src}", "left", '-15px', { fromValue: '-45px'}], position: 0, duration: 200 }            ]
        }
    }
},
"SENSOR_FLOW2": {
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
                    id: 'signal_src',
                    tag: 'img',
                    rect: ['-61px', '0px', '851', '5', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/signal_src.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '380px']
            ],
            "${_signal_src}": [
                ["style", "left", '-61px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 267,
            autoPlay: true,
            timeline: [
                { id: "eid90", tween: [ "style", "${symbolSelector}", "width", '380px', { fromValue: '380px'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_signal_src}", "left", '0px', { fromValue: '-61px'}], position: 0, duration: 267 }            ]
        }
    }
},
"AIRBAG_lineMovie1": {
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
                    id: 'airbag_whiteLine1',
                    tag: 'img',
                    rect: ['0px', '0px', '153', '396', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/airbag_whiteLine1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_airbag_whiteLine1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '396px'],
                ["style", "width", '153px']
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
                { id: "eid147", tween: [ "style", "${_airbag_whiteLine1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid148", tween: [ "style", "${_airbag_whiteLine1}", "opacity", '0', { fromValue: '1'}], position: 267, duration: 200 }            ]
        }
    }
},
"AIRBAG_lineMovie2": {
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
                    id: 'airbag_whiteLine2',
                    tag: 'img',
                    rect: ['0px', '0px', '713', '565', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/airbag_whiteLine2.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '565px'],
                ["style", "width", '713px']
            ],
            "${_airbag_whiteLine2}": [
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
            duration: 467,
            autoPlay: true,
            timeline: [
                { id: "eid150", tween: [ "style", "${_airbag_whiteLine2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid151", tween: [ "style", "${_airbag_whiteLine2}", "opacity", '0', { fromValue: '1'}], position: 267, duration: 200 }            ]
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
})(jQuery, AdobeEdge, "EDGE-13423272");
