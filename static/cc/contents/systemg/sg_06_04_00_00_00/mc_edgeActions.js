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



})("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'FLOW3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("FLOW3");
   //Edge symbol end:'FLOW3'

   //=========================================================
   
   //Edge symbol: 'flows2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("go");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.play("go");

      });
      //Edge binding end

   })("flows2");
   //Edge symbol end:'flows2'

   //=========================================================
   
   //Edge symbol: 'flows1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("go");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play("go");

      });
      //Edge binding end

   })("flows1");
   //Edge symbol end:'flows1'

})(jQuery, AdobeEdge, "EDGE-1389233900791");