var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};

});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	};

});

//resets game if reset button is clicked
resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "Choose Wisely";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}

	h1.style.background = "steelblue";

});

for (var i = 0; i < squares.length; i++) {

	//adding colors to squares
	squares[i].style.background = colors[i];

	//add click event listeners to squares
	squares[i].addEventListener("click", function() {

		//select clicked color
		var clickedColor = this.style.background;

		//compare clicked color vs. picked color
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			
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
	};


}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(number) {
	var randomColorsArray = [];
	for (var i = 0; i < number; i++) {
		randomColorsArray.push(randomColor());
	};

	return randomColorsArray;

}

function randomColor() {

	//create random color for rgb values
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}










