//a series of characters and special symbols to search for a string inside of a larger string. e.g validates user input
// \ is called the escape char - is used before special chars

let myString = "Hello 123"
// \d searches for digits
// \w searches for words

let myRegularExpression = new RegExp("\\d"); // searches the string to see if there are digits in it and will return true
let myResult = myRegularExpression.test(mystring);
mystring.search(myRegularExpression); //another way of testing
console.log(myReuslt)

console.log(myString.search(myRegularExpression)); //will return the index number the digit starts at

//checks to see if there is a valid email
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
//checks to see if there is a valid url
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

let myEmailString = "Hello my name is Luke and my email is luke.parker9@tafensw.edu.au";
let hasEmail = EMAIL_REGEX.test(myEmailString); // uses the EMAIL_REGEX to test if the string has a valid email in it or not
console.log(hasEmail);
console.log(myEmailString.search(EMAIL_REGEX));