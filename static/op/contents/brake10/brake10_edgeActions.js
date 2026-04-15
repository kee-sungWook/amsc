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
   
   //Edge symbol: 'HAND_STICK'
   (function(symbolName) {   
   
   })("HAND_STICK");
   //Edge symbol end:'HAND_STICK'

   //=========================================================
   
   //Edge symbol: 'RED_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("RED_CLIP");
   //Edge symbol end:'RED_CLIP'

   //=========================================================
   
   //Edge symbol: 'CAR_CLIP'
   (function(symbolName) {   
   
   })("CAR_CLIP");
   //Edge symbol end:'CAR_CLIP'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6737748");