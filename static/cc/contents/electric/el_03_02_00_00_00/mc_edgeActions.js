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
   
   //Edge symbol: 'ARROW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("ARROW");
   //Edge symbol end:'ARROW'

   //=========================================================
   
   //Edge symbol: 'FLOW1'
   (function(symbolName) {   
   
   })("FLOW1");
   //Edge symbol end:'FLOW1'

   //=========================================================
   
   //Edge symbol: 'FLOW2'
   (function(symbolName) {   
   
   })("FLOW2");
   //Edge symbol end:'FLOW2'

   //=========================================================
   
   //Edge symbol: 'FLOW_SRC_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOW_SRC_MOVE");
   //Edge symbol end:'FLOW_SRC_MOVE'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-31448746");