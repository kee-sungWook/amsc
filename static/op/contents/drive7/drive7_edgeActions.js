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
      
      
      
       
      
  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 867, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3533, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'SIGNAL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 767, function(sym, e) {
         sym.play("go1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("go1");

      });
      //Edge binding end

   })("SIGNAL");
   //Edge symbol end:'SIGNAL'

   //=========================================================
   
   //Edge symbol: 'RED_LINE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 367, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("RED_LINE");
   //Edge symbol end:'RED_LINE'

   //=========================================================
   
   //Edge symbol: 'M3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 367, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("M3");
   //Edge symbol end:'M3'

   //=========================================================
   
   //Edge symbol: 'M2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 467, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("M2");
   //Edge symbol end:'M2'

   //=========================================================
   
   //Edge symbol: 'M1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 467, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("M1");
   //Edge symbol end:'M1'

   //=========================================================
   
   //Edge symbol: 'CAR'
   (function(symbolName) {   
   
   })("CAR");
   //Edge symbol end:'CAR'

   //=========================================================
   
   //Edge symbol: 'MEMOS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getComposition().getStage().play();

      });
      //Edge binding end

   })("MEMOS");
   //Edge symbol end:'MEMOS'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3465292");