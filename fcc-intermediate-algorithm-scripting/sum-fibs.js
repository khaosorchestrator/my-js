let sumFibs = n => {
  let arr = [0, 1]

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  
  return arr.filter(num => num % 2 && num <= n).reduce((acm, acv) => acm + acv)
}

console.log(sumFibs(10))
