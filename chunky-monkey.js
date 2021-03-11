function chunkArrayInGroups(arr, size) {
  let array = [];

  for (let i = 0; i < arr.length + 1; i++) {
    while (i) {
      array.push(arr.splice(0, size));
      i--;
    }
  }

  return array;
}
