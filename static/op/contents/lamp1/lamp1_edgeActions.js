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
      
      
      
       
      
  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getSymbol("LAMP_CLIP").getSymbol("LAMP1").play("night");
         sym.getSymbol("LAMP_CLIP").getSymbol("LAMP2").play("night");
         
         sym.getSymbol("CAR_MOVING").getSymbol("CAR_CLIP").play("lampON");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("LAMP_CLIP").getSymbol("LAMP1").stop("day");
         sym.getSymbol("LAMP_CLIP").getSymbol("LAMP2").stop("day");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getSymbol("LAMP_CLIP").getSymbol("LAMP1").stop("day");
         sym.getSymbol("LAMP_CLIP").getSymbol("LAMP2").stop("day");
         sym.getSymbol("CAR_MOVING").getSymbol("CAR_CLIP").play("lampOFF");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'MEMO'
   (function(symbolName) {   
   
   })("MEMO");
   //Edge symbol end:'MEMO'

   //=========================================================
   
   //Edge symbol: 'ROAD_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("ROAD_CLIP");
   //Edge symbol end:'ROAD_CLIP'

   //=========================================================
   
   //Edge symbol: 'LAMP'
   (function(symbolName) {   
   
   })("LAMP");
   //Edge symbol end:'LAMP'

   //=========================================================
   
   //Edge symbol: 'LAMP_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 367, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("LAMP_CLIP");
   //Edge symbol end:'LAMP_CLIP'

   //=========================================================
   
   //Edge symbol: 'WHEEL_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 133, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("WHEEL_CLIP");
   //Edge symbol end:'WHEEL_CLIP'

   //=========================================================
   
   //Edge symbol: 'CAR_CLIP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CAR_CLIP");
   //Edge symbol end:'CAR_CLIP'

   //=========================================================
   
   //Edge symbol: 'CAR_MOVING'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("CAR_MOVING");
   //Edge symbol end:'CAR_MOVING'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-28461533");