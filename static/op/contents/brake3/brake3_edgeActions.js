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



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.getSymbol("PATTERN").stop("st");
         sym.getSymbol("WHEEL").stop("st");
         sym.getSymbol("ROTATOR").stop("st");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.getSymbol("PATTERN").play(0);
         sym.getSymbol("WHEEL").play(0);
         sym.getSymbol("ROTATOR").play(0);

      });
      //Edge binding end

      

      
       
      
  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("PATTERN").stop("st");
         sym.getSymbol("WHEEL").stop("st");
         sym.getSymbol("ROTATOR").stop("st");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.getSymbol("PATTERN").play(0);
         sym.getSymbol("WHEEL").play(0);
         sym.getSymbol("ROTATOR").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getSymbol("PATTERN").stop("st");
         sym.getSymbol("WHEEL").stop("st");
         sym.getSymbol("ROTATOR").stop("st");
         sym.play(0);

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'WHEEL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL");
   //Edge symbol end:'WHEEL'

   //=========================================================
   
   //Edge symbol: 'ROTATOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("ROTATOR");
   //Edge symbol end:'ROTATOR'

   //=========================================================
   
   //Edge symbol: 'PATTERN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 167, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("PATTERN");
   //Edge symbol end:'PATTERN'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1417590484088");