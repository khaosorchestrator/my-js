let rot13Alphabet = {
  A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", K: "X", L: "Y", 
  M: "Z",N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M"
}

let rot13 = str => [...str].map(x => rot13Alphabet[x] !== undefined ? rot13Alphabet[x] : x).join("")


let value = rot13("SERR YBIR?");

console.log(value)
