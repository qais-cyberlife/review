// Assignment Code
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var capitalCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]"];
var pass = [];


var generateBtn = document.querySelector("#generate");
choice1 = window.confirm("Do you want your password to include Numbers?")
choice2 = window.confirm("Do you want your password to include Capital Letters?")
choice3 = window.confirm("Do you want your password to include Lowercase Letter?")
choice4 = window.confirm("Do you want your password to include Symbols?")

passLength = window.prompt("Enter the length of your password.")

if (choice1) {
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * numbers.length);
    pass.push(numbers[x]);
  }
} else if (choice2) {
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * capitalCase.length);
    pass.push(capitalCase[x]);
  }
} else if (choice3) {
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * lowerCase.length);
    pass.push(lowerCase[x]);
  }
} else if (choice4) {
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * symbols.length);
    pass.push(symbols[x]);
  }
} else if (choice == "ab") {
  combined = numbers.concat(capitalCase)
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * combined.length);
    pass.push(combined[x]);
  }
} else if (choice == "ac" || "ca") {
  combined = numbers.concat(lowerCase)
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * combined.length);
    pass.push(combined[x]);
  }
} else if (choice == "ad" || "da") {
  combined = numbers.concat(symbols)
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * combined.length);
    pass.push(combined[x]);
  }
} else if (choice == "bc" || "cb") {
  combined = capitalCase.concat(lowerCase)
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * combined.length);
    pass.push(combined[x]);
  }
} else if (choice == "bd" || "db") {
  combined = capitalCase.concat(symbols)
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * combined.length);
    pass.push(combined[x]);
  }
} else if (choice == "cd" || "dc") {
  combined = capitalCase.concat(symbols)
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * combined.length);
    pass.push(combined[x]);
  }
} else 
if (choice.length =3 && choice == "abc" || "acb" || "bac" || "bca" || "cab" || "cba") {
  combined = numbers.concat(symbols, lowerCase);

  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * combined.length);
    pass.push(combined[x]);
  }
}

console.log(combined);


// console.log(pass)

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); abc
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
