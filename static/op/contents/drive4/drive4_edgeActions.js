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
      
      
      
       
      
  
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ROAD_LINE_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.play("re");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("re");

      });
      //Edge binding end

   })("ROAD_LINE_CLIP");
   //Edge symbol end:'ROAD_LINE_CLIP'

   //=========================================================
   
   //Edge symbol: 'CAR'
   (function(symbolName) {   
   
   })("CAR");
   //Edge symbol end:'CAR'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_OUTDOOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_OUTDOOR");
   //Edge symbol end:'SIGNAL_OUTDOOR'

   //=========================================================
   
   //Edge symbol: 'WHEEL_1ST'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 133, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL_1ST");
   //Edge symbol end:'WHEEL_1ST'

   //=========================================================
   
   //Edge symbol: 'WHEEL_2ND'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 133, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL_2ND");
   //Edge symbol end:'WHEEL_2ND'

   //=========================================================
   
   //Edge symbol: 'SENSOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 967, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("SENSOR");
   //Edge symbol end:'SENSOR'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_INCAR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_INCAR");
   //Edge symbol end:'SIGNAL_INCAR'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11485079");