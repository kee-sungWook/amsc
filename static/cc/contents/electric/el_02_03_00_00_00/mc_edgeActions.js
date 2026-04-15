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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1133, function(sym, e) {
         sym.getSymbol("FLOWOUT1").play();
         sym.getSymbol("FLOWOUT2").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1433, function(sym, e) {
         sym.getSymbol("I_SW").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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

   //=========================================================
   
   //Edge symbol: 'FLOW_MOVE_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("FLOW_MOVE_1");
   //Edge symbol end:'FLOW_MOVE_1'

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
   
   //Edge symbol: 'I_SW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17492, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("I_SW");
   //Edge symbol end:'I_SW'

})(jQuery, AdobeEdge, "EDGE-13413607");