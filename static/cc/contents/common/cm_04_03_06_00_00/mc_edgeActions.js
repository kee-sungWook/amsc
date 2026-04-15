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
         sym.play("rewind");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 667, function(sym, e) {
         sym.getSymbol("BOTTLEOIL_FLOW").stop(0);
         
         sym.getSymbol("M_CYLINDER").stop(0);
         
         sym.getSymbol("BOTTLEOIL_FLOW").stop(0);
         sym.getSymbol("BRAKE_LINE_IN1_1").stop(0);
         sym.getSymbol("BRAKE_LINE_IN1_2").stop(0);
         sym.getSymbol("BRAKE_LINE_IN2").stop(0);
         sym.getSymbol("BRAKE_LINE_IN3").stop(0);
         
         sym.getSymbol("BUCKET_LINE_IN").stop(0);

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1833, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("goPedal");

      });
      //Edge binding end

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

   //=========================================================
   
   //Edge symbol: 'BUCKET_LINE_IN'
   (function(symbolName) {   
   
   })("BUCKET_LINE_IN");
   //Edge symbol end:'BUCKET_LINE_IN'

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

})(jQuery, AdobeEdge, "EDGE-4261929");