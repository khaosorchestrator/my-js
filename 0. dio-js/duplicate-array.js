function duplicateArray (arr, n) {
  let newArray = [];
  
  while (n > 0) {
    newArray[n - 1] = [...arr]
    n--;
  }
  
  return newArray;
}
