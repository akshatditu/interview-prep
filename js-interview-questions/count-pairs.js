// Given an array of distinct positive integers arr[] of length N,
// the task is to count all the number of pairs of indices (i,j) such that a[j]-a[i]=j-i, given that i<j

function countPairs(arr) {
  const hashMap = {}; // Create a hashmap to store differences and their frequencies
  let count = 0; // Initialize count of valid pairs

  // Iterate over the array
  for (let i = 0; i < arr.length; i++) {
    const diff = arr[i] - i; // Calculate the difference

    // Check if the hashmap already has the difference
    if (hashMap[diff]) {
      count += hashMap[diff]; // Increment count by the frequency of the difference
    }

    // Increment the frequency of the difference in the hashmap
    hashMap[diff] = (hashMap[diff] || 0) + 1;
  }

  return count;
}

// Example usage:
const arr = [4, 5, 1, 2, 3];
console.log(countPairs(arr)); // Output should be 3
