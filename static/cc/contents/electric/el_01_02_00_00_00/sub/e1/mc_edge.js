/**
 * Adobe Edge: symbol definitions
 */
(function ($, Edge, compId) {
	//images folder
	var im = "images/";

	var fonts = {};

	var resources = [];
	var symbols = {
		stage: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						id: "airRoad",
						type: "image",
						tag: "img",
						rect: ["11", "468", "1296", "232", "auto", "auto"],
						fill: ["rgba(0,0,0,0)", im + "airRoad.png"],
					},
					{
						id: "airFlow",
						type: "rect",
						rect: ["11", "434", "auto", "auto", "auto", "auto"],
					},
					{
						id: "blinder",
						type: "image",
						tag: "img",
						rect: ["7", "427", "1319", "286", "auto", "auto"],
						fill: ["rgba(0,0,0,0)", im + "blinder.png"],
					},
					{
						id: "FLOW_R3",
						type: "rect",
						rect: ["1730", "689", "auto", "auto", "auto", "auto"],
					},
					{
						id: "FLOW_R1",
						type: "rect",
						rect: ["993", "694", "auto", "auto", "auto", "auto"],
					},
					{
						id: "FLOW_R2",
						type: "rect",
						rect: ["993", "926", "auto", "auto", "auto", "auto"],
					},
					{
						id: "FLOW_B3",
						type: "rect",
						rect: ["1031", "694", "auto", "auto", "auto", "auto"],
					},
					{
						id: "FLOW_B1",
						type: "rect",
						rect: ["1598", "689", "auto", "auto", "auto", "auto"],
					},
					{
						id: "FLOW_B2",
						type: "rect",
						rect: ["1031", "888", "auto", "auto", "auto", "auto"],
					},
					{
						id: "ECM",
						type: "image",
						tag: "img",
						rect: ["1436px", "271", "446", "426", "auto", "auto"],
						fill: ["rgba(0,0,0,0)", im + "ECM.png"],
					},
					{
						id: "sensorBody",
						type: "image",
						tag: "img",
						rect: ["217", "426", "598", "379", "auto", "auto"],
						fill: ["rgba(0,0,0,0)", im + "sensorBody.png"],
					},
					{
						id: "THROTTLE",
						type: "rect",
						rect: ["673", "528", "auto", "auto", "auto", "auto"],
					},
					{
						id: "AFS_MOVIE",
						type: "rect",
						rect: ["806", "474", "auto", "auto", "auto", "auto"],
					},
					{
						id: "txt_c5",
						type: "text",
						rect: ["1577px", "423", "163", "80", "auto", "auto"],
						text: "ECM",
						align: "auto",
						font: [
							"굴림",
							74,
							"rgb(76,76,76)",
							"normal",
							"none",
							"normal",
						],
					},
					{
						id: "txt_c4",
						type: "text",
						rect: ["1323", "461", "78", "169", "auto", "auto"],
						text: "공\r기",
						align: "auto",
						font: [
							"굴림",
							74,
							"rgb(0,142,255)",
							"normal",
							"none",
							"normal",
						],
					},
					{
						id: "txt_c3",
						type: "text",
						rect: ["929", "376", "143", "80", "auto", "auto"],
						text: "AFS",
						align: "auto",
						font: [
							"굴림",
							74,
							"rgb(76,76,76)",
							"normal",
							"none",
							"normal",
						],
					},
					{
						id: "txt_c2",
						type: "text",
						rect: ["660", "808", "80", "55", "auto", "auto"],
						text: "ISA",
						align: "auto",
						font: [
							"굴림",
							49,
							"rgb(76,76,76)",
							"normal",
							"none",
							"normal",
						],
					},
					{
						id: "txt_c1",
						type: "text",
						rect: ["12", "473", "200", "55", "auto", "auto"],
						text: "엔진으로",
						align: "auto",
						font: [
							"굴림",
							49,
							"rgb(76,76,76)",
							"normal",
							"none",
							"normal",
						],
					},
					{
						id: "txt2",
						type: "text",
						rect: ["81", "139", "1431", "55", "auto", "auto"],
						text: "엔진으로 흡입되는 공기의 양을 측정하여 ECM으로 보내줍니다.",
						align: "auto",
						font: [
							"굴림",
							50,
							"rgb(0,0,0)",
							"normal",
							"none",
							"normal",
						],
					},
					{
						id: "txt1",
						type: "text",
						rect: ["81", "42", "403", "81", "auto", "auto"],
						text: "AFS & MAP",
						align: "auto",
						font: [
							"굴림",
							75,
							"rgb(0,0,0)",
							"normal",
							"none",
							"normal",
						],
					},
				],
				symbolInstances: [
					{
						id: "THROTTLE",
						symbolName: "THROTTLE",
					},
					{
						id: "airFlow",
						symbolName: "airFlow",
					},
					{
						id: "FLOW_B1",
						symbolName: "FLOW_B1",
					},
					{
						id: "FLOW_R1",
						symbolName: "FLOW_R1",
					},
					{
						id: "AFS_MOVIE",
						symbolName: "AFS_MOVIE",
					},
					{
						id: "FLOW_B2",
						symbolName: "FLOW_B2",
					},
					{
						id: "FLOW_R2",
						symbolName: "FLOW_R2",
					},
					{
						id: "FLOW_B3",
						symbolName: "FLOW_B3",
					},
					{
						id: "FLOW_R3",
						symbolName: "FLOW_R3",
					},
				],
			},
			states: {
				"Base State": {
					"${_ECM}": [["style", "left", "1436px"]],
					"${_txt_c5}": [["style", "left", "1577px"]],
					"${_Stage}": [
						["color", "background-color", "rgba(239,239,239,1.00)"],
						["style", "width", "1896px"],
						["style", "height", "996px"],
						["style", "overflow", "hidden"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 0,
					autoPlay: true,
					timeline: [],
				},
			},
		},
		airFlow: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["-78px", "0px", "1578", "272", "auto", "auto"],
						id: "air_src",
						fill: ["rgba(0,0,0,0)", "images/air_src.png"],
						type: "image",
						tag: "img",
					},
				],
				symbolInstances: [],
			},
			states: {
				"Base State": {
					"${_air_src}": [
						["style", "left", "-78px"],
						["style", "top", "0px"],
					],
					"${symbolSelector}": [
						["style", "height", "272px"],
						["style", "overflow", "hidden"],
						["style", "width", "1307px"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 700,
					autoPlay: true,
					timeline: [
						{
							id: "eid1",
							tween: [
								"style",
								"${_air_src}",
								"left",
								"-107px",
								{ fromValue: "-78px" },
							],
							position: 0,
							duration: 700,
						},
					],
				},
			},
		},
		flow_movie: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["0px", "0px", "1786", "8", "auto", "auto"],
						id: "flow_src",
						fill: ["rgba(0,0,0,0)", "images/flow_src.png"],
						type: "image",
						tag: "img",
					},
				],
				symbolInstances: [],
			},
			states: {
				"Base State": {
					"${_flow_src}": [
						["style", "left", "0px"],
						["style", "top", "0px"],
					],
					"${symbolSelector}": [
						["style", "height", "8px"],
						["style", "overflow", "hidden"],
						["style", "width", "1500px"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 1000,
					autoPlay: true,
					timeline: [
						{
							id: "eid2",
							tween: [
								"style",
								"${_flow_src}",
								"left",
								"-63px",
								{ fromValue: "0px" },
							],
							position: 0,
							duration: 1000,
						},
					],
				},
			},
		},
		FLOW_R1: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["0px", "0px", "13", "245", "auto", "auto"],
						id: "flow_r1",
						fill: ["rgba(0,0,0,0)", "images/flow_r1.png"],
						type: "image",
						tag: "img",
					},
					{
						id: "flow_movie2",
						type: "rect",
						rect: ["61", "-525px", "auto", "auto", "auto", "auto"],
					},
				],
				symbolInstances: [
					{
						id: "flow_movie2",
						symbolName: "flow_movie",
					},
				],
			},
			states: {
				"Base State": {
					"${_flow_movie2}": [
						["style", "top", "-525px"],
						["style", "left", "-744px"],
						["transform", "rotateZ", "-90deg"],
					],
					"${symbolSelector}": [
						["style", "height", "245px"],
						["style", "overflow", "hidden"],
						["style", "width", "13px"],
					],
					"${_flow_r1}": [
						["style", "left", "0px"],
						["style", "top", "0px"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 0,
					autoPlay: true,
					timeline: [],
				},
			},
		},
		FLOW_R2: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["0px", "0px", "750", "13", "auto", "auto"],
						id: "flow_r2",
						fill: ["rgba(0,0,0,0)", "images/flow_r2.png"],
						type: "image",
						tag: "img",
					},
					{
						id: "flow_movie3",
						type: "rect",
						transform: [[], ["180"]],
						rect: ["-750px", "2px", "auto", "auto", "auto", "auto"],
					},
				],
				symbolInstances: [
					{
						id: "flow_movie3",
						symbolName: "flow_movie",
					},
				],
			},
			states: {
				"Base State": {
					"${_flow_movie3}": [
						["style", "top", "2px"],
						["style", "left", "-750px"],
						["transform", "rotateZ", "180deg"],
					],
					"${_flow_r2}": [
						["style", "left", "0px"],
						["style", "top", "0px"],
					],
					"${symbolSelector}": [
						["style", "height", "13px"],
						["style", "overflow", "hidden"],
						["style", "width", "750px"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 0,
					autoPlay: true,
					timeline: [],
				},
			},
		},
		FLOW_R3: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["0px", "0px", "13", "250", "auto", "auto"],
						id: "flow_r3",
						fill: ["rgba(0,0,0,0)", "images/flow_r3.png"],
						type: "image",
						tag: "img",
					},
					{
						id: "flow_movie2",
						type: "rect",
						transform: [[], ["90"]],
						rect: [
							"-743px",
							"-118px",
							"auto",
							"auto",
							"auto",
							"auto",
						],
					},
				],
				symbolInstances: [
					{
						id: "flow_movie2",
						symbolName: "flow_movie",
					},
				],
			},
			states: {
				"Base State": {
					"${_flow_movie2}": [
						["style", "top", "-118px"],
						["style", "left", "-743px"],
						["transform", "rotateZ", "90deg"],
					],
					"${_flow_r3}": [
						["style", "left", "0px"],
						["style", "top", "0px"],
					],
					"${symbolSelector}": [
						["style", "height", "250px"],
						["style", "overflow", "hidden"],
						["style", "width", "13px"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 0,
					autoPlay: true,
					timeline: [],
				},
			},
		},
		FLOW_B1: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["0px", "0px", "13", "211", "auto", "auto"],
						id: "flow_b1",
						fill: ["rgba(0,0,0,0)", "images/flow_b1.png"],
						type: "image",
						tag: "img",
					},
					{
						id: "flow_movie2Copy",
						type: "rect",
						rect: [
							"-743px",
							"-508",
							"auto",
							"auto",
							"auto",
							"auto",
						],
					},
				],
				symbolInstances: [
					{
						id: "flow_movie2Copy",
						symbolName: "flow_movie",
					},
				],
			},
			states: {
				"Base State": {
					"${_flow_movie2Copy}": [
						["style", "top", "-509px"],
						["style", "left", "-743px"],
						["transform", "rotateZ", "-90deg"],
					],
					"${_flow_b1}": [
						["style", "left", "0px"],
						["style", "top", "0px"],
					],
					"${symbolSelector}": [
						["style", "height", "211px"],
						["style", "overflow", "hidden"],
						["style", "width", "13px"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 0,
					autoPlay: true,
					timeline: [],
				},
			},
		},
		FLOW_B2: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["0px", "0px", "580", "12", "auto", "auto"],
						id: "flow_b2",
						fill: ["rgba(0,0,0,0)", "images/flow_b2.png"],
						type: "image",
						tag: "img",
					},
					{
						id: "flow_movie3",
						type: "rect",
						transform: [],
						rect: ["-750px", "2px", "auto", "auto", "auto", "auto"],
					},
				],
				symbolInstances: [
					{
						id: "flow_movie3",
						symbolName: "flow_movie",
					},
				],
			},
			states: {
				"Base State": {
					"${_flow_b2}": [
						["style", "left", "0px"],
						["style", "top", "0px"],
					],
					"${_flow_movie3}": [
						["style", "top", "2px"],
						["style", "left", "-750px"],
						["transform", "rotateZ", "0deg"],
					],
					"${symbolSelector}": [
						["style", "height", "12px"],
						["style", "overflow", "hidden"],
						["style", "width", "580px"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 0,
					autoPlay: true,
					timeline: [],
				},
			},
		},
		FLOW_B3: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["0px", "0px", "13", "206", "auto", "auto"],
						id: "flow_b3",
						fill: ["rgba(0,0,0,0)", "images/flow_b3.png"],
						type: "image",
						tag: "img",
					},
					{
						id: "flow_movie2Copy2",
						type: "rect",
						transform: [[], ["90"]],
						rect: [
							"-743px",
							"-154px",
							"auto",
							"auto",
							"auto",
							"auto",
						],
					},
				],
				symbolInstances: [
					{
						id: "flow_movie2Copy2",
						symbolName: "flow_movie",
					},
				],
			},
			states: {
				"Base State": {
					"${_flow_movie2Copy2}": [
						["style", "top", "-154px"],
						["style", "left", "-743px"],
						["transform", "rotateZ", "90deg"],
					],
					"${_flow_b3}": [
						["style", "left", "0px"],
						["style", "top", "0px"],
					],
					"${symbolSelector}": [
						["style", "height", "206px"],
						["style", "overflow", "hidden"],
						["style", "width", "13px"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 0,
					autoPlay: true,
					timeline: [],
				},
			},
		},
		THROTTLE: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["0px", "0px", "28", "109", "auto", "auto"],
						transform: [[], ["45"]],
						id: "throttle",
						fill: ["rgba(0,0,0,0)", "images/throttle.png"],
						type: "image",
						tag: "img",
					},
				],
				symbolInstances: [],
			},
			states: {
				"Base State": {
					"${symbolSelector}": [
						["style", "height", "109px"],
						["style", "width", "28px"],
					],
					"${_throttle}": [
						["style", "top", "0px"],
						["style", "left", "0px"],
						["transform", "rotateZ", "45deg"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 1733.3333333333,
					autoPlay: true,
					timeline: [
						{
							id: "eid3",
							tween: [
								"transform",
								"${_throttle}",
								"rotateZ",
								"30deg",
								{ fromValue: "45deg" },
							],
							position: 0,
							duration: 800,
						},
						{
							id: "eid4",
							tween: [
								"transform",
								"${_throttle}",
								"rotateZ",
								"45deg",
								{ fromValue: "30deg" },
							],
							position: 867,
							duration: 800,
						},
					],
				},
			},
		},
		AFS_MOVIE: {
			version: "2.0.1",
			minimumCompatibleVersion: "2.0.0",
			build: "2.0.1.268",
			baseState: "Base State",
			initialState: "Base State",
			gpuAccelerate: false,
			resizeInstances: false,
			content: {
				dom: [
					{
						rect: ["0px", "0px", "335", "229", "auto", "auto"],
						id: "AFS",
						fill: ["rgba(0,0,0,0)", "images/AFS.png"],
						type: "image",
						tag: "img",
					},
					{
						rect: ["0px", "0px", "335", "230", "auto", "auto"],
						id: "AFS_white",
						fill: ["rgba(0,0,0,0)", "images/AFS_white.png"],
						type: "image",
						tag: "img",
					},
					{
						rect: ["0px", "0px", "335", "230", "auto", "auto"],
						id: "AFS_red",
						fill: ["rgba(0,0,0,0)", "images/AFS_red.png"],
						type: "image",
						tag: "img",
					},
				],
				symbolInstances: [],
			},
			states: {
				"Base State": {
					"${_AFS_white}": [
						["style", "top", "0px"],
						["style", "opacity", "0"],
						["style", "left", "0px"],
					],
					"${symbolSelector}": [
						["style", "height", "230px"],
						["style", "width", "335px"],
					],
					"${_AFS}": [
						["style", "left", "0px"],
						["style", "top", "0px"],
					],
					"${_AFS_red}": [
						["style", "top", "0px"],
						["transform", "scaleY", "1"],
						["transform", "scaleX", "1"],
						["style", "opacity", "0"],
						["style", "left", "0px"],
					],
				},
			},
			timelines: {
				"Default Timeline": {
					fromState: "Base State",
					toState: "",
					duration: 767,
					autoPlay: true,
					timeline: [
						{
							id: "eid16",
							tween: [
								"style",
								"${_AFS_white}",
								"opacity",
								"1",
								{ fromValue: "0" },
							],
							position: 0,
							duration: 350,
						},
						{
							id: "eid17",
							tween: [
								"style",
								"${_AFS_white}",
								"opacity",
								"0",
								{ fromValue: "1" },
							],
							position: 350,
							duration: 350,
						},
						{
							id: "eid12",
							tween: [
								"transform",
								"${_AFS_red}",
								"scaleX",
								"1.05",
								{ fromValue: "1" },
							],
							position: 0,
							duration: 700,
						},
						{
							id: "eid25",
							tween: [
								"style",
								"${_AFS_red}",
								"opacity",
								"1",
								{ fromValue: "0" },
							],
							position: 0,
							duration: 327,
						},
						{
							id: "eid24",
							tween: [
								"style",
								"${_AFS_red}",
								"opacity",
								"0",
								{ fromValue: "1" },
							],
							position: 373,
							duration: 327,
						},
						{
							id: "eid13",
							tween: [
								"transform",
								"${_AFS_red}",
								"scaleY",
								"1.08",
								{ fromValue: "1" },
							],
							position: 0,
							duration: 700,
						},
					],
				},
			},
		},
	};

	Edge.registerCompositionDefn(compId, symbols, fonts, resources);

	/**
	 * Adobe Edge DOM Ready Event Handler
	 */
	$(window).ready(function () {
		Edge.launchComposition(compId);
	});
})(jQuery, AdobeEdge, "EDGE-32546357");
