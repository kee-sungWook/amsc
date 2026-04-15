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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.getSymbol("CAR1").getSymbol("WHEEL1_1").play(0);
         sym.getSymbol("CAR1").getSymbol("WHEEL1_2").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${replayBtn}", "mousedown", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'SCENE3_MEMO'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("SCENE3_MEMO");
   //Edge symbol end:'SCENE3_MEMO'

   //=========================================================
   
   //Edge symbol: 'WHEEL_MC'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 125, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL_MC");
   //Edge symbol end:'WHEEL_MC'

   //=========================================================
   
   //Edge symbol: 'CAR1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CAR1");
   //Edge symbol end:'CAR1'

   //=========================================================
   
   //Edge symbol: 'CAR2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CAR2");
   //Edge symbol end:'CAR2'

   //=========================================================
   
   //Edge symbol: 'G1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("G1");
   //Edge symbol end:'G1'

   //=========================================================
   
   //Edge symbol: 'G2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("G2");
   //Edge symbol end:'G2'

   //=========================================================
   
   //Edge symbol: 'G3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("G3");
   //Edge symbol end:'G3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-22479537");