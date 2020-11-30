
/*

When there is only one parameter name, you can omit the parentheses 
around the parameter list. If the body is a single expression, 
rather than a block in braces, that expression will be returned from 
the function. So, these two definitions of square do the same thing:
*/

const square = (x) => x * x

console.log(square(5)); // 25