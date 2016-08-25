// game objects
var x = {
	playing: false,
	word: "",
	letters: [],
	wins: 0,
	losses: 0,
	chances: 0,
	good: [],
	bad: [],
	victory: false,
	key: [],
	winAudio: document.createElement('gbu'),
	loseAudio: document.createElement('yell'),
	clickBang: document.createElement('shot'),
	horse: document.createElement('neigh'),
	checker: function(){
		// if it does match, and hasn't already been guessed right, it gets pushed to the array x.good
		for (i=0;i<x.letters.length;i++){
			if (x.key[0] == x.letters[i] && x.key[0] != x.good[i]){
				x.good.push(x.key[0]);
				x.key = [];
}
		// if there is no match, and hasn't already been guessed wrong, it gets pushed to the array x.bad
		else if (x.key[0] != x.letters[i] && x.key[0] != x.bad[i]){
			x.bad.push(x.key[0]);
			x.key = [];
}
}
},
}

// when the start button is clicked, game mode begins, a word is selected, the word is 
// split into an array of letters, and one cactus appears for every letter to be guessed
$("#start").on("click", function(){
	x.playing = true;
	x.word = dictionary[Math.floor(Math.random() * dictionary.length)];
	x.letters = x.word.split("");

// this should display one cactus for every element in x.letters but it doesn't work sadclown.bmp
	for(i=0;i<x.letters.length;i++){
		$("#cactuses").append('<img id="cactuses" src="../images/cactus.png"');
	}
	console.log(x.playing);
	console.log(x.word);
	console.log(x.letters);
}
)
	
// while in game play, when a key is pressed the user's guess is pushed to the array x.key
// next, it checks if the letter in x.key matches any of the letters in the word to guess
document.onkeypress = function(event) {
	x.key.push(String.fromCharCode(event.keyCode).toLowerCase());
	console.log(x.key);
	if (x.playing == true && x.key == /^[a-z]+$/){
		checker();
}
}
