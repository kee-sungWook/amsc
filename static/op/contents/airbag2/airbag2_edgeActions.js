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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2167, function(sym, e) {
         sym.getSymbol("Mc_leftLine").stop();
         sym.getSymbol("Mc_rightLine").stop();
         sym.getSymbol("Mc_roadLamp").stop();
         sym.getSymbol("Mc_glass").play(0);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${replayBtn}", "mousedown", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("Mc_glass").stop(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Mc_glass'
   (function(symbolName) {   
   
   })("Mc_glass");
   //Edge symbol end:'Mc_glass'

   //=========================================================
   
   //Edge symbol: 'Mc_leftLine'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 867, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("Mc_leftLine");
   //Edge symbol end:'Mc_leftLine'

   //=========================================================
   
   //Edge symbol: 'Mc_roadLamp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Mc_roadLamp");
   //Edge symbol end:'Mc_roadLamp'

   //=========================================================
   
   //Edge symbol: 'Mc_rightLine'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("Mc_rightLine");
   //Edge symbol end:'Mc_rightLine'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-27681480");