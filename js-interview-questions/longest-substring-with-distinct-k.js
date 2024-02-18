function longestSubstringWithKDistinct(str, K) {
  const charMap = new Map(); // Create a map to store characters and their frequencies
  let maxSubstringLength = 0; // Initialize the length of the longest substring
  let left = 0; // Initialize the left pointer of the sliding window

  // Iterate over the string using the right pointer of the sliding window
  for (let right = 0; right < str.length; right++) {
    const char = str[right];

    // Update the frequency of the current character in the map
    charMap.set(char, (charMap.get(char) || 0) + 1);

    // Shrink the window from the left side if the number of distinct characters exceeds K
    while (charMap.size > K) {
      const leftChar = str[left];
      charMap.set(leftChar, charMap.get(leftChar) - 1);
      if (charMap.get(leftChar) === 0) {
        charMap.delete(leftChar);
      }
      left++;
    }

    // Update the length of the longest substring
    maxSubstringLength = Math.max(maxSubstringLength, right - left + 1);
  }

  return maxSubstringLength;
}

// Example usage:
const str = "abbbbbbc";
const K = 2;
console.log(longestSubstringWithKDistinct(str, K)); // Output should be 7
