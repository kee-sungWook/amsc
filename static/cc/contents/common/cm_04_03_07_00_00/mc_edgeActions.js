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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("M_CYLINDER").stop(0);
         
         sym.getSymbol("EQUIP_LINE1_IN").stop(0);
         sym.getSymbol("EQUIP_LINE2_IN").stop(0);
         
         sym.getSymbol("BRAKE_LINE_IN1_1").stop(0);
         sym.getSymbol("BRAKE_LINE_IN1_2").stop(0);
         sym.getSymbol("BRAKE_LINE_IN2").stop(0);
         sym.getSymbol("BRAKE_LINE_IN3").stop(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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
   
   //Edge symbol: 'M_CYLINDER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("M_CYLINDER_TOP_HEAD").stop(0);

      });
      //Edge binding end

   })("M_CYLINDER");
   //Edge symbol end:'M_CYLINDER'

   //=========================================================
   
   //Edge symbol: 'M_CYLINDER_TOP_HEAD'
   (function(symbolName) {   
   
   })("M_CYLINDER_TOP_HEAD");
   //Edge symbol end:'M_CYLINDER_TOP_HEAD'

   //=========================================================
   
   //Edge symbol: 'BRAKE_LINE_IN1_1'
   (function(symbolName) {   
   
   })("BRAKE_LINE_IN1_1");
   //Edge symbol end:'BRAKE_LINE_IN1_1'

   //=========================================================
   
   //Edge symbol: 'BRAKE_LINE_IN1_2'
   (function(symbolName) {   
   
   })("BRAKE_LINE_IN1_2");
   //Edge symbol end:'BRAKE_LINE_IN1_2'

   //=========================================================
   
   //Edge symbol: 'BRAKE_LINE_IN2'
   (function(symbolName) {   
   
   })("BRAKE_LINE_IN2");
   //Edge symbol end:'BRAKE_LINE_IN2'

   //=========================================================
   
   //Edge symbol: 'BRAKE_LINE_IN3'
   (function(symbolName) {   
   
   })("BRAKE_LINE_IN3");
   //Edge symbol end:'BRAKE_LINE_IN3'

   //=========================================================
   
   //Edge symbol: 'EQUIPMENT_LIGHT1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 367, function(sym, e) {
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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 367, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("EQUIPMENT_LIGHT2");
   //Edge symbol end:'EQUIPMENT_LIGHT2'

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
   
   //Edge symbol: 'EQUIPMENT'
   (function(symbolName) {   
   
   })("EQUIPMENT");
   //Edge symbol end:'EQUIPMENT'

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

})(jQuery, AdobeEdge, "EDGE-4261929");