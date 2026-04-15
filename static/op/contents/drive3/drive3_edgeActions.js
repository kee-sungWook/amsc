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
         var stageHeight = sym.$('Stage').height(); // Set a variable for the height of the stage
         
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
             var parentWidth = stage.parent().width(); // Get the parent of the stage width
             var stageWidth = stage.width(); // Get the stage width
             var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
             var rescale = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
         
         // Rescale the stage!
         	 stage.css('transform', 'scale(' + rescale + ')'); 
             stage.css(  '-o-transform', 'scale(' + rescale + ')');
         	 stage.css('-ms-transform', 'scale(' + rescale + ')');
             stage.css('-webkit-transform', 'scale(' + rescale + ')');
         	 stage.css('-moz-transform', 'scale(' + rescale + ')');
             stage.css('-o-transform', 'scale(' + rescale + ')');
             parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         }
         
         // Make it happen when the browser resizes
         $(window).on('resize', function(){ 
         	 scaleStage(); 
         });
         
         // Make it happen when the page first loads
         $(document).ready(function(){
             scaleStage();
         });
         
         
         

      });
      //Edge binding end

      
       
      
  
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'parts_info1'
   (function(symbolName) {   
   
   })("parts_info1");
   //Edge symbol end:'parts_info1'

   //=========================================================
   
   //Edge symbol: 'parts_info1_1'
   (function(symbolName) {   
   
   })("parts_info2");
   //Edge symbol end:'parts_info2'

   //=========================================================
   
   //Edge symbol: 'parts_info2_1'
   (function(symbolName) {   
   
   })("parts_info3");
   //Edge symbol end:'parts_info3'

   //=========================================================
   
   //Edge symbol: 'car'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         sym.getComposition().getStage().getSymbol("MY_ALL").getSymbol("parts_info3").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2267, function(sym, e) {
         sym.getComposition().getStage().getSymbol("MY_ALL").play("start");

      });
      //Edge binding end

   })("car");
   //Edge symbol end:'car'

   //=========================================================
   
   //Edge symbol: 'sm_sensor'
   (function(symbolName) {   
   
   })("sm_sensor");
   //Edge symbol end:'sm_sensor'

   //=========================================================
   
   //Edge symbol: 'sm_sensorAll'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1067, function(sym, e) {
         sym.getComposition().getStage().getSymbol("MY_ALL").getSymbol("car").play(0);

      });
      //Edge binding end

   })("sm_sensorAll");
   //Edge symbol end:'sm_sensorAll'

   //=========================================================
   
   //Edge symbol: 'MY_ALL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getSymbol("sm_sensorAll").play(0);

      });
      //Edge binding end

   })("MY_ALL");
   //Edge symbol end:'MY_ALL'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9868033");