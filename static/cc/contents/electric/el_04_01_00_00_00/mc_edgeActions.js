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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1033, function(sym, e) {
         
         sym.getSymbol("movieAll").getSymbol("movie_sensor").play("gogo");
         sym.getSymbol("movieAll").getSymbol("movie_flow_back").stop("gogo");
         sym.getSymbol("movieAll").getSymbol("movie_arrow").play("gogo");
         sym.getSymbol("movieAll").getSymbol("movie_module1").play("gogo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getSymbol("movieAll").getSymbol("movie_sensor").stop(0);
         sym.getSymbol("movieAll").getSymbol("movie_flow_back").stop(0);
         sym.getSymbol("movieAll").getSymbol("movie_arrow").stop(0);
         sym.getSymbol("movieAll").getSymbol("movie_module1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'movieAll'
   (function(symbolName) {   
   
   })("movieAll");
   //Edge symbol end:'movieAll'

   //=========================================================
   
   //Edge symbol: 'movie_sensor'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1067, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("movie_sensor");
   //Edge symbol end:'movie_sensor'

   //=========================================================
   
   //Edge symbol: 'movie_flow'
   (function(symbolName) {   
   
   })("movie_flow_back");
   //Edge symbol end:'movie_flow_back'

   //=========================================================
   
   //Edge symbol: 'movie_arrow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 767, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("movie_arrow");
   //Edge symbol end:'movie_arrow'

   //=========================================================
   
   //Edge symbol: 'movie_module1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1100, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("gogo");

      });
      //Edge binding end

   })("movie_module1");
   //Edge symbol end:'movie_module1'

   //=========================================================
   
   //Edge symbol: 'movie_flow_flow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 433, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("movie_flow_flow");
   //Edge symbol end:'movie_flow_flow'

})(jQuery, AdobeEdge, "EDGE-30524557");