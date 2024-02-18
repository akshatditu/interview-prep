function nextGreaterElements(nums) {
  const n = nums.length;
  const stack = [];
  let result = Array(n).fill(-1);

  for (let i = 0; i < n * 2; i++) {
    let index = i % n;
    while (stack.length > 0 && nums[index] > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = nums[index];
    }
    stack.push(index);
  }
  return result;
}

const arr = [1, 2, 1];
console.log(nextGreaterElements(arr));
