let x = 10 // Global Scope

if(true){
    let y = 20 // Local Scope
    var z = 30

    console.log(x + y + z); // 60
}

// console.log(x + y + z);  ReferenceError: y is not defined
console.log(x + z); // 40