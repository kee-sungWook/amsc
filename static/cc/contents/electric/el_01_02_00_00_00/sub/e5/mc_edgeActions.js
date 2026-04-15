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
   
   //Edge symbol: 'MAP_SENSOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("MAP_SENSOR");
   //Edge symbol end:'MAP_SENSOR'

   //=========================================================
   
   //Edge symbol: 'PULSE_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("PULSE_MOVE");
   //Edge symbol end:'PULSE_MOVE'

   //=========================================================
   
   //Edge symbol: 'FLOW_R1'
   (function(symbolName) {   
   
   })("FLOW_R1");
   //Edge symbol end:'FLOW_R1'

   //=========================================================
   
   //Edge symbol: 'FLOW_R2'
   (function(symbolName) {   
   
   })("FLOW_R2");
   //Edge symbol end:'FLOW_R2'

   //=========================================================
   
   //Edge symbol: 'FLOW_B1'
   (function(symbolName) {   
   
   })("FLOW_B1");
   //Edge symbol end:'FLOW_B1'

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
   
   //Edge symbol: 'airFlow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("airFlow");
   //Edge symbol end:'airFlow'

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
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1633, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'ecm'
   (function(symbolName) {   
   
   })("ecm");
   //Edge symbol end:'ecm'

   //=========================================================
   
   //Edge symbol: 'pan_mov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("pan_mov");
   //Edge symbol end:'pan_mov'

})(jQuery, AdobeEdge, "EDGE-36324192");