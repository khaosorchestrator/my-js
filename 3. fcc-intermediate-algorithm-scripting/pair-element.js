const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
}

let pairElement = str =>
  [...str]
    .map(value => [value, pairs[value]])


let value = pairElement("ATCGA");
console.log(value)
