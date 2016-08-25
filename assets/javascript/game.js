// initial state of playing or not
var playing = false;

//establishes starting scores
var wins = 0;
var losses = 0;

// establishes good and bad guesses

// var badGuess = [];
// var goodGuess = [];

// randomly selects an element from the dictionary array
var guessWord = dictionary[Math.floor(Math.random() * dictionary.length)];

// puts each letter of guessWord into an array
var letters = guessWord.split("");

// establishes the variabes placeHolder, yes, and no, as empty arrays
var placeHolder = [];
var good = [];
var bad = [];

// makes the variable dash an underscore and a space after it for convenience
var dash = "_ ";

// displays a place holder image for every letter in the word
for (var i = 0; i < letters.length; i++) {
	placeHolder.push(dash);
}

for ( var i = 0; i < letters.length; i++){
	var checker = letters.charAt(i);
	if (checker == letters[i]){}
}


	console.log(placeHolder);letters
	console.log(guessWord);



// var hangman = {
// 	start: function(guessWord){
// 		var letters = guessWord.split("");
// 		console.log(letters);	
// }

// }

//!! -- OLD -- !! establishes the variable "guess" as whatever the user enters
//on the keyboard, and changes it to a lower case letter
// document.onkeyup = function(event) {
// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// }



//!! -- OLD -- !! makes guessChar recognize the word as text characters
//checks to see if userGuess matches any of the characters
// function guessCheck(letter) {
// var guessChar = guessWord.innerHTML;
// var guessWrong = true;

// for (var i = 0; i < guessWord.length; i++) {
// 	if 
// }


// }

//!! -- OLD -- !! displays start playing message and wins vs lossses
// var html = "<p>Press any key to get started!</p>"
//  +
// "<p>wins: " + 
// wins + 
// "</p>" +
// "<p>losses: " + 
// losses + 
// "</p>";