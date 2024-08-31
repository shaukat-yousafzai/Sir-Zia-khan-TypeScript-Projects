// Question 

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.

// Answer 

// Start with the array you used in Exercise 11

// Store the names of a few of your friends in a array called names

let names:string[] = ["Shaukat","Aziz","Yousafzai","Khan"];

// Print each person’s name by accessing each element in the list. one at a time.

for (const name of names) {
    console.log(name)
}
// end of exercise 11 


// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.
for (const name of names) {
    console.log("Hello",name+", you are my friends")
}


export {} // ignor