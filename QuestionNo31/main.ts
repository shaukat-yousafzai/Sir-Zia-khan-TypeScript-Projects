// Question

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Answer

//   
let userName: string[] = ['admin' , 'zeeshan' , 'moiz' , 'amir' , 'waqar'];

if(userName.length === 0){//  If the list is empty, print the message We need to find some users!
    console.log(' We need to find some users!');
}else{
    userName = [];//  Remove all of the usernames from your array
    console.log('All user names have been removed. ' + userName.length);
}
// this condition userName is empty 
// make sure the list of users is not empty.
if(userName.length === 0){ //  If the list is empty, print the message We need to find some users!
    console.log(' We need to find some users!');
}else{
    userName = [];
    console.log('All user names have been removed. ' + userName.length);
}