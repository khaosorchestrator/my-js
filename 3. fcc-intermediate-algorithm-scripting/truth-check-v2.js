let truthCheck = (collection, pre) => 
  collection
    .every(obj => obj
      .hasOwnProperty(pre) && Boolean(obj[pre]))

let value = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
console.log(value)
