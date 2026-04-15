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
      
      
      
       
      
  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'MC1'
   (function(symbolName) {   
   
   })("MC1");
   //Edge symbol end:'MC1'

   //=========================================================
   
   //Edge symbol: 'MC1_1'
   (function(symbolName) {   
   
   })("MC2");
   //Edge symbol end:'MC2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-24554377");