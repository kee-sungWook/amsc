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
      
      
      
       
      
  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3667, function(sym, e) {
         sym.stop();
         sym.getSymbol("CAR1").stop();
         sym.getSymbol("CAR2").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5134, function(sym, e) {
         sym.stop();
         sym.getSymbol("CAR1").stop();
         sym.getSymbol("CAR2").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10367, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'TIRE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 233, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("TIRE");
   //Edge symbol end:'TIRE'

   //=========================================================
   
   //Edge symbol: 'CAR2'
   (function(symbolName) {   
   
   })("CAR2");
   //Edge symbol end:'CAR2'

   //=========================================================
   
   //Edge symbol: 'CAR1'
   (function(symbolName) {   
   
   })("CAR1");
   //Edge symbol end:'CAR1'

   //=========================================================
   
   //Edge symbol: 'MBLUE'
   (function(symbolName) {   
   
   })("MBLUE");
   //Edge symbol end:'MBLUE'

   //=========================================================
   
   //Edge symbol: 'B_ARROW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("B_ARROW");
   //Edge symbol end:'B_ARROW'

   //=========================================================
   
   //Edge symbol: 'R_ARROW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("R_ARROW");
   //Edge symbol end:'R_ARROW'

   //=========================================================
   
   //Edge symbol: 'MBLUE_1'
   (function(symbolName) {   
   
   })("MBLUE2");
   //Edge symbol end:'MBLUE2'

   //=========================================================
   
   //Edge symbol: 'MBLUE_1'
   (function(symbolName) {   
   
   })("MRED");
   //Edge symbol end:'MRED'

   //=========================================================
   
   //Edge symbol: 'MRED_1'
   (function(symbolName) {   
   
   })("MRED2");
   //Edge symbol end:'MRED2'

   //=========================================================
   
   //Edge symbol: 'FIRSTVIEW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2333, function(sym, e) {
         sym.getComposition().getStage().play();
         sym.getComposition().getStage().getSymbol("CAR1").play();
         sym.getComposition().getStage().getSymbol("CAR2").play();

      });
      //Edge binding end

   })("FIRSTVIEW");
   //Edge symbol end:'FIRSTVIEW'

   //=========================================================
   
   //Edge symbol: 'SECONDVIEW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2333, function(sym, e) {
         sym.getComposition().getStage().play();
         sym.getComposition().getStage().getSymbol("CAR1").play();
         sym.getComposition().getStage().getSymbol("CAR2").play();

      });
      //Edge binding end

   })("SECONDVIEW");
   //Edge symbol end:'SECONDVIEW'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1296556");