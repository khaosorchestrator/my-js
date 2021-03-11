function chunkArrayInGroups(arr, size) {
  let array = []

  for (let i = 0; i < arr.length + 1; i++) {
    while(i) {
      array.push(arr.splice(0, size))
      i--
    } 
  }

  return array
}

let arr = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(arr)