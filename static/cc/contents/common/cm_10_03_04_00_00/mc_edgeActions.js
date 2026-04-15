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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_rewind_btn}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'LINE1_IN'
   (function(symbolName) {   
   
      

   })("LINE1_IN");
   //Edge symbol end:'LINE1_IN'

   //=========================================================
   
   //Edge symbol: 'LINE2_IN'
   (function(symbolName) {   
   
      

   })("LINE2_IN");
   //Edge symbol end:'LINE2_IN'

   //=========================================================
   
   //Edge symbol: 'LINE3_IN'
   (function(symbolName) {   
   
      

   })("LINE3_IN");
   //Edge symbol end:'LINE3_IN'

   //=========================================================
   
   //Edge symbol: 'LINE4_IN'
   (function(symbolName) {   
   
      

   })("LINE4_IN");
   //Edge symbol end:'LINE4_IN'

   //=========================================================
   
   //Edge symbol: 'POLLUTION3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("POLLUTION3");
   //Edge symbol end:'POLLUTION3'

   //=========================================================
   
   //Edge symbol: 'POLLUTION2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("POLLUTION2");
   //Edge symbol end:'POLLUTION2'

   //=========================================================
   
   //Edge symbol: 'POLLUTION1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 733, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("POLLUTION1");
   //Edge symbol end:'POLLUTION1'

   //=========================================================
   
   //Edge symbol: 'BUCKET_LIQUID_FLOW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("BUCKET_LIQUID_FLOW");
   //Edge symbol end:'BUCKET_LIQUID_FLOW'

   //=========================================================
   
   //Edge symbol: 'BOTTLEOIL_FLOW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flow");

      });
      //Edge binding end

   })("BOTTLEOIL_FLOW");
   //Edge symbol end:'BOTTLEOIL_FLOW'

})(jQuery, AdobeEdge, "EDGE-19734490");