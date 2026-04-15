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
         sym.stop("pic");// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "click", function(sym, e) {
         window.open("../mc.html", "_self");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseover", function(sym, e) {
         sym.getSymbol("btn2").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseout", function(sym, e) {
         sym.getSymbol("btn2").stop("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1_1}", "click", function(sym, e) {
         sym.stop("ani");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1208, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1_1}", "mouseover", function(sym, e) {
         sym.getSymbol("btn1_1").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1_1}", "mouseout", function(sym, e) {
         sym.getSymbol("btn1_1").stop("out");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         window.parent.nowMode = "sub";

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'carClip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getSymbol("carMove").getSymbol("tireMovie1").$("mamoMovie").hide();
         sym.getSymbol("carMove").getSymbol("tireMovie2").$("mamoMovie").hide();
         sym.getSymbol("carMove").play();
         sym.getSymbol("carMove").getSymbol("tireMovie1").play();
         sym.getSymbol("carMove").getSymbol("tireMovie2").play();
         sym.getSymbol("carMove").getSymbol("tireMovie1").getSymbol("treadMovie").play();
         sym.getSymbol("carMove").getSymbol("tireMovie2").getSymbol("treadMovie").play();
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3167, function(sym, e) {
         sym.getSymbol("carMove").stop();
         sym.getSymbol("carMove").getSymbol("tireMovie1").stop();
         sym.getSymbol("carMove").getSymbol("tireMovie2").stop();
         sym.getSymbol("carMove").getSymbol("tireMovie1").getSymbol("treadMovie").stop();
         sym.getSymbol("carMove").getSymbol("tireMovie2").getSymbol("treadMovie").stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.getSymbol("carMove").getSymbol("tireMovie1").$("mamoMovie").show();
         sym.getSymbol("carMove").getSymbol("tireMovie2").$("mamoMovie").show();

      });
      //Edge binding end

   })("carClip");
   //Edge symbol end:'carClip'

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
   
   //Edge symbol: 'errMovie1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 583, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("errMovie1");
   //Edge symbol end:'errMovie1'

   //=========================================================
   
   //Edge symbol: 'errMovie2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 583, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("errMovie2");
   //Edge symbol end:'errMovie2'

   //=========================================================
   
   //Edge symbol: 'treadMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 125, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("treadMovie");
   //Edge symbol end:'treadMovie'

   //=========================================================
   
   //Edge symbol: 'airMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 583, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("airMovie");
   //Edge symbol end:'airMovie'

   //=========================================================
   
   //Edge symbol: 'tireMovie'
   (function(symbolName) {   
   
   })("tireMovie");
   //Edge symbol end:'tireMovie'

   //=========================================================
   
   //Edge symbol: 'carMove'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("carMove");
   //Edge symbol end:'carMove'

   //=========================================================
   
   //Edge symbol: 'btn1_1'
   (function(symbolName) {   
   
      })("btn1_1");
   //Edge symbol end:'btn1_1'

   //=========================================================
   
   //Edge symbol: 'picMovie'
   (function(symbolName) {   
   
   })("picMovie");
   //Edge symbol end:'picMovie'

   //=========================================================
   
   //Edge symbol: 'mamoMovie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 292, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("mamoMovie");
   //Edge symbol end:'mamoMovie'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-13840729");