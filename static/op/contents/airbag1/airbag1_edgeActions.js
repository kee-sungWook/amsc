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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2167, function(sym, e) {
         sym.getSymbol("Mc_leftLine").stop();
         sym.getSymbol("Mc_rightLine").stop();
         sym.getSymbol("Mc_roadLamp").stop();
         sym.getSymbol("Mc_glass").play(0);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${replayBtn}", "mousedown", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("Mc_glass").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /*var stage = sym.$('Stage');
         var parent = stage.parent();
         
         var stageWidth = stage.width();
         var stageHeight = stage.height();
         
         var parentWidth = $(window).width();
         var parentHeight = $(window).height();
         
         var desiredWidth = Math.round(parentWidth * 1);
         var desiredHeight = Math.round(parentHeight * 1);
         
         var rescalW = (desiredWidth / stageWidth);
         var rescalH = (desiredHeight / stageHeight);
         
         $("#Stage").css("position","fixed");
         $("#Stage").css("transform-origin","0 0");
         $("#Stage").css("transform", "scale(" + rescalW + "," + rescalH + ")");
         */

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Mc_glass'
   (function(symbolName) {   
   
   })("Mc_glass");
   //Edge symbol end:'Mc_glass'

   //=========================================================
   
   //Edge symbol: 'Mc_leftLine'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 867, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("Mc_leftLine");
   //Edge symbol end:'Mc_leftLine'

   //=========================================================
   
   //Edge symbol: 'Mc_roadLamp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Mc_roadLamp");
   //Edge symbol end:'Mc_roadLamp'

   //=========================================================
   
   //Edge symbol: 'Mc_rightLine'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("Mc_rightLine");
   //Edge symbol end:'Mc_rightLine'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-27681480");