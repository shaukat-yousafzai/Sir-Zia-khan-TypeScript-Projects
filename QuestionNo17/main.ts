// Question


// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Answer
// • Start with your program from Exercise 16.

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
// end Exercise 16 

// Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("unfortuntly begger dinner is cancel now i can invite only two people")

// • Remove guests from your list one at a time until only two names remain in your list

while (guestList.length > 2){
    let remove = guestList.pop()
    console.log("Dear", remove +",  i am sorry i can not invite you to dinner.")
}

guestList.map((guest)=>{
    console.log("Dear",guest+", you are invited")
})

guestList.pop()
guestList.pop()
console.log(guestList) // empty guest list 


export {}