/*
To catch and hold values, JavaScript provides a thing called a binding,
or variable:
*/

let caught = 5 * 5

console.log(caught);

let ten = 10

console.log(ten * ten);

let mood = "dark"

console.log(mood); // dark
mood = "light"
console.log(mood); // updated to light


// Creating an empty binding

let one; // --> Empty binding
console.log(one); // undefined

/*
A single let statement may define multiple bindings. 
The definitions must be separated by commas.
*/

let studentOne = "faisal", studentTwo = "rahul"
console.log(`${studentOne} and ${studentTwo}`);

// One more example for single let and multiple binding

let numOne = 1, numTwo = 2
console.log(numOne + numTwo); // 3

/*
The words var and const can also be used to create bindings, 
in a way similar to let
*/

var name = "Ayda"
const greeting = "Hello"

console.log(greeting + name); // HelloAyda