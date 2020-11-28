/*
Top to Bottom
*/

// let askInput = readline("Enter the number")

// console.log(`The square of number is ${askInput * askInput}`);

let name = 'faisal'

console.log(isNaN(name)); // true

let num = 35
console.log(!isNaN(num)); // true
console.log(isNaN(num)); // false

let number = 20
if(!isNaN(number)){
    console.log(`Square of number is ${number * number}`); // 100
}else{
    console.log("Need a numeric data");
}

console.log(7 * "5"); // type choesian