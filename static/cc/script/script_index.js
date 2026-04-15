function btnClick(param)
{
	document.myForm.action = param + ".html";
	document.myForm.submit();
}


window.onload = function()
{
	var menus = document.getElementsByTagName("div");
	
	var aniName = "appearMenu";
	var aniDuration = "0.3s";
	var aniTimingFunction = "ease-out";
	var aniDelay = 0.1;
	var aniFillMode = "forwards";
	
	
	for(i = 0 ; i < menus.length; i++)
	{

			menus[i].style.animation= aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay*i +"s") + " " + aniFillMode;
			menus[i].style.webkitAnimation= aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay*i +"s") + " " + aniFillMode;
			menus[i].style.MozAnimation= aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay*i +"s") + " " + aniFillMode;
			menus[i].style.msAnimation= aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay*i +"s") + " " + aniFillMode;
			menus[i].style.OAnimation= aniName + " " + aniDuration + " " + aniTimingFunction + " " + (aniDelay*i +"s") + " " + aniFillMode;

	}
}