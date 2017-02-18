//make an object of functionalities you will call more than once
var hangman = {
	win:0,
	computerChoices:["blueberry", "strawberry", "raspberry"],
	//generates the word for us from the above array
	randomWord: function (){
		var result = Math.floor(Math.random() * this.computerChoices.length);
		var computerGuess = this.computerChoices[result];
		return computerGuess;
		
	},
	//use "this" to grab te value of the above item in the object
	guessRemaining: 9,

	//write this funtion so you can call it later when you want to write to the 
	//DOM so you dont have to get element by ID
	grabId: function(element){
		var grab = document.getElementById(element);
		return grab;
	},
	//rewriting in the DOM yall
	output: function(elementID, value){
		return this.grabId(elementID).textContent = value;
	}

	
};


//document.onkeyup = function (event){
	//must call it here so it runs wach time the user presses a key
//	var test = [];

//	for (var i = 0; i < Things.length; i++) {
//		Things[i]
//	}
};