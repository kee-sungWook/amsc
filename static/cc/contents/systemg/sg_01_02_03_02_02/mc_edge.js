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
                id: 'BOSCH',
                type: 'rect',
                rect: ['1469', '157','auto','auto','auto', 'auto']
            },
            {
                id: 'DELPHI',
                type: 'rect',
                rect: ['379', '157','auto','auto','auto', 'auto']
            },
            {
                id: 'guideArrow',
                type: 'image',
                tag: 'img',
                rect: ['524px', '200px','1381','694','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"guideArrow.png"]
            },
            {
                id: 'txt_B5',
                type: 'text',
                rect: ['1700px', '857px','139','50','auto', 'auto'],
                text: "노즐팁",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_B4',
                type: 'text',
                rect: ['1297px', '595px','139','50','auto', 'auto'],
                text: "프렌져",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_B3',
                type: 'text',
                rect: ['1916px', '333px','184','50','auto', 'auto'],
                text: "연료레일",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_B2',
                type: 'text',
                rect: ['1916px', '185px','291','50','auto', 'auto'],
                text: "ECU 전류제어",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_B1',
                type: 'text',
                rect: ['1367px', '189px','184','50','auto', 'auto'],
                text: "리턴라인",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_D6',
                type: 'text',
                rect: ['314px', '661px','199','50','auto', 'auto'],
                text: "노즐 니들",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_D5',
                type: 'text',
                rect: ['284px', '578px','229','50','auto', 'auto'],
                text: "컨트롤챔버",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_D4',
                type: 'text',
                rect: ['832px', '482px','184','50','auto', 'auto'],
                text: "감압밸브",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_D3',
                type: 'text',
                rect: ['832px', '418px','229','50','auto', 'auto'],
                text: "솔레노이드",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_D2',
                type: 'text',
                rect: ['193px', '432px','184','50','auto', 'auto'],
                text: "리턴라인",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_D1',
                type: 'text',
                rect: ['451px', '189px','184','50','auto', 'auto'],
                text: "고압펌프",
                align: "auto",
                font: ['굴림', 45, "rgb(0,0,0)", "normal", "none", "normal"]
            },
            {
                id: 'txt_titleD',
                type: 'text',
                rect: ['448px', '52px','447','76','auto', 'auto'],
                text: "델파이 인젝터",
                align: "auto",
                font: ['굴림', 70, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'txt_titleB',
                type: 'text',
                rect: ['1410px', '52px','377','76','auto', 'auto'],
                text: "보쉬 인젝터",
                align: "auto",
                font: ['굴림', 70, "rgb(0,75,140)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'BOSCH',
                symbolName: 'BOSCH',
                autoPlay: {

                }
            },
            {
                id: 'DELPHI',
                symbolName: 'DELPHI',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_txt_D5}": [
                ["style", "top", '578px'],
                ["style", "opacity", '0'],
                ["style", "left", '284px']
            ],
            "${_txt_B4}": [
                ["style", "top", '595px'],
                ["style", "opacity", '0'],
                ["style", "left", '1297px']
            ],
            "${_txt_D1}": [
                ["style", "top", '189px'],
                ["style", "opacity", '0'],
                ["style", "left", '451px']
            ],
            "${_txt_D4}": [
                ["style", "top", '482px'],
                ["style", "opacity", '0'],
                ["style", "left", '832px']
            ],
            "${_BOSCH}": [
                ["style", "opacity", '0']
            ],
            "${_txt_D2}": [
                ["style", "top", '432px'],
                ["style", "opacity", '0'],
                ["style", "left", '193px']
            ],
            "${_txt_B2}": [
                ["style", "top", '185px'],
                ["style", "opacity", '0'],
                ["style", "left", '1916px']
            ],
            "${_txt_titleD}": [
                ["style", "top", '52px'],
                ["style", "opacity", '0'],
                ["style", "left", '448px']
            ],
            "${_txt_B3}": [
                ["style", "top", '333px'],
                ["style", "opacity", '0'],
                ["style", "left", '1916px']
            ],
            "${_txt_D3}": [
                ["style", "top", '418px'],
                ["style", "opacity", '0'],
                ["style", "left", '832px']
            ],
            "${_DELPHI}": [
                ["style", "opacity", '0']
            ],
            "${_txt_D6}": [
                ["style", "top", '661px'],
                ["style", "opacity", '0'],
                ["style", "left", '314px']
            ],
            "${_txt_B1}": [
                ["style", "top", '189px'],
                ["style", "opacity", '0'],
                ["style", "left", '1367px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '2400px']
            ],
            "${_txt_B5}": [
                ["style", "top", '857px'],
                ["style", "opacity", '0'],
                ["style", "left", '1700px']
            ],
            "${_guideArrow}": [
                ["style", "top", '200px'],
                ["style", "opacity", '0'],
                ["style", "left", '524px']
            ],
            "${_txt_titleB}": [
                ["style", "top", '52px'],
                ["style", "opacity", '0'],
                ["style", "left", '1410px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6184,
            autoPlay: true,
            timeline: [
                { id: "eid225", tween: [ "style", "${_guideArrow}", "opacity", '1', { fromValue: '0'}], position: 567, duration: 200 },
                { id: "eid223", tween: [ "style", "${_txt_D4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 233 },
                { id: "eid221", tween: [ "style", "${_txt_B5}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 233 },
                { id: "eid199", tween: [ "style", "${_txt_titleD}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233 },
                { id: "eid219", tween: [ "style", "${_txt_D1}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 233 },
                { id: "eid205", tween: [ "style", "${_txt_B4}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 233 },
                { id: "eid197", tween: [ "style", "${_BOSCH}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 233 },
                { id: "eid196", tween: [ "style", "${_DELPHI}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 233 },
                { id: "eid211", tween: [ "style", "${_txt_B1}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 233 },
                { id: "eid215", tween: [ "style", "${_txt_D2}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 233 },
                { id: "eid203", tween: [ "style", "${_txt_D3}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 233 },
                { id: "eid201", tween: [ "style", "${_txt_D5}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 233 },
                { id: "eid207", tween: [ "style", "${_txt_B3}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 233 },
                { id: "eid209", tween: [ "style", "${_txt_B2}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 233 },
                { id: "eid213", tween: [ "style", "${_txt_titleB}", "opacity", '1', { fromValue: '0'}], position: 167, duration: 233 },
                { id: "eid217", tween: [ "style", "${_txt_D6}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 233 },
                { id: "eid151", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOSCH}', [] ], ""], position: 784 },
                { id: "eid179", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_DELPHI}', [] ], ""], position: 784 }            ]
        }
    }
},
"SOLENOID": {
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                    rect: ['0px', '0px', '33px', '50px', 'auto', 'auto'],
                    fill: ['rgba(236,252,190,1.00)']
                },
                {
                    rect: ['5px', '43px', '26px', '3px', 'auto', 'auto'],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    id: 'RoundRect',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(128,125,63,1.00)']
                },
                {
                    rect: ['5px', '5px', '26px', '3px', 'auto', 'auto'],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    id: 'RoundRectCopy7',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(128,125,63,1.00)']
                },
                {
                    transform: [[0, 0], ['15']],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    rect: ['5px', '39px', '26px', '3px', 'auto', 'auto'],
                    id: 'RoundRectCopy',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(128,125,63,1.00)']
                },
                {
                    transform: [[0, 0], ['15']],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    rect: ['5px', '33px', '26px', '3px', 'auto', 'auto'],
                    id: 'RoundRectCopy2',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(128,125,63,1.00)']
                },
                {
                    transform: [[0, 0], ['15']],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    rect: ['5px', '27px', '26px', '3px', 'auto', 'auto'],
                    id: 'RoundRectCopy4',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(128,125,63,1.00)']
                },
                {
                    transform: [[0, 0], ['15']],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    rect: ['5px', '21px', '26px', '3px', 'auto', 'auto'],
                    id: 'RoundRectCopy3',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(128,125,63,1.00)']
                },
                {
                    transform: [[0, 0], ['15']],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    rect: ['5px', '15px', '26px', '3px', 'auto', 'auto'],
                    id: 'RoundRectCopy6',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(128,125,63,1.00)']
                },
                {
                    transform: [[0, 0], ['15']],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    rect: ['5px', '9px', '26px', '3px', 'auto', 'auto'],
                    id: 'RoundRectCopy5',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(128,125,63,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(128,125,63,1.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '5px'],
                ["style", "top", '43px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '3px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_RoundRectCopy3}": [
                ["color", "background-color", 'rgba(128,125,63,1.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '5px'],
                ["style", "top", '21px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '3px'],
                ["transform", "rotateZ", '15deg'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_RoundRectCopy}": [
                ["color", "background-color", 'rgba(128,125,63,1.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '5px'],
                ["style", "top", '39px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '3px'],
                ["transform", "rotateZ", '15deg'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_RoundRectCopy6}": [
                ["color", "background-color", 'rgba(128,125,63,1.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '5px'],
                ["style", "top", '15px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '3px'],
                ["transform", "rotateZ", '15deg'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_RoundRectCopy2}": [
                ["color", "background-color", 'rgba(128,125,63,1.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '5px'],
                ["style", "top", '33px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '3px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '15deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '52px'],
                ["style", "width", '35px']
            ],
            "${_RoundRectCopy7}": [
                ["color", "background-color", 'rgba(128,125,63,1.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '5px'],
                ["style", "top", '5px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '3px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(236,252,190,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '33px']
            ],
            "${_RoundRectCopy4}": [
                ["color", "background-color", 'rgba(128,125,63,1.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '5px'],
                ["style", "top", '27px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '3px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '15deg']
            ],
            "${_RoundRectCopy5}": [
                ["color", "background-color", 'rgba(128,125,63,1.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '5px'],
                ["style", "top", '9px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '3px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '15deg']
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
},
"ARROW_BLUE": {
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
                    rect: ['5px', '-26px', '29px', '32px', 'auto', 'auto'],
                    id: 'blueArrow_mask',
                    fill: ['rgba(0,0,0,0)', 'images/blueArrow_mask.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['5px', '-26px', '29px', '32px', 'auto', 'auto'],
                    id: 'blueArrow_maskCopy',
                    fill: ['rgba(0,0,0,0)', 'images/blueArrow_mask.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['5px', '-26px', '29px', '32px', 'auto', 'auto'],
                    id: 'blueArrow_maskCopy2',
                    fill: ['rgba(0,0,0,0)', 'images/blueArrow_mask.png'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blueArrow_maskCopy2}": [
                ["style", "top", '-26px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "width", '29px']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '37px'],
                ["style", "overflow", 'visible']
            ],
            "${_blueArrow_maskCopy}": [
                ["style", "top", '-26px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "width", '29px']
            ],
            "${_blueArrow_mask}": [
                ["style", "top", '-26px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "width", '29px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            timeline: [
                { id: "eid188", tween: [ "style", "${_blueArrow_maskCopy}", "top", '51px', { fromValue: '-26px'}], position: 67, duration: 267 },
                { id: "eid187", tween: [ "style", "${_blueArrow_mask}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 133 },
                { id: "eid186", tween: [ "style", "${_blueArrow_mask}", "opacity", '0', { fromValue: '1'}], position: 133, duration: 134 },
                { id: "eid191", tween: [ "style", "${_blueArrow_maskCopy2}", "top", '51px', { fromValue: '-26px'}], position: 133, duration: 267 },
                { id: "eid189", tween: [ "style", "${_blueArrow_maskCopy}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 133 },
                { id: "eid190", tween: [ "style", "${_blueArrow_maskCopy}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 134 },
                { id: "eid192", tween: [ "style", "${_blueArrow_maskCopy2}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 133 },
                { id: "eid193", tween: [ "style", "${_blueArrow_maskCopy2}", "opacity", '0', { fromValue: '1'}], position: 266, duration: 134 },
                { id: "eid182", tween: [ "style", "${_blueArrow_mask}", "top", '51px', { fromValue: '-26px'}], position: 0, duration: 267 }            ]
        }
    }
},
"DELPHI_ELECT": {
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
                    id: 'delphi_elect_line',
                    tag: 'img',
                    rect: ['13px', '3px', '103', '113', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/delphi_elect_line.png']
                },
                {
                    type: 'image',
                    id: 'delphi_elect_line_Red',
                    tag: 'img',
                    rect: ['13px', '3px', '103', '113', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/delphi_elect_line_Red.png']
                },
                {
                    id: 'SOLENOID',
                    type: 'rect',
                    rect: ['0px', '107px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SOLENOID2',
                    type: 'rect',
                    rect: ['0px', '107px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['3px', '110px', '29px', '46px', 'auto', 'auto'],
                    opacity: 0.5,
                    id: 'redRact',
                    stroke: [1, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(244,21,28,1.00)']
                },
                {
                    rect: ['90px', '110px', '29px', '46px', 'auto', 'auto'],
                    opacity: 0.5,
                    id: 'redRact2',
                    stroke: [1, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(244,21,28,1.00)']
                },
                {
                    type: 'rect',
                    id: 'elect_bar1',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['111px', '0px', '84px', '10px', 'auto', 'auto'],
                    fill: ['rgba(255,153,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'elect_bar2',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['111px', '33px', '84px', '10px', 'auto', 'auto'],
                    fill: ['rgba(255,153,0,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'SOLENOID',
                symbolName: 'SOLENOID',
                autoPlay: {

               }
            },
            {
                id: 'SOLENOID2',
                symbolName: 'SOLENOID',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_delphi_elect_line_Red}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '13px']
            ],
            "${_SOLENOID}": [
                ["style", "left", '0px'],
                ["style", "top", '107px']
            ],
            "${_redRact2}": [
                ["color", "background-color", 'rgba(244,21,28,1.00)'],
                ["style", "top", '110px'],
                ["style", "left", '90px'],
                ["style", "opacity", '0'],
                ["style", "height", '46px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '1px'],
                ["style", "width", '29px']
            ],
            "${_redRact}": [
                ["style", "top", '110px'],
                ["color", "background-color", 'rgba(244,21,28,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none'],
                ["style", "height", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '3px'],
                ["style", "width", '29px']
            ],
            "${_SOLENOID2}": [
                ["style", "left", '87px'],
                ["style", "top", '107px']
            ],
            "${symbolSelector}": [
                ["style", "height", '159px'],
                ["style", "width", '195px']
            ],
            "${_elect_bar1}": [
                ["color", "background-color", 'rgba(255,153,0,1.00)'],
                ["style", "height", '10px'],
                ["style", "border-style", 'none'],
                ["style", "left", '111px'],
                ["style", "top", '0px']
            ],
            "${_elect_bar2}": [
                ["style", "top", '33px'],
                ["style", "height", '10px'],
                ["style", "border-style", 'none'],
                ["style", "left", '111px'],
                ["color", "background-color", 'rgba(255,153,0,1.00)']
            ],
            "${_delphi_elect_line}": [
                ["style", "left", '13px'],
                ["style", "top", '3px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 267,
            autoPlay: false,
            timeline: [
                { id: "eid59", tween: [ "style", "${_redRact2}", "opacity", '0.8', { fromValue: '0'}], position: 0, duration: 133 },
                { id: "eid65", tween: [ "style", "${_redRact2}", "opacity", '0', { fromValue: '0.8'}], position: 133, duration: 133 },
                { id: "eid57", tween: [ "style", "${_redRact}", "opacity", '0.8', { fromValue: '0'}], position: 0, duration: 133 },
                { id: "eid66", tween: [ "style", "${_redRact}", "opacity", '0', { fromValue: '0.8'}], position: 133, duration: 133 },
                { id: "eid61", tween: [ "style", "${_delphi_elect_line_Red}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 133 },
                { id: "eid67", tween: [ "style", "${_delphi_elect_line_Red}", "opacity", '0', { fromValue: '1'}], position: 133, duration: 133 }            ]
        }
    }
},
"BOSCH_ELECT": {
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
                    id: 'bosch_elect_line',
                    tag: 'img',
                    rect: ['13px', '47px', '184', '170', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_elect_line.png']
                },
                {
                    type: 'image',
                    id: 'bosch_elect_line_Red',
                    tag: 'img',
                    rect: ['13px', '47px', '184', '170', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_elect_line_Red.png']
                },
                {
                    id: 'SOLENOID',
                    type: 'rect',
                    rect: ['-923px', '239px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'SOLENOID2',
                    type: 'rect',
                    rect: ['-923px', '239px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['3px', '214px', '29px', '46px', 'auto', 'auto'],
                    opacity: 0.5,
                    id: 'redRact',
                    stroke: [1, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(244,21,28,1.00)']
                },
                {
                    rect: ['86px', '214px', '29px', '46px', 'auto', 'auto'],
                    opacity: 0.5,
                    id: 'redRact2',
                    stroke: [1, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(244,21,28,1.00)']
                },
                {
                    transform: [[0, 0], ['-34']],
                    rect: ['175px', '23px', '84px', '10px', 'auto', 'auto'],
                    id: 'elect_bar',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,153,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-34']],
                    rect: ['184px', '41px', '84px', '10px', 'auto', 'auto'],
                    id: 'elect_bar2',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,153,0,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'SOLENOID',
                symbolName: 'SOLENOID',
                autoPlay: {

               }
            },
            {
                id: 'SOLENOID2',
                symbolName: 'SOLENOID',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_SOLENOID}": [
                ["style", "left", '0px'],
                ["style", "top", '211px']
            ],
            "${_elect_bar}": [
                ["color", "background-color", 'rgba(255,153,0,1.00)'],
                ["transform", "rotateZ", '-34deg'],
                ["style", "height", '10px'],
                ["style", "border-style", 'none'],
                ["style", "left", '175px'],
                ["style", "top", '23px']
            ],
            "${_redRact2}": [
                ["color", "background-color", 'rgba(244,21,28,1)'],
                ["style", "top", '214px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none'],
                ["style", "height", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '86px'],
                ["style", "width", '29px']
            ],
            "${_redRact}": [
                ["style", "top", '214px'],
                ["color", "background-color", 'rgba(244,21,28,1)'],
                ["style", "left", '3px'],
                ["style", "opacity", '0'],
                ["style", "height", '46px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '1px'],
                ["style", "width", '29px']
            ],
            "${_bosch_elect_line_Red}": [
                ["style", "top", '47px'],
                ["style", "opacity", '0'],
                ["style", "left", '13px']
            ],
            "${_bosch_elect_line}": [
                ["style", "left", '13px'],
                ["style", "top", '47px']
            ],
            "${_elect_bar2}": [
                ["color", "background-color", 'rgba(255,153,0,1.00)'],
                ["transform", "rotateZ", '-34deg'],
                ["style", "height", '10px'],
                ["style", "border-style", 'none'],
                ["style", "left", '184px'],
                ["style", "top", '41px']
            ],
            "${symbolSelector}": [
                ["style", "height", '263px'],
                ["style", "width", '264px']
            ],
            "${_SOLENOID2}": [
                ["style", "left", '83px'],
                ["style", "top", '211px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 267,
            autoPlay: false,
            timeline: [
                { id: "eid47", tween: [ "style", "${_redRact2}", "opacity", '0.8', { fromValue: '0'}], position: 0, duration: 133 },
                { id: "eid53", tween: [ "style", "${_redRact2}", "opacity", '0', { fromValue: '0.8'}], position: 133, duration: 133 },
                { id: "eid45", tween: [ "style", "${_redRact}", "opacity", '0.8', { fromValue: '0'}], position: 0, duration: 133 },
                { id: "eid54", tween: [ "style", "${_redRact}", "opacity", '0', { fromValue: '0.8'}], position: 133, duration: 133 },
                { id: "eid49", tween: [ "style", "${_bosch_elect_line_Red}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 133 },
                { id: "eid55", tween: [ "style", "${_bosch_elect_line_Red}", "opacity", '0', { fromValue: '1'}], position: 133, duration: 133 }            ]
        }
    }
},
"FLOW_FUEL": {
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
                    type: 'rect',
                    id: 'gradi_ract0',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '-80px', '86px', '80px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,1)', [270, [['rgba(199,0,96,1.00)', 0], ['rgba(255,183,123,1.00)', 50], ['rgba(199,0,96,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'gradi_ract1',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '86px', '80px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,1)', [270, [['rgba(199,0,96,1.00)', 0], ['rgba(255,183,123,1.00)', 50], ['rgba(199,0,96,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'gradi_ract2',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '80px', '86px', '80px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,1)', [270, [['rgba(199,0,96,1.00)', 0], ['rgba(255,183,123,1.00)', 50], ['rgba(199,0,96,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'gradi_ract3',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '160px', '86px', '80px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,1)', [270, [['rgba(199,0,96,1.00)', 0], ['rgba(255,183,123,1.00)', 50], ['rgba(199,0,96,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'gradi_ract4',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '240px', '86px', '80px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,1)', [270, [['rgba(199,0,96,1.00)', 0], ['rgba(255,183,123,1.00)', 50], ['rgba(199,0,96,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'gradi_ract5',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '320px', '86px', '80px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,1)', [270, [['rgba(199,0,96,1.00)', 0], ['rgba(255,183,123,1.00)', 50], ['rgba(199,0,96,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'gradi_ract6',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '400px', '86px', '80px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,1)', [270, [['rgba(199,0,96,1.00)', 0], ['rgba(255,183,123,1.00)', 50], ['rgba(199,0,96,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'gradi_ract7',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '480px', '86px', '80px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,1)', [270, [['rgba(199,0,96,1.00)', 0], ['rgba(255,183,123,1.00)', 50], ['rgba(199,0,96,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'gradi_ract8',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '560px', '86px', '80px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,1)', [270, [['rgba(199,0,96,1.00)', 0], ['rgba(255,183,123,1.00)', 50], ['rgba(199,0,96,1.00)', 100]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gradi_ract7}": [
                ["style", "top", '480px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,1.00)',0],['rgba(255,183,123,1.00)',50],['rgba(199,0,96,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "height", '80px']
            ],
            "${_gradi_ract0}": [
                ["style", "top", '-80px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,1.00)',0],['rgba(255,183,123,1.00)',50],['rgba(199,0,96,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "height", '80px']
            ],
            "${_gradi_ract4}": [
                ["style", "top", '240px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,1.00)',0],['rgba(255,183,123,1.00)',50],['rgba(199,0,96,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "height", '80px']
            ],
            "${_gradi_ract8}": [
                ["style", "top", '560px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,1.00)',0],['rgba(255,183,123,1.00)',50],['rgba(199,0,96,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "height", '80px']
            ],
            "${_gradi_ract2}": [
                ["style", "top", '80px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,1.00)',0],['rgba(255,183,123,1.00)',50],['rgba(199,0,96,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "height", '80px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '86px']
            ],
            "${_gradi_ract6}": [
                ["style", "top", '400px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,1.00)',0],['rgba(255,183,123,1.00)',50],['rgba(199,0,96,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "height", '80px']
            ],
            "${_gradi_ract5}": [
                ["style", "top", '320px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,1.00)',0],['rgba(255,183,123,1.00)',50],['rgba(199,0,96,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "height", '80px']
            ],
            "${_gradi_ract3}": [
                ["style", "top", '160px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,1.00)',0],['rgba(255,183,123,1.00)',50],['rgba(199,0,96,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "height", '80px']
            ],
            "${_gradi_ract1}": [
                ["style", "top", '0px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,1.00)',0],['rgba(255,183,123,1.00)',50],['rgba(199,0,96,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "height", '80px']
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
                { id: "eid75", tween: [ "style", "${_gradi_ract2}", "top", '160px', { fromValue: '80px'}], position: 0, duration: 500 },
                { id: "eid74", tween: [ "style", "${_gradi_ract6}", "top", '480px', { fromValue: '400px'}], position: 0, duration: 500 },
                { id: "eid69", tween: [ "style", "${_gradi_ract0}", "top", '0px', { fromValue: '-80px'}], position: 0, duration: 500 },
                { id: "eid76", tween: [ "style", "${_gradi_ract3}", "top", '240px', { fromValue: '160px'}], position: 0, duration: 500 },
                { id: "eid70", tween: [ "style", "${_gradi_ract4}", "top", '320px', { fromValue: '240px'}], position: 0, duration: 500 },
                { id: "eid68", tween: [ "style", "${_gradi_ract1}", "top", '80px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid71", tween: [ "style", "${_gradi_ract7}", "top", '560px', { fromValue: '480px'}], position: 0, duration: 500 },
                { id: "eid73", tween: [ "style", "${_gradi_ract5}", "top", '400px', { fromValue: '320px'}], position: 0, duration: 500 },
                { id: "eid72", tween: [ "style", "${_gradi_ract8}", "top", '640px', { fromValue: '560px'}], position: 0, duration: 500 }            ]
        }
    }
},
"DELPHI_FUEL_AREA": {
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
                    id: 'delphi_flowFuelArea',
                    tag: 'img',
                    rect: ['0px', '0px', '86', '691', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/delphi_flowFuelArea.png']
                },
                {
                    id: 'FLOW_FUEL',
                    type: 'rect',
                    rect: ['613px', '279px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '1.07969']]
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_FUEL',
                symbolName: 'FLOW_FUEL',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_delphi_flowFuelArea}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_FLOW_FUEL}": [
                ["style", "top", '26px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1.07969']
            ],
            "${symbolSelector}": [
                ["style", "height", '691px'],
                ["style", "width", '86px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 533,
            autoPlay: false,
            timeline: [
                { id: "eid77", tween: [ "style", "${_FLOW_FUEL}", "top", '26px', { fromValue: '26px'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_FLOW_FUEL}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid166", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FLOW_FUEL}', [0] ], ""], position: 0 },
                { id: "eid167", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW_FUEL}', [] ], ""], position: 33 }            ]
        }
    }
},
"DELPHI_RETURN1": {
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
                    id: 'delphi_flowReturn1',
                    tag: 'img',
                    rect: ['0px', '0px', '50', '151', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/delphi_flowReturn1.png']
                },
                {
                    type: 'rect',
                    id: 'gradi_ract1',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '156px', '50px', '151px', 'auto', 'auto'],
                    fill: ['rgba(244,21,28,0.00)', [270, [['rgba(199,0,96,0.00)', 0], ['rgba(199,0,96,1.00)', 50], ['rgba(199,0,96,0.00)', 100]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_delphi_flowReturn1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_gradi_ract1}": [
                ["style", "top", '151px'],
                ["color", "background-color", 'rgba(244,21,28,0.00)'],
                ["style", "height", '151px'],
                ["gradient", "background-image", [270,[['rgba(199,0,96,0.00)',0],['rgba(199,0,96,1.00)',50],['rgba(199,0,96,0.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '151px'],
                ["style", "width", '50px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            timeline: [
                { id: "eid79", tween: [ "style", "${_gradi_ract1}", "top", '-151px', { fromValue: '151px'}], position: 0, duration: 400 }            ]
        }
    }
},
"DELPHI_RETURN2": {
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
                    id: 'delphi_flowReturn2',
                    tag: 'img',
                    rect: ['0px', '0px', '181', '65', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/delphi_flowReturn2.png']
                },
                {
                    type: 'rect',
                    rect: ['268px', '-8px', '14px', '193px', 'auto', 'auto'],
                    transform: [[0, 0], ['-73']],
                    id: 'gradi_ract',
                    opacity: 1,
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    fill: ['rgba(255,255,255,0.00)', [270, [['rgba(18,181,255,0.00)', 0], ['rgba(18,158,255,1.00)', 50], ['rgba(18,181,255,0.00)', 100]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_delphi_flowReturn2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '181px'],
                ["style", "overflow", 'hidden']
            ],
            "${_gradi_ract}": [
                ["style", "top", '-8px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["gradient", "background-image", [270,[['rgba(18,181,255,0.00)',0],['rgba(18,158,255,1.00)',50],['rgba(18,181,255,0.00)',100]]]],
                ["transform", "rotateZ", '-73deg'],
                ["style", "height", '193px'],
                ["style", "opacity", '1'],
                ["style", "left", '268px'],
                ["style", "width", '14px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            timeline: [
                { id: "eid80", tween: [ "style", "${_gradi_ract}", "left", '-99px', { fromValue: '268px'}], position: 0, duration: 400 },
                { id: "eid81", tween: [ "style", "${_gradi_ract}", "top", '-121px', { fromValue: '-8px'}], position: 0, duration: 400 }            ]
        }
    }
},
"FUEL_SPRAY": {
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
                    rect: ['0px', '0px', '200', '266', 'auto', 'auto'],
                    tag: 'img',
                    id: 'fuel',
                    transform: [[0, 0], [], [], [], ['50%', '0%']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/fuel.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '266px'],
                ["style", "width", '200px']
            ],
            "${_fuel}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            timeline: [
                { id: "eid91", tween: [ "style", "${_fuel}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200 },
                { id: "eid94", tween: [ "style", "${_fuel}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 100 },
                { id: "eid89", tween: [ "transform", "${_fuel}", "scaleX", '1', { fromValue: '0.5'}], position: 0, duration: 200 },
                { id: "eid83", tween: [ "style", "${_fuel}", "height", '266px', { fromValue: '30px'}], position: 0, duration: 200 }            ]
        }
    }
},
"DELPHI": {
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
                    id: 'DELPHI_FUEL_AREA',
                    type: 'rect',
                    rect: ['234px', '96px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'DELPHI_RETURN1',
                    type: 'rect',
                    rect: ['252px', '350px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'DELPHI_RETURN2',
                    type: 'rect',
                    rect: ['100px', '297px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['89px', '87px', '292', '715', 'auto', 'auto'],
                    id: 'delphi_body',
                    fill: ['rgba(0,0,0,0)', 'images/delphi_body.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['256px', '427px', '28', '39', 'auto', 'auto'],
                    id: 'delphi_spring',
                    fill: ['rgba(0,0,0,0)', 'images/delphi_spring.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['248px', '287px', '45', '501', 'auto', 'auto'],
                    id: 'delphi_nozzle_valve',
                    fill: ['rgba(0,0,0,0)', 'images/delphi_nozzle_valve.png'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'FUEL_SPRAY',
                    type: 'rect',
                    rect: ['169px', '782px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'ARROW_BLUE',
                    type: 'rect',
                    rect: ['253px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'ARROW_BLUECopy2',
                    type: 'rect',
                    rect: ['253px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'DELPHI_ELECT',
                    type: 'rect',
                    rect: ['213px', '170px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'DELPHI_RETURN1',
                symbolName: 'DELPHI_RETURN1',
                autoPlay: {

               }
            },
            {
                id: 'FUEL_SPRAY',
                symbolName: 'FUEL_SPRAY',
                autoPlay: {

               }
            },
            {
                id: 'ARROW_BLUECopy2',
                symbolName: 'ARROW_BLUE',
                autoPlay: {

               }
            },
            {
                id: 'ARROW_BLUE',
                symbolName: 'ARROW_BLUE',
                autoPlay: {

               }
            },
            {
                id: 'DELPHI_ELECT',
                symbolName: 'DELPHI_ELECT',
                autoPlay: {

               }
            },
            {
                id: 'DELPHI_RETURN2',
                symbolName: 'DELPHI_RETURN2',
                autoPlay: {

               }
            },
            {
                id: 'DELPHI_FUEL_AREA',
                symbolName: 'DELPHI_FUEL_AREA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_delphi_body}": [
                ["style", "left", '89px'],
                ["style", "top", '87px']
            ],
            "${_ARROW_BLUE}": [
                ["style", "left", '253px'],
                ["style", "top", '0px']
            ],
            "${_DELPHI_ELECT}": [
                ["style", "left", '213px'],
                ["style", "top", '170px']
            ],
            "${_FUEL_SPRAY}": [
                ["style", "left", '169px'],
                ["style", "top", '782px']
            ],
            "${_DELPHI_FUEL_AREA}": [
                ["style", "left", '234px'],
                ["style", "top", '96px']
            ],
            "${_delphi_spring}": [
                ["style", "height", '39px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '256px'],
                ["style", "top", '427px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1048px'],
                ["style", "width", '408px'],
                ["style", "overflow", 'visible']
            ],
            "${_delphi_nozzle_valve}": [
                ["style", "left", '248px'],
                ["style", "top", '287px']
            ],
            "${_ARROW_BLUECopy2}": [
                ["style", "top", '259px'],
                ["style", "left", '9px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_DELPHI_RETURN1}": [
                ["style", "left", '252px'],
                ["style", "top", '350px']
            ],
            "${_DELPHI_RETURN2}": [
                ["style", "left", '100px'],
                ["style", "top", '297px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2633,
            autoPlay: false,
            labels: {
                "gogo": 33
            },
            timeline: [
                { id: "eid185", tween: [ "style", "${_ARROW_BLUECopy2}", "left", '9px', { fromValue: '9px'}], position: 67, duration: 0 },
                { id: "eid160", tween: [ "style", "${_delphi_nozzle_valve}", "top", '265px', { fromValue: '287px'}], position: 834, duration: 333 },
                { id: "eid164", tween: [ "style", "${_delphi_nozzle_valve}", "top", '287px', { fromValue: '265px'}], position: 2000, duration: 333 },
                { id: "eid161", tween: [ "style", "${_delphi_spring}", "height", '18px', { fromValue: '39px'}], position: 834, duration: 333 },
                { id: "eid165", tween: [ "style", "${_delphi_spring}", "height", '39px', { fromValue: '18px'}], position: 2000, duration: 333 },
                { id: "eid168", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_DELPHI_FUEL_AREA}', [] ], ""], position: 33 },
                { id: "eid170", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ARROW_BLUECopy2}', [] ], ""], position: 33 },
                { id: "eid169", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ARROW_BLUE}', [] ], ""], position: 33 },
                { id: "eid171", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_DELPHI_ELECT}', [] ], ""], position: 66.666666666667 },
                { id: "eid174", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_DELPHI_RETURN2}', [] ], ""], position: 1200 },
                { id: "eid180", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FUEL_SPRAY}', [] ], ""], position: 1200 },
                { id: "eid173", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_DELPHI_FUEL_AREA}', [] ], ""], position: 1200 },
                { id: "eid172", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_DELPHI_RETURN1}', [] ], ""], position: 1200 },
                { id: "eid175", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_DELPHI_ELECT}', [0] ], ""], position: 1899.6666666667 },
                { id: "eid181", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FUEL_SPRAY}', [0] ], ""], position: 2366.6666666667 },
                { id: "eid177", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_DELPHI_RETURN1}', [0] ], ""], position: 2400 },
                { id: "eid176", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_DELPHI_FUEL_AREA}', [0] ], ""], position: 2400 },
                { id: "eid178", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_DELPHI_RETURN2}', [0] ], ""], position: 2400 }            ]
        }
    }
},
"BOSCH_FLOW_FUEL": {
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
                    id: 'bosch_flowFuelArea',
                    tag: 'img',
                    rect: ['0px', '0px', '77', '277', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_flowFuelArea.png']
                },
                {
                    id: 'FLOW_FUEL3',
                    type: 'rect',
                    rect: ['-4px', '-363px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FLOW_FUEL3',
                symbolName: 'FLOW_FUEL',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '277px'],
                ["style", "width", '77px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bosch_flowFuelArea}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_FLOW_FUEL3}": [
                ["style", "top", '-363px'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 533,
            autoPlay: false,
            timeline: [
                { id: "eid131", tween: [ "style", "${_FLOW_FUEL3}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 234 },
                { id: "eid132", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FLOW_FUEL3}', [] ], ""], position: 0 },
                { id: "eid133", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FLOW_FUEL3}', [] ], ""], position: 33 }            ]
        }
    }
},
"BOSCH_RETURN1": {
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
                    rect: ['0px', '88px', '124px', '88px', 'auto', 'auto'],
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    id: 'gradi_ract_b1',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)', [270, [['rgba(18,181,255,0.00)', 0], ['rgba(18,158,255,1.00)', 50], ['rgba(18,181,255,0.00)', 100]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '88px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '124px']
            ],
            "${_gradi_ract_b1}": [
                ["style", "top", '88px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["gradient", "background-image", [270,[['rgba(18,181,255,0.00)',0],['rgba(18,158,255,1.00)',50],['rgba(18,181,255,0.00)',100]]]],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '88px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '124px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            timeline: [
                { id: "eid106", tween: [ "style", "${_gradi_ract_b1}", "top", '-88px', { fromValue: '88px'}], position: 0, duration: 400 }            ]
        }
    }
},
"BOSCH_RETURN2": {
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
                    rect: ['0px', '144px', '46px', '144px', 'auto', 'auto'],
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    id: 'gradi_ract_b2',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)', [270, [['rgba(18,181,255,0.00)', 0], ['rgba(18,158,255,1.00)', 50], ['rgba(18,181,255,0.00)', 100]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gradi_ract_b2}": [
                ["style", "top", '144px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '144px'],
                ["gradient", "background-image", [270,[['rgba(18,181,255,0.00)',0],['rgba(18,158,255,1.00)',50],['rgba(18,181,255,0.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '46px']
            ],
            "${symbolSelector}": [
                ["style", "height", '144px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '46px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            timeline: [
                { id: "eid107", tween: [ "style", "${_gradi_ract_b2}", "top", '-144px', { fromValue: '144px'}], position: 0, duration: 400 }            ]
        }
    }
},
"BOSCH": {
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
                    id: 'BOSCH_FLOW_FUEL',
                    type: 'rect',
                    rect: ['66px', '513px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'bosch_body',
                    tag: 'img',
                    rect: ['10px', '42px', '354', '779', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_body.png']
                },
                {
                    id: 'BOSCH_RETURN1',
                    type: 'rect',
                    rect: ['43px', '241px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BOSCH_RETURN2',
                    type: 'rect',
                    rect: ['78px', '97px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'bosch_body2',
                    type: 'image',
                    rect: ['17px', '50px', '333px', '747px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_body2.png', '0px', '0px']
                },
                {
                    id: 'FUEL_SPRAY',
                    type: 'rect',
                    rect: ['80px', '885px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'bosch_press2',
                    tag: 'img',
                    rect: ['85px', '328px', '66', '332', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_press2.png']
                },
                {
                    type: 'image',
                    id: 'bosch_press1',
                    tag: 'img',
                    rect: ['85px', '328px', '54', '95', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_press1.png']
                },
                {
                    type: 'image',
                    id: 'bosch_spring_B',
                    tag: 'img',
                    rect: ['74px', '537px', '50', '65', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_spring.png']
                },
                {
                    type: 'image',
                    id: 'bosch_nozzle',
                    tag: 'img',
                    rect: ['80px', '375px', '40', '416', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_nozzle.png']
                },
                {
                    type: 'image',
                    id: 'bosch_spring',
                    tag: 'img',
                    rect: ['78px', '183px', '50', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_spring.png']
                },
                {
                    type: 'image',
                    id: 'bosch_valve',
                    tag: 'img',
                    rect: ['72px', '249px', '67', '92', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bosch_valve.png']
                },
                {
                    id: 'ARROW_BLUE_bosch',
                    type: 'rect',
                    rect: ['-837px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BOSCH_ELECT',
                    type: 'rect',
                    rect: ['46px', '38px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'FUEL_SPRAY',
                symbolName: 'FUEL_SPRAY',
                autoPlay: {

               }
            },
            {
                id: 'BOSCH_ELECT',
                symbolName: 'BOSCH_ELECT',
                autoPlay: {

               }
            },
            {
                id: 'BOSCH_RETURN2',
                symbolName: 'BOSCH_RETURN2',
                autoPlay: {

               }
            },
            {
                id: 'BOSCH_RETURN1',
                symbolName: 'BOSCH_RETURN1',
                autoPlay: {

               }
            },
            {
                id: 'BOSCH_FLOW_FUEL',
                symbolName: 'BOSCH_FLOW_FUEL',
                autoPlay: {

               }
            },
            {
                id: 'ARROW_BLUE_bosch',
                symbolName: 'ARROW_BLUE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bosch_nozzle}": [
                ["style", "left", '80px'],
                ["style", "top", '375px']
            ],
            "${_bosch_body}": [
                ["style", "left", '10px'],
                ["style", "top", '42px']
            ],
            "${_bosch_spring_B}": [
                ["style", "top", '537px'],
                ["style", "left", '74px'],
                ["style", "height", '65px']
            ],
            "${_bosch_body2}": [
                ["style", "left", '17px'],
                ["style", "top", '50px']
            ],
            "${_ARROW_BLUE_bosch}": [
                ["style", "top", '0px'],
                ["style", "left", '82px'],
                ["transform", "scaleY", '-1'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_bosch_press2}": [
                ["style", "top", '328px'],
                ["style", "opacity", '0'],
                ["style", "left", '85px']
            ],
            "${_BOSCH_FLOW_FUEL}": [
                ["style", "top", '513px'],
                ["style", "opacity", '1'],
                ["style", "left", '66px']
            ],
            "${_bosch_valve}": [
                ["style", "left", '72px'],
                ["style", "top", '249px']
            ],
            "${_bosch_press1}": [
                ["style", "top", '328px'],
                ["style", "opacity", '0'],
                ["style", "left", '85px']
            ],
            "${_bosch_spring}": [
                ["style", "height", '65px'],
                ["style", "left", '78px'],
                ["style", "top", '183px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1052px'],
                ["style", "width", '364px']
            ],
            "${_BOSCH_RETURN1}": [
                ["style", "left", '43px'],
                ["style", "top", '241px']
            ],
            "${_BOSCH_RETURN2}": [
                ["style", "left", '78px'],
                ["style", "top", '97px']
            ],
            "${_FUEL_SPRAY}": [
                ["style", "left", '0px'],
                ["style", "top", '786px']
            ],
            "${_BOSCH_ELECT}": [
                ["style", "left", '46px'],
                ["style", "top", '38px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5400,
            autoPlay: false,
            timeline: [
                { id: "eid109", tween: [ "style", "${_bosch_valve}", "top", '218px', { fromValue: '249px'}], position: 733, duration: 267 },
                { id: "eid138", tween: [ "style", "${_bosch_valve}", "top", '249px', { fromValue: '218px'}], position: 3167, duration: 267 },
                { id: "eid112", tween: [ "style", "${_bosch_press1}", "opacity", '1', { fromValue: '0'}], position: 1067, duration: 166 },
                { id: "eid114", tween: [ "style", "${_bosch_press1}", "opacity", '0', { fromValue: '1'}], position: 1234, duration: 166 },
                { id: "eid116", tween: [ "style", "${_bosch_press1}", "opacity", '1', { fromValue: '0'}], position: 1434, duration: 166 },
                { id: "eid115", tween: [ "style", "${_bosch_press1}", "opacity", '0', { fromValue: '1'}], position: 1600, duration: 166 },
                { id: "eid118", tween: [ "style", "${_bosch_press1}", "opacity", '1', { fromValue: '0'}], position: 1801, duration: 166 },
                { id: "eid117", tween: [ "style", "${_bosch_press1}", "opacity", '0', { fromValue: '1'}], position: 1967, duration: 166 },
                { id: "eid120", tween: [ "style", "${_bosch_spring_B}", "height", '38px', { fromValue: '65px'}], position: 2166, duration: 267 },
                { id: "eid150", tween: [ "style", "${_bosch_spring_B}", "height", '65px', { fromValue: '38px'}], position: 4600, duration: 267 },
                { id: "eid159", tween: [ "transform", "${_ARROW_BLUE_bosch}", "scaleY", '-1', { fromValue: '-1'}], position: 67, duration: 0 },
                { id: "eid140", tween: [ "style", "${_bosch_press2}", "opacity", '1', { fromValue: '0'}], position: 3501, duration: 166 },
                { id: "eid142", tween: [ "style", "${_bosch_press2}", "opacity", '0', { fromValue: '1'}], position: 3667, duration: 166 },
                { id: "eid143", tween: [ "style", "${_bosch_press2}", "opacity", '1', { fromValue: '0'}], position: 3868, duration: 166 },
                { id: "eid144", tween: [ "style", "${_bosch_press2}", "opacity", '0', { fromValue: '1'}], position: 4034, duration: 166 },
                { id: "eid145", tween: [ "style", "${_bosch_press2}", "opacity", '1', { fromValue: '0'}], position: 4235, duration: 166 },
                { id: "eid146", tween: [ "style", "${_bosch_press2}", "opacity", '0', { fromValue: '1'}], position: 4401, duration: 166 },
                { id: "eid108", tween: [ "style", "${_bosch_spring}", "height", '38px', { fromValue: '65px'}], position: 733, duration: 267 },
                { id: "eid139", tween: [ "style", "${_bosch_spring}", "height", '65px', { fromValue: '38px'}], position: 3167, duration: 267 },
                { id: "eid119", tween: [ "style", "${_bosch_nozzle}", "top", '351px', { fromValue: '375px'}], position: 2166, duration: 267 },
                { id: "eid149", tween: [ "style", "${_bosch_nozzle}", "top", '375px', { fromValue: '351px'}], position: 4600, duration: 267 },
                { id: "eid121", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOSCH_ELECT}', [] ], ""], position: 33 },
                { id: "eid123", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ARROW_BLUE_bosch}', [] ], ""], position: 1000 },
                { id: "eid124", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOSCH_RETURN1}', [] ], ""], position: 1000 },
                { id: "eid122", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOSCH_RETURN2}', [] ], ""], position: 1000 },
                { id: "eid134", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOSCH_FLOW_FUEL}', [] ], ""], position: 2467 },
                { id: "eid135", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FUEL_SPRAY}', [] ], ""], position: 2533.3333333333 },
                { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_BOSCH_ELECT}', [0] ], ""], position: 3167 },
                { id: "eid155", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ARROW_BLUE_bosch}', [0] ], ""], position: 3434 },
                { id: "eid154", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_BOSCH_RETURN1}', [0] ], ""], position: 3434 },
                { id: "eid153", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_BOSCH_RETURN2}', [0] ], ""], position: 3434 },
                { id: "eid156", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_BOSCH_FLOW_FUEL}', [0] ], ""], position: 4867 },
                { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FUEL_SPRAY}', [0] ], ""], position: 4867 }            ]
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
})(jQuery, AdobeEdge, "EDGE-3257655");
