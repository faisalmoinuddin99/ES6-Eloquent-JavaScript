/*
WAP to print all even number from 0 to 12
*/

let evenNumbers = 0

while (evenNumbers <= 12) {
    if (evenNumbers % 2 == 0) {
        console.log(evenNumbers);
    }
    evenNumbers ++
}

let power = 1
let counter = 0

while (counter <= 10){
    power *= 2
    counter += 1
}
console.log(power);