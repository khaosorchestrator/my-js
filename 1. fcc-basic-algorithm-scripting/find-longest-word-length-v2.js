// This function returns the size of the largest word
let findLongestWordLength = str =>
  str
    .split(' ')
    .reduce((curr, prev) => (curr.length > prev.length ? curr : prev)).length;
