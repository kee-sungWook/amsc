/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'WHEEL_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 133, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL_CLIP");
   //Edge symbol end:'WHEEL_CLIP'

   //=========================================================
   
   //Edge symbol: 'CAR_CLIP'
   (function(symbolName) {   
   
   })("CAR_CLIP");
   //Edge symbol end:'CAR_CLIP'

   //=========================================================
   
   //Edge symbol: 'LOAD_LINE_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("LOAD_LINE_CLIP");
   //Edge symbol end:'LOAD_LINE_CLIP'

   //=========================================================
   
   //Edge symbol: 'SENSOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 999, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("SENSOR");
   //Edge symbol end:'SENSOR'

   //=========================================================
   
   //Edge symbol: 'lane_clip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("lane_clip");
   //Edge symbol end:'lane_clip'

   //=========================================================
   
   //Edge symbol: 'lamp_clip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 417, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("lamp_clip");
   //Edge symbol end:'lamp_clip'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-23328912");