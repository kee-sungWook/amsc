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
         sym.getSymbol("NORMAL_DRUM").play("brakeOn");
         sym.getSymbol("ABRASION_DRUM").play("brakeOn");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getSymbol("NORMAL_DRUM").play("brakeOff");
         sym.getSymbol("ABRASION_DRUM").play("brakeOff");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'drum_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("DRUM_movie");
   //Edge symbol end:'DRUM_movie'

   //=========================================================
   
   //Edge symbol: 'DRUM_ABRASION_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("DRUM_ABRASION_movie");
   //Edge symbol end:'DRUM_ABRASION_movie'

   //=========================================================
   
   //Edge symbol: 'AJ_SPRING'
   (function(symbolName) {   
   
   })("AJ_SPRING");
   //Edge symbol end:'AJ_SPRING'

   //=========================================================
   
   //Edge symbol: 'WC_SPRING'
   (function(symbolName) {   
   
   })("WC_SPRING");
   //Edge symbol end:'WC_SPRING'

   //=========================================================
   
   //Edge symbol: 'NORMAL_DRUM'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
         sym.stop();
         sym.getSymbol("DRUM_movie").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33, function(sym, e) {
         sym.getSymbol("WC_SPRING").play();
         sym.getSymbol("AJ_SPRING").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getSymbol("WC_SPRING").playReverse();
         sym.getSymbol("AJ_SPRING").playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1867, function(sym, e) {
         sym.stop();
         sym.getSymbol("DRUM_movie").play(0);

      });
      //Edge binding end

   })("NORMAL_DRUM");
   //Edge symbol end:'NORMAL_DRUM'

   //=========================================================
   
   //Edge symbol: 'NORMAL_DRUM_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33, function(sym, e) {
         sym.getSymbol("WC_SPRING").play();
         sym.getSymbol("AJ_SPRING").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
         sym.stop();
         sym.getSymbol("DRUM_ABRASION_movie").play("slowStop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getSymbol("WC_SPRING").playReverse();
         sym.getSymbol("AJ_SPRING").playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1867, function(sym, e) {
         sym.stop();
         sym.getSymbol("DRUM_ABRASION_movie").play(0);

      });
      //Edge binding end

   })("ABRASION_DRUM");
   //Edge symbol end:'ABRASION_DRUM'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11912305");