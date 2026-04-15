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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1267, function(sym, e) {
         sym.getSymbol("GRAPHS").getSymbol("GRAPH_LINE").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'FLOW_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOW_MOVE");
   //Edge symbol end:'FLOW_MOVE'

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
   
   //Edge symbol: 'FLOW_3'
   (function(symbolName) {   
   
   })("FLOW_3");
   //Edge symbol end:'FLOW_3'

   //=========================================================
   
   //Edge symbol: 'GRAPH_LINE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("GRAPH_LINE");
   //Edge symbol end:'GRAPH_LINE'

   //=========================================================
   
   //Edge symbol: 'GRAPHS'
   (function(symbolName) {   
   
   })("GRAPHS");
   //Edge symbol end:'GRAPHS'

})(jQuery, AdobeEdge, "EDGE-10580587");