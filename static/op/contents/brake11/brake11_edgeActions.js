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
      
      
      
       
      
  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'CAR1'
   (function(symbolName) {   
   
   })("CAR1");
   //Edge symbol end:'CAR1'

   //=========================================================
   
   //Edge symbol: 'WHEEL_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL_MOVE");
   //Edge symbol end:'WHEEL_MOVE'

   //=========================================================
   
   //Edge symbol: 'CAR1_1'
   (function(symbolName) {   
   
   })("CAR2");
   //Edge symbol end:'CAR2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20820967");