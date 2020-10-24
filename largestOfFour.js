// This function return the largest number of the four nest array
let largestOfFour = arr => arr.map(arr => arr.reduce((prev, curr) => (prev > curr) ? prev : curr))
