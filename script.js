function generatePasswordLength(){
  var i = true
  var prompt1
  while ( i == true) {
    let prompt1 = window.prompt("How long would you like your password to be between 8-128?(number values only)")
    console.log(prompt1) 
    if (prompt1 >= 8 && prompt1 <= 128){
      i = false;
    }
  }
  console.log ("spot1")
  return prompt1 
}

function generatePasswordLowerCase(){
  let prompt2 = window.confirm("Would you like lowercase letters in your password?(hit okay to confirm yes)")
  return prompt2
}

function generatePasswordUpperCase(){
  let prompt3 = window.confirm("Would you like uppercase letters in your password?(hit okay to confirm yes)")
  return prompt3
}

function generatePasswordNumeric(){
  let prompt4 = window.confirm("Would you like numbers in your password?(hit okay to confirm yes)")
  return prompt4
}

function generatePassword(){
  var passwordLength = generatePasswordLength()
  var generatePasswordLower = generatePasswordLowerCase()
  var generatePasswordUpper = generatePasswordUpperCase()
  var generatePasswordNum = generatePasswordNumeric()
  
  return 0
}















// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
