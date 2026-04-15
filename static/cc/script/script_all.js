var myBrowser = window.navigator.appName;
myBrowser = myBrowser.substr(0, 1);

var browserVer = window.navigator.appVersion;
if (myBrowser == "M") {
	var bV = browserVer.split("MSIE");
	browserVer = parseInt(bV[1].substr(0, 5));
	myBrowser = browserVer;
} else {
	myBrowser = 10;
}

function btnOver(param) {
	var definder = param.getAttribute("definder");
	var pics = param.getAttribute("pics");

	if (definder === "btn") {
		param.style.cursor = "pointer";
		param.src = pics + "_c.gif";
	} else {
		param.style.cursor = "pointer";
		param.parentNode.firstChild.src = pics + "_c.gif";
		param.style.color = "#c70060";
	}
}

function btnOut(param) {
	var definder = param.getAttribute("definder");
	var pics = param.getAttribute("pics");

	if (definder === "btn") {
		param.style.cursor = "pointer";
		param.src = pics + ".gif";
	} else {
		param.style.cursor = "pointer";
		param.parentNode.firstChild.src = pics + ".gif";
		param.style.color = "#00498d";
	}
}

function btnGoMain() {
	document.myForm.nowPos.value = 0;
	document.myForm.step1.value = "00";
	document.myForm.step2.value = "00";
	document.myForm.step3.value = "00";
	document.myForm.step4.value = "00";
	document.myForm.step5.value = "00";
	document.myForm.lastPos.value = "n";
	document.myForm.submit();
}
