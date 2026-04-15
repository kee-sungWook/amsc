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
         sym.getSymbol("bigPics").$("bigPic1").hide();
         sym.getSymbol("bigPics").$("bigPic2").hide();
         sym.getSymbol("bigPics").$("bigPic3").hide();
         sym.getSymbol("bigPics").$("bigPic4").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bigPic'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_BUTTON_CLOSE}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closealls}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(0);

      });
      //Edge binding end

   })("bigPics");
   //Edge symbol end:'bigPics'

   //=========================================================
   
   //Edge symbol: 'smallPic1'
   (function(symbolName) {   
   
   })("smallPic1");
   //Edge symbol end:'smallPic1'

   //=========================================================
   
   //Edge symbol: 'smallPic1_1'
   (function(symbolName) {   
   
   })("smallPic2");
   //Edge symbol end:'smallPic2'

   //=========================================================
   
   //Edge symbol: 'pic_src1'
   (function(symbolName) {   
   
   })("pic_src1");
   //Edge symbol end:'pic_src1'

   //=========================================================
   
   //Edge symbol: 'pic_src1_1'
   (function(symbolName) {   
   
   })("pic_src2");
   //Edge symbol end:'pic_src2'

   //=========================================================
   
   //Edge symbol: 'smallPics'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_smallPic1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("bigPics").$("bigPic1").show();
         sym.getComposition().getStage().play("showBig");
         sym.getComposition().getStage().getSymbol("smallPics").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smallPic2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("bigPics").$("bigPic2").show();
         sym.getComposition().getStage().play("showBig");
         sym.getComposition().getStage().getSymbol("smallPics").hide();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1317, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("smallPics");
   //Edge symbol end:'smallPics'

   //=========================================================
   
   //Edge symbol: 'BUTTON_CLOSE'
   (function(symbolName) {   
   
   })("BUTTON_CLOSE");
   //Edge symbol end:'BUTTON_CLOSE'

   //=========================================================
   
   //Edge symbol: 'bigPic1'
   (function(symbolName) {   
   
   })("bigPic1");
   //Edge symbol end:'bigPic1'

   //=========================================================
   
   //Edge symbol: 'bigPic2'
   (function(symbolName) {   
   
   })("bigPic2");
   //Edge symbol end:'bigPic2'

})(jQuery, AdobeEdge, "EDGE-5260140");