import inquirer from "inquirer";
// user input
let userInput = await inquirer.prompt({
    name:"num1",
    type:"number",
    message:"Please enter your number",
    validate:(input) =>{
        const num2 = parseInt(input)
        if(isNaN( num2)){
            return "please enter the number"
        }else{
            return true;
        }
    }
})

// usr input value
let userNum:number = userInput.num1

// logic for table
for (let i = 1 ; i < 12 ; i++){
    console.log(`${userNum} * ${i} = ${userNum * i}`)
}