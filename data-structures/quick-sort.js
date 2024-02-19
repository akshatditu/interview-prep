function quickSort(arr) {
  // Base case: If the array has 0 or 1 element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element (usually the last element)
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  // Partition the array into two sub-arrays
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  // Recursively sort the left and right sub-arrays
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Example usage:
const arr = [7, 2, 1, 6, 8, 5, 3, 4];
console.log("Original array:", arr);
const sortedArr = quickSort(arr);
console.log("Sorted array:", sortedArr);
