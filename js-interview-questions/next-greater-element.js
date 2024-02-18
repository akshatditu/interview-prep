function nextGreaterElement(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return result;
}

// Example usage:
const arr = [4, 2, 6, 8, 1, 3, 5];
console.log(nextGreaterElement(arr)); // Output should be [6, 6, 8, -1, 3, 5, -1]

// This nextGreaterElement function takes an array nums as input and returns an array where each element
//  represents the next greater element in the array. It initializes the result array with -1 and uses a stack
//  to keep track of indices for which the next greater element is yet to be found. It iterates over the array
//  and compares elements with the top element of the stack. If an element is greater than the element at the
//   index stored in the stack, it updates the result accordingly. Finally, it returns the result array.
