var wins = 0; 
var loses = 0;
var ties = 0;

values = ["Rock", "Scissors", "Paper"]


var choice = prompt("Welcome to the Rock, Paper, Scissors Game! Choose R, S, or P.");


    var min = 0; 
    var max = 3;
    var randomInt = Math.floor(Math.random()*(max-min)+min);
    var computer = values[randomInt];


    function play() {
        if ( 
            choice === "R" && computer == "Rock" ||
            choice === "S" && computer == "Scissors" ||
            choice === "P" && computer == "Paper" 
            ) {
            window.alert("It's a tie!");
            ties ++;
        } else if (
            choice === "R" && computer == "Scissors" ||
            choice === "S" && computer == "Paper" ||
            choice === "P" && computer == "Rock" 
        ) {
            window.alert("You Won!");
            wins ++;
        } else if (
            choice === "R" && computer == "Paper" ||
            choice === "S" && computer == "Rock" ||
            choice === "P" && computer == "Scissors" 
        ){
            window.alert("You Lost!");
            loses ++;
        }
        return
        };

window.alert("The Computer choose " + computer);
play ();