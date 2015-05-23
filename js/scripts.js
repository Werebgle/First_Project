function getDate() {
				document.getElementById("date").innerHTML = Date();
			}

//SAME CODE AS BELOW WITH ANONYMOUS FUNCTION
//jQuery(document).ready(function () {
//	jQuery(".h1Class").hide().show("slow");
//});

function myCode() {
	$(".h1Class"). hide().show("slow");
};

$(document).ready(myCode);
