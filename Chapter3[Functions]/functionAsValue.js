function funcAsValue(x,y) {
    return x * y
}

let result = funcAsValue(10,5) / (5 + 9) * 4
console.log(result); // 14.285

/*
funcAsValue(10,5) ---> Value 1;  result = 50
(5 + 9) ---> Value 2 ; result = 50 / 14
4 ---> Value 3 ; result = 50 / 14 * 4
*/