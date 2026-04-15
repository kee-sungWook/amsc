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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getSymbol("FAN2").play();
         sym.getSymbol("MODULE").play();
         sym.getSymbol("SIGNALS").stop("SHOW");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getSymbol("FAN2").stop();
         sym.getSymbol("MODULE").stop(0);
         sym.getSymbol("SIGNALS").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ENG'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1800, function(sym, e) {
         sym.getSymbol("SPARK_FIRE").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("ENG");
   //Edge symbol end:'ENG'

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
   
   //Edge symbol: 'SPARK_FIRE'
   (function(symbolName) {   
   
   })("SPARK_FIRE");
   //Edge symbol end:'SPARK_FIRE'

   //=========================================================
   
   //Edge symbol: 'BOMB'
   (function(symbolName) {   
   
   })("BOMB");
   //Edge symbol end:'BOMB'

   //=========================================================
   
   //Edge symbol: 'flow_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("flow_movie");
   //Edge symbol end:'flow_movie'

   //=========================================================
   
   //Edge symbol: 'FLOW_R2'
   (function(symbolName) {   
   
   })("FLOW_R2");
   //Edge symbol end:'FLOW_R2'

   //=========================================================
   
   //Edge symbol: 'FLOW_B2'
   (function(symbolName) {   
   
   })("FLOW_B2");
   //Edge symbol end:'FLOW_B2'

   //=========================================================
   
   //Edge symbol: 'FAN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FAN");
   //Edge symbol end:'FAN'

   //=========================================================
   
   //Edge symbol: 'flow_movie_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("flow_movie_1");
   //Edge symbol end:'flow_movie_1'

   //=========================================================
   
   //Edge symbol: 'FLOW3'
   (function(symbolName) {   
   
   })("FLOW3");
   //Edge symbol end:'FLOW3'

   //=========================================================
   
   //Edge symbol: 'SIGNALS'
   (function(symbolName) {   
   
   })("SIGNALS");
   //Edge symbol end:'SIGNALS'

   //=========================================================
   
   //Edge symbol: 'MODULE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("MODULE");
   //Edge symbol end:'MODULE'

   //=========================================================
   
   //Edge symbol: 'FAN_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FAN2");
   //Edge symbol end:'FAN2'

   //=========================================================
   
   //Edge symbol: 'WTS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("WTS");
   //Edge symbol end:'WTS'

})(jQuery, AdobeEdge, "EDGE-6695198");