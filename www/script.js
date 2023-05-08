if(localStorage.getItem("theme") == "null"){
	mint();
}if(localStorage.getItem("theme") == "blue"){
	blue();
}else if(localStorage.getItem("theme") == "gold"){
	gold();
}else if(localStorage.getItem("theme") == "pink"){
	pink();
}else if(localStorage.getItem("theme") == "mint"){
	mint();
}

var language = "en";
var edulevel = "menu1"
function opentab(a){
	var i;
	var x = document.getElementsByClassName("maintabs");
	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	document.getElementById("eduprompt").style.display = "none";
	document.getElementById(a).style.display = "block";
	document.getElementById("inilink").style.display = "inline-block";
	document.getElementById("descbar".innerHTML = "Primary School");
}

function blue(){
	document.body.style.setProperty("--prm", "#05445E");
	document.body.style.setProperty("--sec", "#5bb4aa");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--hvr", "#d4f1f4");
	document.body.style.setProperty("--bgi", "url('blue.png')");
	localStorage.setItem("theme", "blue");
}
function gold(){
	document.body.style.setProperty("--prm", "#ca9c16");
	document.body.style.setProperty("--sec", "#faed33");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--hvr", "#d4f1f4");
	document.body.style.setProperty("--bgi", "url('gold.png')");
	localStorage.setItem("theme", "gold");
}
function mint(){
	document.body.style.setProperty("--prm", "#000000");
	document.body.style.setProperty("--sec", "#00ffc2");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--hvr", "#ffffff");
	document.body.style.setProperty("--bgi", "url('mint.png')");
	localStorage.setItem("theme", "mint");
}
function pink(){
	document.body.style.setProperty("--prm", "#ffa5b8");
	document.body.style.setProperty("--sec", "#f52b8f");
	document.body.style.setProperty("--fnt", "#ffffff");
	document.body.style.setProperty("--hvr", "#ffffff");
	document.body.style.setProperty("--bgi", "url('pink.png')");
	localStorage.setItem("theme", "pink");
}
