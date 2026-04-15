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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2867, function(sym, e) {
         sym.getSymbol("MODULE").play("signal");
         sym.getSymbol("SIGN").stop("front");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4986, function(sym, e) {
         sym.getSymbol("MODULE").stop("normal");
         sym.getSymbol("SIGN").stop("normal");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6782, function(sym, e) {
         sym.getSymbol("MODULE").play("signal");
         sym.getSymbol("SIGN").stop("rear");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8775, function(sym, e) {
         sym.getSymbol("MODULE").stop("normal");
         sym.getSymbol("SIGN").stop("normal");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9155, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'SIGNAL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 667, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL");
   //Edge symbol end:'SIGNAL'

   //=========================================================
   
   //Edge symbol: 'MODULE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("signal");

      });
      //Edge binding end

   })("MODULE");
   //Edge symbol end:'MODULE'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_M1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_M1");
   //Edge symbol end:'SIGNAL_FLOW_M1'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_M2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_M2");
   //Edge symbol end:'SIGNAL_FLOW_M2'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_M3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_M3");
   //Edge symbol end:'SIGNAL_FLOW_M3'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_F1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_F1");
   //Edge symbol end:'SIGNAL_FLOW_F1'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_F2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_F2");
   //Edge symbol end:'SIGNAL_FLOW_F2'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_F3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_F3");
   //Edge symbol end:'SIGNAL_FLOW_F3'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_F4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_F4");
   //Edge symbol end:'SIGNAL_FLOW_F4'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_F5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_F5");
   //Edge symbol end:'SIGNAL_FLOW_F5'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_F6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_F6");
   //Edge symbol end:'SIGNAL_FLOW_F6'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_B1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_B1");
   //Edge symbol end:'SIGNAL_FLOW_B1'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_B2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_B2");
   //Edge symbol end:'SIGNAL_FLOW_B2'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_B3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_B3");
   //Edge symbol end:'SIGNAL_FLOW_B3'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_B4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_B4");
   //Edge symbol end:'SIGNAL_FLOW_B4'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_B5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_B5");
   //Edge symbol end:'SIGNAL_FLOW_B5'

   //=========================================================
   
   //Edge symbol: 'SIGNAL_FLOW_B6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SIGNAL_FLOW_B6");
   //Edge symbol end:'SIGNAL_FLOW_B6'

   //=========================================================
   
   //Edge symbol: 'SIGN'
   (function(symbolName) {   
   
   })("SIGN");
   //Edge symbol end:'SIGN'

})(jQuery, AdobeEdge, "EDGE-19782588");