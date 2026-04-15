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
      
      
      
       
      
  
      Symbol.bindElementAction(compId, symbolName, "${replayBtn}", "mousedown", function(sym, e) {
         sym.play(0);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'PEDAL'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1900, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4067, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("PEDAL");
   //Edge symbol end:'PEDAL'

   //=========================================================
   
   //Edge symbol: 'MEMO'
   (function(symbolName) {   
   
   })("MEMO");
   //Edge symbol end:'MEMO'

   //=========================================================
   
   //Edge symbol: 'CAR'
   (function(symbolName) {   
   
   })("CAR");
   //Edge symbol end:'CAR'

   //=========================================================
   
   //Edge symbol: 'E_GEAR2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("E_GEAR2");
   //Edge symbol end:'E_GEAR2'

   //=========================================================
   
   //Edge symbol: 'E_GEAR1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("E_GEAR1");
   //Edge symbol end:'E_GEAR1'

   //=========================================================
   
   //Edge symbol: 'E_LINE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 433, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("E_LINE");
   //Edge symbol end:'E_LINE'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-22344208");