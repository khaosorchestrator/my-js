function fearNotLetter(str) {
  let begin = str.charCodeAt(0)
  let end = str.charCodeAt(str.length-1)

  for (let i = begin; i <= end; i++) {
    if (!str.includes(String.fromCharCode(i))) {
      str = String.fromCharCode(i)
      return str
    }
  }
}

let testStr = fearNotLetter("stvwx");

console.log(testStr)
