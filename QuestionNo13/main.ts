// Question 

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Answer

// own Array
let transportation:string[] = ["Honda motorcycle", "Honda car", "toyota car", ]

// Use your list to print a series of statements about these items;

transportation.map((item)=>{
    console.log("i would like to own a",item)
})