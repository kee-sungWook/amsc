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
      
      
      Symbol.bindElementAction(compId, symbolName, "${btn1}", "click", function(sym, e) {
         window.open("mamo1/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseover", function(sym, e) {
         sym.getSymbol("btn1").stop("ov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseout", function(sym, e) {
         sym.getSymbol("btn1").stop("nm");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "click", function(sym, e) {
         window.open("mamo2/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseover", function(sym, e) {
         sym.getSymbol("btn2").stop("ov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseout", function(sym, e) {
         sym.getSymbol("btn2").stop("nm");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "click", function(sym, e) {
         window.open("mamo3/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseover", function(sym, e) {
         sym.getSymbol("btn3").stop("ov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseout", function(sym, e) {
         sym.getSymbol("btn3").stop("nm");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn4}", "click", function(sym, e) {
         window.open("mamo4/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn4}", "mouseover", function(sym, e) {
         sym.getSymbol("btn4").stop("ov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn4}", "mouseout", function(sym, e) {
         sym.getSymbol("btn4").stop("nm");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn5}", "click", function(sym, e) {
         window.open("mamo5/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn5}", "mouseover", function(sym, e) {
         sym.getSymbol("btn5").stop("ov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn5}", "mouseout", function(sym, e) {
         sym.getSymbol("btn5").stop("nm");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn6}", "click", function(sym, e) {
         window.open("mamo6/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn6}", "mouseover", function(sym, e) {
         sym.getSymbol("btn6").stop("ov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn6}", "mouseout", function(sym, e) {
         sym.getSymbol("btn6").stop("nm");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn7}", "click", function(sym, e) {
         window.open("mamo7/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn7}", "mouseover", function(sym, e) {
         sym.getSymbol("btn7").stop("ov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn7}", "mouseout", function(sym, e) {
         sym.getSymbol("btn7").stop("nm");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn8}", "click", function(sym, e) {
         window.open("mamo8/mc.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn8}", "mouseover", function(sym, e) {
         sym.getSymbol("btn8").stop("ov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn8}", "mouseout", function(sym, e) {
         sym.getSymbol("btn8").stop("nm");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         window.parent.nowMode = "sub";

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
   
   //Edge symbol: 'btn1_1'
   (function(symbolName) {   
   
   })("btn2");
   //Edge symbol end:'btn2'

   //=========================================================
   
   //Edge symbol: 'btn2_1'
   (function(symbolName) {   
   
   })("btn3");
   //Edge symbol end:'btn3'

   //=========================================================
   
   //Edge symbol: 'btn2_2'
   (function(symbolName) {   
   
   })("btn4");
   //Edge symbol end:'btn4'

   //=========================================================
   
   //Edge symbol: 'btn2_3'
   (function(symbolName) {   
   
   })("btn5");
   //Edge symbol end:'btn5'

   //=========================================================
   
   //Edge symbol: 'btn2_4'
   (function(symbolName) {   
   
   })("btn6");
   //Edge symbol end:'btn6'

   //=========================================================
   
   //Edge symbol: 'btn2_5'
   (function(symbolName) {   
   
   })("btn7");
   //Edge symbol end:'btn7'

   //=========================================================
   
   //Edge symbol: 'btn2_6'
   (function(symbolName) {   
   
   })("btn8");
   //Edge symbol end:'btn8'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-73065678");