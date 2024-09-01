//Question 

// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




// Answer 

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let world:string[] = ["england","north korea",'south korea','iran','china']

// • Print your array in its original order.

console.log("orginal order",world)

// • Print your array in alphabetical order without modifying the actual list.

console.log("Alphbetical order", [...world].sort())

// • Show that your array is still in its original order by printing it.

console.log("orginal order",world)

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order", [...world].sort().reverse())
// • Show that your array is still in its original order by printing it again.
console.log("orignal order",world)
// • Reverse the order of your list. Print the array to show that its
// order has changed.
world.reverse()
console.log("orginal array reverse order",world)
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
world.reverse()
console.log("reverse order to orginal order", world)
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
world.sort();
console.log("sorted in alphabetical order", world);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
world.sort().reverse();
console.log("sorted in reverse alphabetical order", world);