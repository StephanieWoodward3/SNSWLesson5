// 1. Create a function that takes 3 paratemeters

function checkBetween(floor, ceiling, num){
    if(num > floor && num <ceiling){
        return true;
    } else{
        return false;
    }
}

//console.log(checkBetween(12, 24, 15))

// 2. 
function checkNameAndAge(person){
    let ageMatch = person.age > 30; // checking if the age is over 30
    let hasX = false;
    for(let i = 0; i < person.name.length; i++){ // checking if there is an x in their name
        let letter = persone.name[i];
        if (letter.toLowerCase() == "x"){
            hasX = true;
            break;
        }
    }
    if(ageMatch || hasX){ // if one or the other is true
        return true;
    } else{
        return false;
    }
}

//3.
function checkAgeNotName (person, age, nameNotToMatch){
    let ageMatch = person.age == age; // if the age in the object matches the age typed in then ageMatch will be true
    let namesMatch = person.name == nameNotToMatch; // if the name in the object matches the name typed in then namesMatch will be true
    if(ageMatch && !namesMatch){
        return true;
    } else{
        return false;
    }
}

console.log(checkAgeNotName({
    name: "Luke",
    age: 23
}, 24, "Luke"));

//Brackets are evaluated first
//Not statements are evaluated second
//AND statements are third
//OR statements are last