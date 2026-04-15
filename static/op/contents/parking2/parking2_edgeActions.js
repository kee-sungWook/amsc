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
      
      
      
       
      
  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.getSymbol("CAR_CLIP").getSymbol("SIGNAL").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1033, function(sym, e) {
         // insert code here
         sym.getSymbol("CAR_CLIP").getSymbol("SIGNAL").play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.getSymbol("CAR_CLIP").getSymbol("SIGNAL").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${replayBtn}", "mousedown", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'SCREEN_MONITOR'
   (function(symbolName) {   
   
   })("SCREEN_MONITOR");
   //Edge symbol end:'SCREEN_MONITOR'

   //=========================================================
   
   //Edge symbol: 'CAR_CLIP'
   (function(symbolName) {   
   
   })("CAR_CLIP");
   //Edge symbol end:'CAR_CLIP'

   //=========================================================
   
   //Edge symbol: 'SIGNAL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("SIGNAL");
   //Edge symbol end:'SIGNAL'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2748086");