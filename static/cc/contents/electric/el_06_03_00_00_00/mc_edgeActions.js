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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getSymbol("LIGHT_MOVIE").play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getSymbol("UNIT").play("gogo");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'LIGHT_MOVIE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3367, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("reGo");

      });
      //Edge binding end

   })("LIGHT_MOVIE");
   //Edge symbol end:'LIGHT_MOVIE'

   //=========================================================
   
   //Edge symbol: 'FLOW_T1'
   (function(symbolName) {   
   
   })("FLOW_T1");
   //Edge symbol end:'FLOW_T1'

   //=========================================================
   
   //Edge symbol: 'FLOW_T2'
   (function(symbolName) {   
   
   })("FLOW_T2");
   //Edge symbol end:'FLOW_T2'

   //=========================================================
   
   //Edge symbol: 'FLOW_T3'
   (function(symbolName) {   
   
   })("FLOW_T3");
   //Edge symbol end:'FLOW_T3'

   //=========================================================
   
   //Edge symbol: 'FLOW_T4'
   (function(symbolName) {   
   
   })("FLOW_T4");
   //Edge symbol end:'FLOW_T4'

   //=========================================================
   
   //Edge symbol: 'FLOW_SRC_MOVIE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOW_SRC_MOVIE");
   //Edge symbol end:'FLOW_SRC_MOVIE'

   //=========================================================
   
   //Edge symbol: 'UNIT'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 433, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("UNIT");
   //Edge symbol end:'UNIT'

   //=========================================================
   
   //Edge symbol: 'FLOW_D1'
   (function(symbolName) {   
   
   })("FLOW_D1");
   //Edge symbol end:'FLOW_D1'

   //=========================================================
   
   //Edge symbol: 'FLOW_D2'
   (function(symbolName) {   
   
   })("FLOW_D2");
   //Edge symbol end:'FLOW_D2'

   //=========================================================
   
   //Edge symbol: 'FLOW_D3'
   (function(symbolName) {   
   
   })("FLOW_D3");
   //Edge symbol end:'FLOW_D3'

   //=========================================================
   
   //Edge symbol: 'FLOW_SRC_RED_MOVIE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOW_SRC_RED_MOVIE");
   //Edge symbol end:'FLOW_SRC_RED_MOVIE'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-28455542");