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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1600, function(sym, e) {
         var myVideo = document.getElementById("myVideo");
         myVideo.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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
   
   //Edge symbol: 'smallPic2_1'
   (function(symbolName) {   
   
   })("smallPic3");
   //Edge symbol end:'smallPic3'

   //=========================================================
   
   //Edge symbol: 'smallPic3_1'
   (function(symbolName) {   
   
   })("smallPic4");
   //Edge symbol end:'smallPic4'

   //=========================================================
   
   //Edge symbol: 'smallPic4_1'
   (function(symbolName) {   
   
   })("smallPic5");
   //Edge symbol end:'smallPic5'

   //=========================================================
   
   //Edge symbol: 'smallPics'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_smallPic1}", "click", function(sym, e) {
         var thisNum = "1";
         
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").empty();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").empty();
         
         
         var vid = $("<iframe width='1806' height='1077' src='../cm_01_03_0" + thisNum +"_00_00/mc.html' frameborder='0' scrolling='no'></iframe>");
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").append(vid);
         
         var myTitle = sym.getSymbol("smallPic" + thisNum).$("TextArea").text();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").html(myTitle);
         
         sym.getComposition().getStage().play("showBig");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smallPic2}", "click", function(sym, e) {
         var thisNum = "2";
         
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").empty();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").empty();
         
         
         var vid = $("<iframe width='1806' height='1077' src='../cm_10_03_0" + thisNum +"_00_00/mc.html' frameborder='0' scrolling='no'></iframe>");
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").append(vid);
         
         var myTitle = sym.getSymbol("smallPic" + thisNum).$("TextArea").text();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").html(myTitle);
         
         sym.getComposition().getStage().play("showBig");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smallPic3}", "click", function(sym, e) {
         var thisNum = "3";
         
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").empty();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").empty();
         
         
         var vid = $("<iframe width='1806' height='1077' src='../cm_10_03_0" + thisNum +"_00_00/mc.html' frameborder='0' scrolling='no'></iframe>");
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").append(vid);
         
         var myTitle = sym.getSymbol("smallPic" + thisNum).$("TextArea").text();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").html(myTitle);
         
         sym.getComposition().getStage().play("showBig");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smallPic4}", "click", function(sym, e) {
         var thisNum = "4";
         
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").empty();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").empty();
         
         
         var vid = $("<iframe width='1806' height='1077' src='../cm_10_03_0" + thisNum +"_00_00/mc.html' frameborder='0' scrolling='no'></iframe>");
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").append(vid);
         
         var myTitle = sym.getSymbol("smallPic" + thisNum).$("TextArea").text();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").html(myTitle);
         
         sym.getComposition().getStage().play("showBig");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smallPic5}", "click", function(sym, e) {
         var thisNum = "5";
         
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").empty();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").empty();
         
         
         var vid = $("<iframe width='1806' height='1077' src='../cm_10_03_0" + thisNum +"_00_00/mc.html' frameborder='0' scrolling='no'></iframe>");
         sym.getComposition().getStage().getSymbol("bigPics").$("movieArea").append(vid);
         
         var myTitle = sym.getSymbol("smallPic" + thisNum).$("TextArea").text();
         sym.getComposition().getStage().getSymbol("bigPics").$("textArea").html(myTitle);
         
         sym.getComposition().getStage().play("showBig");
         

      });
      //Edge binding end

      

      

   })("smallPics");
   //Edge symbol end:'smallPics'

   //=========================================================
   
   //Edge symbol: 'bigPics'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_BUTTON_CLOSE}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(0);

      });
      //Edge binding end

   })("bigPics");
   //Edge symbol end:'bigPics'

   //=========================================================
   
   //Edge symbol: 'BUTTON_CLOSE'
   (function(symbolName) {   
   
   })("BUTTON_CLOSE");
   //Edge symbol end:'BUTTON_CLOSE'

})(jQuery, AdobeEdge, "EDGE-13633348");