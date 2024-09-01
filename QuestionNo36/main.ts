// Question

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// Answer

// Write a function called make_shirt() that accepts a size and the text of a message

function make_shirt(size:string, text:string){
//   The function should print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`creating a ${size} shirt with the message: ${text}`);
}

// Call the function
make_shirt('large' , 'Hello');

make_shirt('medium' , 'Hello');

make_shirt('small' , 'Hello');

export{}