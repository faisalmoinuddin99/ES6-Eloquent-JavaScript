// WAP to find the power and exponential 

const power = function(base, exponential) {
    let result = 1
    for(let count = 0; count < exponential;){
        result *= base
        count ++
    }
    return result
}

console.log(power(2,10)); 

/*
power(base,exponential) --> 2, 10
I. result = 1
count = 0 to 9

result *= base  ---> 1 * 2 = 2
                     2 * 2 = 4
                     4 * 2 = 8
                     8 * 2 = 16
                     16 * 2 = 32
                     32 * 2 = 124
                     124 * 2 = 248
                     248 * 2 =  496
                     496 * 2 = 992
                     992 * 2 = 1084
*/