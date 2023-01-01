// Assignment Codechoice4

// Here is an array for each type of characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ['`','~','!','@','#','$','%','^','&','*','(',')','_',',','{','}','[',']',':',';','.','<','>','/','?','\','|',']
var pass = [];

function generatePassword() {
// Prompt Object Code
includeNumbers = window.confirm("Do you want your password to include Numbers?")
includeLowerCase = window.confirm("Do you want your password to include Capital Letters?")
includeUpperCase = window.confirm("Do you want your password to include Lowercase Letter?")
includeSymbols = window.confirm("Do you want your password to include Symbols?")
var passLength = window.prompt("Enter the length of your password.");

  // N
if (includeNumbers == true & includeLowerCase == false & includeUpperCase == false & includeSymbols == false) {

var combined = numbers
  // U
} else if (includeLowerCase == true & includeNumbers == false & includeUpperCase == false & includeSymbols == false) {

  var combined = upperCase
    // L
} else if (includeUpperCase == true & includeNumbers == false & includeLowerCase == false & includeSymbols == false) {

  var combined = lowerCase
    // S
} else if (includeSymbols == true & includeNumbers == false & includeLowerCase == false & includeUpperCase == false) {

  var combined = symbols
  // NL
} else if (includeNumbers == true & includeLowerCase == true & includeUpperCase == false & includeSymbols == false) {
  var combined = numbers.concat(lowerCase)
  // NU
} else if (includeNumbers == true & includeUpperCase == true & includeLowerCase == false & includeSymbols == false) 
{
  var combined = numbers.concat(upperCase)
// NS
} else if (includeNumbers == true & includeSymbols == true & includeLowerCase == false & includeUpperCase == false) {

  var combined = numbers.concat(symbols)
// LU
} else if (includeLowerCase == true & includeUpperCase == true & includeNumbers == false & includeLowerCase == false) {

  var combined = lowerCase.concat(upperCase)
// LS
} else if (includeLowerCase == true & includeSymbols == true & includeNumbers == false & includeUpperCase == false) {

  var combined = lowerCase.concat(symbols)
// US
} else if (includeUpperCase == true & includeSymbols == true & includeLowerCase == false & includeUpperCase == false) {

  var combined = upperCase.concat(symbols)
// NLU
} else if (includeNumbers == true & includeLowerCase == true & includeUpperCase == true & includeSymbols == false) {
 var combined = numbers.concat(lowerCase, upperCase)
}
// LUS
else if (includeNumbers == false & includeLowerCase == true & includeUpperCase == true & includeSymbols == true) {
  var combined = lowerCase.concat(upperCase, symbols)
 } // NLUS
else if (includeNumbers == true & includeLowerCase == true & includeUpperCase == true & includeSymbols == true) {
  var combined = numbers.concat(lowerCase, upperCase, symbols)
 }
console.log(passLength)
// Generates a Password 
for (let i = 0; i < passLength; i++) {
  var x = Math.floor(Math.random() * combined.length);
  pass.push(combined[x])
}
return pass;
}
 



// Write password to the #password input
function writePassword() {
  var pass = generatePassword(); 
  var passwordString = pass.join("")
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordString
  return
}

var generateBtn = document.querySelector("#generate");
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
