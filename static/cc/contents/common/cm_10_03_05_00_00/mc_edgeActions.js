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
   
   //Edge symbol: 'LINE4_IN'
   (function(symbolName) {   
   
   })("LINE4_IN");
   //Edge symbol end:'LINE4_IN'

   //=========================================================
   
   //Edge symbol: 'LINE0_IN'
   (function(symbolName) {   
   
   })("LINE0_IN");
   //Edge symbol end:'LINE0_IN'

   //=========================================================
   
   //Edge symbol: 'EQUIPMENT'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("EQUIPMENT");
   //Edge symbol end:'EQUIPMENT'

   //=========================================================
   
   //Edge symbol: 'EQUIPMENT_LIGHT3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 433, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("EQUIPMENT_LIGHT3");
   //Edge symbol end:'EQUIPMENT_LIGHT3'

   //=========================================================
   
   //Edge symbol: 'EQUIPMENT_LIGHT1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 467, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("EQUIPMENT_LIGHT1");
   //Edge symbol end:'EQUIPMENT_LIGHT1'

   //=========================================================
   
   //Edge symbol: 'EQUIPMENT_LIGHT2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 467, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("EQUIPMENT_LIGHT2");
   //Edge symbol end:'EQUIPMENT_LIGHT2'

})(jQuery, AdobeEdge, "EDGE-19734490");