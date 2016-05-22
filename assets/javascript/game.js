var wordlist = [
["F", "R", "I", "E", "N", "D", "S"],
  ["F","U","L","L","H","O","U","S","E"],
  ["D","O","U","G"],
  ["O","V","E","R","A","L","L","S"],
  ["G","A","M","E","B","O","Y"],
  ["S","L","I","M","E"]
]
var random = Math.floor((Math.random()*(wordlist.length-1)));

var word = wordlist[random]; // the word to guess will be chosen from the array above
var guessword = new Array(word.length);
var remaining = word.length; // number of letters not guessed properly yet

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < guessword.length; i++){
    guessword[i] = "_ ";
}

var wins = 0;
var losses = 0;
var guesses = 12;
var arr = []; // This array holds the user's guesses so far



/*Records the keypress and then sets it to the user press. */

    document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

        var repeat = 0; // 0 means no repeat, 1 means repeated and should be ignored
        for (var i = 0; i < arr.length; i++){
            if (userGuess == arr[i]) {
                repeat = 1;
            }
        }

        if (repeat == 0) {  //The big loop ending on line 73

        arr.push(userGuess);
        guesses--;
        var success = 0; // 0 means user guess did not match, 1 means it mathed 1 or more times

        for (var i = 0; i < word.length; i++){
            if (word[i] == userGuess) {
                success = 1;
                guessword[i] = word[i];
                remaining--;
            }
        }

        if (remaining == 0 || guesses == 0) {// one game ends with a win or loss. Refresh and start again.
                                                     
            if (remaining == 0) {
                wins++;
            }
            else {
                losses++;
            }

            guesses = 12;  //this is part of the bigger if statement from line 54
            arr = [];
            random = Math.floor((Math.random()*(wordlist.length-1)));

            word = wordlist[random]; // the word to guess will be chosen from the array above
            guessword = new Array(word.length);
            remaining = word.length;

            // every letter in the word is symbolized by an underscore in the guessfield
            for (var i = 0; i < guessword.length; i++){
                guessword[i] = "_ ";
                    }
        }

        }

            //Taking the tallies and displaying them in HTML

    var html = "<h2> guessword: " + guessword + "</h2>" +
            "<br>" +
            "<h2> Number of guesses remaining: " + guesses + "</h2>" +
            "<br>" +
            "<h2> Wins: " + wins + "</h2>" +
            "<br>" +
            "<h2> Losses: " + losses + "</h2>" +
            "<br>" +
            "<h2> Letters already guessed: " + arr + "</h2>";

            // Placing the html in to the game id.

    document.querySelector('#game').innerHTML = html;

    }