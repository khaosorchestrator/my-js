function truthCheck(collection, pre) {
  let count = 0

  for (let obj of collection) {
    if(obj[pre]) count++
  }

  return count === collection.length
}

let value = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
console.log(value)
