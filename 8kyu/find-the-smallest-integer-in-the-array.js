// ❔DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

//For example:

//Given [34, 15, 88, 2] your solution will return 2
//Given [34, -345, -1, 100] your solution will return -345
//You can assume, for the purpose of this kata, that the supplied array will not be empty.

// ✅ SOLUTION:
function findSmallestInt(arr) {
  return Math.min(...arr);
}
console.log("minimum number: ", findSmallestInt([3,15, 8, -11, 4, 20]))
console.log("minimum number: ", findSmallestInt([1, -5, 8, 10]))
