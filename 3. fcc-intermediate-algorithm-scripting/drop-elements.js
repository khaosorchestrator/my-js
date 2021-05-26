function dropElements(arr, fn) {
  while(arr.length){
    if (fn(arr[0])) {
      return arr
    }
    arr.shift()
  }
  return arr
}
