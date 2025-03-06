// ❔DESCRIPTION:
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// ✅ SOLUTION:
function maps(x){
  return x.map(n => n * 2);
}
console.log("value doubled: ", maps([1, 5.2, 4, 0, -1]))
console.log("value doubled: ", maps([4, 3.5, -8, 0, -1]))


