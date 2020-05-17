// 1. Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise
// 2. Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise.
// 3. Write a function that takes a string and returns the first three characters of that string.
// 4. Write a function that takes a string and returns the last two characters of that string.
// 5. Write a function that converts a string into an array of words where a word is any string separated by a space.
// 6. Write a function that counts the number of times a string appears inside the sentence string above.

let sentence = "The quick brown fox jumps over the lazy dog.";

// 1. Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise
function doesHaveDog(sentence){
    let hasDog = false;
    hasDog = sentence.includes("dog");
    return hasDog;
}
console.log(doesHaveDog(sentence)); 

//Answer to Question 1
function searchInSentence(searchTerm){
    return sentence.includes(searchTerm);
}
console.log(searchInSentence("Quick"));



// 2. Write function that searches for a string inside the sentence above. 
// The function should return the index of the first occurrence of the string if the string is found or -1 otherwise.
function doesSentenceInclude(sentence){
    return sentence.indexOf("dog");
}
console.log(doesSentenceInclude(sentence));

//Answer to Question 2
function findIndexInSentence(searchTerm){
    return sentence.indexOf(searchTerm);
}
console.log(findIndexInSentence("dog"));


// 3. Write a function that takes a string and returns the first three characters of that string.
function firstThreeChar(sentence){
    let indexOfDog = sentence.indexOf("dog")
    let mySmallerString = sentence.substring(indexOfDog, indexOfDog + 3);
    return mySmallerString;
}
console.log(firstThreeChar(sentence));

//Answer to Question 3
function firstThreeChars(myString){
    return myString.substring(0, 3);
}
console.log(firstThreeChars(sentence));


// 4. Write a function that takes a string and returns the last two characters of that string.
function lastTwoChars(sentence){
    let indexOfString = sentence.length;
    let mySmallerString = sentence.substring(indexOfString - 2)
    return mySmallerString;
}
console.log(lastTwoChars(sentence));

// Answer to Question 4
function lastTwoChars(myString){
    return myString.substring(mystring.length -2)
}
console.log(lastTwoChars(sentence));


// 5. Write a function that converts a string into an array of words where a word is any string separated by a space.
function breakUpWords(sentence){
    let myWords = sentence.split(" ");
    return myWords;
}
console.log(breakUpWords(sentence));

// Answer to Question 5
function stringToArray(myString){
    return myString.split(" ");
}
console.log(stringToArray(sentence));


// 6. Write a function that counts the number of times a string appears inside the sentence string above.
function countOccurences(stringToSearch, searchTerm){
    let count = 0;
    let startIndex = 0;
    while(true){
        let indexOfSearchTerm = stringToSearch.toLowerCase().indexOf(searchTerm, startIndex);
        if(indexOfSearchTerm == -1){
            break;
        }
        count++;
        startIndex = indexOfSearchTerm + 1;
    }
    return count;
}

let countOfWord = countOccurences(sentence, "the");
console.log(countOfWord);

//Answer to Question 6
function countOccurences(searchTerm){
    let count = 0;
    let startIndex = 0;
    while(true){
        let index = sentence.indexOf(searchTerm, startIndex);
        if(index == -1){
            break;
        }
        count++;
        startIndex = index + 1;
   }
   return count;
}
console.log(countOccurences("e"));
