function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b)
  let newArr = []

  for (let i = min; i <= max; i++) {
    newArr.push(i)
  }

  const maxCommonMultiple = newArr.reduce((prod, curr) => prod * curr)

  for (let multiple = max; multiple <= maxCommonMultiple; multiple += max) {
    const divisible = newArr.every(num => !(multiple % num))
    if (divisible) {
      return multiple
    }
  }
}
