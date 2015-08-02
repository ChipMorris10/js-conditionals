// 1. Prompt the user to enter their phone number with dashes (XXX-XXX-XXX)
// 1. Alert the user if their phone number is valid (True or False) according to the simple rule that the fourth and eighth characters must be dashes.
// 1. Following the same procedure, prompt and validate the following fields:
//   - birth date (xx/xx/xx)
//   - postal code (xxxxx OR xxxxx-xxxx)
//   - state abbreviation (XX)
//   - married ("yes" or "no" or "YES" or "NO" or "Yes" or "No")

// // create var phoneNumber
// // prompt user to enter their information
// var phoneNumber = prompt("Please enter your phone number (xxx-xxx-xxxx)");

// // if phoneNumber equals 12 AND the 4th AND 8th characters are a dash
// if (phoneNumber.length === 12 && phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-")  {

// // alert phoneNumber is correct
//   alert(" Your phone number is valid ");
// }

// // else alert phoneNumber is not valid
// else{
//   alert(" Your phone number is not valid, please use the format xxx-xxx-xxxx ");
// }


// // create var birthDate
// // prompt user to enter their information
// var birthDate = prompt("Please enter your birthdate (xx/xx/xx)");

// // if birthDate equals 8 AND the 2nd AND 5th characters are a dash
// if (birthDate.length === 8 && birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/")  {

// // alert birthDate is correct
//   alert(" The date you entered is valid ");
// }

// // else alert birthDate is not valid
// else{
//   alert(" The date you entered is not valid, please use the format xx/xx/xx ");
// }



// // create var postalCode
// // prompt user to enter their information
// var postalCode = prompt("Please enter your postal code using either xxxxx OR xxxxx-xxxx");

// // if postalCode equals 5 OR 5 with a dash then 4 AND the 10th character is a dash
// if (postalCode.length === 5 || postalCode.length === 10&& postalCode.charAt(5) === "-")  {

// // alert postalCode is correct
//   alert("The date you entered is valid");
// }

// // else alert postalCode is not valid
// else{
//   alert("The date you entered is not valid, please use the format xxxxx OR xxxxx-xxxx");
// }


// // create var stateAbbv
// // prompt user to enter their information
// var stateAbbv = prompt("Please enter your two letter state abbreviation");

// // convert stateAbbv to capital letters
// var state = stateAbbv.toUpperCase();

// // if stateAbbv is greater than 2 letters
// if (stateAbbv.length > 2)  {

// // alert stateAbbv is incorrect
//   alert("Please re-enter your state");
// }

// // else alert stateAbbv is  valid
// else{
//   alert("Thank you");
// }


// create var married
// prompt user to answer the question
var married = prompt("Are you married?");

// accept three formats (Yes, yes, YES)
// if married is greater than 2 letters
if (married === "Yes" || married === "YES" || married === "yes")  {

// alert witty response
  alert("Too bad");
}

// else alert different witty response
else{
  alert("Keep single, my friend");
}
