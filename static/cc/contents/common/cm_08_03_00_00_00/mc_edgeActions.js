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
   
   //Edge symbol: 'POWER_PUMP_LINE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("POWER_PUMP_LINE");
   //Edge symbol end:'POWER_PUMP_LINE'

   //=========================================================
   
   //Edge symbol: 'EQUIP_LIGHT1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("EQUIP_LIGHT1");
   //Edge symbol end:'EQUIP_LIGHT1'

   //=========================================================
   
   //Edge symbol: 'EQUIP_LIGHT2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("EQUIP_LIGHT2");
   //Edge symbol end:'EQUIP_LIGHT2'

   //=========================================================
   
   //Edge symbol: 'EQUIP_LIGHT3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("EQUIP_LIGHT3");
   //Edge symbol end:'EQUIP_LIGHT3'

   //=========================================================
   
   //Edge symbol: 'EQUIPMENT'
   (function(symbolName) {   
   
   })("EQUIPMENT");
   //Edge symbol end:'EQUIPMENT'

   //=========================================================
   
   //Edge symbol: 'PUBLIC_LINE_IN'
   (function(symbolName) {   
   
   })("PUBLIC_LINE_IN");
   //Edge symbol end:'PUBLIC_LINE_IN'

   //=========================================================
   
   //Edge symbol: 'EQUIP_LINE1_IN'
   (function(symbolName) {   
   
   })("EQUIP_LINE1_IN");
   //Edge symbol end:'EQUIP_LINE1_IN'

   //=========================================================
   
   //Edge symbol: 'EQUIP_LINE2_IN'
   (function(symbolName) {   
   
   })("EQUIP_LINE2_IN");
   //Edge symbol end:'EQUIP_LINE2_IN'

   //=========================================================
   
   //Edge symbol: 'STEERING'
   (function(symbolName) {   
   
   })("STEERING");
   //Edge symbol end:'STEERING'

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

})(jQuery, AdobeEdge, "EDGE-3592191");