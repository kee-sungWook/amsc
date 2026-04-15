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
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP").getSymbol("TIRE_CLIP").play();
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP2").getSymbol("TIRE_CLIP").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP").getSymbol("TIRE_CLIP").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").play();
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP2").getSymbol("TIRE_CLIP").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1391, function(sym, e) {
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP").getSymbol("TIRE_CLIP").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP").getSymbol("TIRE_CLIP").getSymbol("TIRE").stop("truble");
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rewind_btn}", "click", function(sym, e) {
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP").getSymbol("TIRE_CLIP").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").stop(0);
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP2").getSymbol("TIRE_CLIP").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").stop(0);
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP").getSymbol("TIRE_CLIP").getSymbol("TIRE").stop("ready");
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP").getSymbol("TIRE_CLIP").stop(0);
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP2").getSymbol("TIRE_CLIP").stop(0);
         sym.getSymbol("ALL_CLIP").getSymbol("MYCLIP").stop(0);
         sym.play(0);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'TIRE'
   (function(symbolName) {   
   
   })("TIRE");
   //Edge symbol end:'TIRE'

   //=========================================================
   
   //Edge symbol: 'TIRE_LINE_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("TIRE_LINE_MOVE");
   //Edge symbol end:'TIRE_LINE_MOVE'

   //=========================================================
   
   //Edge symbol: 'TIRE_RED_FILL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 367, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("TIRE_RED_FILL");
   //Edge symbol end:'TIRE_RED_FILL'

   //=========================================================
   
   //Edge symbol: 'TRUBLE_MOVE_SRC'
   (function(symbolName) {   
   
   })("TRUBLE_MOVE_SRC");
   //Edge symbol end:'TRUBLE_MOVE_SRC'

   //=========================================================
   
   //Edge symbol: 'TRUBLE_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("TRUBLE_MOVE");
   //Edge symbol end:'TRUBLE_MOVE'

   //=========================================================
   
   //Edge symbol: 'TIRE_CLIP'
   (function(symbolName) {   
   
   })("TIRE_CLIP");
   //Edge symbol end:'TIRE_CLIP'

   //=========================================================
   
   //Edge symbol: 'MYCLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("MYCLIP");
   //Edge symbol end:'MYCLIP'

   //=========================================================
   
   //Edge symbol: 'ALL_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("ALL_CLIP");
   //Edge symbol end:'ALL_CLIP'

})(jQuery, AdobeEdge, "EDGE-12786895");