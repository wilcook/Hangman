// game objects
// **************************************************************************************
var x = {
	playing: false,
	word: "",
	letters: [],
	blanks: 0,
	guesses: 6,
	blankOrGood: [],
	good: [],
	bad: [],
	wins: 0,
	losses: 0,
	chances: 0,
	victory: false,
	key: [],
	checker: function(){},
}


// game functions
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
		$("#cactuses").append("<img id='cactuses' src='assets/images/cactus.png' height=50px width=auto>");
	}
	

	// checking
	console.log("x.playing "+x.playing);
	console.log("x.word "+x.word);
	console.log("x.letters "+x.letters);
	console.log("x.blanks "+x.blanks);
	console.log("x.guesses "+x.guesses);
	console.log("x.bad "+x.bad);
	console.log("x.blankOrGood "+x.blankOrGood);
	});


// main process
// **************************************************************************************