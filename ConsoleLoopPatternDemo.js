const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...
    //welcome message
    console.log("Welcome to Luke's Calculator");
    while(true){
        //list options
        console.log("[1] Add Numbers");
        console.log("[2] Subtract Numbers");
        console.log("[3] Multiply Numbers");
        console.log("[4] Exit");
        //ask for user input
        let userInput = await askQuestion("Select an option from above: ");
        console.log(); // will print an empty line on the screen

        //Choose an option based on user input
        if( userInput == "1"){
            console.log("You have selected the Add Numbers function");
            //add numbers logic
            let userInput1 = await askQuestion("Enter the First Number: ");
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter the Second Number: ");
            let num2 = parseInt(userInput2);
            console.log(`${num1} plus ${num2} equals ${num1 + num2}`);

        } else if(userInput == "2"){
            // subtract numbers logic
            console.log("You have selected the Subtract Numbers function");
            let userInput1 = await askQuestion("Enter the First Number: ");
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter the Second Number: ");
            let num2 = parseInt(userInput2);
            console.log(`${num1} minus ${num2} equals ${num1 - num2}`);

        } else if(userInput == "3"){
            // multiply numbers logic
            console.log("You have selected the Multiply Numbers function");
            let userInput1 = await askQuestion("Enter the First Number: ");
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter the Second Number: ");
            let num2 = parseInt(userInput2);
            console.log(`${num1} times ${num2} equals ${num1 * num2}`);
            
        } else if(userInput == "4"){
            break;
        } else{
            //error couldnt read input
            console.log("Error: Please enter a number 1 - 4");
        }
        console.log();
        }
        console.log("Thank you for using Luke's Calculator");
    }

Program().then(() => {
    process.exit(0);
});