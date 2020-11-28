/*
 It is written with a question mark and a colon.
*/

console.log(true ? 1 : 2); // 1

console.log(false ? 1 : 2); // 2

let percentage = 71

console.log(percentage > 50 ? "Pass" : "Fail"); // pass
/* 
The above code is equivalent to below if else
*/

if(percentage > 50) {
    console.log("Pass");
}else{
    console.log("Fail");
}