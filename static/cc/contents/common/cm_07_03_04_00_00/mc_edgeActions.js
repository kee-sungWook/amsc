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
         sym.getSymbol("TIRE_TWIST").play();
         sym.getSymbol("TIRE_TWIST").getSymbol("TIRE").play("truble");
         sym.getSymbol("TIRE_TWIST").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").play();
         
         sym.getSymbol("DOT_MOVER").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.getSymbol("TIRE_TWIST").stop(0);
         sym.getSymbol("TIRE_TWIST").getSymbol("TIRE").stop(0);
         sym.getSymbol("TIRE_TWIST").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").stop(0);
         
         sym.getSymbol("DOT_MOVER").stop("fix");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7252, function(sym, e) {
         sym.getSymbol("TIRE_TWIST").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").play();
         sym.getSymbol("DOT_MOVER").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8761, function(sym, e) {
         sym.getSymbol("TIRE_TWIST").getSymbol("TIRE").play("fix");
         sym.getSymbol("DOT_MOVER").stop(334);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rewind_btn}", "click", function(sym, e) {
         sym.getSymbol("TIRE_TWIST").getSymbol("TIRE").stop(0);
         sym.getSymbol("TIRE_TWIST").getSymbol("TIRE").getSymbol("TIRE_LINE_MOVE").stop(0);
         
         sym.getSymbol("DOT_MOVER").stop(0);
         
         sym.play(0);

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
   
   //Edge symbol: 'TIRE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1467, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("truble");

      });
      //Edge binding end

   })("TIRE");
   //Edge symbol end:'TIRE'

   //=========================================================
   
   //Edge symbol: 'EQUIP_LIGHT2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("EQUIP_LIGHT2");
   //Edge symbol end:'EQUIP_LIGHT2'

   //=========================================================
   
   //Edge symbol: 'EQUIP_LIGHT1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 433, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("EQUIP_LIGHT1");
   //Edge symbol end:'EQUIP_LIGHT1'

   //=========================================================
   
   //Edge symbol: 'EQUIPMENT'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 633, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("EQUIPMENT");
   //Edge symbol end:'EQUIPMENT'

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
   
   //Edge symbol: 'TRUBLE_MOVE_SRC'
   (function(symbolName) {   
   
   })("TRUBLE_MOVE_SRC");
   //Edge symbol end:'TRUBLE_MOVE_SRC'

   //=========================================================
   
   //Edge symbol: 'DOT_MOVER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 467, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("DOT_MOVER");
   //Edge symbol end:'DOT_MOVER'

   //=========================================================
   
   //Edge symbol: 'TIRE_TWIST'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("TIRE_TWIST");
   //Edge symbol end:'TIRE_TWIST'

})(jQuery, AdobeEdge, "EDGE-691007");