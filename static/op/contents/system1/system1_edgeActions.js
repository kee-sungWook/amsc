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
   
   //Edge symbol: 'LAMP_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("LAMP_CLIP");
   //Edge symbol end:'LAMP_CLIP'

   //=========================================================
   
   //Edge symbol: 'LINE_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("LINE_CLIP");
   //Edge symbol end:'LINE_CLIP'

   //=========================================================
   
   //Edge symbol: 'CAR'
   (function(symbolName) {   
   
      

   })("CAR");
   //Edge symbol end:'CAR'

   //=========================================================
   
   //Edge symbol: 'WHEEL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 133, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL");
   //Edge symbol end:'WHEEL'

   //=========================================================
   
   //Edge symbol: 'PEDAL'
   (function(symbolName) {   
   
      

   })("PEDAL");
   //Edge symbol end:'PEDAL'

   //=========================================================
   
   //Edge symbol: 'GAGE'
   (function(symbolName) {   
   
      

   })("GAGE");
   //Edge symbol end:'GAGE'

   //=========================================================
   
   //Edge symbol: 'TXT_ON'
   (function(symbolName) {   
   
      

   })("TXT_ON");
   //Edge symbol end:'TXT_ON'

   //=========================================================
   
   //Edge symbol: 'TCU_LINE_CLIP'
   (function(symbolName) {   
   
   })("TCU_LINE_CLIP");
   //Edge symbol end:'TCU_LINE_CLIP'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-19188744");