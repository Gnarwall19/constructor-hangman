var choosenWord = require('./word.js');
var word;
var lettersArray = [];
var guesses = [];

function Letters() {
    word = choosenWord.randomWord();
    for (var i = 0; i < word.length; i++) {
        lettersArray[i] = word[i];
        guesses[i] = '_';
        //console.log(lettersArray);
    }
};
//Letters();

module.exports = { lettersArray, guesses, Letters };