// Write a function that takes in two numbers and outputs the max (the greater of the two numbers).
// functions
function findMax(x, y) {
    console.log(`X: ${x}, Y: ${y}`);
    // find the highest (max) number and return it
    // ternary operator... (if) ? true : false
    return (x > y) ? x : y;
    // if (x > y) {
    //     return x;
    // } else {
    //     return y;
    // }
}


// logic / call functions / start the app
console.log(findMax(1, 2));
// Ex: 
// Input: 1, 2
// Output: 2

console.log(findMax(6, -4));
// Input: 6, -4
// Output: 6

console.log(findMax(3.4, 2));
// Input: 3.4, 2
// Output: 3.4