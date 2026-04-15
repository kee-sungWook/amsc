/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SCENE1',
                            type: 'group',
                            rect: ['235', '337', '2099', '1276', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'side_light2',
                                type: 'image',
                                tag: 'img',
                                rect: ['1378px', '98px', '142', '141', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"side_light2.png"]
                            },
                            {
                                id: 'car_side',
                                type: 'image',
                                tag: 'img',
                                rect: ['472px', '0px', '1499', '904', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"car_side.png"]
                            },
                            {
                                id: 'head_light1',
                                type: 'image',
                                tag: 'img',
                                rect: ['969px', '249px', '1130', '484', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"head_light1.png"]
                            },
                            {
                                id: 'side_light1',
                                type: 'image',
                                tag: 'img',
                                rect: ['580px', '120px', '142', '141', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"side_light1.png"]
                            },
                            {
                                id: 'human',
                                type: 'image',
                                tag: 'img',
                                rect: ['-674px', '175px', '431', '1101', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"human.png"]
                            }]
                        },
                        {
                            id: 'SCENE0',
                            type: 'group',
                            rect: ['328', '280', '1908', '988', 'auto', 'auto'],
                            opacity: '1',
                            c: [
                            {
                                id: 'door3',
                                display: 'block',
                                type: 'image',
                                tag: 'img',
                                rect: ['240px', '19px', '765px', '553', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"door3.png"]
                            },
                            {
                                id: 's_mirror',
                                type: 'image',
                                tag: 'img',
                                rect: ['297px', '200px', '1242', '100', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"s_mirror.png"]
                            },
                            {
                                id: 'door2',
                                display: 'block',
                                type: 'image',
                                tag: 'img',
                                rect: ['240px', '19px', '1355px', '553', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"door2.png"]
                            },
                            {
                                id: 'door1',
                                type: 'image',
                                tag: 'img',
                                rect: ['123px', '19px', '1527px', '546', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"door1.png"]
                            },
                            {
                                id: 'car_front',
                                type: 'image',
                                tag: 'img',
                                rect: ['113px', '0px', '1639', '988', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"car_front.png"]
                            },
                            {
                                id: 'mirror_right2',
                                type: 'image',
                                tag: 'img',
                                rect: ['222px', '128px', '1393', '190', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"mirror_right2.png"]
                            },
                            {
                                id: 'head_light2',
                                type: 'image',
                                tag: 'img',
                                rect: ['0px', '218px', '1908', '412', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"head_light2.png"]
                            }]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '2560px', '1440px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(140,142,144,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'replayBtn',
                            type: 'image',
                            tag: 'img',
                            rect: ['1069', '526', '346', '346', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"replayBtn.png"]
                        },
                        {
                            id: 'title_icon',
                            type: 'image',
                            tag: 'img',
                            rect: ['40', '40px', '201', '201', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title_icon.png"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '2560px', '1440px'],
                            overflow: 'hidden',
                            fill: ["rgba(140,142,144,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 9083.3333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "display",
                            375,
                            0,
                            "linear",
                            "${door2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "top",
                            376,
                            166,
                            "linear",
                            "${door3}",
                            '19px',
                            '111px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            5500,
                            250,
                            "linear",
                            "${side_light1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            5750,
                            250,
                            "linear",
                            "${side_light1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid54",
                            "opacity",
                            6083,
                            250,
                            "linear",
                            "${side_light1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            6333,
                            250,
                            "linear",
                            "${side_light1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "opacity",
                            6667,
                            250,
                            "linear",
                            "${side_light1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            6917,
                            250,
                            "linear",
                            "${side_light1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${SCENE1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${SCENE1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${mirror_right2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${mirror_right2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid29",
                            "opacity",
                            1292,
                            250,
                            "linear",
                            "${mirror_right2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1542,
                            250,
                            "linear",
                            "${mirror_right2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1833,
                            250,
                            "linear",
                            "${mirror_right2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            2083,
                            250,
                            "linear",
                            "${mirror_right2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid47",
                            "opacity",
                            5500,
                            250,
                            "linear",
                            "${side_light2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            5750,
                            250,
                            "linear",
                            "${side_light2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            6083,
                            250,
                            "linear",
                            "${side_light2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            6333,
                            250,
                            "linear",
                            "${side_light2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid64",
                            "opacity",
                            6667,
                            250,
                            "linear",
                            "${side_light2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            6917,
                            250,
                            "linear",
                            "${side_light2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid69",
                            "opacity",
                            8833,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid66",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid67",
                            "opacity",
                            8833,
                            250,
                            "linear",
                            "${replayBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "width",
                            208,
                            167,
                            "linear",
                            "${door2}",
                            '1449px',
                            '1355px'
                        ],
                        [
                            "eid45",
                            "opacity",
                            5500,
                            250,
                            "linear",
                            "${head_light1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            5750,
                            250,
                            "linear",
                            "${head_light1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "opacity",
                            6083,
                            250,
                            "linear",
                            "${head_light1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            6333,
                            250,
                            "linear",
                            "${head_light1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid62",
                            "opacity",
                            6667,
                            250,
                            "linear",
                            "${head_light1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            6917,
                            250,
                            "linear",
                            "${head_light1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "opacity",
                            167,
                            41,
                            "linear",
                            "${door1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20",
                            "width",
                            376,
                            166,
                            "linear",
                            "${door3}",
                            '1355px',
                            '765px'
                        ],
                        [
                            "eid39",
                            "left",
                            4000,
                            1000,
                            "linear",
                            "${human}",
                            '-674px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "width",
                            0,
                            167,
                            "linear",
                            "${door1}",
                            '1623px',
                            '1527px'
                        ],
                        [
                            "eid2",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${head_light2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${head_light2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1292,
                            250,
                            "linear",
                            "${head_light2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1542,
                            250,
                            "linear",
                            "${head_light2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1833,
                            250,
                            "linear",
                            "${head_light2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2083,
                            250,
                            "linear",
                            "${head_light2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "opacity",
                            167,
                            42,
                            "linear",
                            "${door2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${human}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "left",
                            376,
                            166,
                            "linear",
                            "${door3}",
                            '240px',
                            '544px'
                        ],
                        [
                            "eid21",
                            "height",
                            376,
                            166,
                            "linear",
                            "${door3}",
                            '553px',
                            '461px'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            167,
                            "linear",
                            "${door1}",
                            '123px',
                            '161px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${SCENE0}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "left",
                            208,
                            167,
                            "linear",
                            "${door2}",
                            '193px',
                            '240px'
                        ],
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "linear",
                            "${door3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            376,
                            0,
                            "linear",
                            "${door3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lamp4_edgeActions.js");
})("EDGE-28003997");
