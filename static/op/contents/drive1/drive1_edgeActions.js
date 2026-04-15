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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'AWHEEL1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("AWHEEL1");
   //Edge symbol end:'AWHEEL1'

   //=========================================================
   
   //Edge symbol: 'SCENE1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.getSymbol("AWHEEL1_1").stop();
         sym.getSymbol("AWHEEL1_2").stop();

      });
      //Edge binding end

   })("SCENE1");
   //Edge symbol end:'SCENE1'

   //=========================================================
   
   //Edge symbol: 'SUSP_BODY_POINT_BLINK'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 375, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("SUSP_BODY_POINT_BLINK");
   //Edge symbol end:'SUSP_BODY_POINT_BLINK'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_INCAR'
   (function(symbolName) {   
   
   })("SIGNAL_INCAR");
   //Edge symbol end:'SIGNAL_INCAR'

   //=========================================================
   
   //Edge symbol: 'AWHEEL2'
   (function(symbolName) {   
   
   })("AWHEEL2");
   //Edge symbol end:'AWHEEL2'

   //=========================================================
   
   //Edge symbol: 'SCEAN2'
   (function(symbolName) {   
   
   })("SCEAN2");
   //Edge symbol end:'SCEAN2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-31142096");