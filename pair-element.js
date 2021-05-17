const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
}

function pairElement(str) {
  return [...str].map(value => [value, pairs[value]])
}


let value = pairElement("ATCGA");
console.log(value)
