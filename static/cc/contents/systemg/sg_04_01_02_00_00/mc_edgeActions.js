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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7467, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'PARTS1'
   (function(symbolName) {   
   
   })("PARTS1");
   //Edge symbol end:'PARTS1'

   //=========================================================
   
   //Edge symbol: 'PARTS2'
   (function(symbolName) {   
   
   })("PARTS2");
   //Edge symbol end:'PARTS2'

   //=========================================================
   
   //Edge symbol: 'PARTS3'
   (function(symbolName) {   
   
   })("PARTS3");
   //Edge symbol end:'PARTS3'

   //=========================================================
   
   //Edge symbol: 'PARTS4'
   (function(symbolName) {   
   
   })("PARTS4");
   //Edge symbol end:'PARTS4'

})(jQuery, AdobeEdge, "EDGE-13410471");