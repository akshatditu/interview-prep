// Given n cakes, where each cake has a sweetness related to it. Find minimum number of cakes such that sum
// of total sweetness is as close as possible to K without exceeding it.

function findCake(arr, K) {
  let start = 0;
  let end = 0;
  let diff = Infinity;
  let sum = 0;
  let minLen = Infinity;
  while (start < arr.length) {
    if (sum <= K && end < arr.length) {
      sum += arr[end];
      end++;
    } else {
      sum -= arr[start];
      start++;
    }
    if (diff > K - sum && K - sum >= 0) {
      diff = K - sum;
      minLen = end - start;
    }
  }
  return minLen;
}

console.log(findCake([20, 3, 5, 7, 4, 8], 20));
