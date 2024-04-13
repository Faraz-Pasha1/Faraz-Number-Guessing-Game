console.log("Start the number guessing game");
// NOW CREATE VARIABLE
let a = Math.floor(Math.random() * 7);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "Enter your guess number you want between 1 to 9:"
    });
    // provide code
    let ans = input.guess;
    if (a == ans) {
        console.log("Congratulation your guess number is correct");
        break;
    }
    else {
        console.log("Sorry you guess wrong number, please try again");
    }
}
