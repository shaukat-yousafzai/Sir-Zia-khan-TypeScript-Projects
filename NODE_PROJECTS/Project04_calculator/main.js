import inquirer from "inquirer";
let ans = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Please enter your first number"
    },
    {
        name: "num2",
        type: "number",
        message: "Please enter your second number"
    },
    {
        name: "operators",
        type: "list",
        message: "Please Select the operator",
        choices: ["+", "-", "*", "/"]
    }
]);
// varible declarations
let number1 = ans.num1;
let number2 = ans.num2;
let opt = ans.operators;
// conditional statements
if (opt == "+") {
    console.log(number1, opt, number2, "=", number1 + number2);
}
else if (opt == "-") {
    console.log(number1, opt, number2, "=", number1 - number2);
}
else if (opt == "*") {
    console.log(number1, opt, number2, "=", number1 * number2);
}
else if (opt == "+") {
    console.log(number1, opt, number2, "=", number1 / number2);
}
else {
    console.log("Invalid option");
}
