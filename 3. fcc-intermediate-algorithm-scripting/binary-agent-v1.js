function binaryAgent(str) {
  let splitStr = str.split(" ")
  str = ''

  for (let i = 0; i < splitStr.length; i++){
    str += String.fromCharCode(parseInt(splitStr[i], 2))
  }

  return str
}
