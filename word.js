var words = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'lightsaber'];
function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
    //console.log(word);
};
//randomWord();

module.exports = { randomWord };