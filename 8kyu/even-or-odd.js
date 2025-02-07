// ❔DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// ✅ SOLUTION:
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log("even: ", evenOrOdd(3))
console.log("even: ", evenOrOdd(8))
