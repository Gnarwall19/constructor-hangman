var inquirer = require('inquirer');
var letters = require('./letter.js');

var wins = 0;
var losses = 0;

var lettersArray;
var guesses;
var guessesLeft;

function Game() {
    lettersArray = letters.lettersArray;
    guesses = letters.guesses;

    lettersArray.length = 0;
    guesses.length = 0;

    guessesLeft = 10;

    letters.Letters()

    promptUser();
}

function promptUser() {
    console.log(guesses.join());
    console.log(guessesLeft + ' GUESSES REMAINING');
    //console.log(lettersArray);

    inquirer.prompt([
        {
            name: 'guess',
            message: 'Please select a letter...'
        }
    ]).then(function (answers) {
        if (lettersArray.indexOf(answers.guess) === -1) {
            guessesLeft--;
            console.log('INCORRECT');
        }
        for (var i = 0; i < lettersArray.length; i++) {
            if (answers.guess === lettersArray[i]) {
                guesses[i] = lettersArray[i];
                console.log('CORRECT!\nThe Word was: ' + lettersArray.toString());
            }
        }
        if (lettersArray.toString() === guesses.toString()) {
            console.log('WINNER!!');
            wins++;
            console.log('WINS: ' + wins + '\nLOSSES: ' + losses);
            newGame();
        } else if (guessesLeft === 0) {
            console.log('YOU LOSE...\nThe Word was: ' + lettersArray.toString() + '\nGAME OVER.');
            losses++;
            console.log('WINS: ' + wins + '\nLOSSES: ' + losses);
            newGame();
        } else {
            promptUser();
        }
    });
};

function newGame() {
    inquirer.prompt([
        {
            name: 'reset',
            message: 'Would you like to start a New Game?',
            type: 'confirm'
        }
    ]).then(function (answers) {
        if (answers.reset) {
            Game();
        } else {
            return;
        }
    });
};

Game();