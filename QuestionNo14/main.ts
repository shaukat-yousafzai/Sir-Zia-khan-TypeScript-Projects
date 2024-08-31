// Question 
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Answer

// guest list
// at  least three people
let guestList:string[] = ["yousafzai","khan","shaukat"]

//  print a message to each person

guestList.map((item)=>{
    console.log("Dear",item+", i invite to dinner")
})
