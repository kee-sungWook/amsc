//로딩이미지를 추가하는 함수
var loading = {};
loading.addLoadingAnimation = function (parentObj) {
    var divLoading = parentObj.appendChild(document.createElement("div"));
    divLoading.id = "loading";
    divLoading.style.width = "100%";
    divLoading.style.height = "100%";
    divLoading.style.position = "absolute";
    divLoading.style.left = "0px";
    divLoading.style.top = "0px";
    divLoading.style.background = "rgba(0, 0, 0, 0.5)";
    divLoading.style.zIndex = "999";

    var divFloat = divLoading.appendChild(document.createElement("div"));
    divFloat.id = "floatingBarsG";

    for (var i = 1; i < 9; i++) {
        var divBlockG = divFloat.appendChild(document.createElement("div"));
        divBlockG.className = "blockG";
        divBlockG.id = "rotateG_0" + i;
    }
};

//로딩이미지를 설정하는 함수
loading.setLoadingDiv = function (setYn) {
    var loading = document.getElementById("loading");
    if (setYn) {
        loading.style.display = "block";
    }
    else {
        loading.style.display = "none";
    }
};