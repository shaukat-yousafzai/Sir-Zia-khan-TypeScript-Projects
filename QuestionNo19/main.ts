//Question

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

// Answer
// excersise 14
// guest list
// at  least three people
let guestList:string[] = ["yousafzai","khan","shaukat"]

//  print a message to each person

// guestList.map((item)=>{
//     console.log("Dear",item+", i invite to dinner")
// })


// You just heard that one of your guests can’t make the dinner

let notAvialbleGuest:string = "yousafzai"
console.log(notAvialbleGuest, "can't make the dinner")

// new Guest 
let newGuest:string = "aziz";
// replacing or changing guest list
//  you need to send out a new set of invitations
// guestList[guestList.indexOf(notAvialbleGuest)] = newGuest
// guestList.map((guest)=>{
//     console.log("Dear",guest+", you are invited")
// })
// console.log("i found a bigger dinner table:", guestList )
// add begging of the array
guestList.unshift("yousafazi")
// • Add one new guest to the middle of your array.
guestList.splice(guestList.length / 2 , 0 , "middle man" )
//  add one new guest to the end of your list.
guestList.push("last man")
// print a new set of invitation messages
// guestList.map((guest)=>{
//     console.log("Dear",guest+", you are invited")
// })

// here i removed guests
while(guestList.length >2){
    let removeGuest = guestList.pop();
 //    console.log(`sorry Mr. ${removeGuest}, you are not invited for dinner.`);
 
 }
 // our 2 remaining invited guests
 // for(let i=0; i<guestList.length; i++){
 //     console.log('Dear Mr. ' + guestList[i] + ',\n\nyou are still invited.\n\nThank You!\n\n');
 // }
 
 // I removed all the guests from array
 guestList.splice(0, 2);
//  console.log(guestList);

 
 // Exercise 19

// print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of guest are: ${guestList.length}`);


export {}
