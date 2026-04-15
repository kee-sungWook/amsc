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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getSymbol("PULSE").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'PULSE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1067, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("PULSE");
   //Edge symbol end:'PULSE'

   //=========================================================
   
   //Edge symbol: 'FLOW_1'
   (function(symbolName) {   
   
   })("FLOW_1");
   //Edge symbol end:'FLOW_1'

   //=========================================================
   
   //Edge symbol: 'FLOW_2'
   (function(symbolName) {   
   
   })("FLOW_2");
   //Edge symbol end:'FLOW_2'

   //=========================================================
   
   //Edge symbol: 'FLOW_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOW_MOVE");
   //Edge symbol end:'FLOW_MOVE'

})(jQuery, AdobeEdge, "EDGE-24807161");