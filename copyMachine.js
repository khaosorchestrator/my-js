function copyMachine(array, n) {
  let newArray = [];
  
  while (n >= 1) {
    newArray[n - 1] = [...array]
    n--;
  }
  
  return newArray;
}
