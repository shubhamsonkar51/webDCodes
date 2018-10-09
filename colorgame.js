var len = 6;
var colors= generateColors(len);
var sq=document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
colorDisplay.textContent = pickedColor;

for(var i=0;i<sq.length;i++){
	sq[i].style.backgroundColor = colors[i];

	sq[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor){
				messageDisplay.textContent="Chutiya";
				changeColors(this.style.backgroundColor);
				h1.style.backgroundColor=clickedColor;
		} 
		else{
			//clickedColor=document.querySelector("body").style.background;
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Lawdu" ;
		}

	});	
}

function changeColors(color) {
	for (var i =0; i < sq.length; i++) {
		sq[i].style.backgroundColor = color;
	}
}

function pickColor(){
	return (colors[Math.floor(Math.random()*colors.length)]);
}

function generateColors(lent) {
	var col=[];
	for (var i = 0; i<lent; i++) {
		var r= Math.floor(Math.random()*256);
		var g= Math.floor(Math.random()*256);
		var b= Math.floor(Math.random()*256);
		col.push("rgb("+ r+", "+g+", "+b+")");
	}
	return col;


}