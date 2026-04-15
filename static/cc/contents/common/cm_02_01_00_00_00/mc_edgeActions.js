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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1367, function(sym, e) {
         sym.getSymbol("pedal_piston").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'oilFlowAreas'
   (function(symbolName) {   
   
   })("oilFlowAreas");
   //Edge symbol end:'oilFlowAreas'

   //=========================================================
   
   //Edge symbol: 'oilFlowAreaSub1'
   (function(symbolName) {   
   
   })("oilFlowAreaSub1");
   //Edge symbol end:'oilFlowAreaSub1'

   //=========================================================
   
   //Edge symbol: 'oilFlowAreaSub2'
   (function(symbolName) {   
   
   })("oilFlowAreaSub2");
   //Edge symbol end:'oilFlowAreaSub2'

   //=========================================================
   
   //Edge symbol: 'oilFlowAreaSub3'
   (function(symbolName) {   
   
   })("oilFlowAreaSub3");
   //Edge symbol end:'oilFlowAreaSub3'

   //=========================================================
   
   //Edge symbol: 'oilFlowAreaSub4'
   (function(symbolName) {   
   
   })("oilFlowAreaSub4");
   //Edge symbol end:'oilFlowAreaSub4'

   //=========================================================
   
   //Edge symbol: 'oilFlowAreaSub5'
   (function(symbolName) {   
   
   })("oilFlowAreaSub5");
   //Edge symbol end:'oilFlowAreaSub5'

   //=========================================================
   
   //Edge symbol: 'oilColorMovie'
   (function(symbolName) {   
   
   })("oilColorMovie");
   //Edge symbol end:'oilColorMovie'

   //=========================================================
   
   //Edge symbol: 'pedal_piston'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("oilColorMovie").play();
         sym.getComposition().getStage().getSymbol("oilFlowAreas").getSymbol("oilFlowAreaSub1").play();
         sym.getComposition().getStage().getSymbol("oilFlowAreas").getSymbol("oilFlowAreaSub2").play();
         sym.getComposition().getStage().getSymbol("oilFlowAreas").getSymbol("oilFlowAreaSub3").play();
         sym.getComposition().getStage().getSymbol("oilFlowAreas").getSymbol("oilFlowAreaSub4").play();
         sym.getComposition().getStage().getSymbol("oilFlowAreas").getSymbol("oilFlowAreaSub5").play();
         sym.getComposition().getStage().getSymbol("o_cylinder_sub").play();
         sym.getComposition().getStage().getSymbol("moving_parts").play();

      });
      //Edge binding end

   })("pedal_piston");
   //Edge symbol end:'pedal_piston'

   //=========================================================
   
   //Edge symbol: 'moving_parts'
   (function(symbolName) {   
   
   })("moving_parts");
   //Edge symbol end:'moving_parts'

   //=========================================================
   
   //Edge symbol: 'o_cylinder_sub'
   (function(symbolName) {   
   
   })("o_cylinder_sub");
   //Edge symbol end:'o_cylinder_sub'

})(jQuery, AdobeEdge, "EDGE-26818759");