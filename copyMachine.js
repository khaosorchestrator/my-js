function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr[num - 1] = [...arr]
    num--;
  }
  return newArr;
}
