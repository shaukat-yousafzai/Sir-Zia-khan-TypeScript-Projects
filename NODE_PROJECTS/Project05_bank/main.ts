import inquirer from "inquirer";
import chalk from "chalk";
import { faker } from "@faker-js/faker";

// costomer clas
class Customer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  mobNumber: number;
  accNumber: number;

  constructor(
    fName: string,
    lName: string,
    age: number,
    gender: string,
    mob: number,
    acc: number
  ) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.gender = gender;
    this.mobNumber = mob;
    this.accNumber = acc;
  }
}
// interface BankAccount
interface BankAccount {
  accNumber: number;
  balance: number;
}

// CLASS bank
class Bank {
  customer: Customer[] = [];
  account: BankAccount[] = [];
  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }
  addAccount(obj: BankAccount) {
    this.account.push(obj);
  }
  transcation(accObj: BankAccount) {
    let newAccount = this.account.filter(
      (acc) => acc.accNumber !== accObj.accNumber
    );
    this.account = [...newAccount, accObj];
  }
}

let myBank = new Bank();

// coustmor create

for (let index = 1; index <= 3; index++) {
  let fName = faker.person.firstName("male");
  let lName = faker.person.lastName();
  let num = parseInt(faker.phone.number("3#########"));
  const cus = new Customer(fName, lName, 25 + index, "male", num, 1000 + index);
//   console.log(cus);
  myBank.addCustomer(cus);
  myBank.addAccount({ accNumber: cus.accNumber, balance: 100 * index });
}
// bank functionality
async function bankService(bank: Bank) {
  let service = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "please select the service",
    choices: ["View Balance", "Cash Withdraw", "Cash Deposit"],
  });
  // view balance
  if (service.select == "View Balance") {
    let res = await inquirer.prompt({
      type: "input",
      name: "num",
      message: "Please enter your account number",
    });
    let account = myBank.account.find((acc) => acc.accNumber == res.num);
    if (!account) {
      console.log(chalk.red.bold.italic("Invalid Account Number"));
    }
    if (account) {
      let name = myBank.customer.find(
        (item) => item.accNumber == account.accNumber
      );
      console.log(
        "Dear",
        chalk.green.italic(name?.firstName, name?.lastName),
        "your account balance is " +
          " " +
          chalk.bold.blueBright("$", account.balance)
      );
    }
  }
  // Cash Withdraw
  if (service.select == "Cash Withdraw") {
    let res = await inquirer.prompt({
      type: "input",
      name: "num",
      message: "Please enter your account number",
    });
    let account = myBank.account.find((acc) => acc.accNumber == res.num);
    if (!account) {
      console.log(chalk.red.bold.italic("Invalid Account Number"));
    }
    if (account) {
      let ans = await inquirer.prompt({
        type: "number",
        message: "please enter your CASH",
        name: "rupee",
      });
      if (ans.rupee > account.balance) {
        console.log(chalk.red.bold.italic("mojoda balance naakafi hai"));
        return;
      }
      let newBalance = account.balance - ans.rupee;
      // transcation method
      bank.transcation({ accNumber: account.accNumber, balance: newBalance });
      console.log(newBalance);
    }
  }
  // Cash Deposit
  if (service.select == "Cash Deposit") {
    let res = await inquirer.prompt({
      type: "input",
      name: "num",
      message: "Please enter your account number",
    });
    let account = myBank.account.find((acc) => acc.accNumber == res.num);
    if (!account) {
      console.log(chalk.red.bold.italic("Invalid Account Number"));
    }
    if (account) {
      let ans = await inquirer.prompt({
        type: "number",
        message: "please enter your CASH",
        name: "rupee",
      });
      let newBalance = account.balance + ans.rupee;
      // transcation method
      bank.transcation({ accNumber: account.accNumber, balance: newBalance });
      console.log(newBalance);
    }
  }
}
bankService(myBank);
