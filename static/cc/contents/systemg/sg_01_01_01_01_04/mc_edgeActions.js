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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_sPic1}", "click", function(sym, e) {
         sym.getSymbol("bPic").play("pic1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sPic2}", "click", function(sym, e) {
         sym.getSymbol("bPic").play("pic2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sPic3}", "click", function(sym, e) {
         sym.getSymbol("bPic").play("pic3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sPic4}", "click", function(sym, e) {
         sym.getSymbol("bPic").play("pic4");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1066, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sPic1'
   (function(symbolName) {   
   
   })("sPic1");
   //Edge symbol end:'sPic1'

   //=========================================================
   
   //Edge symbol: 'sPic1_1'
   (function(symbolName) {   
   
   })("sPic2");
   //Edge symbol end:'sPic2'

   //=========================================================
   
   //Edge symbol: 'sPic1_1'
   (function(symbolName) {   
   
   })("sPic3");
   //Edge symbol end:'sPic3'

   //=========================================================
   
   //Edge symbol: 'sPic2_1'
   (function(symbolName) {   
   
   })("sPic4");
   //Edge symbol end:'sPic4'

   //=========================================================
   
   //Edge symbol: 'sPic3_1'
   (function(symbolName) {   
   
   })("sPic5");
   //Edge symbol end:'sPic5'

   //=========================================================
   
   //Edge symbol: 'sPic4_1'
   (function(symbolName) {   
   
   })("sPic6");
   //Edge symbol end:'sPic6'

   //=========================================================
   
   //Edge symbol: 'bPic'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1033, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1567, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2133, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

   })("bPic");
   //Edge symbol end:'bPic'

   //=========================================================
   
   //Edge symbol: 'TitleText'
   (function(symbolName) {   
   
   })("TitleText");
   //Edge symbol end:'TitleText'

})(jQuery, AdobeEdge, "EDGE-26846989");