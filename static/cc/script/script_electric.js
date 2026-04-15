window.onload = function () {
   var pagePos = document.myForm.nowPos.value;
   var hprev = document.getElementsByClassName("hprev")[0];

   if (pagePos == "0") {
      hprev.style.visibility = "hidden";
      hprev.style.opacity = "0";

      var menus = document.getElementsByClassName("btnDiv");

      var aniName = "appearMenu";
      var aniDuration = "0.2s";
      var aniTimingFunction = "ease-out";
      var aniDelay = 0.05;
      var aniFillMode = "forwards";

      for (let i = 0; i < menus.length; i++) {
         if (myBrowser <= 9) {
            menus[i].style.opacity = 1.0;
            menus[i].style.msTransform = "scale(1.0)";
         } else {
            menus[i].style.animation = aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay * i + "s") + " " + aniFillMode;
            menus[i].style.webkitAnimation = aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay * i + "s") + " " + aniFillMode;
            menus[i].style.MozAnimation = aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay * i + "s") + " " + aniFillMode;
            menus[i].style.msAnimation = aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay * i + "s") + " " + aniFillMode;
            menus[i].style.OAnimation = aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay * i + "s") + " " + aniFillMode;
         }
      }
   } else {
      hprev.style.visibility = "visible";
      hprev.style.opacity = "1.0";
   }
};
