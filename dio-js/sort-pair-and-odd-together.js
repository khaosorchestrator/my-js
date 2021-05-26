function sortPairAndOddTogether(arr) {
  let arr1 = arr.filter((element) => element % 2 == 0).sort((a, b) => a - b) // Filter the pairs and sort in ascending order. 
  let arr2 = arr.filter((element) => element % 2 != 0).sort((a, b) => b - a) // Filter the odd and sort in descending order.
  
  return [...arr1, ...arr2]
}
