//Question

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white 
// spaces.

// Answer 

// Store a person’s name, and include some whitespace characters  \t means white space \n means new line

let person_name:string = "\t\nshaukat aziz \t\n";
//Print the name once
console.log(person_name) // the whitespace around the name is displayed

// print the name after striping the white 
// spaces.

console.log(person_name.trim()) // whitspace remove
