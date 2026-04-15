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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_rewind_btnCopy}", "click", function(sym, e) {
         sym.getSymbol("MYCLIP").getSymbol("TIRE_CLIP").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").stop(0);
         sym.getSymbol("MYCLIP2").getSymbol("TIRE_CLIP").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").stop(0);
         
         sym.getSymbol("MYCLIP").getSymbol("TIRE_CLIP").stop(0);
         sym.getSymbol("MYCLIP2").getSymbol("TIRE_CLIP").stop(0);
         
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getSymbol("MYCLIP").getSymbol("TIRE_CLIP").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").play();
         sym.getSymbol("MYCLIP2").getSymbol("TIRE_CLIP").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1034, function(sym, e) {
         sym.getSymbol("MYCLIP").getSymbol("TIRE_CLIP").play();
         sym.getSymbol("MYCLIP2").getSymbol("TIRE_CLIP").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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
   
   //Edge symbol: 'TIRE_CLIP'
   (function(symbolName) {   
   
   })("TIRE_CLIP");
   //Edge symbol end:'TIRE_CLIP'

   //=========================================================
   
   //Edge symbol: 'TIRE'
   (function(symbolName) {   
   
   })("TIRE");
   //Edge symbol end:'TIRE'

   //=========================================================
   
   //Edge symbol: 'MYCLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1267, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("MYCLIP");
   //Edge symbol end:'MYCLIP'

})(jQuery, AdobeEdge, "EDGE-29874842");