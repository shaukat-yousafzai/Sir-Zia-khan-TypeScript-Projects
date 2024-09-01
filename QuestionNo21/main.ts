
// Question 

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Answer

// Write a program that creates Objects containing these items

 // Data type of person object
 interface person {
    name : string,
    age : number,
    gender : string,
    student : boolean
}
// person object
let person : person = {
    name : 'hira' ,
    age : 26 ,
    gender : "female" ,
    student : true
}
// print person
console.log(person);

// Data type of car object
interface car {
    maker : string,
    colour : string,
    automatic : boolean
}
// car object
let car = {
    maker : 'ferrari',
    colour : 'red',
automatic : true
}

// print car
console.log(car);