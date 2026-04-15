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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         sym.getSymbol("BRAKE_CYLINDER").play("cylinderOn")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         sym.getSymbol("BRAKE_CYLINDER").play("cylinderOff")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2767, function(sym, e) {
         sym.getComposition().getStage().play();

      });
      //Edge binding end

   })("BRAKE_lineMove");
   //Edge symbol end:'BRAKE_lineMove'

   //=========================================================
   
   //Edge symbol: 'DRUM_movie'
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
   
   //Edge symbol: 'NORMAL_DRUM'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33, function(sym, e) {
         sym.getSymbol("WC_SPRING").play();
         sym.getSymbol("AJ_SPRING").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
         sym.stop();
         sym.getSymbol("DRUM_movie").play("slowStop");

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
   
   //Edge symbol: 'WC_SPRING'
   (function(symbolName) {   
   
   })("WC_SPRING");
   //Edge symbol end:'WC_SPRING'

   //=========================================================
   
   //Edge symbol: 'AJ_SPRING'
   (function(symbolName) {   
   
   })("AJ_SPRING");
   //Edge symbol end:'AJ_SPRING'

   //=========================================================
   
   //Edge symbol: 'TOP_OILTANK'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("TOP_OILTANK");
   //Edge symbol end:'TOP_OILTANK'

   //=========================================================
   
   //Edge symbol: 'PIPE1_2'
   (function(symbolName) {   
   
   })("PIPE1_2");
   //Edge symbol end:'PIPE1_2'

   //=========================================================
   
   //Edge symbol: 'PIPE1_1'
   (function(symbolName) {   
   
   })("PIPE1_1");
   //Edge symbol end:'PIPE1_1'

   //=========================================================
   
   //Edge symbol: 'PIPE2_1'
   (function(symbolName) {   
   
   })("PIPE2_1");
   //Edge symbol end:'PIPE2_1'

   //=========================================================
   
   //Edge symbol: 'SPRING_S'
   (function(symbolName) {   
   
   })("SPRING_S");
   //Edge symbol end:'SPRING_S'

   //=========================================================
   
   //Edge symbol: 'SPRING_B'
   (function(symbolName) {   
   
   })("SPRING_B");
   //Edge symbol end:'SPRING_B'

   //=========================================================
   
   //Edge symbol: 'BRAKE_CYLINDER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1133, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("BRAKE").play("brakeOn");
         sym.getComposition().getStage().getSymbol("NORMAL_DRUM").play("brakeOn");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3133, function(sym, e) {
         sym.getComposition().getStage().getSymbol("BRAKE").play("brakeOff");
         sym.getComposition().getStage().getSymbol("NORMAL_DRUM").play("brakeOff");
         sym.getComposition().getStage().play();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 667, function(sym, e) {
         sym.getSymbol("OILS").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2667, function(sym, e) {
         sym.getSymbol("OILS").stop(0);

      });
      //Edge binding end

   })("BRAKE_CYLINDER");
   //Edge symbol end:'BRAKE_CYLINDER'

   //=========================================================
   
   //Edge symbol: 'PISTON1_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1600, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("PISTON1_CLIP");
   //Edge symbol end:'PISTON1_CLIP'

   //=========================================================
   
   //Edge symbol: 'PISTON2_CLIP'
   (function(symbolName) {   
   
   })("PISTON2_CLIP");
   //Edge symbol end:'PISTON2_CLIP'

   //=========================================================
   
   //Edge symbol: 'PAEKING_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("PAEKING_CLIP");
   //Edge symbol end:'PAEKING_CLIP'

   //=========================================================
   
   //Edge symbol: 'OILS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1533, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("OILS");
   //Edge symbol end:'OILS'

   //=========================================================
   
   //Edge symbol: 'OIL1'
   (function(symbolName) {   
   
   })("OIL1");
   //Edge symbol end:'OIL1'

   //=========================================================
   
   //Edge symbol: 'OIL3'
   (function(symbolName) {   
   
   })("OIL3");
   //Edge symbol end:'OIL3'

   //=========================================================
   
   //Edge symbol: 'OIL2'
   (function(symbolName) {   
   
   })("OIL2");
   //Edge symbol end:'OIL2'

   //=========================================================
   
   //Edge symbol: 'LeakOil'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("LeakOil");
   //Edge symbol end:'LeakOil'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-8800815");