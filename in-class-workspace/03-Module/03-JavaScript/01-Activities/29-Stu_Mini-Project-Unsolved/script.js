var wins = 0;
var loses = 0;
var ties = 0;

// Values for the computer to choose from
values = ["Rock", "Scissors", "Paper"]

var playGame = function () {

    var choice = prompt("Welcome to the Rock, Paper, Scissors Game! Choose R, S, or P.");


    var min = 0;
    var max = 3;
    var randomInt = Math.floor(Math.random() * (max - min) + min);
    var computer = values[randomInt];

    if (!choice) {
        return;
    }
    if (
        choice === "R" && computer == "Rock" ||
        choice === "S" && computer == "Scissors" ||
        choice === "P" && computer == "Paper"
    ) {
        window.alert("It's a tie!");
        ties++;
    } else if (
        choice === "R" && computer == "Scissors" ||
        choice === "S" && computer == "Paper" ||
        choice === "P" && computer == "Rock"
    ) {
        window.alert("You Won!");
        wins++;
    } else {
        window.alert("You Lost!");
        loses++;
    }

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + loses + "\nTies " + ties
    );

    var playAgain = window.confirm("Play Again?");

    if (playAgain) {
        playGame();
    }
};


window.alert("The Computer choose " + computer);
