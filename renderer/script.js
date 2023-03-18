var language = "en";
var edulevel = "primary"

function toEn(){
	document.getElementById("descbar").innerHTML = "English";
	document.getElementById("langprompt").style.display = "none";
}
function toBm(){
	document.getElementById("descbar").innerHTML = "Bahasa Melayu";
	document.getElementById("langprompt").style.display = "none";
}
function opentab(a){
	var i;
	var x = document.getElementsByClassName("maintabs");
	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	document.getElementById(a).style.display = "block";
}
