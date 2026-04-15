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
                id: 'crank-axle-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['786px', '799px','413','339','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"crank-axle-copy.png"]
            },
            {
                id: 'boby-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['572', '477','513','500','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"boby-copy.png"]
            },
            {
                id: 'head_gasket-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['948', '362','387','226','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"head_gasket-copy.png"]
            },
            {
                id: 'cylinder_head-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['318', '281','445','302','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cylinder_head-copy.png"]
            },
            {
                id: 'cylinder_head_ov',
                type: 'image',
                rect: ['318px', '281px','445px','302px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cylinder_head_ov.png",'0px','0px']
            },
            {
                id: 'arm_shaft-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['260', '196','290','171','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arm_shaft-copy.png"]
            },
            {
                id: 'arm-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['257', '403','42','45','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arm-copy.png"]
            },
            {
                id: 'cam_axle-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['309', '234','301','183','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cam_axle-copy.png"]
            },
            {
                id: 'locker_arm-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['200px', '362px','55','41','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"locker_arm-copy.png"]
            },
            {
                id: 'cylinderhead01-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['94', '91','379','247','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cylinderhead01-copy.png"]
            },
            {
                id: 'piston-copy-2Copy',
                type: 'image',
                tag: 'img',
                rect: ['813', '276px','82','321','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"piston-copy-2.png"]
            },
            {
                id: 'piston-copyCopy',
                type: 'image',
                tag: 'img',
                rect: ['813', '276','82','321','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"piston-copy.png"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_head_gasket-copyCopy}": [
                ["style", "left", '619px'],
                ["style", "top", '479px']
            ],
            "${_cylinder_head_ov}": [
                ["style", "top", '281px'],
                ["style", "opacity", '0'],
                ["style", "left", '318px']
            ],
            "${_cylinder_head-copyCopy}": [
                ["style", "left", '571px'],
                ["style", "top", '393px']
            ],
            "${_cylinderhead01-copyCopy}": [
                ["style", "left", '573px'],
                ["style", "top", '372px']
            ],
            "${_piston-copyCopy}": [
                ["style", "opacity", '0']
            ],
            "${_arm-copyCopy}": [
                ["style", "left", '625px'],
                ["style", "top", '564px']
            ],
            "${_piston-copy-2Copy}": [
                ["style", "top", '544px'],
                ["style", "opacity", '0']
            ],
            "${_locker_arm-copyCopy}": [
                ["style", "left", '605px'],
                ["style", "top", '571px']
            ],
            "${_cam_axle-copyCopy}": [
                ["style", "left", '619px'],
                ["style", "top", '426px']
            ],
            "${_arm_shaft-copyCopy}": [
                ["style", "left", '625px'],
                ["style", "top", '426px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1230px'],
                ["style", "width", '1430px']
            ],
            "${_crank-axle-copyCopy}": [
                ["style", "left", '587px'],
                ["style", "top", '615px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1477,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_cylinder_head-copyCopy}", "left", '318px', { fromValue: '571px'}], position: 500, duration: 250 },
                { id: "eid8", tween: [ "style", "${_head_gasket-copyCopy}", "top", '362px', { fromValue: '479px'}], position: 780, duration: 245 },
                { id: "eid36", tween: [ "style", "${_piston-copy-2Copy}", "opacity", '1', { fromValue: '0'}], position: 987, duration: 240 },
                { id: "eid22", tween: [ "style", "${_arm_shaft-copyCopy}", "left", '260px', { fromValue: '625px'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "style", "${_cylinderhead01-copyCopy}", "top", '91px', { fromValue: '372px'}], position: 500, duration: 250 },
                { id: "eid20", tween: [ "style", "${_arm-copyCopy}", "top", '403px', { fromValue: '564px'}], position: 500, duration: 250 },
                { id: "eid26", tween: [ "style", "${_locker_arm-copyCopy}", "left", '200px', { fromValue: '605px'}], position: 500, duration: 250 },
                { id: "eid24", tween: [ "style", "${_arm_shaft-copyCopy}", "top", '196px', { fromValue: '426px'}], position: 500, duration: 250 },
                { id: "eid38", tween: [ "style", "${_piston-copyCopy}", "opacity", '1', { fromValue: '0'}], position: 1227, duration: 250 },
                { id: "eid16", tween: [ "style", "${_cam_axle-copyCopy}", "top", '234px', { fromValue: '426px'}], position: 500, duration: 250 },
                { id: "eid28", tween: [ "style", "${_locker_arm-copyCopy}", "top", '362px', { fromValue: '571px'}], position: 500, duration: 250 },
                { id: "eid30", tween: [ "style", "${_cylinderhead01-copyCopy}", "left", '94px', { fromValue: '573px'}], position: 500, duration: 250 },
                { id: "eid6", tween: [ "style", "${_head_gasket-copyCopy}", "left", '948px', { fromValue: '619px'}], position: 780, duration: 245 },
                { id: "eid12", tween: [ "style", "${_cylinder_head-copyCopy}", "top", '281px', { fromValue: '393px'}], position: 500, duration: 250 },
                { id: "eid14", tween: [ "style", "${_cam_axle-copyCopy}", "left", '309px', { fromValue: '619px'}], position: 500, duration: 250 },
                { id: "eid52", tween: [ "style", "${_cylinder_head_ov}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 129 },
                { id: "eid18", tween: [ "style", "${_arm-copyCopy}", "left", '257px', { fromValue: '625px'}], position: 500, duration: 250 },
                { id: "eid4", tween: [ "style", "${_crank-axle-copyCopy}", "top", '799px', { fromValue: '615px'}], position: 0, duration: 250 },
                { id: "eid34", tween: [ "style", "${_piston-copy-2Copy}", "top", '276px', { fromValue: '544px'}], position: 987, duration: 240 },
                { id: "eid2", tween: [ "style", "${_crank-axle-copyCopy}", "left", '786px', { fromValue: '587px'}], position: 0, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-16708945");
