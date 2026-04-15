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
   
   //Edge symbol: 'WHEEL_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("WHEEL_CLIP");
   //Edge symbol end:'WHEEL_CLIP'

   //=========================================================
   
   //Edge symbol: 'SIGNAL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1498, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("SIGNAL");
   //Edge symbol end:'SIGNAL'

   //=========================================================
   
   //Edge symbol: 'CAR_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 134, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 233, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CAR_CLIP");
   //Edge symbol end:'CAR_CLIP'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-25766391");