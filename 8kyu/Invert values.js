//❔DESCRIPTION:
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
//     [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//     [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
//     [] --> []
// You can assume that all values are integers. Do not mutate the input array.

// ✅ SOLUTION:
function invert(array) {
 return array.map(num => -num)
}
console.log("invert numbers: ", invert([1, -5, 4, -1]))
console.log("invert numbers: ", invert([4, 3, -8, -1]))


