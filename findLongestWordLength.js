// This function returns the size of the largest word
let findLongestWordLength = str => str.split(" ").map(arr => arr.length).sort((a, b) => a - b).pop()
