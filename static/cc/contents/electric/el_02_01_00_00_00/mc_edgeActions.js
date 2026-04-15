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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getSymbol("INPARTS").getSymbol("INPARTS1").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS2").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS3").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS4").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS5").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS6").stop(0);
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS2").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS3").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS5").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWIN1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT6").stop(0);
         
         
         sym.getSymbol("INPARTS").getSymbol("INPARTS1").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWIN1").play("gogo");
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").play("gogo");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getSymbol("INPARTS").getSymbol("INPARTS1").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS2").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS3").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS4").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS5").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS6").stop(0);
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS2").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS3").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS5").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWIN1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT6").stop(0);
         
         
         sym.getSymbol("INPARTS").getSymbol("INPARTS2").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWIN2").play("gogo");
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").play("gogo");
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").play("gogo");
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS6").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT6").play("gogo");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("M1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getSymbol("INPARTS").getSymbol("INPARTS1").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS2").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS3").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS4").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS5").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS6").stop(0);
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS2").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS3").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS5").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWIN1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT6").stop(0);
         
         
         sym.getSymbol("INPARTS").getSymbol("INPARTS3").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWIN3").play("gogo");
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").play("gogo");
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS3").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT3").play("gogo");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.getSymbol("INPARTS").getSymbol("INPARTS1").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS2").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS3").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS4").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS5").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS6").stop(0);
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS2").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS3").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS5").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWIN1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT6").stop(0);
         
         
         sym.getSymbol("INPARTS").getSymbol("INPARTS4").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWIN4").play("gogo");
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").play("gogo");
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS2").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT2").play("gogo");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.getSymbol("INPARTS").getSymbol("INPARTS1").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS2").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS3").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS4").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS5").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS6").stop(0);
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS2").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS3").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS5").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWIN1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT6").stop(0);
         
         
         sym.getSymbol("INPARTS").getSymbol("INPARTS5").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWIN5").play("gogo");
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS2").play("gogo");
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS3").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT2").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT3").play("gogo");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.getSymbol("INPARTS").getSymbol("INPARTS1").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS2").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS3").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS4").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS5").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS6").stop(0);
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS2").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS3").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS5").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWIN1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT6").stop(0);
         
         
         sym.getSymbol("INPARTS").getSymbol("INPARTS6").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWIN6").play("gogo");
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").play("gogo");
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS5").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").play("gogo");
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT5").play("gogo");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("INPARTS").getSymbol("INPARTS1").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS2").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS3").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS4").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS5").stop(0);
         sym.getSymbol("INPARTS").getSymbol("INPARTS6").stop(0);
         
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS1").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS2").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS3").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS4").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS5").stop(0);
         sym.getSymbol("OUTPARTS").getSymbol("OUTPARTS6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWIN1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWIN6").stop(0);
         
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT1").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT2").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT3").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT4").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT5").stop(0);
         sym.getSymbol("FLOWS").getSymbol("FLOWOUT6").stop(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'OUTPARTS'
   (function(symbolName) {   
   
   })("OUTPARTS");
   //Edge symbol end:'OUTPARTS'

   //=========================================================
   
   //Edge symbol: 'OUTPARTS1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("OUTPARTS1");
   //Edge symbol end:'OUTPARTS1'

   //=========================================================
   
   //Edge symbol: 'OUTPARTS2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("OUTPARTS2");
   //Edge symbol end:'OUTPARTS2'

   //=========================================================
   
   //Edge symbol: 'OUTPARTS3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("OUTPARTS3");
   //Edge symbol end:'OUTPARTS3'

   //=========================================================
   
   //Edge symbol: 'OUTPARTS4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("OUTPARTS4");
   //Edge symbol end:'OUTPARTS4'

   //=========================================================
   
   //Edge symbol: 'OUTPARTS5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("OUTPARTS5");
   //Edge symbol end:'OUTPARTS5'

   //=========================================================
   
   //Edge symbol: 'OUTPARTS6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("OUTPARTS6");
   //Edge symbol end:'OUTPARTS6'

   //=========================================================
   
   //Edge symbol: 'INPARTS1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("INPARTS1");
   //Edge symbol end:'INPARTS1'

   //=========================================================
   
   //Edge symbol: 'INPARTS1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("INPARTS2");
   //Edge symbol end:'INPARTS2'

   //=========================================================
   
   //Edge symbol: 'INPARTS2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("INPARTS3");
   //Edge symbol end:'INPARTS3'

   //=========================================================
   
   //Edge symbol: 'INPARTS3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("INPARTS4");
   //Edge symbol end:'INPARTS4'

   //=========================================================
   
   //Edge symbol: 'INPARTS4_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("INPARTS5");
   //Edge symbol end:'INPARTS5'

   //=========================================================
   
   //Edge symbol: 'INPARTS5_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("INPARTS6");
   //Edge symbol end:'INPARTS6'

   //=========================================================
   
   //Edge symbol: 'INPARTS'
   (function(symbolName) {   
   
   })("INPARTS");
   //Edge symbol end:'INPARTS'

   //=========================================================
   
   //Edge symbol: 'FLOW_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("FLOW_MOVE");
   //Edge symbol end:'FLOW_MOVE'

   //=========================================================
   
   //Edge symbol: 'FLOWS'
   (function(symbolName) {   
   
   })("FLOWS");
   //Edge symbol end:'FLOWS'

})(jQuery, AdobeEdge, "EDGE-3795665");