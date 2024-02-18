// Group all 1s together in minimum number of swaps

function minSwaps(arr) {
  let maxCountOne = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      maxCountOne++;
    }
  }
  let i = 0;
  let j = 0;
  let currCountOne = 0;
  let maxCurrCountOne = 0;
  while (j < arr.length) {
    if (arr[j] == 1) {
      currCountOne++;
    }
    if (j - i + 1 === maxCountOne) {
      maxCurrCountOne = Math.max(maxCurrCountOne, currCountOne);
      if (arr[i] === 1) {
        currCountOne--;
      }
      i++;
    }
    j++;
  }
  return maxCountOne - maxCurrCountOne;
}

console.log(minSwaps([1, 0, 1, 0, 1, 1]));
console.log(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0]));
