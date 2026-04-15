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
         
         sym.$("Rectangle").append('<iframe src="tab_main.html" style="width:100%; height:100%; border:0;"></iframe>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_goHome}", "mousedown", function(sym, e) {
         
         window.open("../index.html?mode=flow", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_goHome}", "touchstart", function(sym, e) {
         
         window.open("../index.html?mode=flow", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-24611703");