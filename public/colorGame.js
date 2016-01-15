var colors = generateRandomColors(6);

var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; squares.length; i++) {

	//adding colors to squares
	squares[i].style.background = colors[i];

	//add click event listeners to squares
	squares[i].addEventListener("click", function() {

		//select clicked color
		var clickedColor = this.style.background;

		//compare clicked color vs. picked color
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again...";
		}

	});

}

function changeColors(color) {
	//loop through the squares
	//change style of all squares to picked color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}


}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(number) {
	var randomColorsArray = [];

	for(var i = 0; i < number; i++) {
		randomColorsArray.push(randomColor());
	}

	return randomColorsArray;

}

function randomColor() {
	//random red color
	var red = Math.floor(Math.random() * 256);

	//random green color
	var green = Math.floor(Math.random() * 256);

	//random blue color
	var blue = Math.floor(Math.random() * 256);

	return "rgb (" + red + ", " + green + ", " + blue + ")";


}










