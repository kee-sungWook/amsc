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
                id: 'bucket_inner',
                type: 'image',
                tag: 'img',
                rect: ['1343px', '801px','145','87','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bucket_inner.png"]
            },
            {
                id: 'bucket_liquid_pollution',
                type: 'ellipse',
                rect: ['1349px', '835px','145px','53px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(69,255,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'bucket',
                type: 'image',
                tag: 'img',
                rect: ['1336px', '794px','158','199','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bucket.png"]
            },
            {
                id: 'bucket_liquid_road',
                type: 'rect',
                rect: ['1409px', '766px','11px','121px','auto', 'auto'],
                fill: ["rgba(130,149,95,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'BUCKET_LIQUID_FLOW',
                type: 'rect',
                rect: ['1408px', '844px','auto','auto','auto', 'auto']
            },
            {
                id: 'eng',
                type: 'image',
                tag: 'img',
                rect: ['613px', '220px','615','666','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eng.png"]
            },
            {
                id: 'airduct',
                type: 'image',
                tag: 'img',
                rect: ['118px', '10px','426','440','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"airduct.png"]
            },
            {
                id: 'LINE1_IN',
                type: 'rect',
                rect: ['1017px', '627px','auto','auto','auto', 'auto']
            },
            {
                id: 'line1',
                type: 'image',
                tag: 'img',
                rect: ['1009px', '608px','167','329','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line1.png"]
            },
            {
                id: 'LINE2_IN',
                type: 'rect',
                rect: ['339px', '340px','auto','auto','auto', 'auto']
            },
            {
                id: 'line2',
                type: 'image',
                tag: 'img',
                rect: ['328px', '329px','787','385','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line2.png"]
            },
            {
                id: 'LINE3_IN',
                type: 'rect',
                rect: ['338px', '280px','auto','auto','auto', 'auto']
            },
            {
                id: 'line3',
                type: 'image',
                tag: 'img',
                rect: ['327px', '269px','345','105','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line3.png"]
            },
            {
                id: 'LINE4_IN',
                type: 'rect',
                rect: ['1206px', '398px','auto','auto','auto', 'auto']
            },
            {
                id: 'line4',
                type: 'image',
                tag: 'img',
                rect: ['1149px', '386px','254','112','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line4.png"]
            },
            {
                id: 'radiator_back',
                type: 'image',
                tag: 'img',
                rect: ['1190px', '483px','250','459','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator_back.png"]
            },
            {
                id: 'liquide_bottom_90pct',
                type: 'image',
                rect: ['1193px', '526px','235px','218px','auto', 'auto'],
                opacity: 0.9,
                fill: ["rgba(0,0,0,0)",im+"liquide_bottom_90pct.png",'0px','0px']
            },
            {
                id: 'liquide_bottom_80pct',
                type: 'image',
                tag: 'img',
                rect: ['1192px', '526px','235','218','auto', 'auto'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,0)",im+"liquide_bottom_80pct.png"]
            },
            {
                id: 'pipe',
                type: 'image',
                tag: 'img',
                rect: ['1216px', '537px','179','317','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pipe.png"]
            },
            {
                id: 'liquide_mid',
                type: 'rect',
                rect: ['1190px', '648px','250px','182px','auto', 'auto'],
                opacity: 0.5,
                fill: ["rgba(24,47,1,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],['0','-42']]
            },
            {
                id: 'liquide_midCopy',
                type: 'rect',
                rect: ['1190px', '648px','250px','182px','auto', 'auto'],
                opacity: 0.5,
                fill: ["rgba(24,47,1,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],['0','-42']]
            },
            {
                id: 'pipe_pollution',
                type: 'image',
                tag: 'img',
                rect: ['1218px', '538px','176','314','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pipe_pollution.png"]
            },
            {
                id: 'liquide_top_80pct',
                type: 'image',
                tag: 'img',
                rect: ['1192px', '530px','247','232','auto', 'auto'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,0)",im+"liquide_top_80pct.png"]
            },
            {
                id: 'liquide_top_90pct',
                type: 'image',
                rect: ['1193px', '530px','247px','232px','auto', 'auto'],
                opacity: 0.9,
                fill: ["rgba(0,0,0,0)",im+"liquide_top_90pct.png",'0px','0px']
            },
            {
                id: 'radiator_top',
                type: 'image',
                tag: 'img',
                rect: ['1111px', '446px','341','524','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiator_top.png"]
            },
            {
                id: 'color_fixer',
                type: 'ellipse',
                rect: ['1182px', '591px','27px','17px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(69,255,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'bottle',
                type: 'image',
                tag: 'img',
                rect: ['555px', '71px','105','148','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bottle.png"]
            },
            {
                id: 'bottle_color_fixer',
                type: 'ellipse',
                rect: ['1180px', '508px','30px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(69,255,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['-137']]
            },
            {
                id: 'BOTTLEOIL_FLOW',
                type: 'rect',
                rect: ['1188px', '516px','auto','auto','auto', 'auto']
            },
            {
                id: 'bottle_cap',
                type: 'image',
                tag: 'img',
                rect: ['574px', '58px','66','52','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bottle_cap.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['170px', '698px','833px','266px','auto', 'auto'],
                text: "일반교환 작업을 하면 라디에이터<br>내부의 부동액만 교환이 되며 냉각라인<br>내부에 있는 부동액은 교환이 되지 않습니다.<br>또한 라디에이터 내부의 오염물질 및 냉각라인<br>내부의 오염물질은 제거가 되지 않고 그대로<br>남아있게 됩니다.",
                align: "auto",
                font: ['굴림', 35, "rgb(0,75,140)", "normal", "none", "normal"]
            },
            {
                id: 'rewind_btn',
                type: 'group',
                rect: ['170px', '584px','256','86','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect',
                    type: 'rect',
                    rect: ['0px', '0px','250px','80px','auto', 'auto'],
                    borderRadius: ["15px 15px", "15px 15px", "15px 15px", "15px 15px"],
                    fill: ["rgba(199,0,96,1.00)"],
                    stroke: [3,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['0px', '17px','256px','auto','auto', 'auto'],
                    text: "다시보기",
                    align: "center",
                    font: ['굴림', 45, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [
            {
                id: 'LINE2_IN',
                symbolName: 'LINE2_IN',
                autoPlay: {

                }
            },
            {
                id: 'BOTTLEOIL_FLOW',
                symbolName: 'BOTTLEOIL_FLOW',
                autoPlay: {

                }
            },
            {
                id: 'BUCKET_LIQUID_FLOW',
                symbolName: 'BUCKET_LIQUID_FLOW',
                autoPlay: {

                }
            },
            {
                id: 'LINE4_IN',
                symbolName: 'LINE4_IN',
                autoPlay: {

                }
            },
            {
                id: 'LINE1_IN',
                symbolName: 'LINE1_IN',
                autoPlay: {

                }
            },
            {
                id: 'LINE3_IN',
                symbolName: 'LINE3_IN',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bucket_liquid_pollution}": [
                ["style", "top", '913px'],
                ["style", "height", '76px'],
                ["color", "background-color", 'rgba(95,109,62,1.00)'],
                ["style", "left", '1345px'],
                ["style", "width", '143px']
            ],
            "${_pipe}": [
                ["style", "left", '1216px'],
                ["style", "top", '537px']
            ],
            "${_line4}": [
                ["style", "left", '1149px'],
                ["style", "top", '386px']
            ],
            "${_liquide_midCopy}": [
                ["color", "background-color", 'rgba(69,255,0,1.00)'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '-42deg'],
                ["style", "top", '828px'],
                ["style", "height", '6px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1190px'],
                ["style", "width", '250px']
            ],
            "${_pipe_pollution}": [
                ["style", "left", '1218px'],
                ["style", "top", '538px']
            ],
            "${_BUCKET_LIQUID_FLOW}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0.91667'],
                ["style", "opacity", '1'],
                ["style", "left", '1409px'],
                ["style", "top", '766px']
            ],
            "${_LINE4_IN}": [
                ["style", "left", '1206px'],
                ["style", "top", '398px']
            ],
            "${_color_fixer}": [
                ["style", "top", '591px'],
                ["style", "height", '17px'],
                ["style", "opacity", '0'],
                ["style", "left", '1182px'],
                ["style", "width", '27px']
            ],
            "${_liquide_bottom_80pct}": [
                ["style", "top", '526px'],
                ["style", "opacity", '0.800000011920929'],
                ["style", "left", '1192px']
            ],
            "${_bottle_cap}": [
                ["style", "top", '361px'],
                ["style", "opacity", '0'],
                ["style", "left", '1248px']
            ],
            "${_airduct}": [
                ["style", "left", '118px'],
                ["style", "top", '10px']
            ],
            "${_liquide_bottom_90pct}": [
                ["style", "top", '703px'],
                ["style", "opacity", '0'],
                ["style", "left", '1193px']
            ],
            "${_bottle_color_fixer}": [
                ["color", "background-color", 'rgba(69,255,0,1.00)'],
                ["style", "top", '508px'],
                ["transform", "rotateZ", '-137deg'],
                ["style", "height", '13px'],
                ["style", "opacity", '0'],
                ["style", "left", '1180px'],
                ["style", "width", '30px']
            ],
            "${_line1}": [
                ["style", "left", '1009px'],
                ["style", "top", '608px']
            ],
            "${_BOTTLEOIL_FLOW}": [
                ["style", "top", '516px'],
                ["style", "opacity", '1'],
                ["style", "left", '1188px']
            ],
            "${_eng}": [
                ["style", "left", '613px'],
                ["style", "top", '220px']
            ],
            "${_txt1}": [
                ["style", "line-height", '45px'],
                ["style", "width", '833px'],
                ["style", "height", '266px'],
                ["style", "top", '698px'],
                ["style", "left", '170px'],
                ["style", "font-size", '35px']
            ],
            "${_bucket_liquid_road}": [
                ["color", "background-color", 'rgba(130,149,95,1.00)'],
                ["style", "top", '766px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '7px'],
                ["style", "opacity", '0'],
                ["style", "left", '1409px'],
                ["style", "width", '11px']
            ],
            "${_liquide_mid}": [
                ["color", "background-color", 'rgba(24,47,1,1.00)'],
                ["style", "top", '648px'],
                ["transform", "skewY", '-42deg'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '182px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1190px'],
                ["style", "width", '250px']
            ],
            "${_radiator_top}": [
                ["style", "left", '1111px'],
                ["style", "top", '446px']
            ],
            "${_line3}": [
                ["style", "left", '327px'],
                ["style", "top", '269px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(199,0,96,1.00)'],
                ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '250px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '80px'],
                ["style", "border-width", '3px'],
                ["style", "left", '0px']
            ],
            "${_radiator_back}": [
                ["style", "left", '1190px'],
                ["style", "top", '483px']
            ],
            "${_liquide_top_90pct}": [
                ["style", "top", '707px'],
                ["style", "opacity", '0'],
                ["style", "left", '1193px']
            ],
            "${_bottle}": [
                ["style", "top", '374px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '1229px']
            ],
            "${_line2}": [
                ["style", "left", '328px'],
                ["style", "top", '329px']
            ],
            "${_rewind_btn}": [
                ["style", "top", '584px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '170px']
            ],
            "${_LINE1_IN}": [
                ["style", "left", '1017px'],
                ["style", "top", '627px']
            ],
            "${_bucket_inner}": [
                ["style", "left", '1343px'],
                ["style", "top", '801px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '256px'],
                ["style", "left", '0px'],
                ["style", "font-size", '45px']
            ],
            "${_liquide_top_80pct}": [
                ["style", "top", '530px'],
                ["style", "opacity", '0.800000011920929'],
                ["style", "left", '1192px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(239,239,239,1.00)'],
                ["style", "width", '1806px'],
                ["style", "height", '1077px'],
                ["style", "overflow", 'hidden']
            ],
            "${_LINE3_IN}": [
                ["style", "left", '338px'],
                ["style", "top", '280px']
            ],
            "${_bucket}": [
                ["style", "left", '1336px'],
                ["style", "top", '794px']
            ],
            "${_LINE2_IN}": [
                ["style", "left", '339px'],
                ["style", "top", '340px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9911,
            autoPlay: true,
            timeline: [
                { id: "eid331", tween: [ "style", "${_bottle_color_fixer}", "opacity", '1', { fromValue: '0'}], position: 5239, duration: 300 },
                { id: "eid375", tween: [ "style", "${_bottle_color_fixer}", "opacity", '0', { fromValue: '1'}], position: 8746, duration: 300 },
                { id: "eid348", tween: [ "style", "${_liquide_mid}", "top", '828px', { fromValue: '648px'}], position: 510, duration: 2735 },
                { id: "eid372", tween: [ "style", "${_liquide_mid}", "top", '828px', { fromValue: '828px'}], position: 8746, duration: 0 },
                { id: "eid350", tween: [ "style", "${_liquide_top_80pct}", "left", '1193px', { fromValue: '1192px'}], position: 510, duration: 2735 },
                { id: "eid312", tween: [ "style", "${_rewind_btn}", "opacity", '1', { fromValue: '0'}], position: 9678, duration: 233 },
                { id: "eid347", tween: [ "style", "${_liquide_mid}", "height", '6px', { fromValue: '182px'}], position: 510, duration: 2735 },
                { id: "eid318", tween: [ "style", "${_BOTTLEOIL_FLOW}", "opacity", '0', { fromValue: '1'}], position: 8746, duration: 300 },
                { id: "eid359", tween: [ "style", "${_liquide_bottom_90pct}", "top", '476px', { fromValue: '703px'}], position: 6011, duration: 2735 },
                { id: "eid355", tween: [ "style", "${_liquide_bottom_80pct}", "opacity", '0', { fromValue: '0.800000011920929'}], position: 3245, duration: 234 },
                { id: "eid324", tween: [ "style", "${_bottle}", "left", '1184px', { fromValue: '1229px'}], position: 4506, duration: 733 },
                { id: "eid380", tween: [ "style", "${_bottle}", "left", '1229px', { fromValue: '1184px'}], position: 9046, duration: 733 },
                { id: "eid363", tween: [ "style", "${_liquide_bottom_90pct}", "opacity", '0.8999999761581421', { fromValue: '0'}], position: 5739, duration: 272 },
                { id: "eid314", tween: [ "style", "${_bottle_cap}", "top", '296px', { fromValue: '361px'}], position: 4139, duration: 267, easing: "easeOutQuad" },
                { id: "eid353", tween: [ "style", "${_liquide_bottom_80pct}", "top", '704px', { fromValue: '526px'}], position: 510, duration: 2735 },
                { id: "eid374", tween: [ "style", "${_liquide_bottom_80pct}", "top", '704px', { fromValue: '704px'}], position: 8746, duration: 0 },
                { id: "eid313", tween: [ "transform", "${_rewind_btn}", "scaleY", '1', { fromValue: '0.9'}], position: 9678, duration: 233 },
                { id: "eid315", tween: [ "style", "${_bottle_cap}", "opacity", '1', { fromValue: '0'}], position: 3739, duration: 367 },
                { id: "eid316", tween: [ "style", "${_bottle_cap}", "opacity", '0', { fromValue: '1'}], position: 4139, duration: 267, easing: "easeOutQuad" },
                { id: "eid308", tween: [ "style", "${_bucket_liquid_pollution}", "top", '835px', { fromValue: '913px'}], position: 278, duration: 3461 },
                { id: "eid311", tween: [ "transform", "${_rewind_btn}", "scaleX", '1', { fromValue: '0.9'}], position: 9678, duration: 233 },
                { id: "eid354", tween: [ "style", "${_liquide_top_80pct}", "opacity", '0', { fromValue: '0.800000011920929'}], position: 3245, duration: 234 },
                { id: "eid367", tween: [ "style", "${_liquide_midCopy}", "height", '232px', { fromValue: '6px'}], position: 6011, duration: 2735 },
                { id: "eid326", tween: [ "transform", "${_bottle}", "rotateZ", '-137deg', { fromValue: '0deg'}], position: 4506, duration: 733 },
                { id: "eid381", tween: [ "transform", "${_bottle}", "rotateZ", '0deg', { fromValue: '-137deg'}], position: 9046, duration: 733 },
                { id: "eid274", tween: [ "style", "${_bucket_liquid_road}", "height", '121px', { fromValue: '7px'}], position: 278, duration: 232 },
                { id: "eid344", tween: [ "style", "${_bucket_liquid_road}", "height", '17px', { fromValue: '121px'}], position: 3479, duration: 260 },
                { id: "eid366", tween: [ "style", "${_liquide_midCopy}", "top", '598px', { fromValue: '828px'}], position: 6011, duration: 2735 },
                { id: "eid323", tween: [ "style", "${_bottle}", "opacity", '1', { fromValue: '0'}], position: 3739, duration: 367 },
                { id: "eid276", tween: [ "style", "${_bucket_liquid_road}", "opacity", '1', { fromValue: '0'}], position: 278, duration: 232 },
                { id: "eid346", tween: [ "style", "${_bucket_liquid_road}", "opacity", '0', { fromValue: '1'}], position: 3479, duration: 260 },
                { id: "eid321", tween: [ "style", "${_bottle}", "top", '397px', { fromValue: '374px'}], position: 4506, duration: 733 },
                { id: "eid379", tween: [ "style", "${_bottle}", "top", '374px', { fromValue: '397px'}], position: 9046, duration: 733 },
                { id: "eid351", tween: [ "style", "${_liquide_top_80pct}", "top", '708px', { fromValue: '530px'}], position: 510, duration: 2735 },
                { id: "eid373", tween: [ "style", "${_liquide_top_80pct}", "top", '708px', { fromValue: '708px'}], position: 8746, duration: 0 },
                { id: "eid352", tween: [ "style", "${_liquide_bottom_80pct}", "left", '1193px', { fromValue: '1192px'}], position: 510, duration: 2735 },
                { id: "eid368", tween: [ "color", "${_liquide_midCopy}", "background-color", 'rgba(69,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(69,255,0,1.00)'}], position: 6011, duration: 0 },
                { id: "eid361", tween: [ "style", "${_liquide_top_90pct}", "opacity", '0.8999999761581421', { fromValue: '0'}], position: 5739, duration: 272 },
                { id: "eid357", tween: [ "style", "${_liquide_top_90pct}", "top", '480px', { fromValue: '707px'}], position: 6011, duration: 2735 },
                { id: "eid343", tween: [ "style", "${_color_fixer}", "opacity", '1', { fromValue: '0'}], position: 5486, duration: 253 },
                { id: "eid345", tween: [ "style", "${_bucket_liquid_road}", "top", '870px', { fromValue: '766px'}], position: 3479, duration: 260 },
                { id: "eid382", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_BOTTLEOIL_FLOW}', [0] ], ""], position: 0 },
                { id: "eid270", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BUCKET_LIQUID_FLOW}', [] ], ""], position: 545.1578063377 },
                { id: "eid159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_LINE1_IN}', [] ], ""], position: 778.49113967103 },
                { id: "eid301", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_BUCKET_LIQUID_FLOW}', [0] ], ""], position: 3479.491139671 },
                { id: "eid337", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_BOTTLEOIL_FLOW}', [] ], ""], position: 5239.491139671 }            ]
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
                    id: 'POLLUTION_L1_1',
                    type: 'rect',
                    rect: ['53px', '238px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L1_2',
                    type: 'rect',
                    rect: ['72px', '185px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L1_3',
                    type: 'rect',
                    rect: ['7px', '124px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L1_4',
                    type: 'rect',
                    rect: ['38px', '12px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L1_4',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L1_1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L1_2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L1_3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L1_2}": [
                ["style", "left", '8px'],
                ["style", "top", '185px']
            ],
            "${_POLLUTION_L1_1}": [
                ["style", "left", '53px'],
                ["style", "top", '238px']
            ],
            "${_POLLUTION_L1_3}": [
                ["style", "top", '124px'],
                ["style", "left", '7px']
            ],
            "${_POLLUTION_L1_4}": [
                ["style", "left", '38px'],
                ["style", "top", '12px']
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
            duration: 734,
            autoPlay: false,
            timeline: [
            ]
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
                    id: 'POLLUTION_L2_1',
                    type: 'rect',
                    rect: ['704', '335', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_2',
                    type: 'rect',
                    rect: ['630px', '299px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_3',
                    type: 'rect',
                    rect: ['544px', '256px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_4',
                    type: 'rect',
                    rect: ['452px', '191px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_5',
                    type: 'rect',
                    rect: ['350px', '134px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_6',
                    type: 'rect',
                    rect: ['246px', '85px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_7',
                    type: 'rect',
                    rect: ['129px', '28px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L2_8',
                    type: 'rect',
                    rect: ['13px', '19px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L2_1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_8',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_7',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_5',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_6',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_4',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L2_2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L2_6}": [
                ["style", "left", '246px'],
                ["style", "top", '85px']
            ],
            "${_POLLUTION_L2_8}": [
                ["style", "left", '13px'],
                ["style", "top", '19px']
            ],
            "${_POLLUTION_L2_5}": [
                ["style", "left", '350px'],
                ["style", "top", '134px']
            ],
            "${_POLLUTION_L2_4}": [
                ["style", "left", '452px'],
                ["style", "top", '191px']
            ],
            "${_line2_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_POLLUTION_L2_7}": [
                ["style", "left", '129px'],
                ["style", "top", '28px']
            ],
            "${_POLLUTION_L2_3}": [
                ["style", "left", '544px'],
                ["style", "top", '256px']
            ],
            "${symbolSelector}": [
                ["style", "height", '364px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '765px']
            ],
            "${_POLLUTION_L2_2}": [
                ["style", "left", '630px'],
                ["style", "top", '299px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2067,
            autoPlay: false,
            timeline: [
            ]
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
                    id: 'POLLUTION_L3_1',
                    type: 'rect',
                    rect: ['7px', '26px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L3_2',
                    type: 'rect',
                    rect: ['78px', '61px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L3_3',
                    type: 'rect',
                    rect: ['153px', '24px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L3_4',
                    type: 'rect',
                    rect: ['223px', '22px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L3_4',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L3_3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L3_1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L3_2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L3_3}": [
                ["style", "left", '153px'],
                ["style", "top", '24px']
            ],
            "${_POLLUTION_L3_1}": [
                ["style", "left", '7px'],
                ["style", "top", '26px']
            ],
            "${_POLLUTION_L3_4}": [
                ["style", "top", '22px'],
                ["style", "left", '223px']
            ],
            "${_line3_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_POLLUTION_L3_2}": [
                ["style", "top", '61px'],
                ["style", "left", '78px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '275px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1633,
            autoPlay: false,
            timeline: [
            ]
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
                    id: 'POLLUTION_L4_1',
                    type: 'rect',
                    rect: ['21px', '31px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L4_2',
                    type: 'rect',
                    rect: ['71px', '9', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'POLLUTION_L4_3',
                    type: 'rect',
                    rect: ['113px', '31', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'POLLUTION_L4_1',
                symbolName: 'POLLUTION1',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L4_2',
                symbolName: 'POLLUTION2',
                autoPlay: {

               }
            },
            {
                id: 'POLLUTION_L4_3',
                symbolName: 'POLLUTION3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POLLUTION_L4_1}": [
                ["style", "left", '21px'],
                ["style", "top", '31px']
            ],
            "${_line4_in}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '66px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '151px']
            ],
            "${_POLLUTION_L4_2}": [
                ["style", "left", '71px']
            ],
            "${_POLLUTION_L4_3}": [
                ["style", "left", '113px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"POLLUTION3": {
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
                    id: 'pollution_src3',
                    tag: 'img',
                    rect: ['0px', '0px', '15', '9', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src3.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '9px'],
                ["style", "width", '15px']
            ],
            "${_pollution_src3}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: true,
            timeline: [
                { id: "eid23", tween: [ "transform", "${_pollution_src3}", "scaleY", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid24", tween: [ "transform", "${_pollution_src3}", "scaleY", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid25", tween: [ "style", "${_pollution_src3}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_pollution_src3}", "left", '0px', { fromValue: '6px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid27", tween: [ "transform", "${_pollution_src3}", "scaleX", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid28", tween: [ "transform", "${_pollution_src3}", "scaleX", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid21", tween: [ "style", "${_pollution_src3}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_pollution_src3}", "top", '0px', { fromValue: '4px'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
        }
    }
},
"POLLUTION2": {
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
                    id: 'pollution_src2',
                    tag: 'img',
                    rect: ['0px', '0px', '14', '13', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src2.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src2}": [
                ["transform", "scaleX", '0.59'],
                ["style", "top", '4px'],
                ["transform", "scaleY", '0.59'],
                ["style", "left", '6px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '14px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: true,
            timeline: [
                { id: "eid65", tween: [ "style", "${_pollution_src2}", "left", '0px', { fromValue: '6px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid69", tween: [ "style", "${_pollution_src2}", "left", '6px', { fromValue: '0px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid66", tween: [ "transform", "${_pollution_src2}", "scaleX", '1', { fromValue: '0.59'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid70", tween: [ "transform", "${_pollution_src2}", "scaleX", '0.59', { fromValue: '1'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid63", tween: [ "style", "${_pollution_src2}", "top", '0px', { fromValue: '4px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid67", tween: [ "style", "${_pollution_src2}", "top", '4px', { fromValue: '0px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid64", tween: [ "transform", "${_pollution_src2}", "scaleY", '1', { fromValue: '0.59'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid68", tween: [ "transform", "${_pollution_src2}", "scaleY", '0.59', { fromValue: '1'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
        }
    }
},
"POLLUTION1": {
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
                    id: 'pollution_src1',
                    tag: 'img',
                    rect: ['0px', '0px', '23', '10', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pollution_src1.png']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pollution_src1}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '23px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 734,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_pollution_src1}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_pollution_src1}", "left", '0px', { fromValue: '6px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid1", tween: [ "style", "${_pollution_src1}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_pollution_src1}", "top", '0px', { fromValue: '4px'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid3", tween: [ "transform", "${_pollution_src1}", "scaleX", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid10", tween: [ "transform", "${_pollution_src1}", "scaleX", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" },
                { id: "eid4", tween: [ "transform", "${_pollution_src1}", "scaleY", '0.59', { fromValue: '1'}], position: 0, duration: 367, easing: "easeInQuad" },
                { id: "eid11", tween: [ "transform", "${_pollution_src1}", "scaleY", '1', { fromValue: '0.59'}], position: 367, duration: 367, easing: "easeInQuad" }            ]
        }
    }
},
"BUCKET_LIQUID_FLOW": {
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
                    id: 'SRCS',
                    type: 'group',
                    rect: ['0', '0', '11', '55', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'src1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '0px', '11px', '5px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,0.40)']
                    },
                    {
                        type: 'rect',
                        id: 'src2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '10px', '11px', '5px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,0.40)']
                    },
                    {
                        type: 'rect',
                        id: 'src3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '20px', '11px', '5px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,0.40)']
                    },
                    {
                        type: 'rect',
                        id: 'src4',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '40px', '11px', '5px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,0.40)']
                    },
                    {
                        type: 'rect',
                        id: 'src5',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '30px', '11px', '5px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,0.40)']
                    },
                    {
                        type: 'rect',
                        id: 'src6',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '50px', '11px', '5px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,0.40)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_src3}": [
                ["style", "top", '20px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(255,255,255,0.40)']
            ],
            "${_src2}": [
                ["style", "top", '10px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(255,255,255,0.40)']
            ],
            "${_src5}": [
                ["style", "top", '30px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(255,255,255,0.40)']
            ],
            "${symbolSelector}": [
                ["style", "height", '121px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '11px']
            ],
            "${_src1}": [
                ["color", "background-color", 'rgba(255,255,255,0.40)'],
                ["style", "height", '5px']
            ],
            "${_SRCS}": [
                ["style", "top", '-55px']
            ],
            "${_src6}": [
                ["style", "top", '50px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(255,255,255,0.40)']
            ],
            "${_src4}": [
                ["style", "top", '40px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(255,255,255,0.40)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: false,
            timeline: [
                { id: "eid289", tween: [ "style", "${_SRCS}", "top", '121px', { fromValue: '-55px'}], position: 0, duration: 600 }            ]
        }
    }
},
"BOTTLEOIL_FLOW": {
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
                    id: 'bottleOil_road',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '15px', '89px', 'auto', 'auto'],
                    fill: ['rgba(69,255,0,1)']
                },
                {
                    id: 'oil_src_Group',
                    type: 'group',
                    rect: ['0', '0', '15', '54', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'oil_src1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '0px', '15px', '14px', 'auto', 'auto'],
                        fill: ['rgba(69,255,0,1)']
                    },
                    {
                        type: 'rect',
                        id: 'oil_src2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '20px', '15px', '14px', 'auto', 'auto'],
                        fill: ['rgba(69,255,0,1)']
                    },
                    {
                        type: 'rect',
                        id: 'oil_src3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '40px', '15px', '14px', 'auto', 'auto'],
                        fill: ['rgba(69,255,0,1)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_oil_src_Group}": [
                ["style", "top", '-54px']
            ],
            "${_oil_src3}": [
                ["style", "top", '40px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',50],['rgba(255,255,255,0.00)',100]]]]
            ],
            "${_oil_src2}": [
                ["style", "top", '20px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',50],['rgba(255,255,255,0.00)',100]]]]
            ],
            "${symbolSelector}": [
                ["style", "height", '89px'],
                ["style", "width", '15px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bottleOil_road}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '6px']
            ],
            "${_oil_src1}": [
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',50],['rgba(255,255,255,0.00)',100]]]]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 700,
            autoPlay: false,
            labels: {
                "flow": 267
            },
            timeline: [
                { id: "eid336", tween: [ "gradient", "${_oil_src1}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',50],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',50],['rgba(255,255,255,0.00)',100]]]}], position: 267, duration: 0 },
                { id: "eid333", tween: [ "style", "${_bottleOil_road}", "height", '89px', { fromValue: '6px'}], position: 0, duration: 267 },
                { id: "eid338", tween: [ "gradient", "${_oil_src2}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',50],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',50],['rgba(255,255,255,0.00)',100]]]}], position: 267, duration: 0 },
                { id: "eid335", tween: [ "style", "${_bottleOil_road}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 267 },
                { id: "eid339", tween: [ "gradient", "${_oil_src3}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',50],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',50],['rgba(255,255,255,0.00)',100]]]}], position: 267, duration: 0 },
                { id: "eid341", tween: [ "style", "${_oil_src_Group}", "top", '89px', { fromValue: '-54px'}], position: 267, duration: 433 }            ]
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
