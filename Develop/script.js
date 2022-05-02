// Assignment Code
var generateBtn = document.querySelector("#generate");
//potential character array
var potentialCharacters = [];

//ask player how many characters
function checkAmount() {
  //prompt user to enter the numbers of chars they'd like
  var numberOfLetters = window.prompt("How many characters would you like in your password?");
  //if number isn't between 8-128
  if (numberOfLetters < 8 || numberOfLetters > 128) {
    //wrong amount, so tell user to start over
      window.alert("You must enter between 8-128 characters.")
      checkAmount(); 
  // if user enters letters, has them start over
  } else if (isNaN(numberOfLetters)) {
      window.alert("You must enter a number.");
      checkAmount();
  //if user enters acceptable number
  } else {
    //inform user the number they chose
    window.alert("You've chosen " + numberOfLetters + " characters");
    }   
  //returns the user's chosen number of letters  
  return numberOfLetters;
}
  
//ask player if they want numbers in their password and add to potential character array
function checkNumbers() {
  potentialCharacters = [];
  var useNumbers = window.confirm("Would you like to use numbers in your password?");
  if (useNumbers){
    potentialCharacters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
  }
}

//ask player if they want uppercase letters in their password and add to potential character array
function checkUppercase() {
  var useUppercase = window.confirm("Would you like to use uppercase letters in your password?");
  if (useUppercase) {
    potentialCharacters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }
}

//ask player if they want lowercase letters in their password and add to potential character array
  function checkLowercase() {
  var useLowercase = window.confirm("Would you like to use lowercase letters in your password?");
  if (useLowercase) {
    potentialCharacters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
}

//ask player if they want special characters in their password and add to potential character array
function checkSpecial() {
  var useSpecial =  window.confirm("Would you like to use special characters in your password?");
  if (useSpecial) {
    potentialCharacters.push("!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~");
  }
}

function getRandom(max) {
  var random = Math.random() * max;
  return Math.floor(random) + 1;
}

function generatePassword() {
  //declare password array
  var fullPassword = [];  
  //complete all the prompts - which characters and how many
  charAmount = checkAmount();
  console.log(charAmount);
  checkNumbers();
  checkUppercase();
  checkLowercase();
  checkSpecial();
  //resets the function if you don't choose a type of characters
  if (potentialCharacters.length === 0) {
      window.alert("You must include one type of character. Please start over.")
      generatePassword();
  } else {
    //for as many time characters as the user character amount...
    for (i = 0; i < charAmount; i++){
      //chooses a random number with a max of the character amount
      fullPassword.push(potentialCharacters[getRandom(potentialCharacters.length-1)]);
    }
  }
    //returns the array of characters and joins them by removing commas
    return fullPassword.join("");
  }

  function writePassword() {

  var password = generatePassword() ;
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  //returns the password to the text box
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
