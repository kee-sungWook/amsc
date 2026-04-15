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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7733, function(sym, e) {
         // insert code here// Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ARROW_B'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("ARROW_B");
   //Edge symbol end:'ARROW_B'

   //=========================================================
   
   //Edge symbol: 'ARROW_R'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("ARROW_R");
   //Edge symbol end:'ARROW_R'

   //=========================================================
   
   //Edge symbol: 'VALVE'
   (function(symbolName) {   
   
   })("VALVE");
   //Edge symbol end:'VALVE'

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

   //=========================================================
   
   //Edge symbol: 'FLOW4'
   (function(symbolName) {   
   
   })("FLOW4");
   //Edge symbol end:'FLOW4'

   //=========================================================
   
   //Edge symbol: 'FLOW5'
   (function(symbolName) {   
   
   })("FLOW5");
   //Edge symbol end:'FLOW5'

   //=========================================================
   
   //Edge symbol: 'FLOW6'
   (function(symbolName) {   
   
   })("FLOW6");
   //Edge symbol end:'FLOW6'

   //=========================================================
   
   //Edge symbol: 'SPRING_SRC'
   (function(symbolName) {   
   
   })("SPRING_SRC");
   //Edge symbol end:'SPRING_SRC'

   //=========================================================
   
   //Edge symbol: 'FLOWS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3533, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("FLOWS");
   //Edge symbol end:'FLOWS'

})(jQuery, AdobeEdge, "EDGE-6680941");