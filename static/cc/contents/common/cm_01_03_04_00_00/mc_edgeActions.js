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
   
   //Edge symbol: 'Timing'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 567, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("Timing");
   //Edge symbol end:'Timing'

   //=========================================================
   
   //Edge symbol: 'Engine'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("EquipmentMover1").play("step3");
         sym.getSymbol("EquipmentMover2").play("step4");
         sym.getSymbol("EquipmentMover3").play("step2");
         sym.getSymbol("EquipmentMover4").play("step1");
         
         sym.getSymbol("EquipmentMover1").getSymbol("CrankMove_front").play(0);
         sym.getSymbol("EquipmentMover1").getSymbol("CrankMove_rear").play(0);
         
         sym.getSymbol("EquipmentMover2").getSymbol("CrankMove_front").play("down");
         sym.getSymbol("EquipmentMover2").getSymbol("CrankMove_rear").play("down");
         
         sym.getSymbol("EquipmentMover3").getSymbol("CrankMove_front").play("down");
         sym.getSymbol("EquipmentMover3").getSymbol("CrankMove_rear").play("down");
         
         sym.getSymbol("EquipmentMover4").getSymbol("CrankMove_front").play(0);
         sym.getSymbol("EquipmentMover4").getSymbol("CrankMove_rear").play(0);

      });
      //Edge binding end

   })("Engine");
   //Edge symbol end:'Engine'

   //=========================================================
   
   //Edge symbol: 'timing_belt_3_line_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("timing_belt_3_line_movie");
   //Edge symbol end:'timing_belt_3_line_movie'

   //=========================================================
   
   //Edge symbol: 'driveBelt_moving'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 767, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("driveBelt_moving");
   //Edge symbol end:'driveBelt_moving'

   //=========================================================
   
   //Edge symbol: 'blackOval_movie1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("blackOval_movie1_1");
   //Edge symbol end:'blackOval_movie1_1'

   //=========================================================
   
   //Edge symbol: 'blackOval_movie2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 767, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("blackOval_movie2");
   //Edge symbol end:'blackOval_movie2'

   //=========================================================
   
   //Edge symbol: 'blackOval_movie4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 767, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("blackOval_movie4");
   //Edge symbol end:'blackOval_movie4'

   //=========================================================
   
   //Edge symbol: 'blackOval_movie2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 767, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("blackOval_movie3");
   //Edge symbol end:'blackOval_movie3'

   //=========================================================
   
   //Edge symbol: 'EquipmentMover'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2134, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("EquipmentMover");
   //Edge symbol end:'EquipmentMover'

   //=========================================================
   
   //Edge symbol: 'CrankMove'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2133, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("CrankMove");
   //Edge symbol end:'CrankMove'

   //=========================================================
   
   //Edge symbol: 'burnMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("burnMovie");
   //Edge symbol end:'burnMovie'

   //=========================================================
   
   //Edge symbol: 'driveBelt_bottom_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 467, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("driveBelt_bottom_movie");
   //Edge symbol end:'driveBelt_bottom_movie'

   //=========================================================
   
   //Edge symbol: 'timing_belt2_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("timing_belt2_movie");
   //Edge symbol end:'timing_belt2_movie'

   //=========================================================
   
   //Edge symbol: 'TentionBearing_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 767, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("TentionBearing_movie");
   //Edge symbol end:'TentionBearing_movie'

   //=========================================================
   
   //Edge symbol: 'timing_belt1_move'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1167, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("timing_belt1_move");
   //Edge symbol end:'timing_belt1_move'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-8934384");