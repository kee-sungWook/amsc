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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'small_SPRING'
   (function(symbolName) {   
   
   })("small_SPRING");
   //Edge symbol end:'small_SPRING'

   //=========================================================
   
   //Edge symbol: 'SPRING'
   (function(symbolName) {   
   
   })("SPRING");
   //Edge symbol end:'SPRING'

   //=========================================================
   
   //Edge symbol: 'HYDROBAG'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("HYDROBAG");
   //Edge symbol end:'HYDROBAG'

})(jQuery, AdobeEdge, "EDGE-22294632");