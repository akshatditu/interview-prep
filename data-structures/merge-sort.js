function mergeSort(arr) {
  // Base case: If the array has 0 or 1 element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const middle = Math.floor(arr.length / 2);

  // Split the array into two halves
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  // Recursively sort the left and right halves
  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and push the smaller element to the result array
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Push remaining elements from leftArr to result (if any)
  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex++;
  }

  // Push remaining elements from rightArr to result (if any)
  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Example usage:
const arr = [7, 2, 1, 6, 8, 5, 3, 4];
console.log("Original array:", arr);
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);
