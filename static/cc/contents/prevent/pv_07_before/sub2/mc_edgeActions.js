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
         sym.getSymbol("btn1").stop(0);

      });
      //Edge binding end

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
   
   })("btn1");
   //Edge symbol end:'btn1'

   //=========================================================
   
   //Edge symbol: 'turbine'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("turbine");
   //Edge symbol end:'turbine'

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
   
   //Edge symbol: 'blows'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 292, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("blows");
   //Edge symbol end:'blows'

   //=========================================================
   
   //Edge symbol: 'outBlows'
   (function(symbolName) {   
   
   })("outBlows");
   //Edge symbol end:'outBlows'

   //=========================================================
   
   //Edge symbol: 'outBlow_low'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 292, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("outBlow_low");
   //Edge symbol end:'outBlow_low'

   //=========================================================
   
   //Edge symbol: 'outBlow_high'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 292, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("outBlow_high");
   //Edge symbol end:'outBlow_high'

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getSymbol("outBlows").$("outBlow_high").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.getSymbol("outBlows").$("outBlow_high").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.getSymbol("outBlows").$("outBlow_high").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.getSymbol("outBlows").$("outBlow_high").hide();

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

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
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

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.getSymbol("turbine_move").getSymbol("turbine").play("cleaning");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getSymbol("turbine_move").getSymbol("turbine").play("pollution");

      });
      //Edge binding end

   })("movieClip");
   //Edge symbol end:'movieClip'

   //=========================================================
   
   //Edge symbol: 'highInBlow_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("highInBlow_movie");
   //Edge symbol end:'highInBlow_movie'

   //=========================================================
   
   //Edge symbol: 'lowInBlow_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("lowInBlow_movie");
   //Edge symbol end:'lowInBlow_movie'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4052948280");