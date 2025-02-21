// ❔DESCRIPTION:
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

//Given an array of integers, return a new array with each value doubled.
// For example:
//[1, 2, 3]-- > [2, 4, 6]

// ✅ SOLUTION:
function maps(x){
   return x.map(el => el*2)
}

console.log("number: ", maps([2,3,4,5]))
console.log("number: ", maps([1,6,8,]))

