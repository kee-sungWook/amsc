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
   
   //Edge symbol: 'spark01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2134, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("spark01").play("step3");
         sym.getSymbol("spark02").play("step4");
         sym.getSymbol("spark03").play("step2");
         sym.getSymbol("spark04").play("step1");

      });
      //Edge binding end

   })("spark01");
   //Edge symbol end:'spark01'

   //=========================================================
   
   //Edge symbol: 'spark'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("spark01").play("step3");
         sym.getSymbol("spark02").play("step4");
         sym.getSymbol("spark03").play("step2");
         sym.getSymbol("spark04").play("step1");

      });
      //Edge binding end

   })("spark");
   //Edge symbol end:'spark'

   //=========================================================
   
   //Edge symbol: 'pump_mov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("pump_mov");
   //Edge symbol end:'pump_mov'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'pu_mov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("pu_mov");
   //Edge symbol end:'pu_mov'

   //=========================================================
   
   //Edge symbol: 'one_mov01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("one_mov01");
   //Edge symbol end:'one_mov01'

   //=========================================================
   
   //Edge symbol: 'onw_mov02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("onw_mov02");
   //Edge symbol end:'onw_mov02'

})(jQuery, AdobeEdge, "EDGE-8934384");