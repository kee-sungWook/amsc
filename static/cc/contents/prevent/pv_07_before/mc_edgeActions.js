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
      
      
      Symbol.bindElementAction(compId, symbolName, "${banner}", "click", function(sym, e) {
         window.open("#", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseover", function(sym, e) {
         sym.getSymbol("btn1").stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.getSymbol("btn1").stop("normal");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseover", function(sym, e) {
         sym.getSymbol("btn2").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseout", function(sym, e) {
         sym.getSymbol("btn2").stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseover", function(sym, e) {
         sym.getSymbol("btn3").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseout", function(sym, e) {
         sym.getSymbol("btn3").stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "click", function(sym, e) {
         window.open("sub3/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "click", function(sym, e) {
         window.open("sub2/mc.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "click", function(sym, e) {
         window.open("sub1/mc.html", "_self");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("btn1").stop(0);
         sym.getSymbol("btn2").stop(0);
         sym.getSymbol("btn3").stop(0);

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
   
   //Edge symbol: 'btn'
   (function(symbolName) {   
   
   })("btn");
   //Edge symbol end:'btn'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4041048145");