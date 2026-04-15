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
         window.open("../mc.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseover", function(sym, e) {
         sym.getSymbol("btn1").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseout", function(sym, e) {
         sym.getSymbol("btn1").stop("normal");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn1");
   //Edge symbol end:'btn1'

   //=========================================================
   
   //Edge symbol: 'ENG'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1800, function(sym, e) {
         sym.getSymbol("SPARK_FIRE").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("ENG");
   //Edge symbol end:'ENG'

   //=========================================================
   
   //Edge symbol: 'CRANK_PISTON'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here// play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("CRANK_PISTON");
   //Edge symbol end:'CRANK_PISTON'

   //=========================================================
   
   //Edge symbol: 'BOMB'
   (function(symbolName) {   
   
   })("BOMB");
   //Edge symbol end:'BOMB'

   //=========================================================
   
   //Edge symbol: 'SPARK_FIRE'
   (function(symbolName) {   
   
   })("SPARK_FIRE");
   //Edge symbol end:'SPARK_FIRE'

   //=========================================================
   
   //Edge symbol: 'flowMovie'
   (function(symbolName) {   
   
   })("flowMovie");
   //Edge symbol end:'flowMovie'

   //=========================================================
   
   //Edge symbol: 'arrowMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0)

      });
      //Edge binding end

   })("arrowMovie");
   //Edge symbol end:'arrowMovie'

   //=========================================================
   
   //Edge symbol: 'inWindMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inWindMovie");
   //Edge symbol end:'inWindMovie'

   //=========================================================
   
   //Edge symbol: 'wing1Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("wing1Movie");
   //Edge symbol end:'wing1Movie'

   //=========================================================
   
   //Edge symbol: 'wing2Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("gogo");

      });
      //Edge binding end

   })("wing2Movie");
   //Edge symbol end:'wing2Movie'

   //=========================================================
   
   //Edge symbol: 'inFlowMovie0'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("inFlowMovie0");
   //Edge symbol end:'inFlowMovie0'

   //=========================================================
   
   //Edge symbol: 'inFlow1Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inFlow1Movie");
   //Edge symbol end:'inFlow1Movie'

   //=========================================================
   
   //Edge symbol: 'inFlow2Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inFlow2Movie");
   //Edge symbol end:'inFlow2Movie'

   //=========================================================
   
   //Edge symbol: 'inFlow3Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inFlow3Movie");
   //Edge symbol end:'inFlow3Movie'

   //=========================================================
   
   //Edge symbol: 'inFlow4Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inFlow4Movie");
   //Edge symbol end:'inFlow4Movie'

   //=========================================================
   
   //Edge symbol: 'inFlow5Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inFlow5Movie");
   //Edge symbol end:'inFlow5Movie'

   //=========================================================
   
   //Edge symbol: 'inFlowSide1Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inFlowSide1Movie");
   //Edge symbol end:'inFlowSide1Movie'

   //=========================================================
   
   //Edge symbol: 'inFlowSide2Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inFlowSide2Movie");
   //Edge symbol end:'inFlowSide2Movie'

   //=========================================================
   
   //Edge symbol: 'inFlowSide3Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inFlowSide3Movie");
   //Edge symbol end:'inFlowSide3Movie'

   //=========================================================
   
   //Edge symbol: 'outFlow1Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("outFlow1Movie");
   //Edge symbol end:'outFlow1Movie'

   //=========================================================
   
   //Edge symbol: 'outFlow2Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("outFlow2Movie");
   //Edge symbol end:'outFlow2Movie'

   //=========================================================
   
   //Edge symbol: 'outFlow3Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("outFlow3Movie");
   //Edge symbol end:'outFlow3Movie'

   //=========================================================
   
   //Edge symbol: 'outFlow4Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("outFlow4Movie");
   //Edge symbol end:'outFlow4Movie'

   //=========================================================
   
   //Edge symbol: 'outFlowSide1Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 235, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("outFlowSide1Movie");
   //Edge symbol end:'outFlowSide1Movie'

   //=========================================================
   
   //Edge symbol: 'outFlowSide2Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("outFlowSide2Movie");
   //Edge symbol end:'outFlowSide2Movie'

   //=========================================================
   
   //Edge symbol: 'outFlowSide3Movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("outFlowSide3Movie");
   //Edge symbol end:'outFlowSide3Movie'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4052948280");