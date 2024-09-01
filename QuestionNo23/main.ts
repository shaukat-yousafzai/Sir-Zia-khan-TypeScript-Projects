// Question 

//  Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Answer

// Write a series of conditional tests

// creating car variable
let car = 'Corolla';

// Test no 1
console.log("Is car == 'Corolla'? I predict True.");
console.log(car == 'Corolla');

// Test no 2
console.log("Is car === 'Corolla'? I predict True.");
console.log(car === 'Corolla');

// Test no 3
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// Test no 4
console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford');

// Test no 5
console.log("Is car.upper case == 'COROLLA'? I predict True.");
console.log(car.toUpperCase() == 'COROLLA'); 

// Test no 6
console.log("Is car == 'COROLLA'? I predict false.");
console.log(car == 'COROLLA'); 

// Test no 7
console.log("Is car === 'COROLLA'? I predict false.");
console.log(car === 'COROLLA'); 

// Test no 8
console.log("Is car === 'Suzuki'? I predict false.");
console.log(car === 'Suzuki'); 

// Test no 9
console.log("Is car === 'Train'? I predict false.");
console.log(car === 'Train'); 


// Test no 10
console.log("Is car === 'bus'? I predict false.");
console.log(car === 'bus'); 

export {}