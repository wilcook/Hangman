
// Welcome to my broken code!
// Please halp!

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
	// originally I did not have checker as an object -- this was something I tried because it did not work
	// when it was a function in the code lower down. alas, it still does not work.
	checker: function(){
		// if it does match, and hasn't already been guessed right, it gets pushed to the array x.good, also a celebratory gunshot sound
		for (i=0;i<x.letters.length;i++){
			if (x.key[0] == x.letters[i] && x.key[0] != x.good[i]){
				x.good.push(x.key[0]);
				x.key = [];
}
		// This part isn't fully set up, because when I changed things around to be able
		// to add sound, other, prior stuff stopped working. I uncommented it to turn it
		// in to make it easier to read, but I had it commented out for debugging.
		// this is the gunshot
			$(document).ready(function(){
			$("#jquery_jplayer_1").jPlayer({
				ready: function(){
					$(this).jPlayer("setMedia",{
			mp3: "assets/audio/gunshot.mp3"
			}).jPlayer("play");
						var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
	          var kickoff = function () {
	            $("#jquery_jplayer_1").jPlayer("play");
	            document.documentElement.removeEventListener(click, kickoff, true);
	          };
	          document.documentElement.addEventListener(click, kickoff, true);
	        },
	        swfPath: "/js",
	        loop: false
	      });
	    });

		// if there is no match, and hasn't already been guessed wrong, it gets pushed to the array x.bad and a man yells 
		else if (x.key[0] != x.letters[i] && x.key[0] != x.bad[i]){
			x.bad.push(x.key[0]);
			x.key = [];
}
		// This part isn't fully set up, because when I changed things around to be able
		// to add sound, other, prior stuff stopped working. I uncommented it to turn it
		// in to make it easier to read, but I had it commented out for debugging.
		// this part is where a man yells
			$(document).ready(function(){
			$("#jquery_jplayer_1").jPlayer({
				ready: function(){
					$(this).jPlayer("setMedia",{
			mp3: "assets/audio/lose.mp3"
			}).jPlayer("play");
						var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
	          var kickoff = function () {
	            $("#jquery_jplayer_1").jPlayer("play");
	            document.documentElement.removeEventListener(click, kickoff, true);
	          };
	          document.documentElement.addEventListener(click, kickoff, true);
	        },
	        swfPath: "/js",
	        loop: false
	      });
	    });
		// This part isn't fully set up, because when I changed things around to be able
		// to add sound, other, prior stuff stopped working. I uncommented it to turn it
		// in to make it easier to read, but I had it commented out for debugging.
		// if the player presses anything other than a letter a horse says nay to that
		else {$(document).ready(function(){
			$("#jquery_jplayer_1").jPlayer({
				ready: function(){
					$(this).jPlayer("setMedia",{
		mp3: "assets/audio/neigh.mp3"
		}).jPlayer("play");
					var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          var kickoff = function () {
            $("#jquery_jplayer_1").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
          };
          document.documentElement.addEventListener(click, kickoff, true);
        },
        swfPath: "/js",
        loop: false
      });
    });
}
}
},
}



// readies audio files per jPlayer API
$(this).jPlayer("setMedia",assets/audio/gbu.mp3);

// when the start button is clicked, game mode begins, a word is selected, the word is 
// split into an array of letters, and one cactus appears for every letter to be guessed
$("#start").on("click", function(){
	x.playing = true;
	x.word = dictionary[Math.floor(Math.random() * dictionary.length)];
	x.letters = x.word.split("");

// this should display one cactus for every element in x.letters but it doesn't work sadclown.bmp
// it stopped working after I tried to make it object-oriented.
	for(i=0;i<x.letters.length;i++){
		$("#cactuses").append('<img id="cactuses" src="../images/cactus.png"');
	}
	// console.log(x.playing);
	// console.log(x.word);
	// console.log(x.letters);
}
)
	
// while in game play, when a key is pressed the user's guess is pushed to the array x.key
// next, it checks if the letter in x.key matches any of the letters in the word to guess
document.onkeypress = function(event) {
	x.key.push(String.fromCharCode(event.keyCode).toLowerCase());
	// console.log(x.key);
	if (x.playing == true && x.key == /^[a-z]+$/){
		checker();
}
}
