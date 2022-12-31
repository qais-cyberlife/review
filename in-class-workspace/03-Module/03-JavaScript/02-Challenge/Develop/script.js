// Assignment Code
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var capitalCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["!", "#", "$", "%" , "&" , "'" , "(" , ")" , "*" , "+" ,"," , "-" ,"." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "]"];
var pass = [];

var generateBtn = document.querySelector("#generate");
choice = window.prompt("Enter the letter to the types of characters you want to use in your code. \nA) Numbers \nB) Capital Letters \nC) Lowercase Letter \nD) Symbols \n Ex. The Syntax is (abc) if you just want Numbers, Capital Letters, and Lowercase letters in your password")
passLength = window.prompt("Enter the length of your password.")

if (choice === "a") {
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * numbers.length);
    pass.push(numbers[x]);
  }
} else if (choice === "b") {
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * capitalCase.length);
    pass.push(capitalCase[x]);
  }
} else if (choice === "c") {
  for (let i = 0; i < passLength; i++) {
    x = Math.floor(Math.random() * lowerCase.length);
    pass.push(lowerCase[x]);
  }
} else if (choice === "d") {
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
}


console.log(pass)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();abc
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
