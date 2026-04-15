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
      
      
      
       
      
  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5867, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'CAR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CAR");
   //Edge symbol end:'CAR'

   //=========================================================
   
   //Edge symbol: 'CAR_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CAR_FRONT");
   //Edge symbol end:'CAR_FRONT'

   //=========================================================
   
   //Edge symbol: 'E_BLINK'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("E_BLINK");
   //Edge symbol end:'E_BLINK'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6635557");