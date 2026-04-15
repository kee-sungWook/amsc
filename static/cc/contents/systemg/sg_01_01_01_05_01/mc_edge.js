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
                id: 'boby',
                type: 'image',
                tag: 'img',
                rect: ['65', '76','1328','1078','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"boby.png"]
            },
            {
                id: 'txt1',
                type: 'text',
                rect: ['1278px', '335px','1085px','259px','auto', 'auto'],
                opacity: 1,
                text: "수냉식 엔진에서 냉각수를 순환시키기 위한 펌프이며<br>엔진 앞부분에 장착되며 원심식의 날개를 이용한<br>소용돌이 펌프로 팬밸트에 의해 구동 됩니다.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,74,141,1)", "600", "none", "normal"]
            },
            {
                id: 'txt_title',
                type: 'text',
                rect: ['1278px', '204px','299px','92px','auto', 'auto'],
                text: "워터펌프란?",
                font: ['abel, sans-serif', 80, "rgba(0,74,141,1.00)", "600", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt1}": [
                ["style", "top", '335px'],
                ["style", "font-size", '45px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["style", "height", '160px'],
                ["style", "opacity", '1'],
                ["style", "left", '1278px'],
                ["style", "width", '1085px']
            ],
            "${_txt_title}": [
                ["color", "color", 'rgba(0,74,141,1)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1278px'],
                ["style", "font-size", '80px'],
                ["style", "top", '204px'],
                ["transform", "scaleY", '1'],
                ["style", "width", '494px'],
                ["style", "height", '92px'],
                ["style", "font-family", '나눔고딕, NanumGothic'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
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
})(jQuery, AdobeEdge, "EDGE-22844539");
