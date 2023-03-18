var language = "en";
var edulevel = "primary"
function toPs(){
	document.getElementById("descbar").innerHTML = "Sekolah rendah - placeholder kosong1 -";
	document.getElementById("langprompt").style.display = "none";
}
function toSs(){
	document.getElementById("descbar").innerHTML = "Sekolah menengah - placeholder kosong 2 -";
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
