// Question 

//  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Answer


// Equality and Inequality Test 1
console.log("Equality test with strings: ", "Mango" === "Mango");
// Equality and Inequality Test 2
console.log("Inequality test with strings: ", ("Mango" as string) != "banana");

// Tests using the lower case function
console.log( "lower case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality 
console.log("Equality test with numbers: ", 25 === 25);
// Numerical tests involving inequality 
console.log("Inequality test with numbers: ", (25 as number) != 35);

// greater than test
console.log("Greater than test: ", 10 > 5);
// less than test
console.log("less than test: ", 5 < 10);

// greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test: ", 5 <= 10);

// Tests using "and" operators
console.log("And operator test: ", 5===5 && 10 > 5);
// Tests using "or" operators
console.log("Or operator test: ", 5===5 || false);

// Test whether an item is in a array
const person : string[] = ["Aiman" , "Hira" , "Afshan"];
console.log('Test "Aiman" in the array: ',person.includes("Aiman"));

// Test whether an item is not in a array
console.log('Testing "Yusra" is not in array: ', !person.includes("Yusra"));

export {}