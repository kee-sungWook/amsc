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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1115, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'blue_mov'
   (function(symbolName) {   
   
   })("blue_mov");
   //Edge symbol end:'blue_mov'

   //=========================================================
   
   //Edge symbol: 'red_mov'
   (function(symbolName) {   
   
   })("red_mov");
   //Edge symbol end:'red_mov'

})(jQuery, AdobeEdge, "EDGE-5422256");