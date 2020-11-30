/*
The exception is when multiple bindings have the same name—in that
 case, code can see only the innermost one. For example, when
  the code inside the halve function refers to n, it is seeing its 
  own n, not the global n.
*/

const  halve = function(n){
    return n / 2
}

let n = 10
console.log(halve(n)); // 5
console.log(n); // 10