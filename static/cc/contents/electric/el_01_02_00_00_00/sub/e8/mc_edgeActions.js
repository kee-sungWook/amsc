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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("PEDAL_ACCEL").play("down");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getSymbol("PEDAL_ACCEL").play("up");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'FLOWSRC'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("FLOWSRC");
   //Edge symbol end:'FLOWSRC'

   //=========================================================
   
   //Edge symbol: 'AIR_ROAD'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("AIR_ROAD");
   //Edge symbol end:'AIR_ROAD'

   //=========================================================
   
   //Edge symbol: 'ETC'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("ETC");
   //Edge symbol end:'ETC'

   //=========================================================
   
   //Edge symbol: 'FLOW_V1'
   (function(symbolName) {   
   
   })("FLOW_V1");
   //Edge symbol end:'FLOW_V1'

   //=========================================================
   
   //Edge symbol: 'FLOW_V2'
   (function(symbolName) {   
   
   })("FLOW_V2");
   //Edge symbol end:'FLOW_V2'

   //=========================================================
   
   //Edge symbol: 'FLOW_V3'
   (function(symbolName) {   
   
   })("FLOW_V3");
   //Edge symbol end:'FLOW_V3'

   //=========================================================
   
   //Edge symbol: 'FLOW_H1'
   (function(symbolName) {   
   
   })("FLOW_H1");
   //Edge symbol end:'FLOW_H1'

   //=========================================================
   
   //Edge symbol: 'FLOW_H2'
   (function(symbolName) {   
   
   })("FLOW_H2");
   //Edge symbol end:'FLOW_H2'

   //=========================================================
   
   //Edge symbol: 'FLOW_H3'
   (function(symbolName) {   
   
   })("FLOW_H3");
   //Edge symbol end:'FLOW_H3'

   //=========================================================
   
   //Edge symbol: 'flow_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("flow_movie");
   //Edge symbol end:'flow_movie'

   //=========================================================
   
   //Edge symbol: 'PEDAL_ACCEL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 558, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("FLOW_V1").getSymbol("flow_movie").play();
         sym.getComposition().getStage().getSymbol("FLOW_V2").getSymbol("flow_movie").play();
         sym.getComposition().getStage().getSymbol("FLOW_V3").getSymbol("flow_movie").play();
         sym.getComposition().getStage().getSymbol("FLOW_H1").getSymbol("flow_movie").play();
         sym.getComposition().getStage().getSymbol("FLOW_H2").getSymbol("flow_movie").play();
         sym.getComposition().getStage().getSymbol("FLOW_H3").getSymbol("flow_movie").play();
         sym.getComposition().getStage().getSymbol("ETC").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1133, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("FLOW_V1").getSymbol("flow_movie").stop();
         sym.getComposition().getStage().getSymbol("FLOW_V2").getSymbol("flow_movie").stop();
         sym.getComposition().getStage().getSymbol("FLOW_V3").getSymbol("flow_movie").stop();
         sym.getComposition().getStage().getSymbol("FLOW_H1").getSymbol("flow_movie").stop();
         sym.getComposition().getStage().getSymbol("FLOW_H2").getSymbol("flow_movie").stop();
         sym.getComposition().getStage().getSymbol("FLOW_H3").getSymbol("flow_movie").stop();
         sym.getComposition().getStage().getSymbol("ETC").stop(0);

      });
      //Edge binding end

   })("PEDAL_ACCEL");
   //Edge symbol end:'PEDAL_ACCEL'

})(jQuery, AdobeEdge, "EDGE-20022076");