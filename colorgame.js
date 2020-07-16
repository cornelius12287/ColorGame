var numSquares = 6;
var colors = [];
var pickedColor;
var modeButtons = document.querySelectorAll('.mode');
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

// RESET BUTTON
resetButton.addEventListener("click", function(){
	reset();
})

// CHOOSE TARGET COLOR
pickedColor = pickColor();


init();
function init(){
	setModeButtons();
	setSquares();
	reset();
}

// CREATE MODE BUTTONS FUNCTION
function setModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			for (var j=0; j<modeButtons.length; j++){
				modeButtons[j].classList.remove('selected');
			}
			this.classList.add('selected');
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

// CREATE SQUARES FUNCTION
function setSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			// correct choice
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			// incorect choice
			else{
				this.style.transition = "all 500ms";
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again...";
			}
		});
	}
}

// RESET FUNCTION
function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// RANDOM COLOR ARRAY
function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

// GENERATE RANDOM COLORS
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return ("rgb(" + r + ", " + g + ", " + b + ")");
}

// CHANGING ALL SQUARES TO CORRECT COLOR
function changeColors(color){
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

// SELECT TARGET COLOR
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}





// var game = {}

// // INIT
// game.init = function(){
// 	game.numSquares = 6;
// 	game.colors = [];
// 	game.pickedColor;
// 	game.modeButtons = document.querySelectorAll('.mode');
// 	game.squares = document.querySelectorAll(".square");
// 	game.colorDisplay = document.getElementById("colorDisplay");
// 	game.messageDisplay = document.querySelector("#message");
// 	game.h1 = document.querySelector("h1");
// 	game.resetButton = document.querySelector("#reset");
	
// 	game.setModeButtons();
// 	game.setSquares();
// 	game.reset();
// }

// // CREATE MODE AND RESET BUTTONS
// game.setModeButtons = function(){
// 	// mode buttons
// 	for(var i=0; i<modeButtons.length; i++){
// 		modeButtons[i].addEventListener("click", function(){
// 			for (var j=0; j<modeButtons.length; j++){
// 				modeButtons[j].classList.remove('selected');
// 			}
// 			this.classList.add('selected');
// 			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
// 			reset();
// 		});
// 	};
// 	// reset button
// 	resetButton.addEventListener("click", function(){
// 		reset();
// 	});
// }

// // EDIT SQUARES VIA CLICK LISTENER
// game.setSquares = function(){
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].addEventListener("click", function(){
// 			var clickedColor = this.style.backgroundColor;
// 			// correct choice
// 			if(clickedColor === pickedColor){
// 				messageDisplay.textContent = "Correct!"
// 				resetButton.textContent = "Play Again?"
// 				changeColors(clickedColor);
// 				h1.style.backgroundColor = clickedColor;
// 			}
// 			// incorect choice
// 			else{
// 				this.style.transition = "all 500ms";
// 				this.style.background = "#232323";
// 				messageDisplay.textContent = "Try Again...";
// 			}
// 		});
// 	}
// }

// // RESET BUTTON
// game.reset = function(){
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	resetButton.textContent = "New Colors";
// 	for(var i=0; i<squares.length; i++){
// 		if (colors[i]){
// 			squares[i].style.display = "block";
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.backgroundColor = "steelblue";
// }

// // GENERATE RANDOM COLORS
// game.generateRandomColors = function(num){
// 	var arr = [];
// 	for(var i=0; i<num; i++){
// 		arr.push(randomColor());
// 	}
// 	return arr;
// }

// // CREATE RANDOM COLOR
// game.randomColor = function(){
// 	var r = Math.floor(Math.random()*256);
// 	var g = Math.floor(Math.random()*256);
// 	var b = Math.floor(Math.random()*256);
// 	return ("rgb(" + r + ", " + g + ", " + b + ")");
// }

// // NEW COLORS
// game.changeColors = function(color){
// 	for(var i=0; i<colors.length; i++){
// 		squares[i].style.backgroundColor = color;
// 	}
// }

// // PICK TARGET COLOR
// game.pickColor = function(){
// 	var random = Math.floor(Math.random()*colors.length);
// 	return colors[random];
// }

// // START GAME
// game.init();