import inquirer from "inquirer";
import chalk from "chalk";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDerease(){
    let fuel = this.fuel - 25;
     this.fuel = fuel
  }
  fuelIncrease(){
    this.fuel = 100
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDerease(){
    let fuel = this.fuel - 25;
     this.fuel = fuel
  }
 
}
// player name and oppenet select
let player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "please Enter your name",
});

let opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "select your opponent",
  choices: ["skeleton", "Assassin", "zombie"],
});

// Gather Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do{
    if(opponent.select   ){
       
        let ask =  await inquirer.prompt({
            type: "list",
            name: "opt",
              message: "select your opponent",
            choices: ["Attack", "Drink Portion", "Run for your life.."],
        })
        if(ask.opt == "Attack"){
            console.log("Attack")
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDerease()
                console.log(chalk.bold.green(p1.name,"fuel is",p1.fuel))
                console.log(chalk.bold.red(o1.name,"fuel is",o1.fuel))
                if(p1.fuel <= 0){
                    console.log(chalk.red.bold.italic("you loose, better luck time next time"))
                    process.exit()
                }
            }
            if(num <= 0){
               o1.fuelDerease()
               console.log(chalk.bold.red(o1.name,"fuel is",o1.fuel))
               console.log(chalk.bold.green(p1.name,"fuel is",p1.fuel))
               if(o1.fuel <= 0){
                console.log(chalk.green.bold.italic("you win"))
                process.exit()
            }
           }
            
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green("you drink health portion your fuel is", p1.fuel))
        }
        if(ask.opt == "Run for your life.."){
            console.log(chalk.red.bold.italic("you loose, better luck time next time"))
            process.exit()
        }
    }
}
while(true)

