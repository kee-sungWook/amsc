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
   
   //Edge symbol: 'ENG'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1800, function(sym, e) {
         sym.getSymbol("SPARK_FIRE").play(0);

      });
      //Edge binding end

   })("ENG");
   //Edge symbol end:'ENG'

   //=========================================================
   
   //Edge symbol: 'SPARK_FIRE'
   (function(symbolName) {   
   
   })("SPARK_FIRE");
   //Edge symbol end:'SPARK_FIRE'

   //=========================================================
   
   //Edge symbol: 'CRANK_PISTON'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here// play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("CRANK_PISTON");
   //Edge symbol end:'CRANK_PISTON'

   //=========================================================
   
   //Edge symbol: 'BOMB'
   (function(symbolName) {   
   
   })("BOMB");
   //Edge symbol end:'BOMB'

})(jQuery, AdobeEdge, "EDGE-23712354");