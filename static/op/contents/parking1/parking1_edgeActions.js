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
      
      
      
       
      
  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1833, function(sym, e) {
         // insert code here
         sym.getSymbol("P_CAR").getSymbol("SIGNAL1").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3125, function(sym, e) {
         // insert code here
         sym.getSymbol("P_CAR").getSymbol("SIGNAL_SHORT").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4034, function(sym, e) {
         // insert code here
         sym.getSymbol("P_CAR").getSymbol("SIGNAL2").play();
         sym.getSymbol("P_CAR").getSymbol("SIGNAL_SHORT").stop(0);
         sym.getSymbol("P_CAR").getSymbol("SIGNAL_MID").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5583, function(sym, e) {
         sym.getSymbol("P_CAR").getSymbol("SIGNAL2").stop(0);
         sym.getSymbol("P_CAR").getSymbol("SIGNAL_MID").stop(0);
         sym.getSymbol("P_CAR").getSymbol("SIGNAL_LONG").play("gogo");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6833, function(sym, e) {
         sym.getSymbol("P_CAR").getSymbol("SIGNAL1").stop(0);
         sym.getSymbol("P_CAR").getSymbol("SIGNAL_LONG").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${replayBtn}", "mousedown", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'SIGNAL1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL1");
   //Edge symbol end:'SIGNAL1'

   //=========================================================
   
   //Edge symbol: 'P_CAR'
   (function(symbolName) {   
   
   })("P_CAR");
   //Edge symbol end:'P_CAR'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_SHORT'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_SHORT");
   //Edge symbol end:'SIGNAL_SHORT'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_SHORT_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 533, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_MID");
   //Edge symbol end:'SIGNAL_MID'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_MID_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 967, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("SIGNAL_LONG");
   //Edge symbol end:'SIGNAL_LONG'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-14473072");