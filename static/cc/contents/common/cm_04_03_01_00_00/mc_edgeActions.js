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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1133, function(sym, e) {
         sym.getSymbol("BRAKE").play("brakeOn");
         sym.getSymbol("BRAKE_abrasion").play("brakeOn");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getSymbol("BRAKE").play("brakeOff");
         sym.getSymbol("BRAKE_abrasion").play("brakeOff");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'BRAKE_partsMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("BRAKE_partsMovie");
   //Edge symbol end:'BRAKE_partsMovie'

   //=========================================================
   
   //Edge symbol: 'BRAKE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
         sym.stop();
         sym.getSymbol("BRAKE_lineMove").stop();
         sym.getSymbol("BRAKE_partsMovie").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         sym.getSymbol("BRAKE_lineMove").play(0);
         sym.getSymbol("BRAKE_partsMovie").play(0);

      });
      //Edge binding end

   })("BRAKE");
   //Edge symbol end:'BRAKE'

   //=========================================================
   
   //Edge symbol: 'BRAKE_lineMove'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("BRAKE_lineMove");
   //Edge symbol end:'BRAKE_lineMove'

   //=========================================================
   
   //Edge symbol: 'BRAKE_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
         sym.stop();
         sym.getSymbol("BRAKE_lineMove").play("slowStop");
         sym.getSymbol("BRAKE_partsMovie").play("slowStop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         sym.getSymbol("BRAKE_lineMove").play(0);
         sym.getSymbol("BRAKE_partsMovie").play(0);

      });
      //Edge binding end

   })("BRAKE_abrasion");
   //Edge symbol end:'BRAKE_abrasion'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-30351776");