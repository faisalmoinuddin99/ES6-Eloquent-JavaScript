/*
Syntax:

(input list of parameters) => {
    function body
}

The arrow comes after the list of parameters and is followed by the 
function’s body. It expresses something like 
“this input (the parameters) produces this result (the body)”.
*/

const power = (base, expo) => {
    let result = 1
    let count = 0
    for(; count < expo;){
        result *= base
        count++
    }
    return result
}

console.log(power(2,10)); // 1024

