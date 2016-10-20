// game objects
// **************************************************************************************
var x = {
	playing: false,
	word: "",
	letters: [],
	blanks: 0,
	guesses: 6,
	blankOrGood: [],
	good: false,
	bad: [],
	wins: 0,
	losses: 0,
	chances: 0,
	victory: false,
	key: "",
	tallyer: function(){
		if(x.good == true){
			for (var i = 0; i < x.letters.length; i++) {
					$("#cactus"+i).hide("slow");
					$("#cactus"+i).html(x.key);
}
}

		else{
			x.bad.push(x.key);
			x.guesses --;
}
},
	checker: function(){
		// console.log("checker starts");
		if ((x.playing == true) && (x.key >= "a") && (x.key <= "z")) {
			// console.log("if then works");

			for (var i = 0; i < x.letters.length; i++) {
				if (x.key == x.letters[i]){

					console.log("correct guess x.good "+x.good);
					console.log("cactus"+i);
}
		else{
			x.good = false;
			console.log("bad guess x.good: "+x.good);
		}
}
}
},
}



// click start
// **************************************************************************************
$("#start").on("click", function(){
	// game mode is enacted
	x.playing = true;

	// cactuses are cleared
	$("#cactuses").html("");
	
	// word is selected and split into letters and number of blanks
	x.word = dictionary[Math.floor(Math.random() * dictionary.length)];
	x.letters = x.word.split("");
	x.blanks = x.letters.length;
	
	// reset scores and lives
	x.guesses = 6;
	x.bad = [];
	x.blankOrGood = [];

	// push number of letters to to x.blankOrGood
	for (var i = 0; i < x.letters.length; i++) {
		$("#cactuses").append("<img id=cactus"+i+" src='assets/images/cactus.png' height=46px width=auto>");
	}

	// populates score board
	$(".guessesLeft").html(x.guesses);
	$(".winCount").html(x.wins);
	$(".lossCount").html(x.losses);

	console.log("You cheatin' varmint!")


	// checking
	// console.log("x.playing "+x.playing);
	console.log("x.word "+x.word);
	// console.log("x.letters "+x.letters);
	// console.log("x.blanks "+x.blanks);
	// console.log("x.guesses "+x.guesses);
	// console.log("x.bad "+x.bad);
	// console.log("x.blankOrGood "+x.blankOrGood);

	});


// press keys
// **************************************************************************************

document.onkeypress = function(event) {
	x.key = String.fromCharCode(event.keyCode).toLowerCase();
	// console.log("x.key "+x.key);
	// console.log("x.playing "+x.playing);
	x.checker();
	x.tallyer();
}