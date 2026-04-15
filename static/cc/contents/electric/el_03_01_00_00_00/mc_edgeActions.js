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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2767, function(sym, e) {
         sym.getSymbol("FLOW").play("gogo");
         sym.getSymbol("MODULE").play("gogo");
         sym.getSymbol("SENSOR").play("gogo");
         sym.getSymbol("SENSOR_LINE").play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.getSymbol("FLOW").stop(0);
         sym.getSymbol("MODULE").stop(0);
         sym.getSymbol("SENSOR").stop(0);
         sym.getSymbol("SENSOR_LINE").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5933, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'MODULE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("MODULE");
   //Edge symbol end:'MODULE'

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

   //=========================================================
   
   //Edge symbol: 'FLOW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("FLOW");
   //Edge symbol end:'FLOW'

   //=========================================================
   
   //Edge symbol: 'SENSOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 633, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("SENSOR");
   //Edge symbol end:'SENSOR'

   //=========================================================
   
   //Edge symbol: 'TIREWHEEL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("TIREWHEEL");
   //Edge symbol end:'TIREWHEEL'

   //=========================================================
   
   //Edge symbol: 'TIRE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1267, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("TIRE");
   //Edge symbol end:'TIRE'

   //=========================================================
   
   //Edge symbol: 'SENSOR_LINE'
   (function(symbolName) {   
   
   })("SENSOR_LINE");
   //Edge symbol end:'SENSOR_LINE'

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
   
   //Edge symbol: 'FLOW3'
   (function(symbolName) {   
   
   })("FLOW3");
   //Edge symbol end:'FLOW3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-27202022");