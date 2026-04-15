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
                id: 'con01',
                type: 'image',
                tag: 'img',
                rect: ['1299', '326','625','44','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con01.png"]
            },
            {
                id: 'boby01',
                type: 'image',
                tag: 'img',
                rect: ['1153', '170','951','950','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"boby01.png"]
            },
            {
                id: 'big_spring01',
                type: 'image',
                tag: 'img',
                rect: ['1457', '449','349','27','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"big_spring01.png"]
            },
            {
                id: 'big_spring02',
                type: 'image',
                tag: 'img',
                rect: ['1457', '468','349','27','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"big_spring02.png"]
            },
            {
                id: 'big_spring03',
                type: 'image',
                tag: 'img',
                rect: ['1457', '488','349','27','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"big_spring03.png"]
            },
            {
                id: 'big_spring04',
                type: 'image',
                tag: 'img',
                rect: ['1458', '507','348','28','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"big_spring04.png"]
            },
            {
                id: 'big_spring05',
                type: 'image',
                tag: 'img',
                rect: ['1457', '528','349','27','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"big_spring05.png"]
            },
            {
                id: 'con02',
                type: 'image',
                tag: 'img',
                rect: ['1462', '460','342','140','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"con02.png"]
            },
            {
                id: 'top_boby',
                type: 'image',
                tag: 'img',
                rect: ['1505', '448','247','101','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"top_boby.png"]
            },
            {
                id: 'spring01',
                type: 'image',
                tag: 'img',
                rect: ['1575', '548px','113','14','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring01.png"]
            },
            {
                id: 'spring02',
                type: 'image',
                tag: 'img',
                rect: ['1579', '529px','104','15','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring02.png"]
            },
            {
                id: 'spring03',
                type: 'image',
                tag: 'img',
                rect: ['1584', '510px','95','15','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring03.png"]
            },
            {
                id: 'spring04',
                type: 'image',
                tag: 'img',
                rect: ['1589', '493','85','14','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spring04.png"]
            },
            {
                id: 'spion',
                type: 'image',
                tag: 'img',
                rect: ['1536', '471','188','171','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spion.png"]
            },
            {
                id: 'Layer-12',
                type: 'image',
                tag: 'img',
                rect: ['1582', '435','96','45','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Layer-12.png"]
            },
            {
                id: 'left',
                type: 'image',
                tag: 'img',
                rect: ['295', '109','718','909','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"left.png"]
            },
            {
                id: 'Ellipse1',
                type: 'ellipse',
                rect: ['1963px', '767px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse2',
                type: 'ellipse',
                rect: ['1917px', '767px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse3',
                type: 'ellipse',
                rect: ['1963px', '767px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse4',
                type: 'ellipse',
                rect: ['1963px', '767px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse5',
                type: 'ellipse',
                rect: ['1963px', '767px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'left01',
                type: 'ellipse',
                rect: ['1917px', '767px','14px','14px','auto', 'auto'],
                autoOrient: true,
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'left02',
                type: 'ellipse',
                rect: ['1917px', '767px','14px','14px','auto', 'auto'],
                autoOrient: true,
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'left03',
                type: 'ellipse',
                rect: ['1917px', '767px','14px','14px','auto', 'auto'],
                autoOrient: true,
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'left04',
                type: 'ellipse',
                rect: ['1917px', '767px','14px','14px','auto', 'auto'],
                autoOrient: true,
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'left05',
                type: 'ellipse',
                rect: ['1917px', '767px','14px','14px','auto', 'auto'],
                autoOrient: true,
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(7,224,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_su01',
                type: 'ellipse',
                rect: ['1664px', '833px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,141,215,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_su02',
                type: 'ellipse',
                rect: ['1664px', '833px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,141,215,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_su03',
                type: 'ellipse',
                rect: ['1664px', '833px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,141,215,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_su04',
                type: 'ellipse',
                rect: ['1664px', '833px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,141,215,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_left01',
                type: 'ellipse',
                rect: ['1561px', '833px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,141,215,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_left02',
                type: 'ellipse',
                rect: ['1561px', '833px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,141,215,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_left03',
                type: 'ellipse',
                rect: ['1561px', '833px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,141,215,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_left04',
                type: 'ellipse',
                rect: ['1561px', '833px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,141,215,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_left03}": [
                ["motion", "location", '1437px 842px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ],
            "${_Ellipse_left01}": [
                ["motion", "location", '1567.9999755859px 839.99992910156px'],
                ["style", "opacity", '0']
            ],
            "${_big_spring04}": [
                ["style", "top", '507px']
            ],
            "${_left02}": [
                ["motion", "location", '1437px 842px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ],
            "${_con02}": [
                ["style", "top", '460px']
            ],
            "${_Ellipse_su01}": [
                ["motion", "location", '1671.0002106311px 840.03892726524px'],
                ["style", "opacity", '0']
            ],
            "${_spring03}": [
                ["style", "top", '510px']
            ],
            "${_spring02}": [
                ["style", "top", '529px']
            ],
            "${_Ellipse_left02}": [
                ["motion", "location", '1568px 840px'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse3}": [
                ["motion", "location", '1969.933348047px 773.74px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ],
            "${_big_spring05}": [
                ["style", "top", '528px']
            ],
            "${_Ellipse_su02}": [
                ["motion", "location", '1671px 840.04px'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse5}": [
                ["motion", "location", '1969.93px 773.74px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ],
            "${_left04}": [
                ["motion", "location", '1437px 842px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ],
            "${_Ellipse_left03}": [
                ["motion", "location", '1568px 840px'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse4}": [
                ["motion", "location", '1969.9333488282px 773.74px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '2400px'],
                ["style", "height", '1230px'],
                ["style", "overflow", 'hidden']
            ],
            "${_left05}": [
                ["motion", "location", '1437px 842px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ],
            "${_big_spring03}": [
                ["style", "top", '488px']
            ],
            "${_big_spring02}": [
                ["style", "top", '468px']
            ],
            "${_Ellipse_su04}": [
                ["motion", "location", '1671px 840.04px'],
                ["style", "opacity", '0']
            ],
            "${_spring04}": [
                ["style", "top", '493px']
            ],
            "${_spion}": [
                ["style", "top", '471px']
            ],
            "${_Ellipse_left04}": [
                ["motion", "location", '1568px 840px'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse1}": [
                ["motion", "location", '1969.933396094px 773.74px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ],
            "${_Ellipse_su03}": [
                ["motion", "location", '1671px 840.04px'],
                ["style", "opacity", '0']
            ],
            "${_spring01}": [
                ["style", "top", '548px']
            ],
            "${_Ellipse2}": [
                ["motion", "location", '1923.95px 773.74px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ],
            "${_left01}": [
                ["motion", "location", '1436px 833px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,141,215,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6142,
            autoPlay: true,
            labels: {
                "00": 0
            },
            timeline: [
                { id: "eid179", tween: [ "style", "${_Ellipse_su01}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid182", tween: [ "style", "${_Ellipse_su01}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 31 },
                { id: "eid188", tween: [ "style", "${_Ellipse_su01}", "opacity", '0', { fromValue: '1'}], position: 5440, duration: 60 },
                { id: "eid255", tween: [ "motion", "${_Ellipse5}", [[1969.93, 773.74, 0, 0],[1812.3, 773.74, -0.47, 0, -91.52, 0],[1812.42, 565.9, -1.47, -58.64, -2.56, -102.31],[1678.99, 589.03, -12.04, 3.99, -87.82, 29.11],[1676.61, 648.84, 0.16, 6.67, 1.03, 43.76],[1724.73, 649.64, 2.31, -0.06, 38.65, -1.09],[1722.57, 844.89, 0, 0]]], position: 1270, duration: 1600 },
                { id: "eid58", tween: [ "motion", "${_Ellipse4}", [[1969.93, 773.74, 0, 0],[1812.3, 773.74, -0.47, 0, -91.52, 0],[1812.42, 565.9, -1.47, -58.64, -2.56, -102.31],[1678.99, 589.03, -12.04, 3.99, -87.82, 29.11],[1676.61, 648.84, 0.16, 6.67, 1.03, 43.76],[1724.73, 649.64, 2.31, -0.06, 38.65, -1.09],[1722.57, 844.9, 0, 0]]], position: 1200, duration: 1600 },
                { id: "eid55", tween: [ "motion", "${_Ellipse2}", [[1969.93, 773.74, 0, 0],[1812.3, 773.74, -0.47, 0, -91.52, 0],[1812.42, 565.9, -1.47, -58.64, -2.56, -102.31],[1678.99, 589.03, -12.04, 3.99, -87.82, 29.11],[1676.61, 648.84, 0.16, 6.67, 1.03, 43.76],[1724.73, 649.64, 2.31, -0.06, 38.65, -1.09],[1722.57, 845.9, 0, 0]]], position: 1067, duration: 1600 },
                { id: "eid199", tween: [ "motion", "${_Ellipse_su04}", [[1671, 840.04, 0, 0],[1672.18, 674.73, 1.24, -56.73, 4.17, -191.21],[1745.29, 620.87, 96.26, 2.54, 110.34, 2.91],[1811.02, 687.13, 11.01, 49.03, 24.8, 110.47],[1829.69, 775.08, 156.31, 2.51, 72.69, 1.17],[1970.04, 774.35, 0, 0]]], position: 4281, duration: 1408 },
                { id: "eid200", tween: [ "motion", "${_Ellipse_su04}", [[1970.04, 774.35, 0, 0],[1970.04, 774.35, 0, 0]]], position: 5750, duration: 0 },
                { id: "eid246", tween: [ "style", "${_Ellipse3}", "opacity", '1', { fromValue: '0'}], position: 1110, duration: 23 },
                { id: "eid64", tween: [ "style", "${_Ellipse3}", "opacity", '0', { fromValue: '1'}], position: 2734, duration: 67 },
                { id: "eid4", tween: [ "style", "${_spring04}", "top", '559px', { fromValue: '493px'}], position: 0, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_spring04}", "top", '493px', { fromValue: '559px'}], position: 3000, duration: 1000 },
                { id: "eid5", tween: [ "style", "${_spring03}", "top", '572px', { fromValue: '510px'}], position: 0, duration: 1000 },
                { id: "eid35", tween: [ "style", "${_spring03}", "top", '510px', { fromValue: '572px'}], position: 3000, duration: 1000 },
                { id: "eid219", tween: [ "style", "${_Ellipse_left04}", "opacity", '0', { fromValue: '0'}], position: 67, duration: 0 },
                { id: "eid220", tween: [ "style", "${_Ellipse_left04}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 30 },
                { id: "eid228", tween: [ "style", "${_Ellipse_left04}", "opacity", '0', { fromValue: '1'}], position: 5808, duration: 67 },
                { id: "eid215", tween: [ "motion", "${_Ellipse_left03}", [[1568, 840, 0, 0],[1567.84, 685.43, -0.06, -137.97, -0.07, -170.14],[1514.9, 613.59, -130.09, -17.27, -46.68, -6.2],[1441.6, 678.69, -4.88, 26.82, -12.94, 71.08],[1439, 834, 0, 0]]], position: 4195, duration: 1531 },
                { id: "eid225", tween: [ "motion", "${_Ellipse_left03}", [[1439, 834, 0, 0],[1439, 834, 0, 0]]], position: 5792, duration: 0 },
                { id: "eid11", tween: [ "style", "${_big_spring03}", "top", '515px', { fromValue: '488px'}], position: 0, duration: 1000 },
                { id: "eid42", tween: [ "style", "${_big_spring03}", "top", '488px', { fromValue: '515px'}], position: 3000, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_big_spring04}", "top", '547px', { fromValue: '507px'}], position: 0, duration: 1000 },
                { id: "eid41", tween: [ "style", "${_big_spring04}", "top", '507px', { fromValue: '547px'}], position: 3000, duration: 1000 },
                { id: "eid82", tween: [ "motion", "${_left02}", [[1437, 842, 0, 0],[1439.79, 675.07, 1.88, -31.7, 11.55, -194.55],[1452.66, 571.1, 11.24, -6.49, 13.55, -7.82],[1586.62, 574.58, 36.54, 2.68, 122.22, 8.96],[1595.49, 647.41, -24.45, -0.49, -4.25, -0.09],[1533.12, 646.41, -2.68, 0.04, -48.9, 0.74],[1536, 843.97, 0, 0]]], position: 1067, duration: 1600 },
                { id: "eid262", tween: [ "motion", "${_left02}", [[1536, 853, 0, 0],[1536, 844, 0, 0]]], position: 2667, duration: 66 },
                { id: "eid1", tween: [ "style", "${_con02}", "top", '510px', { fromValue: '460px'}], position: 0, duration: 1000 },
                { id: "eid38", tween: [ "style", "${_con02}", "top", '460px', { fromValue: '510px'}], position: 3000, duration: 1000 },
                { id: "eid196", tween: [ "style", "${_Ellipse_su03}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid197", tween: [ "style", "${_Ellipse_su03}", "opacity", '1', { fromValue: '0.000000'}], position: 4164, duration: 34 },
                { id: "eid198", tween: [ "style", "${_Ellipse_su03}", "opacity", '0', { fromValue: '1'}], position: 5606, duration: 60 },
                { id: "eid54", tween: [ "motion", "${_Ellipse1}", [[1969.93, 773.74, 0, 0],[1812.3, 773.74, -0.47, 0, -91.52, 0],[1812.42, 565.9, -1.47, -58.64, -2.56, -102.31],[1678.99, 589.03, -12.04, 3.99, -87.82, 29.11],[1676.61, 648.84, 0.16, 6.67, 1.03, 43.76],[1724.73, 649.64, 2.31, -0.06, 38.65, -1.09],[1722.57, 843.9, 0, 0]]], position: 1000, duration: 1600 },
                { id: "eid218", tween: [ "motion", "${_Ellipse_left04}", [[1568, 840, 0, 0],[1567.84, 685.43, -0.06, -137.97, -0.07, -170.14],[1514.9, 613.59, -130.09, -17.27, -46.68, -6.2],[1441.6, 678.69, -4.88, 26.82, -12.94, 71.08],[1439, 834, 0, 0]]], position: 4280, duration: 1528 },
                { id: "eid227", tween: [ "motion", "${_Ellipse_left04}", [[1439, 834, 0, 0],[1439, 834, 0, 0]]], position: 5875, duration: 0 },
                { id: "eid252", tween: [ "style", "${_left02}", "opacity", '1', { fromValue: '0'}], position: 1042, duration: 25 },
                { id: "eid172", tween: [ "style", "${_left02}", "opacity", '0', { fromValue: '1'}], position: 2667, duration: 66 },
                { id: "eid56", tween: [ "motion", "${_Ellipse3}", [[1969.93, 773.74, 0, 0],[1812.3, 773.74, -0.47, 0, -91.52, 0],[1812.42, 565.9, -1.47, -58.64, -2.56, -102.31],[1678.99, 589.03, -12.04, 3.99, -87.82, 29.11],[1676.61, 648.84, 0.16, 6.67, 1.03, 43.76],[1724.73, 649.64, 2.31, -0.06, 38.65, -1.09],[1722.57, 844.87, 0, 0]]], position: 1134, duration: 1600 },
                { id: "eid254", tween: [ "style", "${_left04}", "opacity", '1', { fromValue: '0'}], position: 1180, duration: 20 },
                { id: "eid176", tween: [ "style", "${_left04}", "opacity", '0', { fromValue: '1'}], position: 2800, duration: 67 },
                { id: "eid247", tween: [ "style", "${_Ellipse4}", "opacity", '1', { fromValue: '0'}], position: 1180, duration: 20 },
                { id: "eid99", tween: [ "style", "${_Ellipse4}", "opacity", '0', { fromValue: '1'}], position: 2800, duration: 67 },
                { id: "eid206", tween: [ "style", "${_Ellipse_left01}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid209", tween: [ "style", "${_Ellipse_left01}", "opacity", '1', { fromValue: '0.000000'}], position: 3999, duration: 31 },
                { id: "eid222", tween: [ "style", "${_Ellipse_left01}", "opacity", '0', { fromValue: '1'}], position: 5566, duration: 67 },
                { id: "eid212", tween: [ "motion", "${_Ellipse_left02}", [[1568, 840, 0, 0],[1567.84, 685.43, -0.06, -137.97, -0.07, -170.14],[1514.9, 613.59, -130.09, -17.27, -46.68, -6.2],[1441.6, 678.69, -4.88, 26.82, -12.94, 71.08],[1439, 834, 0, 0]]], position: 4114, duration: 1528 },
                { id: "eid223", tween: [ "motion", "${_Ellipse_left02}", [[1439, 834, 0, 0],[1439, 834, 0, 0]]], position: 5708, duration: 0 },
                { id: "eid87", tween: [ "motion", "${_left04}", [[1437, 842, 0, 0],[1439.79, 675.07, 1.88, -31.7, 11.55, -194.55],[1452.66, 571.1, 11.24, -6.49, 13.55, -7.82],[1586.62, 574.58, 36.54, 2.68, 122.22, 8.96],[1595.49, 647.41, -24.45, -0.49, -4.25, -0.09],[1533.12, 646.41, -2.68, 0.04, -48.9, 0.74],[1536, 843.99, 0, 0]]], position: 1200, duration: 1600 },
                { id: "eid175", tween: [ "motion", "${_left04}", [[1536, 853, 0, 0],[1536, 853, 0, 0]]], position: 2867, duration: 0 },
                { id: "eid260", tween: [ "style", "${_left05}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 20 },
                { id: "eid261", tween: [ "style", "${_left05}", "opacity", '0', { fromValue: '1'}], position: 2870, duration: 67 },
                { id: "eid191", tween: [ "style", "${_Ellipse_su02}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid192", tween: [ "style", "${_Ellipse_su02}", "opacity", '1', { fromValue: '0.000000'}], position: 4083, duration: 31 },
                { id: "eid193", tween: [ "style", "${_Ellipse_su02}", "opacity", '0', { fromValue: '1'}], position: 5523, duration: 60 },
                { id: "eid245", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0'}], position: 1042, duration: 25 },
                { id: "eid65", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 2600, duration: 67 },
                { id: "eid185", tween: [ "motion", "${_Ellipse_su01}", [[1671, 840.04, 0, 0],[1672.18, 674.73, 1.24, -56.73, 4.17, -191.21],[1745.29, 620.87, 96.26, 2.54, 110.34, 2.91],[1811.02, 687.13, 11.01, 49.03, 24.8, 110.47],[1829.69, 775.08, 156.31, 2.51, 72.69, 1.17],[1970.04, 774.35, 0, 0]]], position: 4031, duration: 1408 },
                { id: "eid187", tween: [ "motion", "${_Ellipse_su01}", [[1970.04, 774.35, 0, 0],[1970.04, 774.35, 0, 0]]], position: 5500, duration: 0 },
                { id: "eid253", tween: [ "style", "${_left03}", "opacity", '1', { fromValue: '0'}], position: 1110, duration: 23 },
                { id: "eid174", tween: [ "style", "${_left03}", "opacity", '0', { fromValue: '1'}], position: 2733, duration: 67 },
                { id: "eid258", tween: [ "motion", "${_left05}", [[1437, 842, 0, 0],[1439.79, 675.07, 1.88, -31.7, 11.55, -194.55],[1452.66, 571.1, 11.24, -6.49, 13.55, -7.82],[1586.62, 574.58, 36.54, 2.68, 122.22, 8.96],[1595.49, 647.41, -24.45, -0.49, -4.25, -0.09],[1533.12, 646.41, -2.68, 0.04, -48.9, 0.74],[1536, 844.98, 0, 0]]], position: 1270, duration: 1600 },
                { id: "eid259", tween: [ "motion", "${_left05}", [[1536, 853, 0, 0],[1536, 853, 0, 0]]], position: 2937, duration: 0 },
                { id: "eid250", tween: [ "style", "${_left01}", "opacity", '1', { fromValue: '0'}], position: 958, duration: 42 },
                { id: "eid169", tween: [ "style", "${_left01}", "opacity", '0', { fromValue: '1'}], position: 2600, duration: 67 },
                { id: "eid6", tween: [ "style", "${_spring02}", "top", '585px', { fromValue: '529px'}], position: 0, duration: 1000 },
                { id: "eid36", tween: [ "style", "${_spring02}", "top", '529px', { fromValue: '585px'}], position: 3000, duration: 1000 },
                { id: "eid9", tween: [ "style", "${_big_spring05}", "top", '577px', { fromValue: '528px'}], position: 0, duration: 1000 },
                { id: "eid40", tween: [ "style", "${_big_spring05}", "top", '528px', { fromValue: '577px'}], position: 3000, duration: 1000 },
                { id: "eid211", tween: [ "motion", "${_Ellipse_left01}", [[1568, 840, 0, 0],[1567.84, 685.43, -0.06, -137.97, -0.07, -170.14],[1514.9, 613.59, -130.09, -17.27, -46.68, -6.2],[1441.6, 678.69, -4.88, 26.82, -12.94, 71.08],[1439, 834, 0, 0]]], position: 4030, duration: 1536 },
                { id: "eid221", tween: [ "motion", "${_Ellipse_left01}", [[1439, 834, 0, 0],[1439, 834, 0, 0]]], position: 5632, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Ellipse_su04}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid202", tween: [ "style", "${_Ellipse_su04}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 31 },
                { id: "eid203", tween: [ "style", "${_Ellipse_su04}", "opacity", '0', { fromValue: '1'}], position: 5690, duration: 60 },
                { id: "eid3", tween: [ "style", "${_spring01}", "top", '598px', { fromValue: '548px'}], position: 0, duration: 1000 },
                { id: "eid37", tween: [ "style", "${_spring01}", "top", '548px', { fromValue: '598px'}], position: 3000, duration: 1000 },
                { id: "eid194", tween: [ "motion", "${_Ellipse_su03}", [[1671, 840.04, 0, 0],[1672.18, 674.73, 1.24, -56.73, 4.17, -191.21],[1745.29, 620.87, 96.26, 2.54, 110.34, 2.91],[1811.02, 687.13, 11.01, 49.03, 24.8, 110.47],[1829.69, 775.08, 156.31, 2.51, 72.69, 1.17],[1970.04, 774.35, 0, 0]]], position: 4194, duration: 1412 },
                { id: "eid195", tween: [ "motion", "${_Ellipse_su03}", [[1970.04, 774.35, 0, 0],[1970.04, 774.35, 0, 0]]], position: 5667, duration: 0 },
                { id: "eid216", tween: [ "style", "${_Ellipse_left03}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid217", tween: [ "style", "${_Ellipse_left03}", "opacity", '1', { fromValue: '0.000000'}], position: 4164, duration: 31 },
                { id: "eid226", tween: [ "style", "${_Ellipse_left03}", "opacity", '0', { fromValue: '1'}], position: 5725, duration: 67 },
                { id: "eid12", tween: [ "style", "${_big_spring02}", "top", '481px', { fromValue: '468px'}], position: 0, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_big_spring02}", "top", '468px', { fromValue: '481px'}], position: 3000, duration: 1000 },
                { id: "eid78", tween: [ "motion", "${_left01}", [[1437, 842, 0, 0],[1439.79, 675.07, 1.88, -31.7, 11.55, -194.55],[1452.66, 571.1, 11.24, -6.49, 13.55, -7.82],[1586.62, 574.58, 36.54, 2.68, 122.22, 8.96],[1595.49, 647.41, -24.45, -0.49, -4.25, -0.09],[1533.12, 646.41, -2.68, 0.04, -48.9, 0.74],[1536, 844, 0, 0]]], position: 1000, duration: 1600 },
                { id: "eid263", tween: [ "motion", "${_left01}", [[1536, 853, 0, 0],[1536, 844, 0, 0]]], position: 2667, duration: 66 },
                { id: "eid2", tween: [ "style", "${_spion}", "top", '537px', { fromValue: '471px'}], position: 0, duration: 1000 },
                { id: "eid33", tween: [ "style", "${_spion}", "top", '471px', { fromValue: '537px'}], position: 3000, duration: 1000 },
                { id: "eid213", tween: [ "style", "${_Ellipse_left02}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid214", tween: [ "style", "${_Ellipse_left02}", "opacity", '1', { fromValue: '0.000000'}], position: 4083, duration: 31 },
                { id: "eid224", tween: [ "style", "${_Ellipse_left02}", "opacity", '0', { fromValue: '1'}], position: 5642, duration: 66 },
                { id: "eid189", tween: [ "motion", "${_Ellipse_su02}", [[1671, 840.04, 0, 0],[1672.18, 674.73, 1.24, -56.73, 4.17, -191.21],[1745.29, 620.87, 96.26, 2.54, 110.34, 2.91],[1811.02, 687.13, 11.01, 49.03, 24.8, 110.47],[1829.69, 775.08, 156.31, 2.51, 72.69, 1.17],[1970.04, 774.35, 0, 0]]], position: 4115, duration: 1408 },
                { id: "eid190", tween: [ "motion", "${_Ellipse_su02}", [[1970.04, 774.35, 0, 0],[1970.04, 774.35, 0, 0]]], position: 5583, duration: 0 },
                { id: "eid85", tween: [ "motion", "${_left03}", [[1437, 842, 0, 0],[1439.79, 675.07, 1.88, -31.7, 11.55, -194.55],[1452.66, 571.1, 11.24, -6.49, 13.55, -7.82],[1586.62, 574.58, 36.54, 2.68, 122.22, 8.96],[1595.49, 647.41, -24.45, -0.49, -4.25, -0.09],[1533.12, 646.41, -2.68, 0.04, -48.9, 0.74],[1536, 844, 0, 0]]], position: 1133, duration: 1600 },
                { id: "eid173", tween: [ "motion", "${_left03}", [[1536, 853, 0, 0],[1536, 853, 0, 0]]], position: 2800, duration: 0 },
                { id: "eid244", tween: [ "style", "${_Ellipse1}", "opacity", '1', { fromValue: '0'}], position: 958, duration: 42 },
                { id: "eid67", tween: [ "style", "${_Ellipse1}", "opacity", '0', { fromValue: '1'}], position: 2600, duration: 67 },
                { id: "eid256", tween: [ "style", "${_Ellipse5}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 20 },
                { id: "eid257", tween: [ "style", "${_Ellipse5}", "opacity", '0', { fromValue: '1'}], position: 2870, duration: 67 }            ]
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
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '17px'],
                ["style", "width", '17px']
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
})(jQuery, AdobeEdge, "EDGE-28702433");
