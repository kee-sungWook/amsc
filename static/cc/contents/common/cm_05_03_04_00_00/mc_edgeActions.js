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
      
      
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

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
   
   //Edge symbol: 'belt_02mov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("belt_02mov");
   //Edge symbol end:'belt_02mov'

   //=========================================================
   
   //Edge symbol: 'belt_mov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("belt_mov");
   //Edge symbol end:'belt_mov'

   //=========================================================
   
   //Edge symbol: 'engine'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("CYLINDER1").play("step3");
         sym.getSymbol("CYLINDER2").play("step4");
         sym.getSymbol("CYLINDER3").play("step2");
         sym.getSymbol("CYLINDER4").play("step1");

      });
      //Edge binding end

   })("engine");
   //Edge symbol end:'engine'

   //=========================================================
   
   //Edge symbol: 'wheel_mov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("wheel_mov");
   //Edge symbol end:'wheel_mov'

   //=========================================================
   
   //Edge symbol: 'gear_mov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 252, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("gear_mov");
   //Edge symbol end:'gear_mov'

   //=========================================================
   
   //Edge symbol: 'ani_01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("butt").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.getComposition().getStage().stop("clean");
         sym.getComposition().getStage().getSymbol("ENG_POLLUTION").play();
         sym.getComposition().getStage().getSymbol("engine").getSymbol("CYLINDER1").getSymbol("CYLINDER_POLLUTION").play();
         sym.getComposition().getStage().getSymbol("engine").getSymbol("CYLINDER2").getSymbol("CYLINDER_POLLUTION").play();
         sym.getComposition().getStage().getSymbol("engine").getSymbol("CYLINDER3").getSymbol("CYLINDER_POLLUTION").play();
         sym.getComposition().getStage().getSymbol("engine").getSymbol("CYLINDER4").getSymbol("CYLINDER_POLLUTION").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol("butt").stop(0);
         sym.getComposition().getStage().stop("dirty");
         sym.getComposition().getStage().getSymbol("ENG_POLLUTION").stop(0);
         sym.getComposition().getStage().getSymbol("engine").getSymbol("CYLINDER1").getSymbol("CYLINDER_POLLUTION").stop(0);
         sym.getComposition().getStage().getSymbol("engine").getSymbol("CYLINDER2").getSymbol("CYLINDER_POLLUTION").stop(0);
         sym.getComposition().getStage().getSymbol("engine").getSymbol("CYLINDER3").getSymbol("CYLINDER_POLLUTION").stop(0);
         sym.getComposition().getStage().getSymbol("engine").getSymbol("CYLINDER4").getSymbol("CYLINDER_POLLUTION").stop(0);

      });
      //Edge binding end

   })("ani_01");
   //Edge symbol end:'ani_01'

   //=========================================================
   
   //Edge symbol: 'butt'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_rewind_btn}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("ani_01").play(0);

      });
      //Edge binding end

   })("butt");
   //Edge symbol end:'butt'

   //=========================================================
   
   //Edge symbol: 'bg_ani'
   (function(symbolName) {   
   
   })("bg_ani");
   //Edge symbol end:'bg_ani'

   //=========================================================
   
   //Edge symbol: 'INJECTION1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("INJECTION1");
   //Edge symbol end:'INJECTION1'

   //=========================================================
   
   //Edge symbol: 'INJECTION2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("INJECTION2");
   //Edge symbol end:'INJECTION2'

   //=========================================================
   
   //Edge symbol: 'ENG_POLLUTION'
   (function(symbolName) {   
   
   })("ENG_POLLUTION");
   //Edge symbol end:'ENG_POLLUTION'

   //=========================================================
   
   //Edge symbol: 'BURN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("BURN");
   //Edge symbol end:'BURN'

   //=========================================================
   
   //Edge symbol: 'CYLINDER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("CYLINDER");
   //Edge symbol end:'CYLINDER'

   //=========================================================
   
   //Edge symbol: 'CYLINDER_POLLUTION'
   (function(symbolName) {   
   
   })("CYLINDER_POLLUTION");
   //Edge symbol end:'CYLINDER_POLLUTION'

})(jQuery, AdobeEdge, "EDGE-18279344");