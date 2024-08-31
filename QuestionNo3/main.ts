// Question

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Answer

// Store a person’s name in a variable
let person_name:string = "shauKAt";

// then print that person’s name in lowercase
console.log(person_name.toLowerCase());

// then print that person’s name in uppercase
console.log(person_name.toUpperCase());

//then print that person’s name in title case
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase())


export {}