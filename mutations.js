function mutation(arr) {
  let [ firstArr, secArr ] = arr;
  let count = 0;

  firstArr = firstArr.toLowerCase();
  secArr = secArr.toLowerCase();

  for (let i = 0; i < secArr.length; i++) {
    for (let j = 0; j < firstArr.length; j++) {
      if (secArr[i] == firstArr[j]) {
        count++
        if (count == secArr.length) return true
      }
    }
    if (count == 0) return false
  }
  return false
}

mutation(["hello", "hey"]);