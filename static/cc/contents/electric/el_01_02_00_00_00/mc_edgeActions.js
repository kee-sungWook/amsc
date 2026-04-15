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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.getSymbol("btn1").$("Text").html("AFS");
         sym.getSymbol("btn2").$("Text").html("MAP");
         sym.getSymbol("btn3").$("Text").html("CKP,CMP");
         sym.getSymbol("btn4").$("Text").html("TPS1,2");
         sym.getSymbol("btn5").$("Text").html("WTS");
         sym.getSymbol("btn6").$("Text").html("O2");
         sym.getSymbol("btn7").$("Text").html("APS1,2");
         sym.getSymbol("btn8").$("Text").html("ETC");
         sym.getSymbol("btn9").$("Text").html("연료제어");
         sym.getSymbol("btn10").$("Text").html("점화시기제어");
         sym.getSymbol("btn11").$("Text").html("노킹");
         sym.getSymbol("btn12").$("Text").html("CVVT");
         sym.getSymbol("btn13").$("Text").html("VIS");
         sym.getSymbol("btn14").$("Text").html("냉각팬제어");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1333, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("hideText");
         sym.getComposition().getStage().$("container").empty();
         
         var childSymbols = sym.getComposition().getStage().getChildSymbols();
         for(var i=0; i<childSymbols.length; i++)
         {
         	childSymbols[i].stop(0);
         }
         
         this.play("selection");
         
         var trg = e.target.id.split("_");
         var myNum = trg[1].substr(3);
         var myContent = "<iframe id='electronic' width='1900' height='1000' src='sub/e" + myNum +"/mc.html' frameborder='0' scrolling='no'></iframe>"
         sym.getComposition().getStage().$("container").append(myContent);

      });
      //Edge binding end

   })("btn1");
   //Edge symbol end:'btn1'

})(jQuery, AdobeEdge, "EDGE-13111552");