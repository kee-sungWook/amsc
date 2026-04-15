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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("blinder_right").hide();
         sym.$("blinder_left").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1583, function(sym, e) {
         sym.$("blinder_right").hide();
         sym.$("blinder_left").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.$("blinder_right").hide();
         sym.$("blinder_left").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         sym.$("blinder_right").show();
         sym.$("blinder_left").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8917, function(sym, e) {
         sym.$("blinder_right").hide();
         sym.$("blinder_left").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
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
   
   //Edge symbol: 'blinder_left'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("blinder_left");
   //Edge symbol end:'blinder_left'

   //=========================================================
   
   //Edge symbol: 'blinder_right'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("blinder_right");
   //Edge symbol end:'blinder_right'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9542839");