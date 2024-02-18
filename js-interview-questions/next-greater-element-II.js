function nextGreaterElement(arr) {
  const n = arr.length;
  let result = Array(n).fill(-1);
  const stack = [];
  for (let j = n * 2 - 1; j >= 0; j--) {
    let index = j % n;
    while (stack.length > 0) {
      if (arr[index] >= arr[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        result[index] = arr[stack[stack.length - 1]];
        break;
      }
    }
    stack.push(index);
  }
  return result;
}

//alternative

// function nextGreaterElements(nums) {
//     const n = nums.length;
//     const stack = [];
//     let result = Array(n).fill(-1);

//     for (let i = 0; i < n * 2; i++) {
//       let index = i % n;
//       while (stack.length > 0 && nums[index] > nums[stack[stack.length - 1]]) {
//         result[stack.pop()] = nums[index];
//       }
//       stack.push(index);
//     }
//     return result;
//   }

//   const arr = [1, 2, 1];
//   console.log(nextGreaterElements(arr));

// Example usage:
const arr = [4, 2, 6, 8, 1, 3, 5];
console.log(nextGreaterElement(arr)); // Output should be [6, 6, 8, -1, 3, 5, -1]

// This nextGreaterElement function takes an array nums as input and returns an array where each element
//  represents the next greater element in the array. It initializes the result array with -1 and uses a stack
//  to keep track of indices for which the next greater element is yet to be found. It iterates over the array
//  and compares elements with the top element of the stack. If an element is greater than the element at the
//   index stored in the stack, it updates the result accordingly. Finally, it returns the result array.
