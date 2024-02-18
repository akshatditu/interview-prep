function groupAnagrams(strings) {
  const groupMap = new Map();
  for (const str of strings) {
    const sortedStr = str.split("").sort().join("");
    if (groupMap[sortedStr]) {
      groupMap[sortedStr].push(str);
    } else {
      groupMap[sortedStr] = [str];
    }
  }
  return Object.values(groupMap);
}

const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strings));
