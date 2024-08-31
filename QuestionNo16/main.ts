// Question

//  More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// answer
// exercise 15 array 
let guestList:string[] = ["aziz","khan", "shaukat"]
console.log("i found a bigger dinner table:", guestList )
// add begging of the array
guestList.unshift("yousafazi")
// • Add one new guest to the middle of your array.
guestList.splice(guestList.length / 2 , 0 , "middle man" )
//  add one new guest to the end of your list.
guestList.push("last man")
// print a new set of invitation messages
guestList.map((guest)=>{
    console.log("Dear",guest+", you are invited")
})
export {}