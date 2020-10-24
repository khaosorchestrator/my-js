// This function return the largest number of the four nested array
let largestOfFour = arr => arr.map(arr => arr.reduce((prev, curr) => (prev > curr) ? prev : curr))
