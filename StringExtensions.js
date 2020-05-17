let sentence = "The quick dog brown fox jumps over the lazy dog.";

// string.includes // does the sentence include
let hasDog = sentence.includes("dog"); //will return true
console.log(hasDog); 
console.log(sentence.includes("Dog")); // will return false as there is no capital in the sentence

console.log(sentence.toLowerCase().includes("dog")); //converts the whole sentence to lowercase before searching for the word/group of strings

console.log(sentence.toLowerCase().includes("z)")); //converts the sentence to lowercase and searches for a single letter

// //Array version of .includes
let myArray = ["Luke", "Dave", "Lucy"];
console.log(myArray.includes("Luke"))



//string.indexOf // where in the sentence does it include
let dogIndex = sentence.indexOf("dog"); // will tell you what position in the string the first letter we are looking for is (i.e 40). It will always find the first instance only
console.log(dogIndex);
let invalidIndex = sentence.indexOf("Luke");//will come up with the value of -1 to indicate it doesnt show
console.log(invalidIndex); 

let dogIndex = sentence.indexOf("dog", 20); //tells the indexOf where in the sentence to start looking (i.e char 20 onwards)

let dogFirstOccurance = sentence.indexOf("dog"); //will return the first occurance of dog
let dogSecondOccurance = sentence.indexOf("dog", dogFirstOccurance + 1); // will start from the first occurance and keep searching
let dogThirdOccurance = sentence.indexOf("dog", dogSecondOccurance + 1); // will return -1 as there is no 3rd time dog appears

//count the number of times "dog" appears
function countOccurences(stringToSearch, searchTerm){
    let count = 0;
    let startIndex = 0;
    while(true){
        let indexOfSearchTerm = stringToSearch.indexOf(searchTerm, startIndex);
        if(indexOfSearchTerm == -1){ // -1 will be returned when we dont find the value anymore and will make us exit the loop
            break;
        }
         count++;
         startIndex = indexOfSearchTerm + 1;  // start searching in the loop from the next char after you found it the first time
    }
    return count;
}
let countOfDog = countOccurences(sentence, "dog"); // telling the function to use the statement to search and the search term dog
console.log(countOfDog);

//string.substring
let sentence1 = "The quick dog brown fox jumps over the lazy dog.";
let mySmallerString = sentence1.substring(44); //prints out a smaller string starting at the first index specified (44) and finishing when the string finishes
let mySmallerString = sentence1.substring(44, 46); //prints the smaller string starting at index 44 and finishing at index 46. 

let indexOfFox = sentence1.indexOf("fox");
let mySmallerString = sentence1.substring(indedOfFox, indexOfFox + 3); // will print out 

let input = "Name: Luke";
let pre = "Name: ";
let name = input.substring(pre.length);
let name = input.substring(6); //will print out from index 6 until the end of the string

//string.split
let myWords = sentence1.split(" "); // breaks the sentence into an array based on the separator indicated (in this case " ")

let myNums = "12,19,2,51,75,164,197".split(","); //breaks the numbers into an array based on the separator ","