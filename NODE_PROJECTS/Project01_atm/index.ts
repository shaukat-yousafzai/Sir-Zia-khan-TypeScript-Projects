import inquirer from "inquirer";

import { faker} from "@faker-js/faker";

// requirment 
// 1 user data
// 2 atam machine
// 3 atm function

interface User {
    id:number
    pin:number
    name:string
    accountNumber:number
    balance:number
}

const createUser = ()=>{
    let users:User[] = []
   
    for(let i = 0 ; i < 5; i++){
        let user:User = {
            id:i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber:Math.floor(100000000 * Math.random()*900000000),
            balance:1000000 * i
            
        }

        users.push(user)
    }


    return users

}

// atm machine
const atmMachine =  async(users:User[])=>{
    const res = await inquirer.prompt({
        type: "number",
        message:"write pin code",
        name:"pin"
    })
   
    const user = users.find(val => val.pin == res.pin)
    if (user){
          console.log("welome", user.name);
          atmFun(user)
          return;
    }
    console.log("invalide user pin ")
}

// atm function

const atmFun = async(user:User)=>{
  const ans = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"karna kai chahte ho?",
    choices:["withdraw","balance check","exit","deposite"]
  })
  if (ans.select == "withdraw"){
    const amount = await inquirer.prompt({
        type:"number",
        message:"enter amount",
        name:"rupee"
    })
    if (amount.rupee > user.balance){
        return console.log("mojoda balance nakafi hai")
    }
    if (amount.rupee > 25000){
        return console.log("ap 25000 se zeyda nahi nekal sakte ho")
    }
    console.log("withdraw amount:", amount.rupee)
    console.log("remaing amount:", user.balance - amount.rupee)
  }
  if (ans.select == "balance check"){
    console.log(" amount:", user.balance )
    return;
  }
  if (ans.select == "exit"){
    console.log("thanks for using atm..")
  }
  if (ans.select == "deposite"){
    const deposite = await inquirer.prompt({
        type:"number",
        message:"deposit amount enter",
        name:"rupee"
    })
    console.log("deposite amount", deposite.rupee)
    console.log("total Balance", deposite.rupee + user.balance)
  }
}

const users = createUser()

atmMachine(users)
