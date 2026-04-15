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
      
      
      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseover", function(sym, e) {
         sym.getSymbol("btn1").stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseout", function(sym, e) {
         sym.getSymbol("btn1").stop("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "click", function(sym, e) {
         window.open("sub1/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "click", function(sym, e) {
         window.open("sub2/mc.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseout", function(sym, e) {
         sym.getSymbol("btn2").stop("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseover", function(sym, e) {
         sym.getSymbol("btn2").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "click", function(sym, e) {
         window.open("sub3/mc.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseout", function(sym, e) {
         sym.getSymbol("btn3").stop("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseover", function(sym, e) {
         sym.getSymbol("btn3").stop("over");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         window.parent.nowMode = "main";

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn1'
   (function(symbolName) {   
   
   })("btn1");
   //Edge symbol end:'btn1'

   //=========================================================
   
   //Edge symbol: 'btn2'
   (function(symbolName) {   
   
   })("btn2");
   //Edge symbol end:'btn2'

   //=========================================================
   
   //Edge symbol: 'btn3'
   (function(symbolName) {   
   
   })("btn3");
   //Edge symbol end:'btn3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1039014998");