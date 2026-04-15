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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("normalClip").stop("normal");
         sym.getSymbol("pollutionClip").stop("pollution");

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

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "click", function(sym, e) {
         window.open("../mc.html", "_self");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getSymbol("normalClip").play("normal");
         sym.getSymbol("pollutionClip").play("pollution");

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
   
   //Edge symbol: 'turbine_move'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("turbine_move");
   //Edge symbol end:'turbine_move'

   //=========================================================
   
   //Edge symbol: 'vane_move'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1292, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1833, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2375, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("vane_move");
   //Edge symbol end:'vane_move'

   //=========================================================
   
   //Edge symbol: 'movieClip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getSymbol("vane_move1").play("vn_st");
         sym.getSymbol("vane_move2").play("vn_st");
         sym.getSymbol("vane_move3").play("vn_st");
         sym.getSymbol("vane_move4").play("vn_st");
         sym.getSymbol("vane_move5").play("vn_st");
         sym.getSymbol("vane_move6").play("vn_st");
         sym.getSymbol("vane_move7").play("vn_st");
         sym.getSymbol("vane_move8").play("vn_st");
         sym.getSymbol("vane_move9").play("vn_st");
         sym.getSymbol("vane_move10").play("vn_st");
         sym.getSymbol("vane_move11").play("vn_st");
         sym.getSymbol("vane_move12").play("vn_st");
         sym.getSymbol("vane_move13").play("vn_st");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getSymbol("vane_move1").play("vn_rw");
         sym.getSymbol("vane_move2").play("vn_rw");
         sym.getSymbol("vane_move3").play("vn_rw");
         sym.getSymbol("vane_move4").play("vn_rw");
         sym.getSymbol("vane_move5").play("vn_rw");
         sym.getSymbol("vane_move6").play("vn_rw");
         sym.getSymbol("vane_move7").play("vn_rw");
         sym.getSymbol("vane_move8").play("vn_rw");
         sym.getSymbol("vane_move9").play("vn_rw");
         sym.getSymbol("vane_move10").play("vn_rw");
         sym.getSymbol("vane_move11").play("vn_rw");
         sym.getSymbol("vane_move12").play("vn_rw");
         sym.getSymbol("vane_move13").play("vn_rw");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play("normal");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.getSymbol("vane_move1").play("vp_st");
         sym.getSymbol("vane_move2").play("vp_st");
         sym.getSymbol("vane_move3").play("vp_st");
         sym.getSymbol("vane_move4").play("vp_st");
         sym.getSymbol("vane_move5").play("vp_st");
         sym.getSymbol("vane_move6").play("vp_st");
         sym.getSymbol("vane_move7").play("vp_st");
         sym.getSymbol("vane_move8").play("vp_st");
         sym.getSymbol("vane_move9").play("vp_st");
         sym.getSymbol("vane_move10").play("vp_st");
         sym.getSymbol("vane_move11").play("vp_st");
         sym.getSymbol("vane_move12").play("vp_st");
         sym.getSymbol("vane_move13").play("vp_st");
         
         sym.getSymbol("turbine_move").getSymbol("turbine").stop("pollution");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13750, function(sym, e) {
         sym.getSymbol("vane_move1").play("vp_rw");
         sym.getSymbol("vane_move2").play("vp_rw");
         sym.getSymbol("vane_move3").play("vp_rw");
         sym.getSymbol("vane_move4").play("vp_rw");
         sym.getSymbol("vane_move5").play("vp_rw");
         sym.getSymbol("vane_move6").play("vp_rw");
         sym.getSymbol("vane_move7").play("vp_rw");
         sym.getSymbol("vane_move8").play("vp_rw");
         sym.getSymbol("vane_move9").play("vp_rw");
         sym.getSymbol("vane_move10").play("vp_rw");
         sym.getSymbol("vane_move11").play("vp_rw");
         sym.getSymbol("vane_move12").play("vp_rw");
         sym.getSymbol("vane_move13").play("vp_rw");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play("pollution");

      });
      //Edge binding end

   })("movieClip");
   //Edge symbol end:'movieClip'

   //=========================================================
   
   //Edge symbol: 'turbine'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("turbine");
   //Edge symbol end:'turbine'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4052948280");