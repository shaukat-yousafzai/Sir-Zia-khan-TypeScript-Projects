#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
do {
    const secretNumber = Math.floor(Math.random() * 2) + 1;
    console.log(chalk.bold.underline("i have picked a number"));
    let userInp = await inquirer.prompt({
        type: "list",
        name: "guess",
        message: "Guess the number",
        choices: ["1", "2", "exit"]
    });
    // exit program
    if (userInp.guess == "exit") {
        console.log("thanks for playing");
        process.exit();
    }
    // converting user input number
    let nam1 = parseInt(userInp.guess);
    switch (true) {
        case nam1 === secretNumber:
            console.log(chalk.green.bold("Congratulations! You guessed correctly"));
            break;
        default:
            console.log(chalk.red.bold("Sorry! You guessed wrong. The correct number is: ", secretNumber));
            break;
    }
} while (true);
