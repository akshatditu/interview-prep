function largestSum(arr) {
  let maxSum = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
    if (temp < 0) {
      temp = 0;
    }
    maxSum = Math.max(maxSum, temp);
  }
  return maxSum;
}

console.log(largestSum([1, -2, 1, 3, -6, 4, 4]));
