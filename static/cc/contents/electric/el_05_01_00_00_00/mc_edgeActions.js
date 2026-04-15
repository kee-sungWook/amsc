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
   
   //Edge symbol: 'BRAKE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
         sym.stop();
         sym.getSymbol("BRAKE_lineMove").stop();
         sym.getSymbol("BRAKE_partsMovie").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1867, function(sym, e) {
         sym.stop();
         sym.getSymbol("BRAKE_lineMove").play();
         sym.getSymbol("BRAKE_partsMovie").play();

      });
      //Edge binding end

   })("BRAKE");
   //Edge symbol end:'BRAKE'

   //=========================================================
   
   //Edge symbol: 'topFlow'
   (function(symbolName) {   
   
   })("topFlow");
   //Edge symbol end:'topFlow'

   //=========================================================
   
   //Edge symbol: 'topFlow_flowMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("topFlow_flowMovie");
   //Edge symbol end:'topFlow_flowMovie'

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
   
   //Edge symbol: 'PEDAL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("topFlow").stop("brakeOn");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("topFlow").stop("brakeOff");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("BRAKE").play("brakeOn");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("BRAKE").play("brakeOff");

      });
      //Edge binding end

   })("PEDAL");
   //Edge symbol end:'PEDAL'

   //=========================================================
   
   //Edge symbol: 'PEDAL_flow1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("PEDAL_flow1");
   //Edge symbol end:'PEDAL_flow1'

   //=========================================================
   
   //Edge symbol: 'PEDAL_flow2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("PEDAL_flow2");
   //Edge symbol end:'PEDAL_flow2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4921528");