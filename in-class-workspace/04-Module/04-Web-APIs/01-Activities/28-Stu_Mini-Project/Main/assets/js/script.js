var startButton = document.querySelector(".start-button");
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var resetButton = document.querySelector(".reset-button");
var timerCount = document.querySelector(".timer-count");

var words = ["computer", "network", "vscode", "object", "string"];
var placeHolder = [];
x = Math.floor(Math.random() * words.length)
var choosenWord = words[x];

console.log(choosenWord);

console.log(choosenWord.length);
console.log(typeof choosenWord);

for (let i = 0; i < choosenWord.length; i++) {
    placeHolder.unshift("_ ")
};

console.log(typeof placeHolder);
console.log(placeHolder);

    document.addEventListener('keydown', function replaceDash(event) {
        var choosenLetter = event.key;
        console.log(choosenLetter)
        var letter = choosenWord.indexOf(choosenLetter);
        console.log(letter)

                placeHolder[letter] = choosenLetter
        console.log(placeHolder)
        wordBlank.textContent = placeHolder;
    })