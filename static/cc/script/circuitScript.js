$(document).ready(function () {
	//선택된 제작사, 차종, 시스템1, 시스템2의 코드를 담아두기 위한 변수들
	var makerCode = "";
	var carCode = "";
	var sys1Code = "";
	var sys2Code = "";

	//선택 레벨을 지정하여 차종선택 단계인지, 시스템1 선택단계인지를 구분한다. 0 ~ 4단계 까지
	// 0:제작사 선택 단계 ,1:차종 선택 단계, 2:시스템1 선택 단계, 3:시스템2 선택 단계, 4:회로도 제목 선택
	var nowLevel = 0;

	//선택된 차종, 시스템1, 시스템2의 제목바를 나타내거나 숨기기 위한 확장메소드.
	//HTML 문서의 .selRect 를 제어함
	$.fn.showSel = function () {
		$(this).each(function () {
			$(this).animate({ height: "40px", opacity: "1.0" }, 500);
		});
	};

	$.fn.hideSel = function () {
		$(this).each(function () {
			$(this).animate({ height: "0px", opacity: "0.0" }, 200);
		});
	};

	//제작사, 차종, 시스템1, 시스템2 를 눌렀을때 실행되는 함수
	$.checkList = function () {
		if (nowLevel != 4) {
			$.hideResult();
		}

		for (let k = 4; k > nowLevel + 1; k--) {
			$(".selRect:nth-of-type(" + k + ")").hideSel();
		}

		$.ajax({
			type: "post",
			url: "/cc/circuitSelect",
			data: {
				level: nowLevel,
				maker: makerCode,
				car: carCode,
				sys1: sys1Code,
				sys2: sys2Code,
			},
			success: function (data) {
				console.log("data: ", data);
				let item = data.item;
				let resultTxt = "";
				let addResult = "";

				if (data.item.length) {
					switch (nowLevel) {
						case 0:
							resultTxt = '<div class="car" code="';
							$(".resultRect h2").text("차종을 선택해 주세요.");
							break;

						case 1:
							resultTxt = '<div class="sys1" code="';
							$(".resultRect h2").text("시스템을 선택해 주세요.");
							break;

						case 2:
							if (Number(data.nowLevel) !== nowLevel) {
								nowLevel = data.nowLevel;
								resultTxt = '<div class="circuitList" code="';
								$(".resultRect h2").text(
									"선택하신 회로도 목록 입니다."
								);
							} else {
								resultTxt = '<div class="sys2" code="';
								$(".resultRect h2").text(
									"세부 시스템을 선택해 주세요."
								);
							}
							break;

						case 3:
							resultTxt = '<div class="circuitList" code="';
							$(".resultRect h2").text(
								"선택하신 회로도 목록 입니다."
							);
							break;

						default:
							break;
					}

					for (let i in item) {
						addResult =
							resultTxt +
							item[i].selCode +
							'"><img src="/img/circuitCon' +
							(nowLevel + 1) +
							'.png" />' +
							item[i].selName +
							"</div>";
						$(".resultArea").append(addResult);
					}
				} else {
					resultTxt =
						'<div style="margin:0px auto 20px; font-size:2.4rem; font-family:notokr-bold;color:#00b2ed;">NO DATA</div>';
					$(".resultRect h2").text("해당 데이터가 없습니다.");
					$(".resultArea").append(resultTxt);
				}

				$.showResult();
			},
			error: function (request, status, error) {
				alert(
					"code: " +
						request.status +
						"\n" +
						"message: " +
						request.responseText +
						"\n" +
						"error: " +
						error
				);
			},
		});
	};

	//결과 목록을 보여주기 위한 함수
	$.showResult = function () {
		let divideNum;
		if (nowLevel === 0) {
			divideNum = 4;
		} else if (nowLevel === 1) {
			divideNum = 3;
		} else {
			divideNum = 2;
		}

		let trgHeight =
			Math.ceil($(".resultArea").children().length / divideNum) * 70 +
			60 +
			"px";
		$(".resultRect").animate({ height: trgHeight, opacity: "1.0" }, 500);
	};

	$.hideResult = function () {
		$(".resultArea").empty();
		$(".resultRect").animate({ height: "0px", opacity: "0.0" }, 100);
	};

	//선택한 회로도를 보여주는 함수
	$.circuitScreen = function (srcParam) {
		let circuitSrc = '<img src="/img_circuit/' + srcParam + '" />';
		$("#circuitPic").append(circuitSrc);

		$(document).scrollTop(0);
		$(".circuitView").fadeIn(500, function () {
			let scrnH =
				document.documentElement.scrollHeight ||
				document.documentElement.scrollHeight;
			$(".circuitView").css({
				height: scrnH + "px",
				"background-color": "rgba(0, 0, 0, 0.93)",
			});
		});
	};

	//제작사 아이콘 마우스 오버 :
	$(".selMaker img").mouseover(function () {
		//현제 선택되어 있는 제작사가 아니라면 커서를 포인터로, 아이콘을 칼라로 변경
		if ($(this).attr("code") !== makerCode) {
			$(this).css("cursor", "pointer");
			$(this).attr("src", "/img/" + $(this).attr("id") + "_over.png");
		}
	});

	//제작사 아이콘 마우스 아웃 :
	$(".selMaker img").mouseout(function () {
		//현재 선택되어있는 제작사가 아니라면 아이콘을 흑백으로 변경
		if ($(this).attr("code") !== makerCode) {
			$(this).attr("src", "/img/" + $(this).attr("id") + ".png");
		}
	});

	//제작사 이이콘 클릭시 :
	$(".selMaker img").click(function () {
		//현재 선택레벨을 0으로 설정 (제작사 선택단계)
		nowLevel = 0;

		//클릭한 아이콘이 현재 선택되어 있는 제작사가 아니라면
		if ($(this).attr("code") !== makerCode) {
			//each() 메소를 사용하여 각각 아이콘들을 흑백으로 만든 다음,
			$(".selMaker img").each(function () {
				$(this).attr("src", "/img/" + $(this).attr("id") + ".png");
			});

			//클릭한 아이콘을 전체칼라로 변환후,
			$(this).attr("src", "/img/" + $(this).attr("id") + "_sel.png");

			//makerCode 변수에 현재 클릭한 아이콘의 제작사 코드를 입력하고,
			makerCode = $(this).attr("code");

			//제작사를 선택하세요 글씨부분을 숨긴 후 checkList() 실행
			$(".selMaker_title").animate(
				{ marginTop: "0px" },
				300,
				function () {
					$(this).css({ color: "#ae376c" });
					$(this).text(
						"본 콘텐츠는 강대공 기술연구소의 협찬으로 제작 되었습니다."
					);
					$.checkList();
				}
			);
		}
	});

	//차종, 시스템1, 시스템2, 회로도 제목을 클릭 했을때
	$(document).on("click", ".resultArea div", function () {
		let rectDefind = $(this).attr("class");
		switch (rectDefind) {
			case "car":
				nowLevel = 1;
				carCode = $(this).attr("code");
				$("#selCar span:nth-of-type(2)").text($(this).text());
				$("#selCar").showSel();
				$.checkList();
				break;

			case "sys1":
				nowLevel = 2;
				sys1Code = $(this).attr("code");
				$("#selSys1 span:nth-of-type(2)").text($(this).text());
				$("#selSys1").showSel();
				$.checkList();
				break;

			case "sys2":
				nowLevel = 3;
				sys2Code = $(this).attr("code");
				$("#selSys2 span:nth-of-type(2)").text($(this).text());
				$("#selSys2").showSel();
				$.checkList();
				break;

			case "circuitList":
				nowLevel = 4;
				$.circuitScreen($(this).attr("code"));
				break;

			default:
				break;
		}
	});

	//다시보기 버튼을 클릭했을때
	$(".selRect button").click(function () {
		let trgLevel = Number($(this).attr("definder"));
		nowLevel = trgLevel;
		$.checkList();
	});

	//회로도 뷰 닫기 버튼 클릭
	$("#circuitClose").click(function () {
		$(".circuitView").fadeOut(200);
		$("#circuitPic").empty();
	});
});
