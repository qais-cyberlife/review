// Assignment Codechoice4

// Here is an array for each type of characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Symbols = ['`','~','!','@','#','$','%','^','&','*','(',')','_',',','{','}','[',']',':',';','.','<','>','/','?','\','|',']

// Prompt Object Code
includeNumbers = window.confirm("Do you want your password to include Numbers?")
includeLowerCase = window.confirm("Do you want your password to include Capital Letters?")
includeUpperCase = window.confirm("Do you want your password to include Lowercase Letter?")
includeSymbols = window.confirm("Do you want your password to include Symbols?")
passLength = window.prompt("Enter the length of your password.")

if (includeNumbers == true & includeLowerCase == false & includeUpperCase == false & includeSymbols == false) {
var combined = numbers
} else if (includeLowerCase == true & includeNumbers == false & includeUpperCase == false & includeSymbols == false) {
  var combined = upperCase
} else if (includeUpperCase == true & includeNumbers == false & includeLowerCase == false & includeSymbols == false) {
  var combined = lowerCase
} else if (includeSymbols == true & includeNumbers == false & includeLowerCase == false & includeUpperCase == false) {
  var combined = symbols

} else if (includeNumbers == true & includeLowerCase == true & includeUpperCase == false & includeSymbols == false) {
  var combined = numbers.concat(lowerCase)

} else if (includeNumbers == true & includeUpperCase == true & includeLowerCase == false & includeSymbols == false) 
{
  var combined = numbers.concat(upperCase)

} else if (includeNumbers == true & includeSymbols == true & includeLowerCase == false & includeUpperCase == false) {

  var combined = numbers.concat(symbols)

} else if (includeLowerCase == true & includeUpperCase == true & includeNumbers == false & includeLowerCase == false) {

  var combined = lowerCase.concat(upperCase)

} else if (includeLowerCase == true & includeSymbols == true & includeNumbers == false & includeUpperCase == false) {

  var combined = lowerCase.concat(symbols)

} else if (includeUpperCase == true & includeSymbols == true & includeLowerCase == false & includeUpperCase == false) {

  var combined = upperCase.concat(symbols)

} else if (includeNumbers == true & includeLowerCase == true & includeUpperCase == true & includeSymbols == false) {
 var combined = numbers.concat(lowerCase.concat(upperCase))
}

console.log(combined);
console.log(pass)


// var generateBtn = document.querySelector("#generate");
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword(); abc
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
