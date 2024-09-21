const numbers = [1, 2, 3, 4, 5];

// Example: Create a range of sums of all elements up to the current index
const cumulativeSums = numbers.reduce(
  (acc, num, index, arr) => {
    acc.push(arr.slice(0, index + 1).reduce((a, b) => a + b, 0));
    return acc;
  },
  []
);

console.log(cumulativeSums); // Output: [1, 3, 6, 10, 15]
