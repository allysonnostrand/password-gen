/* prompt 1 password length-------------------------------------------------------------------*/
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

/*prompt 2 lowercase characters--------------------------------------------------------------*/
function generatePasswordLowerCase(){
  let prompt2 = window.confirm("Would you like lowercase letters in your password?(hit okay to confirm yes)")
  return prompt2
}

/*prompt 3 uppercase characters---------------------------------------------------------------*/
function generatePasswordUpperCase(){
  let prompt3 = window.confirm("Would you like uppercase letters in your password?(hit okay to confirm yes)")
  return prompt3
}

/*prompt 4 numbers----------------------------------------------------------------------------*/
function generatePasswordNumeric(){
  let prompt4 = window.confirm("Would you like numbers in your password?(hit okay to confirm yes)")
  return prompt4
}

/*prompt 5 special characters---------------------------------------------------------------*/
function generatePasswordSpecial(){
  let prompt5 = window.confirm("Would you like special characters in your password?(hit okay to confirm yes)")
  return prompt5
}

/*now i need to take the variables with info from previous functions and get them to do stuff*/
/*this is where stuff gets stored for the password AND do stuff------------------------------*/

function generatePassword(){
  var passwordLength = generatePasswordLength()
  var passwordLower = generatePasswordLowerCase()
  var passwordUpper = generatePasswordUpperCase()
  var passwordNum = generatePasswordNumeric()
  var passwordSpe = generatePasswordSpecial()

  var lowerString = "abcdefghijklmnopqrstuvwxyz"
  var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbersString = "0123456789"
  var specialString = "!@#$%^&*()_-+=\{[}]';:<,>.?/"
  var passwordCharacters = ""
  var finalPassword = ""
  
  // if (passwordLength == true ){
  //   // for( i = 8; i <= passwordLength; i++)
  //   // // finalPassword.concat(passwordCharacters.random())
  // }
  if (passwordLower == true){
    passwordCharacters = (passwordCharacters + lowerString)
    console.log(passwordLower)
  }
  if (passwordUpper == true){
    passwordCharacters= (passwordCharacters + upperString)
    console.log(passwordUpper)
  }
  if (passwordNum == true){
    passwordCharacters = (passwordCharacters + numbersString)
    console.log(passwordNum)
  }
  if (passwordSpe == true){
    passwordCharacters = (passwordCharacters + specialString)
    console.log(passwordSpe)
  }
  console.log(finalPassword)
  var randomValue = Math.floor(Math.random()*(passwordCharacters.length +1))
  console.log(randomValue)

  return finalPassword 
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
