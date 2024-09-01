// Question 

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, 
// such as You really like bananas!

//Answer

//  Make a array of your three favorite fruits and call it favorite_fruits.

let favorite_fruits : string[] = ["Apple" , "Mango" , "orange"];

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement

// stataments no 1
if(favorite_fruits.includes("Apple")){
    console.log("I really like Apple!");
}
// statment no 2
if(favorite_fruits.includes("Mango")){
    console.log("I really like Mango!");
}
// statment no 3
if(favorite_fruits.includes("orange")){
    console.log("I really like orange!");
}
// complete your array length 
// statment no 4
if(favorite_fruits.includes("Grapes")){
    console.log("I really like Grapes!");
}
// stetment no 5
if(favorite_fruits.includes("Pineapple")){
    console.log("I really like Pineapple!");
}


// statment no 4 and 5 is not print becuse grapes and pineapple is not avialble
