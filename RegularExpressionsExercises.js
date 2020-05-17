// https://gist.github.com/LukeParkerTAFE/3a48785973361463aeae4461dcc09587
//checks to see if there is a valid email
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
//checks to see if there is a valid url
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
// 1. Write a function that determines if a string contains a valid email address
// 2. Write a function to find the index of the first character of a valid URL

let sentence = "This sentence contains a valid email address of Stephanie.Woodward3@studytafensw.edu.au, or does it.."
let urlAddress = "https://www.google.com.au"

// 1. Write a function that determines if a string contains a valid email address
function validEmailAddress(sentence){
    let hasEmail = EMAIL_REGEX.test(sentence);
    return hasEmail;
}
console.log(validEmailAddress(sentence));

// Answer to Question 1
function testStringContainsEmail(testString){
    return EMAIL_REGEX.test(testString);
}
console.log(testStringContainsEmail("This sentence contains a valid email address of Stephanie.Woodward3@studytafensw.edu.au, or does it.."));



// 2. Write a function to find the index of the first character of a valid URL
function validUrl(urlAddress){
    let validUrlAddress = URL_REGEX.test(urlAddress);
    if(validUrlAddress == true){
        let firstChar = urlAddress.substring(0, 1);
        return firstChar;
    } else{
        return -1;
    }
}
console.log(validUrl(urlAddress));

//Answer to Question 2
function findIndexOfValidURL(testString){
    return testString.search(URL_REGEX);
}
console.log(findIndexOfValidURL("Go to https://learn.sydneytafe.edu.au/ to learn more"));