var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();

}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {

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


}



function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
	    	this.classList.add("selected");

	    	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;


	    	reset();

		});
	}
}



function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Colors";
	//loop through colors array to hide colors based on easy or hard
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";


}

//resets game if reset button is clicked
resetButton.addEventListener("click", function() {
	reset();

});



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










