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
         sym.getSymbol("CMP_SENSOR").play();
         sym.getSymbol("PULSE_MOVIE1").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getSymbol("CKP_SENSOR").play();
         sym.getSymbol("PULSE_MOVIE2").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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
   
   //Edge symbol: 'BOMB'
   (function(symbolName) {   
   
   })("BOMB");
   //Edge symbol end:'BOMB'

   //=========================================================
   
   //Edge symbol: 'SPARK_FIRE'
   (function(symbolName) {   
   
   })("SPARK_FIRE");
   //Edge symbol end:'SPARK_FIRE'

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
   
   //Edge symbol: 'CMP_SENSOR'
   (function(symbolName) {   
   
   })("CMP_SENSOR");
   //Edge symbol end:'CMP_SENSOR'

   //=========================================================
   
   //Edge symbol: 'CKP_SENSOR'
   (function(symbolName) {   
   
   })("CKP_SENSOR");
   //Edge symbol end:'CKP_SENSOR'

   //=========================================================
   
   //Edge symbol: 'PULSE_MOVIE1'
   (function(symbolName) {   
   
   })("PULSE_MOVIE1");
   //Edge symbol end:'PULSE_MOVIE1'

   //=========================================================
   
   //Edge symbol: 'PULSE_MOVIE2'
   (function(symbolName) {   
   
   })("PULSE_MOVIE2");
   //Edge symbol end:'PULSE_MOVIE2'

})(jQuery, AdobeEdge, "EDGE-36324192");