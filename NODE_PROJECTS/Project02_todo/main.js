import inquirer from "inquirer";
// todos array
// todo function
// operation
let todos = ["bilal", "aziz"];
async function createTodo(arr) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an operation",
            name: "select",
            choices: ["add", "update", "view", "delete"]
        });
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item",
                name: "todo"
            });
            arr.push(addTodo.todo);
            console.log(arr);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item",
                name: "todo"
            });
            let newTodos = todos.filter(val => val !== updateTodo.todo);
            arr = [...newTodos, addTodo.todo];
            console.log(arr);
        }
        if (ans.select == "view") {
            console.log(arr);
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            arr = [...newTodos];
            console.log(arr);
        }
    } while (true);
}
console.log(todos);
createTodo(todos);
