var nowMode = "main";
var subParent;
var d = new Array();
d[0] = ["1","11"];
d[1] = ["1","11","12","17","18"];
d[2] = ["5","7","9","11","12","17","18"];
d[3] = ["1","11","12","21"];
d[4] = ["1","2","4","5","7","9","11","12","15","17","18"];
d[5] = ["11","12","13","14","21"];
d[6] = ["1","5","6","7","9","11","12","17","18","20"];
d[7] = ["1","11","12","21"];
d[8] = ["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"];
d[9] = ["1","11","12","20","21"];
d[10] = ["1","5","7","9","11","12","16","17","18"];
d[11] = ["11","12","14","21"];
d[12] = ["1","2","4","5","6","7","8","9","11","12","13","15","16","17","18","20"];

function btnClick(param)
{
	top.location.href = "../index.html?mode=flow";
}


window.onload=function()
{
	
	var dist = document.getElementsByClassName("distance");
	var parts = document.getElementsByClassName("partsIcon");
	var strDist = document.getElementById("strDistance");
	var strParts = document.getElementById("strParts");
	var firstArea = document.getElementById("firstView");
	var secondArea = document.getElementById("secondView");
	var myContent = document.getElementById("myFrame");
	var contentPath = "contents/prevent/";
	var hprev = document.getElementsByClassName("hprev")[0];
	var gogo;
	console.log(nowMode);

	secondArea.style.visibility = "hidden";
	firstArea.style.visibility = "visible";
	myContent.src = contentPath + "pv_00/mc.html";

	for(i=0; i<dist.length; i++)
	{
		dist[i].onmouseover=function()
		{
			this.style.cursor = "pointer";
		}

		dist[i].onclick=function()
		{
			resetDistance();
			resetParts();
			strDist.innerHTML = "> " + this.firstChild.childNodes[0].nodeValue + "Km";
			strParts.innerHTML = "";
			this.style.color = "white";
			this.style.backgroundColor = "#00498d";
			
			var definder = eval(this.getAttribute("nums"));
			setParts(definder);
		}
	}
	
	for(b=0; b<parts.length; b++)
	{
		parts[b].onmouseover = function()
		{
			this.style.cursor = "pointer";
		}

		parts[b].onclick = function()
		{
			if(this.getAttribute("btn")=="yes")
			{
				strParts.innerHTML = " > " + this.childNodes[1].firstChild.nodeValue;
				linkSub(this.getAttribute("nums"));
			}
			else
			{
				if(strDist.innerHTML == "")
				{
					strParts.style.marginLeft = "0";
				}
				else
				{
					strParts.style.marginLeft = "-300px";
				}
				strDist.style.visibility = "hidden";
				
				strParts.innerHTML = " > " + this.childNodes[1].firstChild.nodeValue;
				linkSub(this.getAttribute("nums"));
			}
		}
	}
	
	function resetDistance()
	{
		for(i=0; i<dist.length; i++)
		{
			dist[i].style.backgroundColor = "white";
			dist[i].style.color = "#00498d";
		}
	}
	
	function setParts(param)
	{
		var selDistance = d[param];
		for(i=0; i<selDistance.length; i++)
		{
			var idxNum = eval(selDistance[i])-1;
			parts[idxNum].style.color = "white";
			parts[idxNum].style.backgroundColor = "#004a8d";
			parts[idxNum].firstChild.src="img/pv_icon" + (parts[idxNum].getAttribute("nums"))+ "_sel.png";
			parts[idxNum].setAttribute("btn","yes");
		}
	}

	function resetParts()
	{
		for(i=0; i<parts.length; i++)
		{
			parts[i].style.color = "#004a8d";
			parts[i].style.backgroundColor = "#efefef";
			parts[i].firstChild.src="img/pv_icon" + (parts[i].getAttribute("nums"))+ ".png";
			parts[i].setAttribute("btn","no");
		}
	}

	function  linkSub(param)
	{
		
		myContent.src = contentPath + "pv_" + param + "/mc.html";
		subParent = myContent.src;
		firstArea.style.opacity = 0;
		firstArea.style.visibility = "hidden";
		secondArea.style.visibility = "visible";
		myContent.style.opacity = "1.0";
		
		if(myBrowser <= 9)
		{
			hprev.style.visibility = "visible";
			hprev.style.marginRight = "80px";
			hprev.style.opacity = "1.0";
		}
		else
		{
			
			hprev.style.visibility = "visible";
			hprev.style.animation = "hprevAni 0.2s ease-out 0s forwards";
			hprev.style.webkitAnimation = "hprevAni 0.2s ease-out 0s forwards";
			hprev.style.MozAnimation = "hprevAni 0.2s ease-out 0s forwards";
			hprev.style.msAnimation = "hprevAni 0.2s ease-out 0s forwards";
			hprev.style.OAnimation = "hprevAni 0.2s ease-out 0s forwards";
		}
		
	}

	hprev.onclick = function()
	{
		if(nowMode == "main"){
			strParts.innerHTML = "";
			strParts.style.marginLeft = "0";
			strDist.style.visibility = "visible";
			hprev.style.visibility = "hidden";
			myContent.src = contentPath +"pv_00/mc.html";
			myContent.style.opacity = "0";
			secondArea.style.visibility = "hidden";
			firstArea.style.visibility = "visible";
			gogo = window.setInterval(showFirstArea , 20);
		}
		else{
			myContent.src = subParent;
		}
		
	}

	var sum = 0.1;
	function showFirstArea()
	{
		
		if(firstArea.style.opacity >= 1.0)
		{
			window.clearInterval(gogo);
			firstArea.style.opacity = 1.0;
			sum = 0.1;
		}
		else
		{
			firstArea.style.opacity = sum;
			sum += 0.1;
		}
	}
	
}