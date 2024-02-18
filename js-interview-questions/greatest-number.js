// given-an-array-of-numbers-arrange-the-numbers-to-form-the-biggest-number javascript

function largestNumber(nums) {
  // Custom comparator function for sorting
  const comparator = (a, b) => {
    const order1 = `${a}${b}`;
    const order2 = `${b}${a}`;
    return order2 - order1; // Compare in descending order
  };

  // Sort the array based on the comparator
  nums.sort(comparator);

  // If the largest number is 0, return "0" (special case)
  if (nums[0] === 0) {
    return "0";
  }

  // Concatenate the sorted numbers to form the largest number
  return nums.join("");
}

// Example usage:
const arr = [3, 30, 34, 5, 9];
console.log(largestNumber(arr)); // Output should be "9534330"
