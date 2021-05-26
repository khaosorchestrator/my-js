let uniteUnique = (...arr) => 
  arr
    .flat()
    .filter((num, index, array) => 
      array
        .indexOf(num) == index)

let arr = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
