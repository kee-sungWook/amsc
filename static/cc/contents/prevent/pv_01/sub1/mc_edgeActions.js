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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 958, function(sym, e) {
         sym.getComposition().getStage().getSymbol("engine1").play(0);
         sym.getComposition().getStage().getSymbol("engine2").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         window.parent.nowMode = "sub";
         sym.getComposition().getStage().getSymbol("engine1").getSymbol("head").stop("step0");
         sym.getComposition().getStage().getSymbol("engine1").getSymbol("gasket").stop("step0");
         sym.getComposition().getStage().getSymbol("engine1").getSymbol("piston").stop("step0");
         sym.getComposition().getStage().getSymbol("engine1").getSymbol("body").stop("step0");
         
         sym.getComposition().getStage().getSymbol("engine2").getSymbol("head").stop("step4");
         sym.getComposition().getStage().getSymbol("engine2").getSymbol("gasket").stop("step4");
         sym.getComposition().getStage().getSymbol("engine2").getSymbol("piston").stop("step4");
         sym.getComposition().getStage().getSymbol("engine2").getSymbol("body").stop("step4");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sideLight'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 667, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sideLight");
   //Edge symbol end:'sideLight'

   //=========================================================
   
   //Edge symbol: 'engine'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("cap").$("topLight").show();
         sym.getSymbol("head").$("sideLight").show();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getSymbol("cap").$("topLight").hide();
         sym.getSymbol("head").$("sideLight").hide();

      });
      //Edge binding end

   })("engine");
   //Edge symbol end:'engine'

   //=========================================================
   
   //Edge symbol: 'topLight'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 567, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("topLight");
   //Edge symbol end:'topLight'

   //=========================================================
   
   //Edge symbol: 'piston'
   (function(symbolName) {   
   
   })("piston");
   //Edge symbol end:'piston'

   //=========================================================
   
   //Edge symbol: 'cam'
   (function(symbolName) {   
   
   })("cam");
   //Edge symbol end:'cam'

   //=========================================================
   
   //Edge symbol: 'head'
   (function(symbolName) {   
   
   })("head");
   //Edge symbol end:'head'

   //=========================================================
   
   //Edge symbol: 'cap'
   (function(symbolName) {   
   
   })("cap");
   //Edge symbol end:'cap'

   //=========================================================
   
   //Edge symbol: 'body'
   (function(symbolName) {   
   
   })("body");
   //Edge symbol end:'body'

   //=========================================================
   
   //Edge symbol: 'gasket'
   (function(symbolName) {   
   
   })("gasket");
   //Edge symbol end:'gasket'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2873517");