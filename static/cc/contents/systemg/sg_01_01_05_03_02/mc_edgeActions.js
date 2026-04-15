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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'TRUBLE_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("TRUBLE_MOVE");
   //Edge symbol end:'TRUBLE_MOVE'

   //=========================================================
   
   //Edge symbol: 'TRUBLE_MOVE_SRC'
   (function(symbolName) {   
   
   })("TRUBLE_MOVE_SRC");
   //Edge symbol end:'TRUBLE_MOVE_SRC'

   //=========================================================
   
   //Edge symbol: 'TRUBLE_MOVE_SRC_1'
   (function(symbolName) {   
   
      })("TRUBLE_MOVE_SRC_line");
   //Edge symbol end:'TRUBLE_MOVE_SRC_line'

   //=========================================================
   
   //Edge symbol: 'line_01_mov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1367, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("line_01_mov");
   //Edge symbol end:'line_01_mov'

   //=========================================================
   
   //Edge symbol: 'line_01_mov_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1367, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("line_01_line");
   //Edge symbol end:'line_01_line'

   //=========================================================
   
   //Edge symbol: 'all_mov_01'
   (function(symbolName) {   
   
   })("all_mov_01");
   //Edge symbol end:'all_mov_01'

   //=========================================================
   
   //Edge symbol: 'all_mov_1'
   (function(symbolName) {   
   
   })("all_mov_02");
   //Edge symbol end:'all_mov_02'

})(jQuery, AdobeEdge, "EDGE-3139791");