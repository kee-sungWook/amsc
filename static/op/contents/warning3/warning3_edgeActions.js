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
      
      
      Symbol.bindElementAction(compId, symbolName, "${replayBtn}", "mousedown", function(sym, e) {
         sym.play(0);
         

      });
      //Edge binding end

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ROAD_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("ROAD_CLIP");
   //Edge symbol end:'ROAD_CLIP'

   //=========================================================
   
   //Edge symbol: 'CAR2_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 292, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CAR2_CLIP");
   //Edge symbol end:'CAR2_CLIP'

   //=========================================================
   
   //Edge symbol: 'CAR1_CLIP'
   (function(symbolName) {   
   
   })("CAR1_CLIP");
   //Edge symbol end:'CAR1_CLIP'

   //=========================================================
   
   //Edge symbol: 'SIGNAL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1498, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("SIGNAL");
   //Edge symbol end:'SIGNAL'

   //=========================================================
   
   //Edge symbol: 'WHEEL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL");
   //Edge symbol end:'WHEEL'

   //=========================================================
   
   //Edge symbol: 'ROTATOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("ROTATOR");
   //Edge symbol end:'ROTATOR'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-13365574");