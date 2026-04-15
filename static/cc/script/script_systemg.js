window.onload = function () {
	var pagePos = document.myForm.nowPos.value;
	var hprev = document.getElementsByClassName("hprev")[0];

	if (pagePos !== "0") {
		hprev.style.visibility = "visible";
		hprev.style.opacity = "1.0";
	} else {
		hprev.style.visibility = "hidden";
		hprev.style.opacity = "0";
	}
};
