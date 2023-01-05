var startButton = document.querySelector(".start-button");
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var resetButton = document.querySelector(".reset-button");
var timerCount = document.querySelector(".timer-count");

var words = ["variable", "array", "modulus", "object", "function", "string", "boolean"];
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
    for (let i = 0; i < choosenWord.length; i++) {
    var choosenLetter = event.key;
    console.log(choosenLetter)
    
        if (choosenLetter === choosenWord[i]) {
            placeHolder.splice("_", i, choosenWord[i]);
        }
}});

wordBlank.textContent = placeHolder