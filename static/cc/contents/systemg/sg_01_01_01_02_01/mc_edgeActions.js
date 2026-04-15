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
   
   //Edge symbol: 'fan_front'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2268, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("move1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("move3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3436, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("move2");

      });
      //Edge binding end

   })("fan_front");
   //Edge symbol end:'fan_front'

   //=========================================================
   
   //Edge symbol: 'fan_side'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         sym.getComposition().getStage().getSymbol("fan_front").play("move2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("fan_front").play("move3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4133, function(sym, e) {
         sym.getComposition().getStage().getSymbol("fan_front").play("move2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5833, function(sym, e) {
         sym.getComposition().getStage().getSymbol("fan_front").play("move1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("fan_side");
   //Edge symbol end:'fan_side'

})(jQuery, AdobeEdge, "EDGE-27168194");