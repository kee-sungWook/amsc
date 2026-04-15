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
         sym.getSymbol("WIPER").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1700, function(sym, e) {
         sym.getSymbol("SENSOR").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'FLOWS1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOWS1");
   //Edge symbol end:'FLOWS1'

   //=========================================================
   
   //Edge symbol: 'FLOWS2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOWS2");
   //Edge symbol end:'FLOWS2'

   //=========================================================
   
   //Edge symbol: 'FLOWS3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOWS3");
   //Edge symbol end:'FLOWS3'

   //=========================================================
   
   //Edge symbol: 'FLOWS4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOWS4");
   //Edge symbol end:'FLOWS4'

   //=========================================================
   
   //Edge symbol: 'WIPER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6733, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("WIPER");
   //Edge symbol end:'WIPER'

   //=========================================================
   
   //Edge symbol: 'RAIL'
   (function(symbolName) {   
   
   })("RAIL");
   //Edge symbol end:'RAIL'

   //=========================================================
   
   //Edge symbol: 'SENSOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("SENSOR");
   //Edge symbol end:'SENSOR'

   //=========================================================
   
   //Edge symbol: 'FLOW_SENSOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOW_SENSOR");
   //Edge symbol end:'FLOW_SENSOR'

})(jQuery, AdobeEdge, "EDGE-13347558");