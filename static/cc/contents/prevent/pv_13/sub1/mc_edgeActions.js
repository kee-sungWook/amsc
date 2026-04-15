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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3875, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         window.parent.nowMode = "sub";

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mamoMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42, function(sym, e) {
         sym.getSymbol("carAxle3").getSymbol("tireMovie1").play();
         sym.getSymbol("carAxle3").getSymbol("tireMovie2").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 292, function(sym, e) {
         sym.getSymbol("carAxle3").getSymbol("tireMovie1").stop();
         sym.getSymbol("carAxle3").getSymbol("tireMovie2").stop();

      });
      //Edge binding end

   })("mamoMovie");
   //Edge symbol end:'mamoMovie'

   //=========================================================
   
   //Edge symbol: 'tireMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 83, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("tireMovie");
   //Edge symbol end:'tireMovie'

   //=========================================================
   
   //Edge symbol: 'carAxle'
   (function(symbolName) {   
   
   })("carAxle");
   //Edge symbol end:'carAxle'

   //=========================================================
   
   //Edge symbol: 'mamoMovie_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42, function(sym, e) {
         sym.getSymbol("carAxle3").getSymbol("tireMovie1").play();
         sym.getSymbol("carAxle3").getSymbol("tireMovie2").play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 292, function(sym, e) {
         sym.getSymbol("carAxle3").getSymbol("tireMovie1").stop();
         sym.getSymbol("carAxle3").getSymbol("tireMovie2").stop();

      });
         //Edge binding end

      })("normalMovie");
   //Edge symbol end:'normalMovie'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-73065678");