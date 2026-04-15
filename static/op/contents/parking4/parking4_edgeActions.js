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
   
   //Edge symbol: 'GEAR_SCENE'
   (function(symbolName) {   
   
   })("GEAR_SCENE");
   //Edge symbol end:'GEAR_SCENE'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_LIGHT'
   (function(symbolName) {   
   
   })("SIGNAL_LIGHT");
   //Edge symbol end:'SIGNAL_LIGHT'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_OVAL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 666, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_OVAL");
   //Edge symbol end:'SIGNAL_OVAL'

   //=========================================================
   
   //Edge symbol: 'CAR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CAR");
   //Edge symbol end:'CAR'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1903505");