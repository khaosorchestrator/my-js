function duplicateArray (array, n) {
  let newArray = [];
  
  while (n > 0) {
    newArray[n - 1] = [...array]
    n--;
  }
  
  return newArray;
}
