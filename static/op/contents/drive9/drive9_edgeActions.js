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
   
   //Edge symbol: 'WHEEL_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 133, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL_CLIP");
   //Edge symbol end:'WHEEL_CLIP'

   //=========================================================
   
   //Edge symbol: 'CAR_CLIP'
   (function(symbolName) {   
   
      

      

   })("CAR_CLIP");
   //Edge symbol end:'CAR_CLIP'

   //=========================================================
   
   //Edge symbol: 'ROAD_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("ROAD_CLIP");
   //Edge symbol end:'ROAD_CLIP'

   //=========================================================
   
   //Edge symbol: 'LAMP_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 367, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("LAMP_CLIP");
   //Edge symbol end:'LAMP_CLIP'

   //=========================================================
   
   //Edge symbol: 'LAMP'
   (function(symbolName) {   
   
   })("LAMP");
   //Edge symbol end:'LAMP'

   //=========================================================
   
   //Edge symbol: 'SIGNAL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1498, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("SIGNAL");
   //Edge symbol end:'SIGNAL'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2302316");