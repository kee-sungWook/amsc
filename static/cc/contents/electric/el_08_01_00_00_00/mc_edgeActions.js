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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         sym.getSymbol("AIRBAG").play("front");
         sym.getSymbol("MODULE").play("crash");
         sym.getSymbol("CRASH").stop("front");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getSymbol("AIRBAG").stop(0);
         sym.getSymbol("MODULE").stop("normal");
         sym.getSymbol("CRASH").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6967, function(sym, e) {
         sym.getSymbol("AIRBAG").play("side");
         sym.getSymbol("MODULE").play("crash");
         sym.getSymbol("CRASH").stop("side");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9300, function(sym, e) {
         sym.getSymbol("AIRBAG").stop(0);
         sym.getSymbol("MODULE").stop("normal");
         sym.getSymbol("CRASH").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9800, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'MODULE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 667, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("crash");

      });
      //Edge binding end

   })("MODULE");
   //Edge symbol end:'MODULE'

   //=========================================================
   
   //Edge symbol: 'CRASH'
   (function(symbolName) {   
   
   })("CRASH");
   //Edge symbol end:'CRASH'

   //=========================================================
   
   //Edge symbol: 'AIRBAG'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1467, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("AIRBAG");
   //Edge symbol end:'AIRBAG'

   //=========================================================
   
   //Edge symbol: 'SIGNAL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL");
   //Edge symbol end:'SIGNAL'

   //=========================================================
   
   //Edge symbol: 'CRASH_F'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 367, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("CRASH_F");
   //Edge symbol end:'CRASH_F'

   //=========================================================
   
   //Edge symbol: 'CRASH_S'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 367, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("CRASH_S");
   //Edge symbol end:'CRASH_S'

   //=========================================================
   
   //Edge symbol: 'SENSOR_FLOW1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SENSOR_FLOW1");
   //Edge symbol end:'SENSOR_FLOW1'

   //=========================================================
   
   //Edge symbol: 'SENSOR_FLOW1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SENSOR_FLOW2");
   //Edge symbol end:'SENSOR_FLOW2'

   //=========================================================
   
   //Edge symbol: 'AIRBAG_lineMovie1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 467, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("AIRBAG_lineMovie1");
   //Edge symbol end:'AIRBAG_lineMovie1'

   //=========================================================
   
   //Edge symbol: 'AIRBAG_lineMovie2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 467, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("AIRBAG_lineMovie2");
   //Edge symbol end:'AIRBAG_lineMovie2'

})(jQuery, AdobeEdge, "EDGE-13423272");