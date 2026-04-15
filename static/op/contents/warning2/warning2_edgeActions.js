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
   
   //Edge symbol: 'lane_clip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("lane_clip");
   //Edge symbol end:'lane_clip'

   //=========================================================
   
   //Edge symbol: 'lamp_clip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 417, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("lamp_clip");
   //Edge symbol end:'lamp_clip'

   //=========================================================
   
   //Edge symbol: 'GAGE_BAR1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("GAGE_BAR1");
   //Edge symbol end:'GAGE_BAR1'

   //=========================================================
   
   //Edge symbol: 'GAGE_BAR2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("GAGE_BAR2");
   //Edge symbol end:'GAGE_BAR2'

   //=========================================================
   
   //Edge symbol: 'REST'
   (function(symbolName) {   
   
   })("REST");
   //Edge symbol end:'REST'

   //=========================================================
   
   //Edge symbol: 'CONDITION'
   (function(symbolName) {   
   
   })("CONDITION");
   //Edge symbol end:'CONDITION'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-41880290");