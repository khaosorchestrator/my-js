const arr = [11, 15, 3, 13, 10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98]

function sortPairAndOddTogether(arr) {
  let arr1 = arr.filter((element) => element % 2 == 0).sort((a, b) => a - b) // Filter the pairs and sort in ascending order. 
  let arr2 = arr.filter((element) => element % 2 != 0).sort((a, b) => b - a) // Filter the odd and sort in descending order.
  
  return [...arr1, ...arr2].map((element) => console.log(element))
}
