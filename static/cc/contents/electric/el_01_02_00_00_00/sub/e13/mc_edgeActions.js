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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getSymbol("AIRS").play("air1Hide");
         sym.getSymbol("AIRTEXT").play("SHOWLOW");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.getSymbol("AIRS").play("air2Hide");
         sym.getSymbol("AIRTEXT").play("SHOWHIGH");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
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
   
   //Edge symbol: 'FLOW_R1'
   (function(symbolName) {   
   
   })("FLOW_R1");
   //Edge symbol end:'FLOW_R1'

   //=========================================================
   
   //Edge symbol: 'FLOW_B1'
   (function(symbolName) {   
   
   })("FLOW_B1");
   //Edge symbol end:'FLOW_B1'

   //=========================================================
   
   //Edge symbol: 'movie_arrow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 767, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         

      });
      //Edge binding end

   })("movie_arrow");
   //Edge symbol end:'movie_arrow'

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
   
   //Edge symbol: 'FLOWSRC'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOWSRC");
   //Edge symbol end:'FLOWSRC'

   //=========================================================
   
   //Edge symbol: 'BLD1_1'
   (function(symbolName) {   
   
   })("BLD1_1");
   //Edge symbol end:'BLD1_1'

   //=========================================================
   
   //Edge symbol: 'BLD1_2'
   (function(symbolName) {   
   
   })("BLD1_2");
   //Edge symbol end:'BLD1_2'

   //=========================================================
   
   //Edge symbol: 'BLD1_3'
   (function(symbolName) {   
   
   })("BLD1_3");
   //Edge symbol end:'BLD1_3'

   //=========================================================
   
   //Edge symbol: 'AIRS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 533, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("AIRS");
   //Edge symbol end:'AIRS'

   //=========================================================
   
   //Edge symbol: 'BLD2'
   (function(symbolName) {   
   
   })("BLD2");
   //Edge symbol end:'BLD2'

   //=========================================================
   
   //Edge symbol: 'BLD3_1'
   (function(symbolName) {   
   
   })("BLD3_1");
   //Edge symbol end:'BLD3_1'

   //=========================================================
   
   //Edge symbol: 'BLD3_2'
   (function(symbolName) {   
   
   })("BLD3_2");
   //Edge symbol end:'BLD3_2'

   //=========================================================
   
   //Edge symbol: 'BLD3_3'
   (function(symbolName) {   
   
   })("BLD3_3");
   //Edge symbol end:'BLD3_3'

   //=========================================================
   
   //Edge symbol: 'AIRTEXT'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("AIRTEXT");
   //Edge symbol end:'AIRTEXT'

})(jQuery, AdobeEdge, "EDGE-27165250");